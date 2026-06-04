import type { Metadata } from "next";
import { BlogIndexBody } from "@/components/BlogIndexBody";
import { BLOG_POSTS } from "@/components/blogData";
import "./blog.css";

const SITE_URL = "https://developershubcorp.com";

export const metadata: Metadata = {
  title:
    "AI Automation Blog — Guides, Tools & Strategies for 2026 | DevelopersHub",
  description:
    "Long-form AI automation guides covering AI workflow automation tools, AI agents for business, intelligent process automation, and how to automate small business operations.",
  keywords: [
    "AI automation blog",
    "AI automation guides",
    "AI workflow automation",
    "AI agents",
    "intelligent process automation",
    "automate business with AI",
    "AI automation for small business",
    "best AI automation tools",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "AI Automation Blog — Guides, Tools & Strategies for 2026",
    description:
      "Long-form AI automation guides covering AI workflow automation tools, AI agents for business, and intelligent process automation.",
    url: `${SITE_URL}/blog`,
    siteName: "DevelopersHub Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog — DevelopersHub",
    description:
      "Guides on AI workflow automation, AI agents, and intelligent process automation.",
  },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "DevelopersHub AI Automation Blog",
    url: `${SITE_URL}/blog`,
    description:
      "Long-form guides on AI automation, AI agents, intelligent process automation, and AI workflow tooling.",
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedISO,
      author: { "@type": "Organization", name: "DevelopersHub Corporation" },
      keywords: post.keywords.join(", "),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <BlogIndexBody />
    </>
  );
}
