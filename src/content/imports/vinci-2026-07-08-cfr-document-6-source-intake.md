# Source Intake — Sea Trials `Document(6).PDF.pdf` (46 CFR, Parts 156–165)

**Status: targeted source map only. No draft questions were created, no
existing question was upgraded or modified, and `course.json` was not
touched in this task.**

## PDF identity

- Drive file: `Document(6).PDF.pdf`, file ID `1QVlYS0sEW_btGITldbHHwHM-oX_NzmXs`
- Source folder: `Vinci / _Archive / Received through 2026-07-08 - Not all
  processed / Not yet processed / Sea trials`
- Title: **Title 46 — Shipping**, Chapter I (Coast Guard, Department of
  Homeland Security), **Subchapter Q — Equipment, Construction, and
  Materials: Specifications and Approval**
- Cover states "Parts 156 to 165"; the actual codified parts present in
  this volume are **Part 159, Part 160, Part 161, Part 162, Part 163, Part
  164, and Part 165 [Reserved]** (Parts 156–158 don't exist as separate
  parts in this subchapter — the volume's stated range is just the nearest
  round numbers to what it actually contains).
- Revised as of October 1, 2013. 477 pages total (confirmed by direct PDF
  page count), file size 2,009,036 bytes — matches Drive's reported file
  size exactly.
- **Readable: yes**, cleanly extractable as text (confirmed via two
  independent extraction paths — see Method, below).

## Method (and a real limitation worth flagging)

