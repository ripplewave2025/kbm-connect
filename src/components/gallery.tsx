import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const galleryItems = [
  {
    src: 'https://picsum.photos/800/600',
    alt: 'Children studying in a classroom',
    aiHint: 'children studying',
    caption: 'Bright minds at work in our classrooms.',
  },
  {
    src: 'https://picsum.photos/800/600',
    alt: 'Children playing in the yard',
    aiHint: 'children playing',
    caption: 'Joyful moments during afternoon playtime.',
  },
  {
    src: 'https://picsum.photos/800/600',
    alt: 'Group photo of children and staff',
    aiHint: 'group photo children',
    caption: 'Our KBM family, growing and thriving together.',
  },
  {
    src: 'https://picsum.photos/800/600',
    alt: 'A child smiling',
    aiHint: 'child smiling',
    caption: 'Nurturing hope and happiness every day.',
  },
  {
    src: 'https://picsum.photos/800/601',
    alt: 'New dormitory building',
    aiHint: 'dormitory building',
    caption: 'Our modern and safe dormitory facilities.',
  },
  {
    src: 'https://picsum.photos/800/602',
    alt: 'Students in computer lab',
    aiHint: 'computer lab students',
    caption: 'Equipping students with modern IT skills.',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Gallery</h2>
          <p className="mt-2 text-lg text-muted-foreground">A glimpse into daily life at the Kripasaran Buddhist Mission.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.aiHint}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <p className="text-white text-sm font-semibold">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
