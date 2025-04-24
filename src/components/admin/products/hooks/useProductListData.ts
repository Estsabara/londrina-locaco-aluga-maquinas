
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function useProductListData() {
  const queryClient = useQueryClient();

  const { data: products, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("name");
        
        if (error) {
          console.error("Error fetching products:", error);
          throw error;
        }
        return data || [];
      } catch (err: any) {
        console.error("Error in query function:", err);
        throw new Error(`Erro ao carregar produtos: ${err.message}`);
      }
    },
  });

  const handleDeleteProduct = async (id: number) => {
    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Delete error:", error);
        throw error;
      }
      
      toast.success("Produto excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(`Erro ao excluir produto: ${error.message}`);
    }
  };

  return {
    products,
    isLoading,
    isError,
    error,
    refetch,
    handleDeleteProduct
  };
}
