"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Sparkles,
  Search,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Hero from "@/components/Hero";
import styles from "./page.module.css";

// Client Logos SVGs for high crisp resolution
const clientLogos = [
  {
    name: "Google",
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="currentColor">
        <path d="M12.3 16.5v-3.2h8c-.1-1-.4-2-.9-2.9-1.2-2.1-3.4-3.6-6-3.6-3.8 0-7 3-7 6.8s3.2 6.8 7 6.8c2.2 0 4.2-1 5.5-2.6l2.3 1.6c-2 2.6-5 4.2-7.8 4.2-5.6 0-10.2-4.4-10.2-10s4.6-10 10.2-10c3 0 5.6 1.1 7.6 3.1 2 2 3.1 4.7 3.1 7.7 0 .6-.1 1.2-.2 1.8h-12.4v.2zM28.4 6.8c3.8 0 6.9 2.9 6.9 6.8s-3.1 6.8-6.9 6.8c-3.8 0-6.9-2.9-6.9-6.8S24.6 6.8 28.4 6.8zm0 10.5c2 0 3.6-1.6 3.6-3.7s-1.6-3.7-3.6-3.7c-2 0-3.6 1.6-3.6 3.7s1.6 3.7 3.6 3.7zM43.7 6.8c3.8 0 6.9 2.9 6.9 6.8s-3.1 6.8-6.9 6.8c-3.8 0-6.9-2.9-6.9-6.8s3.1-6.8 6.9-6.8zm0 10.5c2 0 3.6-1.6 3.6-3.7s-1.6-3.7-3.6-3.7c-2 0-3.6 1.6-3.6 3.7s1.6 3.7 3.6 3.7zM58.7 13.8v6.7c0 2.7-1.6 3.9-3.6 3.9-1.9 0-3.1-1.3-3.6-2.3l2.8-1.2c.5.8 1.1 1.4 1.8 1.4.9 0 1.6-.6 1.6-1.7V20c-.6.8-1.5 1.5-2.8 1.5-2.6 0-5.1-2.2-5.1-5.1s2.5-5.1 5.1-5.1c1.3 0 2.2.7 2.8 1.4v-1.1h3.8v2.2zm-3.4 3.7c1.9 0 3.3-1.6 3.3-3.7s-1.4-3.7-3.3-3.7c-1.9 0-3.3 1.6-3.3 3.7s1.4 3.7 3.3 3.7zM65.6 1v22.5h-3.8V1h3.8zM76.5 16.5c-1.9 0-3.3-1-4.1-2.5L83 9.4c-.2-.5-.8-1.5-2.2-1.5-1.4 0-2.8.9-3.5 2.1l-6-2.5c1.8-2.6 4.1-4.1 7.2-4.1 3.5 0 5.8 2.1 6.4 4.1l.2.5-8.8 3.7v3.2h.2c.4 0 .9-.2 1-.4l.3-.4c1-.9 2-1.3 3-1.3 1.4 0 2.3.6 2.8 1.4L76.5 16.5z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg width="70" height="32" viewBox="0 0 70 32" fill="currentColor">
        <path d="M3.7 15.6c-.6-.4-1-.9-1-1.6 0-.8.6-1.4 1.5-1.6.8-.2 2.1-.3 3.8-.3h2.6v2.2c-.8.5-2.3.9-4 .9c-1.3.1-2.4-.1-2.9-.6zm9.3-5.2c-.7-1-1.9-1.5-3.5-1.5-1.6 0-3 .6-3.8 1.6l1.7 1.3c.5-.7 1.3-1.1 2.1-1.1.9 0 1.6.4 2 1v.7c-.8 0-2.1.1-3.6.3C5.1 13 3 13.9 3 15.6c0 1.6 1.6 2.6 3.8 2.6c1.8 0 3.3-.7 4.1-1.8v1.5h2.2V10.4h-.1zm10 5.4l2.5-7.5h2.3l-3.9 10.4c-.6 1.7-1.4 2.8-2.6 3.5c-1.1.7-2.3.9-3.5.9-.6 0-1.3-.1-1.9-.3v-2c.5.1 1 .2 1.5.2c.9 0 1.7-.5 2.2-1.5l.3-.8-4.2-10.4h2.4L23 15.8zM41.7 8.3L40.2 13l-1.6-4.7h-2.1L35 13l-1.5-4.7h-2.2l2.6 7.5h2.1l1.6-4.6l1.6 4.6h2.1l2.6-7.5zM48 11.2c-.4-.6-1-.9-1.8-.9-.9 0-1.6.5-1.9 1.2h3.7c0-.3 0-.3 0-.3zm2 1.4h-5.8v.1c0 1.2.9 2 2.1 2c1 0 1.8-.5 2.3-1.2l1.6.9c-.8 1.4-2.2 2.2-4 2.2c-2.7 0-4.3-1.8-4.3-4.4c0-2.5 1.8-4.4 4.3-4.4c2.5 0 4 1.8 4 4v.9h-.2z" />
        <path d="M5.5 22.3c7.5 4.3 17 6.7 26.6 6.7c12 0 23.4-3.8 32-10.2l1.4 1.7c-9 6.8-21 10.8-33.4 10.8C21.4 31.3 11 28.7 3 24l2.5-1.7zm59-3.7l1.7.5c.3.1.5.4.3.7l-1.7 3.5c-.2.4-.6.5-1 .2L61 21.6c-.3-.2-.4-.6-.2-1l.7-1.4c.1-.3.5-.4.8-.2l1.7.6z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="currentColor">
        <path d="M7 13c0-2 1.5-3 3.6-3c1.5 0 2.8.5 3.4 1l-1 2.2c-.5-.3-1.4-.7-2.3-.7c-.8 0-1.3.4-1.3.9c0 .6.5.9 1.7 1.2c1.8.4 3.7.9 3.7 3.1c0 2.5-2 3.3-4.1 3.3c-1.8 0-3-.5-3.8-1l1-2.2c.6.4 1.7.8 2.7.8c.9 0 1.4-.4 1.4-1c0-.7-.6-.9-1.8-1.2c-1.9-.4-3.2-.9-3.2-2.9zm13.3.4V10h2.6v3.4h2.5v2.2h-2.5V20c0 .7.4 1 1 1c.5 0 .9-.1 1.2-.2l.2 2.1c-.5.2-1.3.3-2.2.3c-2 0-2.8-1-2.8-2.8V15.6h-1.6v-2.2h1.6zm8-.4V10h2.5v3.4c.5-2 1.8-3.4 3.6-3.4c.3 0 .6 0 .8.1v2.5c-.3-.1-.7-.1-1.1-.1c-1.5 0-2.7 1-3.2 2.7V21h-2.6V13zm8.3 8V10h2.6v11h-2.6zm0-13.6V5h2.6v2.4h-2.6zm6.3 13.6V10h2.5v1.2c.6-1 1.8-1.5 3-1.5c2.4 0 4.1 2 4.1 5.6c0 3.7-1.7 5.7-4.1 5.7c-1.2 0-2.4-.6-3-1.5V26.5h-2.5V13zm6.7 2.6c0 2.1.9 3.2 2.3 3.2s2.3-1.1 2.3-3.2c0-2-.9-3.2-2.3-3.2s-2.3 1.2-2.3 3.2zm13.8-1.4h5.8c0-2-1.4-3.2-3.1-3.2c-1.8 0-3 1.5-3 3.5zm5.8 1.2v.2h-8.2c.1 1.8 1.2 2.9 2.8 2.9c1 0 1.9-.4 2.4-1l1.7 1.2c-1 1.4-2.5 2.1-4.4 2.1c-3.3 0-5.2-2.2-5.2-5.7c0-3.3 2-5.6 5.1-5.6c3.1 0 4.8 2.2 4.8 5.7v.2z" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="currentColor">
        <path d="M12.6 15.3c0-.6.1-1.2.3-1.7L4.7 10C3 11 2 12.8 2 15c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0 .1-.2 0-.4.3zm-6-2.3c0-.5.4-.9.9-.9c.5 0 .9.4.9.9s-.4.9-.9.9c-.5-.1-.9-.5-.9-.9zm1.7 6.4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3c-.1 1.7-1.4 3-3 3zm19.8-12.7V17c0 1.6-.9 2.6-2.5 2.6s-2.5-1-2.5-2.6V6.7H21V17c0 3 1.8 4.7 4.7 4.7s4.7-1.7 4.7-4.7V6.7h-2.3zm10 5.6V10h-2.3v11.4h2.3v-4.8c0-2.3 1.2-3.6 2.8-3.6c.3 0 .7 0 .9.1V10c-.3-.1-.7-.1-1-.1c-1.3 0-2.2.7-2.7 1.4zm8.3-2v3c.5-.7 1.4-1.2 2.6-1.2c2.4 0 4.1 2 4.1 5.1c0 3.1-1.7 5.1-4.1 5.1c-1.2 0-2.1-.5-2.6-1.2v1.2H44V6.7h2.4zm2.6 11.4c1.4 0 2.3-1.1 2.3-2.9s-.9-2.9-2.3-2.9s-2.3 1.1-2.3 2.9c0 1.8.9 2.9 2.3 2.9zm13.7-5.1c0-1.8-.9-2.9-2.3-2.9s-2.3 1.1-2.3 2.9c0 1.8.9 2.9 2.3 2.9c1.5-.1 2.3-1.2 2.3-2.9zm2.4.9c0 3-1.8 4.7-4.7 4.7s-4.7-1.7-4.7-4.7V6.7h2.3V14c0 1.6.9 2.6 2.5 2.6s2.5-1 2.5-2.6V6.7h2.3v4.8l.1 1.2z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    svg: (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="currentColor">
        <path d="M12 25h-3.2L3.6 12v13H1V7h3.8L9.8 20V7H12v18zM24 16.5c0 5-3.2 5.5-5.5 5.5s-5.5-.5-5.5-5.5S16.2 11 18.5 11s5.5.5 5.5 5.5zm-2.4 0c0-3-.9-3.2-3.1-3.2s-3.1.2-3.1 3.2c0 3 .9 3.2 3.1 3.2s3.1-.2 3.1-3.2zM33.6 13h-2.8V21.4c0 1.2.4 1.4 1.2 1.4c.3 0 .7 0 1-.2L33.2 25c-.5.2-1.3.3-2 .3c-2 0-2.8-1-2.8-2.8V13h-1.6V11h1.6V7.6h2.4V11h2.8v2zM39 9c-.8 0-1.4-.6-1.4-1.4c0-.8.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4c0 .8-.6 1.4-1.4 1.4zm-1.2 16V11H40v14h-2.2zM52.2 16.5c0 5-3.2 5.5-5.5 5.5s-5.5-.5-5.5-5.5S44.4 11 46.7 11s5.5.5 5.5 5.5zm-2.4 0c0-3-.9-3.2-3.1-3.2s-3.1.2-3.1 3.2c0 3 .9 3.2 3.1 3.2s3.1-.2 3.1-3.2zM55.8 11.2V11H58v1.2c.6-1 1.8-1.5 3-1.5c2.4 0 4.1 2 4.1 5.6c0 3.7-1.7 5.7-4.1 5.7c-1.2 0-2.4-.6-3-1.5V25H55.8V11.2zm6.6 5.3c0-2.1-.9-3.2-2.3-3.2s-2.3 1.1-2.3 3.2c0 2 .9 3.2 2.3 3.2s2.3-1.1 2.3-3.2z" />
      </svg>
    ),
  },
];

