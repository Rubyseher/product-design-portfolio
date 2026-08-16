# SHADEMATCH — PORTFOLIO CASE STUDY (FINAL COPY)

> **⚠️ 3 THINGS TO CHECK BEFORE THIS GOES LIVE — 5 minutes total**
> 1. The 4 statistics in Section 1 are real and sourced (list at the very bottom of this file). Click them once to confirm they still load.
> 2. Section 7 describes a **structured self-evaluation**, not user testing — because that's what actually happened. It's written so it's fully defensible in an interview. Don't upgrade the language to "I ran user tests" unless you actually run them.
> 3. Everything else is decided and ready. No blanks.

**Format key:** normal text = page copy. `[BRACKETS]` = build instruction for Claude Code, do not display.

---

## GLOBAL BUILD NOTES

`[Single scrolling page. Max content width 1100px, centered. Full-bleed background bands separate major sections.]`
`[COLOR: the app's theme is purple #6C3CE0. Do NOT flood the page in purple. Near-neutral page (warm off-white #FAFAF8 or near-black), with #6C3CE0 as the single accent — stat numbers, active states, selected items, links. A case study about colour judgment must demonstrate colour judgment.]`
`[TYPE: one display face for H1–H3, one neutral sans for body. Body 17–18px, line-height 1.65, measure capped at 68 characters.]`
`[RHYTHM: eyebrow label (small caps, letter-spaced, muted) → H2 → optional one-line deck → content. 120px desktop / 64px mobile vertical padding between sections.]`
`[Sticky table-of-contents rail on desktop that highlights the active section on scroll. Top progress bar on mobile.]`
`[This is a mobile-first PWA. Show every product screenshot in a PHONE frame, never a desktop browser frame.]`
`[Images: 12px radius, soft shadow, caption in 13px muted text beneath. Captions are written in this doc — use them.]`
`[Scroll reveal: fade-up 300ms, once only. No parallax, no carousels.]`
`[Stat numbers count up on first scroll into view, 800ms.]`

---

# 0. HERO

**Eyebrow:** ShadeMatch · Product Design Case Study · 2026

**H1:** I shipped the product. Then I audited every decision in it.

**Sub-headline:** ShadeMatch is a live AI outfit colour matcher. This is the product thinking I applied to it after launch — the research, the competitive position, and the two features I cut.

**Meta row:**
- **Role** — Product Designer (solo: problem framing, research, IA, interaction, visual)
- **Type** — Self-initiated · Live product
- **Focus** — Post-launch product audit and redesign
- **Tools** — Figma, community research, App Store review mining

**Button:** View the live app →
`[Links to https://redux-ready-shadematch.onrender.com]`

`[HERO: Full viewport desktop. Left column 52% = eyebrow, H1, sub-headline, meta row as a 2×2 grid, then the live-app button. Right column 48% = the app's result screen in a phone frame, bleeding slightly off the right edge.]`
`[H1 at 60–76px desktop, 34px mobile. Break after "shipped the product."]`
`[The live-app button should be prominent — a real running product is an asset most portfolio pieces don't have.]`
`[Add a thin edge-to-edge strip of colour swatches beneath the hero as a visual signature. Pull the actual colours the app generates.]`

---

# 1. THE PROBLEM

**Eyebrow:** 01 — The Problem

**H2:** A full wardrobe and nothing to wear is not a joke. It's a design failure.

**Body:**
People own far more clothing than they wear, and the reason isn't that they bought badly. It's that they can't see the combinations. A garment sits unworn not because it's disliked, but because nothing in the wardrobe has been identified as its partner — and identifying that partner takes a skill most people were never taught and don't believe they have.

The cost is daily, small and relentless. It's the same five outfits on rotation while most of the wardrobe stays folded. It's buying a new top because the one you own "doesn't go with anything" — which is almost never true, just unproven.

**Stat block:**

| Stat | Label |
|---|---|
| 82% | of the average wardrobe goes unworn — US figure, from a 20-country study of 18,000 households |
| 26% vs 88% | what people *estimate* is unworn, versus what actually is |
| 5 months | of a working life spent deciding what to wear — around an hour a week |
| 45% | find deciding what to wear for work actively stressful |
| 20–40% | online apparel return rate, against a ~20% e-commerce average |

`[STAT BLOCK: editorial data spread, not cards. Row of 5 on wide desktop, 3+2 tablet, stacked mobile. Large accent number, hairline rule beneath, 14px muted label. Count-up on scroll.]`
`[The "26% vs 88%" stat gets special treatment: two numbers with "vs" between them — 26% small and muted, 88% large and accent. The visual gap IS the insight. This is the best single graphic in the section.]`

### The insight that reframes it

The most useful number here isn't 82%. It's the gap between the two.

When Movinga surveyed 18,000 households across 20 countries, people estimated roughly a quarter of their wardrobe went unworn. The real figure in some countries approached nine-tenths. People are not walking around aware of this problem and shopping for a solution. They've absorbed it as a personality trait — *I'm just bad at clothes* — rather than a solvable information problem.

That has a hard product consequence, and it shapes everything downstream: **nobody is searching for this app.** There is no query for "help me see what goes with my green shirt." The product cannot rely on intent-driven discovery. It has to prove its value inside the first thirty seconds of the first session, before the user has consciously agreed they have a problem at all.

`[Inset panel: 3px accent left border, tinted background, 32px padding. Bold the final sentence — it justifies half the design decisions later and you'll point back at it.]`

### What ShadeMatch was, before any of this

ShadeMatch does five things. Photograph a garment, and it returns colour combinations that work with it, a filter to narrow them, shopping links to Amazon, Myntra and Flipkart, and a Pinterest button that opens a search for the combination.

It works, and it's live. But building something and understanding it are different exercises, and when I sat down to evaluate it properly, five questions had no answer:

- Who is this for, specifically?
- What is the moment they'd open it?
- Why would they open it a second time?
- Which of these five features is the product, and which are decoration?
- What would I cut?

This case study is how I answered them — and what changed as a result.

`[LAYOUT: the five questions as a vertical list, each with a large muted "?" or unchecked-box indicator. Closing line beneath, full width, slightly larger type.]`
`[This block is the thesis. Keep it plain — the plainness is the point.]`

### The brief, written after the fact

Help people wear more of what they already own, by removing the single decision that stops them — *what goes with this?* — in the moment they're standing in front of their wardrobe, in under thirty seconds, with no setup.

Success is not engagement. Success is a garment leaving the shelf.

`[Inset panel matching the "insight" block so the two read as a pair. Final line on its own, bold.]`

---

# 2. THE SOLUTION

