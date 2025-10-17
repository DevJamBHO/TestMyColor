import React from 'react';
import { colorTokens, getColorValue } from '../../tokens';
import { getSpacingValue } from '../../tokens/spacing';
import { getShadowValue } from '../../tokens/shadows';
import { getBorderValue } from '../../tokens/borders';

// Card variants
export type CardVariant = 'elevated' | 'outlined' | 'filled' | 'flat';
export type CardSize = 'sm' | 'md' | 'lg';

// Card props interface
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    size?: CardSize;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
}

// Size configurations
const sizeConfig = {
    sm: {
        borderRadius: '0.375rem',
        fontSize: '0.875rem',
    },
    md: {
        borderRadius: '0.5rem',
        fontSize: '1rem',
    },
    lg: {
        borderRadius: '0.75rem',
        fontSize: '1.125rem',
    },
};

// Padding configurations
const paddingConfig = {
    none: '0',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
};

// Variant configurations
const getVariantConfig = (variant: CardVariant) => {
    switch (variant) {
        case 'elevated':
            return {
                backgroundColor: 'white',
                border: 'none',
                boxShadow: getShadowValue('shadow.lg'),
            };
        case 'outlined':
            return {
                backgroundColor: 'white',
                border: `1px solid ${getColorValue('gray.200')}`,
                boxShadow: 'none',
            };
        case 'filled':
            return {
                backgroundColor: getColorValue('gray.50'),
                border: 'none',
                boxShadow: 'none',
            };
        case 'flat':
            return {
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            };
        default:
            return getVariantConfig('elevated');
    }
};

export const Card: React.FC<CardProps> = ({
    variant = 'elevated',
    size = 'md',
    padding = 'md',
    children,
    className = '',
    style,
    ...props
}) => {
    const sizeStyles = sizeConfig[size];
    const variantConfig = getVariantConfig(variant);
    const paddingValue = paddingConfig[padding];

    const cardStyles: React.CSSProperties = {
        display: 'block',
        padding: paddingValue,
        borderRadius: sizeStyles.borderRadius,
        fontSize: sizeStyles.fontSize,
        lineHeight: '1.5',
        color: getColorValue('gray.900'),
        transition: 'all 0.2s ease-in-out',
        position: 'relative',
        overflow: 'hidden',

        // Variant styles
        backgroundColor: variantConfig.backgroundColor,
        border: variantConfig.border,
        boxShadow: variantConfig.boxShadow,

        // Hover effect for interactive cards
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: getShadowValue('shadow.xl'),
        },
    };

    return (
        <div
            className={`design-system-card ${className}`}
            style={{ ...cardStyles, ...style }}
            {...props}
        >
            {children}

            <style jsx>{`
        .design-system-card:hover {
          transform: translateY(-2px);
          box-shadow: ${getShadowValue('shadow.xl')};
        }
      `}</style>
        </div>
    );
};

// Card sub-components
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    className = '',
    style,
    ...props
}) => (
    <div
        className={`design-system-card-header ${className}`}
        style={{
            marginBottom: '1rem',
            ...style,
        }}
        {...props}
    >
        {children}
    </div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    className = '',
    style,
    ...props
}) => (
    <div
        className={`design-system-card-body ${className}`}
        style={{
            flex: 1,
            ...style,
        }}
        {...props}
    >
        {children}
    </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    className = '',
    style,
    ...props
}) => (
    <div
        className={`design-system-card-footer ${className}`}
        style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: `1px solid ${getColorValue('gray.200')}`,
            ...style,
        }}
        {...props}
    >
        {children}
    </div>
);

export default Card;
