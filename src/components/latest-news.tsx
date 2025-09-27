'use client';

import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '@/contexts/language-context';

export default function LatestNews() {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: t('news.items.item1.title'),
      description: t('news.items.item1.description'),
      image: null,
      date: t('news.latest'),
      tag: t('news.items.item1.tag'),
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
      title: t('news.items.item2.title'),
      description: t('news.items.item2.description'),
      image: null,
      date: t('news.june2024'),
      tag: t('news.items.item2.tag'),
      aiHint: 'dignitary visit',
      embed: (
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0LJohkTGDqdsoAUkZaVhThrsoeAJCzBYPMiEH8FpC6NHE8suWLvbQbBDMyNo3rEQsl%26id%3D100083859907985&show_text=true&width=500"
          width="500"
          height="250"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      ),
    },
    {
      title: t('news.items.item3.title'),
      description: t('news.items.item3.description'),
      image: null,
      date: t('news.april2024'),
      tag: t('news.items.item3.tag'),
      aiHint: 'students graduating',
      embed: (
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ZXTh3BW6zeyjktBdtn8aPmo4FoH7TWYuUPpaTYxjra1vBW862gWp8DkJpDdzwgrgl%26id%3D100083859907985&show_text=true&width=500"
          width="500"
          height="250"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      ),
    },
  ];

  return (
    <section id="news" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('news.title')}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{t('news.subtitle')}</p>
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
