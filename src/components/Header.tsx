import { Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-4 text-primary-foreground text-sm font-body">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+919876543211" className="hidden md:flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43211</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Icon className="w-4 h-4 text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center shadow-warm">
              <span className="text-primary-foreground font-display text-xl font-bold">S</span>
            </div>
            <div>
              <h1 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Spice<span className="text-primary">Haven</span>
              </h1>
              <p className="text-xs text-muted-foreground font-elegant tracking-wider">Premium Catering</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-body font-medium transition-colors relative group ${
                  link.active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  link.active ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-foreground transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in-up">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-body font-medium py-2 ${
                    link.active ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
