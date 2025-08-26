'use server';

/**
 * @fileOverview A flow for summarizing news articles, donation impact reports, or project updates.
 *
 * - summarizeUpdates - A function that handles the summarization process.
 * - SummarizeUpdatesInput - The input type for the summarizeUpdates function.
 * - SummarizeUpdatesOutput - The return type for the summarizeUpdates function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeUpdatesInputSchema = z.object({
  text: z.string().describe('The text to summarize.'),
});
export type SummarizeUpdatesInput = z.infer<typeof SummarizeUpdatesInputSchema>;

const SummarizeUpdatesOutputSchema = z.object({
  summary: z.string().describe('The concise summary of the input text.'),
});
export type SummarizeUpdatesOutput = z.infer<typeof SummarizeUpdatesOutputSchema>;

export async function summarizeUpdates(input: SummarizeUpdatesInput): Promise<SummarizeUpdatesOutput> {
  return summarizeUpdatesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeUpdatesPrompt',
  input: {schema: SummarizeUpdatesInputSchema},
  output: {schema: SummarizeUpdatesOutputSchema},
  prompt: `Summarize the following text into a concise summary:

{{{text}}}`, 
});

const summarizeUpdatesFlow = ai.defineFlow(
  {
    name: 'summarizeUpdatesFlow',
    inputSchema: SummarizeUpdatesInputSchema,
    outputSchema: SummarizeUpdatesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
