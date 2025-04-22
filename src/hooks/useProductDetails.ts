
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
        
        const numericId = parseInt(id, 10);
        
        if (isNaN(numericId)) {
          console.error('Invalid product ID:', id);
          toast.error('ID de produto inválido');
          return;
        }
        
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', numericId)
          .single();
        
        if (error) {
          console.error('Error fetching product:', error);
          toast.error('Erro ao carregar informações do produto');
          return;
        }
        
        if (!data) {
          console.error('No product found with ID:', id);
          toast.error('Produto não encontrado');
          return;
        }
        
        let processedSpecs = {};
        if (data.specs && typeof data.specs === 'object') {
          processedSpecs = data.specs;
        } else if (data.specs) {
          try {
            processedSpecs = JSON.parse(String(data.specs));
          } catch {
            processedSpecs = { value: data.specs };
          }
        }
        
        const formattedProduct: Product = {
          id: data.id,
          name: data.name,
          description: data.description || '',
          price: data.price,
          priceWeekly: data.priceweekly || data.price * 6, // Use DB field or calculate if not present
          priceMonthly: data.pricemonthly || data.price * 25, // Use DB field or calculate if not present
          imageUrl: data.imageurl || '/placeholder.svg',
          category: data.category,
          available: data.available,
          brand: data.brand || '',
          model: data.model || '',
          specs: processedSpecs
        };
        
        setProduct(formattedProduct);
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('Ocorreu um erro ao carregar o produto');
      } finally {
        setLoading(false);
      }
    }
    
    fetchProduct();
  }, [id]);

  return { product, loading };
}
