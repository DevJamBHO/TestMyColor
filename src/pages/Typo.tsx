import React, { useEffect } from 'react';
import AdvancedFontSelector from '../components/AdvancedFontSelector';
import AdvancedTypographyShowcase from '../components/AdvancedTypographyShowcase';
import TypoPlayground from '../components/TypoPlayground';
import FontInfo from '../components/FontInfo';
import PageWrapper from '../components/ui/PageWrapper';
import Section from '../components/ui/Section';
import Header from '../components/ui/Header';
import TypographyBreadcrumb from '../components/TypographyBreadcrumb';
import TypographySEO from '../components/TypographySEO';
import TypographyStructuredData from '../components/TypographyStructuredData';
import TypographyPageContent from '../components/TypographyPageContent';
import TypographyFAQ from '../components/TypographyFAQ';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import { trackTypographyEvent, AnalyticsEvents } from '../utils/analytics';

const Typo: React.FC = () => {
    const { palette } = useColors();
    const { font } = useFont();

    // Track typography page view
    useEffect(() => {
        trackTypographyEvent(AnalyticsEvents.PAGE_VIEWED, font, {
            page: 'Typography',
            section: 'Typography Tools'
        });
    }, [font]);

    return (
        <div style={{
            backgroundColor: palette.background,
            color: palette.text,
            minHeight: '100vh',
            fontFamily: font,
            transition: 'font-family 0.3s ease'
        }}>
            <TypographySEO />
            <TypographyStructuredData />
            <Header />
            <TypographyBreadcrumb />
            <PageWrapper>
                <main id="main-content" role="main" aria-label="Guide Typographie Accessible - Bonnes Pratiques WCAG & Lisibilité">
                    <section id="overview">
                        <TypographyPageContent />
                    </section>
                    <Section
                        id="typography-tools"
                        title="Outils de Typographie"
                        role="region"
                        aria-label="Outils de sélection et test de typographie"
                    >
                        <AdvancedFontSelector />
                    </Section>
                    <Section
                        id="compliance-checker"
                        title="Vérificateur de Conformité WCAG"
                        role="region"
                        aria-label="Vérificateur de conformité WCAG pour typographie"
                    >
                        <AdvancedTypographyShowcase />
                    </Section>
                    <Section
                        id="education"
                        title="Informations sur la Police"
                        role="region"
                        aria-label="Informations détaillées sur la police sélectionnée"
                    >
                        <FontInfo />
                    </Section>
                    <Section
                        id="playground"
                        title="Playground Typographique"
                        role="region"
                        aria-label="Espace de test et d'expérimentation typographique"
                    >
                        <TypoPlayground />
                    </Section>
                    <Section
                        id="faq"
                        title="Questions Fréquentes - Typographie Accessible"
                        role="region"
                        aria-label="Questions fréquentes sur l'accessibilité typographique"
                    >
                        <TypographyFAQ />
                    </Section>
                </main>
            </PageWrapper>
        </div>
    );
};

export default Typo;
