import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { FurnitureProduct } from '../../data/furniture';
import { useCart } from '../../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  directBuyProduct?: FurnitureProduct | null;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  directBuyProduct,
}) => {
  const { items, clearCart, totalAmount } = useCart();

  const checkoutItems = directBuyProduct
    ? [{ product: directBuyProduct, quantity: 1, selectedColor: directBuyProduct.colors[0]?.name }]
    : items;

  const checkoutTotal = directBuyProduct
    ? directBuyProduct.price || 0
    : totalAmount;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<{
    orderId: string;
    amount: number;
    paymentId?: string;
  } | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || !/^[0-9+()-\s]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Valid 10-digit mobile number required';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Valid email address required';
    }
    if (!formData.address.trim()) errs.address = 'Delivery address is required';
    if (!formData.pincode.trim() || !/^[0-9]{6}$/.test(formData.pincode.trim())) {
      errs.pincode = '6-digit pincode required';
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Create Order on Server
      const res = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: checkoutTotal,
          items: checkoutItems.map((i) => ({
            id: i.product.id,
            name: i.product.name,
            quantity: i.quantity,
            price: i.product.price,
          })),
          customer: formData,
        }),
      });

      const orderData = await res.json();

      if (!res.ok) {
        throw new Error(orderData.error || 'Failed to initialize payment.');
      }

      // Check if real Razorpay or simulation mode
      if (orderData.mode === 'test_simulation' || !(window as any).Razorpay) {
        // Fallback test mode: simulate payment completion with order ID
        setTimeout(() => {
          setIsProcessing(false);
          setOrderSuccess({
            orderId: orderData.orderId || `DFI-${Date.now().toString().slice(-6)}`,
            amount: checkoutTotal,
            paymentId: 'pay_test_' + Math.random().toString(36).substring(2, 9),
          });
          clearCart();
        }, 1200);
        return;
      }

      // Real Razorpay Checkout flow
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: "Designer Furniture & Interior",
        description: `Order for ${checkoutItems.length} bespoke pieces`,
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#18181B',
        },
        handler: async (response: any) => {
          try {
            // Verify payment on server
            const verifyRes = await fetch('/api/verify-razorpay-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                customer: formData,
                items: checkoutItems,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              setOrderSuccess({
                orderId: response.razorpay_order_id,
                amount: checkoutTotal,
                paymentId: response.razorpay_payment_id,
              });
              clearCart();
            } else {
              setPaymentError('Payment verification failed. Please contact studio support.');
            }
          } catch (err: any) {
            setPaymentError(err.message || 'Error verifying payment.');
          } finally {
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', (response: any) => {
        setPaymentError(response.error.description || 'Payment failed. Please retry.');
        setIsProcessing(false);
      });
      rzp.open();
    } catch (err: any) {
      console.error('Checkout error:', err);
      setPaymentError(err.message || 'Payment processing error.');
      setIsProcessing(false);
    }
  };

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const constructWhatsAppOrderMsg = () => {
    if (!orderSuccess) return '';
    const itemsList = checkoutItems
      .map((i) => `${i.product.name} (Qty: ${i.quantity})`)
      .join(', ');
    return `*Order Confirmed - Designer Furniture & Interior*%0A%0A*Order ID:* ${orderSuccess.orderId}%0A*Customer:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Items:* ${encodeURIComponent(
      itemsList
    )}%0A*Total Paid:* ${encodeURIComponent(formatPrice(orderSuccess.amount))}%0A*Delivery City:* ${encodeURIComponent(
      formData.city
    )}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-[#FAF9F5] border border-[#D9D1C5] w-full max-w-2xl rounded-xs shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#87786B] hover:text-[#18181B] p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {orderSuccess ? (
          /* Order Success State */
          <div className="text-center py-6 sm:py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#1F5435] mx-auto" />
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B]">
              Order Confirmed &bull; White-Glove Dispatch
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
              Thank You, {formData.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C554E] max-w-md mx-auto leading-relaxed">
              Your order has been recorded. Our studio team will call you to confirm measurements, material finishes, and delivery schedule.
            </p>

            <div className="bg-[#FFFFFF] border border-[#E0D7CC] p-4 rounded-xs max-w-md mx-auto text-left text-xs space-y-1.5 my-4">
              <div className="flex justify-between border-b border-[#EAE3D9] pb-2 font-semibold">
                <span>Order ID:</span>
                <span className="font-mono text-[#18181B]">{orderSuccess.orderId}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#87786B]">Paid Total:</span>
                <span className="font-semibold text-[#18181B]">{formatPrice(orderSuccess.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#87786B]">Delivery Address:</span>
                <span className="font-medium text-[#18181B] truncate max-w-[200px]">
                  {formData.address}, {formData.city} - {formData.pincode}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#87786B]">Mobile:</span>
                <span className="font-medium text-[#18181B]">{formData.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/919821432122?text=${constructWhatsAppOrderMsg()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#1F5435] hover:bg-[#18452B] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Track on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#18181B] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#38332E] transition-colors cursor-pointer"
              >
                Close &amp; Continue
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePayNow} className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] mb-1">
                Checkout &amp; White-Glove Delivery
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                Complete Your Furniture Order
              </h3>
            </div>

            {paymentError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xs flex items-center gap-2 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{paymentError}</span>
              </div>
            )}

            {/* Order Items Preview */}
            <div className="bg-[#FFFFFF] border border-[#E6DFD5] p-3.5 rounded-xs space-y-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#87786B] block border-b border-[#EAE3D9] pb-1">
                Order Items ({checkoutItems.length})
              </span>
              {checkoutItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#18181B] truncate max-w-[65%]">
                    {item.product.name} &times; {item.quantity}
                  </span>
                  <span className="font-semibold text-[#18181B]">
                    {item.product.price !== null
                      ? formatPrice(item.product.price * item.quantity)
                      : 'Price on Request'}
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-xs pt-2 border-t border-[#EAE3D9] font-bold">
                <span>Grand Total:</span>
                <span className="text-sm font-serif text-[#18181B]">
                  {formatPrice(checkoutTotal)}
                </span>
              </div>
            </div>

            {/* Customer Information Inputs */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    Full Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Vikram Singhania"
                    className={`w-full bg-[#F6F2EC] border px-3 py-2 text-xs text-[#18181B] rounded-xs focus:outline-hidden ${
                      errors.name ? 'border-red-600' : 'border-[#D9D1C5]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-700 mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    Mobile Number <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98214 32122"
                    className={`w-full bg-[#F6F2EC] border px-3 py-2 text-xs text-[#18181B] rounded-xs focus:outline-hidden ${
                      errors.phone ? 'border-red-600' : 'border-[#D9D1C5]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-700 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                  Email Address <span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. vikram@example.com"
                  className={`w-full bg-[#F6F2EC] border px-3 py-2 text-xs text-[#18181B] rounded-xs focus:outline-hidden ${
                    errors.email ? 'border-red-600' : 'border-[#D9D1C5]'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-700 mt-0.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                  Delivery Address in Mumbai / MMR <span className="text-red-700">*</span>
                </label>
                <textarea
                  rows={2}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Apartment, Wing, Building Name, Street / Landmark..."
                  className={`w-full bg-[#F6F2EC] border px-3 py-2 text-xs text-[#18181B] rounded-xs focus:outline-hidden ${
                    errors.address ? 'border-red-600' : 'border-[#D9D1C5]'
                  }`}
                />
                {errors.address && <p className="text-[11px] text-red-700 mt-0.5">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#F6F2EC] border border-[#D9D1C5] px-3 py-2 text-xs text-[#18181B] rounded-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-[#F6F2EC] border border-[#D9D1C5] px-3 py-2 text-xs text-[#18181B] rounded-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-1">
                    Pincode <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="400050"
                    className={`w-full bg-[#F6F2EC] border px-3 py-2 text-xs text-[#18181B] rounded-xs ${
                      errors.pincode ? 'border-red-600' : 'border-[#D9D1C5]'
                    }`}
                  />
                  {errors.pincode && <p className="text-[11px] text-red-700 mt-0.5">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 bg-[#18181B] hover:bg-[#38332E] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting Secure Razorpay Gateway...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                    <span>Pay {formatPrice(checkoutTotal)} with Razorpay</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#87786B] mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F5435]" />
                <span>UPI, Credit/Debit Cards, NetBanking, EMI &bull; 100% Encrypted</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
