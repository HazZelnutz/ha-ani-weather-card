import { describe, it, expect, vi, afterEach } from 'vitest';
import {
    readSlots, slotsThatFit, temperatureRange, monotoneSegments, indexRuns,
    SLOT_MIN_WIDTH, CHANCE_SHOWN_FROM, type ForecastSlot,
} from '../../src/forecast-card';
import { glyphKind, weatherGlyph, crescentPath } from '../../src/weather-glyphs';
import {
    SKY_CONDITIONS, SKY_PHASES, SKY_TEXT, SKY_TEXT_SECONDARY_ALPHA, SKY_GLOW_FORECAST,
    sampleSkyAt, oklchToSrgb, composite, contrastRatio,
} from '../../src/sky';
import type { CustomCardDefinition } from '../../src/types';

const HOUR = 3_600_000;
const NOW = new Date(2026, 10, 7, 12, 20).getTime();
const hourStart = new Date(2026, 10, 7, 12, 0).getTime();

describe('forecast slots', () => {
    const hourly = Array.from({ length: 30 }, (_, i) => ({
        datetime: new Date(hourStart + (i - 2) * HOUR).toISOString(),
        condition: 'rainy',
        temperature: 10 + i,
        precipitation_probability: 40,
    }));

    it('starts at the hour under way and keeps the order, at most the limit', () => {
        const slots = readSlots([...hourly].reverse(), 'hourly', NOW, 12);
        expect(slots).toHaveLength(12);
        expect(slots[0].time).toBe(hourStart);
        expect(slots[0].current).toBe(true);
        expect(slots.slice(1).every(s => !s.current)).toBe(true);
        expect(slots[1].time - slots[0].time).toBe(HOUR);
    });

    it('starts a daily forecast at today, even when today began hours ago', () => {
        const day = (offset: number) => new Date(2026, 10, 7 + offset).toISOString();
        const daily = [-1, 0, 1, 2].map(offset => ({ datetime: day(offset), condition: 'sunny', temperature: 20, templow: 10 }));
        const slots = readSlots(daily, 'daily', NOW, 7);
        expect(slots.map(s => s.current)).toEqual([true, false, false]);
        expect(slots[0].high).toBe(20);
        expect(slots[0].low).toBe(10);
    });

    it('takes the hour\'s own day or night, else the sun\'s', () => {
        const entries = [
            { datetime: new Date(hourStart).toISOString(), condition: 'sunny', is_daytime: false },
            { datetime: new Date(hourStart + HOUR).toISOString(), condition: 'partlycloudy' },
        ];
        const slots = readSlots(entries, 'hourly', NOW, 5, () => true);
        expect(slots[0].night).toBe(true);
        expect(slots[1].night).toBe(true);
        expect(readSlots(entries, 'hourly', NOW, 5, () => false)[1].night).toBe(false);
    });

    it('reads only numbers, and skips entries without a time', () => {
        const slots = readSlots([
            { datetime: 'soon', temperature: 4 },
            { datetime: new Date(hourStart).toISOString(), temperature: '12' as unknown as number, precipitation: NaN },
        ], 'hourly', NOW, 5);
        expect(slots).toHaveLength(1);
        expect(slots[0].high).toBeNull();
        expect(slots[0].amount).toBeNull();
    });

    it('shows as many slots as fit across the card, never more than asked', () => {
        expect(slotsThatFit(353, 12)).toBe(Math.floor((353 - 40) / SLOT_MIN_WIDTH));
        expect(slotsThatFit(1200, 7)).toBe(7);
        expect(slotsThatFit(60, 7)).toBe(1);
        expect(slotsThatFit(0, 7)).toBe(7);
    });
});

