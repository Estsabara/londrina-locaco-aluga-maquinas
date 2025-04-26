
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Product, DateRange, CartItem, RentalPeriodType } from '@/types';

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, dateRange: DateRange, quantity: number, rentalPeriod: RentalPeriodType) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product: Product, dateRange: DateRange, quantity: number, rentalPeriod: RentalPeriodType) => {
    const { from, to } = dateRange;
    if (from && to) {
      const newItem: CartItem = {
        product: product,
        startDate: from,
        endDate: to,
        quantity: quantity,
        rentalPeriod: rentalPeriod
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemCount = () => {
    return cartItems.length;
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={value}>
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
