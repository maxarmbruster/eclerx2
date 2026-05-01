// Diagrams: sourcing 8→1, Oracle architecture, three-region map
const { useEffect, useState } = React;

function SourcingCollapseDiagram() {
  const [ref, inView] = useInView();
  const sources = [
    "Jobstreet", "LinkedIn", "Facebook", "Instagram",
    "TikTok", "Referrals", "eClerx ERP", "Website leads"
  ];
  return (
    <div ref={ref} style={{ background: 'rgba(17,17,21,0.02)', border: '1px solid rgba(17,17,21,0.12)', borderRadius: 8, padding: 24 }}>
      <div style={{ fontFamily: 'var(--font-grotesk)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,21,0.5)', marginBottom: 18 }}>
        From channel sprawl to one inbox
      </div>
      <svg viewBox="0 0 600 320" style={{ width: '100%', display: 'block' }}>
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="rgba(17,17,21,0.45)" />
          </marker>
        </defs>
        {/* Source labels left side */}
        {sources.map((s, i) => {
          const y = 30 + i * 32;
          const opacity = inView ? 1 : 0;
          const delay = i * 80;
          return (
            <g key={s} style={{ opacity, transition: `opacity 400ms ${delay}ms` }}>
              <rect x="20" y={y} width="140" height="22" rx="2"
                fill="var(--tp-beige)" stroke="rgba(17,17,21,0.25)" strokeWidth="1" />
              <text x="30" y={y + 15} fontFamily="var(--font-text)" fontWeight="500" fontSize="12" fill="var(--tp-ink)">
                {s}
              </text>
              <path d={`M 160 ${y + 11} C 280 ${y + 11}, 320 160, 420 160`}
                stroke="rgba(17,17,21,0.3)" strokeWidth="1.2" fill="none"
                markerEnd="url(#arr)"
                strokeDasharray="500"
                strokeDashoffset={inView ? 0 : 500}
                style={{ transition: `stroke-dashoffset 1000ms ${300 + delay}ms ease-out` }}
              />
            </g>
          );
        })}
        {/* CRM destination */}
        <g style={{ opacity: inView ? 1 : 0, transition: 'opacity 600ms 1100ms' }}>
          <rect x="420" y="125" width="160" height="80" rx="4"
            fill="var(--tp-ink)" stroke="var(--tp-ink)" />
          <text x="500" y="155" textAnchor="middle"
            fontFamily="var(--font-grotesk)" fontSize="10" letterSpacing="0.12em" fill="rgba(255,255,245,0.6)">
            ONE INBOX
          </text>
          <text x="500" y="180" textAnchor="middle"
            fontFamily="var(--font-text)" fontWeight="600" fontSize="16" fill="var(--tp-beige)">
            Talkpush CRM
          </text>
          <text x="500" y="200" textAnchor="middle"
            fontFamily="var(--font-text)" fontSize="11" fill="rgba(255,255,245,0.5)">
            dedupe · routed · scored
          </text>
        </g>
      </svg>
    </div>
  );
}

