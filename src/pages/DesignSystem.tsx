import React from 'react';
import PageWrapper from '../components/ui/PageWrapper';
import Header from '../components/ui/Header';
import Breadcrumb from '../components/Breadcrumb';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import { Button, Card, CardHeader, CardBody, CardFooter, Input, AdaptiveButton } from '../design-system';
import CustomButton from '../components/ui/CustomButton';
import Separator from '../components/ui/Separator';

const DesignSystem: React.FC = () => {
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
            <Header />
            <Breadcrumb />
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
                        Design System
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.8,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Un système de design complet pour créer des interfaces cohérentes et accessibles.
                    </p>
                </div>

                {/* Buttons Section */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Boutons
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Variantes</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <Button variant="filled" color="primary">Filled</Button>
                                    <Button variant="outline" color="primary">Outline</Button>
                                    <Button variant="ghost" color="primary">Ghost</Button>
                                    <Button variant="link" color="primary">Link</Button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Couleurs</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <Button variant="filled" color="primary">Primary</Button>
                                    <Button variant="filled" color="secondary">Secondary</Button>
                                    <Button variant="filled" color="success">Success</Button>
                                    <Button variant="filled" color="warning">Warning</Button>
                                    <Button variant="filled" color="error">Error</Button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Tailles</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                                    <Button size="xs" variant="filled" color="primary">XS</Button>
                                    <Button size="sm" variant="filled" color="primary">SM</Button>
                                    <Button size="md" variant="filled" color="primary">MD</Button>
                                    <Button size="lg" variant="filled" color="primary">LG</Button>
                                    <Button size="xl" variant="filled" color="primary">XL</Button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>États</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <Button variant="filled" color="primary">Normal</Button>
                                    <Button variant="filled" color="primary" loading>Loading</Button>
                                    <Button variant="filled" color="primary" disabled>Disabled</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Cards Section */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Cartes
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Carte Élevée</h3>
                            </CardHeader>
                            <CardBody>
                                <p style={{ margin: 0, opacity: 0.8 }}>
                                    Cette carte utilise l'ombre pour créer un effet d'élévation.
                                </p>
                            </CardBody>
                            <CardFooter>
                                <Button size="sm" variant="outline" color="primary">Action</Button>
                            </CardFooter>
                        </Card>

                        <Card variant="outlined">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Carte Contour</h3>
                            </CardHeader>
                            <CardBody>
                                <p style={{ margin: 0, opacity: 0.8 }}>
                                    Cette carte utilise une bordure pour la délimiter.
                                </p>
                            </CardBody>
                            <CardFooter>
                                <Button size="sm" variant="filled" color="secondary">Action</Button>
                            </CardFooter>
                        </Card>

                        <Card variant="filled">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Carte Remplie</h3>
                            </CardHeader>
                            <CardBody>
                                <p style={{ margin: 0, opacity: 0.8 }}>
                                    Cette carte a un arrière-plan coloré.
                                </p>
                            </CardBody>
                            <CardFooter>
                                <Button size="sm" variant="ghost" color="primary">Action</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Inputs Section */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Champs de saisie
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Variantes</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <Input
                                        variant="outlined"
                                        label="Outlined"
                                        placeholder="Saisissez du texte..."
                                    />
                                    <Input
                                        variant="filled"
                                        label="Filled"
                                        placeholder="Saisissez du texte..."
                                    />
                                    <Input
                                        variant="underlined"
                                        label="Underlined"
                                        placeholder="Saisissez du texte..."
                                    />
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>États</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <Input
                                        label="Normal"
                                        placeholder="État normal"
                                    />
                                    <Input
                                        label="Erreur"
                                        state="error"
                                        errorText="Ce champ est requis"
                                        placeholder="État d'erreur"
                                    />
                                    <Input
                                        label="Succès"
                                        state="success"
                                        placeholder="État de succès"
                                    />
                                    <Input
                                        label="Désactivé"
                                        disabled
                                        placeholder="Champ désactivé"
                                    />
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Tailles</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <Input
                                        size="sm"
                                        label="Petit"
                                        placeholder="Taille SM"
                                    />
                                    <Input
                                        size="md"
                                        label="Moyen"
                                        placeholder="Taille MD"
                                    />
                                    <Input
                                        size="lg"
                                        label="Grand"
                                        placeholder="Taille LG"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>

                {/* Adaptive Components Section */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Composants Adaptatifs
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>AdaptiveButton</h3>
                            </CardHeader>
                            <CardBody>
                                <p style={{ margin: '0 0 1rem 0', opacity: 0.8, fontSize: '0.9rem' }}>
                                    Boutons qui s'adaptent automatiquement aux couleurs du contexte.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <AdaptiveButton variant="filled" color="primary" size="md">
                                        Primary
                                    </AdaptiveButton>
                                    <AdaptiveButton variant="outline" color="secondary" size="md">
                                        Secondary
                                    </AdaptiveButton>
                                    <AdaptiveButton variant="ghost" color="tertiary" size="md">
                                        Tertiary
                                    </AdaptiveButton>
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>CustomButton (Legacy)</h3>
                            </CardHeader>
                            <CardBody>
                                <p style={{ margin: '0 0 1rem 0', opacity: 0.8, fontSize: '0.9rem' }}>
                                    Ancien composant maintenant basé sur le design system.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <CustomButton label="Primary" variant="filled" color="primary" size="medium" />
                                    <CustomButton label="Secondary" variant="outline" color="secondary" size="medium" />
                                    <CustomButton label="Tertiary" variant="ghost" color="tertiary" size="medium" />
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Comparaison</h3>
                            </CardHeader>
                            <CardBody>
                                <p style={{ margin: '0 0 1rem 0', opacity: 0.8, fontSize: '0.9rem' }}>
                                    Les deux composants utilisent maintenant le même design system.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <AdaptiveButton variant="filled" color="primary" size="sm">
                                            Adaptive
                                        </AdaptiveButton>
                                        <CustomButton label="Custom" variant="filled" color="primary" size="small" />
                                        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Même rendu</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Tokens Section */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Tokens de Design
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <Card variant="outlined">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Couleurs</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                                    {Object.entries(palette).map(([key, color]) => (
                                        <div key={key} style={{ textAlign: 'center' }}>
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: '40px',
                                                    backgroundColor: color,
                                                    borderRadius: '4px',
                                                    marginBottom: '0.25rem',
                                                    border: '1px solid #e5e7eb'
                                                }}
                                            />
                                            <div style={{ fontSize: '0.75rem', fontWeight: 500 }}>{key}</div>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{color}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="outlined">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Typographie</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 700 }}>Display</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>Heading 1</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>Heading 2</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 500 }}>Body Text</div>
                                    <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Small Text</div>
                                    <div style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>Code Text</div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card variant="outlined">
                            <CardHeader>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Espacements</h3>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {[1, 2, 3, 4, 6, 8, 12, 16].map((space) => (
                                        <div key={space} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div
                                                style={{
                                                    width: `${space * 4}px`,
                                                    height: '8px',
                                                    backgroundColor: palette.primary,
                                                    borderRadius: '2px'
                                                }}
                                            />
                                            <span style={{ fontSize: '0.875rem' }}>{space * 4}px</span>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </PageWrapper>
        </div>
    );
};

export default DesignSystem;
