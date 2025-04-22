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
