import type { Metadata } from "next";
import { HomeBody } from "@/components/HomeBody";
import "./case-studies/case-studies-page.css";
import "./services/services-page.css";

const SITE_URL = "https://developershubcorp.com";

export const metadata: Metadata = {
  title:
    "DevelopersHub Corporation — AI Automation, Software Development & Growth Marketing Agency",
  description:
    "DevelopersHub Corporation is a full-service digital agency — AI automation services, custom software & web development, mobile apps, growth marketing, and creative production. 150+ brands launched, 94% client retention.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "DevelopersHub Corporation — AI Automation, Software Development & Growth Marketing Agency",
    description:
      "Your entire digital department under one roof: AI automation, custom software & web development, growth marketing, and creative production. 150+ brands launched, 94% client retention.",
    url: "/",
    type: "website",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "DevelopersHub Corporation",
  url: SITE_URL,
  image: `${SITE_URL}/assets/logo/developershub-icon-black.png`,
  description:
    "Full-service digital agency offering AI automation, custom software development, web and mobile app development, growth marketing, and creative production.",
  telephone: "+1-307-427-2883",
  email: "info@developershubcorp.com",
  priceRange: "$$",
  areaServed: "Worldwide",
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Agency Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation Services",
          url: `${SITE_URL}/ai-automation`,
          description:
            "Intelligent workflow automation, AI chatbots and communication tools, and custom AI agent systems for business.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software & Web Development",
          url: `${SITE_URL}/digital-products`,
          description:
            "Custom software development, web development, e-commerce platforms, and mobile app development for iOS and Android.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth Marketing",
          url: `${SITE_URL}/growth-marketing`,
          description:
            "Paid advertising management, SEO and organic marketing, and conversion rate optimization.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Creative Production",
          url: `${SITE_URL}/creative-production`,
          description:
            "Visual content creation, video production and post-production, and AI-generated content at scale.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <HomeBody />
    </>
  );
}
