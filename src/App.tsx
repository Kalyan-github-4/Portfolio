import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from 'react';

const queryClient = new QueryClient();

const App = () => {
  // Add this effect to remove favicon
  useEffect(() => {
    // Remove existing favicon links
    document.querySelectorAll('link[rel*="icon"]').forEach(link => link.remove());

    // Optional: Add a blank favicon to prevent default
    const blankFavicon = document.createElement('link');
    blankFavicon.rel = 'icon';
    blankFavicon.href = 'data:,'; // Blank favicon
    document.head.appendChild(blankFavicon);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;