import { motion } from "framer-motion";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishPaneerTikka from "@/assets/dish-paneer-tikka.jpg";

// Import PNG elements
import tomatoPng from "@/assets/vibrant-tomato-slices-with-juicy-red-interior-hovering-in-the-air-png.png";
import bellPepperPng from "@/assets/sliced-green-bell-pepper-vegetable-on-transparent-background-free-png.png";
import veggiePng from "@/assets/image-removebg-preview.png";

const dishes = [
  {
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato cream sauce",
    price: "₹599",
    image: dishButterChicken,
    popular: true,
  },
  {
    name: "Biryani",
    description: "Aromatic basmati rice with spices",
    price: "₹499",
    image: dishBiryani,
    popular: true,
  },
  {
    name: "Paneer Tikka",
    description: "Grilled cottage cheese with herbs",
    price: "₹449",
    image: dishPaneerTikka,
    popular: false,
  },
];

// Container variants with orchestration
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

// Card variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring" as const,
      stiffness: 300,
    },
  },
};

// Image variants
const imageVariants = {
  hidden: {
    scale: 1.3,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
    },
  },
};

// Text variants
const textVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Badge variants
const badgeVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
  },
};

const FeaturedDishes = () => {
  return (
    <section id="menu" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Floating PNG Elements - spread across entire page */}
      <motion.div
        className="absolute top-[18%] right-[10%] w-14 h-14 md:w-18 md:h-18 z-50 opacity-16"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 22, -22, 0]
        }}
        transition={{ duration: 7.5, repeat: Infinity }}
      >
        <img src={tomatoPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute top-[50%] left-[15%] w-12 h-12 md:w-16 md:h-16 z-55 opacity-20"
        animate={{ 
          y: [0, 18, 0],
          rotate: [0, -20, 20, 0]
        }}
        transition={{ duration: 6.5, repeat: Infinity, delay: 1.2 }}
      >
        <img src={bellPepperPng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[35%] w-10 h-10 md:w-14 md:h-14 z-52 opacity-18"
        animate={{ 
          y: [0, -16, 0],
          rotate: [0, 18, -18, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      >
        <img src={veggiePng} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-elegant text-xl text-primary italic">Our Menu</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Featured <span className="text-gradient-warm">Dishes</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Discover our most popular dishes, crafted with authentic spices and fresh ingredients
          </p>
        </motion.div>

        {/* Dishes Grid with Variant Orchestration */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-card rounded-3xl overflow-hidden shadow-elegant group"
            >
              {/* Image Container */}
              <motion.div 
                className="relative h-64 overflow-hidden"
                variants={imageVariants}
              >
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Popular Badge */}
                {dish.popular && (
                  <motion.div
                    variants={badgeVariants}
                    className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-body text-sm font-bold shadow-warm"
                  >
                    Popular
                  </motion.div>
                )}
              </motion.div>

              {/* Content */}
              <motion.div 
                className="p-6"
                variants={textVariants}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-primary">
                    {dish.price}
                  </span>
                  <motion.button
                    className="px-6 py-2 bg-gradient-cta text-primary-foreground rounded-full font-body font-medium shadow-warm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
