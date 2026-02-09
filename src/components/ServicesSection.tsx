import { UtensilsCrossed, Users, Calendar, Truck, ChefHat, Award } from "lucide-react";
import { FloatingLeaf2, DecorativeCircle } from "@/components/FloatingElements";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our exquisite wedding menus tailored to your taste.",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Impress your clients and colleagues with professional catering for meetings and conferences.",
  },
  {
    icon: Calendar,
    title: "Private Parties",
    description: "From birthdays to anniversaries, we bring restaurant-quality dining to your home.",
  },
  {
    icon: Truck,
    title: "Outdoor Catering",
    description: "Garden parties, picnics, and outdoor celebrations with seamless on-site service.",
  },
  {
    icon: ChefHat,
    title: "Live Cooking Stations",
    description: "Interactive dining experience with our chefs preparing fresh dishes before your guests.",
  },
  {
    icon: Award,
    title: "Premium Packages",
    description: "All-inclusive luxury packages with decor, service staff, and complete event management.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-muted overflow-hidden">
      {/* Decorative Elements */}
      <DecorativeCircle className="w-80 h-80 -top-40 -right-40 opacity-30" />
      <DecorativeCircle className="w-48 h-48 bottom-20 -left-20 opacity-20" />
      <FloatingLeaf2 className="top-20 right-20 opacity-40" />
      <FloatingLeaf2 className="bottom-40 left-10 opacity-30 animation-delay-1000" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-elegant text-xl text-primary italic">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Our Premium <span className="text-gradient-warm">Services</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            From intimate gatherings to grand celebrations, we deliver exceptional
            culinary experiences that delight your guests.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-cta flex items-center justify-center shadow-warm mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-warm rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
