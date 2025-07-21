
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";
import { useState } from "react";
import { processImageUrl } from "@/lib/image-utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  const openWhatsApp = (e: React.MouseEvent, productName: string) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Olá! Estou interessado em alugar o equipamento: ${productName}. Poderia me dar mais informações?`;
    const whatsappUrl = createWhatsAppLink("554333723860", message);
    window.open(whatsappUrl, '_blank');
  };

  const handleImageError = () => {
    console.log(`Failed to load image for product ${product.id} - ${product.name}`);
    setImageError(true);
  };

  // Use consistent image processing
  const imageUrl = imageError ? "/placeholder.svg" : processImageUrl(product.imageUrl);

  return (
    <div className="group">
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg border border-nordic-ice hover:border-nordic-gold/50">
        <Link to={`/produto/${product.id}`} className="block">
          <div className="relative h-48 bg-nordic-ice border-b border-nordic-gold/20">
            <img 
              src={imageUrl} 
              alt={product.name} 
              className="w-full h-full object-contain p-3"
              onError={handleImageError}
            />
            <Badge className="absolute top-2 right-2 bg-nordic-deep text-nordic-gold">
              {product.category}
            </Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg truncate nordic-title text-nordic-deep">{product.name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mt-1 nordic-text">
              {product.description}
            </p>
          </CardContent>
        </Link>
        
        <CardFooter className="p-4 pt-0 flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            {product.available ? (
              <Badge variant="default" className="bg-nordic-pine text-white">Disponível</Badge>
            ) : (
              <Badge variant="destructive">Indisponível</Badge>
            )}
          </div>
          <Button 
            className="w-full bg-nordic-deep hover:bg-nordic-pine text-white transition-all"
            onClick={(e) => openWhatsApp(e, product.name)}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Convocar via Mensageiro
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
