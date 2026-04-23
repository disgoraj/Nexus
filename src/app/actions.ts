'use server';
import { enhanceColorDetection, EnhanceColorDetectionOutput } from '@/ai/flows/enhance-color-detection';

export async function detectColorsFromImage(photoDataUri: string): Promise<{ matrix: EnhanceColorDetectionOutput | null; error: string | null; }> {
  if (!photoDataUri) {
    return { matrix: null, error: 'No image data provided.' };
  }

  try {
    const matrix = await enhanceColorDetection({ photoDataUri });
    return { matrix, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { matrix: null, error: `Failed to detect colors: ${errorMessage}` };
  }
}
