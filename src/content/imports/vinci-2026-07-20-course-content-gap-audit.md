# Course Content Gap Audit — Chapters 1–4 and Appendix A (2026-07-20)

**Status: audit only. No live content was modified — `course.json`, Learn
Mode, the question bank, drill sets, and Study Guides are all untouched.
This document exists to establish which chapter is the highest-priority
content gap before the next content cycle begins.**

Scope: Chapters 1–4 and Appendix A, using the current repository state,
existing intake documents, source records, Learn Mode content, live
questions, verification statuses, drill sets, and Study Guides.
Chapters 5 and 6 are excluded from the per-chapter audit below (both
already have complete Learn Mode, drill sets, and a published Study
Guide) but are referenced throughout for cross-chapter comparison and
confusion-trap analysis, since several of the terms this audit was
asked to check span into them.

---

## 1. Chapter-by-chapter coverage table

| | Ch 1 — Planning Ahead | Ch 2 — Using Lifeboats | Ch 3 — Using Liferafts | Ch 4 — Survival Methods | Appendix A — Glossary |
|---|---|---|---|---|---|
| Live questions | 42 | 113 | 36 | 61 | 10 |
| `course-verified` | 20 | 11 | 0 | 0 | 0 |
| `source-backed-study` | 4 | 10 | 3 | 40 | 0 |
| `quiz-derived-study` | 4 | 48 | 11 | 8 | 0 |
| `visual-study` | 1 | 1 | 7 | 0 | 0 |
| `official-source-supported` | 1 | 4 | 2 | 1 | 2 |
| `practice-test-informed` | 0 | 13 | 0 | 0 | 8 |
| `needs-review` | 0 | 2 | 3 | 0 | 0 |
| `None` (legacy, weakest tier) | 12 | 24 | 10 | 12 | 0 |
| Learn Mode topics (total) | 5 | 24 | 12 | 17 | 1 |
| — with substantive content | 2 (40%) | 13 (54%) | 0 (0%) | 4 (24%) | 0 (0%) |
| — placeholder/thin | 3 | 11 | 12 | 13 | 1 |
| Direct manual-page source-intake | Partial (pp. 9–11 only) | **None** | **None** | Yes (pp. 89–119, 1 page missing) | None |
| Drill sets | None | None | None | None | None |
| Study Guide | None | None | None | None | None |
| Held/unresolved draft questions | 0 | 0 | 0 | 4 | 0 |

For reference, the two chapters already fully built out: Chapter 5 (59
questions, 43 `source-backed-study`, 8/8 Learn Mode, 6 drill sets,
published Study Guide) and Chapter 6 (55 questions, 43
`source-backed-study` + 2 `multi-source-supported`, 5/5 Learn Mode, 5
drill sets, published Study Guide, 2 questions still held pending a
duplicate check).

---

## 2. Per-chapter detail

### Chapter 1 — Planning Ahead

- **Live questions:** 42. Status mix is unusually strong for a chapter
  with no full manual intake — 20 `course-verified` (from "Import Pack
  001," a 100%-confidence Tier 1 concept/vocabulary summary of manual
  pages 9–11, explicitly confirmed verified by the course operator on
  2026-07-06 per `docs/CONTENT_INTAKE_BENCHMARK.md`), plus 4
  `source-backed-study`, 4 `quiz-derived-study`, 1 `visual-study`, 1
  `official-source-supported`, and **12 `None`-tier** legacy questions
  predating any verification tracking.
- **Learn Mode:** 5 topics, 2 substantive (`Certificate of Inspection
  (C.O.I.) & Required Lifeboatmen`, `IMO/LSA Safety Symbol
  Color-Coding`), 3 placeholders (`Be Prepared for Emergencies`, `Have
  Proper Equipment Ready at All Times`, `Find Your Shipboard Emergency
  Duties`).
