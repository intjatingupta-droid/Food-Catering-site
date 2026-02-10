import { Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Main Navigation */}
      <nav className="bg-card/95 backdrop-blur-sm shadow-card">
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-warm origin-left z-50"
          style={{ scaleX }}
        />
        
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
