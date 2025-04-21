
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export function LoadingState() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container py-10">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
