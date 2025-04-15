
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Home, Phone } from "lucide-react";

export default function Success() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="bg-primary/10 rounded-full p-3 inline-flex mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Locação Confirmada!</h1>
          
          <p className="text-muted-foreground mb-8">
            Sua locação foi processada com sucesso. Você receberá uma cópia do contrato no seu email.
          </p>
          
          <div className="bg-card rounded-lg p-6 border mb-8">
            <h2 className="text-xl font-semibold mb-4">Próximos Passos</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Retirada dos Equipamentos</h3>
                  <p className="text-sm text-muted-foreground">
                    Compareça ao nosso depósito com a documentação necessária (RG, CPF e comprovante de residência).
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Pagamento e Caução</h3>
                  <p className="text-sm text-muted-foreground">
                    O pagamento será feito no momento da retirada. Será solicitada uma caução que será devolvida após a devolução dos equipamentos em bom estado.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Utilização e Devolução</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilize os equipamentos conforme orientações e devolva-os na data acordada para evitar taxas adicionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link to="/" className="flex items-center justify-center">
                <Home className="mr-2 h-4 w-4" />
                Voltar para Início
              </Link>
            </Button>
            
            <Button asChild size="lg" className="w-full">
              <a href="tel:+554399999999" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                Falar com Atendimento
              </a>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>
              Caso tenha alguma dúvida, entre em contato conosco pelo telefone (43) 9999-9999 ou pelo email contato@londrinalocacoes.com.br
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