describe('the temperature lines', () => {
    const slot = (high: number | null, low: number | null = null) => ({ high, low } as ForecastSlot);

    it('spans the highs and lows, and draws a steady day as steady', () => {
        expect(temperatureRange([slot(20, 10), slot(24, 12)])).toEqual({ lo: 10, hi: 24 });
        expect(temperatureRange([slot(21), slot(22)])).toEqual({ lo: 19.5, hi: 23.5 });
        expect(temperatureRange([slot(null)])).toBeNull();
    });

    it('never overshoots a temperature the forecast doesn\'t reach', () => {
        const points = [{ x: 0, y: 50 }, { x: 100, y: 10 }, { x: 200, y: 10 }, { x: 300, y: 90 }, { x: 400, y: 20 }];
        const d = monotoneSegments(points);
        const ys = [...d.matchAll(/(-?[\d.]+),(-?[\d.]+)/g)].map(m => Number(m[2]));
        expect(Math.min(...ys)).toBeGreaterThanOrEqual(10);
        expect(Math.max(...ys)).toBeLessThanOrEqual(90);
        // A flat stretch stays flat: both control points of 100 → 200 sit at 10
        expect(d.split('C')[2]).toBe('133.33,10 166.67,10 200,10');
    });

    it('breaks the line where a slot has no value', () => {
        expect(indexRuns(6, i => i !== 2 && i !== 3)).toEqual([[0, 1], [4, 5]]);
        expect(indexRuns(3, () => false)).toEqual([]);
    });
});

describe('weather glyphs', () => {
    it('draws every Home Assistant condition, and the clear night as the night', () => {
        expect(glyphKind('clear-night')).toBe('clear-night');
        expect(glyphKind('sunny')).toBe('sunny');
        expect(glyphKind('partlycloudy')).toBe('partly-cloudy');
        expect(glyphKind('lightning-rainy')).toBe('stormy');
        expect(glyphKind('hail')).toBe('sleety');
        expect(glyphKind('windy-variant')).toBe('windy');
        expect(glyphKind(undefined)).toBe('cloudy');
        for (const kind of SKY_CONDITIONS) expect(weatherGlyph(kind)).toMatch(/^<svg class="fc-glyph"[^>]*aria-hidden="true"/);
    });

    it('puts the moon in place of the sun after dark', () => {
        expect(weatherGlyph('sunny', true)).toContain('g-moon');
        expect(weatherGlyph('sunny', false)).toContain('g-sun');
        expect(weatherGlyph('partly-cloudy', true)).toContain('g-moon');
    });

    it('cuts the crescent where the two circles meet', () => {
        const d = crescentPath(16, 16, 8);
        const [x1, y1] = d.slice(1).split('A')[0].split(' ').map(Number);
        expect(Math.hypot(x1 - 16, y1 - 16)).toBeCloseTo(8, 1);
        expect(d.endsWith('Z')).toBe(true);
    });
});

