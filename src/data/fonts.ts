export interface FontFamily {
    name: string;
    category: 'sans-serif' | 'serif' | 'monospace' | 'display' | 'handwriting';
    source: 'google' | 'system' | 'custom';
    description?: string;
    weights?: number[];
    styles?: string[];
}

export const FONT_CATEGORIES = {
    'sans-serif': 'Sans Serif',
    'serif': 'Serif',
    'monospace': 'Monospace',
    'display': 'Display',
    'handwriting': 'Handwriting'
} as const;

// Polices système communes
export const SYSTEM_FONTS: FontFamily[] = [
    {
        name: 'Arial',
        category: 'sans-serif',
        source: 'system',
        description: 'Classic sans-serif font, widely supported'
    },
    {
        name: 'Helvetica',
        category: 'sans-serif',
        source: 'system',
        description: 'Clean, modern sans-serif'
    },
    {
        name: 'Times New Roman',
        category: 'serif',
        source: 'system',
        description: 'Traditional serif font for print'
    },
    {
        name: 'Georgia',
        category: 'serif',
        source: 'system',
        description: 'Web-optimized serif font'
    },
    {
        name: 'Verdana',
        category: 'sans-serif',
        source: 'system',
        description: 'Designed for screen readability'
    },
    {
        name: 'Tahoma',
        category: 'sans-serif',
        source: 'system',
        description: 'Compact sans-serif font'
    },
    {
        name: 'Trebuchet MS',
        category: 'sans-serif',
        source: 'system',
        description: 'Humanist sans-serif'
    },
    {
        name: 'Courier New',
        category: 'monospace',
        source: 'system',
        description: 'Monospace font for code'
    },
    {
        name: 'Impact',
        category: 'display',
        source: 'system',
        description: 'Bold display font'
    },
    {
        name: 'Comic Sans MS',
        category: 'handwriting',
        source: 'system',
        description: 'Casual handwriting font'
    }
];

