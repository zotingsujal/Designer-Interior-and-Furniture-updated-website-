import React from 'react';
import { ShoppingBag, ArrowRight, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartToast: React.FC = () => {
  const { toastMessage, clearToast, openCart } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#18181B] text-[#FAF9F5] p-4 rounded-xs shadow-2xl border border-[#38332E] animate-in slide-in-from-bottom-5">
      <div className="flex items-start gap-3">
        <img
          src={toastMessage.product.primaryImage}
          alt={toastMessage.product.name}
          referrerPolicy="no-referrer"
          className="w-12 h-12 object-cover rounded-xs border border-[#38332E] shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold flex items-center gap-1">
              <ShoppingBag className="w-3 h-3" /> Added to Cart
            </span>
            <button
              type="button"
              onClick={clearToast}
              className="text-[#87786B] hover:text-[#FAF9F5] p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <h4 className="font-serif text-xs text-[#FAF9F5] truncate mt-0.5">
            {toastMessage.product.name}
          </h4>

          <div className="mt-2.5 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                clearToast();
                openCart();
              }}
              className="text-xs uppercase tracking-wider font-semibold text-[#FAF9F5] hover:text-[#C5A880] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View Cart</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-[#555]">&bull;</span>
            <button
              type="button"
              onClick={clearToast}
              className="text-xs text-[#A1998F] hover:text-[#FAF9F5] cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