function OracleArchDiagram() {
  const [ref, inView] = useInView();
  const items = [
    "Candidate records & statuses", "Application data + resumes",
    "AI interview scores + transcripts", "Documents · IDs · signed offers",
    "Hire / no-hire decisions", "Source attribution"
  ];
  return (
    <div ref={ref} style={{ background: 'rgba(17,17,21,0.02)', border: '1px solid rgba(17,17,21,0.12)', borderRadius: 8, padding: 24 }}>
      <div style={{ fontFamily: 'var(--font-grotesk)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,21,0.5)', marginBottom: 18 }}>
        Bidirectional sync · API · SSO (SAML/OIDC) · configurable data residency
      </div>
      <svg viewBox="0 0 600 280" style={{ width: '100%', display: 'block' }}>
        <defs>
          <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--accent)" />
          </marker>
          <marker id="arr2b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="rgba(17,17,21,0.5)" />
          </marker>
        </defs>
        {/* Talkpush box */}
        <rect x="20" y="100" width="180" height="80" rx="4" fill="var(--tp-ink)" />
        <text x="110" y="130" textAnchor="middle" fontFamily="var(--font-grotesk)" fontSize="10" letterSpacing="0.12em" fill="rgba(255,255,245,0.5)">PLATFORM</text>
        <text x="110" y="155" textAnchor="middle" fontFamily="var(--font-text)" fontWeight="600" fontSize="16" fill="var(--tp-beige)">Talkpush CRM</text>
        <text x="110" y="173" textAnchor="middle" fontFamily="var(--font-text)" fontSize="11" fill="rgba(255,255,245,0.5)">Source · Screen · Hire</text>

        {/* Oracle box */}
        <rect x="400" y="100" width="180" height="80" rx="4" fill="var(--tp-beige)" stroke="rgba(17,17,21,0.4)" />
        <text x="490" y="130" textAnchor="middle" fontFamily="var(--font-grotesk)" fontSize="10" letterSpacing="0.12em" fill="rgba(17,17,21,0.5)">HRIS</text>
        <text x="490" y="155" textAnchor="middle" fontFamily="var(--font-text)" fontWeight="600" fontSize="16" fill="var(--tp-ink)">Oracle</text>
        <text x="490" y="173" textAnchor="middle" fontFamily="var(--font-text)" fontSize="11" fill="rgba(17,17,21,0.5)">eClerx HR system of record</text>

        {/* Arrows */}
        <line x1="200" y1="130" x2="400" y2="130" stroke="var(--accent)" strokeWidth="2"
          markerEnd="url(#arr2)"
          strokeDasharray="200" strokeDashoffset={inView ? 0 : 200}
          style={{ transition: 'stroke-dashoffset 800ms 200ms' }} />
        <line x1="400" y1="155" x2="200" y2="155" stroke="rgba(17,17,21,0.5)" strokeWidth="1.5"
          markerEnd="url(#arr2b)"
          strokeDasharray="200" strokeDashoffset={inView ? 0 : 200}
          style={{ transition: 'stroke-dashoffset 800ms 600ms' }} />

        {/* Sync labels */}
        <text x="300" y="120" textAnchor="middle" fontFamily="var(--font-grotesk)" fontSize="10" letterSpacing="0.08em" fill="var(--accent)" opacity={inView ? 1 : 0} style={{ transition: 'opacity 400ms 600ms' }}>HIRES + SCORES →</text>
        <text x="300" y="173" textAnchor="middle" fontFamily="var(--font-grotesk)" fontSize="10" letterSpacing="0.08em" fill="rgba(17,17,21,0.6)" opacity={inView ? 1 : 0} style={{ transition: 'opacity 400ms 1000ms' }}>← REQUISITIONS · ROLES</text>

        {/* Items */}
        {items.map((it, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 30 + col * 190;
          const y = 220 + row * 26;
          return (
            <g key={i} style={{ opacity: inView ? 1 : 0, transition: `opacity 400ms ${1100 + i * 80}ms` }}>
              <circle cx={x} cy={y - 4} r="2.5" fill="var(--accent)" />
              <text x={x + 10} y={y} fontFamily="var(--font-text)" fontSize="11.5" fill="var(--tp-ink)">{it}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function GeoMapDiagram({ activeRegion }) {
  // Simple stylized 3-region card row
  const regions = {
    manila: { label: "Manila", phase: "Phase 1", note: "Pilot launch · 150–300/mo · Messenger + WhatsApp dominant", x: 90 },
    india: { label: "India", phase: "Phase 2", note: "Agency Portal · Fraud Shield · Naukri 1-click · 9 dialects", x: 290 },
    cairo: { label: "Cairo", phase: "Phase 3 (on demand)", note: "WhatsApp-first · Egyptian Arabic AI voice · 5-language TalkScore", x: 490 },
  };
  return (
    <svg viewBox="0 0 600 200" style={{ width: '100%', display: 'block', background: 'rgba(17,17,21,0.02)', border: '1px solid rgba(17,17,21,0.12)', borderRadius: 8 }}>
      {/* dotted route line */}
      <path d="M 90 100 L 290 100 L 490 100" stroke="rgba(17,17,21,0.25)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      {Object.entries(regions).map(([key, r]) => {
        const active = activeRegion === key;
        return (
          <g key={key} style={{ transition: 'all 250ms' }}>
            <circle cx={r.x} cy="100" r={active ? 14 : 8} fill={active ? "var(--accent)" : "var(--tp-ink)"}
              stroke="var(--tp-ink)" strokeWidth="2" />
            <text x={r.x} y="60" textAnchor="middle" fontFamily="var(--font-grotesk)" fontSize="10"
              letterSpacing="0.12em" fill={active ? "var(--tp-ink)" : "rgba(17,17,21,0.5)"}
              fontWeight={active ? 600 : 400}>{r.phase.toUpperCase()}</text>
            <text x={r.x} y="140" textAnchor="middle" fontFamily="var(--font-text)" fontWeight="600" fontSize="16" fill="var(--tp-ink)">{r.label}</text>
            <text x={r.x} y="160" textAnchor="middle" fontFamily="var(--font-text)" fontSize="10" fill="rgba(17,17,21,0.55)">
              <tspan>{r.note.split('·')[0]}</tspan>
            </text>
            <text x={r.x} y="174" textAnchor="middle" fontFamily="var(--font-text)" fontSize="10" fill="rgba(17,17,21,0.55)">
              <tspan>{r.note.split('·').slice(1).join('·')}</tspan>
            </text>
          </g>
        );
      })}
    </svg>
  );
}

Object.assign(window, { SourcingCollapseDiagram, OracleArchDiagram, GeoMapDiagram });
