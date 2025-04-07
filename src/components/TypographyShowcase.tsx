import { useColors } from '../context/ColorContext';
import SectionTitle from './ui/SectionTitle';

const TypographyShowcase = () => {
  const { palette } = useColors();

  return (
    <div style={{ marginBottom: '3rem' }}>
      <SectionTitle
        title="Typography Preview"
        description="Preview how different text elements will look with your selected typography."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {/* Headings */}
        <div>
          <h3 style={{ color: palette.text, marginBottom: '1rem' }}>Headings</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h1 style={{ color: palette.text, marginBottom: '0.5rem' }}>Heading 1</h1>
              <p style={{ color: palette.text, opacity: 0.7 }}>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <h2 style={{ color: palette.text, marginBottom: '0.5rem' }}>Heading 2</h2>
              <p style={{ color: palette.text, opacity: 0.7 }}>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <h3 style={{ color: palette.text, marginBottom: '0.5rem' }}>Heading 3</h3>
              <p style={{ color: palette.text, opacity: 0.7 }}>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <h4 style={{ color: palette.text, marginBottom: '0.5rem' }}>Heading 4</h4>
              <p style={{ color: palette.text, opacity: 0.7 }}>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <h5 style={{ color: palette.text, marginBottom: '0.5rem' }}>Heading 5</h5>
              <p style={{ color: palette.text, opacity: 0.7 }}>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <h6 style={{ color: palette.text, marginBottom: '0.5rem' }}>Heading 6</h6>
              <p style={{ color: palette.text, opacity: 0.7 }}>The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div>
          <h3 style={{ color: palette.text, marginBottom: '1rem' }}>Body Text</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p style={{ color: palette.text, marginBottom: '0.5rem' }}>Regular Text</p>
              <p style={{ color: palette.text, opacity: 0.7 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <p style={{ color: palette.text, marginBottom: '0.5rem' }}>Small Text</p>
              <p style={{ color: palette.text, opacity: 0.7, fontSize: '0.875rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <p style={{ color: palette.text, marginBottom: '0.5rem' }}>Large Text</p>
              <p style={{ color: palette.text, opacity: 0.7, fontSize: '1.25rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Lists */}
        <div>
          <h3 style={{ color: palette.text, marginBottom: '1rem' }}>Lists</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <p style={{ color: palette.text, marginBottom: '0.5rem' }}>Unordered List</p>
              <ul style={{ color: palette.text, opacity: 0.7, paddingLeft: '1.5rem' }}>
                <li>First item in the list</li>
                <li>Second item in the list</li>
                <li>Third item in the list</li>
                <li>Fourth item in the list</li>
              </ul>
            </div>
            <div>
              <p style={{ color: palette.text, marginBottom: '0.5rem' }}>Ordered List</p>
              <ol style={{ color: palette.text, opacity: 0.7, paddingLeft: '1.5rem' }}>
                <li>First item in the list</li>
                <li>Second item in the list</li>
                <li>Third item in the list</li>
                <li>Fourth item in the list</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Quotes & Citations */}
        <div>
          <h3 style={{ color: palette.text, marginBottom: '1rem' }}>Quotes & Citations</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p style={{ color: palette.text, marginBottom: '0.5rem' }}>Blockquote</p>
              <blockquote style={{
                color: palette.text,
                opacity: 0.7,
                borderLeft: `4px solid ${palette.primary}`,
                paddingLeft: '1rem',
                marginLeft: 0,
                fontStyle: 'italic'
              }}>
                "The only way to do great work is to love what you do."
                <footer style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>— Steve Jobs</footer>
              </blockquote>
            </div>
            <div>
              <p style={{ color: palette.text, marginBottom: '0.5rem' }}>Inline Quote</p>
              <p style={{ color: palette.text, opacity: 0.7 }}>
                As <q>Albert Einstein</q> once said, <q>Imagination is more important than knowledge.</q>
              </p>
            </div>
          </div>
        </div>

        {/* Text Styles */}
        <div>
          <h3 style={{ color: palette.text, marginBottom: '1rem' }}>Text Styles</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: palette.text }}>
              <strong>Bold Text</strong> - <em>Italic Text</em> - <u>Underlined Text</u> - <s>Strikethrough Text</s>
            </p>
            <p style={{ color: palette.text }}>
              <code style={{ backgroundColor: palette.background, padding: '0.2rem 0.4rem', borderRadius: '4px' }}>
                Code Text
              </code>
            </p>
            <p style={{ color: palette.text }}>
              <sup>Superscript</sup> and <sub>Subscript</sub> Text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyShowcase;
