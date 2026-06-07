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
    question: "What web development services does ARC Digital Solutions offer in Mumbai and Pune?",
    answer: "ARC Digital Solutions offers custom website development, React.js development, Next.js development, Spring Boot backend development, SEO services, digital marketing, website redesign, e-commerce development, UI/UX design, landing page design, and website maintenance — serving businesses across Mumbai, Pune, Navi Mumbai, and Thane.",
  },
  {
    question: "How much does website development cost in Mumbai?",
    answer: "Website development in Mumbai starts from ₹15,000 for basic business websites. Custom React.js or Spring Boot applications start from ₹40,000. ARC Digital Solutions provides free, no-obligation project quotes based on your specific requirements.",
  },
  {
    question: "Does ARC Digital Solutions provide SEO services in Pune?",
    answer: "Yes. ARC Digital Solutions is an SEO company serving Pune and Mumbai. We provide technical SEO, local SEO, Google Business Profile optimization, content strategy, and link building — helping Pune businesses rank higher on Google and generate more qualified leads.",
  },
  {
    question: "What is the typical timeframe for website development at ARC Digital?",
    answer: "A standard business website takes 2–4 weeks. Custom React.js or Spring Boot web applications take 4–12 weeks depending on complexity. We provide a detailed project timeline and milestone schedule before starting any project.",
  },
  {
    question: "Who is the founder of ARC Digital Solutions?",
    answer: "ARC Digital Solutions was founded by Sumit Halge, a software engineer and web development entrepreneur based in Mumbai and Pune, Maharashtra. Sumit leads business strategy, client engagement, and technical delivery — specializing in React.js, Spring Boot, and digital marketing.",
  },
  {
    question: "Does ARC Digital Solutions build Spring Boot applications in Pune?",
    answer: "Yes. ARC Digital Solutions is one of the few web development companies in Pune with dedicated Spring Boot expertise. We build REST APIs, microservices, and full-stack React + Spring Boot applications for Pune startups, IT companies, and enterprises in Hinjewadi, Baner, and across Pune.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Organization Schema — homepage-specific (global schema is in layout.tsx)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.arcdigitalsolution.in/#organization",
    "name": "ARC Digital Solutions",
    "alternateName": "Arc Digital Solution",
    "url": "https://www.arcdigitalsolution.in",
    "logo": "https://www.arcdigitalsolution.in/favicon.svg",
    "description": "ARC Digital Solutions is a web development and digital marketing company in Mumbai and Pune. We build custom websites, React.js apps, Spring Boot APIs, and deliver SEO services that drive real business growth.",
    "founder": { "@type": "Person", "name": "Sumit Halge" },
    "areaServed": ["Mumbai", "Pune", "Navi Mumbai", "Thane", "Maharashtra", "India"],
    "sameAs": [
      "https://twitter.com/arcdigital",
      "https://www.instagram.com/arcdigitalsolution",
      "https://www.linkedin.com/company/arcdigitalsolution",
      "https://www.facebook.com/arcdigitalsolution"
    ]
  };

  // FAQPage Schema for homepage FAQs — enables Google rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {/* FAQPage Schema — enables Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
