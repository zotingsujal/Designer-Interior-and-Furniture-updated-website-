import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { FurnitureSubcategory, furnitureProducts } from '../../data/furniture';
import { FurnitureImage } from './FurnitureImage';

interface FurnitureSubcategoryCardProps {
  subcategory: FurnitureSubcategory;
  onSelect: (subcategory: FurnitureSubcategory) => void;
  autoTransitionImages?: boolean;
}

export const FurnitureSubcategoryCard: React.FC<FurnitureSubcategoryCardProps> = ({
  subcategory,
  onSelect,
  autoTransitionImages = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Count only genuine products that match this subcategory
  const genuineProducts = useMemo(() => {
    return furnitureProducts.filter(
      (p) =>
        (!subcategory.categorySlug || p.categorySlug === subcategory.categorySlug) &&
        p.subcategorySlug === subcategory.slug
    );
  }, [subcategory.categorySlug, subcategory.slug]);

  const count = genuineProducts.length;

  // Build the array of distinct product images for this specific subcategory
  const imageSlides = useMemo(() => {
    const list: { src: string; label: string }[] = [];
    if (subcategory.image) {
      list.push({ src: subcategory.image, label: subcategory.name });
    }
    genuineProducts.forEach((p) => {
      if (p.primaryImage && !list.some((item) => item.src === p.primaryImage)) {
        list.push({ src: p.primaryImage, label: p.name });
      }
    });
    return list;
  }, [subcategory.image, subcategory.name, genuineProducts]);

  // Auto-scrolling transition loop between subcategory products
  useEffect(() => {
    if (!autoTransitionImages || imageSlides.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageSlides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [autoTransitionImages, imageSlides.length, isPaused]);

  return (
    <article
      onClick={() => onSelect(subcategory)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="group relative bg-[#FAF9F5] border border-[#E6DFD5] hover:border-[#18181B] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer rounded-xs shadow-2xs hover:shadow-md"
    >
      {/* Subcategory Image with Auto Transition of Product Images */}
      <div className="relative aspect-[4/3] bg-[#EFEAE2] overflow-hidden">
        {imageSlides.map((slide, idx) => (
          <div
            key={`${slide.src}-${idx}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex
                ? 'opacity-100 scale-100 z-1'
                : 'opacity-0 scale-102 pointer-events-none z-0'
            }`}
          >
            <FurnitureImage
              src={slide.src}
              alt={slide.label}
              category={subcategory.categorySlug || 'default'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-2 pointer-events-none" />

        {/* Design count pill */}
        {count > 0 && (
          <div className="absolute top-3 right-3 bg-[#18181B]/85 backdrop-blur-xs text-[#FAF9F5] text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs z-3 shadow-xs">
            {count} {count === 1 ? 'Design' : 'Designs'}
          </div>
        )}

        {/* Live Auto-Scroll Image Indicator Dots */}
        {imageSlides.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-3">
            {imageSlides.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-4 bg-white shadow-xs'
                    : 'w-1 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Subcategory Body */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#18181B] font-normal leading-snug mb-2 group-hover:text-[#5E5245] transition-colors">
            {subcategory.name}
          </h3>
          <p className="text-xs text-[#5C554E] leading-relaxed mb-4">
            {subcategory.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#EAE3D9] flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#18181B] group-hover:text-[#9A6F3E] transition-colors inline-flex items-center gap-1.5">
            <span>Explore {subcategory.name}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
};
