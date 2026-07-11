# Held Question Remediation Report — Vinci Draft Packs

Scope: all 19 questions currently held (drafted but not promoted) across the three Vinci draft packs, triaged and fixed where possible under the study-app status model.

**Nothing has been promoted. `course.json` is untouched.** This is a cleanup pass on the draft packs themselves: revised wording where a question only needed a wording fix, cropped/split images where a question was blocked on image quality, cross-checked facts against newer source material (principally the 2026-07-08 sea-trials CFR batch) where a question was blocked on source verification, and made explicit keep/rewrite/reject calls on duplicate-flavored questions. All revised questions remain `"verificationStatus": "draft-unverified"` in their packs, per instruction — the "recommended promotion status" column below is a recommendation for the next promotion task, not a status change made in this one.

Sources used: `vinci-2026-07-07-draft-question-pack.json`, `vinci-2026-07-08-quiz-review-1-draft-question-pack.json`, `vinci-2026-07-08-quiz-1a-draft-question-pack.json`, `vinci-filtered-question-recovery-inventory.md`, `src/content/course.json` (read for duplicate/cross-reference checks, not modified), and `vinci-2026-07-08-sea-trials-source-intake.json` (the newest material, checked for anything that verifies or contradicts a held fact).

## Summary

**14 of the 19 held questions are now promotable.** 5 remain genuinely held — all 5 for the same reason category (a specific fact or pencil-mark reading needs a human check against the manual or Vinci directly; no shortcut resolves that from existing material).

| Outcome | Count |
|---|---|
| Promotable now | 14 |
| Still held — needs source/manual verification | 5 |
| Rejected / do-not-use | 0 |

Two images were cropped as part of this pass:
- `public/content/vinci/2026-07-08-quiz-review-1/2026-07-07_063330-1-cropped.jpg` — the shared liferaft-diagram photo, with its doodle-heavy top margin removed. A few isolated stray pencil marks remain elsewhere in blank margin space, but none overlap any numbered item, arrow, or the legend table, so this is treated as sufficient rather than needing further cleanup.
- `public/content/vinci/2026-07-08-quiz-1a/2026-07-08_044219-8-d011sa.jpg` and `...-d015sa.jpg` — the quiz-1a diagram sheet, split into two separate per-diagram images so each question shows only the diagram it's actually about, instead of both diagrams on one uncropped page.

Both original raw source photos are left in place (unmodified) for traceability; the crops are new, separate files.

## Per-question detail

### Group 1 — 2026-07-07 batch (4 held)

