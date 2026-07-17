# Chapter 5 Loose-Ends Report — Targeted Source-Image Confirmation (2026-07-17)

**Status: confirmation-only. No question was created, edited, or
promoted. No `course.json` change was made. This report documents what
was directly re-checked against the original scanned source images for
manual pages 121, 123, and 129 — the three remaining Chapter 5 items
left open after the question-promotion and Learn Mode cleanup sessions.**

This was a narrow re-check of three specific pages, not a Chapter 5
re-ingestion. No new source material outside these three pages was read,
and no OCR tooling was rerun — each page was re-opened from the original
`Ch 5` Drive folder and read directly as an image.

---

## 1. EPIRB hydrostatic-release submersion depth (manual page 121)

**Confirmed: 3–10 feet.**

The source sentence reads: "...with a hydrostatic release unit (HRU)
that will release the unit when submerged 3-10 feet." This line sits in
a paragraph whose left margin is affected by scan shadow (the same
condition that produced the original OCR gap), but the specific clause
containing the figure is fully legible in the image itself, outside the
shadowed margin. No ambiguity remains on this figure.

## 2. SART transponder-mode battery duration (manual page 123)

**Remains unresolved.**

The source sentence reads: "The battery for the SART must operate for
96 hours in standby mode followed [[number]] hours in transponder
mode." The missing number sits exactly on the line nearest the book's
spine, where the physical page curvature produces real motion-blur-style
distortion in the scan itself — not a lighting or exposure problem.
Multiple crops, contrast boosts, and sharpening passes were tried on
this specific region; the digits remain genuinely unrecoverable from
this scan. Per instruction, this figure is not guessed and stays
unresolved. Resolving it would require either a rescan of page 123 with
the book pressed fully flat at the spine, or a different/cleaner copy of
the manual.

## 3. Shore lifesaving apparatus signals (manual page 129)

**Confirmed — matches the held-back question exactly, no revision
needed.**

Page 129's "Signals to be Employed in Connection with the Use of Shore
Lifesaving Apparatus" table is fully legible in the source image (the
table's cell text and headers are outside the page's shadowed margin).
Confirmed content:

- Vertical motion of a white flag/arms/light/flare, or firing a **green
  star** signal → "In general: affirmative. Specifically: rocket line is
  held — tail block is made fast — hawser is made fast — man is in the
  breeches buoy — haul away."
- Horizontal motion of a white flag/arms/light/flare, or firing a **red
  star** signal → "In general: negative. Specifically: slack away -
  avast hauling."

This matches `q-ch5man-shore-apparatus-signals`'s prompt, correct
answer, and explanation exactly, with no discrepancy.

**Recommendation: promote as-is later.** No revision is needed — the
question was drafted correctly the first time. This report resolves the
page-129 OCR-quality concern that caused it to be held back; promotion
itself is left for a separate, explicitly-requested promotion task per
this task's constraints.

(Also incidentally re-confirmed while reading this page: the "You are
seen — assistance will be given as soon as possible" reply signal —
orange smoke signal, OR 3 combined light-and-sound signals about 1
minute apart, OR 3 white star rockets about 1 minute apart — matches
what's already live in the Chapter 5 Learn Mode "Signals to Communicate
From Shore & the Table of Lifesaving Signals" section exactly.)

---

## Recommended future updates (not performed in this task)

- **Question bank:** `q-ch5man-shore-apparatus-signals` is now a clean
  candidate for promotion in a separate, explicitly-requested promotion
  task — no revision needed first.
- **Learn Mode:** the EPIRB section's key facts could be updated to
  state the "3–10 feet" hydrostatic-release depth as a confirmed figure
  rather than omitting it, in a future explicitly-requested Learn Mode
  task.
- **SART transponder-mode duration:** no action recommended until a
  cleaner source scan of page 123 becomes available. Do not add this
  figure to any question or Learn Mode content by inference or estimate.

## Source

Water Survival Student Manual, SHLSOS Course No. 549, Chapter 5, pages
121, 123, and 129, re-read directly from the original `Ch 5` Drive
folder (folder ID `1wwjfg17qscBUsK3hUXYxP51jRqNEnBj7`) referenced in
`vinci-2026-07-14-chapter-5-source-intake.md`. This report supersedes
that document's OCR-uncertainty notes for pages 121 and 129 only; the
page 123 transponder-mode duration note in that document remains
accurate and unresolved.
