import React, { useState } from 'react';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import SectionTitle from './ui/SectionTitle';
import CustomButton from './ui/CustomButton';

interface TypographyExample {
    title: string;
    content: React.ReactNode;
    description?: string;
}

const AdvancedTypographyShowcase: React.FC = () => {
    const { palette } = useColors();
    const { font } = useFont();
    const [activeTab, setActiveTab] = useState('headings');

    const currentFontName = font.replace(/'/g, '').split(',')[0].trim();

    const typographyExamples: Record<string, TypographyExample[]> = {
        headings: [
            {
                title: "Titres principaux",
                description: "Hiérarchie des titres de H1 à H6",
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h1 style={{
                                color: palette.text,
                                margin: '0 0 0.5rem 0',
                                fontFamily: font,
                                fontSize: '3rem',
                                fontWeight: 700,
                                lineHeight: 1.2
                            }}>
                                Heading 1 - Titre Principal
                            </h1>
                            <p style={{ color: palette.text, opacity: 0.7, fontFamily: font }}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                        <div>
                            <h2 style={{
                                color: palette.text,
                                margin: '0 0 0.5rem 0',
                                fontFamily: font,
                                fontSize: '2.25rem',
                                fontWeight: 600,
                                lineHeight: 1.3
                            }}>
                                Heading 2 - Sous-titre
                            </h2>
                            <p style={{ color: palette.text, opacity: 0.7, fontFamily: font }}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                        <div>
                            <h3 style={{
                                color: palette.text,
                                margin: '0 0 0.5rem 0',
                                fontFamily: font,
                                fontSize: '1.875rem',
                                fontWeight: 600,
                                lineHeight: 1.4
                            }}>
                                Heading 3 - Section
                            </h3>
                            <p style={{ color: palette.text, opacity: 0.7, fontFamily: font }}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                        <div>
                            <h4 style={{
                                color: palette.text,
                                margin: '0 0 0.5rem 0',
                                fontFamily: font,
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                lineHeight: 1.4
                            }}>
                                Heading 4 - Sous-section
                            </h4>
                            <p style={{ color: palette.text, opacity: 0.7, fontFamily: font }}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                        <div>
                            <h5 style={{
                                color: palette.text,
                                margin: '0 0 0.5rem 0',
                                fontFamily: font,
                                fontSize: '1.25rem',
                                fontWeight: 500,
                                lineHeight: 1.5
                            }}>
                                Heading 5 - Groupe
                            </h5>
                            <p style={{ color: palette.text, opacity: 0.7, fontFamily: font }}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                        <div>
                            <h6 style={{
                                color: palette.text,
                                margin: '0 0 0.5rem 0',
                                fontFamily: font,
                                fontSize: '1.125rem',
                                fontWeight: 500,
                                lineHeight: 1.5
                            }}>
                                Heading 6 - Élément
                            </h6>
                            <p style={{ color: palette.text, opacity: 0.7, fontFamily: font }}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                    </div>
                )
            }
        ],
        body: [
            {
                title: "Texte de corps",
                description: "Différentes tailles et styles de texte",
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Texte normal
                            </h4>
                            <p style={{
                                color: palette.text,
                                fontFamily: font,
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Texte large
                            </h4>
                            <p style={{
                                color: palette.text,
                                fontFamily: font,
                                fontSize: '1.25rem',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Texte petit
                            </h4>
                            <p style={{
                                color: palette.text,
                                fontFamily: font,
                                fontSize: '0.875rem',
                                lineHeight: 1.5,
                                margin: 0
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                )
            }
        ],
        styles: [
            {
                title: "Styles de texte",
                description: "Différents styles et formats",
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ fontFamily: font, color: palette.text }}>
                            <strong>Texte en gras</strong> - <em>Texte en italique</em> - <u>Texte souligné</u> - <s>Texte barré</s>
                        </div>
                        <div style={{ fontFamily: font, color: palette.text }}>
                            <code style={{
                                backgroundColor: palette.background,
                                padding: '0.2rem 0.4rem',
                                borderRadius: '4px',
                                fontFamily: 'monospace'
                            }}>
                                Code inline
                            </code>
                        </div>
                        <div style={{ fontFamily: font, color: palette.text }}>
                            <sup>Exposant</sup> et <sub>Indice</sub>
                        </div>
                        <div style={{ fontFamily: font, color: palette.text }}>
                            <mark style={{ backgroundColor: palette.primary + '30', padding: '0.1rem 0.2rem' }}>
                                Texte surligné
                            </mark>
                        </div>
                    </div>
                )
            }
        ],
        lists: [
            {
                title: "Listes",
                description: "Listes à puces et numérotées",
                content: (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Liste à puces
                            </h4>
                            <ul style={{
                                color: palette.text,
                                fontFamily: font,
                                paddingLeft: '1.5rem',
                                lineHeight: 1.6
                            }}>
                                <li>Premier élément de la liste</li>
                                <li>Deuxième élément de la liste</li>
                                <li>Troisième élément de la liste</li>
                                <li>Quatrième élément de la liste</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Liste numérotée
                            </h4>
                            <ol style={{
                                color: palette.text,
                                fontFamily: font,
                                paddingLeft: '1.5rem',
                                lineHeight: 1.6
                            }}>
                                <li>Premier élément de la liste</li>
                                <li>Deuxième élément de la liste</li>
                                <li>Troisième élément de la liste</li>
                                <li>Quatrième élément de la liste</li>
                            </ol>
                        </div>
                    </div>
                )
            }
        ],
        quotes: [
            {
                title: "Citations et références",
                description: "Citations et références typographiques",
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Citation en bloc
                            </h4>
                            <blockquote style={{
                                color: palette.text,
                                fontFamily: font,
                                borderLeft: `4px solid ${palette.primary}`,
                                paddingLeft: '1rem',
                                marginLeft: 0,
                                fontStyle: 'italic',
                                fontSize: '1.1rem',
                                lineHeight: 1.6
                            }}>
                                "La seule façon de faire un excellent travail est d'aimer ce que vous faites."
                                <footer style={{
                                    marginTop: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontStyle: 'normal',
                                    opacity: 0.8
                                }}>
                                    — Steve Jobs
                                </footer>
                            </blockquote>
                        </div>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Citation inline
                            </h4>
                            <p style={{ color: palette.text, fontFamily: font, lineHeight: 1.6 }}>
                                Comme <q>Albert Einstein</q> l'a dit, <q>L'imagination est plus importante que la connaissance.</q>
                            </p>
                        </div>
                    </div>
                )
            }
        ],
        interface: [
            {
                title: "Éléments d'interface",
                description: "Boutons, liens et éléments interactifs",
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Boutons
                            </h4>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <CustomButton
                                    label="Bouton Principal"
                                    variant="filled"
                                    color="primary"
                                    style={{ fontFamily: font }}
                                />
                                <CustomButton
                                    label="Bouton Secondaire"
                                    variant="outline"
                                    color="secondary"
                                    style={{ fontFamily: font }}
                                />
                                <CustomButton
                                    label="Bouton Fantôme"
                                    variant="ghost"
                                    color="tertiary"
                                    style={{ fontFamily: font }}
                                />
                            </div>
                        </div>
                        <div>
                            <h4 style={{ color: palette.text, margin: '0 0 1rem 0', fontFamily: font }}>
                                Liens
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <a href="#" style={{
                                    color: palette.primary,
                                    textDecoration: 'none',
                                    fontFamily: font,
                                    fontWeight: 500
                                }}>
                                    Lien normal
                                </a>
                                <a href="#" style={{
                                    color: palette.primary,
                                    textDecoration: 'underline',
                                    fontFamily: font
                                }}>
                                    Lien souligné
                                </a>
                                <a href="#" style={{
                                    color: palette.primary,
                                    textDecoration: 'none',
                                    fontFamily: font,
                                    fontWeight: 600
                                }}>
                                    Lien en gras
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    };

    const tabs = Object.keys(typographyExamples);

    return (
        <div style={{ marginBottom: '3rem' }}>
            <SectionTitle
                title="Prévisualisation Typographique Avancée"
                description={`Prévisualisez comment votre police "${currentFontName}" s'affiche dans différents contextes.`}
            />

            {/* Onglets */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '2rem',
                borderBottom: `1px solid ${palette.primary}20`,
                paddingBottom: '1rem'
            }}>
                {tabs.map((tab) => (
                    <CustomButton
                        key={tab}
                        label={typographyExamples[tab][0].title}
                        variant={activeTab === tab ? 'filled' : 'ghost'}
                        color={activeTab === tab ? 'primary' : 'secondary'}
                        onClick={() => setActiveTab(tab)}
                        style={{ fontFamily: font }}
                    />
                ))}
            </div>

            {/* Contenu des onglets */}
            <div style={{
                padding: '2rem',
                backgroundColor: `${palette.primary}05`,
                borderRadius: '12px',
                border: `1px solid ${palette.primary}20`
            }}>
                {typographyExamples[activeTab].map((example, index) => (
                    <div key={index}>
                        {example.description && (
                            <p style={{
                                color: palette.text,
                                opacity: 0.8,
                                margin: '0 0 1.5rem 0',
                                fontFamily: font,
                                fontSize: '0.95rem'
                            }}>
                                {example.description}
                            </p>
                        )}
                        {example.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvancedTypographyShowcase;
