import { Star, Quote } from "lucide-react";
import { FloatingLeaf2, DecorativeCircle } from "@/components/FloatingElements";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    content: "SpiceHaven made our wedding absolutely magical! The food was exquisite, and our guests are still talking about the paneer tikka. Truly exceptional service.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    role: "Corporate Client",
    content: "We've used SpiceHaven for all our corporate events. Their professionalism and the quality of food is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anita Patel",
    role: "Birthday Celebration",
    content: "The live cooking station was a huge hit at my 50th birthday! The chefs were entertaining and the biryani was the best I've ever had.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-foreground overflow-hidden">
      {/* Decorative Elements */}
      <DecorativeCircle className="w-96 h-96 -top-48 -left-48 opacity-10" />
      <DecorativeCircle className="w-64 h-64 bottom-0 right-0 opacity-10" />
      <FloatingLeaf2 className="top-32 right-20 opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-elegant text-xl text-primary italic">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mt-2">
            What Our <span className="text-gradient-warm">Clients Say</span>
          </h2>
          <p className="font-body text-card/70 mt-4 text-lg">
            Don't just take our word for it – hear from the families and businesses
            we've had the pleasure to serve.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant relative overflow-hidden animate-fade-in-up group hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