**Eyebrow:** 02 — The Solution

**H2:** One item in. A wearable answer out. No setup.

**Body:**
The scoped product does one thing: you photograph a single garment you own, and it tells you what will work with it — instantly, with no account, no wardrobe upload, no onboarding.

Everything else was either supporting that job or competing with it. Sorting out which was which was the entire design exercise.

**01 — Single-item capture**
Photograph one garment. That's the whole input. No wardrobe digitisation, no tagging, no account. It's the lowest-effort entry point in the category, and the thing that makes a first session possible for someone who hasn't agreed they have a problem yet.

**02 — Explained colour matches**
The app returns combinations that work with the detected colour — and says *why* in one line. A recommendation the user doesn't understand is one they can't reuse tomorrow without opening the app again.

**03 — Visualise before committing**
The Pinterest deep-link answers the question a colour swatch structurally cannot: *but what does that actually look like on a person?* It's the cheapest possible bridge between an abstract palette and a real outfit.

**The cut: marketplace links, removed from the core flow.**
Amazon, Myntra and Flipkart links sat beside every result in the original build. They're now gone from the primary path. The reasoning is in Section 6, and it's the most consequential decision in this project.

`[Full-width hero shot of the redesigned core screen directly under the H2. Then the three surviving features as a 3-column row desktop / stacked mobile — large "01" numeral in accent at low opacity, bold title, two lines of body.]`
`[Then "the cut" as a visually distinct full-width block — muted, desaturated background, strikethrough treatment on the heading. It should feel like a different kind of statement. Anchor-link it to Section 6.]`

---

# 3. RESEARCH — COMPETITIVE ANALYSIS

**Eyebrow:** 03 — Research / Competitive Analysis

**H2:** Everything either costs too much to start, or shows you clothes you don't own.

**Body:**
There's no shortage of products in this space. What's missing is a product that answers the question at the moment it's actually asked. I mapped five categories of alternative — including the one most people actually use, which is no product at all.

`[COMPETITOR BLOCK — repeat 5×, alternating image side:]`
`[LEFT 40%: screenshot, rounded corners, shadow, caption beneath. RIGHT 60%: letter badge (A–E) in a small circle → category title as H3 → "What works" → "The gap" in an accent-bordered tinted callout → one-line verdict in small caps, letter-spaced, muted.]`

### A. Wardrobe apps — Whering, Acloset, Indyx, Stylebook

**What works:** These are the most complete answer that exists. Digitise your wardrobe and the app generates full outfits from things you genuinely own, tracks wear frequency, plans ahead. When someone sticks with one, it works well.

**The gap:** The setup cost is enormous and entirely front-loaded. Photographing, cropping and tagging fifty to two hundred garments is hours of labour demanded *before* the product delivers anything. Read the two- and three-star reviews and the pattern repeats across every app in the category: people love the idea, upload twenty items, and never open it again. The product asks for the largest possible commitment from a user who hasn't yet been shown a single moment of value.

**Verdict:** Highest ceiling in the category. Highest wall in front of it.

`[Caption: "The digitisation wall — hours of upload demanded before the first useful output."]`

### B. Pinterest

**What works:** Unmatched for inspiration, and the only place that answers "what does this combination look like on a real person." It's a visual reference layer nothing else provides.

**The gap:** Everything on Pinterest is a garment you don't own. It answers *what looks good* and never *what you can wear tonight.* The distance between a saved pin and an actual outfit is exactly the distance ShadeMatch exists to close — which is why the redesign links out to Pinterest rather than trying to replace it.

**Verdict:** Perfect at inspiration. Structurally incapable of personalisation.

`[Caption: "Aspiration without ownership. Beautiful, and unwearable."]`

### C. Marketplace styling — Myntra "Complete the Look", Amazon "Style with"

**What works:** Genuinely good recommendations, well-merchandised, shown at the exact moment a user is receptive to them.

**The gap:** Every recommendation is an item for sale. The engine isn't answering *what goes with this* — it's answering *what else can we sell this person*, and the two only coincide by accident. Users know this. A styling recommendation attached to a buy button carries a permanent trust discount, and no amount of accuracy removes it.

**Verdict:** Advice with a commercial motive is advertising.

`[Caption: "A recommendation you can't fully trust, because you know what it's for."]`

### D. General AI chat — ChatGPT, Gemini with a photo

**What works:** Free, immediate, capable. Upload a photo of a shirt, ask what goes with it, get a reasonable answer. This is the strongest competitor in the category and the least discussed.

**The gap:** Nothing persists. No memory of your wardrobe, no record of yesterday's question, no visual output — just text. It also requires the user to already know they can ask, and to phrase it well. A capable tool with no product around it.

**Verdict:** Capable, generic, forgettable. The bar ShadeMatch has to clear.

`[Caption: "The real competitor. Free, decent, and gone the moment you close the tab."]`

### E. The actual status quo — a mirror, a friend, and giving up

**What works:** Free, instant, no download. Holding two items up and squinting is what almost everyone actually does, and for confident dressers it's enough.

**The gap:** It doesn't scale past what you can physically hold, it depends on confidence the user may not have, and it fails at precisely the moment it matters — when you're unsure. "Ask a friend with good taste" is the most-used feature in this category and it isn't available at 8am on a Tuesday.

**Verdict:** The default. Free, fast, and unreliable exactly when you need it.

`[Caption: "The most-used competitor in the category has no interface."]`

### What this told me

The landscape splits along one axis: **setup cost.** Wardrobe apps demand everything upfront and deliver the best answer. Pinterest and marketplaces demand nothing and answer about clothes you don't own. AI chat demands nothing and leaves nothing behind.

Nobody occupies the space of *near-zero setup, answer about what you already have.* That's a real position — and it's the one ShadeMatch already occupied, because it only ever asked for one photo.

The product had the right entry point. The work was figuring out what else had to be true for that to matter.

`[SYNTHESIS: 2×2 positioning matrix. X-axis "Zero setup ← → High setup". Y-axis "Clothes you don't own ← → Clothes you own". Plot Pinterest, marketplaces, AI chat and mirror-and-friend in the lower-left region; wardrobe apps top-right. ShadeMatch alone in the TOP-LEFT quadrant, accent color, larger dot.]`
`[Label the empty top-left quadrant explicitly — "unoccupied". An empty quadrant with your product in it is the most screenshot-able asset in the case study.]`
`[Closing paragraph beneath the matrix, centered, max-width 700px, slightly larger type.]`

---

# 4. RESEARCH — VOICES & AFFINITY MAPPING

**Eyebrow:** 04 — Research / Voices

**H2:** I read the reviews of every app that failed at this.

