import { Heart, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="shadow-lg">
            <CardHeader className="items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-3xl md:text-4xl">Get Involved</CardTitle>
              <CardDescription className="max-w-xl text-lg">
                Your support can transform lives. Join us in our mission to provide a safe and nurturing environment for children in need.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <Button size="lg" className="font-bold text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                Donate Now
              </Button>
              <div className="text-center">
                <h3 className="font-headline text-xl font-semibold">Contact Us</h3>
                <div className="mt-2 flex flex-col items-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@kbm.org" className="hover:text-primary">info@kbm.org</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+911234567890" className="hover:text-primary">+91 123 456 7890</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
