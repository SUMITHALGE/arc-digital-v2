import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, BarChart2, Search, TrendingUp, Star, Globe, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Company in Pune | ARC Digital Solutions",
  description:
    "Top SEO company in Pune. Technical SEO, local SEO for Pune businesses, Google ranking, content strategy, link building. Free SEO audit — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/seo-company-pune",
  },
  openGraph: {
    title: "SEO Company Pune | ARC Digital Solutions",
    description:
      "Best SEO company in Pune. Technical SEO, local SEO for Hinjewadi, Baner, Kothrud. Get your Pune business to page 1 on Google. Free audit.",
    url: "https://www.arcdigitalsolution.in/seo-company-pune",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "seo company pune",
    "seo agency pune",
    "seo services pune",
    "best seo company in pune",
    "local seo pune",
    "google ranking pune",
    "seo expert pune",
    "technical seo pune",
    "seo hinjewadi pune",
  ],
};

const services = [
  {
    icon: <Search className="w-6 h-6 text-accent-blue" />,
    title: "Technical SEO",
    desc: "Full technical SEO for Pune websites — Core Web Vitals, page speed, structured data, crawl error fixes, mobile optimization, and indexability. We ensure Google can find, crawl, and rank every page of your Pune website.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-accent-blue" />,
    title: "Local SEO Pune",
    desc: "Rank your Pune business on Google Maps and in local search results — Hinjewadi, Baner, Kothrud, Wakad, Viman Nagar, Hadapsar. Google Business Profile optimization, local citations, and NAP consistency to dominate local searches.",
  },
  {
    icon: <FileText className="w-6 h-6 text-accent-blue" />,
    title: "On-Page SEO & Content",
    desc: "Targeted keyword research for Pune&apos;s market, on-page optimization of title tags, meta descriptions, headers, internal links, and content — all aligned to how Pune customers search on Google.",
  },
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Link Building",
    desc: "Ethical, high-authority backlink building from relevant Indian and global websites. Guest posts, digital PR, and business directories — building domain authority for sustainable ranking growth in Pune's competitive market.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
    title: "Startup & IT Company SEO",
    desc: "Specialized SEO for Pune's thriving startup and IT ecosystem — Hinjewadi IT Park, Baner, Kharadi. We understand the B2B and SaaS landscape and craft SEO strategies that attract high-value enterprise clients.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-accent-blue" />,
    title: "SEO Reporting",
    desc: "Monthly ranking reports, organic traffic analytics, conversion tracking, and competitor benchmarking. Full transparency — you know every rupee invested and every keyword moving up.",
  },
];

const faqs = [
  {
    question: "Which is the best SEO company in Pune?",
    answer:
      "ARC Digital Solutions is a leading SEO company in Pune, delivering measurable results for startups, IT companies, and local businesses. We specialize in technical SEO, local SEO for Pune areas (Hinjewadi, Baner, Kothrud), and content-driven strategies that get Pune businesses to page 1 on Google.",
  },
  {
    question: "How much do SEO services cost in Pune?",
    answer:
      "SEO services in Pune range from ₹8,000/month for local SEO to ₹30,000+/month for enterprise campaigns. At ARC Digital Solutions, packages start from ₹10,000/month with clear deliverables, monthly reporting, and no hidden fees.",
  },
  {
    question: "How long does it take to rank on Google in Pune?",
    answer:
      "For local Pune keywords, initial improvements are visible in 2-3 months. Ranking in top 3 for competitive terms takes 4-8 months. Google Maps visibility can improve within 4-6 weeks with proper local SEO work.",
  },
  {
    question: "Do you provide SEO for IT companies in Hinjewadi Pune?",
    answer:
      "Yes. We have specific experience with B2B and IT company SEO in Pune's IT hubs — Hinjewadi, Baner, Kharadi. We understand the buyer journey for enterprise software, SaaS products, and IT services, and build content and keyword strategies that attract the right decision-makers.",
  },
  {
    question: "Do you offer a free SEO audit for Pune businesses?",
    answer:
      "Yes. We provide a free SEO audit for Pune businesses — analyzing your technical health, keyword gaps, competitor rankings, and opportunity areas. Contact us on WhatsApp or call to get your audit within 24 hours.",
  },
  {
    question: "Can your SEO services help my Pune startup grow faster?",
    answer:
      "Absolutely. SEO is a compounding growth channel. For Pune startups, we focus on quick-win opportunities — local keywords, long-tail searches, and competitor gap analysis — to start generating organic leads within 60-90 days while building for long-term ranking dominance.",
  },
];

export default function SeoPunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/seo-company-pune#service",
        serviceType: "SEO Services",
        name: "SEO Company in Pune — ARC Digital Solutions",
        description:
          "Top SEO company in Pune offering technical SEO, local SEO, content strategy, and link building for Pune businesses and startups.",
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
        url: "https://www.arcdigitalsolution.in/seo-company-pune",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "SEO Company Pune", item: "https://www.arcdigitalsolution.in/seo-company-pune" },
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
            <span className="text-primary-navy font-medium">SEO Company Pune</span>
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
                SEO Company — Pune
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                SEO Company in Pune
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is Pune&apos;s trusted SEO company — helping businesses across Hinjewadi, Baner, Kothrud, and all of Pune rank higher on Google, get more organic traffic, and win more clients through data-driven search engine optimization.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20SEO%20services%20in%20Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Free SEO Audit
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
                Why Choose ARC Digital for SEO in Pune?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Free SEO Audit — Within 24 Hours",
                  "Technical SEO + Core Web Vitals",
                  "Local SEO — Hinjewadi, Baner, Kothrud",
                  "IT Company & Startup SEO Expertise",
                  "Transparent Monthly Ranking Reports",
                  "Google Business Profile Optimization",
                  "Ethical Link Building",
                  "In-Person Meetings in Pune Available",
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
                Request Free SEO Audit
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Our SEO Services in Pune
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              Full-spectrum SEO for Pune businesses — from technical foundations to content strategy and link building.
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
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">SEO Packages for Pune Businesses</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Startup-friendly pricing. No long-term lock-in. Real results.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Local SEO", price: "₹10,000/mo", features: ["Google Business Optimization", "5 Local Keywords", "On-Page SEO (5 pages)", "Monthly Report", "Citation Building"] },
              { name: "Growth SEO", price: "₹20,000/mo", features: ["Everything in Local", "15 Target Keywords", "Content (2 blogs/mo)", "Link Building (5/mo)", "Competitor Analysis"], highlight: true },
              { name: "Enterprise SEO", price: "₹35,000/mo", features: ["Everything in Growth", "30+ Keywords", "Technical SEO Overhaul", "10+ Links/mo", "Weekly Reports + Calls"] },
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
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20interested%20in%20SEO%20services%20in%20Pune"
                  target="_blank" rel="noopener noreferrer"
                  className={`mt-6 block text-center px-4 py-3 font-semibold rounded-xl transition-colors ${plan.highlight ? "bg-accent-blue text-white hover:bg-blue-700" : "bg-primary-navy text-white hover:bg-blue-900"}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
              Frequently Asked Questions — SEO in Pune
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
              { label: "SEO Company Mumbai", href: "/seo-company-mumbai" },
              { label: "SEO Company Aurangabad", href: "/seo-company-chhatrapati-sambhajinagar" },
              { label: "Digital Marketing Pune", href: "/digital-marketing-agency-pune" },
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "SEO Services", href: "/services/seo-services" },
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
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold font-heading mb-3">
              Ready to Dominate Google in Pune?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free SEO audit for your Pune business — we&apos;ll show you the exact steps to reach page 1.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20SEO%20services%20in%20Pune"
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
