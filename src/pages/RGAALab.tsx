import React from 'react';
import PageWrapper from '../components/ui/PageWrapper';
import Header from '../components/ui/Header';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import Separator from '../components/ui/Separator';
import SectionTitle from '../components/ui/SectionTitle';
import RGAALabSEO from '../components/RGAALabSEO';

const RGAALab: React.FC = () => {
    const { palette } = useColors();
    const { font } = useFont();

    return (
        <div style={{
            backgroundColor: palette.background,
            color: palette.text,
            minHeight: '100vh',
            fontFamily: font,
            transition: 'font-family 0.3s ease'
        }}>
            <RGAALabSEO />
            <Header />
            <PageWrapper>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        TestMyColor - Laboratoire RGAA
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.8,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Votre laboratoire d'accessibilité numérique. Testez, validez et améliorez
                        l'accessibilité de vos interfaces selon les critères RGAA 4.1.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        padding: '2rem',
                        boxShadow: '0 4px 12px #0001',
                        border: '1px solid #eee'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: palette.primary
                        }}>
                            🎨 Tests de Couleurs
                        </h3>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                            Vérifiez les ratios de contraste et simulez différents types de daltonisme
                            pour garantir l'accessibilité visuelle.
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            fontSize: '0.9rem',
                            opacity: 0.7
                        }}>
                            <li>✅ Calculs WCAG AAA/AA</li>
                            <li>✅ Simulation de daltonisme</li>
                            <li>✅ Suggestions automatiques</li>
                        </ul>
                    </div>

                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        padding: '2rem',
                        boxShadow: '0 4px 12px #0001',
                        border: '1px solid #eee'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: palette.secondary
                        }}>
                            ⌨️ Navigation Clavier
                        </h3>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                            Testez la navigation au clavier et vérifiez l'ordre de tabulation
                            de vos éléments interactifs.
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            fontSize: '0.9rem',
                            opacity: 0.7
                        }}>
                            <li>🔄 Ordre de tabulation</li>
                            <li>🎯 Indicateurs de focus</li>
                            <li>🚫 Pièges clavier</li>
                        </ul>
                    </div>

                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        padding: '2rem',
                        boxShadow: '0 4px 12px #0001',
                        border: '1px solid #eee'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: palette.tertiary
                        }}>
                            🔊 Lecture d'Écran
                        </h3>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                            Validez la structure sémantique et les attributs ARIA pour une
                            expérience optimale avec les technologies d'assistance.
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            fontSize: '0.9rem',
                            opacity: 0.7
                        }}>
                            <li>📝 Structure sémantique</li>
                            <li>🏷️ Attributs ARIA</li>
                            <li>📖 Alternatives textuelles</li>
                        </ul>
                    </div>
                </div>

                <SectionTitle
                    title="Outils de Test"
                    description="Utilisez ces outils pour valider l'accessibilité de votre palette de couleurs"
                />

                <div style={{
                    background: '#fff',
                    borderRadius: 12,
                    padding: '2rem',
                    marginBottom: '2rem',
                    boxShadow: '0 2px 8px #0001',
                    border: '1px solid #eee'
                }}>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        color: palette.primary
                    }}>
                        🎨 Tests de Couleurs
                    </h3>
                    <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                        Le simulateur de daltonisme est maintenant disponible globalement !
                        Utilisez le panneau de contrôle en haut à droite pour activer la simulation.
                    </p>
                    <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                        Pour les outils de contraste avancés, rendez-vous sur la page dédiée aux couleurs.
                    </p>
                    <a
                        href="/color"
                        style={{
                            display: 'inline-block',
                            padding: '0.75rem 1.5rem',
                            background: palette.primary,
                            color: palette.background,
                            textDecoration: 'none',
                            borderRadius: 8,
                            fontWeight: 600,
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = palette.secondary;
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = palette.primary;
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Aller aux tests de couleurs →
                    </a>
                </div>


                {/* Section d'informations RGAA */}
                <div style={{
                    background: '#f8f9fa',
                    borderRadius: 12,
                    padding: '2rem',
                    marginTop: '3rem',
                    border: '1px solid #e9ecef'
                }}>
                    <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        color: palette.text
                    }}>
                        📚 À propos du RGAA 4.1
                    </h3>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                        Le Référentiel Général d'Amélioration de l'Accessibilité (RGAA) est le standard
                        français pour l'accessibilité numérique. Il s'appuie sur les WCAG 2.1 et
                        définit les critères techniques pour rendre les services numériques accessibles
                        à tous les utilisateurs.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1rem',
                        marginTop: '1.5rem'
                    }}>
                        <div>
                            <strong>🎯 Objectif :</strong>
                            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>
                                Garantir l'égalité d'accès aux services numériques
                            </p>
                        </div>
                        <div>
                            <strong>📏 Standard :</strong>
                            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>
                                Basé sur WCAG 2.1 niveau AA
                            </p>
                        </div>
                        <div>
                            <strong>🇫🇷 Portée :</strong>
                            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>
                                Obligatoire pour les services publics
                            </p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
};

export default RGAALab;
