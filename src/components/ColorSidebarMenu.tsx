import React, { useState, useEffect } from 'react';
import { useColors } from '../context/ColorContext';
import CustomButton from './ui/CustomButton';

const ColorSidebarMenu: React.FC = () => {
    const { palette } = useColors();
    const [activeSection, setActiveSection] = useState('overview');
    const [isVisible, setIsVisible] = useState(false);

    const menuItems = [
        { id: 'overview', label: 'Vue d\'ensemble', href: '#overview' },
        { id: 'features', label: 'Fonctionnalités', href: '#features' },
        { id: 'compliance', label: 'Conformité RGAA', href: '#compliance' },
        { id: 'usage', label: 'Comment utiliser', href: '#usage' },
        { id: 'tools', label: 'Outils de couleurs', href: '#color-tools' },
        { id: 'checker', label: 'Vérificateur RGAA', href: '#compliance-checker' },
        { id: 'education', label: 'Formation RGAA', href: '#education' },
        { id: 'export', label: 'Export palette', href: '#export' },
        { id: 'faq', label: 'Questions fréquentes', href: '#faq' },
        { id: 'other-tools', label: 'Autres outils', href: '#other-tools' }
    ];

    // Observer pour détecter la section active
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSection(sectionId);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0.1
            }
        );

        // Observer toutes les sections
        menuItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    // Scroll to section
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: isVisible ? '280px' : '0px',
                    transform: 'translateY(-50%)',
                    zIndex: 1001,
                    background: palette.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '0 8px 8px 0',
                    padding: '1rem 0.5rem',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
                }}
                aria-label={isVisible ? 'Masquer le menu' : 'Afficher le menu'}
            >
                {isVisible ? '‹' : '›'}
            </button>

            {/* Sidebar */}
            <aside
                style={{
                    position: 'fixed',
                    top: 0,
                    left: isVisible ? '0' : '-300px',
                    width: '300px',
                    height: '100vh',
                    background: '#fff',
                    borderRight: `2px solid ${palette.primary}20`,
                    zIndex: 1000,
                    transition: 'left 0.3s ease',
                    overflowY: 'auto',
                    boxShadow: '2px 0 12px rgba(0,0,0,0.1)'
                }}
                aria-label="Menu de navigation de la page"
            >
                {/* Header */}
                <div style={{
                    background: palette.primary,
                    color: 'white',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    borderBottom: `1px solid ${palette.primary}40`
                }}>
                    <h2 style={{
                        margin: 0,
                        fontSize: '1.1rem',
                        fontWeight: 600
                    }}>
                        Navigation RGAA
                    </h2>
                    <p style={{
                        margin: '0.5rem 0 0 0',
                        fontSize: '0.8rem',
                        opacity: 0.9
                    }}>
                        Testeur de couleurs
                    </p>
                </div>

                {/* Menu Items */}
                <nav style={{ padding: '1rem 0' }}>
                    {menuItems.map((item) => (
                        <div key={item.id} style={{ marginBottom: '0.25rem' }}>
                            <button
                                onClick={() => scrollToSection(item.href)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    border: 'none',
                                    background: activeSection === item.id ? `${palette.primary}15` : 'transparent',
                                    color: activeSection === item.id ? palette.primary : '#333',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: activeSection === item.id ? 600 : 400,
                                    transition: 'all 0.2s ease',
                                    borderLeft: activeSection === item.id ? `4px solid ${palette.primary}` : '4px solid transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeSection !== item.id) {
                                        e.currentTarget.style.background = '#f8f9fa';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeSection !== item.id) {
                                        e.currentTarget.style.background = 'transparent';
                                    }
                                }}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                <span style={{ fontSize: '0.8rem' }}>
                                    {item.id === 'overview' && '🏠'}
                                    {item.id === 'features' && '⚡'}
                                    {item.id === 'compliance' && '✅'}
                                    {item.id === 'usage' && '📖'}
                                    {item.id === 'tools' && '🎨'}
                                    {item.id === 'checker' && '🔍'}
                                    {item.id === 'education' && '📚'}
                                    {item.id === 'export' && '💾'}
                                    {item.id === 'faq' && '❓'}
                                    {item.id === 'other-tools' && '🔗'}
                                </span>
                                {item.label}
                            </button>
                        </div>
                    ))}
                </nav>

                {/* Footer */}
                <div style={{
                    padding: '1rem',
                    borderTop: '1px solid #eee',
                    marginTop: 'auto'
                }}>
                    <p style={{
                        fontSize: '0.8rem',
                        color: '#666',
                        margin: '0 0 1rem 0',
                        textAlign: 'center'
                    }}>
                        Outil de test RGAA
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        justifyContent: 'center'
                    }}>
                        <CustomButton
                            label="RGAA Lab"
                            variant="outline"
                            color="primary"
                            size="small"
                            onClick={() => window.location.href = '/rgaa-lab'}
                            style={{ fontSize: '0.75rem' }}
                        />
                        <CustomButton
                            label="Typo"
                            variant="outline"
                            color="secondary"
                            size="small"
                            onClick={() => window.location.href = '/typo'}
                            style={{ fontSize: '0.75rem' }}
                        />
                    </div>
                </div>
            </aside>

            {/* Overlay pour mobile */}
            {isVisible && (
                <div
                    onClick={toggleSidebar}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 999,
                        display: 'none' // Masqué sur desktop, visible sur mobile
                    }}
                    className="sidebar-overlay"
                />
            )}
        </>
    );
};

export default ColorSidebarMenu;
