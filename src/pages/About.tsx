
import { Book, Star, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-nordic-ice to-white" />
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-nordic-deep mb-6 nordic-title relative z-10">
                A Saga do YGG
              </h1>
              <p className="text-lg md:text-xl text-gray-600 nordic-text relative z-10">
                Desde 2010, o YGG – Sistema de Locações tem sido a fortaleza de equipamentos ancestrais, conectando a força nórdica com a construção moderna.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-nordic-deep rounded-lg flex items-center justify-center mx-auto">
                  <Book className="w-8 h-8 text-nordic-gold" />
                </div>
                <h3 className="text-xl font-semibold nordic-title text-nordic-deep">Missão Ancestral</h3>
                <p className="text-gray-600 nordic-text">
                  Forjar soluções robustas com equipamentos de qualidade lendária, garantindo a proteção dos deuses e a eficiência dos antigos mestres.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-nordic-pine rounded-lg flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-nordic-gold" />
                </div>
                <h3 className="text-xl font-semibold nordic-title text-nordic-deep">Códigos de Honra</h3>
                <p className="text-gray-600 nordic-text">
                  Compromisso com a qualidade ancestral, transparência como os cristais de gelo e excelência digna dos halls de Valhalla.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-nordic-gold rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold nordic-title text-nordic-deep">Clã de Guerreiros</h3>
                <p className="text-gray-600 nordic-text">
                  Mestres qualificados e dedicados, forjados na tradição nórdica para oferecer suporte técnico e atendimento digno dos deuses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-nordic-ice py-16">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg"
                  alt="Fortaleza YGG"
                  className="rounded-lg shadow-xl border-2 border-nordic-gold/30"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-nordic-deep nordic-title">
                  Juramento de Qualidade Ancestral
                </h2>
                <p className="text-lg text-gray-600 nordic-text">
                  Nossa fortaleza abriga mais de 70 tipos diferentes de equipamentos, todos mantidos com o cuidado dos antigos mestres e manutenção digna dos deuses.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nordic-gold rounded-full" />
                    <span className="nordic-text">Equipamentos forjados com tecnologia ancestral</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nordic-gold rounded-full" />
                    <span className="nordic-text">Rituais de manutenção pelos mestres ferreiros</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nordic-gold rounded-full" />
                    <span className="nordic-text">Suporte dos sábios técnicos ancestrais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nordic-gold rounded-full" />
                    <span className="nordic-text">Expedição até as terras de sua obra</span>
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