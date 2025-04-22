
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { plainasProducts } from "@/data/products/corte-acabamento/plainas";
import { politrizesProducts } from "@/data/products/corte-acabamento/politrizes";
import { InventoryHeader } from "./inventory/InventoryHeader";
import { InventoryStats } from "./inventory/InventoryStats";
import { InventoryTable, InventoryProduct } from "./inventory/InventoryTable";

export default function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allProducts = [...plainasProducts, ...politrizesProducts];
  
  const productsWithInventory: InventoryProduct[] = allProducts.map(product => ({
    ...product,
    stockQuantity: Math.floor(Math.random() * 10) + 1,
    threshold: 3,
    lastRestocked: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    status: Math.random() > 0.7 ? "alugado" : "disponível",
    brand: product.brand || "Sem marca", // Ensure brand is always populated
    model: product.model || "Sem modelo" // Ensure model is always populated
  }));
  
  const filteredProducts = productsWithInventory.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stockStatusData = [
    { name: "Disponível", value: productsWithInventory.filter(p => p.status === "disponível").length },
    { name: "Alugado", value: productsWithInventory.filter(p => p.status === "alugado").length },
  ];
  
  const stockLevelsData = [
    { name: "Estoque OK", value: productsWithInventory.filter(p => p.stockQuantity > p.threshold).length },
    { name: "Estoque Baixo", value: productsWithInventory.filter(p => p.stockQuantity <= p.threshold).length },
  ];

  return (
    <div>
      <InventoryHeader 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <InventoryStats 
        productsCount={productsWithInventory.length}
        availableCount={stockStatusData[0].value}
        rentedCount={stockStatusData[1].value}
        lowStockCount={stockLevelsData[1].value}
        stockStatusData={stockStatusData}
        stockLevelsData={stockLevelsData}
      />

      <Card>
        <CardHeader>
          <CardTitle>Lista de Produtos</CardTitle>
          <CardDescription>Gerenciamento detalhado do estoque de produtos</CardDescription>
        </CardHeader>
        <CardContent>
          <InventoryTable products={filteredProducts} />
        </CardContent>
      </Card>
    </div>
  );
}
