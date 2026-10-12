import React, { useRef, useState, useEffect } from 'react';
import { FurnitureProduct } from '../../data/furniture';
import { FurnitureProductCard } from './FurnitureProductCard';

interface OppositeDirectionCarouselsProps {
  productsRow1: FurnitureProduct[];
  productsRow2: FurnitureProduct[];
  onSelectProduct: (product: FurnitureProduct) => void;
  onBuyNowProduct: (product: FurnitureProduct) => void;
}

export const OppositeDirectionCarousels: React.FC<OppositeDirectionCarouselsProps> = ({
  productsRow1,
  productsRow2,
  onSelectProduct,
  onBuyNowProduct,
}) => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const [isRow1Paused, setIsRow1Paused] = useState(false);
  const [isRow2Paused, setIsRow2Paused] = useState(false);

  // Auto-scroll loop for Row 1 (Right to Left: increasing scrollLeft)
  useEffect(() => {
    let animId: number;
    const el = row1Ref.current;
    if (!el) return;

    const step = () => {
      if (!isRow1Paused && el) {
        el.scrollLeft += 0.75;
        // Reset when reaching halfway of duplicated array
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isRow1Paused]);

  // Auto-scroll loop for Row 2 (Left to Right: decreasing scrollLeft)
  useEffect(() => {
    let animId: number;
    const el = row2Ref.current;
    if (!el) return;

    // Start in the middle so it can scroll backwards
    if (el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 4;
    }

    const step = () => {
      if (!isRow2Paused && el) {
        el.scrollLeft -= 0.75;
        if (el.scrollLeft <= 0) {
          el.scrollLeft = el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isRow2Paused]);

  // Requirement 21: Uniqueness rule assertion check between Carousel 1 and Carousel 2
  const safeRow2 = React.useMemo(() => {
    const row1Ids = new Set(productsRow1.map((p) => p.id));
    return productsRow2.filter((p) => !row1Ids.has(p.id));
  }, [productsRow1, productsRow2]);

  // Duplicate items for continuous seamless marquee loop
  const list1 = [...productsRow1, ...productsRow1];
  const list2 = [...safeRow2, ...safeRow2];

  return (
    <section className="my-16 sm:my-24 py-12 bg-[#F4EFEA] border-y border-[#E6DFD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#87786B] block mb-2">
          Editorial Showcase
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] font-normal">
          Curated Signature Pieces &amp; Everyday Favourites
        </h2>
        <p className="text-xs sm:text-sm text-[#5C554E] max-w-xl mx-auto mt-2">
          Discover handpicked designs crafted for discerning Mumbai homeowners. Hover or touch to inspect individual pieces.
        </p>
      </div>

      {/* CAROUSEL 1: Scrolling Right → Left */}
      <div className="mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
            Curated Signature Pieces
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#87786B]">
            Auto-Flow &bull; Right to Left
          </span>
        </div>

        <div
          ref={row1Ref}
          onMouseEnter={() => setIsRow1Paused(true)}
          onMouseLeave={() => setIsRow1Paused(false)}
          onTouchStart={() => setIsRow1Paused(true)}
          onTouchEnd={() => setIsRow1Paused(false)}
          className="flex gap-5 overflow-x-auto scrollbar-none py-2 px-4 select-none cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {list1.map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              className="w-[280px] sm:w-[320px] shrink-0"
            >
              <FurnitureProductCard
                product={item}
                onSelect={onSelectProduct}
                onBuyNow={onBuyNowProduct}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL 2: Scrolling Left → Right */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
            Everyday Favourites
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#87786B]">
            Auto-Flow &bull; Left to Right
          </span>
        </div>

        <div
          ref={row2Ref}
          onMouseEnter={() => setIsRow2Paused(true)}
          onMouseLeave={() => setIsRow2Paused(false)}
          onTouchStart={() => setIsRow2Paused(true)}
          onTouchEnd={() => setIsRow2Paused(false)}
          className="flex gap-5 overflow-x-auto scrollbar-none py-2 px-4 select-none cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {list2.map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              className="w-[280px] sm:w-[320px] shrink-0"
            >
              <FurnitureProductCard
                product={item}
                onSelect={onSelectProduct}
                onBuyNow={onBuyNowProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
