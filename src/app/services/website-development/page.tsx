import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import styles from "../services.module.css";

export const metadata: Metadata = {
  title: "Website Development Services | Arc Digital Solutions",
  description:
    "We design and build fast, secure, and SEO-first custom websites using Next.js, React, and Tailwind CSS. Elevate your brand presence online.",
};

const details = {
  title: "Website Development",
  desc: "In today's digital economy, your website is the foundation of your business. We build next-generation web platforms that pair aesthetic excellence with clean, modular Next.js architecture.",
  features: [
    {
      title: "Next.js & React Frameworks",
      desc: "By utilizing React server components and static generation, we construct sites that load in milliseconds and deliver an app-like navigation experience.",
    },
    {
      title: "Core Web Vitals Optimization",
      desc: "We optimize all images, inline CSS modules, and prevent layout shifts to secure a 100% Core Web Vitals score on PageSpeed Insights.",
    },
    {
      title: "Semantic HTML Structure",
      desc: "Clean heading hierarchies (H1-H6) and structural element tags are hardcoded to allow search crawlers to seamlessly index and index your content.",
    },
    {
      title: "Security & Accessibility First",
      desc: "Built with modern OWASP compliance, safe dependencies, and fully accessible WCAG contrast/navigation setups.",
    },
  ],
};

export default function WebsiteDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Development",
    "provider": {
      "@type": "Organization",
      "name": "Arc Digital Solutions",
      "url": "https://arcdigitalsolutions.com"
    },
    "description": "Custom Next.js & React website development with SEO optimizations, high page speed, and responsive styles."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className={styles.servicesPage}>
        <div className={styles.container}>
          {/* Back button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent-blue font-semibold mb-8 hover:text-primary-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          {/* Main Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7">
              <span className={styles.label}>Custom Web Engineering</span>
              <h1 className={styles.title}>{details.title}</h1>
              <p className={styles.subtitle}>{details.desc}</p>
            </div>
            <div className="lg:col-span-5 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold font-heading mb-6 text-primary-navy">
                Key Outputs
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Average 98+ PageSpeed Score
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Fully Custom React Templates
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Full CMS Integration Options
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Dynamic SEO Headers Configured
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block text-center bg-primary-navy hover:bg-accent-blue text-white font-bold py-3.5 px-6 rounded-full transition-colors"
              >
                Inquire About Website Dev
              </Link>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-16">
            {details.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-2xl"
              >
                <h3 className="text-lg font-bold font-heading mb-3 text-primary-navy">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 line-height-1.6">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
