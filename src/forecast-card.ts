/**
 * Animated Weather Forecast Card
 *
 * The forecast from a weather entity, hourly or daily, under the same sky
 * as the weather card: each slot's time, a glyph for its weather, the day's
 * or the hour's high and low as two lines you can follow across the card,
 * and the chance of rain where the forecast gives one. The sky follows the
 * entity's condition now and the sun's real elevation.
 */

import { HomeAssistant, HassEntity } from './types';
import type { ForecastEntry } from './note-generator';
import { iconBoxCss } from './styles/icon-box';
import { localizeString, localeKey, formatTime, timeHtml, cardLanguage } from './localize';
import { escapeHtml, formatLocalizedNumber, getWeatherClass } from './utils';
import { conditionName } from './weather-data';
import { ActionConfig, ActionsConfig, bindActions, readActions, syncActionTarget } from './actions';
import { loadEditorBundle } from './bundles';
import { FORECAST_DEFAULT_SLOTS, FORECAST_MAX_SLOTS } from './constants';
import { GLYPH_DEFS, GlyphKind, glyphKind, weatherGlyph } from './weather-glyphs';
import {
    skyColors, skyPhaseFromSun, oklchToSrgb, toHex, registerSkyProperties, SKY_CONDITIONS,
    type SkyCondition, type SkyPhase,
    SKY_TEXT, SKY_TEXT_SECONDARY_ALPHA, SKY_GLOW_FORECAST, skyGlowGradient,
    SKY_COLOR_PROPERTIES, SKY_DISSOLVE_SEC, SKY_DISSOLVE_EASE,
} from './sky';

export type ForecastKind = 'daily' | 'hourly';

export interface ForecastCardConfig {
    /** The weather entity the forecast comes from */
    entity?: string;
    /** Daily (the default) or hourly */
    forecast_type?: ForecastKind;
    /** The most slots to show; fewer when the card is too narrow for them */
    forecast_slots?: number;
    /** Sets the sky's time of day (default: sun.sun) */
    sun_entity?: string;
    title?: string;
    show_header?: boolean;
    show_precipitation?: boolean;
    /** The glyphs' gentle motion (default: on, still with reduced motion) */
    animate?: boolean;
    color_palette?: 'default' | 'theme';
    /** What a tap does (default: the weather entity's more-info dialog) */
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    type?: string;
}

export const DEFAULT_SLOTS: Record<ForecastKind, number> = FORECAST_DEFAULT_SLOTS;
export const MAX_SLOTS = FORECAST_MAX_SLOTS;
/** A slot is never narrower than this: "12 PM", "Heute" and "-12°" fit, a glyph reads. */
export const SLOT_MIN_WIDTH = 46;
/** The card's side padding, which the slots' columns sit inside. */
const PADDING_X = 20;
/** A chance of rain below this isn't worth a number in the row. */
export const CHANCE_SHOWN_FROM = 10;
/** A range narrower than this is drawn at this size, so a steady day reads as steady. */
const MIN_SPAN = 4;

/** Which `supported_features` bit says the entity has each forecast. */
const FEATURE_BIT: Record<ForecastKind, number> = { daily: 1, hourly: 2 };

/** One column of the card. */
export interface ForecastSlot {
    datetime: string;
    time: number;
    condition?: string;
    kind: GlyphKind;
    night: boolean;
    high: number | null;
    low: number | null;
    /** Chance of precipitation, in percent */
    chance: number | null;
    /** Expected amount, in the entity's precipitation unit */
    amount: number | null;
    /** The hour or the day under way */
    current: boolean;
}

const num = (value: unknown): number | null =>
    typeof value === 'number' && isFinite(value) ? value : null;

const HOUR_MS = 3_600_000;

const startOfDay = (t: number): number => {
    const d = new Date(t);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
};

/**
 * The slots to draw from a forecast: what's still to come (the hour or the
 * day under way included), in order, at most `limit`. `nightAt` says
 * whether an hour is after dark, for hourly entries that don't say
 * themselves (`is_daytime`).
 */
export function readSlots(
    entries: ForecastEntry[] | null | undefined,
    kind: ForecastKind,
    now: number,
    limit: number,
    nightAt: (time: number) => boolean = () => false,
): ForecastSlot[] {
    const today = startOfDay(now);
    const slots: ForecastSlot[] = [];
    const timed = (entries ?? [])
        .map(entry => ({ entry, time: Date.parse(entry?.datetime) }))
        .filter(({ time }) => !isNaN(time))
        .sort((a, b) => a.time - b.time);
    for (const { entry, time } of timed) {
        if (slots.length >= limit) break;
        const current = kind === 'hourly' ? time <= now && now < time + HOUR_MS : startOfDay(time) === today;
        const past = kind === 'hourly' ? time + HOUR_MS <= now : startOfDay(time) < today;
        if (past) continue;
        const night = kind === 'hourly'
            ? (typeof entry.is_daytime === 'boolean' ? !entry.is_daytime : nightAt(time + HOUR_MS / 2))
            : false;
        slots.push({
            datetime: entry.datetime,
            time,
            condition: entry.condition,
            kind: glyphKind(entry.condition),
            night: night || entry.condition === 'clear-night',
            high: num(entry.temperature),
            low: num(entry.templow),
            chance: num(entry.precipitation_probability),
            amount: num(entry.precipitation),
            current,
        });
    }
    return slots;
}

