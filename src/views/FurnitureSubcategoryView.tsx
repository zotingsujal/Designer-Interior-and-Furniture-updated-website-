import React, { useState, useMemo } from 'react';
import {
  FurnitureCategory,
  FurnitureSubcategory,
  FurnitureProduct,
  getProductsBySubcategory,
  getCuratedCarousels,
  editorialGuides,
} from '../data/furniture';
import { FurnitureProductCard } from '../components/furniture/FurnitureProductCard';
import { FurnitureBreadcrumbs } from '../components/furniture/FurnitureBreadcrumbs';
import { FurnitureFilters, SortOption, FilterState } from '../components/furniture/FurnitureFilters';
import { SofaBedVideoHero } from '../components/furniture/SofaBedVideoHero';
import { OppositeDirectionCarousels } from '../components/furniture/OppositeDirectionCarousels';
import { MessageSquare, Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import { getSubcategoryFaqs } from '../data/subcategoryFaqs';

interface FurnitureSubcategoryViewProps {
  category: FurnitureCategory;
  subcategory: FurnitureSubcategory;
  onSelectProduct: (product: FurnitureProduct) => void;
  onBuyNowProduct: (product: FurnitureProduct) => void;
  onReturnCategory: () => void;
  onReturnHub: () => void;
  onReturnHome: () => void;
}

export const FurnitureSubcategoryView: React.FC<FurnitureSubcategoryViewProps> = ({
  category,
  subcategory,
  onSelectProduct,
  onBuyNowProduct,
  onReturnCategory,
  onReturnHub,
  onReturnHome,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [filters, setFilters] = useState<FilterState>({
    priceRange: 'all',
    customizableOnly: false,
    inStockOnly: false,
  });

  const rawProducts = useMemo(() => {
    return getProductsBySubcategory(category.slug, subcategory.slug);
  }, [category.slug, subcategory.slug]);

  // Two fixed opposite-direction horizontal auto-scrolling carousels across all 4 categories (Requirement 5)
  const { carousel1: productsRow1, carousel2: productsRow2 } = useMemo(() => {
    return getCuratedCarousels();
  }, []);

  const editorial = editorialGuides[subcategory.slug] || editorialGuides[category.slug];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const subcategoryFaqs = useMemo(() => {
    return getSubcategoryFaqs(subcategory.slug, subcategory.name, category.slug);
  }, [subcategory.slug, subcategory.name, category.slug]);

  const filteredProducts = useMemo(() => {
    let list = [...rawProducts];

    // Filter by price
    if (filters.priceRange === 'under-1l') {
      list = list.filter((p) => p.price !== null && p.price < 100000);
    } else if (filters.priceRange === '1l-1.5l') {
      list = list.filter((p) => p.price !== null && p.price >= 100000 && p.price <= 150000);
    } else if (filters.priceRange === 'above-1.5l') {
      list = list.filter((p) => p.price !== null && p.price > 150000);
    }

    // Filter by customizable
    if (filters.customizableOnly) {
      list = list.filter((p) => p.isCustomizable);
    }

    // Filter by in stock
    if (filters.inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => (a.price ?? 9999999) - (b.price ?? 9999999));
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (a.badge === 'New' ? -1 : 1));
    }

    return list;
  }, [rawProducts, filters, sortBy]);

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation: Home → Furniture → Category → Subcategory */}
        <FurnitureBreadcrumbs
          items={[
            { label: 'Home', onClick: onReturnHome },
            { label: 'Furniture', onClick: onReturnHub },
            { label: category.name, onClick: onReturnCategory },
            { label: subcategory.name, active: true },
          ]}
        />

        {/* Subcategory Header */}
        <div className="my-8 sm:my-10">
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#87786B] block mb-2">
            {category.name} &bull; Handcrafted Selection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-normal leading-tight mb-3">
            {subcategory.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#5C554E] max-w-2xl leading-relaxed">
            {subcategory.description} Each design can be tailored in custom dimensions, bespoke wood stains, and imported fabrics directly at our Mumbai factory workshop.
          </p>
        </div>

        {/* Dual-Purpose Transforming Video Feature Banner (for Sofa Cum Beds) */}
        {subcategory.slug === 'sofa-cum-beds' && (
          <SofaBedVideoHero
            onScrollToProducts={() => {
              const el = document.getElementById('subcategory-products-grid');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}

        {/* Filters & Sorting Toolbar */}
        <FurnitureFilters
          sortBy={sortBy}
          onSortChange={setSortBy}
          filters={filters}
          onFilterChange={setFilters}
          totalProducts={filteredProducts.length}
        />

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F4EFEA] border border-[#E6DFD5] rounded-xs p-8 my-8">
            <h3 className="font-serif text-xl text-[#18181B] mb-2">
              No matching {subcategory.name.toLowerCase()} found
            </h3>
            <p className="text-xs text-[#5C554E] max-w-md mx-auto mb-6">
              We also design and manufacture completely bespoke {subcategory.name.toLowerCase()} from reference sketches and floor plan dimensions.
            </p>
            <a
              href={`https://wa.me/919821432122?text=Hi%20Designer%20Furniture%2C%20I%20am%20looking%20for%20a%20custom%20${encodeURIComponent(
                subcategory.name
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1F5435] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs hover:bg-[#18452B] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Custom Design on WhatsApp</span>
            </a>
          </div>
        ) : (
          <div id="subcategory-products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 scroll-mt-24">
            {filteredProducts.map((product) => (
              <FurnitureProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onBuyNow={onBuyNowProduct}
              />
            ))}
          </div>
        )}

        {/* Requirement 40: Educational Editorial Content */}
        {editorial && (
          <div className="my-16 p-8 sm:p-12 bg-[#F4EFEA] border border-[#E0D7CC] rounded-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] bg-[#EAE3D9] rounded-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#18181B]" />
              <span>Architectural Buyer's Guide</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal mb-2">
              {editorial.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#70675E] italic mb-6">
              {editorial.subtitle}
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#5C554E] leading-relaxed mb-6">
              {editorial.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            {editorial.tips && editorial.tips.length > 0 && (
              <div className="pt-6 border-t border-[#D9D1C5]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-3">
                  Key Recommendations for Mumbai Homes:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {editorial.tips.map((tip, idx) => (
                    <div key={idx} className="p-3.5 bg-white/80 border border-[#E6DFD5] rounded-xs text-xs text-[#4A453F] leading-relaxed">
                      &bull; {tip}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Custom Commission Advisory */}
        <div className="mt-12 mb-16 p-6 sm:p-8 bg-[#F4EFEA] border border-[#E6DFD5] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <h4 className="font-serif text-base sm:text-lg text-[#18181B] mb-1">
              Need a custom size or material for your space?
            </h4>
            <p className="text-[#5C554E]">
              Every piece in our catalogue can be altered to fit specific room niches, ceiling heights, or fabric swatches.
            </p>
          </div>
          <a
            href={`https://wa.me/919821432122?text=Hello%20Designer%20Furniture%2C%20I%20am%20interested%20in%20customizing%20a%20design%20from%20your%20${encodeURIComponent(
              subcategory.name
            )}%20collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 bg-[#18181B] text-[#FAF9F5] uppercase tracking-wider font-semibold rounded-xs hover:bg-[#38332E] transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Consult Design Team</span>
          </a>
        </div>

        {/* Dedicated Subcategory Product Page FAQs */}
        <div className="my-14 p-6 sm:p-10 bg-[#FAF9F5] border border-[#E0D7CC] rounded-xs">
          <div className="border-b border-[#EAE3D9] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#87786B] mb-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                {subcategory.name} Customization &amp; Specifications FAQ
              </h3>
            </div>
            <a
              href={`https://wa.me/919821432122?text=Hello%20Designer%20Furniture%2C%20I%20have%20a%20question%20about%20customizing%20${encodeURIComponent(subcategory.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0 shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Ask About {subcategory.name}</span>
            </a>
          </div>

          <div className="space-y-3">
            {subcategoryFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xs transition-colors overflow-hidden ${
                    isOpen
                      ? 'bg-[#F4EFEA] border-[#D9D1C5] shadow-2xs'
                      : 'bg-white/80 hover:bg-[#F9F6F0] border-[#E6DFD5]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#18181B] font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#87786B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#18181B]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-[#4A453F] leading-relaxed border-t border-[#EAE3D9]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Exactly Two Opposite-Direction Auto-Scrolling Carousels ONLY on individual subcategory pages below listings */}
        <OppositeDirectionCarousels
          productsRow1={productsRow1}
          productsRow2={productsRow2}
          onSelectProduct={onSelectProduct}
          onBuyNowProduct={onBuyNowProduct}
        />
      </div>
    </div>
  );
};
