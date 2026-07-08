# Vinci Filtered Question Recovery Inventory

Scope: every held, skipped, duplicate-flagged, or not-yet-promoted item from the two Vinci draft batches, re-assessed against the broader study-app status model (`docs/CONTENT_INTAKE_BENCHMARK.md`) instead of the older, stricter exam-simulation/`course-verified`-only framing.

Sources reviewed:
- `src/content/imports/vinci-2026-07-07-draft-question-pack.json` (book-photo batch, 6 questions still unpromoted after the 12-question first wave)
- `src/content/imports/vinci-2026-07-07-question-promotion-review.md`
- `src/content/imports/vinci-2026-07-08-quiz-review-1-draft-question-pack.json` (handwritten quiz-review batch, all 19 questions still unpromoted)
- `src/content/imports/vinci-2026-07-08-quiz-review-1-promotion-review.md`
- `src/content/course.json` (145 live questions, checked but not modified)

**Nothing here promotes or edits anything. `course.json` is untouched.** This is a re-triage: several items originally held under a strict "must be traceable to the manual or an official source to count as live" standard now have a legitimate home under the study-app model's `source-backed-study` / `quiz-derived-study` / `visual-study` / `needs-review` statuses, which don't require that bar.

A note on the source promotion review's own arithmetic: its "Totals" line reads *"13 approve, 0 revise-before-approval, 6 hold-for-verification"*, but its own per-question table (which this inventory treats as authoritative) shows 12 approve rows and 7 hold-for-verification rows. This inventory uses the correct 12/7 split.

---

## A. Vinci 2026-07-07 batch (book-photo — SHLSOS manual pages)

### A1. Drafted questions still unpromoted (6)

#### `q-vinci-symbol-colorcode`
- **Source batch:** 2026-07-07 · **Topic:** chapter-1-planning-ahead · **Format:** image (`2026-07-07_030301.jpg`, IMO/LSA symbol chart — a clean manual photo, no cleanup needed)
- **Original reason held:** (1) the source page's chapter assignment is an unconfirmed guess (no chapter header visible on the page itself); (2) wording tension with the live `q-ch1-imo-symbols-scenario-medium`, which characterizes green pictograms as "safe-condition information" while this question says green means "life-saving equipment/location."
- **Reusable under study-app model?** Yes. Both original concerns are about *precision and placement*, not whether the content is useful study material — this is a solid visual-recognition question (IMO symbol color-coding) regardless of which chapter it technically belongs to.
- **Recommended new status:** `visual-study`
- **Recommended action:** revise then promote — add a clarifying clause reconciling the two "what does green mean" framings (both are true; green covers multiple safe-condition sub-categories) before promoting, so the two questions don't read as contradicting each other.

