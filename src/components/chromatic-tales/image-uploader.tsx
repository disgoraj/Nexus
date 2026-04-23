'use client';
import { useState, useRef, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Camera, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  onImageReady: (dataUri: string) => void;
  isLoading: boolean;
  onClear: () => void;
  imagePreview: string | null;
}

export default function ImageUploader({ onImageReady, isLoading, onClear, imagePreview }: ImageUploaderProps) {
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (isWebcamOpen) stopWebcam();
      const reader = new FileReader();
      reader.onload = (e) => onImageReady(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsWebcamOpen(false);
  };

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsWebcamOpen(true);
      }
    } catch (error) {
      toast({ variant: 'destructive', title: 'Webcam Error', description: 'Could not access webcam. Please grant permissions.' });
    }
  };

  const handleWebcamButtonClick = () => {
    if (isWebcamOpen) captureFromWebcam();
    else startWebcam();
  };

  const captureFromWebcam = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      const dataUri = canvas.toDataURL('image/png');
      onImageReady(dataUri);
      stopWebcam();
    }
  };
  
  const handleClear = () => {
    stopWebcam();
    if(fileInputRef.current) fileInputRef.current.value = "";
    onClear();
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>1. Provide a Pattern</span>
          {(imagePreview || isWebcamOpen) && (
            <Button variant="ghost" size="icon" onClick={handleClear} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Clear</span>
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center relative overflow-hidden border">
            {imagePreview && !isWebcamOpen && <Image src={imagePreview} alt="Uploaded pattern" layout="fill" objectFit="contain" />}
            <video ref={videoRef} autoPlay playsInline muted className={`w-full h-full object-cover ${isWebcamOpen ? 'block' : 'hidden'}`} />
            <canvas ref={canvasRef} className="hidden" />
            {!imagePreview && !isWebcamOpen && (
              <div className="text-center text-muted-foreground p-4">
                <Camera className="mx-auto h-12 w-12" />
                <p className="mt-2 font-medium">Scan your 3x3 color grid</p>
                <p className="text-sm">Upload an image or use your webcam.</p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            <Button onClick={() => fileInputRef.current?.click()} className="w-full" disabled={isLoading || isWebcamOpen}>
              <Upload className="mr-2" /> Upload Image
            </Button>
            <Button onClick={handleWebcamButtonClick} className="w-full" disabled={isLoading} variant="secondary">
              <Camera className="mr-2" /> {isWebcamOpen ? 'Capture Now' : 'Use Webcam'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
