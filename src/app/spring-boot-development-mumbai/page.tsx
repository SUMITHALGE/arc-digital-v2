import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Code2, Server, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Spring Boot Development Company in Mumbai | ARC Digital Solutions",
  description:
    "Expert Spring Boot development company in Mumbai. REST API development, microservices architecture, Java backend for startups & enterprises. Secure, scalable Spring Boot apps. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/spring-boot-development-mumbai",
  },
  openGraph: {
    title: "Spring Boot Development Company Mumbai | ARC Digital Solutions",
    description:
      "Top Spring Boot development company in Mumbai. REST APIs, microservices, Java backend, Spring Security, database integration. Trusted by Mumbai startups. Free consultation.",
    url: "https://www.arcdigitalsolution.in/spring-boot-development-mumbai",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "spring boot development company mumbai",
    "spring boot developer mumbai",
    "java backend development mumbai",
    "rest api development mumbai",
    "microservices development mumbai",
    "spring boot company india",
  ],
};

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "REST API Development",
    desc: "We architect and build production-grade REST APIs using Spring Boot — with clean endpoint design, request validation, error handling, and comprehensive documentation (Swagger/OpenAPI). Ideal for Mumbai startups needing a reliable backend.",
  },
  {
    icon: <Server className="w-6 h-6 text-accent-blue" />,
    title: "Microservices Architecture",
    desc: "We design scalable microservices using Spring Boot and Spring Cloud — with service discovery, API Gateway, circuit breakers, and distributed tracing. Perfect for Mumbai enterprises planning for scale.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent-blue" />,
    title: "Spring Security Implementation",
    desc: "We implement robust authentication and authorization using Spring Security — JWT tokens, OAuth2, role-based access control (RBAC), and OWASP-compliant security practices for your Mumbai application.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "React + Spring Boot Full-Stack",
    desc: "We deliver complete full-stack web applications — React.js frontend + Spring Boot backend — as a unified product. One team, one codebase, seamlessly integrated for Mumbai-based product companies and startups.",
  },
  {
    icon: <Server className="w-6 h-6 text-accent-blue" />,
    title: "Database Integration",
    desc: "Expert integration with MySQL, PostgreSQL, MongoDB, and Redis using Spring Data JPA and Hibernate. We design optimized database schemas and queries for high-performance Mumbai applications.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "Cloud Deployment (AWS / Azure)",
    desc: "We deploy Spring Boot applications on AWS EC2, ECS, or Azure — with Docker containerization, CI/CD pipelines, environment configuration, and production-ready DevOps practices.",
  },
];

const faqs = [
  {
    question: "What is Spring Boot and why should my Mumbai startup use it?",
    answer:
      "Spring Boot is the leading Java framework for building enterprise-grade REST APIs and microservices. It provides production-ready features out of the box — auto-configuration, embedded servers, security, and database connectivity. Mumbai startups choose Spring Boot for its reliability, performance, and massive enterprise adoption globally.",
  },
  {
    question: "Does ARC Digital build Spring Boot applications in Mumbai?",
    answer:
      "Yes. ARC Digital Solutions is one of the few web development companies in Mumbai with dedicated Spring Boot expertise. We build REST APIs, microservices, Spring Security implementations, and full-stack React + Spring Boot applications for Mumbai startups and enterprises.",
  },
  {
    question: "How much does Spring Boot development cost in Mumbai?",
    answer:
      "Spring Boot REST API development starts from ₹30,000 for simple CRUD APIs. Full-stack React + Spring Boot applications start from ₹60,000. Microservices architecture projects are quoted based on complexity. All quotes are free and detailed.",
  },
  {
    question: "Can you build a Spring Boot microservices system for my Mumbai company?",
    answer:
      "Absolutely. We architect and implement microservices using Spring Boot, Spring Cloud, API Gateway, Eureka Service Discovery, and Docker — designing for scalability, fault tolerance, and independent deployability.",
  },
  {
    question: "Do you integrate Spring Boot with React.js?",
    answer:
      "Yes. We specialize in full-stack development — React.js or Next.js frontend connected to a Spring Boot REST API backend. This is one of the most powerful and scalable tech stacks for product companies and startups in Mumbai.",
  },
  {
    question: "Do you deploy Spring Boot apps to AWS or Azure?",
    answer:
      "Yes. We handle complete DevOps — Docker containerization, AWS EC2/ECS/Lambda or Azure deployment, environment configuration, CI/CD pipeline setup, and production monitoring. You get a fully deployed, production-ready system.",
  },
];

