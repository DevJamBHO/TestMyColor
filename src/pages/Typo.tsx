import FontSelector from '../components/FontSelector';
import TypographyShowcase from '../components/TypographyShowcase';
import TypoPlayground from '../components/TypoPlayground';
import PageWrapper from '../components/ui/PageWrapper';
import Separator from '../components/ui/Separator';
import Header from '../components/ui/Header';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';

const Typo = () => {
    const { palette } = useColors();
    const { font } = useFont();

    return (
        <section style={{
            backgroundColor: palette.background, color: palette.text, minHeight: '100vh',
            fontFamily: font,
        }}>
            <Header />
            <PageWrapper>
                <FontSelector />
                <Separator />
                <TypographyShowcase />
                <Separator />
                <TypoPlayground />
            </PageWrapper>
        </section>
    );
};

export default Typo;
