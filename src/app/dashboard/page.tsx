'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
    const { t } = useLanguage();
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-center text-3xl">{t('dashboardPage.title')}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <p className="text-center text-muted-foreground">
            {t('dashboardPage.welcome')}
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft />
              {t('dashboardPage.backToHome')}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
