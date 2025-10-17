// Design System - Color Tokens
export const colorTokens = {
    // Base colors
    white: '#FFFFFF',
    black: '#000000',

    // Gray scale
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
    },

    // Semantic colors
    primary: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
    },

    secondary: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
    },

    success: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
    },

    warning: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
    },

    error: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
    },

    // Accessibility colors
    accessible: {
        focus: '#3B82F6',
        focusRing: 'rgba(59, 130, 246, 0.5)',
        selection: 'rgba(59, 130, 246, 0.2)',
    }
} as const;

// Color utility functions
export const getColorValue = (colorPath: string): string => {
    const keys = colorPath.split('.');
    let value: any = colorTokens;

    for (const key of keys) {
        value = value?.[key];
        if (value === undefined) return colorPath;
    }

    return value;
};

// Semantic color mapping
export const semanticColors = {
    text: {
        primary: 'gray.900',
        secondary: 'gray.600',
        tertiary: 'gray.500',
        inverse: 'white',
        disabled: 'gray.400',
    },
    background: {
        primary: 'white',
        secondary: 'gray.50',
        tertiary: 'gray.100',
        inverse: 'gray.900',
        disabled: 'gray.100',
    },
    border: {
        primary: 'gray.200',
        secondary: 'gray.300',
        focus: 'primary.500',
        error: 'error.500',
    },
    status: {
        success: 'success.500',
        warning: 'warning.500',
        error: 'error.500',
        info: 'primary.500',
    }
} as const;
