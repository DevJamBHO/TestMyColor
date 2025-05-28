import React from 'react';
import { useColors } from '../../context/ColorContext';

export type Variant = 'filled' | 'outline' | 'ghost';
export type Size = 'small' | 'medium' | 'large';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: Variant;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: Size;
  disabled?: boolean;
}

const sizeStyles: Record<Size, React.CSSProperties> = {
  small: { fontSize: '0.75rem', padding: '0.2rem 0.6rem' },
  medium: { fontSize: '1rem', padding: '0.5rem 1.2rem' },
  large: { fontSize: '1.25rem', padding: '0.75rem 2rem' },
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  disabled = false,
  ...rest
}) => {
  const { palette } = useColors();
  const bg = palette[color];
  const text = variant === 'filled' ? '#fff' : bg;
  const border =
    variant === 'outline' ? `2px solid ${bg}` : variant === 'ghost' ? 'none' : 'none';
  const backgroundColor =
    variant === 'filled' ? bg : variant === 'ghost' ? 'transparent' : 'transparent';

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#ccc' : backgroundColor,
        color: disabled ? '#666' : text,
        border: disabled ? 'none' : border,
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        height: 'fit-content',
        ...sizeStyles[size],
      }}
      {...rest}
    >
      {label}
    </button>
  );
};

export default CustomButton;