### Method

No recruited panel — the honest constraint of a self-initiated project. What I did instead had two halves.

**Community research.** Threads across fashion advice communities, read specifically for how people describe the moment of not knowing what goes with something — not general complaints about clothes, but that particular stuck moment.

**Review mining.** This was the more valuable half. I read the two- and three-star App Store and Play Store reviews of every wardrobe app in the category. One- and five-star reviews are mostly noise; the middle band is where people explain, in detail and unprompted, exactly what made them abandon a product they wanted to like. That's churn research, written by the churned, for free.

**What it gave me:** unprompted honesty at volume, and direct evidence about the failure mode of my closest competitors — something I could never have obtained by interviewing my own users.

**What it cost me:** no follow-up questions, no ability to probe a contradiction, and a self-selection skew toward people motivated enough to post publicly. I have no data on the quiet majority who used a wardrobe app happily and never wrote about it.

`[Two-column "gave me / cost me" comparison, equal width, vertical hairline between, plus/minus indicators at top. Stack on mobile.]`
`[Pull out the review-mining line as a small callout: "Two- and three-star reviews are churn research written by the churned." It's a reusable research insight and it signals someone who finds signal where others don't.]`

### Three clusters

**Cluster 1 — "I don't trust my own eye."**

The dominant emotion isn't confusion, it's self-doubt. People don't describe missing information; they describe missing a skill they believe others have and they don't. The recurring pattern: owning items they genuinely like, in isolation, that they have never once worn — and no vocabulary for why.

**The unmet need: a second opinion with a reason attached.** Not a verdict — an explanation they can carry forward.

**Cluster 2 — "The setup costs more than the problem."**

This came almost entirely from review mining, and it's the most actionable finding in the project. The abandonment pattern is remarkably consistent: genuine enthusiasm, fifteen to thirty items uploaded, then nothing — always before the app has produced anything useful. The labour arrives before the value, every time.

**The unmet need: value before commitment.** The product must be useful at item one, not item one hundred.

`[★ Key insight badge — this cluster determines the entire product architecture.]`

**Cluster 3 — "Everything is trying to sell me something."**

A consistent, weary suspicion of styling advice attached to commerce. People describe discounting recommendations automatically when a buy button is present — not because the advice is wrong, but because they can't tell whether it's for them or for the retailer. The suspicion is applied before the recommendation is even evaluated.

**The unmet need: advice with no motive.** The recommendation has to be visibly disinterested to be usable at all.

`[★ Second key insight badge. This cluster directly contradicts a decision in the original build, and that collision is the most valuable moment in the case study. Flag it visually.]`

`[CLUSTER LAYOUT: three stacked blocks, numbered, each with a distinct subtle background tint. "The signal" paragraph, then "The unmet need" as a bold highlighted callout at the bottom of each.]`

### The three findings that broke the original build

**Finding 1 — Nobody is looking for this product.**
82% of the average wardrobe goes unworn, but people estimate around 26%. They don't experience this as a problem with a solution; they experience it as a fact about themselves. Nothing in the funnel can assume intent.

**Finding 2 — Setup cost is the category's cause of death.**
Every serious competitor loses users at the same wall. The most valuable property ShadeMatch already had — one photo, no account — turned out to be the moat, and it had never been identified as a decision.

**Finding 3 — Commerce contaminates advice.**
Users apply an automatic trust discount to any recommendation adjacent to a buy button. The original build placed Amazon, Myntra and Flipkart links directly beside every result — attaching a motive to the one thing that only works without one.

`[Three cards in a row desktop, stacked mobile. Bold headline, body, source line in 12px muted italic beneath a hairline. Equal height, light border. Finding 3's card gets a warning-toned indicator — it's the one that indicts the existing product.]`

### The business case

India's fashion e-commerce market was worth roughly **$25.6B in 2025**, apparel at **54%** of it, Myntra alone at about **$12.5B GMV**. It's not a small pond, and there's obvious money in sending qualified traffic into it.

That's exactly the trap. Affiliate revenue is the fastest monetisation path available to a product like this, and taking it early destroys the asset that makes the product worth using. A styling engine that is trusted can eventually monetise almost any way it likes — subscription, brand partnership, retailer licensing. A styling engine that is *suspected* has no second act.

There's a stronger commercial argument available on the retailer's own side. Online apparel returns run **20–40% against a ~20% e-commerce average**, and fit and sizing drives about half of them. A meaningful share of the remainder is the other failure — the item arrived, it was fine, and it went with nothing the buyer owned. A tool that tells someone what they can actually wear a garment with is a returns-reduction tool wearing a styling app's clothes. That's a far better pitch to a retailer than affiliate clicks.

**Sequencing, stated plainly: earn trust with disinterested advice first. Monetise the trust second. Never the reverse.**

`[Three stats in a horizontal row ($25.6B / 54% / 20–40%), then the paragraphs, then the sequencing line as a full-width bold statement with a top hairline. That last line is the business thesis — set it apart.]`

---

# 5. PERSONAS

**Eyebrow:** 05 — Research / Personas

**H2:** Two people. One wardrobe problem, arrived at from opposite directions.

**Body:**
The clusters resolved into two people. One owns too much and wears too little. The other keeps buying to solve a problem buying can't solve. They meet at the same moment — standing in front of a cupboard, holding one item, stuck.

`[PERSONA LAYOUT — follow closely:]`
`[Two cards side by side, horizontally centered, EQUAL WIDTH (~48% each, 4% gap), EQUAL HEIGHT, VERTICAL orientation (taller than wide, roughly 3:4 ratio).]`
`[Card structure, top to bottom: 1) circular avatar 120px centered · 2) name bold H3 centered · 3) role + age + city on one line, 14px muted, centered · 4) the quote, italic, centered, 18px, in quote marks, 24px margin top and bottom · 5) left-aligned labelled sections in order: Context · Goals · Frustrations · Behaviours · What they need — label in small-caps accent, bulleted content beneath · 6) bottom row: "Maps to" cluster chips.]`
`[Styling: white background, 1px light border, 16px radius, 32px padding, subtle shadow. Stack full-width on mobile.]`
`[PRIMARY badge in accent, top-right of card 1. Muted SECONDARY badge on card 2. The asymmetry shows prioritisation.]`
`[On-theme touch: a 4-swatch colour strip along the top edge of each card, drawn from that persona's described wardrobe palette.]`
`[Avatars: neutral illustrated portraits or greyscale photos. Avoid smiling-stock-photo — it cheapens the section.]`

### PERSONA 1 — PRIMARY

**Aditi Sharma**
Consultant, 26 · Bengaluru · Owns around 120 garments, wears about 15

