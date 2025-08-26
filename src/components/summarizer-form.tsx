'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { summarizeUpdates, type SummarizeUpdatesInput } from '@/ai/flows/summarize-updates';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  text: z.string().min(100, {
    message: 'Please enter at least 100 characters to summarize.',
  }),
});

const defaultText = `Darjeeling Children’s Trust is a UK-based charity (registered in England & Wales in 2011) that has been working since 2008 to improve the lives of children in Darjeeling. The Trust’s objectives are to advance education and promote health for the children of Darjeeling, principally by improving educational facilities, upgrading living conditions, and providing sponsorships for those in need. DCT builds partnerships on the ground in Darjeeling to carry out projects – from school infrastructure improvements and vocational training, to healthcare initiatives and support for orphanages. The charity is governed by a board of trustees in the UK/India and coordinates closely with local educators and welfare organizations in Darjeeling.`;

export default function SummarizerForm() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: defaultText,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeUpdates(data as SummarizeUpdatesInput);
      setSummary(result.summary);
    } catch (error) {
      console.error('Summarization failed:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate summary. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Text to Summarize</FormLabel>
                <FormControl>
                  <Textarea placeholder="Paste your text here..." className="min-h-[200px] text-base" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto font-bold text-base">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Summary
              </>
            )}
          </Button>
        </form>
      </Form>

      {summary && (
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
