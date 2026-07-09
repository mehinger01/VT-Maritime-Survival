# Promotion Review — Vinci 2026-07-08 Quiz 1a Draft Question Pack

**Source pack:** `src/content/imports/vinci-2026-07-08-quiz-1a-draft-question-pack.json` (36 questions)
**Source intake:** `src/content/imports/vinci-2026-07-08-quiz-1a-source-intake.json`
**Compared against:** all 159 live questions in `src/content/course.json`
**Status:** review only — nothing promoted, `course.json` and the draft pack are unmodified.

## Method

- Duplicate/near-duplicate risk was checked with a `difflib.SequenceMatcher` prompt-similarity scan of all 36 draft prompts against all 159 live prompts. No pairing scored above ~0.64, and every match at that ceiling was a generic-phrasing collision (shared words like "lifeboat," "purpose," "painter line"), not a real content duplicate. The draft pack's own `duplicateCheckNotes` also documents that 3 quiz questions (11, 19, 28) were already excluded during drafting as duplicates/ambiguous, which is why this pack has 36 questions instead of the quiz's original 39.
- Live question density per chapter (for the "weak area" question):

  | Chapter | Live questions |
  |---|---|
  | chapter-1-planning-ahead | 33 |
  | **chapter-2-using-lifeboats** | **66** |
  | **chapter-3-using-liferafts** | **12** |
  | **chapter-4-survival-methods** | **13** |
  | **chapter-5-signaling** | **12** |
  | **chapter-6-being-rescued** | **13** |
  | appendix-a-glossary | 10 |

  Chapters 3, 4, 5, 6 are genuinely thin relative to Chapter 2. 19 of the 36 draft questions land in exactly those four chapters, so this batch is a good opportunity to correct the imbalance.

## Per-question review

