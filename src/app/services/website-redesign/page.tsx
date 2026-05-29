import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import styles from "../services.module.css";

export const metadata: Metadata = {
  title: "Website Redesign Services | Arc Digital Solution",
  description:
    "Transform your outdated interface into a premium, high-converting digital experience. We audit user experience patterns and rebuild for speed.",
};

const details = {
  title: "Website Redesign",
  desc: "An outdated design, slow load speeds, and rigid user journeys lead directly to lost conversions. We redesign existing layouts to build premium, modern aesthetics and user-friendly pathways.",
  features: [
    {
      title: "UI/UX Audits & Design Sprints",
      desc: "We research visitor scroll maps, drop-offs, and design high-fidelity components to align with your user journey goals.",
    },
    {
      title: "Modern Color & Typography Systems",
      desc: "Our design team swaps browser defaults for tailored design tokens, balanced font pairings, and responsive grids.",
    },
    {
      title: "Seamless Framer Motion Transitions",
      desc: "We integrate smooth CSS transforms, fading scroll cues, and micro-interactions that make the website feel alive.",
    },
    {
      title: "Responsive Mobile Reconstructions",
      desc: "We guarantee 100% responsive fluid layouts that work flawlessly on high-resolution displays, tablets, and phones.",
    },
  ],
};

export default function WebsiteRedesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Redesign",
    "provider": {
      "@type": "Organization",
      "name": "Arc Digital Solutions",
      "url": "https://arcdigitalsolutions.in"
    },
    "description": "Premium layout modernisation, UX audit wireframing, and responsive frontend speed reconstructions."
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
              <span className={styles.label}>Revitalize & Convert</span>
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
                  Detailed UX Performance Audits
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Premium Figma Prototype Drafts
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Improved Mobile User Layouts
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Retained SEO Redirect Configurations
                </li>
              </ul>
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Website%20Redesign"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center text-white font-semibold py-3 px-6 transition-colors text-sm"
                style={{
                  backgroundColor: 'var(--color-webflow-blue)',
                  borderRadius: 'var(--radius-buttons)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0f5fd4')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-webflow-blue)')}
              >
                Inquire About Website Redesign
              </a>
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
