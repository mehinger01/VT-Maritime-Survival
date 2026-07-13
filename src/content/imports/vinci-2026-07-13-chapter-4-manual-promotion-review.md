# Promotion Review — Chapter 4 Manual-Derived Draft Question Pack (2026-07-13)

**Status: draft complete, awaiting a separate promotion task. Nothing in
this pack has been added to `src/content/course.json`.**

## Source

- Draft pack: `src/content/imports/vinci-2026-07-13-chapter-4-manual-draft-question-pack.json`
- Source basis: `src/content/imports/vinci-2026-07-13-chapter-4-manual-source-intake.md`
  (Water Survival Student Manual, Chapter 4, pages 89–119, missing ~page 118)
- Cross-referenced against: `src/content/imports/vinci-chapters-4-6-existing-material-audit.md`

## Total drafted

**44 questions**, all `topicId: chapter-4-survival-methods`, all
`verificationStatus: draft-unverified`.

## Difficulty distribution

| Difficulty | Count | % |
|---|---:|---:|
| Easy | 2 | 5% |
| Medium | 27 | 61% |
| Hard | 13 | 30% |
| Very-hard | 2 | 5% |

This skews medium/hard by design — most of this manual excerpt is
substantive procedural and clinical content (hypothermia stages, first
aid, recovery procedures) rather than simple vocabulary recall, so a
heavier medium/hard mix reflects the source material rather than an
attempt to inflate difficulty artificially. The two "very-hard" items are
both deliberate misconception traps that require distinguishing two
similar-sounding facts (air-temperature vs. water-temperature hypothermia
thresholds; which of two pieces of equipment self-rights an unconscious
wearer).

## Promotion tiers

### Tier 1 — promote-ready, high-confidence (40 questions)

Every question below is directly and clearly supported by the manual
excerpt, with no proximity-to-an-existing-question concern, no
missing-page dependency, and no unresolved source tension:

`q-ch4man-amver-purpose`, `q-ch4man-stay-near-position`,
`q-ch4man-pfd-required-color`, `q-ch4man-pfd-vs-suit-selfright`,
`q-ch4man-suit-buoyancy-pillow-pfd`, `q-ch4man-antiexposure-tradeoff`,
`q-ch4man-jumpheight-upperbound`, `q-ch4man-waveslap-protection`,
`q-ch4man-bodysurf-vs-diveunder`, `q-ch4man-burningoil-swimtechnique`,
`q-ch4man-float-no-pfd-methods`, `q-ch4man-shirt-flotation`,
`q-ch4man-mob-causes`, `q-ch4man-mob-crew-response`,
`q-ch4man-mob-stern-away`, `q-ch4man-williamsonturn-purpose`,
`q-ch4man-airtemp-vs-watertemp`, `q-ch4man-alcohol-hypothermia`,
`q-ch4man-coldwater-swim-exhaustion`, `q-ch4man-coldincapacitation-stage`,
`q-ch4man-circumrescue-collapse`, `q-ch4man-hypothermia-drunk-appearance`,
`q-ch4man-rectal-vs-oral-temp`, `q-ch4man-lowest-recovery-temp`,
`q-ch4man-gentle-handling-heart`, `q-ch4man-rewarming-priority-areas`,
`q-ch4man-help-position-purpose`, `q-ch4man-command-order`,
`q-ch4man-survivalcraft-roles`, `q-ch4man-capsize-recovery-craft`,
`q-ch4man-heavyseas-heading`, `q-ch4man-seasickness-preserve-fluids`,
`q-ch4man-urinate-timing`, `q-ch4man-survival-without-water-figures`,
`q-ch4man-rationing-schedule`, `q-ch4man-seaice-vs-saltice`,
`q-ch4man-never-drink-seawater`, `q-ch4man-no-food-without-water`,
`q-ch4man-cumulus-clouds-land`, `q-ch4man-avoid-surf-landing`

### Tier 2 — good questions needing light review (3 questions)

- **`q-ch4man-steppingoff-blocknose`** — tests a specific detail (blocking
  nose/mouth with one hand) from the manual's 5-step stepping-off
  sequence. The source intake already flagged this sequence as "more
  detailed than, and phrased differently from" the already-live
  `q-quiz6-abandonship-jump-procedure` (which tests a different detail:
  crossed arms/legs and checking for debris below). The two questions
  test different specific facts from the same overall procedure, but a
  human should confirm they read as clearly distinct before promoting,
  since a student could otherwise experience them as redundant.
