import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./posts";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog | Web Development & SEO Insights — ARC Digital Solutions",
  metaTitle: "Web Development & SEO Blog | ARC Digital Solutions Mumbai & Pune",
  description:
    "Expert insights on web development, SEO, and digital marketing for Mumbai and Pune businesses. Practical guides from ARC Digital Solutions — helping you rank higher and grow faster.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/blog",
  },
  openGraph: {
    title: "Web Development & SEO Blog | ARC Digital Solutions",
    description:
      "Expert guides on website development cost, SEO rankings, and digital marketing for Mumbai and Pune businesses. Free, actionable advice from ARC Digital Solutions.",
    url: "https://www.arcdigitalsolution.in/blog",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "web development blog mumbai",
    "seo blog pune",
    "website development guide india",
    "digital marketing blog mumbai pune",
  ],
} as Metadata;

const categoryColors: Record<string, string> = {
  "Web Development": "bg-blue-50 text-blue-700 border-blue-200",
  SEO: "bg-green-50 text-green-700 border-green-200",
  "Digital Marketing": "bg-amber-50 text-amber-700 border-amber-200",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div style={{ background: "var(--color-cream)", minHeight: "100vh" }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-forest-dark) 0%, #2a4f44 100%)",
          padding: "64px 24px 80px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(203,162,88,0.2)",
              color: "var(--color-gold)",
              border: "1px solid rgba(203,162,88,0.4)",
              borderRadius: "50px",
              padding: "4px 16px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            ARC Digital Insights
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              fontFamily: "var(--font-barlow-condensed)",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Web Development & SEO Guides
            <br />
            <span style={{ color: "var(--color-gold)" }}>for Mumbai & Pune Businesses</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "17px", maxWidth: "600px", lineHeight: 1.6 }}>
            Practical, actionable guides to help your business rank higher on Google, build a faster website, and generate more leads from Mumbai and Pune.
          </p>
        </div>
      </section>

      {/* ── Featured Post ─────────────────────────────────── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 0" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate-gray)", marginBottom: "16px" }}>
          Featured Article
        </p>
        <Link
          href={`/blog/${featured.slug}`}
          style={{
            display: "block",
            background: "#fff",
            border: "1px solid var(--color-outline-gray)",
            borderRadius: "20px",
            padding: "clamp(24px, 5vw, 48px)",
            textDecoration: "none",
            transition: "box-shadow 0.25s, transform 0.25s",
            boxShadow: "0 2px 16px rgba(30,57,50,0.06)",
          }}
          className="blog-card-featured"
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 600, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "50px", padding: "3px 10px" }}
            >
              <Tag size={10} /> {featured.category}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--color-slate-gray)" }}>
              <Calendar size={12} /> {new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--color-slate-gray)" }}>
              <Clock size={12} /> {featured.readTime}
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--color-forest-dark)",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            {featured.title}
          </h2>
          <p style={{ fontSize: "16px", color: "var(--color-slate-gray)", lineHeight: 1.65, marginBottom: "20px", maxWidth: "720px" }}>
            {featured.excerpt}
          </p>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-starbucks-green)",
            }}
          >
            Read Full Article <ArrowRight size={14} />
          </span>
        </Link>
      </section>

      {/* ── All Posts Grid ─────────────────────────────────── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate-gray)", marginBottom: "24px" }}>
          All Articles
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "24px",
          }}
        >
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                border: "1px solid var(--color-outline-gray)",
                borderRadius: "16px",
                padding: "28px",
                textDecoration: "none",
                transition: "box-shadow 0.25s, transform 0.25s",
                boxShadow: "0 1px 8px rgba(30,57,50,0.05)",
              }}
              className="blog-card"
            >
              {/* Category + date */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#166534",
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "50px",
                    padding: "2px 8px",
                  }}
                >
                  {post.category}
                </span>
                <span style={{ fontSize: "11px", color: "var(--color-slate-gray)" }}>
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  fontFamily: "var(--font-barlow-condensed)",
                  color: "var(--color-forest-dark)",
                  lineHeight: 1.3,
                  marginBottom: "10px",
                  flexGrow: 1,
                }}
              >
                {post.title}
              </h3>

              <p style={{ fontSize: "13px", color: "var(--color-slate-gray)", lineHeight: 1.6, marginBottom: "16px" }}>
                {post.excerpt}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                <span style={{ fontSize: "12px", color: "var(--color-slate-gray)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Clock size={12} /> {post.readTime}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 600, color: "var(--color-starbucks-green)" }}>
                  Read <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ background: "var(--color-forest-dark)", padding: "56px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 700, fontFamily: "var(--font-barlow-condensed)", color: "#fff", marginBottom: "12px" }}>
            Ready to Grow Your Mumbai or Pune Business?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "28px", fontSize: "16px" }}>
            Get a free consultation &mdash; we&apos;ll audit your website and tell you exactly what&apos;s holding back your Google rankings.
          </p>
          <a
            href="https://wa.me/917719902074?text=Hi%2C%20I%20read%20your%20blog%20and%20want%20a%20free%20website%20audit"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#25D366",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            Get Free Website Audit on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
