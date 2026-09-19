import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Globe, Code2, Search, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Hinjawadi, Pune | ARC Digital Solutions",
  description:
    "Leading web development company in Hinjawadi IT Park, Pune. Custom websites, React.js, Spring Boot for IT companies & startups. SEO-optimized, fast delivery. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-hinjawadi",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/web-development-company-hinjawadi" },
  },
  keywords: [
    "web development company hinjawadi",
    "website development hinjawadi pune",
    "web developer hinjawadi",
    "IT company website development hinjawadi",
    "react js development hinjawadi",
    "startup website development hinjawadi",
    "seo services hinjawadi pune",
    "digital marketing hinjawadi",
  ],
  openGraph: {
    title: "Web Development Company Hinjawadi, Pune | ARC Digital Solutions",
    description: "Best web development for IT companies & startups in Hinjawadi IT Park. React.js, Spring Boot, SEO. Free consultation.",
    url: "https://www.arcdigitalsolution.in/web-development-company-hinjawadi",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://www.arcdigitalsolution.in/assets/og-image.jpg", width: 1200, height: 630, alt: "Web Development Company Hinjawadi Pune — ARC Digital Solutions" }],
  },
  twitter: { card: "summary_large_image", site: "@arcdigital", creator: "@arcdigital", title: "Web Development Company Hinjawadi Pune | ARC Digital Solutions", description: "React.js, Spring Boot & SEO for Hinjawadi IT companies. Free consultation.", images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"] },
};

const services = [
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "IT Company Website Development", desc: "Specialised website development for Hinjawadi IT companies, SaaS startups, and tech firms. Enterprise-grade Next.js applications with clean architecture, fast load times, and professional design that matches your tech brand." },
  { icon: <Code2 className="w-6 h-6 text-accent-blue" />, title: "React.js & Spring Boot Apps", desc: "Full-stack development for Hinjawadi startups — React.js frontend with Spring Boot microservices backend. The same stack used by Pune's leading IT companies, built for performance and scalability." },
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "B2B SEO for Hinjawadi Firms", desc: "Technical and content SEO strategies targeting B2B buyers and enterprise clients. Rank your Hinjawadi IT company for relevant service keywords and attract high-value inbound leads from across India." },
  { icon: <Smartphone className="w-6 h-6 text-accent-blue" />, title: "Mobile App Development", desc: "React Native mobile app development for Hinjawadi startups. Cross-platform iOS and Android apps built with enterprise-grade Spring Boot APIs — launch faster with a single codebase." },
];

const faqs = [
  { question: "Which web development company serves Hinjawadi IT Park, Pune?", answer: "ARC Digital Solutions provides web development services for IT companies, startups, and SMEs in Hinjawadi IT Park. We specialize in React.js, Next.js, Spring Boot development, and B2B SEO — helping Hinjawadi businesses establish strong digital presences and generate qualified leads." },
  { question: "How much does website development cost for an IT company in Hinjawadi?", answer: "IT company website development in Hinjawadi starts from ₹25,000 for standard corporate websites. Custom React.js web applications with Spring Boot APIs start from ₹60,000. Enterprise portals and SaaS products are quoted based on scope. All quotes are fixed-price with no hidden fees." },
  { question: "Can you build a Spring Boot REST API for our startup in Hinjawadi?", answer: "Yes. ARC Digital Solutions has dedicated Spring Boot expertise. We build secure, scalable REST APIs and microservices for Hinjawadi startups — with JWT authentication, role-based access control, database integration (MySQL/PostgreSQL), and cloud deployment on AWS or Railway." },
  { question: "Do you provide SEO services for IT companies in Hinjawadi?", answer: "Absolutely. We offer specialized B2B SEO for Hinjawadi IT companies — targeting decision-makers and enterprise buyers with technical content, authority link building, and local SEO that positions your company as a credible vendor in Pune's tech ecosystem." },
  { question: "How quickly can you deliver a website for our Hinjawadi company?", answer: "A standard IT company corporate website is typically delivered in 2–4 weeks. Custom web applications with backend APIs take 4–10 weeks. We use 2-week Agile sprints, so you see working prototypes throughout the project — no long wait for a big final reveal." },
];

