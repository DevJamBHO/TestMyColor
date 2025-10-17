import React, { useState } from 'react';
import { useColors, Palette } from '../context/ColorContext';
import CustomButton from './ui/CustomButton';

interface ExportFormat {
    name: string;
    extension: string;
    generate: (palette: Palette) => string;
}

const exportFormats: ExportFormat[] = [
    {
        name: 'CSS',
        extension: 'css',
        generate: (palette) => {
            return `:root {\n${Object.entries(palette)
                .map(([key, value]) => `  --color-${key}: ${value};`)
                .join('\n')}\n}`;
        },
    },
    {
        name: 'SCSS',
        extension: 'scss',
        generate: (palette) => {
            return Object.entries(palette)
                .map(([key, value]) => `$color-${key}: ${value};`)
                .join('\n');
        },
    },
    {
        name: 'Tailwind',
        extension: 'js',
        generate: (palette) => {
            return `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n${Object.entries(palette)
                .map(([key, value]) => `        '${key}': '${value}',`)
                .join('\n')}\n      },\n    },\n  },\n}`;
        },
    },
    {
        name: 'JSON',
        extension: 'json',
        generate: (palette) => {
            return JSON.stringify(palette, null, 2);
        },
    },
];

// Fonction utilitaire pour foncer une couleur hex
function darken(hex: string, amount = 0.12) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    let r = (num >> 16) - Math.round(255 * amount);
    let g = ((num >> 8) & 0x00FF) - Math.round(255 * amount);
    let b = (num & 0x0000FF) - Math.round(255 * amount);
    r = Math.max(0, r); g = Math.max(0, g); b = Math.max(0, b);
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

export const ExportPalette: React.FC = () => {
    const { palette } = useColors();
    const [selectedFormat, setSelectedFormat] = useState<ExportFormat>(exportFormats[0]);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const content = selectedFormat.generate(palette);
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
                {exportFormats.map((format) => (
                    <CustomButton
                        key={format.name}
                        label={format.name}
                        variant='outline'
                        color={selectedFormat.name === format.name ? 'primary' : 'secondary'}
                        onClick={() => setSelectedFormat(format)}
                    />
                ))}
            </div>
            <div style={{ position: 'relative', maxWidth: '600px' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        zIndex: 10,
                    }}>
                    <CustomButton
                        label={copied ? 'Copied!' : 'Copy'}
                        variant="filled"
                        color="primary"
                        size="small"
                        onClick={handleCopy}
                    />
                </div>
                <pre
                    style={{
                        background: palette.text,
                        color: palette.background,
                        fontSize: 15,
                        borderRadius: 6,
                        padding: '38px 18px 18px 18px',
                        fontFamily: 'Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace',
                        minHeight: 100,
                        margin: 0,
                        overflowX: 'auto',
                        boxSizing: 'border-box',
                    }}
                >
                    {selectedFormat.generate(palette)}
                </pre>
            </div>
        </div>
    );
}; 