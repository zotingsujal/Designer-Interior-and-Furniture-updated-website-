import React, { useMemo } from 'react';
import { Sparkles, MessageSquare, ShieldCheck, Hammer, Layers, Ruler } from 'lucide-react';
import {
  furnitureCategories,
  FurnitureCategory,
  furnitureProducts,
  FurnitureProduct,
  getCuratedCarousels,
} from '../data/furniture';
import { FurnitureCategoryCard } from '../components/furniture/FurnitureCategoryCard';
import { FurnitureBreadcrumbs } from '../components/furniture/FurnitureBreadcrumbs';
import { OppositeDirectionCarousels } from '../components/furniture/OppositeDirectionCarousels';

interface FurnitureHubViewProps {
  onSelectCategory: (category: FurnitureCategory) => void;
  onSelectProduct: (product: FurnitureProduct) => void;
  onBuyNowProduct: (product: FurnitureProduct) => void;
  onReturnHome: () => void;
  onOpenConsultation: () => void;
}

export const FurnitureHubView: React.FC<FurnitureHubViewProps> = ({
  onSelectCategory,
  onSelectProduct,
  onBuyNowProduct,
  onReturnHome,
  onOpenConsultation,
}) => {
  const { carousel1: productsRow1, carousel2: productsRow2 } = useMemo(() => {
    return getCuratedCarousels();
  }, []);
  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <FurnitureBreadcrumbs
          items={[
            { label: 'Home', onClick: onReturnHome },
            { label: 'Explore Our Furniture', active: true },
          ]}
        />

        {/* Hero Section */}
        <div className="relative my-6 sm:my-10 bg-[#F4EFEA] border border-[#E6DFD5] rounded-xs overflow-hidden p-8 sm:p-14 lg:p-16">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#87786B] block mb-3">
              Bespoke Showroom &bull; Santacruz West, Mumbai
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#18181B] font-normal leading-tight mb-5">
              Explore Our Furniture
            </h1>
            <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed mb-8 max-w-xl">
              Discover thoughtfully designed furniture crafted around your space, lifestyle and everyday needs. Every sofa, dining ensemble, bed and wardrobe is manufactured with precision joinery in our Mumbai factory.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#categories-grid"
                className="px-6 py-3 bg-[#18181B] hover:bg-[#38332E] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs transition-colors"
              >
                Browse 4 Major Collections
              </a>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-transparent hover:bg-white text-[#18181B] border border-[#D9D1C5] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer"
              >
                Custom Design Consultation
              </button>
            </div>
          </div>

          {/* Background Decorative Accent */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-15 lg:opacity-35 pointer-events-none hidden md:block">
            <img
              src="/images/chesterfield_drive.jpg"
              alt="D'Signer Furniture craftsmanship"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Shop By Category Section */}
        <section id="categories-grid" className="my-14 sm:my-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] block mb-2">
              Curated Catalogue
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] font-normal mb-3">
              Shop By Category
            </h2>
            <p className="text-xs sm:text-sm text-[#5C554E]">
              Select a category to explore specialized styles, sizes, and handcrafted configurations tailored for Mumbai residences.
            </p>
          </div>

          {/* Categories Grid (4 Major Categories) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
            {furnitureCategories.map((category) => (
              <FurnitureCategoryCard
                key={category.id}
                category={category}
                onSelect={onSelectCategory}
              />
            ))}
          </div>
        </section>

        {/* Dynamic Opposite-Direction Dual Carousels */}
        <OppositeDirectionCarousels
          productsRow1={productsRow1}
          productsRow2={productsRow2}
          onSelectProduct={onSelectProduct}
          onBuyNowProduct={onBuyNowProduct}
        />

        {/* Factory Direct Craftsmanship Banner */}
        <section className="bg-[#18181B] text-[#FAF9F5] p-8 sm:p-12 rounded-xs my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#C5A880] font-semibold block mb-2">
                Direct From Factory
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug mb-4">
                Have a specific space or architectural design in mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Unlike mass-retail furniture brands, we own our complete carpentry, upholstery, and finishing factory in Mumbai. You can customize exact room dimensions, select wood species (Burma Teak, Oak, Walnut), pick fabrics, or commission custom pieces.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/919821432122?text=Hi%20Designer%20Furniture%2C%20I%20would%20like%20to%20discuss%20a%20custom%20furniture%20piece%20for%20my%20home."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Factory Team</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 bg-transparent hover:bg-white/10 text-[#FAF9F5] border border-[#71717A] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  Book Showroom Visit
                </button>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <Ruler className="w-5 h-5 text-[#C5A880] mb-2" />
                <h4 className="font-semibold text-[#FAF9F5] mb-1">Made-to-Measure</h4>
                <p className="text-[#A1A1AA] text-[11px] leading-relaxed">
                  Tailored down to the inch to match your floor plan perfectly.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <Hammer className="w-5 h-5 text-[#C5A880] mb-2" />
                <h4 className="font-semibold text-[#FAF9F5] mb-1">Kiln-Dried Timber</h4>
                <p className="text-[#A1A1AA] text-[11px] leading-relaxed">
                  Seasoned solid hardwoods guaranteed against warping or borer attacks.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <Layers className="w-5 h-5 text-[#C5A880] mb-2" />
                <h4 className="font-semibold text-[#FAF9F5] mb-1">Density Foam Comfort</h4>
                <p className="text-[#A1A1AA] text-[11px] leading-relaxed">
                  High-resilience 40-density layered foam and pocket springs.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <ShieldCheck className="w-5 h-5 text-[#C5A880] mb-2" />
                <h4 className="font-semibold text-[#FAF9F5] mb-1">White-Glove Delivery</h4>
                <p className="text-[#A1A1AA] text-[11px] leading-relaxed">
                  Direct assembly and placement across Mumbai, Thane &amp; Navi Mumbai.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
