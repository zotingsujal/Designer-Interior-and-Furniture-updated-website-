import React, { useState } from 'react';
import {
  FurnitureCategory,
  FurnitureSubcategory,
  FurnitureProduct,
} from '../data/furniture';
import { FurnitureSubcategoryCard } from '../components/furniture/FurnitureSubcategoryCard';
import { FurnitureBreadcrumbs } from '../components/furniture/FurnitureBreadcrumbs';
import {
  getCategoryBannerImage,
  getCategoryBannerFallback,
} from '../config/categoryBanners';
import { Sparkles, Layers, ArrowRight } from 'lucide-react';

interface FurnitureCategoryViewProps {
  category: FurnitureCategory;
  onSelectSubcategory: (subcategory: FurnitureSubcategory) => void;
  onSelectProduct?: (product: FurnitureProduct) => void;
  onBuyNowProduct?: (product: FurnitureProduct) => void;
  onReturnHub: () => void;
  onReturnHome: () => void;
}

export const FurnitureCategoryView: React.FC<FurnitureCategoryViewProps> = ({
  category,
  onSelectSubcategory,
  onReturnHub,
  onReturnHome,
}) => {
  const [imageErrorLevel, setImageErrorLevel] = useState<number>(0);

  const bannerPrimary = getCategoryBannerImage(category.slug) || category.heroImage;
  const bannerFallback = getCategoryBannerFallback(category.slug);
  const currentBannerSrc =
    imageErrorLevel === 0 ? bannerPrimary : imageErrorLevel === 1 ? bannerFallback : null;

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <FurnitureBreadcrumbs
          items={[
            { label: 'Home', onClick: onReturnHome },
            { label: 'Explore Our Furniture', onClick: onReturnHub },
            { label: category.name, active: true },
          ]}
        />

        {/* Category Header Hero Banner with High Contrast */}
        <div className="relative my-6 sm:my-10 bg-[#18181B] text-[#FAF9F5] rounded-xs overflow-hidden border border-[#D9D1C5]/60 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 bg-white/10 backdrop-blur-xs border border-white/15 rounded-xs text-[#E8D9C5] text-[11px] uppercase tracking-[0.22em] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Major Collection &bull; Factory Direct</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-[#FAF9F5] font-normal leading-tight mb-3">
                  {category.name}
                </h1>

                <p className="font-serif text-base sm:text-lg text-[#D4C3B3] italic mb-4">
                  {category.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-xl mb-6">
                  {category.description}
                </p>
              </div>

              {/* Subcategories quick badges */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA] font-medium mr-1 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{category.subcategories.length} Subcategories:</span>
                </span>
                {category.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => onSelectSubcategory(sub)}
                    className="px-2.5 py-1 text-xs bg-white/10 hover:bg-[#C5A880] hover:text-[#18181B] text-[#FAF9F5] rounded-xs transition-colors cursor-pointer border border-white/10"
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Large Category Banner Image Container */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#27272A] overflow-hidden">
              {currentBannerSrc ? (
                <img
                  src={currentBannerSrc}
                  alt={`${category.name} collection banner`}
                  loading="eager"
                  onError={() => setImageErrorLevel((prev) => prev + 1)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#27272A] to-[#18181B] text-center">
                  <Sparkles className="w-10 h-10 text-[#C5A880] mb-3" />
                  <span className="font-serif text-xl text-[#FAF9F5] mb-1">
                    {category.name}
                  </span>
                  <span className="text-xs text-[#A1A1AA]">
                    Bespoke Showroom Collection
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#18181B]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Section 1: Subcategories Grid — Display ONLY the subcategories listed under this category */}
        <section className="my-12 sm:my-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-[#E6DFD5] mb-8 gap-2">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block mb-1">
                Specialized Divisions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                {category.name} Subcategories
              </h2>
            </div>
            <p className="text-xs text-[#87786B]">
              Showing all {category.subcategories.length} subcategories under {category.name}
            </p>
          </div>

          {/* Subcategories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {category.subcategories.map((subcategory) => (
              <FurnitureSubcategoryCard
                key={subcategory.id}
                subcategory={subcategory}
                onSelect={onSelectSubcategory}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

