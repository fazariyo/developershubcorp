"use client";

import { Fragment, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import { COURSE_VISUALS } from "@/components/courseVisuals";
import { REGISTER_URL, type BenefitIcon, type Course } from "@/components/coursesData";
import { useScrollReveal } from "@/components/useScrollReveal";

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="2" y1="7" x2="12" y2="7" />
    <polyline points="8 3 12 7 8 11" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="12" y1="7" x2="2" y2="7" />
    <polyline points="6 3 2 7 6 11" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="2.5 7.5 5.5 10.5 11.5 4" />
  </svg>
);

const SparkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 1.5L7 4.5L10 5.5L7 6.5L6 9.5L5 6.5L2 5.5L5 4.5L6 1.5Z" fill="currentColor" stroke="none" />
  </svg>
);

const BENEFIT_ICONS: Record<BenefitIcon, ReactNode> = {
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 11l2.5 2.5L17 8" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  ),
  mentor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M14 20c0-2.5 1.7-4.5 3.5-4.5s3.5 2 3.5 4.5" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="3 16 9 10 13 14 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </svg>
  ),
};

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

/** Two-digit section numbers, counted at render time so optional sections don't leave gaps. */
function sectionNumbers(course: Course) {
  let n = 0;
  const next = () => String(++n).padStart(2, "0");
  return {
    outcomes: next(),
    curriculum: next(),
    stack: next(),
    audience: next(),
    internship: next(),
    testimonials: course.testimonials?.length ? next() : null,
    faq: next(),
  };
}

