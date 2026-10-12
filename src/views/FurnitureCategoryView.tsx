import React from 'react';
import {
  FurnitureCategory,
  FurnitureSubcategory,
  FurnitureProduct,
} from '../data/furniture';
import { FurnitureSubcategoryCard } from '../components/furniture/FurnitureSubcategoryCard';
import { FurnitureBreadcrumbs } from '../components/furniture/FurnitureBreadcrumbs';

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
  onSelectProduct,
  onBuyNowProduct,
  onReturnHub,
  onReturnHome,
}) => {
  // If Living & Storage, group subcategories into clean architectural sections
  const isLivingStorage = category.slug === 'living-storage';

  const tvUnits = isLivingStorage
    ? category.subcategories.filter((s) => s.slug.includes('tv-unit'))
    : [];
  const wardrobes = isLivingStorage
    ? category.subcategories.filter((s) => s.slug.includes('wardrobe'))
    : [];
  const otherStorage = isLivingStorage
    ? category.subcategories.filter(
        (s) => !s.slug.includes('tv-unit') && !s.slug.includes('wardrobe')
      )
    : [];

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <FurnitureBreadcrumbs
          items={[
            { label: 'Home', onClick: onReturnHome },
            { label: 'Furniture', onClick: onReturnHub },
            { label: category.name, active: true },
          ]}
        />

        {/* Category Header Hero */}
        <div className="my-8 sm:my-12">
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#87786B] block mb-2">
            Collection &bull; {category.name}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#18181B] font-normal leading-tight mb-4">
            {category.tagline}
          </h1>
          <p className="text-xs sm:text-base text-[#5C554E] max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Subcategories Section */}
        {isLivingStorage ? (
          <div className="space-y-16 my-10 sm:my-14">
            {/* 1. TV Units */}
            <section>
              <div className="pb-3 border-b border-[#E6DFD5] mb-6">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block">
                  Media &amp; Entertainment
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                  Architectural TV Units
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                {tvUnits.map((subcategory) => (
                  <FurnitureSubcategoryCard
                    key={subcategory.id}
                    subcategory={subcategory}
                    onSelect={onSelectSubcategory}
                  />
                ))}
              </div>
            </section>

            {/* 2. Wardrobes */}
            <section>
              <div className="pb-3 border-b border-[#E6DFD5] mb-6">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block">
                  Bedroom Storage
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                  Custom Wardrobes &amp; Closets
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                {wardrobes.map((subcategory) => (
                  <FurnitureSubcategoryCard
                    key={subcategory.id}
                    subcategory={subcategory}
                    onSelect={onSelectSubcategory}
                  />
                ))}
              </div>
            </section>

            {/* 3. Sideboards, Cabinets & Display */}
            <section>
              <div className="pb-3 border-b border-[#E6DFD5] mb-6">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block">
                  Accent Joinery
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                  Sideboards, Cabinets &amp; Display
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                {otherStorage.map((subcategory) => (
                  <FurnitureSubcategoryCard
                    key={subcategory.id}
                    subcategory={subcategory}
                    onSelect={onSelectSubcategory}
                  />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <section className="my-10 sm:my-14">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD5] mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block">
                  Styles &amp; Variations
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                  Explore {category.name} Styles
                </h2>
              </div>
              <span className="text-xs text-[#87786B] font-medium hidden sm:block">
                {category.subcategories.length} Specialized Subcategories
              </span>
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
        )}
      </div>
    </div>
  );
};
