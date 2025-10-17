import React from 'react';
import ControlPanels from './ControlPanels';
import { useControlPanels } from '../context/ControlPanelsContext';
import { usePanelsState } from '../context/PanelsStateContext';

const ControlPanelsWrapper: React.FC = () => {
    const { controlPanelsRef } = useControlPanels();
    const {
        colorControlsOpen,
        colorBlindControlsOpen,
        setColorControlsOpen,
        setColorBlindControlsOpen
    } = usePanelsState();

    return (
        <ControlPanels
            ref={controlPanelsRef}
            colorControlsOpen={colorControlsOpen}
            colorBlindControlsOpen={colorBlindControlsOpen}
            setColorControlsOpen={setColorControlsOpen}
            setColorBlindControlsOpen={setColorBlindControlsOpen}
        />
    );
};

export default ControlPanelsWrapper;
