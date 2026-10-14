import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { FurnitureCategory } from '../../data/furniture';
import {
  getCategoryBannerImage,
  getCategoryBannerFallback,
  CATEGORY_BANNER_CONFIGS,
} from '../../config/categoryBanners';

interface FurnitureCategoryCardProps {
  category: FurnitureCategory;
  onSelect: (category: FurnitureCategory) => void;
  index?: number;
}

export const FurnitureCategoryCard: React.FC<FurnitureCategoryCardProps> = ({
  category,
  onSelect,
  index = 0,
}) => {
  const [imageErrorLevel, setImageErrorLevel] = useState<number>(0);
  const primaryUrl = getCategoryBannerImage(category.slug) || category.heroImage;
  const fallbackUrl = getCategoryBannerFallback(category.slug);

  const handleImageError = () => {
    // If primary failed, try fallback. If fallback also fails, render clean placeholder.
    setImageErrorLevel((prev) => prev + 1);
  };

  const currentImageSrc =
    imageErrorLevel === 0 ? primaryUrl : imageErrorLevel === 1 ? fallbackUrl : null;

  return (
    <article
      onClick={() => onSelect(category)}
      className="group relative bg-[#FAF9F5] border border-[#E6DFD5] hover:border-[#18181B] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer rounded-xs shadow-2xs hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9A6F3E]/40"
      tabIndex={0}
      role="button"
      aria-label={`Explore ${category.name} collection`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(category);
        }
      }}
    >
      {/* Category Banner Image Container */}
      <div className="relative aspect-[16/11] bg-[#EFEAE2] overflow-hidden">
        {currentImageSrc ? (
          <img
            src={currentImageSrc}
            alt={`${category.name} showroom collection banner`}
            loading={index < 3 ? 'eager' : 'lazy'}
            onError={handleImageError}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          /* Clean Architectural Placeholder if client link fails */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#EFEAE2] to-[#E3DCD3] text-center">
            <Sparkles className="w-8 h-8 text-[#9A6F3E] mb-2 opacity-75" />
            <span className="font-serif text-lg text-[#18181B] font-medium mb-1">
              {category.name}
            </span>
            <span className="text-[11px] text-[#87786B] tracking-wider uppercase flex items-center gap-1 justify-center">
              <AlertCircle className="w-3 h-3 text-[#B08968]" />
              Image placeholder &bull; Bespoke Showroom
            </span>
          </div>
        )}

        {/* High contrast gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

        {/* Top Collection Index Tag */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-2.5 py-1 bg-[#18181B]/80 backdrop-blur-xs text-[#FAF9F5] text-[10px] uppercase font-semibold tracking-widest rounded-xs border border-white/10">
            0{index + 1}
          </span>
        </div>

        {/* Subcategories Count Tag */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#18181B] text-[10px] uppercase font-semibold tracking-wider rounded-xs shadow-xs flex items-center gap-1">
            <Layers className="w-3 h-3 text-[#9A6F3E]" />
            <span>{category.subcategories.length} Subcategories</span>
          </span>
        </div>

        {/* Category Overlay Title */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold text-[#D4C3B3] block mb-1">
            Major Category
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight text-[#FAF9F5] drop-shadow-xs">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Category Body & Subcategories Preview */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#FAF9F5]">
        <div>
          <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed line-clamp-2 mb-4">
            {category.description}
          </p>

          {/* Subcategory Pills Preview */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {category.subcategories.map((sub) => (
              <span
                key={sub.id}
                className="text-[11px] px-2 py-0.5 bg-[#F2EDE7] text-[#4A453F] border border-[#E4DDD3] rounded-xs font-medium"
              >
                {sub.name}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-3 border-t border-[#EAE3D9] flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#18181B] group-hover:text-[#9A6F3E] transition-colors inline-flex items-center gap-2">
            <span>Explore {category.name}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-[11px] text-[#87786B] font-serif italic">
            Factory Direct
          </span>
        </div>
      </div>
    </article>
  );
};