/** How many slots fit across a card of this width, never more than asked for. */
export function slotsThatFit(width: number, wanted: number): number {
    if (!(width > 0)) return wanted;
    return Math.max(1, Math.min(wanted, Math.floor((width - 2 * PADDING_X) / SLOT_MIN_WIDTH)));
}

/** The temperatures' range, at least MIN_SPAN wide, so the lines use the chart's height honestly. */
export function temperatureRange(slots: ForecastSlot[]): { lo: number; hi: number } | null {
    const values = slots.flatMap(s => [s.high, s.low]).filter((v): v is number => v !== null);
    if (!values.length) return null;
    let lo = Math.min(...values);
    let hi = Math.max(...values);
    if (hi - lo < MIN_SPAN) {
        const mid = (hi + lo) / 2;
        lo = mid - MIN_SPAN / 2;
        hi = mid + MIN_SPAN / 2;
    }
    return { lo, hi };
}

type Point = { x: number; y: number };

/**
 * A smooth line through points, as SVG path commands after the first
 * point: monotone cubic (Fritsch–Carlson), so the curve never overshoots
 * a temperature it doesn't reach, and a flat stretch stays flat.
 */
export function monotoneSegments(points: Point[]): string {
    const n = points.length;
    if (n < 2) return '';
    const f = (v: number) => +v.toFixed(2);
    const dx: number[] = [];
    const slope: number[] = [];
    for (let i = 0; i < n - 1; i++) {
        dx.push(points[i + 1].x - points[i].x);
        slope.push((points[i + 1].y - points[i].y) / dx[i]);
    }
    const tangent: number[] = [slope[0]];
    for (let i = 1; i < n - 1; i++) {
        tangent.push(slope[i - 1] * slope[i] <= 0 ? 0 : (slope[i - 1] + slope[i]) / 2);
    }
    tangent.push(slope[n - 2]);
    for (let i = 0; i < n - 1; i++) {
        if (slope[i] === 0) {
            tangent[i] = 0;
            tangent[i + 1] = 0;
            continue;
        }
        const a = tangent[i] / slope[i];
        const b = tangent[i + 1] / slope[i];
        const h = Math.hypot(a, b);
        if (h > 3) {
            tangent[i] = (3 / h) * a * slope[i];
            tangent[i + 1] = (3 / h) * b * slope[i];
        }
    }
    let d = '';
    for (let i = 0; i < n - 1; i++) {
        const p = points[i];
        const q = points[i + 1];
        const third = dx[i] / 3;
        d += `C${f(p.x + third)},${f(p.y + tangent[i] * third)} ${f(q.x - third)},${f(q.y - tangent[i + 1] * third)} ${f(q.x)},${f(q.y)}`;
    }
    return d;
}

/** Runs of consecutive slot indices where `has` holds, split wherever it doesn't. */
export function indexRuns(count: number, has: (index: number) => boolean): number[][] {
    const out: number[][] = [];
    let run: number[] = [];
    for (let i = 0; i < count; i++) {
        if (has(i)) run.push(i);
        else if (run.length) { out.push(run); run = []; }
    }
    if (run.length) out.push(run);
    return out;
}

const pathOf = (run: Point[]): string =>
    run.length < 2 ? '' : `M${+run[0].x.toFixed(2)},${+run[0].y.toFixed(2)}${monotoneSegments(run)}`;

// Chart geometry, in SVG user units; the SVG stretches to the plot
const VW = 1000;
const VH = 100;

// Sky colors cross-fade with the weather card's (registered <color> properties)
registerSkyProperties();

const SKY_TEXT_HEX = toHex(oklchToSrgb(SKY_TEXT));

