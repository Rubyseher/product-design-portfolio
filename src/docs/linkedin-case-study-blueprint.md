# LINKEDIN JOB SEARCH TRACKER — CASE STUDY CONTENT BLUEPRINT

**How to read this file**
Everything in normal text = the actual copy that goes on the page (headings, body, quotes, stats).
Everything in `[SQUARE BRACKETS]` = build/layout instruction for Claude Code. Do not display it.
Everything in `{CURLY BRACES}` = a blank you (Ruby) need to fill in before handing this to Claude Code.

---

## GLOBAL BUILD NOTES

`[GLOBAL — apply across the whole page:]`
`[Single scrolling page. Max content width 1100px, centered, with full-bleed background bands used to separate major sections.]`
`[Section rhythm: every major section = eyebrow label (small caps, letter-spaced, muted) → H2 headline → optional one-line deck → content. Vertical padding 120px desktop / 64px mobile between sections.]`
`[Typography: one display/serif or geometric sans for H1–H3, one neutral sans for body. Body 17–18px, line-height 1.65, measure capped at 68 characters.]`
`[Color: near-black text on off-white (#FAFAF8-ish). ONE accent color used sparingly — for stat numbers, active states, the "gap" callouts, and the progress indicator. Do not use LinkedIn blue as the page's brand color; this is Ruby's case study, not LinkedIn marketing. Use a restrained accent and let the product screenshots carry the blue.]`
`[Sticky left-rail or top-bar table of contents that highlights the active section on scroll. Collapses to a top progress bar on mobile.]`
`[Every image/screenshot gets: rounded corners (12px), soft shadow, and a caption line below in small muted text. Captions are written out in this doc — use them.]`
`[Scroll reveal: subtle fade-up on section entry, 300ms, once only. No parallax, no carousels.]`
`[All numbers in stat blocks should count up on first view — subtle, 800ms.]`

---

# 0. HERO

**Eyebrow:** LinkedIn · Product Design Case Study · 2026

**H1:** A job search that finally talks back

**Sub-headline:** Turning LinkedIn's silent post-apply experience into a self-updating job search tracker — using signals the platform already has.

**Meta row:**
- **Role** — Product Designer (end-to-end: research, IA, interaction, visual, testing)
- **Timeline** — {X weeks}
- **Type** — Self-initiated concept
- **Tools** — Figma, Reddit community research, Floto (AI persona testing)

`[HERO LAYOUT: Full viewport height on desktop. Left column (55%) = eyebrow, H1, sub-headline, meta row laid out as 4 items in a 2×2 grid on desktop / stacked on mobile. Right column (45%) = the final hero product shot of the tracker screen, tilted slightly or in a clean device frame, bleeding off the right edge of the viewport.]`
`[H1 should be large — 64–80px desktop, 36px mobile. Let it wrap onto two lines.]`
`[Add a small scroll-cue chevron at the bottom center.]`

---

# 1. PROBLEM

**Eyebrow:** 01 — The Problem

**H2:** You hit Apply. Then nothing.

**Body:**
LinkedIn is used by over a billion people to find work. The moment you hit Apply, you go blind.

No tracking. No updates. No way to know whether a recruiter opened your profile, whether the role is still being filled, or whether the posting quietly died three weeks ago. Not because the data doesn't exist — LinkedIn holds all of it — but because none of it is ever shown to the person who applied.

For someone applying to two or three roles, that silence is annoying. For someone laid off, applying to sixty roles across four months with rent due, that silence is the entire experience of unemployment.

**Stat block (6 stats):**

| Stat | Label |
|---|---|
| 1.1M+ | US job cuts, Jan–Oct 2025 — the highest since 2020 |
| 32–200+ | applications submitted before a single offer |
| 61% | of job seekers ghosted after an interview |
| 72% | say the job search damages their mental health |
| 70% | of repeat layoffs happen within 12 months of the first |
| 1 in 3 | tech companies ran 2+ layoff rounds between 2023 and 2025 |

`[STAT BLOCK LAYOUT: 3 columns × 2 rows on desktop, 2 columns on tablet, 1 column stacked on mobile. Each cell: huge number in accent color (48–56px, tabular figures), thin divider rule beneath, then the label in 14px muted text. Cells separated by hairline borders, not boxes — keep it editorial, like a newspaper data spread, not like six cards.]`
`[Numbers count up on scroll-into-view.]`

**Pull quote (set apart, large):**
> "I've applied to 187 jobs since March. I have heard back from 4 of them. I don't know if I'm doing something wrong or if no one is reading any of it."
> — r/jobs, 2025

`[PULL QUOTE LAYOUT: Full-width band with a tinted background. Quote text 28–32px, italic optional, max-width 800px centered. Attribution below in 14px muted, right-aligned to the quote block. This is the emotional anchor of the section — give it room, 100px padding top and bottom.]`

### The brief

LinkedIn wants to improve the job application experience for **active job seekers** on its platform.

The goal is to help people applying to multiple roles who **feel lost once they hit submit** — users with tens of applications in progress, no visibility into where they stand, and no reliable way to track their search, even though LinkedIn already holds that data.

The post-application experience should feel **organised, transparent, and motivating**, and should reduce the anxiety of the application black hole.

Success means moving users from *"I have no idea what happened to any of my applications"* to *"I feel in control of my job search."*

`[BRIEF LAYOUT: Present as an inset panel — left border 3px accent, background very slightly tinted, 32px internal padding. Bold the phrases marked in bold. The two quoted states at the end should sit on their own line, styled as a before → after pair with an arrow between them: "I have no idea what happened to any of my applications" → "I feel in control of my job search."]`

### Unpacking the brief

Briefs use vague language. Before designing anything, I broke down every ambiguous term — who exactly is an *active job seeker*, what does *feel lost* actually mean, what does *success* look like in measurable terms. Each term had to map to a specific user, a specific behaviour, or a specific outcome.

| Vague term | What I defined it as |
|---|---|
| Active job seeker | Someone with 5+ live applications submitted in the last 30 days, checking LinkedIn 3+ times a week — not a passive browser, not a casual "open to work" profile |
| Feel lost | No memory of what was applied to, no signal on what happened after, no sense of whether effort is producing movement |
| Organised | One surface holds the entire search — no spreadsheet, no inbox archaeology |
| Transparent | The user sees the signals the system already has about their application |
| Motivating | The interface shows progress, not just accumulation |
| Success | Measurable reduction in "lost" behaviours: re-applying to the same role, abandoning the search, churning off Premium |

`[TABLE LAYOUT: Two-column table, no vertical borders, hairline horizontal rules only. Left column 30% width, set in medium weight; right column 70%, regular weight, muted. On mobile, convert to stacked pairs — term in bold above, definition below.]`

**Closing line of section:**
That clarity became the foundation for every decision that followed.

---

# 2. SOLUTION

