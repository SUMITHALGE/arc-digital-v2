import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Code, Sparkles, Search, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Arc Digital Solutions",
  description:
    "Arc Digital Solutions provides speed-optimized Website Development, premium Website Redesign, and advanced SEO Services designed to drive traffic and convert customers.",
};

const serviceCards = [
  {
    icon: <Code className="w-8 h-8 text-accent-blue" />,
    title: "Website Development",
    href: "/services/website-development",
    desc: "Build lightning-fast, modern, and SEO-first custom web applications designed specifically to rank on search engines, load instantly, and turn users into active leads.",
    color: "rgba(47, 101, 246, 0.08)",
    features: [
      "Next.js & React custom architecture",
      "Semantic layout structure & accessibility",
      "Mobile-responsive design optimization",
      "Core Web Vitals configuration",
      "Analytics & tracking setups",
    ],
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
    title: "Website Redesign",
    href: "/services/website-redesign",
    desc: "Revitalize your legacy websites with high-converting, state-of-the-art designs, premium layouts, fluid animations, and mobile-responsive architectures.",
    color: "rgba(255, 192, 30, 0.08)",
    features: [
      "Modern typography & color systems",
      "UX/UI audit & design sprint wireframes",
      "Interactive transitions & micro-animations",
      "High-speed page load reconstructions",
      "Responsive compatibility on all viewports",
    ],
  },
  {
    icon: <Search className="w-8 h-8 text-accent-cyan" />,
    title: "SEO Services",
    href: "/services/seo-services",
    desc: "Dominate search rankings and drive organic sales using advanced page speed optimization, structured metadata configurations, and user search intent alignment.",
    color: "rgba(63, 169, 245, 0.08)",
    features: [
      "In-depth keyword & competitor audits",
      "Custom JSON-LD schema injections",
      "Content structure & header optimization",
      "Core speed audits & file minification",
      "Monthly performance dashboards & analytics",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.container}>
        {/* Header Copy */}
        <div className={styles.header}>
          <span className={styles.label}>Our Core Expertise</span>
          <h1 className={styles.title}>
            Premium agency services engineered for digital growth
          </h1>
          <p className={styles.subtitle}>
            We combine high-level engineering, top-tier aesthetic design, and
            focused SEO architectures to build websites that command attention.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className={styles.grid}>
          {serviceCards.map((service, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
              <div>
                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>

              {/* Features Checklist */}
              <ul className={styles.features}>
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <CheckCircle2 className="w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={service.href} className={styles.cardLink}>
                Explore {service.title} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
