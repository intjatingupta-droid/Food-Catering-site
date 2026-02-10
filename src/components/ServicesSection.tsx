import { motion } from "framer-motion";
import { useState } from "react";
import { UtensilsCrossed, Users, Calendar, Truck, ChefHat, Award, ArrowRight, Sparkles } from "lucide-react";

// Import food images
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishPaneerTikka from "@/assets/dish-paneer-tikka.jpg";

// Import PNG elements
import bellPepperPng from "@/assets/sliced-green-bell-pepper-vegetable-on-transparent-background-free-png.png";
import carrotPng from "@/assets/pngtree-single-fresh-orange-carrot-vegetable-png-image_14022325-removebg-preview.png";
import veggiePng from "@/assets/image-removebg-preview.png";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our exquisite wedding menus tailored to your taste.",
    image: dishButterChicken,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Impress your clients and colleagues with professional catering for meetings and conferences.",
    image: dishBiryani,
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Calendar,
    title: "Private Parties",
    description: "From birthdays to anniversaries, we bring restaurant-quality dining to your home.",
    image: dishPaneerTikka,
    color: "from-orange-600 to-red-600",
  },
  {
    icon: Truck,
    title: "Outdoor Catering",
    description: "Garden parties, picnics, and outdoor celebrations with seamless on-site service.",
    image: dishButterChicken,
    color: "from-red-400 to-orange-400",
  },
  {
    icon: ChefHat,
    title: "Live Cooking Stations",
    description: "Interactive dining experience with our chefs preparing fresh dishes before your guests.",
    image: dishBiryani,
    color: "from-orange-500 to-red-400",
  },
  {
    icon: Award,
    title: "Premium Packages",
    description: "All-inclusive luxury packages with decor, service staff, and complete event management.",
    image: dishPaneerTikka,
    color: "from-red-500 to-orange-600",
  },
];

const DecorativeCircle = ({ className }) => (
  <motion.div
    className={`absolute rounded-full border-2 border-orange-200/20 ${className}`}
    animate={{ 
      rotate: 360,
      scale: [1, 1.2, 1]
    }}
    transition={{ 
      rotate: { duration: 25, repeat: Infinity, ease: "linear" },
      scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }}
  />
);

const FloatingVeggie = ({ src, className, delay = 0 }) => (
  <motion.div
    className={`absolute ${className} pointer-events-none z-0`}
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{ 
      opacity: [0, 0.25, 0.25, 0],
      y: [0, -40, -80, -120],
      x: [0, 15, -15, 0],
      rotate: [0, 180, 360, 540],
      scale: [0, 1.2, 1, 0.6]
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    <img src={src} alt="" className="w-full h-full object-contain drop-shadow-2xl" />
  </motion.div>
);

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative min-h-screen py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/30 overflow-hidden">
      
      {/* Decorative Elements */}
      <DecorativeCircle className="w-96 h-96 -top-48 -right-48 opacity-40" />
      <DecorativeCircle className="w-64 h-64 bottom-20 -left-32 opacity-30" />
      <DecorativeCircle className="w-48 h-48 top-1/2 right-1/4 opacity-20" />

      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Floating Vegetables */}
      <FloatingVeggie src={bellPepperPng} className="top-[18%] right-[12%] w-16 h-16 md:w-20 md:h-20" delay={0} />
      <FloatingVeggie src={carrotPng} className="top-[50%] left-[10%] w-14 h-14 md:w-18 md:h-18" delay={3} />
      <FloatingVeggie src={veggiePng} className="bottom-[30%] left-[28%] w-12 h-12 md:w-16 md:h-16" delay={6} />
      <FloatingVeggie src={bellPepperPng} className="top-[70%] right-[8%] w-10 h-10 md:w-14 md:h-14" delay={2} />
      <FloatingVeggie src={carrotPng} className="top-[35%] right-[25%] w-12 h-12 md:w-16 md:h-16" delay={5} />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 italic">
              What We Offer
            </span>
            <Sparkles className="w-5 h-5 text-red-500" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 relative">
              Services
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            From intimate gatherings to grand celebrations, we deliver exceptional
            culinary experiences that delight your guests and create lasting memories.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* HOVERING FOOD IMAGE - Key Fix! */}
                  <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ 
                      opacity: isHovered ? 0.25 : 0,
                      scale: isHovered ? 1 : 1.2
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-30`} />
                  </motion.div>

                  {/* Gradient Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-5`}
                  />
                  
                  {/* Content */}
                  <div className="relative z-20 p-8 h-full flex flex-col backdrop-blur-[2px]">
                    
                    {/* Icon with Enhanced Animation */}
                    <motion.div
                      className="mb-6 relative"
                      animate={{
                        y: isHovered ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl relative overflow-hidden`}
                        animate={{
                          rotate: isHovered ? [0, -5, 5, 0] : 0,
                          boxShadow: isHovered 
                            ? "0 20px 40px rgba(249, 115, 22, 0.4)"
                            : "0 10px 25px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                          initial={{ x: "-200%" }}
                          animate={{
                            x: isHovered ? "200%" : "-200%"
                          }}
                          transition={{ duration: 0.8 }}
                        />
                        <Icon className="w-10 h-10 text-white relative z-10" strokeWidth={2} />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Animated Bottom Bar with Arrow */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 group-hover:border-orange-200 transition-colors">
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${service.color} rounded-full shadow-lg`}
                        initial={{ width: "45%" }}
                        animate={{ width: isHovered ? "75%" : "45%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                      
                      <motion.div
                        animate={{ 
                          x: isHovered ? 8 : 0,
                          scale: isHovered ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                          <ArrowRight className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700`}
                  />
                  <motion.div
                    className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr ${service.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;