import React, { useState } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { FurnitureProduct } from '../../data/furniture';
import { FurnitureImageTransition } from './FurnitureImageTransition';

interface FurnitureProductCardProps {
  product: FurnitureProduct;
  onSelect: (product: FurnitureProduct) => void;
  onBuyNow?: (product: FurnitureProduct) => void;
}

export const FurnitureProductCard: React.FC<FurnitureProductCardProps> = ({
  product,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello Designer Furniture & Interior, I am interested in the "${product.name}". Please share customization options, finish samples, and pricing.`;
    window.open(`https://wa.me/919821432122?text=${encodeURIComponent(message)}`, '_blank');
  };

  const isSofaSet = product.subcategorySlug === 'sofa-sets';

  return (
    <article
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#FAF9F5] border border-[#E6DFD5] hover:border-[#18181B] transition-all duration-300 flex flex-col justify-between cursor-pointer rounded-xs shadow-2xs hover:shadow-md"
    >
      {/* Product Image Area with 16:9 frame and Automatic Crossfade Transition */}
      <div
        className="relative aspect-[16/9] w-full bg-[#F5F2EC] overflow-hidden"
        style={{ aspectRatio: '16 / 9', width: '100%', backgroundColor: '#F5F2EC' }}
      >
        <FurnitureImageTransition
          images={[product.primaryImage, product.secondaryImage].filter(Boolean)}
          alt={product.name}
          category={product.categorySlug}
          isHovered={isHovered}
        />

        {/* Optional Clean Badges - None for Sofa Sets */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {!isSofaSet && product.badge && (
            <span
              className={`text-[10px] uppercase tracking-[0.16em] font-bold px-2 py-0.5 rounded-xs shadow-2xs ${
                product.badge === 'Best Seller'
                  ? 'bg-[#18181B] text-[#FAF9F5]'
                  : product.badge === 'New'
                  ? 'bg-[#9A6F3E] text-white'
                  : 'bg-[#FAF9F5] text-[#18181B] border border-[#D9D1C5]'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Direct WhatsApp icon button on image overlay */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            type="button"
            onClick={handleWhatsAppEnquiry}
            className="w-8 h-8 rounded-full bg-white/95 text-[#1F5435] hover:bg-[#1F5435] hover:text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
            title={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Subtle hover gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Subtitle / Category info */}
          <div className="flex items-center justify-between text-[11px] text-[#87786B] mb-1.5">
            <span className="uppercase tracking-[0.14em] font-medium truncate max-w-[70%]">
              {product.subcategorySlug.replace(/-/g, ' ')}
            </span>
            {!isSofaSet && product.isCustomizable && (
              <span className="text-[10px] text-[#9A6F3E] font-medium tracking-wide">
                Customizable
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg sm:text-xl text-[#18181B] font-normal leading-snug mb-2 group-hover:text-[#5E5245] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#5C554E] leading-relaxed line-clamp-2 mb-3">
            {product.shortDescription}
          </p>

          {/* Atelier Spec */}
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9A6F3E]">
              Factory Direct &bull; Bespoke Made to Order
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#EAE3D9] flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleWhatsAppEnquiry}
              className="w-full py-2 px-2.5 text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20BD5A] text-white transition-colors rounded-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Enquire</span>
            </button>

            <button
              type="button"
              onClick={() => onSelect(product)}
              className="w-full py-2 px-2.5 text-xs font-semibold uppercase tracking-wider bg-[#F4EFEA] hover:bg-[#18181B] hover:text-white text-[#18181B] border border-[#D9D1C5] transition-colors rounded-xs flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>View Specs</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
