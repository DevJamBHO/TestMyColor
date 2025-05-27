import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Palette {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
}

const defaultPalette: Palette = {
  text: '#2E2E2E',
  background: '#F5F5F5',
  primary: '#4A90E2',
  secondary: '#7B8C99',
  tertiary: '#F8C471',
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
