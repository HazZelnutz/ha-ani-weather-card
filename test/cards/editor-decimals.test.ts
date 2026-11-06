import { describe, it, expect, afterEach } from 'vitest';
import '../../src/animated-weather-card-editor';

type Editor = HTMLElement & { setConfig(config: object): void; hass: unknown };

const flush = () => new Promise(resolve => setTimeout(resolve, 0));

describe('the editor\'s temperature decimals', () => {
    let editor: Editor;

    afterEach(() => editor?.remove());

    const open = async (config: object) => {
        editor = document.createElement('animated-weather-card-editor') as Editor;
        editor.setConfig({ type: 'custom:animated-weather-card', entity: 'weather.home', ...config });
        document.body.appendChild(editor);
        await flush();
        return editor.querySelector('#temperature_decimals') as HTMLInputElement;
    };

    it('writes 1 when switched on, and nothing when switched off', async () => {
        const toggle = await open({});
        expect(toggle.hasAttribute('checked')).toBe(false);

        let config: Record<string, unknown> | undefined;
        editor.addEventListener('config-changed', (e) => { config = (e as CustomEvent).detail.config; });
        toggle.checked = true;
        toggle.dispatchEvent(new Event('change'));
        expect(config).toMatchObject({ temperature_decimals: 1 });
        toggle.checked = false;
        toggle.dispatchEvent(new Event('change'));
        expect(config).not.toHaveProperty('temperature_decimals');
    });

    it('shows a card set to one decimal as on', async () => {
        expect((await open({ temperature_decimals: 1 })).hasAttribute('checked')).toBe(true);
    });
});
