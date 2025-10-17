import React from 'react';
import { Button, ButtonProps } from './Button';
import { useColors } from '../../../context/ColorContext';

// Props étendues pour l'adaptation aux couleurs du contexte
interface AdaptiveButtonProps extends Omit<ButtonProps, 'color'> {
    color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'neutral';
    useContextColors?: boolean;
}

export const AdaptiveButton: React.FC<AdaptiveButtonProps> = ({
    color = 'primary',
    useContextColors = true,
    style,
    ...props
}) => {
    const { palette } = useColors();

    // Adapter les couleurs du contexte vers les couleurs du design system
    const getAdaptedColor = (colorKey: string): ButtonProps['color'] => {
        if (!useContextColors) {
            return color as ButtonProps['color'];
        }

        switch (colorKey) {
            case 'primary':
                return 'primary';
            case 'secondary':
                return 'secondary';
            case 'tertiary':
                return 'neutral';
            default:
                return color as ButtonProps['color'];
        }
    };

    // Styles personnalisés pour utiliser les couleurs du contexte
    const contextualStyles: React.CSSProperties = useContextColors ? ({
        ...(color === 'primary' && {
            '--ds-button-bg': palette.primary,
            '--ds-button-hover-bg': palette.primary,
            '--ds-button-active-bg': palette.primary,
        }),
        ...(color === 'secondary' && {
            '--ds-button-bg': palette.secondary,
            '--ds-button-hover-bg': palette.secondary,
            '--ds-button-active-bg': palette.secondary,
        }),
        ...(color === 'tertiary' && {
            '--ds-button-bg': palette.tertiary,
            '--ds-button-hover-bg': palette.tertiary,
            '--ds-button-active-bg': palette.tertiary,
        }),
    } as React.CSSProperties) : {};

    return (
        <Button
            color={getAdaptedColor(color)}
            style={{
                ...contextualStyles,
                ...style,
            }}
            {...props}
        />
    );
};

export default AdaptiveButton;
