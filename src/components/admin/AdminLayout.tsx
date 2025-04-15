
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, BarChart3 } from "lucide-react";
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
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Admin Maq Locação</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Voltar ao site</Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 bg-muted/40">{children}</main>
      
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Maq Locação. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
