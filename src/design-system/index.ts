// Design System - Main Export
export * from './tokens';

// Components
export * from './components/Button';
export * from './components/Card';
export * from './components/Input';

// Provider
export { DesignSystemProvider } from './DesignSystemProvider';

// Utility functions
export const createTheme = (customTokens: Record<string, any>) => {
    return {
        ...customTokens,
        // Merge with default tokens
    };
};

// Design system version
export const DESIGN_SYSTEM_VERSION = '1.0.0';