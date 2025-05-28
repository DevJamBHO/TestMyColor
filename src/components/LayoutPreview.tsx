import { useColors } from '../context/ColorContext';
import { trackPaletteEvent, AnalyticsEvents } from '../utils/analytics';

const LayoutPreview = () => {
  const { palette } = useColors();

  const handleButtonClick = (buttonName: string) => {
    trackPaletteEvent(AnalyticsEvents.BUTTON_CLICKED, undefined, {
      buttonName,
      section: 'layout-preview'
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackPaletteEvent(AnalyticsEvents.FORM_SUBMITTED, undefined, {
      formName: 'contact-form'
    });
  };

  return (
    <div
      className="layout-preview"
      style={{
        backgroundColor: palette.background,
        color: palette.text,
        fontFamily: 'sans-serif',
      }}
    >
      <header
        className="layout-header"
        style={{
          backgroundColor: palette.primary,
          color: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem',
        }}
        role="banner"
      >
        <h1 style={{ margin: 0 }}>TestMyColors</h1>
        <p style={{ marginTop: '0.5rem' }}>
          Visualize your color palette on a modern layout.
        </p>
      </header>

      {/* Hero section */}
      <section
        style={{ marginBottom: '3rem', display: 'flex', gap: '2rem', alignItems: 'center' }}
        aria-labelledby="hero-title"
      >
        <div style={{ flex: 1 }}>
          <h2 id="hero-title">Create a site that reflects your brand</h2>
          <p>Test your colors in real-time on different interface elements.</p>
          <button
            onClick={() => handleButtonClick('try-now')}
            style={{
              backgroundColor: palette.secondary,
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
            aria-label="Start testing your colors now"
          >
            Try Now
          </button>
        </div>
        <img
          src="https://via.placeholder.com/300x180"
          alt="Color palette visualization example showing different UI components with custom colors"
          style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
        />
      </section>

      {/* Cards section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Layout Preview</h2>
        <p style={{ marginBottom: '1.5rem', opacity: 0.7 }}>
          Visualize your palette on a modern layout.
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
            <h3 style={{ marginBottom: '1rem' }}>Primary Section</h3>
            <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
              Test your colors in real-time on different interface elements.
            </p>
            <button
              onClick={() => handleButtonClick('learn-more')}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'white',
                color: palette.primary,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
              Learn More
            </button>
          </div>
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'white',
            color: palette.text,
            borderRadius: '4px',
            border: `1px solid ${palette.text}20`
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Card Component</h3>
            <p style={{ marginBottom: '1rem', opacity: 0.7 }}>
              A sample card component to showcase your color scheme.
            </p>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: palette.primary,
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              View Details
            </button>
          </div>
          <div style={{
            padding: '1.5rem',
            backgroundColor: palette.text,
            color: 'white',
            borderRadius: '4px'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Dark Section</h3>
            <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
              See how your colors work on dark backgrounds.
            </p>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: palette.primary,
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Contact</h2>
        <form onSubmit={handleFormSubmit} style={{ maxWidth: '500px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
          </div>
          <button
            type="submit"
            onClick={() => handleButtonClick('submit-contact')}
            style={{ backgroundColor: palette.secondary, color: '#fff', padding: '0.75rem 1.25rem', border: 'none', borderRadius: '4px' }}>
            Envoyer
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        className="layout-footer"
        style={{
          backgroundColor: palette.primary,
          color: '#fff',
          padding: '1rem',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <p>© 2025 TestMyColors. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default LayoutPreview;
