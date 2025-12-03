import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Personality from "./pages/dashboard/Personality";
import MoodTrends from "./pages/dashboard/MoodTrends";
import SocialGraph from "./pages/dashboard/SocialGraph";
import Interests from "./pages/dashboard/Interests";
import Chat from "./pages/dashboard/Chat";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="personality" element={<Personality />} />
            <Route path="mood" element={<MoodTrends />} />
            <Route path="social" element={<SocialGraph />} />
            <Route path="interests" element={<Interests />} />
            <Route path="chat" element={<Chat />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
