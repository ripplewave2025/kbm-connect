'use client';

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function FounderSpotlight() {
  const { t } = useLanguage();
  return (
    <section id="founder" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/5] w-full max-w-sm">
              <Image
                src="/gallery/bhanteji3.jpg"
                alt="Venerable Dhamma Dhiroo"
                width={400}
                height={500}
                className="object-cover w-full h-full"
                data-ai-hint="monk portrait"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              {t('founder.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('founder.p1')}
            </p>
            <p className="text-muted-foreground text-lg">
              {t('founder.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
