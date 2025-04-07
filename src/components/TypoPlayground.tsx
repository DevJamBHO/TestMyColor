import { useState } from 'react';
import { useColors } from '../context/ColorContext';
import { useFont } from '../context/FontContext';
import SectionTitle from './ui/SectionTitle';

const TypoPlayground = () => {
    const { palette } = useColors();
    const { font } = useFont();
    const [text, setText] = useState('Write your text here...');
    const [fontSize, setFontSize] = useState(16);
    const [lineHeight, setLineHeight] = useState(1.5);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [wordSpacing, setWordSpacing] = useState(0);
    const [textAlign, setTextAlign] = useState('left');

    return (
        <div style={{ marginBottom: '3rem' }}>
            <SectionTitle
                title="Typography Playground"
                description="Test your typography by adjusting the parameters below."
            />

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginTop: '2rem'
            }}>
                <div style={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `1px solid ${palette.text}20`
                }}>
                    <div style={{
                        fontSize: `${fontSize}px`,
                        lineHeight: lineHeight,
                        letterSpacing: `${letterSpacing}px`,
                        wordSpacing: `${wordSpacing}px`,
                        textAlign: textAlign as any,
                        fontFamily: font,
                        color: palette.text,
                        minHeight: '200px',
                        padding: '1rem',
                        border: `1px solid ${palette.text}20`,
                        borderRadius: '4px'
                    }}>
                        {text}
                    </div>
                </div>

                <div style={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `1px solid ${palette.text}20`
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                                Text
                            </label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: `1px solid ${palette.text}20`,
                                    minHeight: '100px'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                                Font Size: {fontSize}px
                            </label>
                            <input
                                type="range"
                                min="8"
                                max="72"
                                value={fontSize}
                                onChange={(e) => setFontSize(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                                Line Height: {lineHeight}
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="3"
                                step="0.1"
                                value={lineHeight}
                                onChange={(e) => setLineHeight(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                                Letter Spacing: {letterSpacing}px
                            </label>
                            <input
                                type="range"
                                min="-2"
                                max="10"
                                value={letterSpacing}
                                onChange={(e) => setLetterSpacing(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                                Word Spacing: {wordSpacing}px
                            </label>
                            <input
                                type="range"
                                min="-5"
                                max="20"
                                value={wordSpacing}
                                onChange={(e) => setWordSpacing(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                                Text Alignment
                            </label>
                            <select
                                value={textAlign}
                                onChange={(e) => setTextAlign(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: `1px solid ${palette.text}20`
                                }}
                            >
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                                <option value="justify">Justify</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypoPlayground;
