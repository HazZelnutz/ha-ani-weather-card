import { describe, it, expect, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import '../../src/animated-weather-card';

// No editor bundle import here: this file checks the cards fetch it themselves.

type WithEditor = { getConfigElement(): Promise<HTMLElement> };

describe('the editors\' bundle', () => {
    const editorScripts = () => document.head.querySelectorAll<HTMLScriptElement>('script[src*="animated-weather-card-editor"]');

    afterEach(() => {
        editorScripts().forEach(s => s.remove());
        document.head.querySelectorAll('script[data-test-main]').forEach(s => s.remove());
    });

    it('holds both cards\' editors, and the main bundle neither', () => {
        const main = readFileSync(join(process.cwd(), 'animated-weather-card.js'), 'utf8');
        const editors = readFileSync(join(process.cwd(), 'animated-weather-card-editor.js'), 'utf8');
        // The tracker's editor, and the gestures' controls
        for (const text of ['Share the sky of a weather entity', 'Double tap behavior']) {
            expect(editors).toContain(text);
            expect(main).not.toContain(text);
        }
    });

    it('is fetched by the sun tracker from beside the main bundle, the first time its settings open', async () => {
        const main = document.createElement('script');
        main.dataset.testMain = '';
        main.src = 'https://ha.local/hacsfiles/ha-ani-weather-card/animated-weather-card.js?hacstag=123';
        document.head.appendChild(main);

        const Tracker = customElements.get('animated-sun-tracker-card') as unknown as WithEditor;
        const opening = Tracker.getConfigElement();
        const [script] = editorScripts();
        expect(script.src).toBe('https://ha.local/hacsfiles/ha-ani-weather-card/animated-weather-card-editor.js?hacstag=123');

        // The bundle registers both editors as it runs
        customElements.define('animated-weather-card-editor', class extends HTMLElement {});
        customElements.define('animated-sun-tracker-editor', class extends HTMLElement {});
        script.onload!(new Event('load'));
        expect((await opening).localName).toBe('animated-sun-tracker-editor');

        // The weather card finds it there, without another fetch
        const Weather = customElements.get('animated-weather-card') as unknown as WithEditor;
        expect((await Weather.getConfigElement()).localName).toBe('animated-weather-card-editor');
        expect(editorScripts()).toHaveLength(1);
    });
});