`[NOTE FOR BUILD: This section is deliberately placed early — it is the "answer up front" summary so a recruiter scrolling for 20 seconds still gets the point. The detailed reasoning for each feature comes later in Section 6 (Main Flow). Keep this section visual and short.]`

**Eyebrow:** 02 — The Solution

**H2:** Make visible what LinkedIn already knows.

**Body:**
Every signal a job seeker needs already exists inside LinkedIn's infrastructure. Whether a recruiter viewed the profile. Whether the role is still open. Whether a first-degree connection works at that company. How the applicant compares to the other people who applied.

The design opportunity was never to build a new data source. It was to surface an existing one.

**A job search tracker built into LinkedIn, that updates itself.**

**Four feature sets:**

**01 — Real-time application status tracking**
Applications move through stages automatically, using LinkedIn's own recruiter-side events. No manual dragging, no cards to maintain.

**02 — Surfaced application signals**
A side panel exposes what was previously invisible: profile viewed, role still active, response likelihood, applicant pool position.

**03 — Persistent search history**
A year filter separates job search cycles, so a second or third layoff doesn't start from zero. Past searches become reference instead of loss.

**04 — From chaos to control**
An overview bar — 8 applied · 3 active · 2 awaiting response · 2 closed — turns a pile of applications into a picture of a search in progress.

`[SOLUTION LAYOUT: Hero product shot of the final tracker screen, full-width, sitting directly under the H2 and body. Below it, the four feature sets as a 2×2 grid on desktop / stacked on mobile. Each cell: large numeral "01" in accent color at low opacity behind or beside the title, then title in bold, then 1–2 lines of body. Keep cells borderless, separated by generous whitespace.]`
`[Optionally: make each of the four feature titles an anchor link that jumps to its detailed explanation in Section 6.]`
`[If Ruby supplies a short screen recording or GIF of the tracker, place it here instead of the static shot — autoplay, muted, looped, no controls.]`

---

# 3. RESEARCH — COMPETITIVE ANALYSIS

**Eyebrow:** 03 — Research / Competitive Analysis

**H2:** Everyone solved a piece. Nobody connected them.

**Body:**
Before designing anything, I mapped what already exists across the four problem areas the research surfaced. The goal was not to find something to copy. It was to find what none of them had solved.

`[COMPETITOR CARD PATTERN — repeat 4×. Each competitor block is a full-width row:]`
`[LEFT (40%): the screenshot Ruby captured of that tool. Rounded corners, soft shadow, caption beneath.]`
`[RIGHT (60%): letter badge (A/B/C/D) in a small circle, the area title as H3, then "What works" paragraph, then a visually distinct "The gap" callout — accent-colored left border, tinted background, 20px padding. Then a one-line verdict in small caps, muted, letter-spaced.]`
`[Alternate the image left/right on each successive block for rhythm.]`

### A. Real-time application status tracking
**Tools looked at:** Huntr, Jobscan

**What works:** Both give job seekers a kanban board to log applications and move them through stages. The visual organisation is genuinely useful — it brings structure to a chaotic process, and the fact that thousands of people pay for it proves the demand is real.

**The gap:** Every status update is manual. The user drags the card. There is no connection to LinkedIn, and no recruiter-side signal anywhere in the system. You can track that you applied. You cannot track what happened after.

**Verdict:** No recruiter-side signals. No LinkedIn integration.

`[Screenshot caption: "Huntr's kanban board — structure without signal. Every card moves because the user moved it."]`

### B. Surfacing LinkedIn's existing application signals
**Looked at:** LinkedIn's native "My Jobs" / applied jobs view, plus published UX concept work (including Pranati Rao's LinkedIn concept study on UX Planet)

**What works:** Concept explorations have imagined richer application data for candidates — viewed status, whether the role is still active, whether hiring has paused. The thinking exists. The appetite exists.

**The gap:** None of it exists natively in LinkedIn today. Applicants see the stage they submitted to and nothing else. They cannot see whether a recruiter opened their profile, whether the role is still being actively considered, or whether the posting has gone dark. LinkedIn holds this data. It does not surface it.

**Verdict:** Applicants see submission status. Recruiter activity is invisible.

`[Screenshot caption: "LinkedIn's current applied-jobs view — a receipt, not a status."]`

### C. Persistent profile and search history across job searches
**Tools looked at:** Huntr, Built In's tracker, autofill extensions

**What works:** These tools do retain application data — nothing is deleted, and export usually exists.

**The gap:** They are all designed for one active search at a time. There is no concept of a job search *cycle*, no separation of past versus current, and no way to surface a learning from a previous search. For laid-off professionals who have been through multiple rounds of displacement — 70% of whom face a second layoff within twelve months — that history is the most valuable data they own. None of the existing tools treat it that way.

**Verdict:** Data retained. Context lost. No learning across searches.

`[Screenshot caption: "Every tracker assumes this is your first search. For a third of tech workers since 2023, it isn't."]`

### D. From chaos to control
**Looked at:** DIY solutions — r/jobs spreadsheets, Notion templates, self-built dashboards, personal automation scripts

**What works:** These prove the need better than any competitor does. People are building their own tools, badly and at cost to themselves, because nothing available gives them a single view of their entire search at a glance.

**The gap:** Every existing tool is functional. None are built around the emotional reality of a sustained search — the need to feel like the search is *going somewhere*, not just accumulating. A spreadsheet with 500 rows is a record of effort, not evidence of progress.

**Verdict:** No single place to see your entire job search at a glance.

`[Screenshot caption: "A real r/jobs spreadsheet — 500+ rows. The workaround already exists. The native solution doesn't."]`

### What this told me

Huntr solved organisation. LinkedIn solved discovery. Extensions solved data entry. Not one of them connects the moment of applying to everything that follows — the status, the history, the emotional arc of the search.

That is the space this solution is built for.

`[SYNTHESIS LAYOUT: Present as a 2×2 positioning matrix. X-axis: "Manual ← → Automatic". Y-axis: "Single search ← → Longitudinal". Plot Huntr, Jobscan, LinkedIn native, spreadsheets in the lower/left quadrants, and place THIS SOLUTION alone in the top-right quadrant, marked in accent color with a subtle glow or larger dot. This is the single most screenshot-able asset in the case study — make it clean and label the axes clearly.]`
`[Below the matrix, the "What this told me" paragraph, centered, max-width 700px.]`

---

# 4. RESEARCH — INTERVIEWS & AFFINITY MAPPING

**Eyebrow:** 04 — Research / Voices from the Field

**H2:** I couldn't interview 200 laid-off people. So I read what 200 of them already wrote.

### Method — and its honest limits

I didn't run formal interviews. What I did instead was read through hundreds of threads across r/jobs and r/recruitinghell from 2024 to 2026, looking for patterns in how laid-off professionals describe the experience of searching.

This is a real research method with a real trade-off, and I want to be direct about both sides.

**What it gave me:** unprompted, unmoderated, emotionally honest accounts written by people with no idea a designer was reading. No interviewer bias. No performing for a researcher. Volume I could never have reached through scheduled interviews.

