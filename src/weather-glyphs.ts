// The forecast card's condition glyphs: small SVG drawings in the cards'
// own light, not icon-font symbols. The sun is the tracker's sun (a warm
// disc in its glow), the moon its moon, and clouds are soft, lit from
// above. Colours are CSS variables (--fc-*), so the theme palette can
// redraw them in the theme's colours. Each moving part has a class the
// card's CSS animates gently, and holds still with reduced motion.

import { getWeatherClass } from './utils';
import type { SkyCondition } from './sky';

/** What a glyph draws: one of the weather card's fifteen classes. */
export type GlyphKind = SkyCondition;

/**
 * The glyph for a condition from the forecast. Home Assistant's
 * `clear-night` is always the clear night sky; every other state goes
 * through the weather card's own mapping, so free text works too.
 */
export function glyphKind(condition: string | undefined): GlyphKind {
    if (!condition) return 'cloudy';
    if (condition === 'clear-night') return 'clear-night';
    const kind = getWeatherClass(condition, false);
    // The weather card decides clear-night from the clock; a forecast slot
    // decides it from its own hour, below
    return kind === 'clear-night' ? 'sunny' : kind as GlyphKind;
}

/** Gradients the glyphs share, defined once per card. */
export const GLYPH_DEFS = `
    <radialGradient id="fc-sun" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color: var(--fc-sun-core)"/>
        <stop offset="0.55" style="stop-color: var(--fc-sun-mid)"/>
        <stop offset="1" style="stop-color: var(--fc-sun-rim)"/>
    </radialGradient>
    <radialGradient id="fc-sun-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color: var(--fc-sun-halo); stop-opacity: 0.6"/>
        <stop offset="1" style="stop-color: var(--fc-sun-halo); stop-opacity: 0"/>
    </radialGradient>
    <radialGradient id="fc-moon" cx="38%" cy="38%" r="70%">
        <stop offset="0" style="stop-color: var(--fc-moon-light)"/>
        <stop offset="1" style="stop-color: var(--fc-moon-shade)"/>
    </radialGradient>
    <radialGradient id="fc-moon-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color: var(--fc-moon-halo); stop-opacity: 0.4"/>
        <stop offset="1" style="stop-color: var(--fc-moon-halo); stop-opacity: 0"/>
    </radialGradient>
    <linearGradient id="fc-cloud" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color: var(--fc-cloud-top)"/>
        <stop offset="1" style="stop-color: var(--fc-cloud-bottom)"/>
    </linearGradient>
    <linearGradient id="fc-cloud-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color: var(--fc-storm-top)"/>
        <stop offset="1" style="stop-color: var(--fc-storm-bottom)"/>
    </linearGradient>`;

const f = (n: number) => +n.toFixed(2);

/** A cloud: one big puff over two small ones, sitting on a flat base. */
const CLOUD_PATH = 'M9.5 23H23a5 5 0 0 0 .9-9.92A7.5 7.5 0 0 0 9.8 13.3a4.9 4.9 0 0 0-.3 9.7Z';

function cloud(x: number, y: number, scale: number, { dark = false, back = false } = {}): string {
    const fill = dark ? 'url(#fc-cloud-dark)' : 'url(#fc-cloud)';
    // The path's own box is about 5–29 × 8–23; place it by its middle
    return `<g class="g-cloud${back ? ' back' : ''}"><path d="${CLOUD_PATH}" fill="${fill}" transform="translate(${f(x)} ${f(y)}) scale(${scale}) translate(-17 -15.5)"/></g>`;
}

function sun(x: number, y: number, r: number): string {
    return `<circle class="g-halo" cx="${x}" cy="${y}" r="${f(r * 2)}" fill="url(#fc-sun-halo)"/>`
        + `<circle class="g-sun" cx="${x}" cy="${y}" r="${r}" fill="url(#fc-sun)"/>`;
}

/**
 * A crescent: a disc of radius `r` at (x, y) with a disc of radius `cut`
 * taken out of it, centred `offset` away at an angle up and to the right.
 */
export function crescentPath(x: number, y: number, r: number, cut = r * 0.86, offset = r * 0.62, angle = -40): string {
    const theta = angle * Math.PI / 180;
    // Where the two circles meet, at ±alpha either side of the cut's direction
    const along = (offset * offset + r * r - cut * cut) / (2 * offset);
    const alpha = Math.acos(Math.max(-1, Math.min(1, along / r)));
    const p1 = [x + r * Math.cos(theta - alpha), y + r * Math.sin(theta - alpha)];
    const p2 = [x + r * Math.cos(theta + alpha), y + r * Math.sin(theta + alpha)];
    return `M${f(p1[0])} ${f(p1[1])}A${r} ${r} 0 1 0 ${f(p2[0])} ${f(p2[1])}A${f(cut)} ${f(cut)} 0 0 1 ${f(p1[0])} ${f(p1[1])}Z`;
}

function moon(x: number, y: number, r: number): string {
    return `<circle class="g-halo" cx="${x}" cy="${y}" r="${f(r * 1.9)}" fill="url(#fc-moon-halo)"/>`
        + `<path class="g-moon" d="${crescentPath(x, y, r)}" fill="url(#fc-moon)"/>`;
}

