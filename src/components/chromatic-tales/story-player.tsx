import type { FC } from 'react';
import type { Story } from '@/lib/templates';
import { ShieldQuestion, BookOpenText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StoryPlayerProps {
  story: Story | null;
}

const StoryPlayer: FC<StoryPlayerProps> = ({ story }) => {
  if (!story) {
    return (
      <div className="text-center text-muted-foreground p-4 flex flex-col items-center gap-4">
        <ShieldQuestion className="h-12 w-12 text-accent" />
        <p className="font-semibold">No Matching Story Found</p>
        <p className="text-sm">Try a different color pattern or check your image for clarity.</p>
      </div>
    );
  }

  return (
    <div className="w-full text-center mt-4">
      <h3 className="text-xl font-bold font-headline text-primary mb-2">{story.title}</h3>
      <Card className="bg-muted/50 border">
        <CardContent className="p-6 text-left">
          <div className="flex items-start gap-4">
            <BookOpenText className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <p className="text-card-foreground">{story.storyText}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoryPlayer;