| # | id | topicId | difficulty | type | answer confidence | dup/near-dup risk vs. live 159 | recommended status | recommended action |
|---|---|---|---|---|---|---|---|---|
| 1 | q-quiz1a-redstar-signal | chapter-5-signaling | hard | text | high | none found | quiz-derived-study | promote as-is |
| 2 | q-quiz1a-typeI-pfd-false | chapter-1-planning-ahead | hard | text | high | none found | quiz-derived-study | promote as-is |
| 3 | q-quiz1a-abandonship-passenger-action | chapter-1-planning-ahead | easy | text | high | related, not duplicate — live `q-ch1-abandonship-drill-components-medium` tests overall drill components (elimination format); this tests the specific passenger-action angle | quiz-derived-study | promote as-is |
| 4 | q-quiz1a-fastrescueboat-approach | chapter-6-being-rescued | hard | text | high | none found | quiz-derived-study | promote as-is |
| 5 | q-quiz1a-liferaft-cold-protection | chapter-3-using-liferafts | medium | text | **medium** — see note below | none found (related to pending, unpromoted draft `q-quizr1-floor-vs-canopy`, different angle) | needs-review (until confirmed) | **hold for verification** |
| 6 | q-quiz1a-seaanchor-substitute | chapter-3-using-liferafts | hard | text | **medium** — see note below | none found | needs-review (until confirmed) | **hold for verification** |
| 7 | q-quiz1a-first-water-liferaft | chapter-4-survival-methods | medium | text | high | none found | quiz-derived-study | promote as-is |
| 8 | q-quiz1a-rainwater-first-batch | chapter-3-using-liferafts | medium | text | high | none found | quiz-derived-study | promote as-is |
| 9 | q-quiz1a-enclosed-lifeboat-maxspeed | chapter-2-using-lifeboats | hard | text | high | not a duplicate, but shares the number "6 knots" with the pending draft `q-quizr1-class1-speed` (a *minimum* speed, not this question's *maximum*) — confusion risk, not content risk | quiz-derived-study | **promote after light wording check** (confirm the explanation's max-vs-min distinction reads clearly on its own, without relying on the other question being live) |
| 10 | q-quiz1a-coi-lifeboatmen-source | chapter-1-planning-ahead | medium | text | high | related, not duplicate — live `q-vinci-coi-lifeboatmen-4160` tests the specific table VALUE; this tests WHERE that value is documented | quiz-derived-study | promote as-is |
| 11 | q-quiz1a-continuous-blast-distress | chapter-5-signaling | medium | text | high | none found | quiz-derived-study | promote as-is |
| 12 | q-quiz1a-sealing-clamps | chapter-3-using-liferafts | easy | text | high | none found | quiz-derived-study | promote as-is |
| 13 | q-quiz1a-sart-know-searching | chapter-5-signaling | medium | text | high | related, not duplicate — live `q-sig-2`/`q-sig-4` test SART from a rescuer's-perspective/EPIRB-compare angle; this tests the survivor's own point of view | quiz-derived-study | promote as-is |
| 14 | q-quiz1a-turnbuckle | chapter-2-using-lifeboats | easy | text | high | none found | quiz-derived-study | promote as-is |
| 15 | q-quiz1a-harbor-lifeboat-requirement | chapter-2-using-lifeboats | medium | text | high | none found | quiz-derived-study | promote as-is |
| 16 | q-quiz1a-windward-manual-launch | chapter-3-using-liferafts | medium | text | high | none found | quiz-derived-study | promote as-is |
| 17 | q-quiz1a-preferred-liferaft-launch | chapter-3-using-liferafts | easy | text | high | none found | quiz-derived-study | promote as-is |
| 18 | q-quiz1a-heaving-line-length | chapter-3-using-liferafts | hard | text | high | none found | quiz-derived-study | promote as-is |
| 19 | q-quiz1a-preferred-jump-height | chapter-4-survival-methods | medium | text | high | none found | quiz-derived-study | promote as-is |
| 20 | q-quiz1a-hypothermia-water-temp | chapter-4-survival-methods | hard | text | high | none found | quiz-derived-study | promote as-is |
| 21 | q-quiz1a-manoverboard-dont-swim | chapter-4-survival-methods | easy | text | high | none found | quiz-derived-study | promote as-is |
| 22 | q-quiz1a-d011sa-flemming-gear | chapter-2-using-lifeboats | hard | **image (D011SA)** | high (answer marking is clean; no D014SA/D015SA naming issue for this diagram) | none found | visual-study (once image concern resolved) | **hold for diagram/image issue** — see note below |
| 23 | q-quiz1a-liferaft-in-charge | chapter-3-using-liferafts | medium | text | high | none found | quiz-derived-study | promote as-is |
| 24 | q-quiz1a-gunwale-location | chapter-2-using-lifeboats | medium | text | high | none found | quiz-derived-study | promote as-is |
| 25 | q-quiz1a-lengthwise-strength | chapter-2-using-lifeboats | hard | text | high | none found | quiz-derived-study | promote as-is |
| 26 | q-quiz1a-side-bench-buoyancy-location | chapter-2-using-lifeboats | easy | text | high | related, not duplicate — pending draft `q-quizr1-buoyancy-units` tests what buoyancy units are made of; this tests where they're located | quiz-derived-study | promote as-is |
| 27 | q-quiz1a-d015sa-righting-strap | chapter-3-using-liferafts | hard | **image (D015SA, cited as "D014SA")** | high (answer marking clean) | none found | visual-study (once image concern resolved) | **hold for diagram/image issue** — see note below |
| 28 | q-quiz1a-toggle-pin-tiller | chapter-2-using-lifeboats | hard | text | high | none found — and directly resolves a framing problem flagged in the pending draft `q-vinci-togglepin-vs-pintlegudgeon`'s own promotion review (that one tested the wrong half of the pintle/gudgeon-vs-toggle-pin pair) | quiz-derived-study | promote as-is |
| 29 | q-quiz1a-d015sa-heavingline-number | chapter-3-using-liferafts | very-hard | **image (D015SA, cited as "D014SA")** | high (answer marking clean) | none found | visual-study (once image concern resolved) | **hold for diagram/image issue** — see note below |
| 30 | q-quiz1a-40person-motor-false | chapter-2-using-lifeboats | medium | text | high | none found | quiz-derived-study | promote as-is |
| 31 | q-quiz1a-d015sa-pressurevalve | chapter-3-using-liferafts | hard | **image (D015SA, cited as "D014SA")** | high (answer marking clean) | none found | visual-study (once image concern resolved) | **hold for diagram/image issue** — see note below |
| 32 | q-quiz1a-out-oars-command | chapter-2-using-lifeboats | medium | text | high | related, not duplicate — pending draft `q-quizr1-rowing-commands-compare-vh` covers "Oars," "Backwater all," "Way enough"; this is a distinct fourth command | quiz-derived-study | promote as-is |
| 33 | q-quiz1a-coxswain-turn-left | chapter-2-using-lifeboats | very-hard | text | high | none found | quiz-derived-study | promote as-is |
| 34 | q-quiz1a-enclosed-lifeboat-triad | chapter-2-using-lifeboats | medium | text | high | none found | quiz-derived-study | promote as-is |
| 35 | q-quiz1a-autodeploy-sea-anchor | chapter-3-using-liferafts | easy | text | high | none found | quiz-derived-study | promote as-is |
| 36 | q-quiz1a-bow-stern-hatchet | chapter-2-using-lifeboats | very-hard | text | high (marking is clean — the flag is about the claim itself, not the handwriting) | none found | needs-review (until confirmed) | **hold for verification** |

