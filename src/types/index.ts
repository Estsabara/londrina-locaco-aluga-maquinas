
export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  imageUrl2?: string;
  category: string;
  available: boolean;
  specs: any;
  brand?: string;
  model?: string;
  price?: number; // Make price optional while maintaining database compatibility
  priceWeekly?: number;
  priceMonthly?: number;
}

export type RentalPeriodType = "daily" | "weekly" | "biweekly" | "monthly";

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
  id?: number | string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city?: string;
  state?: string;
  zipCode?: string;
  documentId?: string;
  document_number?: string;
}

export interface RentalContract {
  id: number | string;
  customer_id: number | string;
  customerId?: number | string;
  items?: CartItem[];
  cart_data?: any;
  startDate?: Date;
  endDate?: Date;
  total_amount: number;
  totalAmount?: number;
  status: 'pending' | 'active' | 'completed' | 'canceled' | 'overdue';
  created_at: Date | string;
  createdAt?: Date;
  updated_at: Date | string;
  updatedAt?: Date;
  paymentMethod?: string;
  paymentStatus?: 'pending' | 'paid' | 'refunded';
  notes?: string;
  agreed_at?: string;
  contract_text?: string;
  customers?: Customer;
}

export interface InventoryProduct extends Product {
  stockQuantity: number;
  threshold: number;
  lastRestocked: string;
  status: string;
}
