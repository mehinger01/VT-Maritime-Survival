# Chapter 3 Source-Readiness and Question Audit (2026-07-20)

**Status: research and audit only. No question was created, edited, or
promoted; no Learn Mode content was written; no drill set or Study Guide
was created; `course.json` was not touched in this task.**

## Executive summary

**No Chapter 3 manual (Tier 1) source material exists anywhere in this
repository.** Every intake batch, image manifest, and prior audit was
checked (not just filenames — headings, page numbers, and content were
inspected directly). Chapter 3's 36 live questions all trace to Tier 2/3
secondary sources: three Vinci quiz batches, one Vinci quiz worksheet, a
federal regulation PDF, and an official sample exam. None trace to a
photograph of Vinci's actual Chapter 3 manual pages.

However, this task found something the earlier course-wide gap audit
(`vinci-2026-07-20-course-content-gap-audit.md`) did not have scope to
surface: **a large, already-downloaded, mostly-unextracted body of
directly relevant Tier 2 federal regulation text (46 CFR §160.151,
Inflatable Liferafts) sitting unused in this repo**, plus **a
23-item liferaft-parts worksheet diagram with a complete answer key**, of
which only about half the items have been drafted into live questions.
Both are immediately actionable without waiting on new material from
Vinci. This is the single biggest finding of this audit and is detailed
in Part 2.

## Part 1 — Correction to a prior finding (flagged, not silently fixed)

