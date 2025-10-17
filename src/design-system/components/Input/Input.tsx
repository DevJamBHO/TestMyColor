import React from 'react';
import { colorTokens, getColorValue } from '../../tokens';
import { getSpacingValue } from '../../tokens/spacing';
import { getShadowValue } from '../../tokens/shadows';
import { getBorderValue } from '../../tokens/borders';

// Input variants
export type InputVariant = 'outlined' | 'filled' | 'underlined';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success' | 'warning';

// Input props interface
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: InputVariant;
    size?: InputSize;
    state?: InputState;
    label?: string;
    helperText?: string;
    errorText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

// Size configurations
const sizeConfig = {
    sm: {
        padding: '0.375rem 0.75rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        minHeight: '2rem',
    },
    md: {
        padding: '0.5rem 0.75rem',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        minHeight: '2.5rem',
    },
    lg: {
        padding: '0.75rem 1rem',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        minHeight: '3rem',
    },
};

// Variant configurations
const getVariantConfig = (variant: InputVariant) => {
    switch (variant) {
        case 'outlined':
            return {
                backgroundColor: 'white',
                border: `1px solid ${getColorValue('gray.300')}`,
                borderRadius: '0.375rem',
            };
        case 'filled':
            return {
                backgroundColor: getColorValue('gray.50'),
                border: 'none',
                borderRadius: '0.375rem',
                borderBottom: `2px solid ${getColorValue('gray.300')}`,
            };
        case 'underlined':
            return {
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '0',
                borderBottom: `1px solid ${getColorValue('gray.300')}`,
            };
        default:
            return getVariantConfig('outlined');
    }
};

// State configurations
const getStateConfig = (state: InputState) => {
    switch (state) {
        case 'error':
            return {
                borderColor: getColorValue('error.500'),
                color: getColorValue('error.700'),
                focusBorderColor: getColorValue('error.500'),
                focusRingColor: getColorValue('error.100'),
            };
        case 'success':
            return {
                borderColor: getColorValue('success.500'),
                color: getColorValue('success.700'),
                focusBorderColor: getColorValue('success.500'),
                focusRingColor: getColorValue('success.100'),
            };
        case 'warning':
            return {
                borderColor: getColorValue('warning.500'),
                color: getColorValue('warning.700'),
                focusBorderColor: getColorValue('warning.500'),
                focusRingColor: getColorValue('warning.100'),
            };
        default:
            return {
                borderColor: getColorValue('gray.300'),
                color: getColorValue('gray.900'),
                focusBorderColor: getColorValue('primary.500'),
                focusRingColor: getColorValue('primary.100'),
            };
    }
};

export const Input: React.FC<InputProps> = ({
    variant = 'outlined',
    size = 'md',
    state = 'default',
    label,
    helperText,
    errorText,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = '',
    style,
    disabled,
    ...props
}) => {
    const sizeStyles = sizeConfig[size];
    const variantConfig = getVariantConfig(variant);
    const stateConfig = getStateConfig(state);
    const isDisabled = disabled;

    const inputStyles: React.CSSProperties = {
        width: fullWidth ? '100%' : 'auto',
        padding: sizeStyles.padding,
        paddingLeft: leftIcon ? '2.5rem' : sizeStyles.padding.split(' ')[1],
        paddingRight: rightIcon ? '2.5rem' : sizeStyles.padding.split(' ')[1],
        fontSize: sizeStyles.fontSize,
        lineHeight: sizeStyles.lineHeight,
        minHeight: sizeStyles.minHeight,
        fontWeight: '400',
        color: isDisabled ? getColorValue('gray.500') : stateConfig.color,
        backgroundColor: isDisabled ? getColorValue('gray.100') : variantConfig.backgroundColor,
        border: variantConfig.border,
        borderRadius: variantConfig.borderRadius,
        outline: 'none',
        transition: 'all 0.2s ease-in-out',
        position: 'relative',

        // State styles
        borderColor: isDisabled ? getColorValue('gray.300') : stateConfig.borderColor,

        // Focus styles will be handled via CSS

        // Placeholder styles will be handled via CSS

        // Disabled styles will be handled via CSS
    };

    const containerStyles: React.CSSProperties = {
        position: 'relative',
        display: 'inline-block',
        width: fullWidth ? '100%' : 'auto',
    };

    const iconStyles: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: getColorValue('gray.500'),
        pointerEvents: 'none',
    };

    const labelStyles: React.CSSProperties = {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: getColorValue('gray.700'),
        marginBottom: '0.5rem',
    };

    const helperTextStyles: React.CSSProperties = {
        fontSize: '0.75rem',
        color: getColorValue('gray.500'),
        marginTop: '0.25rem',
    };

    const errorTextStyles: React.CSSProperties = {
        fontSize: '0.75rem',
        color: getColorValue('error.600'),
        marginTop: '0.25rem',
    };

    return (
        <div className={`design-system-input-container ${className}`} style={containerStyles}>
            {label && (
                <label style={labelStyles}>
                    {label}
                </label>
            )}

            <div style={{ position: 'relative' }}>
                {leftIcon && (
                    <div style={{ ...iconStyles, left: '0.75rem' }}>
                        {leftIcon}
                    </div>
                )}

                <input
                    type="text"
                    disabled={isDisabled}
                    className="design-system-input"
                    style={inputStyles}
                    {...props}
                />

                {rightIcon && (
                    <div style={{ ...iconStyles, right: '0.75rem' }}>
                        {rightIcon}
                    </div>
                )}
            </div>

            {errorText && state === 'error' && (
                <div style={errorTextStyles}>
                    {errorText}
                </div>
            )}

            {helperText && !errorText && (
                <div style={helperTextStyles}>
                    {helperText}
                </div>
            )}

            <style>{`
        .design-system-input:focus {
          border-color: ${stateConfig.focusBorderColor};
          box-shadow: 0 0 0 3px ${stateConfig.focusRingColor};
        }
        
        .design-system-input::placeholder {
          color: ${getColorValue('gray.400')};
        }
        
        .design-system-input:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      `}</style>
        </div>
    );
};

export default Input;
