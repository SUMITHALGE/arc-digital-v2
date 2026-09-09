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
  title: "Web Development Company in Pune | ARC Digital Solutions",
  description:
    "Top web development company in Pune. Custom websites, React.js apps, Next.js, e-commerce, SEO-ready development for Pune startups & businesses. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-pune",
  },
  openGraph: {
    title: "Web Development Company Pune | ARC Digital Solutions",
    description:
      "Best web development company in Pune. React.js, Next.js, custom websites, e-commerce & SEO services. Trusted by 100+ businesses across Pune & Maharashtra. Free consultation.",
    url: "https://www.arcdigitalsolution.in/web-development-company-pune",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "web development company in pune",
    "website development company pune",
    "web developer pune",
    "website developer pune",
    "react js development company pune",
    "next js development pune",
    "custom website development pune",
    "ecommerce website development pune",
    "web design company pune",
    "website design pune",
    "best web development company pune",
    "affordable web development pune",
    "startup website development pune",
  ],
};

const services = [
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Custom Website Development",
    desc: "We build fully custom, performance-optimized websites for Pune businesses — from corporate sites and landing pages to complex web portals. Every website is mobile-first, SEO-ready, and built with clean, maintainable code that drives real results.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "React.js & Next.js Development",
    desc: "Expert React.js and Next.js development for Pune startups and enterprises. We build blazing-fast, SEO-optimized web applications with server-side rendering, dynamic routing, and enterprise-grade architecture that scales as your business grows.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "Mobile App Development",
    desc: "From React Native cross-platform apps to progressive web apps (PWA), we build mobile-first digital products for Pune businesses. One codebase, iOS and Android — reducing development cost without compromising on quality or performance.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-accent-blue" />,
    title: "E-Commerce Development",
    desc: "Full-featured e-commerce websites for Pune businesses with secure payment gateways, inventory management, order tracking, and admin panels. Whether you sell locally or across India, we build stores that convert visitors into customers.",
  },
  {
    icon: <Search className="w-6 h-6 text-accent-blue" />,
    title: "SEO-First Development",
    desc: "Every website we build in Pune is engineered for search engines from day one — proper HTML semantics, schema markup, Core Web Vitals optimization, sitemap, robots.txt, and keyword-rich content structure that ranks on Google.",
  },
  {
    icon: <Palette className="w-6 h-6 text-accent-blue" />,
    title: "UI/UX Design",
    desc: "We design beautiful, conversion-focused user interfaces for Pune businesses. From wireframes to polished designs, our UI/UX process is driven by user psychology and business goals — ensuring visitors stay, engage, and convert.",
  },
];

const faqs = [
  {
    question: "Which is the best web development company in Pune?",
    answer:
      "ARC Digital Solutions is one of Pune's top web development companies, specializing in React.js, Next.js, custom websites, and e-commerce development. Founded by Sumit Halge, we have delivered 100+ projects for Pune startups, SMEs, and enterprises — with a focus on performance, SEO, and measurable business results.",
  },
  {
    question: "How much does website development cost in Pune?",
    answer:
      "Website development cost in Pune typically ranges from ₹15,000 for a basic business website to ₹1,00,000+ for complex web applications or e-commerce portals. At ARC Digital Solutions, a standard business website starts at ₹20,000, React.js web apps from ₹40,000, and e-commerce sites from ₹35,000. All quotes are free and detailed.",
  },
  {
    question: "Do you develop websites for startups in Pune?",
    answer:
      "Yes. We work extensively with Pune startups, offering flexible pricing, fast delivery, and startup-friendly engagement models. We understand the startup ecosystem in Pune — from Hinjewadi to Viman Nagar — and build scalable digital products that grow with your business.",
  },
  {
    question: "How long does it take to build a website in Pune?",
    answer:
      "A standard business website takes 1-2 weeks. A React.js web application takes 3-6 weeks depending on complexity. E-commerce websites take 3-4 weeks. We provide a detailed project timeline before starting and adhere to deadlines — no endless delays.",
  },
  {
    question: "Do you provide website maintenance after launch in Pune?",
    answer:
      "Yes. We offer ongoing website maintenance, updates, bug fixes, performance monitoring, and content updates for Pune clients. Monthly maintenance packages start from ₹3,000/month and include security patches, uptime monitoring, and regular backups.",
  },
  {
    question: "Can you redesign my existing website in Pune?",
    answer:
      "Absolutely. Website redesign is one of our most popular services in Pune. We analyze your existing site — its performance, SEO, design, and user experience — then rebuild it with modern technology, better performance scores, and improved conversion rate. Redesign projects start from ₹25,000.",
  },
];

export default function WebDevPunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/web-development-company-pune#service",
        serviceType: "Web Development",
        name: "Web Development Company in Pune — ARC Digital Solutions",
        description:
          "Top web development company in Pune offering custom website development, React.js, Next.js, e-commerce, mobile apps, and SEO services for Pune startups and businesses.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Pimpri-Chinchwad" },
          { "@type": "City", name: "Hinjewadi" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/web-development-company-pune",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Web Development Company Pune", item: "https://www.arcdigitalsolution.in/web-development-company-pune" },
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
            <span className="text-primary-navy font-medium">Web Development Company Pune</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Pune", "Pimpri-Chinchwad", "Hinjewadi", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" />{loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
                Web Development Company — Pune
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Web Development Company in Pune
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is a trusted web development company in Pune, delivering custom websites, React.js web applications, mobile apps, and e-commerce solutions for Pune startups, SMEs, and enterprises. 100+ projects delivered. Free consultation available.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Pune"
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
                Why Choose ARC Digital for Web Development in Pune?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "100+ Projects Delivered Across Pune & Maharashtra",
                  "React.js, Next.js & Custom Website Experts",
                  "SEO-First Development — Rank on Google",
                  "Mobile App Development (iOS, Android, React Native)",
                  "E-Commerce with Secure Payment Gateways",
                  "On-Time Delivery — No Delays",
                  "Affordable Pricing for Pune Startups",
                  "In-Person Meetings Available in Pune",
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
              Our Web Development Services in Pune
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              From simple business websites to complex web applications and mobile apps — ARC Digital Solutions is your one-stop web development partner in Pune.
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
            Tech Stack We Use for Pune Web Projects
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
              Website Development Pricing in Pune
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">Transparent, startup-friendly pricing. No hidden charges.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Business Website", price: "₹20,000+", features: ["5-10 Pages", "Mobile Responsive", "SEO Optimized", "Contact Form", "1 Month Support"] },
                { name: "React.js Web App", price: "₹40,000+", features: ["Custom UI/UX", "API Integration", "Authentication", "Admin Dashboard", "3 Months Support"], highlight: true },
                { name: "E-Commerce Store", price: "₹35,000+", features: ["Product Catalog", "Payment Gateway", "Order Management", "Mobile App Ready", "3 Months Support"] },
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
                    href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20interested%20in%20web%20development%20in%20Pune"
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
            Frequently Asked Questions — Web Development in Pune
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
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "App Development Pune", href: "/app-development-company-pune" },
              { label: "React Development Pune", href: "/react-development-pune" },
              { label: "Spring Boot Development Pune", href: "/spring-boot-development-pune" },
              { label: "SEO Services Pune", href: "/seo-company-pune" },
              { label: "Website Redesign Pune", href: "/website-redesign-pune" },
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
              Need a Website or Web App in Pune?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free consultation with ARC Digital Solutions — Pune&apos;s trusted web development company. No commitment, no pressure. Just honest advice and a detailed quote.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Pune"
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
