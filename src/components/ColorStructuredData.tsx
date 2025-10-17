import React, { useEffect } from 'react';
import { useColors } from '../context/ColorContext';

const ColorStructuredData: React.FC = () => {
    const { palette } = useColors();

    useEffect(() => {
        // Données structurées pour la page Color - RGAA
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "RGAA Couleurs - Testeur de Contraste et Palette Accessible",
            "description": "Testez la conformité RGAA de vos palettes de couleurs en temps réel. Outil professionnel de vérification des contrastes, génération de couleurs accessibles et validation WCAG 2.1 AA/AAA pour designers et développeurs.",
            "url": "https://test-my-color.com/color",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"],
            "keywords": [
                "RGAA",
                "couleurs accessibles",
                "contraste WCAG",
                "palette couleurs",
                "test contraste",
                "accessibilité web",
                "WCAG 2.1",
                "AA AAA",
                "générateur couleurs",
                "validation accessibilité",
                "design inclusif",
                "daltonisme",
                "contrast ratio",
                "color blind",
                "accessibilité numérique"
            ],
            "featureList": [
                "Test de contraste en temps réel",
                "Validation RGAA 4.1",
                "Génération de couleurs accessibles",
                "Simulation daltonisme",
                "Export de palettes",
                "Conformité WCAG 2.1 AA/AAA",
                "Rapport de conformité détaillé",
                "Suggestions d'amélioration automatiques"
            ],
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
            },
            "creator": {
                "@type": "Organization",
                "name": "TestMyColor",
                "url": "https://test-my-color.com",
                "logo": "https://test-my-color.com/android-chrome-512x512.png"
            },
            "about": {
                "@type": "Thing",
                "name": "Accessibilité Web",
                "description": "Conformité RGAA et WCAG pour les couleurs et contrastes",
                "sameAs": [
                    "https://www.numerique.gouv.fr/publications/rgaa-accessibilite/",
                    "https://www.w3.org/WAI/WCAG21/quickref/"
                ]
            },
            "audience": {
                "@type": "Audience",
                "audienceType": "Designers, Développeurs, Intégrateurs, Chefs de projet web"
            },
            "educationalUse": "Professional Development",
            "learningResourceType": "Interactive Tool",
            "interactivityType": "active",
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "dateCreated": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "version": "1.0",
            "softwareVersion": "1.0",
            "screenshot": "https://test-my-color.com/android-chrome-512x512.png",
            "thumbnailUrl": "https://test-my-color.com/android-chrome-192x192.png",
            "image": [
                "https://test-my-color.com/android-chrome-512x512.png",
                "https://test-my-color.com/android-chrome-192x192.png"
            ],
            "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Testeur RGAA Couleurs",
                "description": "Outil de test de conformité RGAA pour les couleurs et contrastes",
                "applicationCategory": "DesignApplication",
                "operatingSystem": "Web Browser",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "EUR"
                }
            },
            "potentialAction": [
                {
                    "@type": "UseAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://test-my-color.com/color",
                        "actionPlatform": [
                            "https://schema.org/DesktopWebPlatform",
                            "https://schema.org/MobileWebPlatform"
                        ]
                    },
                    "name": "Tester les couleurs RGAA",
                    "description": "Utiliser l'outil de test de conformité RGAA pour les couleurs"
                },
                {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://test-my-color.com/color?q={search_term_string}",
                        "actionPlatform": [
                            "https://schema.org/DesktopWebPlatform",
                            "https://schema.org/MobileWebPlatform"
                        ]
                    },
                    "name": "Rechercher des couleurs accessibles",
                    "description": "Rechercher des couleurs conformes RGAA"
                }
            ],
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": "https://test-my-color.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "RGAA Couleurs",
                        "item": "https://test-my-color.com/color"
                    }
                ]
            },
            "relatedLink": [
                {
                    "@type": "WebPage",
                    "name": "TestMyColor - Tests RGAA Complets",
                    "url": "https://test-my-color.com/rgaa-lab",
                    "description": "Laboratoire complet de tests RGAA et accessibilité web"
                },
                {
                    "@type": "WebPage",
                    "name": "Typographie Accessible",
                    "url": "https://test-my-color.com/typo",
                    "description": "Testez la lisibilité et l'accessibilité de vos polices"
                },
                {
                    "@type": "WebPage",
                    "name": "Design System RGAA",
                    "url": "https://test-my-color.com/design-system",
                    "description": "Système de design conforme RGAA pour vos projets"
                }
            ],
            "citation": [
                {
                    "@type": "CreativeWork",
                    "name": "Référentiel Général d'Amélioration de l'Accessibilité (RGAA)",
                    "url": "https://www.numerique.gouv.fr/publications/rgaa-accessibilite/",
                    "publisher": "Direction interministérielle du numérique"
                },
                {
                    "@type": "CreativeWork",
                    "name": "Web Content Accessibility Guidelines (WCAG) 2.1",
                    "url": "https://www.w3.org/WAI/WCAG21/quickref/",
                    "publisher": "World Wide Web Consortium"
                }
            ]
        };

        // Données structurées pour FAQ
        const faqStructuredData = {
            "@context": "https://schema.org",
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
                    "name": "Quelle est la différence entre WCAG AA et AAA ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WCAG AA (niveau standard) exige un contraste minimum de 4.5:1 pour le texte normal et 3:1 pour le texte large. WCAG AAA (niveau élevé) exige 7:1 pour le texte normal et 4.5:1 pour le texte large. Le niveau AA est généralement suffisant pour la plupart des sites, tandis que AAA offre une accessibilité maximale."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment tester les couleurs pour les personnes daltoniennes ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Notre outil inclut des simulations de daltonisme (protanopie, deutéranopie, tritanopie) qui vous permettent de voir votre palette comme une personne daltonienne. Il est important de ne pas se fier uniquement à la couleur pour transmettre l'information et d'utiliser des contrastes suffisants."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Puis-je exporter ma palette conforme RGAA ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui ! Notre outil vous permet d'exporter votre palette dans plusieurs formats : CSS, JSON, Adobe Swatch, et même des codes couleur pour différents frameworks. Toutes les couleurs exportées sont validées RGAA."
                    }
                }
            ]
        };

        // Données structurées pour HowTo
        const howToStructuredData = {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Comment tester la conformité RGAA de vos couleurs",
            "description": "Guide étape par étape pour utiliser l'outil de test de conformité RGAA des couleurs",
            "image": "https://test-my-color.com/android-chrome-512x512.png",
            "totalTime": "PT5M",
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": "0"
            },
            "supply": [
                {
                    "@type": "HowToSupply",
                    "name": "Palette de couleurs à tester"
                },
                {
                    "@type": "HowToSupply",
                    "name": "Navigateur web moderne"
                }
            ],
            "tool": [
                {
                    "@type": "HowToTool",
                    "name": "Testeur RGAA Couleurs",
                    "url": "https://test-my-color.com/color"
                }
            ],
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Sélectionnez vos couleurs",
                    "text": "Utilisez le sélecteur de couleurs pour définir votre palette principale",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                },
                {
                    "@type": "HowToStep",
                    "name": "Testez le contraste",
                    "text": "Vérifiez automatiquement la conformité RGAA de toutes les combinaisons",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                },
                {
                    "@type": "HowToStep",
                    "name": "Optimisez si nécessaire",
                    "text": "Utilisez nos suggestions pour améliorer l'accessibilité de votre palette",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                },
                {
                    "@type": "HowToStep",
                    "name": "Exportez votre palette",
                    "text": "Exportez votre palette conforme RGAA pour vos projets",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                }
            ]
        };

        // Injecter toutes les données structurées
        const injectStructuredData = (data: any, id: string) => {
            // Supprimer l'ancien script s'il existe
            const existingScript = document.getElementById(id);
            if (existingScript) {
                existingScript.remove();
            }

            // Créer le nouveau script
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = id;
            script.textContent = JSON.stringify(data);
            document.head.appendChild(script);
        };

        // Injecter les données structurées
        injectStructuredData(structuredData, 'color-structured-data');
        injectStructuredData(faqStructuredData, 'color-faq-structured-data');
        injectStructuredData(howToStructuredData, 'color-howto-structured-data');

        // Cleanup function
        return () => {
            const scripts = ['color-structured-data', 'color-faq-structured-data', 'color-howto-structured-data'];
            scripts.forEach(id => {
                const script = document.getElementById(id);
                if (script) {
                    script.remove();
                }
            });
        };
    }, [palette]);

    return null; // This component doesn't render anything
};

export default ColorStructuredData;
