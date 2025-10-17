// Design System - Main Tokens Export
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';
export * from './borders';

// Token resolver utility
export const resolveToken = (tokenPath: string): string => {
    const [category, ...path] = tokenPath.split('.');

    switch (category) {
        case 'color':
            return require('./colors').getColorValue(path.join('.'));
        case 'fontSize':
        case 'fontWeight':
        case 'lineHeight':
        case 'letterSpacing':
        case 'fontFamily':
            return require('./typography').getTypographyValue(`${category}.${path.join('.')}`);
        case 'spacing':
            return require('./spacing').getSpacingValue(path.join('.'));
        case 'shadow':
            return require('./shadows').getShadowValue(path.join('.'));
        case 'border':
            return require('./borders').getBorderValue(path.join('.'));
        default:
            return tokenPath;
    }
};

// Design system configuration
export const designSystemConfig = {
    name: 'TestMyColor Design System',
    version: '1.0.0',
    description: 'A comprehensive design system for color testing and accessibility tools',

    // Breakpoints
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    // Z-index scale
    zIndex: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },

    // Animation durations
    duration: {
        fastest: '50ms',
        faster: '100ms',
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
        slower: '500ms',
        slowest: '1000ms',
    },

    // Easing functions
    easing: {
        linear: 'linear',
        ease: 'ease',
        easeIn: 'ease-in',
        easeOut: 'ease-out',
        easeInOut: 'ease-in-out',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
} as const;
