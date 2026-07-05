# SIU 2019 Practice Test — Conversion Plan

**Source:** `src/content/sources/siu-2019-practice-test.json` (91 items, complete)
**Status of this document:** planning only. Nothing described here has been
applied to `course.json`. No item from this source is verified, and
nothing in this plan changes that — see
[`docs/CONTENT_INTAKE_BENCHMARK.md`](./CONTENT_INTAKE_BENCHMARK.md) for
the tier system and the verification rule this plan operates under:

> No question becomes verified unless it can be traced to Vinci's
> actual materials or an official source.

This is a Tier 3 (practice-test) source. Everything below describes
*draft* candidates for the live app's question bank — none of it is
promoted to verified status, and promotion is a separate future step
gated on Tier 1/2 confirmation.

## How to read this plan

Each item below carries forward its `sourceItemNumber` from the intake
file so it can be traced back to the original question/answer text and
intake notes. Grouping is by *what should happen to it next*, not by
chapter — the chapter breakdown is in the summary table.

---

## Group 1: Convert now as draft practice questions

Clear, self-contained, low-risk facts or procedures where the intake
confidence is high/medium and the content isn't the kind of thing that
varies meaningfully by vessel type, flag state, or manual edition.
These can become new draft `course.json` questions with roughly the
same confidence level as the existing 84 — i.e., still unverified, but
no more so than what's already live.

