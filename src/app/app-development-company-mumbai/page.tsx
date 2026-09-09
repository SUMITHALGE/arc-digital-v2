import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Smartphone, Code2, Shield, Zap, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "App Development Company in Mumbai | Mobile App Developer Mumbai | ARC Digital Solutions",
  description:
    "Leading app development company in Mumbai. iOS, Android & React Native mobile apps for Mumbai startups & enterprises. Custom web apps, PWA & full-stack development. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/app-development-company-mumbai",
  },
  openGraph: {
    title: "App Development Company Mumbai | ARC Digital Solutions",
    description: "Best mobile app development company in Mumbai. iOS, Android, React Native apps for Mumbai startups & enterprises. Free consultation — ARC Digital Solutions.",
    url: "https://www.arcdigitalsolution.in/app-development-company-mumbai",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "app development company in mumbai",
    "mobile app development company mumbai",
    "mobile app developer mumbai",
    "ios app development mumbai",
    "android app development mumbai",
    "react native development mumbai",
    "app development mumbai",
    "mobile application development mumbai",
    "startup app development mumbai",
    "web app development mumbai",
    "custom app development mumbai",
  ],
};

const services = [
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "React Native App Development",
    desc: "Cross-platform iOS and Android apps from a single codebase. We build production-grade React Native apps for Mumbai startups and enterprises — with native performance, beautiful UI, and seamless App Store deployment.",
  },
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Progressive Web Apps (PWA)",
    desc: "App-like experiences delivered via the web — offline capability, push notifications, installable on home screen, and lightning-fast loading. PWAs are perfect for Mumbai businesses wanting mobile reach without app store complexity.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "Full-Stack Web App Development",
    desc: "React.js + Spring Boot or Node.js web applications — SaaS platforms, fintech dashboards, real estate portals, healthtech platforms, edtech solutions, and business automation tools for Mumbai enterprises.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent-blue" />,
    title: "App Security & Authentication",
    desc: "Enterprise-grade security for Mumbai apps — JWT, OAuth2, biometric login, data encryption, OWASP compliance, and secure API design. We build apps that meet fintech and healthtech security standards.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "API Development & Third-Party Integration",
    desc: "We build and integrate robust REST APIs with Razorpay, PayU, RazorpayX, Stripe, Twilio, AWS SNS, Google Maps, Aadhaar eKYC, and more — giving your Mumbai app the connected ecosystem it needs.",
  },
  {
    icon: <Star className="w-6 h-6 text-accent-blue" />,
    title: "App UI/UX Design",
    desc: "World-class app design for Mumbai's competitive market. We design apps based on user research, conversion psychology, and platform guidelines — creating experiences that users love and businesses profit from.",
  },
];

const faqs = [
  {
    question: "How much does mobile app development cost in Mumbai?",
    answer: "Mobile app development in Mumbai varies by complexity. A basic React Native MVP app starts from ₹50,000. A feature-rich app with backend, payments, and authentication ranges from ₹1,00,000-3,00,000+. Enterprise applications are quoted based on detailed requirements. All quotes from ARC Digital Solutions are free, detailed, and include a full feature breakdown.",
  },
  {
    question: "Which is the best app development company in Mumbai?",
    answer: "ARC Digital Solutions is one of Mumbai's leading app development companies, specializing in React Native cross-platform apps, full-stack web applications, and API development. We serve Mumbai clients across Andheri, BKC, Powai, Navi Mumbai, and Thane — delivering apps for fintech, healthtech, e-commerce, and logistics sectors.",
  },
  {
    question: "Do you build apps for Mumbai fintech startups?",
    answer: "Yes. We have experience building secure financial applications — wallets, lending platforms, investment dashboards, and payment solutions — with compliance-first architecture, Razorpay/RazorpayX integration, and audit-ready security practices (JWT, OAuth2, encrypted data storage).",
  },
  {
    question: "How long does app development take in Mumbai?",
    answer: "A basic MVP app takes 6-8 weeks. A full-featured app with backend, authentication, payments, and admin panel takes 10-16 weeks. We use agile 2-week sprints with weekly demos and a shared project board so Mumbai clients always have full visibility into progress.",
  },
  {
    question: "Can you build a React Native app and web platform together?",
    answer: "Yes. We specialize in unified product development — one React Native app (iOS + Android) plus a React.js web platform, both powered by a single Spring Boot backend API. This is the most efficient and cost-effective approach for Mumbai startups building cross-platform products.",
  },
  {
    question: "Do you provide post-launch app maintenance in Mumbai?",
    answer: "Yes. Post-launch support for Mumbai clients includes OS update compatibility, bug fixes, performance optimization, feature additions, and app store review management. Monthly support plans start from ₹5,000/month for maintenance and ₹10,000+/month for active feature development.",
  },
];

export default function AppDevMumbaiPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/app-development-company-mumbai#service",
        serviceType: "Mobile App Development",
        name: "App Development Company in Mumbai — ARC Digital Solutions",
        description: "Leading mobile app development company in Mumbai. React Native, iOS, Android, web apps and full-stack development for Mumbai startups and enterprises.",
        provider: { "@type": "Organization", "@id": "https://www.arcdigitalsolution.in/#business", name: "ARC Digital Solutions" },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/app-development-company-mumbai",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "App Development Company Mumbai", item: "https://www.arcdigitalsolution.in/app-development-company-mumbai" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <div className="min-h-screen bg-[#FAFAF8]">
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">App Development Company Mumbai</span>
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
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">App Development Company — Mumbai</span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                App Development Company in Mumbai
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions builds high-performance mobile apps and full-stack web applications for Mumbai startups, fintech companies, and enterprises. React Native (iOS + Android), PWAs, and custom web apps — built to scale, secure, and ship fast.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20app%20development%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                  <MessageCircle className="w-4 h-4" />WhatsApp Free Consultation
                </a>
                <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors">
                  <Phone className="w-4 h-4" />+91 77199 02074
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Choose ARC Digital for App Dev in Mumbai?</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "React Native — iOS + Android from 1 Codebase",
                  "Fintech, Healthtech & E-Commerce Experience",
                  "Agile Development — 2-Week Sprints",
                  "Enterprise Security (JWT, OAuth2, Encryption)",
                  "Razorpay, PayU, UPI & eKYC Integration",
                  "App Store & Play Store Submission",
                  "Spring Boot Backend Development",
                  "Mumbai-Based — In-Person Meetings Available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors">Request a Free Quote</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Our App Development Services in Mumbai</h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">Full-spectrum app development for Mumbai businesses — from startup MVPs to enterprise platforms.</p>
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

        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">FAQ — App Development in Mumbai</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="border border-gray-200 rounded-xl p-6">
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}<span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
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
              { label: "App Development Pune", href: "/app-development-company-pune" },
              { label: "App Development Aurangabad", href: "/app-development-company-chhatrapati-sambhajinagar" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "React Development Mumbai", href: "/react-development-mumbai" },
              { label: "Spring Boot Development Mumbai", href: "/spring-boot-development-mumbai" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Ready to Build Your App in Mumbai?</h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">Free consultation with ARC Digital Solutions — Mumbai&apos;s trusted app development company. Get a detailed quote within 24 hours.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20app%20development%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" />WhatsApp Now
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30">
                <Phone className="w-4 h-4" />Call: +91 77199 02074
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