All `sourceReference` values already present in the draft pack cite the specific quiz-1a image and question number (e.g. `"Vinci source batch 2026-07-08-quiz-1a, image 2026-07-08_044219-2.jpg (Final Review Quiz #1, question 5 of 39)"`) and are accurate as drafted — no changes needed there regardless of disposition.

## Special attention items (as requested)

**1. Q5 (`q-quiz1a-liferaft-cold-protection`) and Q6 (`q-quiz1a-seaanchor-substitute`) — medium-confidence markings.**
Both come from the same photo (`2026-07-08_044219-2.jpg`), where the source intake describes *two* pencil circles per question: one clean circle (read as the final answer) and one circle-with-diagonal-strikethrough (read as an eliminated choice the test-taker reconsidered and rejected). That reading convention is plausible and consistent between the two questions, but it is an inference, not a directly-marked single answer the way the other 34 questions are. Recommend holding both as `needs-review` until Vinci confirms the B/D (Q5) and C/D (Q6) reading against the manual or the original quiz sheet — cheap to verify, and getting either one backwards would ship a wrong-answer-key question.

**2. Q39 (`q-quiz1a-bow-stern-hatchet`) — bow/stern hatchet claim.**
The pencil circle itself is unambiguous (choice D, "Hatchet"), so this isn't a marking-confidence problem. The concern is the claim: "one hatchet at the bow AND one at the stern" is specific and not corroborated anywhere else in this repo's content. It's also built to trade on a real, adjacent fact already live elsewhere (a fire extinguisher at each end of engine-powered lifeboats) as a deliberately plausible wrong-answer distractor — choice B in this same question. That's exactly the kind of surprising, isolated claim that's cheap to get wrong and expensive to un-teach once a student has memorized it. Recommend `needs-review` / hold for verification against the manual or Vinci directly before promoting.

**3. The 4 diagram-based questions.**
All four (`q-quiz1a-d011sa-flemming-gear`, `q-quiz1a-d015sa-righting-strap`, `q-quiz1a-d015sa-heavingline-number`, `q-quiz1a-d015sa-pressurevalve`) currently point `image` at the same single photo, `2026-07-08_044219-8.jpg` — an uncropped sheet showing *two* diagrams (D011SA on top, D015SA on bottom) with 14 and ~10 numbered leader lines respectively. A student looking at any one of these questions today would see the full sheet, not just the relevant diagram or the relevant numbered item, which undercuts the point of a visual-study question. All four should be held until the image is cropped into per-diagram (ideally per-item-highlighted) images — the same class of problem the quiz-review-1 batch hit with its liferaft diagram, and the same fix (cropping) applies here.

That said, the task's framing of "the D014SA/D015SA mismatch" applies precisely to only **3 of the 4** — worth being exact about, since it affects what "resolved" means for each:
- `q-quiz1a-d015sa-righting-strap`, `q-quiz1a-d015sa-heavingline-number`, `q-quiz1a-d015sa-pressurevalve` all reference a diagram the quiz text calls "D014SA," but the only diagram sheet in this batch is printed "D015SA." The source intake's read (a typo in the quiz, not a different missing diagram) is almost certainly correct — the cited item identities (pressure relief valve, heaving line, righting strap) all match liferaft features visible on the D015SA drawing, and no second liferaft diagram exists anywhere in the batch. But it's still an inference, not a confirmed fact, and it should be confirmed with Vinci (or against the manual) before a question's explanation text asserts either label as correct.
- `q-quiz1a-d011sa-flemming-gear` has **no such naming mismatch** — the quiz text and the diagram sheet both agree it's D011SA. Its only blocker is the shared-uncropped-image problem above, not a label conflict.

