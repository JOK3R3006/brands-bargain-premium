import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary/80">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-secondary">Brands</span>
              <span className="font-display text-2xl font-light text-gold-light">Bargain</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your destination for premium branded products at unbeatable prices. 
              Quality you trust, prices you love.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/911725057777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-secondary">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Offers & Deals", path: "/offers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-secondary">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:01725057777" className="flex items-start gap-3 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                0172-5057777
              </a>
              <a
                href="https://maps.google.com/?q=MVQ2+JV+Panchkula"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                SCO 8, Sector 11, Panchkula, Haryana 134112
              </a>
              <a href="mailto:info@brandsbargain.in" className="flex items-start gap-3 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                info@brandsbargain.in
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-secondary">Store Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon – Sat: 10:00 AM – 9:00 PM</p>
                  <p>Sunday: 11:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary/50">
          <p>© {new Date().getFullYear()} Brands Bargain. All rights reserved.</p>
          <p>SCO 8, Sector 11, Panchkula, Haryana 134112</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
