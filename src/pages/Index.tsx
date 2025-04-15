
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { useState } from "react";
import { 
  ArrowRight, 
  Construction, 
  Drill, 
  Truck, 
  Search,
  Hammer, 
  Ruler, 
  Zap, 
  ShieldCheck, 
  Forklift,
  ConstructionBarrier,
  LucideIcon
} from "lucide-react";

export default function Index() {
  const [selectedTab, setSelectedTab] = useState("Mais alugados");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  // Get featured products
  const filteredProducts = selectedCategory === "Todos" 
    ? products.slice(0, 6) // Show first 6 products if "Todos" is selected
    : products.filter(product => product.category === selectedCategory).slice(0, 6); // Show up to 6 products from selected category
  
  // Define category icons and colors
  const categoryCards = [
    { 
      name: "Andaimes",
      icon: ConstructionBarrier,
      color: "bg-primary text-primary-foreground",
      category: "Andaimes e Acessórios"
    },
    { 
      name: "Compactação",
      icon: Hammer,
      color: "bg-primary text-primary-foreground",
      category: "Compactação de Solo"
    },
    { 
      name: "Concretagem",
      icon: Construction,
      color: "bg-primary text-primary-foreground",
      category: "Concretagem e Mistura"
    },
    { 
      name: "Ferramentas elétricas",
      icon: Drill,
      color: "bg-primary text-primary-foreground",
      category: "Perfuração e Demolição"
    },
    { 
      name: "Furação e demolição",
      icon: Drill,
      color: "bg-primary text-primary-foreground",
      category: "Perfuração e Demolição"
    },
    { 
      name: "Acesso e elevação",
      icon: Forklift,
      color: "bg-primary text-primary-foreground",
      category: "Movimentação e Elevação"
    },
    { 
      name: "Limpeza",
      icon: Truck,
      color: "bg-primary text-primary-foreground",
      category: "Equipamentos de Limpeza"
    },
    { 
      name: "Outros",
      icon: Construction,
      color: "bg-primary text-primary-foreground",
      category: "Equipamentos Diversos"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-primary py-8 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-accent">
                  +70 tipos de equipamentos
                </h1>
                <p className="text-lg md:text-xl text-white">
                  para todas as fases da obra
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary">
                    <Link to="/produtos">
                      Alugue já!
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

        {/* Seção Principal de Categorias */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Equipamentos e ferramentas para locação
            </h2>
            
            {/* Tabs */}
            <div className="flex border-b mb-8 overflow-x-auto">
              {["Mais alugados", "Fases da obra", "Tipo de trabalho"].map((tab) => (
                <div 
                  key={tab}
                  className={`category-tab ${selectedTab === tab ? 'active' : ''}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            
            {/* Grid de Categorias */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categoryCards.map((card, index) => (
                <div 
                  key={index}
                  className="category-card bg-primary rounded-2xl cursor-pointer"
                  onClick={() => setSelectedCategory(card.category)}
                >
                  <div className="category-card-icon bg-accent">
                    <card.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-center text-white text-sm font-medium">{card.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 bg-secondary/50">
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

        {/* Categorias em Cards Grandes */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Link to="/produtos?category=Concretagem e Mistura" className="block">
                <div className="bg-red-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
                  <h3 className="text-xl font-bold text-white text-center z-10">construção</h3>
                  <img 
                    src="/placeholder.svg" 
                    alt="Construção" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                </div>
              </Link>
              <Link to="/produtos?category=Jardinagem" className="block">
                <div className="bg-green-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
                  <h3 className="text-xl font-bold text-white text-center z-10">jardinagem</h3>
                  <img 
                    src="/placeholder.svg" 
                    alt="Jardinagem" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                </div>
              </Link>
              <Link to="/produtos?category=Limpeza" className="block">
                <div className="bg-teal-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
                  <h3 className="text-xl font-bold text-white text-center z-10">limpeza</h3>
                  <img 
                    src="/placeholder.svg" 
                    alt="Limpeza" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                </div>
              </Link>
              <Link to="/produtos?category=Pintura" className="block">
                <div className="bg-orange-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
                  <h3 className="text-xl font-bold text-white text-center z-10">pintura</h3>
                  <img 
                    src="/placeholder.svg" 
                    alt="Pintura" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                </div>
              </Link>
              <Link to="/produtos?category=Equipamentos Diversos" className="block">
                <div className="bg-purple-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
                  <h3 className="text-xl font-bold text-white text-center z-10">outros</h3>
                  <img 
                    src="/placeholder.svg" 
                    alt="Outros" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                </div>
              </Link>
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
