
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

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      let itemPrice;
      
      switch (item.rentalPeriod) {
        case 'weekly':
          itemPrice = item.product.priceWeekly || item.product.price * 6;
          break;
        case 'monthly':
          itemPrice = item.product.priceMonthly || item.product.price * 25;
          break;
        case 'daily':
        default:
          itemPrice = item.product.price;
      }
      
      const days = Math.ceil(
        (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1; // Include both start and end dates
      
      let periodMultiplier = 1;
      if (item.rentalPeriod === 'weekly') {
        periodMultiplier = Math.ceil(days / 7);
      } else if (item.rentalPeriod === 'monthly') {
        periodMultiplier = Math.ceil(days / 30);
      } else {
        periodMultiplier = days;
      }
      
      return total + (itemPrice * periodMultiplier * item.quantity);
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
