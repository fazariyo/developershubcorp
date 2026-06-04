"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { CTASection } from "@/components/home";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { BLOG_POSTS } from "@/components/blogData";
import {
  SmallBusinessVisual,
  WorkflowToolsVisual,
  AgentsVsAutomationVisual,
  AutomationCostVisual,
  CustomVsShelfVisual,
} from "@/components/BlogVisuals";

const VISUAL_BY_SLUG = {
  "ai-automation-cost": AutomationCostVisual,
  "custom-software-vs-off-the-shelf": CustomVsShelfVisual,
  "ai-automation-for-small-business": SmallBusinessVisual,
  "best-ai-workflow-automation-tools": WorkflowToolsVisual,
  "ai-agents-vs-automation-business": AgentsVsAutomationVisual,
} as const;

export function BlogIndexBody() {
  const heroRef = useHeroAnimation();
  const [featured, ...rest] = BLOG_POSTS;
  const FeaturedVisual = VISUAL_BY_SLUG[featured.slug as keyof typeof VISUAL_BY_SLUG];

  return (
    <div className="main dh-blog-page">
      <div className="gradient-background" />
      <TemplateNavbar />

      <header className="dh-blog-hero">
        <div className="dh-blog-inner">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="dh-blog-hero-eyebrow">
              <span className="dh-blog-hero-eyebrow-dot" />
              The DevelopersHub Blog
            </span>
          </div>
          <h1 ref={heroRef} className="dh-blog-hero-title">
            AI automation, <span className="dh-blog-italic">decoded</span> — strategies that ship real results
          </h1>
          <p className="dh-blog-hero-lede">
            In-depth guides, benchmarks, and playbooks on AI workflow automation,
            AI agents, and intelligent process automation — written by the team
            shipping production AI for growing businesses.
          </p>
          <div className="dh-blog-hero-meta">
            <span className="dh-blog-hero-meta-pill">{BLOG_POSTS.length} long-form guides</span>
            <span className="dh-blog-hero-meta-pill">Updated for 2026</span>
            <span className="dh-blog-hero-meta-pill">10–15 min reads</span>
          </div>
        </div>
      </header>

      <section className="dh-blog-featured">
        <div className="dh-blog-inner">
          <Link
            href={`/blog/${featured.slug}`}
            className="dh-blog-featured-card"
            aria-label={`Read article: ${featured.title}`}
          >
            <div className="dh-blog-featured-visual">
              <span className="dh-blog-eyebrow-card">Featured guide</span>
              {FeaturedVisual && <FeaturedVisual className="dh-blog-svg-hero" />}
            </div>
            <div className="dh-blog-featured-body">
              <span className="dh-blog-tag">{featured.category}</span>
              <h2 className="dh-blog-featured-title">{featured.title}</h2>
              <p className="dh-blog-featured-excerpt">{featured.excerpt}</p>
              <div className="dh-blog-featured-meta-row">
                <span>{featured.publishedAt}</span>
                <span className="dh-blog-meta-dot" />
                <span>{featured.readTime}</span>
                <span className="dh-blog-meta-dot" />
                <span>By {featured.author.name}</span>
              </div>
              <span className="dh-blog-featured-cta">
                Read the guide
                <span className="dh-blog-featured-cta-arrow" aria-hidden>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="dh-blog-grid-section">
        <div className="dh-blog-inner">
          <div className="dh-blog-grid-head">
            <div>
              <h2 className="dh-blog-grid-title">
                Latest <span className="dh-blog-italic">articles</span>
              </h2>
              <p className="dh-blog-grid-sub">
                Tactical playbooks on intelligent automation, AI agents, and
                workflow tooling.
              </p>
            </div>
          </div>

          <div className="dh-blog-grid">
            {BLOG_POSTS.map((post) => {
              const Visual = VISUAL_BY_SLUG[post.slug as keyof typeof VISUAL_BY_SLUG];
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="dh-blog-card"
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className="dh-blog-card-visual">
                    <span className="dh-blog-eyebrow-card">{post.category}</span>
                    {Visual && <Visual className="dh-blog-svg-hero" />}
                  </div>
                  <div className="dh-blog-card-body">
                    <h3 className="dh-blog-card-title">{post.title}</h3>
                    <p className="dh-blog-card-excerpt">{post.excerpt}</p>
                    <div className="dh-blog-card-meta">
                      <span>{post.publishedAt}</span>
                      <span className="dh-blog-meta-dot" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
            {/* Keep referenced for type narrowing only */}
            <span style={{ display: "none" }}>{rest.length}</span>
          </div>
        </div>
      </section>

      <section className="dh-blog-newsletter">
        <div className="dh-blog-inner">
          <div className="dh-blog-news-card">
            <div className="dh-blog-news-inner">
              <span className="dh-blog-news-eyebrow">Newsletter</span>
              <h2 className="dh-blog-news-title">
                Get the <span className="dh-blog-news-title-serif">AI Automation</span> playbook every Friday
              </h2>
              <p className="dh-blog-news-lede">
                One actionable AI automation workflow, one tool teardown, and one
                client-ready prompt — delivered weekly. Trusted by 4,000+
                founders, marketers, and ops leaders.
              </p>
            </div>
            <Link href="/contact" className="dh-blog-news-cta">
              Subscribe free
              <span className="dh-blog-news-cta-arrow" aria-hidden>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection className="qs-csd-final-cta qs-case-final-cta" />

      <Footer />
    </div>
  );
}
