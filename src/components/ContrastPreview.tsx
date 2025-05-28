import { useColors } from '../context/ColorContext';
import { calculateContrastRatio, getWCAGCompliance, suggestBestMultiContrastColor } from '../utils/contrast';
import CustomButton from './ui/CustomButton';
import { trackPaletteEvent, AnalyticsEvents } from '../utils/analytics';

const badgeStyle = (compliance: string) => {
  let bg = '#e74c3c', color = '#fff';
  if (compliance === 'AA' || compliance === 'AA (Large Text)') { bg = '#f39c12'; color = '#fff'; }
  if (compliance === 'AAA') { bg = '#27ae60'; color = '#fff'; }
  return {
    display: 'inline-block',
    padding: '0.2em 0.7em',
    borderRadius: '1em',
    fontWeight: 700,
    fontSize: '0.95em',
    background: bg,
    color,
    marginRight: '0.5em',
    marginBottom: '0.2em',
    verticalAlign: 'middle',
  };
};

const icon = (compliance: string) => {
  if (compliance === 'AAA') return '✅';
  if (compliance.startsWith('AA')) return '⚠️';
  return '❌';
};

const blockLabels = {
  background: 'Main background',
  primary: 'Primary background',
  secondary: 'Secondary background',
};

const ContrastPreview = () => {
  const { palette, setPalette } = useColors();

  // Suggestion globale multi-blocs
  const backgrounds = [palette.background, palette.primary, palette.secondary];
  const blockKeys = ['background', 'primary', 'secondary'];
  const bestSuggestion = suggestBestMultiContrastColor(palette.text, backgrounds);

  const handleApplySuggestion = (key: string, color: string) => {
    setPalette({ ...palette, [key]: color });
    trackPaletteEvent(AnalyticsEvents.CONTRAST_SUGGESTION_APPLIED, undefined, {
      targetBackground: key,
      newColor: color,
      previousColor: palette[key as keyof typeof palette],
    });
  };

  const renderContrastInfo = (backgroundColor: string, textColor: string) => {
    const ratio = calculateContrastRatio(backgroundColor, textColor);
    const compliance = getWCAGCompliance(ratio);
    const largeTextCompliance = getWCAGCompliance(ratio, true);

    // Track contrast check
    trackPaletteEvent(AnalyticsEvents.CONTRAST_CHECKED, undefined, {
      backgroundColor,
      textColor,
      ratio: ratio.toFixed(2),
      compliance,
      largeTextCompliance,
    });

    return (
      <div style={{ marginTop: '1rem', fontSize: '0.98rem' }}>
        <span style={badgeStyle(compliance)}>{icon(compliance)} {compliance}</span>
        <span style={badgeStyle(largeTextCompliance)}>{icon(largeTextCompliance)} {largeTextCompliance} (large text)</span>
        <div style={{ marginTop: 6, color: '#555', fontSize: '0.97em' }}>
          Contrast ratio: <b>{ratio.toFixed(2)}:1</b>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Contrast Preview</h2>
      <p style={{ marginBottom: '1.5rem', opacity: 0.7 }}>
        Test the readability of your text on different backgrounds.<br />
        Badges indicate WCAG compliance.
      </p>

      {/* Suggestion globale multi-blocs */}
      {bestSuggestion.color.toLowerCase() !== palette.text.toLowerCase() && (
        <div
          style={{
            marginBottom: '2rem',
            background: '#fff',
            color: palette.text,
            borderRadius: 8,
            border: `1px solid ${palette.text}20`,
            boxShadow: '0 2px 8px #0001',
            padding: '1.5em 2em',
            maxWidth: 600,
            fontFamily: 'inherit',
          }}
        >
          <b style={{ fontSize: '1.1em', display: 'block', marginBottom: 8 }}>Global suggestion:</b>
          Use <code style={{ background: '#f5f5f5', color: bestSuggestion.color, borderRadius: 4, padding: '0.1em 0.4em' }}>{bestSuggestion.color}</code> as text color.<br />
          <span style={{ fontSize: '0.97em', color: palette.text }}>
            Compliance on:
            <ul style={{ margin: '0.5em 0 0 1.2em', padding: 0 }}>
              {bestSuggestion.details.map((d, i) => (
                <li key={blockKeys[i]} style={{ marginBottom: 2 }}>
                  {blockLabels[blockKeys[i] as keyof typeof blockLabels]}:
                  <span style={badgeStyle(d.compliance)}>{icon(d.compliance)} {d.compliance}</span>
                  <span style={{ color: '#555', fontSize: '0.96em', marginLeft: 6 }}>({d.ratio.toFixed(2)}:1)</span>
                </li>
              ))}
            </ul>
          </span>
          <div style={{ marginTop: 16 }}>
            <CustomButton
              label="Apply to palette"
              color="primary"
              size="small"
              onClick={() => handleApplySuggestion('text', bestSuggestion.color)}
            />
          </div>
        </div>
      )}

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
          backgroundColor: palette.background,
          color: palette.text,
          borderRadius: '4px',
          boxShadow: '0 2px 8px #0001',
          minHeight: 220
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Text on main background</h3>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            This text is displayed on the main background.
          </p>
          {renderContrastInfo(palette.background, palette.text)}
        </div>
        <div style={{
          padding: '1.5rem',
          backgroundColor: palette.primary,
          color: palette.text,
          borderRadius: '4px',
          boxShadow: '0 2px 8px #0001',
          minHeight: 220
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Text on primary background</h3>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            This text is displayed on the primary background.
          </p>
          {renderContrastInfo(palette.primary, palette.text)}
        </div>
        <div style={{
          padding: '1.5rem',
          backgroundColor: palette.secondary,
          color: palette.text,
          borderRadius: '4px',
          boxShadow: '0 2px 8px #0001',
          minHeight: 220
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Text on secondary background</h3>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            This text is displayed on the secondary background.
          </p>
          {renderContrastInfo(palette.secondary, palette.text)}
        </div>
      </div>
    </div>
  );
};

export default ContrastPreview;
