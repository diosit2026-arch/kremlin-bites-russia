import { motion } from "framer-motion";
import warehouse1 from "@/assets/warehouse1.jpg";
import warehouse2 from "@/assets/warehouse2.jpg";
import machinery1 from "@/assets/machinery1.jpg";
import machinery2 from "@/assets/machinery2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal, staggerParent } from "@/lib/motion";

const WarehouseSection = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: warehouse1,
      title: t("Основной склад", "Main Storage Facility"),
      desc: t(
        "Более 50 000 кв. метров организованного хранения продуктов по всей России.",
        "Over 50,000 sq. meters of organized food storage across multiple locations in Russia."
      ),
    },
    {
      src: warehouse2,
      title: t("Холодильные склады", "Cold Storage & Logistics"),
      desc: t(
        "Склады с контролем температуры и современным парком погрузчиков для эффективной дистрибуции.",
        "Temperature-controlled warehouses with a modern forklift fleet for efficient distribution."
      ),
    },
    {
      src: machinery1,
      title: t("Линия переработки", "Food Processing Line"),
      desc: t(
        "Современное оборудование для переработки продуктов, обеспечивающее высокие стандарты качества.",
        "State-of-the-art food processing equipment ensuring high quality standards."
      ),
    },
    {
      src: machinery2,
      title: t("Линия розлива", "Beverage Bottling Line"),
      desc: t(
        "Автоматизированные линии розлива, производящие тысячи единиц в час.",
        "Automated bottling production lines producing thousands of units per hour."
      ),
    },
  ];

  return (
    <section id="warehouse" className="py-24 bg-kremlin-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-kremlin-gold-light mb-4">
            {t("Склады и оборудование", "Warehouses & Machinery")}
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-divider w-32 mx-auto mb-4" />
          <motion.p variants={fadeUp} className="font-body text-kremlin-cream/70 max-w-3xl mx-auto">
            {t(
              "Kremlin Bites развивает современные food warehouse и beverage warehouse мощности в России, включая холодное хранение, переработку, упаковку и дистрибуцию.",
              "Kremlin Bites operates modern food warehouse and beverage warehouse capabilities in Russia, including cold storage, processing, packaging, and distribution."
            )}
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-kremlin-cream/60 max-w-3xl mx-auto mt-4">
            {t(
              "Если клиенты ищут food warehouse company Russia, Russian beverage warehouse, cold storage food distribution или warehouse-based food supplier, наш бренд показывает полный цикл поставок - от производства до доставки.",
              "If customers search for food warehouse company Russia, Russian beverage warehouse, cold storage food distribution, or a warehouse-based food supplier, our brand reflects a full supply chain from production to delivery."
            )}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {images.map((item, i) => (
            <motion.div
              key={i}
              className="group relative rounded-lg overflow-hidden"
              variants={softReveal}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                width={960}
                height={640}
                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kremlin-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-bold text-kremlin-gold mb-1">{item.title}</h3>
                <p className="font-body text-sm text-kremlin-cream/80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WarehouseSection;
