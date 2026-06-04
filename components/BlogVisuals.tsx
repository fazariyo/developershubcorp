import type { ReactNode } from "react";

type VisualProps = {
  className?: string;
};

/**
 * SVG hero illustration for: AI Automation for Small Business.
 * Concept: glowing automation network with conveyor of business tasks.
 */
export function SmallBusinessVisual({ className }: VisualProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="AI automation network for small business illustration"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sbBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fdf1d3" />
            <stop offset="100%" stopColor="#d9f3fc" />
          </linearGradient>
          <linearGradient id="sbPurple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a5dff" />
            <stop offset="100%" stopColor="#4928fd" />
          </linearGradient>
          <linearGradient id="sbGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9ce58a" />
            <stop offset="100%" stopColor="#5fc145" />
          </linearGradient>
          <radialGradient id="sbGlow" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="rgba(73,40,253,0.35)" />
            <stop offset="100%" stopColor="rgba(73,40,253,0)" />
          </radialGradient>
        </defs>

        <rect width="800" height="600" fill="url(#sbBg)" />
        <circle cx="400" cy="320" r="280" fill="url(#sbGlow)" />

        {/* Connecting paths */}
        <g stroke="#4928fd" strokeOpacity="0.35" strokeWidth="1.5" fill="none">
          <path d="M120 200 C 240 150, 320 250, 400 220" />
          <path d="M680 200 C 560 150, 480 250, 400 220" />
          <path d="M160 460 C 260 420, 340 360, 400 320" />
          <path d="M640 460 C 540 420, 460 360, 400 320" />
          <path d="M400 220 L 400 320" />
        </g>

        {/* Central AI hub */}
        <g>
          <circle cx="400" cy="320" r="86" fill="#1b1d1e" />
          <circle cx="400" cy="320" r="86" fill="url(#sbPurple)" opacity="0.9" />
          <text
            x="400"
            y="312"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Inter Tight, sans-serif"
            fontSize="22"
            fontWeight="600"
          >
            AI
          </text>
          <text
            x="400"
            y="340"
            textAnchor="middle"
            fill="rgba(255,255,255,0.8)"
            fontFamily="Inter Tight, sans-serif"
            fontSize="13"
          >
            Automation
          </text>
        </g>

        {/* Surrounding task nodes */}
        {/* Email */}
        <g transform="translate(80,160)">
          <rect width="100" height="80" rx="16" fill="#fff" />
          <rect width="100" height="80" rx="16" fill="none" stroke="rgba(27,29,30,0.08)" />
          <rect x="20" y="22" width="60" height="36" rx="6" fill="none" stroke="#4928fd" strokeWidth="2" />
          <path d="M22 26 L50 46 L78 26" stroke="#4928fd" strokeWidth="2" fill="none" />
          <text x="50" y="74" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#1b1d1e">Email</text>
        </g>

        {/* Chat */}
        <g transform="translate(620,160)">
          <rect width="100" height="80" rx="16" fill="#fff" />
          <rect width="100" height="80" rx="16" fill="none" stroke="rgba(27,29,30,0.08)" />
          <path d="M22 22 H78 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 H42 l-12 10 v -10 H22 a8 8 0 0 1 -8 -8 v -22 a8 8 0 0 1 8 -8 z" fill="none" stroke="#4928fd" strokeWidth="2" transform="translate(8,2)" />
          <text x="50" y="74" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#1b1d1e">Chat</text>
        </g>

        {/* Invoice */}
        <g transform="translate(120,420)">
          <rect width="100" height="80" rx="16" fill="#fff" />
          <rect width="100" height="80" rx="16" fill="none" stroke="rgba(27,29,30,0.08)" />
          <rect x="28" y="18" width="44" height="44" rx="4" fill="none" stroke="#5fc145" strokeWidth="2" />
          <line x1="34" y1="30" x2="66" y2="30" stroke="#5fc145" strokeWidth="2" />
          <line x1="34" y1="40" x2="66" y2="40" stroke="#5fc145" strokeWidth="2" />
          <line x1="34" y1="50" x2="54" y2="50" stroke="#5fc145" strokeWidth="2" />
          <text x="50" y="74" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#1b1d1e">Invoice</text>
        </g>

        {/* Leads */}
        <g transform="translate(600,420)">
          <rect width="100" height="80" rx="16" fill="#fff" />
          <rect width="100" height="80" rx="16" fill="none" stroke="rgba(27,29,30,0.08)" />
          <circle cx="40" cy="34" r="8" fill="none" stroke="#f4889a" strokeWidth="2" />
          <circle cx="60" cy="34" r="8" fill="none" stroke="#f4889a" strokeWidth="2" />
          <path d="M28 56 a12 12 0 0 1 22 0 h0 a12 12 0 0 1 22 0" fill="none" stroke="#f4889a" strokeWidth="2" />
          <text x="50" y="74" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#1b1d1e">Leads</text>
        </g>

        {/* Floating data points */}
        <g fill="#4928fd">
          <circle cx="260" cy="120" r="4" />
          <circle cx="540" cy="130" r="3" />
          <circle cx="220" cy="350" r="3" />
          <circle cx="580" cy="350" r="4" />
          <circle cx="350" cy="500" r="3" />
          <circle cx="450" cy="510" r="4" />
        </g>
      </svg>
    </div>
  );
}

