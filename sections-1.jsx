// Sections — one per content block
const { useEffect, useState, useRef } = React;

// Generic section wrapper
function Section({ data, children, dark = false, dimmed = false, currentTab }) {
  const isVisible = data.tabs.includes(currentTab) || currentTab === 'overview';
  return (
    <section
      id={data.id}
      className={`dr-section ${dark ? 'dark' : ''} ${dimmed && !isVisible ? 'dimmed' : ''}`}
      data-section-kind={data.kind}
      data-screen-label={`${data.num} ${data.title}`}
    >
      <div className="dr-section-inner">
        <div className="dr-section-head">
          <div>
            <h2>{data.title}</h2>
          </div>
        </div>
        <div className="dr-section-body">{children}</div>
      </div>
    </section>
  );
}

// 01 Why we're talking
function SectionWhy() {
  return (
    <div className="dr-twocol">
      <div className="left">
        <p className="claim">eClerx is mandating AI adoption org-wide; Operations is already live, HR and recruitment are behind. The budget is allocated for FY27.</p>
        <p className="lead">"It's just a matter of finding the right solution for the team." — eClerx leadership, intro call.</p>
        <div style={{ marginTop: 32 }}>
          <h4 style={{ fontFamily: 'var(--font-grotesk)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,21,0.6)', margin: '0 0 12px' }}>What this project needs to deliver</h4>
          <ol className="dr-list" style={{ listStyle: 'decimal', paddingLeft: 22 }}>
            <li><strong>Sourcing</strong> — consolidate the channel sprawl into one system of record.</li>
            <li><strong>Screening</strong> — automate what's currently manual.</li>
            <li><strong>Interviewing</strong> — AI-driven, with consistent scoring across hiring managers.</li>
            <li><strong>Scheduling</strong> — remove calendar back-and-forth.</li>
            <li><strong>Onboarding</strong> — close the loop into Oracle.</li>
          </ol>
          <p style={{ fontSize: 14, color: 'rgba(17,17,21,0.65)', margin: '14px 0 0' }}>
            Plus three constraints: replace or coexist with Versant, integrate with Oracle, and design for global rollout (Manila → India → Cairo).
          </p>
        </div>
      </div>
      <div className="right">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="dr-stat">
            <div className="label">Volume — Manila</div>
            <div className="big">150<span className="unit">–300</span></div>
            <div className="caption">hires per month, with India volume larger and TBC. Cairo is a planned hub.</div>
          </div>
          <div className="dr-stat">
            <div className="label">Manila team</div>
            <div className="big">20<span className="unit">–23</span></div>
            <div className="caption">CSR interviewers, account managers (specialised roles), sourcers, people leaders.</div>
          </div>
          <div className="dr-stat">
            <div className="label">Sourcing channels</div>
            <div className="big">8<span className="unit">+</span></div>
            <div className="caption">Jobstreet (largest), LinkedIn, Facebook, Instagram, TikTok, referrals, eClerx ERP portal, plus website-leads platform.</div>
          </div>
          <div className="dr-stat">
            <div className="label">Peak season</div>
            <div className="big">Q3<span className="unit">–Q4</span></div>
            <div className="caption">Calendar year. Fiscal year starts April — month one of FY27 now.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 02 Versant
function SectionVersant() {
  return (
    <>
      <div className="dr-twocol">
        <div className="left">
          <p className="claim">TalkScore agrees with Versant 92% of the time on hire/no-hire — and we score four dimensions Versant doesn't.</p>
          <p className="lead">Two correlation studies on Philippines candidates, 2024. We will run a third on a sample of 50–100 of eClerx's own dual-tested candidates as part of the pilot.</p>
        </div>
        <div className="right">
          <StatPairedBar
            pairs={[
              { label: "Pass/fail agreement (n=105)", value: 92, color: "var(--tp-ink)" },
              { label: "TalkScore pass also B1+ on Versant", value: 94, color: "var(--tp-ink)" },
              { label: "False positives (manual audit)", value: 1, color: "var(--tp-ink)" },
              { label: "Raw correlation (n=80)", value: 43.4, color: "var(--tp-ink)" },
            ]}
            footnote="One false positive in 105 — effectively zero false negatives. Removing three audio outliers pushes correlation above 0.6."
          />
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 16px' }}>Behind the headline — open the studies</h3>
        <details className="dr-expander">
          <summary>
            Study 1 — Early 2024 (n=80)
            <span className="summary-meta">0.434 raw · 0.6+ outlier-corrected</span>
            <span className="icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </span>
          </summary>
          <div className="body">
            <p>Correlation coefficient of 0.434 between TalkScore (Fluency + Pronunciation composite, "CEFR V2") and Versant Overall. The internal report describes this as <em>satisfactory for a general first screening in language assessment</em>, noting that 0.7 is considered near-optimal — perfect correlation is impossible because the two tools measure different things.</p>
            <p>Three outliers were identified and explained, all attributable to candidate-side audio/handset issues, not model error. Removing them pushes the correlation above 0.6.</p>
            <p>Visual asset: Versant vs TalkScore scatter plot (R² = 0.347) is available from CRM internal documentation — recommended inclusion in any deck for India leadership.</p>
          </div>
        </details>
        <details className="dr-expander">
          <summary>
            Study 2 — Mid-2024 follow-up (n=105)
            <span className="summary-meta">92% agreement · 1 false positive</span>
            <span className="icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </span>
          </summary>
          <div className="body">
            <p><strong>92% pass/fail agreement</strong> between TalkScore and Versant on hire/no-hire decisions. <strong>94% probability</strong> that a TalkScore pass also achieved B1+ on Versant — i.e., we work as a top-of-funnel pre-filter that doesn't drop qualified candidates.</p>
            <p>Manual audit found 70% of TalkScore CEFR scores were appropriate. Of the 30% that didn't match Versant, only one was a false positive (passed when should have failed). Every other mismatch was a candidate who scored lower than their actual ability because they didn't follow instructions — the model is doing its job correctly.</p>
            <p>A second iteration with refined prompts moved overall correlation from 0.25 → 0.35.</p>
          </div>
        </details>
        <details className="dr-expander">
          <summary>
            What we measure that Versant doesn't
            <span className="summary-meta">Grammar · Vocab · Listening · Comprehension · Soft skills · Anti-cheating</span>
            <span className="icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </span>
          </summary>
          <div className="body">
            <table className="dr-table">
              <thead><tr><th>Dimension</th><th>Versant</th><th>TalkScore</th></tr></thead>
              <tbody>
                <tr><td>Pronunciation / intelligibility</td><td className="yes">Yes (primary)</td><td className="yes">Yes</td></tr>
                <tr><td>Fluency</td><td className="yes">Yes</td><td className="yes">Yes</td></tr>
                <tr><td>Grammar</td><td className="no">Limited</td><td className="yes">Yes</td></tr>
                <tr><td>Vocabulary</td><td className="no">Limited</td><td className="yes">Yes</td></tr>
                <tr><td>Active listening</td><td className="no">No</td><td className="yes">Yes</td></tr>
                <tr><td>Comprehension</td><td className="no">Indirect</td><td className="yes">Yes</td></tr>
                <tr><td>Soft skills (configurable)</td><td className="no">No</td><td className="yes">Yes</td></tr>
                <tr><td>Anti-cheating proctoring</td><td className="no">Desk admin required</td><td className="yes">Built-in, automated</td></tr>
                <tr><td>Open-ended response</td><td className="no">Scripted Q&A</td><td className="yes">Dynamic, conversational</td></tr>
              </tbody>
            </table>
            <p style={{marginTop: 16}}>Versant's score is dominated by pronunciation and intelligibility. That's why a TalkScore B2 sometimes maps to a Versant C1 or C2 — we reward well-constructed answers; Versant rewards an accent close to its reference speakers.</p>
          </div>
        </details>
        <details className="dr-expander">
          <summary>
            The honest caveat + the contractually-required Versant account
            <span className="summary-meta">PH cohorts · phase-1 coexistence</span>
            <span className="icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </span>
          </summary>
          <div className="body">
            <p>Both correlation studies were run on Philippines candidates, not on eClerx candidates specifically. As part of any pilot or migration, we will run a third correlation study on a sample of eClerx's own dual-tested candidates. We've done this twice for other clients; we'd do it again here.</p>
            <p>For the account that contractually requires Versant: keep Versant in place for that account during phase 1, deploy TalkScore everywhere else, and use the in-house correlation study as the basis for renegotiating that contract clause when it comes up for renewal. We support both running side-by-side.</p>
          </div>
        </details>
        <details className="dr-expander">
          <summary>
            Cognizant precedent
            <span className="summary-meta">Versant → TalkScore migration</span>
            <span className="icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </span>
          </summary>
          <div className="body">
            <p>Cognizant ran their language screening on Versant for years before transitioning to TalkScore. Their primary motivations were better proctoring (video, against impersonation), per-unit cost, and the time burden of orchestrating in-person Versant administration. Once on TalkScore, they activated additional Talkpush modules — sourcing, automation, screening — extending the value beyond pure language assessment.</p>
          </div>
        </details>
      </div>

    </>
  );
}

// 03 TalkScore
function SectionTalkScore() {
  const dims = [
    { d: "CEFR level", w: "Overall English proficiency", o: "A1 → C2" },
    { d: "Fluency", w: "Speech rate, pauses, hesitations", o: "0–100" },
    { d: "Pronunciation", w: "Phoneme accuracy, intelligibility", o: "0–100" },
    { d: "Grammar", w: "Sentence construction, tense, agreement", o: "0–100" },
    { d: "Vocabulary", w: "Range, appropriateness, precision", o: "0–100" },
    { d: "Active listening", w: "Did they answer the question asked?", o: "0–100" },
    { d: "Comprehension", w: "Did they understand context and nuance?", o: "0–100" },
    { d: "Soft skills (configurable)", w: "Empathy, problem-solving, integrity, customer focus, …", o: "0–100 per skill" },
  ];
  return (
    <>
      <div className="dr-twocol">
        <div className="left">
          <p className="claim">A 5–10 minute conversational interview, async, on the candidate's preferred channel — scoring 8 dimensions in real time.</p>
          <p className="lead">Per-role rubrics. Self-serve interview builder. Scores and full transcript appear in the recruiter hub within seconds of completion. No batch processing, no overnight delays.</p>
          <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8}}>
            <a className="dr-btn accent" href="https://talkscore.live/" target="_blank" rel="noopener">Try the Interview Builder →</a>
            <a className="dr-btn accent" href="https://talkscore-hub.talkpush.com/" target="_blank" rel="noopener">Try the Recruiter Dashboard →</a>
          </div>
        </div>
        <div className="right">
          <table className="dr-table" style={{marginBottom: 0}}>
            <thead><tr><th>Dimension</th><th>What it measures</th><th>Output</th></tr></thead>
            <tbody>
              {dims.map(d => <tr key={d.d}><td><strong>{d.d}</strong></td><td>{d.w}</td><td><code style={{background: 'rgba(17,17,21,0.06)', padding: '2px 6px', borderRadius: 2, fontSize: 11}}>{d.o}</code></td></tr>)}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="dr-stat">
          <div className="label">Career fair, India · single QR code</div>
          <div className="big"><AnimatedNumber to={800} /></div>
          <div className="caption">candidates screened in <strong>one day</strong>. 250 shortlisted instantly — about 31% of throughput moved into next-stage interviews on day one. Throughput impossible to achieve manually at the same recruiter cost.</div>
        </div>
        <div className="dr-stat">
          <div className="label">Configurability · per role</div>
          <ul style={{
            margin: '10px 0 0', padding: 0, listStyle: 'none',
            fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.4,
            display: 'flex', flexDirection: 'column', gap: 8
          }}>
            <li style={{display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8}}>
              <span aria-hidden="true" style={{color: 'var(--tp-ink)', opacity: 0.55, lineHeight: 1.4}}>—</span>
              <span>Every role gets its own rubric.</span>
            </li>
            <li style={{display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8}}>
              <span aria-hidden="true" style={{color: 'var(--tp-ink)', opacity: 0.55, lineHeight: 1.4}}>—</span>
              <span><strong>CSR</strong> weights active listening, customer focus, integrity heavily.</span>
            </li>
            <li style={{display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8}}>
              <span aria-hidden="true" style={{color: 'var(--tp-ink)', opacity: 0.55, lineHeight: 1.4}}>—</span>
              <span><strong>Graphic designer</strong> de-emphasises pronunciation, weights comprehension and a configured "creative judgement" skill.</span>
            </li>
            <li style={{display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8}}>
              <span aria-hidden="true" style={{color: 'var(--tp-ink)', opacity: 0.55, lineHeight: 1.4}}>—</span>
              <span><strong>Self-serve in the AI Interview Builder.</strong></span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{marginTop: 40}}>
        <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 16px' }}>Validity, turnaround, proctoring</h3>
        <details className="dr-expander">
          <summary>Validity — three lines of evidence
            <span className="summary-meta">Versant correlation · audit · iteration</span>
            <span className="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
          </summary>
          <div className="body">
            <ol style={{paddingLeft: 18, margin: 0}}>
              <li><strong>Versant correlation</strong> — 92% pass/fail agreement, 0.434 raw, &gt;0.6 with audio outliers removed.</li>
              <li><strong>Manual audit of CEFR assignments</strong> — 70% rated "appropriate" by human review; remaining 30% was almost entirely candidates underperforming relative to ability (instructions not followed), not model error.</li>
              <li><strong>Iteration discipline</strong> — Each prompt revision is re-tested. Round 2 of the 2024 study moved correlation from 0.25 → 0.35; ongoing improvements released continuously.</li>
            </ol>
          </div>
        </details>
        <details className="dr-expander">
          <summary>Turnaround time
            <span className="summary-meta">async · real-time · no humans-in-the-loop</span>
            <span className="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
          </summary>
          <div className="body">
            <ul style={{paddingLeft: 18, margin: 0}}>
              <li>5–10 minute interview, completed asynchronously from any device.</li>
              <li>Results returned in real time. Scores and full conversational transcript appear in the recruiter hub within seconds of interview completion.</li>
              <li>No human-in-the-loop. No batch processing, no overnight delays.</li>
            </ul>
          </div>
        </details>
        <details className="dr-expander">
          <summary>Proctoring
            <span className="summary-meta">video · ID · multi-face · voice-mismatch</span>
            <span className="icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
          </summary>
          <div className="body">
            <ul style={{paddingLeft: 18, margin: 0}}>
              <li>Optional video proctoring on every interview.</li>
              <li>ID verification at the start of the session.</li>
              <li>Multi-face detection, off-screen-glance detection, voice-mismatch detection.</li>
              <li>Standardized instructions, delivered consistently across every candidate — no desk admin variance.</li>
            </ul>
          </div>
        </details>
      </div>
    </>
  );
}

Object.assign(window, { Section, SectionWhy, SectionVersant, SectionTalkScore });
