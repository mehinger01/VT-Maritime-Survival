# Chapter 4 New Source Material — Inventory (2026-07-13)

**Status: inventory only. No content was extracted in full, no questions
were drafted, and `course.json` was not touched in this task.**

## Where it is

- Drive folder: `Vinci / ch 4` (folder ID `1xvJAfOJuvS6rxnknqan2Llt8k_Nus3iT`),
  a direct child of the `Vinci` root folder — a new top-level folder, not
  nested under `_Archive`.
- Created 2026-07-13T19:33 (today), photos themselves timestamped
  2026-07-13T18:46 — this is unambiguously new, not something already
  processed. No prior batch in `src/content/imports/` or
  `public/content/vinci/` references a `ch-4`, `ch4`, or `021788` batch
  ID.
- **29 JPG files**, named `2026-07-13_021788-1.jpg` through
  `2026-07-13_021788-30.jpg`, with **`-29.jpg` missing** from the
  sequence (28 numbered neighbors present, one gap — worth flagging to
  Vinci in case a page was skipped during photographing).
- Total size: ~24.4 MB (individual files range from ~276 KB to ~1.5 MB,
  consistent with full-page phone-camera photos, not thumbnails or
  low-res scans).

## What it actually is

This is **genuine Tier-1 source material** — actual pages from the
*Water Survival Student Manual*, SHLSOS Course No. 549, not a quiz, not
instructor notes, not a worksheet. Confirmed by reading four
representative samples spread across the batch (not the whole batch, per
this task's scope):

| File | Manual page | Visible section content |
|---|---:|---|
| `-1.jpg` | Page 89 of 154 | "Chapter 4 UNDERSTANDING SURVIVAL METH[ODS]" header, "Understanding Coast Guard Searches" (AMVER, sea anchor drift, search patterns) |
| `-10.jpg` | Page 99 of 154 | End of a "Marine Life" section (sharks, jellyfish, coral) and start of "Man Overboard" |
| `-20.jpg` | Page 109 of 154 | "Organizing for Survival" (watch schedules, gathering wreckage) and "Survival on the Sea" (sea anchors, broaching, righting a capsized boat) |
| `-30.jpg` | Page 119 of 154 | End of a food/water section ("...ing Food and Water" — finding fresh water ashore, boiling, foraging) |

Each page carries a visible copyright line: **"© 2020 The Seafarers
Harry Lundeberg School of Seamanship, Piney Point, MD 20674."** This is
a **2020-dated edition**, not the "revised June 2024" edition referenced
elsewhere in this repo's `contentNote` and `docs/CONTENT_INTAKE_
BENCHMARK.md`. This is the same kind of edition-year question already on
record from the Import Pack 001 intake (2021 vs. "revised June 2024") —
flagging it here rather than assuming it's the same manual, since it
should be confirmed with Vinci before this content is treated as
authoritative for a specific edition claim.

Based on the four sampled pages, the batch's page range (89–119, 31
manual pages, 29 photographed) covers section headings that map cleanly
onto several of Chapter 4's existing Learn Mode placeholders almost
verbatim: "Understanding Coast Guard Searches," "Man Overboard,"
"Organizing for Survival," "Survival on the Sea," and food/water-related
content ("Drinking Water" / "Food"). The other sampled sections (Marine
Life, sea-anchor/broaching mechanics) aren't currently in the placeholder
list at all — this manual has more granularity than the placeholder
headings currently reflect, which is worth knowing before writing
Learn Mode content, since a couple of placeholder titles may need to
become two blocks, or a new one may need to be added.

## Per-file characterization

Given all 29 files are one continuous manual excerpt from a single
photographing session (same batch ID `021788`, same day, sequential page
numbers), a page-by-page table would be repetitive. Instead:

| Property | Assessment |
|---|---|
| File type | JPG photographs of printed manual pages |
| Material type | **Manual/book pages** (not quiz/review material, not instructor notes, not a worksheet, not diagrams-only) |
| Readable | Yes — all four sampled pages produced clean, complete OCR text with no illegible passages |
| Page/image count | 29 images; manual page numbers run 89–119 (31 pages), with page 88's-position photo (`-29.jpg`, likely page ~118) missing from the batch |
| Visible header/title | "SHLSOS Course No. 549, Student Manual" on every sampled page; "Chapter 4 UNDERSTANDING SURVIVAL METH[ODS]" appears on the first page |
| Duplicate of existing material | **No** — nothing this specific (full manual prose, not question-and-answer format) exists anywhere else in `src/content/imports/` or `public/content/vinci/`. This is new information, not a re-upload. |

## Recommended processing order

Process this as **one intake batch**, not per-file, since it's a
continuous excerpt of the same chapter from the same source:

1. Download and read all 29 images in full (not done in this task).
2. Transcribe/summarize by manual section heading (Understanding Coast
   Guard Searches, Marine Life, Man Overboard, Organizing for Survival,
   Survival on the Sea, Food/Water, and whatever else appears between and
   after the sampled pages) rather than by individual photo, since
   sections span multiple photos and photos sometimes split mid-section.
3. Cross-reference each section against the existing Chapter 4 keyPoints
   placeholder list and the Chapters 4–6 material audit's cluster
   breakdown (`vinci-chapters-4-6-existing-material-audit.md`) to decide,
   per section: does this confirm/upgrade an existing `None`-tier
   question cluster, does it support writing a new Learn Mode module, or
   does it introduce genuinely new content with no existing question yet?
4. Flag the missing `-29.jpg` page gap and the 2020-vs-2024 edition
   question to Vinci rather than guessing across the gap or assuming
   edition equivalence.

## Recommended first file/folder to process

**The whole `ch 4` folder, starting from `-1.jpg` and reading in
page order.** Unlike the quiz batches (independent, one question per
photographed answer), this is continuous prose — reading it out of
order or as isolated files risks missing how sections connect (e.g.,
"Marine Life" runs across the `-9.jpg`/`-10.jpg` boundary in the samples
above). There isn't a natural "highest-value single file" to start with
the way there was for the Sea Trials CFR PDFs; the value here comes from
processing the chapter as a whole.

## What this material should be used for

| Use case | Recommended? | Why |
|---|---|---|
| **Source verification/upgrades** of existing Chapter 4 `None`-tier questions | **Yes — highest priority** | This is exactly the Tier-1 manual material the Chapters 4–6 audit flagged as missing. Chapter 4's biggest cluster (Cold-Water Immersion Physiology) and several others are currently 82–86% pre-Vinci placeholder content; this manual excerpt is the first real chance to confirm or correct those questions against the actual source, per `docs/CONTENT_INTAKE_BENCHMARK.md`'s Tier 1 rule. |
| **Learn Mode expansion** for Chapter 4 | **Yes, once extracted** | The sampled sections map directly onto existing blank placeholders ("Understanding Coast Guard Searches," "Man Overboard," "Organizing for Survival," "Survival on the Sea") and would let those go from 0% to real, manual-sourced content — the strongest kind of source this app can have per the verification model. |
| **Question creation** (new questions, not just verifying old ones) | **Yes, but only after extraction and only for content not already covered** | The manual includes topics with no live question at all yet (e.g., Marine Life/shark safety, sea-anchor broaching mechanics) — good new-question material once properly extracted, but not something to guess at from this inventory alone. |
| **Diagram/image support** | **Unclear from sampling** | None of the four sampled pages mentioned a diagram or figure, but 29 pages weren't all checked — some manual pages elsewhere in this range may include illustrations (e.g., life-buoy throwing, righting a capsized boat) worth a dedicated visual check during full extraction. |
| **Glossary/vocabulary support** | **Possible, secondary** | The prose introduces terms (AMVER, drogue, broaching) that could feed the Appendix A glossary, but this wasn't a primary focus of this material and shouldn't be assumed without a proper pass. |

## A note on a second, older unprocessed batch (out of scope here)

While locating the `ch 4` folder, a separate folder `BookMaterial1`
(created 2026-07-09, files dated 2026-07-08, batch ID `062721`) was also
found sitting unprocessed in the Vinci root. A one-page spot check
(`-2.jpg`) shows it's also genuine manual prose — page 37 of 154,
covering lifeboat oar/coxswain commands (Chapter 2 territory), and
carrying a **"© 2021"** copyright line, a third edition-year data point
alongside this batch's "2020" and the previously-recorded "2021"
(Import Pack 001) and "revised June 2024" references. This folder is
**not** Chapter 4 material and was not otherwise inventoried in this
task — noting its existence here so it isn't lost track of, but a
proper inventory of it (and a resolution of the recurring edition-year
question) would be a separate, explicitly-requested task.

## Confidence / limitations

- Only 4 of 29 images were read (pages 89, 99, 109, 119 — roughly evenly
  spaced across the batch) to confirm content type and page range,
  per this task's "do not fully extract all content yet" instruction.
  The characterization above (manual prose, Chapter 4, pages 89–119,
  2020 edition) is well-supported by those four samples but not
  independently confirmed for every one of the 29 files.
- The missing `-29.jpg` file means one manual page in this range (likely
  around page 118, based on the observed page-to-file-number pattern) is
  not yet in this Drive folder at all — this should be confirmed with
  Vinci, not assumed to be an intentional skip.
- File sizes and counts were read directly from Drive's file metadata,
  not estimated.
