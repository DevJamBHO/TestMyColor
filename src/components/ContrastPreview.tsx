import { useColors } from '../context/ColorContext';

const ContrastPreview = () => {
  const { palette } = useColors();

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Contrast Preview</h2>
      <p style={{ marginBottom: '1.5rem', opacity: 0.7 }}>
        This is a contrast preview <br />
        Test the readability of your text on different backgrounds.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem',
        backgroundColor: palette.background,
        borderRadius: '8px'
      }}>
        <div style={{
          padding: '1.5rem',
          backgroundColor: palette.primary,
          color: 'white',
          borderRadius: '4px'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Text on Primary</h3>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            This text is displayed on the primary color background.
          </p>
        </div>
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          color: palette.text,
          borderRadius: '4px',
          border: `1px solid ${palette.text}20`
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Text on White</h3>
          <p style={{ marginBottom: '1rem', opacity: 0.7 }}>
            This text is displayed on a white background.
          </p>
        </div>
        <div style={{
          padding: '1.5rem',
          backgroundColor: palette.text,
          color: 'white',
          borderRadius: '4px'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Text on Dark</h3>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            This text is displayed on a dark background.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContrastPreview;
