import React, { createContext, useContext, useState, useEffect } from 'react';
import { FurnitureProduct } from '../data/furniture';

export interface CartItem {
  product: FurnitureProduct;
  quantity: number;
  selectedColor?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: FurnitureProduct, quantity?: number, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  itemCount: number;
  totalAmount: number;
  toastMessage: { product: FurnitureProduct; message: string } | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'dfi_furniture_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse cart storage', e);
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    product: FurnitureProduct;
    message: string;
  } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to persist cart storage', e);
    }
  }, [items]);

  const addToCart = (
    product: FurnitureProduct,
    quantity = 1,
    selectedColor?: string
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          selectedColor: selectedColor || next[existingIndex].selectedColor,
        };
        return next;
      }
      return [...prev, { product, quantity, selectedColor: selectedColor || product.colors[0]?.name }];
    });

    setToastMessage({
      product,
      message: `Added "${product.name}" to your cart.`,
    });

    // Auto-dismiss toast after 4.5 seconds
    setTimeout(() => {
      setToastMessage((cur) => (cur?.product.id === product.id ? null : cur));
    }, 4500);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const clearToast = () => setToastMessage(null);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalAmount = items.reduce((sum, item) => {
    const itemPrice = item.product.price || 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        itemCount,
        totalAmount,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
