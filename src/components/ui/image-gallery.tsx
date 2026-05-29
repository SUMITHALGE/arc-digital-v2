"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Luxe Fashion Store",
    description: "E-commerce platform with 3x conversion lift",
    image: "/assets/portfolio/ecommerce.png",
    href: "/work",
  },
  {
    title: "Alpha Analytics",
    description: "SaaS dashboard boosting engagement by 142%",
    image: "/assets/portfolio/saas-dashboard.png",
    href: "/work",
  },
  {
    title: "Sora Fine Dining",
    description: "Restaurant site driving 200% more reservations",
    image: "/assets/portfolio/restaurant.png",
    href: "/work",
  },
  {
    title: "FitPulse App",
    description: "Fitness platform with 50K+ active users",
    image: "/assets/portfolio/fitness-app.png",
    href: "/work",
  },
  {
    title: "Prestige Realty",
    description: "Real estate site generating 85% more leads",
    image: "/assets/portfolio/real-estate.png",
    href: "/work",
  },
  {
    title: "NovaPay Fintech",
    description: "Banking app onboarding 30K users in 60 days",
    image: "/assets/portfolio/fintech.png",
    href: "/work",
  },
];

const ImageGallery: React.FC = () => {
  return (
    <section
      id="work"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6"
      style={{ backgroundColor: "var(--gray-50)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span
            className="text-sm font-bold uppercase tracking-wider mb-3 block"
            style={{ color: "var(--accent-blue)" }}
          >
            Featured Work
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold mb-4 tracking-tight leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--primary-navy)",
            }}
          >
            Our Latest Creations
          </h2>
          <p
            className="text-base sm:text-lg font-light max-w-xl mx-auto"
            style={{ color: "var(--gray-500)" }}
          >
            A visual collection of our most impactful projects — each
            engineered for performance, conversions, and growth.
          </p>
        </div>

        {/* Expandable Gallery Row */}
        <div className="flex items-center gap-2 h-[360px] sm:h-[400px] w-full mb-12">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="gallery-item relative group rounded-2xl overflow-hidden h-full transition-all duration-500 cursor-pointer"
              style={{
                flexGrow: 1,
                flexBasis: 0,
                minWidth: 0,
                border: "1px solid rgba(226, 232, 240, 0.6)",
                position: "relative",
              }}
            >
              <Image
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src={item.image}
                alt={item.title}
                sizes="(max-width: 640px) 100vw, 20vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 mb-3">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors no-underline"
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Fallback for Mobile + Wrap View */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:hidden">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(226, 232, 240, 0.6)", position: "relative", height: "224px" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 50vw, 0vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-white/70">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white mt-1 no-underline"
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover expansion CSS */}
      <style>{`
        @media (min-width: 640px) {
          .gallery-item {
            flex-grow: 1;
            transition: flex-grow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .gallery-item:hover {
            flex-grow: 4;
          }
        }
        @media (max-width: 639px) {
          .flex.items-center.gap-2.h-\\[360px\\] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;
