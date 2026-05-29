"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  image: string;
  overlayImage: string;
}

const services: ServiceItem[] = [
  {
    title: "Website Development",
    description:
      "Build fast, modern, and SEO-first custom web applications designed to rank on search engines and convert visitors into clients.",
    href: "/services/website-development",
    image: "/assets/services/web-dev-1.png",
    overlayImage: "/assets/services/web-dev-2.png",
  },
  {
    title: "Website Redesign",
    description:
      "Revitalize legacy websites with high-converting, state-of-the-art designs, premium layouts, and fluid animations.",
    href: "/services/website-redesign",
    image: "/assets/services/creative-1.png",
    overlayImage: "/assets/services/creative-2.png",
  },
  {
    title: "SEO Services",
    description:
      "Increase search exposure and drive organic sales using advanced page speed optimization and structured metadata.",
    href: "/services/seo-services",
    image: "/assets/services/seo-1.png",
    overlayImage: "/assets/services/seo-2.png",
  },
  {
    title: "Application Development",
    description:
      "Engineer scalable, high-performance mobile and web applications using React Native, Flutter, and modern cloud-native architectures.",
    href: "/services/application-development",
    image: "/assets/services/app-dev-1.png",
    overlayImage: "/assets/services/app-dev-2.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <>
      <style>{`
        .arc-service-card {
          background-color: var(--color-canvas-white);
          border: 1px solid var(--color-outline-gray);
          border-radius: var(--radius-cards);
          position: relative;
          overflow: hidden;
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Shimmer sweep overlay */
        .arc-service-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(226, 234, 252, 0) 0%,
            rgba(226, 234, 252, 0.65) 50%,
            rgba(226, 234, 252, 0) 100%
          );
          background-size: 200% 200%;
          background-position: -100% -100%;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s ease, background-position 0.75s ease;
          pointer-events: none;
          z-index: 0;
        }

        .arc-service-card:hover::before {
          opacity: 1;
          background-position: 110% 110%;
        }

        .arc-service-card:hover {
          transform: translateY(-8px) scale(1.015);
          background-color: #eef1fd;
          border-color: rgba(99, 120, 246, 0.45);
          box-shadow:
            0 0 0 1.5px rgba(99, 120, 246, 0.3),
            0 8px 20px rgba(99, 120, 246, 0.1),
            0 24px 48px rgba(13, 30, 54, 0.1);
        }

        /* Bottom accent gradient bar */
        .arc-service-card .arc-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #6378f6, #3fa9f5);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .arc-service-card:hover .arc-accent-bar {
          transform: scaleX(1);
        }

        /* Keep card content above shimmer overlay */
        .arc-service-card > *:not(.arc-accent-bar) {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <section id="services" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-18">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-3 block"
              style={{ color: 'var(--color-ink-Black)' }}
            >
              What We Do
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold mb-4"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                color: 'var(--color-webflow-blue)',
                letterSpacing: 'var(--tracking-heading-lg)',
                lineHeight: 'var(--leading-heading)',
              }}
            >
              How Can We Help?
            </h2>
            <p
              className="text-[var(--text-subheading)] max-w-xl mx-auto"
              style={{ color: 'var(--color-slate-gray)', lineHeight: 'var(--leading-subheading)' }}
            >
              Let&apos;s turn your vision into something amazing tailored
              services for premium digital footprints.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="arc-service-card group p-6 sm:p-8 flex flex-col h-[360px] sm:h-[380px] no-underline"
              >
                {/* Image Container */}
                <div className="relative flex-grow flex items-center justify-center mb-4">
                  {/* Back Image */}
                  <div className="absolute w-40 sm:w-44 h-28 sm:h-32 rounded-xl shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} showcase`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 160px, 176px"
                    />
                  </div>
                  {/* Front Image */}
                  <div className="absolute w-40 sm:w-44 h-28 sm:h-32 rounded-xl shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105 overflow-hidden">
                    <Image
                      src={service.overlayImage}
                      alt={`${service.title} example`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 160px, 176px"
                    />
                  </div>
                </div>

                {/* Service Title & Description */}
                <div className="mt-auto">
                  <h3
                    className="text-left text-lg sm:text-xl font-semibold mb-1"
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      color: 'var(--color-ink-black)',
                      letterSpacing: 'var(--tracking-heading-lg)',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-left text-sm leading-relaxed m-0"
                    style={{ color: 'var(--color-slate-gray)' }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent bar */}
                <div className="arc-accent-bar" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
