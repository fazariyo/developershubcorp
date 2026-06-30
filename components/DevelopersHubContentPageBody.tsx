"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home";

/* ── Small inline icons ─────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="2" y1="7" x2="12" y2="7" />
    <polyline points="8 3 12 7 8 11" />
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const GridIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

/** Reusable poster used everywhere a real video clip would sit. */
const VideoPoster = ({ format }: { format?: string }) => (
  <span className="qs-fc-video-placeholder">
    {format && <span className="qs-fc-video-format-badge">{format}</span>}
    <span className="qs-fc-video-play">
      <PlayIcon />
    </span>
  </span>
);

/* ── Data ────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    tag: "YouTube",
    title: "Long-form Edits",
    body: "Retention-engineered edits for YouTube — sharp pacing, motion graphics, b-roll, and sound design that carry viewers all the way to the CTA.",
  },
  {
    tag: "Reels & Shorts",
    title: "Short-form Reels",
    body: "Story-led verticals for Reels, TikTok, and Shorts. Hook-first, captioned, and cut to each platform — built to stop the thumb.",
  },
  {
    tag: "Paid-ready",
    title: "UGC & Brand Ads",
    body: "Creator-style UGC and polished brand spots — scripted, shot, and edited to convert across Meta, TikTok, and YouTube.",
  },
  {
    tag: "Finishing",
    title: "Color & Sound",
    body: "Cinema-grade color, mixing, and audio cleanup — the finishing layer that makes every frame feel premium and intentional.",
  },
];

type Tile = {
  orientation: "horizontal" | "vertical" | "square";
  featured?: boolean;
  format?: string;
  title: string;
  meta: string;
  tags: string[];
  description?: string;
  src?: string;
  poster?: string;
};

const TILES: Tile[] = [
  {
    orientation: "vertical",
    featured: true,
    format: "9:16",
    title: "The launch film for an agency platform",
    meta: "Brand film · 60s",
    tags: ["Script", "Motion design", "Animated UI", "Logo sting", "Cut-downs"],
    src: "/assets/content-production/studio-showreel.mp4",
    poster: "/assets/content-production/studio-showreel-poster.jpg",
    description:
      "We produced the end-to-end launch film for an agency platform — script, motion-graphics system, animated product cards, team intros, and a custom logo sting, all cut to the beat. Delivered vertical for paid social, with 1:1 and 16:9 cut-downs for the homepage and YouTube.",
  },
  {
    orientation: "square",
    format: "1:1",
    title: "All-in-one SaaS workspace promo",
    meta: "Product promo · 1:1 · 0:15",
    tags: ["Hook-led script", "UI animation", "Kinetic type", "Sound design", "1:1"],
    src: "/assets/content-production/saas-workspace-promo.mp4",
    poster: "/assets/content-production/saas-workspace-promo-poster.jpg",
    description:
      "A 15-second promo for an all-in-one productivity workspace. We open on the everyday chaos — scattered apps, runaway to-do lists, and clashing calendars — then resolve it into one calm, organized home with snappy UI animation and kinetic type. Notes, tasks, and time collapse into a single “all in one place” payoff before landing on the brand mark. Cut square for in-feed autoplay across LinkedIn, Instagram, and X.",
  },
];

const PRODUCT_POINTS = [
  "Photoreal 3D & CGI — no shoot day, no logistics",
  "Every colorway, angle, and finish rendered on demand",
  "Macro detail and material close-ups that sell quality",
  "Delivered for ads, product pages, and marketplaces in any ratio",
];

const UGC_POINTS = [
  "Scripted from your offer, angle, and audience",
  "Authentic creator delivery that doesn't feel like an ad",
  "Multiple hook and CTA variants to test",
  "Native specs for Meta, TikTok, and YouTube",
];

const PILLARS = [
  {
    index: "01",
    title: "Story-first",
    body: "Every cut serves a narrative. We find the throughline before we touch the timeline, so the edit holds attention end to end.",
  },
  {
    index: "02",
    title: "Native to platform",
    body: "A YouTube film and a TikTok hook are different crafts. We edit for where it lives — pacing, ratio, captions, and all.",
  },
  {
    index: "03",
    title: "Fast turnarounds",
    body: "Managed pipelines and clear review rounds mean most short-form ships in days, not weeks — without cutting corners on craft.",
  },
  {
    index: "04",
    title: "Built to convert",
    body: "Views are nice; outcomes matter. We engineer hooks, retention, and CTAs around the result you actually need.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Brief & strategy",
    sub: "We align on goals, audience, and platforms, then map the story and shot list before anything rolls.",
  },
  {
    num: "2",
    title: "Production",
    sub: "We shoot it or you send the raw footage — either way it lands in a clean, organized pipeline.",
  },
  {
    num: "3",
    title: "Edit & finish",
    sub: "Edit, motion graphics, captions, color, and sound — refined across clear review rounds until it's right.",
  },
  {
    num: "4",
    title: "Publish & iterate",
    sub: "Platform-ready exports, posting support, and performance read-outs that sharpen the next batch.",
  },
];

const AI_PIPELINE = [
  "AI faces",
  "Product shots",
  "Scenes",
  "Macro detail",
  "Endless variations",
];

type Film = {
  title: string;
  tagline: string;
  meta: string;
  tags: string[];
  src: string;
  poster: string;
  description: string;
};

const FILMS: Film[] = [
  {
    title: "Aftermath",
    tagline: "Creature-horror survival short",
    meta: "Short film · Sci-fi horror · 0:29",
    tags: ["Concept", "AI cinematography", "Color grade", "Sound design", "9:16"],
    src: "/assets/content-production/short-film-aftermath.mp4",
    poster: "/assets/content-production/short-film-aftermath-poster.jpg",
    description:
      "A lone survivor edges through blacked-out corridors and a rain-slicked parking garage while something hunts in the dark. Built shot by shot in our in-house realism pipeline — no camera, no crew — then graded and scored for a tense, theatrical finish. Creature design, lighting, and pacing all engineered to hold a vertical audience to the very last frame.",
  },
  {
    title: "Exodus",
    tagline: "Epic sci-fi desert saga",
    meta: "Short film · Sci-fi epic · 0:29",
    tags: ["Worldbuilding", "AI cinematography", "VFX", "Original score", "9:16"],
    src: "/assets/content-production/short-film-exodus.mp4",
    poster: "/assets/content-production/short-film-exodus-poster.jpg",
    description:
      "Armies massing across endless dunes, gunships streaking over the desert, a hooded figure beneath a rising planet — blockbuster scale rendered entirely in-house. We design the world, direct every camera move, and finish with VFX and a cinematic score, delivering feature-grade spectacle as a share-ready vertical short.",
  },
];

export function DevelopersHubContentPageBody() {
  const pageRef = useRef<HTMLDivElement>(null);

  /* Scroll-driven playback: only the video most in view plays, and it plays
     with sound; every other video is paused and muted. Sound follows the
     scroll as soon as the browser allows it (browsers block unmuted autoplay
     until the first user interaction, so it stays muted until then, then
     unmutes the active clip and tracks scrolling from that point on). */
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>("video"));
    if (videos.length === 0) return;

    videos.forEach((v) => {
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
    });

    // A clip starts playing once this much of it is on screen, and pauses when
    // it drops below; the single most-visible clip (and only it) gets sound.
    const PLAY_AT = 0.4;
    const SOUND_AT = 0.5;

    let audioUnlocked = false;
    const ratios = new Map<HTMLVideoElement, number>();

    const apply = () => {
      let soundVideo: HTMLVideoElement | null = null;
      let bestRatio = 0;
      ratios.forEach((ratio, video) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          soundVideo = video;
        }
      });
      if (bestRatio < SOUND_AT) soundVideo = null;

      videos.forEach((video) => {
        const ratio = ratios.get(video) ?? 0;
        if (ratio >= PLAY_AT) {
          const wantSound = video === soundVideo && audioUnlocked;
          video.muted = !wantSound;
          if (video.paused) {
            const playing = video.play();
            if (playing && typeof playing.catch === "function") {
              playing.catch(() => {
                // Unmuted playback blocked — retry muted so it still plays.
                video.muted = true;
                video.play().catch(() => {});
              });
            }
          }
        } else if (!video.paused) {
          video.muted = true;
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target as HTMLVideoElement,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }
        apply();
      },
      { threshold: [0, 0.25, 0.4, 0.5, 0.75, 0.95] },
    );
    videos.forEach((v) => observer.observe(v));

    // First real interaction unlocks audio; re-run so the in-view clip unmutes.
    const unlock = () => {
      if (audioUnlocked) return;
      audioUnlocked = true;
      apply();
    };
    const unlockEvents: (keyof WindowEventMap)[] = [
      "pointerdown",
      "touchstart",
      "keydown",
      "click",
      "wheel",
    ];
    unlockEvents.forEach((ev) =>
      window.addEventListener(ev, unlock, { passive: true }),
    );

    return () => {
      observer.disconnect();
      unlockEvents.forEach((ev) => window.removeEventListener(ev, unlock));
      videos.forEach((v) => v.pause());
    };
  }, []);

  return (
    <div className="main qs-fc-page" ref={pageRef}>
      <TemplateNavbar />

      {/* ───────── Hero ───────── */}
      <header className="qs-fc-hero">
        <div className="qs-inner">
          <div className="qs-fc-eyebrow-wrap">
            <span className="qs-fc-eyebrow">
              In-house content studio · DevelopersHub Corporation
            </span>
          </div>
          <h1 className="qs-fc-hero-title">
            You bring the <span className="qs-fc-hero-italic">idea</span>.
            <br />
            We produce <span className="qs-fc-hero-italic">the rest</span>.
          </h1>
          <p className="qs-fc-hero-lede">
            We don&apos;t just polish footage — we build the entire production.
            Concept and script through shoot, motion design, sound, colour, and
            final delivery — for creators growing an audience and brands selling
            to one. <strong>One studio. The complete pipeline.</strong>
          </p>
          <div className="qs-fc-hero-ctas">
            <Link href="/contact/#contact-form" className="qs-fc-btn-primary">
              Start a project
              <span className="qs-fc-btn-icon">
                <ArrowRight />
              </span>
            </Link>
            <a href="#work" className="qs-fc-btn-secondary">
              Watch the reel
            </a>
          </div>

          <ul className="qs-fc-hero-pipeline">
            {["Script", "Shoot", "Edit", "Color", "Sound", "Publish"].map(
              (step, i, arr) => (
                <li key={step} className="qs-fc-hero-pipeline-item">
                  <span>{step}</span>
                  {i < arr.length - 1 && (
                    <span className="qs-fc-hero-pipeline-sep" aria-hidden>
                      →
                    </span>
                  )}
                </li>
              ),
            )}
          </ul>
        </div>
      </header>

      {/* ───────── Services ───────── */}
      <section className="qs-fc-services-section">
        <div className="qs-inner">
          <div className="qs-fc-section-head">
            <h2 className="qs-fc-section-title">
              One studio. Every <span className="qs-fc-hero-italic">format</span>.
            </h2>
            <p className="qs-fc-section-sub">
              A 12-minute YouTube film or a 12-second ad — same team, same
              standard, handled end to end. Your content stays unmistakably
              you, everywhere it lands.
            </p>
          </div>

          <div className="qs-fc-services-grid">
            {SERVICES.map((s) => (
              <article key={s.title} className="qs-fc-service-card">
                <span className="qs-fc-service-tag">{s.tag}</span>
                <h3 className="qs-fc-service-title">{s.title}</h3>
                <p className="qs-fc-service-body">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Portfolio ───────── */}
      <section id="work" className="qs-fc-portfolio-section">
        <div className="qs-inner">
          {/* Top showcase — AI-generated content */}
          <div className="qs-fc-client-feature">
            <div className="qs-fc-client-feature-video">
              <video
                className="qs-fc-client-feature-video-el"
                src="/assets/content-production/ai-realism.mp4"
                poster="/assets/content-production/ai-realism-poster.jpg"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="qs-fc-client-feature-body">
              <span className="qs-fc-client-feature-eyebrow">
                AI-generated content
              </span>
              <h3 className="qs-fc-client-feature-title">
                This isn&apos;t real. And we can make it{" "}
                <span className="qs-fc-hero-italic">for you</span>.
              </h3>
              <p className="qs-fc-client-feature-story">
                Every frame here was generated — no camera, no studio, no shoot
                day. With our in-house realism pipeline we create photoreal
                faces, products, and scenes on demand:{" "}
                <strong>campaign-ready visuals in hours, not weeks</strong>, for
                a fraction of a full production. If you can picture it, we can
                render it — sized for your ads, thumbnails, and feed.
              </p>
              <ul className="qs-fc-client-feature-pipeline">
                {AI_PIPELINE.map((p) => (
                  <li key={p}>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="qs-fc-client-feature-ctas">
                <Link href="/contact/#contact-form" className="qs-fc-btn-primary">
                  See what we can make for you
                  <span className="qs-fc-btn-icon">
                    <ArrowRight />
                  </span>
                </Link>
                <Link href="/services" className="qs-fc-client-feature-handle">
                  <GridIcon />
                  Explore the full studio
                </Link>
              </div>
            </div>
          </div>

          {/* Head */}
          <div className="qs-fc-section-head">
            <h2 className="qs-fc-section-title">
              SaaS platform{" "}
              <span className="qs-fc-hero-italic">promotion videos</span>.
            </h2>
            <p className="qs-fc-section-sub">
              Product promos and launch films that turn complex software into a
              story people get in seconds — scripted, animated, and finished for
              every feed.
            </p>
          </div>

          {/* Grid */}
          <div className="qs-fc-portfolio-grid">
            {TILES.map((t) => {
              const tileClass = [
                "qs-fc-video-tile",
                `qs-fc-video-tile--${t.orientation}`,
                t.featured ? "qs-fc-video-tile--featured" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <article key={t.title} className={tileClass}>
                  <div className="qs-fc-video-frame">
                    {t.featured && (
                      <span className="qs-fc-video-featured-badge">Featured</span>
                    )}
                    {t.src ? (
                      <video
                        className="qs-fc-video-el"
                        src={t.src}
                        poster={t.poster}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <VideoPoster format={t.format} />
                    )}
                  </div>
                  <div className="qs-fc-video-body">
                    <h3 className="qs-fc-video-title">{t.title}</h3>
                    <p className="qs-fc-video-meta">{t.meta}</p>
                    <div className="qs-fc-video-tags">
                      {t.tags.map((tag) => (
                        <span key={tag} className="qs-fc-video-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {t.description && (
                      <p className="qs-fc-video-description">{t.description}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Cinematic short film production ───────── */}
      <section className="qs-fc-film-section">
        <div className="qs-inner">
          <div className="qs-fc-film">
            <div className="qs-fc-film-header qs-fc-section-head">
              <span className="qs-fc-film-eyebrow">
                New · Cinematic short film production
              </span>
              <h2 className="qs-fc-film-title">
                Short films, made{" "}
                <span className="qs-fc-hero-italic">frame by frame</span>.
              </h2>
              <p className="qs-fc-film-sub">
                Original, story-driven shorts produced end to end — concept, AI
                cinematography, VFX, color, and sound. Genre-spanning, fully
                theatrical, and built vertical-first so they travel on every
                feed. Two recent productions, straight from the studio:
              </p>
            </div>

            <div className="qs-fc-film-gallery">
              {FILMS.map((f) => (
                <figure key={f.title} className="qs-fc-film-clip">
                  <div className="qs-fc-film-video">
                    <video
                      className="qs-fc-film-video-el"
                      src={f.src}
                      poster={f.poster}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <figcaption className="qs-fc-film-clip-body">
                    <h3 className="qs-fc-film-clip-title">
                      {f.title}
                      <span className="qs-fc-film-clip-tagline">
                        {f.tagline}
                      </span>
                    </h3>
                    <p className="qs-fc-film-clip-meta">{f.meta}</p>
                    <div className="qs-fc-film-tags">
                      {f.tags.map((tag) => (
                        <span key={tag} className="qs-fc-film-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="qs-fc-film-clip-desc">{f.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="qs-fc-film-cta">
              <p className="qs-fc-film-cta-copy">
                Have a story worth filming? We turn scripts, concepts, and even a
                single idea into finished cinematic shorts — any genre, any
                world, delivered ready to publish.
              </p>
              <div className="qs-fc-film-cta-btns">
                <Link href="/contact/#contact-form" className="qs-fc-btn-primary">
                  Pitch us your short film
                  <span className="qs-fc-btn-icon">
                    <ArrowRight />
                  </span>
                </Link>
                <Link href="/contact/#contact-form" className="qs-fc-btn-secondary">
                  Talk to the studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Product videos ───────── */}
      <section className="qs-fc-reels-pitch-section">
        <div className="qs-inner">
          <div className="qs-fc-reels-pitch">
            <div className="qs-fc-reels-pitch-body">
              <span className="qs-fc-reels-pitch-eyebrow">Product videos</span>
              <h2 className="qs-fc-reels-pitch-title">
                Product videos that make people{" "}
                <em>want it</em>.
              </h2>
              <p className="qs-fc-reels-pitch-lede">
                Studio-grade product films and 3D visualizations — every angle,
                finish, and detail rendered to make your product impossible to
                scroll past.
              </p>
              <p className="qs-fc-reels-pitch-body-copy">
                Real product or fully CGI, we build the shot end to end:
                lighting, motion, materials, and sound engineered around a single
                goal — desire. Hero launches, feature reveals, and ecommerce
                loops, delivered in every ratio your store and ads need.
              </p>
              <ul className="qs-fc-reels-pitch-list">
                {PRODUCT_POINTS.map((p) => (
                  <li key={p}>
                    <span className="qs-fc-reels-check" aria-hidden>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="qs-fc-reels-pitch-ctas">
                <Link href="/contact/#contact-form" className="qs-fc-btn-primary">
                  Get a product video
                  <span className="qs-fc-btn-icon">
                    <ArrowRight />
                  </span>
                </Link>
                <a href="#work" className="qs-fc-btn-secondary">
                  See more work
                </a>
              </div>
            </div>
            <div className="qs-fc-reels-pitch-video-wrap">
              <div className="qs-fc-reels-pitch-video">
                <video
                  className="qs-fc-reels-pitch-video-el"
                  src="/assets/content-production/product-medula-bottle.mp4"
                  poster="/assets/content-production/product-medula-bottle-poster.jpg"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <p className="qs-fc-reels-pitch-video-caption">
                medula insulated bottle — 3D product film · 0:16. A cap that
                assembles in mid-air, all five colorways, and a crush-test
                through solid concrete — fully CGI, no studio or shoot day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── UGC & Ads ───────── */}
      <section className="qs-fc-ugc-section">
        <div className="qs-inner">
          <div className="qs-fc-ugc">
            <div className="qs-fc-ugc-header">
              <span className="qs-fc-ugc-eyebrow">For business owners</span>
              <h2 className="qs-fc-ugc-title">
                UGC &amp; brand ads{" "}
                <span className="qs-fc-hero-italic">built to perform</span>.
              </h2>
              <p className="qs-fc-ugc-lede">
                Authentic, creator-style ads and polished brand spots — scripted
                around your offer and delivered ready to run.
              </p>
            </div>

            <div className="qs-fc-ugc-gallery">
              <figure className="qs-fc-ugc-clip">
                <div className="qs-fc-ugc-video">
                  <video
                    className="qs-fc-ugc-video-el"
                    src="/assets/content-production/ad-tsukiyo.mp4"
                    poster="/assets/content-production/ad-tsukiyo-poster.jpg"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <figcaption className="qs-fc-ugc-video-caption">
                  <strong>TSUKIYO — &ldquo;Streets of Tokyo&rdquo;</strong> · brand
                  ad · 24s
                  <br />
                  Cinematic city b-roll, product close-ups, and a kinetic
                  &ldquo;50% off, ending tonight&rdquo; CTA.
                </figcaption>
              </figure>
              <figure className="qs-fc-ugc-clip">
                <div className="qs-fc-ugc-video">
                  <video
                    className="qs-fc-ugc-video-el"
                    src="/assets/content-production/mirae-ugc.mp4"
                    poster="/assets/content-production/mirae-ugc-poster.jpg"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <figcaption className="qs-fc-ugc-video-caption">
                  <strong>MIRAE — LED therapy device</strong> · UGC ad · 60s
                  <br />
                  A problem-led testimonial: hook, montage, product reveal, and
                  benefit-driven CTA — captioned for sound-off.
                </figcaption>
              </figure>
            </div>

            <div className="qs-fc-ugc-content">
              <p className="qs-fc-ugc-body-copy">
                We own the whole ad, concept to export — script, hook, creators,
                edit, captions, and the native specs each platform rewards. The{" "}
                <strong>TSUKIYO</strong> drop ad and the <strong>MIRAE</strong>{" "}
                UGC testimonial show the range: a cinematic brand film on one
                end, a problem-solution creator story on the other — each cut for
                paid placement and shipped with variations to test.
              </p>
              <ul className="qs-fc-ugc-list">
                {UGC_POINTS.map((p) => (
                  <li key={p}>
                    <span className="qs-fc-ugc-check" aria-hidden>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="qs-fc-ugc-ctas">
                <Link href="/contact/#contact-form" className="qs-fc-btn-primary">
                  Request ad samples
                  <span className="qs-fc-btn-icon">
                    <ArrowRight />
                  </span>
                </Link>
                <Link href="/contact/#contact-form" className="qs-fc-btn-secondary">
                  Talk to the studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      <section className="qs-fc-process-section">
        <div className="qs-inner">
          <div className="qs-fc-process-intro">
            <span className="qs-fc-process-eyebrow">How we work</span>
            <h2 className="qs-fc-section-title">
              The DevelopersHub <span className="qs-fc-hero-italic">method</span>.
            </h2>
            <p className="qs-fc-process-lede">
              A content studio that runs like a software team — clear briefs,
              managed pipelines, predictable delivery. Four principles shape
              everything we ship.
            </p>
          </div>

          <div className="qs-fc-pillars">
            {PILLARS.map((p) => (
              <article key={p.index} className="qs-fc-pillar">
                <span className="qs-fc-pillar-index">{p.index}</span>
                <h3 className="qs-fc-pillar-title">{p.title}</h3>
                <p className="qs-fc-pillar-body">{p.body}</p>
              </article>
            ))}
          </div>

          <h3 className="qs-fc-process-subhead">
            From brief to published in{" "}
            <span className="qs-fc-hero-italic">days</span>.
          </h3>
          <ol className="qs-fc-process-steps">
            {STEPS.map((s) => (
              <li key={s.num} className="qs-fc-process-step">
                <span className="qs-fc-process-num">{s.num}</span>
                <div>
                  <h4 className="qs-fc-process-step-title">{s.title}</h4>
                  <p className="qs-fc-process-step-sub">{s.sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <CTASection className="qs-csd-final-cta qs-fc-final-cta" />

      <Footer />
    </div>
  );
}