**What it cost me:** I couldn't ask follow-up questions. I couldn't probe a contradiction. And Reddit skews toward people having a bad time — the quiet majority who found a job in six weeks doesn't post about it. I compensated by triangulating every emotional pattern against quantitative sources: Greenhouse's State of Job Hunting, Axios reporting on recruiter notification rates, and The Interview Guys' 2025 job search survey.

`[METHOD LAYOUT: Two-column comparison — "What it gave me" and "What it cost me" side by side, equal width, separated by a vertical hairline. Use a subtle plus/minus or up/down indicator at the top of each column. On mobile, stack. This honesty block is a strength — do not hide it in small text.]`

### Who I focused on

To frame the research I identified the target user group first. Laid-off professionals were the clearest fit — not students, not passive browsers, not career switchers. People who had a job, lost it without warning, and were now searching at volume under real financial and emotional pressure.

This group is also the fastest-growing segment of active job seekers in 2025, driven by a 65% year-over-year rise in US job cuts.

`[Present the four excluded groups as small, struck-through or low-opacity chips — "students", "passive browsers", "career switchers", "first-time job seekers" — with "laid-off professionals" as a solid, accent-colored chip beside them. Visual, instant, no explanation needed.]`

### Affinity mapping

I pulled roughly {N} individual quotes into a Figma board and clustered them by what the person was actually complaining about — not by topic, but by the underlying unmet need. Three clusters emerged and held.

`[AFFINITY BOARD IMAGE: Full-width shot of the actual Figma affinity board with the sticky notes. This should look like real, slightly messy work — do NOT stylize or recreate it cleanly. Caption: "{N} quotes from r/jobs and r/recruitinghell, clustered by unmet need."]`
`[If the board is dense, add a click-to-expand lightbox so it can be viewed at full size.]`

**Cluster 1 — "I don't know if anything is happening."**

*The signal:* People describe applying into a void. The dominant emotion isn't rejection — it's not knowing whether they've been rejected. Several described refreshing their email at 2am for a role they applied to five weeks earlier.

*Representative voices:*
> "It's not the no that gets me. It's the nothing."
> "I would genuinely rather get an automatic rejection in 24 hours than this."
> "Is the job even still open? I have no way to know. The post is still up but that means nothing."

*The unmet need:* **Feedback, or in its absence, a status.** Any signal at all is better than silence.

**Cluster 2 — "I can't hold my own search in my head."**

*The signal:* At volume, the search itself becomes a second job. People described losing track of what they'd applied to, accidentally re-applying to the same role, forgetting which version of their resume went where, and maintaining spreadsheets that themselves became a burden.

*Representative voices:*
> "I've applied to the same company twice by accident. Twice."
> "My tracking spreadsheet has 500+ rows and I dread opening it more than I dread applying."
> "Which resume did I send them? No idea. I have six versions."

*The unmet need:* **A single source of truth that maintains itself.** The tracking should not be more work than the applying.

**Cluster 3 — "I've done this before and I learned nothing from it."**

*The signal:* This is the cluster I nearly missed, and it became the most differentiating insight in the project. Repeat-displaced professionals — people on their second or third layoff — talked about starting completely from scratch each time. Old applications gone. Old contacts forgotten. No sense of what worked last time.

*Representative voices:*
> "Third layoff in four years. I'm rebuilding the same spreadsheet for the third time."
> "I know I talked to a recruiter at that company in 2023. I have no idea who or how it went."
> "Every search feels like the first search. That's the part that breaks you."

*The unmet need:* **Continuity.** A search history that persists and compounds instead of resetting.

`[CLUSTER LAYOUT: Three stacked blocks, each with a numbered label and a distinct subtle background tint. Inside each: "The signal" paragraph, then the quotes as a vertical stack of quote cards (small, monospace-ish attribution, left border in accent), then "The unmet need" as a bold callout line at the bottom with a highlighted background.]`
`[Cluster 3 should get a small "★ Key insight" badge — this is the one that differentiates the whole project.]`

### The insights that reframed the problem

**The feedback gap is structural, not accidental.**
Only 4% of companies using Greenhouse notified all rejected applicants in Q2 2024. The other 96% said nothing. This is not a communication failure — it is the intended output of a hiring infrastructure that optimises for recruiter efficiency, not candidate experience. Which means: waiting for employers to start replying is not a strategy. The fix has to come from the platform.
*Source: Axios / Greenhouse, September 2024*

**Silence doesn't stop at application. It follows candidates into interviews.**
61% of job seekers were ghosted after an interview, up nine points since April 2024. These are not people lost in a pile. They prepared, they showed up, they met humans, and then heard nothing. Silence isn't a top-of-funnel bug. It compounds at every stage.
*Source: Greenhouse State of Job Hunting, 2024*

**The workaround already exists. The native solution doesn't.**
Job seekers are logging 500+ applications in personal spreadsheets because LinkedIn gives them no way to do it natively. The behaviour proves the need. The opportunity isn't to invent a new habit — it's to build what users are already doing by hand.
*Source: Community observation, r/jobs, 2025–26*

**The damage isn't from volume. It's from silence.**
72% of job seekers say the search damages their mental health. The leading cause isn't the number of applications — 66% point directly to lack of feedback. The emotional cost of job searching is a product of uncertainty, and uncertainty is a design problem LinkedIn already has the data to solve.
*Source: The Interview Guys, State of Job Search 2025*

`[INSIGHT LAYOUT: Four cards in a 2×2 grid on desktop, stacked on mobile. Each card: bold headline (the insight statement), body paragraph, then source line at the bottom in 12px muted italic with a top hairline separating it. Equal-height cards. Give the cards a visible but light border rather than heavy shadow.]`

### The business case

`[Place this as a distinct sub-block with a slightly different background band — it signals "I think about business, not just users," which is what separates a portfolio piece from a product design portfolio piece.]`

Job searching is one of the most emotionally charged interactions a user has with LinkedIn. When someone hits Apply, they are trusting the platform to connect them with opportunity. Most of the time, the platform goes silent.

That silence has a business cost. LinkedIn's job seeker revenue depends on users believing the search works. When they stop believing it, Premium Career subscribers churn, engagement drops, and the recruiter-side value proposition weakens with it. The friction doesn't just hurt users — it erodes the platform's core promise.

**Market context:**
- **65%** more US job cuts year-over-year, 2025
- **45%** more applications submitted, Q3 2024
- **10%** fewer roles posted, same period

More people, applying more often, to fewer jobs. Every one of those additional applications is another opportunity for the platform to go quiet — and the volume of silence is scaling faster than the volume of hiring.

`[MARKET CONTEXT LAYOUT: Three stats in a horizontal row with arrow indicators (↑ 65%, ↑ 45%, ↓ 10%). Color the two "up" stats in a warning tone and the "down" stat in the same tone — all three are bad news. Then the closing paragraph directly beneath, full width, in slightly larger type — it's the punchline.]`

