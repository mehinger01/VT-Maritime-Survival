# Chapter 3 Class-Notes Draft Pack — Promotion Review (2026-07-20)

**Status: review only. Nothing in
`vinci-2026-07-20-chapter-3-class-notes-draft-question-pack.json` has
been added to `course.json`.**

**Revision note (second pass, same day):** this document originally
reviewed a 15-question first pass. It has been expanded in place to cover
a second question-mining pass that grew the pack to 44 candidates,
built on top of — not replacing — the same slide extraction, diagram
review, CFR reconciliation, and 36-question audit already completed. The
original 15 questions and their categorization are preserved unchanged
below; only the total counts and category lists have been updated to
include the 29 new candidates.

## Total drafted

**44 questions**, all `topicId: chapter-3-using-liferafts` (15 from the
first pass + 29 from this second pass).

## Topic coverage across all 44

| Requested topic area | Candidates |
|---|---|
| Liferaft types and capacity | `q-ch3cn-liferaft-types`, `q-ch3cn-liferaft-capacity-minimum`, `q-ch3cn-liferaft-weight-limit` |
| Required equipment and survival packs | `q-ch3cn-jackknife-approval`, `q-ch3cn-tinopener-guard`, `q-ch3cn-whistle-type`, `q-ch3cn-bailer-volume`, `q-ch3cn-heaving-line-quoit` |
| Signaling equipment | `q-ch3cn-signaling-equipment-quantities` |
| Repair equipment | `q-ch3cn-repair-outfit-quantities`, `q-ch3cn-repair-patch-wait-time` |
| Food and water | `q-ch3cn-liferaft-food-provisions`, `q-ch3cn-water-total-capacity` |
| Stowage and hydrostatic release | `q-ch3cn-hydrostatic-release-depth`, `q-ch3cn-stowage-release-sequence`, `q-ch3cn-maintenance-inspection` |
| Inflation and pressure-relief valves | `q-ch3cn-pump-bellows-requirement`, `q-ch3cn-prv-plugs-requirement`, `q-ch3cn-co2-colorless-odorless-caution`, `q-ch3cn-prv-day-night-cycle` |
| Buoyancy chambers | `q-ch3cn-buoyancy-tube-redundancy` |
| Floor and canopy design | `q-ch3cn-floor-extra-float`, `q-ch3cn-canopy-light-spec` |
| Lights, lifelines, and ballast pockets | `q-ch3cn-canopy-light-spec`, `q-ch3cn-boarding-from-sea-technique` (internal lifeline use) |
| Launching methods | `q-ch3cn-three-launch-methods`, `q-ch3cn-launch-preference-ranking-reasoning`, `q-ch3cn-manual-launch-pelicanhook` |
| Painter use | `q-ch3cn-operating-cord-length-corrected`, `q-ch3cn-rigid-painter-length-formula`, `q-ch3cn-painter-dual-attachment`, `q-ch3cn-painter-holds-alongside-cut-after-boarding` |
| Boarding | `q-ch3cn-boarding-ladder-foothold`, `q-ch3cn-boarding-methods-list`, `q-ch3cn-boarding-from-sea-technique`, `q-ch3cn-canopy-jump-injury-reasoning` |
| Righting | `q-ch3cn-righting-side-marking`, `q-ch3cn-righting-procedure-sequence`, `q-ch3cn-righting-two-person-requirement`, `q-ch3cn-righting-self-extraction-trapped` |
| Sea anchor use | `q-ch3cn-seaanchor-orientation-principle` |
| Maneuverability | `q-ch3cn-liferaft-tow-speed`, `q-ch3cn-liferaft-vs-lifeboat-maneuverability` |
| Diagram-based parts identification | `q-ch3cn-diagram-co2-tripping-lanyard`, `q-ch3cn-diagram-raincatchment-equipmentbags`, plus the 3 already-live diagram questions reinforced in the revised 36-question audit |
| Assisting Injured People | `q-ch3cn-assisting-injured-first-steps` |

Some questions serve more than one topic area above; this is intentional
— e.g., `q-ch3cn-canopy-light-spec` speaks to both "lights" and "floor
and canopy design." Sea anchor use and buoyancy chambers each received
only one new candidate because the class deck itself only supplied one
clean, undrafted new fact per topic — this reflects the source material's
actual depth per topic, not an oversight.

## Question-type mix

Across the 44 candidates: identification (e.g. `q-ch3cn-liferaft-types`,
`q-ch3cn-three-launch-methods`), purpose/function (e.g.
`q-ch3cn-pump-bellows-requirement`, `q-ch3cn-seaanchor-orientation-principle`),
procedure (e.g. `q-ch3cn-stowage-release-sequence`), sequence (e.g.
`q-ch3cn-painter-dual-attachment`, `q-ch3cn-righting-procedure-sequence`),
scenario application (e.g. `q-ch3cn-rigid-painter-length-formula`,
`q-ch3cn-painter-holds-alongside-cut-after-boarding`,
`q-ch3cn-righting-self-extraction-trapped`), comparison (e.g.
`q-ch3cn-liferaft-vs-lifeboat-maneuverability`,
`q-ch3cn-launch-preference-ranking-reasoning`), common misconception
(every candidate carries misconception-tagged distractors, per this
project's established convention), safety distinction (e.g.
`q-ch3cn-co2-colorless-odorless-caution`,
`q-ch3cn-canopy-jump-injury-reasoning`), and diagram interpretation (the
2 diagram-uncertain candidates) are all represented.

