import { useColors } from '../context/ColorContext';
import { trackPaletteEvent, AnalyticsEvents } from '../utils/analytics';
import SEO from './SEO';

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
    <>
      <SEO
        title="Layout Preview"
        description="Visualize your color palette on a modern and professional layout. Test your colors in real-time on different UI elements."
        keywords="layout, web design, user interface, color palette, UI components"
        ogImage="/layout-preview.jpg"
      />
      <div
        className="layout-preview"
        style={{
          backgroundColor: palette.background,
          color: palette.text,
          fontFamily: 'sans-serif',
        }}
      >
        <header
          role="banner"
          className="layout-header"
          style={{
            backgroundColor: palette.primary,
            color: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem',
          }}
        >
          <h1 style={{ margin: 0 }}>TestMyColors</h1>
          <p style={{ marginTop: '0.5rem' }}>
            Visualize your color palette on a modern layout.
          </p>
        </header>

        <main role="main">
          {/* Hero section */}
          <section
            aria-labelledby="hero-title"
            style={{ marginBottom: '3rem', display: 'flex', gap: '2rem', alignItems: 'center' }}
          >
            <div style={{ flex: 1 }}>
              <h2 id="hero-title">Create a site that reflects your brand</h2>
              <p>Test your colors in real-time on different UI elements.</p>
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
              src="/hero-preview.jpg"
              alt="Color palette visualization example showing different UI components with custom colors"
              width="300"
              height="180"
              loading="eager"
              style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
            />
          </section>

          {/* Cards section */}
          <section
            aria-labelledby="cards-title"
            style={{ marginBottom: '3rem' }}
          >
            <h2 id="cards-title" style={{ marginBottom: '1.5rem' }}>Layout Preview</h2>
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
              <article style={{
                padding: '1.5rem',
                backgroundColor: palette.primary,
                color: 'white',
                borderRadius: '4px'
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Main Section</h3>
                <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                  Test your colors in real-time on different UI elements.
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
                  }}
                  aria-label="Learn more about color testing"
                >
                  Learn More
                </button>
              </article>
              <article style={{
                padding: '1.5rem',
                backgroundColor: 'white',
                color: palette.text,
                borderRadius: '4px',
                border: `1px solid ${palette.text}20`
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Card Component</h3>
                <p style={{ marginBottom: '1rem', opacity: 0.7 }}>
                  An example card component to showcase your color scheme.
                </p>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: palette.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  aria-label="View card component details"
                >
                  View Details
                </button>
              </article>
              <article style={{
                padding: '1.5rem',
                backgroundColor: palette.text,
                color: 'white',
                borderRadius: '4px'
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Dark Section</h3>
                <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                  Discover how your colors work on dark backgrounds.
                </p>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: palette.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  aria-label="Start testing in dark mode"
                >
                  Get Started
                </button>
              </article>
            </div>
          </section>

          {/* Contact form section */}
          <section
            aria-labelledby="contact-title"
            style={{ marginBottom: '3rem' }}
          >
            <h2 id="contact-title">Contact</h2>
            <form
              onSubmit={handleFormSubmit}
              style={{ maxWidth: '500px' }}
              aria-label="Contact form"
            >
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    marginTop: '0.25rem',
                    border: `1px solid ${palette.text}40`,
                    borderRadius: '4px',
                    backgroundColor: palette.background,
                    color: palette.text
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    marginTop: '0.25rem',
                    border: `1px solid ${palette.text}40`,
                    borderRadius: '4px',
                    backgroundColor: palette.background,
                    color: palette.text
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    marginTop: '0.25rem',
                    border: `1px solid ${palette.text}40`,
                    borderRadius: '4px',
                    backgroundColor: palette.background,
                    color: palette.text
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: palette.primary,
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </form>
          </section>
        </main>

        <footer
          role="contentinfo"
          className="layout-footer"
          style={{
            backgroundColor: palette.primary,
            color: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <p>© 2025 TestMyColors. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default LayoutPreview;