- **Source-intake coverage:** partial only — `src/content/sources/
  SHLSOS-2021-CH1-P009-P011.md` (42 lines, pages 9–11 of a **2021**
  edition, not the "revised June 2024" edition referenced elsewhere in
  this repo's `contentNote` — an edition discrepancy noted at intake
  time and never resolved). `src/content/concepts/chapter1.json` and
  `src/content/vocabulary/glossary.json` hold the structured
  concept/vocabulary data drawn from that same narrow 3-page slice.
  Nothing beyond pages 9–11 has ever been directly sourced from any
  edition of the manual.
- **Manual page coverage:** pages 9–11 only (2021 edition). The
  remaining ~40 questions and 3 Learn Mode placeholders (emergency
  preparedness, equipment readiness, shipboard duties) have no known
  manual page behind them at all.
- **Drill sets / Study Guide:** none.
- **Known issues:** the 2021-vs-2024 edition question was never
  resolved (flagged, not answered, per the benchmark doc's own note).
  No contradictions or duplicate concerns found in this pass.
- **Missing from question bank:** the 3 placeholder topics have no
  dedicated question coverage at all.
- **Missing from Learn Mode:** emergency preparedness, equipment
  readiness, and shipboard emergency duties — all three untouched.
- **Study Guide readiness:** **not yet.** Only a 3-page manual slice
  exists; a Study Guide built mostly from CFR/quiz-derived content
  without ever having seen the bulk of the actual chapter would not
  meet the reconciliation bar already established for Chapters 5 and 6.
- **Additional source material needed:** the rest of Chapter 1 from
  Vinci's actual manual (ideally the confirmed June 2024 edition, to
  also resolve the edition question), covering emergency preparedness,
  equipment readiness, and shipboard duties at minimum.

### Chapter 2 — Using Lifeboats

- **Live questions:** 113 — by far the largest chapter, nearly double
  any other. Status mix is the most fragmented in the app: 48
  `quiz-derived-study`, 24 `None`, 13 `practice-test-informed`, 11
  `course-verified`, 10 `source-backed-study`, 4
  `official-source-supported`, 2 `needs-review`, 1 `visual-study`.
- **Learn Mode:** 24 topics (the most of any chapter) — 13 substantive
  (Lifeboat Types; Partially vs. Totally Enclosed; Markings; Coloring;
  Numbering; Design/Construction/Performance; Buoyancy & Stability;
  Automatic Drain; Exterior Rescue Features; Steering Equipment;
  Propulsion Systems; Engine/Fuel/Fire Safety; Rescue Boats/Fast Rescue
  Boats), 11 placeholders (Construction; Lifeboat Shell; Interior
  Construction; Survival Craft Equipment; Davits and Winches; Common
  Features of Davit Systems; Types of Davits; Launching from a Gravity
  Davit; Retrieving the Lifeboat; Navigating by Compass; Other Uses of
  Lifeboats).
- **Source-intake coverage: none.** Confirmed programmatically — zero
  of the 113 live questions cite a direct manual-page source. Every
  question traces instead to Vinci's own review quizzes (quiz-1a, -3,
  -4, -6, -review-1 image batches), the sea-trials CFR batch (46 CFR
  Parts 159–169), the SIU 2019 practice test, or the NMC Q445 sample
  exam. This is genuinely useful, largely trustworthy material — but
  **nobody has ever seen Vinci's actual Chapter 2 manual pages.**
- **Manual page coverage: none known.**
- **Drill sets / Study Guide:** none.
- **Known issues:** none of the 11 unlabeled/ambiguous source files
  found anywhere in the repo turned out to be misfiled Chapter 2
  content (confirmed in the prior Chapter 6 intake task) — the absence
  of manual coverage here isn't a filing problem, it's a genuine
  never-received-the-pages problem. Davits, launching procedure, and
  compass navigation — three of the densest, most technical topics in
  this chapter — are exactly the placeholders with zero Learn Mode
  content, which is also where a wrong or vague answer would matter
  most.
