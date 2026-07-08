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

## The live-question status model (study-app scope, 2026-07-08)

The source tiers above govern *intake* — how much a piece of source
material can be trusted before it feeds a question. Separately, every
question object (in `course.json` or a draft pack) carries its own
`verificationStatus` field, which governs what a *student* sees on
that question's card once it's live. These two systems are related
(a question's status is usually downstream of its source tier) but
they answer different questions: intake tiers are about the source,
`verificationStatus` is about the question.

This model changed on 2026-07-08 when the app's scope expanded from a
strict exam-simulation tool to a broader study tool for Vinci to use
while retaking the course. The old model was effectively binary
(`course-verified` or `draft-unverified`, with a few source-labeled
statuses in between that weren't part of any enforced app behavior).
The new model has six statuses, all enforced by the app itself
(`src/App.jsx`) and `scripts/validate-questions.mjs`:

| `verificationStatus` | Meaning | Shown in normal Quiz/Drill? | Student-facing badge |
|---|---|---|---|
| `course-verified` | Supported by the manual or already-accepted verified course material. | Yes | *(none — this is the trusted default)* |
| `source-backed-study` | Supported by uploaded book/class material, but not necessarily cross-verified. | Yes | "Source-backed study" |
| `quiz-derived-study` | Derived from Vinci's review quizzes or handwritten class quiz material. | Yes | "Quiz-derived study" |
| `visual-study` | Image/diagram-based practice intended for recognition and learning. | Yes | "Visual study" |
| `needs-review` | Retained, but held out of normal practice until a student turns on the "Show needs-review questions" toggle (Course Home). | No, unless review mode is on | "Needs review" |
| `draft-unverified` | Not live at all, regardless of any toggle. | No, ever | *(not applicable — never rendered)* |

A question with **no `verificationStatus` field at all** is treated as
implicitly trusted (same as `course-verified`) — this covers original
content that predates this tracking system entirely; it is not
retroactively required.

Three older statuses (`practice-test-informed`, `multi-source-supported`,
`official-source-supported`) predate this model and remain supported —
they behave like any non-`course-verified`, non-`needs-review`,
non-`draft-unverified` status (visible in normal practice, with their
own badge). New content should use the six statuses above; the three
legacy ones exist only so already-live questions don't need relabeling
just because this doc changed.

**2026-07-08 correction:** the 21 questions sourced from the SIU 2019
practice-test intake (Tier 3) had been live in `course.json` carrying
`draft-unverified` status since before this model existed — under the
old informal convention that was just "this question came from an
unverified source," not "this question isn't live." Under the new
model `draft-unverified` strictly means not-live, so those 21 were
relabeled to `practice-test-informed` (which already existed for
exactly this case, and matches their `sourceReference` field verbatim:
"SIU 2019 Practice Test intake, unverified"). This was a metadata
correction to already-live questions, not a new promotion — see
`src/content/course.json`'s `contentNote` (v4) for the same note in
context.

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
