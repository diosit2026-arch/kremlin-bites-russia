import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import beefStroganoffPackaging from "@/assets/food/Beef Stroganoff with Kremlin Bites packaging.png";
import borschtPackaging from "@/assets/food/Borscht with Kremlin Bites packaging.png";
import buckwheatKasha from "@/assets/food/Buckwheat kasha with mushrooms and herbs.png";
import gourmetSalad from "@/assets/food/ChatGPT Image Apr 6, 2026, 08_05_59 PM.png";
import smokedSausage from "@/assets/food/ChatGPT Image Apr 6, 2026, 08_20_07 PM.png";
import seafoodPlatter from "@/assets/food/ChatGPT Image Apr 6, 2026, 08_20_15 PM.png";
import draniki from "@/assets/food/Crispy draniki with creamy sour cream.png";
import medovik from "@/assets/food/Delicious medovik with golden honey accents.png";
import vareniki from "@/assets/food/Fresh vareniki with cherry and dill.png";
import frozenPelmeniPack from "@/assets/food/Frozen Russian pelmeni with elegant packaging (1).png";
import chickenKiev from "@/assets/food/Golden Chicken Kiev with roasted potatoes.png";
import pirozhki from "@/assets/food/Golden pirozhki on a rustic tray.png";
import golubtsy from "@/assets/food/Golubtsy with tomato sauce and packaging.png";
import shashlikPackaging from "@/assets/food/Grilled shashlik with Kremlin Bites packaging.png";
import pelmeniPackaging from "@/assets/food/Steaming pelmeni and Kremlin Bites packaging.png";

import grapeJuice from "@/assets/bevarades/Grape juice and Kremlin Bites bottle.png";
import kefir from "@/assets/bevarades/Kremlin Bites Kefir refreshment display.png";
import ryazhenka from "@/assets/bevarades/Kremlin Bites Ryazhenka drink display.png";
import lemonHoney from "@/assets/bevarades/Lemon honey drink with mint garnish.png";
import pineConeDrink from "@/assets/bevarades/Pine cone drink in a forest setting.png";
import hotChocolate from "@/assets/bevarades/Rich Russian hot chocolate indulgence.png";
import kvass from "@/assets/bevarades/Russian kvass on rustic table.png";
import sbiten from "@/assets/bevarades/Steaming sbiten and Kremlin Bites package.png";
import kompot from "@/assets/bevarades/Traditional Russian kompot in rustic kitchen.png";
import mors from "@/assets/bevarades/Vibrant Mors berry drink display.png";

import chocolateBun from "@/assets/biscatues and buns/Chocolate-filled Kremlin Bites with rich filling.png";
import oatBiscuits from "@/assets/biscatues and buns/Golden oat biscuits and Kremlin Bites.png";
import ponchiki from "@/assets/biscatues and buns/Golden ponchiki and Kremlin Bites.png";
import sweetSwirls from "@/assets/biscatues and buns/Golden swirls and Kremlin bites.png";
import makovik from "@/assets/biscatues and buns/Makovik and Kremlin Bites display.png";
import butterTeaBiscuits from "@/assets/biscatues and buns/Russian butter tea biscuits and tea.png";
import strawberryBuns from "@/assets/biscatues and buns/Strawberry-filled buns and Kremlin Bites.png";
import baranki from "@/assets/biscatues and buns/Traditional Russian baranki with packaging.png";
import pryaniki from "@/assets/biscatues and buns/Traditional Russian pryaniki and spices.png";

interface Product {
  nameRu: string;
  nameEn: string;
  price: string;
  descRu: string;
  descEn: string;
  img: string;
}