const services = [
  {
    icon: <Code className="w-7 h-7 text-accent-blue" />,
    title: "Website Development",
    href: "/services/website-development",
    desc: "Build fast, modern, and SEO-first custom web applications designed specifically to rank on search engines, load instantly, and turn users into active clients.",
    color: "rgba(47, 101, 246, 0.08)",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-accent-yellow" />,
    title: "Website Redesign",
    href: "/services/website-redesign",
    desc: "Revitalize your legacy websites with high-converting, state-of-the-art designs, premium layouts, fluid animations, and mobile-responsive architectures.",
    color: "rgba(255, 192, 30, 0.08)",
  },
  {
    icon: <Search className="w-7 h-7 text-accent-cyan" />,
    title: "SEO Services",
    href: "/services/seo-services",
    desc: "Increase search exposure and drive organic sales using advanced page speed optimization, structured metadata configurations, and user intent alignment.",
    color: "rgba(63, 169, 245, 0.08)",
  },
];

const featuredWork = [
  {
    title: "Alpha Growth Platform",
    desc: "An enterprise analytics system engineered for ReliaQuest, improving dashboard load speeds by 40% and SEO traffic flow by 115%.",
    image: "/assets/member2.png", // reusing image as placeholder visual
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Sora Creative Showcase",
    desc: "A stunning portfolio page designed for an international architectural group, yielding a 150% increase in lead generation rates.",
    image: "/assets/member1.png", // reusing image as placeholder visual
    tags: ["React", "Framer Motion", "CSS Modules"],
  },
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

      {/* Client Logos Section */}
      <section className={styles.logosSection}>
        <div className={styles.logosContainer}>
          <p className={styles.logosTitle}>Trusted by fast-growing brands worldwide</p>
          <div className={styles.logosGrid}>
            {clientLogos.map((logo, idx) => (
              <div key={idx} className={styles.logoItem} title={logo.name}>
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionLabel}>What We Do</span>
            <h2 className={styles.sectionTitle}>
              Tailored services for premium digital footprints
            </h2>
            <p className={styles.sectionSubtitle}>
              We craft high-performance web products that capture audiences,
              rank on search engines, and drive bottom-line revenue.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Link key={index} href={service.href} className={styles.serviceCard}>
                <div
                  className={styles.serviceIcon}
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
                <span className={styles.serviceLinkText}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Featured Work</span>
            <h2 className={styles.sectionTitle}>
              Real web projects, quantifiable business growth
            </h2>
            <p className={styles.sectionSubtitle}>
              Take a look at how we helped leading companies redesign their
              presence and multiply search traffic rates.
            </p>
          </div>

          <div className={styles.workGrid}>
            {featuredWork.map((project, index) => (
              <div key={index} className={styles.workCard}>
                <div className={styles.workImageWrapper}>
                  {/* Backdrop shapes instead of missing visual assets to look extremely premium */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy to-accent-blue opacity-90 flex items-center justify-center p-8">
                    <div className="text-center">
                      <span className="text-accent-yellow font-heading text-lg font-bold tracking-wider uppercase block mb-2">
                        Case Study
                      </span>
                      <span className="text-white text-3xl font-extrabold font-heading">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.workContent}>
                  <div className={styles.workTags}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.workTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.workTitle}>{project.title}</h3>
                  <p className={styles.workDesc}>{project.desc}</p>
                  <Link href="/work" className={styles.serviceLinkText}>
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionLabel}>Testimonials</span>
            <h2 className={styles.sectionTitle}>What our clients say about us</h2>
          </div>

          <div className={styles.testimonialContainer}>
            <div className={styles.testimonialCard}>
              <p className={styles.quoteText}>
                &ldquo;Arc Digital Solutions rebuilt our marketing website completely in Next.js.
                The immediate impact was unbelievable: page load speeds decreased by 60%, and our search exposure rankings saw a 142% organic growth spike within the first 4 months. Absolute game-changers!&rdquo;
              </p>
              <div className={styles.clientMeta}>
                <div className={styles.clientAvatar}>
                  <Image
                    src="/assets/member1.png"
                    alt="Sarah Jenkins"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={styles.clientInfo}>
                  <h4 className={styles.clientName}>Sarah Jenkins</h4>
                  <p className={styles.clientRole}>VP of Growth, Alpha SaaS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
