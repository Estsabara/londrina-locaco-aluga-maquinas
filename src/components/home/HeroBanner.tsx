
import { useNavigate } from "react-router-dom";
import { CustomCategoryIcon } from "../icons/CustomCategoryIcon";

export function HeroBanner() {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "Andaimes",
      slug: "andaimes-acessorios",
      icon: "/lovable-uploads/836b98ad-ba9a-407f-b6bc-8134f878b7d8.png",
      href: "/produtos?categoria=andaimes-acessorios"
    },
    {
      name: "Acesso e Elevação",
      slug: "movimentacao-elevacao",
      icon: "/lovable-uploads/f2eea06a-186a-4cb6-b9b0-fdce6ee8cb04.png",
      href: "/produtos?categoria=movimentacao-elevacao"
    },
    {
      name: "Compactação",
      slug: "compactacao-solo",
      icon: "/lovable-uploads/2d083810-7019-472a-87ec-66af8d51b11b.png",
      href: "/produtos?categoria=compactacao-solo"
    },
    {
      name: "Concretagem",
      slug: "concretagem-mistura",
      icon: "/lovable-uploads/2576676f-bc02-4ea2-9285-c9bbee856465.png",
      href: "/produtos?categoria=concretagem-mistura"
    },
    {
      name: "Jardinagem",
      slug: "equipamentos-diversos",
      icon: "/lovable-uploads/35520990-a7d1-4438-b992-51fb5dbc3a38.png",
      href: "/produtos?categoria=equipamentos-diversos"
    },
    {
      name: "Ferramentas Elétricas",
      slug: "perfuracao-demolicao",
      icon: "/lovable-uploads/72cf8895-3baa-44dd-bfe3-3ff4ba54b5fa.png",
      href: "/produtos?categoria=perfuracao-demolicao"
    }
  ];

  const handleCategoryClick = (slug: string) => {
    navigate(`/produtos?categoria=${slug}`);
  };

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
              <div
                key={category.name}
                onClick={() => handleCategoryClick(category.slug)}
                className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-white hover:bg-white/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group cursor-pointer"
              >
                <CustomCategoryIcon 
                  category={category.name}
                  className="mb-2 group-hover:opacity-90"
                />
                <span className="text-xs md:text-sm text-[#e66722] font-medium line-clamp-2 text-center group-hover:text-[#e66722]/90">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