- **`q-ch4man-ripcurrent-escape`** — confirms the manual's rip-current
  escape *direction* strategy (swim parallel/diagonal, not head-on), but
  the already-live `q-quiz6-swim-strongcurrent-45deg` question tests a
  more specific figure (the 45-degree angle) that this excerpt doesn't
  independently confirm. Not a duplicate — the two questions test
  different levels of specificity about the same underlying situation —
  but worth a light read-through together before both are live.
- **`q-ch4man-hypothermia-onset-conservative`** — deliberately phrased as
  a broad true/false ("well under an hour") specifically to hold true
  under either of the source's two stated onset-timing framings (roughly
  10–15 minutes to several hours in one passage; up to 30 minutes in
  the Cold Shock Response chart), rather than picking one. This satisfies
  the "phrase conservatively" instruction, but a human should confirm the
  phrasing reads as a genuine, useful fact rather than a hedge that's too
  vague to be worth testing.

### Tier 3 — hold for verification (1 question)

- **`q-ch4man-finding-water-ashore-digging`** — the digging technique
  itself is clearly legible on the available page 119, but that page
  immediately follows the confirmed-missing ~page 118, and the source
  intake noted page 119's own opening heading context is uncertain (it
  may be a continuation of content that started on the missing page).
  The fact drafted here doesn't depend on the missing content to be
  correct, but out of the caution this task's rules call for around the
  missing-page boundary, this is held rather than treated as
  promotion-ready until the actual page 118 is obtained or the section's
  boundaries are otherwise confirmed.

## Held/rejected items and why (never drafted, or removed during review)

**Never drafted, by rule:**

- Anything using the immersion suit's manual-stated thermal-protection
  figure ("2°–5° after 6 hours") — the source intake flagged this as
  contradicting the already-live CFR-sourced figure (a hard 2°C cap).
  Drafting a question from either number risked contradicting the live
  Immersion Suits & Thermal Protection Learn Mode module, so this fact
  was excluded entirely rather than drafted and held.
- Anything using the Williamson Turn's second-phase degree arithmetic
  (the source's own worked example, "310 degrees," doesn't check out
  against its own stated rule). Only the turn's general purpose and
  first-phase direction concept was drafted (`q-ch4man-williamsonturn-
  purpose`), with no degree arithmetic anywhere in that question.
- Anything attributed to the missing ~page 118 itself. Nothing was
  invented to fill that gap.
- Marine Life / shark and jellyfish safety content — present in the
  source folder (page ~99) but not written up in factual detail in the
  source intake document (only flagged there as "net-new content" without
  citable specifics), so there wasn't a solid fact base to draft from
  without going back to the raw source, which was out of this task's
  scope.

**Drafted, then removed during review** (to keep the pack within the
35–50 target range while prioritizing the strongest, most distinct
facts) — held back in favor of the 44 above, not rejected for accuracy
reasons, and available to reconsider in a future batch if more Chapter 4
questions are wanted later:

`q-ch4man-suit-nicknames` (Survival Suit/Gumby Suit trivia),
`q-ch4man-secure-ties-before-jump` (thin, conceptually close to the
jump-height-upper-bound question), `q-ch4man-clean-fish-immediately`
(minor trivia), `q-ch4man-bodyfat-fallback` (nice-to-have, cut for
budget), `q-ch4man-pfd-care-stowage` (decent but generic), `q-ch4man-
poisonous-nearshore-fish` (food section was already well-represented),
`q-ch4man-warmliquids-conscious-only` (thematically close to two other
first-aid questions already in the set), `q-ch4man-hypothermia-skin-
breathing` (less distinctive than the other symptom-focused questions
kept), `q-ch4man-huddle-purpose` (kept H.E.L.P. instead as the stronger
of the two related positions), `q-ch4man-mob-lifeboat-approach`
(Man Overboard was already well-represented at 4 other questions).

## Duplicate / near-duplicate findings against the live 262-question bank

