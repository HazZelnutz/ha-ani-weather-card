import { describe, it, expect, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';
import { cloudHeightScale } from '../../src/gsap-effects';

type Card = HTMLElement & { setConfig(config: object): void; hass: unknown; getGridOptions(): { rows: number; min_rows: number }; getCardSize(): number };

const hass = {
    states: {
        'weather.home': {
            entity_id: 'weather.home', state: 'partlycloudy',
            attributes: { temperature: 23, humidity: 65, apparent_temperature: 21, friendly_name: 'Lisbon', temperature_unit: '°C' },
        },
    },
    config: { time_zone: 'UTC' },
    language: 'en',
    localize: () => '',
};

describe('compact weather card', () => {
    let card: Card;

    async function mount(config: object): Promise<HTMLElement> {
        vi.useFakeTimers();
        card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
        card.hass = hass;
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(500);
        return card.querySelector('.animated-weather-card') as HTMLElement;
    }

    afterEach(() => {
        card?.remove();
        vi.useRealTimers();
    });

    it('puts the temperature and condition on one line, with where and what it feels like', async () => {
        const sky = await mount({ compact: true });
        expect(sky.dataset.variant).toBe('compact');
        expect(sky.querySelector('.temperature-value')!.textContent).toBe('23');
        expect(sky.querySelector('.weather-desc')!.textContent).toBe('Partly cloudy');
        expect(sky.querySelector('.compact-meta')!.textContent).toBe('Lisbon · Feels like 21°');
        // No metric row or regular hero lines at all, so nothing measures them
        expect(sky.querySelector('.weather-attributes')).toBeNull();
        expect(sky.querySelector('.hero-meta')).toBeNull();
        expect(sky.querySelector('.location')).toBeNull();
    });

    it('drops the location when it is hidden', async () => {
        const sky = await mount({ compact: true, show_location: false });
        expect(sky.querySelector('.compact-meta')!.textContent).toBe('Feels like 21°');
    });

    it('asks for two rows in sections view', async () => {
        await mount({ compact: true });
        expect(card.getGridOptions()).toMatchObject({ rows: 2, min_rows: 1 });
        expect(card.getCardSize()).toBe(2);
    });

    it('shrinks the temperature in a narrow strip to keep the condition whole', async () => {
        const sky = await mount({ compact: true });
        const condition = sky.querySelector('.weather-desc') as HTMLElement;
        // Room for "Partly cloudy" only once the temperature is at its tight size
        const room: Record<string, number> = { regular: 40, compact: 40, short: 70, tight: 110, minimal: 110 };
        Object.defineProperty(condition, 'clientWidth', { configurable: true, get: () => room[sky.dataset.height ?? 'regular'] });
        Object.defineProperty(condition, 'scrollWidth', { configurable: true, get: () => 98 });
        (card as unknown as { applySizeState(): void }).applySizeState();
        expect(sky.dataset.height).toBe('tight');

        // With room for it, the temperature keeps its full size
        Object.defineProperty(condition, 'clientWidth', { configurable: true, get: () => 160 });
        (card as unknown as { applySizeState(): void }).applySizeState();
        expect(sky.dataset.height).toBe('regular');
    });

    it('keeps the regular card as it was', async () => {
        const sky = await mount({});
        expect(sky.dataset.variant).toBeUndefined();
        expect(sky.querySelector('.weather-attributes')).not.toBeNull();
        expect(card.getGridOptions().rows).toBe(4);
    });
});

describe('clouds in short cards', () => {
    it('shrink with the card below 160px, to half size at most', () => {
        expect(cloudHeightScale(230)).toBe(1);
        expect(cloudHeightScale(160)).toBe(1);
        expect(cloudHeightScale(88)).toBeCloseTo(0.55);
        expect(cloudHeightScale(40)).toBe(0.5);
    });
});
