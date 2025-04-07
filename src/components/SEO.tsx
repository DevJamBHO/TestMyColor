import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, ogImage }) => {
    const location = useLocation();
    const siteName = 'TestMyColors';
    const fullTitle = `${title} | ${siteName}`;
    const defaultKeywords = 'color palette, web design, color testing, typography, UI design, web design';
    const defaultOgImage = '/og-image.jpg';
    const canonicalUrl = `https://testmycolors.com${location.pathname}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "TestMyColors",
        "description": "A tool for testing and visualizing color palettes in real-time",
        "url": "https://testmycolors.com",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <Helmet>
            <html lang="en" />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage || defaultOgImage} />
            <meta property="og:url" content={canonicalUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage || defaultOgImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO; 