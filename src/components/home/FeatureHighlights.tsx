
import { Truck, CreditCard, RotateCw, ShieldCheck } from "lucide-react";

export function FeatureHighlights() {
  const features = [
    {
      icon: Truck,
      title: "Expedição Nórdica",
      description: "Transporte seguro por todas as terras"
    },
    {
      icon: CreditCard,
      title: "Comércio Justo",
      description: "Condições honradas de pagamento"
    },
    {
      icon: RotateCw,
      title: "Adaptabilidade Ancestral",
      description: "Locação pelo tempo que sua jornada exigir"
    },
    {
      icon: ShieldCheck,
      title: "Proteção dos Deuses",
      description: "Equipamentos abençoados e protegidos"
    }
  ];

  return (
    <section className="py-8 bg-nordic-ice border-b border-nordic-gold/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-nordic-gold/20 hover:border-nordic-gold/50 transition-all">
              <div className="p-3 rounded-lg bg-nordic-deep">
                <feature.icon className="w-6 h-6 text-nordic-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-nordic-deep nordic-title text-sm">{feature.title}</h3>
                <p className="text-sm text-gray-600 nordic-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
