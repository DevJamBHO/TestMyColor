import React, { createContext, useContext, useState, useEffect } from 'react';

// Color blindness types
export const colorBlindTypes = [
    { id: 'normal', label: 'Normal Vision', description: 'No simulation' },
    { id: 'protanopia', label: 'Protanopia', description: 'Absence of red cones' },
    { id: 'deuteranopia', label: 'Deuteranopia', description: 'Absence of green cones' },
    { id: 'tritanopia', label: 'Tritanopia', description: 'Absence of blue cones' },
    { id: 'protanomaly', label: 'Protanomaly', description: 'Red cone deficiency' },
    { id: 'deuteranomaly', label: 'Deuteranomaly', description: 'Green cone deficiency' },
    { id: 'tritanomaly', label: 'Tritanomaly', description: 'Blue cone deficiency' },
    { id: 'achromatopsia', label: 'Achromatopsia', description: 'Grayscale vision' },
];

// Transformation matrices to simulate color blindness
const colorBlindMatrices = {
    normal: [1, 0, 0, 0, 1, 0, 0, 0, 1],
    protanopia: [0.567, 0.433, 0, 0.558, 0.442, 0, 0, 0.242, 0.758],
    deuteranopia: [0.625, 0.375, 0, 0.7, 0.3, 0, 0, 0.3, 0.7],
    tritanopia: [0.95, 0.05, 0, 0, 0.433, 0.567, 0, 0.475, 0.525],
    protanomaly: [0.817, 0.183, 0, 0.333, 0.667, 0, 0, 0.125, 0.875],
    deuteranomaly: [0.8, 0.2, 0, 0.258, 0.742, 0, 0, 0.142, 0.858],
    tritanomaly: [0.967, 0.033, 0, 0, 0.733, 0.267, 0, 0.183, 0.817],
    achromatopsia: [0.299, 0.587, 0.114, 0.299, 0.587, 0.114, 0.299, 0.587, 0.114],
};

interface ColorBlindContextType {
    selectedType: string;
    setSelectedType: (type: string) => void;
    applyColorBlindFilter: (color: string) => string;
    getCurrentMatrix: () => number[];
}

const ColorBlindContext = createContext<ColorBlindContextType | undefined>(undefined);

// Function to convert hex to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 0, g: 0, b: 0 };
};

// Function to convert RGB to hex
const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (n: number) => {
        const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Fonction pour appliquer la matrice de transformation
const applyColorBlindMatrix = (color: string, matrix: number[]): string => {
    const { r, g, b } = hexToRgb(color);

    const newR = r * matrix[0] + g * matrix[1] + b * matrix[2];
    const newG = r * matrix[3] + g * matrix[4] + b * matrix[5];
    const newB = r * matrix[6] + g * matrix[7] + b * matrix[8];

    return rgbToHex(newR, newG, newB);
};

export const ColorBlindProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedType, setSelectedType] = useState<string>('normal');

    // Load preferences from localStorage
    useEffect(() => {
        const savedType = localStorage.getItem('colorBlindType');

        if (savedType) setSelectedType(savedType);
        // isActive remains always true
    }, []);

    // Save preferences
    useEffect(() => {
        localStorage.setItem('colorBlindType', selectedType);
        // isActive is no longer saved as it's always true
    }, [selectedType]);

    // Apply global CSS filter
    useEffect(() => {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        if (selectedType !== 'normal') {
            // Utiliser sepia, hue-rotate, saturate et contrast pour une meilleure compatibilité
            let cssFilter = '';

            switch (selectedType) {
                case 'protanopia':
                    cssFilter = 'sepia(1) hue-rotate(90deg) saturate(1.5) contrast(1.2)';
                    break;
                case 'deuteranopia':
                    cssFilter = 'sepia(1) hue-rotate(180deg) saturate(1.5) contrast(1.2)';
                    break;
                case 'tritanopia':
                    cssFilter = 'sepia(1) hue-rotate(270deg) saturate(1.5) contrast(1.2)';
                    break;
                case 'protanomaly':
                    cssFilter = 'sepia(0.5) hue-rotate(45deg) saturate(1.2) contrast(1.1)';
                    break;
                case 'deuteranomaly':
                    cssFilter = 'sepia(0.5) hue-rotate(135deg) saturate(1.2) contrast(1.1)';
                    break;
                case 'tritanomaly':
                    cssFilter = 'sepia(0.5) hue-rotate(225deg) saturate(1.2) contrast(1.1)';
                    break;
                case 'achromatopsia':
                    cssFilter = 'grayscale(1) contrast(1.2)';
                    break;
                default:
                    cssFilter = 'none';
            }

            appContent.style.filter = cssFilter;
            appContent.style.webkitFilter = cssFilter;
        } else {
            appContent.style.filter = 'none';
            appContent.style.webkitFilter = 'none';
        }

        return () => {
            if (appContent) {
                appContent.style.filter = 'none';
                appContent.style.webkitFilter = 'none';
            }
        };
    }, [selectedType]);

    const applyColorBlindFilter = (color: string): string => {
        if (selectedType === 'normal') return color;
        const matrix = colorBlindMatrices[selectedType as keyof typeof colorBlindMatrices];
        return applyColorBlindMatrix(color, matrix);
    };

    const getCurrentMatrix = (): number[] => {
        return colorBlindMatrices[selectedType as keyof typeof colorBlindMatrices];
    };

    return (
        <ColorBlindContext.Provider value={{
            selectedType,
            setSelectedType,
            applyColorBlindFilter,
            getCurrentMatrix
        }}>
            {children}
        </ColorBlindContext.Provider>
    );
};

export const useColorBlind = () => {
    const context = useContext(ColorBlindContext);
    if (context === undefined) {
        throw new Error('useColorBlind must be used within a ColorBlindProvider');
    }
    return context;
};