function stars(): string {
    return `<circle class="g-star" cx="25" cy="8" r="0.9"/><circle class="g-star" cx="27.5" cy="15" r="0.7" style="animation-delay: -1.6s"/>`;
}

/** Falling drops under a cloud, slanted with the wind; `heavy` is longer and thicker. */
function drops(xs: number[], heavy = false): string {
    const length = heavy ? 4.6 : 3.4;
    return xs.map((x, i) => `<line class="g-drop${heavy ? ' heavy' : ''}" x1="${x}" y1="23.2" x2="${f(x - 1.3)}" y2="${f(23.2 + length)}" style="animation-delay: ${f(-i * 0.37)}s"/>`).join('');
}

/** Six-armed flakes, small enough to read as snow and not as stars. */
function flakes(xs: number[]): string {
    return xs.map((x, i) => {
        const y = 27.2 + (i % 2) * 1.2;
        const arms = [0, 60, 120].map(a => {
            const dx = 2.1 * Math.cos(a * Math.PI / 180);
            const dy = 2.1 * Math.sin(a * Math.PI / 180);
            return `M${f(x - dx)} ${f(y - dy)}L${f(x + dx)} ${f(y + dy)}`;
        }).join('');
        return `<path class="g-flake" d="${arms}" style="animation-delay: ${f(-i * 0.9)}s"/>`;
    }).join('');
}

/** Ice pellets: sleet and hail. */
function pellets(xs: number[]): string {
    return xs.map((x, i) => `<circle class="g-pellet" cx="${x}" cy="${f(26.4 + (i % 2) * 1.6)}" r="1.15" style="animation-delay: ${f(-i * 0.45)}s"/>`).join('');
}

function bolt(): string {
    return '<path class="g-bolt" d="M17.6 19.2 13.4 25.4h3.2l-1.7 5.2 5.4-7.2h-3.3l1.9-4.2Z"/>';
}

function fogLines(): string {
    return '<path class="g-fog" d="M6 21.5h20M8.5 25.5h17M6 29.5h14"/>';
}

function windLines(): string {
    return '<path class="g-wind" d="M4 12.5h14.5a3.2 3.2 0 1 0-3.2-3.2"/>'
        + '<path class="g-wind" d="M4 17.5h20.3a3.6 3.6 0 1 1-3.6 3.6" style="animation-delay: -0.8s"/>'
        + '<path class="g-wind" d="M7 22.5h8" style="animation-delay: -1.6s"/>';
}

/** The sun or the moon, behind a cloud. */
const peek = (night: boolean) => night ? moon(21.5, 10.5, 5.6) : sun(21.5, 10.5, 5.6);

/**
 * The SVG for a slot's weather. `night` swaps the sun for the moon.
 * The glyph is decorative: the condition's name goes in the card's
 * screen-reader text.
 */
export function weatherGlyph(kind: GlyphKind, night = false): string {
    let body: string;
    switch (kind) {
        case 'sunny':
        case 'clear-night':
            body = night || kind === 'clear-night' ? moon(15, 16, 8.2) + stars() : sun(16, 16, 7.4);
            break;
        case 'partly-cloudy':
            body = peek(night) + cloud(14, 19.5, 0.86);
            break;
        case 'cloudy':
            body = cloud(20, 12.5, 0.66, { back: true }) + cloud(14.5, 18, 0.9);
            break;
        case 'windy':
            body = windLines();
            break;
        case 'foggy':
            body = cloud(16, 11.5, 0.78) + fogLines();
            break;
        case 'light-rain':
            body = cloud(16, 14, 0.9) + drops([13, 19]);
            break;
        case 'rainy':
            body = cloud(16, 14, 0.9) + drops([11, 16, 21]);
            break;
        case 'pouring':
            body = cloud(16, 13.5, 0.94, { dark: true }) + drops([9.5, 14, 18.5, 23], true);
            break;
        case 'stormy':
            body = cloud(16, 13.5, 0.94, { dark: true }) + drops([10.5, 23.5]) + bolt();
            break;
        case 'snowy':
            body = cloud(16, 14, 0.9) + flakes([10.5, 16, 21.5]);
            break;
        case 'snowy-rainy':
            body = cloud(16, 14, 0.9) + drops([11, 21]) + flakes([16]);
            break;
        case 'sleety':
            body = cloud(16, 14, 0.9) + pellets([11, 16, 21]);
            break;
        case 'snowy-stormy':
            body = cloud(16, 13.5, 0.94, { dark: true }) + flakes([10, 23]) + bolt();
            break;
        case 'sleety-stormy':
            body = cloud(16, 13.5, 0.94, { dark: true }) + pellets([10.5, 23]) + bolt();
            break;
        default:
            body = sun(16, 16, 7.4);
    }
    return `<svg class="fc-glyph" viewBox="0 0 32 32" data-kind="${kind}" aria-hidden="true" focusable="false">${body}</svg>`;
}
