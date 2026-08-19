import type { CourseVisualKey } from "@/components/courseVisuals";

/** Shared registration form for every cohort. */
export const REGISTER_URL = "https://forms.gle/r6VJ4DSoy2s8JLHb8";

export type BenefitIcon = "check" | "briefcase" | "mentor" | "growth";

export type CourseModule = {
  num: string;
  weeks: string;
  title: string;
  blurb: string;
  topics: string[];
  lab: string;
};

export type Course = {
  /** URL segment under /courses/ */
  slug: string;
  /** Short name used in cards and navigation. */
  name: string;
  /** Hero headline, split so the serif italic lands on the first line. */
  heroTitle: string;
  heroTitleSub: string;
  metaTitle: string;
  metaDescription: string;

  /**
   * A single accent per course, applied as --course-accent on the page root.
   * The site uses colour sparingly - dots, hairlines and low tints - so one
   * hue per course is enough to tell them apart.
   */
  accent: string;

  eyebrow: string;
  badge: string;
  tagline: string;
  lede: string;
  visual: CourseVisualKey;
  /** Floating card in the hero visual. */
  heroCard: { kind: "code" | "note"; title?: string; lines: string[] };

  courseMeta: { label: string; value: string }[];
  stats: { num: string; unit: string; label: string }[];

  outcomesTitle: string;
  outcomesItalic: string;
  outcomesLede: string;
  outcomes: { title: string; text: string }[];

  curriculumTitle: string;
  curriculumItalic: string;
  curriculumLede: string;
  curriculum: CourseModule[];

  stackTitle: string;
  stackItalic: string;
  stackTitleTail: string;
  stackLede: string;
  stack: { group: string; items: string[] }[];

  audienceLede: string;
  audience: { title: string; text: string }[];

  internship: {
    lede: string;
    path: { num: string; title: string; text: string }[];
    benefits: { icon: BenefitIcon; title: string; text: string }[];
    rolesTitle: string;
    rolesLede: string;
    roles: string[];
  };

  /** Optional — only shown once a cohort has real graduate quotes to publish. */
  testimonials?: { name: string; role: string; quote: string }[];

  faqs: { q: string; a: string }[];

  cta: { eyebrow: string; title: string; italic: string; titleTail: string; copy: string };

  /** Fields used by the /courses listing cards. */
  card: {
    kicker: string;
    summary: string;
    highlights: string[];
    tags: string[];
    duration: string;
    level: string;
    format: string;
  };
};

/* ══════════════════════════════════════════════════════════════════════════
   01 — AI Automation
   ══════════════════════════════════════════════════════════════════════════ */

