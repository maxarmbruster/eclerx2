// Hero animations — 3 variants of weeks → 24h
const { useEffect, useRef, useState } = React;

// Variant 1: Funnel collapsing horizontally
function HeroFunnel({ playKey }) {
  const [t, setT] = useState(0); // 0..1
  useEffect(() => {
    setT(0);
    const start = performance.now();
    const dur = 2400;
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setT(eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playKey]);

  const stages = [
    { x: 30, label: "Sourcing" },
    { x: 130, label: "Screen" },
    { x: 230, label: "Versant" },
    { x: 330, label: "Schedule" },
    { x: 430, label: "Interview" },
    { x: 530, label: "Offer" },
  ];

  // Funnel topY/bottomY interp from wide to narrow
  const wideTop = 30, wideBot = 200;
  const narrowTop = 100, narrowBot = 130;
  const lerp = (a, b, k) => a + (b - a) * k;

  return (
    <svg viewBox="0 0 600 280" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="funnelGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(255,255,245,0.06)" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* funnel body */}
      <path
        d={`M 0 ${lerp(wideTop, narrowTop, t)} L 600 ${lerp(wideTop, narrowTop, t)} L 600 ${lerp(wideBot, narrowBot, t)} L 0 ${lerp(wideBot, narrowBot, t)} Z`}
        fill="url(#funnelGrad)"
        stroke="var(--accent)" strokeWidth="1" opacity="0.85"
      />
      {/* Stage dots */}
      {stages.map((s, i) => {
        const localT = Math.max(0, Math.min(1, (t - i * 0.05) * 1.2));
        const cy = lerp((wideTop + wideBot) / 2, (narrowTop + narrowBot) / 2, localT);
        const opacity = i < stages.length - 1 ? 1 - t * 0.95 : 1;
        return (
          <g key={i}>
            <circle cx={s.x + 25} cy={cy} r="5" fill="var(--accent)" opacity={opacity} />
            <text
              x={s.x + 25} y={cy - 14}
              textAnchor="middle" fontFamily="var(--font-grotesk)" fontSize="9"
              fill="var(--fg-onDark)" opacity={opacity * 0.7}
              style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >{s.label}</text>
          </g>
        );
      })}
      {/* Time labels */}
      <text x="20" y="245" fontFamily="var(--font-grotesk)" fontSize="11" fill="var(--fg-onDark)" opacity={1 - t * 0.7}
        style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>WEEK 1</text>
      <text x="555" y="245" fontFamily="var(--font-grotesk)" fontSize="11" fill="var(--fg-onDark)" opacity={1 - t * 0.7}
        textAnchor="end" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>WEEK 4</text>

      <text x="300" y={lerp(265, 175, t)} textAnchor="middle"
        fontFamily="var(--font-text)" fontWeight="500" fontSize={20 + t * 22}
        fill="var(--accent)" letterSpacing="-0.03em" opacity={t}>
        24 hours
      </text>
    </svg>
  );
}

// Variant 2: Stacked weekly bars compressing into a single 24h block
function HeroBars({ playKey }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    setT(0);
    const start = performance.now();
    const dur = 2400;
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setT(eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playKey]);

  const bars = [
    { w: 120, label: "Sourcing", y: 40 },
    { w: 90, label: "Screen", y: 75 },
    { w: 110, label: "Versant", y: 110 },
    { w: 80, label: "Schedule", y: 145 },
    { w: 100, label: "Interview", y: 180 },
    { w: 60, label: "Offer", y: 215 },
  ];
  const lerp = (a, b, k) => a + (b - a) * k;
  return (
    <svg viewBox="0 0 600 280" style={{ width: '100%', height: '100%', display: 'block' }}>
      <text x="20" y="20" fontFamily="var(--font-grotesk)" fontSize="10" fill="var(--fg-onDark)" opacity={1 - t}
        style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>BEFORE — multi-week funnel</text>
      <text x="20" y="20" fontFamily="var(--font-grotesk)" fontSize="10" fill="var(--accent)" opacity={t}
        style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>AFTER — same funnel, 24 hours</text>

      {bars.map((b, i) => {
        const targetY = 130 - 12;
        const targetH = 24;
        const targetX = 240;
        const targetW = 120;
        const x = lerp(80, targetX, t);
        const y = lerp(b.y, targetY, t);
        const w = lerp(b.w * 3, targetW, t);
        const h = lerp(20, targetH, t);
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} fill="var(--accent)"
              opacity={i === 0 ? 1 : Math.max(0, 1 - t * 1.05 * (i + 1) * 0.3)} rx="2" />
            <text x={x - 8} y={y + 14} textAnchor="end"
              fontFamily="var(--font-grotesk)" fontSize="10" fill="var(--fg-onDark)"
              opacity={Math.max(0, 1 - t * 1.5)}
              style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>{b.label}</text>
          </g>
        );
      })}
      <text x="300" y={lerp(265, 110, t)} textAnchor="middle"
        fontFamily="var(--font-text)" fontWeight="500" fontSize={14 + t * 28}
        fill="var(--fg-onDark)" letterSpacing="-0.03em" opacity={t}>
        24 hours
      </text>
    </svg>
  );
}

