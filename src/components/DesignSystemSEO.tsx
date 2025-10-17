import React, { useEffect } from 'react';
import { useColors } from '../context/ColorContext';

const DesignSystemSEO: React.FC = () => {
    const { palette } = useColors();

    useEffect(() => {
        // Update page title
        document.title = 'Design System RGAA 2025 - Composants Accessibles Français | TestMyColor';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content',
                'Design System RGAA 2025 - Composants UI accessibles conformes WCAG 2.1 et RGAA 4.1. Boutons, cartes, inputs, tokens de design. Système complet pour créer des interfaces inclusives et conformes aux standards français d\'accessibilité.'
            );
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content',
                'design system RGAA, composants accessibles, design system français, composants UI RGAA, design system WCAG, composants conformes RGAA, design system inclusif, composants accessibles français, design system gratuit, composants UI accessibles, design system open source, composants conformes WCAG, design system 2025, composants RGAA 4.1, design system professionnel, composants accessibilité, design system français, composants UI conformes, design system web, composants inclusifs'
            );
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Design System RGAA 2025 - Composants Accessibles Français');
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content',
                'Design System RGAA 2025 - Composants UI accessibles conformes WCAG 2.1 et RGAA 4.1. Boutons, cartes, inputs, tokens de design. Système complet pour créer des interfaces inclusives.'
            );
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', 'Design System RGAA 2025 - Composants Accessibles Français');
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content',
                'Design System RGAA 2025 - Composants UI accessibles conformes WCAG 2.1 et RGAA 4.1. Boutons, cartes, inputs, tokens de design.'
            );
        }

        // Add structured data for Design System
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TestMyColor - Design System RGAA 2025",
            "description": "Design System RGAA 2025 - Composants UI accessibles conformes WCAG 2.1 et RGAA 4.1. Boutons, cartes, inputs, tokens de design. Système complet pour créer des interfaces inclusives et conformes aux standards français d'accessibilité.",
            "url": "https://testmycolor.com/design-system",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"],
            "keywords": [
                "design system RGAA",
                "composants accessibles",
                "design system français",
                "composants UI RGAA",
                "design system WCAG",
                "composants conformes RGAA",
                "design system inclusif",
                "composants accessibles français",
                "design system gratuit",
                "composants UI accessibles",
                "design system open source",
                "composants conformes WCAG",
                "design system 2025",
                "composants RGAA 4.1",
                "design system professionnel",
                "composants accessibilité",
                "design system français",
                "composants UI conformes",
                "design system web",
                "composants inclusifs"
            ],
            "featureList": [
                "Composants boutons accessibles RGAA",
                "Cartes conformes WCAG 2.1",
                "Champs de saisie accessibles",
                "Tokens de design inclusifs",
                "Système de couleurs RGAA",
                "Typographie accessible",
                "Espacements cohérents",
                "Composants adaptatifs",
                "Validation accessibilité automatique",
                "Documentation complète",
                "Exemples d'utilisation",
                "Tests de conformité RGAA",
                "Export CSS/SCSS",
                "Composants React/TypeScript",
                "Design system modulaire",
                "Composants réutilisables",
                "Conformité RGAA 4.1",
                "Standards français d'accessibilité"
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
                "name": "Design System Accessible",
                "description": "Système de design complet pour créer des interfaces accessibles et conformes RGAA"
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

        // Add additional meta tags for Design System
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
            { property: 'article:tag', content: 'Design System' },
            { property: 'article:tag', content: 'Composants' },
            { property: 'article:tag', content: 'RGAA' },
            { property: 'article:tag', content: 'Accessibilité' },
            { property: 'article:tag', content: 'UI' },
            { name: 'twitter:site', content: '@testmycolor' },
            { name: 'twitter:creator', content: '@testmycolor' },
            { name: 'twitter:label1', content: 'Type' },
            { name: 'twitter:data1', content: 'Design System RGAA' },
            { name: 'twitter:label2', content: 'Conformité' },
            { name: 'twitter:data2', content: 'WCAG 2.1 & RGAA 4.1' }
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

        // Add canonical URL for design system page
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://testmycolor.com/design-system');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://testmycolor.com/design-system';
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
                            "name": "Qu'est-ce qu'un design system RGAA ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Un design system RGAA est un ensemble de composants UI, de tokens de design et de guidelines qui respectent les critères d'accessibilité français (RGAA 4.1) et internationaux (WCAG 2.1). Il garantit la cohérence et l'accessibilité de vos interfaces utilisateur."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Quels composants sont inclus dans ce design system ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le design system inclut des boutons accessibles, des cartes conformes WCAG, des champs de saisie avec validation, des tokens de couleurs RGAA, une typographie accessible, des espacements cohérents, et des composants adaptatifs. Tous sont testés pour la conformité RGAA 4.1."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Comment utiliser ce design system dans mes projets ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le design system est modulaire et réutilisable. Vous pouvez copier les composants, adapter les tokens de design, et intégrer les styles CSS/SCSS dans vos projets. Chaque composant inclut la documentation d'utilisation et les exemples de code."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Le design system est-il conforme aux standards français ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Oui, le design system respecte intégralement le RGAA 4.1 français et les WCAG 2.1 niveau AA et AAA. Tous les composants sont testés pour l'accessibilité et incluent les attributs ARIA nécessaires pour les technologies d'assistance."
                            }
                        }
                    ]
                },
                {
                    "@type": "HowTo",
                    "name": "Comment implémenter le design system RGAA dans votre projet",
                    "description": "Guide complet pour intégrer le design system accessible dans vos projets",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "name": "Explorez les composants",
                            "text": "Découvrez tous les composants disponibles dans le design system"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Copiez les styles",
                            "text": "Intégrez les styles CSS/SCSS dans votre projet"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Adaptez les tokens",
                            "text": "Personnalisez les couleurs, typographie et espacements selon vos besoins"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Testez l'accessibilité",
                            "text": "Validez la conformité RGAA de vos implémentations"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Documentez votre usage",
                            "text": "Créez votre propre documentation basée sur le design system"
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

export default DesignSystemSEO;