const AI_AUTOMATION: Course = {
  slug: "ai-automation",
  name: "AI Automation",
  heroTitle: "AI Automation",
  heroTitleSub: "Course",
  metaTitle: "AI Automation Course — Learn to Build AI Agents & Workflows",
  metaDescription:
    "A 10-week hands-on AI automation course that takes you from zero to shipping AI agents, automated workflows, and production integrations. Every graduate joins our internship program at DevelopersHub Corporation.",

  accent: "#6366f1",

  eyebrow: "Applications open",
  badge: "Internship guaranteed",
  tagline:
    "Ship AI agents and workflows that save real time — and walk straight into an internship at DevelopersHub when you graduate.",
  lede: "A 10-week, beginner-friendly course built for people who want to use AI — not research it. You'll learn the LLM APIs, agent frameworks, and no-code tools shipping at companies today, build 6+ real automations, and finish with a guaranteed internship at our firm.",
  visual: "automation",
  heroCard: {
    kind: "code",
    lines: [
      "// agent.js",
      "const agent = createAgent({",
      '  model: "claude-sonnet",',
      "  tools: [slack, gmail, db],",
      "});",
      "await agent.run(trigger);",
    ],
  },

  courseMeta: [
    { label: "Duration", value: "10 weeks" },
    { label: "Level", value: "Beginner-friendly" },
    { label: "Format", value: "Hybrid (live + async)" },
    { label: "After course", value: "Internship at DevelopersHub" },
  ],

  stats: [
    { num: "10", unit: "wk", label: "Hands-on cohort" },
    { num: "6", unit: "", label: "Structured modules" },
    { num: "6+", unit: "", label: "Real automation projects" },
    { num: "100", unit: "%", label: "Internship placement" },
  ],

  outcomesTitle: "What you'll",
  outcomesItalic: "master",
  outcomesLede:
    "Eight concrete skills you'll use the day you walk into your internship. Each one practiced across multiple labs and reinforced in your capstone.",
  outcomes: [
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
  ],

  curriculumTitle: "The",
  curriculumItalic: "curriculum",
  curriculumLede:
    "Six progressive modules over ten weeks. Each ends with a lab that mirrors real client work — and the capstone in week 10 hands you directly to your internship project.",
  curriculum: [
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
  ],

  stackTitle: "The",
  stackItalic: "stack",
  stackTitleTail: "you'll ship with",
  stackLede:
    "The exact tools real automation engineers use every day. By week two you'll be hands-on with most of them.",
  stack: [
    { group: "LLM APIs", items: ["OpenAI", "Anthropic Claude", "Google Gemini", "Mistral", "Groq"] },
    { group: "Workflow Platforms", items: ["n8n", "Make.com", "Zapier", "Pipedream"] },
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
  ],

  audienceLede:
    "Built for people who want to put AI to work — regardless of where they're starting from.",
  audience: [
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
  ],

  internship: {
    lede: "Every graduate transitions directly into our internship program after the capstone. No separate application. No waitlist. The course is your interview.",
    path: [
      { num: "01", title: "10-Week Course", text: "Weeks 1–10 — Learn, build, ship 6+ automations." },
      { num: "02", title: "Capstone", text: "Week 10 — Ship one production-grade automation." },
      { num: "03", title: "Internship", text: "Weeks 11+ — Join a real client project at DevelopersHub." },
    ],
    benefits: [
      {
        icon: "check",
        title: "Guaranteed placement",
        text: "Complete the course and join our active internship program automatically — no separate application, no waitlist, no interview gauntlet.",
      },
      {
        icon: "briefcase",
        title: "Real client projects",
        text: "From day one you're embedded with a project team, shipping AI automations that real customers depend on every day.",
      },
      {
        icon: "mentor",
        title: "Senior mentorship",
        text: "Pair weekly with a senior specialist who reviews your work, unblocks problems, and helps you grow past the course material.",
      },
      {
        icon: "growth",
        title: "Path to full-time",
        text: "Top performers are first in line for full-time AI Automation Engineer roles at DevelopersHub when openings appear.",
      },
    ],
    rolesTitle: "Roles graduates have stepped into",
    rolesLede: "What the internship and full-time conversation look like:",
    roles: [
      "AI Automation Engineer",
      "AI Solutions Engineer",
      "Workflow Automation Specialist",
      "Customer Success AI Engineer",
      "Automation Consultant",
      "AI Operations Lead",
    ],
  },

  testimonials: [
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
  ],

  faqs: [
    {
      q: "Is the internship really guaranteed?",
      a: "Yes. Every student who completes the course and ships their capstone is placed in our internship program — no second application, no interview rounds. The course itself is the screen; if you make it to capstone, you've already proven you can do the work.",
    },
    {
      q: "What does the internship look like?",
      a: "You're embedded with a project team for an initial 3-month term, working on real-world projects that make your portfolio stronger. You'll work alongside senior specialists on shipping AI automations — same scope, same rigour, same review process. Most interns extend or transition to a full-time conversation by month four.",
    },
    {
      q: "Do I need to know how to code?",
      a: "No. The course is built for beginners. We start from absolute zero — APIs, no-code platforms, then progressively introduce light scripting where it adds real leverage. By week six you'll be writing Python comfortably; by week ten you'll be shipping.",
    },
    {
      q: "Is this online, in-person, or hybrid?",
      a: "Hybrid. Two live sessions per week (one lecture, one hands-on lab) plus async assignments. All sessions are recorded for anyone in a different timezone.",
    },
    {
      q: "What's the capstone?",
      a: "You'll ship a production-grade AI automation of your choosing — past examples: an AI sales-lead enricher, a customer-support agent, a financial document extractor, a meeting-notes-to-CRM pipeline. We provide mentorship and scope review; you bring the idea.",
    },
    {
      q: "How much does the course cost?",
      a: "Contact admissions for the current fee structure — cohort pricing, scholarships for outstanding candidates, and alumni referrals are all available. Apply first and we'll cover everything on the intake call, including how the internship factors into your overall investment.",
    },
  ],

  cta: {
    eyebrow: "Course + Internship — limited seats",
    title: "Learn AI Automation.",
    italic: "Intern",
    titleTail: "with us.",
    copy: "Ten weeks of hands-on training, followed immediately by a real internship at DevelopersHub Corporation. Apply once — we'll reply within three business days.",
  },

  card: {
    kicker: "Flagship cohort",
    summary:
      "Go from zero to shipping AI agents, automated workflows, and production integrations in ten weeks — then step straight into a real internship.",
    highlights: [
      "Build 6+ real automations across LLM APIs, n8n, Make and Zapier",
      "Architect RAG systems over live business knowledge bases",
      "Deploy agents into Slack, CRMs, and helpdesks that teams actually use",
    ],
    tags: ["AI Agents", "n8n & Zapier", "RAG", "LLM APIs"],
    duration: "10 weeks",
    level: "Beginner-friendly",
    format: "Hybrid (live + async)",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   02 — The Art of Selling
   ══════════════════════════════════════════════════════════════════════════ */

const ART_OF_SELLING: Course = {
  slug: "art-of-selling",
  name: "The Art of Selling",
  heroTitle: "The Art of Selling",
  heroTitleSub: "Course",
  metaTitle: "The Art of Selling — 6-Week Consultative Sales Course",
  metaDescription:
    "A 6-week, 12-class course that teaches you to think, speak, and act like a natural seller — market fluency, USP positioning, pitching, objection handling, negotiation, and closing. Graduates join the internship program at DevelopersHub Corporation.",

  accent: "#0f8c7f",

  eyebrow: "Applications open",
  badge: "Internship guaranteed",
  tagline:
    "Learn to identify a client's real problem and present yourself as the solution — consultative, market-fluent, and never salesy.",
  lede: "Selling is one craft, applied everywhere — to yourself, your services, or your business. Over six weeks and twelve live classes you'll build the mindset, the market fluency, and the language to sell without ever sounding like you're selling. You finish with a complete, reusable sales portfolio and an internship at DevelopersHub.",
  visual: "selling",
  heroCard: {
    kind: "note",
    title: "The pitch structure",
    lines: ["Hook", "Problem", "Solution (your USP)", "Proof", "Ask"],
  },

  courseMeta: [
    { label: "Duration", value: "6 weeks" },
    { label: "Classes", value: "2 per week (12 total)" },
    { label: "Level", value: "No experience needed" },
    { label: "After course", value: "Internship at DevelopersHub" },
  ],

  stats: [
    { num: "6", unit: "wk", label: "Live cohort" },
    { num: "12", unit: "", label: "Classes, all hands-on" },
    { num: "5", unit: "", label: "Portfolio deliverables" },
    { num: "100", unit: "%", label: "Internship placement" },
  ],

  outcomesTitle: "What you'll",
  outcomesItalic: "master",
  outcomesLede:
    "Eight skills that compound. Every class ends with an activity, and every activity produces something you keep — the pieces of your final sales portfolio.",
  outcomes: [
    {
      title: "Think consultatively, not 'salesy'",
      text: "Make the shift from convincing to solving — the mindset that separates a trusted advisor from a pushy pitcher.",
    },
    {
      title: "Communicate in a way that builds trust",
      text: "Tone, pacing, and clarity under pressure; active listening that hears what a client isn't saying.",
    },
    {
      title: "Speak any market's language",
      text: "Pick up industry terminology fast and sound native to a niche without faking expertise.",
    },
    {
      title: "Find a market's real problems",
      text: "Understand how businesses actually work inside, then uncover and validate pain points instead of assuming them.",
    },
    {
      title: "Define a USP clients actually care about",
      text: "Mine your real experience for genuine differentiators — and avoid the generic traps like 'hard worker'.",
    },
    {
      title: "Build a repeatable prospecting system",
      text: "Channels, outreach that gets replies, lead qualification, and a simple pipeline you can run every week.",
    },
    {
      title: "Pitch so it feels like help",
      text: "Hook → problem → solution → proof → ask, tuned to the audience and stripped of anything they don't care about.",
    },
    {
      title: "Handle objections, negotiate, and close",
      text: "Reframe the real concern behind a 'no', anchor an offer, know your walk-away point, and ask for the close with confidence.",
    },
  ],

  curriculumTitle: "The",
  curriculumItalic: "curriculum",
  curriculumLede:
    "Six weeks, twelve classes, two per week. Each week ends with a practical activity and a takeaway you keep — building toward a live capstone in front of a panel.",
  curriculum: [
    {
      num: "01",
      weeks: "Week 1 · Classes 1–2",
      title: "Mindset & Communication Foundations",
      blurb:
        "Build the internal mindset that separates a trusted advisor from a pitcher — then learn to speak so people want to keep talking to you.",
      topics: [
        "From 'convincing' to consultative thinking",
        "Confidence without arrogance; curiosity as a tool",
        "Tone, pacing & clarity under pressure",
        "Active listening — hearing what isn't said",
      ],
      lab: "Activity — Mindset self-audit plus a recorded 60-second impromptu pitch with peer feedback. Takeaway: your pre-call mental checklist.",
    },
    {
      num: "02",
      weeks: "Week 2 · Classes 3–4",
      title: "Market Fluency",
      blurb:
        "Learn to sound like an insider in any niche — and to see a market's actual problems instead of the ones you assumed.",
      topics: [
        "Why phrasing and terminology drive credibility",
        "Researching a market before you ever speak to it",
        "How businesses really operate inside",
        "Uncovering and validating pain points",
      ],
      lab: "Activity — Present the insider vocabulary of a chosen industry and document three validated pain points. Takeaway: a market-language cheat sheet and a pain-point map.",
    },
    {
      num: "03",
      weeks: "Week 3 · Classes 5–6",
      title: "Positioning & Your USP",
      blurb:
        "Find what genuinely makes you different, then translate it into language that answers one specific client problem.",
      topics: [
        "What a USP actually is — and the generic traps",
        "Mining your experience for real differentiators",
        "Features vs. benefits — clients only buy benefits",
        "Framing yourself as the answer, not an option",
      ],
      lab: "Activity — USP workshop with peer critique, then rewrite a generic self-pitch as a problem-solution pitch. Takeaway: a tested one-line USP and a pitch template.",
    },
    {
      num: "04",
      weeks: "Week 4 · Classes 7–8",
      title: "Finding Clients & Pitching",
      blurb:
        "Build a repeatable system for finding the right people — then deliver a pitch that reads as help, not a sales push.",
      topics: [
        "Prospecting channels, referrals & communities",
        "Outreach that gets replies; qualifying a lead",
        "Pitch structure: hook → problem → USP → proof → ask",
        "The 'so what' test — cutting what clients don't care about",
      ],
      lab: "Activity — Build a three-touch outreach sequence and record a two-minute pitch using your own USP and pain-point research. Takeaway: a working prospecting system and a rehearsed pitch.",
    },
    {
      num: "05",
      weeks: "Week 5 · Classes 9–10",
      title: "Objections & Negotiation",
      blurb:
        "Respond to hesitation without losing composure or the deal, then negotiate terms that protect both the relationship and your value.",
      topics: [
        "Price, timing, trust & 'I need to think about it'",
        "Reframing the real concern behind an objection",
        "Anchoring, concessions & walk-away points",
        "Win-win framing vs. win-lose",
      ],
      lab: "Activity — Live role-played objection drills and a full negotiation simulation with instructor feedback. Takeaway: an objection-response cheat sheet and a negotiation prep worksheet.",
    },
    {
      num: "06",
      weeks: "Week 6 · Classes 11–12",
      title: "Closing & Live Capstone",
      blurb:
        "Read buying signals and ask for the close with confidence — then run the entire cycle live in front of a panel.",
      topics: [
        "Timing the close; techniques that don't feel forced",
        "The follow-up system most people skip",
        "Turning a closed deal into referrals",
        "Capstone panel with the DevelopersHub team",
      ],
      lab: "Capstone — Sell anything, live: market research → USP → pitch → objection handling → negotiation → close, in front of a panel. Deliverable: a complete sales portfolio.",
    },
  ],

  stackTitle: "The",
  stackItalic: "toolkit",
  stackTitleTail: "you'll walk out with",
  stackLede:
    "Frameworks you'll actually use, artefacts you'll actually keep. Nothing here is theory you leave behind at the end of the cohort.",
  stack: [
    {
      group: "Frameworks",
      items: [
        "Consultative selling",
        "Pain-point mapping",
        "USP positioning",
        "Hook → Problem → Solution → Proof → Ask",
        "The 'so what' test",
      ],
    },
    {
      group: "Prospecting",
      items: ["Cold email", "LinkedIn outreach", "Referrals", "Communities", "Events & meetups"],
    },
    {
      group: "Negotiation",
      items: ["Anchoring", "Concession trading", "Walk-away points", "Win-win framing"],
    },
    {
      group: "Your deliverables",
      items: [
        "USP statement",
        "Pain-point map",
        "Pitch script",
        "Objection cheat sheet",
        "Follow-up system",
      ],
    },
    {
      group: "Practice formats",
      items: ["Live role-play", "Recorded pitches", "Peer critique", "Panel capstone"],
    },
    {
      group: "Working tools",
      items: ["CRM pipeline basics", "Outreach trackers", "Call review", "Market research workflows"],
    },
  ],

  audienceLede:
    "Selling is one craft applied everywhere. Whether you're selling a service, a business, or yourself in an interview, the cycle is the same.",
  audience: [
    {
      title: "Freelancers & Service Providers",
      text: "Designers, developers, and marketers who can do the work brilliantly but freeze the moment it's time to talk price.",
    },
    {
      title: "Sales & BD Starters",
      text: "Anyone stepping into a first sales, business development, or account role who wants a system instead of a script.",
    },
    {
      title: "Founders & Solo Operators",
      text: "You are the sales team. Learn to sell the business consultatively — without sounding like you're selling at all.",
    },
    {
      title: "Students & Career Changers",
      text: "No experience needed. Selling yourself in an interview is the same craft as selling a service to a client.",
    },
  ],

  internship: {
    lede: "Pass the capstone panel and you move straight into our internship program — putting the cycle to work on real client conversations at DevelopersHub.",
    path: [
      { num: "01", title: "6-Week Course", text: "Weeks 1–6 — Twelve classes, twelve activities, five deliverables." },
      { num: "02", title: "Capstone Panel", text: "Week 6 — Run the full sales cycle live in front of a panel." },
      { num: "03", title: "Internship", text: "Weeks 7+ — Join real client and business development work." },
    ],
    benefits: [
      {
        icon: "check",
        title: "Guaranteed placement",
        text: "Complete the course and pass the capstone panel, and you join our internship program automatically — no separate application, no waitlist.",
      },
      {
        icon: "briefcase",
        title: "Real client conversations",
        text: "You're embedded with the business development team — researching markets, writing outreach, and sitting in on live client calls.",
      },
      {
        icon: "mentor",
        title: "Senior mentorship",
        text: "Pair weekly with a senior partnerships lead who reviews your outreach, debriefs your calls, and sharpens your positioning.",
      },
      {
        icon: "growth",
        title: "Path to full-time",
        text: "Top performers are first in line for full-time business development and partnerships roles at DevelopersHub when openings appear.",
      },
    ],
    rolesTitle: "Where this craft takes you",
    rolesLede: "Roles the portfolio and the cycle prepare you for:",
    roles: [
      "Business Development Executive",
      "Sales Development Representative",
      "Account Executive",
      "Client Partnerships Associate",
      "Freelance Consultant",
      "Founder / Solo Operator",
    ],
  },

  faqs: [
    {
      q: "Do I need any sales experience?",
      a: "None. The course starts with mindset and communication, not scripts. Plenty of students arrive from engineering, design, or straight out of university — what matters is a willingness to be recorded, critiqued, and to try again.",
    },
    {
      q: "How much of this is practice versus theory?",
      a: "Every one of the twelve classes ends with a hands-on activity, and weeks five and six are almost entirely live role-play — objection drills, negotiation simulations, and the capstone panel. You'll be pitching on camera from week one.",
    },
    {
      q: "What do I actually walk away with?",
      a: "A complete, reusable sales portfolio: a tested one-line USP, a pain-point map for your chosen niche, a pitch script, an objection-response cheat sheet, a follow-up system, and a recording of your live capstone performance — ready to use in job hunting, freelancing, or business development.",
    },
    {
      q: "Does this only work for tech or software services?",
      a: "No. The craft is market-agnostic — that's the point of the market fluency week. You choose your own niche in week two and every subsequent activity is built around it, whether that's SaaS, real estate, fitness, or consulting.",
    },
    {
      q: "What's the schedule?",
      a: "Two live classes per week for six weeks. Sessions are recorded for anyone in a different timezone, though the role-play weeks are much more valuable live — that's where the feedback happens.",
    },
    {
      q: "Is the internship really guaranteed?",
      a: "Yes, for every student who completes the twelve classes and passes the capstone panel. The panel is the screen; if you can run the full cycle live, you've already shown you can do the work.",
    },
  ],

  cta: {
    eyebrow: "Course + Internship — limited seats",
    title: "Learn to sell anything.",
    italic: "Intern",
    titleTail: "with us.",
    copy: "Six weeks of live, hands-on practice — then a real internship at DevelopersHub Corporation. Apply once and we'll reply within three business days.",
  },

  card: {
    kicker: "New cohort",
    summary:
      "Six weeks and twelve live classes that teach you to think, speak, and act like a natural seller — consultative, market-fluent, and never salesy.",
    highlights: [
      "Twelve live classes, each ending in a hands-on activity",
      "Live objection drills, negotiation simulations, and a capstone panel",
      "Walk out with a full sales portfolio: USP, pitch, objection sheet and more",
    ],
    tags: ["Consultative Selling", "Pitching", "Negotiation", "Closing"],
    duration: "6 weeks",
    level: "No experience needed",
    format: "Live — 2 classes per week",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   03 — AI Content Generation
   ══════════════════════════════════════════════════════════════════════════ */

const AI_CONTENT_GENERATION: Course = {
  slug: "ai-content-generation",
  name: "AI Content Generation",
  heroTitle: "AI Content Generation",
  heroTitleSub: "Course",
  metaTitle: "AI Content Generation Course — Copy, Visuals, Video & Voice",
  metaDescription:
    "An 8-week hands-on course in generative AI content: prompt-driven copywriting, image generation, AI video and voiceover, and automated content pipelines. Every graduate joins the internship program at DevelopersHub Corporation.",

  accent: "#8b5cf6",

  eyebrow: "Applications open",
  badge: "Internship guaranteed",
  tagline:
    "Turn one brief into a month of on-brand content — copy, visuals, video, and voice — then walk into an internship at DevelopersHub.",
  lede: "An 8-week, beginner-friendly course for marketers, creators, and career changers who want to use generative AI to ship real work — not just play with prompts. You'll build a brand voice that survives automation, produce across every format, wire it into a repeatable content engine, and finish with a portfolio campaign and a guaranteed internship.",
  visual: "content",
  heroCard: {
    kind: "note",
    title: "One brief becomes",
    lines: ["1 SEO article", "6 social posts", "4 ad variants", "1 branded video"],
  },

  courseMeta: [
    { label: "Duration", value: "8 weeks" },
    { label: "Level", value: "Beginner-friendly" },
    { label: "Format", value: "Hybrid (live + async)" },
    { label: "After course", value: "Internship at DevelopersHub" },
  ],

  stats: [
    { num: "8", unit: "wk", label: "Hands-on cohort" },
    { num: "6", unit: "", label: "Structured modules" },
    { num: "30", unit: "+", label: "Content assets shipped" },
    { num: "100", unit: "%", label: "Internship placement" },
  ],

  outcomesTitle: "What you'll",
  outcomesItalic: "master",
  outcomesLede:
    "Eight production skills across every content format. Each one practiced in a weekly lab and pulled together in your capstone campaign.",
  outcomes: [
    {
      title: "Write prompts that produce publish-ready copy",
      text: "Move past 'write me a blog post' — briefs, examples, constraints, and iteration loops that get usable first drafts.",
    },
    {
      title: "Generate on-brand images at will",
      text: "Midjourney, Flux, and Firefly — style references, consistent characters, and product shots that match a brand.",
    },
    {
      title: "Produce AI video, voice & motion",
      text: "Text-to-video, AI voiceover, auto-captioning, and short-form vertical cuts from a written script.",
    },
    {
      title: "Build a brand voice that survives automation",
      text: "Voice profiles, style guides, and custom assistants so every output sounds like the same company wrote it.",
    },
    {
      title: "Edit AI drafts so they don't read like AI",
      text: "Cutting the slop, fact-checking, adding specificity — the editing pass that separates published work from noise.",
    },
    {
      title: "Repurpose one asset into ten",
      text: "Turn a single long-form piece into channel-native posts, threads, newsletters, scripts, and ad variants.",
    },
    {
      title: "Automate the content pipeline",
      text: "Research → brief → draft → visual → schedule, wired together so a week of content runs on its own.",
    },
    {
      title: "Measure what actually performs",
      text: "SEO fundamentals, performance reporting, and using the data to feed the next round of briefs.",
    },
  ],

  curriculumTitle: "The",
  curriculumItalic: "curriculum",
  curriculumLede:
    "Six modules over eight weeks. Every module ends with a lab that produces a real, usable asset — and the week-8 capstone is a full multi-channel campaign.",
  curriculum: [
    {
      num: "01",
      weeks: "Weeks 1–2",
      title: "Foundations of Generative Content",
      blurb:
        "How text, image, and video models actually work — and how to brief them so the first draft is already close.",
      topics: [
        "Model landscape & choosing the right tool",
        "Prompt engineering for creative output",
        "Building a reusable brand voice profile",
        "Where AI helps — and where it quietly hurts",
      ],
      lab: "Lab — Build a brand voice profile and generate your first fully on-brand content set.",
    },
    {
      num: "02",
      weeks: "Weeks 3–4",
      title: "AI Copywriting at Scale",
      blurb:
        "The written formats that carry most content programmes: long-form, ads, email, and social — done well, done fast.",
      topics: [
        "Long-form articles & SEO briefs",
        "Ad copy, landing pages & email sequences",
        "Platform-native social captions & hooks",
        "The editing pass — cutting AI slop",
      ],
      lab: "Lab — Ship a 1,500-word SEO article plus a matched ad and email variant set.",
    },
    {
      num: "03",
      weeks: "Week 5",
      title: "Visual Content with AI",
      blurb:
        "Generate images a brand can actually publish — consistent, on-style, and ready for the feed or the page.",
      topics: [
        "Midjourney, Flux, DALL·E & Firefly prompting",
        "Style references & consistent characters",
        "Product & lifestyle image generation",
        "Upscaling, retouching & brand overlays",
      ],
      lab: "Lab — Produce a visually consistent campaign set for a single brand.",
    },
    {
      num: "04",
      weeks: "Week 6",
      title: "AI Video, Voice & Motion",
      blurb:
        "Script to screen without a camera — generated footage, AI narration, captions, and vertical cuts.",
      topics: [
        "Text-to-video with Runway, Kling & Veo",
        "AI voiceover & dubbing with ElevenLabs",
        "Auto-editing, captions & B-roll assembly",
        "Short-form vertical formats that hold attention",
      ],
      lab: "Lab — Cut a 60-second branded video with AI voiceover from a written script.",
    },
    {
      num: "05",
      weeks: "Week 7",
      title: "The Content Engine",
      blurb:
        "Stop making content one piece at a time. Wire research, drafting, visuals, and scheduling into one pipeline.",
      topics: [
        "Content calendars & briefs at scale",
        "Automating research → draft → visual → publish",
        "One asset into ten channel-native pieces",
        "Quality control, fact-checking & disclosure",
      ],
      lab: "Lab — Build an automated pipeline that turns one long-form piece into a full week of content.",
    },
    {
      num: "06",
      weeks: "Week 8",
      title: "Capstone & Internship Prep",
      blurb:
        "Ship one complete multi-channel campaign as your portfolio piece — then move into the internship.",
      topics: [
        "Capstone campaign scoping",
        "Portfolio & case-study writing",
        "Performance measurement & reporting",
        "Onboarding at DevelopersHub",
      ],
      lab: "Capstone — Ship a complete multi-channel content campaign, then begin your internship in week 9.",
    },
  ],

  stackTitle: "The",
  stackItalic: "stack",
  stackTitleTail: "you'll create with",
  stackLede:
    "The tools working content teams actually reach for. You'll be hands-on with most of them before the end of week three.",
  stack: [
    {
      group: "Text & Research",
      items: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Custom GPTs"],
    },
    {
      group: "Image Generation",
      items: ["Midjourney", "Flux", "DALL·E", "Adobe Firefly", "Ideogram"],
    },
    { group: "Video & Motion", items: ["Runway", "Kling", "Veo", "Pika", "CapCut"] },
    { group: "Voice & Audio", items: ["ElevenLabs", "Descript", "Suno"] },
    {
      group: "Editing & Design",
      items: ["Canva", "Figma", "Photoshop Generative Fill", "Premiere Pro"],
    },
    {
      group: "Workflow & Publishing",
      items: ["n8n", "Zapier", "Notion", "Airtable", "Buffer"],
    },
  ],

  audienceLede:
    "Built for anyone whose job depends on producing content — at a volume and quality that used to need a whole team.",
  audience: [
    {
      title: "Marketers & Content Teams",
      text: "You're already responsible for the calendar. Learn to fill it with better work in a fraction of the time.",
    },
    {
      title: "Creators & Freelancers",
      text: "Take on more clients without lowering quality — and add video, voice, and visuals to what you can offer.",
    },
    {
      title: "Founders & Small Teams",
      text: "No content department, no budget for one. Build a repeatable engine that runs on a few hours a week.",
    },
    {
      title: "Students & Career Changers",
      text: "No design or writing background required. The models handle production; the course teaches judgement.",
    },
  ],

  internship: {
    lede: "Every graduate moves directly into our internship program after the capstone — producing real content for real clients alongside the creative team.",
    path: [
      { num: "01", title: "8-Week Course", text: "Weeks 1–8 — Learn, produce, ship 30+ content assets." },
      { num: "02", title: "Capstone", text: "Week 8 — Deliver one complete multi-channel campaign." },
      { num: "03", title: "Internship", text: "Weeks 9+ — Join real client content work at DevelopersHub." },
    ],
    benefits: [
      {
        icon: "check",
        title: "Guaranteed placement",
        text: "Complete the course and ship your capstone campaign, and you join our internship program automatically — no separate application, no waitlist.",
      },
      {
        icon: "briefcase",
        title: "Real client content",
        text: "You're embedded with the creative production team, producing copy, visuals, and video that clients publish under their own brand.",
      },
      {
        icon: "mentor",
        title: "Senior mentorship",
        text: "Pair weekly with a senior content specialist who reviews your drafts, critiques your visuals, and sharpens your editorial judgement.",
      },
      {
        icon: "growth",
        title: "Path to full-time",
        text: "Top performers are first in line for full-time content and creative production roles at DevelopersHub when openings appear.",
      },
    ],
    rolesTitle: "Roles this opens up",
    rolesLede: "Where the capstone portfolio takes graduates:",
    roles: [
      "AI Content Strategist",
      "Content Automation Specialist",
      "Generative AI Designer",
      "Social Media & AI Creator",
      "Brand Content Producer",
      "AI Video Editor",
    ],
  },

  faqs: [
    {
      q: "Do I need a design or writing background?",
      a: "No. The models handle production — the course teaches judgement: what to brief, what to keep, what to cut, and when a generated asset is genuinely ready to publish. Plenty of students arrive from operations, sales, or straight out of university.",
    },
    {
      q: "Won't AI-generated content get penalised by Google?",
      a: "Low-effort, unedited output does. That's exactly why weeks three and four spend as much time on the editing pass as on generation — specificity, fact-checking, original angles, and real experience are what separate content that ranks from content that gets ignored.",
    },
    {
      q: "Which paid tools do I need?",
      a: "We work with free tiers wherever they're viable and tell you upfront which weeks benefit from a paid subscription — typically an image generator and one video tool for weeks five and six. Expect a modest monthly tool budget; we'll send exact figures before the cohort starts.",
    },
    {
      q: "What about copyright and client usage rights?",
      a: "Covered directly in week one and revisited in the visual and video modules — commercial licensing across the major tools, what's safe to publish for a client, disclosure norms, and how to keep a brand out of trouble.",
    },
    {
      q: "What's the capstone?",
      a: "A complete multi-channel campaign for a brand of your choosing: a long-form piece, a matched visual set, a short video with AI voiceover, and the repurposed social and email variants — produced through a pipeline you built yourself.",
    },
    {
      q: "How much does the course cost?",
      a: "Contact admissions for the current fee structure — cohort pricing, scholarships for outstanding candidates, and alumni referrals are all available. Apply first and we'll cover everything on the intake call.",
    },
  ],

  cta: {
    eyebrow: "Course + Internship — limited seats",
    title: "Create at AI speed.",
    italic: "Intern",
    titleTail: "with us.",
    copy: "Eight weeks of hands-on production across every content format, followed immediately by a real internship at DevelopersHub Corporation. Apply once — we'll reply within three business days.",
  },

  card: {
    kicker: "New cohort",
    summary:
      "Eight weeks of hands-on generative production — copy, images, video, and voice — wired into a content engine that runs on its own.",
    highlights: [
      "Ship 30+ real content assets across every major format",
      "Build a brand voice profile that survives automation",
      "Automate research → draft → visual → publish end to end",
    ],
    tags: ["Prompting", "Image Gen", "AI Video", "Content Ops"],
    duration: "8 weeks",
    level: "Beginner-friendly",
    format: "Hybrid (live + async)",
  },
};

/* ══════════════════════════════════════════════════════════════════════════ */

export const COURSES: Course[] = [AI_AUTOMATION, ART_OF_SELLING, AI_CONTENT_GENERATION];

export const getCourse = (slug: string): Course | undefined =>
  COURSES.find((c) => c.slug === slug);
