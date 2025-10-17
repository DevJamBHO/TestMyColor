import React, { useState } from 'react';
import { useColors } from '../context/ColorContext';
import CustomButton from './ui/CustomButton';

const RGAAEducation: React.FC = () => {
    const { palette } = useColors();
    const [activeSection, setActiveSection] = useState<string>('overview');

    const sections = [
        { id: 'overview', title: 'Exigences RGAA Couleurs', icon: '📋' },
        { id: 'contrast', title: 'Ratios de Contraste (3.1)', icon: '⚖️' },
        { id: 'color-blind', title: 'Indépendance des Couleurs (3.2)', icon: '👁️' },
        { id: 'information', title: 'Information par Couleur (3.3)', icon: 'ℹ️' }
    ];

    const getSectionContent = () => {
        switch (activeSection) {
            case 'overview':
                return (
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: palette.text }}>Vue d'ensemble de l'Accessibilité RGAA</h3>
                        <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                            Le RGAA (Référentiel Général d'Amélioration de l'Accessibilité) définit des exigences strictes
                            pour l'utilisation des couleurs dans les interfaces numériques. Ces critères garantissent que l'information
                            est accessible à tous les utilisateurs, y compris ceux ayant des déficiences visuelles.
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1rem',
                            marginTop: '1.5rem'
                        }}>
                            <div style={{
                                padding: '1rem',
                                background: '#f8f9fa',
                                borderRadius: 8,
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{ marginBottom: '0.5rem', color: palette.primary }}>Critère 3.1</h4>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                    <strong>Contraste :</strong> Les couleurs de texte et d'arrière-plan doivent avoir des ratios de contraste suffisants
                                    (4,5:1 pour le texte normal, 3:1 pour le texte large).
                                </p>
                            </div>
                            <div style={{
                                padding: '1rem',
                                background: '#f8f9fa',
                                borderRadius: 8,
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{ marginBottom: '0.5rem', color: palette.primary }}>Critère 3.2</h4>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                    <strong>Indépendance des Couleurs :</strong> L'information ne doit pas reposer uniquement sur la couleur.
                                    Utilisez des indices visuels supplémentaires comme des icônes, des motifs ou du texte.
                                </p>
                            </div>
                            <div style={{
                                padding: '1rem',
                                background: '#f8f9fa',
                                borderRadius: 8,
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{ marginBottom: '0.5rem', color: palette.primary }}>Critère 3.3</h4>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                    <strong>Information par Couleur :</strong> Quand la couleur transmet une information,
                                    assurez-vous qu'elle soit également disponible par d'autres moyens.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case 'contrast':
                return (
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: palette.text }}>Ratios de Contraste (RGAA 3.1)</h3>
                        <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                            Le ratio de contraste mesure la différence de luminance entre les couleurs de texte et d'arrière-plan.
                            Des ratios plus élevés signifient une meilleure lisibilité pour les utilisateurs ayant des déficiences visuelles.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1rem',
                            marginTop: '1.5rem'
                        }}>
                            <div style={{
                                padding: '1rem',
                                background: '#27ae60',
                                color: 'white',
                                borderRadius: 8,
                                textAlign: 'center'
                            }}>
                                <h4 style={{ margin: '0 0 0.5rem 0' }}>Niveau AAA</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                                    <strong>7:1</strong> pour le texte normal<br />
                                    <strong>4,5:1</strong> pour le texte large
                                </p>
                            </div>
                            <div style={{
                                padding: '1rem',
                                background: '#f39c12',
                                color: 'white',
                                borderRadius: 8,
                                textAlign: 'center'
                            }}>
                                <h4 style={{ margin: '0 0 0.5rem 0' }}>Niveau AA</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                                    <strong>4,5:1</strong> pour le texte normal<br />
                                    <strong>3:1</strong> pour le texte large
                                </p>
                            </div>
                            <div style={{
                                padding: '1rem',
                                background: '#e74c3c',
                                color: 'white',
                                borderRadius: 8,
                                textAlign: 'center'
                            }}>
                                <h4 style={{ margin: '0 0 0.5rem 0' }}>Sous AA</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                                    <strong>&lt; 4,5:1</strong> pour le texte normal<br />
                                    <strong>&lt; 3:1</strong> pour le texte large
                                </p>
                            </div>
                        </div>

                        <div style={{
                            background: '#f8f9fa',
                            padding: '1rem',
                            borderRadius: 8,
                            marginTop: '1.5rem',
                            border: '1px solid #e9ecef'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', color: palette.text }}>💡 Pro Tips</h4>
                            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                                <li>Test with your actual content, not just placeholder text</li>
                                <li>Consider different lighting conditions and screen settings</li>
                                <li>Use tools like this lab to test in real-time</li>
                                <li>Remember that contrast requirements apply to all interactive elements</li>
                            </ul>
                        </div>
                    </div>
                );

            case 'color-blind':
                return (
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: palette.text }}>Color Independence (RGAA 3.2)</h3>
                        <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                            Approximately 8% of men and 0.5% of women have some form of color vision deficiency.
                            Your design must work for all users, not just those with typical color vision.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '1rem',
                            marginTop: '1.5rem'
                        }}>
                            {[
                                { name: 'Normal Vision', prevalence: '91.5%', description: 'Full color spectrum' },
                                { name: 'Protanopia', prevalence: '1%', description: 'No red cones' },
                                { name: 'Deuteranopia', prevalence: '1%', description: 'No green cones' },
                                { name: 'Tritanopia', prevalence: '0.003%', description: 'No blue cones' },
                                { name: 'Protanomaly', prevalence: '1%', description: 'Red cone deficiency' },
                                { name: 'Deuteranomaly', prevalence: '5%', description: 'Green cone deficiency' },
                                { name: 'Tritanomaly', prevalence: '0.01%', description: 'Blue cone deficiency' },
                                { name: 'Achromatopsia', prevalence: '0.003%', description: 'Grayscale vision' }
                            ].map((type, index) => (
                                <div key={index} style={{
                                    padding: '0.75rem',
                                    background: '#f8f9fa',
                                    borderRadius: 8,
                                    border: '1px solid #e9ecef',
                                    textAlign: 'center'
                                }}>
                                    <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>{type.name}</h5>
                                    <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: palette.primary, fontWeight: 'bold' }}>
                                        {type.prevalence}
                                    </p>
                                    <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                                        {type.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            background: '#e3f2fd',
                            padding: '1rem',
                            borderRadius: 8,
                            marginTop: '1.5rem',
                            border: '1px solid #2196f3'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', color: '#1976d2' }}>🎯 Best Practices</h4>
                            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                                <li>Never use color alone to convey information</li>
                                <li>Add icons, patterns, or text labels to color-coded elements</li>
                                <li>Test your design with color blindness simulators</li>
                                <li>Ensure sufficient contrast even in grayscale</li>
                            </ul>
                        </div>
                    </div>
                );

            case 'information':
                return (
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: palette.text }}>Color Information (RGAA 3.3)</h3>
                        <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                            When color is used to convey information, it must be supplemented with other visual or textual cues.
                            This ensures that users with color vision deficiencies can still understand the content.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem',
                            marginTop: '1.5rem'
                        }}>
                            <div style={{
                                padding: '1rem',
                                background: '#fff3e0',
                                borderRadius: 8,
                                border: '1px solid #ff9800'
                            }}>
                                <h4 style={{ marginBottom: '0.5rem', color: '#f57c00' }}>❌ Bad Examples</h4>
                                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                    <li>Red text for errors without "Error:" label</li>
                                    <li>Green checkmarks without "Success" text</li>
                                    <li>Color-coded charts without legends</li>
                                    <li>Required fields marked only with red color</li>
                                </ul>
                            </div>
                            <div style={{
                                padding: '1rem',
                                background: '#e8f5e8',
                                borderRadius: 8,
                                border: '1px solid #4caf50'
                            }}>
                                <h4 style={{ marginBottom: '0.5rem', color: '#388e3c' }}>✅ Good Examples</h4>
                                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                    <li>"Error: Invalid input" with red color</li>
                                    <li>✓ Success with green color and text</li>
                                    <li>Charts with both color and text labels</li>
                                    <li>Required fields with * and red color</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{
                            background: '#f3e5f5',
                            padding: '1rem',
                            borderRadius: 8,
                            marginTop: '1.5rem',
                            border: '1px solid #9c27b0'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', color: '#7b1fa2' }}>🔧 Implementation Tips</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <strong>Visual Cues:</strong>
                                    <ul style={{ margin: '0.25rem 0 0 1.5rem', fontSize: '0.9rem' }}>
                                        <li>Icons and symbols</li>
                                        <li>Patterns and textures</li>
                                        <li>Shapes and borders</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Textual Cues:</strong>
                                    <ul style={{ margin: '0.25rem 0 0 1.5rem', fontSize: '0.9rem' }}>
                                        <li>Labels and descriptions</li>
                                        <li>Alt text for images</li>
                                        <li>ARIA labels</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
            }}>
                {sections.map((section) => (
                    <CustomButton
                        key={section.id}
                        label={`${section.icon} ${section.title}`}
                        variant={activeSection === section.id ? 'filled' : 'outline'}
                        color={activeSection === section.id ? 'primary' : 'secondary'}
                        size="small"
                        onClick={() => setActiveSection(section.id)}
                        style={{
                            fontSize: '0.8rem',
                            padding: '0.5rem 1rem'
                        }}
                    />
                ))}
            </div>
            {getSectionContent()}
        </div>
    );
};

export default RGAAEducation;
