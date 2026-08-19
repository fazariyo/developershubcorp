/**
 * Hero visuals for each course.
 *
 * Deliberately quiet: hairline connectors, white cards, ink labels, and a
 * single accent colour supplied by --course-accent through the CSS classes in
 * courses-page.css (SVG presentation attributes can't read custom properties
 * reliably, CSS rules can). Motion is limited to one slow travelling dot.
 */

type NodeIcon = React.ReactNode;

/* ───────── shared primitives ───────── */

const Node = ({
  x,
  y,
  size = 48,
  rx = 14,
  icon,
  label,
  labelDy = 18,
}: {
  x: number;
  y: number;
  size?: number;
  rx?: number;
  icon: NodeIcon;
  label?: string;
  labelDy?: number;
}) => (
  <g>
    <rect x={x} y={y} width={size} height={size} rx={rx} className="dh-vis-card" />
    <g
      transform={`translate(${x + size / 2 - 10}, ${y + size / 2 - 10})`}
      className="dh-vis-icon"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon}
    </g>
    {label && (
      <text
        x={x + size / 2}
        y={y + size + labelDy}
        textAnchor="middle"
        className="dh-vis-label"
      >
        {label}
      </text>
    )}
  </g>
);

/* ───────── AI Automation — trigger → agent → actions ───────── */

const AUTO_LINKS = [
  "M 70 130 C 104 130, 110 158, 132 172",
  "M 70 250 C 104 250, 110 222, 132 208",
  "M 248 170 C 284 166, 288 106, 314 82",
  "M 248 182 C 284 180, 292 152, 314 152",
  "M 248 198 C 284 200, 292 226, 314 228",
  "M 248 210 C 284 214, 288 272, 314 298",
];

