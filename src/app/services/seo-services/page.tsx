import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import styles from "../services.module.css";

export const metadata: Metadata = {
  title: "SEO Services | Arc Digital Solutions",
  description:
    "Dominate Google and search engines with our technical SEO audits, semantic headers structure, and custom schema markups. Grow organic traffic.",
};

const details = {
  title: "SEO Services",
  desc: "High traffic begins with structured, search-first architectures. We audit your technical footprint, optimize key tag layouts, and set up dynamic schema scripts to boost organic business conversions.",
  features: [
    {
      title: "Technical SEO Audits",
      desc: "We analyze code indexability, crawl budgets, broken link redirects, and sitemaps to verify that Google indices crawl your pages effortlessly.",
    },
    {
      title: "Semantic Content Hierarchies",
      desc: "We restyle page headings, clean text tags, and structure copy lists to target high-intent keyword definitions.",
    },
    {
      title: "Structured Schema Injections",
      desc: "We output custom JSON-LD schemas (Organization, FAQPage, Services, Article) which display rich snippets on search result cards.",
    },
    {
      title: "Core Speed Audits",
      desc: "We minified files, compress JS load scripts, and structure deferred file executions to capture premium speed score gains.",
    },
  ],
};

export default function SeoServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Arc Digital Solutions",
      "url": "https://arcdigitalsolutions.com"
    },
    "description": "Technical search engine optimization audits, organic keyword research, sitemaps, and rich-snippet schema injections."
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
              <span className={styles.label}>Dominate Search Engine Results</span>
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
                  Detailed Technical Audits Report
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Custom JSON-LD Code Assets
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Competitor Keyword Blueprint
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                  Search Console Dashboards Set Up
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block text-center bg-primary-navy hover:bg-accent-blue text-white font-bold py-3.5 px-6 rounded-full transition-colors"
              >
                Inquire About SEO Services
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
