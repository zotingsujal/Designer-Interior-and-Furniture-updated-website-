import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, totalAmount, itemCount } =
    useCart();

  if (!isCartOpen) return null;

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF9F5] border-l border-[#D9D1C5] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#E6DFD5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#18181B]" />
              <h2 className="font-serif text-xl text-[#18181B] font-normal">
                Your Furniture Cart ({itemCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="p-1.5 text-[#87786B] hover:text-[#18181B] rounded-xs transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Item List */}
          <div className="p-5 sm:p-6 flex-1 overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#C4BCB2] mx-auto mb-3" />
                <h3 className="font-serif text-lg text-[#18181B] mb-1">Your Cart is Empty</h3>
                <p className="text-xs text-[#716A62] max-w-xs mx-auto mb-6">
                  Explore our custom sofas, solid teak dining tables, and luxury bedroom pieces.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="px-5 py-2.5 bg-[#18181B] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs hover:bg-[#38332E] transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor || ''}`}
                  className="flex gap-4 p-3.5 bg-white border border-[#E6DFD5] rounded-xs shadow-2xs"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-xs border border-[#EAE3D9] shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm text-[#18181B] font-normal line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#A1998F] hover:text-[#B91C1C] transition-colors p-0.5 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedColor && (
                        <span className="text-[11px] text-[#87786B] block">
                          Finish: {item.selectedColor}
                        </span>
                      )}

                      <div className="mt-1 text-xs font-semibold text-[#18181B]">
                        {item.product.price !== null
                          ? formatPrice(item.product.price)
                          : 'Price on Request'}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-center border border-[#D9D1C5] rounded-xs bg-[#FAF9F5]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-[#5C554E] hover:text-[#18181B] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium text-[#18181B]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-[#5C554E] hover:text-[#18181B] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {item.product.price !== null && (
                        <span className="text-xs font-medium text-[#716A62] ml-auto">
                          Total: {formatPrice(item.product.price * item.quantity)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#E6DFD5] bg-[#FAF9F5] space-y-4">
              <div className="space-y-1.5 text-xs text-[#5C554E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-sm text-[#18181B]">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-[#87786B]">
                  <span>White-Glove Delivery &amp; Assembly</span>
                  <span className="text-[#1F5435] font-medium">Included (Mumbai)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    closeCart();
                    onProceedToCheckout();
                  }}
                  className="w-full py-3 px-4 bg-[#18181B] hover:bg-[#38332E] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full py-2.5 px-4 bg-transparent hover:bg-[#F4EFEA] text-[#18181B] border border-[#D9D1C5] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-[#87786B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F5435]" />
                <span>Secure payment via Razorpay &bull; Genuine Warranty</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
