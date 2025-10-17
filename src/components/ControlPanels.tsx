import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import ColorControls, { ColorControlsRef } from './ColorControls';
import ColorBlindControls, { ColorBlindControlsRef } from './ColorBlindControls';

export interface ControlPanelsRef {
    openColorControls: () => void;
    openColorBlindControls: () => void;
    closeColorControls: () => void;
    closeColorBlindControls: () => void;
}

interface ControlPanelsProps {
    colorControlsOpen: boolean;
    colorBlindControlsOpen: boolean;
    setColorControlsOpen: (open: boolean) => void;
    setColorBlindControlsOpen: (open: boolean) => void;
}

const ControlPanels = forwardRef<ControlPanelsRef, ControlPanelsProps>(({
    colorControlsOpen,
    colorBlindControlsOpen,
    setColorControlsOpen,
    setColorBlindControlsOpen
}, ref) => {
    const colorControlsRef = useRef<ColorControlsRef>(null);
    const colorBlindControlsRef = useRef<ColorBlindControlsRef>(null);

    useImperativeHandle(ref, () => ({
        openColorControls: () => colorControlsRef.current?.open(),
        openColorBlindControls: () => colorBlindControlsRef.current?.open(),
        closeColorControls: () => colorControlsRef.current?.close(),
        closeColorBlindControls: () => colorBlindControlsRef.current?.close()
    }));

    return (
        <div style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 1000
        }}>
            <ColorControls
                ref={colorControlsRef}
                isOpen={colorControlsOpen}
                onOpenChange={setColorControlsOpen}
            />
            <ColorBlindControls
                ref={colorBlindControlsRef}
                isOpen={colorBlindControlsOpen}
                onOpenChange={setColorBlindControlsOpen}
            />
        </div>
    );
});

export default ControlPanels;
