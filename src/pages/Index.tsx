
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/data/products";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryTabs } from "@/components/home/CategoryTabs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoryHighlights } from "@/components/home/CategoryHighlights";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const filteredProducts = selectedCategory === "Todos" 
    ? products.slice(0, 6) 
    : products.filter(product => product.category === selectedCategory).slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroBanner />
        <CategoryTabs onCategorySelect={setSelectedCategory} />
        <FeaturedProducts products={filteredProducts} selectedCategory={selectedCategory} />
        <CategoryHighlights />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
}
