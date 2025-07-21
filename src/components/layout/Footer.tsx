
import { Link } from "react-router-dom";
import { createWhatsAppLink } from "@/lib/utils";

export function Footer() {
  return (
    <>
      {/* Maintenance Services Banner */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-nordic-deep opacity-60" />
        <div className="relative container z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white nordic-title">Forja de Equipamentos Ancestrais</h2>
            <p className="text-lg mb-6 text-gray-200">
              Oferecemos serviços de manutenção com a precisão dos mestres ferreiros nórdicos. Equipamentos forjados para resistir às mais adversas condições.
            </p>
            <a
              href={createWhatsAppLink("554333723860", "Salve! Gostaria de informações sobre serviços de manutenção dos equipamentos YGG.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-nordic-gold text-white px-6 py-3 rounded-lg hover:bg-nordic-gold/90 transition-colors font-medium"
            >
              Consulte nossos Mestres Técnicos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nordic-deep text-white">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-nordic-gold rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl nordic-title">Y</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold nordic-title text-nordic-gold">YGG</h3>
                    <p className="text-sm text-gray-300">Sistema de Locações</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Equipamentos forjados com a resistência dos antigos. Tradição nórdica em cada locação, conectando força ancestral com tecnologia moderna.
              </p>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} YGG – Sistema de Locações. Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-nordic-gold nordic-title">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Início da Jornada
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="text-gray-300 hover:text-white transition-colors">
                    Arsenal de Equipamentos
                  </Link>
                </li>
                <li>
                  <Link to="/termos" className="text-gray-300 hover:text-white transition-colors">
                    Códigos de Honra
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-nordic-gold nordic-title">Fortaleza YGG</h3>
              <address className="not-italic space-y-2 text-gray-300">
                <p>Avenida dos Guerreiros Nórdicos, 181</p>
                <p>Vale de Midgard, PR - CEP 86027-750</p>
                <p>Brasil</p>
                <p>Chamado dos Corvos: (43) 3372-3860</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
