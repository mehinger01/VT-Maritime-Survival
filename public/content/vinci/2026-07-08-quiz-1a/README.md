# /content/vinci/2026-07-08-quiz-1a/

Source images for the batch received from Vinci's Google Drive folder
`Vinci / Quiz 1a` (folder ID `1s_u-Nm0rz51XfQwebWG_azV5I5s312De`) on
2026-07-08.

This is a **typed, printed 39-question multiple-choice final review quiz**
— "LIFEBOATMAN & WATER SURVIVAL, FINAL REVIEW QUIZ #1" — with the correct
answer hand-circled in pencil for each question, plus one page of two
labeled technical line-drawing diagrams (a lifeboat cross-section, "D011SA",
and a liferaft, "D015SA") that three of the quiz questions reference by
number.

This is a different kind of source than either prior Vinci batch:
- `2026-07-07/` — photographed manual pages (no questions, just source text).
- `2026-07-08-quiz-review-1/` — a *handwritten*, fill-in-the-blank student
  quiz with no answer choices.
- `2026-07-08-quiz-1a/` (this folder) — a *typed*, real multiple-choice quiz
  with A/B/C/D choices and a marked correct answer for each question. This
  is the richest source yet for directly-portable draft questions, since
  the choice text and (mostly) the correct answer are already given rather
  than needing to be constructed.

Their full transcription — including which answers were unambiguous and
which pencil marks were genuinely hard to read — lives in
`src/content/imports/vinci-2026-07-08-quiz-1a-source-intake.json`. The image
manifest (traceability record only, not a promotion) is
`src/content/imports/vinci-2026-07-08-quiz-1a-image-manifest.json`.

A few things worth repeating from the other batches' READMEs:

- **Landing a photo in this folder does not put it in front of a
  student.** A photo only becomes visible in the app when a specific
  question in `src/content/course.json` sets its `image` field to that
  photo's `publicPath`.
- **`source-only` is the default status** for the seven question-page
  photos — the *extracted text* is the useful part, not the raw photo of a
  printed quiz page. The diagram sheet (`2026-07-08_044219-8.jpg`) is
  marked `candidate-quiz-visual` since it's a clean, non-doodled technical
  drawing directly referenced by three quiz questions.
- **Nothing here is verified.** Every intake item's `verificationStatus` is
  `unverified`. Two specific things are flagged `needsFollowUp: true` and
  should not be treated as fact without a second look: question 11's
  correct answer (two overlapping pencil circles, genuinely ambiguous —
  see the source intake notes) and a naming mismatch where questions 30,
  32, and 34 all refer to "diagram D014SA" but the actual diagram sheet
  is printed "D015SA" — the two are almost certainly the same diagram
  (its content matches: pressure relief valve, heaving line, righting
  strap, all liferaft features), but the label mismatch itself is
  unresolved.

**Repo/publishing note:** this repository is private. Like the other
batches, this is a photographed copy of Vinci's own course-review material,
not confirmed original-publisher content — treat with the same reproduction
caution noted in the other batch READMEs.
