import React, { createContext, useContext, useState } from 'react';

interface PanelsStateContextType {
    colorControlsOpen: boolean;
    colorBlindControlsOpen: boolean;
    setColorControlsOpen: (open: boolean) => void;
    setColorBlindControlsOpen: (open: boolean) => void;
}

const PanelsStateContext = createContext<PanelsStateContextType | undefined>(undefined);

export const PanelsStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colorControlsOpen, setColorControlsOpen] = useState(false);
    const [colorBlindControlsOpen, setColorBlindControlsOpen] = useState(false);

    return (
        <PanelsStateContext.Provider value={{
            colorControlsOpen,
            colorBlindControlsOpen,
            setColorControlsOpen,
            setColorBlindControlsOpen
        }}>
            {children}
        </PanelsStateContext.Provider>
    );
};

export const usePanelsState = () => {
    const context = useContext(PanelsStateContext);
    if (context === undefined) {
        throw new Error('usePanelsState must be used within a PanelsStateProvider');
    }
    return context;
};
