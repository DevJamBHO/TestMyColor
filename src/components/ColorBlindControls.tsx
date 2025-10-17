import React, { forwardRef, useImperativeHandle } from 'react';
import { useColorBlind, colorBlindTypes } from '../context/ColorBlindContext';
import CustomButton from './ui/CustomButton';
import FloatingPanel, { FloatingPanelRef } from './ui/FloatingPanel';

export interface ColorBlindControlsRef {
    open: () => void;
    close: () => void;
}

interface ColorBlindControlsProps {
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

const ColorBlindControls = forwardRef<ColorBlindControlsRef, ColorBlindControlsProps>(({
    isOpen,
    onOpenChange
}, ref) => {
    const { selectedType, setSelectedType } = useColorBlind();
    const panelRef = React.useRef<FloatingPanelRef>(null);

    useImperativeHandle(ref, () => ({
        open: () => panelRef.current?.open(),
        close: () => panelRef.current?.close()
    }));

    return (
        <FloatingPanel
            ref={panelRef}
            title="Color Blindness Simulator"
            icon="👁"
            position="top-right"
            closedMessage="Active simulation - Click 'Open' to configure"
            isActive={selectedType !== 'normal'}
            showPulse={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem',
                marginBottom: '0.75rem'
            }}>
                {colorBlindTypes.map((type) => (
                    <CustomButton
                        key={type.id}
                        label={type.label}
                        variant={selectedType === type.id ? 'filled' : 'outline'}
                        color={selectedType === type.id ? 'primary' : 'secondary'}
                        size="small"
                        onClick={() => setSelectedType(type.id)}
                        style={{
                            fontSize: '0.75rem',
                            padding: '0.4rem 0.6rem',
                            textAlign: 'center'
                        }}
                    />
                ))}
            </div>

            <div style={{
                fontSize: '0.8rem',
                color: '#666',
                padding: '0.5rem',
                background: '#f8f9fa',
                borderRadius: 6,
                border: '1px solid #e9ecef'
            }}>
                <strong>{colorBlindTypes.find(t => t.id === selectedType)?.label}</strong>
                <div style={{ marginTop: '0.25rem', fontSize: '0.75rem' }}>
                    {colorBlindTypes.find(t => t.id === selectedType)?.description}
                </div>
                {selectedType !== 'normal' && (
                    <div style={{
                        marginTop: '0.5rem',
                        padding: '0.5rem',
                        background: '#e3f2fd',
                        borderRadius: 4,
                        border: '1px solid #2196f3',
                        fontSize: '0.7rem'
                    }}>
                        <strong style={{ color: '#1976d2' }}>RGAA 3.2:</strong> Test color independence.
                        Ensure information is not conveyed by color alone.
                    </div>
                )}
            </div>
        </FloatingPanel>
    );
});

export default ColorBlindControls;
