
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
    <section className="relative bg-nordic-deep border-b min-h-[350px] md:min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-nordic-deep via-nordic-deep/80 to-nordic-pine/60" />
      
      <div className="container mx-auto px-3 py-6 md:py-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center h-full relative z-10">
          {/* Left side - Title */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight nordic-title" 
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              Forje sua Obra com Equipamentos Ancestrais
            </h1>
            <p className="text-gray-200 text-sm md:text-xl nordic-text">
              Mais de 70 tipos de equipamentos forjados com a resistência dos antigos. Desperte o poder nórdico em sua construção.
            </p>
          </div>

          {/* Right side - Category Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {categories.slice(0, 6).map(category => (
              <div
                key={category.name}
                onClick={() => handleCategoryClick(category.slug)}
                className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-nordic-ice hover:bg-nordic-gold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group cursor-pointer border border-nordic-gold/30"
              >
                <CustomCategoryIcon 
                  category={category.name}
                  className="mb-2 group-hover:opacity-90"
                />
                <span className="text-xs md:text-sm text-nordic-deep font-medium line-clamp-2 text-center group-hover:text-white transition-colors">
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
