"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// Custom classnames joiner helper to work cleanly without external dependencies
function cn(...classes: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return classes
    .flatMap((c) => {
      if (!c) return [];
      if (typeof c === "string") return [c];
      if (typeof c === "object") {
        return Object.entries(c)
          .filter(([_, value]) => !!value)
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}

// --- TYPE DEFINITIONS ---
export interface Testimonial {
  imgSrc: string;
  alt: string;
  name: string;
  role: string;
  category: "Web Development" | "App Development" | "SEO Services";
  review: string;
}

interface AnimatedTestimonialGridProps {
  testimonials: Testimonial[];
  badgeText?: string;
  className?: string;
}

// --- PRE-DEFINED POSITIONS FOR THE IMAGES ---
const imagePositions = [
  // Desktop and Tablet positions (around the central card)
  { top: "6%", left: "6%", className: "hidden lg:block w-24 h-24" },
  { top: "16%", left: "28%", className: "hidden md:block w-20 h-20" },
  { top: "5%", left: "50%", className: "hidden md:block w-16 h-16" },
  { top: "8%", right: "10%", className: "hidden lg:block w-28 h-28" },
  { top: "26%", right: "3%", className: "hidden md:block w-20 h-20" },
  { top: "48%", right: "7%", className: "hidden lg:block w-24 h-24" },
  { top: "52%", left: "3%", className: "hidden md:block w-28 h-28" },
  { bottom: "6%", left: "14%", className: "hidden lg:block w-20 h-20" },
  { bottom: "14%", left: "40%", className: "hidden md:block w-16 h-16" },
  { bottom: "12%", right: "26%", className: "hidden md:block w-24 h-24" },
  { bottom: "4%", right: "10%", className: "hidden lg:block w-20 h-20" },
  // Mobile-specific positions (simpler layouts near the edges)
  { top: "10%", left: "3%", className: "block md:hidden w-14 h-14" },
  { top: "4%", right: "4%", className: "block md:hidden w-16 h-16" },
  { bottom: "4%", left: "4%", className: "block md:hidden w-16 h-16" },
  { bottom: "10%", right: "3%", className: "block md:hidden w-14 h-14" },
];

// --- ANIMATION LOGIC ---
const imageVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 22,
    },
  },
};

const floatingAnimation = (seed: number) => ({
  y: [0, (seed % 2 === 0 ? 1 : -1) * (Math.random() * 8 + 4), 0],
  transition: {
    duration: Math.random() * 3 + 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  },
});

// --- COMPONENT ---
export const AnimatedTestimonialGrid = ({
  testimonials,
  badgeText = "Client Testimonials",
  className,
}: AnimatedTestimonialGridProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const cycleIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle testimonials every 5 seconds, paused on hover
  React.useEffect(() => {
    if (isPaused) return;

    cycleIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => {
      if (cycleIntervalRef.current) {
        clearInterval(cycleIntervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      className={cn(
        "relative w-full max-w-7xl mx-auto py-24 sm:py-32 px-4 overflow-hidden min-h-[640px] flex items-center justify-center select-none",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background radial soft light */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Absolutely Positioned Interactive Avatars */}
      {testimonials.slice(0, imagePositions.length).map((testimonial, index) => {
        const isActive = index === activeIndex;
        const position = imagePositions[index % imagePositions.length];

        return (
          <motion.div
            key={index}
            className={cn(
              "absolute rounded-2xl shadow-md cursor-pointer overflow-hidden border-[2.5px] transition-all duration-300 ease-out",
              position.className
            )}
            style={{
              top: position.top,
              left: position.left,
              right: position.right,
              bottom: position.bottom,
              borderColor: isActive ? "var(--accent-blue, #2f65f6)" : "transparent",
              boxShadow: isActive ? "0 12px 30px rgba(47, 101, 246, 0.22)" : "0 4px 15px rgba(0, 0, 0, 0.05)",
              transform: isActive ? "scale(1.15)" : "scale(1)",
              zIndex: isActive ? 30 : 10,
            }}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, zIndex: 40 }}
            onClick={() => setActiveIndex(index)}
          >
            <motion.img
              src={testimonial.imgSrc}
              alt={testimonial.alt}
              className="w-full h-full object-cover"
              animate={isActive ? { y: 0 } : floatingAnimation(index)}
            />
            {/* Darkening overlay when inactive to pop the active one */}
            <div
              className={cn(
                "absolute inset-0 bg-slate-900/10 transition-opacity duration-300 pointer-events-none",
                isActive ? "opacity-0" : "opacity-15 hover:opacity-0"
              )}
            />
          </motion.div>
        );
      })}

      {/* Central Content Card */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl bg-white/80 backdrop-blur-md border border-slate-100/80 rounded-3xl p-6 sm:p-12 shadow-xl shadow-slate-200/40 mx-4">
        {badgeText && (
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-[11px] font-bold text-blue-600 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {badgeText}
          </div>
        )}

        {/* Dynamic Client Testimonial Text Container */}
        <div className="min-h-[220px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Category Badge */}
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 block">
                {activeTestimonial.category}
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed mb-6 italic px-2 sm:px-6">
                &ldquo;{activeTestimonial.review}&rdquo;
              </blockquote>

              {/* Client Info */}
              <cite className="not-italic">
                <h4 className="text-base font-bold text-slate-900">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {activeTestimonial.role}
                </p>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Dot Navigation Indicators */}
        <div className="flex gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-blue-600 w-6" : "bg-slate-200 hover:bg-slate-300"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