const foods: Product[] = [
  {
    nameRu: "Kremlin Bites Бефстроганов Премиум",
    nameEn: "Kremlin Bites Beef Stroganoff Premium",
    price: "₽649",
    descRu: "Готовый к подаче мясной продукт в фирменной упаковке с насыщенным сливочно-грибным соусом для retail, distribution и deli-format продажи.",
    descEn: "A ready-to-serve beef product in branded packaging with rich creamy mushroom sauce for retail, distribution, and deli-format sales.",
    img: beefStroganoffPackaging,
  },
  {
    nameRu: "Kremlin Bites Борщ Домашний",
    nameEn: "Kremlin Bites Homestyle Borscht",
    price: "₽289",
    descRu: "Традиционный русский борщ в ready-to-heat формате с удобной подачей, устойчивым качеством и понятным домашним вкусом.",
    descEn: "Traditional Russian borscht in a ready-to-heat format with convenient preparation, reliable quality, and a familiar homestyle taste.",
    img: borschtPackaging,
  },
  {
    nameRu: "Kremlin Bites Гречка с Грибами",
    nameEn: "Kremlin Bites Buckwheat with Mushrooms",
    price: "₽239",
    descRu: "Сытный гарнир ready meal категории с грибами и травами, подходящий для everyday retail и быстрой подачи.",
    descEn: "A hearty ready-meal side with mushrooms and herbs, ideal for everyday retail and quick serving.",
    img: buckwheatKasha,
  },
  {
    nameRu: "Kremlin Bites Русский Салат Gourmet",
    nameEn: "Kremlin Bites Russian Gourmet Salad",
    price: "₽329",
    descRu: "Охлажденный готовый салат премиального сегмента для витринной продажи, доставки и convenience assortments.",
    descEn: "A chilled premium prepared salad for display counters, delivery menus, and convenience assortments.",
    img: gourmetSalad,
  },
  {
    nameRu: "Kremlin Bites Копченые Колбаски",
    nameEn: "Kremlin Bites Smoked Sausage Selection",
    price: "₽469",
    descRu: "Фирменный мясной продукт с насыщенным вкусом и сильной shelf presence для гастрономии и розницы.",
    descEn: "A branded smoked meat product with bold flavor and strong shelf presence for deli counters and retail.",
    img: smokedSausage,
  },
  {
    nameRu: "Kremlin Bites Морское Ассорти",
    nameEn: "Kremlin Bites Seafood Assortment",
    price: "₽799",
    descRu: "Премиальный ready-to-serve продукт для gift sets, catering menus и upscale retail shelves.",
    descEn: "A premium ready-to-serve product suited to gift sets, catering menus, and upscale retail shelves.",
    img: seafoodPlatter,
  },
  {
    nameRu: "Kremlin Bites Драники Хрустящие",
    nameEn: "Kremlin Bites Crispy Draniki",
    price: "₽259",
    descRu: "Картофельные драники в ready-to-cook формате для быстрой обжарки, стабильной текстуры и домашнего вкуса.",
    descEn: "Potato draniki in a ready-to-cook format for quick frying, consistent texture, and homestyle flavor.",
    img: draniki,
  },
  {
    nameRu: "Kremlin Bites Медовик Золотой",
    nameEn: "Kremlin Bites Golden Medovik",
    price: "₽389",
    descRu: "Фирменный медовый десерт для порционной продажи, cafe display и праздничных наборов.",
    descEn: "A branded honey-layer dessert for portion sales, cafe display, and festive boxed assortments.",
    img: medovik,
  },
  {
    nameRu: "Kremlin Bites Вареники Вишневые",
    nameEn: "Kremlin Bites Cherry Vareniki",
    price: "₽319",
    descRu: "Замороженный сладкий полуфабрикат ready-to-cook с фруктовой начинкой для retail и quick home preparation.",
    descEn: "A frozen sweet ready-to-cook product with fruit filling for retail and quick home preparation.",
    img: vareniki,
  },
  {
    nameRu: "Kremlin Bites Пельмени Классические",
    nameEn: "Kremlin Bites Classic Pelmeni",
    price: "₽359",
    descRu: "Замороженные пельмени в элегантной брендированной упаковке с удобным хранением и стабильным качеством.",
    descEn: "Frozen pelmeni in elegant branded packaging with convenient storage and consistent quality.",
    img: frozenPelmeniPack,
  },
  {
    nameRu: "Kremlin Bites Котлета по-Киевски",
    nameEn: "Kremlin Bites Chicken Kiev",
    price: "₽549",
    descRu: "Готовый к запеканию куриный продукт с золотистой панировкой для ready meal и foodservice категорий.",
    descEn: "A ready-to-bake chicken product with golden breading for ready-meal and foodservice categories.",
    img: chickenKiev,
  },
  {
    nameRu: "Kremlin Bites Пирожки Традиционные",
    nameEn: "Kremlin Bites Traditional Pirozhki",
    price: "₽279",
    descRu: "Мягкие фирменные пирожки в формате quick reheat и ready-to-serve для кафе, магазинов и takeaway витрин.",
    descEn: "Soft branded pirozhki in quick-reheat and ready-to-serve formats for cafes, shops, and takeaway displays.",
    img: pirozhki,
  },
  {
    nameRu: "Kremlin Bites Голубцы в Томатном Соусе",
    nameEn: "Kremlin Bites Golubtsy in Tomato Sauce",
    price: "₽429",
    descRu: "Готовый к подаче продукт с насыщенным томатным соусом и домашним вкусовым профилем.",
    descEn: "A ready-to-serve product with rich tomato sauce and a comforting homestyle flavor profile.",
    img: golubtsy,
  },
  {
    nameRu: "Kremlin Bites Шашлык Маринованный",
    nameEn: "Kremlin Bites Marinated Shashlik",
    price: "₽699",
    descRu: "Маринованный мясной продукт в фирменной упаковке, подготовленный для гриля, духовки и быстрой продажи.",
    descEn: "A marinated meat product in branded packaging prepared for grilling, oven finishing, and quick sale.",
    img: shashlikPackaging,
  },
  {
    nameRu: "Kremlin Bites Пельмени Отборные",
    nameEn: "Kremlin Bites Signature Pelmeni",
    price: "₽399",
    descRu: "Фирменная линейка пельменей ready-to-cook с усиленной айдентикой, удобной фасовкой и премиальным позиционированием.",
    descEn: "A signature ready-to-cook pelmeni line with stronger branding, practical portioning, and premium positioning.",
    img: pelmeniPackaging,
  },
];

