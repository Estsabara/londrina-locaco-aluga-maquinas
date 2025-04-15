
import { Link } from "react-router-dom";

export function CategoryHighlights() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Link to="/produtos?category=Concretagem e Mistura" className="block">
            <div className="bg-red-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">construção</h3>
              <img 
                src="/placeholder.svg" 
                alt="Construção" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Jardinagem" className="block">
            <div className="bg-green-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">jardinagem</h3>
              <img 
                src="/placeholder.svg" 
                alt="Jardinagem" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Limpeza" className="block">
            <div className="bg-teal-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">limpeza</h3>
              <img 
                src="/placeholder.svg" 
                alt="Limpeza" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Pintura" className="block">
            <div className="bg-orange-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">pintura</h3>
              <img 
                src="/placeholder.svg" 
                alt="Pintura" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            </div>
          </Link>
          <Link to="/produtos?category=Equipamentos Diversos" className="block">
            <div className="bg-purple-600 rounded-lg p-4 h-48 flex items-center justify-center relative overflow-hidden">
              <h3 className="text-xl font-bold text-white text-center z-10">outros</h3>
              <img 
                src="/placeholder.svg" 
                alt="Outros" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
