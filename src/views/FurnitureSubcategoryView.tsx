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
import { FurnitureImage } from '../components/furniture/FurnitureImage';
import { getSubcategoryBanner } from '../data/subcategoryBanners';
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

        {/* Subcategory Banner */}
        {(() => {
          const bannerConfig = getSubcategoryBanner(subcategory.slug);
          const bannerImage = subcategory.image || bannerConfig?.localAssetUrl || bannerConfig?.directDriveUrl;
          const fallbackImage = bannerConfig?.directDriveUrl;

          return (
            <div className="relative my-6 sm:my-8 bg-[#18181B] text-[#FAF9F5] rounded-xs border border-[#27272A] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Left Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold text-[#C5A880] px-2.5 py-0.5 bg-white/10 rounded-xs">
                        {category.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#C5A880]" />
                        <span>Mumbai Workshop Collection</span>
                      </span>
                    </div>
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF9F5] font-normal leading-tight mb-3">
                      {subcategory.name}
                    </h1>
                    <p className="text-xs sm:text-sm text-[#D4D4D8] max-w-xl leading-relaxed mb-6 font-light">
                      {subcategory.description} Each design can be tailored in custom dimensions, bespoke wood stains, and imported fabrics directly at our Mumbai factory workshop.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <a
                      href={`https://wa.me/919821432122?text=Hi%20Designer%20Furniture%2C%20I%20am%20inquiring%20about%20custom%20${encodeURIComponent(
                        subcategory.name
                      )}%20options.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Factory Team</span>
                    </a>
                    <span className="text-[11px] text-[#A1A1AA] hidden sm:inline">
                      Bespoke Dimensions &bull; Santacruz West
                    </span>
                  </div>
                </div>

                {/* Right Subcategory Banner Image Column */}
                <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full bg-[#27272A] overflow-hidden group">
                  <FurnitureImage
                    src={bannerImage}
                    fallbackSrc={fallbackImage}
                    alt={`${subcategory.name} collection banner`}
                    category={category.slug}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#18181B]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          );
        })()}

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
          <div className="text-center py-16 bg-[#F4EFEA] border border-[#E6DFD5] rounded-xs p-8 sm:p-12 my-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#EAE3D9] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-[#9A6F3E]" />
            </div>
            <h3 className="font-serif text-2xl text-[#18181B] mb-2 font-normal">
              Bespoke {subcategory.name} Custom Made to Order
            </h3>
            <p className="text-xs sm:text-sm text-[#5C554E] max-w-lg mx-auto mb-6 leading-relaxed">
              We engineer and craft bespoke {subcategory.name.toLowerCase()} tailored down to the inch from your architectural drawings, reference photos, and living requirements in our Santacruz West factory.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/919821432122?text=Hi%20Designer%20Furniture%2C%20I%20am%20looking%20for%20a%20custom%20${encodeURIComponent(
                  subcategory.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Custom Quote on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  onReturnHome();
                  setTimeout(() => {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181B] hover:bg-[#38332E] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer"
              >
                <span>ENQUIRY &bull; Submit Requirement</span>
              </button>
            </div>
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

        {/* Opposite-Direction Auto-Scrolling Carousel: Curated Signature Pieces & Everyday Favourites (Exclusively on individual subcategory product listings) */}
        <div className="mt-14 mb-4">
          <OppositeDirectionCarousels
            productsRow1={productsRow1}
            productsRow2={productsRow2}
            onSelectProduct={onSelectProduct}
            onBuyNowProduct={onBuyNowProduct}
          />
        </div>

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
      </div>
    </div>
  );
};
