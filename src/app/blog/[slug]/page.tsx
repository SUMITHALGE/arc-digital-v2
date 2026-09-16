import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getAllSlugs } from "../posts";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";

// ── Static params for all blog posts ─────────────────────────────────────────
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── Dynamic metadata per article ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.arcdigitalsolution.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.arcdigitalsolution.in/blog/${post.slug}`,
      type: "article",
      locale: "en_IN",
      publishedTime: post.date,
      authors: ["Sumit Halge"],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

// ── Article Page ───────────────────────────────────────────────────────────────
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Related posts (exclude current)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Sumit Halge",
      url: "https://www.arcdigitalsolution.in/about",
    },
    publisher: {
      "@type": "Organization",
      name: "ARC Digital Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.arcdigitalsolution.in/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.arcdigitalsolution.in/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    url: `https://www.arcdigitalsolution.in/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div style={{ background: "var(--color-cream)", minHeight: "100vh" }}>
        {/* ── Article Header ──────────────────────────────── */}
        <header
          style={{
            background: "linear-gradient(135deg, var(--color-forest-dark) 0%, #2a4f44 100%)",
            padding: "56px 24px 64px",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: "24px" }}>
              <ol style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", listStyle: "none", padding: 0, margin: 0, fontSize: "13px" }}>
                <li>
                  <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
                </li>
                <li style={{ color: "rgba(255,255,255,0.4)" }}>/</li>
                <li>
                  <Link href="/blog" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Blog</Link>
                </li>
                <li style={{ color: "rgba(255,255,255,0.4)" }}>/</li>
                <li style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", maxWidth: "280px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Category + meta */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 600, color: "var(--color-gold)", background: "rgba(203,162,88,0.15)", border: "1px solid rgba(203,162,88,0.3)", borderRadius: "50px", padding: "3px 12px" }}>
                <Tag size={10} /> {post.category}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                <Clock size={13} /> {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
                fontWeight: 800,
                fontFamily: "var(--font-barlow-condensed)",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
            >
              {post.title}
            </h1>

            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, maxWidth: "660px" }}>
              {post.excerpt}
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "32px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "var(--color-forest-dark)",
                  flexShrink: 0,
                }}
              >
                S
              </div>
              <div>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px", margin: 0 }}>Sumit Halge</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px", margin: 0 }}>Founder, ARC Digital Solutions</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Article Body ──────────────────────────────────── */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "56px 24px" }}>
          <article
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "clamp(28px, 5vw, 56px)",
              boxShadow: "0 2px 20px rgba(30,57,50,0.07)",
              border: "1px solid var(--color-outline-gray)",
            }}
          >
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* ── Related Service Links ─────────────────────── */}
          {post.relatedLinks.length > 0 && (
            <div
              style={{
                marginTop: "32px",
                background: "#fff",
                border: "1px solid var(--color-outline-gray)",
                borderRadius: "16px",
                padding: "24px 28px",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate-gray)", marginBottom: "14px" }}>
                Related Services
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-starbucks-green)",
                      background: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      textDecoration: "none",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                  >
                    <ArrowRight size={12} /> {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ── CTA Box ───────────────────────────────────── */}
          <div
            style={{
              marginTop: "32px",
              background: "linear-gradient(135deg, var(--color-forest-dark) 0%, #2a4f44 100%)",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, fontFamily: "var(--font-barlow-condensed)", color: "#fff", marginBottom: "10px" }}>
              Need Help for Your Mumbai or Pune Business?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "20px", fontSize: "14px" }}>
              Get a free consultation from ARC Digital Solutions — no commitment, no sales pressure.
            </p>
            <a
              href="https://wa.me/917719902074?text=Hi%2C%20I%20read%20your%20blog%20and%20need%20help%20with%20my%20website"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#25D366",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              WhatsApp Free Consultation
            </a>
          </div>

          {/* ── More Articles ─────────────────────────────── */}
          <div style={{ marginTop: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate-gray)" }}>
                More Articles
              </p>
              <Link href="/blog" style={{ fontSize: "13px", color: "var(--color-starbucks-green)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                All Articles <ArrowRight size={12} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    background: "#fff",
                    border: "1px solid var(--color-outline-gray)",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    textDecoration: "none",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-forest-dark)", marginBottom: "4px", lineHeight: 1.3 }}>{p.title}</p>
                    <p style={{ fontSize: "11px", color: "var(--color-slate-gray)" }}>{p.readTime}</p>
                  </div>
                  <ArrowRight size={16} style={{ color: "var(--color-starbucks-green)", flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Back to Blog ──────────────────────────────── */}
          <div style={{ marginTop: "40px" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-slate-gray)",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </main>

        {/* ── Global Blog Content Styles ────────────────── */}
        <style>{`
          .blog-content {
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-slate-gray);
          }
          .blog-content h2 {
            font-size: clamp(1.3rem, 3vw, 1.75rem);
            font-weight: 700;
            font-family: var(--font-barlow-condensed);
            color: var(--color-forest-dark);
            margin-top: 40px;
            margin-bottom: 14px;
            line-height: 1.2;
          }
          .blog-content h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--color-forest-dark);
            margin-top: 28px;
            margin-bottom: 10px;
          }
          .blog-content p {
            margin-bottom: 18px;
          }
          .blog-content ul,
          .blog-content ol {
            padding-left: 22px;
            margin-bottom: 18px;
          }
          .blog-content li {
            margin-bottom: 8px;
          }
          .blog-content strong {
            color: var(--color-forest-dark);
            font-weight: 600;
          }
          .blog-content a {
            color: var(--color-starbucks-green);
            text-decoration: underline;
            text-underline-offset: 3px;
          }
          .blog-content a:hover {
            opacity: 0.8;
          }
        `}</style>
      </div>
    </>
  );
}
