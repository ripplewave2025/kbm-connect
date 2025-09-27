'use client';

import { Heart, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '@/contexts/language-context';

export default function GetInvolved() {
  const { t } = useLanguage();

  return (
    <section id="get-involved" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="shadow-lg">
            <CardHeader className="items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-3xl md:text-4xl">{t('getInvolved.title')}</CardTitle>
              <CardDescription className="max-w-xl text-lg">
                {t('getInvolved.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <Button size="lg" className="font-bold text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                {t('getInvolved.donateNow')}
              </Button>
              <div className="text-center">
                <h3 className="font-headline text-xl font-semibold">{t('getInvolved.contactUs')}</h3>
                <div className="mt-2 flex flex-col items-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:pemabhante@gmail.com" className="hover:text-primary">pemabhante@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+919434247991" className="hover:text-primary">+91 9434247991</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
