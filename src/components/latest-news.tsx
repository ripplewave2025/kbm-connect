import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const newsItems = [
  {
    title: 'A Brush with Art: The 2024 Art Competition',
    description: "Our annual art competition was a huge success! The children showcased their incredible talent, with themes of nature and community. Thank you to everyone who participated and supported this wonderful event.",
    image: 'https://picsum.photos/600/400',
    date: 'June 2024',
    tag: 'Event',
    aiHint: 'children painting',
    embed: null,
  },
  {
    title: 'Nurturing Health: Our Latest Medical Camp',
    description: 'We successfully conducted a comprehensive health check-up for all our children. Regular medical camps are a cornerstone of our commitment to their well-being, ensuring they grow up healthy and strong.',
    image: 'https://picsum.photos/600/400',
    date: 'May 2024',
    tag: 'Health',
    aiHint: 'child doctor',
    embed: null,
  },
  {
    title: 'Celebrating Success: Graduation Day',
    description: 'Join us in congratulating our recent graduates! We are incredibly proud of their hard work and dedication. We wish them all the best as they embark on their next chapter.',
    image: 'https://picsum.photos/600/400',
    date: 'April 2024',
    tag: 'Education',
    aiHint: 'students graduating',
    embed: null,
  },
];

export default function LatestNews() {
  return (
    <section id="news" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Latest News & Milestones</h2>
          <p className="mt-2 text-lg text-muted-foreground">Follow our journey of transformation and hope.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                {item.embed ? (
                  <div className="aspect-video w-full overflow-hidden flex justify-center items-center bg-white">
                    <div className="h-[400px] w-full overflow-y-auto">
                      {item.embed}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video">
                    <Image
                      src={item.image!}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                      data-ai-hint={item.aiHint}
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                <span>{item.date}</span>
                <Badge variant="outline">{item.tag}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
