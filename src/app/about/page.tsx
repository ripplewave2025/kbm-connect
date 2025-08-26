import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl py-16 px-4 md:py-24 md:px-6">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">About Kripasaran Buddhist Mission</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn about our history, our mission, and the people who make our work possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Kripasaran Buddhist Mission (KBM) is a Darjeeling-based charitable organization dedicated to caring for underprivileged and orphaned children. Founded in 1980 by the venerable Dhammaviriyo Mahathero, we provide about 100 children with free education, shelter, food, clothing, and medical support.
            </p>
            <p>
              Our core mission is to ensure vulnerable children have a safe upbringing and access to schooling, empowering them to build a brighter future. We believe that every child deserves a chance to thrive, and we work tirelessly to create a nurturing environment where they can grow, learn, and dream.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hostel.jpg"
              alt="Group of children at KBM"
              width={600}
              height={500}
              className="object-cover w-full h-full"
              data-ai-hint="hostel building"
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Partnership with DCT</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Through our invaluable partnership with the Darjeeling Children’s Trust (DCT), a UK-based charity, we have been able to transform our facilities into a modern, purpose-built campus where our children can flourish. This collaboration has been instrumental in upgrading our infrastructure and expanding our educational programs.
          </p>
        </div>
      </div>
    </div>
  );
}
