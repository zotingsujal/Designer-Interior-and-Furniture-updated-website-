import React, { useState, useEffect } from 'react';
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
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter out empty or duplicate images to ensure clean views
  const validImages = images && images.length > 0 ? Array.from(new Set(images.filter(Boolean))) : [];

  useEffect(() => {
    if (validImages.length <= 1) return;

    // Respect reduced-motion preferences
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [validImages.length]);

  if (validImages.length === 0) {
    return (
      <div className={`relative w-full h-full bg-[#F5F2EC] overflow-hidden ${className}`} style={{ backgroundColor: '#F5F2EC' }}>
        <FurnitureImage
          src=""
          alt={alt}
          category={category}
          className="w-full h-full object-contain object-center"
          style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '100%' }}
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full bg-[#F5F2EC] overflow-hidden ${className}`} style={{ backgroundColor: '#F5F2EC' }}>
      {validImages.map((img, idx) => (
        <FurnitureImage
          key={`${img}-${idx}`}
          src={img}
          alt={`${alt} - view ${idx + 1}`}
          category={category}
          className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1200 ease-in-out pointer-events-none p-1 sm:p-2 ${
            idx === currentIndex
              ? 'opacity-100 z-1'
              : 'opacity-0 z-0'
          }`}
          style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '100%' }}
        />
      ))}

      {/* Angle indicator dots when multiple angles of the piece exist */}
      {validImages.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
          {validImages.map((_, idx) => (
            <span
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-3.5 bg-white shadow-xs' : 'w-1 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
