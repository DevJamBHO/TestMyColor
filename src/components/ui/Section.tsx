import React from 'react';
import { useColors } from '../../context/ColorContext';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    role?: string;
    'aria-label'?: string;
}

const Section: React.FC<SectionProps> = ({
    title,
    children,
    id,
    className,
    style,
    role,
    'aria-label': ariaLabel
}) => {
    const { palette } = useColors();

    return (
        <section
            id={id}
            className={className}
            role={role}
            aria-label={ariaLabel}
            style={{
                marginBottom: '3rem',
                ...style
            }}
        >
            <h2 style={{
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: palette.text
            }}>
                {title}
            </h2>
            <div style={{
                padding: '1rem',
                backgroundColor: palette.background,
                borderRadius: '8px'
            }}>
                {children}
            </div>
        </section>
    );
};

export default Section;
