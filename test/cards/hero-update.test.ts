import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';

interface FakeAnimation {
    keyframes: Keyframe[];
    onfinish: (() => void) | null;
    oncancel: (() => void) | null;
    cancel: ReturnType<typeof vi.fn>;
}

const hass = (temperature: number, humidity: number, state = 'sunny') => ({
    states: {
        'weather.home': {
            entity_id: 'weather.home', state,
            attributes: { temperature, humidity, temperature_unit: '°C' },
        },
    },
    config: { time_zone: 'UTC' },
    language: 'en',
    localize: () => '',
});

describe('live value updates', () => {
    let card: HTMLElement & { setConfig(config: object): void; hass: unknown };
    let animations: Map<Element, FakeAnimation[]>;

    beforeEach(async () => {
        vi.useFakeTimers();
        animations = new Map();
        (HTMLElement.prototype as unknown as { animate: unknown }).animate = function (this: Element, keyframes: Keyframe[]) {
            const animation: FakeAnimation = {
                keyframes, onfinish: null, oncancel: null,
                cancel: vi.fn(() => animation.oncancel?.()),
            };
            animations.set(this, [...(animations.get(this) ?? []), animation]);
            return animation;
        };
        card = document.createElement('animated-weather-card') as typeof card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home' });
        card.hass = hass(20, 50);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(1000);
        animations.clear();
    });

    afterEach(() => {
        card.remove();
        delete (HTMLElement.prototype as unknown as { animate?: unknown }).animate;
        vi.useRealTimers();
    });

    const temperature = () => card.querySelector('.temperature-value') as HTMLElement;
    const humidity = () => card.querySelector('.attribute[data-kind="humidity"] .attribute-text') as HTMLElement;

    it('fades the temperature out, swaps it, then brings it in with a small rise', () => {
        card.hass = hass(21, 50);
        const [out] = animations.get(temperature())!;
        expect(out.keyframes).toEqual([{ opacity: 1 }, { opacity: 0 }]);
        expect(temperature().textContent).toBe('20');

        out.onfinish!();
        expect(temperature().textContent).toBe('21');
        const [, into] = animations.get(temperature())!;
        expect(into.keyframes[0]).toMatchObject({ opacity: 0, transform: 'translateY(0.12em)' });
        expect(into.keyframes[1]).toMatchObject({ opacity: 1 });
    });

    it('lands on the latest value when updates arrive mid-fade', () => {
        card.hass = hass(21, 50);
        card.hass = hass(22, 50);
        const fades = animations.get(temperature())!;
        expect(fades).toHaveLength(1);
        fades[0].onfinish!();
        expect(temperature().textContent).toBe('22');
    });

    it('swaps metric values without any animation', () => {
        card.hass = hass(20, 64);
        expect(humidity().textContent).toBe('64%');
        expect(animations.get(humidity())).toBeUndefined();
    });
});

describe('live values past the decimal point', () => {
    let card: HTMLElement & { setConfig(config: object): void; hass: unknown };

    const reading = (attributes: Record<string, number>) => ({
        states: {
            'weather.home': {
                entity_id: 'weather.home', state: 'sunny',
                attributes: { humidity: 50, temperature_unit: '°C', ...attributes },
            },
        },
        config: { time_zone: 'UTC' },
        language: 'en',
        localize: () => '',
    });

    const mount = async (config: object, attributes: Record<string, number>) => {
        card = document.createElement('animated-weather-card') as typeof card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
        card.hass = reading(attributes);
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(1000);
    };

    beforeEach(() => vi.useFakeTimers());
    afterEach(() => {
        card.remove();
        vi.useRealTimers();
    });

    it('updates a temperature that moved only after the decimal point', async () => {
        await mount({ temperature_decimals: 1 }, { temperature: 20.4 });
        const temperature = () => (card.querySelector('.temperature-value') as HTMLElement).textContent;
        expect(temperature()).toBe('20.4');
        // Both round to 20
        card.hass = reading({ temperature: 20.2 });
        await vi.advanceTimersByTimeAsync(1000);
        expect(temperature()).toBe('20.2');
    });

    it('updates feels like from the weather entity when only it changed', async () => {
        await mount({}, { temperature: 20, apparent_temperature: 18 });
        const meta = () => (card.querySelector('.hero-meta') as HTMLElement).textContent;
        expect(meta()).toContain('18°');
        card.hass = reading({ temperature: 20, apparent_temperature: 16 });
        expect(meta()).toContain('16°');
    });
});

describe('live data updates and the weather', () => {
    let card: HTMLElement & { setConfig(config: object): void; hass: unknown };

    beforeEach(async () => {
        vi.useFakeTimers();
        card = document.createElement('animated-weather-card') as typeof card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home' });
        card.hass = hass(16, 70, 'cloudy');
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(1000);
    });

    afterEach(() => {
        card.remove();
        vi.useRealTimers();
    });

    const clouds = () => Array.from(card.querySelectorAll('.cloud-gsap'));

    it('keeps the same clouds drifting when a reading changes', async () => {
        const before = clouds();
        expect(before.length).toBeGreaterThan(0);
        card.hass = hass(17, 72, 'cloudy');
        await vi.advanceTimersByTimeAsync(500);
        // The same elements, not a fresh set drawn at new places
        const after = clouds();
        expect(after).toHaveLength(before.length);
        after.forEach((cloud, i) => expect(cloud).toBe(before[i]));
    });
});
