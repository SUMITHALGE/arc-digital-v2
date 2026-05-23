"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ui/services";
import ElegantCarousel from "@/components/ui/elegant-carousel";
import { AnimatedTestimonialGrid, Testimonial } from "@/components/ui/testimonial-2";
import styles from "./page.module.css";

const indianTestimonials: Testimonial[] = [
  {
    imgSrc: "https://images.unsplash.com/photo-1507152832244-10d45a7e3b93?q=80&w=300&auto=format&fit=crop",
    alt: "Aarav Sharma",
    name: "Aarav Sharma",
    role: "Founder, BharatTech",
    category: "Web Development",
    review: "Arc engineered our client portal from scratch using Next.js. The site is blazing fast, and our conversion rate went up by 45% in the first month."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    alt: "Priya Patel",
    name: "Priya Patel",
    role: "CTO, FinVantage",
    category: "App Development",
    review: "The app development team at Arc created an incredibly polished cross-platform product. Our active user metrics grew by 80% due to the seamless UX."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=300&auto=format&fit=crop",
    alt: "Rohan Mehta",
    name: "Rohan Mehta",
    role: "Head of Growth, BloomRetail",
    category: "SEO Services",
    review: "Their SEO audit and custom sitemaps transformed our visibility. We saw a 140% spike in organic traffic and now rank on page one for major keywords."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1618018352910-72bdafdc52a6?q=80&w=300&auto=format&fit=crop",
    alt: "Ananya Iyer",
    name: "Ananya Iyer",
    role: "Product Manager, HealthSet",
    category: "Web Development",
    review: "Next.js performance optimizations implemented by Arc lowered our bounce rates by 35%. Dynamic loading and responsive layouts are top notch."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    alt: "Vikram Singh",
    name: "Vikram Singh",
    role: "CEO, EduPulse",
    category: "App Development",
    review: "Arc built a secure, scalable learning app that handles 50k+ students. Zero crashes and exceptional design. Highly recommend their app dev services!"
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    alt: "Neha Gupta",
    name: "Neha Gupta",
    role: "Marketing Director, TravelInd",
    category: "SEO Services",
    review: "Integrating custom schema data and optimizing Core Web Vitals boosted our Google ranking rapidly. Organic lead generation has doubled."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    alt: "Aditya Joshi",
    name: "Aditya Joshi",
    role: "Co-Founder, ZenLogistics",
    category: "Web Development",
    review: "They redesigned our legacy dashboard into a modern, responsive web application. The dashboard load times dropped from 8s to under 1.2s."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=300&auto=format&fit=crop",
    alt: "Ishita Sen",
    name: "Ishita Sen",
    role: "VP Engineering, PayZone",
    category: "App Development",
    review: "A complex fintech app developed with security-first practices. Arc delivered a premium, high-fidelity experience that exceeded our expectations."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    alt: "Kabir Verma",
    name: "Kabir Verma",
    role: "E-commerce Director, SpiceRoute",
    category: "SEO Services",
    review: "Our organic search revenue grew by 115% following Arc's SEO schema audits. They made our product listings stand out in search results."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    alt: "Meera Nair",
    name: "Meera Nair",
    role: "Brand Lead, CozyRooms",
    category: "Web Development",
    review: "Working with Arc was a breeze. They brought our design vision to life with perfect responsiveness and clean Next.js architecture."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    alt: "Rahul Rao",
    name: "Rahul Rao",
    role: "Founder, QuickBite",
    category: "App Development",
    review: "Our new food-delivery mobile interface is exceptionally fluid. Order completion rate rose by 50% since launch. Phenomenal engineering."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    alt: "Diya Bose",
    name: "Diya Bose",
    role: "SEO Specialist, NewsVibe",
    category: "SEO Services",
    review: "Arc's technical SEO approach has been stellar. Indexation speeds for new articles went from days to minutes with real-time site crawling."
  }
];








const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We analyze your tech constraints, current ranking scores, and competitive landscape to engineer an absolute blueprint for growth.",
  },
  {
    step: "02",
    title: "Design & UX Blueprint",
    desc: "We mockup high-fidelity visuals following modern styles, interactive patterns, and responsive layout structures.",
  },
  {
    step: "03",
    title: "Development & Speed",
    desc: "We code custom Next.js configurations optimized for speed, semantic HTML headers, and clean search index scripts.",
  },
  {
    step: "04",
    title: "Launch & SEO Ranking",
    desc: "We deploy with automated sitemaps, structured JSON schemas, and monitor Core Web Vitals to guarantee optimal search performance.",
  },
];

const stats = [
  { number: "95+", label: "Average SEO Score", desc: "Outperforming search engines" },
  { number: "+142%", label: "Organic Traffic Growth", desc: "Average increase in 6 months" },
  { number: "40%+", label: "Conversion Rate Lift", desc: "For revamped web UI layouts" },
  { number: "200+", label: "Projects Orchestrated", desc: "Delivered on-time & within budget" },
];

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
    "name": "Arc Digital Solutions",
    "url": "https://arcdigitalsolutions.com",
    "logo": "https://arcdigitalsolutions.com/assets/logo.png",
    "description": "Arc Digital Solutions builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
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

      {/* Process Section */}
      <section id="process" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionLabel}>Our Methodology</span>
            <h2 className={styles.sectionTitle}>Our step-by-step roadmap to success</h2>
            <p className={styles.sectionSubtitle}>
              We implement an agile, security-first layout workflow designed to
              deliver fast, error-free deployments.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <span className={styles.processStep}>{step.step}</span>
                <h3 className={styles.processCardTitle}>{step.title}</h3>
                <p className={styles.processCardDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statDesc}>{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedTestimonialGrid testimonials={indianTestimonials} />

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
              <Link href="/contact" className={styles.ctaBtn}>
                Start Project Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
