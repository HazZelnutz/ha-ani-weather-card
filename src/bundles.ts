// Loading the card's other bundles: the editors, the note writer, the planes and the dev panel

const bundleLoads = new Map<string, Promise<void>>();

/**
 * Load another of this card's bundles from the folder the main bundle was
 * loaded from, once. isReady says whether it registered what it brings.
 */
export function loadSiblingBundle(name: string, isReady: () => boolean): Promise<void> {
    const pending = bundleLoads.get(name);
    if (pending) return pending;
    const load = new Promise<void>((resolve, reject) => {
        // Find the main bundle's <script> tag so we can resolve the other
        // bundle's URL relative to it (keeping its ?v= cache buster).
        // Falls back to a same-dir relative URL if detection fails.
        const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
        const main = scripts.find(s => /animated-weather-card(?:\.min)?\.js/.test(s.src));
        const url = main
            ? main.src.replace(/animated-weather-card(\.min)?\.js/, `${name}$1.js`)
            : `${name}.js`;

        const script = document.createElement('script');
        script.src = url;
        script.type = 'module';
        script.async = true;
        // Every bundle registers itself synchronously when it runs
        script.onload = () => isReady() ? resolve() : reject(new Error(`${url} loaded but registered nothing`));
        script.onerror = () => reject(new Error(`Failed to load ${url}`));
        document.head.appendChild(script);
    });
    // A failed load can be retried later (e.g. after a network blip)
    load.catch(() => bundleLoads.delete(name));
    bundleLoads.set(name, load);
    return load;
}

/** The editors' bundle, with both cards' visual editors */
export function loadEditorBundle(): Promise<void> {
    return loadSiblingBundle('animated-weather-card-editor',
        () => !!customElements.get('animated-weather-card-editor') && !!customElements.get('animated-sun-tracker-editor'));
}
