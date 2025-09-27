'use client';

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl py-16 px-4 md:py-24 md:px-6">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{t('aboutPage.title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('aboutPage.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              {t('aboutPage.p1')}
            </p>
            <p>
              {t('aboutPage.p2')}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hostel.jpg"
              alt="Group of children at KBM"
              width={600}
              height={500}
              className="object-cover w-full h-full"
              data-ai-hint="hostel building"
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('aboutPage.partnershipTitle')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('aboutPage.partnershipText')}
          </p>
        </div>
      </div>
    </div>
  );
}