export default function SpringBootMumbaiPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/spring-boot-development-mumbai#service",
        serviceType: "Spring Boot Development",
        name: "Spring Boot Development Company in Mumbai — ARC Digital Solutions",
        description:
          "Expert Spring Boot development company in Mumbai. We build REST APIs, microservices, Spring Security implementations, and React + Spring Boot full-stack applications for Mumbai startups and enterprises.",
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
        url: "https://www.arcdigitalsolution.in/spring-boot-development-mumbai",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Spring Boot Development Mumbai", item: "https://www.arcdigitalsolution.in/spring-boot-development-mumbai" },
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
        {/* Hero Section */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">Spring Boot Development Mumbai</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Mumbai", "Navi Mumbai", "Thane", "Maharashtra"].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                  >
                    <MapPin className="w-3 h-3" />
                    {loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
                Spring Boot Development Company — Mumbai
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Spring Boot Development Company in Mumbai
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is a specialized Spring Boot development company in Mumbai. We build enterprise-grade REST APIs, microservices, and full-stack Java applications for Mumbai startups, product companies, and enterprises — combining Spring Boot&apos;s power with React.js for end-to-end digital solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20Spring%20Boot%20development%20in%20Mumbai"
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

            {/* Quick Info Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">
                Why Choose ARC Digital for Spring Boot in Mumbai?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Dedicated Spring Boot & Java Expertise",
                  "React.js + Spring Boot Full-Stack Delivery",
                  "Spring Security, JWT, OAuth2 Implementation",
                  "Microservices & REST API Architecture",
                  "AWS / Azure Cloud Deployment",
                  "Docker & CI/CD Pipeline Setup",
                  "Free Project Consultation & Scoping",
                  "Mumbai-based — Meetings Available",
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

        {/* Services Section */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Our Spring Boot Development Services in Mumbai
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              From simple REST APIs to complex microservices ecosystems, ARC Digital Solutions delivers production-ready Spring Boot solutions for every stage of your product journey in Mumbai.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold font-heading text-primary-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
            Spring Boot Tech Stack We Use in Mumbai Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Spring Boot 3.x", "Spring Security", "Spring Data JPA", "Spring Cloud",
              "Hibernate ORM", "REST / GraphQL", "MySQL / PostgreSQL", "MongoDB",
              "Redis", "Docker", "AWS / Azure", "Swagger / OpenAPI",
              "JUnit 5", "Mockito", "Maven / Gradle", "CI/CD (GitHub Actions)",
            ].map((tech) => (
              <div key={tech} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 text-center">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
              Frequently Asked Questions — Spring Boot Development in Mumbai
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
              { label: "Spring Boot Development Pune", href: "/spring-boot-development-pune" },
              { label: "React Development Mumbai", href: "/react-development-mumbai" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "Website Development Services", href: "/services/website-development" },
              { label: "SEO Services Mumbai", href: "/seo-company-mumbai" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">
              Need Spring Boot Development in Mumbai?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free consultation and technical scoping session for your Spring Boot project.
              ARC Digital Solutions — trusted Spring Boot development partner in Mumbai, Maharashtra.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20Spring%20Boot%20development%20in%20Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Now
              </a>
              <a
                href="tel:+917719902074"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
              >
                <Phone className="w-4 h-4" />
                Call: +91 77199 02074
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
