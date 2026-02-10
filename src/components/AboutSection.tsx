import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { DecorativeRing } from "@/components/FloatingElements";

// Import food images
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishPaneerTikka from "@/assets/dish-paneer-tikka.jpg";

// Import PNG elements
import tomatoPng from "@/assets/vibrant-tomato-slices-with-juicy-red-interior-hovering-in-the-air-png.png";
import bellPepperPng from "@/assets/sliced-green-bell-pepper-vegetable-on-transparent-background-free-png.png";
import carrotPng from "@/assets/pngtree-single-fresh-orange-carrot-vegetable-png-image_14022325-removebg-preview.png";
import veggiePng from "@/assets/image-removebg-preview.png";

const features = [
  "Fresh, locally-sourced ingredients",
  "Customizable menu options",
  "Professional service staff",
  "On-time delivery guaranteed",
  "Dietary accommodations available",
  "Elegant presentation & plating",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-32 bg-background overflow-hidden">
      <DecorativeRing className="w-64 h-64 -bottom-32 -left-32" />

      {/* Floating PNG Elements - hidden on mobile */}
      <motion.div
        className="hidden md:block absolute top-[10%] right-[8%] w-16 h-16 md:w-20 md:h-20 z-5 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <img src={tomatoPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-[35%] left-[10%] w-14 h-14 md:w-18 md:h-18 z-10 opacity-15"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -20, 20, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        <img src={carrotPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-[60%] right-[12%] w-12 h-12 md:w-16 md:h-16 z-15 opacity-25"
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, 25, -25, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      >
        <img src={bellPepperPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-[20%] left-[25%] w-10 h-10 md:w-14 md:h-14 z-8 opacity-18"
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      >
        <img src={veggiePng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-[20%] left-[5%] w-14 h-14 md:w-18 md:h-18 z-12 opacity-20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 18, -18, 0]
        }}
        transition={{ duration: 6.5, repeat: Infinity, delay: 1.5 }}
      >
        <img src={tomatoPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image Side with Food Boxes */}
          <motion.div
            className="relative min-h-[300px] md:min-h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Stats Box with Background Image */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-orange-50 to-red-50 p-8 md:p-12">
              {/* Background Image with Low Opacity */}
              <div 
                className="absolute inset-0 opacity-10 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundImage: `url(${dishButterChicken})` }}
              />
              
              <div className="relative z-10 text-center">
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-cta flex items-center justify-center shadow-warm mb-4 md:mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">15+</span>
                </motion.div>
                <p className="font-display text-xl md:text-2xl text-foreground">Years of Excellence</p>
                <p className="font-body text-sm md:text-base text-muted-foreground mt-2">Serving happiness on every plate</p>
              </div>
            </div>

            {/* Floating Food Image Boxes with Hover Effects - hidden on small mobile */}
            <motion.div
              className="hidden sm:block absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-36 h-36 md:w-48 md:h-48 rounded-xl md:rounded-2xl overflow-hidden shadow-elegant group cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <div className="relative w-full h-full">
                <img 
                  src={dishBiryani} 
                  alt="Biryani" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-card/80 group-hover:bg-card/0 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center group-hover:opacity-0 transition-opacity duration-300">
                    <span className="font-display text-2xl md:text-3xl font-bold text-primary block">5000+</span>
                    <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Floating Box - hidden on small mobile */}
            <motion.div
              className="hidden sm:block absolute -top-4 md:-top-6 -left-4 md:-left-6 w-32 h-32 md:w-40 md:h-40 rounded-xl md:rounded-2xl overflow-hidden shadow-elegant group cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              whileHover={{ scale: 1.05, rotate: -3 }}
            >
              <div className="relative w-full h-full">
                <img 
                  src={dishPaneerTikka} 
                  alt="Paneer Tikka" 
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-card/80 group-hover:bg-card/0 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center group-hover:opacity-0 transition-opacity duration-300">
                    <span className="font-display text-xl md:text-2xl font-bold text-primary block">4.9★</span>
                    <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-1">Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-elegant text-lg md:text-xl text-primary italic">About Us</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              A Legacy of <span className="text-gradient-warm">Culinary Excellence</span>
            </h2>
            
            <p className="font-body text-muted-foreground mt-4 md:mt-6 text-base md:text-lg leading-relaxed">
              For over 15 years, SpiceHaven has been the premier choice for discerning 
              hosts who demand nothing but the best. Our team of award-winning chefs 
              crafts authentic dishes that celebrate rich flavors and traditions.
            </p>
            
            <p className="font-body text-muted-foreground mt-3 md:mt-4 text-base md:text-lg leading-relaxed">
              We believe every event deserves extraordinary cuisine. From intimate dinners 
              to lavish weddings, our commitment to quality and service excellence has 
              made us the trusted partner for life's most memorable moments.
            </p>

            {/* Features List */}
            <motion.div
              className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 group cursor-pointer"
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <motion.div 
                    className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </motion.div>
                  <span className="font-body text-sm md:text-base text-foreground group-hover:text-primary transition-colors">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
