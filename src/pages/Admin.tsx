
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { AdminHeader } from "@/components/admin/dashboard/AdminHeader";
import { WelcomeCard } from "@/components/admin/dashboard/WelcomeCard";
import { AdminTabs } from "@/components/admin/dashboard/AdminTabs";

export default function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("rentals");
  
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        toast.error("Por favor, faça login para acessar o painel administrativo");
        navigate("/");
        return;
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <AdminHeader />
        <WelcomeCard />
        <AdminTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </AdminLayout>
  );
}
