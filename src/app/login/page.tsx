'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/language-context';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">{t('loginPage.title')}</CardTitle>
          <CardDescription>{t('loginPage.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t('loginPage.emailLabel')}</Label>
            <Input id="email" type="email" placeholder="member@kbm.org" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t('loginPage.passwordLabel')}</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full font-bold" type="submit">
            {t('loginPage.loginButton')}
          </Button>
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/">
              <ArrowLeft />
              {t('loginPage.cancelButton')}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
