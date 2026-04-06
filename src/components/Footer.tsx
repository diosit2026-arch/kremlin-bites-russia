import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="bg-kremlin-dark-gradient py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="Kremlin Bites" className="h-16 mb-4" />
          <p className="font-body text-kremlin-cream/60 text-sm leading-relaxed">
            Authentic Russian foods & beverages. Proudly serving customers for over 25 years with the finest
            traditional recipes.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-kremlin-gold mb-4">Quick Links</h3>
          <div className="space-y-2">
            {["Home", "Products", "Warehouse", "About"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block font-body text-sm text-kremlin-cream/60 hover:text-kremlin-gold transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-kremlin-gold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-kremlin-gold shrink-0 mt-0.5" />
              <p className="font-body text-sm text-kremlin-cream/60">
                Natashi Kovshovoy St, 2,<br />Moscow, Russia, 119361
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
        © 2026 Kremlin Bites. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
