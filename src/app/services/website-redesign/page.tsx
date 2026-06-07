import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowLeft, MapPin, Phone, MessageCircle } from "lucide-react";
import styles from "../services.module.css";

export const metadata: Metadata = {
  title: "Website Redesign Services Mumbai & Pune | ARC Digital Solutions",
  description:
    "Professional website redesign company in Mumbai & Pune. Modernize your outdated website — faster loading, better UX, mobile-friendly, SEO-optimized. Free website audit. ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/services/website-redesign",
  },
  openGraph: {
    title: "Website Redesign Services Mumbai & Pune | ARC Digital Solutions",
    description:
      "Outdated website? Get a professional redesign in Mumbai or Pune. Modern UI/UX, faster loading, mobile-first, SEO-ready. Free redesign audit included.",
    url: "https://www.arcdigitalsolution.in/services/website-redesign",
    type: "website",
    locale: "en_IN",
  },
};

const details = {
  title: "Website Redesign",
  desc: "An outdated design, slow load speeds, and poor mobile experience directly cost you leads and revenue. ARC Digital Solutions provides expert website redesign services in Mumbai and Pune — transforming underperforming websites into premium, fast, mobile-first digital experiences that convert visitors into customers.",
  features: [
    {
      title: "UX Audit & Conversion Analysis",
      desc: "We analyse your current website's performance: page speed, bounce rate, mobile usability, and conversion funnel — then create a redesign blueprint that fixes every identified gap for your Mumbai or Pune audience.",
    },
    {
      title: "Modern UI Design in Figma",
      desc: "Our design team creates high-fidelity Figma prototypes before a single line of code is written — giving you full visual control and approval of the new design before development begins.",
    },
    {
      title: "SEO-Preserving Migration",
      desc: "We implement proper 301 redirects, canonical tags, and metadata migration to protect your existing Google rankings during the redesign — ensuring you don't lose organic traffic from Mumbai or Pune searches.",
    },
    {
      title: "Core Web Vitals Improvement",
      desc: "Our rebuilds target 90+ scores across LCP, INP, and CLS — the three Core Web Vitals Google uses as ranking factors. Faster sites outrank slower competitors.",
    },
    {
      title: "Mobile-First Reconstruction",
      desc: "With 70%+ of Indian users on mobile, we prioritize mobile layouts first. Every redesign is tested across 20+ device sizes to ensure flawless display on all screens.",
    },
    {
      title: "Smooth Animations & Micro-Interactions",
      desc: "We integrate CSS transitions and subtle micro-interactions that make your website feel alive and premium — the kind of experience that builds trust with Mumbai and Pune customers instantly.",
    },
  ],
};

const faqData = [
  {
    question: "Why should I redesign my website?",
    answer:
      "If your website is more than 3 years old, loads slowly, isn't mobile-friendly, or isn't generating leads — it needs a redesign. Modern websites with fast load times and good UX rank higher on Google and convert significantly more visitors into customers.",
  },
  {
    question: "Will I lose my Google rankings during a website redesign?",
    answer:
      "Not if done correctly. We implement a thorough SEO migration plan — including 301 redirects for all changed URLs, canonical tags, metadata transfer, and sitemap updates — to protect your existing rankings in Mumbai and Pune searches.",
  },
  {
    question: "How much does website redesign cost in Mumbai?",
    answer:
      "Website redesign in Mumbai and Pune typically starts from ₹20,000 for a basic business website. Custom redesigns with React.js or Next.js start from ₹40,000. We provide a free website audit and detailed quote before starting.",
  },
  {
    question: "How long does a website redesign take?",
    answer:
      "A standard website redesign takes 3–6 weeks — covering UX audit, design (Figma), development, testing, and launch. We follow a structured process and keep you updated at every stage.",
  },
  {
    question: "Do you redesign WordPress websites?",
    answer:
      "Yes. We redesign websites built on WordPress, Wix, Squarespace, or any other platform — and can migrate them to a faster Next.js/React.js stack or keep them on WordPress with a modern, premium theme and optimized performance.",
  },
  {
    question: "Can you redesign my Pune-based business website remotely?",
    answer:
      "Absolutely. We work with clients across Mumbai, Pune, Navi Mumbai, and all of India remotely. All communication, approvals, and delivery happen online — with no compromise in quality or service.",
  },
];

export default function WebsiteRedesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/services/website-redesign#service",
        serviceType: "Website Redesign",
        name: "Website Redesign Services — Mumbai & Pune",
        description:
          "Professional website redesign services in Mumbai and Pune. We modernize outdated websites with improved UX, faster load speeds, mobile-first design, and SEO preservation.",
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
        url: "https://www.arcdigitalsolution.in/services/website-redesign",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.arcdigitalsolution.in/services" },
          { "@type": "ListItem", position: 3, name: "Website Redesign", item: "https://www.arcdigitalsolution.in/services/website-redesign" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
            <span className="text-primary-navy font-medium">Website Redesign</span>
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
              <span className={styles.label}>Website Redesign Company — Mumbai & Pune</span>
              <h1 className={styles.title}>{details.title}</h1>
              <p className={styles.subtitle}>{details.desc}</p>
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
                What&apos;s Included
              </h2>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  Free Website Audit (Speed + SEO + UX)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  High-Fidelity Figma Prototype
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  SEO-Preserving Migration (301 Redirects)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  Mobile-First Responsive Design
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  90+ Core Web Vitals Score Target
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20a%20free%20website%20audit%20and%20redesign%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceCta}
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Get Free Website Audit
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
              Our Website Redesign Process — Mumbai & Pune
            </h2>
            {details.features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl">
                <h3 className="text-lg font-bold font-heading mb-3 text-primary-navy">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="border-t border-gray-200 pt-16 mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">
              Frequently Asked Questions — Website Redesign in Mumbai & Pune
            </h2>
            <div className="flex flex-col gap-4">
              {faqData.map((faq, idx) => (
                <details key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="border-t border-gray-200 pt-12 mb-12">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
                { label: "Web Development Pune", href: "/web-development-company-pune" },
                { label: "Website Redesign Mumbai", href: "/website-redesign-mumbai" },
                { label: "Website Redesign Pune", href: "/website-redesign-pune" },
                { label: "SEO Services", href: "/services/seo-services" },
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
              Ready to Redesign Your Website in Mumbai or Pune?
            </h2>
            <p className="text-white/80 mb-6 text-sm">
              Get a free website audit and redesign consultation today. ARC Digital Solutions
              serves businesses across Mumbai, Pune, Navi Mumbai, and Thane.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Website%20Redesign"
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
                Call: +91 77199 02074
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
