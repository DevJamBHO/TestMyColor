import React from 'react';
import { AdaptiveButton } from '../../design-system';

// Types pour la compatibilité avec l'API existante
export type Variant = 'filled' | 'outline' | 'ghost';
export type Size = 'small' | 'medium' | 'large';

interface CustomButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  variant?: Variant;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: Size;
  disabled?: boolean;
}

// Mapping des tailles vers le design system
const sizeMapping: Record<Size, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
};

// Mapping des variantes vers le design system
const variantMapping: Record<Variant, 'filled' | 'outline' | 'ghost' | 'link'> = {
  filled: 'filled',
  outline: 'outline',
  ghost: 'ghost',
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  disabled = false,
  style,
  ...rest
}) => {
  return (
    <AdaptiveButton
      variant={variantMapping[variant]}
      color={color}
      size={sizeMapping[size]}
      disabled={disabled}
      useContextColors={true}
      style={style}
      {...rest}
    >
      {label}
    </AdaptiveButton>
  );
};

export default CustomButton;