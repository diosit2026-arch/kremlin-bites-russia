import { motion } from "framer-motion";
import borscht from "@/assets/borscht.jpg";
import pelmeni from "@/assets/pelmeni.jpg";
import blini from "@/assets/blini.jpg";
import stroganoff from "@/assets/stroganoff.jpg";
import shashlik from "@/assets/shashlik.jpg";
import kvass from "@/assets/kvass.jpg";
import kompot from "@/assets/kompot.jpg";
import vodka from "@/assets/vodka.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

interface Product {
  nameRu: string;
  nameEn: string;
  price: string;
  descRu: string;
  descEn: string;
  img: string;
}

const foods: Product[] = [
  { nameRu: "Борщ", nameEn: "Borscht", price: "₽350", descRu: "Классический свекольный суп со сметаной, свежим укропом и нежными овощами. Основа русской кухни.", descEn: "Classic beetroot soup with sour cream, fresh dill, and tender vegetables. A staple of Russian cuisine.", img: borscht },
  { nameRu: "Пельмени", nameEn: "Pelmeni", price: "₽420", descRu: "Традиционные домашние пельмени с мясной начинкой, подаются со сметаной.", descEn: "Traditional handmade dumplings filled with seasoned minced meat, served with sour cream.", img: pelmeni },
  { nameRu: "Блины", nameEn: "Blini", price: "₽280", descRu: "Тонкие русские блины с красной икрой и свежей сметаной.", descEn: "Thin Russian pancakes topped with premium red caviar and fresh sour cream.", img: blini },
  { nameRu: "Бефстроганов", nameEn: "Beef Stroganoff", price: "₽580", descRu: "Нежные полоски говядины в сливочно-грибном соусе с яичной лапшой.", descEn: "Tender beef strips in a rich creamy mushroom sauce with egg noodles.", img: stroganoff },
  { nameRu: "Шашлык", nameEn: "Shashlik", price: "₽650", descRu: "Маринованное мясо на шампурах с жареными овощами, любимое русское блюдо на гриле.", descEn: "Marinated grilled meat skewers with roasted vegetables, a beloved Russian BBQ dish.", img: shashlik },
];

const beverages: Product[] = [
  { nameRu: "Квас", nameEn: "Kvass", price: "₽120", descRu: "Традиционный ферментированный напиток из ржаного хлеба, натурально газированный и освежающий.", descEn: "Traditional fermented rye bread beverage, naturally carbonated and refreshing.", img: kvass },
  { nameRu: "Компот", nameEn: "Kompot", price: "₽150", descRu: "Сладкий ягодный компот из свежих сезонных ягод и фруктов.", descEn: "Sweet berry fruit compote made from fresh seasonal berries and fruits.", img: kompot },
  { nameRu: "Русская водка", nameEn: "Russian Vodka", price: "₽890", descRu: "Премиальная русская водка тройной дистилляции для исключительной мягкости и чистоты.", descEn: "Premium Russian vodka, triple-distilled for exceptional smoothness and purity.", img: vodka },
];

const ProductCard = ({ item, index }: { item: Product; index: number }) => {
  const { t } = useLanguage();
  return (
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
          alt={t(item.nameRu, item.nameEn)}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading text-lg font-semibold text-foreground">{t(item.nameRu, item.nameEn)}</h3>
          <span className="font-heading text-xl font-bold text-kremlin-gold shrink-0 ml-2">{item.price}</span>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{t(item.descRu, item.descEn)}</p>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 bg-kremlin-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-kremlin-deep mb-4">
            {t("Наши блюда", "Our Foods")}
          </h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            {t("Аутентичные русские блюда, приготовленные по традиционным рецептам, передаваемым из поколения в поколение.", "Authentic Russian dishes crafted with traditional recipes passed down through generations.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
          {foods.map((item, i) => <ProductCard key={item.nameEn} item={item} index={i} />)}
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-kremlin-deep mb-4">
            {t("Наши напитки", "Our Beverages")}
          </h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            {t("От традиционных ферментированных напитков до премиальных спиртных — почувствуйте душу России.", "From traditional fermented drinks to premium spirits, taste the soul of Russia.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {beverages.map((item, i) => <ProductCard key={item.nameEn} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
