import React, { useEffect } from 'react';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';

const TypographyStructuredData: React.FC = () => {
    const { palette } = useColors();
    const { font } = useFont();

    useEffect(() => {
        // Données structurées pour la page Typo - Guide Accessibilité
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Guide Typographie Accessible - Bonnes Pratiques et Tests de Lisibilité",
            "description": "Guide complet de bonnes pratiques d'accessibilité typographique. Testez la lisibilité, contraste et accessibilité de vos polices selon les standards WCAG 2.1 AA/AAA pour designers et développeurs.",
            "url": "https://test-my-color.com/typo",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"],
            "keywords": [
                "typographie accessible",
                "guide typographie",
                "bonnes pratiques accessibilité",
                "lisibilité polices",
                "contraste WCAG",
                "test typographie",
                "accessibilité web",
                "WCAG 2.1",
                "AA AAA",
                "polices accessibles",
                "validation accessibilité",
                "design inclusif",
                "contrast ratio",
                "typography accessibility",
                "accessibilité numérique",
                "taille police",
                "espacement lettres",
                "hauteur ligne",
                "lisibilité web",
                "guide typo",
                "bonnes pratiques typo"
            ],
            "featureList": [
                "Guide complet de bonnes pratiques typographiques",
                "Test de lisibilité en temps réel",
                "Sélection de polices accessibles",
                "Test de contraste texte/fond",
                "Export de styles typographiques",
                "Conformité WCAG 2.1 AA/AAA",
                "Bonnes pratiques d'accessibilité",
                "Suggestions d'amélioration automatiques",
                "Test de taille de police",
                "Vérification espacement des lettres",
                "Contrôle hauteur de ligne",
                "Guide des polices recommandées",
                "Conseils d'accessibilité typographique"
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
                "name": "Accessibilité Web Typographie",
                "description": "Bonnes pratiques d'accessibilité et conformité WCAG pour la typographie et la lisibilité",
                "sameAs": [
                    "https://www.w3.org/WAI/WCAG21/quickref/",
                    "https://www.w3.org/WAI/fundamentals/accessibility-principles/"
                ]
            },
            "audience": {
                "@type": "Audience",
                "audienceType": "Designers, Développeurs, Intégrateurs, Chefs de projet web, UX/UI Designers"
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
                "name": "Guide Typographie Accessible",
                "description": "Guide de bonnes pratiques d'accessibilité pour la typographie et la lisibilité",
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
                        "urlTemplate": "https://test-my-color.com/typo",
                        "actionPlatform": [
                            "https://schema.org/DesktopWebPlatform",
                            "https://schema.org/MobileWebPlatform"
                        ]
                    },
                    "name": "Tester l'accessibilité typographique",
                    "description": "Utiliser le guide de bonnes pratiques d'accessibilité typographique"
                },
                {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://test-my-color.com/typo?q={search_term_string}",
                        "actionPlatform": [
                            "https://schema.org/DesktopWebPlatform",
                            "https://schema.org/MobileWebPlatform"
                        ]
                    },
                    "name": "Rechercher des polices accessibles",
                    "description": "Rechercher des polices selon les bonnes pratiques d'accessibilité"
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
                        "name": "Guide Typographie Accessible",
                        "item": "https://test-my-color.com/typo"
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
                    "name": "Couleurs Accessibles",
                    "url": "https://test-my-color.com/color",
                    "description": "Testez la conformité RGAA de vos palettes de couleurs"
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

        // Données structurées pour FAQ Typographie
        const faqStructuredData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Qu'est-ce que l'accessibilité typographique RGAA ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "L'accessibilité typographique RGAA concerne la lisibilité et l'accessibilité des polices de caractères. Elle inclut la taille des polices, l'espacement des lettres, la hauteur de ligne, et le contraste entre le texte et l'arrière-plan. Ces critères sont essentiels pour garantir l'accessibilité visuelle."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la taille de police minimale recommandée par le RGAA ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le RGAA recommande une taille de police d'au moins 16px (ou 1.2em) pour le texte normal. Pour les textes importants, une taille de 18px (ou 1.5em) est recommandée. Ces tailles garantissent une lisibilité optimale pour tous les utilisateurs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment tester la lisibilité de mes polices ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Notre outil vous permet de tester la lisibilité de vos polices en temps réel. Vous pouvez ajuster la taille, l'espacement des lettres, la hauteur de ligne et voir immédiatement l'impact sur la conformité RGAA. Des simulations de daltonisme sont également disponibles."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelles polices sont les plus accessibles ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les polices sans-serif comme Arial, Helvetica, ou Open Sans sont généralement plus accessibles. Les polices avec des caractères bien différenciés et un espacement approprié sont préférables. Notre outil vous aide à identifier les polices les plus adaptées à vos besoins."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment optimiser l'espacement des lettres pour l'accessibilité ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "L'espacement des lettres (letter-spacing) doit être suffisant pour distinguer clairement chaque caractère. Un espacement de 0.12em à 0.16em est généralement recommandé. Notre outil vous permet de tester différents espacements et de voir leur impact sur la lisibilité."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Puis-je exporter mes styles typographiques conformes RGAA ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui ! Notre outil vous permet d'exporter vos styles typographiques dans plusieurs formats : CSS, JSON, et même des codes pour différents frameworks. Tous les styles exportés sont validés RGAA et prêts à l'emploi."
                    }
                }
            ]
        };

        // Données structurées pour HowTo Typographie
        const howToStructuredData = {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Comment tester la conformité RGAA de votre typographie",
            "description": "Guide étape par étape pour utiliser l'outil de test de conformité RGAA de la typographie",
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
                    "name": "Police de caractères à tester"
                },
                {
                    "@type": "HowToSupply",
                    "name": "Navigateur web moderne"
                }
            ],
            "tool": [
                {
                    "@type": "HowToTool",
                    "name": "Testeur RGAA Typographie",
                    "url": "https://test-my-color.com/typo"
                }
            ],
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Sélectionnez votre police",
                    "text": "Utilisez le sélecteur de polices pour choisir votre typographie",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                },
                {
                    "@type": "HowToStep",
                    "name": "Testez la lisibilité",
                    "text": "Vérifiez automatiquement la conformité RGAA de votre typographie",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                },
                {
                    "@type": "HowToStep",
                    "name": "Ajustez les paramètres",
                    "text": "Modifiez la taille, l'espacement et la hauteur de ligne si nécessaire",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                },
                {
                    "@type": "HowToStep",
                    "name": "Testez le contraste",
                    "text": "Vérifiez que le contraste entre le texte et l'arrière-plan respecte les critères WCAG",
                    "image": "https://test-my-color.com/android-chrome-512x512.png"
                },
                {
                    "@type": "HowToStep",
                    "name": "Exportez vos styles",
                    "text": "Exportez vos styles typographiques conformes RGAA pour vos projets",
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
        injectStructuredData(structuredData, 'typography-structured-data');
        injectStructuredData(faqStructuredData, 'typography-faq-structured-data');
        injectStructuredData(howToStructuredData, 'typography-howto-structured-data');

        // Cleanup function
        return () => {
            const scripts = ['typography-structured-data', 'typography-faq-structured-data', 'typography-howto-structured-data'];
            scripts.forEach(id => {
                const script = document.getElementById(id);
                if (script) {
                    script.remove();
                }
            });
        };
    }, [palette, font]);

    return null; // This component doesn't render anything
};

export default TypographyStructuredData;
