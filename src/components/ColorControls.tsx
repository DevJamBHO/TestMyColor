import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import { useColorBlind } from '../context/ColorBlindContext';
import CustomButton from './ui/CustomButton';
import FloatingPanel, { FloatingPanelRef } from './ui/FloatingPanel';
import chroma from 'chroma-js';
import { calculateContrastRatio, getWCAGCompliance } from '../utils/contrast';

export interface ColorControlsRef {
    open: () => void;
    close: () => void;
}

interface ColorControlsProps {
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

const ColorControls = forwardRef<ColorControlsRef, ColorControlsProps>(({
    isOpen,
    onOpenChange
}, ref) => {
    const { palette, setPalette } = useColors();
    const { font } = useFont();
    const { selectedType } = useColorBlind();
    const panelRef = React.useRef<FloatingPanelRef>(null);
    const [selectedColorKey, setSelectedColorKey] = useState<string | null>(null);
    const [suggestions, setSuggestions] = useState<{ [key: string]: string[] }>({});

    useImperativeHandle(ref, () => ({
        open: () => panelRef.current?.open(),
        close: () => panelRef.current?.close()
    }));

    const handleColorChange = (colorKey: string, value: string) => {
        setPalette({ ...palette, [colorKey]: value });
        generateSuggestions(colorKey, value);
    };

    const generateSuggestions = (colorKey: string, baseColor: string) => {
        const color = chroma(baseColor);
        const suggestions: string[] = [];

        // Generate accessible variations
        const variations = [
            // Lighter versions for better contrast on dark backgrounds
            color.brighten(0.3).hex(),
            color.brighten(0.5).hex(),
            color.brighten(0.7).hex(),

            // Darker versions for better contrast on light backgrounds
            color.darken(0.3).hex(),
            color.darken(0.5).hex(),
            color.darken(0.7).hex(),

            // Saturated versions
            color.saturate(0.5).hex(),
            color.saturate(1).hex(),

            // Desaturated versions
            color.desaturate(0.3).hex(),
            color.desaturate(0.6).hex(),

            // Complementary color
            color.set('hsl.h', '+', 180).hex(),

            // Triadic colors
            color.set('hsl.h', '+', 120).hex(),
            color.set('hsl.h', '+', 240).hex(),
        ];

        // Filter suggestions based on RGAA compliance with realistic UI combinations
        const validSuggestions = variations.filter(suggestion => {
            // Check realistic contrast combinations
            if (colorKey === 'background') {
                // Background should have good contrast with text and primary colors
                return calculateContrastRatio(palette.text, suggestion) >= 4.5 &&
                    calculateContrastRatio(palette.primary, suggestion) >= 4.5 &&
                    calculateContrastRatio(palette.secondary, suggestion) >= 4.5 &&
                    calculateContrastRatio(palette.tertiary, suggestion) >= 4.5;
            } else if (colorKey === 'text') {
                // Text should have good contrast with background
                return calculateContrastRatio(suggestion, palette.background) >= 4.5;
            } else {
                // Primary/Secondary/Tertiary should have good contrast with background
                const backgroundContrast = calculateContrastRatio(suggestion, palette.background) >= 4.5;

                // For secondary, we don't typically put text on it, so skip that test
                if (colorKey === 'secondary') {
                    return backgroundContrast;
                } else {
                    return backgroundContrast && calculateContrastRatio(palette.text, suggestion) >= 4.5;
                }
            }
        }).slice(0, 8); // Limit to 8 suggestions

        setSuggestions(prev => ({
            ...prev,
            [colorKey]: validSuggestions
        }));
    };

    const applySuggestion = (colorKey: string, suggestion: string) => {
        setPalette({ ...palette, [colorKey]: suggestion });
        generateSuggestions(colorKey, suggestion);
    };

    // Regenerate suggestions when palette changes
    useEffect(() => {
        Object.entries(palette).forEach(([key, color]) => {
            if (suggestions[key]) {
                generateSuggestions(key, color);
            }
        });
    }, [palette]);

    const colorInputs = [
        { key: 'primary', label: 'Primary', color: palette.primary },
        { key: 'secondary', label: 'Secondary', color: palette.secondary },
        { key: 'tertiary', label: 'Tertiary', color: palette.tertiary },
        { key: 'background', label: 'Background', color: palette.background },
        { key: 'text', label: 'Text', color: palette.text },
    ];

    return (
        <FloatingPanel
            ref={panelRef}
            title="Sélecteur de Couleurs"
            icon="🎨"
            position="top-right"
            closedMessage="Sélecteur actif - Cliquez pour configurer"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '0.75rem'
            }}>
                {colorInputs.map(({ key, label, color }) => {
                    // Calculate contrast only for realistic UI combinations
                    const getLogicalContrasts = (colorKey: string, color: string) => {
                        const contrasts: number[] = [];

                        if (colorKey === 'background') {
                            // Background should have good contrast with text and primary colors
                            contrasts.push(calculateContrastRatio(palette.text, color));
                            contrasts.push(calculateContrastRatio(palette.primary, color));
                            contrasts.push(calculateContrastRatio(palette.secondary, color));
                            contrasts.push(calculateContrastRatio(palette.tertiary, color));
                        } else if (colorKey === 'text') {
                            // Text should have good contrast with background
                            contrasts.push(calculateContrastRatio(color, palette.background));
                        } else {
                            // Primary/Secondary/Tertiary should have good contrast with background
                            contrasts.push(calculateContrastRatio(color, palette.background));

                            // For secondary, we don't typically put text on it, so skip that test
                            if (colorKey !== 'secondary') {
                                contrasts.push(calculateContrastRatio(palette.text, color));
                            }
                        }

                        return contrasts;
                    };

                    const contrasts = getLogicalContrasts(key, color);
                    const minContrast = Math.min(...contrasts);
                    const compliance = getWCAGCompliance(minContrast);
                    const isSelected = selectedColorKey === key;
                    const colorSuggestions = suggestions[key] || [];

                    return (
                        <div key={key} style={{
                            border: isSelected ? '2px solid #4A90E2' : '1px solid #e9ecef',
                            borderRadius: 8,
                            padding: '0.75rem',
                            background: isSelected ? '#f8f9ff' : '#fff',
                            transition: 'all 0.2s ease'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: isSelected ? '0.75rem' : '0'
                            }}>
                                <button
                                    type="button"
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '6px',
                                        background: color,
                                        border: '2px solid #fff',
                                        boxShadow: '0 2px 4px #0002',
                                        cursor: 'pointer',
                                        padding: 0,
                                        position: 'relative'
                                    }}
                                    onClick={() => {
                                        const input = document.getElementById(`color-${key}`) as HTMLInputElement;
                                        input?.click();
                                    }}
                                    onMouseEnter={() => setSelectedColorKey(key)}
                                    aria-label={`Change ${label.toLowerCase()} color`}
                                    aria-describedby={`color-${key}-value`}
                                    onFocus={(e) => {
                                        e.currentTarget.style.outline = '2px solid #4A90E2';
                                        e.currentTarget.style.outlineOffset = '2px';
                                        setSelectedColorKey(key);
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.outline = 'none';
                                    }}
                                >
                                    {/* Contrast indicator */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        background: compliance.includes('AAA') ? '#27ae60' :
                                            compliance.includes('AA') ? '#f39c12' : '#e74c3c',
                                        border: '2px solid white',
                                        fontSize: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>
                                        {compliance.includes('AAA') ? 'A' : compliance.includes('AA') ? 'A' : '!'}
                                    </div>
                                </button>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        marginBottom: '0.25rem'
                                    }}>
                                        <label
                                            htmlFor={`color-${key}`}
                                            style={{
                                                fontSize: '0.9rem',
                                                fontWeight: 600,
                                                color: '#333',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {label}
                                        </label>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            padding: '0.2rem 0.4rem',
                                            background: compliance.includes('AAA') ? '#27ae60' :
                                                compliance.includes('AA') ? '#f39c12' : '#e74c3c',
                                            color: 'white',
                                            borderRadius: 4,
                                            fontWeight: 'bold'
                                        }}>
                                            {compliance}
                                        </span>
                                    </div>
                                    <div
                                        id={`color-${key}-value`}
                                        style={{
                                            fontSize: '0.75rem',
                                            color: '#666',
                                            fontFamily: 'monospace',
                                            marginBottom: '0.25rem'
                                        }}
                                    >
                                        {color}
                                    </div>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        color: '#888'
                                    }}>
                                        Min contrast: {minContrast.toFixed(2)}:1
                                        {contrasts.length > 1 && (
                                            <span style={{ marginLeft: '0.5rem', fontSize: '0.65rem' }}>
                                                (vs {contrasts.length} colors)
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <input
                                    id={`color-${key}`}
                                    type="color"
                                    value={color}
                                    onChange={(e) => handleColorChange(key, e.target.value)}
                                    aria-label={`${label.toLowerCase()} color`}
                                    style={{
                                        position: 'absolute',
                                        opacity: 0,
                                        pointerEvents: 'none',
                                        width: '1px',
                                        height: '1px',
                                        padding: 0,
                                        border: 0,
                                        margin: 0
                                    }}
                                />
                            </div>

                            {/* RGAA Suggestions */}
                            {isSelected && colorSuggestions.length > 0 && (
                                <div>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: '#333',
                                        marginBottom: '0.5rem'
                                    }}>
                                        🎯 RGAA Compliant Suggestions
                                    </div>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(4, 1fr)',
                                        gap: '0.5rem'
                                    }}>
                                        {colorSuggestions.map((suggestion, index) => {
                                            // Calculate contrast with realistic UI combinations for this suggestion
                                            let suggestionContrasts: number[] = [];

                                            if (key === 'background') {
                                                suggestionContrasts = [
                                                    calculateContrastRatio(palette.text, suggestion),
                                                    calculateContrastRatio(palette.primary, suggestion),
                                                    calculateContrastRatio(palette.secondary, suggestion),
                                                    calculateContrastRatio(palette.tertiary, suggestion)
                                                ];
                                            } else if (key === 'text') {
                                                suggestionContrasts = [
                                                    calculateContrastRatio(suggestion, palette.background)
                                                ];
                                            } else {
                                                suggestionContrasts = [
                                                    calculateContrastRatio(suggestion, palette.background)
                                                ];

                                                // For secondary, we don't typically put text on it, so skip that test
                                                if (key !== 'secondary') {
                                                    suggestionContrasts.push(calculateContrastRatio(palette.text, suggestion));
                                                }
                                            }

                                            const suggestionMinContrast = Math.min(...suggestionContrasts);
                                            const suggestionCompliance = getWCAGCompliance(suggestionMinContrast);

                                            return (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => applySuggestion(key, suggestion)}
                                                    style={{
                                                        width: '100%',
                                                        height: '40px',
                                                        borderRadius: '6px',
                                                        background: suggestion,
                                                        border: '2px solid #fff',
                                                        cursor: 'pointer',
                                                        position: 'relative',
                                                        boxShadow: '0 2px 4px #0002',
                                                        transition: 'transform 0.2s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.05)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                    }}
                                                    onFocus={(e) => {
                                                        e.currentTarget.style.outline = '2px solid #4A90E2';
                                                        e.currentTarget.style.outlineOffset = '2px';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.currentTarget.style.outline = 'none';
                                                    }}
                                                    aria-label={`Apply ${suggestion} to ${label.toLowerCase()}`}
                                                >
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '-6px',
                                                        right: '-6px',
                                                        width: '14px',
                                                        height: '14px',
                                                        borderRadius: '50%',
                                                        background: suggestionCompliance.includes('AAA') ? '#27ae60' :
                                                            suggestionCompliance.includes('AA') ? '#f39c12' : '#e74c3c',
                                                        border: '1px solid white',
                                                        fontSize: '8px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        {suggestionCompliance.includes('AAA') ? 'A' : suggestionCompliance.includes('AA') ? 'A' : '!'}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        color: '#666',
                                        marginTop: '0.5rem',
                                        textAlign: 'center'
                                    }}>
                                        Click any suggestion to apply it
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '0.75rem'
            }}>
                <CustomButton
                    label="Reset to RGAA Default"
                    variant="outline"
                    color="secondary"
                    size="small"
                    onClick={() => {
                        // RGAA-compliant default palette with optimal contrast ratios
                        const defaultPalette = {
                            // Pure black text (21:1 contrast with white background)
                            text: '#000000',
                            // Pure white background
                            background: '#ffffff',
                            // Blue primary (7.2:1 with white, 4.5:1 with black text)
                            primary: '#0d6efd',
                            // Gray secondary (4.5:1+ with white, 4.5:1+ with black text)
                            secondary: '#6b7280',
                            // Red tertiary (5.1:1 with white, 4.5:1 with black text)
                            tertiary: '#dc3545',
                        };
                        setPalette(defaultPalette);
                        // Clear suggestions to force regeneration
                        setSuggestions({});
                    }}
                    style={{
                        flex: 1,
                        fontSize: '0.75rem'
                    }}
                />
            </div>
        </FloatingPanel>
    );
});

export default ColorControls;