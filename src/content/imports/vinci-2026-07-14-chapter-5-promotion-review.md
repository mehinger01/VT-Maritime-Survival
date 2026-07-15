# Promotion Review — Chapter 5 Draft Question Pack (2026-07-14)

**Status: draft complete, awaiting a separate promotion task. Nothing in
this pack has been added to `src/content/course.json`.**

## Source

- Draft pack: `src/content/imports/vinci-2026-07-14-chapter-5-draft-question-pack.json`
- Study notes: `src/content/imports/vinci-2026-07-14-chapter-5-source-intake.md`
  (Water Survival Student Manual, Chapter 5, pages 120–132)
- Drive folder: `Ch 5` (13 unique pages, each uploaded twice — see the
  source intake's note on the duplicate-upload artifact)

## Total drafted

**35 questions**, all `topicId: chapter-5-signaling`, all
`verificationStatus: draft-unverified`.

## Difficulty distribution

| Difficulty | Count |
|---|---:|
| Easy | 3 |
| Medium | 19 |
| Hard | 11 |
| Very-hard | 2 |

## Duplicate / near-duplicate findings against the live 25 Chapter 5 questions (and the full 302-question bank)

Ran a `difflib.SequenceMatcher` pass (0.7 = true-duplicate threshold,
matching this project's established convention) against all 302 live
questions, plus an internal pass across the 35 drafted prompts.

- **One internal near-duplicate found and fixed**: `q-ch5man-distress-
  fogsignal-continuous` and `q-ch5man-distress-radiotelephone-alarm`
  originally shared a "Besides X, what other Y signal is on the
  international list..." sentence template (0.711 similarity) despite
  testing different facts (continuous fog signal vs. radiotelephone
  alarm signal). Reworded the radiotelephone-alarm prompt to remove the
  template overlap; re-checked at 0 internal matches above 0.6.
- **One question crosses the 0.7 threshold against a live question,
  reviewed by hand, not a true duplicate but flagged for verification
  rather than silently included**: `q-ch5man-distress-dye-marker`
  ("What color dye marker is recognized as a valid distress signal?")
  scores 0.756 against the live `q-cfr-orangesmoke-distress` ("What
  color smoke signal is a recognized distress signal?"). These are
  different devices (a dye marker vs. a smoke signal) with different
  correct answers (any color vs. specifically orange) — the high score
  is a sentence-template artifact, the same pattern seen in prior
  Chapter 4 promotion reviews. Categorized as **needs verification**
  below rather than ready-for-review, specifically because it crossed
  the formal threshold and deserves a second set of eyes before
  promotion, even though the underlying content is legitimate and
  distinct.
- No other match reached the 0.7 threshold. Several questions scored in
  the 0.5–0.7 range against unrelated live questions (mostly other
  "which of the following..." or "what color..." sentence-template
  matches, e.g. `q-ch5man-sart-radar-band` against several unrelated
  questions about entirely different equipment) — reviewed by hand, none
  represent real content overlap.

## Categorization

### Ready for review (33 questions)

Clean OCR source, no proximity concerns, no missing/uncertain figures.
All VHF, EPIRB (except the excluded HRU-depth fact), most SART (except
the excluded transponder-hours fact), Signals to Communicate From Shore,
Aircraft Directs/Dismisses, most International Distress Signals items,
and all Signaling Devices questions fall in this category:

`q-ch5man-vhf-radio-count`, `q-ch5man-vhf-channel-purposes`,
`q-ch5man-vhf-specs`, `q-ch5man-vhf-when-to-turn-on`,
`q-ch5man-vhf-nicad-battery`, `q-ch5man-epirb-classI-stowage`,
`q-ch5man-epirb-noaa-registration`, `q-ch5man-cospas-sarsat-detection-time`,
`q-ch5man-epirb-two-frequencies`, `q-ch5man-epirb-transmit-duration`,
`q-ch5man-epirb-deployment-procedure`, `q-ch5man-sart-radar-band`,
`q-ch5man-sart-radar-appearance`, `q-ch5man-sart-deployment`,
`q-ch5man-sart-standby-battery`, `q-ch5man-sart-range-standard`,
`q-ch5man-sart-durability-requirements`,
`q-ch5man-shore-signal-bestplace-land`,
`q-ch5man-shore-signal-dangerous-landing`,
`q-ch5man-shore-signal-better-direction`,
`q-ch5man-aircraft-directs-vs-dismisses`,
`q-ch5man-distress-fogsignal-continuous`, `q-ch5man-distress-flames-barrel`,
`q-ch5man-distress-aerial-orange-canvas`, `q-ch5man-nc-flag-appearance`,
`q-ch5man-distress-radiotelephone-alarm`,
`q-ch5man-pyrotechnic-firing-technique`, `q-ch5man-signaling-mirror-technique`,
`q-ch5man-red-rocket-parachute-flare-specs`,
`q-ch5man-handflare-vs-parachuteflare`, `q-ch5man-buoyant-smoke-specs`,
`q-ch5man-whistle-range`, `q-ch5man-radar-reflector-purpose`

### Needs verification (2 questions)

- **`q-ch5man-distress-dye-marker`** — content is legitimate and
  distinct from the live orange-smoke question, but crosses the 0.7
  similarity threshold on a sentence-template match; flag for a second
  read before promoting, per the duplicate-findings note above.
- **`q-ch5man-shore-apparatus-signals`** — the underlying fact (vertical
  motion = affirmative, horizontal = negative, for shore lifesaving
  apparatus operations) is decipherable and internally consistent with
  the cleaner pages 125–126, but its specific source page (129) was
  flagged in the source intake as having noticeably rougher OCR quality
  than the rest of the batch. Recommend a direct visual check of page
  129 before treating this as fully confirmed, even though the fact
  itself reads as reliable.

### Unclear / OCR-uncertain (0 questions drafted; 2 facts excluded entirely)

No question in this pack was drafted from an OCR-uncertain figure and
then flagged — instead, following the pattern established in the
Chapter 4 batch, both OCR-uncertain figures were **excluded from
drafting entirely** rather than guessed at or included with a caveat:

- **EPIRB hydrostatic release submersion depth** — OCR read "3–10 feet,"
  but inside a heavily garbled sentence with multiple dropped words
  around it. No question uses this figure.
- **SART transponder-mode battery duration** — the number did not
  survive OCR at all (only the "96 hours...standby mode followed \[gap\]
  hours in transponder mode" fragment came through). No question uses
  this figure; the SART battery question in this pack (`q-ch5man-sart-
  standby-battery`) uses only the confirmed 96-hour standby figure and
  explicitly notes in its `sourceReference` that the transponder-mode
  figure was excluded.

Both gaps are documented in detail in the source intake's
OCR-uncertainty section, including exactly where in the source image
each gap occurs, so a human reviewer can go straight to the right page.

## Content NOT drafted, and why

- **Basic "what is an EPIRB/SART/VHF for" definitional facts** — already
  live as `q-sig-1` through `q-sig-4`. This pack deliberately focuses on
  more specific technical facts, figures, and procedures instead of
  re-testing the same basic definitions.
- **International Morse Code page (p.124)** — mostly a reference chart
  (alphabet/numeral table), not prose. The one genuine fact on that page
  (SOS as the most common distress symbol) is already live as
  `q-cfr-sos-morse-distress`.
- **Six items from the International Distress Signals list already
  live**: gun signal, SOS Morse, Mayday, N.C. flag (the basic hoist
  fact, though this pack does add a new question about what the
  individual flags *look like*, which isn't live), square-flag-and-ball,
  and arm-wave. Not redundantly re-drafted.
- **EPIRB monthly testing requirement** — already live as
  `q-cfr-epirb-monthly-test`. This pack instead drafts the EPIRB's
  48-hour minimum transmit duration, a related but distinct fact.
- **SART "how would you know a ship is searching for you" framing** —
  already live as `q-quiz1a-sart-know-searching`. This pack's SART
  questions focus on technical specs (radar band, range, durability,
  battery) instead.

## Source-confidence notes

- Every question's `sourceReference` points to the Chapter 5 source
  intake and names the specific manual page.
- No question in this pack uses either of the two OCR-uncertain figures.
- All 35 questions include a misconception explanation on every
  incorrect choice.
- The already-live "International Distress Signals" Learn Mode module
  (built from CFR sourcing) is independently corroborated by 6 items on
  this manual's page 130 list — a stronger verification than CFR alone,
  worth noting for a future Learn Mode task even though this task didn't
  touch Learn Mode content.

## Recommendations for the next task

1. Have a human do a quick, targeted read of page 129 (shore lifesaving
   apparatus signals) and the specific sentence containing the EPIRB HRU
   depth on page 121, since both are flagged above.
2. Resolve the `q-ch5man-distress-dye-marker` similarity flag by
   confirming the two questions (dye marker vs. orange smoke) read as
   clearly distinct to a student, then it can move to Ready for Review.
3. Once the above are resolved, this pack's 33 (soon potentially 35)
   Ready for Review questions would be reasonable candidates for a
   future, separately-requested promotion task, following the same
   tiered-promotion pattern already used for Chapter 4.
4. Consider a follow-up task to fill the two excluded OCR gaps directly
   from the source images at higher resolution, since both are isolated,
   specific figures (not full paragraphs) that a direct visual check
   should resolve quickly.
