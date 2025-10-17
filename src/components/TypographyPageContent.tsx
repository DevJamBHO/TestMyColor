import React from 'react';
import { useColors } from '../context/ColorContext';
import Section from './ui/Section';

const TypographyPageContent: React.FC = () => {
    const { palette } = useColors();

    return (
        <div>
            {/* H1 - Titre principal SEO */}
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: palette.text,
                lineHeight: 1.2,
                textAlign: 'center'
            }}>
                Guide Typographie Accessible 2024 - Bonnes Pratiques WCAG & Lisibilité
            </h1>

            {/* Sous-titre descriptif */}
            <p style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                color: '#666',
                textAlign: 'center',
                lineHeight: 1.6,
                maxWidth: '800px',
                margin: '0 auto 2rem auto'
            }}>
                Guide complet de bonnes pratiques d'accessibilité typographique avec tests en temps réel.
                Découvrez les standards <a href="#wcag-compliance" style={{ color: palette.primary, textDecoration: 'underline' }}>WCAG 2.1 AA/AAA</a> et
                <a href="#best-practices" style={{ color: palette.primary, textDecoration: 'underline' }}>bonnes pratiques</a> pour créer des interfaces lisibles et accessibles.
            </p>

            {/* H2 - Section bonnes pratiques typographiques */}
            <Section id="best-practices" title="Bonnes Pratiques - Typographie Accessible">

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{
                        background: '#f8f9fa',
                        padding: '1.5rem',
                        borderRadius: 8,
                        border: '1px solid #e9ecef'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: palette.primary
                        }}>
                            📏 Taille des Polices
                        </h3>
                        <p style={{
                            marginBottom: '1rem',
                            lineHeight: 1.6,
                            color: '#555'
                        }}>
                            <strong>Choisissez des tailles de police appropriées pour garantir la lisibilité.</strong>
                        </p>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#666',
                            lineHeight: 1.5
                        }}>
                            <li><strong>Texte normal :</strong> Minimum 16px (1.2em)</li>
                            <li><strong>Texte important :</strong> 18px (1.5em) recommandé</li>
                            <li><strong>Responsive :</strong> Utilisez des unités relatives (em, rem)</li>
                            <li><strong>Hiérarchie :</strong> Différenciez les niveaux de titre</li>
                        </ul>
                    </div>

                    <div style={{
                        background: '#f8f9fa',
                        padding: '1.5rem',
                        borderRadius: 8,
                        border: '1px solid #e9ecef'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: palette.primary
                        }}>
                            📐 Espacement et Lisibilité
                        </h3>
                        <p style={{
                            marginBottom: '1rem',
                            lineHeight: 1.6,
                            color: '#555'
                        }}>
                            <strong>Optimisez l'espacement pour améliorer la lisibilité du texte.</strong>
                        </p>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#666',
                            lineHeight: 1.5
                        }}>
                            <li><strong>Hauteur de ligne :</strong> 1.4 à 1.6 pour le texte normal</li>
                            <li><strong>Espacement lettres :</strong> 0.12em à 0.16em</li>
                            <li><strong>Espacement mots :</strong> Évitez les espaces trop serrés</li>
                            <li><strong>Paragraphes :</strong> Marge suffisante entre les blocs</li>
                        </ul>
                    </div>

                    <div style={{
                        background: '#f8f9fa',
                        padding: '1.5rem',
                        borderRadius: 8,
                        border: '1px solid #e9ecef'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: palette.primary
                        }}>
                            🎨 Choix des Polices
                        </h3>
                        <p style={{
                            marginBottom: '1rem',
                            lineHeight: 1.6,
                            color: '#555'
                        }}>
                            <strong>Sélectionnez des polices accessibles et lisibles.</strong>
                        </p>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#666',
                            lineHeight: 1.5
                        }}>
                            <li><strong>Sans-serif :</strong> Arial, Helvetica, Open Sans</li>
                            <li><strong>Caractères distincts :</strong> Évitez les polices similaires</li>
                            <li><strong>Fallbacks :</strong> Prévoyez des alternatives</li>
                            <li><strong>Performance :</strong> Optimisez le chargement</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* H2 - Section niveaux de conformité WCAG */}
            <Section id="wcag-compliance" title="Conformité WCAG 2.1 - Typographie">

                <div style={{
                    background: '#e8f4fd',
                    padding: '1.5rem',
                    borderRadius: 8,
                    border: '1px solid #b3d9ff',
                    marginBottom: '1.5rem'
                }}>
                    <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        color: '#0066cc'
                    }}>
                        Standards WCAG 2.1 pour la Typographie
                    </h3>
                    <p style={{
                        marginBottom: '1rem',
                        lineHeight: 1.6,
                        color: '#004080'
                    }}>
                        Les Directives d'Accessibilité du Contenu Web (WCAG) définissent des critères spécifiques pour la typographie :
                    </p>
                    <ul style={{
                        paddingLeft: '1.5rem',
                        color: '#004080',
                        lineHeight: 1.6
                    }}>
                        <li><strong>Critère 1.4.3 :</strong> Contraste minimum (niveau AA)</li>
                        <li><strong>Critère 1.4.6 :</strong> Contraste amélioré (niveau AAA)</li>
                        <li><strong>Critère 1.4.4 :</strong> Redimensionnement du texte</li>
                        <li><strong>Critère 1.4.8 :</strong> Présentation visuelle</li>
                    </ul>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{
                        background: '#fff',
                        padding: '1rem',
                        borderRadius: 8,
                        border: '2px solid #27ae60',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '2rem',
                            marginBottom: '0.5rem'
                        }}>✅</div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            marginBottom: '0.5rem',
                            color: '#27ae60'
                        }}>
                            Niveau AA (Recommandé)
                        </h4>
                        <p style={{
                            fontSize: '0.9rem',
                            color: '#666',
                            margin: 0
                        }}>
                            <strong>Contraste 4.5:1</strong> pour le texte normal<br />
                            <strong>Contraste 3:1</strong> pour le texte large<br />
                            <strong>Redimensionnable</strong> jusqu'à 200%
                        </p>
                    </div>

                    <div style={{
                        background: '#fff',
                        padding: '1rem',
                        borderRadius: 8,
                        border: '2px solid #f39c12',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '2rem',
                            marginBottom: '0.5rem'
                        }}>⭐</div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            marginBottom: '0.5rem',
                            color: '#f39c12'
                        }}>
                            Niveau AAA (Optimal)
                        </h4>
                        <p style={{
                            fontSize: '0.9rem',
                            color: '#666',
                            margin: 0
                        }}>
                            <strong>Contraste 7:1</strong> pour le texte normal<br />
                            <strong>Contraste 4.5:1</strong> pour le texte large<br />
                            <strong>Espacement</strong> optimisé
                        </p>
                    </div>

                    <div style={{
                        background: '#fff',
                        padding: '1rem',
                        borderRadius: 8,
                        border: '2px solid #e74c3c',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '2rem',
                            marginBottom: '0.5rem'
                        }}>❌</div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            marginBottom: '0.5rem',
                            color: '#e74c3c'
                        }}>
                            Non Conforme
                        </h4>
                        <p style={{
                            fontSize: '0.9rem',
                            color: '#666',
                            margin: 0
                        }}>
                            <strong>&lt; 4.5:1</strong> pour le texte normal<br />
                            <strong>Non redimensionnable</strong><br />
                            <strong>Espacement insuffisant</strong>
                        </p>
                    </div>
                </div>
            </Section>

            {/* H2 - Section conseils pratiques */}
            <Section id="guidelines" title="Conseils Pratiques - Typographie Accessible">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{
                        background: '#f0f8ff',
                        padding: '1.5rem',
                        borderRadius: 8,
                        border: '1px solid #b3d9ff'
                    }}>
                        <h3 style={{
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: '#0066cc'
                        }}>
                            🎯 Règles d'Or
                        </h3>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#004080',
                            lineHeight: 1.6
                        }}>
                            <li><strong>Taille minimale :</strong> 16px pour le texte normal</li>
                            <li><strong>Contraste suffisant :</strong> Minimum 4.5:1</li>
                            <li><strong>Espacement optimal :</strong> Line-height 1.4-1.6</li>
                            <li><strong>Testez avec utilisateurs :</strong> Validation réelle</li>
                        </ul>
                    </div>

                    <div style={{
                        background: '#fff5f0',
                        padding: '1.5rem',
                        borderRadius: 8,
                        border: '1px solid #ffb3a1'
                    }}>
                        <h3 style={{
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: '#cc5500'
                        }}>
                            ⚠️ Erreurs Courantes
                        </h3>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#802000',
                            lineHeight: 1.6
                        }}>
                            <li><strong>Texte trop petit :</strong> &lt; 14px difficile à lire</li>
                            <li><strong>Espacement serré :</strong> Line-height &lt; 1.2</li>
                            <li><strong>Polices similaires :</strong> Confusion visuelle</li>
                            <li><strong>Pas de fallback :</strong> Polices non chargées</li>
                        </ul>
                    </div>

                    <div style={{
                        background: '#f0fff0',
                        padding: '1.5rem',
                        borderRadius: 8,
                        border: '1px solid #90ee90'
                    }}>
                        <h3 style={{
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: '#006600'
                        }}>
                            ✅ Solutions Recommandées
                        </h3>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#004000',
                            lineHeight: 1.6
                        }}>
                            <li><strong>Hiérarchie claire :</strong> H1 &gt; H2 &gt; H3 distincts</li>
                            <li><strong>Polices web-safe :</strong> Arial, Helvetica, sans-serif</li>
                            <li><strong>Unités relatives :</strong> em, rem, %</li>
                            <li><strong>Tests réguliers :</strong> Outils automatisés + humains</li>
                        </ul>
                    </div>
                </div>
            </Section>

        </div>
    );
};

export default TypographyPageContent;
