declare global {
    interface Window {
        plausible: (eventName: string, options?: PlausibleOptions) => void;
    }
}

interface PlausibleOptions {
    props?: Record<string, string | number | boolean>;
    callback?: () => void;
}

export const trackEvent = (eventName: string, props?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined' && window.plausible) {
        window.plausible(eventName, { props });
    }
};

// Événements spécifiques à l'application
export const AnalyticsEvents = {
    // Événements de palette
    COLOR_CHANGED: 'Color Changed',
    COLOR_COPIED: 'Color Copied',

    // Événements de contraste
    CONTRAST_CHECKED: 'Contrast Checked',
    CONTRAST_SUGGESTION_APPLIED: 'Contrast Suggestion Applied',

    // Événements de typographie
    FONT_CHANGED: 'Font Changed',

    // Événements d'engagement
    BUTTON_CLICKED: 'Button Clicked',
    FORM_SUBMITTED: 'Form Submitted',
} as const;

// Exemple d'utilisation avec des propriétés typées
export const trackPaletteEvent = (
    event: typeof AnalyticsEvents[keyof typeof AnalyticsEvents],
    paletteId?: string,
    additionalProps?: Record<string, string | number | boolean>
) => {
    const props = {
        ...(paletteId && { paletteId }),
        ...additionalProps,
    };

    trackEvent(event, props);
}; 