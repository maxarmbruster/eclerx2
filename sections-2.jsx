// Sections 4–7
const { useState: useState2 } = React;

// 04 Platform + 24-hour
function SectionPlatform() {
  return (
    <>
      <div className="dr-twocol">
        <div className="left">
          <p className="claim">From application to offer in 24 hours. Today eClerx's process takes weeks.</p>
          <p className="lead">The path from there to here is removing manual handoffs at every stage. WhatsApp, Messenger, Viber, Line, Instagram, SMS, email and web — we meet candidates where they already are.</p>
          <p style={{fontSize: 14, color: 'rgba(17,17,21,0.65)', margin: '12px 0 0'}}>On current operations: <strong>more than 35% of your team's daily time</strong> goes to scheduling, calling, and pre-screening manually. That's the slice we automate first.</p>
        </div>
        <div className="right">
          <SourcingCollapseDiagram />
        </div>
      </div>

      <div style={{marginTop: 40}}>
        <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 16px' }}>The funnel — what's manual today vs. what we automate</h3>
        <table className="dr-table">
          <thead><tr><th>Stage</th><th>Today (eClerx)</th><th>With Talkpush</th></tr></thead>
          <tbody>
            <tr><td><strong>Sourcing</strong></td><td>Manual collection across 8+ channels</td><td>Auto-ingest from Jobstreet, LinkedIn, Facebook, Instagram, TikTok, referrals, eClerx ERP — into one CRM</td></tr>
            <tr><td><strong>Pre-screening</strong></td><td>Manual or simple form</td><td>AI conversational pre-screening on candidate's preferred channel</td></tr>
            <tr><td><strong>Knockout / qualifications</strong></td><td>Recruiter review</td><td>Automated against rules you define</td></tr>
            <tr><td><strong>Resume parsing</strong></td><td>Manual review</td><td>Auto-parsed, structured, surfaced against role requirements</td></tr>
            <tr><td><strong>Language + soft skill</strong></td><td>Versant (in-person, desk-admin facilitated)</td><td>TalkScore AI interview, async, with video proctoring</td></tr>
            <tr><td><strong>Scheduling</strong></td><td>Manual back-and-forth</td><td>Auto-scheduled, calendar integration; SMS/WhatsApp/email reminders</td></tr>
            <tr><td><strong>Hiring manager interview</strong></td><td>Manual</td><td>Stays human — but with AI-prepared briefing notes</td></tr>
            <tr><td><strong>Offer + document collection</strong></td><td>Manual</td><td>Automated document requests, e-signature, completion tracking</td></tr>
            <tr><td><strong>Hand-off to HRIS</strong></td><td>Manual data entry</td><td>Direct sync into Oracle</td></tr>
          </tbody>
        </table>
      </div>

      <div style={{marginTop: 64, paddingTop: 48, borderTop: '1px solid rgba(17,17,21,0.12)'}}>
        <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 6px' }}>Module suite — what's running across the funnel</h3>
        <p style={{margin: '0 0 24px', color: 'rgba(17,17,21,0.65)', fontSize: 14}}>Every product is available today. Phase 1 starts focused; the rest activates as the rollout matures.</p>

        {[
          { stage: 'REQUEST', items: [
            { name: 'Requisitions Management', claim: 'Hiring managers submit requisitions; approved requisitions auto-spin a campaign. Replaces the spreadsheet handoff.', try: 'requisitions.talkpush.com' },
          ]},
          { stage: 'SOURCE', items: [
            { name: 'Agency Portal', claim: 'Structured submission portal for staffing-agency partners. Biggest unlock for India\'s 35–40% agency-channel hiring.', try: 'agencyportal.talkpush.com' },
            { name: 'Employee Referral Management', claim: 'Gamified, WhatsApp-native referral program. Consolidates the ad-hoc referral channel into a measurable funnel.', try: 'employeereferral.talkpush.com' },
          ]},
          { stage: 'EVALUATE', items: [
            { name: 'TalkScore Interview Builder', claim: 'Self-serve. Build a real AI interview in under 5 minutes — role, soft skills, persona. No engineering ticket.', try: 'talkscore.live' },
            { name: 'TalkScore Hub', claim: 'Per-candidate breakdowns, score distributions, calibration audits, accuracy monitoring during the Versant correlation study.', try: 'talkscore-hub.talkpush.com' },
            { name: 'Voice Interaction Auditor', claim: 'External-vendor-grade audit layer over AI interviews and voice agents. Not a "trust us" black box.', try: 'aievalsdashboard.talkpush.com' },
          ]},
          { stage: 'HIRE', items: [
            { name: 'Forms', claim: 'Smart candidate-data forms with conditional logic and auto-dedupe across Jobstreet/LinkedIn/ERP.', try: 'forms.talkpush.com' },
            { name: 'Interview Pass', claim: 'QR-code check-in for walk-in interviews. Replaces paper sign-in sheets with auditable real-time process.', try: 'interviewpass.talkpush.com' },
            { name: 'Contract Hub', claim: 'E-signature for offers inside WhatsApp and SMS. Closes the gap between offer extended and accepted.', try: 'contract-hub.talkpush.com' },
            { name: 'Onboarding', claim: 'AI document collection. Extract + validate + sync into Oracle. Removes manual data entry.', try: 'products.talkpush.com/onboarding' },
            { name: 'Predictive Hiring', claim: 'Internal name "TalentIQ". Scores incoming candidates Green/Yellow/Red on retention. Up to 25% reduction in early attrition.', try: 'predictivehiring.live' },
          ]},
          { stage: 'OPERATE', items: [
            { name: 'CRM', claim: 'The core platform. Messaging-first candidate management across WhatsApp, Messenger, SMS, email, voice — single timeline.', try: 'talkpush.com' },
            { name: 'Mobile App', claim: 'PWA — full pipeline accessible without an app store download. For account managers not always at a desk.', try: 'mobile.talkpush.com' },
            { name: 'Hypercare Dashboard', claim: 'Live operational surface during the Manila pilot launch. Replaces email-chain status updates during the riskiest weeks.', try: 'hypercare.talkpush.com' },
            { name: 'MCP', claim: 'Model Context Protocol — Claude (or eClerx\'s AI of choice) operates the platform conversationally. 32 tools available.', try: 'mcp.talkpush.com' },
          ]},
        ].map(cat => (
          <div className="dr-module-cat" key={cat.stage}>
            <div className="cat-head">
              <span className="cat-stage">{cat.stage}</span>
              <span className="cat-title">{
                {REQUEST: 'Headcount demand → live campaign',
                 SOURCE: 'Channel sprawl → one funnel',
                 EVALUATE: 'AI assessment + audit',
                 HIRE: 'Offer → onboarded',
                 OPERATE: 'Day-to-day recruiter platform'}[cat.stage]
              }</span>
            </div>
            <div className="dr-module-grid">
              {cat.items.map(it => (
                <div className="dr-module" key={it.name}>
                  <div className="head">
                    <div>
                      <h4>{it.name}</h4>
                    </div>
                  </div>
                  <p className="claim">{it.claim}</p>
                  <div className="ph">CANDIDATE-SIDE SCREENSHOT — placeholder</div>
                  <div className="actions">
                    <a className="dr-btn tiny" href={`https://${it.try}`} target="_blank" rel="noreferrer">Try it ↗</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Self-serve band */}
        <div className="dr-selfserve">
          <div className="item">
            <h5>talkscore.live</h5>
            <p>Build a working AI interview in under 5 minutes. Pick the role, choose 2–6 soft skills, define the persona. The builder generates everything.</p>
            <a href="https://talkscore.live" target="_blank" rel="noreferrer">Open the builder ↗</a>
          </div>
          <div className="item">
            <h5>talkscore-hub.talkpush.com</h5>
            <p>The TalkScore Hub — per-candidate breakdowns, score distributions, anomaly detection. The recruiter dashboard your team would use day-to-day.</p>
            <a href="https://talkscore-hub.talkpush.com" target="_blank" rel="noreferrer">Open the hub ↗</a>
          </div>
          <div className="item">
            <h5>products.talkpush.com</h5>
            <p>The full live product catalogue. 24/7 product demos. Use this to brief India and Cairo stakeholders before the next round of meetings.</p>
            <a href="https://products.talkpush.com" target="_blank" rel="noreferrer">Open the catalogue ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}

// 05 Roles
function SectionRoles() {
  const roles = [
    { fam: 'CSR (smaller share)', screen: 'Behavioural — retention, integrity, customer focus, team dynamics, attendance, policy adherence. Plus comms.', weight: 'Heavy weight on comms (CEFR, fluency, pronunciation), active listening, customer focus, integrity.' },
    { fam: 'Specialised account roles (non-CSR)', screen: 'Technical/functional skills + comms (clients interact directly via email and meetings) + behavioural (retention, integrity, can also work independently).', weight: 'Balanced: comms still matters, plus configurable role-specific skill rubric, plus behavioural soft skills.' },
    { fam: 'Digital marketers / SCMs', screen: 'Campaign experience, platform expertise, ROI sensibility.', weight: 'Lighter on pronunciation; heavier on grammar/vocabulary (written comms with stakeholders) and configured "campaign judgement" skill.' },
    { fam: 'Graphic designers / photo editors', screen: 'Skill-based (portfolio review), creative judgement, attention to detail. Comms still matters but isn\'t leading.', weight: 'De-emphasise CEFR and pronunciation; emphasise comprehension, attention-to-detail soft skill, and use platform resume + portfolio capture for skills evidence.' },
  ];
  return (
    <>
      <div className="dr-twocol">
        <div className="left">
          <p className="claim">eClerx is not a typical BPO. The platform configures around the role mix.</p>
          <p className="lead">CSR (smaller share), digital marketers, social media ad specialists/SCMs, graphic designers, photo editors, plus specialised account roles with direct client interaction.</p>
        </div>
        <div className="right">
          <table className="dr-table">
            <thead><tr><th>Role family</th><th>What you screen for</th><th>How TalkScore weights it</th></tr></thead>
            <tbody>
              {roles.map(r => <tr key={r.fam}><td><strong>{r.fam}</strong></td><td>{r.screen}</td><td>{r.weight}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{marginTop: 40, maxWidth: 920}}>
        <h3 style={{
          fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 22,
          letterSpacing: '-0.01em', margin: '0 0 14px', color: 'var(--tp-ink)'
        }}>
          How <mark style={{background: 'var(--tp-orange)', padding: '0 6px', color: 'var(--tp-ink)'}}>rubric configuration</mark> works
        </h3>
        <p style={{
          fontFamily: 'var(--font-text)', fontSize: 15.5, lineHeight: 1.6,
          color: 'rgba(17,17,21,0.78)', margin: 0
        }}>
          The AI Interview Builder is self-serve. Your account managers and hiring managers configure rubrics in the tool — choose questions, weight dimensions, set pass thresholds. No engineering tickets, no Talkpush bottleneck. Talkpush's CSM team supports the initial build for each role family during onboarding.
        </p>
      </div>
    </>
  );
}

// 06 Oracle
function SectionOracle() {
  return (
    <>
      <div className="dr-twocol">
        <div className="left">
          <p className="claim">Native, bidirectional Oracle integration. Reference: Alorica runs Talkpush globally with Oracle as their HRIS.</p>
          <p className="lead">eClerx's India leadership team has team members previously at Alorica — already familiar with the partnership and the integration depth from the buyer side.</p>
        </div>
        <div className="right">
          <OracleArchDiagram />
        </div>
      </div>
      <div style={{marginTop: 40}}>
        <details className="dr-expander">
          <summary>Architecture in plain English
            <span className="summary-meta">API · SSO · data residency · RBAC</span>
            <span className="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
          </summary>
          <div className="body">
            <ul style={{paddingLeft: 18, margin: 0}}>
              <li>API-based bidirectional sync.</li>
              <li>SSO supported (SAML, OIDC).</li>
              <li>Configurable data residency.</li>
              <li>Role-based access controls map to your Oracle permissions model.</li>
            </ul>
          </div>
        </details>
        <details className="dr-expander">
          <summary>What gets synced
            <span className="summary-meta">candidates · resumes · scores · documents · attribution</span>
            <span className="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
          </summary>
          <div className="body">
            <ul style={{paddingLeft: 18, margin: 0}}>
              <li>Candidate records and statuses</li>
              <li>Application data and resumes</li>
              <li>AI interview scores and full transcripts</li>
              <li>Documents (offer letters, IDs, signed forms)</li>
              <li>Hire / no-hire decisions</li>
              <li>Source attribution (which channel a hire came from)</li>
            </ul>
          </div>
        </details>
      </div>
    </>
  );
}

// 07 Geo with region toggle
function SectionGeo({ region, setRegion }) {
  const content = {
    manila: {
      eyebrow: 'PHASE 1 · MANILA',
      title: 'Active in the Philippines since 2014.',
      blurb: 'Strong fit for the channels Filipino candidates actually use — Messenger and WhatsApp dominate. Local case studies and reference customers available. Recommended as the first launch — lower risk, faster proof, a reference for India.',
      stat: <StatHeroSparkline value={100} unit="K" label="Concentrix · global hires per year on Talkpush" caption="Concentrix is one of the largest customers running on the platform globally."
        points={[20, 28, 36, 44, 50, 60, 68, 76, 82, 88, 92, 100]} />,
    },
    india: {
      eyebrow: 'PHASE 2 · INDIA',
      title: 'India hiring is structurally different. The platform is purpose-built for it.',
      blurb: 'Application overload, agency dependency, fraud, and Gen Z ghosting all show up at higher rates. The India configuration is the same platform Manila gets, with India-specific modules switched on.',
      stat: <StatThreeBand items={[
        { value: 70, suffix: 'K', label: 'Candidates screened', caption: 'in 8 weeks · Concentrix India' },
        { value: 3, label: 'Recruiters', caption: 'running the entire operation' },
        { value: 45, suffix: '%', label: 'Time-to-hire', caption: 'reduction · same case study' },
      ]} />,
    },
    cairo: {
      eyebrow: 'PHASE 3 · CAIRO',
      title: 'Mature Egypt presence — turn it on rather than build it out.',
      blurb: 'WhatsApp-first conversion funnel · Egyptian Arabic AI voice interviewer · 5-language TalkScore (English, German, French, Spanish, Gulf Arabic) · job-selling automation for Egypt\'s 30% no-show baseline.',
      stat: <StatStepped from={500} to={1000} unit=" hires" days={30} label="TaskUs Egypt · ramped without recruiter headcount" caption="TaskUs Egypt scaled hiring while keeping the same recruiter team — published case study." />,
    },
  };
  const c = content[region];
  return (
    <>
      <div className="dr-region-toggle" role="tablist">
        {['manila','india','cairo'].map(r => (
          <button key={r} className={r === region ? 'active' : ''} onClick={() => setRegion(r)}>
            {r === 'manila' ? 'Manila' : r === 'india' ? 'India' : 'Cairo'}
          </button>
        ))}
      </div>

      <GeoMapDiagram activeRegion={region} />

      <div className="dr-twocol" style={{marginTop: 32}}>
        <div className="left">
          <div style={{ fontFamily: 'var(--font-grotesk)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,21,0.5)', marginBottom: 8 }}>{c.eyebrow}</div>
          <p className="claim">{c.title}</p>
          <p className="lead">{c.blurb}</p>
        </div>
        <div className="right">
          {c.stat}
        </div>
      </div>

      {region === 'manila' && (
        <div style={{marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
          <StatBeforeAfter before={100} after={40} unit="" label="7-Eleven · time-to-hire reduction (60%)" caption="Time-to-hire compressed by 60% after Talkpush deployment." />
          <StatDonut value={76} label="iQor · % of applications processed within 24 hours" caption="iQor processes 76% of applications within 24 hours on the platform." />
        </div>
      )}

      {region === 'india' && (
        <div style={{marginTop: 32}}>
          <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 20, margin: '0 0 14px' }}>India configuration</h3>
          <div className="dr-module-grid">
            {[
              { name: 'Agency Portal', claim: 'Turns the 35–40% agency channel into a structured, auditable funnel. Each partner gets a portal login; duplicates and recycled candidates flagged automatically.' },
              { name: 'Fraud Shield', claim: 'Aadhaar validation, no-hire college and company databases, duplicate detection, video proctoring with multi-face and voice-mismatch detection. Blocks up to 20% of fraudulent candidates.' },
              { name: 'Naukri Direct Apply', claim: '1-click apply from Naukri listings into Talkpush WhatsApp screening. Direct-apply flows convert up to 4× better than careers-page redirects.' },
              { name: 'Multilingual bots', claim: '9 dialects including Hindi, Tamil, Telugu, Bengali, Gujarati. WhatsApp-first; structured outputs in English for recruiters. India is the largest WhatsApp market globally (535M users).' },
            ].map(it => (
              <div className="dr-module" key={it.name}>
                <div className="head"><h4>{it.name}</h4></div>
                <p className="claim">{it.claim}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {region === 'cairo' && (
        <div style={{marginTop: 32}}>
          <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 20, margin: '0 0 14px' }}>Egypt configuration</h3>
          <div className="dr-module-grid">
            {[
              { name: 'WhatsApp-first funnel', claim: 'Candidates land in WhatsApp from any ad. No forms, no uploads. Knockouts on distance, shift fit, salary alignment happen instantly. Scheduling, recruiter assignment, reminders all in-chat.' },
              { name: 'Egyptian Arabic AI voice agent', claim: 'Native-accent voice agent conducting conversational screening on WhatsApp — mirrors how Egyptian candidates already communicate. CEFR-level results in seconds.' },
              { name: 'Multilingual TalkScore', claim: '5 languages — English, German, French, Spanish, Gulf Arabic. Detects Arabic/English code-switching cleanly rather than penalising natural bilingual behaviour.' },
              { name: 'Job-selling automation', claim: 'AI-generated localised explainer videos and WhatsApp reminder sequences timed for the moments candidates are most likely to drop. Addresses Egypt\'s 30% no-show baseline.' },
            ].map(it => (
              <div className="dr-module" key={it.name}>
                <div className="head"><h4>{it.name}</h4></div>
                <p className="claim">{it.claim}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { SectionPlatform, SectionRoles, SectionOracle, SectionGeo });