// Variant 3: Calendar weeks folding/concertinaing into one day
function HeroCalendar({ playKey }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    setT(0);
    const start = performance.now();
    const dur = 2600;
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setT(eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playKey]);

  const weeks = 4;
  const days = 7;
  const cellW = 18, cellH = 26;
  const startX = 60, startY = 50;
  const lerp = (a, b, k) => a + (b - a) * k;

  return (
    <svg viewBox="0 0 600 280" style={{ width: '100%', height: '100%', display: 'block' }}>
      <text x="20" y="30" fontFamily="var(--font-grotesk)" fontSize="10" fill="var(--fg-onDark)"
        opacity={1 - t * 0.5}
        style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>Hiring window</text>

      {Array.from({ length: weeks }).map((_, w) =>
        Array.from({ length: days }).map((_, d) => {
          const ox = startX + d * cellW + d;
          const oy = startY + w * cellH + w;
          // Target: collapse all to a single cell at center, scaled up
          const tx = lerp(ox, 300 - 30, t);
          const ty = lerp(oy, 130, t);
          const tw = lerp(cellW, 60 / weeks, t * Math.min(1, t * 1.2));
          const th = lerp(cellH, 60 / weeks, t * Math.min(1, t * 1.2));
          const opacity = (w === weeks - 1 && d === days - 1) ? 1 : Math.max(0, 1 - t * 1.2);
          return (
            <rect key={`${w}-${d}`} x={tx} y={ty} width={tw} height={th}
              fill={(w === weeks - 1 && d === days - 1) ? "var(--accent)" : "rgba(255,255,245,0.12)"}
              stroke="rgba(255,255,245,0.25)" strokeWidth="0.5"
              opacity={opacity} rx="1.5" />
          );
        })
      )}

      {/* Final 24h block */}
      <rect x="270" y="115" width="60" height="60" fill="var(--accent)" opacity={t}
        style={{ transition: 'all 200ms' }} rx="2" />
      <text x="300" y={155} textAnchor="middle"
        fontFamily="var(--font-text)" fontWeight="600" fontSize="22"
        fill="var(--tp-ink)" opacity={t}>24h</text>

      <text x="60" y="240" fontFamily="var(--font-grotesk)" fontSize="11" fill="var(--fg-onDark)"
        opacity={1 - t} style={{ letterSpacing: '0.06em' }}>4 weeks · 28 days · application → offer</text>
      <text x="300" y="230" textAnchor="middle"
        fontFamily="var(--font-text)" fontWeight="500" fontSize={16 + t * 14}
        fill="var(--accent)" letterSpacing="-0.02em" opacity={t}>One day</text>
    </svg>
  );
}

function HeroAnimation({ variant, playKey }) {
  const [internalKey, setInternalKey] = useState(0);
  const k = `${variant}-${playKey}-${internalKey}`;
  const replay = () => setInternalKey(n => n + 1);

  return (
    <div className="dr-anim-wrap">
      <div className="dr-anim-header">
        <span className="eyebrow">Signature · weeks → 24 hours</span>
        <button className="dr-anim-replay" onClick={replay}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          Replay
        </button>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        {variant === 'funnel' && <HeroFunnel playKey={k} />}
        {variant === 'bars' && <HeroBars playKey={k} />}
        {variant === 'calendar' && <HeroCalendar playKey={k} />}
      </div>
    </div>
  );
}

Object.assign(window, { HeroAnimation });