---

# 5. RESEARCH — PERSONAS

**Eyebrow:** 05 — Research / Personas

**H2:** Two people, one silence.

**Body:**
The three affinity clusters mapped onto two distinct people. They share the same trigger — an involuntary layoff — but they experience the silence differently, and they need different things from the same product.

`[PERSONA LAYOUT — IMPORTANT, follow closely:]`
`[Two persona cards, side by side, horizontally centered on the page, EQUAL WIDTH (each ~48% with 4% gap), EQUAL HEIGHT, vertically-oriented cards (taller than wide, roughly 3:4 ratio).]`
`[Each card structure, top to bottom:]`
`[  1. Circular photo/avatar at the top, 120px diameter, centered.]`
`[  2. Name in bold H3, centered, directly beneath the photo.]`
`[  3. Role + age + location on one line, 14px, muted, centered.]`
`[  4. The persona quote in italic, centered, 18px, with quotation marks — this is the emotional hook, give it breathing room, 24px margin top and bottom.]`
`[  5. Then left-aligned labelled sections in this order: Context · Goals · Frustrations · Behaviours · What she/he needs from LinkedIn. Each label in small caps accent color, content as a bulleted list beneath.]`
`[  6. At the very bottom of each card, a "Maps to" row showing which affinity clusters this persona came from, as small chips.]`
`[Card styling: white background, 1px light border, 16px radius, 32px internal padding, subtle shadow. On mobile they stack vertically, full width.]`
`[Mark Persona 1 as PRIMARY with a small accent badge in the top-right corner of the card. Persona 2 gets a muted "SECONDARY" badge. This shows deliberate prioritisation, not two equal personas.]`
`[For avatars: use neutral, non-stocky illustrated portraits or greyscale photos. Avoid the generic smiling-stock-photo look — it cheapens the section.]`

### PERSONA 1 — PRIMARY

**Arjun Mehta**
Software Engineer, 34 · Bengaluru · Laid off twice in three years

> "Every search feels like the first search. That's the part that breaks you."

**Context**
- Backend engineer, 9 years experience, laid off in a company-wide 18% reduction in {month/year}
- Second layoff in three years — the first was in 2023
- Sole earner; roughly {X} months of runway
- Currently {N} live applications across LinkedIn, company sites, and referrals

**Goals**
- Land a role of equivalent seniority within four months, before runway runs out
- Know which applications are still alive so effort goes to the right places
- Not repeat the mistakes of the last search

**Frustrations**
- Has no memory of his 2023 search — the spreadsheet is gone, the contacts are lost
- Cannot tell an "in progress" application from a dead one
- Has accidentally re-applied to the same company twice
- Maintains a tracker that has become its own chore

**Behaviours**
- Applies in bursts — 8 to 12 applications in a sitting, twice a week
- Checks LinkedIn 4 to 6 times a day, mostly for nothing
- Keeps 6 resume variants and loses track of which went where
- Pays for Premium Career, and is starting to question whether it does anything

**What he needs from LinkedIn**
- Status that updates without him touching it
- Proof that his effort is producing movement, not just accumulating
- A search history that survives to the next layoff

**Maps to:** Cluster 1 · Cluster 2 · Cluster 3

### PERSONA 2 — SECONDARY

**Nikita Rao**
Marketing Manager, 28 · Pune · First layoff

> "I keep refreshing my email for a job I applied to five weeks ago. I know that's insane. I do it anyway."

**Context**
- Four years at one company, first time ever job searching at volume
- Laid off with two weeks' notice; had never used a tracker of any kind
- Applying broadly across marketing, content, and brand roles because she isn't sure what she qualifies for
- {N} applications in six weeks and no framework for evaluating whether that's a lot or a little

**Goals**
- Understand whether the silence means rejection or means nothing yet
- Feel like she is doing this "correctly" — she has no benchmark
- Reduce the daily anxiety of checking

**Frustrations**
- Interprets every silence as personal rejection
- No sense of what a normal response rate looks like, so she can't tell if she's failing
- Was ghosted after a second-round interview and still doesn't know what happened
- Her tracking is her email inbox, which is not tracking

**Behaviours**
- Applies daily in small numbers, 2 to 3 at a time
- Compulsively checks email and LinkedIn notifications
- Reads r/jobs for reassurance and comes away more anxious
- Has not upgraded to Premium — isn't convinced it's worth it

**What she needs from LinkedIn**
- Context and benchmarks: is this normal?
- Explicit closure when an application is dead, so she can stop waiting
- A reason to check once a day instead of ten times

**Maps to:** Cluster 1 · Cluster 2

### Why prioritise Arjun

Nikita's needs are a subset of Arjun's, with one exception: benchmarking. Arjun needs everything Nikita needs plus longitudinal history — and that history requirement is the thing no competitor addresses. Designing for the repeat-displaced user covers the first-timer almost entirely, while the reverse is not true.

Arjun became the primary. Nikita became the check: if a feature made sense to Arjun but confused Nikita, it was too complex.

`[Present "Why prioritise Arjun" as a full-width closing statement beneath the two cards, max-width 760px, centered, with a top hairline rule. This paragraph is doing important work — it shows prioritisation logic, which is what separates a designer from a decorator.]`

### Redefined challenge

The research pointed somewhere specific. The problem is not that LinkedIn is bad at finding jobs. It is bad at helping people *manage* a search once it starts. Job alerts, saved jobs, the Apply button — all of it is built for the moment of discovery. Nothing is built for the weeks that follow.

**How might we** help laid-off professionals — including those experiencing repeat displacement — move from chaos to control, by eliminating post-application silence through real-time application visibility, surfacing signals LinkedIn already holds, and longitudinal progress tracking that persists across job searches?

**Built for** active job seekers managing their search. **Not for** finding jobs or building resumes.

`[HMW LAYOUT: Full-bleed band in accent color or near-black inverted background. The HMW statement large (28–32px), max-width 900px, centered, with "How might we" in a lighter weight and the rest in medium. Then the "Built for / Not for" line beneath as two chips — a solid accent chip and a struck-through muted chip. This is the pivot point of the whole case study; make it feel like one.]`

---

# 6. DESIGN — IDEATION, SKETCHES & WIREFRAMES

**Eyebrow:** 06 — Design / Ideation

**H2:** Fifteen ideas, four survived.

### How I narrowed

Every idea got measured against three questions, and had to pass all three:

1. **Does LinkedIn already have this data?** If it required employers to change behaviour, it was out. 96% of companies don't notify rejected applicants — a solution that depends on them starting to is not a solution.
2. **Does it reduce work, or add work?** Anything that required the user to maintain it was out. They already have a spreadsheet they hate.
3. **Does it serve Arjun's search, or just this application?** Features that only worked for one application in isolation were deprioritised in favour of ones that made the whole search legible.

