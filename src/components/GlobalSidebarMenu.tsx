import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useColors } from '../context/ColorContext';

interface MenuItem {
    id: string;
    label: string;
    href: string;
    icon: string;
    description?: string;
    children?: MenuItem[];
}

interface PageMenuConfig {
    [key: string]: MenuItem[];
}

const GlobalSidebarMenu: React.FC = () => {
    const { palette } = useColors();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');
    const [isVisible, setIsVisible] = useState(true); // Par défaut visible comme Notion
    // Déterminer quelle section ouvrir selon la page actuelle
    const getInitialExpandedSections = () => {
        const baseSections = new Set(['navigation']);
        const currentPath = location.pathname;

        if (currentPath === '/color') {
            baseSections.add('color');
        } else if (currentPath === '/typo') {
            baseSections.add('typo');
        } else if (currentPath === '/smart-palette') {
            baseSections.add('smart-palette');
        } else if (currentPath === '/rgaa-lab') {
            baseSections.add('rgaa-lab');
        } else if (currentPath === '/design-system') {
            baseSections.add('design-system');
        }

        return baseSections;
    };

    const [expandedSections, setExpandedSections] = useState<Set<string>>(getInitialExpandedSections());

    // Configuration des menus par page
    const pageMenus: PageMenuConfig = {
        '/color': [
            { id: 'overview', label: 'Vue d\'ensemble', href: '#overview', icon: '' },
            { id: 'features', label: 'Critères RGAA', href: '#features', icon: '' },
            { id: 'compliance', label: 'Niveaux WCAG', href: '#compliance', icon: '' },
            { id: 'best-practices', label: 'Bonnes pratiques', href: '#best-practices', icon: '' },
            { id: 'color-tools', label: 'Outils de couleurs', href: '#color-tools', icon: '' },
            { id: 'compliance-checker', label: 'Vérificateur RGAA', href: '#compliance-checker', icon: '' },
            { id: 'education', label: 'Formation RGAA', href: '#education', icon: '' },
            { id: 'export', label: 'Export palette', href: '#export', icon: '' },
            { id: 'faq', label: 'Questions fréquentes', href: '#faq', icon: '' }
        ],
        '/rgaa-lab': [
            { id: 'overview', label: 'Vue d\'ensemble', href: '#overview', icon: '' },
            { id: 'tests', label: 'Tests RGAA', href: '#tests', icon: '' },
            { id: 'color-tests', label: 'Tests couleurs', href: '#color-tests', icon: '' },
            { id: 'contrast-tests', label: 'Tests contraste', href: '#contrast-tests', icon: '' },
            { id: 'accessibility', label: 'Accessibilité', href: '#accessibility', icon: '' },
            { id: 'reports', label: 'Rapports', href: '#reports', icon: '' },
            { id: 'guidelines', label: 'Directives', href: '#guidelines', icon: '' }
        ],
        '/typo': [
            { id: 'overview', label: 'Vue d\'ensemble', href: '#overview', icon: '' },
            { id: 'font-selector', label: 'Sélecteur de polices', href: '#font-selector', icon: '' },
            { id: 'readability', label: 'Lisibilité', href: '#readability', icon: '' },
            { id: 'accessibility', label: 'Accessibilité', href: '#accessibility', icon: '' },
            { id: 'preview', label: 'Aperçu', href: '#preview', icon: '' },
            { id: 'export', label: 'Export', href: '#export', icon: '' }
        ],
        '/smart-palette': [
            { id: 'overview', label: 'Vue d\'ensemble', href: '#overview', icon: '' },
            { id: 'generator', label: 'Générateur', href: '#generator', icon: '' },
            { id: 'algorithms', label: 'Algorithmes', href: '#algorithms', icon: '' },
            { id: 'preview', label: 'Aperçu', href: '#preview', icon: '' },
            { id: 'export', label: 'Export', href: '#export', icon: '' }
        ],
        '/design-system': [
            { id: 'overview', label: 'Vue d\'ensemble', href: '#overview', icon: '' },
            { id: 'colors', label: 'Couleurs', href: '#colors', icon: '' },
            { id: 'typography', label: 'Typographie', href: '#typography', icon: '' },
            { id: 'components', label: 'Composants', href: '#components', icon: '' },
            { id: 'tokens', label: 'Tokens', href: '#tokens', icon: '' },
            { id: 'guidelines', label: 'Directives', href: '#guidelines', icon: '' }
        ]
    };

    // Menu de navigation principal - correspond exactement au header
    const mainNavItems: MenuItem[] = [
        {
            id: 'color',
            label: 'Couleurs',
            href: '/color',
            icon: '',
            description: 'Testeur de couleurs RGAA',
            children: [
                { id: 'color-overview', label: 'Vue d\'ensemble', href: '/color#overview', icon: '' },
                { id: 'color-features', label: 'Critères RGAA', href: '/color#features', icon: '' },
                { id: 'color-compliance', label: 'Niveaux WCAG', href: '/color#compliance', icon: '' },
                { id: 'color-best-practices', label: 'Bonnes pratiques', href: '/color#best-practices', icon: '' },
                { id: 'color-faq', label: 'Questions fréquentes', href: '/color#faq', icon: '' },
                { id: 'color-tools', label: 'Outils de couleurs', href: '/color#color-tools', icon: '' },
                { id: 'color-checker', label: 'Vérificateur RGAA', href: '/color#compliance-checker', icon: '' },
                { id: 'color-education', label: 'Formation RGAA', href: '/color#education', icon: '' },
                { id: 'color-export', label: 'Export palette', href: '/color#export', icon: '' }
            ]
        },
        {
            id: 'typo',
            label: 'Typographie',
            href: '/typo',
            icon: '',
            description: 'Test de typographie accessible',
            children: [
                { id: 'typo-overview', label: 'Vue d\'ensemble', href: '/typo#overview', icon: '' },
                { id: 'typo-font-selector', label: 'Sélecteur de polices', href: '/typo#font-selector', icon: '' },
                { id: 'typo-readability', label: 'Lisibilité', href: '/typo#readability', icon: '' },
                { id: 'typo-accessibility', label: 'Accessibilité', href: '/typo#accessibility', icon: '' },
                { id: 'typo-preview', label: 'Aperçu', href: '/typo#preview', icon: '' },
                { id: 'typo-export', label: 'Export', href: '/typo#export', icon: '' }
            ]
        },
        {
            id: 'smart-palette',
            label: 'Palette Intelligente',
            href: '/smart-palette',
            icon: '',
            description: 'Générateur de palettes',
            children: [
                { id: 'palette-overview', label: 'Vue d\'ensemble', href: '/smart-palette#overview', icon: '' },
                { id: 'palette-generator', label: 'Générateur', href: '/smart-palette#generator', icon: '' },
                { id: 'palette-algorithms', label: 'Algorithmes', href: '/smart-palette#algorithms', icon: '' },
                { id: 'palette-preview', label: 'Aperçu', href: '/smart-palette#preview', icon: '' },
                { id: 'palette-export', label: 'Export', href: '/smart-palette#export', icon: '' }
            ]
        },
        {
            id: 'rgaa-lab',
            label: 'Laboratoire RGAA',
            href: '/rgaa-lab',
            icon: '',
            description: 'Laboratoire RGAA complet',
            children: [
                { id: 'rgaa-overview', label: 'Vue d\'ensemble', href: '/rgaa-lab#overview', icon: '' },
                { id: 'rgaa-tests', label: 'Tests RGAA', href: '/rgaa-lab#tests', icon: '' },
                { id: 'rgaa-color-tests', label: 'Tests couleurs', href: '/rgaa-lab#color-tests', icon: '' },
                { id: 'rgaa-contrast-tests', label: 'Tests contraste', href: '/rgaa-lab#contrast-tests', icon: '' },
                { id: 'rgaa-accessibility', label: 'Accessibilité', href: '/rgaa-lab#accessibility', icon: '' },
                { id: 'rgaa-reports', label: 'Rapports', href: '/rgaa-lab#reports', icon: '' },
                { id: 'rgaa-guidelines', label: 'Directives', href: '/rgaa-lab#guidelines', icon: '' }
            ]
        },
        {
            id: 'design-system',
            label: 'Système de Design',
            href: '/design-system',
            icon: '',
            description: 'Système de design RGAA',
            children: [
                { id: 'ds-overview', label: 'Vue d\'ensemble', href: '/design-system#overview', icon: '' },
                { id: 'ds-colors', label: 'Couleurs', href: '/design-system#colors', icon: '' },
                { id: 'ds-typography', label: 'Typographie', href: '/design-system#typography', icon: '' },
                { id: 'ds-components', label: 'Composants', href: '/design-system#components', icon: '' },
                { id: 'ds-tokens', label: 'Tokens', href: '/design-system#tokens', icon: '' },
                { id: 'ds-guidelines', label: 'Directives', href: '/design-system#guidelines', icon: '' }
            ]
        }
    ];

    // Obtenir le menu de la page actuelle
    const currentPageMenu = pageMenus[location.pathname] || [];
    const currentPageTitle = mainNavItems.find(item => item.href === location.pathname)?.label || 'TestMyColor';

    // Mettre à jour les sections ouvertes quand la page change
    useEffect(() => {
        const newExpandedSections = getInitialExpandedSections();
        setExpandedSections(newExpandedSections);
    }, [location.pathname]);

    // Observer pour détecter la section active
    useEffect(() => {
        if (currentPageMenu.length === 0) return;

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

        // Observer toutes les sections de la page actuelle
        currentPageMenu.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [location.pathname, currentPageMenu]);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    // Toggle section expansion
    const toggleSection = (sectionId: string) => {
        const newExpanded = new Set(expandedSections);
        if (newExpanded.has(sectionId)) {
            newExpanded.delete(sectionId);
        } else {
            newExpanded.add(sectionId);
        }
        setExpandedSections(newExpanded);
    };

    // Scroll to section
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            // Récupérer la hauteur réelle du header
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;

            // Calculer la position en prenant en compte la hauteur du header
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 20; // 20px de marge supplémentaire

            window.scrollTo({
                top: Math.max(0, offsetPosition), // S'assurer qu'on ne scroll pas en négatif
                behavior: 'smooth'
            });
        }
    };

    // Navigate to page
    const navigateToPage = (href: string) => {
        window.location.href = href;
    };

    const renderMenuItem = (item: MenuItem, level: number = 0) => {
        const isActive = location.pathname === item.href || activeSection === item.id;
        const isExpanded = expandedSections.has(item.id);
        const hasChildren = item.children && item.children.length > 0;

        return (
            <div key={item.id} style={{ marginBottom: '2px' }}>
                <button
                    onClick={() => {
                        if (hasChildren) {
                            toggleSection(item.id);
                        } else if (item.href.startsWith('#')) {
                            scrollToSection(item.href);
                        } else {
                            navigateToPage(item.href);
                        }
                    }}
                    style={{
                        width: '100%',
                        padding: '6px 12px',
                        border: 'none',
                        background: isActive ? '#f1f3f4' : 'transparent',
                        color: isActive ? '#1a1a1a' : '#37352f',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: isActive ? 500 : 400,
                        transition: 'all 0.1s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        borderRadius: '3px',
                        marginLeft: `${level * 16}px`,
                        minHeight: '28px'
                    }}
                    onMouseEnter={(e) => {
                        if (!isActive) {
                            e.currentTarget.style.background = '#f1f3f4';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isActive) {
                            e.currentTarget.style.background = 'transparent';
                        }
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    title={item.description}
                >
                    {hasChildren && (
                        <span style={{
                            fontSize: '12px',
                            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.1s ease',
                            color: '#787774'
                        }}>
                            ▶
                        </span>
                    )}
                    {!hasChildren && (
                        <span style={{
                            fontSize: '12px',
                            color: '#787774',
                            width: '12px',
                            textAlign: 'center'
                        }}>
                            •
                        </span>
                    )}
                    <span style={{ flex: 1 }}>{item.label}</span>
                </button>

                {/* Render children if expanded */}
                {hasChildren && isExpanded && item.children && (
                    <div style={{ marginTop: '2px' }}>
                        {item.children.map(child => renderMenuItem(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>

            {/* Bouton pour rouvrir le menu */}
            {!isVisible && (
                <button
                    onClick={toggleSidebar}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        left: '20px',
                        zIndex: 1001,
                        background: '#fff',
                        border: '1px solid #e9e9e7',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: '#37352f',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                    aria-label="Afficher le menu"
                    title="Afficher le menu"
                >
                    <span style={{ fontSize: '12px' }}>☰</span>
                    Menu
                </button>
            )}

            {/* Sidebar */}
            <aside
                style={{
                    position: 'fixed',
                    top: 0,
                    left: isVisible ? '0' : '-300px',
                    width: '300px',
                    height: '100vh',
                    background: '#fafafa',
                    borderRight: '1px solid #e9e9e7',
                    zIndex: 1000,
                    transition: 'left 0.2s ease',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                aria-label="Menu de navigation global"
            >
                {/* Header */}
                <div style={{
                    background: '#fff',
                    borderBottom: '1px solid #e9e9e7',
                    padding: '12px 16px',
                    flexShrink: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <img
                            src="/android-chrome-192x192.png"
                            alt="RGAA Lab"
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '4px'
                            }}
                        />
                        <div>
                            <span style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#1a1a1a'
                            }}>
                                TestMyColor
                            </span>
                            <div style={{
                                fontSize: '12px',
                                color: '#787774'
                            }}>
                                {currentPageTitle}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            borderRadius: '4px',
                            color: '#787774',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '24px',
                            height: '24px',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f1f3f4';
                            e.currentTarget.style.color = '#37352f';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#787774';
                        }}
                        aria-label="Masquer le menu"
                        title="Masquer le menu"
                    >
                        ×
                    </button>
                </div>

                {/* Navigation principale */}
                <div style={{
                    padding: '8px 0',
                    flexShrink: 0
                }}>
                    <div style={{
                        padding: '4px 8px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#787774',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                    }}>
                        Navigation
                    </div>
                    <div>
                        {mainNavItems.map((item) => renderMenuItem(item))}
                    </div>
                </div>

                {/* Espace pour le contenu principal */}
                <div style={{
                    flex: 1,
                    overflowY: 'auto'
                }}>
                </div>

                {/* Footer */}
                <div style={{
                    padding: '12px 16px',
                    borderTop: '1px solid #e9e9e7',
                    flexShrink: 0,
                    background: '#fff'
                }}>
                    <div style={{
                        fontSize: '11px',
                        color: '#787774',
                        textAlign: 'center',
                        marginBottom: '8px'
                    }}>
                        Outil de test RGAA
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '4px',
                        justifyContent: 'center'
                    }}>
                        <button
                            onClick={() => navigateToPage('/rgaa-lab')}
                            style={{
                                padding: '4px 8px',
                                fontSize: '11px',
                                background: 'transparent',
                                border: '1px solid #e9e9e7',
                                borderRadius: '4px',
                                color: '#37352f',
                                cursor: 'pointer',
                                transition: 'all 0.1s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f1f3f4';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            TestMyColor
                        </button>
                        <button
                            onClick={() => navigateToPage('/typo')}
                            style={{
                                padding: '4px 8px',
                                fontSize: '11px',
                                background: 'transparent',
                                border: '1px solid #e9e9e7',
                                borderRadius: '4px',
                                color: '#37352f',
                                cursor: 'pointer',
                                transition: 'all 0.1s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f1f3f4';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            Typo
                        </button>
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

            {/* CSS pour mobile */}
            <style>{`
                @media (max-width: 768px) {
                    .sidebar-overlay {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
};

export default GlobalSidebarMenu;
