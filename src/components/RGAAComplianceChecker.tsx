import React, { useState } from 'react';
import { useColors } from '../context/ColorContext';
import { calculateContrastRatio, getWCAGCompliance } from '../utils/contrast';
import chroma from 'chroma-js';
import CustomButton from './ui/CustomButton';

interface ComplianceResult {
    combination: string;
    ratio: number;
    compliance: string;
    status: 'pass' | 'warning' | 'fail';
    foreground: string;
    background: string;
    isLogical: boolean;
}

interface ColorFix {
    colorKey: string;
    currentColor: string;
    suggestedColor: string;
    improvement: number;
    reason: string;
}

const RGAAComplianceChecker: React.FC = () => {
    const { palette, setPalette } = useColors();
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedFix, setSelectedFix] = useState<ColorFix | null>(null);

    const getComplianceStatus = (compliance: string): 'pass' | 'warning' | 'fail' => {
        if (compliance === 'AAA') return 'pass';
        if (compliance.startsWith('AA')) return 'warning';
        return 'fail';
    };

    const getStatusIcon = (status: 'pass' | 'warning' | 'fail') => {
        switch (status) {
            case 'pass': return '✅';
            case 'warning': return '⚠️';
            case 'fail': return '❌';
        }
    };

    const getStatusColor = (status: 'pass' | 'warning' | 'fail') => {
        switch (status) {
            case 'pass': return '#27ae60';
            case 'warning': return '#f39c12';
            case 'fail': return '#e74c3c';
        }
    };

    const checkCompliance = (): ComplianceResult[] => {
        // Realistic UI combinations based on our improved logic
        const combinations = [
            // Essential combinations
            { foreground: palette.text, background: palette.background, label: 'Text on Background', isLogical: true },
            { foreground: palette.primary, background: palette.background, label: 'Primary on Background', isLogical: true },
            { foreground: palette.secondary, background: palette.background, label: 'Secondary on Background', isLogical: true },
            { foreground: palette.tertiary, background: palette.background, label: 'Tertiary on Background', isLogical: true },

            // Text on colored backgrounds (realistic UI usage)
            { foreground: palette.text, background: palette.primary, label: 'Text on Primary', isLogical: true },
            { foreground: palette.text, background: palette.tertiary, label: 'Text on Tertiary', isLogical: true },

            // White text on colored backgrounds (buttons, cards)
            { foreground: '#ffffff', background: palette.primary, label: 'White on Primary', isLogical: true },
            { foreground: '#ffffff', background: palette.tertiary, label: 'White on Tertiary', isLogical: true },

            // Less common but possible combinations
            { foreground: palette.primary, background: palette.secondary, label: 'Primary on Secondary', isLogical: false },
            { foreground: palette.primary, background: palette.tertiary, label: 'Primary on Tertiary', isLogical: false },
        ];

        return combinations.map(({ foreground, background, label, isLogical }) => {
            const ratio = calculateContrastRatio(foreground, background);
            const compliance = getWCAGCompliance(ratio);
            const status = getComplianceStatus(compliance);

            return {
                combination: label,
                ratio: Math.round(ratio * 100) / 100,
                compliance,
                status,
                foreground,
                background,
                isLogical
            };
        });
    };

    const generateColorFixes = (): ColorFix[] => {
        const fixes: ColorFix[] = [];
        const complianceResults = checkCompliance();

        // Find failing logical combinations
        const failingLogical = complianceResults.filter(r => r.status === 'fail' && r.isLogical);

        failingLogical.forEach(result => {
            const { foreground, background, combination } = result;

            // Determine which color to fix based on the combination
            let colorKey = '';
            let currentColor = '';
            let reason = '';

            if (combination.includes('Text on Background')) {
                colorKey = 'text';
                currentColor = foreground;
                reason = 'Text needs better contrast with background';
            } else if (combination.includes('Primary on Background')) {
                colorKey = 'primary';
                currentColor = foreground;
                reason = 'Primary color needs better contrast with background';
            } else if (combination.includes('Secondary on Background')) {
                colorKey = 'secondary';
                currentColor = foreground;
                reason = 'Secondary color needs better contrast with background';
            } else if (combination.includes('Tertiary on Background')) {
                colorKey = 'tertiary';
                currentColor = foreground;
                reason = 'Tertiary color needs better contrast with background';
            } else if (combination.includes('Text on Primary')) {
                colorKey = 'primary';
                currentColor = background;
                reason = 'Primary background needs better contrast with text';
            } else if (combination.includes('Text on Tertiary')) {
                colorKey = 'tertiary';
                currentColor = background;
                reason = 'Tertiary background needs better contrast with text';
            }

            if (colorKey) {
                // Generate a better color
                const color = chroma(currentColor);
                let suggestedColor = currentColor;

                if (colorKey === 'text') {
                    // Make text darker for better contrast
                    suggestedColor = color.darken(0.3).hex();
                } else if (colorKey === 'background') {
                    // Make background lighter
                    suggestedColor = color.brighten(0.2).hex();
                } else {
                    // For primary/secondary/tertiary, adjust based on current contrast
                    const currentContrast = calculateContrastRatio(foreground, background);
                    if (currentContrast < 4.5) {
                        // Need more contrast - make darker or lighter
                        const targetColor = combination.includes('Text on') ? palette.text : palette.background;
                        const targetContrast = 4.5;

                        // Try different adjustments
                        const adjustments = [
                            color.darken(0.2),
                            color.darken(0.4),
                            color.brighten(0.2),
                            color.brighten(0.4)
                        ];

                        for (const adjusted of adjustments) {
                            const newContrast = calculateContrastRatio(
                                combination.includes('Text on') ? palette.text : adjusted.hex(),
                                combination.includes('Text on') ? adjusted.hex() : palette.background
                            );
                            if (newContrast >= 4.5) {
                                suggestedColor = adjusted.hex();
                                break;
                            }
                        }
                    }
                }

                const newContrast = calculateContrastRatio(
                    combination.includes('Text on') ? palette.text : suggestedColor,
                    combination.includes('Text on') ? suggestedColor : palette.background
                );
                const improvement = newContrast - result.ratio;

                if (improvement > 0) {
                    fixes.push({
                        colorKey,
                        currentColor,
                        suggestedColor,
                        improvement: Math.round(improvement * 100) / 100,
                        reason
                    });
                }
            }
        });

        return fixes;
    };

    const generateAllCombinations = () => {
        const colors = [
            { key: 'text', name: 'Text', color: palette.text },
            { key: 'background', name: 'Background', color: palette.background },
            { key: 'primary', name: 'Primary', color: palette.primary },
            { key: 'secondary', name: 'Secondary', color: palette.secondary },
            { key: 'tertiary', name: 'Tertiary', color: palette.tertiary }
        ];

        const allCombinations = [];

        // Generate all possible combinations (foreground on background)
        for (let i = 0; i < colors.length; i++) {
            for (let j = 0; j < colors.length; j++) {
                if (i !== j) { // Don't test color on itself
                    const foreground = colors[i];
                    const background = colors[j];
                    const ratio = calculateContrastRatio(foreground.color, background.color);
                    const compliance = getWCAGCompliance(ratio);
                    const status = getComplianceStatus(compliance);

                    // Determine if this is a logical combination
                    const isLogical = (
                        // Text on background
                        (foreground.key === 'text' && background.key === 'background') ||
                        // Colors on background
                        (['primary', 'secondary', 'tertiary'].includes(foreground.key) && background.key === 'background') ||
                        // Text on colors (for buttons, cards)
                        (foreground.key === 'text' && ['primary', 'secondary', 'tertiary'].includes(background.key)) ||
                        // White text on colors (common UI pattern)
                        (foreground.color === '#ffffff' && ['primary', 'secondary', 'tertiary'].includes(background.key))
                    );

                    allCombinations.push({
                        foreground: foreground.name,
                        background: background.name,
                        foregroundColor: foreground.color,
                        backgroundColor: background.color,
                        ratio: Math.round(ratio * 100) / 100,
                        compliance,
                        status,
                        isLogical
                    });
                }
            }
        }

        return allCombinations.sort((a, b) => {
            // Sort by logical first, then by status (pass > warning > fail)
            if (a.isLogical !== b.isLogical) return b.isLogical - a.isLogical;
            const statusOrder = { 'pass': 3, 'warning': 2, 'fail': 1 };
            return statusOrder[b.status] - statusOrder[a.status];
        });
    };


    const allCombinations = generateAllCombinations();
    const logicalResults = allCombinations.filter(r => r.isLogical);
    const failCount = logicalResults.filter(r => r.status === 'fail').length;
    const colorFixes = generateColorFixes();


    return (
        <div>
            <p style={{
                marginBottom: '1.5rem',
                opacity: 0.8,
                lineHeight: 1.6
            }}>
                Real-time validation of your color palette against RGAA criteria 3.1 (contrast requirements).
            </p>


            {/* Color Combinations List */}
            <div style={{ marginBottom: '2rem' }}>

                <div style={{
                    background: '#fff',
                    borderRadius: 8,
                    border: '1px solid #e9ecef',
                    overflow: 'hidden'
                }}>
                    {allCombinations
                        .sort((a, b) => b.ratio - a.ratio) // Tri par ratio décroissant
                        .map((result, index) => {

                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    borderBottom: index < allCombinations.length - 1 ? '1px solid #f1f3f4' : 'none',
                                    background: index % 2 === 0 ? '#fff' : '#fafafa'
                                }}>
                                    {/* Rang */}
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: getStatusColor(result.status),
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        marginRight: '1rem',
                                        flexShrink: 0
                                    }}>
                                        {index + 1}
                                    </div>

                                    {/* Couleurs */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        marginRight: '1rem',
                                        flexShrink: 0
                                    }}>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '4px',
                                            background: result.foregroundColor,
                                            border: '1px solid #ddd'
                                        }} />
                                        <span style={{ color: '#666', fontSize: '0.9rem' }}>sur</span>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '4px',
                                            background: result.backgroundColor,
                                            border: '1px solid #ddd'
                                        }} />
                                    </div>

                                    {/* Nom de la combinaison */}
                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                        <div style={{
                                            fontWeight: 600,
                                            fontSize: '0.95rem',
                                            color: palette.text,
                                            marginBottom: '0.25rem'
                                        }}>
                                            {result.foreground} sur {result.background}
                                        </div>
                                        <div style={{
                                            fontSize: '0.8rem',
                                            color: '#666'
                                        }}>
                                            {result.isLogical ? 'Combinaison logique' : 'Combinaison peu commune'}
                                        </div>
                                    </div>

                                    {/* Score et statut */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginRight: '1rem'
                                    }}>
                                        <div style={{
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '1.1rem',
                                                fontWeight: 'bold',
                                                color: getStatusColor(result.status)
                                            }}>
                                                {result.ratio}:1
                                            </div>
                                            <div style={{
                                                fontSize: '0.7rem',
                                                color: '#666'
                                            }}>
                                                contraste
                                            </div>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ fontSize: '1.2rem' }}>
                                                {getStatusIcon(result.status)}
                                            </span>
                                            <span style={{
                                                fontSize: '0.8rem',
                                                padding: '0.25rem 0.5rem',
                                                background: getStatusColor(result.status),
                                                color: 'white',
                                                borderRadius: 4,
                                                fontWeight: 'bold'
                                            }}>
                                                {result.compliance}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Exemple visuel */}
                                    <div style={{
                                        width: '120px',
                                        height: '40px',
                                        background: result.backgroundColor,
                                        borderRadius: 6,
                                        border: '1px solid #ddd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <span style={{
                                            color: result.foregroundColor,
                                            fontSize: '0.8rem',
                                            fontWeight: 500,
                                            opacity: result.status === 'fail' ? 0.6 : 1
                                        }}>
                                            Exemple
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>



            {/* Success Message */}
            {failCount === 0 && (
                <div style={{
                    background: '#e8f5e8',
                    padding: '1rem',
                    borderRadius: 8,
                    marginTop: '1.5rem',
                    border: '1px solid #4caf50',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉</div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#388e3c' }}>
                        Perfect RGAA Compliance!
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#2e7d32' }}>
                        Your color palette meets all RGAA criteria. Great job! 🎨✨
                    </p>
                </div>
            )}
        </div>
    );
};

export default RGAAComplianceChecker;