- **Missing from question bank:** the 11 placeholder areas above have
  thin or no dedicated coverage relative to their Learn Mode gaps,
  though some (e.g., davits generally) have scattered live questions
  that don't add up to systematic coverage.
- **Missing from Learn Mode:** davits and winches (the whole davit
  system, common features, types, launching, and retrieval — a single
  large cluster), interior/shell construction, survival craft
  equipment, compass navigation, other uses of lifeboats.
- **Study Guide readiness: not yet**, for the same reason as Chapter 1
  but at much larger scale — no direct manual confirmation exists for
  the largest chapter in the app.
- **Additional source material needed:** Chapter 2 of Vinci's actual
  manual, in full. Given this chapter's size, this is likely the
  single largest source-intake task of any chapter in this app,
  probably larger than Chapter 4's 31-page batch.

### Chapter 3 — Using Liferafts

- **Live questions:** 36. Status mix: 11 `quiz-derived-study`, 10
  `None`, 7 `visual-study`, 3 `needs-review`, 3 `source-backed-study`,
  2 `official-source-supported`.
- **Learn Mode: 12 topics, 0 substantive — 100% placeholder.** This is
  the worst Learn Mode completion ratio of any chapter in the app
  (Liferafts; Liferaft Size; Stowage; Design; Markings; Launching
  Procedures/Instructions; Davit Launching; Automatic Launching; Manual
  Launching; Righting the Capsized Raft; Boarding the Liferaft;
  Assisting Injured People).
- **Source-intake coverage: none**, same finding as Chapter 2 —
  confirmed zero direct manual-page questions. All 36 questions trace
  to the same quiz batches, the sea-trials CFR batch (46 CFR
  160.151-21, SOLAS A/B inflatable liferaft equipment), and the NMC
  Q445 sample exam.
- **Manual page coverage: none known.**
- **Drill sets / Study Guide:** none.
- **Known issues:** none found beyond the manual-coverage gap itself.
- **Missing from question bank:** liferaft stowage, design/markings,
  and the specific step-by-step launching procedures (davit/automatic/
  manual) have only scattered coverage, not systematic treatment.
- **Missing from Learn Mode:** literally everything — all 12 topics.
  This is the single most complete Learn Mode gap of any chapter.
- **Study Guide readiness: not yet**, for the same reason as Chapters 1
  and 2 — no manual confirmation exists, and Learn Mode itself is
  entirely unbuilt, so there's no completed Learn Mode to build a Study
  Guide on top of either.
- **Additional source material needed:** Chapter 3 of Vinci's actual
  manual, in full. Smaller than Chapter 2 (36 vs. 113 questions
  currently), but starting from zero Learn Mode content means the
  eventual build-out work is comparably large per question.

### Chapter 4 — Understanding Survival Methods

- **Live questions:** 61. Status mix: **40 `source-backed-study`**
  (66% of the chapter — the highest source-backed proportion of any
  chapter in the app), 12 `None`, 8 `quiz-derived-study`, 1
  `official-source-supported`.
- **Learn Mode:** 17 topics, 4 substantive (Immersion Suits & Thermal
  Protection; Man Overboard & Swimming for Survival; Cold Water
  Survival — Hypothermia & Cold Shock Response; Organizing for Survival
  & Survival on the Sea), 13 placeholders (Understanding Coast Guard
  Searches; Abandoning Ship; Anti-Exposure Suit; Swimming for Survival;
  Survival on the Sea *(note: partially absorbed into the combined
  module above, but its own placeholder slot remains)*; Preserve Body
  Fluids/Avoid Seasickness; Urinate Soon After Boarding; Dealing with
  Cold/Hot Environment; Drinking Water; Food; Looking for Land;
  Beaching Survival Craft; Survival Ashore).
