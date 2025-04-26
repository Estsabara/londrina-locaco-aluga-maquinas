
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Product, DateRange, RentalPeriodType } from "@/types";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ContactButton } from "@/components/products/ContactButton";
import { RentalOptions } from "@/components/products/RentalOptions";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { RentalTerms } from "@/components/products/RentalTerms";

interface ProductDetailsContentProps {
  product: Product;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  rentalTotal: number;
  onAddToCart: () => void;
  rentalPeriod: RentalPeriodType;
  setRentalPeriod: (period: RentalPeriodType) => void;
  periodQuantity: number;
  setPeriodQuantity: (quantity: number) => void;
}

export function ProductDetailsContent({
  product,
  dateRange,
  setDateRange,
  quantity,
  setQuantity,
  rentalTotal,
  onAddToCart,
  rentalPeriod,
  setRentalPeriod,
  periodQuantity,
  setPeriodQuantity
}: ProductDetailsContentProps) {
  const { name, description, price, imageUrl, category, specs, available, priceWeekly, priceMonthly } = product;

  return (
    <main className="flex-grow container py-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link to="/produtos" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Equipamentos
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImageGallery imageUrl={imageUrl} name={name} />
        
        <div className="space-y-6">
          <ProductInfo 
            name={name}
            price={price}
            category={category}
            available={available}
            description={description}
          />
          
          <div className="flex flex-col gap-3">
            <ContactButton productName={name} />
          </div>
          
          <Separator />
          
          <RentalOptions
            available={available}
            price={price}
            priceWeekly={priceWeekly}
            priceMonthly={priceMonthly}
            dateRange={dateRange}
            setDateRange={setDateRange}
            quantity={quantity}
            setQuantity={setQuantity}
            rentalTotal={rentalTotal}
            onAddToCart={onAddToCart}
            rentalPeriod={rentalPeriod}
            setRentalPeriod={setRentalPeriod}
            periodQuantity={periodQuantity}
            setPeriodQuantity={setPeriodQuantity}
          />
        </div>
      </div>
      
      <div className="mt-10">
        <ProductSpecs specs={specs} />
        <RentalTerms />
      </div>
    </main>
  );
}
