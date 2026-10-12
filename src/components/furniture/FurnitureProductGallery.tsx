import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { FurnitureImage } from './FurnitureImage';

interface FurnitureProductGalleryProps {
  images: string[];
  productName: string;
  category?: string;
}

export const FurnitureProductGallery: React.FC<FurnitureProductGalleryProps> = ({
  images,
  productName,
  category = 'default',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const touchStartX = useRef<number | null>(null);

  const cleanImages = images && images.length > 0 ? Array.from(new Set(images.filter(Boolean))) : [];
  const currentImage = cleanImages[selectedIndex] || cleanImages[0] || '';

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % cleanImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + cleanImages.length) % cleanImages.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Display Stage */}
      <div
        className="relative aspect-[4/3] bg-[#EFEAE2] border border-[#E6DFD5] overflow-hidden rounded-xs cursor-crosshair group select-none"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <FurnitureImage
          src={currentImage}
          alt={`${productName} view ${selectedIndex + 1}`}
          category={category}
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={
            isZoomed
              ? {
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                  transform: 'scale(1.75)',
                }
              : undefined
          }
        />

        {/* Hover Zoom Hint */}
        <div className="absolute bottom-3 right-3 bg-[#18181B]/70 backdrop-blur-xs text-[#FAF9F5] text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <ZoomIn className="w-3 h-3" />
          <span className="hidden sm:inline">Hover to Zoom</span>
        </div>

        {/* Navigation Arrows (if multiple angles of the piece exist) */}
        {cleanImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#18181B] flex items-center justify-center shadow-md transition-opacity cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous view"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#18181B] flex items-center justify-center shadow-md transition-opacity cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next view"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {cleanImages.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
          {cleanImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-16 sm:w-20 aspect-[4/3] rounded-xs overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                selectedIndex === idx
                  ? 'border-[#18181B] shadow-xs scale-102'
                  : 'border-[#E6DFD5] opacity-70 hover:opacity-100'
              }`}
            >
              <FurnitureImage
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                category={category}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