describe('forecast card', () => {
    type Card = HTMLElement & { setConfig(config: object): void; hass: unknown; getGridOptions(): object };
    let card: Card | undefined;
    afterEach(() => { card?.remove(); card = undefined; vi.useRealTimers(); });

    const forecast = (type: string) => type === 'daily'
        ? [0, 1, 2].map(i => ({ datetime: new Date(2026, 10, 7 + i, 12).toISOString(), condition: i === 1 ? 'rainy' : 'sunny', temperature: 20 + i, templow: 10 + i, precipitation_probability: i === 1 ? 70 : 5 }))
        : [0, 1].map(i => ({ datetime: new Date(hourStart + i * HOUR).toISOString(), condition: 'cloudy', temperature: 15, precipitation: i ? 0.4 : 0 }));

    function mount(config: object, features = 3) {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(NOW);
        const subscribe = vi.fn(async (listener: (m: object) => void, message: { forecast_type: string }) => {
            listener({ type: message.forecast_type, forecast: forecast(message.forecast_type) });
            return () => {};
        });
        card = document.createElement('animated-weather-forecast-card') as Card;
        document.body.append(card);
        card.setConfig({ type: 'custom:animated-weather-forecast-card', entity: 'weather.home', ...config });
        card.hass = {
            states: {
                'weather.home': { entity_id: 'weather.home', state: 'rainy', attributes: { supported_features: features, precipitation_unit: 'mm' } },
            },
            language: 'en', locale: { language: 'en', time_format: '24' },
            localize: () => '',
            formatEntityState: (s: { state: string }) => ({ sunny: 'Sunny', rainy: 'Rainy', cloudy: 'Cloudy' } as Record<string, string>)[s.state] ?? s.state,
            config: {},
            connection: { subscribeMessage: subscribe },
        };
        return { subscribe, root: card.shadowRoot! };
    }

    it('subscribes to the daily forecast by default, and draws a slot for each day', async () => {
        const { subscribe, root } = mount({});
        await Promise.resolve();
        expect(subscribe).toHaveBeenCalledTimes(1);
        expect(subscribe.mock.calls[0][1]).toEqual({ type: 'weather/subscribe_forecast', entity_id: 'weather.home', forecast_type: 'daily' });
        const when = [...root.querySelectorAll('.fc-when')].map(el => el.textContent);
        expect(when[0]).toBe('Today');
        expect(when).toHaveLength(3);
        expect(root.querySelectorAll('.fc-glyph')).toHaveLength(3);
        expect(root.querySelectorAll('.fc-temp.high')).toHaveLength(3);
        expect(root.querySelectorAll('.fc-temp.low')).toHaveLength(3);
        expect(root.querySelector('.fc-line.high')).not.toBeNull();
        expect(root.querySelector('.fc-band')).not.toBeNull();
    });

    it('shows the chance of rain from the threshold up, and says each slot for screen readers', () => {
        const { root } = mount({});
        const wet = [...root.querySelectorAll('.fc-wet')].map(el => el.textContent);
        expect(CHANCE_SHOWN_FROM).toBe(10);
        expect(wet).toEqual(['', '70%', '']);
        const said = [...root.querySelectorAll('ul.visually-hidden li')].map(el => el.textContent);
        expect(said[1]).toBe(`${new Intl.DateTimeFormat('en', { weekday: 'short' }).format(new Date(2026, 10, 8, 12))}: Rainy, High 21°, Low 11°, Precipitation 70%`);
        expect(root.querySelector('.fc-visual')!.getAttribute('aria-hidden')).toBe('true');
    });

    it('draws an hourly forecast with one line, and the amount where there\'s no chance', () => {
        const { subscribe, root } = mount({ forecast_type: 'hourly' });
        expect(subscribe.mock.calls[0][1]).toMatchObject({ forecast_type: 'hourly' });
        expect(root.querySelector('.fc-when')!.textContent).toBe('Now');
        expect(root.querySelector('.fc-chart')!.classList.contains('single')).toBe(true);
        expect(root.querySelectorAll('.fc-line.low')).toHaveLength(0);
        expect([...root.querySelectorAll('.fc-wet')].map(el => el.textContent)).toEqual(['', '0.4 mm']);
    });

    it('says there\'s no forecast when the entity has none of that kind, without asking for it', () => {
        const { subscribe, root } = mount({ forecast_type: 'hourly' }, 1);
        expect(subscribe).not.toHaveBeenCalled();
        expect(root.querySelector('.fc-no-data')!.textContent).toBe('No forecast yet');
    });

    it('hides the precipitation row when asked, and follows the theme', () => {
        const { root } = mount({ show_precipitation: false, color_palette: 'theme' });
        expect(root.querySelector('.fc-precip')).toBeNull();
        expect(root.querySelector('.fc-card')!.classList.contains('sky')).toBe(false);
    });

    it('shows only the numbers without the lines, in three rows', () => {
        const { root } = mount({ show_lines: false });
        expect(root.querySelector('.fc-chart')).toBeNull();
        expect(root.querySelectorAll('.fc-temps-cell').length).toBe(root.querySelectorAll('.fc-when').length);
        expect(root.querySelector('.fc-temps-high')!.textContent).toMatch(/°$/);
        expect(root.querySelector('.fc-temps-low')!.textContent).toMatch(/°$/);
        expect(card!.getGridOptions()).toMatchObject({ rows: 3 });
    });

    it('escapes the title', () => {
        const { root } = mount({ title: '<img src=x onerror=alert(1)>' });
        expect(root.querySelector('img')).toBeNull();
        expect(root.querySelector('.fc-title')!.textContent).toBe('<img src=x onerror=alert(1)>');
    });

    it('needs a weather entity and a kind it knows', () => {
        const fresh = document.createElement('animated-weather-forecast-card') as Card;
        expect(() => fresh.setConfig({})).toThrow(/weather entity/);
        expect(() => fresh.setConfig({ entity: 'weather.home', forecast_type: 'weekly' })).toThrow(/daily or hourly/);
    });

    it('takes four rows in the sections view', () => {
        const { root } = mount({});
        expect(root).toBeTruthy();
        expect(card!.getGridOptions()).toEqual({ columns: 12, rows: 4, min_columns: 6, min_rows: 3 });
    });

    it('is in the card picker, and suggested for a weather entity', () => {
        const entry = window.customCards.find(c => c.type === 'animated-weather-forecast-card') as CustomCardDefinition;
        expect(entry.preview).toBe(true);
        expect(entry.getEntitySuggestion!({} as never, 'weather.home')).toEqual([
            { label: 'Daily', config: { type: 'custom:animated-weather-forecast-card', entity: 'weather.home' } },
            { label: 'Hourly', config: { type: 'custom:animated-weather-forecast-card', entity: 'weather.home', forecast_type: 'hourly' } },
        ]);
        expect(entry.getEntitySuggestion!({} as never, 'sun.sun')).toBeNull();
        const Card = customElements.get('animated-weather-forecast-card') as unknown as { getStubConfig(h: object, e: string[]): object };
        expect(Card.getStubConfig({ states: {} }, ['light.x', 'weather.garden'])).toEqual({ entity: 'weather.garden' });
    });
});

