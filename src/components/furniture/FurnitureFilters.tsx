import React, { useState } from 'react';
import { SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';

export type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc';

export interface FilterState {
  priceRange: string;
  customizableOnly: boolean;
  inStockOnly: boolean;
}

interface FurnitureFiltersProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalProducts: number;
}

export const FurnitureFilters: React.FC<FurnitureFiltersProps> = ({
  sortBy,
  onSortChange,
  filters,
  onFilterChange,
  totalProducts,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const priceOptions = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹1,00,000', value: 'under-1l' },
    { label: '₹1,00,000 – ₹1,50,000', value: '1l-1.5l' },
    { label: '₹1,50,000 & Above', value: 'above-1.5l' },
  ];

  const handlePriceChange = (val: string) => {
    onFilterChange({ ...filters, priceRange: val });
  };

  const handleCustomizableToggle = () => {
    onFilterChange({ ...filters, customizableOnly: !filters.customizableOnly });
  };

  const handleInStockToggle = () => {
    onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly });
  };

  const hasActiveFilters =
    filters.priceRange !== 'all' || filters.customizableOnly || filters.inStockOnly;

  const resetFilters = () => {
    onFilterChange({
      priceRange: 'all',
      customizableOnly: false,
      inStockOnly: false,
    });
  };

  return (
    <div className="mb-8">
      {/* Desktop & Tablet Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E6DFD5]">
        {/* Left: Product count & quick pills */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-[#87786B] font-semibold">
            {totalProducts} {totalProducts === 1 ? 'Design' : 'Designs'}
          </span>

          {/* Quick toggle chips */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={handleCustomizableToggle}
              className={`text-xs px-3 py-1.5 rounded-xs transition-colors cursor-pointer border ${
                filters.customizableOnly
                  ? 'bg-[#18181B] text-[#FAF9F5] border-[#18181B]'
                  : 'bg-[#F4EFEA] text-[#5C554E] hover:text-[#18181B] border-[#D9D1C5]'
              }`}
            >
              Customizable Only
            </button>

            <button
              type="button"
              onClick={handleInStockToggle}
              className={`text-xs px-3 py-1.5 rounded-xs transition-colors cursor-pointer border ${
                filters.inStockOnly
                  ? 'bg-[#18181B] text-[#FAF9F5] border-[#18181B]'
                  : 'bg-[#F4EFEA] text-[#5C554E] hover:text-[#18181B] border-[#D9D1C5]'
              }`}
            >
              In Stock
            </button>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-[#9B8D82] hover:text-[#B91C1C] underline cursor-pointer ml-1"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Right: Sort Dropdown & Mobile Filter Button */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Mobile Filter Trigger */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="md:hidden inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-2 bg-[#F4EFEA] border border-[#D9D1C5] text-[#18181B] rounded-xs cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>

          {/* Sort By Select */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#87786B] uppercase tracking-wider font-semibold hidden sm:inline-flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3" /> Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-[#FAF9F5] border border-[#D9D1C5] px-3 py-1.5 text-xs text-[#18181B] font-medium rounded-xs focus:outline-hidden focus:border-[#18181B] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in">
          <div className="bg-[#FAF9F5] border border-[#D9D1C5] w-full max-w-md rounded-t-sm sm:rounded-xs shadow-2xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD5] mb-5">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#18181B]" />
                <h3 className="font-serif text-lg text-[#18181B]">Filters &amp; Preferences</h3>
              </div>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="text-[#87786B] hover:text-[#18181B] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Price range */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2.5">
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {priceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handlePriceChange(opt.value)}
                      className={`text-xs p-2.5 rounded-xs text-left transition-colors border cursor-pointer ${
                        filters.priceRange === opt.value
                          ? 'bg-[#18181B] text-[#FAF9F5] border-[#18181B] font-medium'
                          : 'bg-[#F4EFEA] text-[#5C554E] border-[#D9D1C5]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2 border-t border-[#E6DFD5]">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-medium text-[#18181B]">Customizable Designs</span>
                  <input
                    type="checkbox"
                    checked={filters.customizableOnly}
                    onChange={handleCustomizableToggle}
                    className="accent-[#18181B] w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-medium text-[#18181B]">In Stock Only</span>
                  <input
                    type="checkbox"
                    checked={filters.inStockOnly}
                    onChange={handleInStockToggle}
                    className="accent-[#18181B] w-4 h-4 cursor-pointer"
                  />
                </label>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-[#E6DFD5] flex items-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="w-1/2 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#87786B] hover:text-[#18181B] cursor-pointer"
              >
                Clear All
              </button>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-1/2 py-2.5 bg-[#18181B] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs cursor-pointer"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
