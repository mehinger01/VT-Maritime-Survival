# Chapter 6 Study Guide — Reconciliation Report (2026-07-20)

**Status: reconciliation performed during initial authoring, not as a
separate correction pass — every claim in
`src/content/studyGuides/chapter-6-being-rescued.json` was written
directly from the approved source set below, rather than drafted first
and checked after. This report documents what that source set was,
what was included, what was deliberately excluded, and what remains
open.**

## Approved source set (per task instructions)

1. The Chapter 6 manual extraction, pages 134–141
   (`vinci-2026-07-18-chapter-6-source-intake.md`).
2. The 40 newly promoted manual-backed questions (all
   `verificationStatus: source-backed-study`, `chapter-6-being-rescued`).
3. The 5 existing questions upgraded by this manual excerpt
   (`q-rescue-2`, `q-rescue-4`, `q-rescue-9` → `source-backed-study`;
   `q-rescue-7`, `q-ch6-rescuesling-official-hard` →
   `multi-source-supported`).
4. The completed Chapter 6 Learn Mode content (5 key points, already
   live in `course.json` as of commit `7627c92`).

## Explicitly excluded from factual support

- **The 10 existing Chapter 6 questions outside pages 134–141's
  scope** (`q-rescue-1`, `q-rescue-3`, `q-rescue-5`, `q-rescue-6`,
  `q-rescue-8`, `q-rescue-10`, `q-rescue-11`, `q-rescue-12`,
  `q-quiz1a-fastrescueboat-approach`,
  `q-quiz6-williamsonturn-manoverboard`) were not used as the basis for
  any claim in the guide. Section 1 ("Rescue Priorities and Rescue-Crew
  Instructions") acknowledges that a broader "follow the rescue crew"
  principle is tested live across several of these questions, but tags
  that acknowledgment `needs-review` rather than presenting it as a
  manual-confirmed fact — consistent with the promotion review's
  classification of these questions as either "correct but not
  directly supported by these pages" or "unsupported by these pages."
- **`q-ch6man-fpd-purpose` and `q-ch6man-fpd-mechanism`** are not cited
  anywhere in the guide, and are not named in any `sourceReferences`
  entry. Section 12 ("Release-Gear Safety") teaches the Fall Preventer
  Device fact itself — which is directly and clearly stated on manual
  page 140 — but sources it to the manual page directly, exactly the
  way the already-published Learn Mode content does, not to the two
  withheld question-bank candidates. The section's explanation
  paragraph spells this distinction out explicitly for anyone reading
  the guide's source code later.

## Claims checked, and their outcome

Every factual claim in the guide's 15 sections traces to one of:

- A specific, directly-quoted or closely-paraphrased passage in
  `vinci-2026-07-18-chapter-6-source-intake.md` (the large majority),
  tagged `source-backed-study`.
- The already-live, manual-confirmed `q-ch6-rescuesling-official-hard`
  fact (avoid the sling for a hypothermic patient), tagged
  `multi-source-supported` in Section 4, since it's independently
  confirmed by both the NMC Q445 exam and this manual excerpt.
- One explicitly-flagged `needs-review` acknowledgment (Section 1) of
  a broader live-tested principle not itself confirmed by these pages.

No claim required inventing, estimating, or inferring a fact beyond
what the approved source set actually states. No numeric figure,
procedure step, or safety warning in the guide differs from its source
— this is a first-draft guide built correctly from verified material,
not a correction of an earlier draft, so there is no "corrections"
table to report (contrast with the Chapter 5 study guide, which
reconciled a previously-drafted USCG/IMO-sourced document against the
manual and found several numeric conflicts to correct).

## Conflicts found

**None.** Nothing in the approved source set conflicted with anything
else in it. The manual extraction, the 40 promoted questions, the 5
upgraded questions, and the Learn Mode content are all mutually
consistent, since the promoted questions and Learn Mode content were
themselves built from the same source-intake document in the prior
task.

## Omissions (deliberate)

- The 10 out-of-scope existing questions' specific facts (rescue
  swimmer behavior, heaving-line technique, fast-rescue-boat approach,
  the Williamson Turn) are not covered anywhere in this guide, since
  none of them are supported by pages 134–141. A future Study Guide
  task could cover them once/if a broader source (a different manual
  chapter, or independent official-source confirmation) becomes
  available.
- The HH-3F helicopter equipment trivia from the source intake's
  Rescue Basket page (twin-turbine, 1,500 hp × 2, 157 mph, 700-mile
  range) was intentionally left out of the guide — it's caption-level
  equipment trivia rather than tested procedural content, and the
  airframe itself is understood to be out of current USCG service (see
  the source intake's own OCR-uncertainty notes).
- Nothing from the two withheld FPD question candidates' choice text
  or explanations was reused verbatim — Section 12's wording was
  written independently from the manual page itself.

## Unresolved issues

1. **The FPD-vs-preventer-bars question-bank duplicate question is
   still open.** This guide teaches the FPD fact confidently (it's
   manual-confirmed), but the two related draft questions remain held
   in `vinci-2026-07-18-chapter-6-draft-question-pack.json` pending a
   human check that "Fall Preventer Device" and "preventer bars" are
   genuinely distinct devices in Vinci's manual. This is a
   question-bank concern, not a Study Guide concern — nothing in the
   guide depends on that check's outcome.
2. **The broader "follow the rescue crew" principle** (tested by 8
   existing live questions) remains without direct manual-page
   confirmation from this excerpt. If a later manual chapter or page
   range confirms it, Section 1's `needs-review` tag should be
   revisited.
3. No safety-critical fact in this guide is unresolved or contested —
   items 1 and 2 above are both question-bank/scope bookkeeping, not
   open safety questions.

## Outcome

All 15 sections are built entirely from manual-confirmed or
multi-source-confirmed material, with the one narrow exception (the
general crew-deference principle) explicitly and visibly tagged
`needs-review` rather than presented as settled. No safety-critical or
factual conflict remains unresolved — the guide is a candidate for
publication pending the browser verification and final review steps in
this task.