- **Source-intake coverage: yes — the most complete of any
  not-yet-fully-built chapter.** `vinci-2026-07-13-chapter-4-manual-
  source-intake.md` covers manual pages **89–119** directly (28 of 31
  images read, 1 page confirmed missing), with a full page/section map,
  44 drafted questions, and an explicit ranked list of which Learn Mode
  modules the source can support next.
- **Manual page coverage: pages 89–119**, with two caveats already
  documented at intake: a soft, unconfirmed page-90/91 boundary, and a
  confirmed-missing page (~118, inside the "Survival Ashore"/"Finding
  Food and Water" section). Nothing was invented to fill either gap.
- **Drill sets / Study Guide:** none — this is the chapter's actual
  remaining gap, not source availability.
- **Known contradictions/unresolved items (still open, confirmed by
  reading current Learn Mode content in this audit):**
  - **Immersion-suit thermal-protection figure conflict, still
    unresolved.** The manual states "2°–5°C after 6 hours"; the live
    Immersion Suits Learn Mode module (built in an earlier session)
    uses only the CFR-sourced "no more than 2°C" figure and does not
    mention the manual's alternate figure at all. The source intake's
    own instruction was to *surface* this conflict to Vinci, not
    silently pick one number — that surfacing never happened; the
    conflict was avoided rather than resolved.
  - **Williamson Turn arithmetic**, correctly *not* propagated into
    Learn Mode — the current Man Overboard module explicitly limits
    itself to the maneuver's purpose and first-phase direction, per the
    source intake's caution about the manual's own "310 degrees"
    figure not checking out against its stated math. No action needed
    here; noted for completeness since the user flagged this area.
  - **4 draft questions still held**, unresolved since 2026-07-13, all
    still sitting in `vinci-2026-07-13-chapter-4-manual-draft-question-
    pack.json` at `draft-unverified`: 3 Tier-2 (`q-ch4man-
    steppingoff-blocknose`, `q-ch4man-ripcurrent-escape`, `q-ch4man-
    hypothermia-onset-conservative` — each needs a quick side-by-side
    read against a similar live question, not new source work) and 1
    Tier-3 (`q-ch4man-finding-water-ashore-digging`, blocked on the
    missing page 118).
- **Missing from question bank:** Understanding Coast Guard Searches,
  Abandoning Ship specifics beyond what's already drafted, Drinking
  Water/Food (some content drafted but held back for pack-size budget,
  not accuracy — see the promotion review's "drafted, then removed"
  list), Beaching Survival Craft, Survival Ashore (incomplete at the
  source, due to the missing page).
- **Missing from Learn Mode:** 13 of 17 topics, but unlike Chapters
  1–3, the source material to fill most of them already exists and was
  explicitly ranked by the source intake itself: Cold Water Survival
  *(already built since that ranking — now done)*, Organizing for
  Survival *(also already built)*, Abandoning Ship, Man Overboard
  *(built)*, Drinking Water, Food, then the smaller sections (Swimming
  for Survival, Understanding Coast Guard Searches, Preserve Body
  Fluids, Urinate Soon After Boarding, Dealing with Cold/Hot
  Environment, Looking for Land, Beaching Survival Craft), with
  Anti-Exposure Suit and Survival Ashore explicitly flagged as only
  partially covered by the current source batch.
- **Study Guide readiness:** **sufficient verified SOURCE material
  exists today** (66% of the chapter is already `source-backed-study`,
  and the un-promoted content is fully mapped to specific pages) — but
  per the sequencing this project has followed for both Chapter 5 and
  Chapter 6, a Study Guide was only built *after* Learn Mode reached
  full or near-full completion. Chapter 4 is at 4/17 (24%) Learn Mode
  completion today, so the honest answer is: **not yet ready for a
  Study Guide specifically, but closer than any other unfinished
  chapter, and the source material to get there requires no new intake
  work** — only building out Learn Mode from material that already
  exists.
- **Additional source material needed:** none for the immediate next
  steps (resolving the 4 held questions, building out Learn Mode,
  drill sets, and eventually a Study Guide). Only two narrow items
  would benefit from more material later: the missing page ~118, and
  Vinci's direct input on the thermal-protection figure conflict.

### Appendix A — Glossary / Vocabulary Review

- **Live questions:** 10 — smallest section in the app. Status mix: 8
  `practice-test-informed`, 2 `official-source-supported`. **Notably,
  this is the only section in the entire app with zero `None`-tier
  legacy questions** — every item here is at least honestly labeled,
  even if not manual-confirmed.
- **Learn Mode:** 1 topic total, 0 substantive — a single placeholder
  ("Glossary / Vocabulary Review").
- **Source-intake coverage:** none dedicated to Appendix A specifically
  — its questions were drawn from the same cross-chapter quiz/practice-
  test batches as everything else, tagged to this topic because they
  test general vocabulary rather than a specific chapter's procedures.
- **Manual page coverage:** none known.
- **Drill sets / Study Guide:** none.
- **Known contradictions — the one specifically requested for this
  audit:** `q-gloss-preventer` ("What is the purpose of 'preventer
  bars' fitted on a lifeboat's releasing gear?" → prevents accidental
  unhooking when the falls become slack) is **not** a duplicate or a
  contradiction of Chapter 6's Fall Preventer Device (FPD) content, but
  it is close enough in name and general concept that a student could
  easily conflate the two without the distinction being spelled out
  anywhere in one place. Full detail in the cross-chapter section
  below.
- **Missing from question bank / Learn Mode:** essentially everything
  beyond the 10 scattered terms already tested — this section has never
  had a real content pass of its own; it has only ever accumulated
  vocabulary incidentally drawn from other batches.
- **Study Guide readiness: not applicable/not yet** — too small and
  too incidentally sourced to support a dedicated Study Guide on its
  own; more likely a candidate for cross-links from other chapters'
  guides than a standalone guide.
- **Additional source material needed:** a real glossary source (the
  manual's own back-of-book glossary, if one exists) would be the
  highest-value single addition here, both to expand this section and
  to formally resolve terminology overlaps like the preventer-bars/FPD
  case below.

---

## 3. Special-attention findings

### The 11+ legacy weak-verification questions

Every content chapter has at least 11 questions at `None` tier or
`needs-review` — the two weakest, least-trustworthy statuses per
`course.json`'s own `contentNote` and `docs/CONTENT_INTAKE_BENCHMARK.md`
(pre-verification-system placeholder content, explicitly "NOT sourced
from the manual itself"):

| Chapter | `None` | `needs-review` | Total weak |
|---|---:|---:|---:|
| Chapter 1 | 12 | 0 | **12** |
| Chapter 2 | 24 | 2 | **26** |
| Chapter 3 | 10 | 3 | **13** |
| Chapter 4 | 12 | 0 | **12** |
| Appendix A | 0 | 0 | **0** |

Chapter 2 alone carries more weak-verification content (26) than any
other chapter has total questions except itself and Chapter 4. Appendix
A is the sole exception with none at all. This pattern tracks almost
exactly with manual-coverage status: the three chapters with zero
direct manual pages (1, 2, 3) carry all of the weak-verification
content in the app; the one chapter with substantial manual coverage
(4) has already converted most of its risk into `source-backed-study`.

*(Historical note: two older remediation documents in this repo —
`vinci-held-question-remediation-report.md` and `vinci-filtered-
question-recovery-inventory.md` — each catalogued a different set of
"held" questions from 2026-07-07/08 draft packs. Checked in this audit:
all three of those old draft packs are now fully drained — zero
questions remain in any of them. Those documents describe fully
resolved history, not a current gap.)*

### Chapters 2 and 3: no genuine manual coverage despite no unlabeled files found

Confirmed programmatically in this audit: **zero** of Chapter 2's 113
questions and **zero** of Chapter 3's 36 questions cite a direct
manual-page source. This is not a filing or labeling problem — the
prior Chapter 6 intake task already checked for unlabeled files that
might secretly be Chapter 2 or 3 material and found none; every
existing source file is correctly attributed to its actual origin
(Vinci's review quizzes, CFR regulatory text, the SIU 2019 practice
test, or the NMC Q445 sample exam). The honest conclusion: **nobody has
ever received or processed Vinci's actual Chapter 2 or Chapter 3 manual
pages.** Both chapters' current content is genuinely useful and mostly
well-labeled, but it is a secondary-source reconstruction, not a manual
transcription — a materially different (and lower) standard than
Chapters 4, 5, and 6 now meet.

### Chapter 4: sufficient for promotion and a Study Guide?

**For promotion: yes, with 4 small loose ends.** 40 of 44 drafted
questions already promoted; the remaining 4 need either a quick
side-by-side wording check (3) or the missing page 118 (1) — none need
new source-gathering work.

**For a Study Guide: source material is sufficient, but sequencing
isn't there yet.** Both Chapter 5 and Chapter 6's Study Guides were
built only after their Learn Mode reached full completion. Chapter 4 is
currently at 4 of 17 Learn Mode topics (24%). The source material to
close most of that gap already exists and is pre-ranked in the source
intake document — so this is a build-out gap, not a source-availability
gap, unlike Chapters 1–3.

### Appendix A terminology conflicts with chapter-specific equipment terms

One clear case, matching exactly what this audit was asked to check:

| Term | Where it lives | What it actually means |
|---|---|---|
| **Preventer bars** | Appendix A (`q-gloss-preventer`) | A built-in feature of a lifeboat's releasing gear, active during **normal launch/recovery operation**, that stops accidental unhooking specifically **when the falls become slack**. |
| **Fall Preventer Device (FPD)** | Chapter 6 (Learn Mode + 2 held draft questions) | A separate, **removable** device (slings and shackles at the fall block ring) added specifically during **non-emergency maintenance**, that stops the lifeboat from releasing **at all** while someone is inside working on it. |
| **Locking/Maintenance Pin** | Chapter 6 (Learn Mode + `q-ch6man-locking-pin-purpose`, live) | A **third**, simpler mechanical device — a pin through the fore/aft releasing gear that stops the bale from moving, usable alongside or instead of the FPD, also maintenance-only. |
| **Rottmer-type releasing gear** | Chapter 2 (`q-ch2-rottmer-hard`, live) | A specific **on-load release mechanism design** — releases both falls simultaneously whenever the lever is turned, with no built-in interlock; a different subject entirely (gear *design*, not a safety *add-on*). |

All four are legitimately distinct, correctly-drafted facts — this
audit found no factual error in any of them. But a student encountering
"preventer bars," "Fall Preventer Device," "locking/maintenance pin,"
and "Rottmer-type releasing gear" scattered across three different
chapters, with no single place that lines them up side by side, is
exactly the setup for exam-day confusion. Chapter 6's own Learn Mode
already flags the FPD-vs-preventer-bars distinction as a confusion trap
in its own content — but that flag only reaches a student who's already
on the Chapter 6 Learn Mode page; nothing on Appendix A's page (still a
bare placeholder) or Chapter 2's page points back the other way. This
is a strong candidate for a dedicated Appendix A or cross-chapter
comparison table once Appendix A gets real content.

### Cross-chapter confusion traps

- **General emergency alarm vs. whistle signals.** Confirmed
  well-handled where it's been built: Chapter 6's Learn Mode explicitly
  corrects the exact conflation risk (a continuous whistle blast alone
  = distress, vs. the alarm-bell-plus-whistle combination = fire/
  general emergency), and Chapter 1's `q-ep-4` independently confirms
  the "seven-or-more-short-blasts-plus-one-long" general emergency
  alarm pattern. These three facts (distress whistle, fire/general
  alarm combination, and the muster/abandon-ship pattern) are
  functionally a matched set spread across two chapters with no single
  page presenting all three together — low risk today because Chapter
  6's Learn Mode already handles the trap correctly, but worth a shared
  reference table if a cross-chapter glossary or Appendix A rebuild
  happens.
- **Lifeboat vs. liferaft procedures.** Reasonably well covered already
  — `q-launch-7` (Chapter 2) and `q-raft-6` (Chapter 3) both directly
  compare launching a lifeboat to boarding a liferaft, at two
  legitimately different angles (mechanical process vs. skills
  required; similarity-checked at 0.64, below the 0.7 duplicate
  threshold, confirmed not a duplicate in this audit). `q-raft-8` and
  `q-ch4man-capsize-recovery-craft` add further compare/contrast
  coverage. This pairing works despite living in three different
  chapters; no action needed beyond noting it as a model for how the
  other confusion traps below could be handled.
- **Rescue equipment with similar names.** A real, currently-unaddressed
  risk. "Rescue boat" (a full davit-launched vessel, Chapter 2's own
  Learn Mode category, also referenced in Chapter 1 and Chapter 4),
  "fast rescue boat" (the same vessel type, tested from a pickup-
  technique angle in Chapter 6), "rescue basket / rescue sling /
  Stokes litter" (Chapter 6 helicopter hoist devices — not boats at
  all), and "rescue swimmer" (a person, also Chapter 6) all share the
  word "rescue" and are scattered across four different chapters with
  no comparison table anywhere tying them together. Nothing found is
  factually wrong, but this is the single least-addressed
  confusion-trap cluster this audit identified.
- **Release gear, locking pins, maintenance pins, preventers, and
  preventer bars.** Covered in detail above — the largest, most
  specific finding of this audit. Four distinct devices/mechanisms,
  three chapters, one already-correct internal flag (Chapter 6's own
  Learn Mode), no cross-chapter resource that lines all four up.
- **Signals, alarms, and distress devices.** The broadest cluster and,
  on inspection, already the best-handled — Chapter 5's Learn Mode
  ("International Distress Signals — The Recognized List") already
  functions as exactly this kind of unifying reference for the signal/
  alarm/distress-device space, and it's cross-referenced correctly from
  Chapter 6. No new risk found here beyond what's already flagged in
  the "general alarm vs. whistle" item above.

---

## 4. Prioritized gap list

1. **Chapter 2 has zero manual coverage despite being the largest,
   most-tested chapter in the app (113 questions, 26 weak-verification).**
   The single largest verified-content gap in the course by volume.
2. **Chapter 3 has zero manual coverage and 100% placeholder Learn
   Mode** — the worst Learn Mode completion ratio of any chapter,
   though smaller in absolute question count than Chapter 2.
3. **Chapter 1 has only a narrow 3-page manual slice (and an
   unresolved 2021-vs-2024 edition question)** behind an otherwise
   reasonably-verified chapter — the smallest of the three
   "no-manual" gaps, but still real.
4. **Chapter 4's Learn Mode is only 24% complete** despite having the
   richest verified source material of any unfinished chapter — a
   pure execution gap, not a source-availability gap, and the
   fastest one to close.
5. **4 Chapter 4 draft questions have sat unresolved since
   2026-07-13** — small, low-effort, but still open.
6. **No chapter outside 5 and 6 has drill sets or a Study Guide.**
7. **The rescue-equipment-naming and release-gear/preventer clusters
   have no cross-chapter reference**, even though the underlying facts
   are individually correct.
8. **Appendix A has never had a dedicated content pass** — its 10
   questions are incidental, and its one Learn Mode topic is a bare
   placeholder.

## 5. Recommended order for the next three content cycles

1. **Chapter 4 — Learn Mode completion, held-question resolution,
   drill sets, and Study Guide.** No new source material required;
   directly mirrors the proven Chapter 5 → Chapter 6 pattern; converts
   already-verified material into finished, student-facing value
   fastest.
2. **Chapter 2 — full manual source intake, from scratch.** The
   largest verified-content gap in the app by volume and weak-
   verification count; likely the largest single intake task given the
   chapter's size, so it should follow Chapter 4 (a smaller, faster
   win) rather than lead.
