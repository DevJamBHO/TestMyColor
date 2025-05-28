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

    // Événements spécifiques pour le tracking des visites IA
    AI_VISIT: 'ai_visit',
    AI_INTERACTION: 'ai_interaction',
    AI_COLOR_TEST: 'ai_color_test',
    AI_TYPO_TEST: 'ai_typo_test',
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

// Fonction pour détecter si la visite provient probablement d'une IA
const detectAIVisit = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isAI = userAgent.includes('openai') ||
        userAgent.includes('anthropic') ||
        userAgent.includes('claude') ||
        userAgent.includes('gpt');

    if (isAI) {
        trackPaletteEvent(AnalyticsEvents.AI_VISIT, undefined, {
            userAgent: userAgent,
            timestamp: new Date().toISOString()
        });
    }

    return isAI;
};

// Appeler la détection au chargement
if (typeof window !== 'undefined') {
    detectAIVisit();
} 