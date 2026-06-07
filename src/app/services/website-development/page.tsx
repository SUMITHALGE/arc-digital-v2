import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowLeft, MapPin, Phone, MessageCircle } from "lucide-react";
import styles from "../services.module.css";

export const metadata: Metadata = {
  title: "Website Development Company Mumbai & Pune | ARC Digital Solutions",
  description:
    "Expert web development company in Mumbai & Pune. Custom websites, React.js, Next.js, Spring Boot. Mobile-friendly, SEO-optimized, fast-loading sites. 100+ projects delivered. Get a free quote.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/services/website-development",
  },
  openGraph: {
    title: "Website Development Company Mumbai & Pune | ARC Digital Solutions",
    description:
      "Custom website development in Mumbai and Pune. React.js, Next.js, Spring Boot APIs. SEO-ready, mobile-responsive, fast-loading. Free consultation available.",
    url: "https://www.arcdigitalsolution.in/services/website-development",
    type: "website",
    locale: "en_IN",
  },
};

const details = {
  title: "Website Development",
  desc: "In today's digital economy, your website is the foundation of your business. ARC Digital Solutions builds next-generation web platforms in Mumbai and Pune that pair aesthetic excellence with clean, modular React.js and Next.js architecture — delivering fast, SEO-ready, and conversion-focused websites for startups and SMEs across Maharashtra.",
  features: [
    {
      title: "React.js & Next.js Frameworks",
      desc: "By utilizing React Server Components and static generation, we construct sites that load in milliseconds and deliver an app-like navigation experience. Perfect for Mumbai and Pune businesses that need to outperform competitors online.",
    },
    {
      title: "Core Web Vitals Optimization",
      desc: "We optimize all images, inline CSS modules, and prevent layout shifts to target 95+ Core Web Vitals scores on PageSpeed Insights — giving your Mumbai or Pune website a ranking advantage on Google.",
    },
    {
      title: "Semantic HTML & SEO Architecture",
      desc: "Clean heading hierarchies (H1–H6), structured data (schema.org), canonical tags, and sitemap generation are built-in from day one — so Google can discover, crawl, and rank your website faster.",
    },
    {
      title: "Spring Boot Backend Development",
      desc: "Need a powerful backend? Our team builds secure Spring Boot REST APIs and microservices to power your web application — ideal for startups in Pune's Hinjewadi IT Park and Mumbai's tech ecosystem.",
    },
    {
      title: "Mobile-First Responsive Design",
      desc: "Over 70% of Indian internet users browse on mobile. Every website we build is 100% responsive and tested across devices — phones, tablets, and desktops — for flawless performance.",
    },
    {
      title: "Security & Accessibility First",
      desc: "Built with OWASP compliance, secure routing, HTTPS enforcement, and WCAG accessibility standards — so your website is safe for users and trusted by search engines.",
    },
  ],
};

const faqData = [
  {
    question: "Does ARC Digital Solutions build websites in Mumbai?",
    answer:
      "Yes. ARC Digital Solutions is a web development company serving Mumbai and Pune. We have delivered 100+ websites for startups, SMEs, and enterprises across Mumbai, Navi Mumbai, Thane, and greater Maharashtra.",
  },
  {
    question: "What technologies do you use for website development in Pune?",
    answer:
      "We specialize in React.js, Next.js, Spring Boot (Java), and TypeScript. For content-managed sites, we also work with WordPress. Our tech stack is chosen based on your business requirements and long-term scalability needs.",
  },
  {
    question: "How much does website development cost in Mumbai?",
    answer:
      "Website development in Mumbai starts from ₹15,000 for basic business websites. Custom React.js or Spring Boot web applications start from ₹40,000. We provide free, no-obligation quotes based on your specific project requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website typically takes 2–4 weeks. Custom web applications with React.js and Spring Boot take 4–12 weeks depending on complexity. We provide a detailed project timeline before starting.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. We offer ongoing website maintenance packages covering bug fixes, content updates, security patches, performance monitoring, and SEO improvements — keeping your website fast and secure month after month.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in website redesign for Mumbai and Pune businesses — modernizing outdated websites with improved UX, faster loading speeds, and better SEO structure while preserving your existing content and rankings.",
  },
];

export default function WebsiteDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/services/website-development#service",
        serviceType: "Website Development",
        name: "Website Development Services — Mumbai & Pune",
        description:
          "Custom website development company in Mumbai and Pune. We build React.js, Next.js, and Spring Boot web applications that are fast, SEO-optimized, mobile-responsive, and conversion-focused.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
          url: "https://www.arcdigitalsolution.in",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "State", name: "Maharashtra" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "React.js Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Next.js Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spring Boot Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Website Development" } },
          ],
        },
        url: "https://www.arcdigitalsolution.in/services/website-development",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.arcdigitalsolution.in/services" },
          { "@type": "ListItem", position: 3, name: "Website Development", item: "https://www.arcdigitalsolution.in/services/website-development" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className={styles.servicesPage}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary-navy transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">Website Development</span>
          </nav>

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
              <span className={styles.label}>Web Development Company — Mumbai & Pune</span>
              <h1 className={styles.title}>{details.title}</h1>
              <p className={styles.subtitle}>{details.desc}</p>

              {/* Location signals */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["Mumbai", "Pune", "Navi Mumbai", "Thane", "Maharashtra"].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                  >
                    <MapPin className="w-3 h-3" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold font-heading mb-6 text-primary-navy">
                What You Get
              </h2>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  95+ PageSpeed Score Guaranteed
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  100% Mobile-Responsive Design
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  SEO-Ready from Day One (Schema + Meta)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  React.js / Next.js / Spring Boot Stack
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  Free Post-Launch Support (30 days)
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Website%20Development%20in%20Mumbai%2FPune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceCta}
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Get Free Quote on WhatsApp
                </a>
                <a
                  href="/contact"
                  className="text-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors"
                >
                  Send Us a Message
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-16 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">
              Our Website Development Services in Mumbai & Pune
            </h2>
            {details.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-2xl"
              >
                <h3 className="text-lg font-bold font-heading mb-3 text-primary-navy">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ Section with Schema */}
          <div className="border-t border-gray-200 pt-16 mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">
              Frequently Asked Questions — Website Development in Mumbai & Pune
            </h2>
            <div className="flex flex-col gap-4">
              {faqData.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6 group"
                >
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Internal Links / Related Services */}
          <div className="border-t border-gray-200 pt-12 mb-12">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "SEO Services Mumbai", href: "/services/seo-services" },
                { label: "Website Redesign Mumbai", href: "/services/website-redesign" },
                { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
                { label: "Web Development Pune", href: "/web-development-company-pune" },
                { label: "Spring Boot Development", href: "/spring-boot-development-mumbai" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">
              Ready to Build Your Website in Mumbai or Pune?
            </h2>
            <p className="text-white/80 mb-6 text-sm">
              Get a free consultation and project estimate — no strings attached.
              ARC Digital Solutions serves businesses across Mumbai, Pune, Navi Mumbai, and Thane.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20web%20development%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Now
              </a>
              <a
                href="tel:+917719902074"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
              >
                <Phone className="w-4 h-4" />
                Call Us: +91 77199 02074
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
