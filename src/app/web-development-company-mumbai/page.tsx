import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  Globe,
  Smartphone,
  Search,
  ShoppingCart,
  Palette,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Mumbai | ARC Digital Solutions",
  description:
    "Leading web development company in Mumbai. Custom websites, React.js, Next.js, mobile apps & e-commerce for Mumbai startups & businesses. 100+ projects delivered. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-mumbai",
  },
  openGraph: {
    title: "Web Development Company Mumbai | ARC Digital Solutions",
    description:
      "Best web development company in Mumbai. React.js, Next.js, custom websites, e-commerce & mobile apps. Trusted by 100+ businesses across Mumbai & Maharashtra. Free consultation.",
    url: "https://www.arcdigitalsolution.in/web-development-company-mumbai",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "web development company in mumbai",
    "website development company mumbai",
    "web developer mumbai",
    "website developer mumbai",
    "react js development company mumbai",
    "next js development mumbai",
    "custom website development mumbai",
    "ecommerce website development mumbai",
    "web design company mumbai",
    "best web development company mumbai",
    "affordable web development mumbai",
    "startup website development mumbai",
    "app development company mumbai",
  ],
};

const services = [
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Custom Website Development",
    desc: "We build fully custom, high-performance websites for Mumbai businesses — from corporate sites to complex web portals. Every site is mobile-responsive, fast-loading, SEO-optimized, and built to convert visitors into customers.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "React.js & Next.js Development",
    desc: "Cutting-edge React.js and Next.js web applications for Mumbai startups and enterprises. Server-side rendering, blazing-fast performance, dynamic user experiences, and SEO-ready architecture — built to compete in Mumbai's fast-paced digital market.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps using React Native for Mumbai businesses. iOS and Android from a single codebase — faster delivery, lower cost, without compromising the native experience your users expect.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-accent-blue" />,
    title: "E-Commerce Development",
    desc: "Feature-rich e-commerce platforms for Mumbai's retail and wholesale businesses — with Razorpay/PayU payment gateways, inventory management, order tracking, and scalable architecture that handles high traffic.",
  },
  {
    icon: <Search className="w-6 h-6 text-accent-blue" />,
    title: "SEO-First Development",
    desc: "Every website we build in Mumbai is engineered for Google from line one — Core Web Vitals, schema markup, semantic HTML, sitemap, canonical tags, and page speed optimization. We build sites that rank, not just look good.",
  },
  {
    icon: <Palette className="w-6 h-6 text-accent-blue" />,
    title: "UI/UX Design",
    desc: "Premium UI/UX design for Mumbai businesses that commands trust and drives conversions. From wireframes to pixel-perfect Figma designs, we create digital experiences that reflect your brand's ambition.",
  },
];

const faqs = [
  {
    question: "Which is the best web development company in Mumbai?",
    answer:
      "ARC Digital Solutions is one of Mumbai's leading web development companies, specializing in React.js, Next.js, custom websites, mobile apps, and e-commerce development. Founded by Sumit Halge, we have delivered 100+ projects for Mumbai startups, SMEs, and enterprises across Andheri, BKC, Navi Mumbai, Thane, and beyond.",
  },
  {
    question: "How much does website development cost in Mumbai?",
    answer:
      "Website development costs in Mumbai vary by project type. A business website starts from ₹20,000. React.js web applications from ₹40,000. E-commerce websites from ₹35,000. Mobile apps from ₹50,000. At ARC Digital Solutions, all quotes are free, transparent, and detailed — no hidden charges.",
  },
  {
    question: "How long does it take to build a website in Mumbai?",
    answer:
      "A standard business website takes 1-2 weeks. React.js web applications take 3-6 weeks. E-commerce sites take 3-4 weeks. Mobile apps take 6-12 weeks depending on complexity. We provide clear timelines upfront and stick to them.",
  },
  {
    question: "Do you work with startups in Mumbai?",
    answer:
      "Yes. We work extensively with Mumbai startups — from pre-seed ideation to Series A-funded companies. Our experience spans fintech, edtech, healthtech, real estate, and consumer products. We offer startup-friendly pricing, equity-for-work discussions, and flexible engagement models.",
  },
  {
    question: "Can you redesign my existing website in Mumbai?",
    answer:
      "Absolutely. We specialize in website redesign for Mumbai businesses — analyzing your current site's performance, SEO, design, and conversion metrics, then rebuilding it with modern technology and better UX. Redesign projects typically improve Core Web Vitals by 40-60% and organic traffic within 3 months.",
  },
  {
    question: "Do you provide ongoing support for websites in Mumbai?",
    answer:
      "Yes. Monthly support plans for Mumbai clients start at ₹3,000/month — covering performance monitoring, security updates, content changes, bug fixes, and Google Search Console management. We're a long-term partner, not a one-time vendor.",
  },
];

