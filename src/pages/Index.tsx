import { useEffect, useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WarehouseSection from "@/components/WarehouseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <PageLoader isVisible={isLoading} />
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <WarehouseSection />
        <AboutSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
