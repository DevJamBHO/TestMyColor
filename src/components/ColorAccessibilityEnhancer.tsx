import React, { useEffect } from 'react';

const ColorAccessibilityEnhancer: React.FC = () => {
    useEffect(() => {
        // Skip links removed - not needed for this site

        // Add ARIA landmarks
        const addARIALandmarks = () => {
            const mainContent = document.querySelector('#main-content');
            if (mainContent) {
                mainContent.setAttribute('role', 'main');
                mainContent.setAttribute('aria-label', 'Contenu principal - Testeur RGAA Couleurs');
            }

            const colorTools = document.querySelector('#color-tools');
            if (colorTools) {
                colorTools.setAttribute('role', 'region');
                colorTools.setAttribute('aria-label', 'Outils de sélection et test de couleurs');
            }

            const complianceChecker = document.querySelector('#compliance-checker');
            if (complianceChecker) {
                complianceChecker.setAttribute('role', 'region');
                complianceChecker.setAttribute('aria-label', 'Vérificateur de conformité RGAA');
            }
        };

        // Add live regions for dynamic content
        const addLiveRegions = () => {
            const liveRegion = document.createElement('div');
            liveRegion.id = 'live-region';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.style.cssText = `
                position: absolute;
                left: -10000px;
                width: 1px;
                height: 1px;
                overflow: hidden;
            `;
            document.body.appendChild(liveRegion);
        };

        // Enhance form accessibility
        const enhanceFormAccessibility = () => {
            const colorInputs = document.querySelectorAll('input[type="color"]');
            colorInputs.forEach((input, index) => {
                const id = input.getAttribute('id');
                if (id) {
                    const label = document.querySelector(`label[for="${id}"]`);
                    if (label) {
                        // Add descriptive text
                        const description = document.createElement('div');
                        description.id = `${id}-description`;
                        description.className = 'color-input-description';
                        description.textContent = 'Utilisez ce sélecteur pour choisir une couleur accessible selon les critères RGAA';
                        description.style.cssText = `
                            font-size: 0.8rem;
                            color: #666;
                            margin-top: 0.25rem;
                        `;
                        input.setAttribute('aria-describedby', `${id}-description`);
                        input.parentNode?.insertBefore(description, input.nextSibling);
                    }
                }
            });
        };

        // Add keyboard navigation enhancements
        const enhanceKeyboardNavigation = () => {
            // Add tabindex for interactive elements
            const interactiveElements = document.querySelectorAll('button, input, select, textarea, [role="button"], [role="tab"], [role="menuitem"]');
            interactiveElements.forEach((element, index) => {
                if (!element.hasAttribute('tabindex')) {
                    element.setAttribute('tabindex', '0');
                }
            });

            // Add keyboard event listeners for custom components
            const customButtons = document.querySelectorAll('[role="button"]:not(button)');
            customButtons.forEach(button => {
                button.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        (button as HTMLElement).click();
                    }
                });
            });
        };

        // Add focus management
        const addFocusManagement = () => {
            // Store the last focused element
            let lastFocusedElement: HTMLElement | null = null;

            // Track focus changes
            document.addEventListener('focusin', (e) => {
                lastFocusedElement = e.target as HTMLElement;
            });

            // Add focus trap for modals and panels
            const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

            const trapFocus = (container: HTMLElement) => {
                const focusableContent = container.querySelectorAll(focusableElements);
                const firstFocusableElement = focusableContent[0] as HTMLElement;
                const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

                container.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        if (e.shiftKey) {
                            if (document.activeElement === firstFocusableElement) {
                                lastFocusableElement.focus();
                                e.preventDefault();
                            }
                        } else {
                            if (document.activeElement === lastFocusableElement) {
                                firstFocusableElement.focus();
                                e.preventDefault();
                            }
                        }
                    }
                });
            };

            // Apply focus trap to floating panels
            const floatingPanels = document.querySelectorAll('[role="dialog"], [role="menu"], .floating-panel');
            floatingPanels.forEach(panel => {
                trapFocus(panel as HTMLElement);
            });
        };

        // Add screen reader announcements
        const addScreenReaderAnnouncements = () => {
            const announceToScreenReader = (message: string) => {
                const liveRegion = document.getElementById('live-region');
                if (liveRegion) {
                    liveRegion.textContent = message;
                    setTimeout(() => {
                        liveRegion.textContent = '';
                    }, 1000);
                }
            };

            // Announce color changes
            const colorInputs = document.querySelectorAll('input[type="color"]');
            colorInputs.forEach(input => {
                input.addEventListener('change', () => {
                    const color = (input as HTMLInputElement).value;
                    const label = document.querySelector(`label[for="${input.id}"]`)?.textContent || 'couleur';
                    announceToScreenReader(`Couleur ${label} changée vers ${color}`);
                });
            });

            // Announce compliance status changes
            const complianceElements = document.querySelectorAll('[data-compliance]');
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-compliance') {
                        const element = mutation.target as HTMLElement;
                        const compliance = element.getAttribute('data-compliance');
                        const colorName = element.getAttribute('data-color-name') || 'couleur';
                        announceToScreenReader(`Conformité ${colorName}: ${compliance}`);
                    }
                });
            });

            complianceElements.forEach(element => {
                observer.observe(element, { attributes: true, attributeFilter: ['data-compliance'] });
            });
        };

        // Add high contrast mode support
        const addHighContrastSupport = () => {
            const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');

            const applyHighContrast = () => {
                if (highContrastMediaQuery.matches) {
                    document.body.classList.add('high-contrast');
                } else {
                    document.body.classList.remove('high-contrast');
                }
            };

            highContrastMediaQuery.addListener(applyHighContrast);
            applyHighContrast();

            // Add high contrast CSS
            const highContrastCSS = `
                .high-contrast {
                    filter: contrast(1.5) brightness(1.2);
                }
                .high-contrast button,
                .high-contrast input,
                .high-contrast select {
                    border: 2px solid currentColor;
                }
                .high-contrast [role="button"] {
                    border: 2px solid currentColor;
                    background: transparent;
                }
            `;

            const style = document.createElement('style');
            style.textContent = highContrastCSS;
            document.head.appendChild(style);
        };

        // Add reduced motion support
        const addReducedMotionSupport = () => {
            const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

            const applyReducedMotion = () => {
                if (reducedMotionMediaQuery.matches) {
                    document.body.classList.add('reduced-motion');
                } else {
                    document.body.classList.remove('reduced-motion');
                }
            };

            reducedMotionMediaQuery.addListener(applyReducedMotion);
            applyReducedMotion();

            // Add reduced motion CSS
            const reducedMotionCSS = `
                .reduced-motion * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;

            const style = document.createElement('style');
            style.textContent = reducedMotionCSS;
            document.head.appendChild(style);
        };

        // Initialize all accessibility enhancements
        addARIALandmarks();
        addLiveRegions();
        enhanceFormAccessibility();
        enhanceKeyboardNavigation();
        addFocusManagement();
        addScreenReaderAnnouncements();
        addHighContrastSupport();
        addReducedMotionSupport();

        // Cleanup function
        return () => {
            const liveRegion = document.getElementById('live-region');
            if (liveRegion) {
                liveRegion.remove();
            }
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ColorAccessibilityEnhancer;
