import { describe, it, expect, afterEach, vi } from 'vitest';
import '../../src/animated-weather-card';
import { readAction } from '../../src/actions';

type Card = HTMLElement & { setConfig(config: object): void; hass: unknown };

const hass = {
    states: {
        'weather.home': {
            entity_id: 'weather.home', state: 'sunny',
            attributes: { temperature: 21, humidity: 50, temperature_unit: '°C', friendly_name: 'Home' },
        },
        'sun.sun': {
            entity_id: 'sun.sun', state: 'above_horizon',
            attributes: {
                next_rising: '2026-11-07T05:12:00+00:00', next_setting: '2026-11-06T15:40:00+00:00',
                next_dawn: '2026-11-07T04:40:00+00:00', next_dusk: '2026-11-06T16:12:00+00:00',
                next_noon: '2026-11-07T10:26:00+00:00', elevation: 20, rising: false,
            },
        },
    },
    config: { time_zone: 'UTC' },
    language: 'en',
    localize: () => '',
};

/** What reached Home Assistant: each event's name and detail */
function listen(): Array<[string, unknown]> {
    const fired: Array<[string, unknown]> = [];
    for (const name of ['hass-more-info', 'hass-action']) {
        document.addEventListener(name, e => fired.push([name, (e as CustomEvent).detail]));
    }
    return fired;
}

const press = (el: Element, type: string, x = 10, y = 10) =>
    el.dispatchEvent(new MouseEvent(type, { bubbles: true, button: 0, clientX: x, clientY: y }));
const tap = (el: Element) => {
    press(el, 'pointerdown');
    press(el, 'pointerup');
};

describe('the weather card\'s gestures', () => {
    let card: Card;
    let fired: Array<[string, unknown]>;

    async function mount(config: object = {}): Promise<HTMLElement> {
        vi.useFakeTimers();
        fired = listen();
        card = document.createElement('animated-weather-card') as Card;
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
        card.hass = hass;
        document.body.appendChild(card);
        await vi.advanceTimersByTimeAsync(500);
        return card.querySelector('.weather-info') as HTMLElement;
    }

    afterEach(() => {
        card?.remove();
        vi.useRealTimers();
    });

    it('opens the weather\'s details on a tap, as it always has', async () => {
        const info = await mount();
        tap(info);
        expect(fired).toEqual([['hass-more-info', { entityId: 'weather.home' }]]);
        expect(info.getAttribute('role')).toBe('button');
        expect(info.tabIndex).toBe(0);
    });

    it('hands a tap action to Home Assistant, with the entity', async () => {
        const info = await mount({ tap_action: { action: 'navigate', navigation_path: '/lovelace/weather' } });
        tap(info);
        expect(fired).toEqual([['hass-action', {
            action: 'tap',
            config: expect.objectContaining({ entity: 'weather.home', tap_action: { action: 'navigate', navigation_path: '/lovelace/weather' } }),
        }]]);
    });

    it('fires a hold after half a second, and no tap with it', async () => {
        const info = await mount({ hold_action: { action: 'more-info', entity: 'sensor.rain' } });
        press(info, 'pointerdown');
        vi.advanceTimersByTime(499);
        expect(fired).toEqual([]);
        vi.advanceTimersByTime(1);
        press(info, 'pointerup');
        expect(fired.map(([, detail]) => (detail as { action: string }).action)).toEqual(['hold']);
    });

    it('treats a long press as a tap when no hold is set', async () => {
        const info = await mount();
        press(info, 'pointerdown');
        vi.advanceTimersByTime(800);
        press(info, 'pointerup');
        expect(fired).toEqual([['hass-more-info', { entityId: 'weather.home' }]]);
    });

    it('tells a double tap from two taps only when a double tap is set', async () => {
        const info = await mount({ double_tap_action: { action: 'toggle' } });
        tap(info);
        vi.advanceTimersByTime(100);
        tap(info);
        expect(fired.map(([, detail]) => (detail as { action: string }).action)).toEqual(['double_tap']);

        // One tap waits out the double tap's window, then opens the details
        tap(info);
        expect(fired).toHaveLength(1);
        vi.advanceTimersByTime(250);
        expect(fired[1]).toEqual(['hass-more-info', { entityId: 'weather.home' }]);
    });

    it('lets a scroll through, and a press that wanders off', async () => {
        const info = await mount();
        press(info, 'pointerdown', 10, 10);
        info.dispatchEvent(new MouseEvent('pointermove', { clientX: 10, clientY: 40 }));
        press(info, 'pointerup', 10, 40);
        expect(fired).toEqual([]);
    });

    it('taps with Enter and Space from the keyboard', async () => {
        const info = await mount();
        info.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        info.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
        expect(fired).toHaveLength(2);
    });

    it('does nothing on a tap set to none, and is no button then', async () => {
        const info = await mount({ tap_action: { action: 'none' } });
        tap(info);
        info.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        expect(fired).toEqual([]);
        expect(info.getAttribute('role')).toBe('group');
        expect(info.hasAttribute('tabindex')).toBe(false);
    });

    it('keeps a long press from selecting text only when a hold is set', async () => {
        const info = await mount({ hold_action: { action: 'assist' } });
        const menu = new MouseEvent('contextmenu', { cancelable: true });
        info.dispatchEvent(menu);
        expect(menu.defaultPrevented).toBe(true);
        expect(info.style.userSelect).toBe('none');
    });

    it('does nothing in dev mode, which has no real entity', async () => {
        const info = await mount({ dev_mode: true });
        tap(info);
        expect(fired).toEqual([]);
    });

    it('takes up new actions without drawing the card again', async () => {
        const info = await mount();
        card.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', tap_action: { action: 'none' } });
        expect(card.querySelector('.weather-info')).toBe(info);
        tap(info);
        expect(fired).toEqual([]);
        expect(info.hasAttribute('tabindex')).toBe(false);
    });
});

describe('the sun tracker\'s gestures', () => {
    let card: Card;

    afterEach(() => card?.remove());

    const mount = (config: object = {}) => {
        card = document.createElement('animated-sun-tracker-card') as Card;
        card.setConfig({ type: 'custom:animated-sun-tracker-card', sun_entity: 'sun.sun', ...config });
        card.hass = hass;
        document.body.appendChild(card);
        return card.shadowRoot!.querySelector('ha-card') as HTMLElement;
    };

    it('opens the sun\'s details on a tap', () => {
        const fired = listen();
        tap(mount());
        expect(fired).toEqual([['hass-more-info', { entityId: 'sun.sun' }]]);
    });

    it('hands a tap action to Home Assistant against the sun entity', () => {
        const fired = listen();
        tap(mount({ tap_action: { action: 'navigate', navigation_path: '/lovelace/sky' } }));
        expect(fired[0]).toEqual(['hass-action', {
            action: 'tap', config: expect.objectContaining({ entity: 'sun.sun' }),
        }]);
    });

    it('keeps its gestures when it draws itself again', () => {
        const fired = listen();
        const target = mount();
        card.hass = { ...hass, states: { ...hass.states, 'sun.sun': { ...hass.states['sun.sun'], attributes: { ...hass.states['sun.sun'].attributes, elevation: 30 } } } };
        expect(card.shadowRoot!.querySelector('ha-card')).toBe(target);
        tap(target);
        expect(fired).toHaveLength(1);
    });
});

describe('an action from YAML', () => {
    it('counts only as an object with an action', () => {
        expect(readAction({ action: 'toggle' })).toEqual({ action: 'toggle' });
        for (const value of ['more-info', null, {}, { action: 3 }]) expect(readAction(value)).toBeUndefined();
    });
});
