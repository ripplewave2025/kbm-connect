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
    src: '/gallery/bhanteji3.jpg',
    alt: 'Our Founder, Venerable Dhamma Dhiroo',
    aiHint: 'monk portrait',
    caption: 'Guiding the next generation with wisdom.',
  },
  {
    src: '/gallery/groupphoto.jpg',
    alt: 'Group photo of KBM children',
    aiHint: 'children group',
    caption: 'The happy faces of the KBM family.',
  },
  {
    src: '/gallery/groupphotomandir.jpg',
    alt: 'Group photo at the temple',
    aiHint: 'children temple',
    caption: 'Gathered together at the temple.',
  },
  {
    src: '/gallery/gyamtshoda.jpg',
    alt: 'A student named Gyamtsho Da',
    aiHint: 'student portrait',
    caption: 'One of our bright students, Gyamtsho Da.',
  },
  {
    src: '/gallery/hostel1.jpg',
    alt: 'The KBM hostel building',
    aiHint: 'hostel building',
    caption: 'The safe and welcoming KBM hostel.',
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
