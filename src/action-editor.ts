// What a tap, a hold and a double tap do: the controls both cards' editors share

import { HomeAssistant } from './types';
import { ActionConfig, ActionsConfig, readAction } from './actions';
import { cardLocalize, escapeHtml, textField } from './utils';

export type ActionKey = 'tap_action' | 'hold_action' | 'double_tap_action';
export type ActionsPatch = Partial<Record<ActionKey, ActionConfig | undefined>>;

const KEYS: readonly ActionKey[] = ['tap_action', 'hold_action', 'double_tap_action'];

/** Home Assistant's own labels for them, in the user's language */
const LABELS: Record<ActionKey, [string, string]> = {
    tap_action: ['ui.panel.lovelace.editor.card.generic.tap_action', 'Tap behavior'],
    hold_action: ['ui.panel.lovelace.editor.card.generic.hold_action', 'Hold behavior'],
    double_tap_action: ['ui.panel.lovelace.editor.card.generic.double_tap_action', 'Double tap behavior'],
};

const label = (hass: HomeAssistant | undefined, key: ActionKey) => cardLocalize(hass, ...LABELS[key]);

/**
 * Home Assistant's action picker, as its own cards' editors have it: a tap
 * opens more-info by default, a hold and a double tap do nothing. The
 * entity gives the picker its context (more-info, toggle).
 */
const SCHEMA = KEYS.map(name => ({
    name,
    selector: { ui_action: { default_action: name === 'tap_action' ? 'more-info' : 'none' } },
    context: { entity_id: 'entity' },
}));

type HaForm = HTMLElement & {
    hass?: HomeAssistant;
    data?: Record<string, unknown>;
    schema?: unknown;
    computeLabel?: (schema: { name: string }) => string;
};

/**
 * Fill a container with the three gestures' controls. Home Assistant's own
 * ha-form when it's defined; until then, and if it never is, a select per
 * gesture for the plain actions, with a field for a path or a URL. An action
 * set in YAML that the select doesn't offer is kept, and shown as such.
 * Changes go out as a patch: an action, or undefined for the default.
 */
export function mountActionsEditor(container: HTMLElement, hass: HomeAssistant | undefined, config: ActionsConfig,
                                   onChange: (patch: ActionsPatch) => void): void {
    let current: ActionsConfig = { ...config };
    const change = (patch: ActionsPatch) => {
        current = { ...current, ...patch };
        onChange(patch);
    };

    const form = () => {
        const el = document.createElement('ha-form') as HaForm;
        el.hass = hass;
        el.data = { ...current };
        el.schema = SCHEMA;
        el.computeLabel = schema => label(hass, schema.name as ActionKey);
        el.addEventListener('value-changed', (e: Event) => {
            // Home Assistant's editor dialog listens for config-changed, not this
            e.stopPropagation();
            const value = ((e as CustomEvent).detail?.value ?? {}) as Record<string, unknown>;
            const patch: ActionsPatch = {};
            for (const key of KEYS) {
                const next = readAction(value[key]);
                if (JSON.stringify(next) !== JSON.stringify(current[key])) patch[key] = next;
            }
            el.data = { ...current, ...patch };
            if (Object.keys(patch).length) change(patch);
        });
        container.replaceChildren(el);
    };

    if (customElements.get('ha-form')) {
        form();
        return;
    }
    renderFallback(container, hass, () => current, change);
    customElements.whenDefined('ha-form').then(() => {
        if (container.isConnected) form();
    });
    void loadHaForm();
}

/** Give the form Home Assistant's latest state */
export function updateActionsEditor(container: HTMLElement | null, hass: HomeAssistant | undefined): void {
    const form = container?.querySelector('ha-form') as HaForm | null;
    if (form && hass) form.hass = hass;
}

/**
 * Home Assistant defines ha-form when one of its own editors loads. The tile
 * card's editor uses it, with the action picker, so load that.
 */
async function loadHaForm(): Promise<void> {
    try {
        const helpers = await window.loadCardHelpers?.();
        const tile = await helpers?.createCardElement({ type: 'tile', entity: 'sun.sun' });
        await (tile?.constructor as { getConfigElement?: () => Promise<HTMLElement> | HTMLElement } | undefined)?.getConfigElement?.();
    } catch (_) {
        // The fallback stays
    }
}

const PLAIN_ACTIONS = [
    { value: 'default', label: 'Default' },
    { value: 'more-info', label: 'More info' },
    { value: 'navigate', label: 'Navigate' },
    { value: 'url', label: 'Open a URL' },
    { value: 'none', label: 'Nothing' },
];

/** The field an action needs: where it goes */
const ACTION_FIELDS: Record<string, { key: string; label: string; placeholder: string }> = {
    navigate: { key: 'navigation_path', label: 'Path', placeholder: '/lovelace/weather' },
    url: { key: 'url_path', label: 'URL', placeholder: 'https://' },
};

function renderFallback(container: HTMLElement, hass: HomeAssistant | undefined, current: () => ActionsConfig,
                        change: (patch: ActionsPatch) => void): void {
    container.innerHTML = KEYS.map(key => {
        const action = current()[key];
        const field = action ? ACTION_FIELDS[action.action] : undefined;
        return `<div class="option"><ha-select data-action="${key}" label="${escapeHtml(label(hass, key))}"></ha-select></div>`
            + (field ? `<div class="option">${textField({
                id: `${key}-${field.key}`, label: field.label, placeholder: field.placeholder,
                value: typeof action?.[field.key] === 'string' ? action[field.key] as string : '',
            })}</div>` : '');
    }).join('');

    for (const key of KEYS) {
        const action = current()[key];
        const select = container.querySelector(`[data-action="${key}"]`) as HTMLElement & { value: string; options: typeof PLAIN_ACTIONS } | null;
        if (!select) continue;
        // An action set in YAML (perform-action, toggle, assist) stays as it is
        const options = action && !PLAIN_ACTIONS.some(o => o.value === action.action)
            ? [...PLAIN_ACTIONS, { value: action.action, label: `${action.action} (set in YAML)` }]
            : PLAIN_ACTIONS;
        const init = () => {
            select.options = options;
            select.value = action?.action ?? 'default';
        };
        if (customElements.get('ha-select')) init();
        else customElements.whenDefined('ha-select').then(init);
        select.addEventListener('selected', ((e: CustomEvent) => {
            const value = e.detail?.value as string | undefined;
            if (!value || value === (current()[key]?.action ?? 'default')) return;
            change({ [key]: value === 'default' ? undefined : { action: value } });
            renderFallback(container, hass, current, change);
        }) as EventListener);
        select.addEventListener('closed', (e: Event) => e.stopPropagation());

        const field = action ? ACTION_FIELDS[action.action] : undefined;
        const input = field ? container.querySelector(`#${key}-${field.key}`) : null;
        input?.addEventListener('input', (e: Event) => {
            const value = (e.target as HTMLInputElement).value.trim();
            const { [field!.key]: _, ...rest } = current()[key] ?? { action: action!.action };
            change({ [key]: { ...rest, action: action!.action, ...(value ? { [field!.key]: value } : {}) } });
        });
    }
}
