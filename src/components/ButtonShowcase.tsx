import CustomButton from './ui/CustomButton';
import SectionTitle from './ui/SectionTitle';

const ButtonShowcase = () => {
  return (
    <section>
      <SectionTitle
        title="Buttons"
        description="Test all possible button variants: filled, outline, ghost, with icon, disabled, small sizes... useful for every situation."
      />

      <h4 style={{ margin: '1.5rem 0 0.5rem' }}>Classic Buttons</h4>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <CustomButton label="Primary" variant="filled" color="primary" />
        <CustomButton label="Secondary" variant="filled" color="secondary" />
        <CustomButton label="Tertiary" variant="filled" color="tertiary" />
        <CustomButton label="Disabled" variant="filled" disabled />
      </div>

      <h4 style={{ margin: '2rem 0 0.5rem' }}>Outline & Ghost</h4>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <CustomButton label="Primary Outline" variant="outline" color="primary" />
        <CustomButton label="Secondary Outline" variant="outline" color="secondary" />
        <CustomButton label="Primary Ghost" variant="ghost" color="primary" />
        <CustomButton label="Tertiary Ghost" variant="ghost" color="tertiary" />
      </div>

      <h4 style={{ margin: '2rem 0 0.5rem' }}>Sizes</h4>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <CustomButton label="Small" variant="filled" color="primary" size="small" />
        <CustomButton label="Default" variant="filled" color="primary" />
        <CustomButton label="Large" variant="filled" color="primary" size="large" />
      </div>

      <h4 style={{ margin: '2rem 0 0.5rem' }}>Examples with icon (coming soon)</h4>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <CustomButton label="⬇ Download" variant="filled" color="secondary" />
        <CustomButton label="⚠️ Delete" variant="outline" color="tertiary" />
      </div>
    </section>
  );
};

export default ButtonShowcase;
