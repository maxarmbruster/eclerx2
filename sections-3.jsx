// Sections 8–10: timeline, resources, next steps

function SectionTimeline() {
  const [active, setActive] = React.useState(0);
  const phases = [
    { when: 'Weeks 1–2', name: 'Discovery', blurb: 'Use case workshops; role mapping; channel inventory; Oracle scoping.', detail: ['Use case workshops with Manila TA leadership', 'Role mapping (CSR + 2–3 specialist roles for pilot)', 'Channel inventory across the 8+ sources', 'Oracle integration scoping with eClerx IT', 'Recruiter shadowing days'] },
    { when: 'Weeks 3–6', name: 'Configuration', blurb: 'AI Interviews built; Oracle connector deployed; Versant correlation prep.', detail: ['AI Interview builds for pilot roles', 'Sourcing flow setup (Jobstreet, LinkedIn, ERP, referrals)', 'Oracle connector deployment', 'Recruiter training sessions', 'eClerx-specific Versant correlation study setup (50–100 candidates planned)'] },
    { when: 'Weeks 7–12', name: 'Pilot — 90 days', blurb: 'Manila pilot, all CSR + 2 specialist roles, full funnel.', detail: ['Subset of roles, full end-to-end funnel', 'Data collection & continuous tuning', 'Versant correlation study runs in parallel', 'Hypercare Dashboard live', 'Pre-agreed success criteria: time-to-offer reduction, completion rate, recruiter time saved'] },
    { when: 'Month 4', name: 'Manila full launch', blurb: 'All roles live. KPI baseline locked.', detail: ['All Manila roles activated', 'KPI baseline locked against pilot results', 'Pilot agreement transitions to full rollout — no separate negotiation post-pilot', 'Pre-agreed Q3 readiness met'] },
    { when: 'Months 5–7', name: 'India rollout', blurb: 'Agency Portal · Fraud Shield · Naukri Direct Apply.', detail: ['Agency Portal activation', 'India-specific module configuration (Fraud Shield, multilingual bots)', 'Local team training', 'India-specific pitch already pre-sold to leadership during Manila phase'] },
    { when: 'TBD', name: 'Cairo / EMEA', blurb: 'Activated once Manila + India are stable.', detail: ['Egyptian Arabic voice agent activation', 'Multilingual TalkScore (5 languages) configured', 'WhatsApp-first funnel template applied', 'Configuration not build — weeks not quarters'] },
  ];
  return (
    <>
      <div className="dr-twocol">
        <div className="left">
          <p className="claim">Kick off in May 2026, pilot by early July, full launch by August — ahead of the Q3 calendar peak.</p>
          <p className="lead">The fiscal-year-aligned peak (Q1 FY27 onwards) is comfortably covered. India follows in Months 5–7. Cairo is on demand: turn it on rather than build it out.</p>
        </div>
        <div className="right">
          <div className="dr-timeline">
            {phases.map((p, i) => (
              <div key={i} className={`dr-timeline-phase ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} role="button">
                <div className="dot"></div>
                <div className="when">{p.when}</div>
                <div className="name">{p.name}</div>
                <div className="blurb">{p.blurb}</div>
              </div>
            ))}
          </div>
          <div className="dr-timeline-detail">
            <h4>{phases[active].name} — {phases[active].when}</h4>
            <ul>{phases[active].detail.map((d, j) => <li key={j}>{d}</li>)}</ul>
          </div>
        </div>
      </div>
      <div className="dr-info-card" style={{marginTop: 36}}>
        <div className="dr-info-card-head">
          <span className="ey">Pilot framework</span>
          <h4>90-day pilot, Manila only</h4>
        </div>
        <div className="dr-info-card-body">
          <div className="row">
            <span className="k">Scope</span>
            <span className="v">All CSR roles + 2 specialist role types (recommend digital marketer + graphic designer).</span>
          </div>
          <div className="row">
            <span className="k">Success criteria</span>
            <span className="v">Pre-agreed before kickoff. Default suggestions: time-to-offer reduction · candidate completion rate · recruiter time saved · Versant correlation result.</span>
          </div>
          <div className="row">
            <span className="k">Path to rollout</span>
            <span className="v">Written into the pilot agreement — no separate negotiation post-pilot.</span>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionResources() {
  const cards = [
    { tab: 'sponsors', title: 'Project sponsors', items: [
      { href: '#versant', label: 'Section 02 — Versant question (the core "can TalkScore replace Versant" answer)' },
      { href: '#platform', label: 'Section 04 — End-to-end platform (sourcing → onboarding scope)' },
      { href: 'https://talkscore-hub.talkpush.com', label: 'TalkScore Hub live: talkscore-hub.talkpush.com', external: true },
      { href: 'https://talkscore.live', label: 'TalkScore Interview Builder: talkscore.live', external: true },
    ]},
    { tab: 'manila', title: 'Manila TA leadership', items: [
      { href: '#roles', label: 'Section 05 — Built for your role mix' },
      { href: '#timeline', label: 'Section 08 — Implementation timeline' },
      { label: 'This dossier is designed to be the material that gets forwarded to internal stakeholders ahead of the next round of meetings.' },
    ]},
    { tab: 'india', title: 'India leadership', items: [
      { href: '#geo', label: 'Section 07 — Geo, India tab. Lead with this.' },
      { href: '#oracle', label: 'Section 06 — Oracle integration; Alorica is the warm reference' },
      { label: 'Recommended: a 5-minute live AI interview before any briefing meeting, so India leadership experiences the candidate side' },
      { label: 'TalkScore Hub link covers the recruiter side' },
    ]},
    { tab: 'procit', title: 'Procurement & IT', items: [
      { href: '#oracle', label: 'Section 06 — Oracle integration architecture' },
      { label: 'Security and data handling overview — available on request' },
      { label: 'SLA framework — available on request' },
    ]},
  ];
  return (
    <div className="dr-resources">
      {cards.map(c => (
        <div key={c.tab} className="dr-resource-card">
          <div className="ey">For</div>
          <h4>{c.title}</h4>
          <ul>{c.items.map((i, k) => (
            <li key={k}>
              {i.href
                ? <a href={i.href} target={i.external ? '_blank' : undefined} rel={i.external ? 'noopener noreferrer' : undefined}>{i.label}{i.external ? ' ↗' : ''}</a>
                : <span>{i.label}</span>}
            </li>
          ))}</ul>
        </div>
      ))}
    </div>
  );
}

function SectionNextSteps() {
  return (
    <>
      <div className="dr-twocol">
        <div className="left">
          <p className="claim">Three concrete commitments from us. Four parallel asks of eClerx.</p>
          <div style={{marginTop: 24}}>
            <a className="dr-btn secondary" href="https://products.talkpush.com" target="_blank" rel="noreferrer">Open the live product catalogue ↗</a>
          </div>
        </div>
        <div className="right">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
            <div className="dr-stat">
              <div className="label">Our commitments</div>
              <ol style={{paddingLeft: 18, margin: '12px 0 0', fontSize: 14, lineHeight: 1.55}}>
                <li><strong>Materials package by end of week.</strong> This dossier, TalkScore docs, both 2024 Versant correlation study summaries, and the AI interview demo guide.</li>
                <li><strong>Demo session 2.</strong> Sourcing module + TalkScore Hub, 60 minutes.</li>
                <li><strong>Versant correlation study.</strong> Third correlation study on 50–100 of eClerx's own dual-tested candidates as part of the pilot.</li>
              </ol>
            </div>
            <div className="dr-stat">
              <div className="label">Asks of eClerx — in parallel</div>
              <ol style={{paddingLeft: 18, margin: '12px 0 0', fontSize: 14, lineHeight: 1.55}}>
                <li><strong>Confirm pilot scope:</strong> which roles, which Manila team, which timeline.</li>
                <li><strong>Confirm the Oracle integration sponsor</strong> on the eClerx side.</li>
                <li><strong>Identify the Versant-required account;</strong> confirm phase-1 coexistence is acceptable.</li>
                <li><strong>Loop in India leadership</strong> ahead of any Manila visit — so we can prep specifically for that audience.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(17,17,21,0.15)', maxWidth: 920}}>
        <h3 style={{
          fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 22,
          letterSpacing: '-0.01em', margin: '0 0 14px', color: 'var(--tp-ink)'
        }}>
          How to reach us
        </h3>
        <p style={{
          fontFamily: 'var(--font-text)', fontSize: 15.5, lineHeight: 1.6,
          color: 'rgba(17,17,21,0.78)', margin: 0
        }}>
          Contact your Talkpush account team for follow-ups, demos, references, and security or commercial documentation. Live product demos are also available 24/7 at <a href="https://products.talkpush.com" target="_blank" rel="noreferrer" style={{color: 'var(--tp-ink)', borderBottom: '1px solid rgba(17,17,21,0.4)', textDecoration: 'none'}}>products.talkpush.com</a>.
        </p>
      </div>
    </>
  );
}

Object.assign(window, { SectionTimeline, SectionResources, SectionNextSteps });
