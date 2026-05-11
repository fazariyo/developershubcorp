"use client";

import { useEffect } from "react";
import Link from "next/link";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd8PSQSf03ro1_VDkqMQEGxMx5m0ziOjssoCGeH0SAlWOqotQ/viewform";

const COURSE_META = [
  { label: "Duration", value: "10 weeks" },
  { label: "Level", value: "Beginner-friendly" },
  { label: "Format", value: "Hybrid (live + async)" },
  { label: "After course", value: "Internship at DevelopersHub" },
];

const STATS = [
  { num: "10", unit: "wk", label: "Hands-on cohort" },
  { num: "6", unit: "", label: "Structured modules" },
  { num: "30+", unit: "", label: "Real automation projects" },
  { num: "100", unit: "%", label: "Internship placement" },
];

const OUTCOMES = [
  {
    title: "Build AI agents that complete real tasks",
    text: "Design multi-step agents that read email, query databases, decide actions — and finish them.",
  },
  {
    title: "Master prompt engineering & LLM APIs",
    text: "OpenAI, Anthropic, and Gemini APIs — when to use which, structured outputs, and cost-aware design.",
  },
  {
    title: "Ship workflows with n8n, Make & Zapier",
    text: "Trigger-action automations that connect Gmail, Slack, Notion, Airtable, HubSpot, and 200+ apps.",
  },
  {
    title: "Architect RAG over business knowledge",
    text: "Vector databases, chunking strategies, retrieval evaluation — turn company docs into a smart assistant.",
  },
  {
    title: "Automate customer support",
    text: "Build chatbots and AI assistants that resolve tickets, handle FAQs, and escalate gracefully.",
  },
  {
    title: "Integrate AI into existing tools",
    text: "Webhooks, OAuth, APIs — wire AI directly into the CRMs, helpdesks, and dashboards teams already use.",
  },
  {
    title: "Automate document processing",
    text: "Extract structured data from invoices, contracts, and forms with vision-language models.",
  },
  {
    title: "Measure ROI and deploy sustainably",
    text: "Cost monitoring, prompt versioning, error handling — automations that survive past the demo.",
  },
];

const CURRICULUM = [
  {
    num: "01",
    weeks: "Weeks 1–2",
    title: "Foundations of AI Automation",
    blurb:
      "How modern LLMs actually work, what they can and can't do, and the API patterns you'll use every day.",
    topics: [
      "LLM fundamentals & model selection",
      "OpenAI, Anthropic & Gemini APIs",
      "Prompt engineering principles",
      "Structured outputs & function calling",
    ],
    lab: "Lab — Build a smart email triage assistant that classifies and replies.",
  },
  {
    num: "02",
    weeks: "Weeks 3–4",
    title: "Workflow Automation Platforms",
    blurb:
      "The no-code/low-code tools that ship 80% of business automations. Master them before adding AI.",
    topics: [
      "n8n self-hosted & cloud workflows",
      "Make.com (Integromat) scenarios",
      "Zapier multi-step zaps",
      "Webhooks, triggers & error handling",
    ],
    lab: "Lab — Automate lead capture from web form → CRM → Slack alert → email.",
  },
  {
    num: "03",
    weeks: "Weeks 5–6",
    title: "Building AI Agents",
    blurb:
      "From single-shot prompts to agents that plan, use tools, and recover from failure on their own.",
    topics: [
      "LangChain & agent patterns",
      "CrewAI for multi-agent systems",
      "Tool use & function calling",
      "Memory, planning & reflection",
    ],
    lab: "Lab — Build a research agent that gathers, summarizes, and emails reports.",
  },
  {
    num: "04",
    weeks: "Weeks 7–8",
    title: "RAG & Knowledge Systems",
    blurb:
      "Turn unstructured business documents — PDFs, wikis, transcripts — into a queryable AI brain.",
    topics: [
      "Embeddings & vector databases",
      "Pinecone, Weaviate & ChromaDB",
      "Chunking strategies & metadata",
      "Retrieval evaluation & tuning",
    ],
    lab: "Lab — Ship a Q&A assistant over a real company knowledge base.",
  },
  {
    num: "05",
    weeks: "Week 9",
    title: "Production Integrations",
    blurb:
      "Get your automations off your laptop and into the tools your team actually uses every day.",
    topics: [
      "OAuth & API authentication",
      "Webhook security & retries",
      "Deploying to Vercel / Render / Railway",
      "Cost monitoring & observability",
    ],
    lab: "Lab — Deploy an AI assistant inside Slack with persistent memory.",
  },
  {
    num: "06",
    weeks: "Week 10",
    title: "Capstone & Internship Prep",
    blurb:
      "Ship one full automation portfolio piece — then transition straight into the internship.",
    topics: [
      "Capstone scoping & architecture",
      "Portfolio & case-study writing",
      "Internship project briefing",
      "Onboarding at DevelopersHub",
    ],
    lab: "Capstone — Ship a production AI automation, then begin internship week 11.",
  },
];

