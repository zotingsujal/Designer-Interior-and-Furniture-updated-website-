import React, { useState } from 'react';
import {
  MessageSquare,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import {
  FurnitureProduct,
  FurnitureCategory,
  FurnitureSubcategory,
  getCompleteTheLookProducts,
  editorialGuides,
} from '../data/furniture';
import { FurnitureProductGallery } from '../components/furniture/FurnitureProductGallery';
import { FurnitureBreadcrumbs } from '../components/furniture/FurnitureBreadcrumbs';
import { RelatedProductsCarousel } from '../components/furniture/RelatedProductsCarousel';

interface FurnitureProductDetailViewProps {
  product: FurnitureProduct;
  category: FurnitureCategory;
  subcategory: FurnitureSubcategory;
  onSelectProduct: (product: FurnitureProduct) => void;
  onBuyNowProduct?: (product: FurnitureProduct) => void;
  onReturnSubcategory: () => void;
  onReturnCategory: () => void;
  onReturnHub: () => void;
  onReturnHome: () => void;
  onOpenConsultation?: (title?: string) => void;
}

export const FurnitureProductDetailView: React.FC<FurnitureProductDetailViewProps> = ({
  product,
  category,
  subcategory,
  onSelectProduct,
  onBuyNowProduct = () => {},
  onReturnSubcategory,
  onReturnCategory,
  onReturnHub,
  onReturnHome,
  onOpenConsultation,
}) => {

  // Accordion state
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    desc: true,
    materials: false,
    delivery: false,
    care: false,
    faqs: true,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Hi Designer Furniture & Interior, I would like to enquire about the "${product.name}" (${subcategory.name}). Please share customization details, dimensions, and specifications.`;
    window.open(`https://wa.me/919821432122?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Requirement 18: Contextually relevant "Complete the Look" complementary furniture
  const completeTheLook = getCompleteTheLookProducts(product, 6);
  const editorial = editorialGuides[subcategory.slug] || editorialGuides[category.slug];
  const isSofaSet = product.subcategorySlug === 'sofa-sets';

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation: Home → Furniture → Category → Subcategory → Product */}
        <FurnitureBreadcrumbs
          items={[
            { label: 'Home', onClick: onReturnHome },
            { label: 'Furniture', onClick: onReturnHub },
            { label: category.name, onClick: onReturnCategory },
            { label: subcategory.name, onClick: onReturnSubcategory },
            { label: product.name, active: true },
          ]}
        />

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6 mb-16 items-start">
          {/* Left Column: Image Gallery (7 cols on lg) */}
          <div className="lg:col-span-7">
            <FurnitureProductGallery
              images={product.images && product.images.length > 0 ? product.images : [product.primaryImage]}
              productName={product.name}
              category={product.categorySlug}
              productSlug={product.slug}
            />
          </div>

          {/* Right Column: Product Details & Purchase Actions (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              {/* Category & Badge header */}
              <div className="flex items-center justify-between text-xs text-[#87786B] mb-2">
                <span className="uppercase tracking-[0.18em] font-medium">
                  {subcategory.name} &bull; Mumbai Atelier
                </span>
                {!isSofaSet && product.badge && (
                  <span className="px-2 py-0.5 bg-[#18181B] text-[#FAF9F5] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-[#18181B] font-normal leading-tight mb-3">
                {product.name}
              </h1>

              {/* Short summary description */}
              <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed mb-5">
                {product.shortDescription}
              </p>

              {/* Single ENQUIRE ABOUT THIS PRODUCT WhatsApp button directly below product name and description */}
              <div className="pt-1 pb-1">
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xs flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                </button>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#716A62]">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#18181B]" />
                <span>Mumbai White-Glove Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-[#18181B]" />
                <span>Direct Workshop Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* In-House Manufacturing Craftsmanship Callout - Displayed above Product Specifications & Craftsmanship */}
        <div className="mb-6 p-5 bg-[#F4EFEA] border border-[#E6DFD5] rounded-xs flex items-start gap-4 text-xs max-w-4xl">
          <div className="w-9 h-9 rounded-full bg-[#18181B] text-[#FAF9F5] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#18181B] mb-1">
              100% In-House Factory Joinery &bull; Santacruz West
            </h4>
            <p className="text-[#5C554E] leading-relaxed">
              Every timber joint, high-density foam contour, and hand-tufted seam is inspected inside our Mumbai workshop. Custom room dimensions and stain finishes available upon enquiry.
            </p>
          </div>
        </div>

        {/* Detailed Product Specifications & FAQs Accordions */}
        <div className="border-t border-[#E6DFD5] pt-10 my-10 max-w-4xl">
          <h3 className="font-serif text-2xl text-[#18181B] mb-6">
            Product Specifications &amp; Craftsmanship
          </h3>

          <div className="divide-y divide-[#E6DFD5] border-y border-[#E6DFD5]">
            {/* 1. Description */}
            <div className="py-4">
              <button
                type="button"
                onClick={() => toggleAccordion('desc')}
                className="w-full flex items-center justify-between text-left font-serif text-lg text-[#18181B] cursor-pointer"
              >
                <span>Full Product Overview</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#87786B] transition-transform ${
                    openAccordions.desc ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordions.desc && (
                <div className="pt-3 text-xs sm:text-sm text-[#5C554E] leading-relaxed animate-in fade-in">
                  <p className="mb-2">{product.description}</p>
                  <p>
                    Manufactured at Designer Furniture &amp; Interior Factory in Mumbai. Every unit undergoes strict quality inspection for frame strength, joinery precision, and seam alignment.
                  </p>
                </div>
              )}
            </div>



            {/* 3. Materials & Finish */}
            <div className="py-4">
              <button
                type="button"
                onClick={() => toggleAccordion('materials')}
                className="w-full flex items-center justify-between text-left font-serif text-lg text-[#18181B] cursor-pointer"
              >
                <span>Materials &amp; Finish</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#87786B] transition-transform ${
                    openAccordions.materials ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordions.materials && (
                <div className="pt-3 text-xs sm:text-sm text-[#5C554E] space-y-2 animate-in fade-in">
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#87786B]">Finish:</span>
                    <span className="font-medium text-[#18181B]">{product.finish}</span>
                  </div>
                  <div className="py-1">
                    <span className="text-[#87786B] block mb-1">Materials Specification:</span>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.materials.map((m, idx) => (
                        <li key={idx} className="text-[#18181B]">{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Delivery & Installation */}
            <div className="py-4">
              <button
                type="button"
                onClick={() => toggleAccordion('delivery')}
                className="w-full flex items-center justify-between text-left font-serif text-lg text-[#18181B] cursor-pointer"
              >
                <span>White-Glove Delivery &amp; Assembly</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#87786B] transition-transform ${
                    openAccordions.delivery ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordions.delivery && (
                <div className="pt-3 text-xs sm:text-sm text-[#5C554E] leading-relaxed animate-in fade-in">
                  <p className="mb-2">{product.deliveryInfo}</p>
                  <p>
                    Our trained in-house carpentry team handles elevator navigation, assembly, leveling, and packing material disposal at your Mumbai residence.
                  </p>
                </div>
              )}
            </div>

            {/* 5. Care Instructions */}
            <div className="py-4">
              <button
                type="button"
                onClick={() => toggleAccordion('care')}
                className="w-full flex items-center justify-between text-left font-serif text-lg text-[#18181B] cursor-pointer"
              >
                <span>Care &amp; Maintenance</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#87786B] transition-transform ${
                    openAccordions.care ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordions.care && (
                <div className="pt-3 text-xs sm:text-sm text-[#5C554E] leading-relaxed animate-in fade-in">
                  <p>{product.careInstructions}</p>
                </div>
              )}
            </div>

            {/* 6. Product-Specific FAQs (Requirement 39) */}
            {product.faqs && product.faqs.length > 0 && (
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion('faqs')}
                  className="w-full flex items-center justify-between text-left font-serif text-lg text-[#18181B] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C5A880]" />
                    <span>Frequently Asked Questions</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#87786B] transition-transform ${
                      openAccordions.faqs ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openAccordions.faqs && (
                  <div className="pt-3 divide-y divide-[#F0EAE1] animate-in fade-in">
                    {product.faqs.map((faq, idx) => (
                      <div key={idx} className="py-3 first:pt-0 last:pb-0">
                        <h5 className="font-semibold text-xs sm:text-sm text-[#18181B] mb-1">
                          {faq.question}
                        </h5>
                        <p className="text-xs text-[#5C554E] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Educational Editorial Advice (Requirement 40) */}
        {editorial && (
          <div className="my-12 p-8 sm:p-10 bg-[#F4EFEA] border border-[#E0D7CC] rounded-xs max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#87786B] block mb-1">
              Atelier Advice
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#18181B] font-normal mb-2">
              {editorial.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed mb-4">
              {editorial.paragraphs[0]}
            </p>
            {editorial.tips && editorial.tips.length > 0 && (
              <div className="text-xs text-[#70675E] bg-white/70 p-3 rounded-xs border border-[#E6DFD5]">
                <strong className="text-[#18181B]">Pro Tip:</strong> {editorial.tips[0]}
              </div>
            )}
          </div>
        )}

        {/* Requirement 18: "Complete the Look" Contextual Pairings Carousel */}
        {completeTheLook.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[#E6DFD5]">
            <RelatedProductsCarousel
              products={completeTheLook}
              tagline="Curated Pairings"
              title="Complete the Look"
              subtitle={`Complementary designs selected to harmonize with your ${product.name} in finish, proportions, and style.`}
              onSelect={onSelectProduct}
              onBuyNow={onBuyNowProduct}
            />
          </section>
        )}
      </div>
    </div>
  );
};
