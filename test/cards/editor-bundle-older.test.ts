import { describe, it, expect } from 'vitest';
import '../../src/animated-weather-card';

// Its own file: the cards remember a bundle they've loaded, for the page's life

describe('an older editor bundle beside a newer card', () => {
    it('still opens the weather card\'s editor, which is all it has', async () => {
        const Weather = customElements.get('animated-weather-card') as unknown as { getConfigElement(): Promise<HTMLElement> };
        const opening = Weather.getConfigElement();
        const script = document.head.querySelector<HTMLScriptElement>('script[src*="animated-weather-card-editor"]')!;

        // Before 1.2.0 the bundle registered only the weather card's editor
        customElements.define('animated-weather-card-editor', class extends HTMLElement {});
        script.onload!(new Event('load'));
        expect((await opening).localName).toBe('animated-weather-card-editor');
    });
});
