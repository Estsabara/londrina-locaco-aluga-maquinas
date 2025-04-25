
export function ContactCTA() {
  return (
    <section className="bg-[#fe3100] py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Precisando de um equipamento específico?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e encontraremos a solução ideal para sua obra.
        </p>
        <a
          href="https://wa.me/554333723860"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#fe3100] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
}
