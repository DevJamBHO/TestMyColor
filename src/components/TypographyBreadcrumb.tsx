import React from 'react';
import { useColors } from '../context/ColorContext';
import CustomButton from './ui/CustomButton';

const TypographyBreadcrumb: React.FC = () => {
    const { palette } = useColors();

    const breadcrumbItems = [
        { label: 'Accueil', href: '/', current: false },
        { label: 'Guide Typographie Accessible', href: '/typo', current: true }
    ];

    return (
        <nav
            aria-label="Fil d'Ariane"
            style={{
                background: '#f8f9fa',
                padding: '1rem 1.5rem',
                borderBottom: `1px solid ${palette.primary}20`,
                marginBottom: '2rem'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                        {index > 0 && (
                            <span style={{ color: '#999', margin: '0 0.5rem' }}>
                                ›
                            </span>
                        )}
                        {item.current ? (
                            <span
                                style={{
                                    color: palette.primary,
                                    fontWeight: 600,
                                    textDecoration: 'none'
                                }}
                                aria-current="page"
                            >
                                {item.label}
                            </span>
                        ) : (
                            <CustomButton
                                label={item.label}
                                variant="ghost"
                                color="secondary"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setTimeout(() => {
                                        window.location.href = item.href;
                                    }, 100);
                                }}
                                style={{
                                    padding: '0.25rem 0.5rem',
                                    fontSize: '0.9rem',
                                    textDecoration: 'none',
                                    color: '#666'
                                }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
};

export default TypographyBreadcrumb;
