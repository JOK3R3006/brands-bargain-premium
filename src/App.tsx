import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallButton from "@/components/layout/StickyCallButton";
import ChatWidget from "@/components/ChatWidget";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <StickyCallButton />
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
