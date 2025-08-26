import Image from 'next/image';

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
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Gallery</h2>
          <p className="mt-2 text-lg text-muted-foreground">A glimpse into daily life at the Kripasaran Buddhist Mission.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={item.aiHint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
