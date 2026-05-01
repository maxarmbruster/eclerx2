// HeroTangleToPipeline — wide editorial dark illustration.
// Left: tangled "TODAY · WEEKS" web of recruitment tools. Right: clean "24 HOURS · AUTOMATED" pipeline.
// Both states held visible at end. Subtle entry animation, replayable. Reduced-motion = static.

const { useState, useEffect } = React;

function HeroTangleToPipeline() {
  const [phase, setPhase] = useState(0); // 0 idle → 1 tangle drawn → 2 arrow → 3 pipeline lit
  const [replayKey, setReplayKey] = useState(0);
  const reduced = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  useEffect(() => {
    if (reduced) { setPhase(3); return; }
    setPhase(0);
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 1100);
    const t3 = setTimeout(() => setPhase(3), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [replayKey]);

  // Left tangle nodes — channel sources + friction processes. Off-grid coords.
  // x,y is the icon center; label sits below. Box w fits label.
  const nodes = [
    { id: 'jobstreet', label: 'Jobstreet',  x: 70,  y: 80,  icon: 'js', kind: 'src' },
    { id: 'linkedin',  label: 'LinkedIn',   x: 200, y: 60,  icon: 'li', kind: 'src' },
    { id: 'facebook',  label: 'Facebook',   x: 320, y: 95,  icon: 'fb', kind: 'src' },
    { id: 'instagram', label: 'Instagram',  x: 100, y: 160, icon: 'ig', kind: 'src' },
    { id: 'tiktok',    label: 'TikTok',     x: 245, y: 175, icon: 'tt', kind: 'src' },
    { id: 'referrals', label: 'Referrals',  x: 50,  y: 240, icon: 'ref', kind: 'src' },
    { id: 'erp',       label: 'eClerx ERP', x: 350, y: 215, icon: 'erp', kind: 'src' },
    { id: 'web',       label: 'Web leads',  x: 175, y: 260, icon: 'web', kind: 'src' },
    // friction processes — bottom band
    { id: 'cv',        label: 'CV review',     x: 60,  y: 340, icon: 'cv',     kind: 'fric' },
    { id: 'versant',   label: 'Versant',       x: 175, y: 360, icon: 'versant',kind: 'fric' },
    { id: 'sched',     label: 'Scheduling',    x: 295, y: 340, icon: 'cal',    kind: 'fric' },
    { id: 'docs',      label: 'Doc chasing',   x: 95,  y: 440, icon: 'mail',   kind: 'fric' },
    { id: 'oracle_in', label: 'Oracle entry',  x: 260, y: 445, icon: 'form',   kind: 'fric' },
  ];

  // Tangle connections — intentionally crossing
  const lines = [
    ['jobstreet','cv'],['linkedin','cv'],['linkedin','versant'],
    ['facebook','versant'],['facebook','sched'],['instagram','cv'],
    ['tiktok','sched'],['referrals','docs'],['erp','oracle_in'],
    ['web','sched'],['web','versant'],['cv','versant'],
    ['versant','sched'],['sched','docs'],['sched','oracle_in'],
    ['docs','oracle_in'],['cv','docs'],['instagram','versant'],
    ['jobstreet','sched'],['referrals','cv'],
  ];

  // Right pipeline
  const pipeY = 280;
  const pipeStart = 600;
  const pipeEnd = 1100;
  const stops = [
    { id: 'inbox',  label: 'Inbox',       icon: 'inbox' },
    { id: 'ai',     label: 'AI screen',   icon: 'wave' },
    { id: 'sched',  label: 'Schedule',    icon: 'cal' },
    { id: 'docs',   label: 'Document AI', icon: 'doc' },
    { id: 'oracle', label: 'Oracle',      icon: 'oracle', terminal: true },
  ];
  const stopXs = stops.map((_, i) =>
    pipeStart + ((pipeEnd - pipeStart) / (stops.length - 1)) * i
  );

  return (
    <div className="dr-hero-vis">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet" className="dr-hero-vis-svg">
        <defs>
          <radialGradient id="pipeGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="var(--accent-solid)" stopOpacity="0.28" />
            <stop offset="60%" stopColor="var(--accent-solid)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--accent-solid)" stopOpacity="0" />
          </radialGradient>
          <pattern id="dotsHero" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,245,0.10)" />
          </pattern>
          <marker id="heroArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10" fill="none" stroke="var(--accent-solid)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Background dot grid */}
        <rect x="0" y="0" width="1200" height="600" fill="url(#dotsHero)" />

        {/* Subtle dividing seam */}
        <line x1="510" y1="60" x2="510" y2="540" stroke="rgba(255,255,245,0.06)" strokeDasharray="2 8" />

        {/* ===== LEFT — TANGLE ===== */}
        <g className="dr-tangle" data-phase={phase}>
          {/* eyebrow */}
          <g transform="translate(50, 40)">
            <text fontFamily="var(--font-grotesk)" fontSize="11" letterSpacing="2.6" fill="rgba(255,255,245,0.55)">TODAY · WEEKS</text>
            <line x1="0" y1="10" x2="36" y2="10" stroke="rgba(255,255,245,0.3)" strokeWidth="1" />
          </g>

          {/* tangle lines */}
          <g className="dr-tangle-lines">
            {lines.map(([a, b], i) => {
              const A = nodes.find(n => n.id === a);
              const B = nodes.find(n => n.id === b);
              if (!A || !B) return null;
              const cx = (A.x + B.x) / 2 + ((i % 5) - 2) * 14;
              const cy = (A.y + B.y) / 2 + ((i % 4) - 1.5) * 10;
              return (
                <path key={i}
                  d={`M ${A.x} ${A.y} Q ${cx} ${cy}, ${B.x} ${B.y}`}
                  stroke="rgba(255,255,245,0.18)"
                  strokeWidth="1"
                  fill="none"
                  className="dr-tangle-line"
                  style={{ animationDelay: `${(i % 8) * 60}ms` }}
                />
              );
            })}
          </g>

          {/* nodes */}
          {nodes.map((n, i) => {
            const friction = n.kind === 'fric';
            const stroke = friction ? 'rgba(255, 200, 180, 0.55)' : 'rgba(255,255,245,0.55)';
            const labelColor = friction ? 'rgba(255, 200, 180, 0.95)' : 'rgba(255,255,245,0.85)';
            return (
              <g key={n.id} className="dr-tangle-node" transform={`translate(${n.x}, ${n.y})`}
                style={{ animationDelay: `${i * 30}ms` }}>
                <circle r="15" fill="rgba(10,10,11,0.85)" stroke={stroke} strokeWidth="1" />
                <TangleIcon kind={n.icon} stroke={stroke} />
                <text x="0" y="32" textAnchor="middle"
                  fontFamily="var(--font-grotesk)" fontSize="10.5" fontWeight="500"
                  fill={labelColor}>{n.label}</text>
              </g>
            );
          })}

          {/* footer caption */}
          <text x="50" y="555" fontFamily="var(--font-grotesk)" fontSize="11" letterSpacing="1.6" fill="rgba(255,255,245,0.5)">
            weeks · 6+ tools · manual handoffs
          </text>
        </g>

        {/* ===== CENTRE — ARROW ===== */}
        <g className="dr-arrow" data-phase={phase}>
          <line x1="520" y1={pipeY} x2="585" y2={pipeY}
            stroke="var(--accent-solid)" strokeWidth="1.5" strokeLinecap="round"
            markerEnd="url(#heroArr)" filter="url(#heroGlow)" />
        </g>

        {/* ===== RIGHT — PIPELINE ===== */}
        <g className="dr-pipeline" data-phase={phase}>
          {/* eyebrow */}
          <g transform="translate(600, 40)">
            <text fontFamily="var(--font-grotesk)" fontSize="11" letterSpacing="2.6" fill="var(--accent-solid)">24 HOURS · AUTOMATED</text>
            <line x1="0" y1="10" x2="36" y2="10" stroke="var(--accent-solid)" strokeWidth="1.5" />
          </g>

          {/* glow ellipse under pipeline */}
          <ellipse cx="850" cy={pipeY} rx="380" ry="140" fill="url(#pipeGlow)" />

          {/* track */}
          <line x1={pipeStart} y1={pipeY} x2={pipeEnd} y2={pipeY}
            stroke="rgba(255,255,245,0.18)" strokeWidth="1.5" />

          {/* progress fill */}
          <line className="dr-pipe-fill"
            x1={pipeStart} y1={pipeY} x2={pipeEnd} y2={pipeY}
            stroke="var(--accent-solid)" strokeWidth="2" strokeLinecap="round" />

          {/* moving spark */}
          <g className="dr-pipe-spark" data-phase={phase}>
            <circle r="4" fill="var(--accent-solid)" filter="url(#heroGlow)">
              <animateMotion dur="3s" repeatCount="indefinite" rotate="auto"
                path={`M ${pipeStart} ${pipeY} L ${pipeEnd} ${pipeY}`} />
            </circle>
          </g>

          {/* stops */}
          {stops.map((s, i) => {
            const x = stopXs[i];
            return (
              <g key={s.id} className="dr-pipe-stop" data-i={i}
                transform={`translate(${x}, ${pipeY})`}
                style={{ animationDelay: `${300 + i * 130}ms` }}>
                <circle r="26" fill="var(--tp-ink)" stroke="var(--accent-solid)" strokeWidth={s.terminal ? 2.5 : 1.5} />
                <PipelineIcon kind={s.icon} />
                <text x="0" y="56" textAnchor="middle"
                  fontFamily="var(--font-grotesk)" fontSize="12" fontWeight="600"
                  fill="var(--tp-beige)" letterSpacing="0.04em">{s.label}</text>
              </g>
            );
          })}

          {/* terminal pulse on Oracle */}
          <circle cx={stopXs[stopXs.length - 1]} cy={pipeY} r="26"
            className="dr-pipe-terminal-pulse"
            fill="none" stroke="var(--accent-solid)" strokeWidth="1.5" />

          {/* footer caption */}
          <text x="600" y="555" fontFamily="var(--font-grotesk)" fontSize="11" letterSpacing="1.6" fill="rgba(255,255,245,0.7)">
            24 hours · one platform · AI-driven
          </text>

          {/* region tag */}
          <g transform="translate(1150, 40)">
            <text textAnchor="end" fontFamily="var(--font-grotesk)" fontSize="10" letterSpacing="1.8" fill="rgba(255,255,245,0.45)">
              MANILA · INDIA · CAIRO
            </text>
          </g>
        </g>
      </svg>

      {!reduced && (
        <button className="dr-hero-replay" onClick={() => setReplayKey(k => k + 1)} aria-label="Replay animation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          <span>Replay</span>
        </button>
      )}
    </div>
  );
}

