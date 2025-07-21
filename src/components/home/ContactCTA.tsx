
export function ContactCTA() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-nordic-deep to-nordic-pine" />
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 nordic-title relative z-10">
          Busca por Equipamentos Lendários?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto nordic-text relative z-10">
          Convoque nossos mestres e encontraremos as ferramentas ancestrais ideais para forjar sua obra com a força dos antigos.
        </p>
        <a
          href="https://wa.me/554333723860"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-nordic-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-nordic-gold/90 transition-colors relative z-10 border-2 border-nordic-gold hover:border-white"
        >
          Convoque os Mestres
        </a>
      </div>
    </section>
  );
}
