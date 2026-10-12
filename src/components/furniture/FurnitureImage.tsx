import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface FurnitureImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  category?: string;
  className?: string;
}

export const FurnitureImage: React.FC<FurnitureImageProps> = ({
  src,
  alt,
  category = 'default',
  className = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  // If no source or if the image failed to load, display clean, clearly replaceable placeholder
  if (!src || hasError) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-[#F4EFEA] border border-[#E6DFD5] text-[#87786B] p-4 text-center select-none ${className}`}
      >
        <div className="w-10 h-10 mb-2 rounded-full border border-[#C5A880] flex items-center justify-center text-[#18181B] bg-white/60 shadow-2xs">
          <ImageOff className="w-4 h-4 text-[#C5A880]" />
        </div>
        <span className="font-serif text-xs sm:text-sm text-[#18181B] font-medium leading-snug line-clamp-1 max-w-[90%]">
          {alt || 'Furniture Piece'}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-[#9A6F3E] font-semibold mt-1.5 px-2 py-0.5 bg-[#EAE3D9] rounded-xs">
          Product image coming soon
        </span>
        <span className="text-[9px] text-[#A1998F] tracking-wide mt-1">
          Bespoke Custom Workshop &bull; Santacruz West
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      {...rest}
    />
  );
};
