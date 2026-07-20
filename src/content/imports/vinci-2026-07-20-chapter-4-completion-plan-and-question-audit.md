# Chapter 4 Completion Plan and Question Audit (2026-07-20)

**Status: planning and audit only. No question was created, edited, or
promoted; no Learn Mode content was written; no drill set or Study Guide
was created; `course.json` was not touched in this task.**

This document is the first work product of the Chapter 4 completion cycle
recommended by `vinci-2026-07-20-course-content-gap-audit.md`. It reviews
the existing Chapter 4 manual intake (pages 89–119), the promotion-review
document, all 61 live Chapter 4 questions, and all 17 Chapter 4 Learn Mode
topics, then lays out exactly what the next (implementation) task should
do.

## Sources reviewed

- `src/content/imports/vinci-2026-07-13-chapter-4-manual-source-intake.md`
  (manual pages 89–119, missing ~page 118)
- `src/content/imports/vinci-2026-07-13-chapter-4-manual-promotion-review.md`
- `src/content/imports/vinci-2026-07-13-chapter-4-manual-draft-question-pack.json`
  (confirmed programmatically: 4 questions remain — the 40 Tier-1 questions
  from that pack have already been promoted to `course.json`)
- `src/content/course.json` — all 61 live `chapter-4-survival-methods`
  questions and the topic's `learn.keyPoints` array (17 entries)

## Part A — Learn Mode topic inventory

Chapter 4's Learn Mode is a single topic (`chapter-4-survival-methods`)
with a `keyPoints` array of 17 entries. Each entry is either a bare string
(placeholder) or a rich object (substantive).

| # | Title | Status |
|---|---|---|
| 0 | Understanding Coast Guard Searches | Placeholder |
| 1 | Abandoning Ship | Placeholder |
| 2 | Immersion Suits & Thermal Protection | **Substantive** (6 key facts) |
| 3 | Anti-Exposure Suit | Placeholder |
| 4 | Swimming for Survival | Placeholder — **redundant, see below** |
| 5 | Man Overboard & Swimming for Survival | **Substantive** (6 key facts) |
| 6 | Cold Water Survival — Hypothermia & Cold Shock Response | **Substantive** (8 key facts) |
| 7 | Organizing for Survival & Survival on the Sea | **Substantive** (7 key facts) |
| 8 | Survival on the Sea | Placeholder — **redundant, see below** |
| 9 | Preserve Body Fluids / Avoid Seasickness | Placeholder |
| 10 | Urinate Soon After Boarding | Placeholder |
| 11 | Dealing with Cold / Hot Environment | Placeholder |
| 12 | Drinking Water | Placeholder |
| 13 | Food | Placeholder |
| 14 | Looking for Land | Placeholder |
| 15 | Beaching Survival Craft | Placeholder |
| 16 | Survival Ashore | Placeholder |

**4 substantive, 13 placeholder** — matches the prior audit's count. But
this task's closer read surfaces a finding the prior audit didn't have
scope to catch: **two of the 13 "placeholders" are redundant, not
missing.** Topic 4 ("Swimming for Survival") is already fully covered by
the substantive topic 5 ("Man Overboard & Swimming for Survival"), and
topic 8 ("Survival on the Sea") is already fully covered by the substantive
topic 7 ("Organizing for Survival & Survival on the Sea"). These are
leftover single-subject placeholders from before the two topics were
merged during a prior writing pass — they should be **deleted, not
filled**, when Learn Mode work begins.

That leaves **11 genuinely-empty placeholders** requiring new content:
Understanding Coast Guard Searches, Abandoning Ship, Anti-Exposure Suit,
Preserve Body Fluids / Avoid Seasickness, Urinate Soon After Boarding,
Dealing with Cold / Hot Environment, Drinking Water, Food, Looking for
Land, Beaching Survival Craft, Survival Ashore.

### Manual sections supporting each of the 11 remaining placeholders

