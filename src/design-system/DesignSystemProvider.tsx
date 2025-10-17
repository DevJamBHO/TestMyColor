import React from 'react';
import { ColorProvider } from '../context/ColorContext';
import { FontProvider } from '../context/FontContext';
import { ColorBlindProvider } from '../context/ColorBlindContext';

interface DesignSystemProviderProps {
    children: React.ReactNode;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ children }) => {
    return (
        <ColorProvider>
            <FontProvider>
                <ColorBlindProvider>
                    {children}
                </ColorBlindProvider>
            </FontProvider>
        </ColorProvider>
    );
};

export default DesignSystemProvider;
