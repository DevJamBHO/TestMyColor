import React from 'react';
import { useFont } from '../context/FontContext';
import { useColors } from '../context/ColorContext';
import { ALL_FONTS } from '../data/fonts';
import SectionTitle from './ui/SectionTitle';

const FontInfo: React.FC = () => {
    const { font } = useFont();
    const { palette } = useColors();

    const currentFontName = font.replace(/'/g, '').split(',')[0].trim();
    const fontData = ALL_FONTS.find(f => f.name === currentFontName);

    return (
        <div style={{
            padding: '1.5rem',
            backgroundColor: `${palette.primary}10`,
            borderRadius: '12px',
            border: `1px solid ${palette.primary}20`,
            marginBottom: '2rem'
        }}>
            <SectionTitle
                title="Informations sur la Police Actuelle"
                description="Détails sur la police sélectionnée et son application"
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                    <h4 style={{ color: palette.text, margin: '0 0 0.5rem 0', fontFamily: font }}>
                        Nom de la police
                    </h4>
                    <p style={{
                        color: palette.text,
                        fontFamily: font,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        margin: 0
                    }}>
                        {currentFontName}
                    </p>
                </div>

                {fontData && (
                    <>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 0.5rem 0', fontFamily: font }}>
                                Catégorie
                            </h4>
                            <p style={{
                                color: palette.text,
                                fontFamily: font,
                                margin: 0,
                                textTransform: 'capitalize'
                            }}>
                                {fontData.category}
                            </p>
                        </div>

                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 0.5rem 0', fontFamily: font }}>
                                Source
                            </h4>
                            <p style={{
                                color: palette.text,
                                fontFamily: font,
                                margin: 0,
                                textTransform: 'capitalize'
                            }}>
                                {fontData.source}
                            </p>
                        </div>

                        {fontData.description && (
                            <div>
                                <h4 style={{ color: palette.text, margin: '0 0 0.5rem 0', fontFamily: font }}>
                                    Description
                                </h4>
                                <p style={{
                                    color: palette.text,
                                    fontFamily: font,
                                    margin: 0,
                                    opacity: 0.8
                                }}>
                                    {fontData.description}
                                </p>
                            </div>
                        )}

                        {fontData.weights && (
                            <div>
                                <h4 style={{ color: palette.text, margin: '0 0 0.5rem 0', fontFamily: font }}>
                                    Poids disponibles
                                </h4>
                                <p style={{
                                    color: palette.text,
                                    fontFamily: font,
                                    margin: 0
                                }}>
                                    {fontData.weights.join(', ')}
                                </p>
                            </div>
                        )}
                    </>
                )}

                <div>
                    <h4 style={{ color: palette.text, margin: '0 0 0.5rem 0', fontFamily: font }}>
                        CSS appliqué
                    </h4>
                    <code style={{
                        color: palette.text,
                        fontFamily: 'monospace',
                        backgroundColor: palette.background,
                        padding: '0.5rem',
                        borderRadius: '4px',
                        display: 'block',
                        fontSize: '0.9rem'
                    }}>
                        font-family: {font};
                    </code>
                </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: `1px solid ${palette.primary}20` }}>
                <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                    Prévisualisation rapide
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                        <p style={{
                            color: palette.text,
                            fontFamily: font,
                            fontSize: '0.9rem',
                            margin: '0 0 0.25rem 0',
                            opacity: 0.7
                        }}>
                            Titre
                        </p>
                        <h3 style={{
                            color: palette.text,
                            fontFamily: font,
                            margin: 0,
                            fontSize: '1.5rem',
                            fontWeight: 700
                        }}>
                            {currentFontName}
                        </h3>
                    </div>
                    <div>
                        <p style={{
                            color: palette.text,
                            fontFamily: font,
                            fontSize: '0.9rem',
                            margin: '0 0 0.25rem 0',
                            opacity: 0.7
                        }}>
                            Corps
                        </p>
                        <p style={{
                            color: palette.text,
                            fontFamily: font,
                            margin: 0,
                            fontSize: '1rem',
                            lineHeight: 1.5
                        }}>
                            The quick brown fox jumps over the lazy dog
                        </p>
                    </div>
                    <div>
                        <p style={{
                            color: palette.text,
                            fontFamily: font,
                            fontSize: '0.9rem',
                            margin: '0 0 0.25rem 0',
                            opacity: 0.7
                        }}>
                            Code
                        </p>
                        <code style={{
                            color: palette.text,
                            fontFamily: 'monospace',
                            backgroundColor: palette.background,
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.9rem'
                        }}>
                            font-family: {currentFontName}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FontInfo;
