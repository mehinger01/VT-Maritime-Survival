# Chapter 3 Class-Notes Draft Pack — Promotion Review (2026-07-20)

**Status: review only. Nothing in
`vinci-2026-07-20-chapter-3-class-notes-draft-question-pack.json` has
been added to `course.json`.**

## Total drafted

**15 questions**, all `topicId: chapter-3-using-liferafts`.

## Duplicate/near-duplicate check

Ran `difflib.SequenceMatcher` against all 390 live prompts and internally
among the 15 drafts. **No pair reached the 0.7 true-duplicate
threshold except one**, reviewed and confirmed as a false positive:

- `q-ch3cn-whistle-type` vs. the already-live
  `q-cfr-liferaft-radarreflector-optional` scored **0.721** — both share
  the "[Is/What] X required in a SOLAS inflatable liferaft?" template,
  but test completely different equipment (whistle vs. radar reflector)
  with completely different answers. Not a duplicate.
- `q-ch3cn-tinopener-guard` vs. `q-ch3cn-boarding-ladder-foothold`
  (0.760, internal) — same template-driven false positive, different
  equipment.
- `q-ch3cn-operating-cord-length-corrected` vs. the already-live
  `q-quiz3-seapainter-length` (chapter-2-using-lifeboats) scored 0.608 —
  not a duplicate, but this comparison surfaced a genuine
  **lifeboat-sea-painter vs. liferaft-painter confusion risk**, now
  documented in the reconciliation report as a commonly-confused-concept
  candidate for future Study Guide work.

No other pair scored above 0.63.

## Category: Ready for promotion (5)

Directly CFR-confirmed (official source, no reconciliation needed) or
genuinely cross-chapter multi-source confirmed:

- `q-ch3cn-liferaft-food-provisions` — multi-source (class deck + the
  already-live Chapter 4 manual-sourced Food content, same figure)
- `q-ch3cn-jackknife-approval` — official (CFR §160.151-21(b))
- `q-ch3cn-tinopener-guard` — official (CFR §160.151-21(g))
- `q-ch3cn-whistle-type` — official (CFR §160.151-21(i))
- `q-ch3cn-boarding-ladder-foothold` — official (CFR §160.151-17(n))

## Category: Ready only after official-source reconciliation (1)

- `q-ch3cn-maintenance-inspection` — the question itself is fully
  CFR-confirmed (§160.151-61) and could promote on its own, but it sits
  next to the class deck's complementary "17 months" inspection-interval
  figure (a separate, not-yet-CFR-confirmed candidate below). Listed here
  rather than the "ready" bucket only because a future task should decide
  whether to promote both together with a clear distinction between the
  CFR-mandated checklist/servicing/log requirement and the class-note-only
  17-month figure, so a student doesn't read them as one single,
  equally-verified fact.

## Category: Class-note-supported but awaiting manual confirmation (7)

Single-source (class deck only), internally consistent, no conflict
found, but not yet cross-confirmed by CFR, an official exam, or the
manual:

- `q-ch3cn-hydrostatic-release-depth`
- `q-ch3cn-liferaft-weight-limit`
- `q-ch3cn-liferaft-capacity-minimum`
- `q-ch3cn-canopy-light-spec`
- `q-ch3cn-manual-launch-pelicanhook`
- `q-ch3cn-assisting-injured-first-steps`
- `q-ch3cn-boarding-methods-list`
- `q-ch3cn-boarding-from-sea-technique`

(8 listed — one more than the instruction's five-bucket framing implies
per bucket, since this is the largest category by design: most of the
deck's content is genuinely new and class-note-only.)

## Category: Diagram-uncertain (0 drafted, 1 identified and excluded)

- Slide 9's "Top Plate / Bottom Plate" mechanism diagram (labeled A, B,
  C stages) has no caption identifying what it depicts. No question was
  drafted from it — see the reconciliation report.

## Category: Excluded as duplicative or insufficiently supported (5)

Facts considered for drafting, then excluded because the underlying fact
is **already tested by a live question** (these instead feed the
"eligible for status upgrade" list in the revised 36-question audit, not
this new-candidate pack):

- Sea anchor auto-streams on inflation — duplicates `q-quiz1a-autodeploy-sea-anchor`
- Davit launch preferred / board dry — duplicates `q-quiz1a-preferred-liferaft-launch`
- Leeward-side manual launch — duplicates `q-quiz1a-windward-manual-launch`
- CO2-bottle-side righting technique — duplicates `q-raft-2`/`q-raft-11`
- Floor-insulation direction (cold/warm) — duplicates `q-quizr1-floor-vs-canopy` / `q-quiz6-liferaft-climate-adaptation-compare-vh`

## What was deliberately not drafted at all

- Anything from slide 5's ration-package photo (2,300 kcal/10,300 kJ) —
  held pending the calorie-figure reconciliation, not drafted as its own
  question.
- Anything from slide 14's ballast-bag "slows drifting" claim as a
  standalone fact — held pending the wording-clarification flag on the
  existing `q-quizr1-seaanchor-vs-ballastbags`, to avoid promoting a new
  question that could read as contradicting a live one.
- The rigid-liferaft painter-length formula (10m + height, or 15m,
  whichever greater) — genuinely new and well-sourced, but complex enough
  (a conditional formula, not a flat figure) that it's flagged for a
  future task to draft carefully with a worked example, rather than
  rushed into this pack.
- Anything from the 3 blank slides (17, 28, 29) — no content exists to
  draft from.
