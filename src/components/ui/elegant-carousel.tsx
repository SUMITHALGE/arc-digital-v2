"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./elegant-carousel.css";

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  {
    title: "Luxe Fashion Store",
    subtitle: "E-Commerce / Conversion Optimization",
    description:
      "Engineered a luxury e-commerce storefront that tripled conversion rates, reduced cart abandonment by 45%, and delivered a 60% faster page load with Next.js SSR.",
    accent: "#C4956A",
    imageUrl: "/assets/portfolio/carousel-ecommerce.png",
  },
  {
    title: "Alpha Analytics",
    subtitle: "SaaS / Dashboard Design",
    description:
      "Architected a real-time analytics dashboard processing 2M+ data points daily, boosting user engagement by 142% and reducing churn rate by 35% within 3 months.",
    accent: "#2f65f6",
    imageUrl: "/assets/portfolio/saas-dashboard.png",
  },
  {
    title: "Sora Fine Dining",
    subtitle: "Hospitality / Brand Experience",
    description:
      "Crafted an immersive restaurant experience driving 200% more online reservations with a bespoke booking system, stunning food photography, and SEO-first architecture.",
    accent: "#7A9E7E",
    imageUrl: "/assets/portfolio/restaurant.png",
  },
  {
    title: "Prestige Realty",
    subtitle: "Real Estate / Lead Generation",
    description:
      "Designed a premium property platform generating 85% more qualified leads through AI-powered search, virtual tours, and a 95+ Lighthouse performance score.",
    accent: "#D4A955",
    imageUrl: "/assets/portfolio/real-estate.png",
  },
];

export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index: number, dir?: "next" | "prev") => {
      if (isTransitioning || index === currentIndex) return;
      setDirection(dir || (index > currentIndex ? "next" : "prev"));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, "next");
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, "prev");
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="work">
      <div
        className="carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Section Header */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto 48px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "0.05em",
              marginBottom: "12px",
              display: "block",
              color: "var(--accent-blue)",
            }}
          >
            Featured Work
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 40px)",
              fontWeight: 700,
              color: "var(--primary-navy)",
              margin: "0 0 12px",
              lineHeight: 1.25,
            }}
          >
            Real projects, quantifiable results
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--gray-600)",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "550px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Take a look at how we helped leading companies redesign their
            presence and multiply growth rates.
          </p>
        </div>

        {/* Background accent wash */}
        <div
          className="carousel-bg-wash"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}18 0%, transparent 70%)`,
          }}
        />

        <div className="carousel-inner">
          {/* Left: Text Content */}
          <div className="carousel-content">
            <div className="carousel-content-inner">
              {/* Collection number */}
              <div
                className={`carousel-collection-num ${isTransitioning ? "transitioning" : "visible"}`}
              >
                <span className="carousel-num-line" />
                <span className="carousel-num-text">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`carousel-title ${isTransitioning ? "transitioning" : "visible"}`}
              >
                {currentSlide.title}
              </h3>

              {/* Subtitle */}
              <p
                className={`carousel-subtitle ${isTransitioning ? "transitioning" : "visible"}`}
                style={{ color: currentSlide.accent }}
              >
                {currentSlide.subtitle}
              </p>

              {/* Description */}
              <p
                className={`carousel-description ${isTransitioning ? "transitioning" : "visible"}`}
              >
                {currentSlide.description}
              </p>

              {/* Navigation Arrows */}
              <div className="carousel-nav-arrows">
                <button
                  onClick={goPrev}
                  className="carousel-arrow-btn"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="carousel-arrow-btn"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="carousel-image-container">
            <div
              className={`carousel-image-frame ${isTransitioning ? "transitioning" : "visible"}`}
            >
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                className="carousel-image"
              />
              <div
                className="carousel-image-overlay"
                style={{
                  background: `linear-gradient(135deg, ${currentSlide.accent}22 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Decorative frame corners */}
            <div
              className="carousel-frame-corner carousel-frame-corner--tl"
              style={{ borderColor: currentSlide.accent }}
            />
            <div
              className="carousel-frame-corner carousel-frame-corner--br"
              style={{ borderColor: currentSlide.accent }}
            />
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="carousel-progress-bar">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-progress-item ${index === currentIndex ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="carousel-progress-track">
                <div
                  className="carousel-progress-fill"
                  style={{
                    width:
                      index === currentIndex
                        ? `${progress}%`
                        : index < currentIndex
                          ? "100%"
                          : "0%",
                    backgroundColor:
                      index === currentIndex
                        ? currentSlide.accent
                        : undefined,
                  }}
                />
              </div>
              <span className="carousel-progress-label">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
