# Promotion Review — Chapter 6 Draft Question Pack (2026-07-18)

**Status: draft complete, awaiting a separate promotion task. Nothing in
this pack has been added to `src/content/course.json`. No live question
was rewritten or deleted.**

## Source

- Draft pack: `src/content/imports/vinci-2026-07-18-chapter-6-draft-question-pack.json`
- Study notes: `src/content/imports/vinci-2026-07-18-chapter-6-source-intake.md`
  (Water Survival Student Manual, Chapter 6, pages 134–141)
- Drive folder: `ch 6` (8 unique pages, no duplicate-upload artifact)

---

## Part 1 — Audit of the 15 existing live Chapter 6 questions

Every live `chapter-6-being-rescued` question was checked against the
extracted manual text (pages 134–141). **No live question was rewritten
or deleted in this task** — this is a classification pass only.

| ID | Classification | Basis |
|---|---|---|
| `q-rescue-1` | Correct, not directly supported by these pages | General "follow crew instructions" framing is thematically consistent with the whole chapter but isn't a paraphrase of one specific manual sentence in this excerpt. |
| `q-rescue-2` | **Confirmed by the manual** | Matches p.135/p.136/p.138 static-discharge instructions almost verbatim. |
| `q-rescue-3` | Correct, not directly supported by these pages | Crew-directs-the-rescue is consistent with the manual's tone (crew signals, pilot controls timing) but not a specific stated sentence. |
| `q-rescue-4` | **Confirmed by the manual** | Matches the Rescue Basket (p.135) and Rescue Sling (p.135) sections' stated purpose. |
| `q-rescue-5` | Correct, not directly supported by these pages | No manual sentence states this specific "don't help operate the equipment" reasoning. |
| `q-rescue-6` | **Unsupported by these pages** | Rescue swimmers are not mentioned anywhere in pages 134–141 — this chapter excerpt is entirely helicopter/medevac/lifeboat-maintenance content. Not contradicted, just outside this source's scope. |
| `q-rescue-7` | **Confirmed by the manual** (upgrade) | Already `official-source-supported` via the NMC Q445 exam; now also directly confirmed by p.135's "only one person at a time gets in the basket." |
| `q-rescue-8` | Correct, not directly supported by these pages | Steadying lines controlling basket/litter swing are manual-confirmed (p.136, p.138 step 14), but the specific "rotor wash causes spinning" scenario framing isn't a manual quote. |
| `q-rescue-9` | **Confirmed by the manual** | Same static-discharge fact as `q-rescue-2`, from the same source passages. |
| `q-rescue-10` | **Unsupported by these pages** | No heaving-line or vessel-based rescue content anywhere in pages 134–141. |
| `q-rescue-11` | Correct, not directly supported by these pages | "Crew has real-time situational awareness" reasoning isn't a manual sentence, though it's consistent with the chapter's crew-led framing throughout. |
| `q-rescue-12` | **Unsupported by these pages** | No content about property/luggage-retrieval priority anywhere in this excerpt. |
| `q-ch6-rescuesling-official-hard` | **Confirmed by the manual** | The Rescue Sling section's "arms held around the sling" (p.135) and the Stokes Litter section's "used for serious injuries...unable to walk" (p.136) directly support both the correct answer and the reasoning behind it. |
| `q-quiz1a-fastrescueboat-approach` | **Unsupported by these pages** | No fast-rescue-boat content anywhere in this excerpt. |
| `q-quiz6-williamsonturn-manoverboard` | **Unsupported by these pages** | No ship-maneuvering/Williamson Turn content anywhere in this excerpt. |

**Totals: 5 Confirmed by the manual, 5 Correct but not supported by
these pages, 5 Unsupported by these pages, 0 Needs correction, 0 Too
ambiguous to retain.**

No factual conflict was found between any live question and the new
extraction — every "Unsupported" classification reflects a topic these
8 pages simply don't cover (rescue swimmer, heaving line, fast rescue
boat, Williamson Turn, property-priority), not a contradiction.
Recommend leaving all 15 exactly as they are; the 5 "Confirmed" items
are reasonable candidates to have their `verificationStatus` upgraded
in a future promotion task (`q-rescue-2`, `q-rescue-4`, `q-rescue-7`,
`q-rescue-9`, `q-ch6-rescuesling-official-hard`), but that upgrade is
not performed here.

---

## Part 2 — Candidate question pack

