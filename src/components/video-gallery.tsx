export default function VideoGallery() {
  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Video Gallery</h2>
          <p className="mt-2 text-lg text-muted-foreground">See our mission in action and hear our stories.</p>
        </div>
        <div className="aspect-video max-w-4xl mx-auto">
          <video
            className="w-full h-full rounded-xl shadow-lg"
            controls
            poster="https://picsum.photos/1280/720"
            data-ai-hint="children playing"
          >
            <source src="/kbm-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
