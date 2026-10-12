import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PortfolioCard } from '../components/PortfolioCard';
import {
  portfolioData,
  portfolioCategories,
  PortfolioCategory,
  PortfolioItem,
} from '../data/portfolio';

interface PortfolioProps {
  onEnquireItem: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onEnquireItem }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FAF9F5] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Design Inspirations &amp; Work"
          title="A Look Into Our Work"
          subtitle="Explore our custom furniture designs, handcrafted wood joinery, and complete residential interior solutions created for Mumbai homes."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-xs uppercase tracking-wider px-5 py-2.5 font-medium transition-all duration-200 cursor-pointer rounded-xs ${
                  isActive
                    ? 'bg-[#18181B] text-[#FAF9F5] shadow-xs font-semibold'
                    : 'bg-[#F4EFEA] text-[#5C554E] hover:text-[#18181B] border border-[#E6DFD5] hover:border-[#18181B]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid - 6 vibrant, distinct custom furniture and interior works */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onEnquire={onEnquireItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
