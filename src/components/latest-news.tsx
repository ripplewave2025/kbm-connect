import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const newsItems = [
  {
    title: 'New home for the boys and girls',
    embed: (
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0MiiKRDg6H1D3KuXaQyPt3ZMz5ba4Ze48vbqx782zsNUWFf5o8jkn6LHHimRXmsCNl%26id%3D100083859907985&show_text=true&width=500"
        width="500"
        height="600"
        className="w-full"
        style={{ border: 'none', overflow: 'hidden' }}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    ),
    description: "Our new building provides a safe and modern home for both boys and girls, thanks to the generous support of our partners.",
    image: null,
    date: 'Recent Update',
    tag: 'Community',
    aiHint: 'facebook post',
  },
  {
    title: 'Happy 79th Independence Day!',
    description: "The children at KBM celebrated India's 79th Independence Day with a flag hoisting ceremony and cultural programs, thanks to the support from the Darjeeling Children's Trust.",
    image: 'https://picsum.photos/600/400',
    date: 'August 2023',
    tag: 'Celebration',
    aiHint: 'children celebrating',
  },
  {
    title: 'Phase 2: Modern Hostels for Girls',
    description: 'New dormitories and facilities were constructed for the girls between 2019 and 2021, replacing cramped quarters with bright, airy, and safe living spaces.',
    image: 'https://picsum.photos/600/400',
    date: 'October 2021',
    tag: 'Completed',
    aiHint: 'girl dormitory',
  },
  {
    title: 'Educational Enrichment',
    description: 'In 2023, a new computer lab with 10 computers and Wi-Fi was established, alongside a growing library, providing children with vital IT skills and learning resources.',
    image: 'https://picsum.photos/600/400',
    date: 'August 2023',
    tag: 'Education',
    aiHint: 'computer lab',
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
