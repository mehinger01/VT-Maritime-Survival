# /content/vinci/2026-07-08-quiz-review-1/

Source images for the batch pulled from Vinci's Google Drive archive folder
`Vinci / _Archive / Received through 2026-07-08 - Not all processed / Not
yet processed / Quiz` on 2026-07-08.

Unlike the `2026-07-07/` batch (photographed pages straight from the SHLSOS
Course No. 549 Student Manual), this batch is photos of a **completed,
handwritten student review quiz** — "Review Quiz #1" (Water Survival,
SHLSOS Course #549, 4 pages, questions 1–20) — plus one liferaft
parts-labeling worksheet with a handwritten answer key already filled in.
All five original filenames share the capture-date prefix
`2026-07-07_063330`, but the batch is named for when it was pulled from the
archive for processing (2026-07-08), not the capture date, to avoid
colliding with the existing `2026-07-07/` folder.

Their intake record — full transcription, extracted facts, and confidence
notes for each page — lives in
`src/content/imports/vinci-2026-07-08-quiz-review-1-source-intake.json`.
The image manifest (traceability record only, not a promotion) is
`src/content/imports/vinci-2026-07-08-quiz-review-1-image-manifest.json`.

A few things worth repeating from the `2026-07-07/` batch's README, since
they apply here too:

- **Landing a photo in this folder does not put it in front of a
  student.** A photo only becomes visible in the app when a specific
  question in `src/content/course.json` sets its `image` field to that
  photo's `publicPath`.
- **`source-only` is the default status.** Four of these five images are
  marked `source-only` in the manifest — the *text* extracted from them is
  the useful part, not the raw photo of a handwritten worksheet page. Only
  the liferaft parts diagram (`2026-07-07_063330-1.jpg`) is marked
  `candidate-quiz-visual`, and even that photo has pencil doodles overlaid
  that would need cropping out before it's shown to a student.
- **Nothing here is verified.** Every intake item's `verificationStatus` is
  `unverified`. A few specific details are flagged `needsFollowUp: true` in
  the source intake (a blank, unnumbered item on the liferaft diagram; a
  possible mismatch between the diagram's "PRV" label and the handwritten
  "Pressure pellet valve" answer) — read the notes before treating those as
  fact.

**Repo/publishing note:** this repository is private. These are photos of a
student's own quiz work reproducing a copyrighted course document (SHLSOS
Course No. 549 materials, © 2024 The Seafarers Harry Lundeberg School of
Seamanship) — the same reproduction-rights caution from the `2026-07-07/`
batch applies here.
