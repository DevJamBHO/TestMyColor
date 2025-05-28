// Fonction pour convertir une couleur hexadécimale en RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 0, g: 0, b: 0 };
};

// Fonction pour calculer la luminance relative
const calculateLuminance = (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map((c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

// Fonction pour calculer le ratio de contraste
export const calculateContrastRatio = (color1: string, color2: string): number => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    const l1 = calculateLuminance(rgb1.r, rgb1.g, rgb1.b);
    const l2 = calculateLuminance(rgb2.r, rgb2.g, rgb2.b);

    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);

    return (lighter + 0.05) / (darker + 0.05);
};

// Fonction pour déterminer le niveau de conformité WCAG
export const getWCAGCompliance = (ratio: number, isLargeText: boolean = false): string => {
    if (ratio >= 7) return 'AAA';
    if (ratio >= 4.5) return 'AA';
    if (isLargeText && ratio >= 3) return 'AA (Large Text)';
    return 'Fail';
};

// Fonction pour suggérer une couleur de texte accessible (noir ou blanc)
export const suggestAccessibleTextColor = (backgroundColor: string, minRatio: number = 4.5): { color: string, ratio: number, compliance: string } => {
    const blackRatio = calculateContrastRatio(backgroundColor, '#000000');
    const whiteRatio = calculateContrastRatio(backgroundColor, '#FFFFFF');
    if (blackRatio >= minRatio && blackRatio >= whiteRatio) {
        return { color: '#000000', ratio: blackRatio, compliance: getWCAGCompliance(blackRatio) };
    }
    if (whiteRatio >= minRatio) {
        return { color: '#FFFFFF', ratio: whiteRatio, compliance: getWCAGCompliance(whiteRatio) };
    }
    // Si aucun ne passe, retourner la meilleure option
    if (blackRatio > whiteRatio) {
        return { color: '#000000', ratio: blackRatio, compliance: getWCAGCompliance(blackRatio) };
    }
    return { color: '#FFFFFF', ratio: whiteRatio, compliance: getWCAGCompliance(whiteRatio) };
};

// Fonction pour suggérer une couleur de fond accessible (noir ou blanc)
export const suggestAccessibleBackgroundColor = (textColor: string, minRatio: number = 4.5): { color: string, ratio: number, compliance: string } => {
    const blackRatio = calculateContrastRatio('#000000', textColor);
    const whiteRatio = calculateContrastRatio('#FFFFFF', textColor);
    if (blackRatio >= minRatio && blackRatio >= whiteRatio) {
        return { color: '#000000', ratio: blackRatio, compliance: getWCAGCompliance(blackRatio) };
    }
    if (whiteRatio >= minRatio) {
        return { color: '#FFFFFF', ratio: whiteRatio, compliance: getWCAGCompliance(whiteRatio) };
    }
    // Si aucun ne passe, retourner la meilleure option
    if (blackRatio > whiteRatio) {
        return { color: '#000000', ratio: blackRatio, compliance: getWCAGCompliance(blackRatio) };
    }
    return { color: '#FFFFFF', ratio: whiteRatio, compliance: getWCAGCompliance(whiteRatio) };
};

// Fonction utilitaire pour convertir hex -> HSL
function hexToHsl(hex: string): { h: number; s: number; l: number } {
    const { r, g, b } = hexToRgb(hex);
    const rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
            case gNorm: h = (bNorm - rNorm) / d + 2; break;
            case bNorm: h = (rNorm - gNorm) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// Fonction utilitaire pour convertir HSL -> hex
function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
        const color = l - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1));
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

// Suggestion intelligente : ajuste la luminosité pour trouver la couleur accessible la plus proche
export function suggestClosestAccessibleColor(baseColor: string, backgroundColor: string, minRatio: number = 4.5): { color: string, ratio: number, compliance: string } {
    let { h, s, l } = hexToHsl(baseColor);
    let best = { color: baseColor, ratio: calculateContrastRatio(baseColor, backgroundColor), compliance: getWCAGCompliance(calculateContrastRatio(baseColor, backgroundColor)) };
    // On teste en rendant plus clair puis plus foncé
    for (let delta = 0; delta <= 100; delta += 1) {
        // Plus clair
        let lUp = Math.min(100, l + delta);
        let colorUp = hslToHex(h, s, lUp);
        let ratioUp = calculateContrastRatio(colorUp, backgroundColor);
        if (ratioUp >= minRatio) {
            return { color: colorUp, ratio: ratioUp, compliance: getWCAGCompliance(ratioUp) };
        }
        // Plus foncé
        let lDown = Math.max(0, l - delta);
        let colorDown = hslToHex(h, s, lDown);
        let ratioDown = calculateContrastRatio(colorDown, backgroundColor);
        if (ratioDown >= minRatio) {
            return { color: colorDown, ratio: ratioDown, compliance: getWCAGCompliance(ratioDown) };
        }
    }
    // Si rien ne passe, retourne la meilleure trouvée
    return best;
}

// Suggestion multi-blocs : trouve la couleur la plus conforme sur plusieurs fonds
export function suggestBestMultiContrastColor(baseColor: string, backgrounds: string[]) {
    let { h, s, l } = hexToHsl(baseColor);
    let best = {
        color: baseColor,
        aaa: 0,
        aa: 0,
        fail: backgrounds.length,
        details: backgrounds.map(bg => ({ bg, ratio: calculateContrastRatio(baseColor, bg), compliance: getWCAGCompliance(calculateContrastRatio(baseColor, bg)) }))
    };
    // On teste en rendant plus clair puis plus foncé
    for (let delta = 0; delta <= 100; delta += 1) {
        for (let sign of [1, -1]) {
            let lTest = Math.max(0, Math.min(100, l + sign * delta));
            let colorTest = hslToHex(h, s, lTest);
            let aaa = 0, aa = 0, fail = 0, details = [];
            for (let bg of backgrounds) {
                const ratio = calculateContrastRatio(colorTest, bg);
                const compliance = getWCAGCompliance(ratio);
                details.push({ bg, ratio, compliance });
                if (compliance === 'AAA') aaa++;
                else if (compliance === 'AA') aa++;
                else fail++;
            }
            // On privilégie le max de AAA, puis AA, puis le moins de fail
            if (
                aaa > best.aaa ||
                (aaa === best.aaa && aa > best.aa) ||
                (aaa === best.aaa && aa === best.aa && fail < best.fail)
            ) {
                best = { color: colorTest, aaa, aa, fail, details };
            }
            // Si on a trouvé une couleur AAA partout, on arrête
            if (best.aaa === backgrounds.length) return best;
        }
    }
    return best;
} 