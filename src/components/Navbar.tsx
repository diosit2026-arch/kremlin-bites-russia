import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Warehouse", href: "#warehouse" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

        <a
          href="tel:+79800892952"
          className="hidden md:flex items-center gap-2 text-kremlin-gold text-sm font-body"
        >
          <Phone className="w-4 h-4" />
          +7 980 089 29 52
        </a>

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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
