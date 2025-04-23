
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Product } from "@/types";
import { toast } from "sonner";

export function useProductDetails(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        
        if (!id) return;
        
        // First try to fetch from database
        const { data: dbProduct, error: dbError } = await supabase
          .from('products')
          .select('*')
          .eq('id', parseInt(id, 10)) // Convert string id to number
          .single();
        
        if (dbProduct) {
          // Process the product from database
          let processedSpecs = {};
          if (dbProduct.specs && typeof dbProduct.specs === 'object') {
            processedSpecs = dbProduct.specs;
          } else if (dbProduct.specs) {
            try {
              processedSpecs = JSON.parse(String(dbProduct.specs));
            } catch {
              processedSpecs = { value: dbProduct.specs };
            }
          }
          
          // Check if weekly and monthly prices exist in database or calculate them
          const weeklyPrice = (dbProduct as any).priceweekly !== undefined 
            ? (dbProduct as any).priceweekly 
            : dbProduct.price * 6;
          
          const monthlyPrice = (dbProduct as any).pricemonthly !== undefined 
            ? (dbProduct as any).pricemonthly 
            : dbProduct.price * 25;
          
          const formattedProduct: Product = {
            id: dbProduct.id,
            name: dbProduct.name,
            description: dbProduct.description || '',
            price: dbProduct.price,
            priceWeekly: weeklyPrice,
            priceMonthly: monthlyPrice,
            imageUrl: dbProduct.imageurl || '/placeholder.svg',
            category: dbProduct.category,
            available: dbProduct.available,
            brand: dbProduct.brand || '',
            model: dbProduct.model || '',
            specs: processedSpecs
          };
          
          setProduct(formattedProduct);
        } else {
          // If not found in database, try to find in static data
          console.log('Product not found in database, falling back to static data');
          
          // Import all static products
          const { products: staticProducts } = await import('@/data/products');
          
          // Find the product by ID
          const staticProduct = staticProducts.find(p => p.id.toString() === id);
          
          if (staticProduct) {
            setProduct(staticProduct);
          } else {
            console.error('Product not found in static data either:', id);
            return;
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Ocorreu um erro ao carregar o produto');
        
        // Fall back to static data
        try {
          // Import all static products
          const { products: staticProducts } = await import('@/data/products');
          
          // Find the product by ID
          const staticProduct = staticProducts.find(p => p.id.toString() === id);
          
          if (staticProduct) {
            setProduct(staticProduct);
          } else {
            console.error('Product not found in static data either:', id);
          }
        } catch (fallbackError) {
          console.error('Error falling back to static data:', fallbackError);
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchProduct();
  }, [id]);

  return { product, loading };
}