export function CourseDetailBody({ course }: { course: Course }) {
  useScrollReveal();

  const Visual = COURSE_VISUALS[course.visual];
  const num = sectionNumbers(course);

  const accentStyle = {
    "--course-accent": course.accent,
    "--course-accent-alt": course.accentAlt ?? course.accent,
  } as CSSProperties;

  return (
    <div className="main dh-courses-page" style={accentStyle}>
      <TemplateNavbar />

      {/* ───────── Hero ───────── */}
      <header className="dh-course-hero">
        <div className="dh-course-bg" aria-hidden>
          <span className="dh-orb dh-orb-a" />
          <span className="dh-orb dh-orb-b" />
          <span className="dh-orb dh-orb-c" />
          <div className="dh-grid-pattern" />
        </div>

        <div className="dh-inner">
          <Link href="/courses" className="dh-back-link">
            <ArrowLeft />
            All courses
          </Link>

          <div className="dh-hero-grid">
            {/* Left — copy */}
            <div className="dh-hero-copy">
              <div className="dh-hero-chips">
                <span className="dh-course-eyebrow">
                  <span className="dh-eyebrow-dot" aria-hidden />
                  {course.eyebrow}
                </span>
                <span className="dh-intern-badge">
                  <SparkIcon />
                  {course.badge}
                </span>
              </div>
              <h1 className="dh-course-title">
                <span className="dh-course-italic">{course.heroTitle}</span>
                <span className="dh-course-title-sub">{course.heroTitleSub}</span>
              </h1>
              <p className="dh-course-tagline">{course.tagline}</p>
              <p className="dh-course-lede">{course.lede}</p>
              <div className="dh-hero-ctas">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-cta-primary"
                >
                  Register Now
                  <ArrowRight />
                </a>
                <a href="#curriculum" className="dh-cta-ghost">
                  View curriculum
                </a>
              </div>

              <dl className="dh-course-meta">
                {course.courseMeta.map((m) => (
                  <div key={m.label} className="dh-course-meta-item">
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right — course visual */}
            <div className="dh-hero-visual dh-hero-visual--stack">
              <Visual />
              {course.heroCard.kind === "code" ? (
                <div className="dh-code-card" aria-hidden>
                  <span className="dh-code-dots">
                    <i /><i /><i />
                  </span>
                  <pre>
                    <code>{course.heroCard.lines.join("\n")}</code>
                  </pre>
                </div>
              ) : (
                <div className="dh-code-card dh-code-card--note" aria-hidden>
                  {course.heroCard.title && (
                    <span className="dh-note-title">{course.heroCard.title}</span>
                  )}
                  <ul className="dh-note-list">
                    {course.heroCard.lines.map((line) => (
                      <li key={line}>
                        <span className="dh-note-mark" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ───────── Stats strip ───────── */}
      <section className="dh-stats-strip dh-reveal">
        <div className="dh-inner">
          <div className="dh-stats-card">
            {course.stats.map((s) => (
              <div key={s.label} className="dh-stat">
                <span className="dh-stat-bar" aria-hidden />
                <div className="dh-stat-num">
                  {s.num}
                  {s.unit && <span className="dh-stat-unit">{s.unit}</span>}
                </div>
                <div className="dh-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Outcomes ───────── */}
      <section className="dh-course-section">
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">{num.outcomes}</span>
            <h2 className="dh-sec-title">
              {course.outcomesTitle} <span className="dh-italic">{course.outcomesItalic}</span>
            </h2>
            <p className="dh-sec-lede">{course.outcomesLede}</p>
          </header>

          <div className="dh-outcomes-grid">
            {course.outcomes.map((o, i) => (
              <article
                key={o.title}
                className="dh-outcome dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 40}ms` } as CSSProperties}
              >
                <span className="dh-outcome-check">
                  <CheckIcon />
                </span>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Curriculum timeline ───────── */}
      <section id="curriculum" className="dh-course-section dh-course-section--alt">
        <div className="dh-section-bg" aria-hidden>
          <span className="dh-bg-orb dh-bg-orb-a" />
          <span className="dh-bg-orb dh-bg-orb-b" />
        </div>
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">{num.curriculum}</span>
            <h2 className="dh-sec-title">
              {course.curriculumTitle}{" "}
              <span className="dh-italic">{course.curriculumItalic}</span>
            </h2>
            <p className="dh-sec-lede">{course.curriculumLede}</p>
          </header>

          <ol className="dh-timeline">
            {course.curriculum.map((m, i) => (
              <li
                key={m.num}
                className="dh-module dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 70}ms` } as CSSProperties}
              >
                <div className="dh-module-marker">
                  <span className="dh-module-marker-dot" aria-hidden />
                </div>
                <article className="dh-module-card">
                  <header className="dh-module-head">
                    <div>
                      <span className="dh-module-num">{m.num}</span>
                      <span className="dh-module-weeks">{m.weeks}</span>
                    </div>
                    <h3 className="dh-module-title">{m.title}</h3>
                  </header>
                  <p className="dh-module-blurb">{m.blurb}</p>
                  <ul className="dh-module-topics">
                    {m.topics.map((t) => (
                      <li key={t}>
                        <span className="dh-topic-bullet" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="dh-module-lab">{m.lab}</div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Stack / toolkit ───────── */}
      <section className="dh-course-section">
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">{num.stack}</span>
            <h2 className="dh-sec-title">
              {course.stackTitle} <span className="dh-italic">{course.stackItalic}</span>{" "}
              {course.stackTitleTail}
            </h2>
            <p className="dh-sec-lede">{course.stackLede}</p>
          </header>

          <div className="dh-stack-grid dh-reveal">
            {course.stack.map((g) => (
              <div key={g.group} className="dh-stack-group">
                <div className="dh-stack-label">{g.group}</div>
                <div className="dh-stack-chips">
                  {g.items.map((item) => (
                    <span key={item} className="dh-stack-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Audience ───────── */}
      <section className="dh-course-section dh-course-section--alt">
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">{num.audience}</span>
            <h2 className="dh-sec-title">
              Who it&apos;s <span className="dh-italic">for</span>
            </h2>
            <p className="dh-sec-lede">{course.audienceLede}</p>
          </header>

          <div className="dh-audience-grid dh-reveal">
            {course.audience.map((a) => (
              <article key={a.title} className="dh-audience-item">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Internship ───────── */}
      <section className="dh-course-section dh-intern-section">
        <div className="dh-section-bg" aria-hidden>
          <span className="dh-bg-orb dh-bg-orb-a" />
          <span className="dh-bg-orb dh-bg-orb-b" />
        </div>
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-intern-badge dh-intern-badge--inline">
              <SparkIcon />
              Included in every cohort
            </span>
            <span className="dh-sec-num">{num.internship}</span>
            <h2 className="dh-sec-title">
              Your <span className="dh-italic">internship</span> at DevelopersHub
            </h2>
            <p className="dh-sec-lede">{course.internship.lede}</p>
          </header>

          <div className="dh-path-rail dh-reveal">
            {course.internship.path.map((step, i) => (
              <Fragment key={step.num}>
                {i > 0 && (
                  <div className="dh-path-arrow" aria-hidden>
                    →
                  </div>
                )}
                <div
                  className={`dh-path-step${
                    i === course.internship.path.length - 1 ? " dh-path-step--highlight" : ""
                  }`}
                >
                  <span className="dh-path-num">{step.num}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="dh-intern-grid">
            {course.internship.benefits.map((b, i) => (
              <article
                key={b.title}
                className="dh-intern-card dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 60}ms` } as CSSProperties}
              >
                <div className="dh-intern-icon">{BENEFIT_ICONS[b.icon]}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>

          <div className="dh-roles-block dh-reveal">
            <div className="dh-roles-block-head">
              <h3>{course.internship.rolesTitle}</h3>
              <p>{course.internship.rolesLede}</p>
            </div>
            <ul className="dh-roles-list">
              {course.internship.roles.map((r) => (
                <li key={r}>
                  <span className="dh-role-mark" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Testimonials (only when a cohort has real quotes) ───────── */}
      {course.testimonials?.length && num.testimonials ? (
        <section className="dh-course-section dh-course-section--alt">
          <div className="dh-section-bg" aria-hidden>
            <span className="dh-bg-orb dh-bg-orb-a" />
            <span className="dh-bg-orb dh-bg-orb-b" />
          </div>
          <div className="dh-inner">
            <header className="dh-sec-head dh-reveal">
              <span className="dh-sec-num">{num.testimonials}</span>
              <h2 className="dh-sec-title">
                What graduates <span className="dh-italic">say</span>
              </h2>
              <p className="dh-sec-lede">
                Stories from past cohorts — people who shipped real work and walked
                into their next role.
              </p>
            </header>

            <div
              className="dh-tm-marquee dh-reveal"
              aria-roledescription="carousel"
              aria-label="Course graduate testimonials"
            >
              <div className="dh-tm-track">
                {[...course.testimonials, ...course.testimonials].map((t, i) => (
                  <figure
                    key={`${t.name}-${i}`}
                    className="dh-tm-card"
                    aria-hidden={i >= course.testimonials!.length}
                  >
                    <span className="dh-tm-watermark" aria-hidden>&ldquo;</span>
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
                        <span className="dh-tm-avatar-inner">{initialsOf(t.name)}</span>
                      </span>
                      <span className="dh-tm-meta">
                        <span className="dh-tm-name">{t.name}</span>
                        <span className="dh-tm-role">{t.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* ───────── FAQ ───────── */}
      <section className="dh-course-section">
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">{num.faq}</span>
            <h2 className="dh-sec-title">
              Common <span className="dh-italic">questions</span>
            </h2>
          </header>
          <div className="dh-faq-list">
            {course.faqs.map((f, i) => (
              <details
                key={f.q}
                className="dh-faq-item dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 50}ms` } as CSSProperties}
              >
                <summary>
                  <span>{f.q}</span>
                  <span className="dh-faq-icon" aria-hidden>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <line x1="3" y1="8" x2="13" y2="8" />
                      <line className="dh-faq-icon-v" x1="8" y1="3" x2="8" y2="13" />
                    </svg>
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <section className="dh-course-section dh-cta-section">
        <div className="dh-inner">
          <div className="dh-cta-card dh-reveal">
            <div className="dh-cta-bg" aria-hidden />
            <div className="dh-cta-content">
              <span className="dh-course-eyebrow">
                <span className="dh-eyebrow-dot" aria-hidden />
                {course.cta.eyebrow}
              </span>
              <h2 className="dh-cta-title">
                {course.cta.title} <span className="dh-italic">{course.cta.italic}</span>{" "}
                {course.cta.titleTail}
              </h2>
              <p className="dh-cta-copy">{course.cta.copy}</p>
              <div className="dh-hero-ctas">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-cta-primary dh-cta-primary--lg"
                >
                  Register Now
                  <ArrowRight />
                </a>
                <Link href="/contact" className="dh-cta-ghost dh-cta-ghost--light">
                  Talk to admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
