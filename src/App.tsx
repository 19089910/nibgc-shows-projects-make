import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DownloadFotos from "./pages/DownloadFotos";
import UploadFotos from "./pages/UploadFotos"
import HomeFotos from "./pages/HomeFotos";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ✅ Nova rota para galeria por dia */}
          <Route path="/museu-da-vida" element={<HomeFotos />} />
          <Route path="/museu-da-vida/:day" element={<DownloadFotos/>} />
          <Route path="/upload" element={<UploadFotos />} />
          {/* Rota de erro 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
