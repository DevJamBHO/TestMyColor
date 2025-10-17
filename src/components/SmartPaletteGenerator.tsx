import React, { useState } from 'react';
import chroma from 'chroma-js';
import { useColors } from '../context/ColorContext';
import CustomButton from './ui/CustomButton';
import SingleColorInput from './SingleColorInput';

const harmonyTypes = [
    { label: 'Complementary', value: 'complement' },
    { label: 'Analogous', value: 'analogous' },
    { label: 'Triadic', value: 'triad' },
    { label: 'Tetradic', value: 'tetrad' },
];

function generatePalette(base: string, type: string): string[] {
    let colors: string[] = [];
    switch (type) {
        case 'complement':
            colors = [base, chroma(base).set('hsl.h', "+180").hex()];
            break;
        case 'analogous':
            colors = chroma.scale([chroma(base).set('hsl.h', '-30'), base, chroma(base).set('hsl.h', '+30')]).colors(3);
            break;
        case 'triad':
            colors = [
                base,
                chroma(base).set('hsl.h', '+120').hex(),
                chroma(base).set('hsl.h', '-120').hex(),
            ];
            break;
        case 'tetrad':
            colors = [
                base,
                chroma(base).set('hsl.h', '+90').hex(),
                chroma(base).set('hsl.h', '+180').hex(),
                chroma(base).set('hsl.h', '+270').hex(),
            ];
            break;
        default:
            colors = [base];
    }
    // Toujours retourner 5 couleurs : interpolation ou duplication si besoin
    if (colors.length < 5) {
        // Interpolation linéaire dans l'espace Lab pour compléter
        const scale = chroma.scale(colors).mode('lab');
        colors = scale.colors(5);
    } else if (colors.length > 5) {
        colors = colors.slice(0, 5);
    }
    return colors;
}

const paletteRoles = ['primary', 'secondary', 'tertiary', 'background', 'text'];

function mapToSitePalette(base: string, generated: string[]) {
    // 1. Primary = base
    // 2. Secondary = 1ère couleur différente de la base
    // 3. Tertiary = 2ème couleur différente de la base
    const uniqueColors = [base, ...generated.filter(c => c.toLowerCase() !== base.toLowerCase())];
    const primary = uniqueColors[0] || '#4A90E2';
    const secondary = uniqueColors[1] || '#7B8C99';
    const tertiary = uniqueColors[2] || '#F8C471';
    // 4. Pour background/text, on cherche la plus claire/foncée adaptée
    const used = [primary, secondary, tertiary].map(c => c.toLowerCase());
    const candidates = generated.filter(c => !used.includes(c.toLowerCase()));
    // Background : la plus claire avec luminance > 0.85
    let background = candidates
        .filter(c => chroma(c).luminance() > 0.85)
        .sort((a, b) => chroma(b).luminance() - chroma(a).luminance())[0];
    if (!background) background = '#F5F5F5';
    // Text : la plus foncée avec luminance < 0.25
    let text = candidates
        .filter(c => chroma(c).luminance() < 0.25)
        .sort((a, b) => chroma(a).luminance() - chroma(b).luminance())[0];
    if (!text) text = '#2E2E2E';
    // 5. Garantir unicité
    const palette = { primary, secondary, tertiary, background, text };
    const seen = new Set();
    for (const key of paletteRoles) {
        if (seen.has(palette[key])) {
            // Si doublon, on met une valeur par défaut
            if (key === 'background') palette[key] = '#F5F5F5';
            else if (key === 'text') palette[key] = '#2E2E2E';
            else if (key === 'primary') palette[key] = '#4A90E2';
            else if (key === 'secondary') palette[key] = '#7B8C99';
            else if (key === 'tertiary') palette[key] = '#F8C471';
        }
        seen.add(palette[key]);
    }
    return palette;
}

const roleLabels: Record<string, string> = {
    primary: 'Primary',
    secondary: 'Secondary',
    tertiary: 'Tertiary',
    background: 'Background',
    text: 'Text',
};

const SmartPaletteGenerator: React.FC = () => {
    const [baseColor, setBaseColor] = useState('#4A90E2');
    const [harmony, setHarmony] = useState('complement');
    const { setPalette } = useColors();
    const generated = generatePalette(baseColor, harmony);
    const mapped = mapToSitePalette(baseColor, generated);

    // Pour l'affichage façon Coolors
    const paletteToShow = paletteRoles.map(role => ({
        role,
        color: mapped[role],
        label: roleLabels[role],
    }));

    return (
        <div>
            {/* Zone de génération */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginBottom: 32 }}>
                <SingleColorInput
                    label="Base color"
                    color={baseColor}
                    onChange={setBaseColor}
                />
                <div style={{ display: 'flex', gap: 8 }}>
                    {harmonyTypes.map(h => (
                        <CustomButton
                            key={h.value}
                            label={h.label}
                            variant={harmony === h.value ? 'filled' : 'outline'}
                            color={harmony === h.value ? 'primary' : 'secondary'}
                            size="small"
                            onClick={() => setHarmony(h.value)}
                            style={{ minWidth: 110 }}
                        />
                    ))}
                </div>
            </div>
            {/* Palette façon Coolors améliorée */}
            <div style={{
                display: 'flex',
                width: '100%',
                minHeight: 170,
                margin: '0 auto 32px auto',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 2px 8px #0001',
                border: '1.5px solid #eee',
                maxWidth: 800,
                background: '#fff',
                gap: 6,
                justifyContent: 'center',
            }}>
                {paletteToShow.map(({ role, color, label }, idx) => (
                    <div
                        key={role}
                        style={{
                            flex: 1,
                            minWidth: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '24px 0 16px 0',
                            background: color,
                            borderTopLeftRadius: idx === 0 ? 18 : 0,
                            borderBottomLeftRadius: idx === 0 ? 18 : 0,
                            borderTopRightRadius: idx === paletteToShow.length - 1 ? 18 : 0,
                            borderBottomRightRadius: idx === paletteToShow.length - 1 ? 18 : 0,
                        }}
                    >
                        <span style={{
                            color: chroma(color).luminance() < 0.5 ? '#fff' : '#222',
                            fontWeight: 700,
                            fontSize: 22,
                            letterSpacing: 1,
                            fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                            marginBottom: 10,
                            wordBreak: 'break-all',
                            textAlign: 'center',
                        }}>{color.toUpperCase()}</span>
                        <span style={{
                            color: chroma(color).luminance() < 0.5 ? '#fff' : '#222',
                            fontWeight: 500,
                            fontSize: 15,
                            opacity: 0.85,
                            marginBottom: 2,
                            textAlign: 'center',
                        }}>{label}</span>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
                <CustomButton
                    label="Apply to site"
                    color="primary"
                    variant="filled"
                    size="large"
                    onClick={() => setPalette(mapped)}
                    style={{
                        borderRadius: 12,
                        minWidth: 180,
                        fontWeight: 600,
                        fontSize: 18,
                        background: mapped.primary,
                        color: chroma(mapped.primary).luminance() < 0.5 ? '#fff' : '#222',
                        boxShadow: '0 2px 8px #0002',
                    }}
                />
            </div>
        </div>
    );
};

export default SmartPaletteGenerator; 