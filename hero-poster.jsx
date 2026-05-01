// HeroPoster — static poster-style before/after hero visual.
// Three variants: stacked, timeline, bignum. Variant chosen by tweaks.heroPoster.

function HeroPoster({ variant = 'stacked' }) {
  if (variant === 'timeline') return <HeroPosterTimeline />;
  if (variant === 'bignum') return <HeroPosterBigNum />;
  return <HeroPosterStacked />;
}

// ---------- Option A: Stacked weeks vs. one day ----------
// Top: 28 day-blocks in 4×7 grid, with "WEEKS" ghosted across.
// Bottom: one big pink block with "24h" set huge.
function HeroPosterStacked() {
  // 4 weeks × 7 days
  const days = [];
  for (let w = 0; w < 4; w++) {
    for (let d = 0; d < 7; d++) {
      days.push({ w, d });
    }
  }
  const cellW = 100, cellH = 36, gap = 8;
  const gridW = 7 * cellW + 6 * gap;       // 748
  const gridH = 4 * cellH + 3 * gap;       // 168
  const gridX = (1200 - gridW) / 2;        // 226
  const gridY = 70;
  const bottomY = 320;
  const bottomH = 220;

  return (
    <div className="dr-hero-poster-wrap">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet" className="dr-hero-poster-svg">
        <defs>
          <linearGradient id="afterGlow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-solid)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-solid)" stopOpacity="0.85" />
          </linearGradient>
          <pattern id="dotsPoster" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,245,0.08)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1200" height="600" fill="url(#dotsPoster)" />

        {/* Top label */}
        <text x="60" y="50" fontFamily="var(--font-grotesk)" fontSize="13" letterSpacing="3"
          fill="rgba(255,255,245,0.55)">BEFORE</text>
        <line x1="140" y1="46" x2="200" y2="46" stroke="rgba(255,255,245,0.3)" strokeWidth="1" />

        {/* 4×7 grid of day blocks */}
        <g>
          {days.map(({ w, d }, i) => (
            <rect key={i}
              x={gridX + d * (cellW + gap)}
              y={gridY + w * (cellH + gap)}
              width={cellW} height={cellH}
              fill="rgba(255,255,245,0.06)"
              stroke="rgba(255,255,245,0.18)" strokeWidth="0.8"
              rx="2"
            />
          ))}
        </g>

        {/* Ghosted "WEEKS" across the grid */}
        <text x="600" y={gridY + gridH / 2 + 38}
          textAnchor="middle"
          fontFamily="var(--font-text)" fontWeight="500"
          fontSize="120" letterSpacing="-0.04em"
          fill="rgba(255,255,245,0.06)" stroke="rgba(255,255,245,0.18)" strokeWidth="0.8"
          style={{ paintOrder: 'stroke fill' }}>
          WEEKS
        </text>

        {/* Caption row between */}
        <g transform="translate(60, 280)">
          <text fontFamily="var(--font-grotesk)" fontSize="12" letterSpacing="1.6" fill="rgba(255,255,245,0.55)">
            28 DAYS · APPLICATION → OFFER
          </text>
        </g>

        <g transform="translate(1140, 280)">
          <text textAnchor="end" fontFamily="var(--font-grotesk)" fontSize="12" letterSpacing="1.6" fill="var(--accent-solid)">
            ONE DAY · TALKPUSH
          </text>
        </g>

        {/* Big AFTER block */}
        <g>
          <rect x="60" y={bottomY} width="1080" height={bottomH}
            fill="url(#afterGlow)" rx="3" />
          {/* "24h" huge */}
          <text x="600" y={bottomY + 168} textAnchor="middle"
            fontFamily="var(--font-text)" fontWeight="500"
            fontSize="220" letterSpacing="-0.05em"
            fill="var(--tp-ink)">
            24<tspan fontSize="140" letterSpacing="-0.02em" dy="-32">h</tspan>
          </text>
        </g>

        {/* Bottom label */}
        <text x="60" y="582" fontFamily="var(--font-grotesk)" fontSize="13" letterSpacing="3"
          fill="rgba(255,255,245,0.7)">AFTER</text>
        <line x1="140" y1="578" x2="200" y2="578" stroke="rgba(255,255,245,0.5)" strokeWidth="1" />
      </svg>
    </div>
  );
}