- **1** (pintle/gudgeon = rudder), **6** (diesel oil), **10** (unbalanced
  rudders), **13** (preventer bars), **15** (boat plug before lowering),
  **16** (frapping lines at embarkation deck), **17** (winch remote
  control wire), **23** (hatchets secured with lanyard), **24** (compass
  use care), **25** (24hr fuel), **34** (muster list location), **38**
  (Mayday), **41** (grab rail location), **43** (stern sheets), **46**/
  **47** (sea painter vs. boat hook — see Group 4, also fine standalone),
  **53** (three starter types), **54** (Master's responsibility), **57**
  (tricing pendants), **60** (drinking water pacing), **62** (first
  person's boarding duties), **65** (releasing gear lever bright red),
  **66** (compass in fixed bracket), **69** (steer into the seas), **70**
  (man overboard, most direct approach), **72** (hand-crank backup),
  **73** (water spray system purpose), **76** (muster list contents),
  **77** (Master's drill duty), **80** (fuel valve check), **90** (stay
  in the area after abandoning ship).

## Group 2: Convert later, after manual verification

Content that's plausible but carries a real risk of being wrong,
outdated, or specific to a different vessel class/flag state than
Vinci's course. These should **not** become draft questions even at
the "unverified" tier the rest of the bank uses — they need at least a
quick check against Tier 1/2 material first, because if wrong they'd
actively mislead Vinci rather than just be generic/unverified.

- **26** — oar count "specified by manufacturer": likely incomplete: regulatory oar counts are often a specific number tied to capacity.
- **40** — "at least 2 man ropes" on davit span: specific regulatory number.
- **51** — "6 knots in smooth water" minimum speed: specific regulatory number.
- **52** — sea painter length calculation (40ft height / 200ft from bow → 80ft): a worked-formula answer; the underlying rule needs confirming.
- **64** — "3 short blasts / 3 short rings = dismissal" signal: likely vessel- or SMS-specific, not universal.
- **74** — "1 pint" per day after 24 hours: specific rationing figure worth double-checking against the manual's own numbers.
- **83** — required canned drinking-water compartments: plausible but equipment-specific.
- **5** — certified lifeboatman must have a list of assigned persons: likely correct but worth confirming the exact duty phrasing the manual uses.

## Group 3: Use for glossary / vocabulary review (Appendix A)

Appendix A currently has **zero** questions because we don't have the
manual's actual glossary text — only that the appendix exists. These
items are real maritime vocabulary and are reasonable *placeholder*
glossary entries until the real glossary arrives, but they should be
tagged clearly as unconfirmed against the manual's specific term list.

- **1** (pintle/gudgeon), **2** (limber system), **12** (stretchers), **28**
  (starboard tack), **30** (lifefloat), **31** (halyard), **32** (lee
  side), **43** (stern sheets), **48** (back water), **58** ("Oars"
  command), **63** (sail corners: head/tack/clew), **82** (running before
  the wind), **88** (shrouds).

Note: the sailing-rig cluster (28, 31, 32, 48, 49, 58, 63, 82, 88) has
**no matching subtopic** in the manual's given table of contents at
all. Recommend holding these for Appendix A only, and not building them
into Chapter 2 quiz questions, until it's confirmed the manual actually
covers auxiliary sailing rigs on lifeboats.

## Group 4: Use for compare/contrast sets

- **Compass cluster** — items **3**, **71**, **78** (compass error vs.
  variation vs. deviation). This is the single richest compare/contrast
  opportunity in the whole source.
- **Retrieval pair** — items **46** (moving ship → sea painter) vs. **47**
  (stationary ship → boat hook).
- **Sea-anchor pair** — items **29** (reduces drift) vs. **55** (prevents
  broaching) — two distinct benefits of the same piece of equipment.
- **Heavy-sea steering pair** — items **69** (steer into the seas) vs.
  **85** (broadside → capsize risk).
- **Covered-lifeboat systems cluster** — items **67**, **68**, **73**,
  **81** (air supply vs. sprinkler vs. water spray vs. hatch/oar-port
  closure) — four related but distinct systems, ripe for confusion.
- **Alarm signal pair** — items **39** (10+ sec = fire/emergency) vs.
  **64** (3+3 = dismissal) — different alarm patterns, different
  meanings (64 needs Group 2 verification first).

## Group 5: Use for very-hard / error-splitting questions

These are the items where the *correct* answer contradicts a plausible,
intuitive wrong guess — exactly the "best answer, not just the obvious
one" material the app's very-hard tier needs. All are already tagged
`misconception-trap` in the intake file.

- **9** — totally enclosed lifeboat in flames: air tank gives ~10
  minutes, not indefinite protection.
- **42** — buoyancy air tanks (keep boat afloat) vs. item 9's separate
  breathing-air tank — same phrase, two different systems.
- **14** — Rottmer releasing gear fires both falls regardless of whether
  the boat has reached the water — a real hazard if misunderstood.
- **21** — backing a right-hand-prop lifeboat swings the stern
  counterintuitively to port.
- **50** — "self-righting" is conditional (seatbelts on, doors shut), not
  automatic.
- **61** — sequencing trap: check the bilge/drain plug FIRST, not the
  engine or hull.
- **67** — the air supply system does NOT pressurize the water spray
  system (easy to conflate two related systems).
- **80** — engine won't start → check the fuel valve first, not battery
  or fuel quality.
- **85** — broadside-to-the-sea steering risks capsize (pairs with 69).
- **87** — unship the rudder, use a steering oar for surf landings —
  counterintuitive if a student assumes the rudder is always best.
- **91** — await rescue rather than force an immediate surf landing.
- **33** / **36** — "NOT required to be marked" traps (fire extinguisher;
  boat weight) — easy to over-generalize marking rules.

## Group 6: Drop or ignore

| Item(s) | Reason |
|---|---|
| **37** | Exact duplicate of item 3 (compass error). |
| **44** | Near-duplicate of item 6 (diesel oil). |
| **35** | Near-duplicate of item 34; answer text likely OCR-garbled ("must list"). |
| **59** | Redundant with item 79 (sea painter attachment) — 79 has the clearer answer. |
| **86**, **89** | Depend on star-chart illustrations we don't have (`D005SA`, `D007SA`) — unusable without the source image, and really celestial navigation rather than compass navigation. |

---

## Top 25 items/clusters to improve the live app first

Ranked by teaching value, not by source order. "Verification needed?"
reflects whether this specific fact/number should be checked against
Tier 1/2 material before it's used as a *draft* question — not whether
it can ever be marked verified (nothing here can be, on this source
alone).

| # | Source item(s) | Mapped chapter | Why it's valuable | Suggested question type | Verification needed before use? |
|---|---|---|---|---|---|
| 1 | 3, 71, 78 (drop 37) | Ch 2 — Navigating by Compass | Compass error / variation / deviation are three related, commonly confused terms — the best compare/contrast material in the source | compare-contrast | Recommended (confirm manual's exact terminology) |
| 2 | 9, 42 | Ch 2 — Survival Craft Equipment / Buoyancy | Two different "air tank" concepts (breathing air vs. buoyancy) sharing the same name — high-confusion pair | misconception-trap | Recommended for the 10-min figure (item 9) |
| 3 | 14 | Ch 2 — Types of Davits | Rottmer releasing gear fires regardless of water contact — genuine safety-relevant misconception | misconception-trap | Recommended (confirm this gear type is in scope) |
| 4 | 21 | Ch 2 — Steering Equipment | Right-hand-prop backing swings counterintuitively to port | misconception-trap | Optional (standard boat-handling physics) |
| 5 | 50 | Ch 2 — Buoyancy and Stability Features | "Self-righting" is conditional, not automatic | misconception-trap | Recommended (confirm lifeboat type in manual) |
| 6 | 61, 62 | Ch 2 — Automatic Lifeboat Drain | Sequencing: drain plug is the FIRST check, not engine/hull | misconception-trap / procedure | Optional |
| 7 | 67, 68, 73, 81 | Ch 2 — Survival Craft Equipment | Four related covered-lifeboat systems (air supply, sprinkler, water spray, hatch closure) — rich confusion set | compare-contrast | Recommended (equipment-specific, may vary by manufacturer) |
| 8 | 69, 85 | Ch 2 — Steering Equipment | Correct heading (into the seas) vs. incorrect (broadside → capsize) | compare-contrast | Optional |
| 9 | 87 (+ 8, 19, 84, 91) | Ch 4 — Beaching Survival Craft | Unshipping the rudder for a steering oar is counterintuitive; anchors a full beaching-procedure cluster | misconception-trap / scenario | Recommended (technique-specific) |
| 10 | 22, 79 (drop 59), 45, 46, 47, 18 | Ch 2 — Survival Craft Equipment / Retrieving the Lifeboat | Sea painter attachment and use, cleaned up into one non-redundant set | recall / procedure | Recommended (attachment method may vary) |
| 11 | 70 | Ch 4 — Man Overboard | Direct-approach scenario, good standalone hard question | scenario | Optional |
| 12 | 27, 33, 36 | Ch 2 — Markings | Required vs. NOT-required marking traps, plus the general vessel-name rule | misconception-trap / recall | Recommended (confirm exact marking list) |
| 13 | 34, 54, 76, 77 (drop 35) | Ch 1 — Find Your Shipboard Emergency Duties / Be Prepared for Emergencies | Consolidated muster-list and Master's-responsibility cluster | recall | Optional |
| 14 | 38 | Ch 5 — VHF Survival Craft Transceiver | Universal fact (Mayday); easy, safe win | recall | Not needed |
| 15 | 75 | Ch 5 — Search and Rescue Radar Transponder / SART | SART + EPIRB "ON" before abandoning — spans Ch 4/5 | procedure | Recommended (light check) |
| 16 | 60, 74 | Ch 4 — Drinking Water | How much (74) + how to pace it (60) — natural two-part question | scenario / procedure | Recommended (confirm exact figures) |
| 17 | 29, 55 | Ch 4 — Survival on the Sea | Sea anchor's two distinct benefits (drift reduction vs. broaching prevention) | compare-contrast | Optional |
| 18 | 11 | Ch 2 — Numbering | Lifeboat numbering scenario | scenario | Recommended (confirm numbering convention) |
| 19 | 13, 15, 16, 17, 40, 57, 62 | Ch 2 — Davits and Winches / Launching a Lifeboat from a Gravity Davit | Core launch-sequence procedural cluster, already partly covered live — good enrichment set | procedure | Recommended for 40 (specific number); rest optional |
| 20 | 51, 52, 26, 40 | Ch 2 — Design, Construction, and Performance / Survival Craft Equipment | Numeric/regulatory specifics — high pedagogical value *if* verified, since they're exactly the kind of precise fact exams ask | recall / procedure | **Required** (Group 2 — do not draft yet) |
| 21 | 39, 64 | Ch 1 — Be Prepared for Emergencies | Alarm signal patterns and meanings | scenario / recall | 39 optional; 64 **required** |
| 22 | 8, 19, 84, 87, 91 | Ch 4 — Beaching Survival Craft | Full beaching/surf-landing procedure cluster — currently thin in the live app | scenario / misconception-trap | Recommended (technique-specific) |
| 23 | 1, 2, 12, 28, 30, 31, 32, 43, 48, 58, 63, 82, 88 | Appendix A — Glossary / Vocabulary Review | The only real candidate content for Appendix A right now | glossary | Recommended (confirm terms appear in actual glossary) |
| 24 | 41 | Ch 2 — Exterior Rescue Features | Grab rail location — simple, clean, fills a currently thin subtopic | recall | Not needed |
| 25 | 4, 6, 7, 25, 53, 72, 80 (drop 44) | Ch 2 — Propulsion Systems | Full engine/fuel/starter cluster — good enrichment for an under-tested subtopic | recall / procedure | Optional |

---

## Recommended next live-app update plan

Once any of the above is actually verified (or a deliberate decision is
made to draft it at the same unverified tier as the existing bank), the
natural rollout order is:

1. **Chapter 2 enrichment** — by far the largest opportunity. Chapter 2
   currently has 24 live questions (absorbing the old "lifeboats" and
   "launching" topics); this source alone suggests ~50+ viable Chapter 2
   candidates across steering, davits, propulsion, markings, and
   equipment. Prioritize the misconception-trap and compare/contrast
   clusters (rows 2–8, 12, 19, 25 above) over plain recall — they add
   more teaching value per question.
2. **Appendix A glossary buildout** — Appendix A has 0 live questions.
   The 13-item glossary cluster (row 23) is the only material available
   for it right now. This is the fastest way to make Appendix A
   non-empty, even at draft/unverified status.
3. **Chapter 1 emergency duties/signals** — smaller opportunity (8
   items) but directly reinforces the muster-list and alarm-signal
   content already live. Rows 13, 14, 21 above.
4. **Chapter 4 survival methods** — the beaching/surf-landing cluster
   (row 22) and drinking-water pacing (row 16) meaningfully deepen a
   chapter that's currently thinner than Chapter 2. Combine with the
   man-overboard scenario (row 11) and sea-anchor pair (row 17).

Chapters 3 (Liferafts), 5 (Signaling), and 6 (Being Rescued) got almost
nothing from this source (1, 2, and 0 items respectively) and will need
a different intake source before they can be meaningfully enriched.

## What this plan does not do

- It does not modify `course.json`.
- It does not import the intake file into the live app.
- It does not mark any item verified.
- It is not itself an implementation task — it's the reference to work
  from when that conversion work is actually authorized.
