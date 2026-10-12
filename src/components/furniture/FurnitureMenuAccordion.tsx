import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
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
  const [expandedLivingSection, setExpandedLivingSection] = useState<'tv' | 'wardrobes' | null>(null);

  const toggleCategory = (slug: string) => {
    setExpandedCategorySlug((prev) => (prev === slug ? null : slug));
    setExpandedLivingSection(null);
  };

  const livingCategory = furnitureCategories.find((c) => c.slug === 'living-storage');
  const tvUnits = livingCategory
    ? livingCategory.subcategories.filter((s) => s.slug.includes('tv-unit'))
    : [];
  const wardrobes = livingCategory
    ? livingCategory.subcategories.filter((s) => s.slug.includes('wardrobe'))
    : [];
  const otherLivingStorage = livingCategory
    ? livingCategory.subcategories.filter(
        (s) => !s.slug.includes('tv-unit') && !s.slug.includes('wardrobe')
      )
    : [];

  return (
    <div className="border-y border-[#EAE3D9] py-2 my-1">
      {/* Primary Trigger: EXPLORE OUR FURNITURE */}
      <button
        type="button"
        onClick={() => setIsFurnitureExpanded(!isFurnitureExpanded)}
        className="w-full flex items-center justify-between text-left py-2.5 px-1 font-semibold text-sm tracking-wider uppercase text-[#18181B] hover:text-[#9A6F3E] transition-colors cursor-pointer group"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#C5A880]" />
          <span className="font-serif normal-case text-base sm:text-lg font-medium text-[#18181B] group-hover:text-[#9A6F3E]">
            Explore Our Furniture
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#18181B] text-[#FAF9F5] rounded-xs ml-1">
            4 Categories
          </span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#87786B] transition-transform duration-200 ${
            isFurnitureExpanded ? 'rotate-180 text-[#18181B]' : ''
          }`}
        />
      </button>

      {/* Level 1: 4 Major Categories */}
      {isFurnitureExpanded && (
        <div className="pl-4 pr-1 py-2 space-y-1 bg-[#F4EFEA]/60 rounded-xs mt-1 animate-in fade-in duration-200">
          {furnitureCategories.map((cat) => {
            const isCategoryOpen = expandedCategorySlug === cat.slug;
            const isLiving = cat.slug === 'living-storage';

            return (
              <div key={cat.id} className="border-b border-[#EAE3D9]/60 last:border-b-0 pb-1 pt-1">
                {/* Major Category Row */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.slug)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#2B2724] hover:text-[#9A6F3E] py-2 text-left flex-1 cursor-pointer flex items-center justify-between pr-2"
                  >
                    <span>{cat.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#87786B] transition-transform duration-200 ${
                        isCategoryOpen ? 'rotate-180 text-[#18181B]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Level 2: Subcategories */}
                {isCategoryOpen && (
                  <div className="pl-3 py-1.5 space-y-1.5 border-l-2 border-[#D9D1C5] my-1 animate-in fade-in">
                    {/* View All Collection link */}
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

                    {isLiving ? (
                      /* Clean Living & Storage Structure as per Requirement 4 */
                      <div className="space-y-1 pt-1">
                        {/* 1. TV Units Expandable */}
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedLivingSection((prev) =>
                                prev === 'tv' ? null : 'tv'
                              )
                            }
                            className="w-full text-left text-xs font-medium text-[#2B2724] hover:text-[#9A6F3E] py-1 flex items-center justify-between cursor-pointer"
                          >
                            <span>TV Units</span>
                            <ChevronDown
                              className={`w-3 h-3 text-[#87786B] transition-transform ${
                                expandedLivingSection === 'tv' ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {expandedLivingSection === 'tv' && (
                            <ul className="pl-3 py-1 space-y-1 border-l border-[#D9D1C5] my-1">
                              {tvUnits.map((sub) => (
                                <li key={sub.id}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      onSelectSubcategory('living-storage', sub.slug);
                                      onCloseMenu();
                                    }}
                                    className="w-full text-left text-[11px] text-[#5C554E] hover:text-[#18181B] py-0.5 cursor-pointer"
                                  >
                                    {sub.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* 2. Wardrobes Expandable */}
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedLivingSection((prev) =>
                                prev === 'wardrobes' ? null : 'wardrobes'
                              )
                            }
                            className="w-full text-left text-xs font-medium text-[#2B2724] hover:text-[#9A6F3E] py-1 flex items-center justify-between cursor-pointer"
                          >
                            <span>Wardrobes</span>
                            <ChevronDown
                              className={`w-3 h-3 text-[#87786B] transition-transform ${
                                expandedLivingSection === 'wardrobes' ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {expandedLivingSection === 'wardrobes' && (
                            <ul className="pl-3 py-1 space-y-1 border-l border-[#D9D1C5] my-1">
                              {wardrobes.map((sub) => (
                                <li key={sub.id}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      onSelectSubcategory('living-storage', sub.slug);
                                      onCloseMenu();
                                    }}
                                    className="w-full text-left text-[11px] text-[#5C554E] hover:text-[#18181B] py-0.5 cursor-pointer"
                                  >
                                    {sub.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* 3. Direct Storage Subcategories */}
                        {otherLivingStorage.map((sub) => (
                          <div key={sub.id}>
                            <button
                              type="button"
                              onClick={() => {
                                onSelectSubcategory('living-storage', sub.slug);
                                onCloseMenu();
                              }}
                              className="w-full text-left text-xs text-[#5C554E] hover:text-[#18181B] py-1 transition-colors flex items-center justify-between cursor-pointer"
                            >
                              <span>{sub.name}</span>
                              <ChevronRight className="w-3 h-3 text-[#B0A79C]" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Standard subcategories for Sofas, Dining, Beds */
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
                    )}
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
