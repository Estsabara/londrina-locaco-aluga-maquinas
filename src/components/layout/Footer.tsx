
import { Link } from "react-router-dom";

export function Footer() {
  return <footer className="bg-black text-white">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/3b4fefb8-58db-4d89-81e6-00d74836ab68.png" alt="Londrina Locações" className="h-14 w-auto" />
            </div>
            <p className="mb-4">
              Aluguel de equipamentos e máquinas para construção civil com os melhores preços e condições.
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Londrina Locações Ltda. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-primary transition-colors">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <address className="not-italic space-y-2">
              <p>Avenida Theodoro Victorelli, 181</p>
              <p>Londrina, PR - CEP 86027-750</p>
              <p>Brasil</p>
              <p>Telefone: (43) 3372-3860</p>
            </address>
          </div>
        </div>
      </div>
    </footer>;
}
