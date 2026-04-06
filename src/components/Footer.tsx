import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t("Главная", "Home"), href: "#home" },
    { label: t("Продукты", "Products"), href: "#products" },
    { label: t("Склады", "Warehouse"), href: "#warehouse" },
    { label: t("О нас", "About"), href: "#about" },
  ];

  return (
    <footer id="contact" className="bg-kremlin-dark-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Kremlin Bites" className="h-16 mb-4" />
            <p className="font-body text-kremlin-cream/60 text-sm leading-relaxed">
              {t(
                "Аутентичные русские продукты и напитки. Мы с гордостью обслуживаем клиентов более 25 лет, предлагая лучшие традиционные рецепты.",
                "Authentic Russian foods & beverages. Proudly serving customers for over 25 years with the finest traditional recipes."
              )}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-kremlin-gold mb-4">
              {t("Быстрые ссылки", "Quick Links")}
            </h3>
            <div className="space-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block font-body text-sm text-kremlin-cream/60 hover:text-kremlin-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-kremlin-gold mb-4">
              {t("Свяжитесь с нами", "Contact Us")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kremlin-gold shrink-0 mt-0.5" />
                <p className="font-body text-sm text-kremlin-cream/60">
                  {t("ул. Наташи Ковшовой, 2,", "Natashi Kovshovoy St, 2,")}<br />
                  {t("Москва, Россия, 119361", "Moscow, Russia, 119361")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kremlin-gold shrink-0" />
                <a href="tel:+79800892952" className="font-body text-sm text-kremlin-cream/60 hover:text-kremlin-gold transition-colors">
                  +7 980 089 29 52
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kremlin-gold shrink-0" />
                <a href="mailto:info@kremlinbites.ru" className="font-body text-sm text-kremlin-cream/60 hover:text-kremlin-gold transition-colors">
                  info@kremlinbites.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-divider mb-6" />
        <p className="font-body text-xs text-kremlin-cream/40 text-center">
          © 2026 Kremlin Bites. {t("Все права защищены.", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
