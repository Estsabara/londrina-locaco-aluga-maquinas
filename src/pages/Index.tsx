
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryTabs } from "@/components/home/CategoryTabs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroBanner />
        <CategoryTabs onCategorySelect={setSelectedCategory} />
        <FeaturedProducts selectedCategory={selectedCategory} />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
}
