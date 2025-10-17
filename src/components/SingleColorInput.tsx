import React from 'react';

interface SingleColorInputProps {
    label: string;
    color: string;
    onChange: (color: string) => void;
}

const SingleColorInput: React.FC<SingleColorInputProps> = ({ label, color, onChange }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', fontFamily: 'inherit' }}>
            <label
                htmlFor={label}
                style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'capitalize',
                    color: 'inherit',
                    fontFamily: 'inherit'
                }}
            >
                {label}
            </label>
            <input
                type="color"
                id={label}
                name={label}
                value={color}
                onChange={e => onChange(e.target.value)}
                style={{
                    width: '100%',
                    height: '3rem',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    background: 'transparent',
                    fontFamily: 'inherit'
                }}
            />
            <code style={{ fontSize: '0.85rem', opacity: 0.75, fontFamily: 'inherit' }}>{color}</code>
        </div>
    );
};

export default SingleColorInput; 