import React from 'react';
import PaletteGrid from '../components/PaletteGrid';
import PageWrapper from '../components/ui/PageWrapper';
import Header from '../components/ui/Header';
import { useColors } from '../context/ColorContext';
import Separator from '../components/ui/Separator';
import { useFont } from '../context/FontContext';
import { ExportPalette } from '../components/ExportPalette';
import RGAAEducation from '../components/RGAAEducation';
import RGAAComplianceChecker from '../components/RGAAComplianceChecker';
import RGAALabHeader from '../components/RGAALabHeader';
import ColorSEO from '../components/ColorSEO';
import ColorPageContent from '../components/ColorPageContent';
import ColorPerformanceOptimizer from '../components/ColorPerformanceOptimizer';
import ColorAccessibilityEnhancer from '../components/ColorAccessibilityEnhancer';
import ColorStructuredData from '../components/ColorStructuredData';
import ColorFAQ from '../components/ColorFAQ';
import Section from '../components/ui/Section';
import Breadcrumb from '../components/Breadcrumb';

const Color: React.FC = () => {
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
            <ColorSEO />
            <ColorStructuredData />
            <ColorPerformanceOptimizer />
            <ColorAccessibilityEnhancer />
            <Header />
            <Breadcrumb />
            <PageWrapper>
                <main id="main-content" role="main" aria-label="Testeur RGAA Couleurs - Outil de test de contraste et palette accessible">
                    <section id="overview">
                        <ColorPageContent />
                    </section>
                    <Section
                        id="color-tools"
                        title="Outils de Couleurs"
                        role="region"
                        aria-label="Outils de sélection et test de couleurs"
                    >
                        <PaletteGrid />
                    </Section>
                    <Section
                        id="compliance-checker"
                        title="Vérificateur de Conformité RGAA"
                        role="region"
                        aria-label="Vérificateur de conformité RGAA"
                    >
                        <RGAAComplianceChecker />
                    </Section>
                    <Section
                        id="education"
                        title="Formation RGAA"
                        role="region"
                        aria-label="Formation et apprentissage RGAA"
                    >
                        <RGAAEducation />
                    </Section>
                    <Section
                        id="export"
                        title="Export de Palette"
                        role="region"
                        aria-label="Export de palette conforme RGAA"
                    >
                        <ExportPalette />
                    </Section>
                    <Section
                        id="faq"
                        title="Questions Fréquentes - RGAA Couleurs"
                        role="region"
                        aria-label="Questions fréquentes sur l'accessibilité des couleurs"
                    >
                        <ColorFAQ />
                    </Section>
                </main>
            </PageWrapper>
        </div>
    );
};

export default Color;