> "I can tell when someone else looks good. I've never been able to do it for myself."

**Context**
- Four years into a corporate job with a soft dress code, which is harder to dress for than a strict one
- Buys online regularly — Myntra, Zara, a few Instagram brands
- Wardrobe has accumulated rather than been assembled; no organising logic behind it
- Gets dressed in a ten-minute window before leaving, usually running late

**Goals**
- Look put-together without spending time or thought on it
- Wear the things she liked enough to buy and has never worn
- Stop buying replacements for problems she already owns the solution to

**Frustrations**
- Owns items she loves in isolation and has never once put on
- Defaults to the same five safe outfits and is bored of all of them
- Downloaded a wardrobe app, uploaded around twenty items, abandoned it
- Doesn't trust her own colour judgement, and doesn't trust advice that's selling her something

**Behaviours**
- Decides in front of the open cupboard, holding one item, in under two minutes
- Sends photos to one friend with good taste when genuinely stuck
- Saves Pinterest outfits she never recreates, because she doesn't own the pieces
- Shops when stuck — which is why she owns 120 garments and wears 15

**What she needs**
- An answer in seconds, not a system to maintain
- A reason attached to the answer, so it compounds instead of resetting
- Advice she can tell isn't trying to sell her anything

**Maps to:** Cluster 1 · Cluster 2 · Cluster 3

### PERSONA 2 — SECONDARY

**Rohan Iyer**
Product Manager, 31 · Pune · Buys often, returns often

> "I keep buying stuff that doesn't go with anything. Then I buy more stuff to fix it."

**Context**
- Comfortable spending on clothes, uncomfortable with the results
- Orders in bulk from Myntra and Amazon, returns a meaningful share
- Confident in most domains, specifically not this one, and slightly embarrassed by that
- Would never describe himself as someone who cares about fashion, but does

**Goals**
- Stop wasting money on items that end up unworn
- Reduce returns, which he finds tedious rather than free
- Look deliberate without having to develop an interest in clothes

**Frustrations**
- Buys individual items with no plan for what they pair with
- Ignores marketplace "complete the look" suggestions as transparently commercial
- Has no way to check a purchase against what he already owns
- His fix for "nothing goes together" is buying more, which makes it worse

**Behaviours**
- Decides at the point of purchase more than at the point of dressing
- Sorts by rating and buys the safe option — navy, black, white
- Has never photographed his wardrobe and never will
- Would use a tool once at checkout, not daily

**What he needs**
- A pre-purchase check: does this work with what I own?
- Confidence at the point of spending
- Something that takes seconds, because he won't invest more than that

**Maps to:** Cluster 1 · Cluster 3

### Why Aditi is primary

Rohan is, on the face of it, the more commercially attractive user. He's at the point of purchase, already spending, one click from an affiliate link. Designing for him monetises immediately.

I prioritised Aditi anyway, for three reasons.

**Frequency.** Aditi has the problem every morning. Rohan has it when he shops. A daily problem builds a habit; an occasional one builds a bookmark.

**Trust.** Designing for Rohan pulls the product toward commerce — and Cluster 3 says commerce is exactly what makes styling advice unusable. Optimising for the buying moment would have degraded the thing that makes the product work at all.

**Coverage.** Aditi's needs contain most of Rohan's. A product that answers "what goes with this thing I own" can answer "what would go with this thing I'm about to buy" with almost no additional design. The reverse isn't true — a purchase-time tool has nothing useful to say at 8am on a Tuesday.

Aditi became the design target. Rohan became the expansion case: deliberately not designed for now, deliberately not designed *against*.

`[Full-width beneath the two cards, max-width 800px, centered, top hairline. Three reasons as a numbered list with the bolded lead word in accent. This paragraph is the difference between "I made two personas" and "I made a prioritisation decision and can defend it."]`

### Redefined challenge

The original build treated this as a colour problem and solved it with a colour algorithm. The research says it isn't a colour problem. It's a **confidence** problem with a colour-shaped surface — and confidence isn't restored by an answer, it's restored by an answer you understand.

**How might we** help people wear more of what they already own, by giving them a trustworthy, instantly available second opinion on a single garment — one that explains its reasoning, requires no setup, and has nothing to sell them?

**Built for** the moment of getting dressed, holding one item.
**Not for** wardrobe management, shopping, or building a styling habit.

`[Full-bleed inverted band, near-black or deep purple. HMW at 28–32px, max-width 900px centered, "How might we" in lighter weight. "Built for / Not for" beneath as two chips — solid accent, and muted struck-through. This is the pivot of the case study; make it feel like one.]`

---

# 6. DESIGN — IDEATION & SKETCHES

**Eyebrow:** 06 — Design / Ideation

**H2:** The hardest part was subtraction.

**Body:**
Most design projects start empty and add. This one started full. ShadeMatch already did five things, and the work was almost entirely deciding which were the product and which were noise wearing a feature's clothes.

### The three questions everything had to pass

**1. Does this serve the moment of getting dressed?**
Not the moment of shopping, not browsing. If a feature's best use case was "while browsing Myntra," it was out of the core regardless of how well it worked.

**2. Does it cost the user anything before it gives them something?**
Cluster 2 killed the category through setup cost. Anything adding upfront work — accounts, uploads, preference quizzes, onboarding — was out unless it earned its cost inside the same session.

**3. Does it survive the trust test?**
Would Aditi believe this recommendation if she knew exactly how the product made money? If not, the feature was damaging the product even while working correctly.

`[Three numbered items, horizontal row desktop with the numeral large in accent above each. Stack on mobile.]`

### Auditing what already existed

| Feature, as built | Verdict | Reasoning |
|---|---|---|
| Single-garment photo capture | **Core — keep** | The strongest thing in the product. Near-zero setup is the entire competitive position. |
| Colour combination suggestions | **Core — rebuild the output** | Right feature, wrong presentation. Returned colours without reasons, which answers the question once instead of teaching the user to answer it themselves. |
| The filter control | **Rename** | Failed on naming alone. The label was internal-sounding language no user standing at a wardrobe would recognise — and a filter nobody understands is a filter nobody uses. |
| Amazon / Myntra / Flipkart links | **Cut from core flow** | Fails question 3 outright. Attaches a commercial motive to advice that only works without one. The most consequential cut in the project. |
| Pinterest deep-link | **Keep — promote it** | Underrated in the original build. The only thing answering "what does this look like on a person," which a colour swatch structurally cannot. |

`[TABLE: three columns. Colour-code the "Verdict" column as chips — accent for keep, warning/muted for cut, intermediate for rename. Left column medium weight, right column regular and muted. On mobile, stacked cards with the feature as title and a prominent verdict chip.]`

