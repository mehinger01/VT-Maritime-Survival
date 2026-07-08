# Vinci 2026-07-07 Draft Question Pack — Promotion Review

Reviewed file: `src/content/imports/vinci-2026-07-07-draft-question-pack.json` (18 questions)
Reviewed against: `src/content/course.json` (133 live questions, unchanged), `vinci-2026-07-07-verification-map.json`, `vinci-2026-07-07-source-intake.json`

**Nothing in this review promotes, activates, or edits any question. `course.json` was not touched.** This is a read-only readiness assessment: for each draft question, whether its underlying source page is confidently extracted, whether its wording holds up, and whether it duplicates or meaningfully overlaps something already live.

Source-confidence figures below are pulled directly from the verification map's per-fact `confidence` field and the source intake's `extractionConfidence`/`needsFollowUp` fields — not re-guessed.

## Legend

- **approve** — source is high-confidence, wording is sound, no duplicate/overlap concern. Ready to promote once the instructor does the final read-against-manual check the whole pack still needs (every question in this pack is `draft-unverified`; promotion always requires that step regardless of this review's recommendation).
- **revise-before-approval** — the underlying fact and source are fine, but the question as currently worded has a design problem (duplicates an existing question's angle, or tests the wrong half of a fact pair) that should be fixed before promotion.
- **hold-for-verification** — source-confidence or topic-assignment uncertainty specific to this question's source page; needs a better photo, a second look at the manual, or a chapter-assignment confirmation before promotion.
- **reject** — not used below; every question in this pack cleared the bar for at least a revise/hold recommendation. None needed outright rejection.

---

## 1. `q-vinci-symbol-colorcode`

- **Topic:** chapter-1-planning-ahead
- **Difficulty:** medium
- **Image-based:** yes (`2026-07-07_030301.jpg`)
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_030301.jpg (chapter-1-planning-ahead, IMO/LSA safety symbol pictograms)
- **Current verificationStatus:** draft-unverified
- **Recommended action: hold-for-verification**

**Reason:** Two independent issues stack on this one question, both worth resolving before promotion rather than after.

**Source-confidence concern:** The source intake's own note on `2026-07-07_030301.jpg` says: *"No chapter header visible on this page itself; chapterGuess of chapter-1-planning-ahead is a guess based on it appearing before the explicit 'Chapter 2 USING LIFEBOATS' header on page 17, not a confirmed chapter assignment."* The fact content itself is rated `high` confidence, but the **topicId placement is an unconfirmed guess**, not a verified fact. Confirm with Vinci which chapter this page actually belongs to before promoting.

**Duplicate/near-duplicate concern:** The live bank already has `q-ch1-imo-symbols-scenario-medium` (chapter-1-planning-ahead), which tests a green pictogram (running-figure escape-route sign) and states in its explanation: *"Green is used for safe-condition information (like escape routes)."* This draft question instead states, per the Vinci source chart, that green marks *"life-saving equipment or its location"* — a different characterization of what green means. Both may be technically correct (IMO/ISO safety signage uses green for multiple "safe condition" sub-categories, including both escape routes and equipment locations), but presenting both to a student without reconciling the wording risks an apparent contradiction. Recommend either merging the two into one scenario-plus-categorization question, or adding a clarifying clause tying the two together, before promotion.

**Wording concerns:** None in the question itself — choices and misconceptions are clean.

---

## 2. `q-vinci-coi-lifeboatmen-4160`

- **Topic:** chapter-1-planning-ahead
- **Difficulty:** hard
- **Image-based:** yes (`2026-07-07_033837.jpg`)
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_033837.jpg (C.O.I. sample document and lifeboat-capacity/certified-lifeboatmen table)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source (`confidence: high`, `extractionConfidence: high`, `needsFollowUp: false`), clean table-reading question, no overlap anywhere in the live bank — this fills a completely uncovered topic (C.O.I. document and its lifeboatman-count table).

**Wording concerns:** None.
**Source-confidence concerns:** None.
**Duplicate concerns:** None found.

---

## 3. `q-vinci-partial-vs-total-enclosed`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** medium
- **Image-based:** yes (`2026-07-07_034357.jpg`)
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_034357.jpg (Lifeboat types — Partially Enclosed and Totally Enclosed)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source, no follow-up flag. Distinct from `q-lb-7` (live), which asks *why* lifeboats are enclosed at all (weather/exposure rationale) rather than what distinguishes partial from total enclosure — different fact, different angle, safe to promote alongside it.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** Related-but-distinct overlap with `q-lb-7` noted above; not blocking.

---

## 4. `q-vinci-bow-marking-blockcaps`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** easy
- **Image-based:** yes (`2026-07-07_041458.jpg`)
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041458.jpg (Markings — required vessel name/port/persons/boat-number markings, nameplate contents)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source. The live bank's `q-ch2-markingstrap-hard` tests *which item is NOT required* to carry the vessel's name (a different, harder recall angle); this question tests *where and how* the bow marking itself is applied. No prompt or answer overlap.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None blocking.

---

## 5. `q-vinci-capacity-lesser-of-vh`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** very-hard
- **Image-based:** yes (`2026-07-07_041663-3.jpg`)
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-3.jpg (Numbering and Capacity — 150-person max, seating/mass rules)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source, no follow-up flag. This is genuinely new, high-value content — the live bank has no question testing the "lesser of mass-based vs. seating-based" capacity rule or the 165/188 lbs figures at all.

**Wording concerns:** None — dense but accurate; the hint set does the necessary scaffolding for a very-hard item. **Source-confidence concerns:** None. **Duplicate concerns:** None. (Numbering itself, from the same source page, was correctly excluded from this pack as a duplicate of `q-ch2-numbering-official-vh` — see the pack's own `duplicateCheckNotes`.)

---

## 6. `q-vinci-five-lifeboat-types`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** easy
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_034357.jpg (Lifeboat types — Partially Enclosed and Totally Enclosed)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source. No live question currently lists or tests the five recognized lifeboat types as a set — good foundational anchor question.

**Wording concerns:** Minor note, not blocking — "which of these is NOT one of the five" questions are only as good as the completeness of the five-item list itself. The source page lists exactly five types and "semi-submersible" is not a recognized LSA/SOLAS lifeboat category, so the distractor is safe, but worth a quick manual cross-check that the course doesn't also recognize a sixth variant (e.g., free-fall) as a separate named type elsewhere.
**Source-confidence concerns:** None. **Duplicate concerns:** None.

---

## 7. `q-vinci-nonselfrighting-handholds`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** easy
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, images 2026-07-07_034357.jpg and 2026-07-07_041663-11.jpg (Lifeboat types; Exterior Rescue Features — grab rail)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** Both source pages are high confidence. Distinct from `q-ch2-selfrighting-hard` (live), which tests the *condition* under which a self-righting boat actually rights itself (seatbelts on, hatches shut) — this question instead tests the *compensating feature* on boats that don't self-right at all. Different fact, complementary pairing.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None blocking.

---

## 8. `q-vinci-limber-holes`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** easy
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-10.jpg (Buoyancy and Stability Features; Automatic Lifeboat Drain)
- **Current verificationStatus:** draft-unverified
- **Recommended action: revise-before-approval**

**Reason:** This is the one duplicate this review found that the original drafting pass missed. The live bank already has `q-gloss-limber` (appendix-a-glossary), which asks *"What does the term 'limber system' refer to?"* with the correct answer *"A drainage system — holes in the floor structure that let water flow through compartments toward the bilge."* This draft's prompt ("What are 'limber holes' in a lifeboat's construction?") and correct answer ("Openings in the floors... that let bilge water flow between compartments...") test the same core definition from nearly the same angle — different distractor set, but the same fact tested the same way.

**Wording concerns:** The prompt itself is fine in isolation; the problem is only that it duplicates `q-gloss-limber`'s framing rather than adding a new angle.
**Source-confidence concerns:** None — source is high confidence.
**Duplicate/near-duplicate concerns:** Near-duplicate of `q-gloss-limber` (appendix-a-glossary). Recommend reframing around a genuinely distinct angle before promotion — e.g., a compare-and-contrast question pairing limber holes (drainage between compartments) against buoyancy units (flotation) or the automatic drain (water exit from the boat entirely), which the source material already supports and which this draft's own distractor (b) gestures at but doesn't make the actual tested fact.

---

## 9. `q-vinci-boarding-time-10-3`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** medium
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, images 2026-07-07_034357.jpg and 2026-07-07_041663-4.jpg
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** Both source pages high confidence, no follow-up flags. No existing question tests survival-craft boarding time at all — clean new coverage.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None.

---

## 10. `q-vinci-air-support-10min`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** medium
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_034781.jpg (Totally Enclosed free-fall davit, Fast Rescue Boat)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source, no follow-up flag.

**Wording concerns:** None. **Source-confidence concerns:** None.
**Duplicate/near-duplicate concerns:** Worth flagging for the instructor's benefit rather than as a blocker — the live `q-ch2-airtanks-vh` (very-hard) already tests a related "~10 minutes of breathing air" fact for totally enclosed lifeboats, sourced from an **unverified practice-test source**, and its own explanation says *"This ~10-minute figure... should be confirmed against Vinci's manual before being treated as exact."* This draft question is sourced directly and independently from Vinci's actual manual page at high confidence. The two questions test different framings (compare-two-air-tank-systems vs. direct-duration-recall), so both can reasonably stay live, but promoting this one also hands the instructor independent manual confirmation for `q-ch2-airtanks-vh`'s previously-unverified figure — worth cross-referencing when that question's `verificationStatus` is next revisited.

---

## 11. `q-vinci-diesel-vs-gas-safety`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** medium
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-13.jpg (Propulsion Systems / Engine Powered Systems)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source.

**Wording concerns:** None. **Source-confidence concerns:** None.
**Duplicate/near-duplicate concerns:** Adjacent to the live `q-ch2-dieselfuel` ("what fuel is used" → diesel oil), but tests a different fact (*why* diesel is preferred: volatility + ignition method) rather than restating which fuel is used. Not a duplicate, though the two will sit close together topically for a student studying propulsion in one sitting — low risk, no action required.

---

## 12. `q-vinci-stop-diesel-air`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** medium
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-13.jpg
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source. Distinct from `q-ch2-enginecheck` (live), which covers what to do immediately *after starting* the engine — this covers *stopping* it. No overlap.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None.

---

## 13. `q-vinci-rescueboat-speed-tow-hard`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** hard
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_034781.jpg
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source. The live bank has **zero** existing coverage of rescue-boat-specific performance requirements (speed, towing, crew/casualty capacity) — this is a genuine coverage gap this question fills well, with a well-constructed numeric-swap distractor set.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None — confirmed no existing question mentions rescue boat speed, towing arrangement, or stretcher-capacity figures.

---

## 14. `q-vinci-flashpoint-43c`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** hard
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-13.jpg
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source, specific regulatory number, no existing coverage anywhere in the bank.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None.

---

## 15. `q-vinci-extinguisher-classbc`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** hard
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-15.jpg (Propeller rotation and Safety Notes on Engine Powered Lifeboats)
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source. `q-ch2-markingstrap-hard` (live) mentions "fire extinguisher" only as a distractor in an unrelated markings question — no actual overlap with this question's Class B/C rating content.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None.

---

## 16. `q-vinci-togglepin-vs-pintlegudgeon`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** hard
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-12.jpg (Steering Equipment — tiller, rudder, pintle, gudgeon, Kort Nozzle, steering wheel)
- **Current verificationStatus:** draft-unverified
- **Recommended action: revise-before-approval**

**Reason:** The underlying source fact and distractor set are good, but the question is built backwards. As worded, the prompt gives away that a toggle pin connects the tiller to the rudder, then asks what holds the *rudder to the stern post* — making the **correct answer** "pintles and gudgeons," which is exactly the fact already tested (from the opposite direction) by the live `q-gloss-pintle` and `q-gloss-gudgeon` glossary questions. A student can get full credit here without ever needing to know what a toggle pin is, since the question effectively re-tests "what connects the rudder to the boat" — already-covered ground — rather than the toggle pin fact this pack's own `duplicateCheckNotes` intended to introduce.

**Wording concerns:** Flip the prompt so the **toggle pin** is the tested correct answer — e.g., "What holds a lifeboat's tiller onto the top of the rudder (as distinct from the pintles and gudgeons that hold the rudder onto the stern post)?" — so the fact being newly tested is the one the pack intended, not the one already live.
**Source-confidence concerns:** None — source is high confidence.
**Duplicate/near-duplicate concerns:** As currently worded, functionally retests `q-gloss-pintle`/`q-gloss-gudgeon`'s fact from a new angle rather than introducing new content. Fixable with the reframe above.

---

## 17. `q-vinci-paddlewheel-effect-vh`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** very-hard
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-14.jpg (Engine starting/stopping procedures; propeller-characteristics intro)
- **Current verificationStatus:** draft-unverified
- **Recommended action: hold-for-verification**

**Reason:** This is the only question in the pack whose source page carries a `medium` (not `high`) confidence rating in the verification map, and the source intake explicitly flags `needsFollowUp: true` for this page, with the note: *"One cold-start temperature figure on this page is affected by scan ghosting... Left-margin text otherwise faint (bleed-through) but legible from context."* The specific paddlewheel-effect fact this question draws on is not the ghosted figure itself, but the whole page's confidence rating reflects general legibility issues that should be resolved (re-photograph or cross-check against the manual directly) before this fact is treated as course-verified, especially at very-hard difficulty where precision matters most.

**Wording concerns:** None — the question itself is well constructed and the misconceptions are accurate to the underlying (high-confidence-elsewhere) concept of prop-walk/paddlewheel effect.
**Source-confidence concerns:** Page-level `medium` confidence + `needsFollowUp: true`; recommend a clearer photo or manual cross-check before promotion.
**Duplicate/near-duplicate concerns:** None found.

---

## 18. `q-vinci-kortnozzle-dualfunction-vh`

- **Topic:** chapter-2-using-lifeboats
- **Difficulty:** very-hard
- **Image-based:** no
- **sourceReference:** Vinci source batch 2026-07-07, image 2026-07-07_041663-12.jpg
- **Current verificationStatus:** draft-unverified
- **Recommended action: approve**

**Reason:** High-confidence source, no existing coverage of Kort Nozzles anywhere in the bank.

**Wording concerns:** None. **Source-confidence concerns:** None. **Duplicate concerns:** None.

---

## Summary table

| # | id | difficulty | image | recommendation |
|---|---|---|---|---|
| 1 | q-vinci-symbol-colorcode | medium | yes | hold-for-verification |
| 2 | q-vinci-coi-lifeboatmen-4160 | hard | yes | approve |
| 3 | q-vinci-partial-vs-total-enclosed | medium | yes | approve |
| 4 | q-vinci-bow-marking-blockcaps | easy | yes | approve |
| 5 | q-vinci-capacity-lesser-of-vh | very-hard | yes | approve |
| 6 | q-vinci-five-lifeboat-types | easy | no | approve |
| 7 | q-vinci-nonselfrighting-handholds | easy | no | approve |
| 8 | q-vinci-limber-holes | easy | no | revise-before-approval |
| 9 | q-vinci-boarding-time-10-3 | medium | no | approve |
| 10 | q-vinci-air-support-10min | medium | no | approve |
| 11 | q-vinci-diesel-vs-gas-safety | medium | no | approve |
| 12 | q-vinci-stop-diesel-air | medium | no | approve |
| 13 | q-vinci-rescueboat-speed-tow-hard | hard | no | approve |
| 14 | q-vinci-flashpoint-43c | hard | no | approve |
| 15 | q-vinci-extinguisher-classbc | hard | no | approve |
| 16 | q-vinci-togglepin-vs-pintlegudgeon | hard | no | revise-before-approval |
| 17 | q-vinci-paddlewheel-effect-vh | very-hard | no | hold-for-verification |
| 18 | q-vinci-kortnozzle-dualfunction-vh | very-hard | no | approve |

**Totals:** 14 approve, 2 revise-before-approval (`q-vinci-limber-holes`, `q-vinci-togglepin-vs-pintlegudgeon`), 2 hold-for-verification (`q-vinci-symbol-colorcode`, `q-vinci-paddlewheel-effect-vh`), 0 reject.

---

## Recommended first promotion wave (12 questions)

Assuming source confidence is adequate (i.e., taking the 14 "approve" questions as the eligible pool), these 12 are the strongest first wave — chosen for zero-coverage-gap value, a clean difficulty spread, and a mix of image/text formats. The other 2 approved questions (`q-vinci-diesel-vs-gas-safety`, `q-vinci-air-support-10min`) are fine to promote too, just lower marginal priority since they sit thematically close to existing live questions (`q-ch2-dieselfuel`, `q-ch2-airtanks-vh`) rather than opening entirely new ground.

| Priority | id | difficulty | image | why it's in the first wave |
|---|---|---|---|---|
| 1 | q-vinci-five-lifeboat-types | easy | no | foundational anchor; no live equivalent |
| 2 | q-vinci-nonselfrighting-handholds | easy | no | clean, no-conflict, easy-tier coverage |
| 3 | q-vinci-bow-marking-blockcaps | easy | yes | new markings angle, good easy image question |
| 4 | q-vinci-partial-vs-total-enclosed | medium | yes | core compare-and-contrast the live bank lacks |
| 5 | q-vinci-boarding-time-10-3 | medium | no | zero existing coverage of boarding-time rule |
| 6 | q-vinci-stop-diesel-air | medium | no | zero existing coverage of engine-stop procedure |
| 7 | q-vinci-coi-lifeboatmen-4160 | hard | yes | opens an entirely uncovered topic (C.O.I. table) |
| 8 | q-vinci-rescueboat-speed-tow-hard | hard | no | zero existing rescue-boat-spec coverage |
| 9 | q-vinci-flashpoint-43c | hard | no | specific, testable, zero existing coverage |
| 10 | q-vinci-extinguisher-classbc | hard | no | zero existing fire-safety-class coverage |
| 11 | q-vinci-capacity-lesser-of-vh | very-hard | yes | highest-value gap fill in the whole pack |
| 12 | q-vinci-kortnozzle-dualfunction-vh | very-hard | no | zero existing Kort Nozzle coverage |

Difficulty mix: 3 easy / 3 medium / 4 hard / 2 very-hard. Format mix: 4 image-based / 8 text-based.

**Deliberately held back from the first wave:** `q-vinci-limber-holes` and `q-vinci-togglepin-vs-pintlegudgeon` (need the reframe described above), `q-vinci-symbol-colorcode` and `q-vinci-paddlewheel-effect-vh` (need source/topic verification first), plus `q-vinci-diesel-vs-gas-safety` and `q-vinci-air-support-10min` (fine to promote, just lower priority — see above).

---

*This review does not change `verificationStatus` on any question, does not touch `course.json`, and does not promote anything. All 18 questions remain `draft-unverified` in `src/content/imports/vinci-2026-07-07-draft-question-pack.json` pending instructor action.*