`[CRITERIA LAYOUT: Three numbered items in a horizontal row on desktop, each with the numeral large in accent color above the criterion. Stack on mobile.]`

### What got cut, and why

| Idea | Why it didn't survive |
|---|---|
| Prompt employers to send rejection notices | Depends on employer behaviour change. Out on criterion 1. |
| Estimated response time countdown | LinkedIn can't know this reliably. A wrong number is worse than no number — it manufactures false hope. |
| Application quality score | Judges the user at their most vulnerable moment. Actively harmful to the emotional goal. |
| Auto-follow-up message to recruiters | Recruiter-side spam risk. Would have been killed in review at a real company, correctly. |
| Peer comparison ("you've applied to more roles than 80% of users") | Tested badly against Nikita — turns anxiety into competition. |
| Notes and tags per application | Good idea, but adds maintenance work. Deferred to v2, not cut. |

`[CUT TABLE LAYOUT: Two columns, hairline rules. Style the left column with a subtle strikethrough or 60% opacity to reinforce "these are dead." Add a small "→ deferred, not cut" tag on the last row in a different color, since it wasn't rejected.]`
`[This table is genuinely valuable — showing what you rejected and why is stronger evidence of judgment than showing what you built. Give it real estate, don't tuck it away.]`

### Sketches

I sketched on paper first, deliberately. Low fidelity keeps you from falling in love with a layout before you've decided what the layout is for. These are the raw pages — unedited.

`[SKETCH GALLERY LAYOUT: This is where Ruby's notebook photos go. Display as a 3-column masonry/grid on desktop, 2-column on tablet, 1-column on mobile. Photos should be lightly processed for consistency — increase contrast, warm-neutral or slightly desaturated, but DO NOT clean up, vectorise, or straighten them. Visible paper texture and pen marks are the point; they prove process.]`
`[Each sketch gets a caption drawn from the list below. Captions matter more than the sketches themselves — they're what shows thinking.]`
`[Add click-to-lightbox so individual sketches can be viewed full size.]`
`[If Ruby has fewer sketches than captions listed, delete the extra captions rather than reusing photos.]`

**Suggested captions — match these to whichever sketch fits, and delete the rest:**
- "First pass — a kanban board, because that's what every tracker is. Abandoned quickly: kanban requires the user to move the card, and the whole premise here is that the system moves it."
- "Exploring the list view. The question that kept recurring: what is the unit of this interface — the application, or the search?"
- "Where the status panel came from. If the signals are the differentiator, they can't be buried behind a click."
- "Testing the overview bar. Started as a chart, became four numbers. The chart was more impressive and less useful."
- "The year filter, sketched last and almost cut. It became the feature I'm most confident about."
- "Layout options for the application row — how much can one line carry before it stops being scannable?"

**Body beneath the gallery:**
Three things came out of sketching that I wouldn't have found in Figma.

First, the kanban board died fast. Every competitor uses one, so I drew one — and drawing it made the contradiction obvious. A kanban board is a *manual* metaphor. The user drags the card. If the entire premise of this product is that the system updates itself, the interface can't be built on a gesture that requires the user to do the updating.

Second, the unit of the interface changed. I started designing the application. I ended up designing the search. That reframe is what produced the overview bar and the year filter.

Third, the status panel had to be persistent, not a click-away detail. The signals are the entire differentiator. Hiding them behind an interaction would have buried the thing the product is actually for.

### Wireframes

`[WIREFRAME SECTION — see note below.]`
`[NOTE FOR RUBY: You said you don't have wireframes, only notebook sketches and Figma iterations. Two honest options — pick one:]`
`[OPTION A (recommended): Rename this sub-section "From sketch to structure" and show 2–3 low-fidelity/greyscale Figma frames if you have any early ones. If you have none, skip the sub-heading entirely and go straight from Sketches to Main Flow. A missing wireframe stage is normal for a self-initiated project and nobody will penalise it.]`
`[OPTION B: Spend 30 minutes making 3 greyscale wireframe frames in Figma from your sketches — tracker list, status panel expanded, year-filtered view. It's a small effort for a visible completeness gain, and you can honestly label them "structure defined before visual design."]`
`[Do NOT fabricate a wireframe stage that didn't happen. If it didn't happen, cut it.]`

**Copy if using Option A or B:**
The sketches settled *what* was on the screen. The next question was hierarchy — what the eye should hit first, second, third. I worked in greyscale to keep that decision away from colour.

The order I landed on: **the search first** (overview bar), **the applications second** (the list), **the individual signals third** (the panel). That order is the argument of the product in a single layout — this is a tool for managing a search, not a folder of applications.

---

# 7. DESIGN — USER FEEDBACK & REVISED DESIGN GOALS

**Eyebrow:** 07 — Design / Feedback

**H2:** I tested it against the person I designed it for.

### Method

I didn't have access to a panel of laid-off professionals in active search — the honest constraint of a self-initiated project. So I ran an AI-assisted persona test using **Floto**, briefed with Arjun's full persona profile: two layoffs, {N} live applications, engineering background, the specific frustrations from the affinity clusters.

I asked three questions, in this order, deliberately:
1. What do you notice first?
2. What confuses you?
3. Did you get what you came for?

The first question tests hierarchy before the participant has time to rationalise. The second surfaces friction. The third checks the job-to-be-done.

`[METHOD LAYOUT: Present the three questions as a numbered vertical sequence with the reasoning for each shown to the right in muted text — a two-column arrangement where the question is left and the "why I asked it" is right. On mobile, put the reasoning beneath each question in italic.]`
`[Add a small honest disclaimer chip beneath: "AI-assisted persona testing is a proxy, not a substitute for testing with real users. It surfaces interface friction reliably; it cannot validate emotional impact." Do not bury this — the honesty is a credibility asset.]`

### What came back

**The concept landed.** The tracker was immediately legible as a job search tool without explanation, and the overview bar was what he noticed first — which was the intended hierarchy. The job-to-be-done question came back clean: he could tell which applications were alive.

**Three friction points came out of it:**

**Friction 1 — The Company Site and Job Post icons were identical.**
Two different destinations, one visual. He couldn't tell them apart, and in a list of forty applications that's forty small moments of hesitation.

**Friction 2 — The progress bar dots had no labels.**
He could see there were stages. He could not see *which* stage. A progress indicator that doesn't say what the progress is toward is decoration.

**Friction 3 — No search. Fine at 8 applications, broken at 50.**
The design was tested at a realistic-looking density and failed at a realistic *actual* density. Arjun has {N} live applications. Nikita will have more by month three.

`[FRICTION LAYOUT: Three cards, each with a number badge, the friction as a bold headline, and the explanation beneath. Ideally each card carries a small cropped screenshot of the problem area with a subtle accent-colored circle or arrow annotation pointing at it. If those crops exist, use them — annotated problem screenshots are far more convincing than described ones.]`

### Revised design goals

The feedback didn't change the product. It changed three principles about how it had to behave.

