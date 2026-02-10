import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Quote, Sparkles, Heart } from "lucide-react";

// Import PNG elements
import tomatoPng from "@/assets/vibrant-tomato-slices-with-juicy-red-interior-hovering-in-the-air-png.png";
import carrotPng from "@/assets/pngtree-single-fresh-orange-carrot-vegetable-png-image_14022325-removebg-preview.png";
import bellPepperPng from "@/assets/sliced-green-bell-pepper-vegetable-on-transparent-background-free-png.png";
import veggiePng from "@/assets/image-removebg-preview.png";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    content: "SpiceHaven made our wedding absolutely magical! The food was exquisite, and our guests are still talking about the paneer tikka. Truly exceptional service.",
    rating: 5,
    color: "from-orange-500 to-red-500",
    avatar: "PS"
  },
  {
    name: "Rajesh Gupta",
    role: "Corporate Client",
    content: "We've used SpiceHaven for all our corporate events. Their professionalism and the quality of food is unmatched. Highly recommended!",
    rating: 5,
    color: "from-red-500 to-orange-500",
    avatar: "RG"
  },
  {
    name: "Anita Patel",
    role: "Birthday Celebration",
    content: "The live cooking station was a huge hit at my 50th birthday! The chefs were entertaining and the biryani was the best I've ever had.",
    rating: 5,
    color: "from-orange-600 to-red-600",
    avatar: "AP"
  },
];

const DecorativeCircle = ({ className }) => (
  <motion.div
    className={`absolute rounded-full border-2 border-orange-200/30 ${className}`}
    animate={{ 
      rotate: 360,
      scale: [1, 1.15, 1]
    }}
    transition={{ 
      rotate: { duration: 30, repeat: Infinity, ease: "linear" },
      scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
    }}
  />
);

const FloatingVeggie = ({ src, className, delay = 0 }) => (
  <motion.div
    className={`absolute ${className} pointer-events-none`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.2, 0.2, 0],
      y: [0, -35, -70, -110],
      rotate: [0, 200, 400],
      scale: [0, 1.1, 1, 0.7]
    }}
    transition={{ 
      duration: 9, 
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    <img src={src} alt="" className="w-full h-full object-contain drop-shadow-2xl" />
  </motion.div>
);

const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="testimonials" className="relative min-h-screen py-24 lg:py-32 bg-gradient-to-br from-white via-orange-50/40 to-red-50/40 overflow-hidden">
      
      {/* Decorative Circles */}
      <DecorativeCircle className="w-[500px] h-[500px] -top-64 -left-64 opacity-40" />
      <DecorativeCircle className="w-80 h-80 -bottom-40 -right-40 opacity-30" />
      <DecorativeCircle className="w-60 h-60 top-1/3 right-1/4 opacity-20" />

      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-300/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Floating Vegetables */}
      <FloatingVeggie src={tomatoPng} className="top-[15%] right-[10%] w-14 h-14 md:w-18 md:h-18" delay={0} />
      <FloatingVeggie src={carrotPng} className="bottom-[25%] left-[15%] w-16 h-16 md:w-20 md:h-20" delay={4} />
      <FloatingVeggie src={tomatoPng} className="top-[60%] right-[8%] w-12 h-12 md:w-16 md:h-16" delay={7} />
      <FloatingVeggie src={carrotPng} className="top-[40%] left-[8%] w-10 h-10 md:w-14 md:h-14" delay={2} />

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
            <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 italic">
              Testimonials
            </span>
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 relative">
              Clients Say
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
            Don't just take our word for it – hear from the families and businesses
            we've had the pleasure to serve.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
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
                  className="relative h-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 overflow-hidden"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient Glow on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Quote Icon Background */}
                  <motion.div
                    className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    animate={{
                      rotate: isHovered ? 15 : 0,
                      scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Quote className="w-32 h-32 text-orange-400" strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    
                    {/* Stars with Animation */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.15 + i * 0.08,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.3, 
                            rotate: 360,
                            transition: { duration: 0.4 }
                          }}
                        >
                          <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <motion.p 
                      className="text-gray-700 leading-relaxed mb-8 text-base relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <span className="text-orange-500 text-2xl font-serif absolute -left-2 -top-1">"</span>
                      <span className="ml-4">{testimonial.content}</span>
                      <span className="text-orange-500 text-2xl font-serif">"</span>
                    </motion.p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                        animate={{
                          boxShadow: isHovered 
                            ? "0 0 30px rgba(249, 115, 22, 0.5)"
                            : "0 10px 20px rgba(0, 0, 0, 0.1)"
                        }}
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                          initial={{ x: "-200%" }}
                          animate={{
                            x: isHovered ? "200%" : "-200%"
                          }}
                          transition={{ duration: 0.8 }}
                        />
                        <span className="text-xl font-bold text-white relative z-10">
                          {testimonial.avatar}
                        </span>
                      </motion.div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Corner Glow Effects */}
                  <motion.div
                    className={`absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr ${testimonial.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700`}
                  />
                  <motion.div
                    className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-bl ${testimonial.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <p className="text-gray-700 font-medium">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-bold">5000+</span> satisfied clients
            </p>
            <Sparkles className="w-5 h-5 text-red-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;