# SHADEMATCH — CASE STUDY CONTENT BLUEPRINT

**How to read this file**
Normal text = the actual copy that goes on the page.
`[SQUARE BRACKETS]` = build/layout instruction for Claude Code. Do not display.
`{CURLY BRACES}` = a blank only you (Ruby) can fill.
`{VERIFY}` = a real, sourced stat — but re-check the link before publishing.

---

## ⚠️ READ THIS BEFORE ANYTHING ELSE — TWO DECISIONS TO MAKE

**Decision 1 — The narrative framing.**
ShadeMatch didn't happen in research → design → build order. You built it with AI first, and the product thinking came after. I've written this blueprint to tell that story honestly, because:

- A fabricated linear narrative is the easiest thing in the world for an interviewer to break. "Tell me about the interviews you ran" and it collapses.
- "I built a product without product thinking, then went back and interrogated it" is a *more* interesting case study in 2026, not a weaker one. Half the industry is shipping AI-generated products right now and almost nobody is writing honestly about what that does to the thinking.
- It lets you demonstrate product judgment on a live specimen — including finding real flaws in your own work — which is harder and more convincing than describing a process.

If you'd rather have the conventional linear version, see the Appendix — I've noted exactly which sections to reorder and reword. But I'd push for this one.

**Decision 2 — This conflicts with your Socratic exercise, and you should know that.**
You set up a coaching skill specifically so you'd build the product-thinking muscle yourself on this exact app. I've now written a lot of that thinking for you. That's what you asked for, so here it is — but two things:

1. Everything in Sections 1–5 and 9 is **scaffolding, not an answer.** Run those stages through the Socratic exercise and replace my reasoning with yours where they differ. An interviewer will ask you to defend every scope call in here, live, without the doc.
2. Where I've made a judgment call you might disagree with, I've marked it `[YOUR CALL]`. Those are the ones worth arguing with.

---

## GLOBAL BUILD NOTES

`[GLOBAL: Single scrolling page. Max content width 1100px, centered, full-bleed bands between major sections.]`
`[COLOR — important for this project specifically: the app's theme is purple #6C3CE0. Do NOT flood the case study page in purple. Use a near-neutral page (warm off-white or near-black) and let #6C3CE0 be the single accent — stat numbers, active states, selected iteration, links. A case study about colour judgment that has bad colour judgment is a self-own.]`
`[This project is inherently visual — colour swatches, palettes, outfit photos. Use that. Where the LinkedIn case study used stat blocks, this one can use colour chips and palette strips as visual punctuation. But keep them functional, never decorative.]`
`[Typography: one display face for H1–H3, one neutral sans for body. Body 17–18px, line-height 1.65, measure capped at 68 characters.]`
`[Section rhythm: eyebrow label (small caps, letter-spaced, muted) → H2 → optional one-line deck → content. 120px desktop / 64px mobile vertical padding.]`
`[Sticky TOC rail on desktop, top progress bar on mobile.]`
`[The app is a mobile-first PWA. Every product screenshot should be shown in a phone frame, not a desktop browser frame. Do not show it in a laptop mockup — it misrepresents the product.]`
`[Images: 12px radius, soft shadow, caption in small muted text beneath. Captions are written out in this doc — use them.]`
`[Scroll reveal: subtle fade-up, 300ms, once. No parallax.]`

---

# 0. HERO

**Eyebrow:** ShadeMatch · Product Design Case Study · 2026

**H1:** I built the product first. Then I found out what it was for.

**Sub-headline:** ShadeMatch is an AI outfit colour matcher I generated end-to-end without a single product decision behind it. This is what happened when I went back and interrogated it like a product designer — and what I'd cut.

**Meta row:**
- **Role** — Product Designer (solo: problem framing, research, IA, interaction, visual)
- **Timeline** — {X weeks}
- **Type** — Self-initiated · Live at redux-ready-shadematch.onrender.com
- **Tools** — Figma, AI-assisted build, community research, App Store review mining

`[HERO LAYOUT: Full viewport on desktop. Left column (52%) = eyebrow, H1, sub-headline, meta row in a 2×2 grid. Right column (48%) = the live app in a phone frame, showing the colour-match results screen — the most visually distinctive screen in the product.]`
`[H1 at 60–76px desktop, 34px mobile. Let it break onto two lines after "first."]`
`[Add a live link button: "View the live app →" — this is a real, running product and that's an asset. Make it prominent.]`
`[Optional and strong: a thin horizontal strip of colour swatches running beneath the hero, edge to edge, as a visual signature for the case study. Pull the actual colours the app generates.]`

---

# 1. PROBLEM

**Eyebrow:** 01 — The Problem

**H2:** A full wardrobe and nothing to wear is not a joke. It's a design failure.

**Body:**
People own far more clothing than they wear, and the reason isn't that they bought badly. It's that they can't see the combinations. An item sits unworn not because it's disliked but because nothing in the wardrobe has been identified as its partner — and identifying that partner takes a skill most people were never taught and don't believe they have.

The cost is daily, small, and relentless. It's eight minutes every morning that feel like forty. It's the same five outfits on rotation while 80% of the wardrobe stays folded. It's buying a new top because the one you own "doesn't go with anything," which is almost never true — it's just unproven.

**Stat block (5 stats):**

| Stat | Label |
|---|---|
| 82% | of the average wardrobe goes unworn — US figure, from a 20-country study of 18,000 households {VERIFY} |
| 26% vs 88% | what people *estimate* is unworn versus what actually is. The gap is the real problem. {VERIFY} |
| 5 months | of a working life spent deciding what to wear — roughly an hour a week {VERIFY} |
| 45% | of people find deciding what to wear for work actively stressful {VERIFY} |
| 20–40% | online apparel return rate, against a ~20% ecommerce average {VERIFY} |

`[STAT BLOCK LAYOUT: Editorial data spread, not cards. Row of 5 on wide desktop, 3+2 on tablet, stacked on mobile. Huge accent-colored number, hairline rule beneath, 14px muted label. Count-up on scroll.]`
`[The "26% vs 88%" stat needs special treatment — render it as two numbers with a "vs" between them, the 26% muted/small and the 88% large/accent. The visual gap between them IS the insight. This is your best single graphic in the section.]`

### The insight that reframes it

The most useful number here isn't 82%. It's the gap.

When Movinga surveyed 18,000 households, people estimated about a quarter of their wardrobe went unworn. The real figure in some countries was closer to nine-tenths. People are not walking around aware of this problem and looking for a solution. They have absorbed it as a personality trait — *I'm just bad at clothes* — rather than a solvable information problem.

That has a hard product consequence, and it's the one that shapes everything downstream: **nobody is searching for this app.** There is no query for "help me see what goes with my green shirt." The product cannot rely on intent-driven discovery. It has to prove its value inside the first thirty seconds of the first session, before the user has consciously agreed that they have a problem.

`[LAYOUT: Inset panel, 3px accent left border, tinted background, 32px padding. Bold the final sentence — it's the constraint that justifies half the design decisions later, and you'll want to point back at it.]`

**Pull quote:**
> "I have like forty shirts and I wear four. I don't know what to do with the rest of them so I just don't."
> — r/femalefashionadvice, 2025 {VERIFY — replace with a real quote you find}

`[PULL QUOTE: Full-width tinted band, 28–32px text, max-width 800px centered, attribution right-aligned beneath. 100px vertical padding.]`

### What ShadeMatch was, before any of this

I built ShadeMatch entirely through AI generation. Photograph a piece of clothing, and it returns colour combinations that work with it, a filter, shopping links to Amazon, Myntra and Flipkart, and a Pinterest button that opens a search for the combination.

It works. It's live. And when I sat down to write this case study I realised I could not answer a single one of these questions about it:

- Who is this for, specifically?
- What is the moment they'd open it?
- Why would they open it a second time?
- Which of these five features is the product, and which are decoration?
- What would I cut?

Every one of those has an answer now. None of them had an answer when I built it.

`[LAYOUT: The five questions as a vertical list, each with a large muted "?" or an unchecked-box indicator. Then the closing two lines beneath, full width, in slightly larger type.]`
`[This block is the thesis of the case study. Give it space and don't dress it up — the plainness is the point.]`

### The brief I wrote for myself, after the fact

