import React from 'react';
import { useColors } from '../context/ColorContext';
import CustomButton from './ui/CustomButton';
import Section from './ui/Section';

const ColorPageContent: React.FC = () => {
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
                Testeur RGAA Couleurs 2024 - Contraste WCAG 2.1 AA/AAA Gratuit
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
                Testeur RGAA 4.1 gratuit pour vérifier la conformité de vos couleurs et contrastes.
                Outil français d'accessibilité web avec <a href="#compliance-checker" style={{ color: palette.primary, textDecoration: 'underline' }}>simulation daltonisme</a> et
                <a href="#compliance" style={{ color: palette.primary, textDecoration: 'underline' }}>validation WCAG 2.1 AA/AAA</a> en temps réel.
            </p>

            {/* H2 - Section critères RGAA principaux */}
            <Section id="features" title="Critères RGAA 4.1 - Couleurs et Contraste">

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
                            📏 Critère 3.2 - Contraste du Texte
                        </h3>
                        <p style={{
                            marginBottom: '1rem',
                            lineHeight: 1.6,
                            color: '#555'
                        }}>
                            <strong>Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisant ?</strong>
                        </p>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#666',
                            lineHeight: 1.5
                        }}>
                            <li><strong>Niveau AA :</strong> Ratio minimum 4.5:1 pour le texte normal</li>
                            <li><strong>Niveau AAA :</strong> Ratio minimum 7:1 pour le texte normal</li>
                            <li><strong>Texte large :</strong> 3:1 (AA) et 4.5:1 (AAA)</li>
                            <li><strong>Exception :</strong> Logos et éléments décoratifs</li>
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
                            🎨 Critère 3.1 - Information par la Couleur
                        </h3>
                        <p style={{
                            marginBottom: '1rem',
                            lineHeight: 1.6,
                            color: '#555'
                        }}>
                            <strong>Pour chaque image, l'information ne doit pas être donnée uniquement par la couleur.</strong>
                        </p>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#666',
                            lineHeight: 1.5
                        }}>
                            <li><strong>Règle :</strong> Toujours doubler l'information visuelle</li>
                            <li><strong>Exemples :</strong> Icônes + couleurs, formes + couleurs</li>
                            <li><strong>Liens :</strong> Soulignement + couleur, pas seulement couleur</li>
                            <li><strong>Boutons :</strong> Texte + couleur, pas seulement couleur</li>
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
                            🔍 Critère 3.3 - Contraste des Composants
                        </h3>
                        <p style={{
                            marginBottom: '1rem',
                            lineHeight: 1.6,
                            color: '#555'
                        }}>
                            <strong>Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments graphiques porteurs d'informations sont-elles suffisamment contrastées ?</strong>
                        </p>
                        <ul style={{
                            paddingLeft: '1.5rem',
                            color: '#666',
                            lineHeight: 1.5
                        }}>
                            <li><strong>Boutons :</strong> Texte et bordures contrastés</li>
                            <li><strong>Formulaires :</strong> Champs et labels lisibles</li>
                            <li><strong>Graphiques :</strong> Légendes et données contrastées</li>
                            <li><strong>Navigation :</strong> États actifs et inactifs distincts</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* H2 - Section niveaux de conformité */}
            <Section id="compliance" title="Niveaux de Conformité WCAG 2.1">

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
                        Comprendre les Niveaux WCAG 2.1
                    </h3>
                    <p style={{
                        marginBottom: '1rem',
                        lineHeight: 1.6,
                        color: '#004080'
                    }}>
                        Les Directives d'Accessibilité du Contenu Web (WCAG) définissent trois niveaux de conformité pour l'accessibilité :
                    </p>
                    <ul style={{
                        paddingLeft: '1.5rem',
                        color: '#004080',
                        lineHeight: 1.6
                    }}>
                        <li><strong>Niveau A :</strong> Conformité minimale, essentielle pour l'accessibilité de base</li>
                        <li><strong>Niveau AA :</strong> Conformité recommandée, standard pour la plupart des sites</li>
                        <li><strong>Niveau AAA :</strong> Conformité maximale, pour les sites à haute exigence d'accessibilité</li>
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
                            <strong>4.5:1</strong> pour le texte normal<br />
                            <strong>3:1</strong> pour le texte large (≥18pt ou ≥14pt gras)
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
                            <strong>7:1</strong> pour le texte normal<br />
                            <strong>4.5:1</strong> pour le texte large (≥18pt ou ≥14pt gras)
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
                            <strong>&lt; 3:1</strong> pour le texte large
                        </p>
                    </div>
                </div>
            </Section>

            {/* H2 - Section bonnes pratiques */}
            <Section id="best-practices" title="Bonnes Pratiques RGAA - Couleurs">
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
                            <li><strong>Jamais de couleur seule :</strong> Toujours doubler l'information</li>
                            <li><strong>Contraste suffisant :</strong> Minimum 4.5:1 pour le texte</li>
                            <li><strong>Testez en conditions réelles :</strong> Différents écrans et tailles</li>
                            <li><strong>Pensez daltonisme :</strong> 8% de la population masculine</li>
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
                            <li><strong>Liens uniquement colorés :</strong> Ajoutez un soulignement</li>
                            <li><strong>Boutons sans contraste :</strong> Texte illisible</li>
                            <li><strong>Graphiques sans légendes :</strong> Information perdue</li>
                            <li><strong>États non distincts :</strong> Navigation confuse</li>
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
                            <li><strong>Icônes + couleurs :</strong> Double information</li>
                            <li><strong>Bordures contrastées :</strong> Délimitation claire</li>
                            <li><strong>Texte descriptif :</strong> Alternative textuelle</li>
                            <li><strong>États visuels :</strong> Focus, hover, active distincts</li>
                        </ul>
                    </div>
                </div>
            </Section>


            {/* H2 - Section FAQ */}
            <Section id="faq" title="Questions Fréquentes - RGAA Couleurs">

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
            </Section>
        </div>
    );
};

export default ColorPageContent;
