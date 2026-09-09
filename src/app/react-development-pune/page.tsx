import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Code2, Zap, Shield, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "React.js Developer in Pune | React Development Company Pune | ARC Digital Solutions",
  description:
    "Expert React.js development company in Pune. React.js web apps, Next.js, Redux, REST API integration for Pune startups & businesses. Free consultation — ARC Digital Solutions.",
  alternates: { canonical: "https://www.arcdigitalsolution.in/react-development-pune" },
  openGraph: {
    title: "React.js Development Company Pune | ARC Digital Solutions",
    description: "Top React.js development company in Pune. Next.js, Redux, TypeScript & REST APIs for Pune startups. Free consultation.",
    url: "https://www.arcdigitalsolution.in/react-development-pune",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "react development company pune", "react js developer pune", "reactjs development pune",
    "next js development pune", "react developer pune", "frontend development company pune",
    "react native developer pune", "typescript development pune", "redux development pune",
    "react web app development pune",
  ],
};

const services = [
  { icon: <Code2 className="w-6 h-6 text-accent-blue" />, title: "React.js Web Application Development", desc: "Scalable, component-based React.js web applications for Pune businesses. We architect React apps with best practices — custom hooks, context API, efficient state management, lazy loading, and code splitting for blazing-fast performance." },
  { icon: <Zap className="w-6 h-6 text-accent-blue" />, title: "Next.js Development", desc: "Server-side rendered (SSR) and statically generated (SSG) Next.js applications that are SEO-friendly and lightning-fast. Perfect for Pune businesses wanting the performance of a web app with the discoverability of a content site." },
  { icon: <Server className="w-6 h-6 text-accent-blue" />, title: "React + Spring Boot Full-Stack", desc: "Complete full-stack development — React.js frontend with Spring Boot REST API backend. One team handles everything from UI to database — perfectly integrated, consistently architected, and production-ready." },
  { icon: <Shield className="w-6 h-6 text-accent-blue" />, title: "React App Optimization & Refactoring", desc: "Is your existing React app slow or hard to maintain? We audit, refactor, and optimize React codebases — improving performance scores, reducing bundle size, fixing memory leaks, and modernizing architecture for Pune engineering teams." },
];

const faqs = [
  { question: "Do you have React.js developers in Pune?", answer: "Yes. ARC Digital Solutions has dedicated React.js and Next.js developers in Pune. We build production-grade React applications for Pune startups, product companies, and enterprises — with a focus on performance, SEO, and clean, maintainable code." },
  { question: "What is the cost of React.js development in Pune?", answer: "A simple React.js web app starts from ₹30,000. A full-stack React + Spring Boot application ranges from ₹60,000-2,00,000+ depending on features. Next.js SEO-optimized sites start from ₹40,000. All quotes are free and itemized." },
  { question: "Do you use TypeScript for React development in Pune?", answer: "Yes. We use TypeScript for all production React projects — providing better type safety, fewer runtime errors, improved IDE support, and significantly more maintainable code for your Pune engineering team." },
  { question: "Can you integrate React.js with an existing backend in Pune?", answer: "Absolutely. We integrate React.js frontends with any backend — Spring Boot REST APIs, Node.js, Django, Laravel, or any third-party API. We handle authentication (JWT/OAuth), real-time features (WebSockets), and complex data flows." },
  { question: "Do you optimize existing React apps for Pune companies?", answer: "Yes. React app optimization is one of our key services — Core Web Vitals improvement, bundle size reduction, lazy loading, memoization, and code splitting. We've improved Lighthouse scores by 30-50 points for existing Pune React applications." },
];

export default function ReactDevPunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": "https://www.arcdigitalsolution.in/react-development-pune#service", serviceType: "React.js Development", name: "React.js Development Company in Pune — ARC Digital Solutions", description: "Expert React.js and Next.js development company in Pune. React web apps, full-stack development, and optimization.", provider: { "@type": "Organization", "@id": "https://www.arcdigitalsolution.in/#business", name: "ARC Digital Solutions" }, areaServed: [{ "@type": "City", name: "Pune" }, { "@type": "State", name: "Maharashtra" }], url: "https://www.arcdigitalsolution.in/react-development-pune" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" }, { "@type": "ListItem", position: 2, name: "React Development Pune", item: "https://www.arcdigitalsolution.in/react-development-pune" }] },
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
            <span className="text-primary-navy font-medium">React Development Pune</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Pune", "Hinjewadi", "Baner", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"><MapPin className="w-3 h-3" />{loc}</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">React.js Development — Pune</span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">React.js Development Company in Pune</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is a specialist React.js and Next.js development company in Pune. We build high-performance, SEO-optimized React web applications and full-stack platforms for Pune startups, product companies, and enterprises.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20React%20development%20in%20Pune" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                  <MessageCircle className="w-4 h-4" />WhatsApp Free Consultation
                </a>
                <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors">
                  <Phone className="w-4 h-4" />+91 77199 02074
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Choose ARC for React Dev in Pune?</h2>
              <ul className="flex flex-col gap-4">
                {["React.js 18 + Next.js 15 Expertise", "TypeScript-First Development", "React + Spring Boot Full-Stack", "Redux, Zustand & Context API State Mgmt", "Core Web Vitals & Lighthouse Optimization", "REST API & GraphQL Integration", "Component Library Development", "Code Reviews & Architecture Consulting"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors">Request a Free Quote</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">React.js Development Services in Pune</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">From new React.js applications to optimizing existing codebases — comprehensive React expertise for Pune teams.</p>
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

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">React Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React.js 18", "Next.js 15", "TypeScript", "JavaScript", "Redux Toolkit", "Zustand", "React Query", "Tailwind CSS", "Spring Boot", "Node.js", "REST APIs", "GraphQL", "Jest / RTL", "Vite", "Webpack", "Vercel / AWS"].map((tech) => (
              <div key={tech} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 text-center">{tech}</div>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">FAQ — React Development in Pune</h2>
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
              { label: "React Development Mumbai", href: "/react-development-mumbai" },
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "App Development Pune", href: "/app-development-company-pune" },
              { label: "Spring Boot Development Pune", href: "/spring-boot-development-pune" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Need a React.js Developer in Pune?</h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">Free technical consultation with ARC Digital Solutions. We&apos;ll review your requirements and propose the best React architecture for your Pune project.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20React%20development%20in%20Pune" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp Now</a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"><Phone className="w-4 h-4" />Call: +91 77199 02074</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