| Original goal | Revised goal | What triggered the change |
|---|---|---|
| Show the status of every application | Show status **at a glance, without interpretation** — every visual element must be self-explaining, labelled, and distinguishable at scan speed | Icon collision + unlabelled progress dots |
| Make the tracker usable | Make the tracker usable **at 50+ applications**, not at 8 — design for the density the primary persona actually lives at | Missing search bar |
| Surface LinkedIn's signals | Surface LinkedIn's signals **without adding a decision** — a signal the user has to interpret is another job, not a solution | Emerged from re-reading the friction as a set |

`[REVISED GOALS TABLE: Three columns. Column 1 (original) styled muted/struck-through. Column 2 (revised) in full-weight text with the bolded phrases emphasised in accent color. Column 3 (trigger) in small text. Add a → arrow between columns 1 and 2. On mobile, stack as: original (muted, small) → revised (prominent) → trigger (small italic).]`
`[This table is the single best evidence in the case study that testing changed the design. Make it visually prominent.]`

---

# 8. DESIGN — MAIN FLOW

**Eyebrow:** 08 — Design / The Solution in Detail

**H2:** One screen, four jobs.

**Body:**
The whole product resolves to a single surface. That was deliberate: adding a new destination to LinkedIn's navigation costs the user a habit they don't have. The tracker lives where the applications already are.

`[MAIN FLOW LAYOUT: Start with the full final screen, displayed large and full-width. Then, for each of the four feature sets below, use a "sticky screenshot / scrolling text" pattern: the screenshot pins on one side while the explanation for each feature scrolls past on the other, with the relevant region of the screenshot highlighted as each feature comes into view. If that's too complex to build, fall back to alternating full-width rows — screenshot left / text right, then reversed.]`
`[Each feature block should carry a small annotated crop of the specific UI region it describes, not just prose.]`

### 01 — Real-time application status tracking

**The problem it solves:** Huntr and Jobscan give users a kanban board where every status update is manual. The status is always one step behind reality, because reality is on the recruiter's side of a wall the user can't see through.

**What it does:** The tracker lives inside LinkedIn, where the data already is. When a recruiter opens an application, the status moves. When a posting closes, the application is marked closed. The user does nothing.

**The design decision:** No drag interaction anywhere in the interface. Not a technical constraint — a deliberate one. The moment the user can move a card, the interface is telling them that maintaining it is their job. It isn't.

`[Annotated crop: the application row with its auto-updated status. Annotation label: "Status changes without user input."]`

### 02 — Surface LinkedIn's existing application signals

**The problem it solves:** Applicants can see that they submitted. They cannot see whether a recruiter opened their profile, whether the role is still being filled, or how they sit relative to the applicant pool.

**What it does:** A persistent right-hand panel surfaces exactly those signals, pulled from data LinkedIn already holds:
- Whether a recruiter has viewed the profile, and when
- Whether the posting is still active or has gone dark
- Position relative to the applicant pool
- Whether a first-degree connection works at the company

**The design decision:** Signals are stated as fact, never as prediction. "Viewed by recruiter, 2 days ago" — not "high likelihood of response." A platform inventing optimism for someone under financial stress is a betrayal, not a feature. The panel reports; it does not reassure.

**The constraint respected:** The recruiter workflow stays completely unchanged. Nothing here requires a recruiter to do anything new, which is why it's actually shippable. Any solution requiring employer behaviour change was cut at ideation.

`[Annotated crop: the right-hand signals panel, expanded. Annotation labels pointing to each of the four signal types.]`

### 03 — Persistent profile and search history

**The problem it solves:** Every existing tracker is built for one search at a time. When a laid-off professional goes through a second or third displacement, they start from zero — history gone, patterns gone, contacts gone.

**What it does:** A year filter at the top of the tracker separates search cycles. Past searches stay accessible as reference. The current search stays uncluttered.

**The design decision:** Past searches are filtered out by default, not deleted and not shown. Arjun needs 2023 available; he does not need it in his face while he's trying to get through this week. Default to the current search, one click to the past.

**Why this matters:** 70% of repeat layoffs happen within twelve months of the first. This isn't an edge case — it's the primary persona's actual life.

`[Annotated crop: the year filter, showing both the default state and the expanded state with past years available.]`

### 04 — From chaos to control

**The problem it solves:** The emotional reality of a sustained search isn't solved by a better spreadsheet. A 500-row spreadsheet is a monument to effort with no evidence of progress.

**What it does:** The overview bar at the top of the tracker — **8 applied · 3 active · 2 awaiting response · 2 closed** — turns a pile of applications into a picture of a search in progress.

**The design decision:** Closed applications are counted, not hidden. The instinct is to hide the losses. But an uncounted rejection is an application the user is still unconsciously waiting on. Naming it as closed is what lets them stop. Closure is the feature.

**The design decision that got cut:** This started as a chart. The chart looked more impressive and communicated less. Four numbers, readable in under a second, beat a visualisation that requires interpretation. In a product whose entire purpose is reducing cognitive load, the more impressive option was the wrong one.

`[Annotated crop: the overview bar. Consider a subtle before/after toggle here showing the rejected chart version versus the final four-number version — "what I cut and why" is more memorable when you can see it.]`

---

# 9. EVALUATION — MEASURING SUCCESS

**Eyebrow:** 09 — Evaluation / Measuring Success

**H2:** How I'd know if this worked.

**Body:**
This is a concept, so I don't have shipped numbers. What I do have is a definition of what I'd measure and why — because a design goal that can't be measured is a preference, not a goal.

### North Star metric

**Percentage of applications where the user views at least one post-submission signal within 7 days of applying.**

Not "time in tracker." Not "sessions per week." Both of those go up when a product is anxiety-inducing, which is the opposite of the goal. This metric only moves if the signals exist, are found, and are worth returning for — which is precisely the value proposition.

`[NORTH STAR LAYOUT: Large full-width callout with a border in accent color. The metric statement large (24–28px), and the "not this / not this" rejections beneath in muted text. Make the rejected alternatives visible — choosing the right metric is the thinking on display here.]`

### Supporting metrics, mapped to design goals

| Design goal | Metric | Target | Why this one |
|---|---|---|---|
| Reduce post-application uncertainty | % of live applications with a status other than "Submitted" after 14 days | > 60% | Directly measures whether silence was actually broken |
| Eliminate manual tracking work | % of tracked applications requiring zero manual user input | > 90% | If users are still editing rows, the automation failed |
| Give closure on dead applications | Median days between a role closing and the user seeing it marked closed | < 3 days | Uncertainty is the harm; speed of closure is the cure |
| Make the search feel like progress | Self-reported "I feel in control of my job search" (5-point, in-product survey at week 4) | +2 points vs. control | The brief's success statement, measured directly |
| Continuity across searches | % of returning users (2nd+ search) who open the year filter within their first 3 sessions | > 40% | Validates the most differentiated and riskiest feature |
| Business outcome | Premium Career 6-month retention, tracker users vs. control | +8% | Ties the emotional outcome to revenue |

