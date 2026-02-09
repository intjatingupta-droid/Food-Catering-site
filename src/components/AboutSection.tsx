import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FloatingLeaf1, FloatingOrange, DecorativeRing } from "@/components/FloatingElements";

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
    <section id="about" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Decorative Elements */}
      <FloatingLeaf1 className="top-20 left-10 opacity-40" />
      <FloatingOrange className="bottom-20 right-20 opacity-30" />
      <DecorativeRing className="w-64 h-64 -bottom-32 -left-32 opacity-20" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-4 border-primary/20 rounded-3xl" />
              
              {/* Image placeholder with gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-cta flex items-center justify-center shadow-warm mb-6">
                    <span className="font-display text-5xl font-bold text-primary-foreground">15+</span>
                  </div>
                  <p className="font-display text-2xl text-foreground">Years of Excellence</p>
                  <p className="font-body text-muted-foreground mt-2">Serving happiness on every plate</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant p-6 animate-float">
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-primary">5000+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <span className="font-elegant text-xl text-primary italic">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              A Legacy of <span className="text-gradient-warm">Culinary Excellence</span>
            </h2>
            
            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              For over 15 years, SpiceHaven has been the premier choice for discerning 
              hosts who demand nothing but the best. Our team of award-winning chefs 
              crafts authentic dishes that celebrate rich flavors and traditions.
            </p>
            
            <p className="font-body text-muted-foreground mt-4 text-lg leading-relaxed">
              We believe every event deserves extraordinary cuisine. From intimate dinners 
              to lavish weddings, our commitment to quality and service excellence has 
              made us the trusted partner for life's most memorable moments.
            </p>

            {/* Features List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