export default function HinjawadiPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.arcdigitalsolution.in/web-development-company-hinjawadi#business",
        name: "ARC Digital Solutions — Web Development Hinjawadi",
        url: "https://www.arcdigitalsolution.in/web-development-company-hinjawadi",
        image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        description: "ARC Digital Solutions provides expert website development, React.js applications, Spring Boot APIs, and SEO services for IT companies and startups in Hinjawadi IT Park, Pune.",
        telephone: "+91-7719902074",
        email: "hello@arcdigitalsolution.in",
        address: { "@type": "PostalAddress", addressLocality: "Hinjawadi", addressRegion: "Maharashtra", postalCode: "411057", addressCountry: "IN" },
        areaServed: [{ "@type": "City", name: "Hinjawadi" }, { "@type": "City", name: "Wakad" }, { "@type": "City", name: "Pune" }],
        parentOrganization: { "@id": "https://www.arcdigitalsolution.in/#business" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Web Development Pune", item: "https://www.arcdigitalsolution.in/web-development-company-pune" },
          { "@type": "ListItem", position: 3, name: "Web Development Hinjawadi", item: "https://www.arcdigitalsolution.in/web-development-company-hinjawadi" },
        ],
      },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <div className="min-h-screen bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:underline">Home</Link><span>/</span>
            <Link href="/web-development-company-pune" className="hover:underline">Web Development Pune</Link><span>/</span>
            <span className="font-medium text-primary-navy">Hinjawadi</span>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-widest mb-4">Web Development Company — Hinjawadi IT Park, Pune</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-primary-navy mb-6 leading-tight">
              Web Development Company<br />in Hinjawadi, Pune
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              ARC Digital Solutions is the go-to web development company for IT companies, SaaS startups, and tech firms
              in Hinjawadi IT Park, Pune. We build React.js and Next.js web applications, Spring Boot APIs, and deliver
              B2B SEO strategies that help Hinjawadi companies rank higher and win enterprise clients.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Hinjawadi", "Wakad", "Baner", "Pimpri-Chinchwad", "Pune"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  <MapPin className="w-3 h-3" />{loc}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Hinjawadi%20Pune" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Free Consultation
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-accent-blue text-gray-700 hover:text-accent-blue font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> +91 77199 02074
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">Our Services for Hinjawadi Businesses</h2>
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-bold font-heading text-primary-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Hinjawadi IT Companies Choose ARC Digital</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["React.js + Spring Boot — the enterprise tech stack", "B2B SEO designed for IT company buyers", "Fixed-price projects, no billing surprises", "Agile delivery with 2-week sprint demos", "OWASP security-first development practices", "100+ projects delivered across Maharashtra"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">FAQ — Web Development in Hinjawadi</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}<span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold font-heading text-primary-navy mb-4">Also Serving Nearby Pune Areas</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Web Development Pune", href: "/web-development-company-pune" },
                { label: "Web Development Wakad", href: "/web-development-company-wakad" },
                { label: "Web Development Baner", href: "/web-development-company-baner" },
                { label: "SEO Services Pune", href: "/seo-company-pune" },
                { label: "React Development Pune", href: "/react-development-pune" },
                { label: "Spring Boot Development Pune", href: "/spring-boot-development-pune" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Ready to Build Your Hinjawadi Business Online?</h2>
            <p className="text-white/80 mb-6 text-sm">Free discovery call with our Pune-based team. Fixed pricing, no surprises.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20a%20Hinjawadi%20company%20looking%20for%20web%20development" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30">
                <Phone className="w-4 h-4" /> Call: +91 77199 02074
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
