'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '@/contexts/language-context';
import GlowingText from '@/components/glowing-text';

export default function MissionOverview() {
  const { t } = useLanguage();
  return (
    <section id="mission" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              {t('mission.title')}
            </h2>
            <GlowingText
              text={t('mission.p1')}
              className="text-muted-foreground text-lg block"
            />
            <GlowingText
              text={t('mission.p2')}
              className="text-muted-foreground text-lg block"
            />
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/hostel.jpg"
                  alt="KBM Hostel"
                  width={600}
                  height={700}
                  className="object-cover"
                  data-ai-hint="hostel building"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
