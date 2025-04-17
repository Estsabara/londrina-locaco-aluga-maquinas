import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { plainasProducts } from "@/data/products/corte-acabamento/plainas";
import { politrizesProducts } from "@/data/products/corte-acabamento/politrizes";
import { Search, Filter, Plus, RefreshCw, Box, ArrowUpDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allProducts = [...plainasProducts, ...politrizesProducts];
  
  const productsWithInventory = allProducts.map(product => ({
    ...product,
    stockQuantity: Math.floor(Math.random() * 10) + 1,
    threshold: 3,
    lastRestocked: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    status: Math.random() > 0.7 ? "alugado" : "disponível"
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

  const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#00C49F'];

  const getStockStatusColor = (quantity: number, threshold: number) => {
    if (quantity === 0) return "bg-red-500";
    if (quantity <= threshold) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStockStatusText = (quantity: number, threshold: number) => {
    if (quantity === 0) return "Esgotado";
    if (quantity <= threshold) return "Baixo";
    return "OK";
  };

  const getStockLevelProgressColor = (quantity: number, threshold: number) => {
    if (quantity === 0) return "bg-red-500";
    if (quantity <= threshold) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Gerenciamento de Estoque</h2>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Filter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="default" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Resumo do Estoque</CardTitle>
            <CardDescription>Visão geral da situação atual do estoque</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium">Total de Itens</span>
                <span className="text-2xl font-bold">{productsWithInventory.length}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium">Itens Disponíveis</span>
                <span className="text-2xl font-bold">{stockStatusData[0].value}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium">Itens Alugados</span>
                <span className="text-2xl font-bold">{stockStatusData[1].value}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium">Estoque Baixo</span>
                <span className="text-2xl font-bold text-yellow-500">{stockLevelsData[1].value}</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <RefreshCw className="mr-2 h-4 w-4" />
              Atualizar Estoque
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Status do Estoque</CardTitle>
            <CardDescription>Disponibilidade dos itens no estoque</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stockStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {stockStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Níveis de Estoque</CardTitle>
            <CardDescription>Status dos níveis de estoque</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stockLevelsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    <Cell fill="#00C49F" />
                    <Cell fill="#FFBB28" />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Produtos</CardTitle>
          <CardDescription>Gerenciamento detalhado do estoque de produtos</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <div className="flex items-center space-x-1">
                    <span>Produto</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Disponível</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Última Reposição</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Box className="h-4 w-4 text-primary" />
                      <span>{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Badge variant={product.available ? "default" : "secondary"}>
                      {product.available ? "Sim" : "Não"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={product.status === "disponível" ? "outline" : "secondary"}>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress 
                        value={(product.stockQuantity / 10) * 100} 
                        className="h-2 w-20"
                        indicatorClassName={`${getStockLevelProgressColor(product.stockQuantity, product.threshold)}`}
                      />
                      <span className="text-xs">
                        {product.stockQuantity} 
                        <span className="text-muted-foreground ml-1">
                          ({getStockStatusText(product.stockQuantity, product.threshold)})
                        </span>
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{product.lastRestocked}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
