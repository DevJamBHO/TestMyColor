import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import ColorControls, { ColorControlsRef } from './ColorControls';
import ColorBlindControls, { ColorBlindControlsRef } from './ColorBlindControls';
import TypographyControls, { TypographyControlsRef } from './TypographyControls';
import { trackToolUsage, AnalyticsEvents } from '../utils/analytics';

export interface ControlPanelsRef {
    openColorControls: () => void;
    openColorBlindControls: () => void;
    openTypographyControls: () => void;
    closeColorControls: () => void;
    closeColorBlindControls: () => void;
    closeTypographyControls: () => void;
}

interface ControlPanelsProps {
    colorControlsOpen: boolean;
    colorBlindControlsOpen: boolean;
    typographyControlsOpen: boolean;
    setColorControlsOpen: (open: boolean) => void;
    setColorBlindControlsOpen: (open: boolean) => void;
    setTypographyControlsOpen: (open: boolean) => void;
}

const ControlPanels = forwardRef<ControlPanelsRef, ControlPanelsProps>(({
    colorControlsOpen,
    colorBlindControlsOpen,
    typographyControlsOpen,
    setColorControlsOpen,
    setColorBlindControlsOpen,
    setTypographyControlsOpen
}, ref) => {
    const colorControlsRef = useRef<ColorControlsRef>(null);
    const colorBlindControlsRef = useRef<ColorBlindControlsRef>(null);
    const typographyControlsRef = useRef<TypographyControlsRef>(null);

    // Fonction pour fermer tous les autres panels quand on en ouvre un
    const openColorControls = () => {
        setColorBlindControlsOpen(false);
        setTypographyControlsOpen(false);
        colorControlsRef.current?.open();
        trackToolUsage('Color Controls', 'Opened', { panel: 'Floating' });
    };

    const openColorBlindControls = () => {
        setColorControlsOpen(false);
        setTypographyControlsOpen(false);
        colorBlindControlsRef.current?.open();
        trackToolUsage('Colorblind Simulation', 'Opened', { panel: 'Floating' });
    };

    const openTypographyControls = () => {
        setColorControlsOpen(false);
        setColorBlindControlsOpen(false);
        typographyControlsRef.current?.open();
        trackToolUsage('Typography Controls', 'Opened', { panel: 'Floating' });
    };

    // Fonctions pour gérer l'ouverture avec fermeture automatique des autres
    const handleColorControlsOpen = (isOpen: boolean) => {
        if (isOpen) {
            setColorBlindControlsOpen(false);
            setTypographyControlsOpen(false);
            trackToolUsage('Color Controls', 'Opened', { panel: 'Floating' });
        } else {
            trackToolUsage('Color Controls', 'Closed', { panel: 'Floating' });
        }
        setColorControlsOpen(isOpen);
    };

    const handleColorBlindControlsOpen = (isOpen: boolean) => {
        if (isOpen) {
            setColorControlsOpen(false);
            setTypographyControlsOpen(false);
            trackToolUsage('Colorblind Simulation', 'Opened', { panel: 'Floating' });
        } else {
            trackToolUsage('Colorblind Simulation', 'Closed', { panel: 'Floating' });
        }
        setColorBlindControlsOpen(isOpen);
    };

    const handleTypographyControlsOpen = (isOpen: boolean) => {
        if (isOpen) {
            setColorControlsOpen(false);
            setColorBlindControlsOpen(false);
            trackToolUsage('Typography Controls', 'Opened', { panel: 'Floating' });
        } else {
            trackToolUsage('Typography Controls', 'Closed', { panel: 'Floating' });
        }
        setTypographyControlsOpen(isOpen);
    };

    // Fermer tous les panels en cliquant dehors
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const controlPanels = document.querySelector('.control-panels');

            if (controlPanels && !controlPanels.contains(target)) {
                setColorControlsOpen(false);
                setColorBlindControlsOpen(false);
                setTypographyControlsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setColorControlsOpen, setColorBlindControlsOpen, setTypographyControlsOpen]);

    useImperativeHandle(ref, () => ({
        openColorControls,
        openColorBlindControls,
        openTypographyControls,
        closeColorControls: () => colorControlsRef.current?.close(),
        closeColorBlindControls: () => colorBlindControlsRef.current?.close(),
        closeTypographyControls: () => typographyControlsRef.current?.close()
    }));

    return (
        <div
            style={{
                position: 'fixed',
                top: '80px',
                right: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                zIndex: 1000
            }}
            className="control-panels"
        >
            <ColorControls
                ref={colorControlsRef}
                isOpen={colorControlsOpen}
                onOpenChange={handleColorControlsOpen}
            />
            <ColorBlindControls
                ref={colorBlindControlsRef}
                isOpen={colorBlindControlsOpen}
                onOpenChange={handleColorBlindControlsOpen}
            />
            <TypographyControls
                ref={typographyControlsRef}
                isOpen={typographyControlsOpen}
                onOpenChange={handleTypographyControlsOpen}
            />
        </div>
    );
});

export default ControlPanels;
