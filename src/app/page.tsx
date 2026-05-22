"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Sparkles,
  Search,
  Smartphone,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Hero from "@/components/Hero";
import styles from "./page.module.css";



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
  {
    icon: <Smartphone className="w-7 h-7 text-accent-pink" />,
    title: "Application Development",
    href: "/services/application-development",
    desc: "Engineer scalable, high-performance mobile and web applications using React Native, Flutter, and modern cloud-native architectures that drive user engagement by 3x.",
    color: "rgba(228, 83, 115, 0.08)",
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
