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
  title: "Web Development Company in Chhatrapati Sambhajinagar | ARC Digital Solutions",
  description:
    "Best web development company in Chhatrapati Sambhajinagar (Aurangabad). Custom websites, React.js apps, mobile app development, e-commerce & SEO for CSN businesses. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-chhatrapati-sambhajinagar",
  },
  openGraph: {
    title: "Web Development Company Chhatrapati Sambhajinagar | ARC Digital Solutions",
    description:
      "Top web development company in Chhatrapati Sambhajinagar (Aurangabad). Custom websites, React.js, mobile apps & SEO. Free consultation — ARC Digital Solutions.",
    url: "https://www.arcdigitalsolution.in/web-development-company-chhatrapati-sambhajinagar",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "web development company in chhatrapati sambhajinagar",
    "web development company aurangabad",
    "website development company chhatrapati sambhajinagar",
    "website developer aurangabad",
    "web developer chhatrapati sambhajinagar",
    "react development chhatrapati sambhajinagar",
    "website design aurangabad",
    "web design company aurangabad",
    "app development company aurangabad",
    "digital marketing aurangabad",
    "seo company aurangabad",
    "best web development company aurangabad",
    "affordable website development aurangabad",
    "startup website development chhatrapati sambhajinagar",
  ],
};

const services = [
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Custom Website Development",
    desc: "We build professional, high-performance websites for businesses in Chhatrapati Sambhajinagar — from corporate websites and landing pages to full-featured web portals. Every site is mobile-responsive, fast, SEO-optimized, and built to bring genuine business from Google.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "React.js & Next.js Development",
    desc: "Modern React.js and Next.js web applications for businesses and startups in Chhatrapati Sambhajinagar. We build dynamic, server-side rendered web apps with outstanding performance, SEO rankings, and user experience that converts visitors to customers.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps for businesses in Chhatrapati Sambhajinagar using React Native. One app for both iOS and Android at a fraction of the cost — perfect for local businesses wanting to reach customers on their phones.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-accent-blue" />,
    title: "E-Commerce Website Development",
    desc: "Complete e-commerce solutions for Aurangabad and CSN businesses — product catalogs, secure payment gateways (Razorpay, PayU), order management, and mobile-ready stores. Start selling online across Maharashtra and all of India.",
  },
  {
    icon: <Search className="w-6 h-6 text-accent-blue" />,
    title: "SEO & Digital Marketing",
    desc: "Get your Chhatrapati Sambhajinagar business on page 1 of Google. We provide complete SEO services — on-page optimization, schema markup, Google Business Profile optimization, local SEO, and content strategy targeting your city and region.",
  },
  {
    icon: <Palette className="w-6 h-6 text-accent-blue" />,
    title: "UI/UX Design",
    desc: "Beautiful, professional UI/UX design for businesses in Chhatrapati Sambhajinagar. We design websites and apps that reflect your brand, build trust with local customers, and drive real business growth.",
  },
];

const faqs = [
  {
    question: "Is there a good web development company in Chhatrapati Sambhajinagar?",
    answer:
      "ARC Digital Solutions serves Chhatrapati Sambhajinagar (formerly Aurangabad) with expert web development, app development, and digital marketing services. Based in Maharashtra, we understand the local market and deliver high-quality digital solutions for CSN businesses — from small shops to large enterprises.",
  },
  {
    question: "How much does website development cost in Aurangabad / Chhatrapati Sambhajinagar?",
    answer:
      "A basic business website starts from ₹15,000. A professional multi-page website is ₹20,000-30,000. E-commerce websites start from ₹35,000. React.js web applications from ₹40,000. Mobile apps from ₹50,000. All prices are transparent with no hidden charges. Free quotes available.",
  },
  {
    question: "Can you build a website for my business in Chhatrapati Sambhajinagar remotely?",
    answer:
      "Yes. We serve clients across Maharashtra including Chhatrapati Sambhajinagar, Jalna, Latur, and Nanded. All communication happens via WhatsApp, video calls, and email. We have a proven process for remote project delivery — frequent updates, shared project boards, and demo links at every stage.",
  },
  {
    question: "Do you build websites for Chhatrapati Sambhajinagar businesses in Marathi?",
    answer:
      "Yes. We can build bilingual websites (English + Marathi) for Chhatrapati Sambhajinagar businesses — including Marathi content, Marathi fonts, and local SEO targeting Marathwada region. This is especially effective for businesses serving the local market.",
  },
  {
    question: "How can a website help my business in Chhatrapati Sambhajinagar grow?",
    answer:
      "A professionally built, SEO-optimized website puts your Chhatrapati Sambhajinagar business in front of people who are actively searching for your services on Google. With proper local SEO, you can appear at the top of search results for 'your service + Aurangabad' — generating genuine, high-intent leads daily without spending on ads.",
  },
  {
    question: "Do you provide after-sales support for CSN businesses?",
    answer:
      "Yes. We offer ongoing monthly support packages starting at ₹2,500/month — covering updates, bug fixes, security patches, and performance monitoring. We're available on WhatsApp for quick support during business hours.",
  },
];

