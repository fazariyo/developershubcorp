import Link from "next/link";
import { Fragment } from "react";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/developershub-corporation/";

const CAPABILITIES: {
  label: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    label: "AI Automation",
    href: "/ai-automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    label: "Digital Products",
    href: "/digital-products",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3.5" y="7" width="14" height="11" rx="2" />
        <rect x="6.5" y="4" width="14" height="11" rx="2" />
      </svg>
    ),
  },
  {
    label: "SaaS Products",
    href: "/digital-products",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 5.5 11 3.5 3.5 0 0 0 7 18Z" />
        <path d="M12 12v4M10 14l2 2 2-2" />
      </svg>
    ),
  },
  {
    label: "Custom Software",
    href: "/digital-products/custom-software-solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="8 7 4 12 8 17" />
        <polyline points="16 7 20 12 16 17" />
        <line x1="13.5" y1="6" x2="10.5" y2="18" />
      </svg>
    ),
  },
  {
    label: "Web Development",
    href: "/digital-products/web-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4.5" width="18" height="15" rx="2" />
        <path d="M3 9h18" />
        <circle cx="6" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="8.25" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="10.5" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6 0h3.8v1.55h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.4h-4v-4.79c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.24-1.82 2.52v4.87H9v-11Z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 10 10 4M5 4h5v5" />
  </svg>
);

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="dh-onestop-marquee-track-inner"
      aria-hidden={ariaHidden || undefined}
    >
      {CAPABILITIES.map((c, idx) => (
        <Fragment key={`${c.label}-${ariaHidden ? "b" : "a"}`}>
          <Link href={c.href} className="dh-onestop-pill" tabIndex={ariaHidden ? -1 : 0}>
            <span className="dh-onestop-pill-icon" aria-hidden>
              {c.icon}
            </span>
            <span className="dh-onestop-pill-label">{c.label}</span>
          </Link>
          {idx < CAPABILITIES.length - 1 && (
            <span className="dh-onestop-pill-sep" aria-hidden>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" aria-hidden>
                <circle cx="3" cy="3" r="2" fill="url(#dh-onestop-sep-grad)" />
                <defs>
                  <linearGradient id="dh-onestop-sep-grad" x1="0" y1="0" x2="6" y2="6">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function LogoMarqueeSection() {
  return (
    <section className="dh-onestop-section">
      <div className="dh-onestop-bg" aria-hidden>
        <span className="dh-onestop-orb dh-onestop-orb-a" />
        <span className="dh-onestop-orb dh-onestop-orb-b" />
        <div className="dh-onestop-grid-pattern" />
      </div>

      <div className="dh-onestop-inner">
        <div className="dh-onestop-eyebrow">
          <span className="dh-onestop-eyebrow-dot" aria-hidden />
          One company · Every discipline
        </div>

        <h2 className="dh-onestop-headline">
          2,500+ employees working globally under{" "}
          <span className="dh-onestop-italic">
            highly experienced specialists.
          </span>
        </h2>

        <p className="dh-onestop-lede">
          From the first line of code to the last performance ad, our teams
          ship under specialists who&apos;ve done this at scale. One partner
          for everything you need to run or grow your business — no
          hand-offs, no gaps, no agency tag-team.
        </p>

        <div className="dh-onestop-cta-row">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dh-onestop-cta-primary"
          >
            <span className="dh-onestop-cta-icon" aria-hidden>
              <LinkedInIcon />
            </span>
            <span>Meet our team on LinkedIn</span>
            <span className="dh-onestop-cta-arrow" aria-hidden>
              <ArrowUpRight />
            </span>
          </a>
          <Link href="/services" className="dh-onestop-cta-ghost">
            <span>Explore what we ship</span>
            <span className="dh-onestop-cta-arrow" aria-hidden>
              <ArrowUpRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="dh-onestop-marquee" aria-label="Our capabilities">
        <div className="dh-onestop-marquee-track">
          <MarqueeTrack />
          <MarqueeTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