**42 questions drafted**, all `topicId: chapter-6-being-rescued`, all
`verificationStatus: draft-unverified`.

### Difficulty distribution

| Difficulty | Count |
|---|---:|
| Easy | 9 |
| Medium | 22 |
| Hard | 9 |
| Very-hard | 2 |

### Duplicate / near-duplicate findings

Ran the same `difflib.SequenceMatcher` methodology used for Chapters 4
and 5 (0.7 = true-duplicate threshold) against all 336 live questions,
plus an internal pass across the 42 drafted prompts.

- **Zero matches above 0.7 that represent real content duplication.**
  One match crossed the threshold — `q-ch6man-dont-swim-unless-necessary`
  vs. the live `q-ch4man-avoid-surf-landing` (0.717) — but these are a
  shared "Why does the manual recommend [X] unless necessary?" sentence
  template testing completely different facts (strength conservation
  while awaiting rescue vs. avoiding surf landings), with different
  correct answers. Not a duplicate; approved as-is, same pattern as
  prior chapters' template-artifact findings.
- **Three internal matches above 0.6**, all reviewed and approved:
  - `q-ch6man-medevac-request-info` vs. `q-ch6man-medevac-radio-guard`
    (0.611) — shared "medical evacuation...helicopter" phrasing,
    different checklist items (position/course/weather info vs.
    Channel 16 guard).
  - `q-ch6man-medevac-flags-wind-reference` vs.
    `q-ch6man-medevac-hand-signals` (0.635) — shared "Why does the
    manual recommend...before a medical evacuation hoist?" template,
    different facts (wind reference vs. noise-driven hand signals).
  - `q-ch6man-fpd-purpose` vs. `q-ch6man-fpd-mechanism` (0.612) —
    intentionally paired questions about the same device (why it
    exists vs. how it physically works), same pattern already accepted
    in this pipeline (e.g., Chapter 5's EPIRB definition vs. deployment
    questions). Not accidental duplication.
- **33 matches in the 0.5–0.7 review zone** against the live bank —
  spot-checked by category and by recurring live-question ID (several
  short, generic-template live questions like `q-ep-2` "What is a
  muster list used for?" and `q-quiz1a-sealing-clamps` matched multiple
  drafted questions purely on shared "What is X used for?" phrasing).
  Every spot-checked pair tests unrelated equipment or facts. Not
  individually itemized here at full 33-item detail given the volume,
  consistent with the effort level used for review-zone matches in
  prior chapters' reviews.