### Why cutting the marketplace links was the right call

This was the decision I argued with myself about most, so here's the full reasoning.

**The case for keeping them:** they're the only revenue in the product. India's fashion e-commerce market is ~$25.6B and affiliate programmes are trivially easy to join. They're also occasionally useful — sometimes the honest answer is that you don't own anything that works.

**The case for cutting them, which won:**

Cluster 3 is unambiguous. Users apply a trust discount to any styling advice sitting next to a buy button, and that discount doesn't depend on whether the advice is good. Trust in this product isn't a nice-to-have — it *is* the product. The entire reason Aditi would choose this over Myntra's "Complete the Look" is the absence of a motive.

There's a compounding problem too. The moment revenue depends on outbound clicks, every future design decision gets a thumb on the scale. The recommendation that earns nothing starts quietly losing to the recommendation that earns something — slowly, in ways nobody explicitly decides. Cutting the links now isn't only about the current experience; it removes a pressure that would have bent every subsequent decision.

**Where they went instead:** a secondary path, entered deliberately. When a user's own wardrobe genuinely doesn't contain a match, *then* the option to see what does exist commercially is a service rather than an ad — because the user asked for it.

**The principle:** the same feature can be helpful or manipulative depending only on who initiated the interaction. Same feature, different initiator, completely different meaning.

`[Inset panel with accent left border. Structure "case for / case against" as a genuine two-sided comparison — the strength of this passage is that you steelmanned the option you rejected. Bold the final principle and consider setting it as a pull quote.]`

### What got cut, and what never made it in

| Idea | Why it didn't survive |
|---|---|
| Full wardrobe upload and outfit generation | The category's cause of death. Would have converted the product's one advantage into its competitors' one weakness. |
| Account and login before first use | Fails question 2. Value has to arrive before commitment, not after. |
| Style quiz onboarding | Six taps before a single useful output, for a user who hasn't agreed she has a problem. Every tap here is a leak. |
| Social feed / share your outfit | Solves a problem Aditi doesn't have. She isn't short of inspiration — she's short of confidence about her own cupboard. |
| Skin-tone-based colour analysis | Genuinely valuable, and genuinely a different product. Requires accuracy I can't validate and carries real harm risk if wrong. Deferred, not cut. |
| Occasion filter (work / casual / evening) | Good idea, but adds a decision to a flow whose whole promise is removing one. v2. |

`[Two columns, hairline rules. Left column at 60% opacity or struck through. "→ deferred, not cut" tag in a different color on the last two rows.]`

### Sketches

I sketched on paper before touching Figma. Low fidelity keeps you from committing to a layout before deciding what the layout is for. These are the raw pages.

`[SKETCH GALLERY: notebook photos, 3-column masonry desktop / 2 tablet / 1 mobile. Process for consistency — contrast up, slightly desaturated — but do NOT clean up, straighten or vectorise. Paper texture and crossings-out are the evidence. Click-to-lightbox at full size.]`
`[Use these captions, matched to whichever sketch fits. Delete any extras rather than reusing photos.]`

**Captions:**
- "First pass at the result screen. The question that kept returning: is the output a colour, or an instruction?"
- "Working out how much to show. Three suggestions or twelve? Twelve is more impressive and less useful."
- "Where the 'why' line came from. A palette without a reason gets used once. A palette with a reason gets remembered."
- "Placing the Pinterest link so it reads as 'see it' rather than 'leave'."
- "Capture screen. Counting taps between opening the app and having an answer — trying to get to two."
- "The empty state. Sketched last, and became one of the most important screens in the product."

**Body beneath the gallery:**

Three things came out of sketching that the original build had skipped entirely.

**The output changed from a colour to an instruction.** The build returned swatches. A swatch is data — it hands the interpretation work back to a user who has just told us she doesn't trust her interpretation. The sketches moved toward stating the recommendation in words, with colour supporting it rather than the reverse.

**The count came down.** Early sketches showed a full palette — eight, ten, twelve options. It looked far more capable and performed far worse. Aditi has a two-minute window and low confidence; twelve options hands the same decision problem back in a new wrapper. Three, ranked, with reasons.

**The empty state became a real screen.** What happens when nothing you own works with this? The build had no answer, and it isn't an edge case — for an accumulated, unplanned wardrobe it may be the most common outcome. It's also the only place a shopping link is genuinely a service. Designing that screen properly is what turned the marketplace links from a contaminant into a feature.

---

# 7. DESIGN — EVALUATION & REVISED GOALS

**Eyebrow:** 07 — Design / Evaluation

**H2:** Auditing a live product against its own research.

### Method

ShadeMatch had one advantage over a concept project: it already existed and could be used. So rather than testing a prototype, I ran a structured evaluation of the live product against the research findings — going through the real flow, screen by screen, and asking three questions at every step.

1. **What does a first-time user expect before opening this?** — tests whether the value proposition survives contact.
2. **Can they say what the app just told them, in their own words?** — tests comprehension, not correctness.
3. **Would they actually wear it?** — tests the only thing that matters. Not "is this right," but "did it change what someone did."

`[Three numbered questions with the reasoning in muted text to the right, two-column desktop, stacked with italic reasoning on mobile.]`
`[Highlight question 3 — "would they actually wear it" is the correct success question for this product, and choosing it well is itself a demonstration of product thinking. The obvious question, "are the suggestions nice," measures nothing.]`

**Stated plainly:** this is a heuristic evaluation against documented research, not a moderated usability study with recruited participants. It's good at finding structural and comprehension failures. It cannot tell me whether anyone's behaviour changed — that requires the diary study described in Section 9.

`[Small disclaimer chip beneath the method. Do not bury it — the precision about method is a credibility asset, not a weakness.]`

### Four failures it surfaced

**1 — The output gives an answer but no reason.**
A suggestion arrives as a bare colour combination. Nothing explains why it works. For a user whose underlying problem is confidence rather than information, an unexplained answer solves today and nothing else — she's back tomorrow with the same question. Confidence doesn't transfer between sessions; a reason does.

**2 — The filter label is internal language.**
The filter control used a phrase that made sense somewhere inside the build process and means nothing to someone standing at a wardrobe. A control that has to be explained has already failed. It's a small fix and a diagnostic one — exactly the class of detail that survives when nobody in the loop is asking "would a user actually say this?"

**3 — The shopping links change how the whole app reads.**
This is the failure that confirmed Cluster 3 on a live product, and it's sharper than the research predicted. Once the Amazon and Myntra links are visible, the *suggestions themselves* start reading as advertising — the commercial framing propagates backwards onto output that was working perfectly well on its own. The links don't just fail to add value. They devalue what's already there.