describe('forecast card contrast', () => {
    const text = oklchToSrgb(SKY_TEXT);
    const grid = (xs: number[], ys: number[]) => xs.flatMap(x => ys.map(y => [x, y] as const));
    // The lows and the chance of rain: secondary text, across the lower half
    const SECONDARY = grid([0.05, 0.25, 0.5, 0.75, 0.95], [0.55, 0.65, 0.75, 0.85, 0.93]);
    // The eyebrow, top left
    const EYEBROW = grid([0.05, 0.15, 0.3], [0.08, 0.12]);

    for (const condition of SKY_CONDITIONS) {
        for (const phase of SKY_PHASES) {
            it(`${condition} / ${phase}: its secondary text meets WCAG AA (4.5:1) where it sits`, () => {
                for (const [x, y] of [...SECONDARY, ...EYEBROW]) {
                    const bg = sampleSkyAt(condition, phase, x, y, SKY_GLOW_FORECAST);
                    const ratio = contrastRatio(composite(bg, text, SKY_TEXT_SECONDARY_ALPHA), bg);
                    expect(ratio, `${condition}/${phase} at x=${x}, y=${y}`).toBeGreaterThanOrEqual(4.5);
                }
            });
            it(`${condition} / ${phase}: the times and highs, full strength, stay AA in the glow`, () => {
                for (const [x, y] of grid([0.05, 0.5, 0.7, 0.8, 0.9, 0.97], [0.06, 0.1, 0.15, 0.25, 0.35, 0.45])) {
                    const bg = sampleSkyAt(condition, phase, x, y, SKY_GLOW_FORECAST);
                    expect(contrastRatio(text, bg), `${condition}/${phase} at x=${x}, y=${y}`).toBeGreaterThanOrEqual(4.5);
                }
            });
        }
    }
});