export default function WebDevMumbaiPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/web-development-company-mumbai#service",
        serviceType: "Web Development",
        name: "Web Development Company in Mumbai — ARC Digital Solutions",
        description:
          "Leading web development company in Mumbai. Custom websites, React.js, Next.js, mobile apps and e-commerce development for Mumbai startups and businesses.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/web-development-company-mumbai",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Web Development Company Mumbai", item: "https://www.arcdigitalsolution.in/web-development-company-mumbai" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAF8]">
        {/* Hero */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">Web Development Company Mumbai</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Mumbai", "Navi Mumbai", "Thane", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" />{loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
                Web Development Company — Mumbai
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Web Development Company in Mumbai
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is a leading web development company in Mumbai, delivering custom websites, React.js apps, mobile applications, and e-commerce solutions for Mumbai businesses. 100+ projects delivered across Mumbai, Navi Mumbai, and Thane.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Free Consultation
                </a>
                <a
                  href="tel:+917719902074"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 77199 02074
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">
                Why Choose ARC Digital for Web Development in Mumbai?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "100+ Projects Delivered Across Mumbai & Maharashtra",
                  "React.js, Next.js & Spring Boot Expertise",
                  "SEO-First Development — Rank on Google",
                  "Mobile App Development (React Native)",
                  "E-Commerce with Razorpay / PayU Integration",
                  "Core Web Vitals Optimized — Fast Loading",
                  "Startup-Friendly Pricing & Flexible Packages",
                  "Mumbai-Based — In-Person Meetings Available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors"
              >
                Request a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Our Web Development Services in Mumbai
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              Full-spectrum digital solutions for Mumbai businesses — from a simple landing page to a complex SaaS platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Tech Stack */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
            Tech Stack We Use for Mumbai Web Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React.js", "Next.js", "TypeScript", "JavaScript",
              "Spring Boot", "Node.js", "Java", "REST APIs",
              "MySQL", "PostgreSQL", "MongoDB", "AWS",
              "Docker", "Tailwind CSS", "Vercel", "GitHub",
            ].map((tech) => (
              <div key={tech} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 text-center">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Website Development Cost in Mumbai
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">Transparent pricing. No hidden charges. Free detailed quotes.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Business Website", price: "₹20,000+", features: ["5-10 Pages", "Mobile Responsive", "SEO Optimized", "Contact Form", "1 Month Support"] },
                { name: "React.js Web App", price: "₹40,000+", features: ["Custom UI/UX", "API Integration", "Authentication", "Admin Dashboard", "3 Months Support"], highlight: true },
                { name: "E-Commerce Store", price: "₹35,000+", features: ["Product Catalog", "Razorpay / PayU", "Order Management", "Mobile Ready", "3 Months Support"] },
              ].map((plan) => (
                <div key={plan.name} className={`rounded-2xl p-8 border ${plan.highlight ? "border-accent-blue bg-blue-50" : "border-gray-200 bg-white"}`}>
                  <h3 className="text-lg font-bold font-heading text-primary-navy mb-1">{plan.name}</h3>
                  <p className={`text-3xl font-bold mb-6 ${plan.highlight ? "text-accent-blue" : "text-primary-navy"}`}>{plan.price}</p>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20interested%20in%20web%20development%20in%20Mumbai"
                    target="_blank" rel="noopener noreferrer"
                    className={`mt-6 block text-center px-4 py-3 font-semibold rounded-xl transition-colors ${plan.highlight ? "bg-accent-blue text-white hover:bg-blue-700" : "bg-primary-navy text-white hover:bg-blue-900"}`}
                  >
                    Get Free Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
            Frequently Asked Questions — Web Development in Mumbai
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border border-gray-200 rounded-xl p-6 bg-white">
                <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services & Locations</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "App Development Mumbai", href: "/app-development-company-mumbai" },
              { label: "React Development Mumbai", href: "/react-development-mumbai" },
              { label: "Spring Boot Development Mumbai", href: "/spring-boot-development-mumbai" },
              { label: "SEO Services Mumbai", href: "/seo-company-mumbai" },
              { label: "Website Redesign Mumbai", href: "/website-redesign-mumbai" },
              { label: "Web Development Aurangabad", href: "/web-development-company-chhatrapati-sambhajinagar" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">
              Need a Website or Web App in Mumbai?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Free consultation with ARC Digital Solutions — Mumbai&apos;s trusted web development company. Get a detailed quote within 24 hours. No commitment required.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Mumbai"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />WhatsApp Now
              </a>
              <a
                href="tel:+917719902074"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
              >
                <Phone className="w-4 h-4" />Call: +91 77199 02074
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
