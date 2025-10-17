import React, { useEffect } from 'react';
import { useColors } from '../context/ColorContext';

const RGAALabSEO: React.FC = () => {
    const { palette } = useColors();

    useEffect(() => {
        // Update page title
        document.title = 'RGAA Lab 2025 - Laboratoire Accessibilité Web Français | TestMyColor';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content',
                'RGAA Lab 2025 - Laboratoire complet d\'accessibilité web français. Tests RGAA 4.1, WCAG 2.1, couleurs, contrastes, navigation clavier, lecture d\'écran. Outil gratuit pour conformité accessibilité numérique française.'
            );
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content',
                'RGAA Lab, RGAA 4.1, laboratoire accessibilité, tests RGAA gratuits, conformité accessibilité française, WCAG 2.1 AA AAA, tests couleurs RGAA, navigation clavier, lecture écran, accessibilité web française, outil RGAA gratuit, validation accessibilité, critères RGAA, test conformité RGAA, accessibilité numérique, design inclusif, tests accessibilité, simulateur daltonisme, contraste ratio, validation RGAA, outil accessibilité web, laboratoire RGAA, tests complets RGAA, conformité numérique française'
            );
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'RGAA Lab 2025 - Laboratoire Accessibilité Web Français');
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content',
                'RGAA Lab 2025 - Laboratoire complet d\'accessibilité web français. Tests RGAA 4.1, WCAG 2.1, couleurs, contrastes, navigation clavier, lecture d\'écran. Outil gratuit pour conformité accessibilité numérique française.'
            );
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', 'RGAA Lab 2025 - Laboratoire Accessibilité Web Français');
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content',
                'RGAA Lab 2025 - Laboratoire complet d\'accessibilité web français. Tests RGAA 4.1, WCAG 2.1, couleurs, contrastes, navigation clavier, lecture d\'écran.'
            );
        }

        // Add structured data for RGAA Lab
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TestMyColor - RGAA Lab 2025",
            "description": "RGAA Lab 2025 - Laboratoire complet d'accessibilité web français. Tests RGAA 4.1, WCAG 2.1, couleurs, contrastes, navigation clavier, lecture d'écran. Outil gratuit pour conformité accessibilité numérique française.",
            "url": "https://testmycolor.com/rgaa-lab",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"],
            "keywords": [
                "RGAA Lab",
                "RGAA 4.1",
                "laboratoire accessibilité",
                "tests RGAA gratuits",
                "conformité accessibilité française",
                "WCAG 2.1 AA AAA",
                "tests couleurs RGAA",
                "navigation clavier",
                "lecture écran",
                "accessibilité web française",
                "outil RGAA gratuit",
                "validation accessibilité",
                "critères RGAA",
                "test conformité RGAA",
                "accessibilité numérique",
                "design inclusif",
                "tests accessibilité",
                "simulateur daltonisme",
                "contraste ratio",
                "validation RGAA",
                "outil accessibilité web",
                "laboratoire RGAA",
                "tests complets RGAA",
                "conformité numérique française"
            ],
            "featureList": [
                "Tests de couleurs RGAA 4.1 complets",
                "Validation WCAG 2.1 AA et AAA",
                "Tests de navigation clavier",
                "Validation lecture d'écran",
                "Simulation daltonisme (protanopie, deutéranopie, tritanopie)",
                "Tests de contraste en temps réel",
                "Validation structure sémantique",
                "Tests attributs ARIA",
                "Validation alternatives textuelles",
                "Tests d'ordre de tabulation",
                "Validation indicateurs de focus",
                "Tests de pièges clavier",
                "Conformité RGAA française complète",
                "Laboratoire d'accessibilité web",
                "Tests gratuits d'accessibilité",
                "Validation accessibilité numérique",
                "Outils RGAA professionnels",
                "Tests complets d'accessibilité"
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
                "name": "Accessibilité Web Française",
                "description": "Conformité RGAA 4.1 et WCAG 2.1 pour l'accessibilité numérique française"
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

        // Add additional meta tags for RGAA Lab
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
            { property: 'article:tag', content: 'RGAA Lab' },
            { property: 'article:tag', content: 'Accessibilité' },
            { property: 'article:tag', content: 'Tests' },
            { property: 'article:tag', content: 'Laboratoire' },
            { property: 'article:tag', content: 'Conformité' },
            { name: 'twitter:site', content: '@testmycolor' },
            { name: 'twitter:creator', content: '@testmycolor' },
            { name: 'twitter:label1', content: 'Type' },
            { name: 'twitter:data1', content: 'RGAA Lab' },
            { name: 'twitter:label2', content: 'Conformité' },
            { name: 'twitter:data2', content: 'RGAA 4.1 & WCAG 2.1' }
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

        // Add canonical URL for RGAA Lab page
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://testmycolor.com/rgaa-lab');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://testmycolor.com/rgaa-lab';
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
                            "name": "Qu'est-ce que le RGAA Lab et comment l'utiliser ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le RGAA Lab est un laboratoire complet d'accessibilité web français qui regroupe tous les outils nécessaires pour tester la conformité RGAA 4.1 et WCAG 2.1. Il inclut des tests de couleurs, de contraste, de navigation clavier, de lecture d'écran et de structure sémantique. Utilisez-le pour valider l'accessibilité de vos projets web."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Quels types de tests RGAA sont disponibles ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le RGAA Lab propose des tests complets : couleurs et contrastes (critères 3.1, 3.2, 3.3), navigation clavier (critères 7.1, 7.2, 7.3), lecture d'écran (critères 8.1, 8.2, 8.3), structure sémantique (critères 9.1, 9.2, 9.3), et attributs ARIA. Tous les tests respectent les critères RGAA 4.1 français."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Le RGAA Lab est-il conforme aux standards français ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Oui, le RGAA Lab est entièrement conforme au Référentiel Général d'Amélioration de l'Accessibilité (RGAA) 4.1, qui est le standard français obligatoire pour les sites web publics. Il respecte également les WCAG 2.1 niveau AA et AAA pour une accessibilité maximale."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Comment utiliser le RGAA Lab pour mes projets ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le RGAA Lab est conçu pour être utilisé tout au long du processus de développement. Testez vos couleurs et contrastes, validez la navigation clavier, vérifiez la structure sémantique et les attributs ARIA. Exportez vos résultats pour documenter la conformité RGAA de vos projets."
                            }
                        }
                    ]
                },
                {
                    "@type": "HowTo",
                    "name": "Comment utiliser le RGAA Lab pour valider l'accessibilité",
                    "description": "Guide complet d'utilisation du RGAA Lab pour la validation d'accessibilité",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "name": "Accédez au RGAA Lab",
                            "text": "Ouvrez le laboratoire d'accessibilité RGAA"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Testez les couleurs",
                            "text": "Utilisez les outils de test de couleurs et contrastes RGAA"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Validez la navigation",
                            "text": "Testez la navigation clavier et l'ordre de tabulation"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Vérifiez la lecture d'écran",
                            "text": "Validez la structure sémantique et les attributs ARIA"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Exportez vos résultats",
                            "text": "Générez un rapport de conformité RGAA complet"
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

export default RGAALabSEO;
