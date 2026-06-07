import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowLeft, MapPin, Phone, MessageCircle, TrendingUp } from "lucide-react";
import styles from "../services.module.css";

export const metadata: Metadata = {
  title: "SEO Company Mumbai & Pune | Best SEO Services | ARC Digital Solutions",
  description:
    "Leading SEO company in Mumbai & Pune. Technical SEO, local SEO, Google Maps optimization, content strategy & link building. Get more organic traffic. Free SEO audit available — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/services/seo-services",
  },
  openGraph: {
    title: "SEO Company Mumbai & Pune | ARC Digital Solutions",
    description:
      "Expert SEO services in Mumbai and Pune. Technical SEO, local SEO, content strategy & link building. Free SEO audit. Rank higher, get more qualified leads.",
    url: "https://www.arcdigitalsolution.in/services/seo-services",
    type: "website",
    locale: "en_IN",
  },
};

const details = {
  title: "SEO Services",
  desc: "High organic traffic begins with a structured, search-first architecture. ARC Digital Solutions delivers data-driven SEO services in Mumbai and Pune — combining technical SEO audits, local SEO optimization, strategic content, and link building to help your business rank higher on Google and generate more qualified leads from Maharashtra and across India.",
  features: [
    {
      title: "Technical SEO Audits",
      desc: "We perform comprehensive technical audits: crawlability, indexability, Core Web Vitals, sitemap health, redirect chains, broken links, and canonical issues — fixing everything that prevents Google from properly ranking your Mumbai or Pune website.",
    },
    {
      title: "Local SEO & Google Maps Optimization",
      desc: "We optimize your Google Business Profile for Mumbai and Pune, build local citations across 50+ India directories, ensure NAP consistency, and implement LocalBusiness schema — driving visibility in the Local Pack and Google Maps for your target city.",
    },
    {
      title: "On-Page SEO & Content Strategy",
      desc: "We optimize title tags, meta descriptions, H1/H2 structure, internal linking, and keyword density across all pages — then build a content strategy targeting the exact queries your Mumbai and Pune customers are searching for.",
    },
    {
      title: "Structured Schema Markup",
      desc: "We implement custom JSON-LD schemas (LocalBusiness, Service, FAQPage, Article, BreadcrumbList) that unlock rich snippets in Google Search — doubling your SERP real estate and improving click-through rates by 20–40%.",
    },
    {
      title: "Link Building & Digital PR",
      desc: "We acquire high-authority backlinks from India-relevant platforms (YourStory, Inc42, Clutch, industry directories) and build a robust link profile that improves your domain authority and strengthens rankings for competitive Mumbai and Pune keywords.",
    },
    {
      title: "GEO + AEO — AI Search Optimization",
      desc: "We optimize your content for Google AI Overviews, ChatGPT, Gemini, and Perplexity — ensuring ARC Digital Solutions appears when potential clients ask AI engines to recommend web development companies in Mumbai or Pune.",
    },
  ],
};

const faqData = [
  {
    question: "How long does SEO take to show results in Mumbai or Pune?",
    answer:
      "SEO typically shows meaningful results in 3–6 months. Local SEO (Google Maps/Local Pack) for Mumbai and Pune often shows results faster — in 4–8 weeks with proper Google Business Profile optimization and citation building.",
  },
  {
    question: "Do you guarantee SEO rankings on Google's first page?",
    answer:
      "No ethical SEO company can guarantee specific rankings — Google's algorithm is outside anyone's control. We do guarantee consistent execution of proven SEO strategies, transparent monthly reporting, and measurable progress tracked via Google Search Console.",
  },
  {
    question: "What is the cost of SEO services in Mumbai?",
    answer:
      "Our SEO services in Mumbai and Pune start from ₹10,000/month for local SEO. Comprehensive SEO packages including technical SEO, content, and link building start from ₹20,000/month. We provide a free SEO audit and custom proposal.",
  },
  {
    question: "What is local SEO and why does my Mumbai business need it?",
    answer:
      "Local SEO helps your business appear in Google Maps, the Local Pack (top 3 map results), and local searches like 'web development company near me' in Mumbai. It's the fastest way for local businesses to get qualified inbound leads from nearby customers.",
  },
  {
    question: "Do you do technical SEO for Next.js websites?",
    answer:
      "Yes. We specialize in technical SEO for Next.js, React.js, and Spring Boot websites — including SSR/SSG optimization, Core Web Vitals improvement, structured data implementation, sitemap generation, and crawl budget optimization.",
  },
  {
    question: "What SEO tools do you use?",
    answer:
      "We use Google Search Console, Google Analytics 4, Ahrefs, Screaming Frog, PageSpeed Insights, and Semrush for comprehensive SEO analysis, rank tracking, backlink auditing, and performance reporting.",
  },
];

export default function SeoServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/services/seo-services#service",
        serviceType: "SEO Services",
        name: "SEO Services — Mumbai & Pune | ARC Digital Solutions",
        description:
          "Data-driven SEO services for businesses in Mumbai and Pune. Technical SEO, local SEO, Google Maps optimization, content strategy, and link building. Free SEO audit available.",
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
          name: "SEO Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO Mumbai" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO Pune" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Business Profile Optimization" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Link Building" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Strategy" } },
          ],
        },
        url: "https://www.arcdigitalsolution.in/services/seo-services",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.arcdigitalsolution.in/services" },
          { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://www.arcdigitalsolution.in/services/seo-services" },
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
            <span className="text-primary-navy font-medium">SEO Services</span>
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
              <span className={styles.label}>SEO Company — Mumbai & Pune</span>
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
                Our SEO Deliverables
              </h2>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  Free Technical SEO Audit Report
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  Google Business Profile Optimization
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  Local Citation Building (50+ Sites)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  Monthly Ranking & Traffic Reports
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <TrendingUp className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  AI Search Visibility (Gemini, Perplexity)
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20a%20free%20SEO%20audit%20for%20my%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceCta}
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Get Free SEO Audit
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
              Our SEO Services in Mumbai & Pune
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
              Frequently Asked Questions — SEO in Mumbai & Pune
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
                { label: "SEO Company Mumbai", href: "/seo-company-mumbai" },
                { label: "SEO Company Pune", href: "/seo-company-pune" },
                { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
                { label: "Digital Marketing Mumbai", href: "/digital-marketing-agency-mumbai" },
                { label: "Website Redesign", href: "/services/website-redesign" },
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
              Start Ranking Higher in Mumbai & Pune Today
            </h2>
            <p className="text-white/80 mb-6 text-sm">
              Get a free SEO audit and discover exactly what&apos;s holding your website back.
              ARC Digital Solutions — SEO company serving Mumbai, Pune, and all of Maharashtra.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20a%20free%20SEO%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp for Free SEO Audit
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
