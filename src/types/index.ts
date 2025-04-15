
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Price per day
  imageUrl: string;
  category: string;
  available: boolean;
  brand: string;
  model: string;
  specs: {
    [key: string]: string;
  };
}

export interface CartItem {
  product: Product;
  startDate: Date;
  endDate: Date;
  quantity: number;
}

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

export interface Customer {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  document_number?: string;
  address?: string;
}

export interface RentalContract {
  id?: string;
  customer_id: string;
  cart_data: CartItem[];
  total_amount: number;
  contract_text: string;
  status: 'pending' | 'agreed' | 'completed' | 'cancelled';
  agreed_at?: Date;
}
