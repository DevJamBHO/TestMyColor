import ColorInputs from '../components/ColorInputs';
import PaletteGrid from '../components/PaletteGrid';
import ContrastPreview from '../components/ContrastPreview';
import ButtonShowcase from '../components/ButtonShowcase';
import PageWrapper from '../components/ui/PageWrapper';
import Header from '../components/ui/Header';
import { useColors } from '../context/ColorContext';
import Separator from '../components/ui/Separator';
import { useFont } from '../context/FontContext';

const Color = () => {
    const { palette } = useColors();
    const { font } = useFont();
    return (
        <div style={{
            backgroundColor: palette.background,
            color: palette.text,
            minHeight: '100vh',
            fontFamily: font,
            transition: 'font-family 0.3s ease'
        }}>
            <Header />
            <PageWrapper>
                <ColorInputs />
                <Separator />
                <PaletteGrid />
                <Separator />
                <ContrastPreview />
                <Separator />
                <ButtonShowcase />
            </PageWrapper>
        </div>
    );
};

export default Color;