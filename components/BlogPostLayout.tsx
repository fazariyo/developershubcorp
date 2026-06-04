"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { CTASection } from "@/components/home";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import type { BlogPost } from "@/components/blogData";
import { getRelatedPosts } from "@/components/blogData";
import {
  SmallBusinessVisual,
  WorkflowToolsVisual,
  AgentsVsAutomationVisual,
} from "@/components/BlogVisuals";

const VISUAL_BY_SLUG = {
  "ai-automation-for-small-business": SmallBusinessVisual,
  "best-ai-workflow-automation-tools": WorkflowToolsVisual,
  "ai-agents-vs-automation-business": AgentsVsAutomationVisual,
} as const;

type Section = { id: string; label: string };

type BlogPostLayoutProps = {
  post: BlogPost;
  toc: Section[];
  children: ReactNode;
};

export function BlogPostLayout({ post, toc, children }: BlogPostLayoutProps) {
  const heroRef = useHeroAnimation();
  const Cover = VISUAL_BY_SLUG[post.slug as keyof typeof VISUAL_BY_SLUG];
  const related = getRelatedPosts(post.slug);
  const initials = post.author.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="main dh-blog-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <header className="dh-post-hero">
        <div className="dh-blog-inner dh-blog-inner--narrow">
          <Link href="/blog" className="dh-post-back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M10 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to all articles
          </Link>
          <span className="dh-post-eyebrow">{post.category}</span>
          <h1 ref={heroRef} className="dh-post-title">
            {post.title}
          </h1>
          <p className="dh-post-lede">{post.excerpt}</p>
          <div className="dh-post-meta">
            <span className="dh-post-meta-author">
              <span className="dh-post-meta-avatar">{initials}</span>
              <span>
                <strong style={{ color: "#1b1d1e", fontWeight: 500 }}>
                  {post.author.name}
                </strong>
                <span style={{ display: "block", fontSize: 12, color: "rgba(27,29,30,0.5)" }}>
                  {post.author.role}
                </span>
              </span>
            </span>
            <span className="dh-blog-meta-dot" />
            <time dateTime={post.publishedISO}>{post.publishedAt}</time>
            <span className="dh-blog-meta-dot" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="dh-blog-inner">
          <div className="dh-post-cover" style={{ background: post.heroGradient }}>
            {Cover && <Cover className="dh-blog-svg-hero" />}
          </div>
        </div>
      </header>

      <section className="dh-post-article">
        <div className="dh-blog-inner">
          <div className="dh-post-layout">
            <aside className="dh-post-toc" aria-label="Table of contents">
              <p className="dh-post-toc-label">On this page</p>
              <ol>
                {toc.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.label}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <article className="dh-post-body">
              {children}

              <div className="dh-post-share">
                <span>Share this article:</span>
                <a
                  className="dh-post-share-pill"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://developershubcorp.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X / Twitter
                </a>
                <a
                  className="dh-post-share-pill"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://developershubcorp.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="dh-post-share-pill"
                  href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Thought you'd like this: https://developershubcorp.com/blog/${post.slug}`)}`}
                >
                  Email
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="dh-post-related">
        <div className="dh-blog-inner">
          <div className="dh-post-related-head">
            <h2 className="dh-post-related-title">
              Keep <span className="dh-blog-italic">reading</span>
            </h2>
            <Link
              href="/blog"
              style={{ fontSize: 14, color: "#4928fd", textDecoration: "none" }}
            >
              View all articles →
            </Link>
          </div>
          <div className="dh-post-related-grid">
            {related.map((p) => {
              const RelatedVisual =
                VISUAL_BY_SLUG[p.slug as keyof typeof VISUAL_BY_SLUG];
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="dh-blog-card">
                  <div className="dh-blog-card-visual">
                    <span className="dh-blog-eyebrow-card">{p.category}</span>
                    {RelatedVisual && <RelatedVisual className="dh-blog-svg-hero" />}
                  </div>
                  <div className="dh-blog-card-body">
                    <h3 className="dh-blog-card-title">{p.title}</h3>
                    <p className="dh-blog-card-excerpt">{p.excerpt}</p>
                    <div className="dh-blog-card-meta">
                      <span>{p.publishedAt}</span>
                      <span className="dh-blog-meta-dot" />
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection className="qs-csd-final-cta qs-case-final-cta" />

      <Footer />
    </div>
  );
}