// Polices Google Fonts populaires
export const GOOGLE_FONTS: FontFamily[] = [
    // Sans-serif
    {
        name: 'Inter',
        category: 'sans-serif',
        source: 'google',
        description: 'Modern, highly readable sans-serif',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        name: 'Roboto',
        category: 'sans-serif',
        source: 'google',
        description: 'Google\'s signature font',
        weights: [100, 300, 400, 500, 700, 900]
    },
    {
        name: 'Open Sans',
        category: 'sans-serif',
        source: 'google',
        description: 'Humanist sans-serif, very readable',
        weights: [300, 400, 600, 700, 800]
    },
    {
        name: 'Lato',
        category: 'sans-serif',
        source: 'google',
        description: 'Semi-rounded sans-serif',
        weights: [100, 300, 400, 700, 900]
    },
    {
        name: 'Montserrat',
        category: 'sans-serif',
        source: 'google',
        description: 'Geometric sans-serif',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        name: 'Source Sans Pro',
        category: 'sans-serif',
        source: 'google',
        description: 'Adobe\'s open source font',
        weights: [200, 300, 400, 600, 700, 900]
    },
    {
        name: 'Poppins',
        category: 'sans-serif',
        source: 'google',
        description: 'Geometric sans-serif with rounded features',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        name: 'Nunito',
        category: 'sans-serif',
        source: 'google',
        description: 'Rounded sans-serif',
        weights: [200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        name: 'Ubuntu',
        category: 'sans-serif',
        source: 'google',
        description: 'Humanist sans-serif',
        weights: [300, 400, 500, 700]
    },
    {
        name: 'Fira Sans',
        category: 'sans-serif',
        source: 'google',
        description: 'Mozilla\'s font family',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        name: 'DM Sans',
        category: 'sans-serif',
        source: 'google',
        description: 'Low-contrast sans-serif',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        name: 'Work Sans',
        category: 'sans-serif',
        source: 'google',
        description: 'Optimized for UI',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },

    // Serif
    {
        name: 'Playfair Display',
        category: 'serif',
        source: 'google',
        description: 'Elegant serif for headings',
        weights: [400, 500, 600, 700, 800, 900]
    },
    {
        name: 'Lora',
        category: 'serif',
        source: 'google',
        description: 'Well-balanced serif',
        weights: [400, 500, 600, 700]
    },
    {
        name: 'Merriweather',
        category: 'serif',
        source: 'google',
        description: 'Designed for reading',
        weights: [300, 400, 700, 900]
    },
    {
        name: 'Crimson Text',
        category: 'serif',
        source: 'google',
        description: 'Book typeface',
        weights: [400, 600, 700]
    },
    {
        name: 'Libre Baskerville',
        category: 'serif',
        source: 'google',
        description: 'Web font optimized serif',
        weights: [400, 700]
    },
    {
        name: 'PT Serif',
        category: 'serif',
        source: 'google',
        description: 'Universal serif',
        weights: [400, 700]
    },

    // Monospace
    {
        name: 'Space Mono',
        category: 'monospace',
        source: 'google',
        description: 'Monospace for code',
        weights: [400, 700]
    },
    {
        name: 'Fira Code',
        category: 'monospace',
        source: 'google',
        description: 'Monospace with programming ligatures',
        weights: [300, 400, 500, 600, 700]
    },
    {
        name: 'Source Code Pro',
        category: 'monospace',
        source: 'google',
        description: 'Adobe\'s monospace font',
        weights: [200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        name: 'JetBrains Mono',
        category: 'monospace',
        source: 'google',
        description: 'Designed for developers',
        weights: [100, 200, 300, 400, 500, 600, 700, 800]
    },
    {
        name: 'Roboto Mono',
        category: 'monospace',
        source: 'google',
        description: 'Monospace companion to Roboto',
        weights: [100, 300, 400, 500, 700]
    },

    // Display
    {
        name: 'Oswald',
        category: 'display',
        source: 'google',
        description: 'Condensed sans-serif for headlines',
        weights: [200, 300, 400, 500, 600, 700]
    },
    {
        name: 'Bebas Neue',
        category: 'display',
        source: 'google',
        description: 'Condensed display font',
        weights: [400]
    },
    {
        name: 'Anton',
        category: 'display',
        source: 'google',
        description: 'Bold display font',
        weights: [400]
    },
    {
        name: 'Righteous',
        category: 'display',
        source: 'google',
        description: 'Retro display font',
        weights: [400]
    },
    {
        name: 'Fredoka One',
        category: 'display',
        source: 'google',
        description: 'Rounded display font',
        weights: [400]
    },

    // Handwriting
    {
        name: 'Dancing Script',
        category: 'handwriting',
        source: 'google',
        description: 'Elegant handwriting',
        weights: [400, 500, 600, 700]
    },
    {
        name: 'Pacifico',
        category: 'handwriting',
        source: 'google',
        description: 'Brush script',
        weights: [400]
    },
    {
        name: 'Caveat',
        category: 'handwriting',
        source: 'google',
        description: 'Natural handwriting',
        weights: [400, 500, 600, 700]
    },
    {
        name: 'Kalam',
        category: 'handwriting',
        source: 'google',
        description: 'Indian handwriting font',
        weights: [300, 400, 700]
    },
    {
        name: 'Indie Flower',
        category: 'handwriting',
        source: 'google',
        description: 'Casual handwriting',
        weights: [400]
    }
];

// Toutes les polices combinées
export const ALL_FONTS: FontFamily[] = [...SYSTEM_FONTS, ...GOOGLE_FONTS];

// Polices par catégorie
export const FONTS_BY_CATEGORY = ALL_FONTS.reduce((acc, font) => {
    if (!acc[font.category]) {
        acc[font.category] = [];
    }
    acc[font.category].push(font);
    return acc;
}, {} as Record<string, FontFamily[]>);

// Polices populaires (top 20)
export const POPULAR_FONTS = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat',
    'Source Sans Pro', 'Poppins', 'Nunito', 'Ubuntu', 'Fira Sans',
    'DM Sans', 'Work Sans', 'Playfair Display', 'Lora', 'Merriweather',
    'Space Mono', 'Fira Code', 'Source Code Pro', 'Oswald', 'Dancing Script'
];

// Polices recommandées pour différents usages
export const RECOMMENDED_FONTS = {
    'web-ui': ['Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat'],
    'print': ['Times New Roman', 'Georgia', 'Merriweather', 'Crimson Text'],
    'code': ['Fira Code', 'Source Code Pro', 'JetBrains Mono', 'Space Mono'],
    'headlines': ['Oswald', 'Bebas Neue', 'Anton', 'Playfair Display'],
    'body-text': ['Inter', 'Source Sans Pro', 'Lora', 'Merriweather'],
    'creative': ['Dancing Script', 'Pacifico', 'Caveat', 'Righteous']
} as const;
