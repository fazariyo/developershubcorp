export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  publishedISO: string;
  author: {
    name: string;
    role: string;
  };
  keywords: string[];
  heroGradient: string;
  heroAccent: string;
  heroEyebrow: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-automation-for-small-business",
    title:
      "AI Automation for Small Business: The Complete 2026 Guide to Saving 20+ Hours a Week",
    excerpt:
      "From AI chatbots and automated email marketing to invoicing agents and lead-gen workflows — here's exactly how small businesses are using AI automation to cut costs and scale without hiring.",
    category: "AI Automation Strategy",
    readTime: "12 min read",
    publishedAt: "May 5, 2026",
    publishedISO: "2026-05-05",
    author: {
      name: "DevelopersHub Editorial",
      role: "AI Automation Team",
    },
    keywords: [
      "AI automation for small business",
      "small business automation software",
      "AI tools for small business",
      "automate small business",
      "AI chatbot for business",
      "marketing automation",
      "AI customer service",
      "workflow automation small business",
    ],
    heroGradient:
      "radial-gradient(ellipse 120% 80% at 20% 0%, rgba(73,40,253,0.18) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 100% 80% at 90% 100%, rgba(121,212,94,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, #fdf1d3 0%, #ffffff 100%)",
    heroAccent: "#4928fd",
    heroEyebrow: "AI Automation · Small Business",
  },
  {
    slug: "best-ai-workflow-automation-tools",
    title:
      "11 Best AI Workflow Automation Tools in 2026 (Tested & Ranked for ROI)",
    excerpt:
      "We benchmarked the top AI workflow automation platforms — Zapier AI, n8n, Make, Relevance AI, Lindy, and more — on speed, cost, and how easily non-developers can ship real automations.",
    category: "AI Tools & Platforms",
    readTime: "15 min read",
    publishedAt: "April 22, 2026",
    publishedISO: "2026-04-22",
    author: {
      name: "DevelopersHub Editorial",
      role: "AI Engineering Team",
    },
    keywords: [
      "AI workflow automation tools",
      "best AI automation software",
      "AI automation platform",
      "Zapier AI",
      "n8n AI",
      "Make.com AI",
      "Relevance AI",
      "no-code AI automation",
      "intelligent process automation",
      "RPA vs AI automation",
    ],
    heroGradient:
      "radial-gradient(ellipse 120% 80% at 80% 0%, rgba(244,136,154,0.18) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 100% 80% at 10% 100%, rgba(73,40,253,0.18) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, #e6f0ff 0%, #ffffff 100%)",
    heroAccent: "#4928fd",
    heroEyebrow: "AI Tools · Buyer's Guide",
  },
  {
    slug: "ai-agents-vs-automation-business",
    title:
      "AI Agents vs Traditional Automation: Which One Actually Grows Your Business?",
    excerpt:
      "AI agents can reason, make decisions, and adapt. Traditional automation follows rules. Here's when to use each, real cost comparisons, and a 30-day implementation playbook for either.",
    category: "AI Agents & Strategy",
    readTime: "10 min read",
    publishedAt: "April 8, 2026",
    publishedISO: "2026-04-08",
    author: {
      name: "DevelopersHub Editorial",
      role: "AI Strategy Team",
    },
    keywords: [
      "AI agents",
      "AI agents for business",
      "AI automation vs RPA",
      "intelligent automation",
      "AI agent vs chatbot",
      "autonomous AI agents",
      "AI agents 2026",
      "generative AI business",
      "agentic AI",
      "LLM agents",
    ],
    heroGradient:
      "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(73,40,253,0.2) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 100% 80% at 100% 100%, rgba(244,136,154,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, #fef3f5 0%, #ffffff 100%)",
    heroAccent: "#4928fd",
    heroEyebrow: "AI Agents · Strategy",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug);
}
