// Design System - Typography Tokens
export const typographyTokens = {
    // Font families
    fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },

    // Font sizes
    fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem', // 60px
    },

    // Font weights
    fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },

    // Line heights
    lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
    },

    // Letter spacing
    letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },

    // Text styles (predefined combinations)
    textStyles: {
        display: {
            fontSize: 'fontSize.6xl',
            fontWeight: 'fontWeight.bold',
            lineHeight: 'lineHeight.tight',
            letterSpacing: 'letterSpacing.tight',
        },
        h1: {
            fontSize: 'fontSize.5xl',
            fontWeight: 'fontWeight.bold',
            lineHeight: 'lineHeight.tight',
            letterSpacing: 'letterSpacing.tight',
        },
        h2: {
            fontSize: 'fontSize.4xl',
            fontWeight: 'fontWeight.bold',
            lineHeight: 'lineHeight.tight',
            letterSpacing: 'letterSpacing.tight',
        },
        h3: {
            fontSize: 'fontSize.3xl',
            fontWeight: 'fontWeight.semibold',
            lineHeight: 'lineHeight.snug',
            letterSpacing: 'letterSpacing.tight',
        },
        h4: {
            fontSize: 'fontSize.2xl',
            fontWeight: 'fontWeight.semibold',
            lineHeight: 'lineHeight.snug',
            letterSpacing: 'letterSpacing.normal',
        },
        h5: {
            fontSize: 'fontSize.xl',
            fontWeight: 'fontWeight.medium',
            lineHeight: 'lineHeight.snug',
            letterSpacing: 'letterSpacing.normal',
        },
        h6: {
            fontSize: 'fontSize.lg',
            fontWeight: 'fontWeight.medium',
            lineHeight: 'lineHeight.snug',
            letterSpacing: 'letterSpacing.normal',
        },
        body: {
            fontSize: 'fontSize.base',
            fontWeight: 'fontWeight.normal',
            lineHeight: 'lineHeight.relaxed',
            letterSpacing: 'letterSpacing.normal',
        },
        bodySmall: {
            fontSize: 'fontSize.sm',
            fontWeight: 'fontWeight.normal',
            lineHeight: 'lineHeight.normal',
            letterSpacing: 'letterSpacing.normal',
        },
        caption: {
            fontSize: 'fontSize.xs',
            fontWeight: 'fontWeight.normal',
            lineHeight: 'lineHeight.normal',
            letterSpacing: 'letterSpacing.wide',
        },
        button: {
            fontSize: 'fontSize.sm',
            fontWeight: 'fontWeight.medium',
            lineHeight: 'lineHeight.none',
            letterSpacing: 'letterSpacing.wide',
        },
        code: {
            fontSize: 'fontSize.sm',
            fontWeight: 'fontWeight.normal',
            lineHeight: 'lineHeight.normal',
            letterSpacing: 'letterSpacing.normal',
            fontFamily: 'fontFamily.mono',
        },
    }
} as const;

// Typography utility functions
export const getTypographyValue = (path: string): string => {
    const keys = path.split('.');
    let value: any = typographyTokens;

    for (const key of keys) {
        value = value?.[key];
        if (value === undefined) return path;
    }

    return Array.isArray(value) ? value.join(', ') : value;
};
