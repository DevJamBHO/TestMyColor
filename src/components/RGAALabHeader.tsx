import React from 'react';
import { useColors } from '../context/ColorContext';
import { useControlPanels } from '../context/ControlPanelsContext';

const RGAALabHeader: React.FC = () => {
    const { palette } = useColors();
    const { controlPanelsRef } = useControlPanels();

    return (
        <div style={{
            background: '#fff',
            borderRadius: 12,
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px #0001',
            border: '1px solid #eee'
        }}>
            <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: palette.text
            }}>
                RGAA Color Accessibility Lab
            </h2>
            <p style={{
                marginBottom: '1rem',
                opacity: 0.8,
                lineHeight: 1.6
            }}>
                Master RGAA color requirements (criteria 3.1-3.3) with interactive tools and real-time testing:
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
            }}>
                <button
                    type="button"
                    style={{
                        padding: '1rem',
                        background: '#f8f9fa',
                        borderRadius: 8,
                        border: '1px solid #e9ecef',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        fontSize: 'inherit'
                    }}
                    onClick={() => controlPanelsRef.current?.openColorControls()}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#e9ecef';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px #0001';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.background = '#e9ecef';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px #0001';
                        e.currentTarget.style.outline = '2px solid #4A90E2';
                        e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.background = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.outline = 'none';
                    }}
                    aria-label="Open color selector"
                    aria-describedby="color-controls-description"
                >
                    <strong>🎨 RGAA Color Palette</strong>
                    <div
                        id="color-controls-description"
                        style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}
                    >
                        Create RGAA-compliant color schemes with real-time contrast validation
                    </div>
                </button>
                <button
                    type="button"
                    style={{
                        padding: '1rem',
                        background: '#f8f9fa',
                        borderRadius: 8,
                        border: '1px solid #e9ecef',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        fontSize: 'inherit'
                    }}
                    onClick={() => controlPanelsRef.current?.openColorBlindControls()}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#e9ecef';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px #0001';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.background = '#e9ecef';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px #0001';
                        e.currentTarget.style.outline = '2px solid #4A90E2';
                        e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.background = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.outline = 'none';
                    }}
                    aria-label="Open color blindness simulator"
                    aria-describedby="color-blind-controls-description"
                >
                    <strong>👁 RGAA Visual Testing</strong>
                    <div
                        id="color-blind-controls-description"
                        style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}
                    >
                        Test your design with 8 types of color vision deficiencies (RGAA 3.2)
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RGAALabHeader;