| Placeholder | Manual pages | Coverage |
|---|---|---|
| Understanding Coast Guard Searches | 89–~90 | Full — AMVER, sea-anchor-and-drift rationale |
| Abandoning Ship | ~90–96 | Full — PFD requirements, jump height/technique, stepping-off sequence |
| Anti-Exposure Suit | 93 | Full but short — one paragraph of source |
| Preserve Body Fluids / Avoid Seasickness | 110 | Full |
| Urinate Soon After Boarding | 110 | Full |
| Dealing with Cold / Hot Environment | 111 | Full |
| Drinking Water | 112–113 | Full |
| Food | 113–115 | Full |
| Looking for Land | 115–117 | Full (cumulus clouds + breezes-near-land, p.117) |
| Beaching Survival Craft | 116–117 | Full — pulling-boat and power-boat surf-landing technique |
| Survival Ashore | 119 (+ missing ~118) | **Incomplete** — section opens mid-topic on the one available page; the missing page likely contains the section's actual opening |

Every remaining placeholder except **Survival Ashore** has full, ready-to-write
source material already on hand — no new source-gathering is required for
10 of the 11. Survival Ashore should be written as **partial only**, clearly
marked as awaiting the missing page, consistent with how the manual source
intake already flagged it.

## Part B — Full 61-question audit

Classification categories per instruction: **Confirmed by the manual**,
**Confirmed by another approved source**, **Correct but outside the manual
excerpt**, **Needs correction**, **Unsupported**, **Too ambiguous to
retain**.

### Confirmed by the manual — 40 questions (all `q-ch4man-*`, already `source-backed-study`)

`q-ch4man-amver-purpose`, `q-ch4man-stay-near-position`,
`q-ch4man-pfd-required-color`, `q-ch4man-pfd-vs-suit-selfright`,
`q-ch4man-suit-buoyancy-pillow-pfd`, `q-ch4man-antiexposure-tradeoff`,
`q-ch4man-jumpheight-upperbound`, `q-ch4man-waveslap-protection`,
`q-ch4man-bodysurf-vs-diveunder`, `q-ch4man-burningoil-swimtechnique`,
`q-ch4man-float-no-pfd-methods`, `q-ch4man-shirt-flotation`,
`q-ch4man-mob-causes`, `q-ch4man-mob-crew-response`,
`q-ch4man-mob-stern-away`, `q-ch4man-williamsonturn-purpose`,
`q-ch4man-airtemp-vs-watertemp`, `q-ch4man-alcohol-hypothermia`,
`q-ch4man-coldwater-swim-exhaustion`, `q-ch4man-coldincapacitation-stage`,
`q-ch4man-circumrescue-collapse`, `q-ch4man-hypothermia-drunk-appearance`,
`q-ch4man-rectal-vs-oral-temp`, `q-ch4man-lowest-recovery-temp`,
`q-ch4man-gentle-handling-heart`, `q-ch4man-rewarming-priority-areas`,
`q-ch4man-help-position-purpose`, `q-ch4man-command-order`,
`q-ch4man-survivalcraft-roles`, `q-ch4man-capsize-recovery-craft`,
`q-ch4man-heavyseas-heading`, `q-ch4man-seasickness-preserve-fluids`,
`q-ch4man-urinate-timing`, `q-ch4man-survival-without-water-figures`,
`q-ch4man-rationing-schedule`, `q-ch4man-seaice-vs-saltice`,
`q-ch4man-never-drink-seawater`, `q-ch4man-no-food-without-water`,
`q-ch4man-cumulus-clouds-land`, `q-ch4man-avoid-surf-landing`

All 40 checked: page citations match the source intake, no question uses
the excluded immersion-suit thermal-protection figure or the flawed
Williamson Turn arithmetic. No action needed.

**6 legacy `None`-tier questions are also directly confirmed by the manual
but have never had their status upgraded** — these are upgrade candidates,
not new-content work:

- `q-surv-2` (immersion suit purpose) — confirmed p.92
- `q-surv-5`, `q-surv-6`, `q-surv-7` (cold shock response definition,
  distinction from hypothermia, first-minute danger) — confirmed by the
  4-stage Cold Shock Response chart, p.104
- `q-surv-10` (minimize movement/swimming in cold water) — confirmed
  conceptually, p.101
- `q-quiz1a-first-water-liferaft`, `q-quiz1a-preferred-jump-height`,
  `q-quiz1a-hypothermia-water-temp`, `q-quiz1a-manoverboard-dont-swim`,
  `q-quiz6-oilfire-waterentry` — all confirmed verbatim or near-verbatim
  by the manual, currently sitting at `quiz-derived-study`

