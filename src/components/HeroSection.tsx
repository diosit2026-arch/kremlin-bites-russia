import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-kremlin-dark/75" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.img
          src={logo}
          alt="Kremlin Bites"
          className="w-64 md:w-80 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="font-body text-kremlin-gold-light text-lg md:text-xl tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Authentic Russian Foods & Beverages Since 2001
        </motion.p>
        <motion.div
          className="gold-divider w-48 mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        <motion.p
          className="font-body text-kremlin-cream/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Delivering the finest traditional Russian cuisine and beverages across the nation.
          25 years of heritage, quality, and passion.
        </motion.p>
        <motion.a
          href="#products"
          className="inline-block mt-8 px-8 py-3 border-2 border-kremlin-gold text-kremlin-gold font-body text-sm tracking-widest uppercase hover:bg-kremlin-gold hover:text-kremlin-dark transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Explore Products
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
