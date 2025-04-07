import React, { createContext, useContext, useState, useEffect } from 'react';

interface FontContextType {
    font: string;
    setFont: (font: string) => void;
    resetFontPreferences: () => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

// Singleton pour gérer l'état global de la police
class FontManager {
    private static instance: FontManager;
    private listeners: Set<(font: string) => void> = new Set();
    private currentFont: string;

    private constructor() {
        const savedFont = localStorage.getItem('font');
        this.currentFont = savedFont || "'Inter', sans-serif";
    }

    public static getInstance(): FontManager {
        if (!FontManager.instance) {
            FontManager.instance = new FontManager();
        }
        return FontManager.instance;
    }

    public getFont(): string {
        return this.currentFont;
    }

    public setFont(font: string): void {
        this.currentFont = font;
        if (font === "'Inter', sans-serif") {
            localStorage.removeItem('font');
        } else {
            localStorage.setItem('font', font);
        }
        this.notifyListeners();
    }

    public subscribe(listener: (font: string) => void): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private notifyListeners(): void {
        this.listeners.forEach(listener => listener(this.currentFont));
    }
}

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const fontManager = FontManager.getInstance();
    const [font, setFontState] = useState<string>(fontManager.getFont());

    useEffect(() => {
        return fontManager.subscribe(newFont => {
            setFontState(newFont);
        });
    }, []);

    const setFont = (newFont: string) => {
        fontManager.setFont(newFont);
    };

    const resetFontPreferences = () => {
        fontManager.setFont("'Inter', sans-serif");
    };

    return (
        <FontContext.Provider value={{ font, setFont, resetFontPreferences }}>
            {children}
        </FontContext.Provider>
    );
};

export const useFont = () => {
    const context = useContext(FontContext);
    if (context === undefined) {
        throw new Error('useFont must be used within a FontProvider');
    }
    return context;
};