export default function WebDevCSNPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/web-development-company-chhatrapati-sambhajinagar#service",
        serviceType: "Web Development",
        name: "Web Development Company in Chhatrapati Sambhajinagar — ARC Digital Solutions",
        description:
          "Best web development company serving Chhatrapati Sambhajinagar (Aurangabad). Custom websites, React.js, mobile apps, e-commerce and SEO for CSN businesses.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
        },
        areaServed: [
          { "@type": "City", name: "Chhatrapati Sambhajinagar" },
          { "@type": "City", name: "Aurangabad" },
          { "@type": "City", name: "Jalna" },
          { "@type": "City", name: "Latur" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/web-development-company-chhatrapati-sambhajinagar",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Web Development Chhatrapati Sambhajinagar", item: "https://www.arcdigitalsolution.in/web-development-company-chhatrapati-sambhajinagar" },
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
            <span className="text-primary-navy font-medium">Web Development Company Chhatrapati Sambhajinagar</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Chhatrapati Sambhajinagar", "Aurangabad", "Jalna", "Marathwada"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" />{loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
                Web Development Company — Chhatrapati Sambhajinagar
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Web Development Company in Chhatrapati Sambhajinagar
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions delivers professional websites, React.js web applications, mobile apps, and e-commerce solutions for businesses in Chhatrapati Sambhajinagar (Aurangabad) and across Marathwada. Get found on Google, generate more leads, and grow your business online.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Chhatrapati%20Sambhajinagar"
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
                Why Choose ARC Digital for Web Development in CSN?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "100+ Projects Delivered Across Maharashtra",
                  "Affordable Pricing — Startup & SME Friendly",
                  "Bilingual Websites (English + Marathi)",
                  "SEO-First — Get Found on Google Locally",
                  "Mobile App Development (iOS & Android)",
                  "E-Commerce with Indian Payment Gateways",
                  "WhatsApp Support — Always Reachable",
                  "Remote Delivery with Regular Updates",
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
              Our Web Development Services in Chhatrapati Sambhajinagar
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              Complete digital solutions for businesses in Chhatrapati Sambhajinagar — websites, apps, e-commerce, and SEO that bring you real customers.
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
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
            Website Development Pricing for CSN Businesses
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Affordable and transparent. No hidden charges. Free quotes within 24 hours.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Business Website", price: "₹15,000+", features: ["3-5 Pages", "Mobile Responsive", "SEO Optimized", "WhatsApp Button", "1 Month Support"] },
              { name: "Professional Website", price: "₹25,000+", features: ["10+ Pages", "Custom Design", "Local SEO", "Contact Forms", "3 Months Support"], highlight: true },
              { name: "E-Commerce Store", price: "₹35,000+", features: ["Product Catalog", "Payment Gateway", "Order Management", "Mobile Ready", "3 Months Support"] },
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
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20interested%20in%20web%20development%20for%20my%20business%20in%20Chhatrapati%20Sambhajinagar"
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
              FAQ — Web Development in Chhatrapati Sambhajinagar
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
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "App Development Aurangabad", href: "/app-development-company-chhatrapati-sambhajinagar" },
              { label: "SEO Services Aurangabad", href: "/seo-company-chhatrapati-sambhajinagar" },
              { label: "Digital Marketing Aurangabad", href: "/digital-marketing-agency-chhatrapati-sambhajinagar" },
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
              Grow Your Business Online in Chhatrapati Sambhajinagar
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free consultation with ARC Digital Solutions. We build websites that rank on Google and bring you genuine clients — not just traffic. WhatsApp us now.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Chhatrapati%20Sambhajinagar"
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
