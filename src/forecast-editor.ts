// The forecast card's visual editor. It ships in the editor bundle with the
// other cards' editors, and the forecast card loads that bundle the first
// time someone opens its settings.

import { HomeAssistant } from './types';
import { escapeHtml, textField } from './utils';
import { readActions } from './actions';
import { mountActionsEditor, updateActionsEditor } from './action-editor';
import { FORECAST_DEFAULT_SLOTS as DEFAULT_SLOTS, FORECAST_MAX_SLOTS as MAX_SLOTS } from './constants';
import type { ForecastCardConfig, ForecastKind } from './forecast-card';

const EDITOR_STYLES = `
    .fc-editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 4px 0;
    }
    .fc-editor .fc-switches {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 4px;
    }
    .fc-editor .fc-switch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        min-height: 48px;
        font-size: 14px;
        color: var(--primary-text-color);
        cursor: pointer;
    }
    .fc-editor .fc-switch small {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: var(--secondary-text-color);
    }
    .fc-editor .fc-actions-title {
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 16px;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
    }
    .fc-editor #fc-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

const KINDS: Array<{ value: ForecastKind; label: string }> = [
    { value: 'daily', label: 'Daily' },
    { value: 'hourly', label: 'Hourly' },
];

export class AnimatedWeatherForecastEditor extends HTMLElement {
    private _config: ForecastCardConfig = {};
    private _hass?: HomeAssistant;
    private _initialized = false;

    setConfig(config: ForecastCardConfig): void {
        // The config this editor just sent comes straight back: drawing it
        // again would take the focus from whatever is being typed
        const unchanged = JSON.stringify(config) === JSON.stringify(this._config);
        this._config = { ...config };
        if (this._initialized && !unchanged) this._render();
    }

    set hass(hass: HomeAssistant) {
        this._hass = hass;
        if (this._initialized && this.isConnected) {
            this._updatePickers();
            updateActionsEditor(this.querySelector('#fc-actions'), hass);
        }
    }

    async connectedCallback() {
        this._config = this._config || {};
        await this._ensureEntityPickerLoaded();
        this._render();
        this._initialized = true;
        if (this._hass) this._updatePickers();
    }

    disconnectedCallback() {
        this.innerHTML = '';
    }

    /** Force HA to lazy-load the ha-entity-picker component */
    private async _ensureEntityPickerLoaded(): Promise<void> {
        if (customElements.get('ha-entity-picker')) return;
        try {
            const helpers = await (window as any).loadCardHelpers!();
            const tmp = await helpers.createCardElement({ type: 'entities', entities: [] });
            // Suppress harmless hass-undefined errors during module load
            const suppress = (e: PromiseRejectionEvent) => {
                if (e.reason?.message?.includes('localize') || e.reason?.message?.includes('hass')) {
                    e.preventDefault();
                }
            };
            window.addEventListener('unhandledrejection', suppress);
            try { await tmp.constructor.getConfigElement(); } catch (_) { /* ignore */ }
            setTimeout(() => window.removeEventListener('unhandledrejection', suppress), 2000);
        } catch (_) { /* silently ignore */ }
    }

    private _kind(): ForecastKind {
        return this._config.forecast_type === 'hourly' ? 'hourly' : 'daily';
    }

    private _render(): void {
        const c = this._config;
        const toggle = (id: string, label: string, hint: string, checked: boolean) => `
                    <label class="fc-switch" for="${id}">
                        <span>${label}<small>${hint}</small></span>
                        <ha-switch id="${id}" ${checked ? 'checked' : ''}></ha-switch>
                    </label>`;
        this.innerHTML = `
            <style>${EDITOR_STYLES}</style>
            <div class="fc-editor">
                <ha-entity-picker id="weather-picker" allow-custom-entity></ha-entity-picker>
                <ha-select id="forecast_type" label="Forecast"></ha-select>
                ${textField({
                    id: 'forecast_slots', label: 'Slots', type: 'number', min: 1, max: MAX_SLOTS,
                    value: c.forecast_slots ?? '', placeholder: String(DEFAULT_SLOTS[this._kind()]),
                    hint: `The most to show (${DEFAULT_SLOTS.daily} days or ${DEFAULT_SLOTS.hourly} hours by default). A narrow card shows fewer.`,
                })}
                <ha-entity-picker id="sun-picker" allow-custom-entity></ha-entity-picker>
                ${textField({ id: 'title', label: 'Title (optional)', value: c.title })}
                <div class="fc-switches">
                    ${toggle('show_header', 'Header', 'The title, or which forecast this is', c.show_header !== false)}
                    ${toggle('show_lines', 'Temperature lines', 'The high and low as lines across the card, or only their numbers', c.show_lines !== false)}
                    ${toggle('show_precipitation', 'Chance of rain', `From ${escapeHtml('10%')}, or the amount where the forecast has no chance`, c.show_precipitation !== false)}
                    ${toggle('animate', 'Animate the weather', 'Rain falls and clouds drift in each slot. Reduced motion keeps it still.', c.animate !== false)}
                    ${toggle('theme_palette', 'Blend with dashboard theme', 'Use theme colors instead of the sky', c.color_palette === 'theme')}
                </div>
                <div class="fc-actions-title">Interactions</div>
                <div id="fc-actions"></div>
            </div>
        `;
        this._updatePickers();
        this._attachListeners();
        mountActionsEditor(this.querySelector('#fc-actions') as HTMLElement, this._hass,
            readActions(this._config as Record<string, unknown>, this._config.entity), patch => this._update(patch));
    }

    private _updatePickers(): void {
        const pickers = [
            { id: '#weather-picker', value: this._config.entity || '', label: 'Weather entity', domains: ['weather'] },
            { id: '#sun-picker', value: this._config.sun_entity || '', label: 'Sun entity, for the sky\'s time of day (optional)', domains: ['sun'] },
        ];
        for (const p of pickers) {
            const el = this.querySelector(p.id) as any;
            if (!el) continue;
            if (this._hass) el.hass = this._hass;
            el.value = p.value;
            el.label = p.label;
            el.includeDomains = p.domains;
        }
    }

    /** Fill an ha-select once it's upgraded, and report the chosen value. */
    private _bindSelect(id: string, options: Array<{ value: string; label: string }>, current: string,
                        onChange: (value: string) => void): void {
        const select = this.querySelector(`#${id}`) as HTMLElement & { value: string; options: Array<{ value: string; label: string }> } | null;
        if (!select) return;
        const init = () => {
            select.options = options;
            select.value = current;
        };
        if (customElements.get('ha-select')) init();
        else customElements.whenDefined('ha-select').then(init);
        select.addEventListener('selected', ((e: Event) => {
            const value = (e as CustomEvent).detail?.value;
            if (!value) return;
            select.value = value;
            onChange(value);
        }) as EventListener);
        // Keep the dropdown closing from bubbling up and closing HA's dialog
        select.addEventListener('closed', (e: Event) => e.stopPropagation());
    }

    private _attachListeners(): void {
        this.querySelector('#weather-picker')?.addEventListener('value-changed', (e: any) => {
            this._update({ entity: e.detail.value });
        });
        this.querySelector('#sun-picker')?.addEventListener('value-changed', (e: any) => {
            this._update({ sun_entity: e.detail.value || undefined });
        });
        this._bindSelect('forecast_type', KINDS, this._kind(), value => {
            if (value === this._kind()) return;
            this._update({ forecast_type: value === 'hourly' ? 'hourly' : undefined });
            // The slots' placeholder is the new kind's default
            this._render();
        });
        this.querySelector('#forecast_slots')?.addEventListener('input', (e: Event) => {
            const value = Number((e.target as HTMLInputElement).value);
            this._update({ forecast_slots: isFinite(value) && value >= 1 ? Math.min(MAX_SLOTS, Math.round(value)) : undefined });
        });
        this.querySelector('#title')?.addEventListener('input', (e: Event) => {
            this._update({ title: (e.target as HTMLInputElement).value || undefined });
        });
        const onSwitch = (id: string, apply: (checked: boolean) => Partial<ForecastCardConfig>) => {
            this.querySelector(`#${id}`)?.addEventListener('change', (e: Event) => {
                this._update(apply((e.target as HTMLInputElement).checked));
            });
        };
        onSwitch('show_header', checked => ({ show_header: checked ? undefined : false }));
        onSwitch('show_lines', checked => ({ show_lines: checked ? undefined : false }));
        onSwitch('show_precipitation', checked => ({ show_precipitation: checked ? undefined : false }));
        onSwitch('animate', checked => ({ animate: checked ? undefined : false }));
        onSwitch('theme_palette', checked => ({ color_palette: checked ? 'theme' : undefined }));
    }

    private _update(patch: Partial<ForecastCardConfig>): void {
        const next: Record<string, unknown> = { ...this._config, ...patch };
        for (const key of Object.keys(next)) {
            if (next[key] === undefined || next[key] === '') delete next[key];
        }
        this._config = next as ForecastCardConfig;
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: { config: this._config },
            bubbles: true,
            composed: true
        }));
    }
}
