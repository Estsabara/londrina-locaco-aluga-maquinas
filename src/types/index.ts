
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  available: boolean;
  brand?: string;
  model?: string;
  specs: any;
  priceWeekly?: number;
  priceMonthly?: number;
}

export type RentalPeriodType = "daily" | "weekly" | "monthly" | "custom";

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

export interface CartItem {
  product: Product;
  startDate: Date;
  endDate: Date;
  quantity: number;
  rentalPeriod: RentalPeriodType;
}

export interface Customer {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  documentId: string;
}

export interface RentalContract {
  id: number;
  customerId: number;
  items: CartItem[];
  startDate: Date;
  endDate: Date;
  totalAmount: number;
  status: 'pending' | 'active' | 'completed' | 'canceled';
  createdAt: Date;
  updatedAt: Date;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  notes?: string;
}

export interface InventoryProduct extends Product {
  stockQuantity: number;
  threshold: number;
  lastRestocked: string;
  status: string;
  brand: string;
}
