# eClerx × Talkpush deal room — redesign spec

## Goal

Redesign the existing 14-section deal room at eclerx.vercel.app so it is easier to digest and visually pleasing, while keeping the consultative depth intact. Success: a reader who skims the top 20% still walks away with the pitch.

The redesign reuses the existing copy. It does not rewrite content or invent new claims.

## Audience

The page is sent into eClerx and forwarded internally. Different stakeholders read different parts at different times. Four reader types from the existing reading paths:

- Project sponsors
- Manila TA leadership
- India leadership
- Procurement and IT

The page does not assume a single linear read.

## Structure

### Tab system

Five top-level tabs at the top of the page, sticky on scroll:

1. Overview (default)
2. Sponsors
3. Manila TA
4. India
5. Procurement & IT

Tabs filter sections by tag. The same section appears on multiple tabs when relevant — content lives once. Section anchors stay stable so a direct link to a section opens the right tab automatically.

Overview shows every section in canonical order. Each stakeholder tab shows a curated subset, reordered for that reader.

### Section list (Overview tab, after merges)

1. Why we're talking — folds AI mandate alignment as a sub-block
2. The Versant question
3. TalkScore explained
4. Platform and the 24-hour promise — merged from previous Sections 4 and 5
5. Built for your role mix
6. Oracle integration
7. Geo: Manila, India, Cairo — merged with region toggle
8. Implementation timeline — visual
9. Resources by stakeholder
10. Next steps

### Section-to-tab mapping