#### `q-vinci-symbol-colorcode`
- **Original issue:** wording tension with the live `q-ch1-imo-symbols-scenario-medium` — that question characterizes green IMO/LSA pictograms as "safe-condition information" (escape routes specifically), while this draft characterized green as meaning "life-saving equipment/location," which could read as contradicting rather than complementing the live question.
- **Action taken:** revised choice A and the explanation to frame life-saving-equipment-location as *one category* of the broader "safe-condition" green family, explicitly naming escape-route signs (the live question's category) as a sibling category rather than a conflicting claim. No change to the correct answer or underlying fact. Image (`2026-07-07_030301.jpg`) was already clean — no cropping needed.
- **Recommended status:** `visual-study`
- **Ready for promotion now:** Yes
- **Required:** wording review (done)

#### `q-vinci-limber-holes`
- **Original issue:** near-duplicate of live `q-gloss-limber` — same core "openings in the floors that let bilge water flow between compartments" definition, tested from a similar angle.
- **Action taken:** none — the existing distractor set (buoyancy units, oar-rigging holes, drain-plug) is already distinct enough from the live question's distractors to serve as a genuine second exposure with spaced-repetition value, confirming the recovery inventory's original read. No rewrite needed.
- **Recommended status:** `needs-review` (deliberately, not a front-line status — this is a review-variant, not fresh content)
- **Ready for promotion now:** Yes, as `needs-review`
- **Required:** none further

#### `q-vinci-togglepin-vs-pintlegudgeon`
- **Original issue:** the question's correct answer restated the already-live pintle/gudgeon fact instead of testing the toggle pin, the new fact it was meant to introduce.
- **Action taken:** the straightforward fix (flip the question to test the toggle pin directly) is no longer available without creating a new duplicate — `q-quiz1a-toggle-pin-tiller` (promoted 2026-07-09) now tests exactly "what holds the tiller to the rudder = toggle pin." Instead, rewrote the question as a genuine compare-and-contrast between the toggle pin and the pintle/gudgeon pair — the one angle neither existing live question covers, and a legitimate application of this course's Compare & Contrast methodology (two easily-confused, similarly-located fittings).
- **Recommended status:** `source-backed-study`
- **Ready for promotion now:** Yes
- **Required:** wording review (done)

#### `q-vinci-paddlewheel-effect-vh`
- **Original issue:** source page (`041663-14.jpg`) is `medium` confidence with `needsFollowUp: true` in the verification map, due to scan ghosting elsewhere on the page (a different, unrelated figure — not the paddlewheel-effect text itself).
- **Action taken:** checked the newly-processed 2026-07-08 sea-trials CFR batch (46 CFR Parts 159-165 and 166-169) for any confirmation — propeller-reversal side-thrust behavior is general ship-handling knowledge, not equipment-specification content, and isn't covered by either CFR volume extracted so far. No new verifying (or contradicting) evidence found. Content unchanged.
- **Recommended status:** `needs-review` (interim) → `source-backed-study` once the source page is re-checked
- **Ready for promotion now:** No
- **Required:** source verification (quick manual/page re-check, unresolved by this pass)

### Group 2 — 2026-07-08 quiz-review-1 batch (7 held)

#### `q-quizr1-releasing-lever-label`
- **Original issue:** introduces a specific numeric/wording detail (a 12-inch-wide white stripe, exact wording "Danger — lever drops boat") sourced only from a student's handwriting, uncorroborated elsewhere.
- **Action taken:** checked the sea-trials CFR batch (46 CFR Part 169, Sailing School Vessels — the part most likely to specify lifeboat lever markings) for this exact marking spec; the extracted portion of that volume covers the equipment table and descriptions through Subpart 169.600 but does not include a releasing-lever marking/paint specification, and extraction was truncated before reaching Subpart 169.800 (Operations) where it might exist. No confirmation found. Content unchanged.
- **Recommended status:** `needs-review` (interim) → `quiz-derived-study` once checked
- **Ready for promotion now:** No
- **Required:** source verification (against the manual, or a follow-up targeted re-extraction of 46 CFR 169.800)

#### `q-quizr1-liferaft-sheathknife`
- **Original issue:** the explanation asserted a causal link ("the knife is a backup for when the weak link fails") that the source diagram never states — a reasonable-sounding inference, not a transcribed fact.
- **Action taken:** rewrote the question narrower, dropping the inferred weak-link-backup framing entirely. It now asks why the knife is specifically a *floating* knife, a fact the diagram genuinely supports on its own (item 23, "Floating Sheath Knife"). Trimmed the sourceReference's item citation accordingly (dropped item 17 "Weak link," no longer relevant to the narrowed question).
- **Recommended status:** `quiz-derived-study`
- **Ready for promotion now:** Yes
- **Required:** wording review (done)

#### `q-quizr1-weaklink-vs-towingbridle-vh`, `q-quizr1-seaanchor-vs-ballastbags`, `q-quizr1-floor-vs-canopy`, `q-quizr1-internal-vs-external-lifelines`
- **Original issue:** all four share the raw, doodle-covered liferaft diagram photo (needs cropping); content itself was already assessed as sound (each half of each compare-and-contrast pair is either diagram-labeled directly or well-established maritime-safety convention).
- **Action taken:** image only — updated each question's `image`/`imageAlt` to the newly-cropped photo (`2026-07-07_063330-1-cropped.jpg`). No wording changes; none were needed.
- **Recommended status:** `visual-study` (all four)
- **Ready for promotion now:** Yes (all four)
- **Required:** image cleanup (done)

#### `q-quizr1-recognitionlight-waterbattery`
- **Original issue:** shared the same doodle-covered image, **plus** the most fully inferred of the five — the diagram labels the recognition light and water-activated battery as two separate, unconnected items with no arrows or text linking them, but the question asserts the battery automatically powers the light.
- **Action taken:** image cleanup only — updated `image`/`imageAlt` to the cropped photo. Deliberately did **not** rewrite the causal claim itself: unlike the sheath-knife question, "a water-activated battery automatically powers a liferaft's recognition light" is a specific behavioral claim (not just a definitional one), and the recovery inventory singled this out as the one item needing a genuine confirmation, not just a plausible-sounding inference. No confirming source was found in this pass (46 CFR 160.151, Inflatable Liferafts SOLAS, is the most likely CFR section to cover this, but its body text wasn't reached in the sea-trials batch's extraction — see that batch's `needsFollowUp` note). Rather than either rewrite the claim without evidence or leave it fully blocked, the image blocker is now cleared, narrowing what's left to hold on.
- **Recommended status:** `needs-review` (interim) → `visual-study` once the causal claim is confirmed
- **Ready for promotion now:** No
- **Required:** source verification only (image cleanup done)

### Group 3 — 2026-07-08 quiz-1a batch (8 held)

#### `q-quiz1a-liferaft-cold-protection`, `q-quiz1a-seaanchor-substitute`
- **Original issue:** both have medium-confidence answer markings in the source quiz — each shows a clean circle on one choice plus a second choice circled-with-strikethrough, read as "clean circle = final answer, struck circle = eliminated," but not 100% certain.
- **Action taken:** checked the sea-trials CFR batch for any content bearing on liferaft cold-insulation design or sea-anchor-substitute materials — neither is CFR equipment-specification territory (these are practical-skills facts, not construction/approval specs), so no relevant CFR content exists to check against. This is fundamentally a pencil-mark reading question, not a fact-verification question — no source document resolves what a student circled on a specific quiz sheet. Content unchanged.
- **Recommended status:** `needs-review` (interim) → `quiz-derived-study` once the marking is confirmed against the original quiz sheet or with Vinci
- **Ready for promotion now:** No (both)
- **Required:** source verification (marking confirmation)

#### `q-quiz1a-enclosed-lifeboat-maxspeed`
- **Original issue:** approved content-wise in the original promotion review, held only pending a "light wording check" on the 6-knot max-vs-min confusion pairing with the Class 1 motor lifeboat's minimum-speed fact — that check was never completed in the last promotion step.
- **Action taken:** tightened the hint to name the cross-referenced fact directly (it can now say so, since `q-quizr1-class1-speed` is live) instead of the previous vague "a different, separate lifeboat speed requirement elsewhere in this course." Confirmed the explanation already handles the max-vs-min distinction clearly and needed no further change.
- **Recommended status:** `quiz-derived-study`
- **Ready for promotion now:** Yes
- **Required:** wording review (done)

#### `q-quiz1a-d011sa-flemming-gear`
- **Original issue:** shared one uncropped photo with a second, unrelated diagram (D015SA) on the same page. This specific question has no D014SA/D015SA naming mismatch — the quiz text and the diagram both agree it's D011SA.
- **Action taken:** cropped the shared photo into a D011SA-only image; updated `image`/`imageAlt`.
- **Recommended status:** `visual-study`
- **Ready for promotion now:** Yes
- **Required:** image cleanup (done)

#### `q-quiz1a-d015sa-righting-strap`, `q-quiz1a-d015sa-heavingline-number`, `q-quiz1a-d015sa-pressurevalve`
- **Original issue:** shared the same uncropped photo, **plus** an unresolved naming mismatch — the quiz text cites "diagram D014SA" while the printed diagram sheet is labeled "D015SA."
- **Action taken:** cropped the shared photo into a D015SA-only image; updated `image`/`imageAlt` for all three. Checked whether the naming mismatch is actually promotion-blocking: none of the three questions' prompt or choice text asserts either "D014SA" or "D015SA" anywhere — the mismatch exists only in each question's `sourceReference` citation, never in what a student sees. Per instruction not to guess a diagram label the source text doesn't confirm, the mismatch itself was **not** resolved or guessed at — it remains an open citation-accuracy footnote for whoever eventually reconciles it with Vinci, but it no longer blocks promotion since it isn't student-facing content.
- **Recommended status:** `visual-study` (all three)
- **Ready for promotion now:** Yes (all three)
- **Required:** image cleanup (done); citation-naming mismatch noted as a non-blocking open item

#### `q-quiz1a-bow-stern-hatchet`
- **Original issue:** a specific, surprising claim (one hatchet required at both the bow and the stern) uncorroborated anywhere else in this repo's content, flagged for confirmation against the manual or with Vinci.
- **Action taken:** cross-checked against the newly-processed 2026-07-08 sea-trials batch. **46 CFR 169.529(k)** (Document(7).PDF.pdf, Sailing School Vessels lifeboat equipment description) states hatchets "must be attached to the lifeboat by individual lanyards and be readily available for use, **one at each end of the lifeboat**" — matching this question's marked answer word-for-word in substance. Updated the `sourceReference` to record this second, independent federal-regulation confirmation.
- **Recommended status:** `source-backed-study` (upgraded from a plain quiz-derived reading, now that it has independent regulatory corroboration beyond the single quiz's pencil mark — the same reasoning that gave `q-vinci-air-support-10min`/`q-vinci-diesel-vs-gas-safety` `source-backed-study` status)
- **Ready for promotion now:** Yes
- **Required:** none further — source verification complete

## Full status table

| # | Question id | Original issue | Recommended status | Ready now? | Still needs |
|---|---|---|---|---|---|
| 1 | `q-vinci-symbol-colorcode` | wording tension with a live question | `visual-study` | Yes | — |
| 2 | `q-vinci-limber-holes` | near-duplicate of a live question | `needs-review` | Yes | — |
| 3 | `q-vinci-togglepin-vs-pintlegudgeon` | correct answer restated an already-live fact | `source-backed-study` | Yes | — |
| 4 | `q-vinci-paddlewheel-effect-vh` | source page flagged medium-confidence | `needs-review` → `source-backed-study` | No | source verification |
| 5 | `q-quizr1-releasing-lever-label` | single-source, uncorroborated specific detail | `needs-review` → `quiz-derived-study` | No | source verification |
| 6 | `q-quizr1-liferaft-sheathknife` | unstated inferred causal claim | `quiz-derived-study` | Yes | — |
| 7 | `q-quizr1-weaklink-vs-towingbridle-vh` | shared doodle-covered image | `visual-study` | Yes | — |
| 8 | `q-quizr1-seaanchor-vs-ballastbags` | shared doodle-covered image | `visual-study` | Yes | — |
| 9 | `q-quizr1-floor-vs-canopy` | shared doodle-covered image | `visual-study` | Yes | — |
| 10 | `q-quizr1-internal-vs-external-lifelines` | shared doodle-covered image | `visual-study` | Yes | — |
| 11 | `q-quizr1-recognitionlight-waterbattery` | shared image + unstated causal claim | `needs-review` → `visual-study` | No | source verification |
| 12 | `q-quiz1a-liferaft-cold-protection` | medium-confidence answer marking | `needs-review` → `quiz-derived-study` | No | source verification |
| 13 | `q-quiz1a-seaanchor-substitute` | medium-confidence answer marking | `needs-review` → `quiz-derived-study` | No | source verification |
| 14 | `q-quiz1a-enclosed-lifeboat-maxspeed` | pending wording check, never done | `quiz-derived-study` | Yes | — |
| 15 | `q-quiz1a-d011sa-flemming-gear` | shared uncropped diagram sheet | `visual-study` | Yes | — |
| 16 | `q-quiz1a-d015sa-righting-strap` | shared image + naming-mismatch citation | `visual-study` | Yes | — |
| 17 | `q-quiz1a-d015sa-heavingline-number` | shared image + naming-mismatch citation | `visual-study` | Yes | — |
| 18 | `q-quiz1a-d015sa-pressurevalve` | shared image + naming-mismatch citation | `visual-study` | Yes | — |
| 19 | `q-quiz1a-bow-stern-hatchet` | uncorroborated surprising claim | `source-backed-study` | Yes | — |

**14 promotable now:** #1, 2, 3, 6, 7, 8, 9, 10, 14, 15, 16, 17, 18, 19.
**5 still held (all source/marking verification, none image or wording):** #4, 5, 11, 12, 13.
**0 rejected.**
