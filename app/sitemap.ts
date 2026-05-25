import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/components/blogData";

export const dynamic = "force-static";

const SITE_URL = "https://developershubcorp.com";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/specialists", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-automation/intelligent-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-automation/ai-communication-tools", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-automation/advanced-ai-systems", priority: 0.8, changeFrequency: "monthly" },
  { path: "/digital-products", priority: 0.8, changeFrequency: "monthly" },
  { path: "/digital-products/custom-software-solutions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/digital-products/web-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/digital-products/mobile-app-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/growth-marketing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/growth-marketing/paid-advertising", priority: 0.8, changeFrequency: "monthly" },
  { path: "/growth-marketing/organic-marketing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/growth-marketing/strategic-optimization", priority: 0.8, changeFrequency: "monthly" },
  { path: "/creative-production", priority: 0.8, changeFrequency: "monthly" },
  { path: "/creative-production/visual-content-creation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/creative-production/video-post-production", priority: 0.8, changeFrequency: "monthly" },
  { path: "/creative-production/ai-generated-content", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.8, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.8, changeFrequency: "yearly" },
];

const CASE_STUDY_PROJECTS: { slug: string; priority: number }[] = [
  { slug: "heyam", priority: 0.8 },
  { slug: "mexivida", priority: 0.8 },
  { slug: "blends", priority: 0.8 },
  { slug: "home-services", priority: 0.8 },
  { slug: "wellness", priority: 0.64 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = CASE_STUDY_PROJECTS.map((c) => ({
    url: `${SITE_URL}/case-study-details?project=${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedISO),
    changeFrequency: "monthly",
    priority: 0.64,
  }));

  return [...staticEntries, ...caseStudyEntries, ...blogEntries];
}
