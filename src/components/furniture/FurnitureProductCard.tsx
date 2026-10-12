import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, MessageSquare, Zap, Check } from 'lucide-react';
import { FurnitureProduct } from '../../data/furniture';
import { useCart } from '../../context/CartContext';
import { FurnitureImageTransition } from './FurnitureImageTransition';

interface FurnitureProductCardProps {
  product: FurnitureProduct;
  onSelect: (product: FurnitureProduct) => void;
  onBuyNow: (product: FurnitureProduct) => void;
}

export const FurnitureProductCard: React.FC<FurnitureProductCardProps> = ({
  product,
  onSelect,
  onBuyNow,
}) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuyNow(product);
  };

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello Designer Furniture & Interior, I am interested in the "${product.name}". Please share customization options, finish samples, and pricing.`;
    window.open(`https://wa.me/919821432122?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <article
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#FAF9F5] border border-[#E6DFD5] hover:border-[#18181B] transition-all duration-300 flex flex-col justify-between cursor-pointer rounded-xs shadow-2xs hover:shadow-md"
    >
      {/* Product Image Area with Automatic Angle Transition */}
      <div className="relative aspect-[4/3] bg-[#EFEAE2] overflow-hidden">
        <FurnitureImageTransition
          images={product.images && product.images.length > 0 ? product.images : [product.primaryImage]}
          alt={product.name}
          category={product.categorySlug}
          isHovered={isHovered}
        />

        {/* Optional Clean Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
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
          {product.discountPercent && (
            <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#B91C1C] text-white rounded-xs">
              {product.discountPercent}% Off
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
          {/* Subtitle / Dimension snippet */}
          <div className="flex items-center justify-between text-[11px] text-[#87786B] mb-1.5">
            <span className="uppercase tracking-[0.14em] font-medium truncate max-w-[70%]">
              {product.subcategorySlug.replace(/-/g, ' ')}
            </span>
            {product.isCustomizable && (
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

          {/* Price Area */}
          <div className="flex items-baseline gap-2 mb-4">
            {product.price !== null ? (
              <>
                <span className="text-base sm:text-lg font-serif font-medium text-[#18181B]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#9B8D82] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </>
            ) : (
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#9A6F3E]">
                  Price on Request
                </span>
                <span className="text-[11px] text-[#87786B]">(Custom sizing)</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#EAE3D9] flex flex-col gap-2">
          {product.price !== null ? (
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={justAdded}
                className={`w-full py-2 px-2.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-150 rounded-xs cursor-pointer ${
                  justAdded
                    ? 'bg-[#1F5435] text-white border border-[#1F5435]'
                    : 'bg-[#F4EFEA] text-[#18181B] hover:bg-[#18181B] hover:text-[#FAF9F5] border border-[#D9D1C5] hover:border-[#18181B]'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-2 px-2.5 text-xs font-semibold uppercase tracking-wider bg-[#18181B] hover:bg-[#38332E] text-[#FAF9F5] transition-colors rounded-xs flex items-center justify-center gap-1 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Buy Now</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="w-full py-2 px-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1F5435] hover:bg-[#18452B] text-white transition-colors rounded-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire Now</span>
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
          )}
        </div>
      </div>
    </article>
  );
};
