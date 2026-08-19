"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import { COURSES, REGISTER_URL } from "@/components/coursesData";
import { useScrollReveal } from "@/components/useScrollReveal";

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="2" y1="7" x2="12" y2="7" />
    <polyline points="8 3 12 7 8 11" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="2.5 7.5 5.5 10.5 11.5 4" />
  </svg>
);

const SparkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 1.5L7 4.5L10 5.5L7 6.5L6 9.5L5 6.5L2 5.5L5 4.5L6 1.5Z" fill="currentColor" stroke="none" />
  </svg>
);

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Learn by shipping",
    text: "Every module ends in a hands-on lab or live activity. You build the thing, get it critiqued, and keep it.",
  },
  {
    num: "02",
    title: "Prove it in a capstone",
    text: "Each course closes with a capstone — a production-grade piece of work reviewed by our team, not a multiple-choice exam.",
  },
  {
    num: "03",
    title: "Intern with us",
    text: "Pass the capstone and you join the DevelopersHub internship program automatically. No second application, no interview gauntlet.",
  },
];

export function CoursesIndexBody() {
  useScrollReveal();

  return (
    <div className="main dh-courses-index">
      <TemplateNavbar />

      {/* ───────── Hero ───────── */}
      <header className="dh-cx-hero">
        <div className="dh-cx-bg" aria-hidden>
          <span className="dh-cx-orb dh-cx-orb-a" />
          <span className="dh-cx-orb dh-cx-orb-b" />
          <span className="dh-cx-orb dh-cx-orb-c" />
          <div className="dh-cx-grid" />
        </div>

        <div className="dh-cx-inner">
          <div className="dh-cx-hero-copy">
            <div className="dh-cx-chips">
              <span className="dh-cx-eyebrow">
                <span className="dh-cx-dot" aria-hidden />
                Enrollment open
              </span>
              <span className="dh-cx-badge">
                <SparkIcon />
                Internship guaranteed
              </span>
            </div>
            <h1 className="dh-cx-title">
              <span className="dh-cx-italic">Courses</span>
              <span className="dh-cx-title-sub">at DevelopersHub</span>
            </h1>
            <p className="dh-cx-tagline">
              Cohort-based, hands-on courses that end where most courses stop — with
              a real internship at DevelopersHub Corporation.
            </p>
            <p className="dh-cx-lede">
              Three programs, one philosophy: you learn by shipping. Every course
              closes with a capstone reviewed by our team, and every graduate moves
              straight into the internship program — building real things for real
              clients.
            </p>
            <div className="dh-cx-hero-ctas">
              <a href="#courses" className="dh-cx-btn">
                Browse courses
                <ArrowRight />
              </a>
              <Link href="/contact" className="dh-cx-btn-ghost">
                Talk to admissions
              </Link>
            </div>
          </div>

          <div className="dh-cx-stats">
            <div className="dh-cx-stat">
              <span className="dh-cx-stat-num">3</span>
              <span className="dh-cx-stat-label">Courses running</span>
            </div>
            <div className="dh-cx-stat">
              <span className="dh-cx-stat-num">
                6–10<span className="dh-cx-stat-unit">wk</span>
              </span>
              <span className="dh-cx-stat-label">Cohort length</span>
            </div>
            <div className="dh-cx-stat">
              <span className="dh-cx-stat-num">
                100<span className="dh-cx-stat-unit">%</span>
              </span>
              <span className="dh-cx-stat-label">Internship placement</span>
            </div>
            <div className="dh-cx-stat">
              <span className="dh-cx-stat-num">0</span>
              <span className="dh-cx-stat-label">Experience required</span>
            </div>
          </div>
        </div>
      </header>

      {/* ───────── Course list ───────── */}
      <section id="courses" className="dh-cx-section">
        <div className="dh-cx-inner">
          <header className="dh-cx-sec-head dh-reveal">
            <span className="dh-cx-sec-num">01</span>
            <h2 className="dh-cx-sec-title">
              Our <span className="dh-cx-italic">courses</span>
            </h2>
            <p className="dh-cx-sec-lede">
              Pick the craft you want to build. Each one runs as a live cohort with
              a capped seat count.
            </p>
          </header>

          <div className="dh-cx-list">
            {COURSES.map((course, i) => (
              <article
                key={course.slug}
                className="dh-cx-card dh-reveal"
                style={
                  {
                    "--cx-violet": course.accent.violet,
                    "--cx-pink": course.accent.pink,
                    "--dh-reveal-delay": `${i * 90}ms`,
                  } as CSSProperties
                }
              >
                <span className="dh-cx-card-rail" aria-hidden />

                <div className="dh-cx-card-main">
                  <div className="dh-cx-card-top">
                    <span className="dh-cx-card-index" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="dh-cx-card-kicker">{course.card.kicker}</span>
                    <span className="dh-cx-card-badge">
                      <SparkIcon />
                      Internship guaranteed
                    </span>
                  </div>

                  <h3 className="dh-cx-card-title">
                    <Link href={`/courses/${course.slug}`}>{course.name}</Link>
                  </h3>
                  <p className="dh-cx-card-summary">{course.card.summary}</p>

                  <ul className="dh-cx-card-points">
                    {course.card.highlights.map((h) => (
                      <li key={h}>
                        <span className="dh-cx-check">
                          <CheckIcon />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="dh-cx-card-tags">
                    {course.card.tags.map((t) => (
                      <span key={t} className="dh-cx-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <aside className="dh-cx-card-side">
                  <dl className="dh-cx-card-meta">
                    <div>
                      <dt>Duration</dt>
                      <dd>{course.card.duration}</dd>
                    </div>
                    <div>
                      <dt>Level</dt>
                      <dd>{course.card.level}</dd>
                    </div>
                    <div>
                      <dt>Format</dt>
                      <dd>{course.card.format}</dd>
                    </div>
                    <div>
                      <dt>After course</dt>
                      <dd>Internship at DevelopersHub</dd>
                    </div>
                  </dl>

                  <div className="dh-cx-card-ctas">
                    <Link href={`/courses/${course.slug}`} className="dh-cx-btn dh-cx-btn--card">
                      View Details
                      <ArrowRight />
                    </Link>
                    <a
                      href={REGISTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dh-cx-btn-ghost dh-cx-btn-ghost--card"
                    >
                      Register
                    </a>
                  </div>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="dh-cx-section dh-cx-section--alt">
        <div className="dh-cx-inner">
          <header className="dh-cx-sec-head dh-reveal">
            <span className="dh-cx-sec-num">02</span>
            <h2 className="dh-cx-sec-title">
              How our courses <span className="dh-cx-italic">work</span>
            </h2>
            <p className="dh-cx-sec-lede">
              The same structure across every program, whatever the subject.
            </p>
          </header>

          <div className="dh-cx-steps">
            {HOW_IT_WORKS.map((s, i) => (
              <article
                key={s.num}
                className="dh-cx-step dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 70}ms` } as CSSProperties}
              >
                <span className="dh-cx-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="dh-cx-section dh-cx-cta-section">
        <div className="dh-cx-inner">
          <div className="dh-cx-cta-card dh-reveal">
            <div className="dh-cx-cta-bg" aria-hidden />
            <div className="dh-cx-cta-content">
              <span className="dh-cx-eyebrow">
                <span className="dh-cx-dot" aria-hidden />
                Limited seats per cohort
              </span>
              <h2 className="dh-cx-cta-title">
                Learn the craft. <span className="dh-cx-italic">Intern</span> with us.
              </h2>
              <p className="dh-cx-cta-copy">
                One application covers every course — tell us which one you want on
                the form and we&apos;ll reply within three business days.
              </p>
              <div className="dh-cx-hero-ctas">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dh-cx-btn dh-cx-btn--lg"
                >
                  Register Now
                  <ArrowRight />
                </a>
                <Link href="/contact" className="dh-cx-btn-ghost dh-cx-btn-ghost--light">
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
