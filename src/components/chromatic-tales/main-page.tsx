'use client';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { detectColorsFromImage } from '@/app/actions';
import { matchPattern, type Story } from '@/lib/templates';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import ImageUploader from './image-uploader';
import ColorMatrix from './color-matrix';
import StoryPlayer from './story-player';
import UploadHistory from './upload-history';

export function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [detectedMatrix, setDetectedMatrix] = useState<string[][] | null>(null);
  const [matchedStory, setMatchedStory] = useState<Story | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadHistory, setUploadHistory] = useState<string[]>([]);
  const { toast } = useToast();

  const handleImageReady = async (dataUri: string) => {
    setIsLoading(true);
    setDetectedMatrix(null);
    setMatchedStory(null);
    setImagePreview(dataUri);

    if (!uploadHistory.includes(dataUri)) {
      setUploadHistory(prev => [dataUri, ...prev].slice(0, 5)); // Keep last 5 uploads
    }

    const result = await detectColorsFromImage(dataUri);
    if (result.error || !result.matrix) {
      toast({ variant: 'destructive', title: 'Error', description: result.error || 'Could not detect colors.' });
      setIsLoading(false);
      return;
    }
    const normalizedMatrix = result.matrix.map(row => 
        row.map(color => {
            const lowerColor = color.toLowerCase();
            if (lowerColor.includes('red')) return 'red';
            if (lowerColor.includes('green')) return 'green';
            if (lowerColor.includes('blue')) return 'blue';
            if (lowerColor.includes('yellow')) return 'yellow';
            if (lowerColor.includes('white')) return 'white';
            if (lowerColor.includes('orange')) return 'orange';
            if (lowerColor.includes('black')) return 'black';
            return 'unknown';
        })
    );
    setDetectedMatrix(normalizedMatrix);
    const story = matchPattern(normalizedMatrix);
    setMatchedStory(story);
    setIsLoading(false);
  };

  const clearAll = () => {
    setImagePreview(null);
    setDetectedMatrix(null);
    setMatchedStory(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body">
      <header className="py-6 px-4 md:px-8 border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold font-headline" style={{ color: 'hsl(var(--primary))' }}>Nexus</h1>
          <p className="text-muted-foreground">where stories connect</p>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <ImageUploader onImageReady={handleImageReady} isLoading={isLoading} onClear={clearAll} imagePreview={imagePreview} />
            {uploadHistory.length > 0 && (
                <UploadHistory history={uploadHistory} onSelectImage={handleImageReady} currentImage={imagePreview} />
            )}
          </div>
          <Card className="shadow-lg sticky top-32">
            <CardHeader>
              <CardTitle>2. See The Magic</CardTitle>
            </CardHeader>
            <CardContent className="h-full flex flex-col items-center justify-center space-y-4 min-h-[400px]">
              {isLoading ? (
                <div className="flex flex-col items-center gap-4 text-center">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-muted-foreground font-semibold">AI is analyzing your pattern...</p>
                  <p className="text-sm text-muted-foreground">This can take a moment.</p>
                </div>
              ) : (
                <>
                  {detectedMatrix ? <ColorMatrix matrix={detectedMatrix} /> : null}
                  {imagePreview && !isLoading ? (
                    <StoryPlayer story={matchedStory} />
                  ) : (
                    <div className="text-center text-muted-foreground p-8">
                      <p>The resulting story will appear here once you scan a pattern.</p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="text-center py-4 text-sm text-muted-foreground border-t bg-card/50">
        <p>Built with Next.js, Firebase, and GenAI. A Firebase Studio creation.</p>
        <p>Note: Demo videos are placeholders. To use, add videos to a `/public/videos/` directory.</p>
      </footer>
    </div>
  );
}
