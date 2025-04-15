
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/date-utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/produto/${product.id}`}>
      <Card className="overflow-hidden h-full transition-shadow hover:shadow-md">
        <div className="relative h-48 bg-muted">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-2 right-2">
            {product.category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg truncate">{product.name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mt-1">
            {product.description}
          </p>
          <div className="mt-2 text-sm">
            <span className="font-medium">Marca:</span> {product.brand}
          </div>
          <div className="mt-1 text-sm">
            <span className="font-medium">Modelo:</span> {product.model}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="font-bold text-lg">
            {formatCurrency(product.price)}
            <span className="text-xs font-normal text-muted-foreground">/dia</span>
          </div>
          {product.available ? (
            <Badge variant="default">Disponível</Badge>
          ) : (
            <Badge variant="destructive">Indisponível</Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
