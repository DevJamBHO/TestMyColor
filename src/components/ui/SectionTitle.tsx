interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div style={{ marginBottom: '1.5rem', fontFamily: 'inherit' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontFamily: 'inherit' }}>{title}</h2>
      {description && <p style={{ lineHeight: 1.5, fontFamily: 'inherit' }}>{description}</p>}
    </div>
  );
};

export default SectionTitle;