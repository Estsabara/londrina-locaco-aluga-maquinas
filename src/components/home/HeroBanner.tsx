
import { Link } from "react-router-dom";
import { CustomCategoryIcon } from "../icons/CustomCategoryIcon";

export function HeroBanner() {
  const categories = [
    {
      name: "Andaimes",
      slug: "andaimes",
      href: "/produtos?categoria=andaimes"
    },
    {
      name: "Acesso e Elevação",
      slug: "acesso-elevacao",
      href: "/produtos?categoria=acesso-elevacao"
    },
    {
      name: "Compactação",
      slug: "compactacao",
      href: "/produtos?categoria=compactacao"
    },
    {
      name: "Concretagem",
      slug: "concretagem",
      href: "/produtos?categoria=concretagem"
    },
    {
      name: "Jardinagem",
      slug: "jardinagem",
      href: "/produtos?categoria=jardinagem"
    },
    {
      name: "Ferramentas Elétricas",
      slug: "ferramentas-eletricas",
      href: "/produtos?categoria=ferramentas-eletricas"
    }
  ];

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
            {categories.map(category => (
              <Link 
                key={category.name} 
                to={category.href} 
                className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-white hover:bg-white/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group"
              >
                <div className="mb-2 flex items-center justify-center h-12 w-12">
                  <CustomCategoryIcon 
                    category={category.name}
                    className="group-hover:opacity-90"
                  />
                </div>
                <span className="text-xs md:text-sm text-[#FF7F00] font-medium line-clamp-2 text-center group-hover:text-[#FF7F00]/90">
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
