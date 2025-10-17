import React from 'react';
import ControlPanels from './ControlPanels';
import { useControlPanels } from '../context/ControlPanelsContext';
import { usePanelsState } from '../context/PanelsStateContext';

const ControlPanelsWrapper: React.FC = () => {
    const { controlPanelsRef } = useControlPanels();
    const {
        colorControlsOpen,
        colorBlindControlsOpen,
        typographyControlsOpen,
        setColorControlsOpen,
        setColorBlindControlsOpen,
        setTypographyControlsOpen
    } = usePanelsState();

    return (
        <ControlPanels
            ref={controlPanelsRef}
            colorControlsOpen={colorControlsOpen}
            colorBlindControlsOpen={colorBlindControlsOpen}
            typographyControlsOpen={typographyControlsOpen}
            setColorControlsOpen={setColorControlsOpen}
            setColorBlindControlsOpen={setColorBlindControlsOpen}
            setTypographyControlsOpen={setTypographyControlsOpen}
        />
    );
};

export default ControlPanelsWrapper;
