import React from 'react';
import { useColors } from '../context/ColorContext';

const ColorFAQ: React.FC = () => {
    const { palette } = useColors();

    return (
        <div style={{
            display: 'grid',
            gap: '1rem'
        }}>
            <details style={{
                background: '#f8f9fa',
                padding: '1rem',
                borderRadius: 8,
                border: '1px solid #e9ecef'
            }}>
                <summary style={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: palette.text,
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                }}>
                    Qu'est-ce que le RGAA et pourquoi est-ce important ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Le RGAA (Référentiel Général d'Amélioration de l'Accessibilité) est le référentiel français
                    qui définit les critères d'accessibilité numérique. Il est obligatoire pour les sites web
                    publics et fortement recommandé pour tous les sites. Les couleurs et contrastes sont
                    des éléments essentiels pour garantir l'accessibilité visuelle.
                </p>
            </details>

            <details style={{
                background: '#f8f9fa',
                padding: '1rem',
                borderRadius: 8,
                border: '1px solid #e9ecef'
            }}>
                <summary style={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: palette.text,
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                }}>
                    Quelle est la différence entre les niveaux WCAG AA et AAA ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Le niveau AA (niveau standard) exige un contraste minimum de 4.5:1 pour le texte normal et 3:1 pour le texte large.
                    Le niveau AAA (niveau élevé) exige 7:1 pour le texte normal et 4.5:1 pour le texte large.
                    Le niveau AA est généralement suffisant pour la plupart des sites, tandis que AAA offre une accessibilité maximale.
                </p>
            </details>

            <details style={{
                background: '#f8f9fa',
                padding: '1rem',
                borderRadius: 8,
                border: '1px solid #e9ecef'
            }}>
                <summary style={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: palette.text,
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                }}>
                    Comment tester les couleurs pour les personnes daltoniennes ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Notre outil inclut des simulations de daltonisme (protanopie, deutéranopie, tritanopie)
                    qui vous permettent de voir votre palette comme une personne daltonienne.
                    Il est important de ne pas se fier uniquement à la couleur pour transmettre l'information
                    et d'utiliser des contrastes suffisants.
                </p>
            </details>

            <details style={{
                background: '#f8f9fa',
                padding: '1rem',
                borderRadius: 8,
                border: '1px solid #e9ecef'
            }}>
                <summary style={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: palette.text,
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                }}>
                    Puis-je exporter ma palette conforme RGAA ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Oui ! Notre outil vous permet d'exporter votre palette dans plusieurs formats :
                    CSS, JSON, Adobe Swatch, et même des codes couleur pour différents frameworks.
                    Toutes les couleurs exportées sont validées RGAA.
                </p>
            </details>
        </div>
    );
};

export default ColorFAQ;
