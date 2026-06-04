import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { WebflowRuntime } from "@/components/WebflowRuntime";
import { WebflowRouteSync } from "@/components/WebflowRouteSync";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const SITE_URL = "https://developershubcorp.com";

export const metadata: Metadata = {
  title: {
    default:
      "DevelopersHub Corporation — AI Automation, Software Development & Growth Marketing Agency",
    template: "%s | DevelopersHub Corporation",
  },
  description:
    "DevelopersHub Corporation is a full-service digital agency — AI automation services, custom software & web development, growth marketing, and creative production. Your entire digital department under one roof.",
  robots: { index: true, follow: true },
  metadataBase: new URL(SITE_URL),
  applicationName: "DevelopersHub Corporation",
  openGraph: {
    type: "website",
    siteName: "DevelopersHub Corporation",
    url: SITE_URL,
    title:
      "DevelopersHub Corporation — AI Automation, Software Development & Growth Marketing Agency",
    description:
      "Full-service digital agency: AI automation, custom software & web development, growth marketing, and creative production — your entire digital department under one roof.",
    images: [
      {
        url: "/assets/logo/developershub-icon-black.png",
        alt: "DevelopersHub Corporation logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title:
      "DevelopersHub Corporation — AI Automation, Software Development & Growth Marketing Agency",
    description:
      "Full-service digital agency: AI automation, custom software & web development, growth marketing, and creative production.",
    images: ["/assets/logo/developershub-icon-black.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "DevelopersHub Corporation",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo/developershub-icon-black.png`,
  description:
    "Full-service digital agency offering AI automation services, custom software and web development, mobile app development, growth marketing, and creative production.",
  email: "info@developershubcorp.com",
  telephone: "+1-307-427-2883",
  sameAs: [
    "https://www.linkedin.com/company/developershub-corporation",
    "https://www.instagram.com/developershubcorporation",
    "https://www.facebook.com/p/DevelopersHub-Corporation-61563501711991/",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "DevelopersHub Corporation",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const webflowTouchClass = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-domain="awakeagency.webflow.io"
      data-wf-page="67a5fb8bc33c7f25ab4e52e0"
      data-wf-site="67a5fb8bc33c7f25ab4e52d9"
      data-wf-status="1"
      className={`${interTight.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className={`body ${interTight.className}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {/* Preload the hero gradient so `document.readyState === "complete"`
           (the event Webflow IX3 uses to fire its hero load animation) happens
           as early as possible — otherwise IX3 replays the animation after the
           gradient finishes downloading. */}
        <link
          rel="preload"
          as="image"
          href="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4efa959606e9a7d41cc67_background-gradient.webp"
          fetchPriority="high"
        />
        <Script
          id="webflow-w-mod"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: webflowTouchClass }}
        />
        {/* Preload critical animation scripts for faster hero content display */}
        <Script
          src="/assets/js/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/gsap/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/gsap/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/gsap/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        {children}
        <WebflowRouteSync />
        <WebflowRuntime />
      </body>
    </html>
  );
}
