import React from 'react';
import { colorTokens, getColorValue } from '../../tokens';
import { getSpacingValue } from '../../tokens/spacing';
import { getBorderValue } from '../../tokens/borders';
import { getShadowValue } from '../../tokens/shadows';

// Button variants
export type ButtonVariant = 'filled' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';

// Button props interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    fullWidth?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
}

// Size configurations
const sizeConfig = {
    xs: {
        padding: '0.25rem 0.5rem',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        minHeight: '1.5rem',
    },
    sm: {
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        minHeight: '2rem',
    },
    md: {
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        minHeight: '2.5rem',
    },
    lg: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        minHeight: '3rem',
    },
    xl: {
        padding: '1rem 2rem',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        minHeight: '3.5rem',
    },
};

// Color configurations
const getColorConfig = (color: ButtonColor, variant: ButtonVariant) => {
    const colorMap = {
        primary: colorTokens.primary,
        secondary: colorTokens.secondary,
        success: colorTokens.success,
        warning: colorTokens.warning,
        error: colorTokens.error,
        neutral: colorTokens.gray,
    };

    const colors = colorMap[color];

    switch (variant) {
        case 'filled':
            return {
                backgroundColor: colors[500],
                color: 'white',
                borderColor: colors[500],
                hover: {
                    backgroundColor: colors[600],
                    borderColor: colors[600],
                },
                active: {
                    backgroundColor: colors[700],
                    borderColor: colors[700],
                },
                disabled: {
                    backgroundColor: colorTokens.gray[300],
                    color: colorTokens.gray[500],
                    borderColor: colorTokens.gray[300],
                },
            };
        case 'outline':
            return {
                backgroundColor: 'transparent',
                color: colors[500],
                borderColor: colors[500],
                hover: {
                    backgroundColor: colors[50],
                    color: colors[600],
                    borderColor: colors[600],
                },
                active: {
                    backgroundColor: colors[100],
                    color: colors[700],
                    borderColor: colors[700],
                },
                disabled: {
                    backgroundColor: 'transparent',
                    color: colorTokens.gray[400],
                    borderColor: colorTokens.gray[300],
                },
            };
        case 'ghost':
            return {
                backgroundColor: 'transparent',
                color: colors[500],
                borderColor: 'transparent',
                hover: {
                    backgroundColor: colors[50],
                    color: colors[600],
                },
                active: {
                    backgroundColor: colors[100],
                    color: colors[700],
                },
                disabled: {
                    backgroundColor: 'transparent',
                    color: colorTokens.gray[400],
                },
            };
        case 'link':
            return {
                backgroundColor: 'transparent',
                color: colors[500],
                borderColor: 'transparent',
                textDecoration: 'underline',
                hover: {
                    color: colors[600],
                    textDecoration: 'underline',
                },
                active: {
                    color: colors[700],
                    textDecoration: 'underline',
                },
                disabled: {
                    color: colorTokens.gray[400],
                    textDecoration: 'none',
                },
            };
        default:
            return getColorConfig('primary', 'filled');
    }
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'filled',
    size = 'md',
    color = 'primary',
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    className = '',
    style,
    ...props
}) => {
    const sizeStyles = sizeConfig[size];
    const colorConfig = getColorConfig(color, variant);
    const isDisabled = disabled || loading;

    const buttonStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        width: fullWidth ? '100%' : 'auto',
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        lineHeight: sizeStyles.lineHeight,
        minHeight: sizeStyles.minHeight,
        fontWeight: '500',
        textAlign: 'center',
        border: '1px solid',
        borderRadius: '0.375rem',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease-in-out',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',

        // Base styles
        backgroundColor: isDisabled ? colorConfig.disabled.backgroundColor : colorConfig.backgroundColor,
        color: isDisabled ? colorConfig.disabled.color : colorConfig.color,
        borderColor: isDisabled ? colorConfig.disabled.borderColor : colorConfig.borderColor,
        textDecoration: variant === 'link' ? (isDisabled ? colorConfig.disabled.textDecoration : colorConfig.textDecoration) : 'none',

        // Focus styles will be handled via onFocus/onBlur events
    };

    const [isHovered, setIsHovered] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const dynamicStyles = {
        ...buttonStyles,
        ...(isHovered && !isDisabled ? {
            backgroundColor: colorConfig.hover.backgroundColor,
            color: colorConfig.hover.color,
            borderColor: colorConfig.hover.borderColor,
            transform: 'translateY(-1px)',
            boxShadow: getShadowValue('shadow.md'),
        } : {}),
        ...(isActive && !isDisabled ? {
            backgroundColor: colorConfig.active.backgroundColor,
            color: colorConfig.active.color,
            borderColor: colorConfig.active.borderColor,
            transform: 'translateY(0)',
            boxShadow: getShadowValue('shadow.sm'),
        } : {}),
        ...(isFocused ? {
            boxShadow: `0 0 0 3px ${getColorValue('accessible.focusRing')}`,
        } : {}),
    };

    return (
        <button
            type="button"
            disabled={isDisabled}
            className={`design-system-button ${className}`}
            style={{ ...dynamicStyles, ...style }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
        >
            {loading && (
                <div
                    style={{
                        width: '1rem',
                        height: '1rem',
                        border: '2px solid transparent',
                        borderTop: '2px solid currentColor',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        marginRight: '0.5rem',
                    }}
                />
            )}
            {!loading && leftIcon && (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    {leftIcon}
                </span>
            )}
            <span>{children}</span>
            {!loading && rightIcon && (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    {rightIcon}
                </span>
            )}

            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </button>
    );
};

export default Button;
