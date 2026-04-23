'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface UploadHistoryProps {
  history: string[];
  onSelectImage: (dataUri: string) => void;
  currentImage: string | null;
}

export default function UploadHistory({ history, onSelectImage, currentImage }: UploadHistoryProps) {
  if (history.length === 0) return null;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
            <ImageIcon className="mr-2 h-5 w-5"/>
            <span>Recent Uploads</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {history.map((imageUri, index) => (
            <button
              key={index}
              onClick={() => onSelectImage(imageUri)}
              className={cn(
                "aspect-square w-full rounded-md overflow-hidden relative border-2 transition-all",
                currentImage === imageUri ? 'border-primary ring-2 ring-primary/50' : 'border-muted hover:border-primary/70'
              )}
            >
              <Image
                src={imageUri}
                alt={`Upload history ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105"
              />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
