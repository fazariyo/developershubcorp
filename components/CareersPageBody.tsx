"use client";

import { useEffect } from "react";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";

const APPLY_URL = "https://forms.gle/LM6JBR4vJum1hXbU9";

type Field = {
  slug: string;
  title: string;
  blurb: string;
  accent: string;
  icon: React.ReactNode;
};

type Testimonial = {
  name: string;
  track: string;
  quote: string;
  accent: string;
};

const I = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="9 8 5 12 9 16" />
      <polyline points="15 8 19 12 15 16" />
      <line x1="13.5" y1="6" x2="10.5" y2="18" />
    </svg>
  ),
  fullstack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <rect x="3" y="10.5" width="18" height="5" rx="1" />
      <rect x="3" y="17" width="18" height="3" rx="1" />
      <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" />
      <circle cx="6.5" cy="13" r="0.6" fill="currentColor" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2.5" />
      <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" />
      <line x1="16.5" y1="7.5" x2="13.5" y2="10.5" />
      <line x1="7.5" y1="16.5" x2="10.5" y2="13.5" />
      <line x1="16.5" y1="16.5" x2="13.5" y2="13.5" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="5.5" y="12" width="3" height="8" />
      <rect x="10.5" y="8" width="3" height="12" />
      <rect x="15.5" y="4" width="3" height="16" />
    </svg>
  ),
  uiux: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M10 11l4 2.5L10 16v-5Z" fill="currentColor" stroke="none" />
      <line x1="3" y1="8" x2="21" y2="8" />
    </svg>
  ),
  graphics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.7-.8 1.7-1.7 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.3 0-.9.8-1.7 1.7-1.7H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" />
      <circle cx="10.5" cy="7" r="1" fill="currentColor" />
      <circle cx="15" cy="7.5" r="1" fill="currentColor" />
      <circle cx="17.5" cy="11.5" r="1" fill="currentColor" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 8.3-8 9-4.5-.7-8-4-8-9V6l8-3Z" />
      <polyline points="9 12 11.2 14.2 15 10.4" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <line x1="10.5" y1="18.2" x2="13.5" y2="18.2" />
    </svg>
  ),
  marketing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11.5v1L17 18V6L3 11.5Z" />
      <path d="M17 8.5a3.5 3.5 0 0 1 0 7" />
      <path d="M6.5 13l1 5a1.5 1.5 0 0 0 2.95-.4L9.7 14" />
    </svg>
  ),
};

