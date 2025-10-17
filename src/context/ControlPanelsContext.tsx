import React, { createContext, useContext, useRef } from 'react';
import { ControlPanelsRef } from '../components/ControlPanels';

interface ControlPanelsContextType {
    controlPanelsRef: React.RefObject<ControlPanelsRef | null>;
}

const ControlPanelsContext = createContext<ControlPanelsContextType | undefined>(undefined);

export const ControlPanelsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const controlPanelsRef = useRef<ControlPanelsRef | null>(null);

    return (
        <ControlPanelsContext.Provider value={{ controlPanelsRef }}>
            {children}
        </ControlPanelsContext.Provider>
    );
};

export const useControlPanels = () => {
    const context = useContext(ControlPanelsContext);
    if (context === undefined) {
        throw new Error('useControlPanels must be used within a ControlPanelsProvider');
    }
    return context;
};