Net: all 4 are `hold for diagram/image issue`, but 3 of them have a second, independent thing to resolve (the label) beyond cropping.

**4. Overlap with the existing 159 live questions.**
No genuine duplicates were found. The similarity scan's highest-scoring matches (~0.55–0.64) were all generic-phrasing collisions across unrelated content (e.g., multiple questions independently ask "what is the purpose of X"), not shared facts. Six draft questions deliberately test a different angle of a fact that's already live or already pending in another draft pack (Q3, Q10, Q13, Q26, Q28, Q32 in the table above) — each is annotated with the specific live/pending question it relates to and why it's additive rather than redundant, consistent with what the draft pack's own `duplicateCheckNotes` already flagged during drafting.

**5. Filling weak Chapters 3, 4, 5, 6.**
19 of the 36 draft questions land in these four chapters: 10 in chapter-3-using-liferafts (currently 12 live), 5 in chapter-4-survival-methods (currently 13 live), 3 in chapter-5-signaling (currently 12 live), 1 in chapter-6-being-rescued (currently 13 live). Of those 19, 14 are in the "promote as-is" bucket (all of chapter-3/4/5/6 except the two Q5/Q6 medium-confidence holds and the 3 D015SA-diagram holds) — promoting just those 14 would raise chapter-3 from 12→19 live questions and chapter-4 from 13→18, meaningfully closing the gap with chapter-2 without touching anything flagged for verification.

## Recommended groupings

**Safest first-promotion set (28 questions — all "promote as-is," `quiz-derived-study`):**
q-quiz1a-redstar-signal, q-quiz1a-typeI-pfd-false, q-quiz1a-abandonship-passenger-action, q-quiz1a-fastrescueboat-approach, q-quiz1a-first-water-liferaft, q-quiz1a-rainwater-first-batch, q-quiz1a-coi-lifeboatmen-source, q-quiz1a-continuous-blast-distress, q-quiz1a-sealing-clamps, q-quiz1a-sart-know-searching, q-quiz1a-turnbuckle, q-quiz1a-harbor-lifeboat-requirement, q-quiz1a-windward-manual-launch, q-quiz1a-preferred-liferaft-launch, q-quiz1a-heaving-line-length, q-quiz1a-preferred-jump-height, q-quiz1a-hypothermia-water-temp, q-quiz1a-manoverboard-dont-swim, q-quiz1a-liferaft-in-charge, q-quiz1a-gunwale-location, q-quiz1a-lengthwise-strength, q-quiz1a-side-bench-buoyancy-location, q-quiz1a-toggle-pin-tiller, q-quiz1a-40person-motor-false, q-quiz1a-out-oars-command, q-quiz1a-coxswain-turn-left, q-quiz1a-enclosed-lifeboat-triad, q-quiz1a-autodeploy-sea-anchor

**Promote after a light wording check (1 question):**
q-quiz1a-enclosed-lifeboat-maxspeed — content and marking are solid; just confirm the max-vs-min explanation reads unambiguously on its own before it goes live, given the shared "6 knots" figure with a pending minimum-speed draft question.

**Promote as `quiz-derived-study` now, i.e. no separate "quiz-derived-study bucket" beyond the above** — all 29 non-diagram, non-held questions share this same recommended status; there's no split between "safest" and "quiz-derived-study" groups here, they're the same 29.

**Promote as `visual-study` only after the diagram concern is acceptable (4 questions):**
q-quiz1a-d011sa-flemming-gear (needs cropping only), q-quiz1a-d015sa-righting-strap, q-quiz1a-d015sa-heavingline-number, q-quiz1a-d015sa-pressurevalve (each needs cropping AND the D014SA/D015SA label confirmed).

**Should remain `needs-review` (3 questions):**
q-quiz1a-liferaft-cold-protection, q-quiz1a-seaanchor-substitute (medium-confidence answer markings), q-quiz1a-bow-stern-hatchet (uncorroborated claim).

**Should be rejected or skipped:**
None of the 36 drafted questions warrant rejection. (The 3 questions from the original 39-question quiz that warranted skipping — genuinely ambiguous double-circle marking on question 11, and duplicate content on questions 19 and 28 — were already excluded before this pack was drafted; see the pack's `duplicateCheckNotes`.)
