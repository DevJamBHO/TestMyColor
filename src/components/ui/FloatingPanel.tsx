import React, { useState, forwardRef, useImperativeHandle } from 'react';
import CustomButton from './CustomButton';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useScreenReaderAnnouncement } from '../../hooks/useScreenReaderAnnouncement';

interface FloatingPanelProps {
    title: string;
    icon: string;
    position: 'top-left' | 'top-right';
    children: React.ReactNode;
    closedMessage: string;
    isActive?: boolean;
    showPulse?: boolean;
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
    isActive = false,
    showPulse = false,
    className = '',
    style = {},
    topOffset = 0,
    isOpen: externalIsOpen,
    onOpenChange
}, ref) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
    const focusTrapRef = useFocusTrap(isOpen);

    // Screen reader announcements
    useScreenReaderAnnouncement(
        isOpen ? `${title} opened` : `${title} closed`,
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
                aria-label={isOpen ? `${title} - Panel open` : `${title} - Click to open`}
                aria-expanded={isOpen}
                aria-describedby={isOpen ? undefined : `${title.toLowerCase().replace(/\s+/g, '-')}-description`}
                tabIndex={!isOpen ? 0 : undefined}
                style={{
                    ...positionStyles[position],
                    background: isOpen ? '#fff' : 'rgba(255, 255, 255, 0.95)',
                    borderRadius: isOpen ? 12 : 50,
                    padding: isOpen ? '1rem' : '0.75rem 1rem',
                    boxShadow: isOpen
                        ? '0 4px 12px #0002'
                        : '0 8px 24px #0003, 0 2px 8px #0001',
                    border: isOpen ? '1px solid #eee' : 'none',
                    minWidth: isOpen ? '280px' : 'auto',
                    maxWidth: isOpen ? '320px' : 'none',
                    backdropFilter: isOpen ? 'none' : 'blur(10px)',
                    animation: !isOpen ? 'float 3s ease-in-out infinite' : 'none',
                    cursor: !isOpen ? 'pointer' : 'default',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                                color: '#333'
                            }}>
                                {icon} {title}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {showPulse && (
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: isActive ? '#27ae60' : '#e74c3c',
                                        animation: isActive ? 'pulse 2s infinite' : 'none'
                                    }} />
                                )}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close panel"
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        background: '#f8f9fa',
                                        color: '#666',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        transition: 'all 0.2s ease',
                                        boxShadow: '0 2px 4px #0001'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#e9ecef';
                                        e.currentTarget.style.color = '#333';
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#f8f9fa';
                                        e.currentTarget.style.color = '#666';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.outline = '2px solid #4A90E2';
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
                        <div>
                            {children}
                        </div>
                    </>
                ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#333',
                        fontSize: '0.9rem',
                        fontWeight: 500
                    }}>
                        {showPulse && (
                            <div
                                role="status"
                                aria-label={isActive ? "Panel active" : "Panel inactive"}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: isActive ? '#27ae60' : '#e74c3c',
                                    animation: isActive ? 'pulse 2s infinite' : 'none'
                                }}
                            />
                        )}
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
        </>
    );
});

export default FloatingPanel;
