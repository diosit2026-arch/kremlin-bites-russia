import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WarehouseSection from "@/components/WarehouseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
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

export default Index;
