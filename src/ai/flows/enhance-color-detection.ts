'use server';

/**
 * @fileOverview A Genkit flow for enhancing color detection using GenAI to handle complex color variations and lighting conditions.
 *
 * - enhanceColorDetection - A function that takes an image data URI and returns a 3x3 matrix of detected colors.
 * - EnhanceColorDetectionInput - The input type for the enhanceColorDetection function.
 * - EnhanceColorDetectionOutput - The return type for the enhanceColorDetection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceColorDetectionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a 3x3 grid of colored blocks, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type EnhanceColorDetectionInput = z.infer<typeof EnhanceColorDetectionInputSchema>;

const EnhanceColorDetectionOutputSchema = z.array(z.array(z.string())).describe('A 3x3 matrix of detected colors.');
export type EnhanceColorDetectionOutput = z.infer<typeof EnhanceColorDetectionOutputSchema>;

export async function enhanceColorDetection(input: EnhanceColorDetectionInput): Promise<EnhanceColorDetectionOutput> {
  return enhanceColorDetectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceColorDetectionPrompt',
  input: {schema: EnhanceColorDetectionInputSchema},
  output: {schema: EnhanceColorDetectionOutputSchema},
  prompt: `You are an AI model that enhances color detection for a 3x3 grid image. Identify the colors in the image.

  Photo: {{media url=photoDataUri}}
  
  Output the 3x3 matrix of detected colors. Limit colors to simple, well-known color names (red, green, blue, yellow, white, black). If you cannot confidently identify the color in any given block, mark it as "unknown".`,
});

const enhanceColorDetectionFlow = ai.defineFlow(
  {
    name: 'enhanceColorDetectionFlow',
    inputSchema: EnhanceColorDetectionInputSchema,
    outputSchema: EnhanceColorDetectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
