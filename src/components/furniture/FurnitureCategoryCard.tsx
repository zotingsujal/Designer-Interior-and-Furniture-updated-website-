import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FurnitureCategory } from '../../data/furniture';
import { FurnitureImage } from './FurnitureImage';

interface FurnitureCategoryCardProps {
  category: FurnitureCategory;
  onSelect: (category: FurnitureCategory) => void;
}

export const FurnitureCategoryCard: React.FC<FurnitureCategoryCardProps> = ({
  category,
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect(category)}
      className="group relative bg-[#FAF9F5] border border-[#E6DFD5] hover:border-[#18181B] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer rounded-xs shadow-2xs hover:shadow-lg"
    >
      {/* Category Image */}
      <div className="relative aspect-[16/10] bg-[#EFEAE2] overflow-hidden">
        <FurnitureImage
          src={category.heroImage}
          alt={category.name}
          category={category.slug}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category Overlay Title */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D4C3B3] block mb-1">
            Collection
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight text-[#FAF9F5]">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Category Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#FAF9F5]">
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed line-clamp-3">
            {category.description}
          </p>
          <div className="mt-3 text-[11px] uppercase tracking-wider text-[#87786B] font-medium">
            {category.subcategories.length} Specialized Subcategories
          </div>
        </div>

        <div className="pt-3 border-t border-[#EAE3D9] flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#18181B] group-hover:text-[#9A6F3E] transition-colors inline-flex items-center gap-2">
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
};