`[METRICS TABLE: Four columns. Give "Design goal" 25%, "Metric" 30%, "Target" 12% (centered, accent color, bold), "Why this one" 33%. Hairline rules, no fills. On mobile, convert each row into a card with the goal as the card title and the other three as labelled rows inside.]`

### Counter-metrics — how I'd know it backfired

Any product that surfaces status can make anxiety worse. I'd watch three things and treat any of them moving as a failure, regardless of what the North Star did:

- **Sessions per day above 8** — that's not engagement, that's compulsive checking. The goal is to replace ten anxious checks with one informative one.
- **Increase in same-day re-applications after seeing "not viewed"** — would mean the signal is being read as a verdict and triggering panic behaviour.
- **Drop in applications submitted per week** — would mean visibility is discouraging rather than orienting. Seeing the odds shouldn't make people stop.

`[COUNTER-METRICS LAYOUT: Three items with a warning-toned icon or left border, in a visually distinct block from the metrics table above — different background tint. Header this block clearly as guardrails.]`
`[This section is a strong differentiator. Very few portfolio case studies include counter-metrics; it reads as genuine product maturity.]`

### How I'd validate before shipping

**Usability study** — 5 to 8 laid-off professionals in active search, moderated, two focus questions: does the status panel reduce anxiety, and does the year filter make past searches feel useful rather than painful.

**Diary study** — 2 weeks, 6 participants, to catch the thing usability testing can't: whether the tracker becomes a habit or a new source of dread.

**Instrumented beta** — a small cohort with the counter-metrics wired up from day one, not retrofitted after launch.

`[Three-column layout on desktop, stacked on mobile. Each with a small label chip — "Qual", "Longitudinal", "Quant".]`

---

# 10. EVALUATION — RESULTS

**Eyebrow:** 10 — Evaluation / Results

**H2:** What I can claim, and what I can't.

`[SECTION NOTE: This section must be scrupulously honest. Inflated results in a concept project are the fastest way to lose a hiring manager's trust — they read hundreds of these and they can tell. The honesty here is the credibility.]`

**Body:**
This is a self-initiated concept. It hasn't shipped, so there is no engagement data, no retention curve, no A/B test. Claiming otherwise would be inventing evidence.

Here's what the work actually produced.

### What was validated

**The concept is self-explanatory.** In persona testing, the tracker was understood as a job search tool without any explanation, and the intended visual hierarchy held — the overview bar was the first thing noticed, which is what it was designed to be.

**The job-to-be-done is met.** The core question — "can you tell which of your applications are still alive?" — came back answered. That was the brief's entire success condition.

**Three interface failures were caught before they'd have shipped.** Identical icons, unlabelled progress states, and a search bar that becomes essential past 50 applications. All three were fixed. None of them would have been visible to me without testing, which is the actual finding: I could not see my own interface accurately.

`[VALIDATED LAYOUT: Three items, each with a check indicator in accent color. Bold lead sentence, explanation beneath.]`

### What is not validated

- **The emotional outcome.** Whether this actually reduces job search anxiety is unprovable without real users in real distress. AI persona testing can find a confusing icon. It cannot feel dread.
- **Longitudinal value.** The year filter is my most confident feature and my least tested one — validating it requires a user across two separate layoffs, which is a research timeline of years.
- **Technical feasibility of the signals.** I've assumed LinkedIn can surface recruiter-view data to candidates. That's a defensible assumption from the data model, but it's a policy and privacy question I couldn't answer from outside the company, and it might be the thing that kills the feature.
- **Business impact.** The Premium retention argument is reasoned, not measured.

`[NOT VALIDATED LAYOUT: Same structure as "What was validated" but with a neutral dash or open-circle indicator instead of a check, and muted text color. The visual parallel between the two blocks — same shape, different weight — makes the honesty read as deliberate rather than apologetic.]`

### The outcome

**What this project delivered:** four feature sets taken from research to high-fidelity, a design decision record for each, a measurement framework with counter-metrics, and three validated interface fixes.

**What it didn't:** proof that it works. That requires shipping it.

`[Present as a two-part statement, side by side or stacked, with the second part in equal visual weight to the first — not shrunk or apologised for. Confidence about limits reads as more senior than false certainty.]`

---

# 11. EVALUATION — FEEDBACK & DESIGN ITERATIONS

**Eyebrow:** 11 — Evaluation / Iterations

**H2:** The three changes that came out of testing.

**Body:**
Each friction point from the persona test produced a specific change. Here's what moved, and the reasoning behind each.

`[ITERATION LAYOUT — the most important build pattern in the case study:]`
`[Each iteration is a full-width block containing a BEFORE / AFTER image pair, side by side, EQUAL SIZE, with a clear divider between them and small "BEFORE" / "AFTER" labels above each — "BEFORE" in muted grey, "AFTER" in accent color.]`
`[Optionally implement as a draggable before/after slider if the two images are the same crop and dimensions. If they aren't identical crops, use the static side-by-side — a broken slider is worse than no slider.]`
`[Beneath each image pair: "The problem" / "The change" / "The reasoning" as three short labelled paragraphs.]`
`[Crop tightly to the changed region. A full screen where 5% changed communicates nothing — zoom into the icons, the progress bar, the header.]`

### Iteration 1 — Differentiating the Company Site and Job Post icons

**The problem:** Two links with different destinations shared one icon. At forty applications, that's forty moments of "which one is this?"

**The change:** {Describe what you actually did — e.g. distinct glyphs (globe for company site, document for job post) plus text labels on hover, and increased spacing between the two targets.}

**The reasoning:** Icon-only navigation assumes the user has learned your icon vocabulary. Someone applying to their fortieth job this month has not budgeted attention for learning it. When ambiguity costs more than space does, add the label.

`[Before/after crop: the icon pair, zoomed to roughly 300% of actual size so the difference is legible.]`

### Iteration 2 — Labelling the progress bar stages

**The problem:** The progress dots showed that stages existed but not which stage was which. The user could see position without meaning.

**The change:** {Describe — e.g. added persistent labels beneath each dot, with the current stage in accent color and completed stages filled.}

**The reasoning:** A progress indicator answers one question: how far along am I? An unlabelled one answers a different, useless question: how many things are there? The whole point of this product is removing interpretation work — an unlabelled progress bar adds it back.

`[Before/after crop: the progress indicator, zoomed.]`

### Iteration 3 — Adding search

**The problem:** The design worked at 8 applications. Arjun has {N}. Past roughly 50, the list stops being scannable and the product's core promise — find out what's happening with a specific application — breaks.

**The change:** {Describe — e.g. a persistent search field in the tracker header, filtering by company and role title, positioned to the left of the year filter.}

**The reasoning:** I designed against a demo dataset instead of the primary persona's real one. That's a specific, repeatable mistake and it's the most useful thing I learned in this project: populate the design with the volume the persona actually lives at, from the first frame.

