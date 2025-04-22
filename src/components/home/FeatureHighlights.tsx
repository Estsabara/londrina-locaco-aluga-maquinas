
import { Truck, CreditCard, RotateCw, ShieldCheck } from "lucide-react";

export function FeatureHighlights() {
  const features = [
    {
      icon: Truck,
      title: "Entrega e retirada",
      description: "Serviço de transporte em toda região"
    },
    {
      icon: CreditCard,
      title: "Facilidade no pagamento",
      description: "Parcele em até 12x no cartão"
    },
    {
      icon: RotateCw,
      title: "Flexibilidade",
      description: "Alugue pelo período que precisar"
    },
    {
      icon: ShieldCheck,
      title: "Segurança garantida",
      description: "Equipamentos certificados e segurados"
    }
  ];

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 rounded-full bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
