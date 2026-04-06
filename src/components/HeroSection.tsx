import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-kremlin-dark/75" />

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-5xl mx-auto">
        <motion.img
          src={logo}
          alt="Kremlin Bites"
          className="w-40 sm:w-52 md:w-80 mx-auto mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="font-body text-kremlin-gold-light text-xs sm:text-sm md:text-xl tracking-[0.22em] sm:tracking-widest uppercase mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t("Аутентичные русские продукты и напитки с 2001 года", "Authentic Russian Foods & Beverages Since 2001")}
        </motion.p>
        <motion.h1
          className="font-heading text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl font-bold text-kremlin-cream mb-5 sm:mb-6 max-w-4xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          {t(
            "Kremlin Bites - российская компания продуктов, напитков и складской дистрибуции",
            "Kremlin Bites - Russian Food, Beverage and Warehouse Distribution Company"
          )}
        </motion.h1>
        <motion.div
          className="gold-divider w-24 sm:w-32 md:w-48 mx-auto mb-5 sm:mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        <motion.p
          className="font-body text-kremlin-cream/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-7 sm:leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {t(
            "Поставляем брендированные российские продукты питания, напитки и решения для дистрибуции по всей стране. Kremlin Bites объединяет качество, традиции, складскую инфраструктуру и надежную логистику.",
            "We supply branded Russian food products, beverages, and distribution solutions across the country. Kremlin Bites combines quality, tradition, warehouse infrastructure, and reliable logistics."
          )}
        </motion.p>
        <motion.p
          className="font-body text-kremlin-cream/70 text-sm sm:text-base max-w-3xl mx-auto leading-7 sm:leading-relaxed mt-3 sm:mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
        >
          {t(
            "Наш бренд работает как поставщик продуктов питания и напитков из России, а также как food warehouse company с холодным хранением, обработкой, упаковкой и оптовой логистикой для retail, HoReCa и международных партнеров.",
            "Our brand operates as a Russian food and beverage supplier and as a food warehouse company with cold storage, processing, packaging, and wholesale logistics for retail, HoReCa, and international partners."
          )}
        </motion.p>
        <motion.a
          href="#products"
          className="inline-block mt-7 sm:mt-8 px-6 sm:px-8 py-3 border-2 border-kremlin-gold text-kremlin-gold font-body text-xs sm:text-sm tracking-[0.18em] sm:tracking-widest uppercase hover:bg-kremlin-gold hover:text-kremlin-dark transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {t("Наши продукты", "Explore Products")}
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
