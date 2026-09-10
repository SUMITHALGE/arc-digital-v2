import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, RefreshCw, Zap, Search, Smartphone, TrendingUp, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Redesign Company in Pune | ARC Digital Solutions",
  description:
    "Expert website redesign company in Pune. Modern UI/UX, faster load speed, better SEO, mobile-first redesign for Pune startups & businesses. Free audit — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/website-redesign-pune",
  },
  openGraph: {
    title: "Website Redesign Pune | ARC Digital Solutions",
    description:
      "Best website redesign company in Pune. Modern design, Core Web Vitals, SEO migration, mobile-first. Serving Hinjewadi, Baner, Kothrud. Free audit.",
    url: "https://www.arcdigitalsolution.in/website-redesign-pune",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "website redesign pune",
    "website redesign company pune",
    "website revamp pune",
    "website makeover pune",
    "modern website design pune",
    "website upgrade pune",
    "wordpress redesign pune",
    "website redesign hinjewadi pune",
  ],
};

const services = [
  {
    icon: <Palette className="w-6 h-6 text-accent-blue" />,
    title: "Modern UI/UX Redesign",
    desc: "Transform your outdated Pune website with a modern, premium design — built to impress, engage, and convert. We redesign with purpose: every visual element aligned to your business goals and Pune audience expectations.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "Performance Optimization",
    desc: "We rebuild your Pune website for speed — image optimization, lazy loading, code splitting, and CDN integration. Typical result: 60-80% faster load time, improved Core Web Vitals, and better Google ranking signals.",
  },
  {
    icon: <Search className="w-6 h-6 text-accent-blue" />,
    title: "SEO-Safe Migration",
    desc: "Redesigning your Pune website without losing Google rankings is our expertise. We handle 301 redirects, maintain URL structure, resubmit sitemaps, and monitor Search Console post-launch — Pune clients often see ranking improvements after our redesigns.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "Mobile-First Redesign",
    desc: "Pune's digital audience is predominantly mobile. We redesign with a mobile-first philosophy — pixel-perfect on all screen sizes, touch-friendly interactions, and full compliance with Google's mobile usability standards.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
    title: "Conversion Rate Optimization",
    desc: "A redesign should convert more visitors into leads. We implement CRO best practices — WhatsApp quick-connect, strategic CTAs, trust signals, testimonials, and optimized contact flows to maximize client inquiries from Pune traffic.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-accent-blue" />,
    title: "Technology Upgrade",
    desc: "Migrate from outdated WordPress, Wix, or legacy code to modern Next.js or React.js — giving your Pune business a faster, more maintainable, and SEO-optimized foundation that scales as you grow.",
  },
];

const faqs = [
  {
    question: "How much does website redesign cost in Pune?",
    answer:
      "Website redesign in Pune ranges from ₹25,000 for a design refresh to ₹70,000+ for a full rebuild with new technology. ARC Digital Solutions provides free audits and detailed quotes before any commitment. Startup-friendly payment plans available.",
  },
  {
    question: "How long does a website redesign take for a Pune business?",
    answer:
      "Standard redesigns take 2-4 weeks. Complex rebuilds (e.g., WordPress to Next.js with e-commerce) take 5-8 weeks. We share a project timeline before starting and adhere strictly to deadlines — no endless delays typical with Pune freelancers.",
  },
  {
    question: "Will my Google rankings drop after a website redesign in Pune?",
    answer:
      "Not with ARC Digital Solutions. We implement strict SEO-preservation protocols — 301 redirects for all changed URLs, canonical tags, sitemap resubmission, and Search Console monitoring for 30 days post-launch. Most Pune clients see rankings improve after our redesigns.",
  },
  {
    question: "Can you redesign my WordPress website in Pune?",
    answer:
      "Yes. We either redesign your existing WordPress site with a fresh, high-performance theme and improved structure, or migrate it to Next.js for superior speed and SEO. We assess your goals and recommend the right approach for your Pune business.",
  },
  {
    question: "Do you serve Pune areas like Hinjewadi, Baner, and Kothrud?",
    answer:
      "Yes. We serve all of Pune — Hinjewadi, Baner, Kothrud, Wakad, Viman Nagar, Kharadi, Hadapsar, Shivajinagar, and beyond. We can meet in person for project discovery and maintain communication throughout the redesign process.",
  },
  {
    question: "What does ARC Digital Solutions include in a website redesign?",
    answer:
      "Our Pune redesign projects include: new custom design mockups, full development, content migration, SEO preservation (redirects, sitemap), mobile optimization, speed optimization, Google Analytics 4 setup, and 1-3 months of post-launch support depending on the package.",
  },
];

