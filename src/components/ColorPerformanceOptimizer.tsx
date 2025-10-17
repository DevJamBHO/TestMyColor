import React, { useEffect } from 'react';

const ColorPerformanceOptimizer: React.FC = () => {
    useEffect(() => {
        // Preload critical resources
        const preloadResources = [
            { href: '/src/components/PaletteGrid.tsx', as: 'script' },
            { href: '/src/components/RGAAComplianceChecker.tsx', as: 'script' },
            { href: '/src/utils/contrast.ts', as: 'script' }
        ];

        preloadResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as as any;
            document.head.appendChild(link);
        });

        // Add performance hints
        const performanceHints = [
            { name: 'viewport-fit', content: 'cover' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            { name: 'msapplication-tap-highlight', content: 'no' }
        ];

        performanceHints.forEach(hint => {
            const existingMeta = document.querySelector(`meta[name="${hint.name}"]`);
            if (!existingMeta) {
                const meta = document.createElement('meta');
                meta.name = hint.name;
                meta.content = hint.content;
                document.head.appendChild(meta);
            }
        });

        // Add resource hints for external resources
        const resourceHints = [
            { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
        ];

        resourceHints.forEach(hint => {
            const existingLink = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
            if (!existingLink) {
                const link = document.createElement('link');
                link.rel = hint.rel;
                link.href = hint.href;
                if (hint.crossorigin) {
                    link.crossOrigin = hint.crossorigin;
                }
                document.head.appendChild(link);
            }
        });

        // Optimize images loading
        const optimizeImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                // Add loading="lazy" for images below the fold
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
                // Add decoding="async" for better performance
                if (!img.hasAttribute('decoding')) {
                    img.setAttribute('decoding', 'async');
                }
            });
        };

        // Run image optimization after a short delay to ensure DOM is ready
        setTimeout(optimizeImages, 100);

        // Add critical CSS inline for above-the-fold content
        const criticalCSS = `
            .color-page-critical {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                background: #fff;
            }
            .color-page-critical h1 {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 1rem;
                line-height: 1.2;
            }
            .color-page-critical h2 {
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 1.5rem;
            }
            .color-page-critical h3 {
                font-size: 1.3rem;
                font-weight: 600;
                margin-bottom: 1rem;
            }
            .color-page-critical p {
                margin-bottom: 1rem;
                line-height: 1.6;
            }
            .color-page-critical .grid {
                display: grid;
                gap: 1.5rem;
            }
            .color-page-critical .card {
                background: #f8f9fa;
                padding: 1.5rem;
                border-radius: 8px;
                border: 1px solid #e9ecef;
            }
        `;

        // Inject critical CSS
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        style.setAttribute('data-critical', 'true');
        document.head.appendChild(style);

        // Add service worker for caching
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered for Color page');
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        }

        // Cleanup function
        return () => {
            // Remove critical CSS on unmount
            const criticalStyle = document.querySelector('style[data-critical="true"]');
            if (criticalStyle) {
                criticalStyle.remove();
            }
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ColorPerformanceOptimizer;
