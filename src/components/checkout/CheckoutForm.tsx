
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Loader2 } from "lucide-react";

interface CheckoutFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  customer: {
    name: string;
    email: string;
    phone: string;
    document_number: string;
    address: string;
  };
  isLoading: boolean;
}

export function CheckoutForm({ onSubmit, onChange, customer, isLoading }: CheckoutFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome Completo <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          name="name"
          value={customer.name}
          onChange={onChange}
          placeholder="Digite seu nome completo"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={customer.email}
          onChange={onChange}
          placeholder="Digite seu email"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefone <span className="text-destructive">*</span>
        </label>
        <Input
          id="phone"
          name="phone"
          value={customer.phone}
          onChange={onChange}
          placeholder="(00) 00000-0000"
          required
        />
      </div>
      
      <div>
        <label htmlFor="document_number" className="block text-sm font-medium mb-1">
          CPF ou CNPJ <span className="text-destructive">*</span>
        </label>
        <Input
          id="document_number"
          name="document_number"
          value={customer.document_number}
          onChange={onChange}
          placeholder="Digite seu CPF ou CNPJ"
          required
        />
      </div>
      
      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1">
          Endereço Completo
        </label>
        <Textarea
          id="address"
          name="address"
          value={customer.address}
          onChange={onChange}
          placeholder="Rua, número, bairro, cidade, estado, CEP"
          rows={3}
        />
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>Campos com <span className="text-destructive">*</span> são obrigatórios.</p>
      </div>
      
      <Button type="submit" className="w-full bg-nordic-deep hover:bg-nordic-pine transition-all" size="lg" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Forjando Pedido...
          </>
        ) : (
          <>
            <MessageSquare className="mr-2 h-5 w-5" />
            Convocar via Mensageiro
          </>
        )}
      </Button>
    </form>
  )
}