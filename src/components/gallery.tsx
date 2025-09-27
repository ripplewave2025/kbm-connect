'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/language-context';

export default function Gallery() {
  const { t } = useLanguage();
  const galleryItems = [
    {
      src: '/gallery/bhanteji1.jpg',
      alt: t('gallery.captions.img1'),
      aiHint: 'children group',
      caption: t('gallery.captions.img1'),
    },
    {
      src: '/gallery/bhanteji1.jpg',
      alt: t('gallery.captions.img2'),
      aiHint: 'monk portrait',
      caption: t('gallery.captions.img2'),
    },
    {
      src: '/gallery/groupphotomandir.jpg',
      alt: t('gallery.captions.img3'),
      aiHint: 'children temple',
      caption: t('gallery.captions.img3'),
    },
    {
      src: '/gallery/gyamtshoda.jpg',
      alt: t('gallery.captions.img4'),
      aiHint: 'student portrait',
      caption: t('gallery.captions.img4'),
    },
    {
      src: '/gallery/hostel1.jpg',
      alt: t('gallery.captions.img5'),
      aiHint: 'hostel building',
      caption: t('gallery.captions.img5'),
    },
  ];

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('gallery.title')}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{t('gallery.subtitle')}</p>
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
