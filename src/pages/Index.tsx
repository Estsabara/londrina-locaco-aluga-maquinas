
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { CategoryTabs } from "@/components/home/CategoryTabs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { Drill, Forklift, Truck, Construction, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ElectricMachines } from "@/components/home/ElectricMachines";
import { PerforationEquipment } from "@/components/home/PerforationEquipment";
import { MovementEquipment } from "@/components/home/MovementEquipment";
import { SafetyEquipment } from "@/components/home/SafetyEquipment";
import { ObraVideosSection } from "@/components/home/ObraVideosSection";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        
        <div className="flex w-full flex-1">
          {/* Sidebar */}
          <Sidebar variant="floating" collapsible="offcanvas">
            <SidebarHeader className="flex h-14 items-center border-b px-4">
              <SidebarTrigger />
              <span className="ml-2 text-lg font-semibold">Categorias</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Equipamentos</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Furação e Demolição">
                      <Link to="/produtos?categoria=furacao-demolicao">
                        <Drill />
                        <span>Furação e Demolição</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Movimentação">
                      <Link to="/produtos?categoria=movimentacao-elevacao">
                        <Forklift />
                        <span>Movimentação</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Concretagem">
                      <Link to="/produtos?categoria=concretagem-mistura">
                        <Truck />
                        <span>Concretagem</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Todos Equipamentos">
                      <Link to="/produtos">
                        <Construction />
                        <span>Todos Equipamentos</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          
          {/* Main content */}
          <main className="flex-grow">
            <div className="flex items-center p-4 md:hidden">
              <SidebarTrigger />
              <span className="ml-2">Menu de Categorias</span>
            </div>
            <HeroBanner />
            <FeatureHighlights />
            <ObraVideosSection />
            <CategoryTabs onCategorySelect={setSelectedCategory} />
            <FeaturedProducts selectedCategory={selectedCategory} />
            <ElectricMachines />
            <PerforationEquipment />
            <MovementEquipment />
            <SafetyEquipment />
            <ContactCTA />
          </main>
        </div>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </SidebarProvider>
  );
}

