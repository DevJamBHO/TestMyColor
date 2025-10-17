import { useEffect, useState } from 'react';
import { useColors } from '../../context/ColorContext';
import { useFont } from '../../context/FontContext';
import { usePanelsState } from '../../context/PanelsStateContext';
import { NavLink } from 'react-router-dom';
import CustomButton from './CustomButton';

const Header: React.FC = () => {
    const { palette } = useColors();
    const { font } = useFont();
    const { isSidebarVisible, setIsSidebarVisible } = usePanelsState();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Détecter si on est sur mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { label: 'Couleurs', href: '/color' },
        { label: 'Typographie', href: '/typo' }
    ];

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: palette.background,
                borderBottom: scrolled ? `1px solid ${palette.text}20` : 'none',
                transition: 'all 0.3s ease',
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: font
            }}
        >
            <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <img
                    src="/android-chrome-192x192.png"
                    alt="test-my-color logo"
                    style={{
                        width: '24px',
                        height: '24px'
                    }}
                    loading="lazy"
                    decoding="async"
                />
                <span>Test<span style={{ color: palette.primary }}>My</span>Color</span>
            </div>

            {/* Desktop navigation */}
            <nav
                style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    fontFamily: 'inherit'
                }}
                className="desktop-nav"
            >
                {navLinks.map(({ label, href }) => (
                    <NavLink
                        key={href}
                        to={href}
                        style={({ isActive }) => ({
                            color: isActive ? palette.primary : palette.text,
                            fontWeight: isActive ? 700 : 500,
                            textDecoration: 'none',
                            fontFamily: 'inherit'
                        })}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            {/* Mobile hamburger */}
            <button
                onClick={() => {
                    if (isMobile) {
                        setIsSidebarVisible(!isSidebarVisible);
                    } else {
                        setIsMobileMenuOpen(true);
                    }
                }}
                style={{
                    background: 'none',
                    border: 'none',
                    display: 'none',
                    fontSize: '1.5rem',
                    color: palette.text,
                    cursor: 'pointer',
                    fontFamily: 'inherit'
                }}
                className="mobile-menu-button"
                aria-label={isMobile ? "Ouvrir le menu" : "Ouvrir le menu mobile"}
            >
                ☰
            </button>

            {/* Fullscreen mobile menu */}
            {isMobileMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: palette.background,
                        color: palette.text,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100,
                        transition: 'all 0.3s ease-in-out',
                        fontFamily: font
                    }}
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1.5rem',
                            fontSize: '2rem',
                            background: 'none',
                            border: 'none',
                            color: palette.text,
                            cursor: 'pointer',
                            fontFamily: 'inherit'
                        }}
                        aria-label="Fermer le menu"
                    >
                        ✕
                    </button>

                    {navLinks.map(({ label, href }) => (
                        <NavLink
                            key={href}
                            to={href}
                            style={({ isActive }) => ({
                                color: isActive ? palette.primary : palette.text,
                                fontWeight: isActive ? 700 : 500,
                                textDecoration: 'none',
                                fontFamily: 'inherit'
                            })}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
