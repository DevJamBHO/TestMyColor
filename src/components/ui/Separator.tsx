
import { useColors } from '../../context/ColorContext';

const Separator = () => {
    const { palette } = useColors();

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '3rem 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: `${palette.text}30` }} />
            <div
                style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: palette.secondary,
                }}
            />
            <div style={{ flex: 1, height: '1px', backgroundColor: `${palette.text}30` }} />
        </div>
    );
};

export default Separator;