## Duplicate/near-duplicate check (full 44)

Ran `difflib.SequenceMatcher` against all 390 live prompts, all 113 live
Chapter 2 lifeboat questions specifically (checked for
lifeboat-vs-liferaft confusion risk), and internally among all 44 drafts.
**No pair reached the 0.7 true-duplicate threshold.** Every pair scoring
above 0.6 was individually reviewed:

- `q-ch3cn-bailer-volume` vs. the already-live `q-cfr-liferaft-paddles-length`
  scored **0.903** — both share the "What is the minimum
  [volume/length] required for [bailer/paddles] carried in a SOLAS
  inflatable liferaft?" template, but test different equipment (bailer
  vs. paddles) with different figures (2 L vs. 4 ft). Not a duplicate.
- `q-ch3cn-three-launch-methods` vs. `q-ch3cn-liferaft-types` (0.858,
  internal) — same "which of the following is NOT one of the three
  [X]?" template, testing launch methods vs. raft types. Not a duplicate.
- `q-ch3cn-tinopener-guard` vs. `q-ch3cn-boarding-ladder-foothold`
  (0.760, internal) — carried over from the first pass, still a
  confirmed false positive.
- `q-ch3cn-boarding-methods-list` vs. `q-ch3cn-three-launch-methods`
  (0.728, internal) — same NOT-one-of-N template, testing boarding
  methods vs. launch methods. Not a duplicate.
- `q-ch3cn-whistle-type` vs. `q-cfr-liferaft-radarreflector-optional`
  (0.721, live) — carried over from the first pass.
- `q-ch3cn-diagram-co2-tripping-lanyard` vs.
  `q-ch3cn-diagram-raincatchment-equipmentbags` (0.652, internal) —
  same "on the diagram, where is X positioned" template, testing two
  different diagram items. Not a duplicate.
- `q-ch3cn-operating-cord-length-corrected` vs. the already-live
  `q-quiz3-seapainter-length` (chapter-2-using-lifeboats, 0.608) —
  carried over from the first pass; still not a duplicate, and still the
  basis for the lifeboat-vs-liferaft painter confusion note below.

**Chapter 2 lifeboat cross-check, specifically:** searched all 113 live
Chapter 2 questions for painter/heaving-line/hydrostatic-release/
capacity/tow/davit/inspection keyword overlap with the new candidates.
Found rich existing lifeboat-specific content for all of these terms
(sea painter securing via toggle pin, sea painter length by
deck-to-waterline formula, fouled-painter scenario, ship-positioning
pickup procedure, davit mechanics, capacity-by-lesser-of-two-calculations)
— **none of it duplicates the liferaft-specific facts drafted here**,
since every matching pair describes different equipment behavior for a
different craft. This reinforces, rather than undermines, the
already-documented painter confusion risk, and surfaces a second,
similar pair worth flagging for the same future Study Guide treatment:
**lifeboat capacity determination** (the "lesser of two calculations"
rule, already live via `q-vinci-capacity-lesser-of-vh` and
`q-quizr1-nameplate-capacity`) **vs. liferaft capacity** (a flat 6-person
minimum, `q-ch3cn-liferaft-capacity-minimum`) — two different
determination methods for two different craft, not a conflict, but
another compare-and-contrast trap.

## Category: Ready for promotion (9)

Directly CFR-confirmed (official source, no reconciliation needed) or
genuinely cross-chapter multi-source confirmed:

- `q-ch3cn-liferaft-food-provisions` — multi-source (first pass)
- `q-ch3cn-jackknife-approval` — official, CFR §160.151-21(b) (first pass)
- `q-ch3cn-tinopener-guard` — official, CFR §160.151-21(g) (first pass)
- `q-ch3cn-whistle-type` — official, CFR §160.151-21(i) (first pass)
- `q-ch3cn-boarding-ladder-foothold` — official, CFR §160.151-17(n) (first pass)
- `q-ch3cn-bailer-volume` — official, CFR §160.151-21(c) (second pass)
- `q-ch3cn-repair-outfit-quantities` — official, CFR §160.151-21(y) (second pass)
- `q-ch3cn-pump-bellows-requirement` — official, CFR §160.151-21(z) (second pass)
- `q-ch3cn-prv-plugs-requirement` — official, CFR §160.151-21(aa) (second pass)

## Category: Ready only after official-source reconciliation (3)

- `q-ch3cn-maintenance-inspection` — CFR-confirmed itself, but paired
  with the class-note-only "17 months" figure; see the first-pass
  rationale (unchanged).