3. **Chapter 3 — full manual source intake, from scratch.** Smaller
   than Chapter 2 but starts from zero Learn Mode content; natural
   follow-on once the Chapter 2 intake pattern (davits, launching
   procedures) is fresh, since liferaft launching/boarding covers
   closely related ground.

Chapter 1's remaining gap (a fuller manual pass, plus the edition
question) and Appendix A's rebuild are lower priority than all three
above — Chapter 1 already has the strongest existing verification base
of the "incomplete" chapters, and Appendix A's small size limits how
much any single content cycle there can improve overall course
coverage. Both are reasonable candidates for a fourth or fifth cycle,
not the next three.

## 6. Recommended next chapter: Chapter 4

**Why it should come next:** it is the only chapter in this audit where
the next content cycle requires **no new source-gathering work at
all.** Manual pages 89–119 are already extracted and mapped section by
section; 40 of 44 drafted questions are already promoted and
`source-backed-study`; the source intake document itself already
ranks which Learn Mode modules to build next, in order. This is a
direct continuation of the exact pipeline pattern already proven twice
in this project (Chapter 5 and Chapter 6) — lower risk, faster
turnaround, and it converts real, already-verified research investment
into finished value before starting the much larger Chapter 2 intake.

### Exact work required for Chapter 4's next cycle

