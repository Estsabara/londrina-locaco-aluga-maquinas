
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, ArrowLeft, CheckCircle, Info, WhatsApp } from "lucide-react";
import { products } from "@/data/products";
import { formatCurrency, calculateTotalPrice } from "@/lib/date-utils";
import { DateRange } from "@/types";
import { DateRange as RDPDateRange } from "react-day-picker";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));

  const openWhatsApp = () => {
    if (!product) return;
    
    const message = `Olá! Estou interessado em alugar o equipamento: ${product.name}. Poderia me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5543337238607?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-10">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Produto não encontrado</h1>
            <p className="text-muted-foreground">
              O produto que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/produtos">Voltar para Equipamentos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const { name, description, price, imageUrl, category, brand, model, specs, available } = product;
  
  const handleAddToCart = () => {
    if (!dateRange.from || !dateRange.to) {
      toast({
        title: "Período não selecionado",
        description: "Por favor, selecione o período de locação",
        variant: "destructive"
      });
      return;
    }
    
    addToCart(product, dateRange, quantity);
    
    toast({
      title: "Adicionado ao carrinho",
      description: `${name} foi adicionado ao carrinho`,
      variant: "default"
    });
  };
  
  const rentalTotal = dateRange.from && dateRange.to
    ? calculateTotalPrice(price, dateRange.from, dateRange.to) * quantity
    : 0;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
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
          {/* Product Image */}
          <div className="bg-muted rounded-lg overflow-hidden h-[300px] md:h-[400px]">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <Badge>{category}</Badge>
                {available ? (
                  <Badge variant="default" className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Disponível
                  </Badge>
                ) : (
                  <Badge variant="destructive">Indisponível</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold mt-2">{name}</h1>
              <div className="flex items-baseline mt-1">
                <span className="text-2xl font-bold">{formatCurrency(price)}</span>
                <span className="text-sm text-muted-foreground ml-1">/diária</span>
              </div>
            </div>
            
            <div>
              <h2 className="font-semibold mb-2">Sobre o equipamento</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium">Marca:</span> {brand}
              </div>
              <div>
                <span className="font-medium">Modelo:</span> {model}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white" 
                size="lg"
                onClick={openWhatsApp}
              >
                <WhatsApp className="mr-2 h-5 w-5" />
                Consultar loja
              </Button>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h2 className="font-semibold">Período de Locação</h2>
              <DateRangePicker 
                dateRange={dateRange}
                setDateRange={(range) => setDateRange(range as DateRange)}
              />
              
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                    Quantidade
                  </label>
                  <Input
                    id="quantity"
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                </div>
                <div>
                  {dateRange.from && dateRange.to && (
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-muted-foreground">Valor Total</span>
                      <span className="text-2xl font-bold">{formatCurrency(rentalTotal)}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                onClick={handleAddToCart} 
                disabled={!available || !dateRange.from || !dateRange.to}
                className="w-full"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              
              <div className="flex items-center p-3 bg-muted rounded-md text-sm">
                <Info className="h-4 w-4 mr-2 flex-shrink-0" />
                <p>A retirada e devolução do equipamento deve ser feita em nosso depósito. Solicite orçamento para entrega.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="specs">
              <AccordionTrigger className="text-xl font-semibold">
                Especificações Técnicas
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium capitalize">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="rental-terms">
              <AccordionTrigger className="text-xl font-semibold">
                Termos de Locação
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-4">
                  <p className="text-muted-foreground">
                    A locação dos equipamentos da Londrina Locações está sujeita aos seguintes termos:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>É necessário apresentar documentação (RG, CPF, comprovante de residência) na retirada do equipamento;</li>
                    <li>O locatário é responsável pela integridade do equipamento durante o período de locação;</li>
                    <li>O prazo de locação começa a contar a partir da data de retirada;</li>
                    <li>Será cobrada uma caução que será devolvida após a verificação do estado do equipamento;</li>
                    <li>Em caso de danos, a caução poderá ser retida para reparos;</li>
                    <li>O combustível não está incluso no valor da locação para equipamentos a combustão.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
