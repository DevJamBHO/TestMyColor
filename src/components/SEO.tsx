import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    type?: 'website' | 'article';
    author?: string;
    publishDate?: string;
    modifiedDate?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    ogImage,
    type = 'website',
    author = 'test-my-color',
    publishDate,
    modifiedDate
}) => {
    const location = useLocation();
    const siteName = 'test-my-color';
    const fullTitle = `${title} | ${siteName}`;
    const defaultKeywords = 'color palette, web design, color testing, typography, UI design, web design, color contrast, accessibility, color harmony';
    const defaultOgImage = '/og-image.jpg';
    const canonicalUrl = `https://test-my-color.com${location.pathname}`;
    const currentDate = new Date().toISOString();
    const defaultImage = 'https://test-my-color.com/android-chrome-512x512.png';

    const structuredData = {
        "@context": "https://schema.org",
        "@type": type === 'article' ? 'Article' : 'WebApplication',
        "name": fullTitle,
        "description": description,
        "url": canonicalUrl,
        "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
                "@type": "ImageObject",
                "url": "https://test-my-color.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "image": ogImage || defaultOgImage,
        "datePublished": publishDate || currentDate,
        "dateModified": modifiedDate || currentDate,
        "author": {
            "@type": "Organization",
            "name": author
        },
        ...(type === 'article' ? {
            "articleSection": "Design Tools",
            "keywords": keywords || defaultKeywords
        } : {
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "inLanguage": ["fr", "en"]
        })
    };

    return (
        <Helmet>
            <html lang="fr" />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={ogImage || defaultOgImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:locale:alternate" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@test-my-color" />
            <meta name="twitter:creator" content="@test-my-color" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage || defaultImage} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#4a90e2" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content={siteName} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO; 