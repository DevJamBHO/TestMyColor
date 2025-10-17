// Design System - Shadow Tokens
export const shadowTokens = {
    // Base shadows
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',

    // Colored shadows
    primary: {
        sm: '0 1px 2px 0 rgba(59, 130, 246, 0.05)',
        base: '0 1px 3px 0 rgba(59, 130, 246, 0.1), 0 1px 2px 0 rgba(59, 130, 246, 0.06)',
        md: '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)',
        lg: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
    },

    success: {
        sm: '0 1px 2px 0 rgba(16, 185, 129, 0.05)',
        base: '0 1px 3px 0 rgba(16, 185, 129, 0.1), 0 1px 2px 0 rgba(16, 185, 129, 0.06)',
        md: '0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06)',
    },

    warning: {
        sm: '0 1px 2px 0 rgba(245, 158, 11, 0.05)',
        base: '0 1px 3px 0 rgba(245, 158, 11, 0.1), 0 1px 2px 0 rgba(245, 158, 11, 0.06)',
        md: '0 4px 6px -1px rgba(245, 158, 11, 0.1), 0 2px 4px -1px rgba(245, 158, 11, 0.06)',
    },

    error: {
        sm: '0 1px 2px 0 rgba(239, 68, 68, 0.05)',
        base: '0 1px 3px 0 rgba(239, 68, 68, 0.1), 0 1px 2px 0 rgba(239, 68, 68, 0.06)',
        md: '0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)',
    },
} as const;

// Semantic shadows
export const semanticShadows = {
    // Component shadows
    component: {
        card: 'shadow.base',
        button: 'shadow.sm',
        input: 'shadow.sm',
        dropdown: 'shadow.lg',
        modal: 'shadow.2xl',
        tooltip: 'shadow.md',
    },

    // Interactive shadows
    interactive: {
        hover: 'shadow.md',
        focus: 'shadow.primary.md',
        active: 'shadow.inner',
        disabled: 'shadow.none',
    },

    // Status shadows
    status: {
        success: 'shadow.success.md',
        warning: 'shadow.warning.md',
        error: 'shadow.error.md',
        info: 'shadow.primary.md',
    }
} as const;

// Shadow utility functions
export const getShadowValue = (key: string): string => {
    const keys = key.split('.');
    let value: any = { ...shadowTokens, ...semanticShadows };

    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
    }

    return value;
};
