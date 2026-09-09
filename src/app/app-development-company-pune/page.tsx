import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Smartphone, Code2, Shield, Zap, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "App Development Company in Pune | Mobile App Developer Pune | ARC Digital Solutions",
  description:
    "Top app development company in Pune. iOS, Android & React Native mobile apps for Pune startups & businesses. Custom web apps, PWA & full-stack development. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/app-development-company-pune",
  },
  openGraph: {
    title: "App Development Company Pune | ARC Digital Solutions",
    description: "Best mobile app development company in Pune. iOS, Android, React Native & web apps. Trusted by Pune startups. Free consultation.",
    url: "https://www.arcdigitalsolution.in/app-development-company-pune",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "app development company in pune",
    "mobile app development company pune",
    "mobile app developer pune",
    "ios app development pune",
    "android app development pune",
    "react native development pune",
    "app development pune",
    "mobile application development pune",
    "custom app development pune",
    "startup app development pune",
    "web app development pune",
    "pwa development pune",
  ],
};

const services = [
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "React Native App Development",
    desc: "Cross-platform mobile apps for iOS and Android from a single codebase. React Native delivers native performance, native UI components, and 60fps animations — at 40-60% lower cost than building separate iOS and Android apps. Perfect for Pune startups.",
  },
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Progressive Web Apps (PWA)",
    desc: "PWAs that work offline, install on any device, and load instantly — without an app store submission. A powerful, cost-effective alternative for Pune businesses wanting mobile-like experiences delivered via the web.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "Full-Stack Web App Development",
    desc: "Complete web applications with React.js frontend and Spring Boot or Node.js backend — custom dashboards, admin panels, SaaS platforms, booking systems, and business automation tools for Pune companies.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent-blue" />,
    title: "App Security & Authentication",
    desc: "We implement JWT authentication, OAuth2, biometric login, and end-to-end encryption in every app we build. Security is built in — not bolted on — protecting your Pune business and your users from day one.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "API Development & Integration",
    desc: "We build and integrate REST APIs, payment gateways (Razorpay, PayU), SMS/OTP services, maps, push notifications, and third-party services into your Pune app — making it a complete, connected product.",
  },
  {
    icon: <Star className="w-6 h-6 text-accent-blue" />,
    title: "App Design (UI/UX)",
    desc: "We design apps that users love. Clean, intuitive, and beautiful — based on Google Material Design and Apple HIG principles. Our Pune app design process includes user research, wireframing, and high-fidelity Figma prototypes before a single line of code is written.",
  },
];

const faqs = [
  {
    question: "How much does mobile app development cost in Pune?",
    answer: "A React Native app (cross-platform iOS + Android) starts from ₹50,000 for a basic MVP. A full-featured app with backend API, authentication, and payment integration ranges from ₹80,000-2,00,000+. At ARC Digital Solutions, all quotes are free and include a detailed feature-cost breakdown.",
  },
  {
    question: "Which is the best app development company in Pune?",
    answer: "ARC Digital Solutions is one of Pune's leading app development companies, specializing in React Native cross-platform apps, web apps, and full-stack development. We've delivered apps for startups in Hinjewadi, Viman Nagar, Baner, and across Pune — with a focus on clean code, performance, and business results.",
  },
  {
    question: "How long does it take to build a mobile app in Pune?",
    answer: "A basic MVP app takes 6-8 weeks. A feature-rich app with backend, auth, and integrations takes 10-16 weeks. We follow an agile approach with 2-week sprints, regular demos, and weekly progress updates so you always know exactly where your project stands.",
  },
  {
    question: "Do you build apps for both iOS and Android in Pune?",
    answer: "Yes. We use React Native to build a single codebase that runs natively on both iOS and Android. This means you get two apps — one for the Apple App Store and one for Google Play Store — at the cost of approximately one, with no compromise on performance or user experience.",
  },
  {
    question: "Can you build an app for my Pune startup idea?",
    answer: "Absolutely. We work with Pune startups from idea to App Store launch. Our process starts with a free consultation to scope your idea, then MVP planning, design sprints, development, testing, and launch — with post-launch support included. We've helped Pune startups validate their ideas quickly and cost-effectively.",
  },
  {
    question: "Do you help with Play Store and App Store submission?",
    answer: "Yes. We handle complete app store submission — Google Play Store and Apple App Store — including store listing optimization (ASO), screenshots, descriptions, and compliance review. We also manage the signing certificates and build configurations required for each platform.",
  },
];

export default function AppDevPunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/app-development-company-pune#service",
        serviceType: "Mobile App Development",
        name: "App Development Company in Pune — ARC Digital Solutions",
        description: "Top mobile app development company in Pune. React Native, iOS, Android, web apps and PWA development for Pune startups and businesses.",
        provider: { "@type": "Organization", "@id": "https://www.arcdigitalsolution.in/#business", name: "ARC Digital Solutions" },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Pimpri-Chinchwad" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/app-development-company-pune",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "App Development Company Pune", item: "https://www.arcdigitalsolution.in/app-development-company-pune" },
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
            <span className="text-primary-navy font-medium">App Development Company Pune</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Pune", "Hinjewadi", "Viman Nagar", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" />{loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">App Development Company — Pune</span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                App Development Company in Pune
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions builds high-performance mobile apps and web applications for Pune startups and businesses. React Native (iOS + Android), PWA, full-stack web apps — from idea to App Store in weeks, not months.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20app%20development%20in%20Pune" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                  <MessageCircle className="w-4 h-4" />WhatsApp Free Consultation
                </a>
                <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors">
                  <Phone className="w-4 h-4" />+91 77199 02074
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Choose ARC Digital for App Dev in Pune?</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "React Native — iOS + Android from 1 Codebase",
                  "40-60% Lower Cost vs Native App Development",
                  "Agile Process — 2-Week Sprints & Live Demos",
                  "App Store & Play Store Submission Handled",
                  "Spring Boot / Node.js Backend Development",
                  "Razorpay, PayU & UPI Payment Integration",
                  "Post-Launch Support & Maintenance",
                  "Pune-based — Meetings Available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors">
                Request a Free Quote
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Our App Development Services in Pune</h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">From mobile apps to full-stack web platforms — we build digital products that work beautifully and grow your Pune business.</p>
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

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">Tech Stack for Pune App Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React Native", "React.js", "TypeScript", "Expo", "Spring Boot", "Node.js", "REST APIs", "Firebase", "MySQL", "PostgreSQL", "AWS", "Docker", "Razorpay", "Google Maps API", "Push Notifications", "App Store / Play Store"].map((tech) => (
              <div key={tech} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 text-center">{tech}</div>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">FAQ — App Development in Pune</h2>
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
              { label: "App Development Mumbai", href: "/app-development-company-mumbai" },
              { label: "App Development Aurangabad", href: "/app-development-company-chhatrapati-sambhajinagar" },
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "React Development Pune", href: "/react-development-pune" },
              { label: "Spring Boot Development Pune", href: "/spring-boot-development-pune" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Ready to Build Your App in Pune?</h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free consultation and app scoping session with ARC Digital Solutions — Pune&apos;s trusted app development company.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20app%20development%20in%20Pune" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
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
