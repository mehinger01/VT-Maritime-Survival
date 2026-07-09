# /content/vinci/2026-07-08-sea-trials/

Source PDFs for the batch received from Vinci's Google Drive folder
`Vinci / _Archive / Received through 2026-07-08 - Not all processed / Not yet
processed / Sea trials` (folder ID `1a90_BrJwALbXWvbpvQDGWzKkn7CG8iUE`) on
2026-07-08.

**The folder name is misleading.** None of the 9 files are sea-trial reports,
test logs, or vessel inspection records. All 9 are Code of Federal
Regulations reference volumes (Title 46 Shipping, Title 33 Navigation and
Navigable Waters, Title 49 Transportation), revised as of 2013:

- `Document.PDF.pdf` — 46 CFR Parts 70–89 (Subchapter H, Passenger Vessels)
- `Document(1).PDF.pdf` — 33 CFR Parts 1–124 (incl. Part 84 / Annex IV Distress Signals — promising, not fully extracted yet)
- `Document(2).PDF.pdf` — **blank, 0 bytes**
- `Document(3).PDF.pdf` — 46 CFR Parts 90–139 (Subchapters I, I-A, J, K, L)
- `Document(4).PDF.pdf` — 33 CFR Parts 125–199 (Subchapters L, M, N, NN, O, P, S)
- `Document(5).PDF.pdf` — 49 CFR Parts 1–99 (DOT organizational/administrative)
- `Document(6).PDF.pdf` — 46 CFR Parts 159–165 (**Subchapter Q — Lifesaving Equipment specs**)
- `Document(7).PDF.pdf` — 46 CFR Parts 166–169+ (**Subchapter R — Sailing School Vessels, incl. the full lifeboat equipment table**)
- `Document(8).PDF.pdf` — 46 CFR Parts 140–155 (Subchapters N, O, P — dangerous cargo, unrelated)

Full per-file findings — CFR part, relevance, extraction confidence, and
whether each one verifies or contradicts existing course content — live in
`src/content/imports/vinci-2026-07-08-sea-trials-file-manifest.json` and
`src/content/imports/vinci-2026-07-08-sea-trials-source-intake.json`.

## What's actually useful here

Only `Document(6).PDF.pdf` and `Document(7).PDF.pdf` have confirmed
exam-relevant content:

- **`Document(7).PDF.pdf`** directly verifies the held-back
  `q-quiz1a-bow-stern-hatchet` question from the Quiz 1a draft pack: 46 CFR
  169.529(k) states a lifeboat hatchet must be "readily available for use,
  one at each end of the lifeboat" — matching that question's marked answer.
- **`Document(6).PDF.pdf`** verifies two facts behind the already-promoted
  `q-quiz1a-typeI-pfd-false` (22-lb minimum buoyancy; face-clear-of-water
  design requirement).

Everything else in the batch is either construction/arrangement material
(useful only as instructor evidence, not exam content), administratively
unrelated (Title 49, most of Title 33), or the one blank file.

Both large, relevant PDFs were only partially extracted — the plain-text
extraction tool truncates on very large files, and each cut off partway
through (Document(6) mid-way through Part 160's subparts; Document(7)
before reaching Part 169's Operations subpart and before Part 199,
Subchapter W — Lifesaving Appliances and Arrangements, which likely has the
capacity/motor-propulsion threshold tables already referenced in live
content). See each file's `needsFollowUp: true` note in the source intake
for what a targeted re-extraction should target next.

**Nothing in this batch has been promoted, and no draft questions were
created from it** — this was an intake-and-extraction-only pass, per
instruction, so course.json is untouched.

**Repo/publishing note:** this repository is private. These 8 PDFs are
official U.S. Government works (Code of Federal Regulations, published by
the Office of the Federal Register / NARA) and are in the public domain —
unlike the photographed course-material batches elsewhere in this folder,
reproduction here isn't a concern.