`[Before/after crop: the tracker header, showing the search field added. If possible, also show the list populated at realistic density (40+ rows) versus the original 8 — that comparison makes the problem obvious without explanation.]`

### Iteration 4 — {THE BUTTON EXPLORATION}

`[NOTE FOR RUBY: You mentioned you have three Figma options for one button. Fill in the blanks below with what those three options actually were and which one won. This is a strong section — showing three explorations and articulating why one won is exactly the kind of decision-level detail that reads as senior. Delete this whole iteration if you'd rather not.]`

**The question:** {What was the button for? e.g. the primary action on an application row — "View application" / "Go to job post" / a follow-up action.}

**Option A — {Name}:** {What it looked like.} {Why it was considered.} {Why it lost.}

**Option B — {Name}:** {What it looked like.} {Why it was considered.} {Why it lost.}

**Option C — {Name} — selected:** {What it looked like.} {Why it won — tie this back to a research finding or design principle if you can, e.g. "lowest interpretation cost," "consistent with LinkedIn's existing action patterns," "worked at 50-row density.")}

**What decided it:** {The criterion that actually settled it. Even something as simple as "it was the only one still legible at the row height the list needs" is a good answer — specific beats grand.}

`[BUTTON EXPLORATION LAYOUT: Three options side by side, EQUAL WIDTH, in a horizontal row on desktop (stacked on mobile). Each shows the Figma frame at the top, then the name, then the reasoning beneath. The selected option gets an accent border, a "SELECTED" badge, and slightly elevated shadow; the two rejected options render at 70% opacity. Beneath the three, the "What decided it" line as a full-width closing statement.]`

---

# 12. WHAT I LEARNED

**Eyebrow:** 12 — Reflection

**H2:** What I'd take into the next one.

`[LEARNINGS LAYOUT: Each learning is a block with a bold one-line lesson as the heading and a short paragraph beneath. Stack them full-width, max-width 760px, generously spaced (64px between). Do NOT put these in cards or a grid — this section should read as writing, not as a component. Number them 01–05 in the margin in large muted numerals.]`

**01 — Scope is a design decision, not a constraint on one.**
This started as a broad LinkedIn redesign and became something specific: a tracker for laid-off professionals in repeat displacement. Every time I narrowed the user group, the design decisions got easier — not because there was less to do, but because there was finally something to decide against. A tool for everyone is a tool with no opinions.

**02 — Research without access is still research, if you're honest about the trade.**
I didn't run formal interviews or usability tests. What I had was hundreds of unprompted accounts on Reddit, verified quantitative data from Greenhouse and The Interview Guys, and a pattern that held across both. Community research isn't a shortcut version of interviews — it's a different method with a different bias profile, and it's honest as long as you say which one you used and what it couldn't tell you. What I'd add next time: even three real conversations would have let me probe the contradictions I could only observe.

**03 — The emotional layer is a feature, not a nice-to-have.**
Every competitor I looked at solved the functional problem and ignored the emotional one. The overview bar — 8 applied, 3 active, 2 awaiting response — is not just information architecture. It's the difference between a search that feels like a void and one that feels like it's going somewhere. And the specific decision to *count* closed applications rather than hide them was the moment I understood this: closure isn't a negative state to be minimised, it's the thing that lets someone stop waiting.

**04 — I cannot see my own interface.**
Three friction points came out of persona testing, and all three were invisible to me after weeks of looking at the same screen. Identical icons I'd stopped seeing as identical. Progress dots I could read because I knew what they meant. A list that worked beautifully at the eight rows I'd populated it with. The last one is the real lesson: I designed against a demo dataset instead of my primary persona's actual volume. Now I populate every design with the density the user really lives at, from the first frame.

**05 — Constraints are the argument.**
The strongest thing about this solution isn't a feature — it's that nothing in it requires a recruiter to change their behaviour or an employer to start replying. That constraint, set at ideation, is what killed half my ideas and what makes the surviving half actually shippable. 96% of companies don't notify rejected candidates. A design that waits for that to change isn't a design; it's a wish.

### What I'd do next

Four feature sets taken to high-fidelity is a concept, not a product. The next step is the one I couldn't take from outside: a moderated usability study with 5 to 8 laid-off professionals in active search, focused on the two questions I can't answer myself — does the status panel actually reduce anxiety, and does the year filter make a past search feel useful rather than painful?

The second question is the one I'm least sure about. Showing someone the record of a search that ended in a layoff could be a resource or a wound. I designed it as a resource. I'd want to find out.

`[Closing layout: this last paragraph should sit alone, with a lot of space around it. It's the last thing anyone reads — let it land. Consider setting it slightly larger than body text.]`

---

# 13. FOOTER

**Thanks for reading.**

{One line — e.g. "Ruby Seher — Product Designer. Currently open to opportunities."}

- Email — {email}
- LinkedIn — {url}
- Portfolio — {url}

`[FOOTER LAYOUT: Centered, generous top padding (120px), thin top rule. "Thanks for reading" in a larger display size. Contact links as a horizontal row of text links on desktop, stacked on mobile. Add a "Back to top" link at the very bottom.]`
`[Consider adding a small "Next case study →" link if there are others.]`

---

---

# APPENDIX — NOTES FOR RUBY

**Blanks to fill before handing to Claude Code:** search this file for `{` and fill every one. The important ones: Arjun's and Nikita's application counts, the number of quotes in the affinity board, the timeline, the button exploration in Iteration 4, and your contact details.

**Assets to prepare and name clearly, so Claude Code can wire them up:**

| Section | Asset | Suggested filename |
|---|---|---|
| Hero | Final tracker screen | `hero-tracker.png` |
| Competitive Analysis | 4 competitor screenshots | `competitor-a-huntr.png` … `competitor-d-spreadsheet.png` |
| Affinity Mapping | Figma affinity board | `affinity-board.png` |
| Personas | 2 avatars | `persona-arjun.png`, `persona-nikita.png` |
| Sketches | All notebook photos | `sketch-01.jpg` … `sketch-06.jpg` |
| Main Flow | Full screen + 4 annotated crops | `flow-full.png`, `flow-01-status.png` … `flow-04-overview.png` |
| Iterations | 3 before/after pairs | `iter-01-before.png` / `iter-01-after.png` … |
| Iteration 4 | 3 button options | `button-option-a.png`, `-b.png`, `-c.png` |

**Two things I added that weren't in your existing version, and why:**
1. **Counter-metrics** (Section 9) — almost no portfolio case study has these, and they're the clearest signal of product maturity you can give a hiring manager.
2. **What got cut, and why** (Section 6) — rejected ideas with reasoning demonstrate judgment more convincingly than shipped ideas do.

**One thing to consider cutting if the page runs long:** the "Unpacking the brief" table in Section 1 could be collapsed behind a "show more" toggle. Everything else earns its place.