1. **Question promotion (small, first):**
   - Spot-check `q-ch4man-steppingoff-blocknose` and `q-ch4man-
     ripcurrent-escape` read as clearly distinct from their
     live neighbors (`q-quiz6-abandonship-jump-procedure`,
     `q-quiz6-swim-strongcurrent-45deg`); confirm `q-ch4man-
     hypothermia-onset-conservative`'s hedged phrasing is a useful
     fact, not just vague. Promote as `source-backed-study` if
     confirmed.
   - Leave `q-ch4man-finding-water-ashore-digging` held until page 118
     is obtained or the section boundary is otherwise clarified.
2. **Verification/reconciliation (small, do before Learn Mode work):**
   - Surface the immersion-suit thermal-protection figure conflict
     (manual "2°–5°C" vs. live CFR-sourced "no more than 2°C") to
     Vinci explicitly, rather than continuing to silently use only the
     CFR figure.
3. **Learn Mode (the main work, material already sourced):**
   - Build, in the order the source intake itself recommends for
     what's not already done: Abandoning Ship; Drinking Water; Food;
     then the smaller sections (Swimming for Survival, Understanding
     Coast Guard Searches, Preserve Body Fluids/Avoid Seasickness,
     Urinate Soon After Boarding, Dealing with Cold/Hot Environment,
     Looking for Land, Beaching Survival Craft).
   - Treat Anti-Exposure Suit and Survival Ashore as partial-only,
     clearly flagged, since the source batch itself is incomplete for
     both (the missing page 118 sits inside Survival Ashore).
4. **Drill sets:** once Learn Mode is substantially complete, build
   drill sets grouped by natural cluster — Cold Water Survival &
   Hypothermia (already the richest existing cluster), Abandoning Ship
   & Water Entry, Man Overboard & Swimming, Survival Priorities &
   Rationing (organizing, seasickness, water, food) — following the
   same pattern as `vinci-chapter-5-drill-sets.md` and `vinci-chapter-
   6-drill-sets.md`.
5. **Study Guide:** build only after Learn Mode reaches the same
   near-complete state Chapters 5 and 6 were at before their guides
   were built, reconciling against `vinci-2026-07-13-chapter-4-manual-
   source-intake.md` the same way the Chapter 5 and Chapter 6 guides
   were reconciled against their own source intakes. Stage unpublished
   first, resolve any conflicts, then publish — same discipline as
   both prior guides.
