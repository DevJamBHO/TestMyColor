import React, { useEffect } from 'react';
import { useColors } from '../context/ColorContext';

const SmartPaletteSEO: React.FC = () => {
    const { palette } = useColors();

    useEffect(() => {
        // Update page title
        document.title = 'Générateur Palettes RGAA 2025 - Créateur Couleurs Accessibles | TestMyColor';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content',
                'Générateur intelligent de palettes de couleurs RGAA 2025. Créez des palettes accessibles conformes WCAG 2.1 AA/AAA automatiquement. Outil gratuit pour designers et développeurs. Export CSS, JSON, Adobe Swatch inclus.'
            );
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content',
                'générateur palette RGAA, créateur couleurs accessibles, palette couleurs RGAA, générateur couleurs WCAG, palette accessible automatique, générateur contraste, créateur palette web, générateur couleurs gratuit, palette couleurs conformes, générateur RGAA gratuit, créateur couleurs inclusif, palette couleurs WCAG 2.1, générateur couleurs design, créateur palette accessible, générateur couleurs professionnel, palette couleurs automatique, générateur couleurs RGAA 4.1, créateur couleurs web, palette couleurs export, générateur couleurs design system'
            );
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Générateur Palettes RGAA 2025 - Créateur Couleurs Accessibles');
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content',
                'Générateur intelligent de palettes de couleurs RGAA 2025. Créez des palettes accessibles conformes WCAG 2.1 AA/AAA automatiquement. Outil gratuit pour designers et développeurs.'
            );
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', 'Générateur Palettes RGAA 2025 - Créateur Couleurs Accessibles');
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content',
                'Générateur intelligent de palettes de couleurs RGAA 2025. Créez des palettes accessibles conformes WCAG 2.1 AA/AAA automatiquement.'
            );
        }

        // Add structured data for Smart Palette Generator
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TestMyColor - Générateur Palettes RGAA 2025",
            "description": "Générateur intelligent de palettes de couleurs RGAA 2025. Créez des palettes accessibles conformes WCAG 2.1 AA/AAA automatiquement. Outil gratuit pour designers et développeurs.",
            "url": "https://testmycolor.com/smart-palette",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"],
            "keywords": [
                "générateur palette RGAA",
                "créateur couleurs accessibles",
                "palette couleurs RGAA",
                "générateur couleurs WCAG",
                "palette accessible automatique",
                "générateur contraste",
                "créateur palette web",
                "générateur couleurs gratuit",
                "palette couleurs conformes",
                "générateur RGAA gratuit",
                "créateur couleurs inclusif",
                "palette couleurs WCAG 2.1",
                "générateur couleurs design",
                "créateur palette accessible",
                "générateur couleurs professionnel",
                "palette couleurs automatique",
                "générateur couleurs RGAA 4.1",
                "créateur couleurs web",
                "palette couleurs export",
                "générateur couleurs design system"
            ],
            "featureList": [
                "Génération automatique de palettes RGAA",
                "Conformité WCAG 2.1 AA et AAA automatique",
                "Algorithme intelligent de couleurs accessibles",
                "Export CSS, JSON, Adobe Swatch",
                "Prévisualisation en temps réel",
                "Validation contraste automatique",
                "Génération de couleurs complémentaires",
                "Palettes monochromatiques accessibles",
                "Palettes triadiques conformes RGAA",
                "Palettes analogues accessibles",
                "Génération de couleurs neutres",
                "Validation RGAA 4.1 automatique",
                "Export pour design systems",
                "Génération de couleurs primaires",
                "Création de couleurs secondaires",
                "Génération de couleurs d'accent",
                "Validation accessibilité numérique",
                "Génération de palettes professionnelles"
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
                "name": "Génération de Palettes Accessibles",
                "description": "Création automatique de palettes de couleurs conformes RGAA et WCAG"
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

        // Add additional meta tags for Smart Palette
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
            { property: 'article:tag', content: 'Générateur' },
            { property: 'article:tag', content: 'Palettes' },
            { property: 'article:tag', content: 'Couleurs' },
            { property: 'article:tag', content: 'RGAA' },
            { property: 'article:tag', content: 'Automatique' },
            { name: 'twitter:site', content: '@testmycolor' },
            { name: 'twitter:creator', content: '@testmycolor' },
            { name: 'twitter:label1', content: 'Type' },
            { name: 'twitter:data1', content: 'Générateur Palettes RGAA' },
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

        // Add canonical URL for smart palette page
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://testmycolor.com/smart-palette');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://testmycolor.com/smart-palette';
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
                            "name": "Comment fonctionne le générateur de palettes RGAA ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le générateur de palettes RGAA utilise des algorithmes intelligents pour créer automatiquement des palettes de couleurs conformes aux critères RGAA 4.1 et WCAG 2.1. Il génère des couleurs primaires, secondaires et d'accent qui respectent les ratios de contraste requis, garantissant une accessibilité maximale."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Quels formats d'export sont disponibles ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Le générateur exporte vos palettes dans plusieurs formats : CSS (variables et classes), JSON (pour intégration dans vos projets), et Adobe Swatch (pour les logiciels de design). Tous les exports incluent les codes hexadécimaux et les validations de contraste RGAA."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Les palettes générées sont-elles conformes RGAA ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Oui, toutes les palettes générées sont automatiquement validées pour la conformité RGAA 4.1 et WCAG 2.1 niveau AA et AAA. L'algorithme garantit que tous les ratios de contraste respectent les critères d'accessibilité français et internationaux."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Puis-je personnaliser les palettes générées ?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolument ! Le générateur vous permet de personnaliser vos palettes en ajustant les couleurs, en ajoutant des variantes, et en modifiant les teintes tout en maintenant la conformité RGAA. Vous pouvez également importer vos propres couleurs de base."
                            }
                        }
                    ]
                },
                {
                    "@type": "HowTo",
                    "name": "Comment générer une palette RGAA avec notre outil",
                    "description": "Guide complet pour générer des palettes de couleurs conformes RGAA",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "name": "Accédez au générateur",
                            "text": "Ouvrez le générateur de palettes RGAA"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Choisissez votre couleur de base",
                            "text": "Sélectionnez une couleur principale ou laissez l'algorithme en choisir une"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Générez la palette",
                            "text": "L'algorithme génère automatiquement une palette conforme RGAA"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Personnalisez si nécessaire",
                            "text": "Ajustez les couleurs tout en maintenant la conformité"
                        },
                        {
                            "@type": "HowToStep",
                            "name": "Exportez votre palette",
                            "text": "Téléchargez votre palette dans le format souhaité (CSS, JSON, Adobe Swatch)"
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

export default SmartPaletteSEO;