const beverages: Product[] = [
  {
    nameRu: "Kremlin Bites Виноградный Сок",
    nameEn: "Kremlin Bites Grape Juice",
    price: "₽169",
    descRu: "Насыщенный виноградный сок в фирменной бутылке для современной розницы и premium shelf display.",
    descEn: "Rich grape juice in a branded bottle built for modern retail and premium shelf display.",
    img: grapeJuice,
  },
  {
    nameRu: "Kremlin Bites Кефир Классический",
    nameEn: "Kremlin Bites Classic Kefir",
    price: "₽119",
    descRu: "Традиционный кисломолочный напиток для chilled retail, семейных покупок и повседневного ассортимента.",
    descEn: "A traditional cultured milk drink for chilled retail, family purchases, and everyday assortments.",
    img: kefir,
  },
  {
    nameRu: "Kremlin Bites Ряженка Домашняя",
    nameEn: "Kremlin Bites Homestyle Ryazhenka",
    price: "₽129",
    descRu: "Нежный ферментированный молочный напиток с мягким карамельным профилем для modern retail и convenience fridges.",
    descEn: "A smooth fermented milk drink with a mild caramel profile for modern retail and convenience fridges.",
    img: ryazhenka,
  },
  {
    nameRu: "Kremlin Bites Лимонно-Медовый Напиток",
    nameEn: "Kremlin Bites Lemon Honey Drink",
    price: "₽159",
    descRu: "Освежающий напиток с лимоном и медом для seasonal display, cafe coolers и premium ready-to-drink shelves.",
    descEn: "A refreshing lemon-and-honey drink for seasonal display, cafe coolers, and premium ready-to-drink shelves.",
    img: lemonHoney,
  },
  {
    nameRu: "Kremlin Bites Напиток из Сосновой Шишки",
    nameEn: "Kremlin Bites Pine Cone Drink",
    price: "₽189",
    descRu: "Специалитет с выразительным лесным профилем для gift assortments, gourmet retail и seasonal presentation.",
    descEn: "A specialty drink with a distinctive forest profile for gift assortments, gourmet retail, and seasonal presentation.",
    img: pineConeDrink,
  },
  {
    nameRu: "Kremlin Bites Горячий Шоколад",
    nameEn: "Kremlin Bites Rich Hot Chocolate",
    price: "₽179",
    descRu: "Насыщенный десертный напиток для кафе, winter menus и премиального позиционирования в линейке напитков.",
    descEn: "A rich dessert beverage for cafes, winter menus, and premium positioning within the drinks line.",
    img: hotChocolate,
  },
  {
    nameRu: "Kremlin Bites Квас Традиционный",
    nameEn: "Kremlin Bites Traditional Kvass",
    price: "₽99",
    descRu: "Традиционный русский квас с освежающим хлебным профилем для chilled retail и summer assortment.",
    descEn: "Traditional Russian kvass with a refreshing rye-bread profile for chilled retail and summer assortments.",
    img: kvass,
  },
  {
    nameRu: "Kremlin Bites Сбитень Медовый",
    nameEn: "Kremlin Bites Honey Sbiten",
    price: "₽149",
    descRu: "Горячий медово-пряный напиток для сезонной продажи, кафе-уголков и winter menus.",
    descEn: "A hot honey-spice drink for seasonal sales, cafe corners, and winter menus.",
    img: sbiten,
  },
  {
    nameRu: "Kremlin Bites Компот Домашний",
    nameEn: "Kremlin Bites Homestyle Kompot",
    price: "₽129",
    descRu: "Фруктовый напиток с мягким домашним вкусом для семейной розницы и chilled assortments.",
    descEn: "A fruit drink with soft homestyle flavor for family retail and chilled assortments.",
    img: kompot,
  },
  {
    nameRu: "Kremlin Bites Морс Ягодный",
    nameEn: "Kremlin Bites Berry Mors",
    price: "₽139",
    descRu: "Яркий ягодный морс с понятным русским вкусовым профилем для retail и foodservice.",
    descEn: "A vibrant berry mors with a familiar Russian flavor profile for retail and foodservice.",
    img: mors,
  },
];

