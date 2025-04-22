
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface RentalStatusBadgeProps {
  status: string;
}

export const RentalStatusBadge = ({ status }: RentalStatusBadgeProps) => {
  switch (status) {
    case 'completed':
      return <span className="flex items-center text-green-600"><CheckCircle className="h-4 w-4 mr-1" /> Devolvido</span>;
    case 'overdue':
      return <span className="flex items-center text-red-600"><XCircle className="h-4 w-4 mr-1" /> Atrasado</span>;
    case 'active':
      return <span className="flex items-center text-blue-600"><Clock className="h-4 w-4 mr-1" /> Em andamento</span>;
    default:
      return <span className="text-muted-foreground">{status}</span>;
  }
};
