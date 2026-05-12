import { RedirectClient } from "./RedirectClient";

const SLUG_MAP: Record<string, string> = {
  "paid-advertising": "/growth-marketing/paid-advertising",
  "organic-marketing": "/growth-marketing/organic-marketing",
  "strategic-optimization": "/growth-marketing/strategic-optimization",
  "visual-content-creation": "/creative-production/visual-content-creation",
  "video-post-production": "/creative-production/video-post-production",
  "ai-generated-content": "/creative-production/ai-generated-content",
  "web-development": "/digital-products/web-development",
  "mobile-app-development": "/digital-products/mobile-app-development",
  "custom-software-solutions": "/digital-products/custom-software-solutions",
  "intelligent-automation": "/ai-automation/intelligent-automation",
  "ai-communication-tools": "/ai-automation/ai-communication-tools",
  "advanced-ai-systems": "/ai-automation/advanced-ai-systems",
};

export function generateStaticParams() {
  return Object.keys(SLUG_MAP).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = SLUG_MAP[slug] ?? "/services";
  return <RedirectClient destination={dest} />;
}
