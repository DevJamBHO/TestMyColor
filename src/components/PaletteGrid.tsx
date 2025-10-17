import { useColors } from '../context/ColorContext';

const PaletteGrid = () => {
    const { palette } = useColors();

    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: palette.background,
                borderRadius: '8px'
            }}>
                <div style={{
                    padding: '1rem',
                    backgroundColor: palette.primary,
                    color: 'white',
                    borderRadius: '4px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>Primary</h3>
                    <code>{palette.primary}</code>
                </div>
                <div style={{
                    padding: '1rem',
                    backgroundColor: palette.secondary,
                    color: 'white',
                    borderRadius: '4px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>Secondary</h3>
                    <code>{palette.secondary}</code>
                </div>
                <div style={{
                    padding: '1rem',
                    backgroundColor: palette.tertiary,
                    color: 'white',
                    borderRadius: '4px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>Tertiary</h3>
                    <code>{palette.tertiary}</code>
                </div>
                <div style={{
                    padding: '1rem',
                    backgroundColor: palette.text,
                    color: 'white',
                    borderRadius: '4px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>Text</h3>
                    <code>{palette.text}</code>
                </div>
                <div style={{
                    padding: '1rem',
                    backgroundColor: palette.background,
                    color: palette.text,
                    borderRadius: '4px',
                    textAlign: 'center',
                    border: `1px solid ${palette.text}20`
                }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>Background</h3>
                    <code>{palette.background}</code>
                </div>
            </div>
        </div>
    );
};

export default PaletteGrid;