const bakery: Product[] = [
  {
    nameRu: "Kremlin Bites Булочка Шоколадная",
    nameEn: "Kremlin Bites Chocolate Bun",
    price: "₽119",
    descRu: "Мягкая сладкая булочка с шоколадной начинкой для кофеен, импульсной полки и быстрой розничной продажи.",
    descEn: "A soft sweet bun with chocolate filling for cafes, impulse shelves, and quick retail turnover.",
    img: chocolateBun,
  },
  {
    nameRu: "Kremlin Bites Овсяное Печенье",
    nameEn: "Kremlin Bites Oat Biscuits",
    price: "₽119",
    descRu: "Классическое овсяное печенье для everyday retail, чайной полки и семейных наборов.",
    descEn: "Classic oat biscuits for everyday retail, tea shelves, and family snack assortments.",
    img: oatBiscuits,
  },
  {
    nameRu: "Kremlin Bites Пончики Золотые",
    nameEn: "Kremlin Bites Golden Ponchiki",
    price: "₽149",
    descRu: "Воздушные пончики в dessert-ready формате с хорошей витринной подачей и takeaway упаковкой.",
    descEn: "Light golden ponchiki in a dessert-ready format with strong display appeal and takeaway packaging.",
    img: ponchiki,
  },
  {
    nameRu: "Kremlin Bites Сдобные Завитки",
    nameEn: "Kremlin Bites Golden Sweet Swirls",
    price: "₽139",
    descRu: "Сладкая слоистая выпечка с выразительной витринной подачей для bakery shelves и coffee-to-go точек.",
    descEn: "A sweet layered pastry with strong display appeal for bakery shelves and coffee-to-go counters.",
    img: sweetSwirls,
  },
  {
    nameRu: "Kremlin Bites Маковик Традиционный",
    nameEn: "Kremlin Bites Traditional Makovik",
    price: "₽179",
    descRu: "Сдобная выпечка с маковой начинкой для bakery shelves, gift assortments и домашнего десертного сегмента.",
    descEn: "An enriched pastry with poppy-seed filling for bakery shelves, gift assortments, and home dessert sales.",
    img: makovik,
  },
  {
    nameRu: "Kremlin Bites Булочки Клубничные",
    nameEn: "Kremlin Bites Strawberry Buns",
    price: "₽129",
    descRu: "Мягкие булочки с фруктовой начинкой для convenience retail, перекусов и sweet bakery displays.",
    descEn: "Soft fruit-filled buns for convenience retail, snacking, and sweet bakery displays.",
    img: strawberryBuns,
  },
  {
    nameRu: "Kremlin Bites Сливочное Чайное Печенье",
    nameEn: "Kremlin Bites Butter Tea Biscuits",
    price: "₽129",
    descRu: "Нежное сливочное печенье для чайной полки, семейных наборов и everyday sweet snacks.",
    descEn: "Delicate butter biscuits for tea shelves, family assortments, and everyday sweet snacking.",
    img: butterTeaBiscuits,
  },
  {
    nameRu: "Kremlin Bites Баранки Традиционные",
    nameEn: "Kremlin Bites Traditional Baranki",
    price: "₽109",
    descRu: "Классические баранки в брендированной упаковке для массовой розницы, чайных наборов и convenience format.",
    descEn: "Classic baranki in branded packaging for mass retail, tea assortments, and convenience formats.",
    img: baranki,
  },
  {
    nameRu: "Kremlin Bites Пряники Домашние",
    nameEn: "Kremlin Bites Homestyle Pryaniki",
    price: "₽149",
    descRu: "Традиционные русские пряники с теплым пряным профилем для bakery gifting, dessert shelves и retail impulse purchase.",
    descEn: "Traditional Russian pryaniki with a warm spiced profile for bakery gifting, dessert shelves, and retail impulse purchase.",
    img: pryaniki,
  },
];

