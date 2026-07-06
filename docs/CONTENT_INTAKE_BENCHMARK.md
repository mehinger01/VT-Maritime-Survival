# Content Intake Benchmark

This document defines how any piece of source material gets evaluated
before it can influence the Maritime Survival Study Tool's question
bank (`src/content/course.json`). It exists because we now have more
than one kind of source feeding the intake pipeline — Vinci's actual
manual, third-party practice tests, general training material — and
they are not equally trustworthy. Treating them the same would quietly
degrade exam-prep quality.

## The rule

> **No question becomes verified unless it can be traced to Vinci's
> actual materials or an official source.**

"Traced to" means a specific page, slide, or section can be pointed to
— not "this seems consistent with what a maritime course would teach."
Plausibility is not verification. A question can be *drafted* from a
lower-tier source, but it cannot be *marked verified* on that basis
alone.

## Source quality tiers

### Tier 1 — Vinci's actual manual, notes, and slides
The *Water Survival Student Manual* (SHLSOS Course No. 549, revised
June 2024), plus any class notes or PowerPoint slides Vinci provides
directly. This is the only tier that can fully verify a question,
because it's the actual material the exam is based on and the actual
material the student is being taught from.

- **Use for:** verified questions, verified explanations, chapter/topic
  structure (already applied — see the current 7-chapter topic map).
- **Current status:** we have the manual's table of contents only, not
  its chapter text. No question in the app has been verified against
  actual Tier 1 content yet.
- **2026-07-06 update:** received "Import Pack 001," claiming to be a
  100%-confidence Tier 1 summary of pages 9–11 (`src/content/imports/import-pack-001.json`).
  It is a *concept/vocabulary summary*, not the manual's own text, and it
  cites a **2021 edition** against the "revised June 2024" edition
  confirmed elsewhere in this repo — by this doc's own rule that would
  normally keep it at Tier-3-equivalent (informative, not verifying).
  19 new draft questions were written from the genuinely-new concepts/
  vocabulary it introduced (see `src/content/concepts/chapter1.json`,
  `src/content/vocabulary/glossary.json`, and
  `src/content/sources/SHLSOS-2021-CH1-P009-P011.md`). Concepts that
  duplicated existing chapter-1 questions were not re-written.
- **2026-07-06, same day — promoted to verified:** the course operator
  explicitly confirmed this pack's content as verified, overriding the
  above caveat. All Import Pack 001 concepts, vocabulary, and questions
  are now marked `course-verified`. The edition question was not
  separately re-confirmed as part of that override and is left here for
  the record in case it matters later.

### Tier 2 — Official USCG / NMC exam materials
Published U.S. Coast Guard or National Maritime Center reference
material, official exam question banks, or regulatory text (e.g., CFR
sections) that the course is built to satisfy.

- **Use for:** verifying regulatory facts (equipment requirements,
  required drills, certification rules) even before Tier 1 content is
  available, since these are authoritative and stable across course
  providers. Can support "verified" status *if* Vinci confirms his
  course is teaching to the same standard.
- **Current status:** none yet incorporated.

### Tier 3 — Practice-test / Quizlet material
Third-party practice tests, flashcard sets, and study-group question
banks assembled by other students or tutors preparing for the same or
a similar exam. Useful for spotting exam-style phrasing, likely
question patterns, and vocabulary — but authored by unknown people with
unknown accuracy, and never confirmed against Vinci's specific course.

- **Use for:** intake only. Good for identifying *what kind* of
  question the real exam asks and *which terms* matter, not for
  supplying facts to trust outright.
- **Current status:** `src/content/sources/siu-2019-practice-test.json`
  — the "Practice Test Water Survival #1 SIU 2019" Quizlet export is
  the first Tier 3 source in the pipeline. Pilot batch of 25 items
  processed; 66 remain.

### Tier 4 — General training-provider / course-description material
Marketing pages, course syllabi, or generic maritime-training
descriptions from providers unrelated to Vinci's specific course.
Useful only for the broadest orientation (e.g., "what topics does a
water survival course typically cover") — not for specific facts,
numbers, or procedures.

- **Use for:** sanity-checking that the topic structure is in the right
  neighborhood. Never for question content.
- **Current status:** none incorporated.

## What each tier can and cannot do

| Tier | Can suggest topic structure | Can suggest question phrasing/style | Can supply a fact used in a *draft* question | Can mark a question **verified** |
|---|---|---|---|---|
| 1 — Vinci's manual/notes/slides | Yes | Yes | Yes | **Yes** |
| 2 — Official USCG/NMC material | Yes | Yes | Yes | Yes, if confirmed to match Vinci's course standard |
| 3 — Practice test/Quizlet | Weak signal only | Yes | Yes, as unverified draft only | No |
| 4 — General training-provider material | Weak signal only | No | No | No |

## Intake file conventions

Any source ingested under this benchmark should land in
`src/content/sources/<source-name>.json`, separate from the live
question bank, with at minimum:

- `sourceLabel`, `sourceType`, `verificationStatus` ("unverified" until
  promoted), `relationshipToCourse`, `intakeDate` at the top level.
- Per item: original text, a cleaned version, a best-guess chapter/
  subtopic mapping, a confidence rating, a suggested use, whether it's
  a viable candidate for the app, and any ambiguity worth flagging.

Promotion into `course.json` is a separate, deliberate step — never
implied by an item merely existing in an intake file.
