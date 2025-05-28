import React from 'react';
import { useColors } from '../context/ColorContext';
import SectionTitle from './ui/SectionTitle';
import { trackPaletteEvent, AnalyticsEvents } from '../utils/analytics';

const ColorInputs = () => {
  const { palette, setPalette } = useColors();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const previousValue = palette[name as keyof typeof palette];
    setPalette({ ...palette, [name]: value });

    trackPaletteEvent(AnalyticsEvents.COLOR_CHANGED, undefined, {
      colorType: name,
      previousColor: previousValue,
      newColor: value
    });
  };

  return (
    <section style={{ fontFamily: 'inherit' }}>
      <SectionTitle
        title="Test Your Palette"
        description="Modify colors in real-time and visualize their impact on your entire interface."
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1.5rem',
        fontFamily: 'inherit'
      }}>
        {Object.entries(palette).map(([key, value]) => (
          <div
            key={key}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.5rem',
              fontFamily: 'inherit'
            }}
          >
            <label
              htmlFor={key}
              style={{
                fontWeight: 600,
                fontSize: '0.95rem',
                textTransform: 'capitalize',
                color: 'inherit',
                fontFamily: 'inherit'
              }}
            >
              {key}
            </label>
            <input
              type="color"
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              style={{
                width: '100%',
                height: '3rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                background: 'transparent',
                fontFamily: 'inherit'
              }}
            />
            <code style={{ fontSize: '0.85rem', opacity: 0.75, fontFamily: 'inherit' }}>{value}</code>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorInputs;