/**
 * SVG hero illustration for: AI Workflow Automation Tools.
 * Concept: stacked tool/platform cards with connectors.
 */
export function WorkflowToolsVisual({ className }: VisualProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="AI workflow automation tools comparison illustration"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wfBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e6f0ff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="wfFlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4928fd" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f4889a" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#wfBg)" />

        {/* Workflow connectors */}
        <g stroke="url(#wfFlow)" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M160 180 C 240 180, 280 300, 360 300" />
          <path d="M360 300 C 440 300, 480 180, 560 180" />
          <path d="M360 300 C 440 300, 480 420, 560 420" />
          <path d="M560 180 C 640 180, 680 300, 720 300" />
          <path d="M560 420 C 640 420, 680 300, 720 300" />
        </g>

        {/* Stage A */}
        <g transform="translate(100,140)">
          <rect width="120" height="80" rx="16" fill="#fff" stroke="rgba(27,29,30,0.08)" />
          <circle cx="26" cy="40" r="10" fill="#4928fd" />
          <text x="46" y="36" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#1b1d1e">Trigger</text>
          <text x="46" y="54" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="rgba(27,29,30,0.6)">New lead</text>
        </g>

        {/* Stage B */}
        <g transform="translate(300,260)">
          <rect width="120" height="80" rx="16" fill="#1b1d1e" />
          <circle cx="26" cy="40" r="10" fill="#79d45e" />
          <text x="46" y="36" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#fff">AI Agent</text>
          <text x="46" y="54" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)">GPT-4o</text>
        </g>

        {/* Stage C-top */}
        <g transform="translate(500,140)">
          <rect width="120" height="80" rx="16" fill="#fff" stroke="rgba(27,29,30,0.08)" />
          <circle cx="26" cy="40" r="10" fill="#f4889a" />
          <text x="46" y="36" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#1b1d1e">CRM</text>
          <text x="46" y="54" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="rgba(27,29,30,0.6)">HubSpot</text>
        </g>

        {/* Stage C-bottom */}
        <g transform="translate(500,380)">
          <rect width="120" height="80" rx="16" fill="#fff" stroke="rgba(27,29,30,0.08)" />
          <circle cx="26" cy="40" r="10" fill="#f4889a" />
          <text x="46" y="36" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#1b1d1e">Slack</text>
          <text x="46" y="54" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="rgba(27,29,30,0.6)">Notify team</text>
        </g>

        {/* Final */}
        <g transform="translate(680,260)">
          <rect width="60" height="80" rx="16" fill="url(#wfFlow)" />
          <text x="30" y="50" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="22" fontWeight="600" fill="#fff">✓</text>
        </g>

        {/* Subtle grid dots */}
        <g fill="rgba(27,29,30,0.08)">
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 12 }).map((__, j) => (
              <circle key={`${i}-${j}`} cx={60 + j * 60} cy={40 + i * 70} r="1.4" />
            ))
          )}
        </g>
      </svg>
    </div>
  );
}

/**
 * SVG hero illustration for: AI Agents vs Traditional Automation.
 * Concept: two side-by-side circuit boards, one decision-making, one linear.
 */
