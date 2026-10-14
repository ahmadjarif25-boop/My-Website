'use server';

import { summarizeNewsArticle } from '@/ai/flows/summarize-news-articles';
import { textToSpeech } from '@/ai/flows/text-to-speech';
import { z } from 'zod';

const SummarizeSchema = z.object({
  articleContent: z.string(),
});

const AudioSchema = z.object({
  text: z.string(),
});

export async function getSummary(formData: FormData) {
  const validatedFields = SummarizeSchema.safeParse({
    articleContent: formData.get('articleContent'),
  });

  if (!validatedFields.success) {
    return { error: 'Invalid article content.' };
  }

  try {
    const { summary } = await summarizeNewsArticle(validatedFields.data);
    return { summary };
  } catch (error) {
    console.error('Error summarizing article:', error);
    return { error: 'Failed to generate summary. Please try again.' };
  }
}

export async function getAudioForText(formData: FormData) {
  const validatedFields = AudioSchema.safeParse({
    text: formData.get('text'),
  });

  if (!validatedFields.success) {
    return { error: 'Invalid text content.' };
  }

  try {
    const { audio } = await textToSpeech(validatedFields.data);
    return { audio };
  } catch (error) {
    console.error('Error generating audio:', error);
    return { error: 'Failed to generate audio. Please try again.' };
  }
}
