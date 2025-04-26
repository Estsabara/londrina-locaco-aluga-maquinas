
import { Link } from "react-router-dom";
import { createWhatsAppLink } from "@/lib/utils";

export function Footer() {
  return (
    <>
      {/* Maintenance Services Banner */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png')] bg-cover bg-center opacity-20" />
        <div className="relative container z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Assistência Técnica Especializada</h2>
            <p className="text-lg mb-6">
              Oferecemos serviços de manutenção preventiva e corretiva para máquinas e equipamentos da construção civil.
            </p>
            <a
              href={createWhatsAppLink("554333723860", "Olá, gostaria de informações sobre serviços de manutenção.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#fe3100] text-white px-6 py-3 rounded-lg hover:bg-[#fe3100]/90 transition-colors"
            >
              Fale com nossos técnicos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/lovable-uploads/3b4fefb8-58db-4d89-81e6-00d74836ab68.png" alt="Londrina Locações" className="h-14 w-auto" />
              </div>
              <p className="text-gray-300 mb-4">
                Aluguel de equipamentos e máquinas para construção civil com os melhores preços e condições.
              </p>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Londrina Locações Ltda. Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="text-gray-300 hover:text-white transition-colors">
                    Equipamentos
                  </Link>
                </li>
                <li>
                  <Link to="/termos" className="text-gray-300 hover:text-white transition-colors">
                    Termos de Serviço
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contato</h3>
              <address className="not-italic space-y-2 text-gray-300">
                <p>Avenida Theodoro Victorelli, 181</p>
                <p>Londrina, PR - CEP 86027-750</p>
                <p>Brasil</p>
                <p>Telefone: (43) 3372-3860</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
