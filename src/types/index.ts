
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