Help people wear more of what they already own, by removing the single decision that stops them — *what goes with this?* — in the moment they're standing in front of their wardrobe, in under thirty seconds, with no setup.

Success is not engagement. Success is a garment leaving the shelf.

`[LAYOUT: Inset panel matching the "insight" block above, so the two read as a pair. The final line on its own, bold.]`

---

# 2. SOLUTION

`[Answer-up-front summary. Keep it visual and short — the reasoning is in Sections 6 and 8.]`

**Eyebrow:** 02 — The Solution

**H2:** One item in. A wearable answer out. No setup.

**Body:**
The scoped product does one thing: you photograph a single garment you own, and it tells you what colours in your wardrobe will work with it — instantly, with no account, no wardrobe upload, no onboarding.

Everything else the original build did was either supporting that job or competing with it. Sorting out which was which was the entire design exercise.

**Three feature sets — what survived:**

**01 — Single-item capture**
Photograph one garment. That's the whole input. No wardrobe digitisation, no tagging, no account. The lowest-effort entry point in the category, and the thing that makes a first session possible for someone who hasn't agreed they have a problem yet.

**02 — Explained colour matches**
The app returns palettes that work with the detected colour — and, critically, says *why* in one line. A recommendation the user doesn't understand is a recommendation they can't reuse tomorrow without opening the app again.

**03 — Visualise before you commit**
The Pinterest deep-link answers the question a colour swatch can't: *but what does that actually look like on a person?* It's the cheapest possible way to close the gap between an abstract palette and a real outfit.

**And the big cut:**

**Marketplace links — removed from the core flow.**
Amazon, Myntra and Flipkart links were the first thing the original build showed alongside a result. They are now gone from the primary path. The reasoning is in Section 6, and it's the most important decision in this case study.

`[SOLUTION LAYOUT: Full-width hero shot of the redesigned core screen directly under the H2. Then the three surviving features as a 3-column row on desktop (stacked mobile) — large "01" numeral in accent at low opacity, bold title, 2 lines of body.]`
`[Then the "big cut" as a visually distinct full-width block — muted/desaturated background, a strikethrough or "removed" treatment on the heading. It should feel like a different kind of statement than the three above it. Link it to Section 6.]`
`[If you can record a 6-second screen capture of photo → result, put it here, autoplay muted loop. It's the fastest possible proof the product works.]`

---

# 3. RESEARCH — COMPETITIVE ANALYSIS

**Eyebrow:** 03 — Research / Competitive Analysis

**H2:** Everything either costs too much to start, or shows you clothes you don't own.

**Body:**
There is no shortage of products in this space. What there is, is a shortage of products that answer the question at the moment it's actually asked. I mapped five categories of alternative — including the one most people actually use, which is no product at all.

`[COMPETITOR BLOCK PATTERN — repeat 5×, alternating image side:]`
`[LEFT (40%): screenshot of that tool. Rounded corners, shadow, caption beneath.]`
`[RIGHT (60%): letter badge (A–E) in a small circle → category title as H3 → "What works" → "The gap" in an accent-bordered tinted callout → one-line verdict in small caps letter-spaced muted.]`

### A. Wardrobe apps — Whering, Acloset, Indyx, Stylebook

**What works:** These are the most complete answer to the problem that exists. Digitise your wardrobe, and the app can generate full outfits from things you genuinely own, track wear frequency, and plan ahead. When someone sticks with one, it works.

**The gap:** The setup cost is enormous and front-loaded. Photographing, cropping and tagging fifty to two hundred garments is hours of labour demanded *before* the product delivers anything at all. Read the two- and three-star reviews and the pattern is identical across every app in the category: people describe loving the idea, uploading twenty items, and never opening it again. The product asks for the largest possible commitment from a user who hasn't yet been shown a single moment of value.

**Verdict:** Highest ceiling in the category. Highest wall in front of it.

`[Screenshot caption: "The digitisation wall — hours of upload demanded before the first useful output."]`
`[If you mine App Store reviews for this, screenshot 3–4 actual reviews describing abandonment and show them as a small stacked cluster. Real review text is more persuasive than a description of it.]`

### B. Pinterest

**What works:** Unmatched for inspiration and for answering "what does this combination look like on a real person." It's the visual reference layer nothing else provides.

**The gap:** Everything on Pinterest is a garment you don't own. It answers *what looks good* and never *what you can wear tonight.* The distance between a saved pin and an actual outfit is exactly the distance ShadeMatch is trying to close. Pinterest is a complement, not a competitor — which is why the redesigned product links out to it rather than trying to replace it.

**Verdict:** Perfect at inspiration. Structurally incapable of personalisation.

`[Screenshot caption: "Aspiration without ownership. Beautiful, and unwearable."]`

### C. Marketplace styling — Myntra "Complete the Look", Amazon "Style with"

**What works:** These are genuinely good recommendations, well-merchandised, and shown at the exact moment a user is receptive.

**The gap:** Every recommendation is an item for sale. The engine is not answering *what goes with this* — it's answering *what else can we sell this person*, and the two only coincide by accident. Users know this. A styling recommendation attached to a buy button carries a permanent trust discount, and no amount of accuracy removes it.

**Verdict:** Advice with a commercial motive is advertising.

`[Screenshot caption: "A recommendation you can't fully trust, because you know what it's for."]`

### D. General AI chat — ChatGPT, Gemini with a photo

**What works:** Free, immediate, surprisingly capable. Upload a photo of a shirt and ask what goes with it, and you get a reasonable answer. This is the strongest competitor in the category and the least discussed one.

**The gap:** Nothing persists. No memory of your wardrobe, no record of what you asked yesterday, no visual output — just text. It also requires the user to already know they can ask, and to phrase it well. It's a capable tool with no product around it.

**Verdict:** Capable, generic, forgettable. The bar ShadeMatch has to clear.

`[Screenshot caption: "The real competitor. Free, decent, and gone the moment you close the tab."]`
`[IMPORTANT: naming a general AI chatbot as your toughest competitor — rather than pretending the incumbents are — signals that you assessed the landscape honestly. Do not cut this block.]`

### E. The actual status quo — a mirror, a friend, and giving up

**What works:** Free, instant, requires no download. Holding two items up together and squinting is what almost everyone actually does, and for confident dressers it's sufficient.

**The gap:** It doesn't scale past the items you can physically hold, it depends on confidence the user may not have, and it fails at exactly the moment it matters — when you're unsure. "Ask a friend with good taste" is the most-used feature in this category and it isn't available at 8am on a Tuesday.

**Verdict:** The default. Free, fast, and unreliable precisely when you need it.

`[Screenshot caption: "The most-used competitor in the category has no interface."]`

### What this told me

The landscape splits cleanly along one axis: **setup cost.** Wardrobe apps demand everything upfront and deliver the best answer. Pinterest and marketplaces demand nothing and deliver an answer about clothes you don't own. AI chat demands nothing and delivers nothing durable.

Nobody occupies the space of *near-zero setup, answer about what you already have.* That is a real position, and it's the one ShadeMatch stumbled into by accident — because it only ever asked for one photo.

The build got the entry point right for the wrong reason. The design work was figuring out what else had to be true for that to matter.

`[SYNTHESIS: 2×2 positioning matrix. X-axis "Zero setup ← → High setup". Y-axis "Clothes you don't own ← → Clothes you own". Plot: Pinterest and marketplaces bottom-left, AI chat bottom-left, wardrobe apps top-right, mirror-and-friend bottom-left-ish. ShadeMatch alone in the TOP-LEFT quadrant (zero setup + clothes you own), in accent color, larger dot.]`
`[Label the empty top-left quadrant explicitly on the chart — something like "unoccupied." An empty quadrant with your product in it is the single most screenshot-able asset in the case study.]`
`[The closing two lines beneath the matrix, centered, max-width 700px. That final paragraph — "right for the wrong reason" — is the most quotable line in the case study. Set it slightly larger.]`

---

# 4. RESEARCH — INTERVIEWS & AFFINITY MAPPING

**Eyebrow:** 04 — Research / Voices

**H2:** I couldn't run a study. So I read the reviews of every app that failed at this.

### Method, and its limits

No formal interviews, no recruited panel — the honest constraint of a self-initiated project. What I did instead had two halves:

