import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Megaphone, Target, TrendingUp, BarChart2, Mail, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pune | ARC Digital Solutions",
  description:
    "Top digital marketing agency in Pune. SEO, Google Ads, social media, content marketing for Pune startups & businesses. Free strategy session — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/digital-marketing-agency-pune",
  },
  openGraph: {
    title: "Digital Marketing Agency Pune | ARC Digital Solutions",
    description:
      "Best digital marketing agency in Pune. SEO, Google Ads, social media for Hinjewadi, Baner, Kothrud businesses. Grow online. Free strategy session.",
    url: "https://www.arcdigitalsolution.in/digital-marketing-agency-pune",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "digital marketing agency pune",
    "digital marketing company pune",
    "online marketing pune",
    "google ads agency pune",
    "social media marketing pune",
    "seo and digital marketing pune",
    "best digital marketing agency pune",
    "digital marketing hinjewadi pune",
  ],
};

const services = [
  {
    icon: <Target className="w-6 h-6 text-accent-blue" />,
    title: "Google Ads (PPC)",
    desc: "Result-driven Google Search and Display ad campaigns for Pune businesses — keyword targeting, compelling ad copy, conversion-optimized landing pages. We generate measurable leads from your target Pune audience from day one.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
    title: "SEO for Pune Businesses",
    desc: "Long-term organic growth through technical SEO, local SEO for Hinjewadi, Baner, Kothrud, and content-driven keyword strategy. We get your Pune business to the top of Google — and keep it there.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-accent-blue" />,
    title: "Social Media Marketing",
    desc: "Instagram, LinkedIn, and Facebook marketing for Pune brands — content creation, paid social campaigns, and community management. Reach Pune's growing digital audience and build a brand that converts.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-accent-blue" />,
    title: "Content Marketing",
    desc: "SEO blogs, case studies, and landing pages tailored to Pune's market — attracting organic traffic and positioning your brand as an authority for Pune's startup ecosystem, IT companies, and local businesses.",
  },
  {
    icon: <Mail className="w-6 h-6 text-accent-blue" />,
    title: "Email Marketing",
    desc: "Automated lead nurturing, newsletters, and product emails for Pune businesses. Convert your Pune audience from cold leads to paying clients with strategic email sequences and drip campaigns.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-accent-blue" />,
    title: "Analytics & Reporting",
    desc: "Monthly performance reports with organic traffic, ad spend ROI, keyword rankings, and conversion data — complete transparency on every campaign. You always know what&apos;s working for your Pune business.",
  },
];

const faqs = [
  {
    question: "Which is the best digital marketing agency in Pune?",
    answer:
      "ARC Digital Solutions is a leading digital marketing agency in Pune — delivering measurable growth through SEO, Google Ads, social media, and content marketing. We specialize in Pune's startup ecosystem and IT market, helping businesses in Hinjewadi, Baner, Kothrud, and across Pune acquire more clients online.",
  },
  {
    question: "How much do digital marketing services cost in Pune?",
    answer:
      "Digital marketing in Pune ranges from ₹12,000/month for basic SEO + social media to ₹50,000+/month for comprehensive campaigns. ARC Digital Solutions offers startup-friendly packages from ₹12,000/month with clear monthly deliverables and KPIs — no hidden fees.",
  },
  {
    question: "Do you run Google Ads for Pune startups and IT companies?",
    answer:
      "Yes. We manage Google Ads campaigns specifically for Pune's startup and IT ecosystem — targeting B2B decision-makers, SaaS buyers, and enterprise clients. We understand Pune's Hinjewadi and Baner IT market and craft campaigns that reach the right audience.",
  },
  {
    question: "Can you help my Pune business rank on Google?",
    answer:
      "Absolutely. Our SEO services for Pune businesses cover technical SEO, local SEO (Google Maps), content strategy, and link building. For local businesses, we also optimize Google Business Profile for area-specific searches across Hinjewadi, Baner, Kothrud, Wakad, and all Pune suburbs.",
  },
  {
    question: "How quickly can I see results from digital marketing in Pune?",
    answer:
      "Google Ads delivers immediate leads from week one. Social media growth shows meaningful engagement in 30-60 days. SEO results build over 2-4 months and compound long-term. We provide a realistic roadmap and monthly reports so you can track progress from the start.",
  },
  {
    question: "Do you offer integrated digital marketing packages for Pune businesses?",
    answer:
      "Yes. Our most effective Pune packages combine SEO + Google Ads + Social Media — giving you both immediate paid results and sustainable organic growth simultaneously. This multi-channel approach gives Pune businesses the fastest and most cost-effective client acquisition.",
  },
];

export default function DigitalMarketingPunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/digital-marketing-agency-pune#service",
        serviceType: "Digital Marketing",
        name: "Digital Marketing Agency in Pune — ARC Digital Solutions",
        description:
          "Top digital marketing agency in Pune — SEO, Google Ads, social media marketing, content strategy for Pune startups, IT companies, and local businesses.",
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
        url: "https://www.arcdigitalsolution.in/digital-marketing-agency-pune",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Digital Marketing Agency Pune", item: "https://www.arcdigitalsolution.in/digital-marketing-agency-pune" },
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
            <span className="text-primary-navy font-medium">Digital Marketing Agency Pune</span>
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
                Digital Marketing Agency — Pune
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Digital Marketing Agency in Pune
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is Pune&apos;s trusted digital marketing agency — helping startups, IT companies, and local businesses in Hinjewadi, Baner, Kothrud, and across Pune grow online through SEO, Google Ads, social media, and content marketing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20digital%20marketing%20in%20Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Free Strategy Call
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
                Why Choose ARC Digital for Marketing in Pune?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "SEO + Ads + Social — Full-Service Agency",
                  "Pune Startup & IT Market Expertise",
                  "Results-Focused — ROI Over Vanity Metrics",
                  "Transparent Monthly Reports",
                  "Local SEO — Hinjewadi, Baner, Kothrud",
                  "Google-Certified Campaign Management",
                  "In-Person Meetings in Pune Available",
                  "Free Strategy Session — No Commitment",
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
                Book Free Strategy Session
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Digital Marketing Services in Pune
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              From getting found on Google to converting visitors into clients — full-stack digital marketing for Pune businesses.
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

        {/* Results */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">Results for Pune Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "4x", label: "Lead Growth", desc: "Average lead generation increase for Pune clients within 90 days" },
              { metric: "Page 1", label: "Google Rankings", desc: "Target keywords ranked on Google page 1 for Pune businesses" },
              { metric: "2.5x", label: "ROAS on Google Ads", desc: "Average return on ad spend for Pune campaign management" },
            ].map((stat) => (
              <div key={stat.metric} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-accent-blue mb-2">{stat.metric}</div>
                <div className="font-semibold text-primary-navy mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
              FAQs — Digital Marketing in Pune
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
              { label: "Digital Marketing Mumbai", href: "/digital-marketing-agency-mumbai" },
              { label: "Digital Marketing Aurangabad", href: "/digital-marketing-agency-chhatrapati-sambhajinagar" },
              { label: "SEO Company Pune", href: "/seo-company-pune" },
              { label: "Web Development Pune", href: "/web-development-company-pune" },
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
              Grow Your Pune Business Online — Let&apos;s Talk
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Free strategy session for Pune businesses — we&apos;ll map the fastest route to more clients through digital marketing.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20digital%20marketing%20in%20Pune"
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