const STACK = [
  {
    group: "LLM APIs",
    items: ["OpenAI", "Anthropic Claude", "Google Gemini", "Mistral", "Groq"],
  },
  {
    group: "Workflow Platforms",
    items: ["n8n", "Make.com", "Zapier", "Pipedream"],
  },
  {
    group: "Agent Frameworks",
    items: ["LangChain", "LlamaIndex", "CrewAI", "AutoGen", "Vercel AI SDK"],
  },
  {
    group: "Knowledge & Memory",
    items: ["Pinecone", "Weaviate", "ChromaDB", "Supabase Vector", "Cohere Embeddings"],
  },
  {
    group: "Integrations",
    items: ["Slack", "Notion", "Gmail", "HubSpot", "Airtable", "Google Workspace"],
  },
  {
    group: "Hosting & Ops",
    items: ["Vercel", "Render", "Railway", "Cloudflare Workers", "Supabase"],
  },
];

const AUDIENCE = [
  {
    title: "Career Starters",
    text: "Recent graduates or students looking for a clear, in-demand specialty — with a guaranteed internship at the end.",
  },
  {
    title: "Operations & Business",
    text: "Operators, marketers, and CS folks who want to automate the repetitive parts of their work and save hours every week.",
  },
  {
    title: "Software Engineers",
    text: "Developers who want to add AI automation to their stack without dropping into ML research.",
  },
  {
    title: "Career Changers",
    text: "Professionals from any background ready to step into AI — no prior coding experience required, just curiosity.",
  },
];

const CAREER_ROLES = [
  "AI Automation Engineer",
  "AI Solutions Engineer",
  "Workflow Automation Specialist",
  "Customer Success AI Engineer",
  "Automation Consultant",
  "AI Operations Lead",
];

const INTERNSHIP_BENEFITS = [
  {
    title: "Guaranteed placement",
    text: "Complete the course and join our active internship program automatically — no separate application, no waitlist, no interview gauntlet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 11l2.5 2.5L17 8" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Real client projects",
    text: "From day one you're embedded with a project team, shipping AI automations that real customers depend on every day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    title: "Senior mentorship",
    text: "Pair weekly with a senior specialist who reviews your work, unblocks problems, and helps you grow past the course material.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M14 20c0-2.5 1.7-4.5 3.5-4.5s3.5 2 3.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Path to full-time",
    text: "Top performers are first in line for full-time AI Automation Engineer roles at DevelopersHub when openings appear.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="3 16 9 10 13 14 21 6" />
        <polyline points="15 6 21 6 21 12" />
      </svg>
    ),
  },
];

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Zainab Sheikh",
    role: "Career changer · Now AI Automation Engineer",
    quote:
      "I came from a finance background with zero coding experience. By week nine I had a deployed agent running in a real company's Slack — and a guaranteed internship waiting.",
  },
  {
    name: "Jessica Davis",
    role: "Marketer · Now AI Solutions Engineer",
    quote:
      "I was already automating workflows in Zapier. This course taught me to wire up agents that actually think — the leap in what I can ship is genuinely hard to overstate.",
  },
  {
    name: "Usman Raza",
    role: "Software Engineer · Now Senior AI Automation Engineer",
    quote:
      "Had a CS degree but felt locked out of AI. The internship pipeline got me shipping production AI within weeks of finishing the capstone. No interview gauntlet — just real work.",
  },
  {
    name: "David Wilson",
    role: "Operations Lead · Now AI Operations Lead",
    quote:
      "I joined to automate three specific workflows for my team. I left with the skills to redesign how the entire department uses AI — and a clear path to a senior role.",
  },
  {
    name: "Maryam Iqbal",
    role: "Recent Grad · Now AI Automation Engineer",
    quote:
      "The capstone-to-internship transition was seamless. I shipped my own automation in week 10, then was on a real client project in week 11. Best decision I made out of school.",
  },
  {
    name: "Lauren Cooper",
    role: "Customer Success · Now Workflow Automation Specialist",
    quote:
      "I learned more in the first three weeks than I had in two years of YouTube tutorials. The agents module alone was worth the entire course fee.",
  },
];

