import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const newsItems = [
  {
    title: "Phase 1: A New Home for Boys",
    description: "The crumbling, 87-year-old boys' hostel was replaced with a new, safe multi-storey building, completed in 2014, providing a secure home for 60 boys.",
    image: "https://picsum.photos/600/400",
    date: "November 2014",
    tag: "Milestone",
    aiHint: "hostel building",
  },
  {
    title: "Phase 2: Modern Hostels for Girls",
    description: "New dormitories and facilities were constructed for the girls between 2019 and 2021, replacing cramped quarters with bright, airy, and safe living spaces.",
    image: "https://picsum.photos/600/400",
    date: "October 2021",
    tag: "Completed",
    aiHint: "girl dormitory",
  },
  {
    title: "Educational Enrichment",
    description: "In 2023, a new computer lab with 10 computers and Wi-Fi was established, alongside a growing library, providing children with vital IT skills and learning resources.",
    image: "https://picsum.photos/600/400",
    date: "August 2023",
    tag: "Education",
    aiHint: "computer lab",
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
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={item.aiHint}
                  />
                </div>
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