### Confirmed by another approved source — 1 question

- `q-ch4-waterrequirement-official` — sourced to the USCG/NMC Q445
  Lifeboat Operator Sample Exam (official Tier 2 source). Not
  contradicted by the manual's separate "1 pint/person/day" liferaft
  rationing figure — that's a different fact (stowage total vs. daily
  usage rate) — and the question's own wrong-answer choices already
  correctly anticipate that exact confusion. No action needed.

### Correct but outside the manual excerpt — 8 questions

Generically correct or correct-per-their-own-source, but not confirmed by
this manual excerpt specifically:

- `q-surv-1` — see **Needs correction** below instead; listed here only
  for completeness of cross-reference.
- `q-surv-3` (top early priority = get clear of danger, account for
  people) — sound safety practice, not a specific manual-quoted fact in
  this excerpt.
- `q-surv-4` (ration food/water from the start) — consistent with the
  Drinking Water/Food sections' "no food/water in the first 24 hours"
  rule but stated as a general principle rather than citing the manual's
  specific figures.
- `q-surv-8` (immediate vs. later survival priorities) — a reasonable
  pedagogical synthesis, not a passage the manual states in these terms.
- `q-surv-9` (violent shivering = active cold stress, not worst-case) —
  consistent with the clinical classification chart (mild = strong
  shivering, severe = shivering stops) but not a direct quote.
- `q-surv-11` (liferaft full-ration-now scenario) — consistent with the
  rationing schedule but phrased as a scenario, not a manual quote.
- `q-surv-12` (morale as a genuine survival priority) — consistent with
  the Organizing for Survival section's leadership/morale framing, not a
  direct quote.
- `q-quiz6-beach-landing-hightideline` — the source intake explicitly
  checked and could **not** confirm this fact in the sampled Beaching
  Survival Craft section (pp.116–117); it may be on the missing page or
  beyond page 119.
- `q-quiz6-swim-strongcurrent-45deg` — the manual confirms the *direction*
  strategy (diagonal, not head-on) but not the specific 45° figure.
- `q-quiz6-abandonship-jump-procedure` — the manual's 5-step stepping-off
  sequence is more detailed and phrased differently; compatible, not
  verbatim.

(Note: 10 items listed against "8 questions" above because
`q-quiz6-swim-strongcurrent-45deg` and `q-quiz6-abandonship-jump-procedure`
each also have a specific, already-flagged proximity to one of the two
still-held Tier 2 draft questions — see Part C.)

### Needs correction — 1 question

