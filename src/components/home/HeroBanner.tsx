
import { Link } from "react-router-dom";
import { CustomCategoryIcon } from "../icons/CustomCategoryIcon";

export function HeroBanner() {
  const categories = [{
    name: "Andaimes e Escoramentos",
    category: "Andaimes",
    href: "/produtos?categoria=andaimes-escoramentos",
    icon: "/lovable-uploads/8a42e7a3-7dde-417b-bcca-e96aeeacf321.png"
  }, {
    name: "Movimentação e Elevação",
    category: "Movimentação",
    href: "/produtos?categoria=movimentacao-elevacao",
    icon: "/lovable-uploads/1be950ff-c87d-46f3-b556-7c4dec5faf4f.png"
  }, {
    name: "Compactação",
    category: "Compactação",
    href: "/produtos?categoria=compactacao",
    icon: "/lovable-uploads/bdf3980a-911f-45bd-8773-6f15f75fafc7.png"
  }, {
    name: "Concretagem",
    category: "Concretagem",
    href: "/produtos?categoria=concretagem",
    icon: "/lovable-uploads/1aa47e43-5bfc-4e2e-855a-915e09d1487d.png"
  }, {
    name: "Ferramentas Elétricas",
    category: "Ferramentas Elétricas",
    href: "/produtos?categoria=ferramentas-eletricas",
    icon: "/lovable-uploads/42f43d78-811a-45b0-aef8-37d28f26c361.png"
  }, {
    name: "Jardinagem",
    category: "Jardinagem",
    href: "/produtos?categoria=jardinagem",
    icon: "/lovable-uploads/ac1f61ab-9719-4533-8656-9355d287a08c.png"
  }, {
    name: "Limpeza",
    category: "Limpeza",
    href: "/produtos?categoria=limpeza",
    icon: "/lovable-uploads/51453ff4-ed62-478d-a31c-d731846ee36c.png"
  }, {
    name: "Perfuração e Demolição",
    category: "Perfuração",
    href: "/produtos?categoria=perfuracao-demolicao",
    icon: "/lovable-uploads/6f78b3f2-beb6-4873-9151-9f69b928b28d.png"
  }, {
    name: "Energia",
    category: "Energia",
    href: "/produtos?categoria=energia",
    icon: "/lovable-uploads/62aa2cf7-22c9-4d58-b672-93d9c61a73f8.png"
  }, {
    name: "Escoramentos",
    category: "Escoramentos",
    href: "/produtos?categoria=escoramentos",
    icon: "/lovable-uploads/a6ec0873-df8a-4e65-943a-dc508c17430f.png"
  }];

  return (
    <section className="relative bg-black border-b min-h-[350px] md:min-h-[500px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png')] bg-cover bg-center opacity-20" />
      
      <div className="container mx-auto px-3 py-6 md:py-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center h-full relative z-10">
          {/* Left side - Title */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight" 
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              Alugue Equipamentos para sua Obra
            </h1>
            <p className="text-gray-300 text-sm md:text-xl">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação.
            </p>
          </div>

          {/* Right side - Category Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {categories.slice(0, 6).map(category => (
              <Link 
                key={category.name} 
                to={category.href} 
                className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-primary shadow-lg border-2 border-primary hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group"
              >
                <img 
                  src={category.icon}
                  alt={category.name}
                  className="w-8 h-8 md:w-10 md:h-10 text-white mb-2 group-hover:text-white/90 transition-colors"
                />
                <span className="text-xs md:text-sm text-white font-medium line-clamp-2 text-center group-hover:text-white/90">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
