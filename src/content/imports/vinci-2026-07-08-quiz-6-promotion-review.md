# Promotion Review — Vinci Quiz 6 Batch (2026-07-08)

**Status: draft complete, awaiting a separate promotion task. Nothing in this
batch has been added to `src/content/course.json`.**

## Source

- Batch: `vinci-2026-07-08-quiz-6`
- Source: completed, handwritten "Review Quiz #6" (Water Survival, SHLSOS
  Course #549), 22 fill-in-the-blank questions across 5 pages.
- Images: `public/content/vinci/2026-07-08-quiz-6/2026-07-07_065906-1.jpg`
  through `-5.jpg`.
- Intake: `src/content/imports/vinci-2026-07-08-quiz-6-source-intake.json`
- Draft pack: `src/content/imports/vinci-2026-07-08-quiz-6-draft-question-pack.json`

## Duplicate / near-duplicate screening

Checked all 22 source questions against the full 250-question live bank
(keyword search plus a `difflib.SequenceMatcher` pass over the final 12
drafted prompts, ~0.7 ratio treated as the "true duplicate" threshold). No
drafted question scored above 0.7 against any live question; the highest
incidental score was 0.632 (`q-quiz6-condensation-collect-drink` vs.
`q-quiz1a-sealing-clamps`), which is generic-phrasing overlap only, not a
content duplicate.

**Dropped as duplicates (not drafted):**

| Source Q# | Topic | Duplicates |
|---|---|---|
| 6 | Type I lifejacket face-up design | `q-quiz1a-typeI-pfd-false` |
| 18 | Purpose of side-bench air tanks | `q-quiz1a-side-bench-buoyancy-location`, `q-ch2-airtanks-vh` |
| 19 | Sealing clamp | `q-quiz1a-sealing-clamps` |
| 20 | Tricing pendant release timing | `q-gloss-tricing` |
| 22 | Disadvantage of a windward liferaft launch | `q-quiz1a-windward-manual-launch` (fact already present in its misconception text) |

**Left blank by the student (skipped, not guessed):** Q7 (immersion suit air
bladder), Q8 (survival time without water), Q9 (heavy-surf lifeboat
landing).

**Internal near-duplicate pairs merged into one question:**

| Source Q#s | Merged into |
|---|---|
| 3 + 4 (cold-climate vs. tropical-climate liferaft setup) | `q-quiz6-liferaft-climate-adaptation-compare-vh` |
| 13 + 16 (condensation purpose + collection method) | `q-quiz6-condensation-collect-drink` |

22 source questions − 5 duplicates − 3 blank − 2 questions absorbed by
merging (each pair counted as 2 source questions producing 1 drafted
question) = **12 drafted questions**.

## Per-question review

| ID | Confidence | Recommended status | Ready now? |
|---|---|---|---|
| `q-quiz6-liferafts-scattered-grouptogether` | High | `quiz-derived-study` | Yes |
| `q-quiz6-beach-landing-hightideline` | High | `quiz-derived-study` | Yes |
| `q-quiz6-liferaft-climate-adaptation-compare-vh` | High | `quiz-derived-study` | Yes |
| `q-quiz6-pfd-required-items` | High | `quiz-derived-study` | Yes |
| `q-quiz6-oilfire-waterentry` | High | `quiz-derived-study` | Yes |
| `q-quiz6-swim-strongcurrent-45deg` | High | `quiz-derived-study` | Yes |
| `q-quiz6-lifeboat-avoidbroaching` | High | `quiz-derived-study` | Yes |
| `q-quiz6-condensation-collect-drink` | High | `quiz-derived-study` | Yes |
| `q-quiz6-williamsonturn-manoverboard` | High (scoped narrowly, see note) | `quiz-derived-study` | Yes |
| `q-quiz6-abandonship-jump-procedure` | High | `quiz-derived-study` | Yes |
| `q-quiz6-generalalarm-continuoussignal` | High | `quiz-derived-study` | Yes |
| `q-quiz6-holdwaterall-command` | High | `quiz-derived-study` | Yes |

**No questions held for review.** Unlike Quiz 4 (which had one ambiguous
handwritten notation), every one of the 22 Quiz 6 source questions was
either clearly legible and fully answered, a clean duplicate/blank to drop,
or a clean merge candidate. There are no diagram-dependent questions in
this batch and no unclear handwriting requiring a `needs-review` hold.

### Notes on individual questions

- **`q-quiz6-pfd-required-items`** — partially overlaps descriptive text
  already present as a distractor in the live `q-quiz1a-typeI-pfd-false`
  question (which mentions reflective tape, whistle, and strobe light in
  passing). This question tests the fuller required-item list as its own
  fact and adds "name of the vessel," which is genuinely new content not
  tested anywhere live. Kept as a distinct question rather than dropped.
- **`q-quiz6-williamsonturn-manoverboard`** — the student's handwritten
  answer documents only the Williamson Turn's first phase (turn toward the
  side the person fell until the heading changes 60° from the original
  course). The question and explanation are scoped to match exactly what
  the source supports, and the explanation text notes that the full
  maneuver continues beyond this first phase, rather than asserting the
  complete procedure as if the source had documented all of it.
- **`q-quiz6-abandonship-jump-procedure`** — distinct from the already-live
  "15 feet or less" preferred jump-height fact; this question covers body
  position (cross arms and legs) and a pre-jump safety check, not height.
- **`q-quiz6-generalalarm-continuoussignal`** — distinct from the
  already-live seven-short-blasts-plus-one-long boat-stations signal
  (`q-ep-4`); this is the separate general alarm/fire signal (continuous
  bell ≥10s plus continuous whistle blast >10s).
- **`q-quiz6-holdwaterall-command`** — distinct from the already-live "Way
  enough," "Backwater all," and "Out oars" rowing commands; this is the
  command to take all way off a moving lifeboat.

## Overlap with existing live content

5 source questions were dropped as clean duplicates of already-live
questions (table above); 2 more source questions were absorbed into merged
combination questions rather than becoming separate near-duplicate
entries. No drafted question in this batch scored above the 0.7 duplicate
threshold against the live bank in the final similarity pass.

## Estimated value of this batch

**High.** All 12 drafted questions are clean, fully-answered, non-duplicate
material spanning five different chapters (liferafts, survival methods,
lifeboats, being-rescued, signaling) with a solid mix of difficulty
(medium through very-hard). Two are meaningful compare-and-contrast pairs
(cold vs. tropical liferaft setup; the four rowing commands vs. one
another) which directly serve the Compare & Contrast methodology called
for in this project's learning design. None require an image. This is the
cleanest of the Vinci quiz batches processed so far — no held-back
questions and no content contradictions with existing material.
