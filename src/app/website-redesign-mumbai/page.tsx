import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, RefreshCw, Zap, Search, Smartphone, TrendingUp, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Redesign Company in Mumbai | ARC Digital Solutions",
  description:
    "Expert website redesign company in Mumbai. Modern UI/UX, faster page speed, better SEO rankings, mobile-first redesign for Mumbai businesses. Free audit — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/website-redesign-mumbai",
  },
  openGraph: {
    title: "Website Redesign Mumbai | ARC Digital Solutions",
    description:
      "Best website redesign company in Mumbai. Modern design, faster load times, improved SEO, mobile-first. Transform your outdated site. Free redesign audit.",
    url: "https://www.arcdigitalsolution.in/website-redesign-mumbai",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "website redesign mumbai",
    "website redesign company mumbai",
    "website revamp mumbai",
    "website makeover mumbai",
    "old website redesign mumbai",
    "modern website design mumbai",
    "website upgrade mumbai",
  ],
};

const services = [
  {
    icon: <Palette className="w-6 h-6 text-accent-blue" />,
    title: "Modern UI/UX Redesign",
    desc: "Transform your outdated Mumbai website into a visually stunning, conversion-focused design. We redesign with purpose — every element serves a business goal — using modern design systems, clean typography, and user psychology-driven layouts.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "Performance Optimization",
    desc: "Slow websites lose Mumbai customers. We rebuild your site for speed — optimized images, lazy loading, code splitting, CDN integration, and Core Web Vitals improvement. Typical result: 60-80% faster load times.",
  },
  {
    icon: <Search className="w-6 h-6 text-accent-blue" />,
    title: "SEO-Preserving Migration",
    desc: "Redesigning without losing your Google rankings is our specialty. We handle 301 redirects, preserve SEO equity, maintain sitemap integrity, and implement improved on-page SEO — so your Mumbai site redesign results in better rankings, not lower ones.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "Mobile-First Redesign",
    desc: "Over 70% of Mumbai's internet traffic is mobile. We redesign your site with a mobile-first approach — perfect rendering on all devices, touch-optimized interactions, and Google's mobile usability standards fully met.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
    title: "Conversion Rate Optimization",
    desc: "A redesigned site should convert better. We implement CRO best practices — clear CTAs, trust signals, WhatsApp integration, lead capture forms, and landing page A/B testing — turning Mumbai visitors into leads and clients.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-accent-blue" />,
    title: "Technology Upgrade",
    desc: "Migrate from WordPress, Wix, or legacy PHP to modern Next.js or React.js — getting you a faster, more maintainable, and infinitely scalable foundation for your Mumbai business website.",
  },
];

const faqs = [
  {
    question: "How much does website redesign cost in Mumbai?",
    answer:
      "Website redesign in Mumbai costs ₹25,000 for a basic business site refresh to ₹80,000+ for a complete rebuild with new technology and SEO migration. At ARC Digital Solutions, redesign projects start from ₹25,000. We provide a free audit and detailed quote before starting.",
  },
  {
    question: "How long does a website redesign take for a Mumbai business?",
    answer:
      "A standard website redesign takes 2-4 weeks. Complex redesigns with technology migrations (e.g., WordPress to Next.js) or large e-commerce sites take 4-8 weeks. We provide a detailed timeline before starting and adhere to it.",
  },
  {
    question: "Will my Google rankings drop after a website redesign?",
    answer:
      "Not with us. We follow strict SEO-preserving redesign protocols — proper 301 redirects for all URL changes, sitemap resubmission to Google, Search Console monitoring post-launch, and improved on-page SEO. Our Mumbai redesign clients typically see ranking improvements, not drops.",
  },
  {
    question: "Can you redesign my WordPress website in Mumbai?",
    answer:
      "Yes. We can redesign your existing WordPress site with a fresh theme and improved structure, or migrate it entirely to Next.js for superior performance. We assess your specific needs and recommend the best approach for your Mumbai business goals.",
  },
  {
    question: "Do you offer a free website audit before redesigning?",
    answer:
      "Yes. We provide a free website audit covering design quality, page speed, SEO health, mobile responsiveness, and conversion rate — showing you exactly what needs to improve. Contact us on WhatsApp to get your free audit within 24 hours.",
  },
  {
    question: "What's included in a website redesign project at ARC Digital Solutions Mumbai?",
    answer:
      "Our Mumbai redesign projects include: new design mockups, full development, content migration, SEO preservation (301 redirects, sitemap), mobile optimization, performance optimization, Google Analytics setup, and 1-month post-launch support.",
  },
];

export default function WebsiteRedesignMumbaiPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/website-redesign-mumbai#service",
        serviceType: "Website Redesign",
        name: "Website Redesign Company in Mumbai — ARC Digital Solutions",
        description:
          "Expert website redesign company in Mumbai — modern UI/UX, performance optimization, SEO-preserving migration, and mobile-first redesign for Mumbai businesses.",
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
        url: "https://www.arcdigitalsolution.in/website-redesign-mumbai",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Website Redesign Mumbai", item: "https://www.arcdigitalsolution.in/website-redesign-mumbai" },
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
            <span className="text-primary-navy font-medium">Website Redesign Mumbai</span>
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
                Website Redesign Company — Mumbai
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Website Redesign Company in Mumbai
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Is your Mumbai business website outdated, slow, or not converting visitors into clients? ARC Digital Solutions specializes in website redesign for Mumbai businesses — modern design, faster performance, better SEO, and higher conversions. Free audit in 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20website%20redesign%20in%20Mumbai"
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
                Signs You Need a Website Redesign
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Website looks outdated compared to competitors",
                  "Page load speed is over 3 seconds",
                  "Not mobile-friendly or responsive",
                  "Low conversion rate — visitors leave without calling",
                  "Difficult to update or manage content",
                  "Poor Google rankings and low organic traffic",
                  "No WhatsApp/Call button on mobile",
                  "Built on Wix, outdated WordPress, or static HTML",
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
              Website Redesign Services in Mumbai
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              We don&apos;t just make your website look better — we rebuild it to perform better, rank better, and convert better.
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
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Website Redesign Pricing — Mumbai</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Transparent pricing. No hidden costs. Free quote before we start.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Refresh", price: "₹25,000+", features: ["New Design (Same Platform)", "Mobile Optimization", "Speed Improvements", "SEO Audit & Fixes", "1 Month Support"] },
              { name: "Rebuild", price: "₹45,000+", features: ["Full Rebuild (New Tech)", "Custom UI/UX Design", "SEO Migration + Redirects", "Performance Optimization", "3 Months Support"], highlight: true },
              { name: "Enterprise", price: "₹80,000+", features: ["Complex Sites / E-commerce", "Custom Functionality", "Full CRO Implementation", "Advanced SEO Setup", "6 Months Support"] },
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
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20interested%20in%20website%20redesign%20in%20Mumbai"
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
              FAQs — Website Redesign in Mumbai
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
              { label: "Website Redesign Pune", href: "/website-redesign-pune" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "SEO Company Mumbai", href: "/seo-company-mumbai" },
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
              Ready to Transform Your Mumbai Website?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free website audit — we&apos;ll identify every issue and show you exactly how a redesign will improve your traffic, rankings, and client inquiries.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20website%20redesign%20in%20Mumbai"
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
