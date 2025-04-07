import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useColors } from '../context/ColorContext';

const NotFound = () => {
    const { palette } = useColors();

    return (
        <>
            <SEO
                title="Page Not Found"
                description="The page you are looking for doesn't exist or has been moved."
            />
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: palette.background,
                color: palette.text
            }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
                <p style={{ maxWidth: '600px', marginBottom: '2rem', lineHeight: 1.6 }}>
                    Oops! The page you are looking for doesn't exist or has been moved.
                    Please check the URL or return to the homepage.
                </p>
                <Link
                    to="/"
                    style={{
                        padding: '1rem 2rem',
                        backgroundColor: palette.primary,
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}
                >
                    Return to Homepage
                </Link>
            </div>
        </>
    );
};

export default NotFound; 