**Community research.** Threads across r/femalefashionadvice, r/malefashionadvice, r/findfashion and Indian fashion communities, {2024–2026}, read for how people describe the *specific* moment of not knowing what goes with something.

**Review mining.** This turned out to be the more valuable half. I read the two- and three-star App Store and Play Store reviews of every wardrobe app in the category — Whering, Acloset, Indyx, Stylebook. One- and five-star reviews are mostly noise. The middle band is where people explain, in detail and unprompted, exactly what made them stop using a product they wanted to like. That is churn research, written by the churned, for free.

**What it gave me:** unprompted honesty at volume, and — through review mining — direct evidence about the failure mode of the closest competitors, which I could never have obtained by interviewing my own users.

**What it cost me:** no follow-up questions, no ability to probe a contradiction, and a self-selection skew toward people motivated enough to write publicly. I have no data on the quiet majority who downloaded a wardrobe app, used it happily, and never posted about it.

`[METHOD LAYOUT: Two-column "gave me / cost me" comparison, equal width, vertical hairline between. Plus/minus indicators at the top of each. Stack on mobile.]`
`[Add a small pull-out callout for the review-mining method specifically — "Two- and three-star reviews are churn research written by the churned." It's a genuinely reusable research insight and it makes you look like someone who finds signal where others don't.]`

### Affinity mapping

I clustered {N} individual quotes in Figma by the underlying unmet need rather than by topic. Three clusters emerged and held.

`[AFFINITY BOARD IMAGE: Full-width shot of the real Figma board. Do not clean it up or recreate it neatly — visible mess is the proof. Caption: "{N} quotes from community threads and App Store reviews, clustered by unmet need."]`
`[Click-to-lightbox for full-size viewing.]`

**Cluster 1 — "I don't trust my own eye."**

*The signal:* The dominant emotion isn't confusion, it's self-doubt. People don't describe a lack of information; they describe a lack of a skill they believe other people have and they don't. Several described owning items they liked, in isolation, that they had never once worn.

*Representative voices:*
> "I can tell when an outfit looks good on someone else. I cannot do it on myself, at all."
> "I bought a mustard shirt because it looked great in the store. It has been in my cupboard for two years."
> "Is navy and black okay? I've been told both things. I just avoid both now."

*The unmet need:* **A second opinion with a reason attached.** Not a verdict — an explanation they can carry forward.

**Cluster 2 — "The setup costs more than the problem."**

*The signal:* This cluster came almost entirely from review mining, and it's the most actionable finding in the project. People describe genuine enthusiasm followed by abandonment at a consistent point — somewhere between fifteen and thirty uploaded items, always before the app has produced anything useful.

*Representative voices:*
> "Great idea. I uploaded about twenty things and then realised I had maybe a hundred and eighty to go."
> "I spent a whole Sunday photographing my clothes and then never opened it again."
> "Why do I have to teach the app my entire wardrobe before it tells me anything?"

*The unmet need:* **Value before commitment.** The product must be useful at item one, not item one hundred.

`[★ Key insight badge on this cluster — it's the one that determines the entire product architecture.]`

**Cluster 3 — "Everything is trying to sell me something."**

*The signal:* A consistent, weary suspicion of styling advice attached to commerce. People describe discounting recommendations automatically when a buy button is present — not because the recommendation is wrong, but because they can't tell whether it's for them or for the retailer.

*Representative voices:*
> "Every 'you might also like' is just 'please spend more money.'"
> "I want to know what goes with what I have. Not what to buy."
> "If it's got an affiliate link I assume it's an ad, sorry."

*The unmet need:* **Advice with no motive.** The recommendation has to be visibly disinterested to be usable.

`[★ Second key insight badge. This cluster directly contradicts a decision in the original build — the marketplace links — and that collision is the most valuable moment in the case study. Flag it visually so nobody misses it.]`

`[CLUSTER LAYOUT: Three stacked blocks, numbered, each with a distinct subtle background tint. Inside: "The signal" paragraph → quote cards stacked vertically (small, left accent border) → "The unmet need" as a bold highlighted callout at the bottom.]`

### The three findings that broke the original build

**Finding 1 — Nobody is looking for this product.**
82% of the average wardrobe goes unworn, but people estimate the figure at around 26%. They don't experience this as a problem with a solution; they experience it as a fact about themselves. Nothing in the funnel can assume intent. {VERIFY — Movinga, 2018}

**Finding 2 — Setup cost is the category's cause of death.**
Every serious competitor loses users at the same place: the digitisation wall. The single most valuable property ShadeMatch already had — one photo, no account — was the one I'd never identified as a decision. It was an accident that happened to be the moat.

**Finding 3 — Commerce contaminates advice.**
Users apply an automatic trust discount to any recommendation adjacent to a buy button. The original build put Amazon, Myntra and Flipkart links directly beside every result. I had, without thinking about it, attached a motive to the one thing that only works without one.

`[FINDINGS LAYOUT: Three cards in a row on desktop, stacked mobile. Bold headline, body, source line in 12px muted italic beneath a hairline. Equal height, light border, no heavy shadow.]`
`[Finding 3's card should carry a small warning-toned indicator — it's the one that indicts the existing product.]`

### The business case

`[Distinct background band — this section signals business literacy, which is what separates a product design case study from a UI case study.]`

India's fashion e-commerce market was worth roughly **$25.6B in 2025**, with apparel at **54%** of it and Myntra alone at about **$12.5B GMV**. {VERIFY} It is not a small pond, and there is obvious money in sending qualified traffic into it.

That's exactly the trap. Affiliate revenue is the fastest monetisation path available to a product like this, and taking it early destroys the asset that makes the product worth using. A styling engine that is trusted can eventually monetise almost any way it likes — subscription, brand partnership, retailer licensing. A styling engine that is *suspected* has no second act.

There's also a defensible commercial argument on the retailer's own side. Apparel returns run **20–40% online against a ~20% ecommerce average**, and fit and sizing drives about **half** of them. {VERIFY} A meaningful share of the remainder is the other failure — the item arrived, it was fine, and it went with nothing the buyer owned. A tool that tells someone what they can actually wear a garment with is a returns-reduction tool wearing a styling app's clothes, and that is a far stronger pitch to a retailer than affiliate clicks.

**Sequencing, stated plainly:** earn trust with disinterested advice first. Monetise the trust second. Never the reverse.

`[MARKET LAYOUT: Three stats in a horizontal row ($25.6B / 54% / 20–40%), then the two paragraphs beneath, then the "sequencing" line as a full-width bold statement with a top hairline. That last line is the business thesis — set it apart.]`

---

# 5. RESEARCH — PERSONAS

**Eyebrow:** 05 — Research / Personas

**H2:** Two people. One wardrobe problem, arrived at from opposite directions.

**Body:**
The clusters resolved into two people. One owns too much and wears too little. The other keeps buying to solve a problem that buying can't solve. They meet at the same moment — standing in front of a cupboard, holding one item, stuck.

`[PERSONA LAYOUT — follow closely:]`
`[Two persona cards, side by side, horizontally centered, EQUAL WIDTH (~48% each, 4% gap), EQUAL HEIGHT, VERTICAL orientation (taller than wide, roughly 3:4).]`
`[Card structure top to bottom:]`
`[  1. Circular photo/avatar, 120px, centered.]`
`[  2. Name, bold H3, centered.]`
`[  3. Role + age + city on one line, 14px muted, centered.]`
`[  4. The persona quote, italic, centered, 18px, in quote marks, 24px margin top and bottom.]`
`[  5. Left-aligned labelled sections in order: Context · Goals · Frustrations · Behaviours · What she/he needs. Label in small-caps accent, bulleted content beneath.]`
`[  6. Bottom row: "Maps to" — affinity cluster chips.]`
`[Card styling: white bg, 1px light border, 16px radius, 32px padding, subtle shadow. Stack full-width on mobile.]`
`[PRIMARY badge in accent on card 1, muted SECONDARY badge on card 2. The asymmetry is the point — it shows prioritisation.]`
`[NICE TOUCH for this project specifically: give each persona card a small 4-swatch colour strip along the top edge, drawn from their described wardrobe palette. It's on-theme without being decorative.]`

### PERSONA 1 — PRIMARY

**Aditi Sharma**
Consultant, 26 · Bengaluru · Owns ~120 garments, wears about 15

