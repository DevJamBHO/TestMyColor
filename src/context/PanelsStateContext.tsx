import React, { createContext, useContext, useState } from 'react';

interface PanelsStateContextType {
    colorControlsOpen: boolean;
    colorBlindControlsOpen: boolean;
    typographyControlsOpen: boolean;
    isSidebarVisible: boolean;
    setColorControlsOpen: (open: boolean) => void;
    setColorBlindControlsOpen: (open: boolean) => void;
    setTypographyControlsOpen: (open: boolean) => void;
    setIsSidebarVisible: (visible: boolean) => void;
}

const PanelsStateContext = createContext<PanelsStateContextType | undefined>(undefined);

export const PanelsStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colorControlsOpen, setColorControlsOpen] = useState(false);
    const [colorBlindControlsOpen, setColorBlindControlsOpen] = useState(false);
    const [typographyControlsOpen, setTypographyControlsOpen] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    return (
        <PanelsStateContext.Provider value={{
            colorControlsOpen,
            colorBlindControlsOpen,
            typographyControlsOpen,
            isSidebarVisible,
            setColorControlsOpen,
            setColorBlindControlsOpen,
            setTypographyControlsOpen,
            setIsSidebarVisible
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
