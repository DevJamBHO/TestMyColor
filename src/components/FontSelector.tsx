import { useEffect, useState } from 'react';
import { useFont } from '../context/FontContext';
import SectionTitle from './ui/SectionTitle';

const googleFonts = [
    'Inter',
    'Roboto',
    'Poppins',
    'Playfair Display',
    'Space Mono',
    'DM Sans',
];

const FontSelector = () => {
    const [customFont, setCustomFont] = useState<string | null>(null);
    const { font, setFont } = useFont();

    const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const font = e.target.value;
        loadGoogleFont(font);
        setFont(`'${font}', sans-serif`);
    };

    const loadGoogleFont = (font: string) => {
        const linkId = `google-font-${font.replace(/\s+/g, '-')}`;
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@400;700&display=swap`;
            document.head.appendChild(link);
        }
    };

    const handleCustomFontUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const fontData = event.target?.result;
            const fontName = file.name.split('.')[0].replace(/[^a-zA-Z0-9]/g, '');

            const style = document.createElement('style');
            style.innerHTML = `
                @font-face {
                    font-family: '${fontName}';
                    src: url(${fontData});
                }
            `;
            document.head.appendChild(style);
            setCustomFont(fontName);
            setFont(`'${fontName}', sans-serif`);
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        // Load the current font
        const currentFont = font.replace(/'/g, '').split(',')[0].trim();
        loadGoogleFont(currentFont);
    }, [font]);

    return (
        <section>
            <SectionTitle
                title="Custom Typography"
                description="Test standard fonts or import your own file (.ttf, .woff...) to see their rendering with your graphic charter."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 480 }}>
                <div>
                    <label htmlFor="font-select" style={{ fontWeight: 600 }}>
                        Choose a font:
                    </label>
                    <select
                        id="font-select"
                        onChange={handleFontChange}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            marginTop: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                        value={font.replace(/'/g, '').split(',')[0].trim()}
                    >
                        {googleFonts.map((font) => (
                            <option key={font} value={font}>
                                {font}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="custom-font-upload" style={{ fontWeight: 600 }}>
                        Import a font:
                    </label>
                    <input
                        id="custom-font-upload"
                        type="file"
                        accept=".woff,.woff2,.ttf,.otf"
                        onChange={handleCustomFontUpload}
                        style={{ marginTop: '0.5rem' }}
                    />
                    {customFont && (
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            ✅ Custom font applied: <strong>{customFont}</strong>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FontSelector;
