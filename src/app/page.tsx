"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ui/services";
import ElegantCarousel from "@/components/ui/elegant-carousel";
import TestimonialSlider from "@/components/ui/testimonial-slider";
import styles from "./page.module.css";








const faqData = [
  {
    question: "Why should we use a Next.js framework for our digital agency website?",
    answer: "Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG) out of the box. This translates to incredibly fast page loads, optimal Google Search indexes, better performance, and seamless client-side user experience using React.",
  },
  {
    question: "Do you integrate SEO schemas automatically?",
    answer: "Yes, every website we build features custom JSON-LD schemas (Organization, Services, FAQPage, etc.) using industry-standard schema-dts and dynamic Metadata API structures to maximize search appearance visibility.",
  },
  {
    question: "What is the typical timeframe for a full project delivery?",
    answer: "A standard landing page or portfolio launch takes between 3 to 5 weeks from discovery to wireframes and development. More complex Next.js SaaS applications take 6 to 10 weeks.",
  },
  {
    question: "How do you optimize page speed and Core Web Vitals?",
    answer: "We focus on clean Next.js architecture: image optimization (`next/image`), font self-hosting, lightweight styling modules, minimizing third-party script blockages, and utilizing content delivery network (CDN) distributions.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Organization Schema for SEO
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arc Digital Solution",
    "url": "https://arcdigitalsolution.in",
    "logo": "https://arcdigitalsolution.in/assets/logo.png",
    "description": "Arc Digital Solution builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
    "sameAs": [
      "https://twitter.com/arcdigital",
      "https://instagram.com/arcdigital",
      "https://linkedin.com/company/arcdigital"
    ]
  };

  return (
    <>
      {/* Inject Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero Section */}
      <Hero />




      {/* Services Section */}
      <ServicesSection />

      {/* Featured Work Section */}
      <ElegantCarousel />



      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* FAQ Section */}
      <section id="faq" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionLabel}>Support</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Have questions about Next.js configurations, SEO schemas, or our
              design framework? We have answers.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={styles.faqHeader}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <ChevronDown
                      className="w-5 h-5"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      isOpen ? styles.faqAnswerOpen : ""
                    }`}
                  >
                    <p className={styles.faqText}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaGrid}>
              <h2 className={styles.ctaTitle}>Ready to build something premium?</h2>
              <p className={styles.ctaDesc}>
                Contact us today for a free discovery consultation and let&apos;s
                map out an SEO-first layout plan to multiply your business growth.
              </p>
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                Start Project Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
