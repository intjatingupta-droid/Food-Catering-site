import { Facebook, Instagram, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Wedding Catering",
    "Corporate Events",
    "Private Parties",
    "Outdoor Catering",
    "Live Cooking",
    "Premium Packages",
  ];

  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center shadow-warm">
                <span className="text-primary-foreground font-display text-xl font-bold">S</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-card">
                  Spice<span className="text-primary">Haven</span>
                </h3>
                <p className="text-xs text-card/60 font-elegant">Premium Catering</p>
              </div>
            </div>
            <p className="font-body text-card/70 leading-relaxed mb-6">
              Crafting unforgettable culinary experiences for over 15 years. 
              Your trusted partner for exceptional catering.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Icon className="w-5 h-5 text-card/70 group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-card mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-card/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold text-card mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-body text-card/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold text-card mb-6">Contact Info</h4>
            <div className="space-y-4 font-body text-card/70">
              <p>
                123 Culinary Street,<br />
                Food District, Delhi 110001
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:hello@spicehaven.com" className="hover:text-primary transition-colors">
                  hello@spicehaven.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-card/60">
              © {currentYear} SpiceHaven. All rights reserved.
            </p>
            <p className="font-body text-sm text-card/60 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