const FIELDS: Field[] = [
  {
    slug: "front-end-development",
    title: "Front-End Development",
    blurb: "Build responsive, accessible web interfaces with modern frameworks.",
    accent: "#3b82f6",
    icon: I.frontend,
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    blurb: "Ship end-to-end products — frontend, backend, database, and deployment.",
    accent: "#8b5cf6",
    icon: I.fullstack,
  },
  {
    slug: "ai-ml-engineering",
    title: "AI / ML Engineering",
    blurb: "Build, train, and deploy production machine-learning systems.",
    accent: "#ec4899",
    icon: I.ai,
  },
  {
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    blurb: "Turn raw data into insights, dashboards, and predictive models.",
    accent: "#14b8a6",
    icon: I.data,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    blurb: "Translate user research into intuitive, conversion-driven interfaces.",
    accent: "#f97316",
    icon: I.uiux,
  },
  {
    slug: "graphics-designing",
    title: "Graphics Designing",
    blurb: "Craft brand identities, marketing collateral, and visual systems.",
    accent: "#f43f5e",
    icon: I.graphics,
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    blurb: "Defend applications, networks, and data against modern threats.",
    accent: "#10b981",
    icon: I.security,
  },
  {
    slug: "mobile-flutter-development",
    title: "Mobile App & Flutter Development",
    blurb: "Ship cross-platform mobile apps from prototype to store release.",
    accent: "#6366f1",
    icon: I.mobile,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    blurb: "Drive growth through paid, organic, and lifecycle channels.",
    accent: "#f59e0b",
    icon: I.marketing,
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Hamza Khan",
    track: "Full-Stack Development · Class of '24",
    quote:
      "I came in knowing React and left shipping production systems. The mentorship was the difference — a senior engineer reviewed every pull request I opened.",
    accent: "#8b5cf6",
  },
  {
    name: "Sarah Mitchell",
    track: "UI/UX Design · Class of '24",
    quote:
      "Real client work from week one. Not mock projects — actual designs that ended up in front of users. That's the only way you actually learn.",
    accent: "#f97316",
  },
  {
    name: "Ayesha Malik",
    track: "AI / ML Engineering · Class of '24",
    quote:
      "Built a recommendation engine that scaled to a million users by my second month. The capstone wasn't a toy — it became part of a client's platform.",
    accent: "#ec4899",
  },
  {
    name: "Michael Anderson",
    track: "Cyber Security · Class of '24",
    quote:
      "The team treated interns as full engineers. I owned an entire pen-test engagement by month three and presented findings directly to the client.",
    accent: "#10b981",
  },
  {
    name: "Bilal Ahmed",
    track: "Data Science & Analytics · Class of '24",
    quote:
      "Joined right after grad school with no industry experience. Six months later I was leading dashboard reviews with our biggest enterprise client.",
    accent: "#14b8a6",
  },
  {
    name: "Emily Brown",
    track: "Digital Marketing · Class of '24",
    quote:
      "The cross-discipline exposure was unreal. I spent two months embedded with the AI team learning how to wire LLMs into campaign workflows.",
    accent: "#f59e0b",
  },
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="2" y1="7" x2="12" y2="7" />
    <polyline points="8 3 12 7 8 11" />
  </svg>
);

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(".dh-reveal");
    if (prefersReduce) {
      els.forEach((el) => el.classList.add("dh-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("dh-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function CareersPageBody() {
  useScrollReveal();

  return (
    <div className="main dh-careers-page">
      <TemplateNavbar />

      {/* ───────── Hero ───────── */}
      <header className="dh-careers-hero">
        <div className="dh-hero-orbs" aria-hidden>
          <span className="dh-orb dh-orb-1" />
          <span className="dh-orb dh-orb-2" />
          <span className="dh-orb dh-orb-3" />
        </div>
        <div className="dh-hero-grid" aria-hidden />
        <div className="dh-inner">
          <span className="dh-careers-eyebrow">
            <span className="dh-eyebrow-dot" aria-hidden />
            Careers — now accepting applications
          </span>
          <h1 className="dh-careers-title">
            Build the next chapter with{" "}
            <span className="dh-careers-italic">DevelopersHub</span>
          </h1>
          <p className="dh-careers-lede">
            Whether you&apos;re early in your career or sharpening a specialty, we
            offer two pathways into the firm — internships and hiring across
            nine disciplines.
          </p>
          <nav className="dh-careers-anchors" aria-label="Sections on this page">
            <a href="#internships" className="dh-anchor-chip">
              <span className="dh-anchor-num">01</span>
              <span className="dh-anchor-label">Internships</span>
              <svg className="dh-anchor-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="6" y1="2" x2="6" y2="10" />
                <polyline points="2.5 6.5 6 10 9.5 6.5" />
              </svg>
            </a>
            <a href="#hiring" className="dh-anchor-chip">
              <span className="dh-anchor-num">02</span>
              <span className="dh-anchor-label">Hiring</span>
              <svg className="dh-anchor-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="6" y1="2" x2="6" y2="10" />
                <polyline points="2.5 6.5 6 10 9.5 6.5" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Discipline marquee */}
        <div className="dh-fields-marquee" aria-hidden>
          <div className="dh-marquee-track">
            {[...FIELDS, ...FIELDS].map((f, i) => (
              <span key={i} className="dh-marquee-item">
                <span
                  className="dh-marquee-dot"
                  style={{ background: f.accent }}
                />
                {f.title}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ───────── §01 Internships ───────── */}
      <section id="internships" className="dh-careers-section">
        <div className="dh-inner">
          <div className="dh-section-head dh-reveal">
            <div className="dh-section-meta">
              <span className="dh-section-num">01</span>
              <h2 className="dh-section-title">Internships</h2>
              <p className="dh-section-lede">
                Nine specialized tracks. Real client work from day one. Mentorship
                from senior practitioners. Apply once — we&apos;ll route your
                application to the right team.
              </p>
            </div>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dh-cta-primary"
            >
              Apply for Internship
              <ArrowRight />
            </a>
          </div>

          <div className="dh-fields-grid">
            {FIELDS.map((field, i) => (
              <article
                key={field.slug}
                className="dh-field-card dh-reveal"
                style={
                  {
                    "--field-accent": field.accent,
                    "--dh-reveal-delay": `${i * 55}ms`,
                  } as React.CSSProperties
                }
              >
                <span className="dh-field-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="dh-field-icon">{field.icon}</div>
                <h3 className="dh-field-title">{field.title}</h3>
                <p className="dh-field-blurb">{field.blurb}</p>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-field-cta"
                  aria-label={`Apply now for ${field.title} internship`}
                >
                  Apply Now
                  <ArrowRight />
                </a>
              </article>
            ))}
          </div>

          {/* Testimonials sub-section */}
          <div className="dh-testimonials-block">
            <header className="dh-testimonials-head dh-reveal">
              <span className="dh-testimonials-eyebrow">From past cohorts</span>
              <h3 className="dh-testimonials-title">
                Voices from our{" "}
                <span className="dh-careers-italic">intern alumni</span>
              </h3>
            </header>
            <div
              className="dh-tm-marquee dh-reveal"
              aria-roledescription="carousel"
              aria-label="Intern alumni testimonials"
            >
              <div className="dh-tm-track">
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                  <figure
                    key={`${t.name}-${i}`}
                    className="dh-tm-card"
                    style={
                      { "--tm-accent": t.accent } as React.CSSProperties
                    }
                    aria-hidden={i >= TESTIMONIALS.length}
                  >
                    <span className="dh-tm-watermark" aria-hidden>
                      &ldquo;
                    </span>
                    <div className="dh-tm-stars" aria-hidden>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg
                          key={s}
                          className="dh-tm-star"
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                          fill="currentColor"
                        >
                          <path d="M12 2L14.5 9L22 9L16 13L18 21L12 16L6 21L8 13L2 9L9.5 9Z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="dh-tm-quote">{t.quote}</blockquote>
                    <div className="dh-tm-divider" aria-hidden />
                    <figcaption className="dh-tm-author">
                      <span className="dh-tm-avatar" aria-hidden>
                        <span className="dh-tm-avatar-inner">
                          {initialsOf(t.name)}
                        </span>
                      </span>
                      <span className="dh-tm-meta">
                        <span className="dh-tm-name">{t.name}</span>
                        <span className="dh-tm-role">{t.track}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── §02 Hiring ───────── */}
      <section
        id="hiring"
        className="dh-careers-section dh-careers-section--alt"
      >
        <div className="dh-section-bg" aria-hidden>
          <span className="dh-bg-orb dh-bg-orb-1" />
          <span className="dh-bg-orb dh-bg-orb-2" />
        </div>
        <div className="dh-inner">
          <div className="dh-hiring-card dh-reveal">
            <span className="dh-section-num">02</span>
            <h2 className="dh-section-title">Hiring</h2>
            <div className="dh-hiring-status">
              <span className="dh-status-dot" aria-hidden />
              Not actively hiring
            </div>
            <p className="dh-hiring-copy">
              We are not running any full-time openings at the moment. Our
              internship program, however, is actively accepting applications
              across all nine specialized tracks — it&apos;s the fastest path to
              working alongside our specialists and the most common route into a
              full-time role at DevelopersHub Corporation.
            </p>
            <a href="#internships" className="dh-cta-primary">
              Explore Internship Opportunities
              <ArrowRight />
            </a>

            <div className="dh-hr-divider" aria-hidden>
              <span>or reach our HR team directly</span>
            </div>

            <div className="dh-hr-contact">
              <a
                href="https://wa.me/447429732973"
                target="_blank"
                rel="noopener noreferrer"
                className="dh-hr-chip"
              >
                <span className="dh-hr-chip-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.8-1L3 21l1.7-5.2c-.7-1.2-1.2-2.7-1.2-4.3a8.5 8.5 0 1 1 17.5 0Z" />
                    <path d="M8.5 9.5c0-.3.2-.7.5-.9.2-.2.4-.3.7-.3h.5c.2 0 .4.1.5.3l.7 1.4c0 .2 0 .4-.1.6l-.5.7c.4.9 1.2 1.7 2.1 2.1l.7-.5c.2-.1.4-.2.6-.1l1.4.7c.2.1.3.3.3.5v.5c0 .3-.1.5-.3.7-.2.3-.6.5-.9.5-2.6.1-6.3-3.6-6.2-6.2Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="dh-hr-chip-meta">
                  <span className="dh-hr-chip-label">WhatsApp</span>
                  <span className="dh-hr-chip-value">+44 7429 732973</span>
                </span>
              </a>

              <a
                href="mailto:hr@developershubcorp.com"
                className="dh-hr-chip"
              >
                <span className="dh-hr-chip-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </span>
                <span className="dh-hr-chip-meta">
                  <span className="dh-hr-chip-label">Email HR</span>
                  <span className="dh-hr-chip-value">hr@developershubcorp.com</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
