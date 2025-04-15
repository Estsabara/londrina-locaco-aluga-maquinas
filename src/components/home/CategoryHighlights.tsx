
import { Link } from "react-router-dom";

export function CategoryHighlights() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Link to="/produtos?category=Concretagem e Mistura" className="block">
            <div className="bg-secondary rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">construção</h3>
              <img 
                src="/lovable-uploads/fe22baee-78b8-4978-99f4-13153a7fcc6f.png" 
                alt="Construção" 
                className="absolute inset-0 w-full h-full object-contain p-2 opacity-30"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Jardinagem" className="block">
            <div className="bg-secondary rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">jardinagem</h3>
              <img 
                src="/lovable-uploads/459f1c3e-f12d-4b8a-be48-b6a935eb75c4.png" 
                alt="Jardinagem" 
                className="absolute inset-0 w-full h-full object-contain p-2 opacity-30"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Limpeza" className="block">
            <div className="bg-secondary rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">limpeza</h3>
              <img 
                src="/lovable-uploads/af2680e9-9b6d-4a51-89e2-23caecddf919.png" 
                alt="Limpeza" 
                className="absolute inset-0 w-full h-full object-contain p-2 opacity-30"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Pintura" className="block">
            <div className="bg-secondary rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">ferramentas</h3>
              <img 
                src="/lovable-uploads/91dbffb0-50ae-4459-bf9b-d9e63a032e72.png" 
                alt="Ferramentas" 
                className="absolute inset-0 w-full h-full object-contain p-2 opacity-30"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Equipamentos Diversos" className="block">
            <div className="bg-secondary rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">outros</h3>
              <img 
                src="/lovable-uploads/5fb10f2b-65d3-4d31-8554-23987f996356.png" 
                alt="Outros" 
                className="absolute inset-0 w-full h-full object-contain p-2 opacity-30"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
