import { motion } from "framer-motion";
import { Award, Truck, Users, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal, staggerParent } from "@/lib/motion";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: "25+", label: t("Лет совершенства", "Years of Excellence") },
    { icon: Truck, value: "200+", label: t("Маршрутов доставки", "Delivery Routes") },
    { icon: Users, value: "10K+", label: t("Довольных клиентов", "Happy Clients") },
    { icon: ShieldCheck, value: "100%", label: t("Контроль качества", "Quality Certified") },
  ];

  return (
    <section id="about" className="py-24 bg-kremlin-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-kremlin-deep mb-4">
              {t("О Kremlin Bites", "About Kremlin Bites")}
            </motion.h2>
            <motion.div variants={fadeUp} className="gold-divider w-32 mx-auto mb-8" />
            <motion.p variants={fadeUp} className="font-body text-muted-foreground leading-relaxed text-lg">
              {t(
                <>Основанная в 2001 году, <strong className="text-kremlin-red">Kremlin Bites</strong> уже более 25 лет работает в сфере российских продуктов питания, напитков и дистрибуции.</>,
                <>Founded in 2001, <strong className="text-kremlin-red">Kremlin Bites</strong> has spent more than 25 years building trust in Russian food, beverage, and distribution markets.</>
              )}
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-muted-foreground leading-relaxed text-lg mt-4">
              {t(
                "Мы развиваем современную складскую инфраструктуру, переработку, упаковку и логистику, чтобы поставлять брендированные продукты высокого качества для розницы, HoReCa и оптовых клиентов.",
                "We operate modern warehouse infrastructure, processing, packaging, and logistics to supply high-quality branded products to retail, HoReCa, and wholesale partners."
              )}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-lg border border-kremlin-gold/20 bg-background"
                variants={softReveal}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <stat.icon className="w-8 h-8 text-kremlin-gold mx-auto mb-3" />
                <div className="font-heading text-3xl font-bold text-kremlin-deep">{stat.value}</div>
                <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
