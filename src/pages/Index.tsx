
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, Drill, ShieldCheck, Truck, Clock } from "lucide-react";

export default function Index() {
  // Get 3 featured products
  const featuredProducts = products.slice(0, 3);
  
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

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-secondary">
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
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Equipamentos em Destaque
              </h2>
              <Button asChild variant="ghost" className="hidden sm:flex">
                <Link to="/produtos" className="group">
                  Ver todos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
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
