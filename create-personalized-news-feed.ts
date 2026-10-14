'use server';

/**
 * @fileOverview A personalized news feed creation AI agent.
 *
 * - createPersonalizedNewsFeed - A function that handles the creation of a personalized news feed.
 * - CreatePersonalizedNewsFeedInput - The input type for the createPersonalizedNewsFeed function.
 * - CreatePersonalizedNewsFeedOutput - The return type for the createPersonalizedNewsFeed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreatePersonalizedNewsFeedInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma-separated list of topics the user is interested in.'),
  newsArticleTitles: z.array(z.string()).describe('An array of news article titles.'),
});
export type CreatePersonalizedNewsFeedInput = z.infer<
  typeof CreatePersonalizedNewsFeedInputSchema
>;

const CreatePersonalizedNewsFeedOutputSchema = z.object({
  relevantNewsArticles: z
    .array(z.string())
    .describe('An array of news article titles that are relevant to the user.'),
});
export type CreatePersonalizedNewsFeedOutput = z.infer<
  typeof CreatePersonalizedNewsFeedOutputSchema
>;

export async function createPersonalizedNewsFeed(
  input: CreatePersonalizedNewsFeedInput
): Promise<CreatePersonalizedNewsFeedOutput> {
  return createPersonalizedNewsFeedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createPersonalizedNewsFeedPrompt',
  input: {schema: CreatePersonalizedNewsFeedInputSchema},
  output: {schema: CreatePersonalizedNewsFeedOutputSchema},
  prompt: `You are a news aggregator that filters news articles based on user interests.

  User Interests: {{{interests}}}

  Given the following news article titles:
  {{#each newsArticleTitles}}- {{{this}}}
  {{/each}}

  Determine which news articles are relevant to the user based on their interests.
  Return only the relevant news article titles in an array.
  Do not include any additional information or explanations.
  `,
});

const createPersonalizedNewsFeedFlow = ai.defineFlow(
  {
    name: 'createPersonalizedNewsFeedFlow',
    inputSchema: CreatePersonalizedNewsFeedInputSchema,
    outputSchema: CreatePersonalizedNewsFeedOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
