import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Header() {
  const navLinks = [
    { href: '/#mission', label: 'Mission' },
    { href: '/#news', label: 'News' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/#get-involved', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold md:text-base">
          <span className="sr-only">KBM Darjeeling</span>
        </Link>
        <Link href="/" className="font-headline text-lg font-bold text-foreground">
          KBM Darjeeling
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
              <span className="font-headline">KBM Darjeeling</span>
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
        <Button asChild className="font-bold">
          <Link href="/login">Member Login</Link>
        </Button>
      </div>
    </header>
  );
}
