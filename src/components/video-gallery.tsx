import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const videos = [
  {
    title: "A Day at KBM",
    image: "https://picsum.photos/800/600?random=1",
    aiHint: "children playing",
  },
  {
    title: "Our New Campus",
    image: "https://picsum.photos/800/600?random=2",
    aiHint: "modern building",
  },
  {
    title: "Success Stories: Alumni Speak",
    image: "https://picsum.photos/800/600?random=3",
    aiHint: "young adult portrait",
  },
  {
    title: "DCT & KBM: A Partnership of Hope",
    image: "https://picsum.photos/800/600?random=4",
    aiHint: "group people",
  },
];

export default function VideoGallery() {
  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Video Gallery</h2>
          <p className="mt-2 text-lg text-muted-foreground">See our mission in action and hear our stories.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {videos.map((video) => (
            <div key={video.title} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <Image
                src={video.image}
                alt={video.title}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={video.aiHint}
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <PlayCircle className="h-16 w-16 mb-4 text-white/80 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-headline text-2xl font-bold text-center">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