| Section | Sponsors | Manila TA | India | Proc & IT |
|---|---|---|---|---|
| Why we're talking | yes | yes | yes | yes |
| Versant question | yes | yes | – | – |
| TalkScore explained | yes | yes | – | – |
| Platform + 24-hour | yes | yes | yes | – |
| Role mix | – | yes | yes | – |
| Oracle integration | yes | – | – | yes |
| Geo (region toggle defaults to viewer's tab region) | yes | yes (Manila) | yes (India) | yes |
| Implementation timeline | yes | yes | yes | yes |
| Resources | yes | yes | yes | yes |
| Next steps | yes | yes | yes | yes |

## Visual system

### Reference

GetAccept-style sales hub: dark hero, calm body, clean stat bands, embedded interactive elements, deal-room rhythm.

### Hero

- Dark surface, full-width
- "eClerx × Talkpush" logo lockup at the top, equal prominence, single horizontal line
- One headline carrying the 24-hour promise
- One subhead naming the scope: Manila → India → Cairo, partnership posture
- Signature animation as the visual anchor: a funnel collapsing from "weeks" to "24 hours". Plays once on load, replayable on click. Used here only, not repeated elsewhere.
- A subtle scroll cue at the bottom edge
- No CTA in hero. Next steps tab and section handle that.

### House layout pattern: two columns

Default for every section below the hero:

- Left column: claim, headline number, or one-line summary in plain prose
- Right column: proof, detail, chart, screenshot, or expandable

The left column reads on its own. The right column carries the depth. A skim-reader absorbs the page from the left column alone — that is the 20% scan path.

### Type and color

Inherit the current Vercel template's type and color tokens. The redesign does not redefine them. Where new tokens are needed (dark hero surface, peach internal-callout, expander open/closed states), the design step adds the minimum and matches the existing palette.

### Charts and data viz

These numbers each get a dedicated visual:

- 24-hour funnel — animated horizontal funnel, weeks collapsing to 24 hours. Lives in the hero as the signature animation; a static version repeats inline in the Platform section.
- 92% Versant pass/fail agreement — paired bar with the n=105 study annotated
- Concentrix global, 100K hires/year — single hero number with a sparkline
- Concentrix India: 70K candidates, 8 weeks, 3 recruiters — three-stat band
- iQor 76% within 24 hours — donut
- 7-Eleven 60% time-to-hire reduction — before/after bar
- TaskUs Egypt: 500 → 1,000 in 30 days — animated counter or stepped bar

Inline numbers (e.g., "150–300 hires/month in Manila") stay as text inside the two-column layout.

### Imagery

Both screenshots and diagrams. Use placeholders sized and labelled for the design step; replace with real assets later.

- Product screenshots are candidate-side: WhatsApp flow, TalkScore interview screen, document upload confirmation, Oracle handoff confirmation. No recruiter dashboards in primary positions.
- Diagrams: sourcing-channels collapse from 8+ to one inbox, Oracle integration architecture, three-region rollout map.

## Density management

### Expanding blocks (default for heavy sections)

- Versant question — one summary card visible. Behind expanders: n=80 study, n=105 study, methodology, false-positive audit, contractual coexistence approach.
- Module suite (inside Platform + 24-hour) — each module is a card with title, one-line claim, candidate-side screenshot, and an expander for module detail and try-it link.
- Oracle integration — top-line summary visible. Behind expander: full architecture, sync mapping, security notes.
- Implementation timeline — phases visible as a horizontal timeline; per-phase work items behind a click.

Closed state delivers enough for a scanner. Open state delivers depth for a buyer who needs it.

### Region toggle (Geo section)

A three-way toggle inside the section: Manila, India, Cairo. Each renders region-specific cases, modules, and proof:

- Manila — pilot scope, role-mix specifics
- India — Agency Portal, Fraud Shield, Naukri Direct Apply, multilingual bots, Concentrix India case
- Cairo — WhatsApp-first, Egyptian Arabic voice agent, 5-language TalkScore, TaskUs Egypt case

Default region matches the visitor's stakeholder tab (Manila tab opens to Manila region; India tab opens to India region). Region selection persists in the URL anchor for shareable links.

## Navigation

- Sticky top nav with section anchors
- In-page search that filters section titles and visible body text and jumps to a match
- Back-to-top button appears after the first scroll past the hero
- No breadcrumbs

Tabs sit just under the top nav and are also sticky.

### Section orientation

Every section opens with a one-line summary the scanner reads in two seconds. The two-column body comes below. Section titles are anchorable.

## Tone and content rules

- Keep the consultative honesty front and center. Versant caveats, false-positive audit, methodology footnotes stay visible in the main flow, not in an appendix.
- The customer quote ("It's just a matter of finding the right solution for the team") stays where it is in the current document — body-level pull-quote, not promoted into the hero.
- No FOMO placements. Peer proof carries urgency implicitly through the case-study stat bands.
- No named contacts. Address stakeholders by role only.
- No fabricated personalization. Work with the content already in the deal room.

## Self-serve elements

Keep prominent throughout the page, not buried.

- talkscore.live — build an interview
- talkscore-hub.talkpush.com — TalkScore Hub
- products.talkpush.com — full live product catalogue

Treatment: small inline "try it" buttons inside the relevant module cards, plus a single self-serve band placed near the Module suite. No standalone self-serve section.

## Internal-only callouts

The existing dashed peach boxes (placeholder and internal commentary) become a defined component in the redesigned system. They render with a clearly internal-only style and can be hidden via a build flag for the eClerx-facing version. The redesign does not remove them; it gives them a clean visual identity.

## Component inventory for the design step

- Tab bar (sticky, five tabs, filter-by-tag behavior)
- Top nav with anchors, search, back-to-top
- Hero block (dark, lockup, headline, subhead, signature animation, scroll cue)
- Two-column section block (left summary / right proof)
- Section header with one-line summary
- Stat band (single hero number, paired bar, three-stat band, donut, before/after bar, animated counter)
- Module card (title, one-line claim, candidate-side screenshot, expander, try-it button)
- Expanding block (closed summary / open detail)
- Region toggle (three states, persistent in URL)
- Pull quote (body-level, not hero)
- Internal callout (dashed peach, build-flag hidden)
- Horizontal timeline with click-to-expand phases
- Self-serve band (inline product links)
- Architecture diagram container (placeholder for Oracle, sourcing collapse, geo rollout)
- Footer / Next steps block

## Success criteria

A reader who skims the top 20% — hero, section summaries (left columns), charts and stat bands — walks away with these five points:

- The 24-hour promise
- Versant 92% agreement
- Three-region rollout (Manila → India → Cairo)
- Oracle integration
- A clear next step

Anyone who needs depth opens expanders, switches tabs, or follows the Resources block to the right reading path.

## Out of scope for this spec

- Tech stack, hosting, mobile parity, PDF export
- ROI calculator
- Embedded demo video
- New copy or new claims
- Named-contact personalization
- New brand tokens beyond what the current Vercel template supplies
- FOMO placements
