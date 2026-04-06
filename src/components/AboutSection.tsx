import { motion } from "framer-motion";
import { Award, Truck, Users, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Truck, value: "200+", label: "Delivery Routes" },
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "100%", label: "Quality Certified" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-kremlin-cream">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-kremlin-deep mb-4">About Kremlin Bites</h2>
          <div className="gold-divider w-32 mx-auto mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            Founded in 2001, <strong className="text-kremlin-red">Kremlin Bites</strong> has been at the forefront of Russian food
            and beverage distribution for over <strong className="text-kremlin-red">25 years</strong>. What started as a small family
            business in Moscow has grown into one of Russia's most trusted names in authentic cuisine.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-lg mt-4">
            We operate multiple state-of-the-art warehouses equipped with modern machinery for food
            processing, packaging, and cold storage. Our commitment to quality, tradition, and innovation
            drives everything we do — from sourcing the finest ingredients to delivering products
            that honor centuries of Russian culinary heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-lg border border-kremlin-gold/20 bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-kremlin-gold mx-auto mb-3" />
              <div className="font-heading text-3xl font-bold text-kremlin-deep">{stat.value}</div>
              <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