**4 — A swatch doesn't answer the real question.**
Even a well-explained colour combination doesn't tell you what it looks like on a person. The Pinterest deep-link — treated as a minor extra in the build — is the only thing addressing the question users are actually asking. The hierarchy was backwards.

`[Four cards, number badge, bold headline, explanation beneath. Where possible, a cropped screenshot of the problem area with an accent-colored annotation. Failure 3 gets a warning-toned border — it's the one that invalidated an existing decision.]`

### Revised design goals

The evaluation didn't change what the product is. It changed four things about how it has to behave.

| Original goal | Revised goal | Trigger |
|---|---|---|
| Suggest colours that match | Suggest colours that match **and say why in one line** — every output must teach, not just answer | Failure 1 |
| Give the user control via filters | Give the user control **in language they already use** — no term that needs explaining survives | Failure 2 |
| Help users find matching items | Help users find matching items **they already own** — commerce only on request, never volunteered | Failure 3 |
| Show the recommended combination | **Let them see it on a person** before committing — abstract palettes don't convert to worn outfits | Failure 4 |

`[Three columns. Column 1 muted and struck through, column 2 full weight with bolded phrases in accent, column 3 small. → arrow between columns 1 and 2. On mobile stack: original (small, muted) → revised (prominent) → trigger (small italic).]`
`[This is the table a hiring manager will stop on. Make it visually prominent.]`

---

# 8. DESIGN — MAIN FLOW

**Eyebrow:** 08 — Design / The Flow

**H2:** Two taps to an answer.

**Body:**
The entire product is one loop, and its quality is measured in how few steps it takes. Aditi is standing at a cupboard with about two minutes. Every screen between her and an answer is a place to lose her.

`[Open with a horizontal flow diagram — 5 phone frames in a row connected by arrows, showing the complete loop at a glance. Vertical stack or horizontal scroll strip on mobile. This one graphic should let someone understand the whole product in five seconds.]`
`[Then each step as an alternating full-width row: phone frame one side, explanation the other, with an annotated crop for each key decision.]`

### Step 1 — Capture

**What happens:** The app opens directly to the camera. No home screen, no login, no splash. Point at a garment, tap once.

**The design decision:** No account, ever, until the user has a reason to want one. Every screen before the camera is a leak — and the users leaking out are exactly the ones who haven't yet agreed they have a problem. Opening straight to the camera is a statement: this costs you nothing to try.

**What it protects:** the only structural advantage the product has over wardrobe apps. That advantage is worth more than everything an account would enable.

`[Annotated crop: camera-first launch. Label: "Zero screens before value."]`

### Step 2 — Detection

**What happens:** The garment's dominant colour is identified and shown back to the user — named, not just swatched. "Rust orange." "Sage."

**The design decision:** Show the detection before the recommendation, and make it correctable. Two reasons. If the detection is wrong, everything downstream is wrong, and the user needs to see that before investing belief in a bad answer. And naming the colour is quietly the most educational moment in the product — a user who learns her shirt is "rust" rather than "orange-ish" has gained something she keeps.

**What it protects:** trust. An AI product that shows its work when the work is cheap to show buys credibility for the moments when it can't.

`[Annotated crop: detected colour chip with name and correction affordance. Label: "Show the input before the output."]`

### Step 3 — Recommendation

**What happens:** Three combinations, ranked, each stated as a sentence with colour supporting it — not a swatch grid. Each carries a one-line reason.

**The decision — three, not twelve.** A full palette looks more capable and performs worse. The user came here because a decision was hard; twelve options hands the same problem back in a new wrapper. Three ranked options with reasons is a recommendation. Twelve is a colour picker.

**The decision — the reason line isn't optional.** This is the difference between a product used once and one that compounds. An unexplained answer solves today. An explained one starts building the confidence that was the actual problem — and the honest long-term success state here is a user who needs the app less over time.

`[Annotated crop: one recommendation card — sentence, colours, reason line, each part labelled.]`
`[STRONG ADDITION: a small before/after — the original swatch grid versus the redesigned recommendation card. The contrast makes the entire argument without a word.]`

### Step 4 — Visualise

**What happens:** One tap opens Pinterest, pre-searched for the specific combination, showing real people wearing it.

**The decision — deep-link rather than build.** In-house outfit visualisation would be the most expensive feature in the product by an order of magnitude, and Pinterest already does it better than a solo project could. Sending the user out isn't a failure of ambition; it's an accurate read of where the value is. The product's job is the *decision*. Pinterest's job is the *picture*. Neither needs to do both.

**The risk, acknowledged:** this hands the user to another app at the moment of highest engagement, and some won't come back. That's a real cost, and it's worth it — the alternative is a worse answer to the question people most want answered, and a product that answers the wrong question well still loses.

`[Annotated crop: Pinterest entry point. Label: "The cheapest possible answer to 'but what does it look like?'"]`

### Step 5 — The empty state

**What happens:** When nothing in the user's wardrobe works, the app says so plainly — and *then* offers the option to see what would.

**The decision:** This is the only place commerce belongs, and it belongs here entirely. The user has been given the honest answer first — nothing you own works with this — so the shopping option arrives as a response to a problem they now have, rather than an unprompted suggestion attached to advice.

**Why it matters more than it looks:** this is the same feature cut in Section 6, reinstated in a different position, with completely different meaning. Volunteered, it's an ad. Requested, it's a service. The feature didn't change. The initiator did.

`[Annotated crop: empty state with the honest message and the shopping affordance clearly subordinate in the hierarchy.]`
`[Consider a side-by-side: original build (links alongside every result) versus redesign (links in the empty state only). It closes the loop opened in Section 6 and is the clearest demonstration of judgment in the case study.]`

---

# 9. MEASURING SUCCESS

**Eyebrow:** 09 — Evaluation / Measuring Success

**H2:** The metric that would have destroyed this product.

**Body:**
The easiest metric to instrument here is clicks to Amazon, Myntra and Flipkart. It's precise, attributable, maps directly to revenue — and optimising for it would have systematically dismantled everything that makes the product work.

Worth stating plainly, because it's the trap this product sits next to. Every incentive points at measuring commerce, and commerce is the thing the research says corrodes it.

`[Full-width statement block, tinted background, larger type. Lead with this rather than burying it after the North Star.]`

### North Star metric

**Percentage of sessions where the user wears an outfit they wouldn't otherwise have worn.**

Not sessions. Not time in app. Not suggestions generated. All of those rise when a product is confusing, and the goal is a garment leaving the shelf.

