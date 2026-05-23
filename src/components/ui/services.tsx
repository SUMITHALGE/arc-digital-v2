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
    <section id="services" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <span
            className="text-sm font-bold uppercase tracking-wider mb-3 block"
            style={{ color: "var(--accent-blue)" }}
          >
            What We Do
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold mb-4 tracking-tight leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--primary-navy)",
            }}
          >
            How Can We Help?
          </h2>
          <p
            className="text-lg sm:text-xl font-light max-w-xl mx-auto"
            style={{ color: "var(--gray-500)" }}
          >
            Let&apos;s turn your vision into something amazing — tailored
            services for premium digital footprints.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group rounded-3xl p-6 sm:p-8 flex flex-col h-[360px] sm:h-[380px] transition-all duration-300 no-underline relative overflow-hidden"
              style={{
                backgroundColor: "var(--gray-50)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gray-100)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(13, 30, 54, 0.06)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gray-50)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
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
                    fontFamily: "var(--font-heading)",
                    color: "var(--primary-navy)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-left text-sm leading-relaxed m-0"
                  style={{ color: "var(--gray-500)" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Hover accent line at the top */}
              <div
                className="absolute top-0 left-0 w-full h-1 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: "var(--accent-blue)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
