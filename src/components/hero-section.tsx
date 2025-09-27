'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/language-context';

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white overflow-hidden">
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
          {t('hero.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="font-bold text-lg" variant="secondary">
            <Link href="#mission">{t('hero.learnMore')}</Link>
          </Button>
          <Button size="lg" asChild className="font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#get-involved">{t('hero.donateNow')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
