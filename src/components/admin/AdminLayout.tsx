
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout realizado com sucesso");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-nordic-gold" />
            <span className="text-lg font-bold text-nordic-gold nordic-title">Salão dos Mestres YGG</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-nordic-gold text-nordic-gold hover:bg-nordic-gold/10 hover:text-nordic-gold px-3 py-1 text-sm"
              >
                Retornar ao Reino
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout} 
              className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 px-3 py-1 text-sm"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Partir
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 bg-muted/40">{children}</main>
      
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} YGG – Sistema de Locações. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