// Tangle node icon glyphs — channel marks + process glyphs. Drawn within ±10 of origin.
function TangleIcon({ kind, stroke }) {
  const s = stroke || 'rgba(255,255,245,0.7)';
  const common = { fill: 'none', stroke: s, strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'js': // Jobstreet — briefcase
      return (<g {...common}>
        <rect x="-7" y="-4" width="14" height="9" rx="1"/>
        <path d="M-3 -4 L-3 -6 L3 -6 L3 -4"/>
        <line x1="-7" y1="0" x2="7" y2="0"/>
      </g>);
    case 'li': // LinkedIn — "in"
      return (<g fill={s} stroke="none">
        <rect x="-7" y="-3" width="2.4" height="8" rx="0.4"/>
        <circle cx="-5.8" cy="-5.2" r="1.4"/>
        <path d="M-2 -3 L0.4 -3 L0.4 -1.5 C0.9 -2.6, 2.2 -3.2, 3.6 -3.2 C5.6 -3.2, 6.8 -2, 6.8 0.4 L6.8 5 L4.4 5 L4.4 1 C4.4 -0.2, 4 -1, 2.8 -1 C1.6 -1, 0.4 -0.1, 0.4 1.4 L0.4 5 L-2 5 Z"/>
      </g>);
    case 'fb': // Facebook — "f"
      return (<g fill={s} stroke="none">
        <path d="M1.6 6.4 L1.6 0.6 L3.6 0.6 L3.9 -1.8 L1.6 -1.8 L1.6 -3.2 C1.6 -3.9, 1.8 -4.4, 2.9 -4.4 L4 -4.4 L4 -6.5 C3.8 -6.5, 3.1 -6.6, 2.3 -6.6 C0.6 -6.6, -0.6 -5.6, -0.6 -3.5 L-0.6 -1.8 L-2.6 -1.8 L-2.6 0.6 L-0.6 0.6 L-0.6 6.4 Z"/>
      </g>);
    case 'ig': // Instagram — camera squircle
      return (<g {...common}>
        <rect x="-6.5" y="-6.5" width="13" height="13" rx="3.5"/>
        <circle cx="0" cy="0" r="3"/>
        <circle cx="4.2" cy="-4.2" r="0.8" fill={s}/>
      </g>);
    case 'tt': // TikTok — note glyph
      return (<g {...common}>
        <path d="M2 -7 L2 3 a3 3 0 1 1 -3 -3"/>
        <path d="M2 -7 c0.6 1.8 2 3 4 3.2"/>
      </g>);
    case 'ref': // Referrals — two-person
      return (<g {...common}>
        <circle cx="-3" cy="-2" r="2"/>
        <path d="M-7 5 c0 -2.5 1.6 -4 4 -4 s4 1.5 4 4"/>
        <circle cx="3" cy="-3" r="1.6"/>
        <path d="M0.5 5 c0 -2 1 -3 2.5 -3 s2.5 1 2.5 3"/>
      </g>);
    case 'erp': // eClerx ERP — stacked layers
      return (<g {...common}>
        <path d="M-6 -3 L0 -6 L6 -3 L0 0 Z"/>
        <path d="M-6 0 L0 3 L6 0"/>
        <path d="M-6 3 L0 6 L6 3"/>
      </g>);
    case 'web': // Web leads — globe
      return (<g {...common}>
        <circle cx="0" cy="0" r="6"/>
        <ellipse cx="0" cy="0" rx="2.5" ry="6"/>
        <line x1="-6" y1="0" x2="6" y2="0"/>
      </g>);
    case 'cv': // CV review — doc with magnifier
      return (<g {...common}>
        <path d="M-5 -6 L2 -6 L5 -3 L5 5 L-5 5 Z"/>
        <line x1="-2.5" y1="-2" x2="2" y2="-2"/>
        <line x1="-2.5" y1="0.5" x2="2" y2="0.5"/>
        <circle cx="3" cy="3.5" r="2" stroke={s} strokeWidth="1.4" fill="rgba(10,10,11,0.85)"/>
        <line x1="4.5" y1="5" x2="6" y2="6.5" strokeWidth="1.4"/>
      </g>);
    case 'versant': // Versant — proctored test (monitor + headset arc)
      return (<g {...common}>
        <rect x="-6" y="-5" width="12" height="8" rx="0.5"/>
        <line x1="-3" y1="6" x2="3" y2="6"/>
        <line x1="0" y1="3" x2="0" y2="6"/>
        <path d="M-7 -2 a2 2 0 0 1 0 -3 a7 7 0 0 1 14 0 a2 2 0 0 1 0 3" stroke={s} strokeOpacity="0.55"/>
      </g>);
    case 'cal': // Calendar w/ overlapping events
      return (<g {...common}>
        <rect x="-6" y="-5" width="12" height="11" rx="0.8"/>
        <line x1="-6" y1="-1.5" x2="6" y2="-1.5"/>
        <line x1="-3" y1="-7" x2="-3" y2="-3"/>
        <line x1="3" y1="-7" x2="3" y2="-3"/>
        <rect x="-4.5" y="0.5" width="5" height="2" fill={s} stroke="none" opacity="0.6"/>
        <rect x="-2.5" y="3" width="5" height="2" fill={s} stroke="none" opacity="0.6"/>
      </g>);
    case 'mail': // Email thread
      return (<g {...common}>
        <rect x="-6" y="-4" width="12" height="9" rx="0.8"/>
        <path d="M-6 -3 L0 1.5 L6 -3"/>
        <line x1="-6" y1="6.5" x2="6" y2="6.5" opacity="0.5"/>
      </g>);
    case 'form': // Form into database
      return (<g {...common}>
        <rect x="-6" y="-6" width="7" height="9" rx="0.5"/>
        <line x1="-4" y1="-3.5" x2="-1" y2="-3.5"/>
        <line x1="-4" y1="-1" x2="-1" y2="-1"/>
        <line x1="-4" y1="1.5" x2="-1" y2="1.5"/>
        <path d="M2 -1 L5 -1" markerEnd="url(#heroArr)" stroke={s}/>
        <ellipse cx="6" cy="-1" rx="0" ry="0"/>
        <ellipse cx="5" cy="2" rx="3" ry="1"/>
        <path d="M2 2 L2 5"/>
        <path d="M8 2 L8 5"/>
        <ellipse cx="5" cy="5" rx="3" ry="1"/>
      </g>);
    default: return null;
  }
}

