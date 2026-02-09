import leaf1 from "@/assets/leaf-1.png";
import leaf2 from "@/assets/leaf-2.png";
import chili from "@/assets/chili.png";
import orangeSlice from "@/assets/orange-slice.png";

interface FloatingElementProps {
  className?: string;
}

export const FloatingLeaf1 = ({ className = "" }: FloatingElementProps) => (
  <img
    src={leaf1}
    alt=""
    className={`absolute w-16 h-16 object-contain pointer-events-none animate-float ${className}`}
    aria-hidden="true"
  />
);

export const FloatingLeaf2 = ({ className = "" }: FloatingElementProps) => (
  <img
    src={leaf2}
    alt=""
    className={`absolute w-12 h-12 object-contain pointer-events-none animate-float-reverse ${className}`}
    aria-hidden="true"
  />
);

export const FloatingChili = ({ className = "" }: FloatingElementProps) => (
  <img
    src={chili}
    alt=""
    className={`absolute w-20 h-20 object-contain pointer-events-none animate-float-slow ${className}`}
    aria-hidden="true"
  />
);

export const FloatingOrange = ({ className = "" }: FloatingElementProps) => (
  <img
    src={orangeSlice}
    alt=""
    className={`absolute w-24 h-24 object-contain pointer-events-none animate-spin-slow ${className}`}
    aria-hidden="true"
  />
);

// Decorative shapes
export const DecorativeCircle = ({ className = "" }: FloatingElementProps) => (
  <div
    className={`absolute rounded-full bg-primary/10 animate-pulse-glow ${className}`}
    aria-hidden="true"
  />
);

export const DecorativeRing = ({ className = "" }: FloatingElementProps) => (
  <div
    className={`absolute rounded-full border-4 border-primary/20 animate-spin-slow ${className}`}
    aria-hidden="true"
  />
);

// Spice dots decoration
export const SpiceDots = ({ className = "" }: FloatingElementProps) => (
  <div className={`absolute flex gap-2 ${className}`} aria-hidden="true">
    <div className="w-2 h-2 rounded-full bg-primary animate-bounce-subtle" />
    <div className="w-2 h-2 rounded-full bg-accent animate-bounce-subtle animation-delay-200" />
    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce-subtle animation-delay-400" />
  </div>
);
