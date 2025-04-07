import React from 'react';
import { useColors } from '../../context/ColorContext';

export type Variant = 'filled' | 'outline' | 'ghost';
export type Size = 'small' | 'medium' | 'large';

interface CustomButtonProps {
  label: string;
  variant?: Variant;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: Size;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  const { palette } = useColors();
  const bg = palette[color];
  const text = variant === 'filled' ? '#fff' : bg;
  const border =
    variant === 'outline' ? `2px solid ${bg}` : variant === 'ghost' ? 'none' : 'none';
  const backgroundColor =
    variant === 'filled' ? bg : variant === 'ghost' ? 'transparent' : 'transparent';

  const sizeStyles: Record<Size, React.CSSProperties> = {
    small: { fontSize: '0.75rem', padding: '0.4rem 0.75rem' },
    medium: { fontSize: '1rem', padding: '0.75rem 1.25rem' },
    large: { fontSize: '1.25rem', padding: '1rem 2rem' },
  };

  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#ccc' : backgroundColor,
        color: disabled ? '#666' : text,
        border: disabled ? 'none' : border,
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        ...sizeStyles[size],
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