const FAQS = [
  {
    q: "Is the internship really guaranteed?",
    a: "Yes. Every student who completes the course and ships their capstone is placed in our internship program — no second application, no interview rounds. The course itself is the screen; if you make it to capstone, you've already proven you can do the work.",
  },
  {
    q: "What does the internship look like?",
    a: "You're embedded with a real client project team for an initial 3-month term. You'll work alongside senior specialists on shipping AI automations — same scope, same rigour, same review process. Most interns extend or transition to a full-time conversation by month four.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. The course is built for beginners. We start from absolute zero — APIs, no-code platforms, then progressively introduce light scripting where it adds real leverage. By week six you'll be writing Python comfortably; by week ten you'll be shipping.",
  },
  {
    q: "Is this online, in-person, or hybrid?",
    a: "Hybrid. Two live sessions per week (one lecture, one hands-on lab) plus async assignments. All sessions are recorded for anyone in a different timezone. Optional in-person meetups at our Islamabad HQ for cohort members nearby.",
  },
  {
    q: "What's the capstone?",
    a: "You'll ship a production-grade AI automation of your choosing — past examples: an AI sales-lead enricher, a customer-support agent, a financial document extractor, a meeting-notes-to-CRM pipeline. We provide mentorship and scope review; you bring the idea.",
  },
  {
    q: "How much does the course cost?",
    a: "Contact admissions for the current fee structure — cohort pricing, scholarships for outstanding candidates, and alumni referrals are all available. Apply first and we'll cover everything on the intake call, including how the internship factors into your overall investment.",
  },
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="2" y1="7" x2="12" y2="7" />
    <polyline points="8 3 12 7 8 11" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="2.5 7.5 5.5 10.5 11.5 4" />
  </svg>
);

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

const SparkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 1.5L7 4.5L10 5.5L7 6.5L6 9.5L5 6.5L2 5.5L5 4.5L6 1.5Z" fill="currentColor" stroke="none" />
  </svg>
);