const STYLES = `
${iconBoxCss('')}
    :host {
        display: block;
        height: 100%;
        --fc-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
    }
    ha-card {
        height: 100%;
        overflow: hidden;
    }
    ha-card.sky {
        background: none;
        border-color: transparent;
    }
    .fc-defs { position: absolute; width: 0; height: 0; overflow: hidden; }

    .fc-card {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 18px ${PADDING_X}px 16px;
        container: fc / inline-size;
        font-family: var(--fc-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--fc-text);
        /* Theme palette: the theme's text, the high line in its primary
           color and the low in its secondary text color; the sun in Home
           Assistant's sun color, the rest of the weather in its icon color */
        --fc-text: var(--primary-text-color);
        --fc-secondary: var(--secondary-text-color);
        --fc-secondary-opacity: 1;
        --fc-high: var(--primary-color);
        --fc-low: var(--secondary-text-color);
        --fc-band: var(--primary-color);
        --fc-band-opacity: 0.08;
        --fc-sun-core: var(--state-sun-above_horizon-color, #ffc107);
        --fc-sun-mid: var(--state-sun-above_horizon-color, #ffc107);
        --fc-sun-rim: var(--state-sun-above_horizon-color, #ffc107);
        --fc-sun-halo: transparent;
        --fc-moon-light: var(--secondary-text-color);
        --fc-moon-shade: var(--secondary-text-color);
        --fc-moon-halo: transparent;
        --fc-cloud-top: var(--state-icon-color, var(--secondary-text-color));
        --fc-cloud-bottom: var(--state-icon-color, var(--secondary-text-color));
        --fc-cloud-back-opacity: 0.45;
        --fc-storm-top: var(--secondary-text-color);
        --fc-storm-bottom: var(--secondary-text-color);
        --fc-rain: var(--primary-color);
        --fc-snow: var(--secondary-text-color);
        --fc-bolt: var(--warning-color, #ffa600);
        --fc-air: var(--secondary-text-color);
    }

    /* Colorized: the weather card's sky, and weather drawn in its light */
    .fc-card.sky {
        --fc-text: ${SKY_TEXT_HEX};
        --fc-secondary: ${SKY_TEXT_HEX};
        --fc-secondary-opacity: ${SKY_TEXT_SECONDARY_ALPHA};
        --fc-high: rgba(255, 232, 180, 0.95);
        --fc-low: rgba(206, 222, 255, 0.72);
        --fc-band: #ffffff;
        --fc-band-opacity: 0.1;
        --fc-sun-core: #fffaf0;
        --fc-sun-mid: #ffe3a3;
        --fc-sun-rim: #ffb547;
        --fc-sun-halo: #ffc86e;
        --fc-moon-light: #ffffff;
        --fc-moon-shade: #c9d2e6;
        --fc-moon-halo: #c8d6ff;
        --fc-cloud-top: #ffffff;
        --fc-cloud-bottom: #d9e2f0;
        --fc-cloud-back-opacity: 0.55;
        --fc-storm-top: #d3d9e4;
        --fc-storm-bottom: #8f9aae;
        --fc-rain: #b8dcff;
        --fc-snow: #ffffff;
        --fc-bolt: #ffd56b;
        --fc-air: rgba(255, 255, 255, 0.85);
        background:
            ${skyGlowGradient(SKY_GLOW_FORECAST, 'var(--awc-sky-glow)')},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${SKY_COLOR_PROPERTIES.map(name => `${name} ${SKY_DISSOLVE_SEC}s ${SKY_DISSOLVE_EASE}`).join(', ')};
    }

    /* ── Header ── */
    .fc-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        min-width: 0;
        margin-bottom: 12px;
        flex-shrink: 0;
    }
    .fc-title {
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.01em;
        opacity: 0.94;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .fc-eyebrow {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }
    .fc-eyebrow ha-icon {
        --mdc-icon-size: 13px;
        margin-top: -0.5px;
        flex-shrink: 0;
    }
    .fc-card:not(.sky) .fc-eyebrow ha-icon { color: var(--state-icon-color, var(--primary-color)); }

    /* ── Slots: one column each, the same columns in every row ── */
    .fc-row {
        display: grid;
        grid-template-columns: repeat(var(--fc-n, 7), minmax(0, 1fr));
        text-align: center;
        flex-shrink: 0;
    }
    /* The time sits in the sun's glow on the right, so it's full-strength text */
    .fc-when {
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
    }
    .fc-when.current { font-weight: 650; }
    .fc-ampm { font-size: 0.8em; margin-left: 0.12em; }
    .fc-glyphs { margin-top: 6px; }
    .fc-glyph-box {
        display: flex;
        justify-content: center;
    }
    .fc-glyph {
        display: block;
        width: 30px;
        height: 30px;
        overflow: visible;
    }

    /* ── The glyphs' parts ── */
    .g-cloud.back { opacity: var(--fc-cloud-back-opacity); }
    .g-drop {
        stroke: var(--fc-rain);
        stroke-width: 1.7;
        stroke-linecap: round;
    }
    .g-drop.heavy { stroke-width: 2; }
    .g-flake {
        stroke: var(--fc-snow);
        stroke-width: 1.3;
        stroke-linecap: round;
        fill: none;
    }
    .g-pellet { fill: var(--fc-snow); }
    .g-bolt { fill: var(--fc-bolt); }
    .g-fog,
    .g-wind {
        fill: none;
        stroke: var(--fc-air);
        stroke-width: 1.8;
        stroke-linecap: round;
    }
    .g-star { fill: var(--fc-moon-light); }
    .g-halo, .g-cloud, .g-drop, .g-flake, .g-pellet, .g-star, .g-fog, .g-wind {
        transform-box: fill-box;
        transform-origin: center;
    }

    /* Motion is weather: drops fall, flakes drift, the cloud breathes with
       the wind. Slow and small, behind the numbers. */
    @keyframes fc-fall {
        0% { transform: translateY(-1.5px); opacity: 0; }
        25% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(2.5px); opacity: 0; }
    }
    @keyframes fc-drift {
        0% { transform: translate(0, -1.5px) rotate(0deg); opacity: 0; }
        25% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translate(-0.8px, 2px) rotate(60deg); opacity: 0; }
    }
    @keyframes fc-sway { from { transform: translateX(-0.6px); } to { transform: translateX(0.6px); } }
    @keyframes fc-breathe { from { transform: scale(0.92); opacity: 0.8; } to { transform: scale(1.04); opacity: 1; } }
    @keyframes fc-twinkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    @keyframes fc-flash { 0%, 86%, 92%, 100% { opacity: 1; } 88%, 95% { opacity: 0.35; } }
    @keyframes fc-gust { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -48; } }
    @keyframes fc-roll { from { transform: translateX(-1.2px); } to { transform: translateX(1.2px); } }

    .fc-card.moving .g-drop { animation: fc-fall 1.1s linear infinite; }
    .fc-card.moving .g-drop.heavy { animation-duration: 0.8s; }
    .fc-card.moving .g-flake { animation: fc-drift 2.8s linear infinite; }
    .fc-card.moving .g-pellet { animation: fc-fall 0.9s linear infinite; }
    .fc-card.moving .g-cloud { animation: fc-sway 5s ease-in-out infinite alternate; }
    .fc-card.moving .g-cloud.back { animation-duration: 7s; animation-direction: alternate-reverse; }
    .fc-card.moving .g-halo { animation: fc-breathe 4.5s ease-in-out infinite alternate; }
    .fc-card.moving .g-star { animation: fc-twinkle 3.2s ease-in-out infinite; }
    .fc-card.moving .g-bolt { animation: fc-flash 5s linear infinite; }
    .fc-card.moving .g-fog { animation: fc-roll 4s ease-in-out infinite alternate; }
    .fc-card.moving .g-wind { stroke-dasharray: 16 8; animation: fc-gust 3s linear infinite; }
    .fc-card.paused * { animation-play-state: paused !important; }
    @media (prefers-reduced-motion: reduce) {
        .fc-card.moving * { animation: none !important; }
    }

    /* ── Temperatures: the high and low as two lines across the slots ── */
    .fc-chart {
        position: relative;
        flex: 1 1 104px;
        min-height: 72px;
        /* A tall frame gives the lines room, not a mountain range */
        max-height: 168px;
        margin: 4px 0;
    }
    .fc-plot {
        position: absolute;
        /* Room above for the highs' numbers and below for the lows' */
        inset: 22px 0 22px;
    }
    .fc-chart.single .fc-plot { inset: 22px 0 8px; }
    .fc-plot svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    .fc-band { fill: var(--fc-band); opacity: var(--fc-band-opacity); }
    .fc-line {
        fill: none;
        stroke-width: 2.25;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }
    .fc-line.high { stroke: var(--fc-high); }
    .fc-line.low { stroke: var(--fc-low); }
    .fc-dot {
        position: absolute;
        width: 6px;
        height: 6px;
        margin: -3px 0 0 -3px;
        border-radius: 50%;
    }
    .fc-dot.high { background: var(--fc-high); }
    .fc-dot.low { background: var(--fc-low); }
    /* The hour or day under way: its dots ringed */
    .fc-dot.current { box-shadow: 0 0 0 2.5px rgba(255, 255, 255, 0.28); }
    .fc-card:not(.sky) .fc-dot.current { box-shadow: 0 0 0 2.5px var(--divider-color, rgba(0, 0, 0, 0.12)); }
    .fc-temp {
        position: absolute;
        transform: translate(-50%, calc(-100% - 6px));
        font-size: 15px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: -0.01em;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
    }
    /* The low reads below its line, in the quiet tier: the two never rely on color alone */
    .fc-temp.low {
        transform: translate(-50%, 6px);
        font-size: 13px;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }

    /* ── Precipitation ── */
    .fc-wet {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        min-height: 16px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }
    .fc-wet svg { width: 8px; height: 10px; flex-shrink: 0; fill: var(--fc-rain); }
    .fc-card.sky .fc-wet svg { fill: currentColor; }

    /* Fit to the frame, stepped down until nothing overflows (see _fit) */
    .fc-card[data-fit="short"] .fc-head { display: none; }
    .fc-card[data-fit="tight"] .fc-head { display: none; }
    .fc-card[data-fit="tight"] { padding-block: 12px 10px; }
    .fc-card[data-fit="tight"] .fc-glyph { width: 24px; height: 24px; }
    .fc-card[data-fit="tight"] .fc-glyphs { margin-top: 2px; }
    .fc-card[data-fit="tight"] .fc-chart { min-height: 56px; }
    .fc-card[data-fit="tight"] .fc-plot { inset: 19px 0 19px; }

    @container fc (min-width: 640px) {
        .fc-when { font-size: 14px; }
        .fc-glyph { width: 34px; height: 34px; }
        .fc-temp { font-size: 17px; line-height: 18px; }
        .fc-temp.low { font-size: 14px; }
        .fc-wet { font-size: 13px; }
    }

    .fc-no-data {
        margin: auto;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
        border: 0;
    }
`;

