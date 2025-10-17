// Design System - Spacing Tokens
export const spacingTokens = {
    // Base spacing scale (4px base unit)
    0: '0',
    px: '1px',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    3.5: '0.875rem',  // 14px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    9: '2.25rem',     // 36px
    10: '2.5rem',     // 40px
    11: '2.75rem',    // 44px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    28: '7rem',       // 112px
    32: '8rem',       // 128px
    36: '9rem',       // 144px
    40: '10rem',      // 160px
    44: '11rem',      // 176px
    48: '12rem',      // 192px
    52: '13rem',      // 208px
    56: '14rem',      // 224px
    60: '15rem',      // 240px
    64: '16rem',      // 256px
    72: '18rem',      // 288px
    80: '20rem',      // 320px
    96: '24rem',      // 384px
} as const;

// Semantic spacing
export const semanticSpacing = {
    // Component spacing
    component: {
        xs: 'spacing.1',    // 4px
        sm: 'spacing.2',    // 8px
        md: 'spacing.3',    // 12px
        lg: 'spacing.4',    // 16px
        xl: 'spacing.6',    // 24px
        '2xl': 'spacing.8', // 32px
    },

    // Layout spacing
    layout: {
        xs: 'spacing.2',    // 8px
        sm: 'spacing.4',    // 16px
        md: 'spacing.6',    // 24px
        lg: 'spacing.8',    // 32px
        xl: 'spacing.12',   // 48px
        '2xl': 'spacing.16', // 64px
    },

    // Section spacing
    section: {
        xs: 'spacing.8',    // 32px
        sm: 'spacing.12',   // 48px
        md: 'spacing.16',   // 64px
        lg: 'spacing.20',   // 80px
        xl: 'spacing.24',   // 96px
        '2xl': 'spacing.32', // 128px
    }
} as const;

// Spacing utility functions
export const getSpacingValue = (key: string | number): string => {
    if (typeof key === 'number') {
        return spacingTokens[key as keyof typeof spacingTokens] || `${key}px`;
    }

    const keys = key.split('.');
    let value: any = { ...spacingTokens, ...semanticSpacing };

    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
    }

    return value;
};