`[Large full-width callout, accent border. Metric at 24–28px, rejected alternatives beneath in muted text. Showing what you refused to measure is the thinking on display.]`

**The honest caveat:** this is hard to instrument. You can't observe what someone wore. The usable proxy is a lightweight "wore this" confirmation on a return visit — which is itself a design problem, because adding a check-in to a product whose promise is zero friction is a contradiction. My current answer is a single optional tap surfaced only on return, accepting incomplete data over a degraded experience. It's a compromise, and I'd want to test it.

`[Keep this caveat. Naming a metric you can't cleanly measure, and saying so, is more credible than presenting a tidy one that quietly wouldn't work.]`

### Supporting metrics

| Design goal | Metric | Target | Why this one |
|---|---|---|---|
| Value before commitment | % of first sessions reaching a recommendation | > 85% | If people drop before the first answer, the zero-setup promise failed at its only job |
| Speed of answer | Median seconds, launch → first recommendation | < 30s | Aditi's window is two minutes. Slower than this loses to the mirror. |
| Comprehension, not correctness | % of sessions where the reason line is read or expanded | > 50% | A reason nobody reads is a reason that isn't working |
| Confidence compounding | % of returning users applying a past combination without re-scanning | > 25% | The strongest signal available — the user learned something and kept it |
| Trust | Suggestion acceptance rate, with vs. without commerce present | Delta < 5% | Directly measures the Cluster 3 contamination effect |
| Real value | Distinct garments involved in accepted suggestions, per user, per month | Increasing | ★ The only metric that measures the actual problem moving |

`[Four columns — goal 25%, metric 30%, target 12% (centered, accent, bold), rationale 33%. Hairline rules, no fills. Mobile: each row becomes a card.]`
`[Mark the last row visually — it's the only metric that measures the Section 1 problem rather than a proxy for it.]`

### Counter-metrics — how I'd know it backfired

Three things I'd treat as failure regardless of what the North Star did:

- **Sessions per day above 3.** This isn't a product that should be used often. Rising usage means either it isn't answering the question or it's become a browsing toy. The long-term success state is a user who needs it *less* — an uncomfortable thing to build a business on, and the honest thing to measure.
- **Rising outbound commerce clicks as a share of sessions.** Means either the empty state is being reached too often, or the boundary between advice and commerce has eroded. Either way the thing worth protecting is going.
- **Falling acceptance rate over a user's lifetime.** Means recommendations aren't fitting a real wardrobe and the user is learning to discount them. Slow, quiet, fatal.

`[Three items with warning-toned left borders, visually distinct block from the table above. Header clearly as guardrails.]`
`[Give the first counter-metric slightly more weight — "success means they need it less" is unusual and will be remembered.]`

### How I'd validate

**Usability, moderated** — 5 to 8 people matching Aditi, using the live app on their own wardrobe. Two questions: does the reason line change whether they'd wear it, and do they notice the absence of shopping links.

**Diary study, 2 weeks** — 6 participants logging what they wore. The only method that can answer whether unworn garments actually moved, which is the entire point.

**A/B on commerce placement** — the highest-value test available: volunteered shopping links versus empty-state-only, measured on acceptance rate rather than clicks. It's the decision in this project I'd most want proven right or wrong.

`[Three columns desktop, stacked mobile. Label chips: "Qual" / "Longitudinal" / "Quant".]`

---

# 10. RESULTS

**Eyebrow:** 10 — Evaluation / Results

**H2:** What I can claim, and what I can't.

**Body:**
ShadeMatch is live but it isn't a business, and there's no meaningful usage data behind it. Here's what the work actually produced.

### What the audit established

**The zero-setup entry point is the competitive position.** It survived the full landscape analysis as the one thing no competitor offers, and it's the property every design decision downstream now protects.

**The output needed a reason, not just an answer.** The strongest structural finding in the evaluation, and the change I'd defend hardest — because it addresses the actual problem (confidence) rather than the surface one (colour).

**The commerce contamination effect is real, and stronger than expected.** The presence of shopping links doesn't just add nothing — it propagates backwards and devalues recommendations that were working. This finding cut a feature.

**Two of five features were misjudged in the original build.** Pinterest visualisation was treated as an extra and is central. Marketplace links were treated as central and are harmful. That's a reasonable hit rate for a build made without a research base — and precisely the gap this exercise existed to close.

`[Four items, accent check indicator, bold lead sentence, explanation beneath.]`

### What is not validated

- **That anyone wears anything differently.** The entire premise — that this moves garments from unworn to worn — is unproven and needs a two-week diary study. It's the only thing that would truly matter, and the thing I don't have.
- **The colour matching itself.** I've assessed the recommendations as plausible. I haven't validated them rigorously against colour theory, or tested across skin tones, lighting conditions and fabric textures — all of which affect the answer.
- **The business model.** Removing the only revenue in the product is defensible on trust grounds and completely untested commercially. "Trust first, monetise later" is a strategy, not a plan.
- **Retention.** A product designed to be needed less over time has a retention problem built into its own definition of success. I've named that tension rather than resolved it.

`[Same structure as the block above, with a neutral dash or open-circle indicator and muted text. The visual parallel makes the honesty read as deliberate rather than apologetic.]`

### The outcome

**What this project delivered:** a defensible competitive position, a feature audit that cut two of five features and reordered the rest, a decision record for every call, and a measurement framework with counter-metrics.

**What it didn't:** proof that anyone's wardrobe changed. That takes a diary study I haven't run.

`[Two-part statement, equal visual weight. Confidence about limits reads as more senior than false certainty.]`

---

# 11. ITERATIONS

**Eyebrow:** 11 — Evaluation / Iterations

**H2:** Three changes, and one of them deleted a feature.

`[ITERATION LAYOUT — most important build pattern in the case study:]`
`[Each iteration = full-width block with a BEFORE / AFTER image pair, side by side, EQUAL SIZE, divider between, labels above — "BEFORE" muted grey, "AFTER" accent.]`
`[Draggable slider ONLY if both images are identical crops at identical dimensions. Otherwise static side-by-side — a broken slider is worse than none.]`
`[Beneath each pair: "The problem" / "The change" / "The reasoning" as three short labelled paragraphs.]`
`[Crop tightly to what changed. A full screen where 5% differs communicates nothing.]`

### Iteration 1 — Adding the reason line

**The problem:** Suggestions arrived as bare colour combinations with no justification. For a user whose problem is confidence rather than information, that answers today's question and nothing else.

**The change:** Each recommendation now leads with a one-sentence rationale in plain language, with the colour relationship named, and the swatches supporting it rather than carrying it.

