'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/language-context';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { login } from './actions';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData, action: typeof login) => {
    setIsLoading(true);
    try {
      await action(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">{t('loginPage.title')}</CardTitle>
          <CardDescription>{t('loginPage.description')}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {message && (
            <div className="bg-accent/10 border border-accent text-accent-foreground px-4 py-2 rounded text-sm text-center">
              {message}
            </div>
          )}

          <form action={(formData) => handleSubmit(formData, login)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('loginPage.emailLabel')}</Label>
              <Input name="email" id="email" type="email" placeholder="member@kbm.org" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('loginPage.passwordLabel')}</Label>
              <Input name="password" id="password" type="password" required />
            </div>
            <Button className="w-full font-bold" type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {t('loginPage.loginButton')}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('loginPage.cancelButton')}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
