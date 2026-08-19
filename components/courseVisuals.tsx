import type { ReactNode } from "react";

/**
 * Hero visuals for each course. Colours are hard-coded per course to match the
 * accent palette that `coursesData.ts` sets on the page root — SVG gradient
 * stops can't reliably read CSS custom properties across browsers.
 */

/* ───────── AI Automation — trigger → agent → multi-action ───────── */

export const AutomationFlow = () => (
  <svg viewBox="0 0 380 380" className="dh-flow-svg" aria-hidden role="presentation">
    <defs>
      <radialGradient id="dh-auto-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
        <stop offset="60%" stopColor="#ec4899" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="dh-auto-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="dh-auto-agent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>

    {/* Connection paths — trigger → agent */}
    <g className="dh-flow-lines" fill="none" stroke="url(#dh-auto-line)" strokeWidth="1.6">
      <path d="M 80 110 Q 130 110, 165 165" />
      <path d="M 80 270 Q 130 270, 165 215" />
    </g>

    {/* Connection paths — agent → actions (animated flow) */}
    <g className="dh-flow-lines dh-flow-lines--anim" fill="none" stroke="url(#dh-auto-line)" strokeWidth="1.6">
      <path d="M 245 165 Q 290 130, 315 90" />
      <path d="M 245 175 Q 290 175, 315 165" />
      <path d="M 245 205 Q 290 220, 315 245" />
      <path d="M 245 215 Q 290 270, 315 320" />
    </g>

    {/* Trigger nodes (left) */}
    <g className="dh-flow-node">
      <circle cx="60" cy="110" r="26" fill="url(#dh-auto-glow)" />
      <rect x="42" y="92" width="36" height="36" rx="10" className="dh-flow-rect" />
      <g transform="translate(48, 98)" stroke="#8b5cf6" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9 L9 3 L21 15 L15 21 Z" />
        <line x1="11" y1="11" x2="13" y2="13" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="60" cy="270" r="26" fill="url(#dh-auto-glow)" />
      <rect x="42" y="252" width="36" height="36" rx="10" className="dh-flow-rect" />
      <g transform="translate(48, 258)" stroke="#8b5cf6" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <polyline points="3 8 12 14 21 8" />
      </g>
    </g>

    {/* AI agent (center, large) */}
    <g className="dh-flow-agent">
      <circle cx="205" cy="190" r="55" fill="url(#dh-auto-glow)" opacity="1.2" />
      <circle
        cx="205"
        cy="190"
        r="40"
        fill="url(#dh-auto-agent)"
        className="dh-flow-agent-circle"
        style={{ transformOrigin: "205px 190px" }}
      />
      <g transform="translate(186, 171)" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 11.5c0 1-.5 1.6-1.2 2 .8.5 1.2 1.3 1.2 2.3 0 1.8-1.4 3.2-3.2 3.2-.6 0-1.2-.2-1.8-.5-.4 1.3-1.7 2.3-3.2 2.3s-2.8-1-3.2-2.3c-.5.3-1.1.5-1.8.5C4 19 2.6 17.6 2.6 15.8c0-1 .4-1.8 1.2-2.3-.7-.5-1.2-1.2-1.2-2 0-1.3.9-2.4 2.2-2.7-.2-.4-.3-.9-.3-1.4 0-1.8 1.4-3.2 3.2-3.2.7 0 1.3.2 1.8.6.4-1.4 1.7-2.4 3.3-2.4s2.8 1 3.3 2.4c.5-.4 1.1-.6 1.8-.6 1.8 0 3.2 1.4 3.2 3.2 0 .5-.1 1-.3 1.4 1.3.3 2.2 1.4 2.2 2.7Z" />
      </g>
    </g>

    {/* Action nodes (right) */}
    <g className="dh-flow-node">
      <circle cx="335" cy="90" r="22" fill="url(#dh-auto-glow)" />
      <rect x="319" y="74" width="32" height="32" rx="9" className="dh-flow-rect" />
      <g transform="translate(323, 78)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2 6 12 14 22 6" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="335" cy="165" r="22" fill="url(#dh-auto-glow)" />
      <rect x="319" y="149" width="32" height="32" rx="9" className="dh-flow-rect" />
      <g transform="translate(323, 153)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.8-1L3 21l1.7-5.2c-.7-1.2-1.2-2.7-1.2-4.3a8.5 8.5 0 1 1 17.5 0Z" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="335" cy="245" r="22" fill="url(#dh-auto-glow)" />
      <rect x="319" y="229" width="32" height="32" rx="9" className="dh-flow-rect" />
      <g transform="translate(323, 233)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8.5" ry="3" />
        <path d="M3.5 5v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V5" />
        <path d="M3.5 11v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3v-6" />
      </g>
    </g>
    <g className="dh-flow-node">
      <circle cx="335" cy="320" r="22" fill="url(#dh-auto-glow)" />
      <rect x="319" y="304" width="32" height="32" rx="9" className="dh-flow-rect" />
      <g transform="translate(323, 308)" stroke="#ec4899" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="7 9 3 12 7 15" />
        <polyline points="17 9 21 12 17 15" />
        <line x1="14" y1="6" x2="10" y2="18" />
      </g>
    </g>

    {/* Flow dots travelling along agent → action paths */}
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

/* ───────── The Art of Selling — the full sales cycle as a ring ───────── */

const SELLING_RING =
  "M 190 80 A 110 110 0 1 1 189.9 80";

const SELLING_STEPS: { n: string; label: string; x: number; y: number; lx: number; ly: number; anchor: "start" | "middle" | "end" }[] = [
  { n: "01", label: "Research", x: 190, y: 80, lx: 190, ly: 44, anchor: "middle" },
  { n: "02", label: "USP", x: 294.6, y: 146, lx: 331, ly: 130, anchor: "middle" },
  { n: "03", label: "Pitch", x: 254.7, y: 279, lx: 297, ly: 305, anchor: "middle" },
  { n: "04", label: "Objections", x: 125.3, y: 279, lx: 83, ly: 305, anchor: "middle" },
  { n: "05", label: "Close", x: 85.4, y: 146, lx: 49, ly: 130, anchor: "middle" },
];

export const SellingCycle = () => (
  <svg viewBox="0 0 380 380" className="dh-flow-svg" aria-hidden role="presentation">
    <defs>
      <radialGradient id="dh-sell-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e11d48" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#e11d48" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="dh-sell-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#e11d48" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="dh-sell-node" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
    </defs>

    {/* Cycle ring */}
    <circle cx="190" cy="190" r="110" fill="none" stroke="url(#dh-sell-ring)" strokeWidth="1.6" opacity="0.5" />
    <circle
      cx="190"
      cy="190"
      r="110"
      fill="none"
      stroke="url(#dh-sell-ring)"
      strokeWidth="2"
      className="dh-flow-lines--anim dh-flow-ring"
    />

    {/* Centre — the conversation */}
    <circle cx="190" cy="190" r="66" fill="url(#dh-sell-glow)" />
    <circle
      cx="190"
      cy="190"
      r="46"
      fill="url(#dh-sell-node)"
      className="dh-flow-agent-circle"
      style={{ transformOrigin: "190px 190px" }}
    />
    <g transform="translate(168, 167)" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4v-4a2 2 0 0 1-2-2Z" />
      <line x1="7" y1="8" x2="17" y2="8" />
      <line x1="7" y1="12" x2="13" y2="12" />
    </g>
    <text x="190" y="224" textAnchor="middle" fontSize="9.5" fontWeight="600" letterSpacing="1.4" fill="rgba(255,255,255,0.85)">
      THE CYCLE
    </text>

    {/* Stage nodes */}
    {SELLING_STEPS.map((s) => (
      <g key={s.n} className="dh-flow-node">
        <circle cx={s.x} cy={s.y} r="26" fill="url(#dh-sell-glow)" />
        <circle cx={s.x} cy={s.y} r="19" className="dh-flow-rect" />
        <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#e11d48">
          {s.n}
        </text>
        <text x={s.lx} y={s.ly} textAnchor={s.anchor} fontSize="10.5" fontWeight="600" fill="#6b7280">
          {s.label}
        </text>
      </g>
    ))}

    {/* Momentum dot travelling the cycle */}
    <circle r="4" fill="#e11d48" className="dh-flow-pulse">
      <animateMotion dur="7s" repeatCount="indefinite" path={SELLING_RING} />
    </circle>
    <circle r="2.5" fill="#f59e0b" className="dh-flow-pulse">
      <animateMotion dur="7s" begin="1.4s" repeatCount="indefinite" path={SELLING_RING} />
    </circle>
  </svg>
);

/* ───────── AI Content Generation — one brief → every format ───────── */

const CONTENT_OUTPUTS: { label: string; cx: number; path: string; dur: string; begin: string; icon: ReactNode }[] = [
  {
    label: "Copy",
    cx: 55,
    path: "M 190 206 C 190 248, 100 236, 55 262",
    dur: "3.4s",
    begin: "0s",
    icon: (
      <>
        <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </>
    ),
  },
  {
    label: "Image",
    cx: 145,
    path: "M 190 206 C 190 240, 156 240, 145 262",
    dur: "3.1s",
    begin: "0.5s",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <circle cx="8.5" cy="9.5" r="1.8" />
        <path d="M3 17l5-5 4 4 3-3 6 6" />
      </>
    ),
  },
  {
    label: "Video",
    cx: 235,
    path: "M 190 206 C 190 240, 224 240, 235 262",
    dur: "3.6s",
    begin: "1s",
    icon: (
      <>
        <rect x="2.5" y="5" width="14" height="14" rx="2.5" />
        <path d="M16.5 10.5 L21.5 7.5 v9 l-5-3Z" />
      </>
    ),
  },
  {
    label: "Voice",
    cx: 325,
    path: "M 190 206 C 190 248, 280 236, 325 262",
    dur: "3.3s",
    begin: "1.5s",
    icon: (
      <>
        <rect x="9" y="2.5" width="6" height="11" rx="3" />
        <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
        <line x1="12" y1="17.5" x2="12" y2="21" />
      </>
    ),
  },
];

