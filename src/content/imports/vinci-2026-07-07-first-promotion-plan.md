# Vinci 2026-07-07 — First Promotion Plan

Summarizes `src/content/imports/vinci-2026-07-07-question-promotion-review.md` into a concrete promotion plan. **This file makes no changes** — `course.json` is untouched, no question's `verificationStatus` changed, and the draft pack (`vinci-2026-07-07-draft-question-pack.json`) is unedited. It's a decision document for the instructor to act on.

## 1. Questions reviewed

**18** draft questions in `vinci-2026-07-07-draft-question-pack.json`.

## 2. Recommendation breakdown

| Recommendation | Count |
|---|---|
| approve | 14 |
| revise-before-approval | 2 |
| hold-for-verification | 2 |
| reject | 0 |

## 3. Recommended first-promotion set (12 questions)

The strongest, safest subset of the 14 approved questions — picked for zero-existing-coverage value, a clean difficulty spread, and an image/text mix. All 12 have `high`-confidence sources with no `needsFollowUp` flag and no duplicate/near-duplicate conflict with the live 133-question bank.

| id | topic | difficulty | format | why it's safe to promote |
|---|---|---|---|---|
| `q-vinci-five-lifeboat-types` | chapter-2-using-lifeboats | easy | text | High-confidence source; no live question lists the five recognized lifeboat types — foundational, zero overlap. |
| `q-vinci-nonselfrighting-handholds` | chapter-2-using-lifeboats | easy | text | High-confidence source (two corroborating pages); distinct fact from the live self-righting question (compensating feature, not the righting condition itself). |
| `q-vinci-bow-marking-blockcaps` | chapter-2-using-lifeboats | easy | image | High-confidence source; tests *where/how* the bow is marked, distinct from the live question testing *which item is exempt* from vessel-name marking. |
| `q-vinci-partial-vs-total-enclosed` | chapter-2-using-lifeboats | medium | image | High-confidence source; fills a compare-and-contrast gap (construction difference) the live bank lacks entirely. |
| `q-vinci-boarding-time-10-3` | chapter-2-using-lifeboats | medium | text | High-confidence source (two corroborating pages); zero existing coverage of the passenger/cargo boarding-time rule. |
| `q-vinci-stop-diesel-air` | chapter-2-using-lifeboats | medium | text | High-confidence source; zero existing coverage of the engine-stop procedure (distinct from the live post-start-check question). |
| `q-vinci-coi-lifeboatmen-4160` | chapter-1-planning-ahead | hard | image | High-confidence source, no follow-up flag; opens an entirely uncovered topic (the C.O.I. document and its lifeboatman table). |
| `q-vinci-rescueboat-speed-tow-hard` | chapter-2-using-lifeboats | hard | text | High-confidence source; the live bank has **zero** rescue-boat-specific performance coverage at all. |
| `q-vinci-flashpoint-43c` | chapter-2-using-lifeboats | hard | text | High-confidence source; specific regulatory figure with no existing coverage anywhere in the bank. |
| `q-vinci-extinguisher-classbc` | chapter-2-using-lifeboats | hard | text | High-confidence source; zero existing coverage of lifeboat fire-extinguisher class ratings. |
| `q-vinci-capacity-lesser-of-vh` | chapter-2-using-lifeboats | very-hard | image | High-confidence source, no follow-up flag; highest-value gap fill in the pack (the mass-vs-seating "lesser of" capacity rule is untested anywhere live). |
| `q-vinci-kortnozzle-dualfunction-vh` | chapter-2-using-lifeboats | very-hard | text | High-confidence source; zero existing Kort Nozzle coverage. |

**Mix:** 3 easy / 3 medium / 4 hard / 2 very-hard · 4 image-based / 8 text-based.

## 4. Questions that should NOT be promoted yet

| id | status | why it's held back |
|---|---|---|
| `q-vinci-symbol-colorcode` | hold-for-verification | The source page's chapter assignment (chapter-1-planning-ahead) is an unconfirmed guess per the source intake — no chapter header is visible on the page itself. It also states green pictograms mean "life-saving equipment/location," while the live `q-ch1-imo-symbols-scenario-medium` says green means "safe-condition information" — not necessarily wrong, but needs reconciling before a student sees both. |
| `q-vinci-paddlewheel-effect-vh` | hold-for-verification | Only question in the pack whose source page is rated `medium` (not `high`) confidence, with `needsFollowUp: true` flagged for legibility issues (scan ghosting/bleed-through) on that page. At very-hard difficulty, precision matters most — needs a clearer photo or manual cross-check first. |
| `q-vinci-limber-holes` | revise-before-approval | Near-duplicates the live `q-gloss-limber` glossary question — both ask "what is a limber hole/system" and give essentially the same answer. Needs reframing around a distinct angle (e.g., limber holes vs. buoyancy units vs. the automatic drain) before promotion. |
| `q-vinci-togglepin-vs-pintlegudgeon` | revise-before-approval | Worded backwards: its correct answer ("pintles and gudgeons hold the rudder to the stern post") just re-tests what the live `q-gloss-pintle`/`q-gloss-gudgeon` questions already cover, instead of testing the toggle-pin fact the question was meant to introduce. Needs the prompt flipped so the toggle pin is the tested answer. |

Two of the 14 *approved* questions are also being held out of this **first** wave, but only for pacing/priority reasons, not safety — they're fine to promote in a fast-follow second wave:

| id | why it's lower priority (not unsafe) |
|---|---|
| `q-vinci-diesel-vs-gas-safety` | Sits thematically close to the live `q-ch2-dieselfuel` (adjacent fact — *why* diesel is preferred vs. *what* fuel is used). No duplicate conflict, just lower marginal coverage value than the 12 above. |
| `q-vinci-air-support-10min` | Related to the live `q-ch2-airtanks-vh`, which draws its own ~10-minute figure from an unverified practice-test source. This draft question could actually supply the manual-sourced confirmation that question still needs — worth promoting, just as a deliberate follow-up rather than bundled into wave one. |

## 5. Recommendation: promote only the safest subset first

**Promote the 12-question first-promotion set above, not all 14 approved questions and not none.**

Reasoning:
- **Not "none yet"** — 12 of the 18 questions have high-confidence sources, clean wording, and zero duplicate conflicts. Sitting on them indefinitely wastes verified, exam-relevant content that fills real gaps (rescue boats and C.O.I. currently have *no* live coverage at all).
- **Not "all approved now"** — bundling in `q-vinci-diesel-vs-gas-safety` and `q-vinci-air-support-10min` isn't unsafe, but promoting them alongside their thematically-adjacent live counterparts (`q-ch2-dieselfuel`, `q-ch2-airtanks-vh`) in the same batch makes it harder to spot-check for redundancy after the fact. Promoting the 12 clear-gap questions first, then evaluating the 2 adjacent ones as a deliberate second step (ideally alongside actually reconciling `q-ch2-airtanks-vh`'s unverified figure), is the more careful sequencing.
- The remaining 4 (2 revise, 2 hold) should stay out of `course.json` until their specific fix is made: two need a prompt reframe, two need a source/topic re-check. None of the four are hard blockers on the rest of the pack — they just shouldn't move as-is.

Even for the 12-question first wave, promotion still requires the step every question in this pack is pending on: setting `verificationStatus` away from `draft-unverified` after an instructor read-check against the actual manual (per this pack's own `activationRule`). This plan identifies *which* questions are ready for that step — it doesn't perform it.

---

*No files other than this plan were created or modified. `course.json`, the draft question pack, and the promotion review remain exactly as they were.*
