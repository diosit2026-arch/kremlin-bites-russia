import { useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { label: t("Главная", "Home"), href: "#home" },
    { label: t("Продукты", "Products"), href: "#products" },
    { label: t("Склады", "Warehouse"), href: "#warehouse" },
    { label: t("О нас", "About"), href: "#about" },
    { label: t("Контакты", "Contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kremlin-dark/95 backdrop-blur-md border-b border-kremlin-gold/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Kremlin Bites" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-kremlin-gold-light hover:text-kremlin-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+79800892952"
            className="flex items-center gap-2 text-kremlin-gold text-sm font-body"
          >
            <Phone className="w-4 h-4" />
            +7 980 089 29 52
          </a>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-kremlin-gold/40 rounded text-kremlin-gold text-xs font-body uppercase tracking-wider hover:bg-kremlin-gold/10 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "ru" ? "EN" : "RU"}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-kremlin-gold"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-kremlin-dark/98 border-t border-kremlin-gold/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-sm tracking-widest uppercase text-kremlin-gold-light hover:text-kremlin-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+79800892952"
            className="flex items-center gap-2 py-3 text-kremlin-gold text-sm font-body"
          >
            <Phone className="w-4 h-4" />
            +7 980 089 29 52
          </a>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 mt-2 px-3 py-1.5 border border-kremlin-gold/40 rounded text-kremlin-gold text-xs font-body uppercase tracking-wider"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "ru" ? "EN" : "RU"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
