import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const newsItems = [
  {
    title: "Darjeeling Children's Trust News",
    description: "Read the latest news and updates directly from our partner, the Darjeeling Children's Trust.",
    image: null,
    date: 'Latest',
    tag: 'DCT News',
    aiHint: '',
    embed: (
      <iframe
        src="https://darjeelingchildrenstrust.org.uk/welcome/"
        className="h-full w-full"
        title="Darjeeling Children's Trust News"
      />
    ),
  },
  {
    title: 'Nurturing Health: Our Latest Medical Camp',
    description: 'We successfully conducted a comprehensive health check-up for all our children. Regular medical camps are a cornerstone of our commitment to their well-being, ensuring they grow up healthy and strong.',
    image: null,
    date: 'May 2024',
    tag: 'Health',
    aiHint: '',
    embed: (
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0LJohkTGDqdsoAUkZaVhThrsoeAJCzBYPMiEH8FpC6NHE8suWLvbQbBDMyNo3rEQsl%26id%3D100083859907985&show_text=true&width=500"
        width="500"
        height="744"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    ),
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
    <section id="news" className="w-full py-16 md:py-24 bg-background">
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
                    <div className="h-full w-full overflow-y-auto">
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
