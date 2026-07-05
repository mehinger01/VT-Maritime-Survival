# Best Available Content Strategy

Vinci may not be able to send the full *Water Survival Student Manual*
(SHLSOS Course No. 549, June 2024) or other instructor-verified
materials — not on any predictable timeline, possibly not at all. This
document defines how the Maritime Survival Study Tool keeps improving
in that situation without ever pretending a lower-quality source is
Vinci's actual manual.

It builds directly on
[`docs/CONTENT_INTAKE_BENCHMARK.md`](./CONTENT_INTAKE_BENCHMARK.md)
(the 4-tier source system and the base verification rule) and
[`docs/SIU_2019_CONVERSION_PLAN.md`](./SIU_2019_CONVERSION_PLAN.md)
(how one Tier 3 source was actually processed). This document is the
general strategy those two are instances of.

## The core problem this solves

Up to now, "verified" had one path: trace it to Vinci's manual. That's
still the *best* path, but treating it as the *only* path means the
tool stalls completely if the manual never arrives. This strategy adds
a second, weaker but legitimate path — **multi-source agreement between
official and reputable sources** — so the tool can keep improving on
accessible material while being honest that this is a different, lower
standard than actual manual confirmation.

## Source hierarchy

### Tier 1 — Vinci's actual manual, notes, slides, instructor materials
The manual itself, class notes, PowerPoint slides, or anything else
that came directly from Vinci or his course. This is the only source
that can confirm a fact is *specifically what this course teaches*,
including any vessel-type, edition, or instructor-specific choices.

**How it may be used:** as sole authority for `course-verified` status.
A single Tier 1 confirmation is sufficient — no second source needed.

### Tier 2 — Official USCG / NMC sample exams and exam references
Published U.S. Coast Guard or National Maritime Center sample exams,
official exam question banks, and regulatory text (CFR sections) the
course is built to prepare students for.

**How it may be used:** as authority for `official-source-supported`
status on its own (regulatory/official facts are stable regardless of
which course teaches them), and as one leg of `multi-source-supported`
status when combined with Tier 3 agreement.

### Tier 3 — Practice-test / Quizlet-style sources, including SIU 2019
Third-party practice tests and flashcard sets assembled by other
students, unions, or tutors preparing for the same or a related exam.
Useful for exam-style phrasing and likely content, but authored by
unknown people with unconfirmed accuracy, and never confirmed against
Vinci's specific course.

**How it may be used:** as one leg of `multi-source-supported` status
when at least one *other* source (Tier 2, or a second independent Tier
3 source) agrees. Never sufficient alone to exceed
`practice-test-informed`.

### Tier 4 — General public training-provider / course-description sources
Marketing pages, generic syllabi, or course descriptions from training
providers unrelated to Vinci's specific course.

**How it may be used:** scope/background only — helps confirm a topic
is "in the right neighborhood" for a water survival course. Never
supplies a fact, a number, or exact wording used in a live question.

## What each tier may be used for

| Tier | Verified content | Official-source-supported content | Practice-test-informed content | Scope/background only |
|---|---|---|---|---|
| 1 — Vinci's manual/notes/slides | **Yes, alone** | — | — | — |
| 2 — Official USCG/NMC material | If Vinci confirms course alignment | **Yes, alone** | — | — |
| 3 — Practice-test/Quizlet (incl. SIU 2019) | No | No | **Yes, alone** | Yes |
| 4 — General training-provider material | No | No | No | **Yes, only** |

## Source confidence labels

These are the labels future question objects should carry (as a
`sourceConfidence` field, alongside the existing `sourceReference` and
`verificationStatus` fields already used on the SIU-intake-derived
questions). They are **ranked**, weakest to strongest:

1. **`draft-unverified`** — current default for anything not yet
   checked against any other source. What all 84 original questions
   and the 25 SIU-inspired questions carry today.
2. **`practice-test-informed`** — drawn from one Tier 3 source, cleaned
   up, but not corroborated by anything else. Better than nothing,
   worse than confirmed.
3. **`multi-source-supported`** — at least two independent sources
   agree (Tier 2 + Tier 3, or two independent Tier 3 sources), with the
   agreement itself documented. This is **the best available standard
   when Vinci's manual is not accessible.**
4. **`official-source-supported`** — confirmed directly against Tier 2
   material (official USCG/NMC content), independent of whether it
   also appears in a Tier 3 source.
5. **`course-verified`** — traced to Vinci's actual manual, notes, or
   slides. The only label that means "this is specifically what this
   course teaches."

## The governing rule

> **If Vinci's actual manual is unavailable, the best available
> standard is multi-source agreement from official and reputable
> practice sources, with clear labeling.**

This does not lower the bar for `course-verified` — that label still
requires Tier 1. It defines a *separate, honestly-labeled* ceiling
(`multi-source-supported`) for what the tool can respectably claim
when Tier 1 access is the actual constraint, not a shortcut being taken
to avoid the work of getting Tier 1 material.

## Promotion pathway

Every question moves through the same pipeline, and its confidence
label should track its furthest confirmed stage — never further:

```
1. intake                 — raw item captured from a source, verbatim
2. cleaned                — OCR/grammar/formatting fixed, meaning preserved
3. mapped                 — assigned to a manual chapter/subtopic
4. draft app question     — written into course.json's question format
                              (sourceConfidence: draft-unverified or
                              practice-test-informed)
5. source-supported       — confirmed against ONE authoritative source
                              (Tier 1 or Tier 2)
                              (sourceConfidence: official-source-supported,
                              or course-verified if that one source was Tier 1)
6. multi-source-supported — confirmed by a SECOND independent source
                              agreeing with the first
                              (sourceConfidence: multi-source-supported,
                              unless step 5 was already course-verified)
7. course-verified        — Vinci's actual manual/instructor material
                              specifically confirms it (always the final
                              word if it ever arrives, even overriding a
                              prior multi-source-supported label)
```

A question can jump straight from stage 4 to `course-verified` (stage
7) the moment real manual content arrives — the intermediate stages
exist for the case where manual access is delayed or never happens,
not to force every question through every stage in order.

## Next official sources to intake

In this priority order:

1. **USCG/NMC Q445 — Lifeboat Operator sample exam.** Official exam
   reference, most directly relevant to this course's lifeboat-heavy
   content (Chapter 2 is already the largest chapter). Intake as Tier
   2 using the same schema pattern as `siu-2019-practice-test.json`.
2. **USCG/NMC Q447 — Lifeboat Operator (Limited) sample exam.** Same
   tier and treatment as Q445; likely has overlapping but not identical
   coverage, which is exactly the kind of second independent source
   that can promote existing `practice-test-informed` SIU-2019-derived
   questions to `multi-source-supported` where they agree.
3. **SeaSources Lifeboatman question bank — practice support only.**
   Intake as Tier 3, treated the same way the SIU 2019 source was:
   useful for phrasing/vocabulary and as a second Tier 3 leg for
   multi-source agreement, never sufficient alone to exceed
   `practice-test-informed`.

Q445/Q447 should be intaken before SeaSources — they're official
references and can immediately promote existing draft content, whereas
SeaSources only strengthens multi-source agreement once at least one
official source is already in the pipeline.

## What this strategy does not do

- It does not modify `course.json` or any live question.
- It does not change app behavior — `sourceConfidence` is a planned
  future field, not implemented in this pass.
- It does not lower what `course-verified` means.
- It is not itself an intake — it's the standard the next intake passes
  (Q445, Q447, SeaSources) should follow.
