
import { Book, Star, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Nossa História
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Desde 2010, a Londrina Locações tem sido referência em locação de equipamentos para construção civil no norte do Paraná.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Book className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Missão</h3>
                <p className="text-gray-600">
                  Fornecer soluções de qualidade em equipamentos para construção, garantindo segurança e eficiência para nossos clientes.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Valores</h3>
                <p className="text-gray-600">
                  Comprometimento com a qualidade, transparência nos negócios e excelência no atendimento ao cliente.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Nossa Equipe</h3>
                <p className="text-gray-600">
                  Profissionais qualificados e dedicados a oferecer o melhor suporte técnico e atendimento personalizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png"
                  alt="Nossa Empresa"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Compromisso com a Qualidade
                </h2>
                <p className="text-lg text-gray-600">
                  Nossa empresa possui mais de 70 tipos diferentes de equipamentos, todos mantidos em excelente estado de conservação e com manutenção regular.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Equipamentos modernos e bem conservados
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Manutenção preventiva regular
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Suporte técnico especializado
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Entrega e retirada no local da obra
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
