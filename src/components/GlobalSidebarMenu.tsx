import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import { useColorBlind } from '../context/ColorBlindContext';
import { usePanelsState } from '../context/PanelsStateContext';
import { trackToolUsage, AnalyticsEvents } from '../utils/analytics';

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
    const { font } = useFont();
    const { selectedType } = useColorBlind();
    const { isSidebarVisible, setIsSidebarVisible } = usePanelsState();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    // Déterminer quelle section ouvrir selon la page actuelle
    const getInitialExpandedSections = () => {
        const baseSections = new Set(['navigation']);
        const currentPath = location.pathname;

        if (currentPath === '/color') {
            baseSections.add('color');
        } else if (currentPath === '/typo') {
            baseSections.add('typo');
        }

        return baseSections;
    };

    const [expandedSections, setExpandedSections] = useState<Set<string>>(getInitialExpandedSections());

    // Détecter si on est sur mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth <= 768) {
                setIsSidebarVisible(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [setIsSidebarVisible]);

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
        '/typo': [
            { id: 'overview', label: 'Vue d\'ensemble', href: '#overview', icon: '' },
            { id: 'typography-tools', label: 'Outils de Typographie', href: '#typography-tools', icon: '' },
            { id: 'compliance-checker', label: 'Vérificateur WCAG', href: '#compliance-checker', icon: '' },
            { id: 'education', label: 'Informations Police', href: '#education', icon: '' },
            { id: 'playground', label: 'Playground', href: '#playground', icon: '' },
            { id: 'faq', label: 'Questions fréquentes', href: '#faq', icon: '' }
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
            description: 'Guide de bonnes pratiques typographiques',
            children: [
                { id: 'typo-overview', label: 'Vue d\'ensemble', href: '/typo#overview', icon: '' },
                { id: 'typo-tools', label: 'Outils de Typographie', href: '/typo#typography-tools', icon: '' },
                { id: 'typo-compliance', label: 'Vérificateur WCAG', href: '/typo#compliance-checker', icon: '' },
                { id: 'typo-education', label: 'Informations Police', href: '/typo#education', icon: '' },
                { id: 'typo-playground', label: 'Playground', href: '/typo#playground', icon: '' },
                { id: 'typo-faq', label: 'Questions fréquentes', href: '/typo#faq', icon: '' }
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
        setIsSidebarVisible(!isSidebarVisible);
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

    // Scroll to top when navigating to a new page
    const navigateToPage = (href: string) => {
        // Track menu navigation
        trackToolUsage('Navigation', 'Menu Clicked', {
            href,
            page: currentPageTitle
        });

        // Scroll vers le haut avant la navigation
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        // Petite pause pour laisser le scroll se faire, puis navigation
        setTimeout(() => {
            window.location.href = href;
        }, 100);
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
                        background: isActive ? `${palette.primary}15` : 'transparent',
                        color: isActive ? palette.text : palette.text,
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontFamily: font,
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
                            e.currentTarget.style.background = `${palette.primary}10`;
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
            {!isSidebarVisible && (
                <button
                    onClick={toggleSidebar}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        left: '20px',
                        zIndex: 1001,
                        background: palette.surface,
                        border: `1px solid ${palette.border}`,
                        borderRadius: '6px',
                        padding: '8px 12px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: palette.text,
                        fontFamily: font,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                    className="menu-toggle-button"
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
                    left: isSidebarVisible ? '0' : '-300px',
                    width: '300px',
                    height: '100vh',
                    background: palette.background,
                    borderRight: `2px solid ${palette.border}`,
                    boxShadow: isMobile ? '0 0 20px rgba(0,0,0,0.3)' : `2px 0 8px ${palette.primary}10`,
                    zIndex: 1000,
                    transition: 'left 0.3s ease',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    filter: selectedType !== 'none' ? `url(#colorblind-${selectedType})` : 'none'
                }}
                aria-label="Menu de navigation global"
            >
                {/* Header */}
                <div style={{
                    background: palette.surface,
                    borderBottom: `1px solid ${palette.border}`,
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
                                color: palette.text,
                                fontFamily: font
                            }}>
                                Test<span style={{ color: palette.primary }}>My</span>Color
                            </span>
                            <div style={{
                                fontSize: '12px',
                                color: palette.textSecondary,
                                fontFamily: font
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
                            e.currentTarget.style.background = `${palette.primary}10`;
                            e.currentTarget.style.color = palette.text;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = palette.textSecondary || palette.secondary;
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
                        color: palette.textSecondary,
                        fontFamily: font,
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
                    padding: '8px 16px',
                    borderTop: `1px solid ${palette.border}`,
                    flexShrink: 0,
                    background: palette.surface
                }}>
                    <div style={{
                        fontSize: '10px',
                        color: palette.text,
                        fontFamily: font,
                        textAlign: 'center',
                        opacity: 0.7
                    }}>
                        TestMyColor © 2025<br />
                        par OlivierLB
                    </div>
                </div>
            </aside>

            {/* Overlay pour mobile */}
            {isSidebarVisible && isMobile && (
                <div
                    onClick={toggleSidebar}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 999
                    }}
                    className="sidebar-overlay"
                />
            )}

            {/* CSS pour responsive */}
            <style>{`
                @media (max-width: 768px) {
                    .app-content {
                        margin-left: 0 !important;
                    }
                    
                    .menu-toggle-button {
                        display: none !important;
                    }
                }
            `}</style>

            {/* SVG Filters pour le daltonisme */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="colorblind-protanopia">
                        <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0" />
                    </filter>
                    <filter id="colorblind-deuteranopia">
                        <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" />
                    </filter>
                    <filter id="colorblind-tritanopia">
                        <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" />
                    </filter>
                    <filter id="colorblind-achromatopsia">
                        <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default GlobalSidebarMenu;