/** Animated AI automation flow diagram — trigger → agent → multi-action. */
const AutomationFlow = () => (
  <svg
    viewBox="0 0 380 380"
    className="dh-flow-svg"
    aria-hidden
    role="presentation"
  >
    <defs>
      <radialGradient id="dh-flow-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
        <stop offset="60%" stopColor="#ec4899" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="dh-flow-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="dh-flow-agent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>

    {/* Connection paths — trigger → agent */}
    <g className="dh-flow-lines" fill="none" stroke="url(#dh-flow-line)" strokeWidth="1.6">
      <path d="M 80 110 Q 130 110, 165 165" />
      <path d="M 80 270 Q 130 270, 165 215" />
    </g>

    {/* Connection paths — agent → actions (animated flow) */}
    <g className="dh-flow-lines dh-flow-lines--anim" fill="none" stroke="url(#dh-flow-line)" strokeWidth="1.6">
      <path d="M 245 165 Q 290 130, 315 90" />
      <path d="M 245 175 Q 290 175, 315 165" />
      <path d="M 245 205 Q 290 220, 315 245" />
      <path d="M 245 215 Q 290 270, 315 320" />
    </g>

    {/* Trigger nodes (left) */}
    <g className="dh-flow-node">
      <circle cx="60" cy="110" r="26" fill="url(#dh-flow-glow)" />
      <rect x="42" y="92" width="36" height="36" rx="10" className="dh-flow-rect" />
      <g transform="translate(48, 98)" stroke="#8b5cf6" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9 L9 3 L21 15 L15 21 Z" />
        <line x1="11" y1="11" x2="13" y2="13" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="60" cy="270" r="26" fill="url(#dh-flow-glow)" />
      <rect x="42" y="252" width="36" height="36" rx="10" className="dh-flow-rect" />
      <g transform="translate(48, 258)" stroke="#8b5cf6" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <polyline points="3 8 12 14 21 8" />
      </g>
    </g>

    {/* AI agent (center, large) */}
    <g className="dh-flow-agent">
      <circle cx="205" cy="190" r="55" fill="url(#dh-flow-glow)" opacity="1.2" />
      <circle cx="205" cy="190" r="40" fill="url(#dh-flow-agent)" className="dh-flow-agent-circle" />
      <g transform="translate(186, 171)" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 11.5c0 1-.5 1.6-1.2 2 .8.5 1.2 1.3 1.2 2.3 0 1.8-1.4 3.2-3.2 3.2-.6 0-1.2-.2-1.8-.5-.4 1.3-1.7 2.3-3.2 2.3s-2.8-1-3.2-2.3c-.5.3-1.1.5-1.8.5C4 19 2.6 17.6 2.6 15.8c0-1 .4-1.8 1.2-2.3-.7-.5-1.2-1.2-1.2-2 0-1.3.9-2.4 2.2-2.7-.2-.4-.3-.9-.3-1.4 0-1.8 1.4-3.2 3.2-3.2.7 0 1.3.2 1.8.6.4-1.4 1.7-2.4 3.3-2.4s2.8 1 3.3 2.4c.5-.4 1.1-.6 1.8-.6 1.8 0 3.2 1.4 3.2 3.2 0 .5-.1 1-.3 1.4 1.3.3 2.2 1.4 2.2 2.7Z" />
      </g>
    </g>

    {/* Action nodes (right) */}
    <g className="dh-flow-node">
      <circle cx="335" cy="90" r="22" fill="url(#dh-flow-glow)" />
      <rect x="319" y="74" width="32" height="32" rx="9" className="dh-flow-rect" />
      {/* mail icon */}
      <g transform="translate(323, 78)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2 6 12 14 22 6" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="335" cy="165" r="22" fill="url(#dh-flow-glow)" />
      <rect x="319" y="149" width="32" height="32" rx="9" className="dh-flow-rect" />
      {/* slack/chat icon */}
      <g transform="translate(323, 153)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.8-1L3 21l1.7-5.2c-.7-1.2-1.2-2.7-1.2-4.3a8.5 8.5 0 1 1 17.5 0Z" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="335" cy="245" r="22" fill="url(#dh-flow-glow)" />
      <rect x="319" y="229" width="32" height="32" rx="9" className="dh-flow-rect" />
      {/* database icon */}
      <g transform="translate(323, 233)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8.5" ry="3" />
        <path d="M3.5 5v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V5" />
        <path d="M3.5 11v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3v-6" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="335" cy="320" r="22" fill="url(#dh-flow-glow)" />
      <rect x="319" y="304" width="32" height="32" rx="9" className="dh-flow-rect" />
      {/* webhook/api icon */}
      <g transform="translate(323, 308)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="7 9 3 12 7 15" />
        <polyline points="17 9 21 12 17 15" />
        <line x1="14" y1="6" x2="10" y2="18" />
      </g>
    </g>

    {/* Flow dots traveling along agent->action paths */}
    <g className="dh-flow-pulses">
      <circle r="3" fill="#ec4899" className="dh-flow-pulse">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M 245 165 Q 290 130, 315 90" />
      </circle>
      <circle r="3" fill="#ec4899" className="dh-flow-pulse">
        <animateMotion dur="3.6s" begin="0.4s" repeatCount="indefinite" path="M 245 175 Q 290 175, 315 165" />
      </circle>
      <circle r="3" fill="#ec4899" className="dh-flow-pulse">
        <animateMotion dur="3.4s" begin="0.8s" repeatCount="indefinite" path="M 245 205 Q 290 220, 315 245" />
      </circle>
      <circle r="3" fill="#ec4899" className="dh-flow-pulse">
        <animateMotion dur="3.8s" begin="1.2s" repeatCount="indefinite" path="M 245 215 Q 290 270, 315 320" />
      </circle>
    </g>
  </svg>
);

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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function CoursesPageBody() {
  useScrollReveal();

  return (
    <div className="main dh-courses-page">
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
          <div className="dh-hero-grid">
            {/* Left — copy */}
            <div className="dh-hero-copy">
              <div className="dh-hero-chips">
                <span className="dh-course-eyebrow">
                  <span className="dh-eyebrow-dot" aria-hidden />
                  Applications open
                </span>
                <span className="dh-intern-badge">
                  <SparkIcon />
                  Internship guaranteed
                </span>
              </div>
              <h1 className="dh-course-title">
                <span className="dh-course-italic">AI Automation</span>
                <span className="dh-course-title-sub">Course</span>
              </h1>
              <p className="dh-course-tagline">
                Ship AI agents and workflows that save real time — and walk straight
                into an internship at DevelopersHub when you graduate.
              </p>
              <p className="dh-course-lede">
                A 10-week, beginner-friendly course built for people who want to
                <em> use </em>
                AI — not research it. You&apos;ll learn the LLM APIs, agent
                frameworks, and no-code tools shipping at companies today, build
                30+ real automations, and finish with a guaranteed internship at
                our firm.
              </p>
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
                {COURSE_META.map((m) => (
                  <div key={m.label} className="dh-course-meta-item">
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right — automation flow visual */}
            <div className="dh-hero-visual">
              <AutomationFlow />
              <div className="dh-code-card" aria-hidden>
                <span className="dh-code-dots">
                  <i /><i /><i />
                </span>
                <pre>
                  <code>
{`// agent.js
const agent = createAgent({
  model: "claude-sonnet",
  tools: [slack, gmail, db],
});
await agent.run(trigger);`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ───────── Stats strip ───────── */}
      <section className="dh-stats-strip dh-reveal">
        <div className="dh-inner">
          <div className="dh-stats-row">
            {STATS.map((s) => (
              <div key={s.label} className="dh-stat">
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
            <span className="dh-sec-num">01</span>
            <h2 className="dh-sec-title">
              What you&apos;ll <span className="dh-italic">master</span>
            </h2>
            <p className="dh-sec-lede">
              Eight concrete skills you&apos;ll use the day you walk into your
              internship. Each one practiced across multiple labs and reinforced
              in your capstone.
            </p>
          </header>

          <div className="dh-outcomes-grid">
            {OUTCOMES.map((o, i) => (
              <article
                key={o.title}
                className="dh-outcome dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 40}ms` } as React.CSSProperties}
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
            <span className="dh-sec-num">02</span>
            <h2 className="dh-sec-title">
              The <span className="dh-italic">curriculum</span>
            </h2>
            <p className="dh-sec-lede">
              Six progressive modules over ten weeks. Each ends with a lab that
              mirrors real client work — and the capstone in week 10 hands you
              directly to your internship project.
            </p>
          </header>

          <ol className="dh-timeline">
            {CURRICULUM.map((m, i) => (
              <li
                key={m.num}
                className="dh-module dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 70}ms` } as React.CSSProperties}
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

      {/* ───────── Tech stack ───────── */}
      <section className="dh-course-section">
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">03</span>
            <h2 className="dh-sec-title">
              The <span className="dh-italic">stack</span> you&apos;ll ship with
            </h2>
            <p className="dh-sec-lede">
              The exact tools real automation engineers use every day. By week two
              you&apos;ll be hands-on with most of them.
            </p>
          </header>

          <div className="dh-stack-grid dh-reveal">
            {STACK.map((g) => (
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
            <span className="dh-sec-num">04</span>
            <h2 className="dh-sec-title">
              Who it&apos;s <span className="dh-italic">for</span>
            </h2>
            <p className="dh-sec-lede">
              Built for people who want to put AI to work — regardless of where
              they&apos;re starting from.
            </p>
          </header>

          <div className="dh-audience-grid dh-reveal">
            {AUDIENCE.map((a) => (
              <article key={a.title} className="dh-audience-item">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Internship at DevelopersHub ───────── */}
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
            <span className="dh-sec-num">05</span>
            <h2 className="dh-sec-title">
              Your <span className="dh-italic">internship</span> at DevelopersHub
            </h2>
            <p className="dh-sec-lede">
              Every graduate transitions directly into our internship program
              after the capstone. No separate application. No waitlist. The
              course is your interview.
            </p>
          </header>

          {/* Path timeline */}
          <div className="dh-path-rail dh-reveal">
            <div className="dh-path-step">
              <span className="dh-path-num">01</span>
              <div>
                <h4>10-Week Course</h4>
                <p>Weeks 1–10 — Learn, build, ship 30+ automations.</p>
              </div>
            </div>
            <div className="dh-path-arrow" aria-hidden>→</div>
            <div className="dh-path-step">
              <span className="dh-path-num">02</span>
              <div>
                <h4>Capstone</h4>
                <p>Week 10 — Ship one production-grade automation.</p>
              </div>
            </div>
            <div className="dh-path-arrow" aria-hidden>→</div>
            <div className="dh-path-step dh-path-step--highlight">
              <span className="dh-path-num">03</span>
              <div>
                <h4>Internship</h4>
                <p>Weeks 11+ — Join a real client project at DevelopersHub.</p>
              </div>
            </div>
          </div>

          <div className="dh-intern-grid">
            {INTERNSHIP_BENEFITS.map((b, i) => (
              <article
                key={b.title}
                className="dh-intern-card dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <div className="dh-intern-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>

          <div className="dh-roles-block dh-reveal">
            <div className="dh-roles-block-head">
              <h3>Roles graduates have stepped into</h3>
              <p>What the internship and full-time conversation look like:</p>
            </div>
            <ul className="dh-roles-list">
              {CAREER_ROLES.map((r) => (
                <li key={r}>
                  <span className="dh-role-mark" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── §06 Testimonials ───────── */}
      <section className="dh-course-section dh-course-section--alt">
        <div className="dh-section-bg" aria-hidden>
          <span className="dh-bg-orb dh-bg-orb-a" />
          <span className="dh-bg-orb dh-bg-orb-b" />
        </div>
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">06</span>
            <h2 className="dh-sec-title">
              What graduates <span className="dh-italic">say</span>
            </h2>
            <p className="dh-sec-lede">
              Stories from past cohorts — engineers, career changers, and
              operators who shipped real AI automations and walked into their
              next role.
            </p>
          </header>

          <div
            className="dh-tm-marquee dh-reveal"
            aria-roledescription="carousel"
            aria-label="Course graduate testimonials"
          >
            <div className="dh-tm-track">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <figure
                  key={`${t.name}-${i}`}
                  className="dh-tm-card"
                  aria-hidden={i >= TESTIMONIALS.length}
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
                      <span className="dh-tm-avatar-inner">
                        {initialsOf(t.name)}
                      </span>
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

      {/* ───────── §07 FAQ ───────── */}
      <section className="dh-course-section">
        <div className="dh-inner">
          <header className="dh-sec-head dh-reveal">
            <span className="dh-sec-num">07</span>
            <h2 className="dh-sec-title">
              Common <span className="dh-italic">questions</span>
            </h2>
          </header>
          <div className="dh-faq-list">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className="dh-faq-item dh-reveal"
                style={{ "--dh-reveal-delay": `${i * 50}ms` } as React.CSSProperties}
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
                Course + Internship — limited seats
              </span>
              <h2 className="dh-cta-title">
                Learn AI Automation. <span className="dh-italic">Intern</span> with us.
              </h2>
              <p className="dh-cta-copy">
                Ten weeks of hands-on training, followed immediately by a real
                internship at DevelopersHub Corporation. Apply once — we&apos;ll
                reply within three business days.
              </p>
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
