import { describe, it, expect } from 'vitest';
import '../../src/animated-weather-card';
import type { CardSuggestion, CustomCardDefinition, HomeAssistant } from '../../src/types';

type Stub = { getStubConfig(hass?: unknown, entities?: string[], entitiesFallback?: string[]): Record<string, unknown> };
const WeatherCard = customElements.get('animated-weather-card') as unknown as Stub;
const Tracker = customElements.get('animated-sun-tracker-card') as unknown as Stub;

const hass = (states: Record<string, string>) => ({
    states: Object.fromEntries(Object.entries(states).map(([id, state]) => [id, { entity_id: id, state, attributes: {} }])),
}) as unknown as HomeAssistant;

const home = hass({
    'weather.forecast_home': 'sunny', 'weather.garden': 'cloudy', 'sun.sun': 'above_horizon',
    'sensor.moon': 'waxing_gibbous', 'light.kitchen': 'on',
});

const entry = (type: string) => window.customCards.find(card => card.type === type) as CustomCardDefinition;

describe('a new card from the card picker', () => {
    it('starts without options the card no longer has', () => {
        const stub = WeatherCard.getStubConfig();
        expect(stub.entity).toBeTruthy();
        for (const removed of ['show_current', 'show_forecast', 'use_custom_colors']) {
            expect(stub).not.toHaveProperty(removed);
        }
    });

    it('starts on a weather entity not on the dashboard yet, with the sun', () => {
        expect(WeatherCard.getStubConfig(home, ['light.kitchen', 'weather.garden'], ['weather.forecast_home']))
            .toEqual({ entity: 'weather.garden', sun_entity: 'sun.sun' });
    });

    it('takes one that is on the dashboard when it has to, and leaves the sun out without one', () => {
        expect(WeatherCard.getStubConfig(home, ['light.kitchen'], ['weather.forecast_home']).entity).toBe('weather.forecast_home');
        expect(WeatherCard.getStubConfig(hass({ 'weather.home': 'rainy' }))).toEqual({ entity: 'weather.home' });
    });

    it('falls back to Met.no\'s usual name without any weather, for the editor to change', () => {
        expect(WeatherCard.getStubConfig(hass({ 'sun.sun': 'above_horizon' })).entity).toBe('weather.forecast_home');
    });

    it('starts the sun tracker on your sun, with a moon sensor found by its state', () => {
        expect(Tracker.getStubConfig(home)).toEqual({ sun_entity: 'sun.sun', moon_entity: 'sensor.moon' });
        expect(Tracker.getStubConfig(hass({ 'sun.sun': 'below_horizon', 'sensor.temperature': '21' }))).toEqual({ sun_entity: 'sun.sun' });
        expect(Tracker.getStubConfig()).toEqual({ sun_entity: 'sun.sun', moon_entity: 'sensor.moon_phase' });
    });

    it('shows both cards moving in the picker', () => {
        expect(entry('animated-weather-card').preview).toBe(true);
        expect(entry('animated-sun-tracker-card').preview).toBe(true);
    });
});

describe('suggestions for a picked entity', () => {
    const suggest = (type: string, entityId: string) =>
        entry(type).getEntitySuggestion!(home, entityId) as CardSuggestion[] | null;

    it('offers the weather card, regular and compact, for a weather entity', () => {
        expect(suggest('animated-weather-card', 'weather.garden')).toEqual([
            { label: 'Regular', config: { type: 'custom:animated-weather-card', entity: 'weather.garden', sun_entity: 'sun.sun' } },
            { label: 'Compact', config: { type: 'custom:animated-weather-card', entity: 'weather.garden', sun_entity: 'sun.sun', compact: true } },
        ]);
    });

    it('offers the sun tracker, regular and compact, for the sun', () => {
        expect(suggest('animated-sun-tracker-card', 'sun.sun')).toEqual([
            { label: 'Regular', config: { type: 'custom:animated-sun-tracker-card', sun_entity: 'sun.sun', moon_entity: 'sensor.moon' } },
            { label: 'Compact', config: { type: 'custom:animated-sun-tracker-card', sun_entity: 'sun.sun', moon_entity: 'sensor.moon', compact: true } },
        ]);
    });

    it('stays out of the way for everything else', () => {
        for (const id of ['light.kitchen', 'sensor.moon', 'sun.sun']) expect(suggest('animated-weather-card', id)).toBeNull();
        for (const id of ['weather.garden', 'sensor.moon', 'light.kitchen']) expect(suggest('animated-sun-tracker-card', id)).toBeNull();
    });
});
