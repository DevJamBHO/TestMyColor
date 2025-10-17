import React, { forwardRef, useImperativeHandle, useState, useMemo } from 'react';
import { useFont } from '../context/FontContext';
import { useColors } from '../context/ColorContext';
import { ALL_FONTS } from '../data/fonts';
import { trackPaletteEvent, AnalyticsEvents } from '../utils/analytics';
import CustomButton from './ui/CustomButton';
import FloatingPanel, { FloatingPanelRef } from './ui/FloatingPanel';

export interface TypographyControlsRef {
    open: () => void;
    close: () => void;
}

interface TypographyControlsProps {
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}


const TypographyControls = forwardRef<TypographyControlsRef, TypographyControlsProps>(({
    isOpen,
    onOpenChange
}, ref) => {
    const { font, setFont } = useFont();
    const { palette } = useColors();
    const panelRef = React.useRef<FloatingPanelRef>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showCustomUpload, setShowCustomUpload] = useState(false);
    const [customFont, setCustomFont] = useState<string | null>(null);
    const [uploadedFonts, setUploadedFonts] = useState<Array<{ name: string, data: string, active: boolean }>>([]);
    const [selectedWeight, setSelectedWeight] = useState(400);

    const currentFontName = font.replace(/'/g, '').split(',')[0].trim();

    useImperativeHandle(ref, () => ({
        open: () => panelRef.current?.open(),
        close: () => panelRef.current?.close()
    }));

    // Filtrer les polices selon la recherche
    const filteredFonts = useMemo(() => {
        let fonts = ALL_FONTS;

        if (searchTerm) {
            fonts = fonts.filter(font =>
                font.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                font.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return fonts.slice(0, 20); // Limiter pour les performances
    }, [searchTerm]);

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
        // Vérifier si c'est une font uploadée et si elle est active
        const uploadedFont = uploadedFonts.find(f => f.name === fontName);
        if (uploadedFont && !uploadedFont.active) {
            alert(`La font "${fontName}" est désactivée. Veuillez l'activer d'abord.`);
            return;
        }

        const fontFamily = `'${fontName}', sans-serif`;
        setFont(fontFamily);

        // Mettre à jour customFont si c'est une font uploadée
        if (uploadedFont) {
            setCustomFont(fontName);
        } else {
            setCustomFont(null);
        }

        loadGoogleFont(fontName, weight);

        trackPaletteEvent(AnalyticsEvents.FONT_CHANGED, undefined, {
            fontName,
            weight,
            source: 'typography-controls'
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

            // Ajouter à la liste des fonts uploadées
            setUploadedFonts(prev => [...prev, { name: fontName, data: fontData as string, active: true }]);
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

    // Activer/désactiver une font uploadée
    const toggleUploadedFont = (fontName: string) => {
        setUploadedFonts(prev => {
            const updatedFonts = prev.map(font =>
                font.name === fontName
                    ? { ...font, active: !font.active }
                    : font
            );

            // Si on désactive la font actuellement utilisée, revenir à Inter
            if (customFont === fontName) {
                const fontToDisable = updatedFonts.find(font => font.name === fontName);
                if (fontToDisable && !fontToDisable.active) {
                    setCustomFont(null);
                    setFont("'Inter', sans-serif");
                }
            }

            return updatedFonts;
        });
    };

    // Supprimer une font uploadée
    const removeUploadedFont = (fontName: string) => {
        setUploadedFonts(prev => prev.filter(font => font.name !== fontName));

        // Si c'était la font active, revenir à Inter
        if (customFont === fontName) {
            setCustomFont(null);
            applyFont("'Inter', sans-serif");
        }
    };

    return (
        <FloatingPanel
            ref={panelRef}
            title="Contrôles de Typographie"
            icon="Aa"
            position="top-right"
            closedMessage="Cliquez pour configurer la typographie"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Police actuelle */}
                <div style={{
                    padding: '0.75rem',
                    backgroundColor: `${palette.primary}10`,
                    borderRadius: '8px',
                    border: `1px solid ${palette.primary}20`
                }}>
                    <p style={{
                        margin: '0 0 0.5rem 0',
                        fontSize: '0.9rem',
                        color: palette.text,
                        fontFamily: font,
                        opacity: 0.8
                    }}>
                        Police actuelle :
                    </p>
                    <div style={{
                        fontFamily: `'${currentFontName}', sans-serif`,
                        fontSize: '16px',
                        fontWeight: 600,
                        color: palette.text
                    }}>
                        {currentFontName}
                    </div>
                </div>

                {/* Sélection de police */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Recherche */}
                    <input
                        type="text"
                        placeholder="Rechercher une police..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: `1px solid ${palette.primary}30`,
                            fontSize: '0.9rem',
                            fontFamily: font
                        }}
                    />


                    {/* Liste des polices */}
                    <div style={{
                        maxHeight: '200px',
                        overflowY: 'auto',
                        border: `1px solid ${palette.primary}20`,
                        borderRadius: '6px',
                        padding: '0.5rem'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {filteredFonts.map((fontData) => (
                                <div
                                    key={fontData.name}
                                    style={{
                                        padding: '0.75rem',
                                        border: `1px solid ${currentFontName === fontData.name ? palette.primary : 'transparent'}`,
                                        borderRadius: '6px',
                                        backgroundColor: currentFontName === fontData.name ? `${palette.primary}10` : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onClick={() => applyFont(fontData.name, selectedWeight)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                        <span style={{
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            color: palette.text,
                                            fontFamily: font
                                        }}>
                                            {fontData.name}
                                        </span>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            padding: '0.2rem 0.4rem',
                                            backgroundColor: palette.primary + '20',
                                            borderRadius: '3px',
                                            textTransform: 'uppercase',
                                            color: palette.text
                                        }}>
                                            {fontData.source}
                                        </span>
                                    </div>

                                    <div style={{
                                        fontFamily: `'${fontData.name}', sans-serif`,
                                        fontSize: '12px',
                                        fontWeight: selectedWeight,
                                        color: palette.text,
                                        opacity: 0.8
                                    }}>
                                        The quick brown fox
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upload personnalisé */}
                    <div>
                        <CustomButton
                            label={showCustomUpload ? "Masquer Upload" : "Importer Police"}
                            variant="outline"
                            color="secondary"
                            size="small"
                            onClick={() => setShowCustomUpload(!showCustomUpload)}
                        />
                        {showCustomUpload && (
                            <div style={{ marginTop: '0.5rem' }}>
                                <input
                                    type="file"
                                    accept=".woff,.woff2,.ttf,.otf"
                                    onChange={handleCustomFontUpload}
                                    style={{
                                        fontSize: '0.8rem',
                                        marginBottom: '0.5rem',
                                        width: '100%',
                                        padding: '0.5rem',
                                        borderRadius: '6px',
                                        border: `1px solid ${palette.primary}30`,
                                        fontFamily: font
                                    }}
                                />

                                {/* Liste des fonts uploadées */}
                                {uploadedFonts.length > 0 && (
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <h4 style={{
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            color: palette.text,
                                            fontFamily: font,
                                            margin: '0 0 0.5rem 0'
                                        }}>
                                            Polices Importées
                                        </h4>
                                        {uploadedFonts.map((fontData) => (
                                            <div key={fontData.name} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '0.5rem',
                                                backgroundColor: fontData.active ? `${palette.primary}10` : palette.background,
                                                border: `1px solid ${fontData.active ? palette.primary : palette.border}`,
                                                borderRadius: '6px',
                                                marginBottom: '0.25rem'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <span style={{
                                                        fontSize: '0.8rem',
                                                        color: fontData.active ? palette.primary : palette.textSecondary,
                                                        fontFamily: font
                                                    }}>
                                                        {fontData.active ? '✅' : '⏸️'} {fontData.name}
                                                    </span>
                                                </div>
                                                <div style={{ display: 'flex', gap: '0.25rem' }}>
                                                    <CustomButton
                                                        label={fontData.active ? "Désactiver" : "Activer"}
                                                        variant="outline"
                                                        color="secondary"
                                                        size="small"
                                                        onClick={() => toggleUploadedFont(fontData.name)}
                                                    />
                                                    <CustomButton
                                                        label="Supprimer"
                                                        variant="outline"
                                                        color="error"
                                                        size="small"
                                                        onClick={() => removeUploadedFont(fontData.name)}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </FloatingPanel>
    );
});

export default TypographyControls;
