# Promotion Review — Vinci 2026-07-08 Quiz 3 Draft Question Pack

**Source pack:** `src/content/imports/vinci-2026-07-08-quiz-3-draft-question-pack.json` (9 questions)
**Source intake:** `src/content/imports/vinci-2026-07-08-quiz-3-source-intake.json`
**Compared against:** all 228 live questions in `src/content/course.json`
**Status:** review only — nothing promoted, `course.json` is unmodified.

## Source

"Review Quiz #3," Water Survival, SHLSOS Course #549 — a completed, handwritten 14-question fill-in-the-blank quiz across 3 photographed pages, same format as the 2026-07-08-quiz-review-1 batch (no multiple-choice options on the source itself; choices were constructed around the student's own answer as the correct one). All three source images are clean — no doodles or diagram content overlapping any answer, so nothing in this batch is image-based.

## Duplicate screening (before drafting)

Checked all 14 source questions against the live bank first. **4 of the 14 were dropped entirely** — exact or near-exact duplicates with no new angle:

| # | Fact | Duplicates |
|---|---|---|
| 1 | "A bucket" as a sea-anchor substitute | `q-quiz1a-seaanchor-substitute` (choice A is literally "A bucket") |
| 3 | Water/food permitted after 24 hrs | Premise already embedded in `q-quiz1a-first-water-liferaft` |
| 10 | 3 lifeboatmen for 50-passenger lifeboat | `q-vinci-coi-lifeboatmen-4160` (50 falls in the same 41-60 band already tested) |
| 13 | Lifeboats lowered every 3 months | `q-cfr-lifeboat-lowered-quarterly`, word-for-word |

Question 4's core "hatchet at each end" fact also duplicates live `q-quiz1a-bow-stern-hatchet` (itself independently confirmed by 46 CFR 169.529(k)) — only its new "near the releasing gear" placement detail was drafted, as a separate, narrower question. The remaining **9 questions were drafted**; a post-draft similarity scan against all 228 live prompts found no further hidden duplicates (the highest-scoring matches were shared question-template phrasing — e.g. multiple "Which of the following is NOT..." elimination questions — not overlapping facts), except one already-flagged case discussed below.

## Per-question review

| # | id | topicId | confidence | recommended status | ready now? |
|---|---|---|---|---|---|
| 1 | `q-quiz3-seapainter-length` | chapter-2-using-lifeboats | high | quiz-derived-study | Yes |
| 2 | `q-quiz3-hatchet-releasinggear-location` | chapter-2-using-lifeboats | high | quiz-derived-study | Yes |
| 3 | `q-quiz3-seaanchor-anticapsize` | chapter-2-using-lifeboats | high | quiz-derived-study | Yes |
| 4 | `q-quiz3-seaanchor-lines-compare-vh` | chapter-2-using-lifeboats | high | quiz-derived-study | Yes |
| 5 | `q-quiz3-lifeboat4-location-scenario` | chapter-2-using-lifeboats | **medium** | needs-review | No |
| 6 | `q-quiz3-stationbill-itemslist` | chapter-1-planning-ahead | high (marking), low new-info value | needs-review | No |
| 7 | `q-quiz3-sheave-diameter` | chapter-2-using-lifeboats | high | quiz-derived-study | Yes |
| 8 | `q-quiz3-fallwire-lubrication` | chapter-2-using-lifeboats | high | quiz-derived-study | Yes |
| 9 | `q-quiz3-winch-falls-material` | chapter-2-using-lifeboats | high, one unverified technical term | quiz-derived-study | Yes |

**7 of 9 ready for promotion now. 2 held for review.**

### Notes on the two held items

**`q-quiz3-lifeboat4-location-scenario`** — the student's answer clearly states "portside of the vessel" and "forward of lifeboat #6," but the connecting word linking to an inserted "lifeboat #2" note isn't legibly readable. I reconstructed "aft of #2" from the already-live standard numbering convention (`q-ch2-numbering-official-vh`) rather than transcribing it directly — per instruction not to guess unclear handwriting, this reconstruction is flagged rather than presented as a directly-read fact. Separately, this question's prompt opens with nearly identical framing to `q-ch2-numbering-official-vh` ("A vessel has 3 lifeboats on each side...") since it's a worked example of the same rule; it tests an application/scenario skill distinct from that question's abstract-rule format, but the marginal new-information value is modest given how directly the live question's own answer choice already implies the worked-example result. Hold for a source/handwriting re-check before promoting.

**`q-quiz3-stationbill-itemslist`** — the marking itself is clear (no ambiguity in what the student wrote), but the fact substantially overlaps with the already-live `q-ch1-vocab-stationbill-easy`. It tests a different angle (an enumerated list vs. a bare definition), which is why it was drafted at all, but per the same reasoning already applied to comparable review-variant content in this project (e.g. `q-vinci-limber-holes`), it's a low-priority `needs-review` candidate rather than a clean promote.

**`q-quiz3-winch-falls-material`** — promoted-ready but flagged for a quick confirmation: "6x19 regular lay filler wire" is read with reasonable confidence (it's a real, standard wire-rope construction term consistent with the handwriting) but wasn't independently cross-verified against a second source the way some other batches' facts have been.

## Overlap with existing live content

Beyond the 4 dropped facts and the 1 hatchet-detail narrowed above, no genuine overlap was found. The batch fills chapter-2-using-lifeboats content that's new to the live bank: sea painter length formula, sheave-to-wire-rope diameter ratio, fall-wire lubrication rationale, winch-fall wire rope construction, and a sea anchor's two-line (tripping vs. drag) rigging — none of which had any prior live coverage.

## Estimated value of this batch

Solid but modest. 7 clean, well-sourced, non-duplicate questions is a good yield from a 14-question quiz, and several (sea painter length, sheave diameter, fall-wire lubrication, winch-fall wire rope construction) are exactly the kind of specific, technical, "worth memorizing" facts this course rewards, filling out chapter-2-using-lifeboats' equipment/rigging detail rather than duplicating its already-heavy coverage of numbering/launching procedure. The compare-and-contrast question on sea anchor lines (tripping vs. drag/holding) is a genuine highlight — a two-line-on-one-fitting distinction of exactly the kind this course already uses successfully elsewhere. The 2 held items are lower-value (one a near-duplicate, one needing a legibility recheck), so this batch doesn't meaningfully expand the question count on its own, but it's a clean, low-risk addition once the 2 holds are resolved or simply left aside.
