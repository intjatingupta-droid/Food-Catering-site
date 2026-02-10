import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { DecorativeRing } from "@/components/FloatingElements";

// Import PNG elements
import tomatoPng from "@/assets/vibrant-tomato-slices-with-juicy-red-interior-hovering-in-the-air-png.png";
import bellPepperPng from "@/assets/sliced-green-bell-pepper-vegetable-on-transparent-background-free-png.png";
import carrotPng from "@/assets/pngtree-single-fresh-orange-carrot-vegetable-png-image_14022325-removebg-preview.png";
import veggiePng from "@/assets/image-removebg-preview.png";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-muted overflow-hidden">
      <DecorativeRing className="w-80 h-80 -top-40 -right-40" />

      {/* Floating PNG Elements - spread across entire page */}
      <motion.div
        className="absolute top-[8%] right-[8%] w-14 h-14 md:w-18 md:h-18 z-5 opacity-15"
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, 20, -20, 0]
        }}
        transition={{ duration: 6.5, repeat: Infinity }}
      >
        <img src={tomatoPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute top-[25%] left-[5%] w-12 h-12 md:w-16 md:h-16 z-5 opacity-18"
        animate={{ 
          y: [0, 16, 0],
          rotate: [0, -18, 18, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        <img src={bellPepperPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute bottom-[8%] right-[5%] w-16 h-16 md:w-20 md:h-20 z-5 opacity-16"
        animate={{ 
          y: [0, -22, 0],
          rotate: [0, 25, -25, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
      >
        <img src={carrotPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-elegant text-xl text-primary italic">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Let's Create Your <span className="text-gradient-warm">Perfect Event</span>
            </h2>
            
            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              Ready to elevate your next event with extraordinary cuisine? 
              Contact us today for a personalized consultation and quote.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, label: "Email Us", value: "hello@spicehaven.com", href: "mailto:hello@spicehaven.com" },
                { icon: MapPin, label: "Visit Us", value: "123 Culinary Street, Food District, Delhi 110001", href: "#" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shadow-warm flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Request a Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Event Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Request
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