> "I can tell when someone else looks good. I have never been able to do it for myself."

**Context**
- Four years into a corporate job with a soft dress code, which is harder than a strict one
- Buys online regularly — Myntra, Zara, a few Instagram brands
- Wardrobe has accumulated rather than been assembled; no organising logic
- Gets dressed in a 10-minute window before leaving, most mornings running late

**Goals**
- Look put-together without spending time or thought on it
- Wear the things she liked enough to buy and has never worn
- Stop buying replacements for problems she already owns the solution to

**Frustrations**
- Owns items she loves in isolation and has never once worn
- Defaults to the same five safe outfits and is bored of all of them
- Has downloaded a wardrobe app, uploaded about twenty items, and abandoned it
- Doesn't trust her own colour judgement and doesn't trust advice that's selling her something

**Behaviours**
- Decides in front of the open cupboard, holding one item, in under two minutes
- Sends photos to one friend with good taste when genuinely stuck
- Saves Pinterest outfits she never recreates because she doesn't own the pieces
- Shops when stuck, which is why she owns 120 garments and wears 15

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
- Would never describe himself as someone who "cares about fashion", but does

**Goals**
- Stop wasting money on items that end up unworn
- Reduce returns, which he finds tedious rather than free
- Look deliberate without having to develop an interest in clothes

**Frustrations**
- Buys individual items with no plan for what they pair with
- Marketplace "complete the look" suggestions are transparently commercial and he ignores them
- Has no way to check a purchase against what he already owns
- His fix for "nothing goes together" is buying more, which makes it worse

**Behaviours**
- Decides at the point of purchase more than at the point of dressing
- Sorts by rating and buys the safe option, usually navy, black or white
- Has never photographed his wardrobe and never will
- Would use a tool once at checkout, not daily

**What he needs**
- A pre-purchase check: does this work with what I own?
- Confidence at the point of spending
- Something that takes seconds, because he will not invest more than that

**Maps to:** Cluster 1 · Cluster 3

### Why Aditi is primary — and why this was the hard call

`[YOUR CALL — this is the most contestable decision in the case study. An interviewer may well push on it. Make sure you can defend it in your own words, and change it if you don't agree.]`

Rohan is, on the face of it, the more commercially attractive user. He's at the point of purchase, he's already spending, and he's one click from an affiliate link. Designing for him monetises immediately.

I prioritised Aditi anyway, for three reasons.

**Frequency.** Aditi has the problem every morning. Rohan has it when he shops. A daily problem builds a habit; an occasional one builds a bookmark.

**Trust.** Designing for Rohan pulls the product toward commerce, and Cluster 3 says commerce is exactly what makes styling advice unusable. Optimising for the buying moment would have degraded the thing that makes the product work at all.

**Coverage.** Aditi's needs contain most of Rohan's. If the product can answer "what goes with this thing I own," it can answer "what would go with this thing I'm about to buy" with almost no additional design. The reverse isn't true — a purchase-time tool has nothing useful to say at 8am on a Tuesday.

Aditi became the design target. Rohan became the expansion case — deliberately not designed for now, deliberately not designed *against*.

`[LAYOUT: Full-width beneath the two cards, max-width 800px, centered, top hairline. Present the three reasons as a numbered list with the bolded lead word in accent color. This paragraph is doing more work than any other in the section — it's the difference between "I made two personas" and "I made a prioritisation decision and can defend it."]`

### Redefined challenge

The original build treated this as a colour problem and solved it with a colour algorithm. The research says it isn't a colour problem. It's a **confidence** problem with a colour-shaped surface — and confidence is not restored by an answer, it's restored by an answer you understand.

**How might we** help people wear more of what they already own, by giving them a trustworthy, instantly-available second opinion on a single garment — one that explains its reasoning, requires no setup, and has nothing to sell them?

**Built for** the moment of getting dressed, holding one item. **Not for** wardrobe management, shopping, or building a styling habit.

`[HMW LAYOUT: Full-bleed inverted band (near-black or deep purple). HMW statement at 28–32px, max-width 900px centered, "How might we" in lighter weight. "Built for / Not for" beneath as two chips — solid accent, and muted struck-through. This is the pivot of the case study; make it feel like one.]`

---

# 6. DESIGN — IDEATION, SKETCHES & WIREFRAMES

**Eyebrow:** 06 — Design / Ideation

**H2:** The hardest part was subtraction.

**Body:**
Most design projects start empty and add. This one started full. ShadeMatch already did five things, and the ideation work was almost entirely deciding which of them were the product and which were noise wearing a feature's clothes.

### The three questions everything had to pass

**1. Does this serve the moment of getting dressed?**
Not the moment of shopping, not the moment of browsing. If a feature's best use case was "while browsing Myntra," it was out of the core, regardless of how well it worked.

**2. Does it cost the user anything before it gives them something?**
Cluster 2 killed the category through setup cost. Any feature that added upfront work — accounts, wardrobe uploads, preference quizzes, onboarding — was out unless it earned its cost inside the same session.

**3. Does it survive the trust test?**
Would Aditi believe this recommendation if she knew exactly how the product made money? If the honest answer was no, the feature was damaging the product even while working correctly.

`[LAYOUT: Three numbered items, horizontal row on desktop with the numeral large in accent above each. Stack on mobile.]`

### Auditing what I'd already built

`[This table is the spine of the section. It's an honest audit of your own AI-generated product, feature by feature. It's also the most unusual and most memorable thing in the case study — very few portfolios contain a designer marking their own work down.]`

| Feature, as built | Verdict | Reasoning |
|---|---|---|
| Photo capture of a single garment | **Core — keep** | Accidentally the strongest thing in the product. Near-zero setup is the entire competitive position, and I'd built it without knowing that. |
| Colour combination suggestions | **Core — keep, but rebuild the output** | Right feature, wrong presentation. It returned colours without reasons, which answers the question once instead of teaching the user to answer it themselves. |
| "Main movement" filter | **Cut or rename — {see note}** | Fails question 1 on naming alone. No user standing at a wardrobe knows what "main movement" means, and a filter nobody understands is a filter nobody uses. |
| Amazon / Myntra / Flipkart links | **Cut from core flow** | Fails question 3 outright. Attaches a commercial motive to advice that only works without one. This was the single most consequential cut. |
| Pinterest deep-link | **Keep — promote it** | Underrated in the original build. It's the only thing answering "what does this actually look like on a person," which is the question a colour swatch structurally cannot answer. |

`[TABLE LAYOUT: Three columns. Style the "Verdict" column with color-coded chips — accent for "keep", muted/warning for "cut", intermediate for "rename". Left column in medium weight, right column regular and muted. On mobile, convert to stacked cards with the feature as the title and a prominent verdict chip.]`

`[NOTE FOR RUBY re: "main movement" — I don't know what this filter actually does in your build; describe it in the blank below. But whatever it does, the name is a real problem and worth keeping as a finding. If it filters by the dominant/anchor colour, "Main colour" is the honest name. Two design-thinking points to make here if it fits: (a) internal names leak into UI when nobody is checking, and AI-generated builds leak them constantly because there's no one in the loop asking "would a user say this?"; (b) it's a good, small, concrete example of what's missing when you build without product thinking. Fill in: {what the filter actually does} and {what you renamed it to}.]`

### Why cutting the marketplace links was the right call

`[Give this its own visually distinct block. It's the strongest single piece of reasoning in the case study and it should not be buried inside the table.]`

This was the decision I argued with myself about most, so here's the full reasoning.

**The case for keeping them:** they're the only revenue in the product. India's fashion e-commerce market is ~$25.6B and affiliate programmes are trivially easy to join. {VERIFY} They also occasionally *are* useful — sometimes the honest answer is that you don't own anything that works.

**The case for cutting them, which won:**

Cluster 3 is unambiguous — users apply an automatic trust discount to any styling advice sitting next to a buy button, and that discount doesn't depend on whether the advice is good. Trust in this product isn't a nice-to-have; it *is* the product. Aditi's stated need is a second opinion she can believe, and the entire reason she'd choose this over Myntra's "Complete the Look" is the absence of a motive.

There's a compounding problem too. The moment revenue depends on outbound clicks, every future design decision gets a thumb on the scale. The recommendation that earns nothing starts losing to the recommendation that earns something, slowly, in ways nobody explicitly decides. Cutting the links at this stage isn't just protecting the current experience — it's removing a pressure that would have bent every subsequent decision.

