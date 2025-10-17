import React from 'react';
import { useColors } from '../../context/ColorContext';

interface BreadcrumbContainerProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const BreadcrumbContainer: React.FC<BreadcrumbContainerProps> = ({
    children,
    style
}) => {
    const { palette } = useColors();

    const defaultStyle: React.CSSProperties = {
        background: '#f8f9fa',
        padding: '1rem 1.5rem',
        borderBottom: `1px solid ${palette.primary}20`,
        marginBottom: '2rem',
        ...style
    };

    return (
        <nav
            aria-label="Fil d'Ariane"
            style={defaultStyle}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {children}
            </div>
        </nav>
    );
};

export default BreadcrumbContainer;
