# Existing Database Material Audit — Chapters 4, 5, 6 (2026-07-13)

**Status: audit only. No question was added, removed, or promoted, and
`course.json` was not touched in this task.**

## Why this audit, and a framing note up front

The client wants more Chapters 4–6 material, but additional book/manual
copies haven't arrived yet. Rather than drafting new content blind, this
audit inventories what's *already* live for these three chapters — both
questions and Learn Mode teaching — so the next steps can be sequenced by
how trustworthy each cluster's source actually is, not just by size.

That distinction matters more than usual for these three chapters. Per
`docs/CONTENT_INTAKE_BENCHMARK.md` and `course.json`'s own `contentNote`,
questions with **no `verificationStatus` field at all** (shown as `None`
below) are not "an older but fine" tier — they're explicitly the
*original placeholder content, written before any Vinci material arrived*
("NOT sourced from the manual itself and remain draft/unverified," per
the app's own content note). They are live and actively served today, but
they are the single **least** trustworthy tier in the app, below even
`quiz-derived-study` (which is at least genuinely Vinci's own quiz
answers, just not yet cross-checked against the manual). This audit
treats that distinction as load-bearing for its recommendations.

## Question count by chapter

| Chapter | Live questions |
|---|---:|
| Chapter 4 — Survival Methods | 21 |
| Chapter 5 — Signaling | 25 |
| Chapter 6 — Being Rescued | 15 |
| **Total** | **61** |

Status breakdown (counts of live questions per chapter):

| Chapter | `None` (pre-Vinci placeholder) | `quiz-derived-study` | `source-backed-study` | `official-source-supported` |
|---|---:|---:|---:|---:|
| 4 — Survival Methods | 12 | 8 | 0 | 1 |
| 5 — Signaling | 12 | 4 | 9 | 0 |
| 6 — Being Rescued | 11 | 2 | 0 | 2 |

## Chapter 4 — Survival Methods: teachable clusters

| Cluster | Representative IDs | Count | Source status mix | Learn Mode support today |
|---|---|---:|---|---|
| Cold-Water Immersion Physiology (hypothermia vs. cold-shock response, water-temp thresholds, why not to swim) | `q-surv-1`, `q-surv-5`, `q-surv-6`, `q-surv-7`, `q-surv-9`, `q-surv-10`, `q-quiz1a-hypothermia-water-temp` | 7 | 6× `None`, 1× `quiz-derived-study` | None — "Cold Water Survival" placeholder still empty |
| Abandoning Ship / Water-Entry Procedure | `q-surv-3`, `q-quiz1a-preferred-jump-height`, `q-quiz6-abandonship-jump-procedure`, `q-quiz6-oilfire-waterentry` | 4 | 1× `None`, 3× `quiz-derived-study` | None — "Abandoning Ship" placeholder still empty |
| Survival Priorities, Rationing & Morale | `q-surv-4`, `q-surv-8`, `q-surv-11`, `q-surv-12`, `q-ch4-waterrequirement-official`, `q-quiz1a-first-water-liferaft` | 6 | 4× `None`, 1× `official-source-supported`, 1× `quiz-derived-study` | None — "Organizing for Survival" / "Drinking Water" / "Food" placeholders still empty |
| Man Overboard / Swimming for Survival | `q-quiz1a-manoverboard-dont-swim`, `q-quiz6-swim-strongcurrent-45deg` | 2 | 2× `quiz-derived-study` | None — "Man Overboard" / "Swimming for Survival" placeholders still empty |
| Immersion Suit (chapter-4-tagged) | `q-surv-2` | 1 | 1× `None` | **Yes** — "Immersion Suits & Thermal Protection" was just written (previous task) |
| Beaching / Survival Ashore | `q-quiz6-beach-landing-hightideline` | 1 | 1× `quiz-derived-study` | None — "Beaching Survival Craft" placeholder still empty |

**Cross-chapter note worth flagging:** four more immersion-suit facts
(`q-cfr-suit-jumpheight`, `q-cfr-suit-coverage`, `q-cfr-suit-color-
vividorange`, all `source-backed-study`, plus the TPA-compare question
`q-ch1-vocab-immersionsuit-tpa-compare-medium`, `course-verified`) are
tagged `topicId: chapter-1-planning-ahead`, not Chapter 4 — even though
the Learn Mode module just written for immersion suits lives under
Chapter 4's placeholder and teaches all of this material together. The
content is in the right place pedagogically, but the question tagging is
split across two chapters. Not a blocker, just worth knowing before
building more Chapter 4 content, since a "question count for Chapter 4"
search alone will undercount how much immersion-suit material actually
exists.

## Chapter 5 — Signaling: teachable clusters

| Cluster | Representative IDs | Count | Source status mix | Learn Mode support today |
|---|---|---:|---|---|
| Recognized Distress Signals Reference Set (Mayday, SOS/Morse, N.C. flag, square-flag-and-ball, orange smoke, arm-wave, white light rate, gun interval, general alarm, continuous blast) | `q-cfr-mayday-radiotelephony`, `q-cfr-sos-morse-distress`, `q-cfr-nc-flag-distress`, `q-cfr-squareflag-ball-distress`, `q-cfr-orangesmoke-distress`, `q-cfr-armwave-distress`, `q-cfr-whitelight-flash-distress`, `q-cfr-gunsignal-distress`, `q-quiz6-generalalarm-continuoussignal`, `q-quiz1a-continuous-blast-distress`, `q-quiz1a-redstar-signal` | 11 | 8× `source-backed-study`, 3× `quiz-derived-study`, **0× `None`** | None — "Table of Lifesaving Signals" / "International Distress Signals" placeholders still empty, despite being the best-sourced cluster in Chapters 4–6 |
| EPIRB / SART / VHF (device definitions + 2 operational facts) | `q-sig-1`, `q-sig-2`, `q-sig-3`, `q-sig-4`, `q-quiz1a-sart-know-searching`, `q-cfr-epirb-monthly-test` | 6 | 4× `None` (device definitions), 1× `quiz-derived-study`, 1× `source-backed-study` | None — "VHF Survival Craft Transceiver," "EPIRB," "SART" placeholders still empty |
| Visual/Audible Signaling Devices & Tactics (flares, mirror, whistle, when to signal vs. conserve, escalation) | `q-sig-5` through `q-sig-12` | 8 | 8× `None` | None — "Signaling Devices" placeholder still empty |

## Chapter 6 — Being Rescued: teachable clusters

| Cluster | Representative IDs | Count | Source status mix | Learn Mode support today |
|---|---|---:|---|---|
| Helicopter Hoist & Rescue Basket/Sling (static-discharge precaution, follow crew instructions, one-at-a-time, basket behavior) | `q-rescue-1`, `q-rescue-2`, `q-rescue-3`, `q-rescue-4`, `q-rescue-5`, `q-rescue-8`, `q-rescue-9`, `q-rescue-11`, `q-rescue-12`, `q-rescue-7`, `q-ch6-rescuesling-official-hard` | 11 | 9× `None`, 2× `official-source-supported` | None — "Helicopter Hoist Procedures" placeholder still empty |
| Vessel Rescue / Heaving Line / Rescue Swimmer | `q-rescue-6`, `q-rescue-10` | 2 | 2× `None` | None — "Rescued at Last" placeholder still empty |
| Fast-Rescue-Boat Pickup Positioning | `q-quiz1a-fastrescueboat-approach` | 1 | 1× `quiz-derived-study` | None |
| Williamson Turn / Man-Overboard Recovery Maneuver | `q-quiz6-williamsonturn-manoverboard` | 1 | 1× `quiz-derived-study` | None |

## Which clusters have questions but little/no teaching content

**Every cluster in Chapters 4–6 except the one just-built Immersion
Suits module has zero Learn Mode support.** That was already established
in the prior Learn Mode coverage audit; this task's contribution is
breaking those three chapters down into the specific clusters above so
future modules can be scoped and prioritized individually rather than
"the whole chapter" at once.

## Quiz-derived / unverified items to wait on until book verification arrives

This is where source-status mix matters more than cluster size:

- **Chapter 4 — Cold-Water Immersion Physiology** (the single largest
  cluster in these three chapters, 7 questions) is 86% `None`-tier
  pre-Vinci placeholder content. This is exactly the kind of physiology
  claim (hypothermia vs. cold-shock timing, specific water-temperature
  thresholds) where a wrong number written now would be embarrassing to
  walk back once the real manual arrives. **Wait on a full teaching
  module here** — at most, a very hedged placeholder note could go up
  now, but the underlying facts need a manual check first.
- **Chapter 5 — Visual/Audible Signaling Devices & Tactics** (8
  questions) is 100% `None`-tier. None of it traces to Vinci's quiz, the
  manual, or CFR. **Wait entirely** on this cluster.
- **Chapter 5 — EPIRB/SART/VHF device definitions** (4 of 6 questions in
  that cluster) are `None`-tier; only the monthly-test-interval fact
  (CFR-backed) and the "SART alarm means someone's searching for you"
  fact (quiz-derived) are trustworthy today. **If this module gets built
  before the manual arrives, teach only those two facts confidently and
  flag the device definitions themselves as pending verification** —
  don't present "what an EPIRB/SART/VHF transceiver is" as settled from
  this question set alone.
- **Chapter 6 — Helicopter Hoist & Rescue Basket/Sling** (11 questions,
  the biggest Chapter 6 cluster) is 82% `None`-tier. The two
  `official-source-supported` anchors (`q-rescue-7`'s one-at-a-time
  boarding rationale, `q-ch6-rescuesling-official-hard`'s rescue-sling
  scenario) are solid, but the bulk of the procedural detail (exact
  static-discharge mechanics, what to do if the basket spins, etc.) is
  unverified placeholder content. **Wait on a full module**; at most
  build narrowly around the two anchor questions.
- **Chapter 6 — Vessel Rescue / Heaving Line** (2 questions) is 100%
  `None`-tier. **Wait entirely.**

By contrast, `quiz-derived-study` items throughout (Man Overboard/
Swimming in Chapter 4; the three quiz-derived distress-signal facts in
Chapter 5; the two Chapter 6 procedural facts) are Vinci's own quiz
answers — a real signal, not yet cross-checked against the manual, but
meaningfully more trustworthy than the `None` tier and reasonable to
teach now with a light "drawn from Vinci's own quiz material" framing
rather than presenting it as manual-verified.

## Recommended Learn Mode modules we can safely build now

1. **Chapter 5 — Distress Signal Reference Table.** 11 questions, 8 of
   them `source-backed-study` (CFR-corroborated) and the remaining 3
   `quiz-derived-study` — **zero** `None`-tier content in this cluster.
   This is the single safest, most substantial module available across
   all of Chapters 4–6 right now, and it was already the top Chapter 5
   recommendation in the prior Learn Mode coverage audit. Nothing here
   depends on the manual arriving.
2. **Chapter 4 — Abandoning Ship / Water-Entry Procedure.** 4 questions,
   3 of 4 `quiz-derived-study` (only `q-surv-3` is `None`-tier and could
   be soft-pedaled or omitted from keyFacts until verified). Small but
   clean, and complements the Immersion Suits module already built.
3. **Chapter 4 — Man Overboard / Swimming for Survival.** Only 2
   questions, but both `quiz-derived-study` with no `None`-tier risk —
   a small, safe, quick win alongside #2.
4. **Chapter 5 — the two verified EPIRB/SART operational facts**
   (monthly test interval; SART alarm meaning), built narrowly and
   explicitly scoped to avoid presenting the unverified device
   definitions as settled.

## Recommended items to wait on until book copies arrive

1. **Chapter 4 — Cold-Water Immersion Physiology** (7 questions, the
   largest cluster in these chapters) — 86% pre-Vinci placeholder
   content; physiology facts and numeric thresholds are exactly where
   getting it wrong is costly.
2. **Chapter 5 — Visual/Audible Signaling Devices & Tactics** (8
   questions) — 100% pre-Vinci placeholder content.
3. **Chapter 5 — EPIRB/SART/VHF device definitions** specifically (as
   distinct from the two verified operational facts above).
4. **Chapter 6 — Helicopter Hoist & Rescue Basket/Sling** (11 questions,
   the largest Chapter 6 cluster) — 82% pre-Vinci placeholder content,
   beyond the two solid anchor questions.
5. **Chapter 6 — Vessel Rescue / Heaving Line** (2 questions) — 100%
   pre-Vinci placeholder content.
6. **Chapter 4 — Survival Priorities, Rationing & Morale** (6 questions,
   4 of 6 `None`-tier) — partially safe (the water-stowage requirement
   and who-drinks-first facts are trustworthy) but the broader
   rationing/morale guidance is mostly unverified; build narrowly if at
   all before the manual arrives.

## Confidence / limitations

- All counts above were computed directly from `src/content/course.json`
  (262 live questions total; 61 across Chapters 4–6), not estimated.
- Clusters were grouped by reading each question's prompt and answer
  directly, not by keyword search alone, so the groupings should be
  accurate — but a different reasonable person might split or merge a
  cluster slightly differently (e.g., "Man Overboard" and "Swimming for
  Survival" are combined here since both live questions overlap sea-
  survival swimming technique).
- The `None`-tier characterization relies on `course.json`'s own
  `contentNote` field and `docs/CONTENT_INTAKE_BENCHMARK.md` — both
  read in full for this audit — rather than assumption.
- This audit did not re-verify any individual question's factual
  correctness against outside sources; it only classifies existing
  `verificationStatus` metadata and groups by topic.
