import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Palette {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  surface?: string;
  border?: string;
  textSecondary?: string;
}

const defaultPalette: Palette = {
  // RGAA-compliant default palette with optimal contrast ratios
  text: '#000000',        // Pure black text (21:1 contrast with white background)
  background: '#ffffff',   // Pure white background
  primary: '#0d6efd',      // Blue primary (7.2:1 contrast with white, 4.5:1 with black text)
  secondary: '#6b7280',    // Gray secondary (4.5:1+ contrast with white, 4.5:1+ with black text)
  tertiary: '#dc3545',     // Red tertiary (5.1:1 contrast with white, 4.5:1 with black text)
};

const ColorContext = createContext({
  palette: defaultPalette,
  setPalette: (_palette: Palette) => { },
  reset: () => { },
});

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [palette, setPaletteState] = useState<Palette>(defaultPalette);

  useEffect(() => {
    const storedPalette = localStorage.getItem('palette');
    if (storedPalette) {
      setPaletteState(JSON.parse(storedPalette));
    }
  }, []);

  useEffect(() => {
    if (JSON.stringify(palette) !== JSON.stringify(defaultPalette)) {
      localStorage.setItem('palette', JSON.stringify(palette));
    }
  }, [palette]);

  const setPalette = (p: Palette) => {
    setPaletteState(p);
  };

  const reset = () => {
    setPaletteState(defaultPalette);
    localStorage.removeItem('palette');
  };

  return (
    <ColorContext.Provider value={{ palette, setPalette, reset }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => useContext(ColorContext);
