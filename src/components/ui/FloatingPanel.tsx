import React, { useState, forwardRef, useImperativeHandle } from 'react';
import CustomButton from './CustomButton';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useScreenReaderAnnouncement } from '../../hooks/useScreenReaderAnnouncement';
import { useColors } from '../../context/ColorContext';
import { useFont } from '../../context/FontContext';
import { useColorBlind } from '../../context/ColorBlindContext';

interface FloatingPanelProps {
    title: string;
    icon: string;
    position: 'top-left' | 'top-right';
    children: React.ReactNode;
    closedMessage: string;
    className?: string;
    style?: React.CSSProperties;
    topOffset?: number;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

export interface FloatingPanelRef {
    open: () => void;
    close: () => void;
}

const FloatingPanel = forwardRef<FloatingPanelRef, FloatingPanelProps>(({
    title,
    icon,
    position,
    children,
    closedMessage,
    className = '',
    style = {},
    topOffset = 0,
    isOpen: externalIsOpen,
    onOpenChange
}, ref) => {
    const { palette } = useColors();
    const { font } = useFont();
    const { selectedType } = useColorBlind();
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
    const focusTrapRef = useFocusTrap(isOpen);

    // Screen reader announcements
    useScreenReaderAnnouncement(
        isOpen ? `${title} ouvert` : `${title} fermé`,
        isOpen !== (externalIsOpen !== undefined ? externalIsOpen : internalIsOpen)
    );

    const setIsOpen = (open: boolean) => {
        if (externalIsOpen !== undefined && onOpenChange) {
            onOpenChange(open);
        } else {
            setInternalIsOpen(open);
        }
    };

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }));

    const positionStyles = {
        'top-left': {
            position: 'relative' as const,
            top: '0px',
            left: '0px'
        },
        'top-right': {
            position: 'relative' as const,
            top: '0px',
            right: '0px'
        }
    };

    return (
        <>
            <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
            <div
                ref={focusTrapRef}
                className={`floating-panel ${className}`}
                role={isOpen ? "dialog" : "button"}
                aria-label={isOpen ? `${title} - Panneau ouvert` : `${title} - Cliquez pour ouvrir`}
                aria-expanded={isOpen}
                aria-describedby={isOpen ? undefined : `${title.toLowerCase().replace(/\s+/g, '-')}-description`}
                tabIndex={!isOpen ? 0 : undefined}
                style={{
                    ...positionStyles[position],
                    backgroundColor: palette.surface || '#ffffff',
                    background: palette.surface || '#ffffff',
                    borderRadius: isOpen ? 12 : 50,
                    padding: isOpen ? '1rem' : '0.75rem 1rem',
                    boxShadow: isOpen
                        ? `0 4px 12px ${palette.primary}20`
                        : `0 8px 24px ${palette.primary}30, 0 2px 8px ${palette.primary}10`,
                    border: isOpen ? `1px solid ${palette.border}` : 'none',
                    minWidth: isOpen ? '280px' : 'auto',
                    maxWidth: isOpen ? '320px' : 'none',
                    backdropFilter: 'none',
                    animation: !isOpen ? 'float 3s ease-in-out infinite' : 'none',
                    cursor: !isOpen ? 'pointer' : 'default',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: selectedType !== 'none' ? `url(#colorblind-${selectedType})` : 'none',
                    ...style
                }}
                onClick={!isOpen ? () => setIsOpen(true) : undefined}
                onKeyDown={(e) => {
                    if (!isOpen && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        setIsOpen(true);
                    }
                    if (isOpen && e.key === 'Escape') {
                        e.preventDefault();
                        setIsOpen(false);
                    }
                }}
            >
                {isOpen ? (
                    <>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '0.75rem'
                        }}>
                            <h4 style={{
                                margin: 0,
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: palette.text,
                                fontFamily: font
                            }}>
                                {icon} {title}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Fermer le panneau"
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        background: palette.background,
                                        color: palette.textSecondary,
                                        fontFamily: font,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        transition: 'all 0.2s ease',
                                        boxShadow: `0 2px 4px ${palette.primary}10`
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = `${palette.primary}10`;
                                        e.currentTarget.style.color = palette.text;
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = palette.background;
                                        e.currentTarget.style.color = palette.textSecondary;
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.outline = `2px solid ${palette.primary}`;
                                        e.currentTarget.style.outlineOffset = '2px';
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.outline = 'none';
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                        <div style={{
                            maxHeight: '70vh',
                            overflowY: 'auto',
                            paddingRight: '4px'
                        }}>
                            {children}
                        </div>
                    </>
                ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: palette.text,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        fontFamily: font
                    }}>
                        <span style={{ fontSize: '1.2rem' }} aria-hidden="true">{icon}</span>
                        <span>{title}</span>
                        <div
                            id={`${title.toLowerCase().replace(/\s+/g, '-')}-description`}
                            style={{ display: 'none' }}
                        >
                            {closedMessage}
                        </div>
                    </div>
                )}
            </div>

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
});

export default FloatingPanel;
