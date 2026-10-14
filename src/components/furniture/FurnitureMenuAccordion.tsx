import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { furnitureCategories } from '../../data/furniture';

interface FurnitureMenuAccordionProps {
  onSelectCategory: (categorySlug: string) => void;
  onSelectSubcategory: (categorySlug: string, subcategorySlug: string) => void;
  onCloseMenu: () => void;
}

export const FurnitureMenuAccordion: React.FC<FurnitureMenuAccordionProps> = ({
  onSelectCategory,
  onSelectSubcategory,
  onCloseMenu,
}) => {
  const [isFurnitureExpanded, setIsFurnitureExpanded] = useState(false);
  const [expandedCategorySlug, setExpandedCategorySlug] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    setExpandedCategorySlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <div>
      {/* Primary Trigger: EXPLORE OUR FURNITURE — styled identically to other menu items */}
      <button
        type="button"
        onClick={() => setIsFurnitureExpanded(!isFurnitureExpanded)}
        className="w-full flex items-center justify-between text-left text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#9A6F3E] py-2 transition-colors cursor-pointer group"
      >
        <span>Explore Our Furniture</span>
        <ChevronDown
          className={`w-4 h-4 text-[#87786B] transition-transform duration-200 group-hover:text-[#9A6F3E] ${
            isFurnitureExpanded ? 'rotate-180 text-[#18181B]' : ''
          }`}
        />
      </button>

      {/* Level 1: 6 Major Categories in exact order */}
      {isFurnitureExpanded && (
        <div className="pl-3 pr-1 py-2 space-y-1 bg-[#F4EFEA]/60 rounded-xs mt-1 animate-in fade-in duration-200">
          {furnitureCategories.map((cat, idx) => {
            const isCategoryOpen = expandedCategorySlug === cat.slug;

            return (
              <div
                key={cat.id}
                className="border-b border-[#EAE3D9]/60 last:border-b-0 pb-1.5 pt-1"
              >
                {/* Major Category Row */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.slug)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#2B2724] hover:text-[#9A6F3E] py-2 text-left flex-1 cursor-pointer flex items-center justify-between pr-2 group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] text-[#9A6F3E] font-serif font-bold">
                        0{idx + 1}
                      </span>
                      <span>{cat.name}</span>
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#87786B] transition-transform duration-200 group-hover:text-[#18181B] ${
                        isCategoryOpen ? 'rotate-180 text-[#18181B]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Level 2: Subcategories for this selected major category */}
                {isCategoryOpen && (
                  <div className="pl-3 py-1.5 space-y-1.5 border-l-2 border-[#9A6F3E]/40 my-1 animate-in fade-in duration-150">
                    {/* View All Category Collection link */}
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          onSelectCategory(cat.slug);
                          onCloseMenu();
                        }}
                        className="w-full text-left text-xs font-semibold uppercase tracking-wider text-[#9A6F3E] hover:text-[#18181B] py-1 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>View All {cat.name}</span>
                        <ChevronRight className="w-3 h-3 text-[#9A6F3E]" />
                      </button>
                    </div>

                    {/* Exactly its own subcategories */}
                    <ul className="space-y-1 pt-1">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.id}>
                          <button
                            type="button"
                            onClick={() => {
                              onSelectSubcategory(cat.slug, sub.slug);
                              onCloseMenu();
                            }}
                            className="w-full text-left text-xs text-[#5C554E] hover:text-[#18181B] hover:font-medium py-1 transition-colors flex items-center justify-between group cursor-pointer"
                          >
                            <span>{sub.name}</span>
                            <ChevronRight className="w-3 h-3 text-[#B0A79C] group-hover:text-[#18181B] group-hover:translate-x-0.5 transition-all" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
