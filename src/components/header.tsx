'use client';

import { Menu, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useLanguage } from '@/contexts/language-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Header() {
  const { t, setLanguage, language } = useLanguage();

  const navLinks = [
    { href: '/#mission', label: t('header.mission') },
    { href: '/#news', label: t('header.news') },
    { href: '/#founder', label: t('header.founder') },
    { href: '/about', label: t('header.about') },
    { href: '/#get-involved', label: t('header.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold md:text-base">
          <span className="sr-only">{t('header.title')}</span>
        </Link>
        <Link href="/" className="font-headline text-lg font-bold text-foreground">
          {t('header.title')}
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="font-headline">{t('header.title')}</span>
            </Link>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setLanguage('en')} disabled={language === 'en'}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setLanguage('ne')} disabled={language === 'ne'}>
              नेपाली (Nepali)
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setLanguage('th')} disabled={language === 'th'}>
              ไทย (Thai)
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setLanguage('zh')} disabled={language === 'zh'}>
              中文 (Chinese)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button asChild className="font-bold">
          <Link href="/login">{t('header.memberLogin')}</Link>
        </Button>
      </div>
    </header>
  );
}
