import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-headline text-lg font-semibold">KBM Darjeeling</span>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kripasaran Buddhist Mission. All rights reserved.</p>
          <p>
            Made with love by{' '}
            <a href="https://github.com/ripplewave2025" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              Upesh
            </a>
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Login
          </Link>
        </nav>
      </div>
    </footer>
  );
}
