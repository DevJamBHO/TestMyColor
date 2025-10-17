// Design System - Border Tokens
export const borderTokens = {
    // Border widths
    width: {
        0: '0',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
    },

    // Border styles
    style: {
        solid: 'solid',
        dashed: 'dashed',
        dotted: 'dotted',
        double: 'double',
        none: 'none',
    },

    // Border radius
    radius: {
        none: '0',
        sm: '0.125rem',   // 2px
        base: '0.25rem',  // 4px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
        full: '9999px',
    },

    // Border colors (references to color tokens)
    color: {
        default: 'gray.200',
        muted: 'gray.300',
        strong: 'gray.400',
        primary: 'primary.500',
        success: 'success.500',
        warning: 'warning.500',
        error: 'error.500',
        transparent: 'transparent',
    }
} as const;

// Semantic borders
export const semanticBorders = {
    // Component borders
    component: {
        card: {
            width: 'border.width.1',
            style: 'border.style.solid',
            color: 'border.color.default',
            radius: 'border.radius.lg',
        },
        button: {
            width: 'border.width.1',
            style: 'border.style.solid',
            color: 'border.color.default',
            radius: 'border.radius.md',
        },
        input: {
            width: 'border.width.1',
            style: 'border.style.solid',
            color: 'border.color.default',
            radius: 'border.radius.md',
        },
        badge: {
            width: 'border.width.0',
            style: 'border.style.none',
            color: 'border.color.transparent',
            radius: 'border.radius.full',
        },
    },

    // State borders
    state: {
        focus: {
            width: 'border.width.2',
            style: 'border.style.solid',
            color: 'border.color.primary',
            radius: 'border.radius.md',
        },
        error: {
            width: 'border.width.1',
            style: 'border.style.solid',
            color: 'border.color.error',
            radius: 'border.radius.md',
        },
        success: {
            width: 'border.width.1',
            style: 'border.style.solid',
            color: 'border.color.success',
            radius: 'border.radius.md',
        },
        disabled: {
            width: 'border.width.1',
            style: 'border.style.solid',
            color: 'border.color.muted',
            radius: 'border.radius.md',
        },
    }
} as const;

// Border utility functions
export const getBorderValue = (key: string): string => {
    const keys = key.split('.');
    let value: any = { ...borderTokens, ...semanticBorders };

    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
    }

    return value;
};

// Helper function to get complete border style
export const getBorderStyle = (component: string, state?: string) => {
    const baseBorder = semanticBorders.component[component as keyof typeof semanticBorders.component];
    const stateBorder = state ? semanticBorders.state[state as keyof typeof semanticBorders.state] : null;

    return {
        borderWidth: stateBorder?.width || baseBorder?.width || '1px',
        borderStyle: stateBorder?.style || baseBorder?.style || 'solid',
        borderColor: stateBorder?.color || baseBorder?.color || 'gray.200',
        borderRadius: baseBorder?.radius || '0.25rem',
    };
};
