import heroImage from "@/assets/hero-catering.jpg";
import { Button } from "@/components/ui/button";
import {
  FloatingLeaf1,
  FloatingLeaf2,
  FloatingChili,
  FloatingOrange,
  DecorativeCircle,
  SpiceDots,
} from "@/components/FloatingElements";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious Indian cuisine spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Floating Decorative Elements */}
      <FloatingLeaf1 className="top-20 left-10 opacity-80" />
      <FloatingLeaf2 className="top-40 right-20 opacity-70 animation-delay-400" />
      <FloatingChili className="bottom-32 left-20 opacity-60 animation-delay-1000" />
      <FloatingOrange className="top-32 right-40 opacity-50 animation-delay-600" />
      <FloatingLeaf1 className="bottom-20 right-10 opacity-60 animation-delay-1500" />
      
      <DecorativeCircle className="w-64 h-64 -top-20 -left-20" />
      <DecorativeCircle className="w-32 h-32 bottom-40 right-1/4 animation-delay-1000" />
      
      <SpiceDots className="top-1/3 left-1/4" />
      <SpiceDots className="bottom-1/4 right-1/3 animation-delay-600" />

      {/* Content */}
      <div className="relative container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-2xl py-20">
          {/* Tagline */}
          <div className="animate-fade-in-up">
            <span className="inline-block font-elegant text-xl md:text-2xl text-primary italic mb-4">
              Serving Flavor & Passion
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-up animation-delay-200">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight">
              Exquisite Catering
              <br />
              <span className="text-gradient-warm">For Every Occasion</span>
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up animation-delay-400 mt-6 text-lg md:text-xl text-card/80 font-body leading-relaxed max-w-xl">
            Let our passionate chefs transform your gatherings with authentic,
            delicious meals that leave a lasting impression. From intimate dinners
            to grand celebrations.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              Get Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-card/30 text-card hover:bg-card/10 hover:text-card">
              <Play className="w-5 h-5" />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-1000 mt-16 flex flex-wrap gap-8 md:gap-12">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "5000+", label: "Events Catered" },
              { number: "50+", label: "Expert Chefs" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-card/70 font-body mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Circle Frame - Hidden on mobile */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-96 h-96 rounded-full border-8 border-primary/30 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border-4 border-accent/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
