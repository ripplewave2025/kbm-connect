'use client';

import { motion } from 'framer-motion';

interface GlowingTextProps {
    text: string;
    className?: string;
}

export default function GlowingText({ text, className = '' }: GlowingTextProps) {
    // Split text into words to keep structure, then characters for fine control if needed.
    // For a smoother "flashlight" feel on body text, word-level is usually better and less DOM-heavy.
    const words = text.split(' ');

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block whitespace-pre">
                    {word.split('').map((char, j) => (
                        <motion.span
                            key={`${i}-${j}`}
                            className="inline-block transition-colors duration-300"
                            whileHover={{
                                color: '#facc15', // yellow-400
                                textShadow: '0 0 8px rgba(250, 204, 21, 0.6), 0 0 2px rgba(250, 204, 21, 0.4)',
                                scale: 1.1,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {/* Add space after word */}
                    {' '}
                </span>
            ))}
        </span>
    );
}
