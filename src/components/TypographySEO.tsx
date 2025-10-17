import React, { useEffect } from 'react';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';

const TypographySEO: React.FC = () => {
    const { palette } = useColors();
    const { font } = useFont();

    useEffect(() => {
        // Update page title
        document.title = 'Guide Typographie Accessible 2024 - Bonnes Pratiques WCAG & Lisibilité | TestMyColor';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content',
                'Guide complet de typographie accessible avec bonnes pratiques WCAG 2.1. Testez la lisibilité, contraste et accessibilité de vos polices. Outil gratuit pour designers et développeurs. Conformité WCAG AA/AAA incluse.'
            );
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content',
                'typographie accessible, guide typographie, bonnes pratiques accessibilité, WCAG 2.1 AA AAA, test lisibilité polices, accessibilité web, testeur typographie gratuit, polices accessibles, contraste ratio, typography accessibility, accessibilité numérique, design inclusif, lisibilité web, police accessible, taille police, espacement lettres, hauteur ligne, contraste texte, guide typo, bonnes pratiques typo, accessibilité typographique'
            );
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Guide Typographie Accessible 2024 - Bonnes Pratiques WCAG & Lisibilité');
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content',
                'Guide complet de typographie accessible avec bonnes pratiques WCAG 2.1. Testez la lisibilité, contraste et accessibilité de vos polices. Outil gratuit pour designers et développeurs.'
            );
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', 'Guide Typographie Accessible 2024 - Bonnes Pratiques WCAG & Lisibilité');
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content',
                'Guide complet de typographie accessible avec bonnes pratiques WCAG 2.1. Testez la lisibilité, contraste et accessibilité de vos polices.'
            );
        }

        // Add structured data for Typography Accessibility Guide
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TestMyColor - Guide Typographie Accessible 2024",
            "description": "Guide complet de typographie accessible avec bonnes pratiques WCAG 2.1. Testez la lisibilité, contraste et accessibilité de vos polices. Outil gratuit pour designers et développeurs.",
            "url": "https://testmycolor.com/typo",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"],
            "keywords": [
                "typographie accessible",
                "guide typographie",
                "bonnes pratiques accessibilité",
                "WCAG 2.1 AA AAA",
                "test lisibilité polices",
                "accessibilité web",
                "testeur typographie gratuit",
                "polices accessibles",
                "contraste ratio",
                "typography accessibility",
                "accessibilité numérique",
                "design inclusif",
                "lisibilité web",
                "police accessible",
                "taille police",
                "espacement lettres",
                "hauteur ligne",
                "contraste texte",
                "guide typo",
                "bonnes pratiques typo",
                "accessibilité typographique"
            ],
            "featureList": [
                "Guide complet de bonnes pratiques typographiques",
                "Test de lisibilité en temps réel",
                "Validation WCAG 2.1 AA et AAA pour typographie",
                "Sélection de polices accessibles",
                "Test de contraste texte/fond",
                "Export de styles typographiques (CSS, JSON)",
                "Bonnes pratiques d'accessibilité web",
                "Test de lisibilité gratuit",
                "Outil d'accessibilité web",
                "Critères WCAG 2.1 pour typographie",
                "Validation accessibilité numérique",
                "Test de taille de police",
                "Vérification espacement des lettres",
                "Contrôle hauteur de ligne",
                "Test de contraste avancé",
                "Guide des polices recommandées",
                "Conseils d'accessibilité typographique"
            ],
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
            },
            "creator": {
                "@type": "Organization",
                "name": "TestMyColor",
                "url": "https://testmycolor.com"
            },
            "about": {
                "@type": "Thing",
                "name": "Accessibilité Web Typographie",
                "description": "Bonnes pratiques d'accessibilité et conformité WCAG pour la typographie et la lisibilité"
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

        // Add additional meta tags for RGAA Typography
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
            { property: 'article:tag', content: 'WCAG' },
            { property: 'article:tag', content: 'Typographie' },
            { property: 'article:tag', content: 'Lisibilité' },
            { property: 'article:tag', content: 'Accessibilité' },
            { property: 'article:tag', content: 'Bonnes Pratiques' },
            { name: 'twitter:site', content: '@testmycolor' },
            { name: 'twitter:creator', content: '@testmycolor' },
            { name: 'twitter:label1', content: 'Type' },
            { name: 'twitter:data1', content: 'Guide Typographie Accessible' },
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

        // Add canonical URL for typo page
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://testmycolor.com/typo');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://testmycolor.com/typo';
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
                            "name": "Qu'est-ce que l'accessibilité typographique ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "L'accessibilité typographique concerne la lisibilité et l'accessibilité des polices de caractères. Elle inclut la taille des polices, l'espacement des lettres, la hauteur de ligne, et le contraste entre le texte et l'arrière-plan. Ces bonnes pratiques sont essentielles pour garantir l'accessibilité visuelle selon WCAG 2.1."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Quelle est la taille de police recommandée pour l'accessibilité ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Les bonnes pratiques recommandent une taille de police d'au moins 16px (ou 1.2em) pour le texte normal. Pour les textes importants, une taille de 18px (ou 1.5em) est recommandée. Ces tailles garantissent une lisibilité optimale pour tous les utilisateurs, y compris ceux avec des déficiences visuelles."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Comment tester la lisibilité de mes polices ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Notre outil vous permet de tester la lisibilité de vos polices en temps réel. Vous pouvez ajuster la taille, l'espacement des lettres, la hauteur de ligne et voir immédiatement l'impact sur l'accessibilité. Des tests de contraste WCAG sont également disponibles."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Quelles polices sont les plus accessibles ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Les polices sans-serif comme Arial, Helvetica, ou Open Sans sont généralement plus accessibles. Les polices avec des caractères bien différenciés et un espacement approprié sont préférables. Notre guide vous aide à identifier les polices les plus adaptées selon les bonnes pratiques d'accessibilité."
                            }
                        }
                    ]
                },
                {
                    "@type": "HowTo",
                    "name": "Comment optimiser l'accessibilité de votre typographie",
                    "description": "Guide complet des bonnes pratiques d'accessibilité typographique",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "name": "Sélectionnez votre police",
                            "text": "Utilisez le sélecteur de polices pour choisir votre typographie"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Testez la lisibilité",
                            "text": "Vérifiez automatiquement la conformité RGAA de votre typographie"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Ajustez les paramètres",
                            "text": "Modifiez la taille, l'espacement et la hauteur de ligne si nécessaire"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Exportez vos styles",
                            "text": "Générez le code CSS de votre typographie conforme RGAA"
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
    }, [palette, font]);

    return null; // This component doesn't render anything
};

export default TypographySEO;