- `q-ch3cn-operating-cord-length-corrected` — pending correction/retirement
  of the conflicting live `q-quiz1a-heaving-line-length` (unchanged from
  first pass).
- `q-ch3cn-rigid-painter-length-formula` **(new, second pass)** — the
  10m-plus-height-or-15m formula and the flat "100 ft operating cord"
  figure both appear in the class deck without being explicitly
  reconciled as the same line under different framing or two genuinely
  different specifications. This candidate should be promoted alongside,
  not before, that reconciliation.

## Category: Class-note-supported but awaiting manual confirmation (30)

Single-source (class deck only), internally consistent, no conflict
found, but not yet cross-confirmed by CFR, an official exam, or the
manual. From the first pass (8): `q-ch3cn-hydrostatic-release-depth`,
`q-ch3cn-liferaft-weight-limit`, `q-ch3cn-liferaft-capacity-minimum`,
`q-ch3cn-canopy-light-spec`, `q-ch3cn-manual-launch-pelicanhook`,
`q-ch3cn-assisting-injured-first-steps`, `q-ch3cn-boarding-methods-list`,
`q-ch3cn-boarding-from-sea-technique`.

From the second pass (22): `q-ch3cn-liferaft-types`,
`q-ch3cn-heaving-line-quoit`, `q-ch3cn-repair-patch-wait-time`,
`q-ch3cn-signaling-equipment-quantities`, `q-ch3cn-water-total-capacity`,
`q-ch3cn-stowage-release-sequence`, `q-ch3cn-painter-dual-attachment`,
`q-ch3cn-co2-colorless-odorless-caution`, `q-ch3cn-prv-day-night-cycle`,
`q-ch3cn-buoyancy-tube-redundancy`, `q-ch3cn-floor-extra-float`,
`q-ch3cn-three-launch-methods`, `q-ch3cn-launch-preference-ranking-reasoning`,
`q-ch3cn-painter-holds-alongside-cut-after-boarding`,
`q-ch3cn-canopy-jump-injury-reasoning`, `q-ch3cn-righting-side-marking`,
`q-ch3cn-righting-procedure-sequence`,
`q-ch3cn-righting-two-person-requirement`,
`q-ch3cn-righting-self-extraction-trapped`,
`q-ch3cn-seaanchor-orientation-principle`, `q-ch3cn-liferaft-tow-speed`,
`q-ch3cn-liferaft-vs-lifeboat-maneuverability`.

## Category: Diagram-uncertain (2, both new in the second pass)

Unlike the first pass's one excluded (undrafted) diagram, these two
**were** drafted, since their underlying diagram content is fully
labeled and unambiguous — the uncertainty is about asset preparation,
not interpretation:

- `q-ch3cn-diagram-co2-tripping-lanyard`
- `q-ch3cn-diagram-raincatchment-equipmentbags`

Both need a cropped, embedded image of the slide 22/36 parts diagram
prepared (matching this course's existing `image`/`imageAlt` pattern for
visual-study questions) before they can be promoted as proper diagram
questions. The underlying facts are not in doubt; only the image asset is
pending.

## Category: Excluded as duplicative or insufficiently supported (5, unchanged from first pass)

- Sea anchor auto-streams on inflation — duplicates `q-quiz1a-autodeploy-sea-anchor`
- Davit launch preferred / board dry — duplicates `q-quiz1a-preferred-liferaft-launch`
- Leeward-side manual launch — duplicates `q-quiz1a-windward-manual-launch`
- CO2-bottle-side righting technique — duplicates `q-raft-2`/`q-raft-11`
- Floor-insulation direction (cold/warm) — duplicates `q-quizr1-floor-vs-canopy` / `q-quiz6-liferaft-climate-adaptation-compare-vh`

No new exclusions were added in the second pass — every fact considered
this round that overlapped an existing live question was folded into one
of the 44 drafted questions with a distinct angle instead (e.g.
`q-ch3cn-canopy-jump-injury-reasoning` tests the *reasoning* behind an
already-identified discouraged boarding method, rather than re-testing
which method is discouraged).

## Final category breakdown

| Category | Count |
|---|---:|
| Ready for promotion | 9 |
| Needs official-source reconciliation | 3 |
| Class-note-supported, awaiting manual confirmation | 30 |
| Diagram-uncertain (asset pending) | 2 |
| **Total drafted** | **44** |
| Excluded as duplicative (not counted in the 44) | 5 |

## What was deliberately not drafted at all (unchanged from first pass)

- Anything from slide 5's ration-package photo (2,300 kcal/10,300 kJ) —
  held pending the calorie-figure reconciliation.
- Anything from slide 14's ballast-bag "slows drifting" claim as a
  standalone fact — held pending the wording-clarification flag on
  `q-quizr1-seaanchor-vs-ballastbags`.
- Slide 9's "Top Plate / Bottom Plate" mechanism diagram — no caption
  identifies what it depicts; still not drafted.
- Anything from the 3 blank slides (17, 28, 29) — no content exists to
  draft from.