**The reasoning:** A recommendation the user understands is one they can reuse without the app. A recommendation they don't understand is a dependency. Since the underlying problem is confidence, building the dependency would have been solving the symptom and protecting the metric — the wrong trade even when it's the profitable one.

`[Before/after crop: one recommendation card, zoomed.]`

### Iteration 2 — Renaming the filter

**The problem:** The filter used internal-sounding language that means nothing to a user standing at a wardrobe. It read as a system term rather than a human one, and a control that has to be explained has already failed.

**The change:** Renamed to plain language describing what it actually does, with the default state made explicit so the control explains itself at a glance.

**The reasoning:** Small fix, disproportionately diagnostic. It's exactly the class of error that survives when nobody in the loop is asking "would a user say this?" — and catching it required the whole research process, which is more or less the argument of this case study in miniature.

`[Before/after crop: the filter control.]`

### Iteration 3 — Removing marketplace links from the core flow

**The problem:** Amazon, Myntra and Flipkart links appeared alongside every result — and their presence caused the suggestions themselves to read as advertising.

**The change:** Removed entirely from the primary path. Reinstated in the empty state only, where the user has already been told nothing they own works, and the option answers a problem they now have.

**The reasoning:** The full argument is in Section 6. In short: this is the product's only revenue and its biggest liability, and it can't be both. The same feature is helpful or manipulative depending only on who initiated the interaction — so I changed the initiator rather than the feature.

`[Before/after crop: result screen with and without the commerce block. Make this the largest before/after on the page — it's the most consequential.]`

---

# 12. WHAT I LEARNED

**Eyebrow:** 12 — Reflection

**H2:** What auditing my own product taught me.

`[Each learning = bold one-line lesson as heading, short paragraph beneath. Stacked full-width, max-width 760px, 64px between. Do NOT use cards or a grid — this should read as writing. Number 01–05 in the margin in large muted numerals.]`

**01 — When building gets cheap, the thinking has to be deliberately added back.**
Several decisions in ShadeMatch were made by default rather than badly. The marketplace links weren't a monetisation strategy — they were the obvious thing to include. The filter label was never a naming decision. When building is expensive, the expense forces justification; you don't spend three weeks on a feature you can't defend. When building takes an afternoon, nothing forces it. The rigour has to come from somewhere else, on purpose. That's the main thing this project taught me, and I don't think I'd have learned it in the abstract.

**02 — I had a moat and hadn't identified it.**
The strongest thing about ShadeMatch is that it only asks for one photo. That's precisely what every competitor gets wrong, and why they lose users at the digitisation wall. But it hadn't been a decision — which cuts both ways. Getting it right by default is indistinguishable from getting it right on purpose, until someone asks you why. The research is what turned an accident into a position I can defend and, more importantly, know not to trade away.

**03 — The same feature is helpful or manipulative depending on who starts the conversation.**
Shopping links beside a recommendation are an ad. The identical links, after the app has honestly said nothing you own works, are a service. Nothing about the feature changes — only the initiator. I used to evaluate features on what they do. Now the first question is who asked for it, because that determines the meaning more than the function does.

**04 — The easiest metric to measure is often the one that kills the product.**
Outbound clicks were right there: precise, attributable, revenue-linked. Optimising for them would have degraded the trust the product runs on, one small reasonable decision at a time, with nobody ever choosing it. Picking a harder, blurrier metric that actually maps to value is a decision you have to make early — because once the easy one is instrumented, it starts winning arguments on its own.

**05 — Success here means the user needs me less.**
The real outcome is that Aditi learns which colours work and gradually stops opening the app. That's good for her and structurally terrible for a retention metric, and I don't have a clean answer. I've stopped treating it as a flaw in my reasoning and started treating it as the actual product question: what does a tool designed to make itself unnecessary sell, and to whom? Naming that honestly seems better than designing around it.

### What I'd do next

The gap between this case study and a real product is one study: two weeks, six people, a diary of what they actually wore. Everything here is reasoning, and reasoning is cheap. The only question that matters is whether a garment that sat unworn for two years came off the shelf — and no amount of framework answers that.

The second thing I'd do is audit the colour engine itself. Writing this, I noticed I'd spent weeks interrogating every decision *around* the recommendation and none on whether the recommendation is any good. That's a fairly pointed lesson about where I'm comfortable thinking and where I'm not.

`[Closing paragraph alone, generous space, slightly larger than body. It's the last thing anyone reads — let it land.]`

---

# 13. FOOTER

**Thanks for reading.**

Ruby Seher — Product Designer. Currently open to opportunities.

- Email — rubyseher2002@gmail.com
- LinkedIn — [your profile URL]
- Live app — redux-ready-shadematch.onrender.com
- Portfolio — [your portfolio URL]

`[Centered, 120px top padding, thin top rule. "Thanks for reading" in display size. Links as a horizontal row desktop, stacked mobile. "Back to top" at the bottom. Add "← Previous case study: LinkedIn" if both live on one site.]`

---
---

# SOURCES FOR THE STATISTICS

Put these as a small footnote block at the bottom of the page, or as hover tooltips on each stat. Having them visible is a credibility asset.

| Stat | Source |
|---|---|
| 82% of US wardrobes unworn; 26% estimated vs 88% actual | Movinga wardrobe study, 2018 — 18,000 households, 20 countries |
| ~1 hr/week deciding what to wear = 5 months of working life; 45% find it stressful | Simon Jersey survey, 2019 — 2,000 respondents, UK |
| Online apparel returns 20–40% vs ~20% e-commerce average; fit/sizing ≈ 50% of returns | NRF 2025 Retail Returns Landscape |
| India fashion e-commerce ~$25.6B (2025); apparel 54%; Myntra ~$12.5B GMV | ECDB, 2025 |

---

# ASSET CHECKLIST

| Section | Asset | Filename |
|---|---|---|
| Hero | App result screen, phone frame | `hero-shadematch.png` |
| Competitive | 5 screenshots — Whering, Pinterest, Myntra, ChatGPT, spreadsheet/DIY | `comp-a.png` … `comp-e.png` |
| Competitive | App Store reviews showing abandonment | `reviews-cluster.png` |
| Competitive | 2×2 positioning matrix | build in code, no asset needed |
| Personas | 2 avatars | `persona-aditi.png`, `persona-rohan.png` |
| Sketches | Notebook photos (up to 6) | `sketch-01.jpg` … `sketch-06.jpg` |
| Main flow | 5 phone frames + annotated crops | `flow-01-capture.png` … `flow-05-empty.png` |
| Iterations | 3 before/after pairs | `iter-01-before.png` / `iter-01-after.png` … |
