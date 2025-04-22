
import { ShieldCheck, CreditCard, Visa, Mastercard, Shield } from "lucide-react";

export function PaymentInfo() {
  return (
    <div className="border-t bg-primary">
      <div className="container py-8">
        <div className="space-y-8">
          {/* Payment Methods */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Formas de Pagamento</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <CreditCard className="h-8 w-8 text-white" />
              <Visa className="h-8 w-8 text-white" />
              <Mastercard className="h-8 w-8 text-white" />
              <img src="/lovable-uploads/1db7ca5b-3540-4477-9960-c46f9f7ac68a.png" alt="Elo" className="h-8 w-auto invert" />
            </div>
          </div>

          {/* Security Seals */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Certificados e Segurança</h3>
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center bg-white px-4 py-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium">Site Seguro</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium">SSL Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