Checked all 44 drafted prompts against all 262 live prompts with a
`difflib.SequenceMatcher` pass (0.7 ratio treated as the "true duplicate"
threshold, matching this project's established convention), plus an
internal pass of the 44 drafted prompts against each other.

**No matches above the 0.7 true-duplicate threshold, against the live
bank or internally within the pack.**

27 drafted prompts scored in the 0.45–0.7 range against at least one live
question. Reviewing each of these by hand (not just by score):

- **Most are false positives driven by shared sentence structure**, not
  real content overlap — several drafted questions use a "Which of the
  following is NOT one of..." format that several *unrelated* live
  questions also happen to use (e.g., `q-ch4man-mob-causes` scored 0.667
  against `q-vinci-five-lifeboat-types`, which is about lifeboat *types*,
  not man-overboard causes — the overlap is the sentence template, not
  the subject matter). Same pattern for `q-ch4man-survivalcraft-roles`
  vs. `q-quizr1-equipment-list`.
- **One genuinely interesting cross-reference, not a duplicate**:
  `q-ch4man-pfd-required-color` (0.593 against `q-quizr1-sail-color`) —
  both happen to have "Indian orange" as part of a correct answer, but
  they're about two different objects (a PFD's required color vs. a
  lifeboat's sail color). Not a duplicate, but worth knowing the same
  color term appears in two different live-adjacent facts.
- **One already-discussed proximity case** (see Tier 2 above):
  `q-ch4man-steppingoff-blocknose` scored 0.564 against
  `q-quiz6-abandonship-jump-procedure` — a real, worth-reviewing
  proximity, correctly flagged in Tier 2.
- **A topical (not phrase-level) proximity that the similarity score
  alone missed**: `q-ch4man-ripcurrent-escape` scored only 0.435 against
  `q-quiz6-swim-strongcurrent-45deg` (below even the 0.45 cutoff used
  above, since the two prompts are worded quite differently), but both
  questions are clearly about the same underlying situation — escaping a
  strong current while swimming to shore — at two different levels of
  specificity (general direction strategy vs. a specific 45-degree
  figure). This was caught by hand during drafting, not by the
  similarity score, which is exactly why it's flagged in Tier 2 despite
  the low score: phrase-similarity tools can miss same-topic,
  different-specificity overlaps that a human reading both questions
  would immediately notice.
- No other 0.45+ match represents a real content duplicate on inspection.

## Section coverage by manual topic

| Manual section | Drafted questions |
|---|---:|
| Understanding Coast Guard Searches | 2 |
| Abandoning Ship / PFDs | 3 |
| Immersion Suits / Anti-Exposure Suit | 3 |
| Entering the Water from a Height / Stepping Off | 2 |
| Swimming for Survival | 3 |
| Floating Without a PFD / Clothing for Flotation | 2 |
| Man Overboard (incl. Williamson Turn purpose) | 4 |
| Cold Water Survival / Cold Shock Response (4-stage progression) | 5 |
| Hypothermia Signs, Symptoms & First Aid | 7 |
| H.E.L.P. Position | 1 |
| Organizing for Survival | 2 |
| Survival on the Sea | 2 |
| Preserve Body Fluids / Seasickness / Urination | 2 |
| Drinking Water | 3 |
| Snow/Ice, Seawater Warning, Food | 3 |
| Looking for Land | 1 |
| Beaching Survival Craft | 1 |
| Finding Water Ashore | 1 (Tier 3) |
| **Total** | **44** |

Cold Water Survival and Hypothermia together account for 12 of 44
questions (27%) — proportionate to that section being, by a wide margin,
the largest and richest in the source manual excerpt (8 of the batch's
28 readable pages), and matching the Chapters 4–6 audit's identification
of Cold-Water Immersion Physiology as Chapter 4's single largest and
previously weakest cluster.

## Source-confidence notes

- Every question's `sourceReference` points to the Chapter 4 manual
  source intake file and names the relevant manual page(s), consistent
  with this project's sourcing convention.
- No question in this pack relies on the missing ~page 118 content.
- No question in this pack restates or contradicts the CFR-sourced
  Immersion Suit standard (the one point of tension there — the manual's
  looser "2°–5°" thermal-protection figure — was excluded entirely
  rather than drafted).
- No question in this pack uses the Williamson Turn's flagged-as-
  questionable degree arithmetic.
- One question (`q-ch4man-hypothermia-onset-conservative`) is
  deliberately hedged to avoid silently picking a side in the source's
  own internal timing tension, per this task's explicit instruction.
- All 44 questions include a misconception explanation on every
  incorrect choice, consistent with this project's established quality
  bar (checked directly: 99.2% of live wrong-choices already carry a
  misconception field).

## Recommendations for the next task

1. Promote the 40 Tier 1 questions once explicitly requested — they are
   clean, source-verified, duplicate-checked, and internally consistent.
2. Have a human spot-check the 3 Tier 2 questions specifically for
   read-alongside-the-existing-question clarity before including them in
   a promotion.
3. Leave `q-ch4man-finding-water-ashore-digging` (Tier 3) out of the next
   promotion unless the missing page 118 is obtained or the section's
   boundary is otherwise clarified first.
4. This pack does not touch the immersion-suit thermal-protection
   discrepancy or the Williamson Turn arithmetic question — both remain
   open items from the source intake that still need Vinci's input,
   independent of this question pack.