// ---------- Option B: Crossed-out timeline → 24h ----------
function HeroPosterTimeline() {
  // weeks timeline tick marks
  const ticks = Array.from({ length: 5 }, (_, i) => 80 + i * 140); // 80..640
  return (
    <div className="dr-hero-poster-wrap">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet" className="dr-hero-poster-svg">
        <defs>
          <pattern id="dotsPoster2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,245,0.08)" />
          </pattern>
          <linearGradient id="afterGlow2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-solid)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-solid)" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1200" height="600" fill="url(#dotsPoster2)" />

        {/* Top eyebrows */}
        <text x="60" y="60" fontFamily="var(--font-grotesk)" fontSize="13" letterSpacing="3"
          fill="rgba(255,255,245,0.55)">BEFORE</text>
        <text x="800" y="60" fontFamily="var(--font-grotesk)" fontSize="13" letterSpacing="3"
          fill="var(--accent-solid)">AFTER</text>

        {/* LEFT ⅔ — WEEKS with timeline */}
        <g>
          {/* WEEKS huge type */}
          <text x="60" y="350" fontFamily="var(--font-text)" fontWeight="500"
            fontSize="220" letterSpacing="-0.05em"
            fill="rgba(255,255,245,0.92)">
            WEEKS
          </text>

          {/* Timeline with 5 ticks under WEEKS */}
          <line x1="80" y1="430" x2="700" y2="430"
            stroke="rgba(255,255,245,0.45)" strokeWidth="1" />
          {ticks.map((x, i) => (
            <g key={i}>
              <line x1={x} y1="424" x2={x} y2="436"
                stroke="rgba(255,255,245,0.55)" strokeWidth="1" />
              <text x={x} y="458" textAnchor="middle"
                fontFamily="var(--font-grotesk)" fontSize="11" letterSpacing="1.6"
                fill="rgba(255,255,245,0.5)">W{i + 1}</text>
            </g>
          ))}

          {/* Pink strikethrough across the WEEKS word */}
          <line x1="40" y1="290" x2="720" y2="290"
            stroke="var(--accent-solid)" strokeWidth="6" strokeLinecap="round" />

          {/* small caption */}
          <text x="60" y="510" fontFamily="var(--font-grotesk)" fontSize="12" letterSpacing="1.6"
            fill="rgba(255,255,245,0.55)">
            28 DAYS · MULTI-TOOL · MANUAL HANDOFFS
          </text>
        </g>

        {/* Divider */}
        <line x1="800" y1="100" x2="800" y2="500"
          stroke="rgba(255,255,245,0.18)" strokeDasharray="3 8" />

        {/* RIGHT ⅓ — 24h block */}
        <g>
          <rect x="830" y="180" width="320" height="280"
            fill="url(#afterGlow2)" rx="3" />
          <text x="990" y="370" textAnchor="middle"
            fontFamily="var(--font-text)" fontWeight="500"
            fontSize="180" letterSpacing="-0.04em"
            fill="var(--tp-ink)">
            24<tspan fontSize="110" dy="-26">h</tspan>
          </text>
          <text x="990" y="500" textAnchor="middle"
            fontFamily="var(--font-grotesk)" fontSize="12" letterSpacing="2.4"
            fill="rgba(255,255,245,0.7)">
            APPLICATION → OFFER
          </text>
        </g>
      </svg>
    </div>
  );
}

// ---------- Option C: Big number swap (type-led) ----------
function HeroPosterBigNum() {
  return (
    <div className="dr-hero-poster-wrap">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet" className="dr-hero-poster-svg">
        <defs>
          <pattern id="dotsPoster3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,245,0.08)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1200" height="600" fill="url(#dotsPoster3)" />

        {/* Eyebrows */}
        <text x="60" y="60" fontFamily="var(--font-grotesk)" fontSize="13" letterSpacing="3"
          fill="rgba(255,255,245,0.5)">BEFORE</text>
        <text x="1140" y="60" textAnchor="end" fontFamily="var(--font-grotesk)" fontSize="13" letterSpacing="3"
          fill="var(--accent-solid)">AFTER</text>

        {/* LEFT — WEEKS, ghosted outline */}
        <text x="60" y="380"
          fontFamily="var(--font-text)" fontWeight="500"
          fontSize="240" letterSpacing="-0.05em"
          fill="rgba(255,255,245,0.04)"
          stroke="rgba(255,255,245,0.4)" strokeWidth="1.2"
          style={{ paintOrder: 'stroke fill' }}>
          WEEKS
        </text>

        {/* tiny weeks subline */}
        <text x="60" y="420" fontFamily="var(--font-grotesk)" fontSize="12" letterSpacing="1.6"
          fill="rgba(255,255,245,0.45)">
          28 DAYS · MULTI-TOOL FUNNEL
        </text>

        {/* Connecting arrow */}
        <g>
          <line x1="540" y1="300" x2="640" y2="300"
            stroke="var(--accent-solid)" strokeWidth="2" strokeLinecap="round" />
          <path d="M635 290 L645 300 L635 310"
            fill="none" stroke="var(--accent-solid)" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* RIGHT — 24h, solid pink */}
        <text x="1140" y="400" textAnchor="end"
          fontFamily="var(--font-text)" fontWeight="500"
          fontSize="320" letterSpacing="-0.05em"
          fill="var(--accent-solid)">
          24<tspan fontSize="200" dy="-44">h</tspan>
        </text>

        {/* tiny 24h subline */}
        <text x="1140" y="440" textAnchor="end"
          fontFamily="var(--font-grotesk)" fontSize="12" letterSpacing="1.6"
          fill="rgba(255,255,245,0.7)">
          APPLICATION → OFFER · ONE PLATFORM
        </text>

        {/* footer rule */}
        <line x1="60" y1="540" x2="1140" y2="540" stroke="rgba(255,255,245,0.12)" strokeWidth="0.8" />
        <text x="60" y="568" fontFamily="var(--font-grotesk)" fontSize="11" letterSpacing="2.6"
          fill="rgba(255,255,245,0.45)">
          ECLERX × TALKPUSH · 24-HOUR HIRE
        </text>
      </svg>
    </div>
  );
}

Object.assign(window, { HeroPoster, HeroPosterStacked, HeroPosterTimeline, HeroPosterBigNum });
