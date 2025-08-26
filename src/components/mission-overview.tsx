import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export default function MissionOverview() {
  return (
    <section id="mission" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              Our Mission: A Haven of Hope
            </h2>
            <p className="text-muted-foreground text-lg">
              Kripasaran Buddhist Mission (KBM) is a Darjeeling-based charitable organization dedicated to caring for underprivileged and orphaned children. Founded in 1980 by Venerable Dhammaviriyo Mahathero, we provide about 100 children with free education, shelter, food, clothing, and medical support.
            </p>
            <p className="text-muted-foreground text-lg">
              Our core mission is to ensure vulnerable children have a safe upbringing and access to schooling, empowering them to build a brighter future. Through our partnership with Darjeeling Children’s Trust, we have transformed our facilities into a modern, purpose-built campus where children can thrive.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/600/700"
                  alt="Founder of KBM"
                  width={600}
                  height={700}
                  className="object-cover"
                  data-ai-hint="portrait monk"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
