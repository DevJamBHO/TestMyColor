import React, { useState, useEffect, useMemo } from 'react';
import { useFont } from '../context/FontContext';
import { useColors } from '../context/ColorContext';
import { ALL_FONTS, FONTS_BY_CATEGORY, FONT_CATEGORIES, POPULAR_FONTS } from '../data/fonts';
import { trackPaletteEvent, AnalyticsEvents } from '../utils/analytics';
import SectionTitle from './ui/SectionTitle';
import CustomButton from './ui/CustomButton';

interface FontPreviewProps {
    fontName: string;
    text: string;
    size?: number;
    weight?: number;
    style?: React.CSSProperties;
}

const FontPreview: React.FC<FontPreviewProps> = ({
    fontName,
    text,
    size = 16,
    weight = 400,
    style = {}
}) => {
    return (
        <div
            style={{
                fontFamily: `'${fontName}', sans-serif`,
                fontSize: `${size}px`,
                fontWeight: weight,
                ...style
            }}
        >
            {text}
        </div>
    );
};

const AdvancedFontSelector: React.FC = () => {
    const { font, setFont } = useFont();
    const { palette } = useColors();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showCustomUpload, setShowCustomUpload] = useState(false);
    const [customFont, setCustomFont] = useState<string | null>(null);
    const [selectedWeight, setSelectedWeight] = useState(400);

    const currentFontName = font.replace(/'/g, '').split(',')[0].trim();

    // Filtrer les polices selon la catégorie et la recherche
    const filteredFonts = useMemo(() => {
        let fonts = selectedCategory === 'all' ? ALL_FONTS : FONTS_BY_CATEGORY[selectedCategory] || [];

        if (searchTerm) {
            fonts = fonts.filter(font =>
                font.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                font.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return fonts;
    }, [selectedCategory, searchTerm]);

    // Charger une police Google Fonts
    const loadGoogleFont = (fontName: string, weight: number = 400) => {
        const linkId = `google-font-${fontName.replace(/\s+/g, '-')}-${weight}`;
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}:wght@${weight}&display=swap`;
            document.head.appendChild(link);
        }
    };

    // Appliquer une police
    const applyFont = (fontName: string, weight: number = 400) => {
        const fontFamily = `'${fontName}', sans-serif`;
        setFont(fontFamily);
        loadGoogleFont(fontName, weight);

        trackPaletteEvent(AnalyticsEvents.FONT_CHANGED, undefined, {
            fontName,
            weight,
            source: 'advanced-selector'
        });
    };

    // Upload de police personnalisée
    const handleCustomFontUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const fontData = event.target?.result;
            const fontName = file.name.split('.')[0].replace(/[^a-zA-Z0-9]/g, '');

            const style = document.createElement('style');
            style.innerHTML = `
                @font-face {
                    font-family: '${fontName}';
                    src: url(${fontData});
                }
            `;
            document.head.appendChild(style);
            setCustomFont(fontName);
            applyFont(fontName);

            trackPaletteEvent(AnalyticsEvents.FONT_CHANGED, undefined, {
                fontName,
                source: 'custom-upload',
                fileType: file.type,
                fileSize: file.size
            });
        };
        reader.readAsDataURL(file);
    };

    // Charger la police actuelle
    useEffect(() => {
        if (currentFontName && !customFont) {
            loadGoogleFont(currentFontName, selectedWeight);
        }
    }, [currentFontName, selectedWeight, customFont]);

    return (
        <section style={{ marginBottom: '3rem' }}>
            <SectionTitle
                title="Sélecteur de Typographie Avancé"
                description="Testez avec toutes les polices disponibles. Choisissez par catégorie, recherchez, ou uploadez vos propres polices."
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
                {/* Contrôles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Recherche */}
                    <div>
                        <label htmlFor="font-search" style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                            Rechercher une police :
                        </label>
                        <input
                            id="font-search"
                            type="text"
                            placeholder="Tapez le nom d'une police..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: `2px solid ${palette.primary}20`,
                                fontSize: '1rem',
                                fontFamily: font
                            }}
                        />
                    </div>

                    {/* Catégories */}
                    <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                            Catégorie :
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <CustomButton
                                label="Toutes"
                                variant={selectedCategory === 'all' ? 'filled' : 'outline'}
                                color="primary"
                                size="small"
                                onClick={() => setSelectedCategory('all')}
                            />
                            {Object.entries(FONT_CATEGORIES).map(([key, label]) => (
                                <CustomButton
                                    key={key}
                                    label={label}
                                    variant={selectedCategory === key ? 'filled' : 'outline'}
                                    color="secondary"
                                    size="small"
                                    onClick={() => setSelectedCategory(key)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Polices populaires */}
                    <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                            Polices populaires :
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {POPULAR_FONTS.slice(0, 8).map((fontName) => (
                                <CustomButton
                                    key={fontName}
                                    label={fontName}
                                    variant={currentFontName === fontName ? 'filled' : 'ghost'}
                                    color="tertiary"
                                    size="small"
                                    onClick={() => applyFont(fontName)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Upload personnalisé */}
                    <div>
                        <CustomButton
                            label={showCustomUpload ? "Masquer Upload" : "Upload Police Personnalisée"}
                            variant="outline"
                            color="secondary"
                            onClick={() => setShowCustomUpload(!showCustomUpload)}
                        />
                        {showCustomUpload && (
                            <div style={{ marginTop: '1rem' }}>
                                <input
                                    type="file"
                                    accept=".woff,.woff2,.ttf,.otf"
                                    onChange={handleCustomFontUpload}
                                    style={{ marginBottom: '0.5rem' }}
                                />
                                {customFont && (
                                    <p style={{ fontSize: '0.9rem', color: palette.primary }}>
                                        ✅ Police appliquée : <strong>{customFont}</strong>
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Poids de la police */}
                    <div>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                            Poids : {selectedWeight}
                        </label>
                        <input
                            type="range"
                            min="100"
                            max="900"
                            step="100"
                            value={selectedWeight}
                            onChange={(e) => setSelectedWeight(Number(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>

                {/* Liste des polices */}
                <div style={{ maxHeight: '500px', overflowY: 'auto', border: `1px solid ${palette.primary}20`, borderRadius: '8px', padding: '1rem' }}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {filteredFonts.map((fontData) => (
                            <div
                                key={fontData.name}
                                style={{
                                    padding: '1rem',
                                    border: `2px solid ${currentFontName === fontData.name ? palette.primary : 'transparent'}`,
                                    borderRadius: '8px',
                                    backgroundColor: currentFontName === fontData.name ? `${palette.primary}10` : 'transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                                onClick={() => applyFont(fontData.name, selectedWeight)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
                                        {fontData.name}
                                    </h4>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        padding: '0.25rem 0.5rem',
                                        backgroundColor: palette.primary + '20',
                                        borderRadius: '4px',
                                        textTransform: 'uppercase'
                                    }}>
                                        {fontData.source}
                                    </span>
                                </div>

                                {fontData.description && (
                                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: 0.7 }}>
                                        {fontData.description}
                                    </p>
                                )}

                                <div style={{ marginBottom: '0.5rem' }}>
                                    <FontPreview
                                        fontName={fontData.name}
                                        text="The quick brown fox jumps over the lazy dog"
                                        size={16}
                                        weight={selectedWeight}
                                        style={{ color: palette.text }}
                                    />
                                </div>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: '0.8rem', color: palette.text, opacity: 0.6 }}>
                                        {FONT_CATEGORIES[fontData.category]}
                                    </span>
                                    {fontData.weights && (
                                        <span style={{ fontSize: '0.8rem', color: palette.text, opacity: 0.6 }}>
                                            Poids: {fontData.weights.join(', ')}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Prévisualisation de la police actuelle */}
            <div style={{
                padding: '2rem',
                backgroundColor: `${palette.primary}05`,
                borderRadius: '12px',
                border: `2px solid ${palette.primary}20`
            }}>
                <h3 style={{ margin: '0 0 1rem 0', color: palette.text }}>
                    Prévisualisation de la police actuelle : <strong>{currentFontName}</strong>
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <FontPreview
                        fontName={currentFontName}
                        text="Heading 1 - The quick brown fox jumps over the lazy dog"
                        size={32}
                        weight={selectedWeight}
                        style={{ color: palette.text, fontWeight: 700 }}
                    />
                    <FontPreview
                        fontName={currentFontName}
                        text="Heading 2 - The quick brown fox jumps over the lazy dog"
                        size={24}
                        weight={selectedWeight}
                        style={{ color: palette.text, fontWeight: 600 }}
                    />
                    <FontPreview
                        fontName={currentFontName}
                        text="Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        size={16}
                        weight={selectedWeight}
                        style={{ color: palette.text, lineHeight: 1.6 }}
                    />
                    <FontPreview
                        fontName={currentFontName}
                        text="Small text - The quick brown fox jumps over the lazy dog"
                        size={14}
                        weight={selectedWeight}
                        style={{ color: palette.text, opacity: 0.8 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AdvancedFontSelector;