export const AutomationFlow = () => (
  <svg viewBox="0 0 380 380" className="dh-flow-svg" aria-hidden role="presentation">
    <g className="dh-vis-link" fill="none" strokeWidth="1.2">
      {AUTO_LINKS.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>

    {/* Triggers */}
    <Node
      x={22}
      y={106}
      icon={
        <>
          <rect x="1.5" y="4" width="17" height="13" rx="2.5" />
          <polyline points="1.5 6 10 12 18.5 6" />
        </>
      }
      label="Email"
    />
    <Node
      x={22}
      y={226}
      icon={
        <>
          <path d="M3 8.5 L8.5 3 L17 11.5 L11.5 17 Z" />
          <line x1="9" y1="9" x2="11" y2="11" />
        </>
      }
      label="Webhook"
    />

    {/* The agent */}
    <rect x="132" y="132" width="116" height="116" rx="28" className="dh-vis-card dh-vis-card--accent" />
    <g
      transform="translate(179, 163)"
      className="dh-vis-icon dh-vis-icon--lg"
      fill="none"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="14" height="14" rx="3.5" />
      <rect x="8.5" y="8.5" width="5" height="5" rx="1.2" />
      <line x1="8" y1="1" x2="8" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
      <line x1="8" y1="18" x2="8" y2="21" />
      <line x1="14" y1="18" x2="14" y2="21" />
      <line x1="1" y1="8" x2="4" y2="8" />
      <line x1="1" y1="14" x2="4" y2="14" />
      <line x1="18" y1="8" x2="21" y2="8" />
      <line x1="18" y1="14" x2="21" y2="14" />
    </g>
    <text x="190" y="222" textAnchor="middle" className="dh-vis-title">
      AI agent
    </text>

    {/* Actions */}
    <Node
      x={314}
      y={58}
      size={40}
      rx={12}
      icon={
        <>
          <rect x="2" y="4.5" width="16" height="12" rx="2.5" />
          <polyline points="2 6.5 10 12 18 6.5" />
        </>
      }
      label="Reply"
      labelDy={16}
    />
    <Node
      x={314}
      y={134}
      size={40}
      rx={12}
      icon={
        <path d="M17.5 9.6a7.1 7.1 0 0 1-7.1 7.1c-1.2 0-2.3-.3-3.2-.8L2.5 17.5l1.4-4.4a7 7 0 0 1-1-3.5 7.1 7.1 0 1 1 14.6 0Z" />
      }
      label="Notify"
      labelDy={16}
    />
    <Node
      x={314}
      y={210}
      size={40}
      rx={12}
      icon={
        <>
          <ellipse cx="10" cy="4.6" rx="7" ry="2.5" />
          <path d="M3 4.6v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
          <path d="M3 9.6v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
        </>
      }
      label="Record"
      labelDy={16}
    />
    <Node
      x={314}
      y={286}
      size={40}
      rx={12}
      icon={
        <>
          <polyline points="6 7 2.5 10 6 13" />
          <polyline points="14 7 17.5 10 14 13" />
          <line x1="11.5" y1="4.5" x2="8.5" y2="15.5" />
        </>
      }
      label="API"
      labelDy={16}
    />

    {/* One quiet pulse along the middle branch */}
    <circle r="3" className="dh-vis-dot">
      <animateMotion dur="5s" repeatCount="indefinite" path={AUTO_LINKS[3]} />
    </circle>
  </svg>
);

/* ───────── The Art of Selling — the cycle as a rising staircase ───────── */

const SELLING_STEPS = [
  { n: "01", label: "Research the market" },
  { n: "02", label: "Sharpen your USP" },
  { n: "03", label: "Pitch consultatively" },
  { n: "04", label: "Handle objections" },
  { n: "05", label: "Close & follow up" },
];

const STEP_W = 252;
const STEP_H = 50;
const STEP_X0 = 6;
const STEP_Y0 = 312;
const STEP_DX = 28;
const STEP_DY = 66;

export const SellingCycle = () => {
  const pos = SELLING_STEPS.map((_, i) => ({
    x: STEP_X0 + i * STEP_DX,
    y: STEP_Y0 - i * STEP_DY,
  }));

  // Hairline riser threading the steps together, drawn bottom-left to top-right.
  const rail = pos
    .map((p, i) =>
      i === 0
        ? `M ${p.x + 20} ${p.y + STEP_H}`
        : `L ${p.x + 20} ${p.y + STEP_H + 16} L ${p.x + 20} ${p.y + STEP_H}`,
    )
    .join(" ");

  return (
    <svg viewBox="0 0 380 380" className="dh-flow-svg" aria-hidden role="presentation">
      <path d={rail} className="dh-vis-link" fill="none" strokeWidth="1.2" />

      {pos.map((p, i) => {
        const last = i === SELLING_STEPS.length - 1;
        return (
          <g key={SELLING_STEPS[i].n}>
            <rect
              x={p.x}
              y={p.y}
              width={STEP_W}
              height={STEP_H}
              rx={13}
              className={`dh-vis-card${last ? " dh-vis-card--accent" : ""}`}
            />
            <text x={p.x + 20} y={p.y + 31} className="dh-vis-step-num">
              {SELLING_STEPS[i].n}
            </text>
            <text x={p.x + 52} y={p.y + 31} className="dh-vis-step-label">
              {SELLING_STEPS[i].label}
            </text>
            {last && <circle cx={p.x + STEP_W - 22} cy={p.y + 25} r="4" className="dh-vis-dot" />}
          </g>
        );
      })}
    </svg>
  );
};

/* ───────── AI Content Generation — one brief → every format ───────── */

const CONTENT_LINKS = [
  "M 190 214 C 190 250, 104 244, 62 266",
  "M 190 214 C 190 244, 158 246, 148 266",
  "M 190 214 C 190 244, 222 246, 232 266",
  "M 190 214 C 190 250, 276 244, 318 266",
];

const CONTENT_OUTPUTS = [
  {
    label: "Copy",
    x: 38,
    icon: (
      <>
        <rect x="3" y="1.5" width="14" height="17" rx="2.5" />
        <line x1="6.5" y1="6.5" x2="13.5" y2="6.5" />
        <line x1="6.5" y1="10" x2="13.5" y2="10" />
        <line x1="6.5" y1="13.5" x2="11" y2="13.5" />
      </>
    ),
  },
  {
    label: "Image",
    x: 124,
    icon: (
      <>
        <rect x="1.5" y="3" width="17" height="14" rx="2.5" />
        <circle cx="6.5" cy="8" r="1.6" />
        <path d="M1.5 14.5l4.5-4.5 3.5 3.5 2.5-2.5 6.5 6" />
      </>
    ),
  },
  {
    label: "Video",
    x: 208,
    icon: (
      <>
        <rect x="1.5" y="4" width="12" height="12" rx="2.5" />
        <path d="M13.5 8.8 L18.5 6 v8 l-5-2.8Z" />
      </>
    ),
  },
  {
    label: "Voice",
    x: 294,
    icon: (
      <>
        <rect x="7" y="1.5" width="6" height="10" rx="3" />
        <path d="M4 9.5a6 6 0 0 0 12 0" />
        <line x1="10" y1="15.5" x2="10" y2="18.5" />
      </>
    ),
  },
];

export const ContentEngine = () => (
  <svg viewBox="0 0 380 380" className="dh-flow-svg" aria-hidden role="presentation">
    {/* The brief */}
    <rect x="70" y="44" width="240" height="56" rx="16" className="dh-vis-card" />
    <g
      transform="translate(90, 62)"
      className="dh-vis-icon"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 1.5L11.7 6.3L16.5 8L11.7 9.7L10 14.5L8.3 9.7L3.5 8L8.3 6.3L10 1.5Z" />
    </g>
    <rect x="120" y="63" width="140" height="6" rx="3" className="dh-vis-bar" />
    <rect x="120" y="77" width="96" height="6" rx="3" className="dh-vis-bar dh-vis-bar--faint" />
    <rect x="222" y="76" width="7" height="8" rx="2" className="dh-vis-caret" />
    <text x="190" y="120" textAnchor="middle" className="dh-vis-label">
      ONE BRIEF
    </text>

    <path d="M 190 132 L 190 142" className="dh-vis-link" fill="none" strokeWidth="1.2" />

    {/* The engine */}
    <rect x="142" y="142" width="96" height="72" rx="20" className="dh-vis-card dh-vis-card--accent" />
    <g
      transform="translate(180, 158)"
      className="dh-vis-icon dh-vis-icon--lg"
      fill="none"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 0.5L11.8 5.7L17 7.5L11.8 9.3L10 14.5L8.2 9.3L3 7.5L8.2 5.7L10 0.5Z" />
    </g>
    <text x="190" y="200" textAnchor="middle" className="dh-vis-title">
      Content engine
    </text>

    <g className="dh-vis-link" fill="none" strokeWidth="1.2">
      {CONTENT_LINKS.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>

    {CONTENT_OUTPUTS.map((o) => (
      <Node key={o.label} x={o.x} y={266} size={48} rx={14} icon={o.icon} label={o.label} />
    ))}

    <circle r="3" className="dh-vis-dot">
      <animateMotion dur="5s" repeatCount="indefinite" path={CONTENT_LINKS[2]} />
    </circle>
  </svg>
);

export const COURSE_VISUALS = {
  automation: AutomationFlow,
  selling: SellingCycle,
  content: ContentEngine,
} as const;

export type CourseVisualKey = keyof typeof COURSE_VISUALS;