**Where they went instead:** a secondary path, entered deliberately. When a user's own wardrobe genuinely doesn't contain a match, *then* the option to look at what does exist commercially is a service rather than an ad — because the user asked for it. Same feature. Completely different meaning, determined entirely by who initiated it.

**The general principle:** the same feature can be helpful or manipulative depending only on who started the interaction. That distinction was invisible to me when I built this, and it's the thing I'd now check first.

`[LAYOUT: Inset panel with accent left border. Structure the "case for / case against" as a genuine two-sided comparison — the strength of this passage is that you steelmanned the option you rejected. Bold the final principle line and consider setting it as a pull quote.]`

### What got cut, and what never made it in

| Idea | Why it didn't survive |
|---|---|
| Full wardrobe upload and outfit generation | The category's cause of death. Would have converted the product's one advantage into its competitors' one weakness. |
| Account and login before first use | Fails question 2. Value has to arrive before commitment, not after. |
| Style quiz onboarding | Six taps before a single useful output, for a user who hasn't agreed she has a problem. Every tap here is a leak. |
| Social feed / share your outfit | Solves a problem Aditi doesn't have. She isn't short of inspiration, she's short of confidence about her own cupboard. |
| Skin-tone-based colour analysis | Genuinely valuable and genuinely a different product. Requires accuracy I can't validate and carries real harm risk if wrong. Deferred, not cut. |
| Occasion filter (work / casual / evening) | Good idea, adds a decision to a flow whose whole promise is removing one. v2. |

`[LAYOUT: Two columns, hairline rules. Left column at 60% opacity or struck through. Add a "→ deferred, not cut" tag in a different color on the last two rows.]`
`[This table earns its space — showing what you rejected and why is stronger evidence of judgment than showing what you shipped.]`

### Sketches

I sketched on paper before touching Figma — deliberately, and in the wrong order relative to the build, which is the whole story of this project. These are the raw pages.

`[SKETCH GALLERY: Ruby's notebook photos. 3-column masonry desktop, 2 tablet, 1 mobile. Process for consistency — contrast up, slightly desaturated — but DO NOT clean up, straighten, or vectorise. Paper texture and crossings-out are the evidence.]`
`[Click-to-lightbox at full size. Captions matter more than the sketches — they're where the thinking shows.]`

**Suggested captions — match to whichever sketch fits, delete the rest:**
- "First pass at the result screen. The question that kept coming back: is the output a colour, or an instruction?"
- "Working out how much to show. Three suggestions or twelve? Twelve is more impressive and less useful — same mistake as a chart instead of a number."
- "Where the 'why' line came from. A palette without a reason gets used once. A palette with a reason gets remembered."
- "Trying to place the Pinterest link so it reads as 'see it' rather than 'leave.'"
- "Capture screen. How few taps between opening the app and having an answer — the number I kept trying to get to two."
- "The empty state. Sketched late and became one of the most important screens in the product."

**Body beneath the gallery:**

Three things came out of sketching that the build had skipped entirely.

**The output changed from a colour to an instruction.** The original returned swatches. A swatch is data; it puts the interpretation work back on a user who has just told us she doesn't trust her interpretation. The sketches moved toward stating the recommendation in words with the colour supporting it, rather than the reverse.

**The count came down.** Early sketches showed a full palette — eight, ten, twelve options. It looked far more impressive and was far less usable. Aditi has a two-minute window and low confidence; twelve options is a second decision problem handed to someone who came here to escape the first one. Three, ranked, with reasons.

**The empty state became a real screen.** What happens when the answer is "nothing you own works with this"? The build had no answer, and it's not an edge case — for an accumulated, unplanned wardrobe it might be the most common outcome. It's also the only place a shopping link is genuinely a service. Designing that screen properly is what turned the marketplace links from a contaminant into a feature.

### Wireframes

`[NOTE FOR RUBY — you likely don't have formal wireframes for this either. Same two options as the LinkedIn case study:]`
`[OPTION A (recommended): retitle this "From sketch to structure" and show 2–3 greyscale Figma frames if you have early ones. If not, cut the sub-section entirely and go straight to Main Flow. Nobody penalises a missing wireframe stage on a self-initiated project.]`
`[OPTION B: spend 30 minutes making 3 greyscale frames from the sketches — capture, result, empty state. Small effort, visible completeness gain, and honestly labelled as "structure before visual design."]`
`[Do NOT fabricate a stage that didn't happen.]`

**Copy if using A or B:**
The sketches settled what was on each screen. Greyscale settled the hierarchy — which is a harder question in this product than most, because the content *is* colour. Working without colour forced the layout to hold up on structure alone, so that when the palettes went in they'd read as content rather than decoration.

The order I landed on: **the recommendation first**, stated in words. **The colour second**, supporting it. **The visualisation third.** That order is the argument of the product — this is a confidence tool that uses colour, not a colour tool.

---

# 7. DESIGN — USER FEEDBACK & REVISED DESIGN GOALS

**Eyebrow:** 07 — Design / Feedback

**H2:** Testing a product that already exists is a cheat code.

**Body:**
ShadeMatch had one enormous advantage over a concept project: it was live, and people could actually use it. So the feedback here is on real interactions with a real product, not reactions to a prototype.

`[NOTE FOR RUBY: fill in what you actually did. Options, in descending order of credibility — use whichever is true, and say which:]`
`[  (a) You sent the live link to {N} people and watched or asked them afterward → strongest, use this if true]`
`[  (b) You ran an AI-assisted persona test, as with the LinkedIn project → fine, disclose it as a proxy]`
`[  (c) Neither yet → then retitle this section "How I'd test it" and write it as a plan. Honest and still valuable. Do not invent participants.]`
`[The findings below are written as (a). Adjust the framing if it's (b) or (c). The findings themselves are plausible for this product and worth testing for regardless — treat them as hypotheses if you haven't run it.]`

### Method

I sent the live link to {N} people matching Aditi's profile — {describe them}, all of whom own more clothes than they wear and none of whom work in design. I asked them to use it on something in their own wardrobe, then asked three questions:

1. **What did you expect it to do before you opened it?** — tests whether the value proposition survives contact.
2. **What did it tell you, in your own words?** — tests whether the output is comprehensible, not just correct.
3. **Would you actually wear that?** — tests the only thing that matters. Not "is it right" but "did it change what you did."

`[LAYOUT: Three numbered questions with the reasoning in muted text to the right. Two-column on desktop, stacked with italic reasoning on mobile.]`
`[Question 3 deserves a small highlight — "would you actually wear that" is the correct success question for this product and choosing it well is itself a demonstration of product thinking. The obvious question, "did you like the suggestions," measures nothing.]`

### What came back

**The core loop worked.** Photo in, answer out, understood without explanation. Nobody needed the product explained, which for a zero-onboarding product is the whole ballgame.

**Four friction points:**

**Friction 1 — "Okay, but why?"**
The most common reaction to a suggestion was not disagreement, it was a request for justification. People wanted to know *why* the combination worked — partly to trust it, partly to learn it. Without a reason, the app answers one question and the user is back tomorrow with the same one. Confidence doesn't transfer; a reason does.

**Friction 2 — Nobody knew what "main movement" meant.**
Not one person could guess what the filter did. Several didn't touch it. A control that has to be explained has already failed, and this one was pure build-artefact — a phrase that made sense somewhere inside the generation and was never checked against a human.

**Friction 3 — The shopping links changed how people read the whole app.**
This is the finding that confirmed Cluster 3 on a live product, and it was sharper than the research predicted. Once people noticed the Amazon and Myntra links, some re-read the *suggestions themselves* as advertising — retroactively discounting recommendations they'd accepted thirty seconds earlier. The links didn't just fail to add value. They devalued the output that was already working.

**Friction 4 — "But what does that look like?"**
A colour swatch, even a well-explained one, doesn't answer the question people are actually asking. The Pinterest deep-link — which I'd treated as a minor extra — was the thing several people reached for and the thing they described as most useful. I had the hierarchy backwards.

`[FRICTION LAYOUT: Four cards, number badge, bold headline, explanation beneath. Where possible, a cropped screenshot of the problem area with an accent-colored annotation. Friction 3 should get a warning-toned border — it's the one that invalidated an existing decision.]`