export const ContentEngine = () => (
  <svg viewBox="0 0 380 380" className="dh-flow-svg" aria-hidden role="presentation">
    <defs>
      <radialGradient id="dh-cnt-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#4f46e5" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="dh-cnt-line" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient id="dh-cnt-hub" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
    </defs>

    {/* The brief */}
    <g className="dh-flow-node">
      <rect x="64" y="40" width="252" height="58" rx="15" className="dh-flow-rect" />
      <g transform="translate(82, 58)" stroke="#06b6d4" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 1.5L12.9 7.1L18.5 9L12.9 10.9L11 16.5L9.1 10.9L3.5 9L9.1 7.1L11 1.5Z" />
      </g>
      <rect x="112" y="60" width="150" height="6" rx="3" fill="rgba(79,70,229,0.28)" />
      <rect x="112" y="74" width="106" height="6" rx="3" fill="rgba(79,70,229,0.16)" />
      <rect x="226" y="74" width="8" height="7" rx="2" fill="#06b6d4" className="dh-cnt-caret" />
      <text x="190" y="120" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="1" fill="#6b7280">
        ONE BRIEF
      </text>
    </g>

    <g className="dh-flow-lines" fill="none" stroke="url(#dh-cnt-line)" strokeWidth="1.6">
      <path d="M 190 128 L 190 136" />
    </g>

    {/* The engine */}
    <circle cx="190" cy="172" r="52" fill="url(#dh-cnt-glow)" />
    <circle
      cx="190"
      cy="172"
      r="36"
      fill="url(#dh-cnt-hub)"
      className="dh-flow-agent-circle"
      style={{ transformOrigin: "190px 172px" }}
    />
    <g transform="translate(173, 155)" stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1.5L14.2 8.2L21 10.5L14.2 12.8L12 19.5L9.8 12.8L3 10.5L9.8 8.2L12 1.5Z" />
      <path d="M21 16.5L21.9 19.1L24.5 20L21.9 20.9L21 23.5L20.1 20.9L17.5 20L20.1 19.1L21 16.5Z" transform="translate(-19,-14) scale(0.62)" />
    </g>

    {/* Fan-out paths */}
    <g className="dh-flow-lines dh-flow-lines--anim" fill="none" stroke="url(#dh-cnt-line)" strokeWidth="1.6">
      {CONTENT_OUTPUTS.map((o) => (
        <path key={o.label} d={o.path} />
      ))}
    </g>

    {/* Output tiles */}
    {CONTENT_OUTPUTS.map((o) => (
      <g key={o.label} className="dh-flow-node">
        <circle cx={o.cx} cy="290" r="28" fill="url(#dh-cnt-glow)" />
        <rect x={o.cx - 25} y="265" width="50" height="50" rx="14" className="dh-flow-rect" />
        <g
          transform={`translate(${o.cx - 12}, 278)`}
          stroke="#4f46e5"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {o.icon}
        </g>
        <text x={o.cx} y="334" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#6b7280">
          {o.label}
        </text>
      </g>
    ))}

    {/* Pulses down each branch */}
    <g className="dh-flow-pulses">
      {CONTENT_OUTPUTS.map((o) => (
        <circle key={o.label} r="3" fill="#4f46e5" className="dh-flow-pulse">
          <animateMotion dur={o.dur} begin={o.begin} repeatCount="indefinite" path={o.path} />
        </circle>
      ))}
    </g>
  </svg>
);

export const COURSE_VISUALS = {
  automation: AutomationFlow,
  selling: SellingCycle,
  content: ContentEngine,
} as const;

export type CourseVisualKey = keyof typeof COURSE_VISUALS;