While tracing every Chapter 3-adjacent source batch, this audit found
that `vinci-2026-07-20-course-content-gap-audit.md`'s claim of **"zero
manual-page-sourced questions" for Chapter 2 is incorrect.** The
2026-07-07 intake batch (`vinci-2026-07-07-source-intake.json`) contains
23 photographed manual pages (pages 12-34), and 11 of the 12 questions
promoted from it in `vinci-2026-07-07-first-promotion-plan.md` are live
today as `course-verified`, `chapter-2-using-lifeboats` questions (e.g.
`q-vinci-five-lifeboat-types`, `q-vinci-capacity-lesser-of-vh`). The
earlier audit's search apparently missed these because their
`sourceReference` text doesn't contain the literal phrase "manual page"
— it cites the source batch and image filename instead. This is flagged
here rather than corrected there, per this project's standing practice
of surfacing discrepancies rather than silently editing past audits. It
does not change this task's conclusions about Chapter 3, but it does
sharpen the picture of what surrounds it: **the 2026-07-07 batch runs
pages 12-34 and stops mid-Chapter-2** ("Hand Propelled Systems / Oar
Propelled Lifeboats"), and the Chapter 4 manual batch begins at page 89.
That leaves **pages 35-88 (54 pages) — covering the rest of Chapter 2 and
all of Chapter 3 — as a confirmed, unfilled gap** with no photographed
manual content anywhere in this repo.

## Part 2 — Chapter 3 source search results

### Every batch searched

| Batch | What it is | Chapter 3 content? |
|---|---|---|
| `import-pack-001.json` | Manual photos, pages 9-11 | No — Chapter 1 only |
| `vinci-2026-07-07-source-intake.json` | Manual photos, pages 12-34 | No — Chapter 1 (tail) + Chapter 2, stops at page 34 |
| `vinci-2026-07-08-quiz-1a-*` | Photographed typed quiz, "Final Review Quiz #1" (39 questions) + one diagram sheet (D011SA lifeboat, D015SA liferaft) | **Yes — 6 questions and 1 diagram, quiz material** |
| `vinci-2026-07-08-quiz-3-*` | Photographed quiz | Mixed-chapter page 1 references chapter-3, not independently followed up in this task (low density) |
| `vinci-2026-07-08-quiz-4-*` | Photographed quiz | Not checked in depth — no chapter-3 hits in the initial filename/content sweep |
| `vinci-2026-07-08-quiz-6-*` | Photographed "Review Quiz #6" | **Yes — 3 questions, quiz material** |
| `vinci-2026-07-08-quiz-review-1-*` | Photographed handwritten "Review Quiz #1" + one liferaft-parts-labeling **worksheet** with a 23-item answer key | **Yes — 6 questions + 1 rich worksheet diagram, quiz/worksheet material** |
| `vinci-2026-07-08-sea-trials-*` | 9 federal regulation PDFs, downloaded and stored locally under `public/content/vinci/2026-07-08-sea-trials/` | **Yes — Document(6).PDF.pdf contains 46 CFR §160.151 (Inflatable Liferafts) in full; only partially extracted so far (see Part 2a)** |
| `vinci-2026-07-13-chapter-4-manual-*` | Manual photos, pages 89-119 | No — Chapter 4 |
| `vinci-2026-07-14-chapter-5-*` | Manual photos, pages 120-132 | No — Chapter 5 |
| `vinci-2026-07-18-chapter-6-*` | Manual photos, pages 134-141 | No — Chapter 6 |
| `vinci-chapter-4-new-source-inventory.md` | Prior Drive-folder inventory | Reviewed — no Chapter 3 folder mentioned |
| `vinci-chapters-4-6-existing-material-audit.md`, `vinci-learn-mode-coverage-audit.md`, `vinci-filtered-question-recovery-inventory.md`, `vinci-held-question-remediation-report.md` | Prior audits | Reviewed for cross-references — none report finding Chapter 3 manual material |

**No filename, page-number footer, table-of-contents reference, section
heading, or caption anywhere in this repository identifies a photographed
page as "Chapter 3" or "Using Liferafts."** This was checked by content,
not filename: every `chapterGuess` field across every quiz intake JSON
was read, and each one that mentions `chapter-3-using-liferafts` was
traced back to its source image — every single one is a quiz question
page or worksheet, never a manual photo.

### Manual edition

Not identifiable for Chapter 3, since no manual page for this chapter
exists to check. For reference, the confirmed editions elsewhere in this
repo are inconsistent with each other (2021 for Import Pack 001's pages
9-11, undated for the 2026-07-07 batch's pages 12-34, 2020 for the
Chapter 4 manual batch, and 2024 for the Chapter 5/6 batches and the
quiz-review-1 worksheet's footer) — this edition question remains
unresolved course-wide, not just for Chapter 3.

### Page range, section headings, image/OCR quality, missing pages, duplicates

Not applicable — no manual pages exist to characterize. The **quiz and
worksheet material** that does exist was already individually assessed
for legibility in its own source intake documents at the time of intake
(2026-07-08): the quiz-1a batch is described as "cleanly hand-circled,
unambiguous"; the quiz-review-1 worksheet has "extensive pencil
scribbles/doodles" requiring cropping but a fully legible 23-item answer
key underneath. No duplicate scans were found across any of the three
quiz batches.

### Completeness verdict

**Not complete enough to cover the full chapter — because there is no
manual coverage at all**, not merely thin coverage. This holds regardless
of the existing question bank's size, per this task's explicit
instruction not to infer completeness from question count.

## Part 2a — The unused CFR material (the actionable finding)

`Document(6).PDF.pdf` (477 pages, already downloaded locally) contains
**46 CFR Subpart 160.151 — Inflatable Liferafts** in full, machine-readable
text (confirmed by direct extraction in this task, not estimated). The
existing `vinci-2026-07-08-sea-trials-source-intake.json` only extracted
6 of its ~24 lettered subsections into `§160.151-21` (heaving line,
bailer, sponge, sea anchor breaking-strength note, paddles, radar
reflector) — the extraction note itself says "Subparts 160.156, 160.170,
and the remainder of 160.171 were not reached," and this task's direct
read of the PDF confirms **§160.151-21 alone has 23 lettered subsections
(a) through (w)**, of which only 6 have been extracted, plus **§160.151-17
(painter system, inflation cylinders/systems, boarding ladders, canopy
lamps, containers)** and **§160.151-61 (maintenance instructions)** have
never been touched at all. Confirmed, exam-relevant, currently-unused
content includes:

- **Painter system** (§160.151-17(k)): must resist sunlight/salt-spray
  deterioration and water absorption.
- **Inflation trigger mechanism** (§160.151-17(l)(2)): the painter and
  inflation cylinders are linked so pulling the painter (≤150 N / 34 lb
  force) starts inflation — this directly confirms the already-live but
  currently unsourced `q-raft-3`'s claim about what triggers inflation.
- **Boarding ladders** (§160.151-17(n)): steps must provide a suitable
  foothold.
- **Canopy lamps, containers** (§160.151-17(o)-(p)): container must
  include a tamper-evident telltale seal-and-wire, and must be designed
  to break free of the container when inflation begins.
- **Full required-equipment list** (§160.151-21(a)-(w)): heaving line,
  jackknife, bailer, sponge, sea anchor, paddles, tin-opener, first-aid
  kit, whistle, rocket parachute flare, hand flare, buoyant smoke signal,
  electric torch, radar reflector, signaling mirror, lifesaving-signals
  card, fishing tackle, food rations, drinking water/desalting apparatus,
  drinking cup, anti-seasickness medicine, survival instructions
  (waterproof, English, suspended from a canopy arch tube), instructions
  for immediate action.
- **Maintenance/inspection** (§160.151-61): monthly external visual
  inspection checklist, periodic servicing by an approved facility, and a
  maintenance log — currently **zero live Chapter 3 content on
  maintenance at all**.
- **Stability appendages and boarding ramp** (§160.151-1): water-filled
  underside ballast-appendage volume/deployment specs, and a boarding
  ramp rated for a 100 kg (220 lb) occupant.

This is Tier 2 material (federal regulation, not Vinci's manual), so it
can support `source-backed-study`/`official-source-supported`-tier
promotion, the same tier already used by the 3 CFR-sourced Chapter 3
questions currently live. **No new upload from Vinci is required to act
on this finding** — the PDF is already in the repo.

## Part 2b — The unused worksheet diagram (the second actionable finding)

The quiz-review-1 batch's `2026-07-07_063330-1.jpg` is a 23-item
liferaft-parts worksheet ("IDENTIFY THE PARTS OF THE LIFERAFT") with a
**complete handwritten answer key** for numbers 1-23 (number 15 left
blank by the student). Only **12 of the 23 confirmed-named items** have
been drafted into live questions so far (across 6 compare-and-contrast
`visual-study` questions: internal lifeline #1 / recognition light #3 /
canopy #6 / water-activated battery #7 / external lifelines #12 /
ballast bags #13 / weak link #17 / sea anchor #18 / towing connection #19
/ towing bridle #20 / inflatable floor #22 / floating sheath knife #23).
**10 more confirmed-named items remain untapped**, several matching this
task's named special-attention areas directly: equipment bags (#2),
pressure relief valve (#4), heaving line (#5), rainwater catchment tube
assembly (#8), righting strap (#9), CO2 inflation system (#10), deflation
plug (#11), buoyancy tube (#14), **operating cord/sea painter (#16)**,
and **boarding ladder (#21)**. The same cropping workflow already used to
isolate the quiz-1a D015SA/D011SA diagrams from their shared page
(documented in that batch's promotion review) could be applied here.

## Part 3 — 36-question audit

### Classification (per the six required categories)

| Category | Count | IDs |
|---|---:|---|
| Confirmed by the manual | **0** | — no manual source exists |
| Confirmed by an approved secondary source | **5** | `q-cfr-liferaft-heavingline-attachment`, `q-cfr-liferaft-paddles-length`, `q-cfr-liferaft-radarreflector-optional` (CFR §160.151-21); `q-raft-2`, `q-raft-11` (USCG/NMC Q445 sample exam) |
| Correct but not supported by the available source | **18** | The 11 `quiz-derived-study` + 7 `visual-study` questions — each has its own cited Tier 3 quiz-batch or worksheet source, just not a manual or CFR source |
| Needs correction | **0** | See note below |
| Unsupported | **10** | `q-raft-1`, `q-raft-3`, `q-raft-4`, `q-raft-5`, `q-raft-6`, `q-raft-7`, `q-raft-8`, `q-raft-9`, `q-raft-10`, `q-raft-12` — no `sourceReference` field at all |
| Too ambiguous to retain | **0** | See note below |

**Note on "needs correction" and "too ambiguous":** every one of the 36
questions was read in full (prompt, all choices, correct answer,
misconceptions) as part of this audit. No factual inaccuracy or
genuine ambiguity was found in any of them — including the 3 questions
already tagged `needs-review` (`q-quiz1a-liferaft-cold-protection`,
`q-quiz1a-seaanchor-substitute`, `q-quizr1-recognitionlight-waterbattery`),
which read as plausible and internally consistent, just unverified. This
is a materially different situation from Chapter 4's audit, which found
one genuine internal-consistency problem (`q-surv-1`) — Chapter 3's issue
is pervasive *lack of verification*, not *inaccuracy*.

One of the 10 unsupported questions, `q-raft-3` ("What generally triggers
a liferaft to inflate?"), is now directly confirmable against the CFR
material found in Part 2a (§160.151-17(l)(2): pulling the painter starts
inflation) — a concrete, ready upgrade candidate once that CFR
subsection is formally extracted into a source-intake document.

### Counts by verification status

| Status | Count |
|---|---:|
| `quiz-derived-study` | 11 |
| `None` (no field) | 10 |
| `visual-study` | 7 |
| `needs-review` | 3 |
| `source-backed-study` | 3 |
| `official-source-supported` | 2 |

### Counts by difficulty

| Difficulty | Count |
|---|---:|
| Medium | 13 |
| Hard | 10 |
| Easy | 8 |
| Very-hard | 5 |

### Counts by source origin

| Origin | Count |
|---|---:|
| Quiz-1a batch (typed, hand-circled) | 12 |
| No source (legacy/unlabeled) | 10 |
| Quiz-review-1 batch (handwritten worksheet + quiz) | 6 |
| CFR (sea-trials batch, Document(6).PDF.pdf) | 3 |
| Quiz-6 batch (typed, hand-circled) | 3 |
| USCG/NMC Q445 sample exam | 2 |

### Counts by major topic area

| Topic area | Count (approx.) |
|---|---:|
| Diagram/equipment identification (D015SA + worksheet) | 8 |
| Righting a capsized raft | 4 (`q-raft-1`, `q-raft-2`, `q-raft-7`, `q-raft-11`) |
| Launching procedure (davit/manual/windward-leeward) | 3 |
| Climate adaptation / cold-water protection | 4 |
| Sea anchor / drogue | 3 |
| Heaving line | 2 |
| Command / occupant organization | 2 (`q-quiz1a-liferaft-in-charge`, and partially `q-raft-6`) |
| Boarding technique / priority | 3 (`q-raft-6`, `q-raft-8`, `q-raft-10`) |
| Onboard equipment (sealing clamps, sheath knife, rainwater, condensation) | 5 |
| Inflation / deployment mechanism | 2 (`q-raft-3`, `q-raft-4`) |
| Group coordination (scattered rafts, exhausted swimmer) | 2 |
| First aid in a raft (hypothermia) | 1 (`q-raft-12`) |
| Maintenance / inspection | **0** |
| Painter-line specific use/securing | **0** (attachment point only, via CFR) |
| Boarding-assistance equipment (ladder/ramp) | **0** |

### Duplicates and near-duplicates

Ran a `difflib.SequenceMatcher` pass across all 36 prompts (0.4+ cutoff for
review, 0.7 = true-duplicate threshold, per this project's convention).
**No pair reached 0.7.** The highest-scoring cluster —
`q-quiz1a-d015sa-righting-strap` vs. `q-quiz1a-d015sa-pressurevalve`
(0.948) and vs. `q-quiz1a-d015sa-heavingline-number` (0.789/0.776) — is a
template artifact ("In the liferaft diagram shown here, what does
[item/number] represent?"), not a real duplicate: each question tests a
different diagram item with a different correct answer and a different
`image` field. Confirmed by direct read, consistent with this project's
established "0.5-0.7 needs a human read, not just a score" convention.
No other pair scored above 0.65.

### Questions whose answers depend on diagrams or equipment identification

8 questions: `q-quiz1a-d015sa-heavingline-number`,
`q-quiz1a-d015sa-pressurevalve`, `q-quiz1a-d015sa-righting-strap` (all
from the quiz-1a D015SA diagram), plus `q-quizr1-floor-vs-canopy`,
`q-quizr1-internal-vs-external-lifelines`,
`q-quizr1-recognitionlight-waterbattery`,
`q-quizr1-seaanchor-vs-ballastbags`, `q-quizr1-weaklink-vs-towingbridle-vh`
(all from the quiz-review-1 23-item worksheet). All 8 are correctly
tagged `visual-study` and all correctly carry an `image` field pointing to
an already-cropped, already-served image file — no missing-image or
mistagged-status problems found.

### Questions likely derived from quiz notes rather than the manual

26 of 36 (11 `quiz-derived-study` + 7 `visual-study` + the 3
`needs-review` questions, which are also quiz-derived + the 5
CFR/NMC-sourced ones don't count here since those are regulation/exam
material, not quiz notes). Practically: **every question except the 5
CFR/NMC ones and the 10 zero-source ones traces to a Vinci quiz or
worksheet photo**, confirming this chapter's content is built almost
entirely on secondary practice material.

### Weak-status legacy questions requiring manual verification

All 10 `None`-status questions (`q-raft-1` through `q-raft-12`, excluding
`q-raft-2` and `q-raft-11` which already carry `official-source-supported`)
require verification once a source becomes available. None showed a
content problem in this audit — see the "needs correction" note above —
so "requiring manual verification" here means status-upgrade-pending, not
suspected-inaccurate.

## Part 4 — Learn Mode audit

All 12 Chapter 3 Learn Mode topics are bare placeholder strings — **0 of
12 substantive**, unchanged from the prior course-wide gap audit.

| # | Topic | Expected manual section | Existing questions that could serve as knowledge checks | Adequate verified material to complete now? | Specific gap |
|---|---|---|---|---|---|
| 0 | Liferafts | General liferaft introduction | `q-raft-6` (vs. lifeboat), `q-quiz1a-liferaft-in-charge` | Partial (Tier 3 only) | No manual intro section exists |
| 1 | Liferaft Size | Capacity/persons rating | None directly | No | No source at all found for this specific sub-topic |
| 2 | Liferaft Stowage | Container/mounting | §160.151-17(p) containers, tamper seal (CFR, unused) | Partial (Tier 2, unextracted) | Needs formal CFR extraction first |
| 3 | Liferaft Design | Construction/stability | §160.151-1 stability appendages, boarding ramp (CFR, unused) | Partial (Tier 2, unextracted) | Needs formal CFR extraction first |
| 4 | Liferaft Markings | SOLAS A/B markings | `q-cfr-liferaft-radarreflector-optional` (partial) | Partial | Full markings requirements not yet located in any source |
| 5 | Liferaft Launching Procedures / Instructions | General launch sequence | `q-quiz1a-preferred-liferaft-launch` | Partial (Tier 3 only) | No manual sequence found |
| 6 | Davit Launching | Davit-specific procedure | `q-quiz1a-preferred-liferaft-launch` (names davit as preferred) | No | No davit-liferaft procedure detail found anywhere |
| 7 | Automatic Launching | HRU-triggered auto-inflate | `q-raft-4`, `q-quiz1a-autodeploy-sea-anchor` | Partial (Tier 3 + unextracted CFR §160.151-17(l)) | Needs formal CFR extraction |
| 8 | Manual Launching | Windward/leeward, manual pull | `q-quiz1a-windward-manual-launch` | Partial (Tier 3 only) | No manual procedure found |
| 9 | Righting the Capsized Raft | CO2-bottle-side technique | `q-raft-1`, `q-raft-2`, `q-raft-7`, `q-raft-11` | **Yes — best-positioned topic**, 2 of 4 questions already official-source-supported | None blocking; ready for a Tier-2-grounded partial build |
| 10 | Boarding the Liferaft | From vessel vs. from water | `q-raft-6`, `q-raft-8`, `q-raft-10`; boarding ladder/ramp (CFR + worksheet item #21, both unused) | Partial (Tier 3 + 2 unused Tier 2/3 sources) | Needs the CFR extraction + worksheet crop |
| 11 | Assisting Injured People | Hypothermia/first aid in a raft | `q-raft-12`, plus Chapter 4's already-live Cold Shock/hypothermia content (cross-chapter reference) | Partial | No liferaft-specific first-aid manual content found |

**None of the 12 can be marked complete in the `course-verified`,
manual-grounded sense used for Chapters 4-6.** Topic 9 (Righting the
Capsized Raft) is the strongest candidate for an immediate partial build,
since it already has 2 official-source-supported questions and no
additional source-gathering is required to write a Tier-2-grounded
Learn Mode section for it, consistent with this project's "Best Available
Content Strategy" layering approach.

## Part 5 — Drill sets and Study Guide

**Neither exists.** No `vinci-chapter-3-drill-sets.md` file, and
`src/content/studyGuides/` contains no `chapter-3-*.json` file and no
`chapter-3-using-liferafts` reference anywhere in `index.js`.

## Part 6 — Chapter 3 coverage map

| Manual section | Source page range | Learn Mode topic | Existing live questions | Missing coverage | Verification confidence | Required action |
|---|---|---|---|---|---|---|
| (entire chapter) | **Unknown — likely pp. 35-88, unconfirmed** | All 12 topics | 36 (see Part 3) | Manual introduction, size/capacity specs, full markings, davit procedure detail, painter securing, occupant organization, maintenance | None (no manual) | Request Vinci's Chapter 3 manual pages |
| Equipment list (CFR proxy) | N/A — CFR §160.151-21, already in repo | 2, 3, 4, 10 | 3 live (heaving line, paddles, radar reflector) | 17 more lettered items never drafted (jackknife through immediate-action instructions) | High (Tier 2, machine-extracted) | Extract remaining §160.151-21 lettered items into a formal source-intake document |
| Painter/inflation/boarding-ladder (CFR proxy) | N/A — CFR §160.151-17, already in repo | 6, 7, 8, 10 | 0 live | Painter system, inflation trigger, boarding ladder, canopy lamps, containers | High (Tier 2) | Same extraction task as above |
| Maintenance (CFR proxy) | N/A — CFR §160.151-61, already in repo | (no matching topic — would need a 13th) | 0 live | Entire topic | High (Tier 2) | Extract and draft |
| Righting procedure (NMC proxy) | N/A — USCG/NMC Q445 | 9 | 4 live, 2 official-source-supported | Deeper procedural detail | High (Tier 2) | Ready to build Learn Mode now |
| Liferaft parts diagram (worksheet proxy) | N/A — quiz-review-1 worksheet | 2, 3, 4, 10 | 6 live (12 of 23 items) | 10 more confirmed-named items | High (Tier 3, clean answer key) | Crop and draft from the 10 untapped items |

## Part 7 — Most important exam distinctions (where supported)

- **Liferaft vs. lifeboat procedures** — supported: `q-raft-6` directly
  compares them (coordinated davit procedure vs. individual righting/swim
  skills). Worth deepening once more source exists.
- **Boarding from the water vs. boarding from a vessel** — supported:
  `q-raft-8` (why board from the vessel when possible), `q-raft-10`
  (scenario: pulling an exhausted swimmer aboard).
- **Painter-line use and securing** — **thin.** Only the CFR attachment
  point (near the entrance furthest from the painter) is live. The
  painter's role in triggering inflation (§160.151-17(l)(2)) and its
  weathering-resistance requirement (§160.151-17(k)) are both sitting
  unused in Part 2a.
- **Inflation and deployment procedures** — partially supported:
  `q-raft-3`, `q-raft-4`, `q-quiz1a-autodeploy-sea-anchor` are live but
  all unsourced or Tier-3-only; the CFR inflation-cylinder/system
  subsections are unused.
- **Righting a capsized liferaft** — the **best-supported** distinction in
  the chapter: 4 live questions, 2 already official-source-supported,
  consistent CO2-bottle-side technique across all of them.
- **Boarding-assistance equipment** — **not supported at all.** Zero live
  questions on boarding ladders or ramps, despite both being confirmed,
  citable CFR content (§160.151-17(n), §160.151-1(b)) and one being a
  named, answered item (#21) on the already-in-repo worksheet diagram.
- **Sea anchor or drogue use** — supported: `q-quiz1a-seaanchor-substitute`,
  `q-quizr1-seaanchor-vs-ballastbags`, `q-quiz1a-autodeploy-sea-anchor`.
- **Internal equipment and survival packs** — thin relative to what's
  available: only sealing clamps, sheath knife, and condensation
  collection are live, against a 17-item unused CFR equipment list.
- **Heaving lines** — see the dedicated note below.
- **Occupant organization and positioning** — thin: only "who's in
  charge" (`q-quiz1a-liferaft-in-charge`) is live; no content on
  positioning, roles, or routine (contrast with Chapter 4's much richer
  "Organizing for Survival" coverage).
- **Maintenance or inspection requirements** — **zero live coverage**,
  despite confirmed, citable CFR content (§160.151-61) sitting unused.
- **Diagram-based equipment identification** — see Part 2b; 12 of 23
  worksheet items used, 10 more available.

### The heaving-line finding, specifically (per the task's explicit flag)

No live error was found. The task asked this audit to pay particular
attention to "the correct number or use of heaving lines," and the
investigation traced this to a real but **already-resolved** distinction:
a separate CFR document in this same sea-trials batch
(`Document(7).PDF.pdf`, 46 CFR Part 169) contains a note that a
**lifeboat's** heaving line is 10 fathoms (60 feet), explicitly flagged in
that intake as "distinct from the liferaft's 100-ft heaving line." The
live `q-quiz1a-heaving-line-length` (100 feet) is correctly scoped to the
**liferaft**, and the 10-fathom lifeboat figure was never promoted to any
live question (a Chapter 2 gap, out of this task's scope, noted here only
because it's the direct answer to what this task asked about). No
confusion currently exists in live content between the two — but neither
is the 100-foot liferaft figure CFR-confirmed; §160.151-21(a) confirms the
heaving line's breaking strength and attachment point, not its length. The
100-foot figure remains `quiz-derived-study`, correctly tagged, not an
error, just not yet upgradable without further source.

## Part 8 — Estimates and readiness

- **Existing questions upgradable:** 4 concretely identified this task
  (`q-raft-3` toward CFR-confirmed status; the 3 `needs-review` questions
  toward `quiz-derived-study`/`visual-study` pending a formal reconciliation
  pass, since no factual problem was found in any of them). More likely
  become upgradable once the CFR extraction in Part 2a is completed.
- **Questions requiring correction:** 0.
- **New manual-backed questions needed:** 0 achievable (no manual exists).
  **New Tier 2/3-backed questions available to draft:** substantial — an
  estimated 15-20 from the unused CFR equipment/maintenance list (Part
  2a) plus the 10 untapped worksheet diagram items (Part 2b), following
  this project's established draft-then-review promotion pattern.
- **Learn Mode topics completable immediately:** 0 to a manual-grounded,
  "complete" standard. 1 (Righting the Capsized Raft) is ready for an
  immediate Tier-2-grounded **partial** build; 3-4 more (Automatic
  Launching, Liferaft Design, Liferaft Stowage, Boarding the Liferaft)
  become buildable once the CFR extraction in Part 2a happens first.
- **Ready for a full promotion cycle:** **No**, not a manual-grade cycle —
  there is no manual to promote from. **Yes**, for a Tier 2/3-grounded
  partial cycle (new CFR- and worksheet-backed questions, careful
  `source-backed-study`/`visual-study` tagging, partial Learn Mode),
  mirroring how this project's Best Available Content Strategy already
  treats other thin chapters.
- **More source pages must be obtained:** **Yes, for course-verified-grade
  completion.** Recommend requesting Vinci's Chapter 3 manual pages
  (most likely somewhere in the confirmed pp. 35-88 gap) as the priority
  ask, while independently running the CFR-extraction and
  worksheet-diagram cycle described above in parallel — that cycle
  requires no new material and can start immediately.

## Recommended next Chapter 3 implementation step

**Extract the remaining 46 CFR §160.151 lettered subsections (Part 2a)
into a formal source-intake document, and crop the 10 untapped worksheet
diagram items (Part 2b) — both already sitting in this repo — before
requesting new manual pages from Vinci.** This is the same
"use what's already on hand first" sequencing this project used for
Chapter 4 (Learn Mode completion before new source-gathering) and costs
nothing in wait time. In parallel, flag the Chapter 3 manual-page gap
(pp. 35-88) to Vinci as a source request, since true course-verified
completion for Righting/Boarding/Markings/Stowage ultimately still needs
it.