export function AgentsVsAutomationVisual({ className }: VisualProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="AI agents vs traditional automation illustration"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="vsBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fef3f5" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="vsPurple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7a5dff" />
            <stop offset="100%" stopColor="#4928fd" />
          </linearGradient>
          <linearGradient id="vsGray" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9aa0a6" />
            <stop offset="100%" stopColor="#6b6b6b" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#vsBg)" />

        {/* Left: traditional automation (linear) */}
        <g>
          <text x="200" y="80" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" letterSpacing="2" fill="rgba(27,29,30,0.5)">RULES-BASED RPA</text>
          <g stroke="rgba(27,29,30,0.25)" strokeWidth="2" fill="none">
            <path d="M100 200 L 300 200" />
            <path d="M100 280 L 300 280" />
            <path d="M100 360 L 300 360" />
            <path d="M100 440 L 300 440" />
          </g>
          {[200, 280, 360, 440].map((y) => (
            <g key={y}>
              <rect x={80} y={y - 16} width="32" height="32" rx="8" fill="url(#vsGray)" />
              <rect x={288} y={y - 16} width="32" height="32" rx="8" fill="url(#vsGray)" />
            </g>
          ))}
        </g>

        {/* VS divider */}
        <g>
          <line x1="400" y1="120" x2="400" y2="500" stroke="rgba(27,29,30,0.1)" strokeDasharray="4 6" />
          <circle cx="400" cy="310" r="28" fill="#1b1d1e" />
          <text x="400" y="316" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="20" fontStyle="italic" fill="#fff">vs</text>
        </g>

        {/* Right: AI agent (network with decisions) */}
        <g>
          <text x="600" y="80" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" letterSpacing="2" fill="#4928fd">AI AGENT (REASONING)</text>

          {/* Central agent */}
          <circle cx="600" cy="320" r="56" fill="url(#vsPurple)" />
          <text x="600" y="314" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Agent</text>
          <text x="600" y="332" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="rgba(255,255,255,0.8)">decides</text>

          {/* Outer nodes */}
          {[
            { x: 500, y: 200, label: "Email" },
            { x: 700, y: 200, label: "CRM" },
            { x: 480, y: 320, label: "Search" },
            { x: 720, y: 320, label: "DB" },
            { x: 500, y: 440, label: "Slack" },
            { x: 700, y: 440, label: "API" },
          ].map((n) => (
            <g key={n.label}>
              <line x1="600" y1="320" x2={n.x} y2={n.y} stroke="#4928fd" strokeOpacity="0.35" strokeWidth="1.5" />
              <circle cx={n.x} cy={n.y} r="22" fill="#fff" stroke="rgba(73,40,253,0.4)" strokeWidth="1.5" />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="10" fontWeight="500" fill="#1b1d1e">{n.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

/**
 * Reusable inline figure visual for in-article diagrams.
 */
export function FigureFlow({ children }: { children?: ReactNode }) {
  return (
    <svg
      viewBox="0 0 800 360"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {children}
    </svg>
  );
}

export function ROIChartVisual() {
  return (
    <svg viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ROI chart">
      <defs>
        <linearGradient id="roiBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a5dff" />
          <stop offset="100%" stopColor="#4928fd" />
        </linearGradient>
        <linearGradient id="roiBarDim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(27,29,30,0.18)" />
          <stop offset="100%" stopColor="rgba(27,29,30,0.08)" />
        </linearGradient>
      </defs>
      <rect width="800" height="360" fill="#fff" />
      {/* axis */}
      <line x1="80" y1="300" x2="760" y2="300" stroke="rgba(27,29,30,0.15)" />
      <line x1="80" y1="60" x2="80" y2="300" stroke="rgba(27,29,30,0.15)" />

      {[
        { x: 130, h: 60, label: "Wk 1", v: "8h" },
        { x: 230, h: 100, label: "Wk 2", v: "12h" },
        { x: 330, h: 150, label: "Wk 3", v: "16h" },
        { x: 430, h: 190, label: "Wk 4", v: "20h" },
        { x: 530, h: 220, label: "Wk 6", v: "24h" },
        { x: 630, h: 240, label: "Wk 8", v: "27h" },
      ].map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={300 - b.h} width="60" height={b.h} rx="6" fill={i === 5 ? "url(#roiBar)" : "url(#roiBarDim)"} />
          <text x={b.x + 30} y={324} textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="rgba(27,29,30,0.6)">{b.label}</text>
          <text x={b.x + 30} y={300 - b.h - 8} textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fontWeight="600" fill="#4928fd">{b.v}</text>
        </g>
      ))}
      <text x="80" y="46" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="500" fill="#1b1d1e">Hours saved per week after AI automation rollout</text>
    </svg>
  );
}

export function AgentLoopVisual() {
  return (
    <svg viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI agent reasoning loop">
      <defs>
        <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4928fd" />
          <stop offset="100%" stopColor="#f4889a" />
        </linearGradient>
      </defs>
      <rect width="800" height="360" fill="#fff" />

      {/* circular loop */}
      <circle cx="400" cy="180" r="120" fill="none" stroke="url(#loopGrad)" strokeWidth="2" strokeDasharray="4 6" />

      {/* nodes */}
      {[
        { x: 400, y: 60, label: "Observe", emoji: "👁" },
        { x: 520, y: 180, label: "Think", emoji: "🧠" },
        { x: 400, y: 300, label: "Act", emoji: "⚡" },
        { x: 280, y: 180, label: "Learn", emoji: "📚" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="40" fill="#fff" stroke="#4928fd" strokeWidth="2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#1b1d1e">{n.label}</text>
        </g>
      ))}

      <circle cx="400" cy="180" r="32" fill="#1b1d1e" />
      <text x="400" y="186" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="12" fontWeight="600" fill="#fff">Agent</text>
    </svg>
  );
}

export function PlatformsGridVisual() {
  return (
    <svg viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI automation platforms grid">
      <rect width="800" height="360" fill="#fff" />
      {[
        { x: 60, y: 60, name: "Zapier AI", color: "#FF4A00" },
        { x: 250, y: 60, name: "n8n", color: "#EA4B71" },
        { x: 440, y: 60, name: "Make", color: "#6D00CC" },
        { x: 630, y: 60, name: "Lindy", color: "#4928fd" },
        { x: 60, y: 220, name: "Relevance AI", color: "#0e7fff" },
        { x: 250, y: 220, name: "n8n Cloud", color: "#EA4B71" },
        { x: 440, y: 220, name: "Pipedream", color: "#33D8A1" },
        { x: 630, y: 220, name: "DevHub AI", color: "#1b1d1e" },
      ].map((p) => (
        <g key={p.name}>
          <rect x={p.x} y={p.y} width="110" height="110" rx="20" fill="#fff" stroke="rgba(27,29,30,0.08)" />
          <circle cx={p.x + 30} cy={p.y + 32} r="14" fill={p.color} />
          <text x={p.x + 14} y={p.y + 80} fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#1b1d1e">{p.name}</text>
          <text x={p.x + 14} y={p.y + 98} fontFamily="Inter Tight, sans-serif" fontSize="10" fill="rgba(27,29,30,0.5)">automation platform</text>
        </g>
      ))}
    </svg>
  );
}

/**
 * SVG hero illustration for: How Much Does AI Automation Cost.
 * Concept: price breakdown card with rising ROI curve.
 */
export function AutomationCostVisual({ className }: VisualProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="AI automation cost and ROI breakdown illustration"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="acBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e9fbe2" />
            <stop offset="100%" stopColor="#e6f0ff" />
          </linearGradient>
          <linearGradient id="acCurve" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4928fd" />
            <stop offset="100%" stopColor="#5fc145" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#acBg)" />

        {/* ROI curve */}
        <path
          d="M80 480 C 240 470, 320 420, 420 330 C 520 240, 620 180, 720 150"
          fill="none"
          stroke="url(#acCurve)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="720" cy="150" r="10" fill="#5fc145" />

        {/* Price card */}
        <g transform="translate(110,120)">
          <rect width="250" height="190" rx="20" fill="#fff" stroke="rgba(27,29,30,0.08)" />
          <text x="24" y="42" fontFamily="Inter Tight, sans-serif" fontSize="14" fill="rgba(27,29,30,0.55)">Typical SMB project</text>
          <text x="24" y="86" fontFamily="Inter Tight, sans-serif" fontSize="34" fontWeight="700" fill="#1b1d1e">$3k – $25k</text>
          <line x1="24" y1="108" x2="226" y2="108" stroke="rgba(27,29,30,0.1)" />
          <text x="24" y="136" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="rgba(27,29,30,0.6)">Build + integration</text>
          <text x="24" y="160" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="rgba(27,29,30,0.6)">$200 – $1.5k / mo to run</text>
        </g>

        {/* ROI badge */}
        <g transform="translate(520,330)">
          <rect width="180" height="84" rx="18" fill="#1b1d1e" />
          <text x="22" y="36" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="rgba(255,255,255,0.65)">Payback period</text>
          <text x="22" y="64" fontFamily="Inter Tight, sans-serif" fontSize="24" fontWeight="700" fill="#79d45e">2–6 months</text>
        </g>

        {/* Coin stack */}
        <g transform="translate(160,400)">
          {[0, 1, 2, 3].map((i) => (
            <ellipse key={i} cx="60" cy={70 - i * 18} rx="52" ry="16" fill="#fff" stroke="#4928fd" strokeWidth="2" />
          ))}
          <text x="60" y="20" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="20" fontWeight="700" fill="#4928fd">$</text>
        </g>

        {/* Floating data points */}
        <g fill="#4928fd">
          <circle cx="430" cy="120" r="4" />
          <circle cx="620" cy="90" r="3" />
          <circle cx="480" cy="500" r="3" />
          <circle cx="320" cy="520" r="4" />
        </g>
      </svg>
    </div>
  );
}

/**
 * SVG hero illustration for: Custom Software vs Off-the-Shelf.
 * Concept: tailored building blocks vs a sealed box on a balance scale.
 */
export function CustomVsShelfVisual({ className }: VisualProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Custom software versus off-the-shelf software comparison illustration"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="csBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fef3f5" />
            <stop offset="100%" stopColor="#e6f0ff" />
          </linearGradient>
          <linearGradient id="csPurple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a5dff" />
            <stop offset="100%" stopColor="#4928fd" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#csBg)" />

        {/* Divider */}
        <line x1="400" y1="80" x2="400" y2="520" stroke="rgba(27,29,30,0.12)" strokeDasharray="6 8" strokeWidth="2" />

        {/* Custom side: modular blocks */}
        <g>
          <rect x="100" y="320" width="90" height="90" rx="14" fill="url(#csPurple)" />
          <rect x="200" y="320" width="90" height="90" rx="14" fill="#fff" stroke="#4928fd" strokeWidth="2" />
          <rect x="100" y="220" width="90" height="90" rx="14" fill="#fff" stroke="#4928fd" strokeWidth="2" />
          <rect x="200" y="220" width="90" height="90" rx="14" fill="#79d45e" />
          <rect x="150" y="120" width="90" height="90" rx="14" fill="#fff" stroke="#f4889a" strokeWidth="2" />
          <text x="195" y="465" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="16" fontWeight="600" fill="#1b1d1e">Custom software</text>
          <text x="195" y="488" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="rgba(27,29,30,0.6)">Built around your process</text>
        </g>

        {/* Off-the-shelf side: sealed box */}
        <g>
          <rect x="510" y="180" width="180" height="180" rx="18" fill="#fff" stroke="rgba(27,29,30,0.15)" strokeWidth="2" />
          <path d="M510 240 H690" stroke="rgba(27,29,30,0.15)" strokeWidth="2" />
          <rect x="575" y="160" width="50" height="40" rx="8" fill="#1b1d1e" />
          <text x="600" y="300" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="30" fontWeight="700" fill="rgba(27,29,30,0.25)">SaaS</text>
          <text x="600" y="465" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="16" fontWeight="600" fill="#1b1d1e">Off-the-shelf</text>
          <text x="600" y="488" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="rgba(27,29,30,0.6)">Fast start, fixed shape</text>
        </g>

        {/* VS badge */}
        <g transform="translate(366,266)">
          <circle cx="34" cy="34" r="34" fill="#1b1d1e" />
          <text x="34" y="41" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="18" fontWeight="700" fill="#fff">VS</text>
        </g>
      </svg>
    </div>
  );
}
