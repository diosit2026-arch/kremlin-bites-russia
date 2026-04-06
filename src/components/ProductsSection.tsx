import { motion } from "framer-motion";
import borscht from "@/assets/borscht.jpg";
import pelmeni from "@/assets/pelmeni.jpg";
import blini from "@/assets/blini.jpg";
import stroganoff from "@/assets/stroganoff.jpg";
import shashlik from "@/assets/shashlik.jpg";
import kvass from "@/assets/kvass.jpg";
import kompot from "@/assets/kompot.jpg";
import vodka from "@/assets/vodka.jpg";

const foods = [
  { name: "Борщ (Borscht)", price: "₽350", desc: "Classic beetroot soup with sour cream, fresh dill, and tender vegetables. A staple of Russian cuisine.", img: borscht },
  { name: "Пельмени (Pelmeni)", price: "₽420", desc: "Traditional handmade dumplings filled with seasoned minced meat, served with sour cream.", img: pelmeni },
  { name: "Блины (Blini)", price: "₽280", desc: "Thin Russian pancakes topped with premium red caviar and fresh sour cream.", img: blini },
  { name: "Бефстроганов (Stroganoff)", price: "₽580", desc: "Tender beef strips in a rich creamy mushroom sauce with egg noodles.", img: stroganoff },
  { name: "Шашлык (Shashlik)", price: "₽650", desc: "Marinated grilled meat skewers with roasted vegetables, a beloved Russian BBQ dish.", img: shashlik },
];

const beverages = [
  { name: "Квас (Kvass)", price: "₽120", desc: "Traditional fermented rye bread beverage, naturally carbonated and refreshing.", img: kvass },
  { name: "Компот (Kompot)", price: "₽150", desc: "Sweet berry fruit compote made from fresh seasonal berries and fruits.", img: kompot },
  { name: "Русская Водка (Vodka)", price: "₽890", desc: "Premium Russian vodka, triple-distilled for exceptional smoothness and purity.", img: vodka },
];

const ProductCard = ({ item, index }: { item: typeof foods[0]; index: number }) => (
  <motion.div
    className="group bg-card rounded-lg overflow-hidden shadow-kremlin border border-border hover:border-kremlin-gold/40 transition-all duration-500"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={item.img}
        alt={item.name}
        loading="lazy"
        width={640}
        height={640}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-heading text-lg font-semibold text-foreground">{item.name}</h3>
        <span className="font-heading text-xl font-bold text-kremlin-gold shrink-0 ml-2">{item.price}</span>
      </div>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
    </div>
  </motion.div>
);

const ProductsSection = () => (
  <section id="products" className="py-24 bg-kremlin-cream">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-kremlin-deep mb-4">Our Foods</h2>
        <div className="gold-divider w-32 mx-auto mb-4" />
        <p className="font-body text-muted-foreground max-w-xl mx-auto">Authentic Russian dishes crafted with traditional recipes passed down through generations.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
        {foods.map((item, i) => <ProductCard key={item.name} item={item} index={i} />)}
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-kremlin-deep mb-4">Our Beverages</h2>
        <div className="gold-divider w-32 mx-auto mb-4" />
        <p className="font-body text-muted-foreground max-w-xl mx-auto">From traditional fermented drinks to premium spirits, taste the soul of Russia.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {beverages.map((item, i) => <ProductCard key={item.name} item={item} index={i} />)}
      </div>
    </div>
  </section>
);

export default ProductsSection;