// Pipeline icon glyphs — drawn within ±13 of origin (center of 26r circle).
function PipelineIcon({ kind }) {
  const s = "var(--accent-solid)";
  const common = { fill: 'none', stroke: s, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'inbox':
      return (<g {...common}>
        <rect x="-10" y="-8" width="20" height="16" rx="1.5"/>
        <path d="M-10 1 L-4 1 L-2 4 L2 4 L4 1 L10 1"/>
      </g>);
    case 'wave':
      return (<g {...common}>
        <line x1="-9" y1="0" x2="-9" y2="0"/>
        <line x1="-6" y1="-4" x2="-6" y2="4"/>
        <line x1="-3" y1="-7" x2="-3" y2="7"/>
        <line x1="0" y1="-5" x2="0" y2="5"/>
        <line x1="3" y1="-7" x2="3" y2="7"/>
        <line x1="6" y1="-3" x2="6" y2="3"/>
        <line x1="9" y1="-1" x2="9" y2="1"/>
      </g>);
    case 'cal':
      return (<g {...common}>
        <rect x="-9" y="-7" width="18" height="14" rx="1.5"/>
        <line x1="-9" y1="-3" x2="9" y2="-3"/>
        <line x1="-5" y1="-10" x2="-5" y2="-5"/>
        <line x1="5" y1="-10" x2="5" y2="-5"/>
        <circle cx="0" cy="3" r="1.6" fill={s}/>
      </g>);
    case 'doc':
      return (<g {...common}>
        <path d="M-7 -9 L4 -9 L8 -5 L8 9 L-7 9 Z"/>
        <line x1="-3.5" y1="-3" x2="5" y2="-3"/>
        <line x1="-3.5" y1="0" x2="5" y2="0"/>
        <line x1="-3.5" y1="3" x2="2" y2="3"/>
        <circle cx="6" cy="6" r="2.2" stroke={s} strokeWidth="1.4"/>
      </g>);
    case 'oracle':
      return (<g {...common}>
        <ellipse cx="0" cy="-5" rx="9" ry="2.6"/>
        <path d="M-9 -5 L-9 5"/>
        <path d="M9 -5 L9 5"/>
        <ellipse cx="0" cy="5" rx="9" ry="2.6"/>
        <path d="M-9 0 a9 2.6 0 0 0 18 0" strokeOpacity="0.6"/>
      </g>);
    default: return null;
  }
}

Object.assign(window, { HeroTangleToPipeline });
