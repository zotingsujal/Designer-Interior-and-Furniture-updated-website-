import React, { useState } from 'react';
import { FurnitureImage } from './FurnitureImage';

interface FurnitureImageTransitionProps {
  images: string[];
  alt: string;
  category?: string;
  isHovered?: boolean;
  className?: string;
}

export const FurnitureImageTransition: React.FC<FurnitureImageTransitionProps> = ({
  images,
  alt,
  category = 'default',
  isHovered = false,
  className = '',
}) => {
  const [currentIndex] = useState(0);

  // Filter out empty or duplicate images to ensure clean views of the same product
  const validImages = images && images.length > 0 ? Array.from(new Set(images.filter(Boolean))) : [];

  // No automatic transitions on a timer across subcategories
  // When hovered on desktop, show secondary angle if available
  const activeIndex = isHovered && validImages.length > 1 ? 1 : currentIndex;

  if (validImages.length === 0) {
    return (
      <FurnitureImage
        src=""
        alt={alt}
        category={category}
        className={className}
      />
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {validImages.map((img, idx) => (
        <FurnitureImage
          key={`${img}-${idx}`}
          src={img}
          alt={`${alt} - view ${idx + 1}`}
          category={category}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-102 pointer-events-none'
          } ${validImages.length === 1 && isHovered ? 'scale-105' : ''}`}
        />
      ))}

      {/* Angle indicator dots when multiple angles of the piece exist */}
      {validImages.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
          {validImages.map((_, idx) => (
            <span
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-3.5 bg-white shadow-xs' : 'w-1 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
