import React from 'react';
import { useColors } from '../context/ColorContext';

const TypographyFAQ: React.FC = () => {
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
                    Qu'est-ce que l'accessibilité typographique ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    L'accessibilité typographique concerne la lisibilité et l'accessibilité des polices de caractères.
                    Elle inclut la taille des polices, l'espacement des lettres, la hauteur de ligne, et le contraste
                    entre le texte et l'arrière-plan. Ces bonnes pratiques sont essentielles pour garantir l'accessibilité
                    visuelle selon WCAG 2.1.
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
                    Quelle est la taille de police recommandée pour l'accessibilité ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Les bonnes pratiques recommandent une taille de police d'au moins <strong>16px (ou 1.2em)</strong> pour le texte normal.
                    Pour les textes importants, une taille de <strong>18px (ou 1.5em)</strong> est recommandée.
                    Ces tailles garantissent une lisibilité optimale pour tous les utilisateurs, y compris ceux avec des déficiences visuelles.
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
                    Comment tester la lisibilité de mes polices ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Notre outil vous permet de tester la lisibilité de vos polices en temps réel. Vous pouvez ajuster la taille,
                    l'espacement des lettres, la hauteur de ligne et voir immédiatement l'impact sur l'accessibilité.
                    Des tests de contraste WCAG sont également disponibles.
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
                    Quelles polices sont les plus accessibles ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Les polices sans-serif comme <strong>Arial, Helvetica, ou Open Sans</strong> sont généralement plus accessibles.
                    Les polices avec des caractères bien différenciés et un espacement approprié sont préférables.
                    Notre guide vous aide à identifier les polices les plus adaptées selon les bonnes pratiques d'accessibilité.
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
                    Comment optimiser l'espacement des lettres pour l'accessibilité ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    L'espacement des lettres (letter-spacing) doit être suffisant pour distinguer clairement chaque caractère.
                    Un espacement de <strong>0.12em à 0.16em</strong> est généralement recommandé.
                    Notre outil vous permet de tester différents espacements et de voir leur impact sur la lisibilité.
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
                    Quelle hauteur de ligne est recommandée ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Une hauteur de ligne (line-height) de <strong>1.4 à 1.6</strong> est recommandée pour la plupart des textes.
                    Pour les textes longs, une hauteur de <strong>1.5 à 1.7</strong> améliore la lisibilité.
                    Cela permet aux utilisateurs de suivre facilement le texte ligne par ligne.
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
                    Puis-je exporter mes styles typographiques conformes ?
                </summary>
                <p style={{
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    color: '#555'
                }}>
                    Oui ! Notre outil vous permet d'exporter vos styles typographiques dans plusieurs formats :
                    <strong>CSS, JSON, et même des codes pour différents frameworks</strong>.
                    Tous les styles exportés respectent les bonnes pratiques d'accessibilité et sont prêts à l'emploi.
                </p>
            </details>

            <div style={{
                background: palette.surface,
                padding: '1.5rem',
                borderRadius: '8px',
                border: `1px solid ${palette.border}`,
                marginTop: '1rem'
            }}>
                <h3 style={{ color: palette.primary, marginBottom: '1rem', fontSize: '1.2rem' }}>
                    💡 Conseil d'expert
                </h3>
                <p style={{ lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                    N'oubliez pas de tester vos choix typographiques avec de vrais utilisateurs,
                    notamment ceux ayant des déficiences visuelles. Les outils automatisés sont utiles,
                    mais rien ne remplace les tests utilisateurs pour valider l'accessibilité réelle.
                </p>
            </div>
        </div>
    );
};

export default TypographyFAQ;