/** A raindrop for the precipitation row. */
const DROP = '<svg viewBox="0 0 8 10" aria-hidden="true"><path d="M4 0.6C4 0.6 0.8 4.6 0.8 6.6a3.2 3.2 0 0 0 6.4 0C7.2 4.6 4 0.6 4 0.6Z"/></svg>';

class AnimatedWeatherForecastCard extends HTMLElement {
    private config: ForecastCardConfig = {};
    private _hass?: HomeAssistant;
    private _shadow: ShadowRoot;
    private _forecast: ForecastEntry[] | null = null;
    /** What the forecast subscription is for ("entity|type"), so it's opened once */
    private _subscribedTo = '';
    private _subscription?: Promise<() => void>;
    private _clock?: ReturnType<typeof setInterval>;
    private _resizeObserver?: ResizeObserver;
    private _intersection?: IntersectionObserver;
    /** The slots that fit the card's width, from the last measure */
    private _fitSlots = 0;
    private _content = '';
    private _seen: { entity?: HassEntity; sun?: HassEntity; locale?: string } = {};

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: 'open' });
    }

    setConfig(config: ForecastCardConfig): void {
        if (!config.entity) {
            throw new Error('Please define a weather entity (e.g. weather.forecast_home)');
        }
        if (config.forecast_type !== undefined && config.forecast_type !== 'daily' && config.forecast_type !== 'hourly') {
            throw new Error('forecast_type must be daily or hourly');
        }
        const changedSource = config.entity !== this.config.entity || config.forecast_type !== this.config.forecast_type;
        this.config = { ...config };
        if (changedSource) {
            this._unsubscribe();
            this._forecast = null;
        }
        this._content = '';
        this._subscribe();
        this._render();
    }

    set hass(hass: HomeAssistant) {
        const old = this._hass;
        this._hass = hass;
        if (old?.connection !== hass.connection) this._unsubscribe();
        this._subscribe();
        // Home Assistant replaces a state object when it changes, so this
        // skips the updates that are about other entities
        const entity = hass.states[this.config.entity || ''];
        const sun = hass.states[this._sunId()];
        const locale = localeKey(hass);
        if (entity === this._seen.entity && sun === this._seen.sun && locale === this._seen.locale) return;
        this._seen = { entity, sun, locale };
        this._render();
    }

    connectedCallback(): void {
        // Hours and days roll over with the clock, not with Home Assistant
        if (!this._clock) this._clock = setInterval(() => this._render(), 60_000);
        if (!this._resizeObserver && typeof ResizeObserver !== 'undefined') {
            this._resizeObserver = new ResizeObserver(() => this._fit());
            this._resizeObserver.observe(this);
        }
        // The glyphs hold still while the card is off screen
        if (!this._intersection && typeof IntersectionObserver !== 'undefined') {
            this._intersection = new IntersectionObserver(([entry]) => {
                this._shadow.querySelector('.fc-card')?.classList.toggle('paused', !entry.isIntersecting);
            });
            this._intersection.observe(this);
        }
        this._subscribe();
    }

    disconnectedCallback(): void {
        if (this._clock) clearInterval(this._clock);
        this._clock = undefined;
        this._resizeObserver?.disconnect();
        this._resizeObserver = undefined;
        this._intersection?.disconnect();
        this._intersection = undefined;
        this._unsubscribe();
    }

    private _kind(): ForecastKind {
        return this.config.forecast_type === 'hourly' ? 'hourly' : 'daily';
    }

    private _sunId(): string {
        return this.config.sun_entity || 'sun.sun';
    }

    /** The most slots the config asks for, within 1 and MAX_SLOTS. */
    private _wantedSlots(): number {
        const asked = Number(this.config.forecast_slots);
        if (!isFinite(asked) || asked < 1) return DEFAULT_SLOTS[this._kind()];
        return Math.min(MAX_SLOTS, Math.round(asked));
    }

    /** Whether the entity says it has this kind of forecast; true when it doesn't say. */
    private _supported(): boolean {
        const features = Number(this._hass?.states[this.config.entity || '']?.attributes?.supported_features);
        return !isFinite(features) || (features & FEATURE_BIT[this._kind()]) !== 0;
    }

    /**
     * Subscribe to the forecast (Home Assistant 2023.9 and later), once per
     * entity and kind. Older versions keep it in the entity's `forecast`
     * attribute, which the render reads when nothing has come in.
     */
    private _subscribe(): void {
        const hass = this._hass;
        const id = this.config.entity;
        if (!hass || !id || !this.isConnected || !hass.connection?.subscribeMessage) return;
        const target = `${id}|${this._kind()}`;
        if (this._subscribedTo === target) return;
        this._unsubscribe();
        if (!hass.states[id] || !this._supported()) return;
        this._subscribedTo = target;
        try {
            this._subscription = hass.connection.subscribeMessage<{ forecast?: ForecastEntry[] | null }>(message => {
                if (this._subscribedTo !== target) return;
                this._forecast = Array.isArray(message?.forecast) ? message.forecast : null;
                this._render();
            }, { type: 'weather/subscribe_forecast', entity_id: id, forecast_type: this._kind() });
            this._subscription.catch(() => { /* older Home Assistant: the attribute */ });
        } catch {
            this._subscription = undefined;
        }
    }

    private _unsubscribe(): void {
        this._subscription?.then(unsub => { if (typeof unsub === 'function') unsub(); }).catch(() => {});
        this._subscription = undefined;
        this._subscribedTo = '';
    }

    /** The gestures' actions, against the weather entity */
    private _actions(): ActionsConfig {
        return readActions(this.config as Record<string, unknown>, this.config.entity);
    }

    getCardSize(): number { return 4; }

    /** Sections view: full section width, four rows; three is the least it trims down to. */
    getGridOptions() {
        return { columns: 12, rows: 4, min_columns: 6, min_rows: 3 };
    }

    /** The editor comes in the editor bundle, loaded the first time it's needed */
    static async getConfigElement(): Promise<HTMLElement> {
        if (!customElements.get('animated-weather-forecast-editor')) await loadEditorBundle('animated-weather-forecast-editor');
        return document.createElement('animated-weather-forecast-editor');
    }

    /** A card from the card picker starts on your own weather entity. */
    static getStubConfig(hass?: HomeAssistant, entities: string[] = [], entitiesFallback: string[] = []): ForecastCardConfig {
        const ids = [...entities, ...entitiesFallback, ...Object.keys(hass?.states ?? {})];
        return { entity: ids.find(id => id.startsWith('weather.')) ?? 'weather.forecast_home' };
    }

    /** The sky now: the entity's condition, at the sun's time of day. */
    private _sky(): { condition: SkyCondition; phase: SkyPhase } {
        const sun = this._hass?.states[this._sunId()];
        const state = this._hass?.states[this.config.entity || '']?.state;
        const phase: SkyPhase = sun
            ? skyPhaseFromSun(typeof sun.attributes.elevation === 'number' ? sun.attributes.elevation : null, !!sun.attributes.rising, sun.state === 'above_horizon')
            : state === 'clear-night' ? 'night' : 'day';
        if (state && state !== 'unavailable' && state !== 'unknown') {
            const weatherClass = getWeatherClass(state, false, undefined, undefined, this._hass?.config?.time_zone);
            if ((SKY_CONDITIONS as readonly string[]).includes(weatherClass)) {
                // A clear sky is the night's once the sun is down, whatever the clock says
                if (weatherClass === 'sunny' || weatherClass === 'clear-night') {
                    return { condition: phase === 'night' ? 'clear-night' : 'sunny', phase };
                }
                return { condition: weatherClass as SkyCondition, phase };
            }
        }
        return { condition: phase === 'night' ? 'clear-night' : 'sunny', phase };
    }

    /**
     * Whether an hour is after dark, from the sun entity's next sunrise and
     * sunset (their time of day). Without a sun entity, 6 to 20 is day.
     */
    private _nightAt(): (time: number) => boolean {
        const sun = this._hass?.states[this._sunId()];
        const hourOf = (iso: unknown): number | null => {
            const t = typeof iso === 'string' ? Date.parse(iso) : NaN;
            if (isNaN(t)) return null;
            const d = new Date(t);
            return d.getHours() + d.getMinutes() / 60;
        };
        const rise = hourOf(sun?.attributes?.next_rising) ?? 6;
        const set = hourOf(sun?.attributes?.next_setting) ?? 20;
        return (time: number) => {
            const d = new Date(time);
            const h = d.getHours() + d.getMinutes() / 60;
            return rise < set ? (h < rise || h >= set) : (h >= set && h < rise);
        };
    }

    private _slotLabel(slot: ForecastSlot): string {
        const hass = this._hass;
        if (slot.current) return escapeHtml(localizeString(hass, this._kind() === 'hourly' ? 'now' : 'today'));
        if (this._kind() === 'daily') {
            try {
                return escapeHtml(new Intl.DateTimeFormat(cardLanguage(hass), { weekday: 'short' }).format(new Date(slot.time)));
            } catch {
                return escapeHtml(new Date(slot.time).toDateString().slice(0, 3));
            }
        }
        // "2 PM" rather than "2:00 PM": an hourly forecast is on the hour
        return timeHtml(formatTime(slot.datetime, hass).replace(/:00(?=\s?[AaPp])/, ''), 'fc-ampm');
    }

    private _degrees(value: number): string {
        return `${formatLocalizedNumber(Math.round(value), this._hass, 0)}°`;
    }

    /** The precipitation a slot shows: its chance from CHANCE_SHOWN_FROM, else an amount, else nothing. */
    private _wetText(slot: ForecastSlot, unit: string): string {
        if (slot.chance !== null) return slot.chance >= CHANCE_SHOWN_FROM ? `${formatLocalizedNumber(Math.round(slot.chance), this._hass, 0)}%` : '';
        if (slot.amount !== null && slot.amount > 0) {
            const decimals = slot.amount < 10 ? 1 : 0;
            return `${formatLocalizedNumber(slot.amount, this._hass, decimals)}${unit === 'in' ? '″' : ` ${unit}`}`;
        }
        return '';
    }

    private _render(): void {
        const hass = this._hass;
        const entity = hass?.states[this.config.entity || ''];
        const colorized = this.config.color_palette !== 'theme';
        const { condition, phase } = this._sky();
        const sky = skyColors(condition, phase);
        const skyVars: Record<string, string> | null = colorized ? {
            '--awc-sky-top': sky.top, '--awc-sky-mid': sky.mid, '--awc-sky-bottom': sky.bottom,
            '--awc-sky-glow': sky.glow, '--awc-sky-scrim': sky.scrim,
        } : null;
        const t = (key: Parameters<typeof localizeString>[1]) => escapeHtml(localizeString(hass, key));

        const kind = this._kind();
        const header = this.config.show_header === false ? '' : `
            <div class="fc-head">
                ${this.config.title
                    ? `<div class="fc-title">${escapeHtml(this.config.title)}</div>`
                    : `<div class="fc-eyebrow"><ha-icon icon="${kind === 'hourly' ? 'mdi:clock-outline' : 'mdi:calendar-blank-outline'}"></ha-icon><span>${t(kind === 'hourly' ? 'forecast_hourly' : 'forecast_daily')}</span></div>`}
            </div>`;

        // Older Home Assistant keeps the forecast on the entity
        const legacy = Array.isArray(entity?.attributes?.forecast) ? entity!.attributes.forecast as ForecastEntry[] : null;
        const wanted = this._wantedSlots();
        const fits = this._fitSlots ? Math.min(this._fitSlots, wanted) : wanted;
        const slots = readSlots(this._forecast ?? legacy, kind, Date.now(), fits, this._nightAt());

        if (!entity || !slots.length) {
            this._mount(`${header}<div class="fc-no-data">${t('no_forecast')}</div>`, skyVars);
            return;
        }
        this._mount(header + this._forecastHtml(slots, entity), skyVars);
    }

    private _forecastHtml(slots: ForecastSlot[], entity: HassEntity): string {
        const hass = this._hass;
        const n = slots.length;
        const x = (i: number) => ((i + 0.5) / n) * 100;
        const range = temperatureRange(slots);
        const y = (v: number) => range ? ((range.hi - v) / (range.hi - range.lo)) * 100 : 50;
        const point = (i: number, v: number): Point => ({ x: (x(i) / 100) * VW, y: (y(v) / 100) * VH });
        const highAt = (i: number) => point(i, slots[i].high!);
        const lowAt = (i: number) => point(i, slots[i].low!);
        const highs = indexRuns(n, i => slots[i].high !== null).map(run => pathOf(run.map(highAt)));
        const lows = indexRuns(n, i => slots[i].low !== null).map(run => pathOf(run.map(lowAt)));
        const hasLow = slots.some(s => s.low !== null);
        // The band between the lines, along the high and back along the low, where a run has both
        const bands = indexRuns(n, i => slots[i].high !== null && slots[i].low !== null)
            .filter(run => run.length > 1)
            .map(run => {
                const back = run.map(lowAt).reverse();
                return `${pathOf(run.map(highAt))}L${+back[0].x.toFixed(2)},${+back[0].y.toFixed(2)}${monotoneSegments(back)}Z`;
            });

        const marks = slots.map((s, i) => {
            const at = (v: number) => `left: ${x(i).toFixed(2)}%; top: ${y(v).toFixed(2)}%`;
            const current = s.current ? ' current' : '';
            return (s.high !== null ? `<span class="fc-dot high${current}" style="${at(s.high)}"></span><span class="fc-temp high" style="${at(s.high)}">${escapeHtml(this._degrees(s.high))}</span>` : '')
                + (s.low !== null ? `<span class="fc-dot low${current}" style="${at(s.low)}"></span><span class="fc-temp low" style="${at(s.low)}">${escapeHtml(this._degrees(s.low))}</span>` : '');
        }).join('');

        const unit = String(entity.attributes?.precipitation_unit || 'mm');
        const showWet = this.config.show_precipitation !== false && slots.some(s => s.chance !== null || s.amount !== null);
        const wet = slots.map(s => this._wetText(s, unit));
        const glyphs = slots.map(s => `<div class="fc-glyph-box">${weatherGlyph(s.kind, s.night)}</div>`).join('');

        // For screen readers, one sentence a slot, in Home Assistant's words for the weather
        const label = (s: ForecastSlot) => this._slotLabel(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        const said = slots.map((s, i) => {
            const parts = [
                s.condition ? escapeHtml(conditionName(hass!, { ...entity, state: s.condition })) : '',
                s.high !== null ? `${escapeHtml(localizeString(hass, 'high'))} ${escapeHtml(this._degrees(s.high))}` : '',
                s.low !== null ? `${escapeHtml(localizeString(hass, 'low'))} ${escapeHtml(this._degrees(s.low))}` : '',
                showWet && wet[i] ? `${escapeHtml(localizeString(hass, 'precipitation'))} ${escapeHtml(wet[i])}` : '',
            ].filter(Boolean);
            return `<li>${label(s)}: ${parts.join(', ')}</li>`;
        }).join('');

        // The glyphs' gradients live in the card, where the --fc-* colours are set
        return `
            <svg class="fc-defs" aria-hidden="true" focusable="false"><defs>${GLYPH_DEFS}</defs></svg>
            <div class="fc-visual" aria-hidden="true" style="display: contents; --fc-n: ${n}">
                <div class="fc-row fc-times">${slots.map(s => `<div class="fc-when${s.current ? ' current' : ''}">${this._slotLabel(s)}</div>`).join('')}</div>
                <div class="fc-row fc-glyphs">${glyphs}</div>
                <div class="fc-chart${hasLow ? '' : ' single'}">
                    <div class="fc-plot">
                        <svg viewBox="0 0 ${VW} ${VH}" preserveAspectRatio="none">
                            ${bands.map(d => `<path class="fc-band" d="${d}"/>`).join('')}
                            ${lows.filter(Boolean).map(d => `<path class="fc-line low" d="${d}"/>`).join('')}
                            ${highs.filter(Boolean).map(d => `<path class="fc-line high" d="${d}"/>`).join('')}
                        </svg>
                        ${marks}
                    </div>
                </div>
                ${showWet ? `<div class="fc-row fc-precip">${wet.map(text => `<div class="fc-wet">${text ? `${DROP}<span>${escapeHtml(text)}</span>` : ''}</div>`).join('')}</div>` : ''}
            </div>
            <ul class="visually-hidden">${said}</ul>`;
    }

    /**
     * Fit the card to its frame. Across, as many slots as fit at
     * SLOT_MIN_WIDTH; down, in a fixed-height frame (sections view), the
     * header goes first ("short"), then the glyphs and chart tighten.
     */
    private _fit(): void {
        const card = this._shadow.querySelector('.fc-card') as HTMLElement | null;
        if (!card) return;
        const fits = slotsThatFit(card.clientWidth, MAX_SLOTS);
        if (card.clientWidth > 0 && fits !== this._fitSlots) {
            this._fitSlots = fits;
            // Draws again with the slots that fit, and comes back here
            this._render();
            return;
        }
        for (const state of ['regular', 'short', 'tight']) {
            card.dataset.fit = state;
            if (card.scrollHeight <= card.clientHeight + 1) return;
        }
    }

    /**
     * Show new content in the card. The card element is kept across renders,
     * so a change of sky cross-fades, and content that hasn't changed isn't
     * replaced, so the glyphs' motion never restarts on an update.
     */
    private _mount(content: string, skyVars: Record<string, string> | null): void {
        let card = this._shadow.querySelector('.fc-card') as HTMLElement | null;
        if (!card) {
            this._shadow.innerHTML = `<style>${STYLES}</style><ha-card><div class="fc-card"></div></ha-card>`;
            card = this._shadow.querySelector('.fc-card') as HTMLElement;
            this._content = '';
            // The card is kept across renders, so its gestures are bound once
            bindActions(card.parentElement as HTMLElement, this, () => this._actions());
        }
        syncActionTarget(card.parentElement as HTMLElement, this._actions());
        const sky = !!skyVars;
        card.classList.toggle('sky', sky);
        card.classList.toggle('moving', this.config.animate !== false);
        card.parentElement?.classList.toggle('sky', sky);
        for (const name of SKY_COLOR_PROPERTIES) {
            if (skyVars) card.style.setProperty(name, skyVars[name]);
            else card.style.removeProperty(name);
        }
        if (content !== this._content) {
            this._content = content;
            card.innerHTML = content;
        }
        this._fit();
    }
}

// ── Registration ──
customElements.define('animated-weather-forecast-card', AnimatedWeatherForecastCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'animated-weather-forecast-card',
    name: 'Animated Weather Forecast',
    description: 'The hourly or daily forecast under the weather card\'s sky: the weather, the high and low as lines, and the chance of rain',
    // The card picker shows it, on the stub's weather
    preview: true,
    documentationURL: 'https://github.com/alexsto1an/ha-ani-weather-card',
    // Home Assistant 2026.6 and later suggest it for a weather entity, under Community
    getEntitySuggestion: (_hass, entityId) => entityId.startsWith('weather.') ? [
        { label: 'Daily', config: { type: 'custom:animated-weather-forecast-card', entity: entityId } },
        { label: 'Hourly', config: { type: 'custom:animated-weather-forecast-card', entity: entityId, forecast_type: 'hourly' } },
    ] : null,
});