- **One genuine content-adjacency concern, not a duplicate, but worth a
  second look before promotion:** the live glossary-style question
  `q-gloss-preventer` ("What is the purpose of 'preventer bars' fitted
  on a lifeboat's releasing gear?" → "To prevent accidental unhooking
  when the falls become slack") describes a *different* piece of
  hardware than this pack's Fall Preventer Device (FPD) — preventer
  bars are a built-in feature of the releasing gear used during normal
  operation, while the FPD (per this chapter's source, p.140) is an
  external sling-and-shackle device added specifically for
  non-emergency maintenance entry. They are conceptually related
  (both prevent unwanted release) but functionally distinct. Flagging
  `q-ch6man-fpd-purpose` and `q-ch6man-fpd-mechanism` for secondary
  verification rather than approving them outright, specifically to
  confirm these are genuinely two different devices in Vinci's manual
  and not the same concept described two different ways across two
  different source materials.

### Categorization

**Ready for promotion (40 questions)** — clean source, no proximity
concerns, no missing/uncertain figures:

`q-ch6man-stepoff-crest-timing`, `q-ch6man-continue-rationing-after-spotted`,
`q-ch6man-dont-swim-unless-necessary`, `q-ch6man-rotor-wind-speed`,
`q-ch6man-four-hoist-methods`, `q-ch6man-basket-one-at-a-time`,
`q-ch6man-sling-description`, `q-ch6man-sling-usage-comparison`,
`q-ch6man-litter-usage`, `q-ch6man-litter-loading-procedure`,
`q-ch6man-litter-cable-hook-safety`, `q-ch6man-steadying-line-purpose`,
`q-ch6man-ship-landing-marking`, `q-ch6man-hoist-ship-course-angle`,
`q-ch6man-hoist-litter-strapping`, `q-ch6man-hoist-patient-tagging`,
`q-ch6man-hoist-medical-records`, `q-ch6man-hoist-comeon-signal`,
`q-ch6man-hoist-cable-not-secured`, `q-ch6man-hoist-ready-signal`,
`q-ch6man-hoist-steadying-line-feet`, `q-ch6man-never-shine-lights-helicopter`,
`q-ch6man-approach-helicopter-in-water`, `q-ch6man-deflate-liferaft-roof`,
`q-ch6man-medevac-request-info`, `q-ch6man-medevac-ambulatory-info`,
`q-ch6man-medevac-beyond-range`, `q-ch6man-medevac-notify-changes`,
`q-ch6man-medevac-radio-guard`, `q-ch6man-medevac-hoist-area-specs`,
`q-ch6man-medevac-flags-wind-reference`, `q-ch6man-medevac-night-lighting`,
`q-ch6man-medevac-searchlight-use`, `q-ch6man-medevac-hand-signals`,
`q-ch6man-lifeboat-accident-causes`, `q-ch6man-locking-pin-purpose`,
`q-ch6man-maintenance-notify-oow`, `q-ch6man-maintenance-ppe`,
`q-ch6man-maintenance-check-releasing-gear`, `q-ch6man-maintenance-return-to-ready`

**Needs secondary verification (2 questions):**

- `q-ch6man-fpd-purpose`, `q-ch6man-fpd-mechanism` — hold pending
  confirmation that "Fall Preventer Device" and the already-live
  `q-gloss-preventer`'s "preventer bars" are genuinely distinct pieces
  of hardware in Vinci's manual (see duplicate-findings note above).
  The content itself is accurately transcribed either way; the open
  question is purely whether it risks presenting the same concept
  under two names as if they were different, or vice versa.

**Excluded because of source or OCR uncertainty (0 questions):**

None. Unlike the Chapter 5 batch, no figure, word, diagram label, or
passage in this 8-page excerpt was genuinely unrecoverable — see the
source intake's OCR-uncertainty section for the full list of minor
margin-shadow clipping, all of which was resolved.

---

## Part 3 — Recommended Learn Mode structure (not built in this task)

All 4 existing Chapter 6 Learn Mode placeholders map cleanly onto one
manual section each, with clear page boundaries — unlike Chapter 5,
there's no need to combine any of them:

1. **Rescued at Last** (p.134, top) — short section: post-spotting
   caution, continued rationing, save-your-strength guidance, and the
   crest-of-swell step-off timing.
2. **Helicopter Hoist Procedures** (p.134 bottom – p.138) — the
   largest section by far: rotor-wind hazard, the four hoist methods
   (basket/sling/litter/ship landing) each with their own subsection,
   general hoist safety (static discharge, steadying lines, lighting,
   approach direction, liferaft-roof deflation), and the 14-step Hoist
   Operations procedure. Likely the richest single Learn Mode module
   in this chapter — may be worth two keyPoints (methods vs. the
   numbered operations procedure) rather than one, given its length.
3. **Medical Evacuation** (p.139) — the two checklists (Requesting
   Helicopter Assistance; Preparations Prior to Arrival), naturally
   suited to a process-card-style presentation.
4. **Dangers Involved with Training, Drills and Maintenance**
   (p.140–141) — accident-cause categories, Fall Preventer Device,
   Locking/Maintenance Pin, and the practical safety-measures list.

## Part 4 — Recommended drill-set structure (not built in this task)

Once promoted, these clusters would group naturally, following the
same pattern as `vinci-chapter-5-drill-sets.md`:

1. **Choosing the Right Hoist Device** — Basket vs. Sling vs. Litter vs.
   Ship Landing, including the existing `q-ch6-rescuesling-official-hard`
   (why to avoid the sling for a hypothermic patient).
2. **Hoist Operations Sequence & Safety** — the 14-step procedure,
   static-discharge reasoning (new drafts plus the now-reinforced
   `q-rescue-2`/`q-rescue-9`), steadying-line handling, cable-hook
   safety.
3. **Medical Evacuation Checklist** — both Requesting Assistance and
   Preparations items together, since they're one continuous checklist
   in the source.
4. **Lifeboat Maintenance Safety** — accident causes, FPD, locking pin,
   PPE, and the OOW/Bridge notification requirement.
5. **Follow the Rescue Crew (general principle)** — the existing,
   already-live `q-rescue-1/3/5/6/8/10/11/12` cluster, kept separate
   from the new manual-specific content since it tests a general
   coordination principle rather than a specific manual procedure.