### Revised design goals

The testing didn't change what the product is. It changed four things about how it has to behave.

| Original goal | Revised goal | Trigger |
|---|---|---|
| Suggest colours that match | Suggest colours that match **and say why in one line** — every output must teach, not just answer | Friction 1 |
| Give the user control via filters | Give the user control **in language they already use** — no term that needs explaining survives | Friction 2 |
| Help users find matching items | Help users find matching items **they already own** — commerce only on user request, never volunteered | Friction 3 |
| Show the recommended combination | **Let them see it on a person** before committing — abstract palettes don't convert to worn outfits | Friction 4 |

`[TABLE LAYOUT: Three columns. Column 1 muted and struck through, column 2 full weight with bolded phrases in accent, column 3 small. → arrow between columns 1 and 2. On mobile stack as: original (small muted) → revised (prominent) → trigger (small italic).]`
`[This is the strongest evidence in the case study that testing changed the design. Make it visually prominent — it's the table a hiring manager will stop on.]`

---

# 8. DESIGN — MAIN FLOW

**Eyebrow:** 08 — Design / The Flow

**H2:** Two taps to an answer.

**Body:**
The entire product is one loop, and its quality is measured in how few steps it takes. Aditi is standing at a cupboard with about two minutes. Every screen between her and an answer is a place to lose her.

`[MAIN FLOW LAYOUT: Open with a horizontal flow diagram — 5 phone frames in a row connected by arrows, showing the complete loop at a glance. On mobile, this becomes a vertical stack or a horizontally-scrollable strip. This single graphic should let someone understand the whole product in five seconds.]`
`[Then each step below as an alternating full-width row: phone frame on one side, explanation on the other. Include an annotated crop for each key decision.]`

### Step 1 — Capture

**What happens:** The app opens directly to the camera. Not a home screen, not a login, not a splash. Point at a garment, tap once.

**The design decision:** No account, ever, until the user has a reason to want one. Every screen before the camera is a leak, and the users leaking out are exactly the ones who haven't yet agreed they have a problem. Opening straight to the camera is a statement: this product costs you nothing to try.

**What it's protecting:** the only structural advantage the product has over wardrobe apps — near-zero setup. That advantage is worth more than everything an account would enable.

`[Annotated crop: the camera-first launch. Label: "Zero screens before value."]`

### Step 2 — Detection

**What happens:** The garment's dominant colour is identified and shown back to the user, named — not just as a swatch, but as a word. "Rust orange." "Sage."

**The design decision:** Show the detection before the recommendation, and make it correctable. Two reasons. First, if the detection is wrong, everything downstream is wrong, and the user needs to see that before they've invested belief in a bad answer. Second — naming the colour is quietly the most educational moment in the product. A user who learns their shirt is "rust" rather than "orange-ish" has gained something they keep.

**What it's protecting:** trust. An AI product that shows its work when the work is cheap to show buys credibility for the moments when it can't.

`[Annotated crop: the detected colour chip with its name and the correction affordance. Label: "Show the input before the output."]`

### Step 3 — Recommendation

**What happens:** Three combinations, ranked, each one a sentence with colour supporting it — not a swatch grid. Each carries a one-line reason.

**The design decision — three, not twelve.** A full palette looks more capable and performs worse. The user came here because a decision was hard; returning twelve options hands the same problem back in a new wrapper. Three ranked options with reasons is a recommendation. Twelve is a colour picker.

**The design decision — the reason line is not optional.** This came directly from Friction 1 and it's the difference between a product used once and a product that compounds. An unexplained answer solves today. An explained one starts building the confidence that was the actual problem — and the honest long-term success state for this product is a user who needs it less over time.

`[Annotated crop: one recommendation card, showing the sentence, the colours, and the reason line. Label each part.]`
`[STRONG ADDITION: a small before/after here — the original build's swatch grid versus the redesigned recommendation card. The contrast makes the entire argument without a word of explanation.]`

### Step 4 — Visualise

**What happens:** One tap opens Pinterest, pre-searched for the specific combination, showing real people wearing it.

**The design decision — deep-link rather than build it.** Building outfit visualisation in-house would be the most expensive feature in the product by an order of magnitude, and Pinterest already does it better than a solo project ever could. Sending the user out is not a failure of ambition; it's an accurate read of where the value actually is. The product's job is the *decision*. Pinterest's job is the *picture*. Neither needs to do both.

**The risk, acknowledged:** this hands the user to another app at the moment of highest engagement, and some won't come back. That's a real cost. It's worth it, because the alternative is a worse answer to the question people most want answered — and a product that answers the wrong question well still loses.

`[Annotated crop: the Pinterest entry point. Label: "The cheapest possible answer to 'but what does it look like?'"]`
`[Showing that you considered and named the downside of your own decision is worth more here than the decision itself. Keep the "risk, acknowledged" paragraph.]`

### Step 5 — The empty state

**What happens:** When nothing in the user's own wardrobe works, the app says so plainly — and *then* offers the option to see what would.

**The design decision:** This is the only place commerce belongs, and it belongs here entirely. The user has been told the honest answer first — nothing you own works with this — and the shopping option arrives as a response to a problem they now have, not as an unprompted suggestion attached to advice.

**Why this matters more than it looks:** it's the same feature that was cut in Section 6, reinstated in a different position, and the meaning is completely different. Volunteered, it's an ad. Requested, it's a service. The feature didn't change. The initiator did.

`[Annotated crop: the empty state with the honest message and the secondary shopping affordance clearly subordinate in the visual hierarchy.]`
`[Consider a small side-by-side here: the original build (links shown always, alongside every result) versus the redesign (links only in the empty state). It closes the loop opened in Section 6 and it's the single clearest demonstration of judgment in the whole case study.]`

---

# 9. EVALUATION — MEASURING SUCCESS

**Eyebrow:** 09 — Evaluation / Measuring Success

**H2:** The metric that would have destroyed this product.

**Body:**
The easiest metric to instrument here is clicks to Amazon, Myntra and Flipkart. It's precise, it's attributable, it maps directly to revenue, and optimising for it would have systematically dismantled everything that makes the product work.

That's worth stating plainly, because it's the trap this product is built next to. Every incentive points at measuring commerce, and commerce is the thing the research says corrodes it.

`[LAYOUT: Full-width statement block, tinted background, larger type. This opening is the strongest framing in the section — lead with it rather than burying it after the North Star.]`

### North Star metric

**Percentage of sessions where the user reports wearing, or marks as worn, an outfit they wouldn't otherwise have worn.**

Not sessions. Not time in app. Not suggestions generated. Those all rise when a product is confusing, and the goal is a garment leaving the shelf.

`[NORTH STAR LAYOUT: Large full-width callout, accent border. Metric at 24–28px, rejected alternatives beneath in muted text. Showing what you refused to measure is the thinking on display — make the rejections visible.]`

**The honest caveat:** this is hard to instrument. You cannot observe what someone wore. The usable proxy is a lightweight "wore this" confirmation with a next-day prompt — which is itself a design problem, because adding a daily check-in to a product whose promise is *zero friction* is a contradiction. My current answer is a single optional tap surfaced only on a return visit, accepting incomplete data over a degraded experience. It's a compromise and I'd want to test it.

`[Keep this caveat. Naming a metric you can't cleanly measure, and saying so, is more credible than presenting a tidy one that quietly wouldn't work.]`

### Supporting metrics

| Design goal | Metric | Target | Why this one |
|---|---|---|---|
| Value before commitment | % of first sessions reaching a recommendation | > 85% | If people drop before the first answer, the zero-setup promise has failed at its only job |
| Speed of answer | Median seconds, launch → first recommendation | < 30s | Aditi's window is about two minutes. Anything slower loses to the mirror. |
| Comprehension, not just correctness | % of sessions where the user expands or reads the reason line | > 50% | Tests Friction 1's fix. A reason nobody reads is a reason that isn't working. |
| Confidence compounding | % of returning users applying a past combination without re-scanning | > 25% | The strongest possible signal — the user learned something and kept it |
| Trust | Suggestion acceptance rate, with vs. without commerce present | Delta < 5% | Directly measures the Cluster 3 contamination effect. If the gap is wide, commerce is still leaking. |
| Real value | Distinct garments involved in accepted suggestions, per user, per month | Increasing | The 82% unworn figure is the problem. This is the only metric that measures it moving. |

