declare global {
    interface Window {
        plausible: (eventName: string, options?: PlausibleOptions) => void;
    }
}

interface PlausibleOptions {
    props?: Record<string, string | number | boolean>;
    callback?: () => void;
}

// Initialisation de Plausible
const initPlausible = () => {
    if (typeof window !== 'undefined') {
        // Track pageview
        window.plausible('pageview');

        // Track initial AI visit if applicable
        detectAIVisit();
    }
};

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
    PALETTE_GENERATED: 'Palette Generated',
    PALETTE_EXPORTED: 'Palette Exported',

    // Événements de contraste RGAA
    CONTRAST_CHECKED: 'Contrast Checked',
    CONTRAST_SUGGESTION_APPLIED: 'Contrast Suggestion Applied',
    RGAA_CRITERIA_VIEWED: 'RGAA Criteria Viewed',
    WCAG_LEVEL_SELECTED: 'WCAG Level Selected',

    // Événements de typographie
    FONT_CHANGED: 'Font Changed',
    TYPOGRAPHY_TESTED: 'Typography Tested',
    READABILITY_CHECKED: 'Readability Checked',

    // Événements de simulation daltonisme
    COLORBLIND_SIMULATION_ENABLED: 'Colorblind Simulation Enabled',
    COLORBLIND_TYPE_SELECTED: 'Colorblind Type Selected',

    // Événements d'engagement
    BUTTON_CLICKED: 'Button Clicked',
    FORM_SUBMITTED: 'Form Submitted',
    SECTION_VIEWED: 'Section Viewed',
    TOOL_USED: 'Tool Used',

    // Événements de navigation
    PAGE_VIEWED: 'Page Viewed',
    MENU_ITEM_CLICKED: 'Menu Item Clicked',
    BREADCRUMB_CLICKED: 'Breadcrumb Clicked',

    // Événements de conformité RGAA
    RGAA_COMPLIANCE_CHECKED: 'RGAA Compliance Checked',
    RGAA_CRITERIA_EXPANDED: 'RGAA Criteria Expanded',
    RGAA_EDUCATION_VIEWED: 'RGAA Education Viewed',

    // Événements d'export
    CSS_EXPORTED: 'CSS Exported',
    JSON_EXPORTED: 'JSON Exported',
    ADOBE_SWATCH_EXPORTED: 'Adobe Swatch Exported',

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

// Fonctions utilitaires pour les événements RGAA
export const trackRGAAEvent = (
    event: typeof AnalyticsEvents[keyof typeof AnalyticsEvents],
    criteria?: string,
    additionalProps?: Record<string, string | number | boolean>
) => {
    const props = {
        ...(criteria && { criteria }),
        tool: 'RGAA',
        ...additionalProps,
    };
    trackEvent(event, props);
};

export const trackColorEvent = (
    event: typeof AnalyticsEvents[keyof typeof AnalyticsEvents],
    colorValue?: string,
    additionalProps?: Record<string, string | number | boolean>
) => {
    const props = {
        ...(colorValue && { colorValue }),
        tool: 'Color',
        ...additionalProps,
    };
    trackEvent(event, props);
};

export const trackTypographyEvent = (
    event: typeof AnalyticsEvents[keyof typeof AnalyticsEvents],
    fontFamily?: string,
    additionalProps?: Record<string, string | number | boolean>
) => {
    const props = {
        ...(fontFamily && { fontFamily }),
        tool: 'Typography',
        ...additionalProps,
    };
    trackEvent(event, props);
};

export const trackToolUsage = (
    toolName: string,
    action: string,
    additionalProps?: Record<string, string | number | boolean>
) => {
    trackEvent(AnalyticsEvents.TOOL_USED, {
        tool: toolName,
        action,
        ...additionalProps,
    });
};

// Appeler l'initialisation au chargement
if (typeof window !== 'undefined') {
    initPlausible();
} 