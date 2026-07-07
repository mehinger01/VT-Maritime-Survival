# /content/vinci/2026-07-07/

Curated source images for questions received from Vinci on 2026-07-07 —
lifeboat markings, safety symbols, rescue features, inspection/capacity
plates, and similar reference photos that a question's `image` field points
to (e.g. `/content/vinci/2026-07-07/example.jpg`).

These are curated learning assets Vinci supplies for specific questions, not
raw upload material — the app does not run OCR or any processing on them.

`example-lifeboat-capacity-plate.svg` in this folder is a placeholder used
only by the inactive sample question in
`src/content/imports/sample-visual-question.json`. Replace it (and update
that question's `image` path) with a real photo before ever promoting that
question into `src/content/course.json`.

New batches of images should get their own dated subfolder under
`/content/vinci/`, matching the date the source material was received.

## The real 2026-07-07 batch

This folder also holds the real photo batch from Vinci's `7-7-26` Drive
folder — 21 photographed pages of the SHLSOS Course No. 549 Student Manual
(© 2021 The Seafarers Harry Lundeberg School of Seamanship). Their intake
record, including which pages look like good quiz/learning candidates and
why, lives in `src/content/imports/vinci-2026-07-07-image-manifest.json` —
check that file before picking an image for a new question.

A few things worth stating plainly here, since this is the folder where
future batches will land too:

- **Raw photos can be stored as app assets.** This folder — everything
  under `/public/content/` — is where curated source photos live once
  they're ready to be referenced by the app. That's different from
  handing off phone photos as attachments; once a photo is in this
  folder it's a versioned project asset like any other.
- **Only selected photos should be referenced by live questions.**
  Landing a photo in this folder does not put it in front of a student.
  A photo only becomes visible in the app when a specific question in
  `src/content/course.json` sets its `image` field to that photo's
  `publicPath` — see the manifest's `purpose` note.
- **Image questions should use the existing optional `image` and
  `imageAlt` fields** on the question schema (see
  `src/components/QuestionCard.jsx`) — don't invent a new field or a
  separate image-question type.
- **`source-only` images are for traceability, not for the student.**
  Most images in a batch will never become a question — they're kept so
  there's a record of what was received and reviewed. `source-only` is
  the default status for exactly that reason; only promote an image to
  `candidate-learning-visual` or `candidate-quiz-visual` (and eventually
  into an actual question) when there's a clear, specific reason to.

**Repo/publishing note:** this repository is currently private. Photos of
a commercially published, copyrighted manual should not be committed to a
public repo or deployed to a publicly reachable site without separately
confirming reproduction rights with the publisher — being marked
`source-only` only controls what the app UI shows, not who can reach the
raw file over the network.