`[TABLE: Four columns — goal 25%, metric 30%, target 12% (centered, accent, bold), rationale 33%. Hairline rules, no fills. On mobile convert each row to a card.]`
`[The last row is the most important one in the table. Consider marking it "★ the one that matters" — it's the only metric that measures the actual problem from Section 1 rather than a proxy for it.]`

### Counter-metrics — how I'd know it backfired

Three things I'd treat as failure regardless of what the North Star did:

- **Sessions per day above 3.** This is not a product that should be used often. If usage climbs, either it's not answering the question or it's become a browsing toy. The long-term success state is a user who needs it *less* — which is an uncomfortable thing to build a business on and the honest thing to measure.
- **Rising outbound commerce clicks as a share of sessions.** Would mean the empty state is being reached too often, or the boundary between advice and commerce has eroded. Either way, the thing worth protecting is going.
- **Falling acceptance rate over a user's lifetime.** Would mean the recommendations aren't fitting a real wardrobe, and the user is learning to discount them. Slow, quiet, and fatal.

`[COUNTER-METRICS LAYOUT: Three items with warning-toned left borders, in a visually distinct block from the table above. Header clearly as guardrails.]`
`[The first counter-metric — "success means they need it less" — is genuinely unusual and will be remembered. Give it slightly more weight than the other two.]`

### How I'd validate

**Usability, moderated** — 5 to 8 people matching Aditi, using the live app on their own wardrobe. Two questions: does the reason line change whether they'd wear it, and do they notice the absence of shopping links.

**Diary study, 2 weeks** — 6 participants, logging what they wore. The only method that can answer whether unworn garments actually moved, which is the whole point.

**A/B on commerce placement** — the highest-value test in the plan: recommendations with volunteered shopping links versus links in the empty state only, measured on acceptance rate rather than clicks. It's the one decision in this case study I'd most want to be proven right or wrong about.

`[Three columns desktop, stacked mobile. Small label chips: "Qual" / "Longitudinal" / "Quant".]`

---

# 10. EVALUATION — RESULTS

**Eyebrow:** 10 — Evaluation / Results

**H2:** What I can claim, and what I can't.

`[SECTION NOTE: be scrupulously honest here. Inflated results in a self-initiated project are the fastest way to lose a reviewer's trust — they read hundreds of these. The honesty is the credibility.]`

**Body:**
ShadeMatch is live but it isn't a business, and there's no meaningful usage data behind it. Here's what the work actually produced.

### What was validated

**The zero-setup entry point works.** People used it without explanation, without an account, and without being told what it was for. For a product whose entire competitive position rests on the first thirty seconds, that's the finding that matters most.

**The output needed a reason, and the reason changed the reaction.** {If you tested the with/without version, state the result. If not: "This is the change I'm most confident about and least able to prove — it came from a consistent, unprompted request rather than a measured effect."}

**The commerce contamination effect is real, and worse than the research suggested.** Users didn't just ignore the shopping links — some retroactively discounted recommendations they'd already accepted. That's a stronger effect than Cluster 3 predicted and it's the finding I'd defend hardest.

**The feature hierarchy in the original build was wrong.** Pinterest visualisation was treated as an extra and turned out to be what people reached for. Marketplace links were treated as central and turned out to be actively harmful. Two of five features were misjudged — which is a reasonable hit rate for a build with nobody asking why.

`[VALIDATED LAYOUT: Four items, accent check indicator, bold lead sentence, explanation beneath.]`

### What is not validated

- **That anyone wears anything differently.** The entire premise — that this moves garments from unworn to worn — is unproven and needs a diary study of at least two weeks. It's the only thing that would actually matter and it's the thing I don't have.
- **The colour matching itself.** I've assessed the recommendations as plausible. I have not validated them against colour theory rigorously or tested them across skin tones, lighting conditions, or fabric textures — all of which affect the answer. The engine is inherited from the AI build and I have not audited it.
- **The business model.** Removing the only revenue in the product is defensible on trust grounds and completely untested commercially. A real company would need to know what replaces it, and "trust first, monetise later" is a strategy, not a plan.
- **Retention.** No idea. A product designed to be needed less over time has a retention problem baked into its own definition of success, and I haven't resolved that tension — I've just named it.

`[NOT VALIDATED LAYOUT: same structure as "validated", with a neutral dash or open-circle indicator and muted text. The visual parallel makes the honesty read as deliberate rather than apologetic.]`

### The outcome

**What this project delivered:** a product-thinking framework applied retroactively to a live product, a competitive position I can defend, a feature audit that cut two of five features and reordered the rest, a decision record for every call, and a measurement framework with counter-metrics.

**What it didn't:** proof that anyone's wardrobe changed. That takes a diary study I haven't run.

`[Two-part statement, equal visual weight. Confidence about limits reads as more senior than false certainty.]`

---

# 11. EVALUATION — FEEDBACK & DESIGN ITERATIONS

**Eyebrow:** 11 — Evaluation / Iterations

**H2:** Four changes, and one of them deleted a feature.

`[ITERATION LAYOUT — the most important build pattern in the case study:]`
`[Each iteration = full-width block with a BEFORE / AFTER image pair, side by side, EQUAL SIZE, divider between, labels above — "BEFORE" muted grey, "AFTER" accent.]`
`[Use a draggable slider ONLY if the two images are identical crops at identical dimensions. Otherwise static side-by-side — a broken slider is worse than none.]`
`[Beneath each pair: "The problem" / "The change" / "The reasoning" as three short labelled paragraphs.]`
`[Crop tightly to what changed. A full screen where 5% differs communicates nothing.]`

### Iteration 1 — Adding the reason line

**The problem:** Suggestions arrived as bare colour combinations. The most common response was a request for justification — people wanted to know why before they'd act, and without it the app answered today's question and nothing else.

**The change:** {Describe what you did — e.g. each recommendation now leads with a one-sentence rationale in plain language above the swatches, with the colour relationship named.}

**The reasoning:** A recommendation the user understands is one they can reuse without the app. A recommendation they don't is a dependency. Given the underlying problem is confidence rather than information, building the dependency would have been solving the symptom and protecting the metric — which is the wrong trade even when it's the profitable one.

`[Before/after crop: one recommendation card, before and after, zoomed.]`

### Iteration 2 — Renaming "main movement"

**The problem:** Not one person could say what the filter did. Several never touched it. It was an internal-sounding phrase that came out of the generation process and was never checked against a person.

**The change:** {Describe — e.g. renamed to "{new name}", moved to {position}, with the default state made explicit.}

**The reasoning:** This one's small and it's the most diagnostic thing in the project. It's exactly the class of error that AI-generated builds produce constantly and that nobody catches, because there's no one in the loop whose job is to ask "would a user say this?" The fix took two minutes. Noticing it required the whole research process — which is more or less the argument of this case study in miniature.

`[Before/after crop: the filter control. Label the before "generated" and the after "designed" if that reads well.]`
`[This iteration is small but tells the story of the whole project. Don't cut it for being minor.]`

### Iteration 3 — Removing marketplace links from the core flow

**The problem:** Amazon, Myntra and Flipkart links appeared alongside every result. Testing showed they didn't just go unused — they caused users to retroactively re-read the suggestions as advertising.

**The change:** Removed entirely from the primary path. Reinstated in the empty state only, where the user has already been told nothing they own works and the option answers a problem they now have.

**The reasoning:** The full argument is in Section 6. In short: this is the product's only revenue and its biggest liability, and it can't be both. The same feature is helpful or manipulative depending only on who initiated the interaction — so I changed the initiator rather than the feature.

`[Before/after crop: the result screen with and without the commerce block. This is the most consequential before/after in the case study — make it the largest.]`

### Iteration 4 — {THE THIRD OPTION EXPLORATION}

`[NOTE FOR RUBY: if you have multiple Figma explorations of any single element for this project — a button, the result card, the capture screen — fill this in. Three options with an articulated reason for the winner is exactly the decision-level detail that reads as senior. Delete the whole iteration if you don't have it, rather than inventing one.]`

**The question:** {What element, and what was uncertain about it?}

