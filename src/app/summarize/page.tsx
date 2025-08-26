import SummarizerForm from '@/components/summarizer-form';

export default function SummarizePage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">AI-Powered Summaries</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Instantly condense news articles, reports, or any text into concise summaries. Paste your text below to see the AI in action.
        </p>
      </div>
      <SummarizerForm />
    </div>
  );
}
