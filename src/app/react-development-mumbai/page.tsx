import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Code2, Zap, Shield, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "React.js Developer in Mumbai | React Development Company Mumbai | ARC Digital Solutions",
  description:
    "Expert React.js development company in Mumbai. React.js web apps, Next.js, TypeScript, Redux for Mumbai startups & enterprises. Free consultation — ARC Digital Solutions.",
  alternates: { canonical: "https://www.arcdigitalsolution.in/react-development-mumbai" },
  openGraph: {
    title: "React.js Development Company Mumbai | ARC Digital Solutions",
    description: "Top React.js development company in Mumbai. Next.js, TypeScript, REST APIs for Mumbai startups & enterprises. Free consultation.",
    url: "https://www.arcdigitalsolution.in/react-development-mumbai",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "react development company mumbai", "react js developer mumbai", "reactjs development mumbai",
    "next js development mumbai", "react developer mumbai", "frontend development company mumbai",
    "typescript development mumbai", "redux developer mumbai", "react web app development mumbai",
  ],
};

const services = [
  { icon: <Code2 className="w-6 h-6 text-accent-blue" />, title: "React.js Web Application Development", desc: "Enterprise-grade React.js applications for Mumbai's fast-paced market. We build scalable, performant React apps with modern architecture — custom hooks, code splitting, lazy loading, and optimized re-rendering for applications that handle thousands of concurrent users." },
  { icon: <Zap className="w-6 h-6 text-accent-blue" />, title: "Next.js Development", desc: "SEO-optimized Next.js applications with server-side rendering and static site generation. Critical for Mumbai businesses in competitive niches — faster page loads, better Google rankings, and superior Core Web Vitals scores." },
  { icon: <Server className="w-6 h-6 text-accent-blue" />, title: "React + Spring Boot Full-Stack", desc: "Unified product development — React.js frontend + Spring Boot backend API. One team, consistent architecture, seamless integration. Ideal for Mumbai fintech, healthtech, and SaaS startups building scalable products." },
  { icon: <Shield className="w-6 h-6 text-accent-blue" />, title: "React Performance Optimization", desc: "We optimize existing React applications for Mumbai companies — Lighthouse audit, bundle analysis, memoization, virtual DOM optimization, and CDN configuration. Typical results: 40-60% improvement in Core Web Vitals scores." },
];

const faqs = [
  { question: "Do you have React.js developers available in Mumbai?", answer: "Yes. ARC Digital Solutions has dedicated React.js developers serving Mumbai clients. We build React web applications for Mumbai startups, financial institutions, e-commerce platforms, and enterprises — with a focus on performance, SEO, and scalability." },
  { question: "What is the cost of React.js development in Mumbai?", answer: "React.js web app development in Mumbai starts from ₹35,000 for a simple application. Full-stack React + Spring Boot applications range from ₹75,000-3,00,000+ depending on complexity. Next.js SEO sites start from ₹45,000. All quotes are free and detailed." },
  { question: "Do you build Next.js applications in Mumbai?", answer: "Yes. Next.js is our preferred framework for React projects requiring SEO — server-side rendering, static generation, image optimization, and App Router architecture. We've delivered Next.js applications for Mumbai businesses across real estate, fintech, and edtech." },
  { question: "Can you work with our existing React.js codebase in Mumbai?", answer: "Yes. We frequently work with existing React codebases — adding features, refactoring legacy code, improving performance, fixing bugs, and modernizing architecture. We begin with a code audit (free) to assess the current state before proposing a roadmap." },
  { question: "Do you use TypeScript for React projects in Mumbai?", answer: "Yes. All our production React projects use TypeScript — providing type safety, better IDE support, fewer runtime bugs, and significantly improved code maintainability for your Mumbai engineering team." },
];

export default function ReactDevMumbaiPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": "https://www.arcdigitalsolution.in/react-development-mumbai#service", serviceType: "React.js Development", name: "React.js Development Company in Mumbai — ARC Digital Solutions", description: "Expert React.js and Next.js development company in Mumbai. React web apps, full-stack development, and performance optimization.", provider: { "@type": "Organization", "@id": "https://www.arcdigitalsolution.in/#business", name: "ARC Digital Solutions" }, areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }, { "@type": "State", name: "Maharashtra" }], url: "https://www.arcdigitalsolution.in/react-development-mumbai" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" }, { "@type": "ListItem", position: 2, name: "React Development Mumbai", item: "https://www.arcdigitalsolution.in/react-development-mumbai" }] },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <div className="min-h-screen bg-[#FAFAF8]">
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">React Development Mumbai</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Mumbai", "Navi Mumbai", "Thane", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"><MapPin className="w-3 h-3" />{loc}</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">React.js Development — Mumbai</span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">React.js Development Company in Mumbai</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions delivers enterprise-grade React.js and Next.js development for Mumbai startups, fintech companies, and enterprises. High-performance React apps, full-stack platforms, and optimization services — built by specialists who understand Mumbai&apos;s competitive digital market.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20React%20development%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp Free Consultation</a>
                <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors"><Phone className="w-4 h-4" />+91 77199 02074</a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why ARC Digital for React Dev in Mumbai?</h2>
              <ul className="flex flex-col gap-4">
                {["React.js 18 + Next.js 15 — Latest Stack", "TypeScript-First Development", "React + Spring Boot Full-Stack Capability", "Core Web Vitals — Lighthouse 90+ Scores", "Fintech & Enterprise React Experience", "GraphQL & REST API Integration", "Code Audits & Performance Optimization", "Mumbai-Based — In-Person Meetings"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors">Request a Free Quote</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">React.js Development Services in Mumbai</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">From startup MVPs to enterprise React platforms — comprehensive React.js expertise for Mumbai businesses.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold font-heading text-primary-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">FAQ — React Development in Mumbai</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="border border-gray-200 rounded-xl p-6">
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">{faq.question}<span className="text-accent-blue text-xl font-light flex-shrink-0">+</span></summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services & Locations</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "React Development Pune", href: "/react-development-pune" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "App Development Mumbai", href: "/app-development-company-mumbai" },
              { label: "Spring Boot Development Mumbai", href: "/spring-boot-development-mumbai" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Need a React.js Developer in Mumbai?</h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">Free technical consultation with ARC Digital Solutions. We&apos;ll assess your requirements and recommend the best React architecture for your Mumbai product.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20React%20development%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp Now</a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"><Phone className="w-4 h-4" />Call: +91 77199 02074</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