- **`q-surv-1`** ("In cold water survival, what is the major immediate
  danger?" → "Hypothermia and loss of body heat"). This sits in
  conceptual tension with the chapter's own `q-surv-6`/`q-surv-7`, which
  correctly teach that **Cold Shock Response** — not hypothermia — is the
  true first-minute/immediate danger, with hypothermia developing later
  (confirmed by the manual's own 4-stage progression: Cold Shock →
  Cold Incapacitation → Circum-Rescue Collapse → Hypothermia, "up to 30
  minutes"). Calling hypothermia the "immediate" danger blurs a
  distinction the chapter otherwise teaches carefully. Recommend
  rewording during the next promotion pass — either retitle the prompt to
  drop "immediate" (asking about the overall major danger, not the
  first-minute one) or change the correct answer to Cold Shock Response
  and adjust the distractors, since `q-surv-7` already owns the
  first-minute-scenario framing well.

### Unsupported — 0 questions

No live Chapter 4 question was found unsupported by any tier of source
material.

### Too ambiguous to retain — 0 questions

No live Chapter 4 question was found too ambiguous to retain.

## Part C — Duplicate / overlap check

Ran a `difflib.SequenceMatcher` pass across all 61 live prompts (0.7 =
true-duplicate threshold, per this project's convention). **No pair
scored at or above 0.7** — no true duplicates exist in the live 61.

27 pairs scored 0.45–0.57; hand-reviewed all of them. Nearly all are false
positives from shared sentence templates (e.g., "which of the following is
NOT one of..." pattern shared by `q-ch4man-mob-causes` and
`q-ch4man-survivalcraft-roles`, which test unrelated facts). Two pairs are
genuine, already-known proximity concerns carried over from the promotion
review, both involving the still-held draft questions:

- `q-quiz6-abandonship-jump-procedure` (live) is close in subject to the
  held `q-ch4man-steppingoff-blocknose` (draft) — different specific
  details of the same overall procedure, not a duplicate, but should be
  read side-by-side before promoting the held question.
- `q-quiz6-swim-strongcurrent-45deg` (live) is close in subject to the
  held `q-ch4man-ripcurrent-escape` (draft) — different specificity level
  of the same situation, not a duplicate, same review note as above.

One more internally-notable pair: `q-surv-1` and `q-surv-7` (0.573) —
this is the same conceptual tension flagged under "Needs correction"
above, not a duplicate-content problem.

## Part D — Content areas lacking sufficient question coverage

Cross-referencing the manual's section list against what's actually
tested, these manual sections have **zero or near-zero live questions**
despite having usable source material:

- **Marine Life (shark/jellyfish safety, ~p.99)** — 0 questions. Flagged
  in the original source intake as "net-new content" without citable
  specifics; drafting from it requires a fresh, targeted re-read of that
  page rather than reuse of the existing intake document.
- **Tread and Scull technique (p.97)** — 0 questions, despite a clean,
  distinct 6-step diagrammed technique.
- **Food foraging detail (fish/turtles/seaweed/birds, pp.113–115)** — 0
  questions test the specific, rich content here (poisonous near-shore
  fish, turtle handling caution, seaweed caution, bird-catching methods)
  even though `q-ch4man-no-food-without-water` covers the general
  water-before-food rule.
- **Dealing with Cold / Hot Environment (p.111)** — 0 questions.
- **Beaching technique itself (pp.116–117)** — only the *rationale* for
  avoiding a surf landing is tested (`q-ch4man-avoid-surf-landing`); the
  actual pulling-boat vs. power-boat surf-approach technique is untested.
- **Breezes Near Land (p.117)** — 0 questions (only the cumulus-cloud
  land-sign fact from the adjacent Looking for Land section is tested).
- **Anti-Exposure Suit** — only 1 question (`q-ch4man-antiexposure-tradeoff`);
  thin relative to Immersion Suits' 3-question coverage of an adjacent
  topic.
- **Clothing for flotation — pants method (p.98)** — the shirt method is
  tested (`q-ch4man-shirt-flotation`); the pants method is not.

## Part E — Recommended new-question count

Roughly **12–15 new questions**, concentrated where Part D identifies real
gaps:

- Dealing with Cold / Hot Environment: 2
- Food foraging (fish/turtles/seaweed/birds): 3–4 (pending a fresh re-read
  of pp.113–115 for exact figures, since the existing source intake only
  paraphrases this section)
- Tread and Scull: 1–2
- Beaching technique (pulling-boat/power-boat specifics): 1–2
- Anti-Exposure Suit: 1–2
- Breezes Near Land: 1
- Clothing for flotation — pants method: 0–1 (optional, lower priority)
- Marine Life: hold — needs a fresh, targeted source re-read of p.99
  before drafting; not included in this count

This is in addition to — not instead of — resolving the 4 already-drafted,
still-held questions (3 Tier 2 needing a side-by-side read against their
live near-neighbors, 1 Tier 3 blocked on the missing page) and upgrading
the 10 already-manual-confirmed legacy/quiz-derived questions' verification
status (Part B).

## Part F — Recommended Learn Mode structure for the next task

1. **Delete the 2 redundant placeholders** — "Swimming for Survival" (#4)
   and "Survival on the Sea" (#8) — since their content already lives in
   the merged substantive topics (#5, #7). This is a cleanup step, not new
   writing.
2. **Write the 10 fully-sourced placeholders**, in this order (matches the
   source intake's own ranking plus this task's priority read):
   Abandoning Ship → Drinking Water → Food → Understanding Coast Guard
   Searches → Preserve Body Fluids / Avoid Seasickness → Urinate Soon
   After Boarding → Dealing with Cold / Hot Environment → Looking for Land
   → Beaching Survival Craft → Anti-Exposure Suit.
3. **Write Survival Ashore last, and mark it partial** — clearly note
   within the module that it covers only page 119's content and is
   awaiting the missing ~page 118.
4. Before touching the *existing* Immersion Suits & Thermal Protection
   module, surface the 2°–5° vs. 2°C thermal-protection discrepancy to
   Vinci (see Part H) — do not edit that module silently in either
   direction.

## Part G — Recommended drill-set groupings

Following the `vinci-chapter-5-drill-sets.md` / `vinci-chapter-6-drill-sets.md`
pattern (5–6 focused sets):

1. **Cold Water Survival & Hypothermia** — richest cluster, 12+ questions
   available (cold shock response, hypothermia classification, first aid,
   H.E.L.P.).
2. **Abandoning Ship & Water Entry** — PFD, immersion suit, anti-exposure
   suit, jump height/technique, stepping-off sequence, oil-fire entry.
3. **Man Overboard & Swimming for Survival** — MOB causes/response,
   Williamson Turn purpose, current-swimming, wave slap, floating without
   a PFD.
4. **Survival Priorities, Rationing & Morale** — command order, craft
   roles, capsize recovery, seasickness, urination, water/food discipline.
5. **Beaching, Land-Finding & Survival Ashore** — smaller set; build last,
   after the corresponding Learn Mode content and new questions exist, and
   expect it to stay thinner than the other four until the missing page is
   resolved.

## Part H — Recommended Study Guide structure (build only after Learn Mode is near-complete)

Sections mirroring the drill-set clusters above, each with a comparison
table where the manual supports one:

1. **Abandoning Ship & Protective Equipment** — comparison table: PFD vs.
   Immersion Suit vs. Anti-Exposure Suit (self-righting, mobility, typical
   wearer/use case) — this directly serves the "Compare & Contrast"
   methodology and the cross-chapter confusion-trap concern the prior
   audit flagged for equipment terminology.
2. **Cold Water Survival & Hypothermia** — the 4-stage Cold Shock Response
   progression, clinical classification, first aid, H.E.L.P./HUDDLE.
   Include an exam trap explicitly distinguishing "immediate" (cold shock)
   from "developing" (hypothermia) danger — directly addresses the
   `q-surv-1` correction from Part B.
3. **Man Overboard** — crew response sequence, Williamson Turn purpose
   (explicitly *not* the flawed degree arithmetic), swimming strategy.
4. **Organizing & Sustaining a Group** — leadership/command order, craft
   roles, morale, rationing schedule, seasickness/urination discipline.
5. **Reaching Land** — looking-for-land signs, beaching technique, and
   Survival Ashore once available (mark as provisional if published before
   the missing page is resolved).

## Part I — Unresolved source issues (carried forward, not resolved here)

1. **Immersion-suit thermal-protection figure conflict** (manual "2°–5°
   after 6 hours in 0–2°C water" vs. the live CFR-sourced "no more than
   2°C" cap) — still unresolved; must be surfaced to Vinci before any
   further edits to the Immersion Suits Learn Mode module.
2. **Williamson Turn "310 degrees" worked-example arithmetic** doesn't
   check out against the manual's own stated rule (should be 270°) —
   already correctly avoided everywhere in live content and drafts;
   flagged here only so it stays avoided.
3. **Cold Shock Response "up to 30 minutes" vs. "10–15 minutes to several
   hours"** hypothermia-onset framing tension, both stated in the same
   source — not reconciled. The held `q-ch4man-hypothermia-onset-conservative`
   draft is deliberately hedged to survive either framing; recommend
   keeping that hedge rather than resolving it unilaterally.
4. **Missing manual page ~118** — still not obtained. Blocks the held
   `q-ch4man-finding-water-ashore-digging` question and a complete
   Survival Ashore Learn Mode section.
5. **Page 90/91 soft boundary** — minor, low priority, doesn't block any
   current work.
6. **Whether the Chapter 4 manual continues past page 119** is still
   unconfirmed — worth a Drive folder check before treating Survival
   Ashore as finished, independent of the missing-page issue.

## Summary for the next task

No new source-gathering is required to complete 10 of 11 remaining Learn
Mode placeholders, promote/upgrade roughly 10 already-manual-confirmed
legacy questions, resolve 3 of 4 held draft questions, and add
~12–15 targeted new questions. The only two items genuinely blocked on
external material are the missing page (~118, Survival Ashore) and the
Marine Life section's need for a fresh, more detailed source re-read.
