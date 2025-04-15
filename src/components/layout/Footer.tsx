
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/fd844232-ed4e-417c-9466-26ce847d8051.png" 
                alt="Londrina Locações" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Aluguel de equipamentos e máquinas para construção civil com os melhores preços e condições.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Londrina Locações Ltda. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>Av. das Máquinas, 1234</p>
              <p>Londrina, PR - CEP 86000-000</p>
              <p>Telefone: (43) 3372-3860</p>
              <p>WhatsApp: (43) 99999-8888</p>
              <p>Email: contato@londrinalocacoes.com.br</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
