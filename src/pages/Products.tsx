
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductList } from "@/components/products/ProductList";
import { products, categories } from "@/data/products";

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Nossos Equipamentos</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de equipamentos para construção civil. 
              Escolha as melhores máquinas para sua obra com preços competitivos.
            </p>
          </div>
          
          <ProductList products={products} categories={categories} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