Google Drive's natural-language file reader (`read_file_content`)
truncates its extraction for a document this large — it stopped partway
through page 71 of 477, in the middle of `Subpart 160.028` (Signal
Pistols). That cutoff landed well *before* the subparts most relevant to
this course (davits, lifeboats, liferafts, immersion suits, release
mechanisms all sit later in Part 160). To inspect those without guessing
at their contents, the raw PDF was downloaded directly (byte-verified:
2,009,036 bytes, matching Drive's metadata) and its full text was
extracted locally with PyMuPDF — all 477 pages, ~1.84M characters. That
full local extraction is what the rest of this report is based on.

Even with the full text available, this report only *inspects* the
subparts relevant to this course's topic list (below) — it does not
summarize the whole 477-page volume, per this task's scope.

## Sections inspected

- **Part 159 — Approval of Equipment and Materials** (general procedural
  framework: how the Coast Guard approves any equipment/material under
  this subchapter — independent laboratories, production inspection,
  suspension/termination of approval). Read in full body text.
- **Part 160 — Lifesaving Equipment**, which is organized into ~40
  subparts, one per equipment type. Full body text was read for:
  - `160.001` Life Preservers, General
  - `160.002` Life Preservers, Kapok, Adult and Child (Jacket Type)
  - `160.005` Life Preservers, Fibrous Glass, Adult and Child
  - `160.006` Life Preservers: Repairing
  - `160.010` Buoyant Apparatus for Merchant Vessels
  - `160.013` Hatchets (Lifeboat and Liferaft) for Merchant Vessels
  - `160.016` Lamps, Safety, Flame
  - `160.017` Chain Ladder
  - `160.021`–`160.024` Hand Red Flare / Floating Orange Smoke (5 min) /
    Hand Combination Flare-and-Smoke / Pistol-Projected Parachute Red
    Flare Distress Signals
  - `160.026` Emergency Drinking Water
  - `160.027` Life Floats
  - `160.028` Signal Pistols for Red Flare Distress Signals
  - `160.115` Launching Appliances — Winches (read in full)
  - `160.171` Immersion Suits (read in full)
  Spot-checked (scope/definitions/construction sections read, not every
  section line-by-line) for:
  - `160.132` Launching Appliances — Davits
  - `160.133` Release Mechanisms for Lifeboats and Rescue Boats (SOLAS)
  - `160.135` Lifeboats (SOLAS)
  - `160.151` Inflatable Liferafts (SOLAS)
  - `160.156` Rescue Boats and Fast Rescue Boats (SOLAS)
  - `160.170` Davit-Launched Liferaft Automatic Release Hooks (SOLAS)
  - `160.174` Thermal Protective Aids
  - `160.176` Inflatable Lifejackets
- Full-text keyword search (not a read-through) across all 477 pages for
  terms tied to already-live/promoted Vinci quiz facts: "sea painter,"
  "gripes," "tricing," "hydrostatic release," "limit switch," "governor,"
  "toggle pin," "gravity davit," "hand crank," "lifeboatmen," "certificate
  of inspection," "station bill," "capacity," "SOLAS," "hydrostatic,"
  "safety factor" — to check for exact-fact corroboration opportunities
  without reading every subpart end to end.

## What this document actually is (important framing)

The overwhelming majority of Part 160's text is **Coast Guard equipment
*approval* and *manufacturing* procedure** — how a manufacturer gets a
lifejacket, winch, or immersion suit approved (application paperwork,
independent-laboratory testing protocols, materials sourcing, welding
certification, quality-control recordkeeping, marking/labeling
requirements). This is regulator/manufacturer-facing text, not an
operational manual for a mariner. It is a meaningfully different genre
from Vinci's quizzes, which test what a crew member does or knows during
an emergency. Most of each subpart is **not** exam-relevant for that
reason — but buried inside the "Construction" and "Performance"
sections of a few subparts are precise, testable, quantitative
requirements that a device must meet, and those are usable.

## Relevant CFR sections found, and what they map to

| CFR citation | Fact | App topic |
|---|---|---|
| 46 CFR 160.171–9(b) | An immersion suit must be designed so the wearer can jump from a height of at least **4.5 m** into the water without injury and without dislodging or damaging the suit. | chapter-4-survival-methods (immersion suits) |
| 46 CFR 160.171–9(d) | An immersion suit must be designed so a person can don it correctly **within two minutes** after reading the donning/use instructions. | chapter-4-survival-methods (immersion suits) |
| 46 CFR 160.171–9(c)(2) | After one jump into the water from 4.5 m, the suit must provide enough thermal insulation that the wearer's core body temperature falls **no more than 2°C (3.6°F)** over **6 hours** of immersion in calm water between 0°C and 2°C. | chapter-4-survival-methods (immersion suits, cold-water survival) |
| 46 CFR 160.133(b)(7) | An on-load lifeboat/rescue-boat release mechanism must require **two separate, deliberate actions** by the operator to release. | chapter-2-using-lifeboats (launching gear / release mechanisms) |
| 46 CFR 160.133(b)(11) | Each load-carrying part of a lifeboat/rescue-boat release mechanism must be designed with a **safety factor of six**, based on ultimate strength of materials. | chapter-2-using-lifeboats (launching gear) — **see caution below** |

## Existing quiz-derived questions that could potentially be upgraded to `source-backed-study`

**None of the inspected text gives a clean enough match to confidently
upgrade any live question in this task.** Several loose thematic overlaps
turned up and are recorded here for a human/Vinci to weigh, but none are
a verbatim or figure-for-figure match, so none are being changed:

- **`q-quiz4-safetyfactor-launchinggear`** (currently held back, inactive,
  `draft-unverified`, ambiguous "3M" handwriting) — 46 CFR 160.133(b)(11)
  specifies a safety factor of **six** for a *release mechanism's*
  load-carrying parts specifically, not a generic "lifeboat launching
  gear" safety factor of three. This is a **different component** than
  what the held question's prompt ("Minimum Safety Factor... for all
  lifeboat launching gear") describes, so this does **not** confirm the
  held question's interpreted answer of "3" — if anything, it's a reason
  to look more carefully at the held question before ever promoting it,
  rather than a source that resolves it. Not acted on here; flagged for a
  human/Vinci decision.
- **`q-quiz4-limitswitch-function`** (live, `quiz-derived-study`) — 46 CFR
  160.115–7(b)(6) confirms limit switches exist on davit-arm winches to
  stop travel and cut power near the fully-stowed position. This is
  consistent with the general concept the live question tests, but it's a
  general corroboration of the idea, not a citation match to the live
  question's specific wording (davit type + function) — would need a
  side-by-side wording comparison before calling it "source-backed."
- **`q-quiz4-seapainter-togglepin`** (live, `quiz-derived-study`) — 46 CFR
  160.151 (Inflatable Liferafts, SOLAS) mentions a sea painter installed
  in the liferaft with a maximum-length specification, but nothing
  inspected here discusses a toggle pin's function specifically — this is
  a different facet of "sea painter" than what the live question tests.
- **`q-quiz4-gripes-purpose`** (live, `quiz-derived-study`) — 46 CFR
  160.010 (Buoyant Apparatus) mentions "spring-tensioned gripes" in the
  context of buoyant-apparatus approval testing — a different piece of
  equipment (buoyant apparatus, not a lifeboat) than what the live
  question is about, so this is lexical overlap, not corroboration.

## High-value new question opportunities (not drafted yet)

The immersion suit construction/performance requirements in **46 CFR
160.171–9** are the strongest new-question material found in this pass —
precise, quantitative, directly quotable, and squarely on-topic for
`chapter-4-survival-methods`:

1. Minimum design jump height for an immersion suit: **4.5 m** (46 CFR
   160.171–9(b)).
2. Immersion suit donning-time requirement: **within 2 minutes** (46 CFR
   160.171–9(d)).
3. Immersion suit cold-water thermal protection: core temperature drop
   limited to **2°C over 6 hours** in 0–2°C water (46 CFR
   160.171–9(c)(2)).
4. Immersion suit on-load release mechanism (lifeboat/rescue boat)
   requires **two separate, deliberate actions** to prevent accidental
   release (46 CFR 160.133(b)(7)) — a strong anti-guessing-friendly fact,
   distinct from anything currently live.

These four are clean, CFR-cited, and would make solid `source-backed-study`
questions in a future, separately-requested drafting task. Per this
task's scope, no draft-question-pack was created for them here.

## Sections skipped as irrelevant

- **Parts 161 (Electrical Equipment) and 162 (Engineering)** — general
  Coast Guard equipment-approval parts covering things like pilot hoists,
  navigation lights, and pollution-prevention/engineering equipment.
  Located by heading only, not read — no overlap with this course's
  lifesaving-appliance topics.
- **Part 163 (Construction)** — covers items like pilot hoists; located
  by heading only (`163.002` Pilot Hoist), not read in body — not related
  to lifeboats/liferafts/PFDs.
- **Part 164 (Materials)** — general material specifications (kapok
  processing, deck coverings, structural insulation) that are referenced
  *from* the lifesaving-equipment subparts (e.g., life preserver kapok
  must comply with `subpart 164.003`) but are themselves generic
  materials-testing standards, not operational facts. Located by heading
  only, not read in body.
- **Part 165 [Reserved]** — empty in this volume; the "Regulated
  Navigation Areas" content sometimes associated with Part 165 lives in a
  different CFR subchapter and is not present here at all.
- **Part 160 subparts not tied to this course's topic list** —
  `160.031`–`160.077` (line-throwing appliances, rocket-propelled and
  orange-smoke distress signals beyond the ones already inspected,
  magazine chests, first-aid kits, jackknives, bilge pumps, buoyant
  vest/cushion material specs, life-ring buoys, domestic inflatable
  liferafts `160.051`, work vests, desalter kits, fishing tackle kits,
  hydraulic/manual releases `160.062`, marine buoyant devices, additional
  aerial/flag distress signals, recreational and hybrid inflatable PFDs)
  — located by table-of-contents heading only, not read. Several of these
  (line-throwing appliances, first-aid kits, distress signals) could be
  worth a future targeted pass if the course ever needs that material,
  but were out of scope for this task's specific topic list.
- **Finding Aids back matter** (Table of CFR Titles and Chapters,
  Alphabetical List of Agencies, List of CFR Sections Affected, ~pages
  424–477) — pure reference/index material, no exam content, confirmed by
  heading only.

## Confidence / limitations

- Everything cited above with a specific CFR section number was read
  directly in the locally-extracted full text (not inferred, not
  summarized from a snippet) and quoted or closely paraphrased from the
  source. No claim in this report goes beyond what the text says.
- Subparts marked "spot-checked" above (160.132, 160.135, 160.151,
  160.156, 160.170, 160.174, 160.176) had their scope/definitions/opening
  sections read but were not read exhaustively line-by-line — it's
  possible each contains additional clean, quotable facts similar to the
  four found in 160.171 that this pass didn't surface. A future targeted
  pass through the "Construction" and "Performance" subsections
  specifically (skipping the administrative/approval-procedure
  subsections, which is where the exam-relevant content tends to live)
  would likely find more.
- The "potential upgrade" candidates above are genuinely uncertain calls,
  not confirmed matches — they're reported so a human (or a future task
  with explicit instruction) can decide, consistent with this project's
  practice of not auto-resolving ambiguous connections between sources.
- This is one of two candidate CFR volumes flagged in the Sea Trials
  inventory as likely Subchapter W/Q lifesaving-appliance material;
  `Document(7).PDF.pdf` (46 CFR Parts 166–199) was not inspected in this
  task and remains the natural next candidate if the inventory's
  recommendation is followed further.
