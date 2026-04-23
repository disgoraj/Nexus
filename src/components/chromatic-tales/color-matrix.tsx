import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface ColorMatrixProps {
  matrix: string[][];
}

const colorMap: { [key: string]: string } = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-400',
  white: 'bg-white',
  black: 'bg-black',
  orange: 'bg-orange-500',
  unknown: 'bg-gray-400',
};

const ColorMatrix: FC<ColorMatrixProps> = ({ matrix }) => {
  return (
    <div className="w-full max-w-xs">
        <h3 className="text-lg font-semibold text-center mb-2">Detected Pattern</h3>
        <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-muted aspect-square border">
        {matrix.flat().map((color, index) => (
            <div
            key={index}
            className={cn(
                "w-full h-full rounded-md border flex items-center justify-center",
                colorMap[color.toLowerCase()] || 'bg-gray-200'
            )}
            title={color}
            >
             <span className="sr-only">{color}</span>
            </div>
        ))}
        </div>
    </div>
  );
};

export default ColorMatrix;
