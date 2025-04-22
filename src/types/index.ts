
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
  id?: number | string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city?: string;
  state?: string;
  zipCode?: string;
  documentId?: string;
  document_number?: string;  // Added to match Supabase structure
}

// Updated RentalContract to match Supabase structure
export interface RentalContract {
  id: number | string;
  customer_id: number | string;  // snake_case as used in Supabase
  customerId?: number | string;  // Keep for backward compatibility
  items?: CartItem[];
  cart_data?: any;  // Added to match Supabase structure
  startDate?: Date;
  endDate?: Date;
  total_amount: number;  // snake_case as used in Supabase
  totalAmount?: number;  // Keep for backward compatibility
  status: 'pending' | 'active' | 'completed' | 'canceled' | 'overdue';  // Added 'overdue'
  created_at: Date | string;  // snake_case as used in Supabase
  createdAt?: Date;  // Keep for backward compatibility
  updated_at: Date | string;  // snake_case as used in Supabase
  updatedAt?: Date;  // Keep for backward compatibility
  paymentMethod?: string;
  paymentStatus?: 'pending' | 'paid' | 'refunded';
  notes?: string;
  // Added fields to match Supabase structure
  agreed_at?: string;
  contract_text?: string;
  customers?: Customer;  // For joined customer data
}

export interface InventoryProduct extends Product {
  stockQuantity: number;
  threshold: number;
  lastRestocked: string;
  status: string;
  brand: string;  // Making brand required for InventoryProduct
  model: string;  // Making model required for InventoryProduct
}
