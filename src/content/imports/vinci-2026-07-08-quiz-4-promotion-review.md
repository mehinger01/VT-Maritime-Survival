# Promotion Review — Vinci 2026-07-08 Quiz 4 Draft Question Pack

**Source pack:** `src/content/imports/vinci-2026-07-08-quiz-4-draft-question-pack.json` (16 questions)
**Source intake:** `src/content/imports/vinci-2026-07-08-quiz-4-source-intake.json`
**Compared against:** all 235 live questions in `src/content/course.json`
**Status:** review only — nothing promoted, `course.json` is unmodified.

## Source

"Review Quiz #4," Water Survival, SHLSOS Course #549 — a completed, handwritten 24-question fill-in-the-blank quiz across 6 photographed pages, same format as the quiz-review-1 and quiz-3 batches. All six source images are clean — no diagrams, only two small decorative pencil doodles that don't overlap any text — so nothing in this batch is image-based.

## Duplicate/contradiction screening (before drafting)

Checked all 24 source questions against the live bank first.

**4 dropped as exact/near-exact duplicates**, no new angle:
| # | Fact | Duplicates |
|---|---|---|
| 7 | Tricing pendant pulls the boat to the embarkation deck edge | `q-gloss-tricing`'s own definition |
| 11 | Sea painter secured well forward in the boat | `q-ch2-seapainteruse` |
| 21 | Rottmer gear releases only when waterborne | `q-ch2-rottmer-hard` |
| 22 | Deviation = compass error from onboard metal | `q-ch2-compass3way-vh` |

**1 left blank by the student** (question 13) — no answer to extract, not guessed.

**1 flagged as a genuine contradiction, not a duplicate** — question 24 ("Where would you find the required-lifeboatmen count?") answered "SOLAS" / "Station bill" in this quiz, but the already-live `q-quiz1a-coi-lifeboatmen-source` (from a different Vinci batch) has "Certificate of Inspection" as its correct answer and explicitly marks "Station Bill" as *wrong*. This is a real conflict between two independent Vinci-sourced quizzes on the same fact, not something safe to resolve by picking a side automatically. **Not drafted** — needs Vinci's direct input on which document is actually authoritative (it's plausible more than one document legitimately carries this information, but that itself needs confirming rather than assuming).

**2 internal near-duplicate pairs within this same quiz**, merged into one question each rather than drafted twice:
- Questions 1 and 18 (both about the limit switch — davit type it's found on, and what it does)
- Questions 14 and 19 (both "gravity davit" — most common type, and one-person-operated)

The remaining content produced **16 drafted questions**. A post-draft similarity scan against all 235 live prompts found no further hidden duplicates — the highest-scoring matches (up to 0.65) were either shared question-template phrasing across unrelated facts, or (in the gripes-purpose case) a legitimately distinct angle already addressed in that question's own sourceReference.

## Per-question review

| # | id | confidence | recommended status | ready now? |
|---|---|---|---|---|
| 1 | `q-quiz4-limitswitch-function` | high | quiz-derived-study | Yes |
| 2 | `q-quiz4-gripes-purpose` | high | quiz-derived-study | Yes |
| 3 | `q-quiz4-seapainter-togglepin` | high | quiz-derived-study | Yes |
| 4 | `q-quiz4-blockring-lockingcam` | high | quiz-derived-study | Yes |
| 5 | `q-quiz4-frapping-foreaft` | high | quiz-derived-study | Yes |
| 6 | `q-quiz4-lowering-steps` | high | quiz-derived-study | Yes |
| 7 | `q-quiz4-gravitydavit-governor-speed` | high | quiz-derived-study | Yes |
| 8 | `q-quiz4-pickup-shippositioning` | high | quiz-derived-study | Yes |
| 9 | `q-quiz4-launchrecovery-signaltypes` | high | quiz-derived-study | Yes |
| 10 | `q-quiz4-winch-disablepower` | high (partial answer -- "why" not covered) | quiz-derived-study | Yes |
| 11 | `q-quiz4-fallwire-properties` | high, topically close to a live question | quiz-derived-study | Yes |
| 12 | `q-quiz4-mechanicaldavit-handcrank` | high | quiz-derived-study | Yes |
| 13 | `q-quiz4-reduce-speed-making-way` | high | quiz-derived-study | Yes |
| 14 | `q-quiz4-gravitydavit-oneperson` | high | quiz-derived-study | Yes |
| 15 | `q-quiz4-safetyfactor-launchinggear` | **medium -- notation ambiguity** | needs-review | No |
| 16 | `q-quiz4-compass-stowage` | high | quiz-derived-study | Yes |

**15 of 16 ready for promotion now. 1 held for review.**

### Note on the held item

**`q-quiz4-safetyfactor-launchinggear`** — the student's handwritten answer literally reads "3M". A lifeboat launching-gear "Minimum Safety Factor" is conventionally expressed as a plain multiple of working load (e.g. "3"), and "M" isn't a standard unit in that context, so the draft interprets "M" as most likely shorthand echoing the question's own word "Minimum" rather than part of the numeric value -- but this is an interpretation, not a directly-confirmed reading. Per instruction not to guess unclear notation, this is flagged rather than presented as settled, and held at `needs-review` until confirmed against the manual or with Vinci.

### Note on `q-quiz4-fallwire-properties`

Promoted-ready, but worth flagging: this question ("fall wires are rotation-resistant and corrosion-resistant steel wire rope") sits close in topic to the already-live `q-quiz3-winch-falls-material` ("winch-davit falls are 6x19 regular lay, filler wire wire rope"). They test different facts -- general material properties vs. a specific construction/lay pattern for winch davits specifically -- so both were kept, but a reviewer should be aware they're adjacent enough that a student might experience them as testing "the same thing twice" even though the questions are asking for different specifics.

## Overlap with existing live content

Beyond the items dropped above, no genuine overlap was found. This batch adds new detail to already-well-covered lifeboat launching/rigging territory (gripes, sea painter attachment mechanism and pickup procedure, davit types, fall wire properties, block-ring/hook safety mechanisms) rather than duplicating it -- most of the 16 drafted questions sharpen or extend facts the live bank only covers partially (e.g. the sea painter's location was already live, but not its attachment mechanism or the ship-positioning procedure for at-sea pickup).

## Estimated value of this batch

High. 15 clean, non-duplicate, well-sourced questions from a single quiz is the strongest yield of the four Vinci quiz batches processed so far, and the content is unusually rich in specific, technical, genuinely testable facts (governor/centrifugal brake + 120 ft/min max speed, locking cam + hydrostatic interlock, toggle pin sea-painter attachment, ship positioning for at-sea pickup, frapping-line orientation in rough weather). The one held item is a minor notation ambiguity, not a content problem. The flagged contradiction (question 24 vs. `q-quiz1a-coi-lifeboatmen-source`) is worth surfacing to Vinci directly -- it's the first genuine fact conflict (not just overlap) found across all batches processed this session, and resolving it might also warrant a second look at the already-live question rather than assuming it's the one that's correct.
