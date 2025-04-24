
import { createContext, useState, useContext, ReactNode } from 'react';
import { Product, CartItem, DateRange, RentalPeriodType } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: Product, 
    dateRange: DateRange, 
    quantity: number, 
    rentalPeriod: RentalPeriodType
  ) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (
    product: Product, 
    dateRange: DateRange, 
    quantity: number,
    rentalPeriod: RentalPeriodType
  ) => {
    if (!dateRange.from || !dateRange.to) {
      console.error("Date range is incomplete");
      return;
    }

    // Check if the product is already in the cart with the same dates and period
    const existingItemIndex = cartItems.findIndex(
      item => 
        item.product.id === product.id && 
        item.startDate.getTime() === dateRange.from!.getTime() && 
        item.endDate.getTime() === dateRange.to!.getTime() &&
        item.rentalPeriod === rentalPeriod
    );

    if (existingItemIndex > -1) {
      // Update quantity if the product with the same dates exists
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([
        ...cartItems,
        {
          product,
          startDate: dateRange.from,
          endDate: dateRange.to,
          quantity,
          rentalPeriod
        }
      ]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemPrice = (item: CartItem) => {
    switch (item.rentalPeriod) {
      case 'weekly':
        return item.product.priceWeekly || item.product.price * 6;
      case 'monthly':
        return item.product.priceMonthly || item.product.price * 25;
      case 'daily':
      default:
        return item.product.price;
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      let itemPrice = getItemPrice(item);
      
      // Apply discount based on rental period
      if (item.rentalPeriod === 'weekly') {
        itemPrice = itemPrice * 0.95; // 5% off
      } else if (item.rentalPeriod === 'monthly') {
        itemPrice = itemPrice * 0.90; // 10% off
      }
      
      // Calculate total based on rental period
      let periodPrice = 0;
      
      if (item.rentalPeriod === 'daily') {
        // For daily rentals, we count the days between the dates
        const days = Math.ceil(
          (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1; // +1 to include both start and end days
        periodPrice = itemPrice * days;
      } else if (item.rentalPeriod === 'weekly') {
        // For weekly rentals, we count the weeks
        const days = Math.ceil(
          (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1;
        const weeks = Math.ceil(days / 7);
        periodPrice = itemPrice * weeks;
      } else if (item.rentalPeriod === 'monthly') {
        // For monthly rentals, we count the months
        const days = Math.ceil(
          (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1;
        const months = Math.ceil(days / 30);
        periodPrice = itemPrice * months;
      }
      
      return total + (periodPrice * item.quantity);
    }, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getCartTotal,
      getCartItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
