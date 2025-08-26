import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      <Image
        src="https://picsum.photos/1800/1200"
        alt="Children at Kripasaran Buddhist Mission"
        fill
        className="object-cover"
        priority
        data-ai-hint="happy children"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
          Nurturing Futures, Inspiring Hope
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
          Providing a loving home, education, and holistic care for underprivileged children in Darjeeling since 1980.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#mission">Learn More</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="font-bold text-lg">
            <Link href="#get-involved">Donate Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
