"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  category: "Web Development" | "App Development" | "SEO Services";
  quote: string;
  avatar: string;
  rating: number;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Founder & CEO",
    company: "BharatTech Ventures",
    category: "Web Development",
    quote:
      "Arc engineered our entire client portal from scratch in Next.js. The site performance shot up to a 98 Lighthouse score and our conversion rate improved by 45% within the first month of launch. Simply world-class craftsmanship.",
    avatar: "/testimonials/aarav.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "CTO",
    company: "FinVantage Solutions",
    category: "App Development",
    quote:
      "The cross-platform mobile app Arc delivered exceeded every benchmark we set. Active user retention grew by 80% and our play store rating climbed from 3.2 to 4.8 stars. Their attention to UX detail is unparalleled.",
    avatar: "/testimonials/priya.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Head of Growth",
    company: "BloomRetail India",
    category: "SEO Services",
    quote:
      "Arc's technical SEO audit and custom JSON-LD schema integration transformed our search visibility completely. Organic traffic spiked by 140% and we now rank on page one for 23 high-intent keywords. ROI has been extraordinary.",
    avatar: "/testimonials/rohan.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Marketing Director",
    company: "TravelInd Holidays",
    category: "SEO Services",
    quote:
      "Integrating structured data and optimising Core Web Vitals with Arc boosted our domain authority by 35 points in six months. Organic lead generation has doubled and our cost-per-acquisition dropped by 60%.",
    avatar: "/testimonials/neha.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Co-Founder",
    company: "EduPulse Learning",
    category: "App Development",
    quote:
      "Arc architected a secure, scalable EdTech platform handling 50,000+ concurrent students. Zero critical bugs at launch, and the Stripe payment integration processed ₹1 crore in the first week. Truly exceptional engineering.",
    avatar: "/testimonials/vikram.png",
    rating: 5,
  },
];

// ── Category badge colours ────────────────────────────────────────────────────
const categoryColors: Record<Testimonial["category"], string> = {
  "Web Development": "bg-blue-50 text-blue-700 border-blue-200",
  "App Development": "bg-violet-50 text-violet-700 border-violet-200",
  "SEO Services": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

// ── Slide variants ────────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const imageVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    rotateY: dir > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    rotateY: dir > 0 ? -15 : 15,
    transition: { duration: 0.3 },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
const TestimonialSlider: React.FC = () => {
  const [[activeIndex, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDir: number) => {
      setPage(([current]) => {
        const next =
          (current + newDir + testimonials.length) % testimonials.length;
        return [next, newDir];
      });
    },
    []
  );

  // Auto-advance every 5.5 s
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => paginate(1), 5500);
    return () => clearInterval(id);
  }, [isPaused, paginate]);

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#f8f9fc]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Decorative background blobs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-violet-100/40 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Client Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--primary-navy)" }}
          >
            What Our Clients{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-cyan) 100%)",
              }}
            >
              Say About Us
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Real results, real businesses — from web development to app
            engineering and SEO growth.
          </p>
        </motion.div>

        {/* ── Main slider card ── */}
        <div className="relative flex flex-col lg:flex-row gap-0 items-stretch bg-white rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100/80 min-h-[420px]">
          {/* Left: portrait panel */}
          <div className="relative lg:w-[38%] bg-gradient-to-br from-slate-900 via-[#0d1e36] to-[#1a3a6b] flex items-center justify-center p-10 overflow-hidden">
            {/* Subtle grid overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Glow ring */}
            <div
              aria-hidden="true"
              className="absolute w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(47,101,246,0.3) 0%, transparent 70%)",
              }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 flex flex-col items-center gap-5"
              >
                {/* Avatar with decorative ring */}
                <div className="relative">
                  <div
                    className="absolute -inset-1.5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                    }}
                  />
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
                    <Image
                      src={active.avatar}
                      alt={active.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 128px, 160px"
                      priority
                    />
                  </div>
                </div>

                {/* Name & role */}
                <div className="text-center">
                  <p className="text-white font-bold text-lg leading-tight">
                    {active.name}
                  </p>
                  <p className="text-slate-300 text-sm mt-0.5">{active.role}</p>
                  <p
                    className="text-xs font-semibold mt-1"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    {active.company}
                  </p>
                </div>

                {/* Category badge */}
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest rounded-full border px-3 py-1 ${categoryColors[active.category]}`}
                >
                  {active.category}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: quote panel */}
          <div className="flex-1 flex flex-col justify-between p-8 sm:p-12">
            {/* Quote icon */}
            <div>
              <Quote
                className="w-10 h-10 mb-6 opacity-15"
                style={{ color: "var(--accent-blue)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 stroke-amber-400"
                  />
                ))}
              </div>

              {/* Review text with animated swap */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-base sm:text-xl font-medium leading-relaxed text-slate-700 italic"
                >
                  &ldquo;{active.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Bottom controls row */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              {/* Dot indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setPage(([cur]) => [i, i > cur ? 1 : -1])
                    }
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      i === activeIndex
                        ? "w-7 bg-accent-blue"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                    style={
                      i === activeIndex
                        ? { backgroundColor: "var(--accent-blue)" }
                        : {}
                    }
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => paginate(-1)}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all duration-200 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => paginate(1)}
                  aria-label="Next testimonial"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() =>
                setPage(([cur]) => [i, i > cur ? 1 : -1])
              }
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.96 }}
              aria-label={`View ${t.name}'s testimonial`}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden transition-all duration-300 ${
                i === activeIndex
                  ? "shadow-lg opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
              style={
                i === activeIndex
                  ? {
                      outline: "2.5px solid var(--accent-blue)",
                      outlineOffset: "3px",
                    }
                  : {}
              }
            >
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover object-top"
                sizes="56px"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
