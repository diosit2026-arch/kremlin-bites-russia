import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WarehouseSection from "@/components/WarehouseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProductsSection />
    <WarehouseSection />
    <AboutSection />
    <Footer />
  </div>
);

export default Index;
