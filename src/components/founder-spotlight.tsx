import Image from 'next/image';

export default function FounderSpotlight() {
  return (
    <section id="founder" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/5] w-full max-w-sm">
              <Image
                src="/gallery/bhanteji.jpg"
                alt="Venerable Dhamma Dhiroo"
                width={400}
                height={500}
                className="object-cover w-full h-full"
                data-ai-hint="monk portrait"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              A Lifetime of Dedication
            </h2>
            <p className="text-muted-foreground text-lg">
              The heart of the Kripasaran Buddhist Mission is Dr. Dhamma Dhiroo (Dr. Pema wangdi Sherpa), a man whose life is a testament to selfless service. He not only runs the home today but also grew up within its very walls.
            </p>
            <p className="text-muted-foreground text-lg">
              Having studied and lived his entire life as a monk at the mission, he embodies the spirit of compassion and dedication that defines our work. His unwavering commitment ensures that the children in our care receive the same love and opportunity that shaped him. We are immensely proud to have such an inspirational figure leading our home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
