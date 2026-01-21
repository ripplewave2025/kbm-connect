'use client';

import { useLanguage } from '@/contexts/language-context';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'ne', label: 'नेपाली', fullName: 'Nepali' },
    { code: 'th', label: 'ไทย', fullName: 'Thai' },
    { code: 'zh', label: '中文', fullName: 'Chinese' },
] as const;

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const activeIndex = languages.findIndex(lang => lang.code === language);
    const activeLang = languages[activeIndex];

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative flex items-center" ref={containerRef}>
            {/* Desktop: Sliding Segmented Control */}
            <div className="hidden sm:flex bg-secondary/30 backdrop-blur-md rounded-full p-1 border border-primary/20 shadow-inner relative">
                <motion.div
                    className="absolute bg-primary rounded-full shadow-lg"
                    initial={false}
                    animate={{
                        x: activeIndex * 52,
                        width: 48,
                        height: 32,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />

                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as any)}
                        className={`
                            relative z-10 w-[48px] h-8 text-[11px] font-bold rounded-full
                            transition-colors duration-200 flex items-center justify-center
                            ${language === lang.code
                                ? 'text-primary-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                            }
                        `}
                        title={lang.fullName}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>

            {/* Mobile: Compact Dropdown with Smooth Animation */}
            <div className="sm:hidden relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 bg-secondary/40 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20 transition-all active:scale-95"
                >
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold uppercase">{activeLang.label}</span>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 5 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            className="absolute right-0 mt-2 min-w-[120px] bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl shadow-2xl p-2 z-[100]"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code as any);
                                        setIsOpen(false);
                                    }}
                                    className={`
                                        w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors
                                        ${language === lang.code
                                            ? 'bg-primary text-primary-foreground'
                                            : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                                        }
                                    `}
                                >
                                    <span>{lang.fullName}</span>
                                    <span>{lang.label}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