const ProductCard = ({ item, index }: { item: Product; index: number }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="group bg-card rounded-lg overflow-hidden shadow-kremlin border border-border hover:border-kremlin-gold/40 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.04, duration: 0.6 }}
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
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">
            {t(item.nameRu, item.nameEn)}
          </h3>
          <span className="font-heading text-xl font-bold text-kremlin-gold shrink-0">
            {item.price}
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {t(item.descRu, item.descEn)}
        </p>
      </div>
    </motion.div>
  );
};

const SectionHeading = ({
  titleRu,
  titleEn,
  descRu,
  descEn,
}: {
  titleRu: string;
  titleEn: string;
  descRu: string;
  descEn: string;
}) => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-heading text-3xl font-bold text-kremlin-deep mb-3">
        {t(titleRu, titleEn)}
      </h3>
      <p className="font-body text-muted-foreground max-w-2xl mx-auto">
        {t(descRu, descEn)}
      </p>
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
            {t("Каталог продукции", "Product Catalogue")}
          </h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="font-body text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Полная линейка фирменной продукции Kremlin Bites: готовые блюда, напитки, печенье и булочки для розницы, дистрибуции и HoReCa.",
              "The full Kremlin Bites product line: prepared foods, beverages, biscuits, and buns for retail, distribution, and HoReCa."
            )}
          </p>
        </motion.div>

        <SectionHeading
          titleRu="Российские продукты"
          titleEn="Russian Food Products"
          descRu="Готовые блюда, полуфабрикаты и ready-to-cook позиции на основе ваших food assets."
          descEn="Prepared foods, semi-finished items, and ready-to-cook products based on your food assets."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {foods.map((item, i) => (
            <ProductCard key={item.nameEn} item={item} index={i} />
          ))}
        </div>

        <SectionHeading
          titleRu="Российские напитки"
          titleEn="Russian Beverages"
          descRu="Традиционные и фруктовые напитки для современной розницы и chilled display."
          descEn="Traditional and fruit-forward drinks for modern retail and chilled display."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {beverages.map((item, i) => (
            <ProductCard key={item.nameEn} item={item} index={i + foods.length} />
          ))}
        </div>

        <SectionHeading
          titleRu="Печенье и булочки"
          titleEn="Biscuits & Buns"
          descRu="Сладкая bakery-линейка для полки, витрины и импульсной покупки."
          descEn="A sweet bakery line designed for shelf display, counters, and impulse purchase."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bakery.map((item, i) => (
            <ProductCard key={item.nameEn} item={item} index={i + foods.length + beverages.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
