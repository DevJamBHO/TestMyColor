import React from 'react';
import PageWrapper from '../components/ui/PageWrapper';
import Header from '../components/ui/Header';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import SmartPaletteGenerator from '../components/SmartPaletteGenerator';
import SmartPaletteSEO from '../components/SmartPaletteSEO';

const SmartPalette: React.FC = () => {
    const { palette } = useColors();
    const { font } = useFont();
    return (
        <div style={{
            backgroundColor: palette.background,
            color: palette.text,
            minHeight: '100vh',
            fontFamily: font,
            transition: 'font-family 0.3s ease'
        }}>
            <SmartPaletteSEO />
            <Header />
            <PageWrapper>
                <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Générateur Palettes RGAA 2025</h1>
                <p style={{ fontSize: 17, opacity: 0.8, marginBottom: 32 }}>
                    Générateur intelligent de palettes de couleurs accessibles conformes RGAA 4.1 et WCAG 2.1.
                    Créez automatiquement des palettes harmonieuses et inclusives pour vos projets web.
                </p>
                <div style={{
                    background: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px #0001',
                    padding: '2rem',
                    marginBottom: '2rem',
                    color: '#888',
                    fontSize: 18,
                    maxWidth: 600,
                    width: '100%',
                }}>
                    <SmartPaletteGenerator />
                </div>
            </PageWrapper>
        </div>
    );
};

export default SmartPalette; 