export default function WebsiteRedesignPunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/website-redesign-pune#service",
        serviceType: "Website Redesign",
        name: "Website Redesign Company in Pune — ARC Digital Solutions",
        description:
          "Expert website redesign company in Pune — modern UI/UX, performance optimization, SEO-safe migration, and mobile-first redesign for Pune businesses.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "Place", name: "Hinjewadi" },
          { "@type": "Place", name: "Baner" },
          { "@type": "City", name: "Pimpri-Chinchwad" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/website-redesign-pune",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Website Redesign Pune", item: "https://www.arcdigitalsolution.in/website-redesign-pune" },
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
            <span className="text-primary-navy font-medium">Website Redesign Pune</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Pune", "Hinjewadi", "Baner", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" />{loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
                Website Redesign Company — Pune
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Website Redesign Company in Pune
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Is your Pune business website outdated, slow, or failing to generate leads? ARC Digital Solutions transforms old websites into high-performing, modern digital assets — faster, more beautiful, better ranked on Google, and built to convert Pune visitors into clients.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20website%20redesign%20in%20Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Free Website Audit
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
                Does Your Pune Website Have These Problems?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Looks outdated vs Pune competitors",
                  "Page load time over 3 seconds",
                  "Not mobile-friendly or responsive",
                  "Visitors leave without calling or filling a form",
                  "Hard to update content yourself",
                  "Poor Google rankings — not on page 1",
                  "No WhatsApp button on mobile",
                  "Built on Wix or old WordPress theme",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors"
              >
                Get Free Redesign Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Website Redesign Services in Pune
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              We don&apos;t just change how your Pune website looks — we rebuild it to perform better on every metric that matters.
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

        {/* Pricing */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Website Redesign Pricing — Pune</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Startup-friendly pricing for Pune businesses. Free quote — no commitment.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Refresh", price: "₹25,000+", features: ["New Design (Same Platform)", "Mobile Optimization", "Speed Improvements", "On-Page SEO Fixes", "1 Month Support"] },
              { name: "Rebuild", price: "₹40,000+", features: ["Full Rebuild (Next.js/React)", "Custom UI/UX Design", "SEO Migration + Redirects", "Performance Optimization", "3 Months Support"], highlight: true },
              { name: "Enterprise", price: "₹70,000+", features: ["Complex / E-commerce Sites", "Custom Functionality", "Full CRO Implementation", "Advanced SEO Setup", "6 Months Support"] },
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
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20interested%20in%20website%20redesign%20in%20Pune"
                  target="_blank" rel="noopener noreferrer"
                  className={`mt-6 block text-center px-4 py-3 font-semibold rounded-xl transition-colors ${plan.highlight ? "bg-accent-blue text-white hover:bg-blue-700" : "bg-primary-navy text-white hover:bg-blue-900"}`}
                >
                  Get Free Quote
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
              FAQs — Website Redesign in Pune
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="border border-gray-200 rounded-xl p-6">
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services & Locations</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Website Redesign Mumbai", href: "/website-redesign-mumbai" },
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "SEO Company Pune", href: "/seo-company-pune" },
              { label: "Website Redesign Services", href: "/services/website-redesign" },
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
              Ready to Transform Your Pune Website?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free website audit — we&apos;ll show you exactly what&apos;s hurting your performance and how a redesign will bring more Pune clients to your door.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20website%20redesign%20in%20Pune"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />WhatsApp for Free Audit
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
