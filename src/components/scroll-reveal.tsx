'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

export default function ScrollReveal({ children, width = '100%', delay = 0 }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
}
