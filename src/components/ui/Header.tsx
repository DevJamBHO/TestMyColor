import { useEffect, useState } from 'react';
import { useColors } from '../../context/ColorContext';
import { useFont } from '../../context/FontContext';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { palette, reset: resetColors } = useColors();
    const { font, resetFontPreferences } = useFont();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { label: 'Colors', href: '/color' },
        { label: 'Typography', href: '/typo' }
    ];

    const handleReset = () => {
        resetColors();
        resetFontPreferences();
    };

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
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'inherit' }}>
                Test<span style={{ color: palette.primary }}>My</span>Colors
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
                <button
                    onClick={handleReset}
                    style={{
                        marginLeft: '1rem',
                        padding: '0.4rem 0.8rem',
                        fontSize: '0.9rem',
                        borderRadius: '6px',
                        border: `1px solid ${palette.text}`,
                        backgroundColor: 'transparent',
                        color: palette.text,
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                    }}
                >
                    Reset
                </button>
            </nav>

            {/* Mobile hamburger */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
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
                aria-label="Open menu"
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
                        aria-label="Close menu"
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

                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            handleReset();
                        }}
                        style={{
                            marginTop: '2rem',
                            padding: '0.5rem 1rem',
                            fontSize: '1rem',
                            border: `1px solid ${palette.text}`,
                            borderRadius: '8px',
                            backgroundColor: 'transparent',
                            color: palette.text,
                            cursor: 'pointer',
                            fontFamily: 'inherit'
                        }}
                    >
                        Reset
                    </button>
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