**Option A — {name}:** {What it was.} {Why considered.} {Why it lost.}

**Option B — {name}:** {What it was.} {Why considered.} {Why it lost.}

**Option C — {name} — selected:** {What it was.} {Why it won — tie back to a research finding or a design goal if you can.}

**What decided it:** {The actual criterion. Something specific like "it was the only one that still worked one-handed at arm's length in front of a wardrobe" beats anything grand.}

`[LAYOUT: Three options side by side, EQUAL WIDTH, horizontal row desktop, stacked mobile. Figma frame on top, name, reasoning beneath. Selected option gets an accent border, "SELECTED" badge, elevated shadow; rejected options at 70% opacity. "What decided it" as a full-width closing line.]`

---

# 12. WHAT I LEARNED

**Eyebrow:** 12 — Reflection

**H2:** What building backwards taught me.

`[LAYOUT: Each learning = bold one-line lesson as heading, short paragraph beneath. Stacked full-width, max-width 760px, 64px between. Do NOT put these in cards or a grid — this section should read as writing. Number them 01–05 in the margin in large muted numerals.]`

**01 — AI removed the cost of building, which removed the reason to think.**
Every product decision in ShadeMatch was made by default. Not badly — *by default*. The marketplace links weren't a monetisation strategy, they were the obvious thing to generate. "Main movement" wasn't a naming decision, it was a phrase that came out and nobody stopped. When building is expensive, the expense forces the thinking; you don't spend three weeks on a feature you can't justify. When building costs an afternoon, nothing forces it, and the thinking has to be deliberately re-added. That's the whole lesson of this project and I don't think I'd have learned it any other way.

**02 — I had a moat and didn't know it.**
The single strongest thing about ShadeMatch is that it only asks for one photo. That is the thing every competitor in the category gets wrong, and it's why they lose users at the digitisation wall. I didn't design it — it fell out of a simple build. Which cuts both ways: I got lucky, and getting lucky is indistinguishable from being right until someone asks you why. The research is what turned an accident into a position I can defend and, more importantly, know not to trade away.

**03 — The same feature is helpful or manipulative depending on who starts the conversation.**
Shopping links beside a recommendation are an ad. The identical links, after the app has honestly told you nothing you own works, are a service. Nothing about the feature changes — only the initiator. Before this project I'd have evaluated features on what they do. Now the first question I ask is who asked for it, because that determines the meaning more than the function does.

**04 — The metric you can measure most easily is often the one that will kill the product.**
Outbound clicks were right there — precise, attributable, revenue-linked. And optimising for them would have degraded the trust the product runs on, one small reasonable decision at a time, with nobody ever choosing it. Choosing a harder, blurrier metric that actually maps to value is a decision you have to make early, because once the easy one is instrumented it starts winning arguments on its own.

**05 — Success here means the user needs me less.**
The real outcome is that Aditi learns which colours work and stops opening the app. That's genuinely good for her and structurally terrible for a retention metric, and I don't have a clean answer to it. I've stopped treating that as a flaw in my thinking and started treating it as the actual product question: what does a tool that's supposed to make itself unnecessary sell, and to whom? I don't know yet. Naming it honestly seems better than designing around it.

### What I'd do next

The gap between this case study and a real product is one study: two weeks, six people, a diary of what they actually wore. Everything here is reasoning, and reasoning is cheap. The only question that matters is whether a garment that had been sitting unworn for two years came off the shelf — and no amount of framework answers that.

The second thing I'd do is audit the colour engine itself. I inherited it from the AI build and I have never checked it. Writing this case study, I noticed that I'd spent weeks interrogating every decision *around* the recommendation and none at all on whether the recommendation is any good. That's a fairly pointed lesson about where I'm comfortable thinking and where I'm not.

`[Closing layout: last paragraph alone, generous space around it, slightly larger than body. It's the last thing anyone reads.]`
`[That final self-criticism is the strongest possible ending — it demonstrates the exact judgment the case study claims to have developed, applied to the case study itself. Keep it.]`

---

# 13. FOOTER

**Thanks for reading.**

{One line — e.g. "Ruby Seher — Product Designer. Currently open to opportunities."}

- Email — {email}
- LinkedIn — {url}
- Live app — redux-ready-shadematch.onrender.com
- Portfolio — {url}

`[FOOTER: Centered, 120px top padding, thin top rule. "Thanks for reading" in display size. Links as a horizontal row desktop, stacked mobile. "Back to top" at the very bottom. Add "← Previous case study: LinkedIn" if both are on one site.]`

---
---

# APPENDIX — NOTES FOR RUBY

### Blanks to fill
Search for `{` and fill every one. Priority order:
1. **What "main movement" actually does** (Section 6 table, Iteration 2) — I've guessed around it
2. **Section 7 method** — did you test with real people, AI persona, or not yet? The section changes shape depending. Don't invent participants.
3. **Iteration 4** — delete if you don't have three explorations of something
4. Affinity board quote count, timeline, contact details

### Every `{VERIFY}` stat, with its source

| Stat | Source | Link |
|---|---|---|
| 82% US wardrobe unworn; 26% estimated vs 88% actual (Belgium) | Movinga, 2018, 18,000 households, 20 countries | fashionunited.uk |
| ~1 hr/week deciding, = 5 months of working life; 45% find it stressful | Simon Jersey survey, 2019, n=2,000 women, UK | aol.com/lifestyle |
| Apparel online returns 20–40% vs ~20% average; fit/sizing = 50% of returns | NRF 2025 Retail Returns Landscape, via Richpanel | richpanel.com |
| India fashion ecommerce ~$25.6B (2025); apparel 54%; Myntra ~$12.5B GMV | ECDB | ecdb.com |

Two caveats worth knowing before you publish: the Movinga study is from 2018 and was run by a removals company, so it's directional rather than academic — cite it as "a 20-country study of 18,000 households" and don't over-lean on it. The Simon Jersey survey is UK women only, commissioned by a uniform retailer with an obvious interest in the answer. Both are widely cited and fine to use; just don't build a load-bearing claim on either alone. The returns and market-size figures are solid.

**The quotes in Sections 1 and 4 are illustrative — I wrote them to show the shape of what you'll find.** Replace every one with a real quote you actually pull from Reddit or App Store reviews. Fabricated user quotes are the one thing in a case study that's genuinely dishonest rather than just unverified, and they're also the easiest thing to improve, because the real ones are better.

### Assets to prepare

| Section | Asset | Filename |
|---|---|---|
| Hero | App result screen, phone frame | `hero-shadematch.png` |
| Competitive | 5 screenshots (Whering, Pinterest, Myntra, ChatGPT, + review cluster) | `comp-a-wardrobe.png` … `comp-e.png` |
| Competitive | App Store review screenshots showing abandonment | `reviews-cluster.png` |
| Affinity | Figma board | `affinity-board.png` |
| Personas | 2 avatars | `persona-aditi.png`, `persona-rohan.png` |
| Sketches | Notebook photos | `sketch-01.jpg` … |
| Main flow | 5 phone frames + annotated crops | `flow-01-capture.png` … `flow-05-empty.png` |
| Iterations | 3–4 before/after pairs | `iter-01-before.png` / `iter-01-after.png` … |

### If you want the conventional linear version instead

Reorder to: Problem → Research (competitive, interviews, personas) → Ideation → Design → Testing → Results → Learnings, and rewrite the hero H1 to something like "Helping people wear what they already own." Then strip the retroactive framing from Sections 0, 1, 6 and 12 — specifically the "five questions I couldn't answer" block, the "auditing what I'd already built" table, and Learning 01.

I'd push back on this, though. Removing the honest framing costs you the three most memorable things in the case study — the self-audit table, the commerce-contamination finding, and Learning 01 — and replaces them with a narrative every reviewer has read four hundred times. The retroactive version is also simply true, which means you can defend every line of it in an interview without rehearsing.

### Two things worth knowing about this doc

**The strongest sections are 6 (the marketplace-link argument), 9 (the metric that would have killed the product), and 12 (Learning 01).** If you're short on time, make those three excellent and let the rest be good.

**The weakest is 7,** because I don't know what testing you actually did. That section is load-bearing — it's where you prove the design changed because of evidence rather than taste. Sending the live link to five real people would take an afternoon and would upgrade the whole case study more than any other single thing you could do.
