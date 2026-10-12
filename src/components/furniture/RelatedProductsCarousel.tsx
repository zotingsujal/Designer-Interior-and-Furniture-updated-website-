import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FurnitureProduct } from '../../data/furniture';
import { FurnitureProductCard } from './FurnitureProductCard';

interface RelatedProductsCarouselProps {
  products: FurnitureProduct[];
  title?: string;
  subtitle?: string;
  tagline?: string;
  onSelect: (product: FurnitureProduct) => void;
  onBuyNow: (product: FurnitureProduct) => void;
}

export const RelatedProductsCarousel: React.FC<RelatedProductsCarouselProps> = ({
  products,
  title = 'Explore Similar Designs',
  subtitle,
  tagline = 'Curated Pairings',
  onSelect,
  onBuyNow,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!products || products.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block mb-1">
            {tagline}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-[#5C554E] mt-1 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-full border border-[#D9D1C5] hover:border-[#18181B] bg-[#FAF9F5] hover:bg-[#18181B] text-[#18181B] hover:text-[#FAF9F5] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-full border border-[#D9D1C5] hover:border-[#18181B] bg-[#FAF9F5] hover:bg-[#18181B] text-[#18181B] hover:text-[#FAF9F5] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Side-Scrolling Carousel */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start flex flex-col"
          >
            <FurnitureProductCard
              product={item}
              onSelect={onSelect}
              onBuyNow={onBuyNow}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
