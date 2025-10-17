import React, { useEffect } from 'react';
import { useColors } from '../context/ColorContext';

const ColorSEO: React.FC = () => {
    const { palette } = useColors();

    useEffect(() => {
        // Update page title
        document.title = 'Testeur RGAA Couleurs 2025 - Contraste WCAG 2.1 AA/AAA | TestMyColor';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content',
                'Testeur RGAA 4.1 gratuit pour couleurs et contrastes. Vérifiez instantanément la conformité WCAG 2.1 AA/AAA de vos palettes. Outil français d\'accessibilité web pour designers et développeurs. Simulation daltonisme incluse.'
            );
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content',
                'testeur RGAA, RGAA 4.1, test contraste couleurs, WCAG 2.1 AA AAA, accessibilité web française, testeur contraste gratuit, palette couleurs accessible, simulation daltonisme, critères RGAA couleurs, validation accessibilité, outil RGAA, contraste ratio, color blind test, accessibilité numérique, design inclusif, générateur couleurs RGAA, test conformité RGAA'
            );
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Testeur RGAA Couleurs 2025 - Contraste WCAG 2.1 AA/AAA');
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content',
                'Testeur RGAA 4.1 gratuit pour couleurs et contrastes. Vérifiez instantanément la conformité WCAG 2.1 AA/AAA de vos palettes. Outil français d\'accessibilité web.'
            );
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', 'Testeur RGAA Couleurs 2025 - Contraste WCAG 2.1 AA/AAA');
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content',
                'Testeur RGAA 4.1 gratuit pour couleurs et contrastes. Vérifiez instantanément la conformité WCAG 2.1 AA/AAA de vos palettes.'
            );
        }

        // Add structured data for RGAA Color Testing
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TestMyColor - Testeur RGAA Couleurs 2025",
            "description": "Testeur RGAA 4.1 gratuit pour couleurs et contrastes. Vérifiez instantanément la conformité WCAG 2.1 AA/AAA de vos palettes. Outil français d'accessibilité web avec simulation daltonisme.",
            "url": "https://test-my-color.com/color",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"],
            "keywords": [
                "testeur RGAA",
                "RGAA 4.1",
                "test contraste couleurs",
                "WCAG 2.1 AA AAA",
                "accessibilité web française",
                "testeur contraste gratuit",
                "palette couleurs accessible",
                "simulation daltonisme",
                "critères RGAA couleurs",
                "validation accessibilité",
                "outil RGAA",
                "contraste ratio",
                "color blind test",
                "accessibilité numérique",
                "design inclusif",
                "générateur couleurs RGAA",
                "test conformité RGAA"
            ],
            "featureList": [
                "Test de contraste en temps réel RGAA 4.1",
                "Validation WCAG 2.1 AA et AAA",
                "Génération de palettes couleurs accessibles",
                "Simulation daltonisme (protanopie, deutéranopie, tritanopie)",
                "Export de palettes (CSS, JSON, Adobe Swatch)",
                "Conformité RGAA française",
                "Test de contraste gratuit",
                "Outil d'accessibilité web français",
                "Critères RGAA couleurs 3.1, 3.2, 3.3",
                "Validation accessibilité numérique"
            ],
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
            },
            "creator": {
                "@type": "Organization",
                "name": "TestMyColor",
                "url": "https://test-my-color.com"
            },
            "about": {
                "@type": "Thing",
                "name": "Accessibilité Web",
                "description": "Conformité RGAA et WCAG pour les couleurs et contrastes"
            }
        };

        // Remove existing structured data
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);

        // Add additional meta tags for RGAA
        const additionalMetaTags = [
            { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
            { name: 'googlebot', content: 'index, follow' },
            { name: 'bingbot', content: 'index, follow' },
            { name: 'language', content: 'fr' },
            { name: 'geo.region', content: 'FR' },
            { name: 'geo.placename', content: 'France' },
            { name: 'theme-color', content: palette.primary },
            { name: 'msapplication-TileColor', content: palette.primary },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'TestMyColor' },
            { property: 'og:locale', content: 'fr_FR' },
            { property: 'article:author', content: 'TestMyColor' },
            { property: 'article:section', content: 'Accessibilité Web' },
            { property: 'article:tag', content: 'RGAA' },
            { property: 'article:tag', content: 'Couleurs' },
            { property: 'article:tag', content: 'Contraste' },
            { property: 'article:tag', content: 'Accessibilité' },
            { name: 'twitter:site', content: '@testmycolor' },
            { name: 'twitter:creator', content: '@testmycolor' },
            { name: 'twitter:label1', content: 'Type' },
            { name: 'twitter:data1', content: 'Outil RGAA' },
            { name: 'twitter:label2', content: 'Conformité' },
            { name: 'twitter:data2', content: 'WCAG 2.1 AA/AAA' }
        ];

        additionalMetaTags.forEach(tag => {
            const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
            if (existingTag) {
                existingTag.setAttribute('content', tag.content);
            } else {
                const meta = document.createElement('meta');
                if (tag.name) meta.setAttribute('name', tag.name);
                if (tag.property) meta.setAttribute('property', tag.property);
                meta.setAttribute('content', tag.content);
                document.head.appendChild(meta);
            }
        });

        // Add canonical URL for color page
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://test-my-color.com/color');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://test-my-color.com/color';
            document.head.appendChild(link);
        }

        // Add additional structured data for FAQ and HowTo
        const additionalStructuredData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Qu'est-ce que le RGAA et pourquoi est-ce important ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le RGAA (Référentiel Général d'Amélioration de l'Accessibilité) est le référentiel français qui définit les critères d'accessibilité numérique. Il est obligatoire pour les sites web publics et fortement recommandé pour tous les sites. Les couleurs et contrastes sont des éléments essentiels pour garantir l'accessibilité visuelle."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Quelle est la différence entre les niveaux WCAG AA et AAA ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le niveau AA (niveau standard) exige un contraste minimum de 4,5:1 pour le texte normal et 3:1 pour le texte large. Le niveau AAA (niveau élevé) exige 7:1 pour le texte normal et 4,5:1 pour le texte large. Le niveau AA est généralement suffisant pour la plupart des sites, tandis que AAA offre une accessibilité maximale."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Comment tester les couleurs pour les personnes daltoniennes ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Notre outil inclut des simulations de daltonisme (protanopie, deutéranopie, tritanopie) qui vous permettent de voir votre palette comme une personne daltonienne. Il est important de ne pas se fier uniquement à la couleur pour transmettre l'information et d'utiliser des contrastes suffisants."
                            }
                        }
                    ]
                },
                {
                    "@type": "HowTo",
                    "name": "Comment tester la conformité RGAA de vos couleurs",
                    "description": "Guide complet pour tester la conformité RGAA de vos palettes de couleurs",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "name": "Sélectionnez vos couleurs",
                            "text": "Utilisez le sélecteur de couleurs pour définir votre palette principale"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Testez le contraste",
                            "text": "Vérifiez automatiquement la conformité RGAA de toutes les combinaisons"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Simulez le daltonisme",
                            "text": "Testez vos palettes avec différents types de daltonisme"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Exportez votre palette",
                            "text": "Générez le code CSS ou téléchargez votre palette conforme RGAA"
                        }
                    ]
                }
            ]
        };

        // Add additional structured data
        const additionalScript = document.createElement('script');
        additionalScript.type = 'application/ld+json';
        additionalScript.textContent = JSON.stringify(additionalStructuredData);
        document.head.appendChild(additionalScript);

        // Cleanup function
        return () => {
            const scripts = document.querySelectorAll('script[type="application/ld+json"]');
            scripts.forEach(script => script.remove());
        };
    }, [palette]);

    return null; // This component doesn't render anything
};

export default ColorSEO;