#### `q-vinci-limber-holes`
- **Source batch:** 2026-07-07 · **Topic:** chapter-2-using-lifeboats · **Format:** text
- **Original reason held:** near-duplicate of live `q-gloss-limber` — same core definition ("openings in the floors that let bilge water flow between compartments"), tested from nearly the same angle.
- **Reusable under study-app model?** Yes, as a review variant rather than fresh content. It uses a different distractor set (buoyancy units, oar-rigging holes, drain-plug vs. the live version's hatch seals, crew exercises, rudder hinge), so a second differently-worded exposure to the same vocabulary has genuine spaced-repetition value even though it shouldn't sit in normal first-pass rotation next to its near-twin.
- **Recommended new status:** `needs-review`
- **Recommended action:** use as review variant

#### `q-vinci-air-support-10min`
- **Source batch:** 2026-07-07 · **Topic:** chapter-2-using-lifeboats · **Format:** text
- **Original reason held:** never actually a content concern — approved outright, but deliberately sequenced into a second wave since it sits thematically next to live `q-ch2-airtanks-vh` (which draws its own ~10-minute figure from an *unverified* practice-test source).
- **Reusable under study-app model?** Yes, immediately. This is exactly the kind of content the looser model was built for: a second, independently-sourced (book-photo, high confidence) confirmation of a fact the live bank currently only has on shakier footing.
- **Recommended new status:** `source-backed-study`
- **Recommended action:** promote as-is

#### `q-vinci-diesel-vs-gas-safety`
- **Source batch:** 2026-07-07 · **Topic:** chapter-2-using-lifeboats · **Format:** text
- **Original reason held:** same pattern as above — approved, held only for pacing due to thematic adjacency to live `q-ch2-dieselfuel`.
- **Reusable under study-app model?** Yes, immediately.
- **Recommended new status:** `source-backed-study`
- **Recommended action:** promote as-is

#### `q-vinci-togglepin-vs-pintlegudgeon`
- **Source batch:** 2026-07-07 · **Topic:** chapter-2-using-lifeboats · **Format:** text
- **Original reason held:** genuine design flaw — the question's correct answer restates the already-live pintle/gudgeon fact instead of testing the toggle pin, the new fact it was meant to introduce.
- **Reusable under study-app model?** Yes, but only after the fix identified in the original review (flip the prompt so the toggle pin is the tested correct answer, e.g. "What holds a lifeboat's tiller onto the top of the rudder, as distinct from the pintles/gudgeons that hold the rudder onto the stern post?"). The underlying source fact and distractor set are otherwise solid.
- **Recommended new status:** `source-backed-study` (once revised)
- **Recommended action:** revise then promote

#### `q-vinci-paddlewheel-effect-vh`
- **Source batch:** 2026-07-07 · **Topic:** chapter-2-using-lifeboats · **Format:** text
- **Original reason held:** source page (`041663-14.jpg`) is `medium` confidence with `needsFollowUp: true` in the verification map, due to scan ghosting on a *different* figure on the same page (a cold-start temperature spec, not the paddlewheel-effect text itself).
- **Reusable under study-app model?** Provisionally yes — the specific fact used (paddlewheel effect occurs on reversing, not forward propulsion) is standard maritime propulsion knowledge and wasn't itself flagged as ghosted/ambiguous, but the page's overall confidence rating still warrants a quick check before this sits in normal rotation at very-hard difficulty, where precision matters most.
- **Recommended new status:** `needs-review` (interim) → `source-backed-study` once the page gets a quick re-check
- **Recommended action:** hold for source verification — flagged as a likely quick win once checked (see Quick Wins below), since the fact itself is well-established and the flagged issue is elsewhere on the page.

### A2. Facts skipped before ever being drafted (6)

These never became question objects — they were excluded during drafting per the pack's own `duplicateCheckNotes`. No question id exists for any of them.

| Fact | Duplicates (live, current status) | Reusable? | New status | Action |
|---|---|---|---|---|
| Lifeboat numbering, odd/starboard–even/port | `q-ch2-numbering-official-vh` (official-source-supported) | No — exact duplicate, no distinct angle offered | `do-not-use` | reject |
| Propeller handedness, backing kicks stern to port | `q-ch2-backingport-hard` (practice-test-informed) | No — exact duplicate | `do-not-use` | reject |
| Close the drain before launch | `q-ch2-boatplug` / `q-ch2-drainplugfirst-hard` (practice-test-informed) | No — exact duplicate; also independently re-skipped in the 2026-07-08 batch (see B3) | `do-not-use` | reject |
| 24-hour motor-lifeboat fuel duration | `q-ch2-24hrfuel` (course-verified) | No — exact duplicate | `do-not-use` | reject |
| General sea-painter attachment location | `q-ch2-seapainteruse` (practice-test-informed) | No — exact duplicate | `do-not-use` | reject |
| Bare pintle / gudgeon / stern-sheets vocabulary definitions | `q-gloss-pintle`, `q-gloss-gudgeon`, `q-gloss-sternsheets` (all practice-test-informed) | Only as a review variant, and only if drafted fresh — the underlying vocabulary is fine, just not distinct from what's already live | `needs-review` (if ever drafted) | use as review variant (not yet drafted — this is a future-task candidate, not something ready today) |

---

## B. Vinci 2026-07-08 quiz-review-1 batch (handwritten Review Quiz #1 + liferaft diagram)

### B1. Approved but unpromoted (12)

All twelve were rated `approve` in the original review with no blocking concern — they were simply never promoted in the last content step. Under the study-app model these are the single largest block of ready-to-go content in this inventory.

| id | Topic | Difficulty | Format | Recommended new status | Recommended action |
|---|---|---|---|---|---|
| `q-quizr1-equipment-list` | chapter-2 | medium | text | quiz-derived-study | promote as-is |
| `q-quizr1-doubleended-design` | chapter-2 | medium | text | quiz-derived-study | promote as-is |
| `q-quizr1-nameplate-capacity` | chapter-2 | medium | text | quiz-derived-study | promote as-is |
| `q-quizr1-electrolytic-corrosion` | chapter-2 | medium | text | quiz-derived-study | promote as-is |
| `q-quizr1-footrests-stretchers` | chapter-2 | easy | text | quiz-derived-study | promote as-is |
| `q-quizr1-rowing-commands-compare-vh` | chapter-2 | very-hard | text | quiz-derived-study | promote as-is |
| `q-quizr1-lowering-signal` | chapter-2 | medium | text | quiz-derived-study | promote as-is |
| `q-quizr1-class1-speed` | chapter-2 | medium | text | quiz-derived-study | promote as-is |
| `q-quizr1-coxswain-muster` | chapter-2 | easy | text | quiz-derived-study | promote as-is |
| `q-quizr1-reef-sail` | chapter-2 | easy | text | quiz-derived-study | promote as-is |
| `q-quizr1-sail-color` | chapter-2 | hard | text | quiz-derived-study | promote as-is |
| `q-quizr1-buoyancy-units` | chapter-2 | easy | text | quiz-derived-study | promote as-is |

Original reason held (all 12): not held for a content reason — the whole batch was reviewed and its promotion deferred pending this status-model change plus a separate promotion step, per the prior task's explicit "do not promote yet" instruction. `quiz-derived-study` is the correct status here because these come directly from Vinci's own handwritten review quiz, which is exactly what that status was defined for.

### B2. Held for verification (7)

#### `q-quizr1-releasing-lever-label`
- **Topic:** chapter-2-using-lifeboats · **Difficulty:** hard · **Format:** text
- **Original reason held:** introduces a specific new numeric/wording detail (a 12-inch-wide white stripe, exact wording "Danger — lever drops boat") sourced only from a student's handwriting, uncorroborated anywhere else.
- **Reusable under study-app model?** Yes, as `needs-review` in the interim — the fact isn't implausible, it's just a single-source specific claim worth a quick manual check before treating it as established.
- **Recommended new status:** `needs-review` (interim) → `quiz-derived-study` once checked
- **Recommended action:** hold for source verification — a likely quick win once checked (see below).

#### `q-quizr1-liferaft-sheathknife`
- **Topic:** chapter-3-using-liferafts · **Difficulty:** hard · **Format:** text
- **Original reason held:** the question's explanation asserts a causal link ("the knife is a backup for when the weak link fails") that the source diagram never states — I supplied it as a reasonable inference, not a transcribed fact.
- **Reusable under study-app model?** Yes, but better after a narrower rewrite that drops the inferred causal framing and just asks what the floating sheath knife is for (a fact the diagram genuinely supports on its own).
- **Recommended new status:** `quiz-derived-study` (once revised)
- **Recommended action:** revise then promote

#### `q-quizr1-weaklink-vs-towingbridle-vh`
- **Topic:** chapter-3-using-liferafts · **Difficulty:** very-hard · **Format:** image (shared liferaft diagram, `2026-07-07_063330-1.jpg`)
- **Original reason held:** shares the raw, doodle-covered diagram photo (needs cropping); the "designed to fail vs. designed to hold" framing is inferred from general convention, not diagram text.
- **Reusable under study-app model?** Yes, once the image is cropped — the underlying concept (a deliberate weak point in rigging) is well-established maritime-safety convention, low risk of being wrong.
- **Recommended new status:** `visual-study` (once image is cleaned up)
- **Recommended action:** hold for image cleanup

#### `q-quizr1-seaanchor-vs-ballastbags`
- **Topic:** chapter-3-using-liferafts · **Difficulty:** hard · **Format:** image (same shared diagram)
- **Original reason held:** shared uncropped image; the ballast-bag half is corroborated by live `q-raft-9`, but the sea-anchor-stabilizes-drift half is inferred.
- **Reusable under study-app model?** Yes, once cropped.
- **Recommended new status:** `visual-study` (once image is cleaned up)
- **Recommended action:** hold for image cleanup

#### `q-quizr1-floor-vs-canopy`
- **Topic:** chapter-3-using-liferafts · **Difficulty:** medium · **Format:** image (same shared diagram)
- **Original reason held:** shared uncropped image; the canopy half is corroborated by live `q-raft-5`, the floor-insulation half is inferred.
- **Reusable under study-app model?** Yes, once cropped.
- **Recommended new status:** `visual-study` (once image is cleaned up)
- **Recommended action:** hold for image cleanup

#### `q-quizr1-internal-vs-external-lifelines`
- **Topic:** chapter-3-using-liferafts · **Difficulty:** easy · **Format:** image (same shared diagram)
- **Original reason held:** shared uncropped image only — this is the most directly diagram-supported of the five image questions (the internal/external distinction is visible from the labels' own positions on the illustration), so it's blocked purely on the image, not the content.
- **Reusable under study-app model?** Yes, and it's the strongest candidate of the five once the image is cropped.
- **Recommended new status:** `visual-study` (once image is cleaned up)
- **Recommended action:** hold for image cleanup

#### `q-quizr1-recognitionlight-waterbattery`
- **Topic:** chapter-3-using-liferafts · **Difficulty:** easy · **Format:** image (same shared diagram)
- **Original reason held:** shared uncropped image, plus the most fully inferred of the five — the diagram labels these as two unconnected items with no stated relationship at all.
- **Reusable under study-app model?** Yes, but this one needs both the image cleanup and a real confirmation of the causal claim (that the battery automatically powers the light), not just a crop.
- **Recommended new status:** `needs-review` until both concerns clear, then `visual-study`
- **Recommended action:** hold for image cleanup **and** source verification (the only item in this inventory needing both)

### B3. Facts skipped before ever being drafted (4, one further note)

| Fact | Duplicates (live, current status) | Reusable? | New status | Action |
|---|---|---|---|---|
| "What does the Station Bill list?" | `q-ch1-vocab-stationbill-easy` (course-verified) | Only as a low-priority review variant — the student's own answer ("muster stations during emergency") is close to word-for-word what's already live | `needs-review` (if drafted) | use as review variant (low priority; not yet drafted) |
| Abandon-ship drill passenger actions (secure workstation + report to muster station) | `q-ch1-abandonship-drill-components-medium` (course-verified) — but only the muster-reporting half; "secure your workstation" specifically is *not* covered live | Yes, if narrowed — drop the duplicate muster-reporting half and draft only the distinct "secure your workstation" fact | `quiz-derived-study` (if drafted) | revise then promote (i.e., draft narrowly — this is new work, not yet done) |
| Limber holes (`Q6`, "openings in the support frame...") | `q-gloss-limber` (practice-test-informed) | Only as a review variant — notably, this is the **second independent Vinci source** (book-photo batch's `q-vinci-limber-holes` above is the first) pointing at the same live fact, which is itself useful corroborating evidence even though neither should be promoted as fresh content | `needs-review` (if drafted) | use as review variant (not yet drafted) |
| Close the drain before launch (`Q10`) | `q-ch2-boatplug` / `q-ch2-drainplugfirst-hard` (practice-test-informed) | No — exact duplicate, and this is the **third** independent skip of this same fact across both batches (see A2) | `do-not-use` | reject |

One more item worth noting for completeness, not a recovery candidate: the standalone `"Oars"` command question (source `Q16`) was never separately skipped as a duplicate — it was folded directly into the already-drafted `q-quizr1-rowing-commands-compare-vh` (listed in B1 above) rather than kept as its own item, so it's already accounted for and needs no separate action.

---

## Quick wins (promote soon, minimal friction)

Fourteen items are already fully vetted with no open concern — just a status relabel and a promotion step:

- `q-vinci-air-support-10min`, `q-vinci-diesel-vs-gas-safety` (2026-07-07 batch → `source-backed-study`)
- All 12 of B1 (2026-07-08 batch → `quiz-derived-study`): `q-quizr1-equipment-list`, `q-quizr1-doubleended-design`, `q-quizr1-nameplate-capacity`, `q-quizr1-electrolytic-corrosion`, `q-quizr1-footrests-stretchers`, `q-quizr1-rowing-commands-compare-vh`, `q-quizr1-lowering-signal`, `q-quizr1-class1-speed`, `q-quizr1-coxswain-muster`, `q-quizr1-reef-sail`, `q-quizr1-sail-color`, `q-quizr1-buoyancy-units`

Two more are quick wins *after* a five-minute check rather than immediately: `q-vinci-paddlewheel-effect-vh` (confirm the page's flagged figure doesn't affect the paddlewheel-effect text) and `q-quizr1-releasing-lever-label` (confirm the 12-inch stripe/exact wording against the manual).

## Items useful only as review variants

- `q-vinci-limber-holes` (2026-07-07, already drafted)
- Bare pintle/gudgeon/stern-sheets vocabulary (2026-07-07, not yet drafted)
- Station Bill (2026-07-08 `Q1`, not yet drafted, low priority)
- Limber holes (2026-07-08 `Q6`, not yet drafted — cross-corroborates with the 2026-07-07 item above)

None of these should occupy a normal-rotation slot next to the live question they echo; all are `needs-review` candidates for a student who deliberately wants extra reps.

## Items requiring image cleanup

All five image-based questions in B2 share one raw photo (`2026-07-07_063330-1.jpg`) with pencil doodles/scribbles that need cropping before any of them can go live: `q-quizr1-weaklink-vs-towingbridle-vh`, `q-quizr1-seaanchor-vs-ballastbags`, `q-quizr1-floor-vs-canopy`, `q-quizr1-internal-vs-external-lifelines`, `q-quizr1-recognitionlight-waterbattery`. `q-vinci-symbol-colorcode` (2026-07-07) does **not** need cleanup — its image is a clean manual photo; its hold reason is wording/metadata, not image quality.

## Items that should still not be used

Five facts remain genuine, no-value duplicates regardless of the looser status model, because each restates an already-well-tested live fact with no new angle, distractor set, or corroboration value: lifeboat numbering odd/starboard–even/port, propeller-handedness backing-to-port, the 24-hour motor-lifeboat fuel duration, general sea-painter attachment location, and close-the-drain-before-launch (skipped independently in *both* batches — see A2 and B3). Recommended status if these were ever drafted anyway: `do-not-use`.

---

## Totals

| Category | Count |
|---|---|
| Already-drafted questions reviewed | 25 (6 from 2026-07-07 + 19 from 2026-07-08) |
| Quick wins (promote as-is or after a 5-minute check) | 14 |
| Revise then promote | 3 (`q-vinci-symbol-colorcode`, `q-vinci-togglepin-vs-pintlegudgeon`, `q-quizr1-liferaft-sheathknife`) |
| Hold for image cleanup (only, or image + source verification) | 5 |
| Use as review variant (already drafted) | 1 (`q-vinci-limber-holes`) |
| Previously-skipped facts reassessed (never drafted) | 10 (6 from 2026-07-07 + 4 from 2026-07-08) |
| — of which: review-variant candidates if ever drafted | 3 |
| — of which: still do-not-use | 6 (5 unique facts + 1 duplicate skip of the same fact) |
| — of which: worth drafting fresh (narrowed) | 1 (the "secure your workstation" half of `Q3`) |

---

*This inventory does not change any question's `verificationStatus`, does not touch `course.json`, and does not promote or edit either draft pack. Both draft pack files remain exactly as they were.*
