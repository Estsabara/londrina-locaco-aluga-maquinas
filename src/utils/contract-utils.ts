
import { Customer, CartItem } from "@/types";
import { formatCurrency } from "@/lib/date-utils";

export function generateContractText(customer: Customer, cartItems: any[], totalAmount: number): string {
  const today = new Date().toLocaleDateString('pt-BR');
  const items = cartItems.map(item => {
    const days = Math.ceil(
      (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;
    
    return `- ${item.product.name} (${item.product.brand} ${item.product.model}): ${item.quantity} unidade(s) por ${days} dias, de ${item.startDate.toLocaleDateString('pt-BR')} até ${item.endDate.toLocaleDateString('pt-BR')}.`;
  }).join('\n');
  
  return `CONTRATO DE LOCAÇÃO DE EQUIPAMENTOS

DATE: ${today}

PARTES:

LOCADORA: Londrina Locações, empresa inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX, com sede na Cidade de Londrina, Estado do Paraná, doravante denominada LOCADORA.

LOCATÁRIO: ${customer.name}, portador do documento nº ${customer.document_number}, residente em ${customer.address || 'endereço não informado'}, telefone ${customer.phone || 'não informado'}, e-mail ${customer.email}, doravente denominado LOCATÁRIO.

OBJETO DO CONTRATO:

O presente contrato tem por objeto a locação dos seguintes equipamentos:

${items}

VALOR TOTAL DA LOCAÇÃO: ${formatCurrency(totalAmount)}

CONDIÇÕES GERAIS:

1. O LOCATÁRIO se compromete a devolver os equipamentos nas mesmas condições em que foram recebidos, responsabilizando-se por eventuais danos ou perdas.

2. O prazo de locação será aquele especificado para cada equipamento, podendo ser prorrogado mediante comunicação prévia e pagamento do valor correspondente.

3. O LOCATÁRIO deverá apresentar documentação (RG, CPF, comprovante de residência) na retirada do equipamento.

4. Será cobrada uma caução que será devolvida após a verificação do estado do equipamento.

5. O combustível não está incluso no valor da locação para equipamentos a combustão.

6. Em caso de danos, a caução poderá ser retida para reparos.

7. O pagamento será feito na retirada dos equipamentos.

Este contrato entra em vigor na data de sua assinatura.`;
}
