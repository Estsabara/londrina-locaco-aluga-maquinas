
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { ArrowRight, Drill, ShieldCheck, Truck, Clock, Construction, Hammer, Ruler, Zap } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  // Get featured products
  const filteredProducts = selectedCategory === "Todos" 
    ? products.slice(0, 6) // Show first 6 products if "Todos" is selected
    : products.filter(product => product.category === selectedCategory).slice(0, 6); // Show up to 6 products from selected category
  
  // Get category icons
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Concretagem e Mistura": return <Construction className="h-6 w-6" />;
      case "Compactação de Solo": return <Hammer className="h-6 w-6" />;
      case "Andaimes e Acessórios": return <Construction className="h-6 w-6" />;
      case "Escoramento": return <Construction className="h-6 w-6" />;
      case "Perfuração e Demolição": return <Drill className="h-6 w-6" />;
      case "Corte e Acabamento": return <Hammer className="h-6 w-6" />;
      case "Soldagem e Fixação": return <Zap className="h-6 w-6" />;
      case "Medição e Níveis": return <Ruler className="h-6 w-6" />;
      case "Limpeza": return <Truck className="h-6 w-6" />;
      case "Movimentação e Elevação": return <Truck className="h-6 w-6" />;
      case "Segurança": return <ShieldCheck className="h-6 w-6" />;
      case "Energia": return <Zap className="h-6 w-6" />;
      case "Equipamentos Diversos": return <Hammer className="h-6 w-6" />;
      default: return <Construction className="h-6 w-6" />;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Alugue Equipamentos para Construção
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  A Londrina Locações oferece as melhores máquinas e equipamentos para sua obra com preços competitivos e flexibilidade de locação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/produtos">
                      Ver Equipamentos
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contato">
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:ml-auto">
                <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl bg-muted">
                  <img 
                    src="/placeholder.svg" 
                    alt="Equipamentos de construção" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              Categorias de Equipamentos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.filter(cat => cat !== "Todos").map((category) => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="h-auto py-4 flex flex-col gap-2"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className={`p-2 rounded-full ${selectedCategory === category ? 'bg-primary-foreground' : 'bg-muted'}`}>
                    {getCategoryIcon(category)}
                  </div>
                  <span className="text-center text-sm">{category}</span>
                </Button>
              ))}
              <Button 
                variant={selectedCategory === "Todos" ? "default" : "outline"}
                className="h-auto py-4 flex flex-col gap-2"
                onClick={() => setSelectedCategory("Todos")}
              >
                <div className={`p-2 rounded-full ${selectedCategory === "Todos" ? 'bg-primary-foreground' : 'bg-muted'}`}>
                  <Hammer className="h-6 w-6" />
                </div>
                <span className="text-center text-sm">Todos</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Por que escolher a Londrina Locações?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary rounded-full mb-4">
                  <Drill className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipamentos de Qualidade</h3>
                <p className="text-muted-foreground">
                  Máquinas e ferramentas das melhores marcas do mercado, sempre em perfeito estado.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexibilidade de Locação</h3>
                <p className="text-muted-foreground">
                  Alugue pelo período que precisar, de dias a meses, com condições especiais.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary rounded-full mb-4">
                  <Truck className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Entrega e Retirada</h3>
                <p className="text-muted-foreground">
                  Disponibilizamos serviço de entrega e retirada para sua comodidade.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary rounded-full mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Manutenção Garantida</h3>
                <p className="text-muted-foreground">
                  Suporte técnico e manutenção inclusos durante todo o período de locação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                {selectedCategory === "Todos" ? "Equipamentos em Destaque" : `Equipamentos: ${selectedCategory}`}
              </h2>
              <Button asChild variant="ghost" className="hidden sm:flex">
                <Link to="/produtos" className="group">
                  Ver todos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-lg font-medium">Nenhum equipamento encontrado</h3>
                <p className="text-muted-foreground mt-2">
                  Não encontramos equipamentos nesta categoria.
                </p>
              </div>
            )}
            <div className="mt-8 text-center sm:hidden">
              <Button asChild>
                <Link to="/produtos">
                  Ver todos os equipamentos
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary/10">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Precisando de um equipamento específico?
              </h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato conosco e encontraremos a solução ideal para sua obra.
              </p>
              <Button asChild size="lg" className="mt-2">
                <Link to="/contato">
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
