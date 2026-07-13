# Learn Mode Coverage Audit (2026-07-13)

**Status: audit only. No Learn Mode content was written or edited, no
question was created or promoted, and `course.json` was not touched in
this task.**

## Current Learn Mode: how it actually works

Learn Mode lives in `src/screens/LearnMode.jsx`. Content is not a
separate file — it's the `learn` object nested on each entry in
`course.json`'s `topics` array (one topic per chapter). Each topic has:

```
topic.learn.concept       -- a single paragraph, shown at the top
topic.learn.keyPoints     -- an ordered array, revealed one at a time
```

Each `keyPoints` entry is one of two shapes, and the component branches on
`typeof`:

- **A bare string** — rendered as a dim placeholder box with the literal
  label "(placeholder — not yet sourced)". This is a subtopic heading
  that has been identified as worth teaching but has no real content
  behind it yet.
- **A rich object** — `{ title, explanation, keyFacts[], confusionTraps[],
  examWatchFor[], sourceReferences[], confidence, image?, imageAlt? }`,
  rendered as a full teaching card with a confidence pill, key-facts list,
  a "common confusion traps" box, a "watch for this on the exam" box, and
  a source citation line.

The UI is progressive-disclosure by design (`Reveal Next Key Point`
button) — this already matches the learning-science goals in this
project's CLAUDE.md. The gap isn't the mechanism, it's the content: most
`keyPoints` entries across the app are still bare-string placeholders.

## Chapter-by-chapter coverage status

| Chapter | Live questions | keyPoints total | Rich | Placeholder | % taught |
|---|---:|---:|---:|---:|---:|
| 1 — Planning Ahead | 42 | 5 | 2 | 3 | 40% |
| 2 — Using Lifeboats | 113 | 24 | 13 | 11 | 54% |
| 3 — Using Liferafts | 36 | 12 | 0 | 12 | **0%** |
| 4 — Survival Methods | 21 | 17 | 0 | 17 | **0%** |
| 5 — Signaling | 25 | 8 | 0 | 8 | **0%** |
| 6 — Being Rescued | 15 | 4 | 0 | 4 | **0%** |
| Appendix A — Glossary | 10 | 1 | 0 | 1 | **0%** |
| **Total** | **262** | **71** | **15** | **56** | **21%** |

Four of seven topics — covering 107 of the 262 live questions (41%) —
have **zero** real Learn Mode content. Every `keyPoints` entry in
Chapters 3, 4, 5, 6, and the Glossary is still the bare placeholder
string.

Where content does exist (Chapters 1 and 2), it's genuinely
high-quality: specific, CFR-cited where appropriate, includes exam traps
and confusion pairs, and — checked directly against the live question
bank — I found no place where existing rich Learn Mode content
contradicts a live question. (Spot-checked: Chapter 1's Certificate-of-
Inspection/lifeboatmen block correctly states COI as the source, with no
mention of Station Bill/SOLAS — consistent with the live
`q-quiz1a-coi-lifeboatmen-source` question and the Q24 contradiction that
was deliberately *not* drafted during Quiz 4 processing. Chapter 2's
"Design, Construction, and Performance" and "Rescue Boats" blocks already
cite 46 CFR 160.135, matching this course's actual regulatory source.)

## Question-heavy topics with weak instruction

Ranked by how much tested material currently has no teaching behind it:

1. **Chapter 3 — Using Liferafts**: 36 questions, 0% taught. The single
   largest fully-blank chapter.
2. **Chapter 5 — Signaling**: 25 questions, 0% taught — despite already
   being the *best-sourced* chapter by verification status (9 of 25 live
   questions are `source-backed-study`, i.e., CFR-corroborated). The
   material is ready to teach; nobody's written it yet.
3. **Chapter 4 — Survival Methods**: 21 questions, 0% taught, including 5
   live immersion-suit questions and cold-water/swimming survival facts.
4. **Chapter 2 — Using Lifeboats, davit/launching cluster specifically**:
   Chapter 2 overall is 54% taught, but the *davit and launching-gear*
   subtopics are the exception — 5 of its 11 remaining placeholders
   ("Davits and Winches," "Common Features of Davit Systems," "Types of
   Davits," "Launching a Lifeboat from a Gravity Davit," "Retrieving the
   Lifeboat") sit on top of at least 13 directly davit-related live
   questions (governor speed, hand-crank sequencing, limit switches,
   frapping lines, gravity-davit prevalence) plus the still-held
   safety-factor question — making this the single most-tested untaught
   cluster in the highest-question-count chapter in the app.
5. **Chapter 6 — Being Rescued**: only 15 questions, but 0% taught and
   entirely procedural (helicopter hoist, medevac) — a small chapter
   where even a first pass would close the whole gap.

## Top 10 missing teaching blocks (ranked by exam weight × gap severity)

1. **Chapter 3, entire chapter** (liferafts) — 36 untaught questions, no
   single subtopic to start with; needs a full first pass.
2. **Chapter 2 — Davits, Winches & Gravity-Davit Launching** — 13+
   directly-tied live questions, the highest-density untaught cluster in
   the app.
3. **Chapter 4 — Immersion Suits** — 5 live questions today, plus 4
   additional clean, CFR-cited facts already documented in the
   Document(6) source map (`vinci-2026-07-08-cfr-document-6-source-
   intake.md`) that aren't questions yet but are ready to teach as
   context even before they're drafted.
4. **Chapter 5 — Table of Lifesaving Signals / International Distress
   Signals** — at least 8 distinct, precisely-worded distress-signal
   facts (Mayday, SOS in Morse, orange smoke, white-light flash rate,
   gun-signal interval, square-flag-and-ball, arm-waving, continuous
   bell/whistle) tested individually with zero unifying reference table.
5. **Chapter 3 — Liferaft Launching Procedures** (davit / automatic /
   manual) — the procedural-sequencing half of the liferaft gap, distinct
   enough from raft-design facts to call out on its own.
6. **Chapter 6, entire chapter** (being rescued) — small (15 questions)
   but 0% taught; helicopter hoist procedure especially benefits from
   step-by-step teaching given how error-prone real hoist sequences are.
7. **Chapter 2 — Retrieving the Lifeboat** — the recovery-side companion
   to the well-taught launching material; currently the only
   "launch-and-recovery" placeholder without a natural home once davits
   are written.
8. **Chapter 3 — Righting the Capsized Raft / Boarding the Liferaft** —
   safety-critical procedural content, currently untaught.
9. **Chapter 2 — Navigating by Compass** — only 4 tied questions, but one
   of them (`q-ch2-compass3way-vh`) already tests a three-way
   compare/contrast (error/variation/deviation) that has zero supporting
   Learn Mode content anywhere in the app.
10. **Chapter 4 — Cold Water Survival / Swimming for Survival** — bundles
    several precise, quotable facts (45°-across-current swimming angle,
    oil-fire windward water entry, the CFR cold-water thermal-protection
    limit) that are currently three separate blank placeholders.

## Top misconception / compare-contrast blocks to build

These are recurring concept clusters where live questions already test
*distinctions* between similar-sounding things, but Learn Mode never
teaches the comparison directly — exactly the "Compare & Contrast"
methodology called for in this project's CLAUDE.md:

1. **Davit types** — gravity (most common, one-person-operated, governed
   by a centrifugal-brake governor at 120 ft/min) vs. mechanical
   (hand-cranked) vs. roller gravity (has the limit switch) vs. free-fall
   (no oars required). Four types, four distinct tested facts, zero
   unifying comparison today.
2. **Rowing/oar commands** — "Hold water all" (stop way), "Way enough"
   (finish stroke, stow oars), "Backwater all" (reverse), "Out oars"
   (reposition to gunwales). Currently only implicit in one question's
   wrong-answer misconceptions; a natural four-way comparison table.
3. **Sea painter vs. tricing pendant vs. painter (general)** — three
   different lines with three different jobs (keep the boat connected/
   controlled during launch; hold the boat snug against the hull for
   boarding, released *after* waterborne; general controlling line
   concept). Currently scattered across 7 live questions with no
   unifying explanation of why there are three different lines at all.
4. **Immersion suit vs. Thermal Protective Aid (TPA) vs. Anti-Exposure
   Suit** — already directly tested
   (`q-ch1-vocab-immersionsuit-tpa-compare-medium`), and Chapter 4 lists
   "Immersion Suits" and "Anti-Exposure Suit" as two *separate* untaught
   placeholders rather than one compare block — worth merging into a
   single three-way comparison when written.
5. **Compass error vs. variation vs. deviation** — already tested
   (`q-ch2-compass3way-vh`) with zero Learn Mode support anywhere.
6. **Distress signal reference table** — 8 distinct recognized distress
   signals (see item 4 in the missing-blocks list above) are natural
   material for one consolidated table rather than isolated facts.
7. **EPIRB vs. SART vs. VHF Survival Craft Transceiver** — three
   signaling devices, three distinct purposes, three separate untaught
   placeholders (5 live questions combined).
8. **Lifeboat self-righting vs. non-self-righting** — already well
   taught in Chapter 2's "Lifeboat Types" rich block, but the connection
   to the still-blank "Types of Davits" placeholder (which davit types
   pair with which lifeboat types) isn't cross-referenced — worth linking
   when the davit block is written rather than re-explaining from
   scratch.
9. **Davit-launched liferaft vs. lifeboat launching** — liferaft davit
   launching (Chapter 3, blank) and lifeboat davit launching (Chapter 2,
   partially taught) risk being written independently and drifting
   inconsistent if built in isolation from each other.
10. **The "safety factor" concept, once it has a live question** — not
    yet testable (the only candidate, `q-quiz4-safetyfactor-launchinggear`,
    is still held back with an unconfirmed reading of "3"), but the CFR
    Document(6) source map found a *confirmed* release-mechanism safety
    factor of **six** (46 CFR 160.133(b)(11)) for a related-but-different
    component. Whoever eventually resolves the held question and writes
    this Learn block should use the CFR-confirmed figure for whatever
    component it actually applies to, not silently reuse the unconfirmed
    "3" — flagging this now so it isn't missed later.

## Recommended first 3 Learn Mode modules to write

1. **Immersion Suits & Thermal Protection** (Chapter 4). Best
   effort-to-value ratio of anything in this audit: 5 live questions
   already exist, 4 more clean CFR-cited facts are pre-researched and
   ready to cite (jump height, donning time, thermal-protection window,
   coverage/color), and it naturally absorbs the TPA/anti-exposure-suit
   compare block. Almost no new research required — just writing.
2. **Davits, Winches & Gravity-Davit Launching** (Chapter 2). The
   highest-density untaught cluster in the app (13+ tied questions),
   sitting in the single biggest chapter. Closing this gap also unblocks
   "Retrieving the Lifeboat" and the davit-type compare/contrast block,
   and gives a natural home for the CFR release-mechanism facts
   (two-deliberate-actions requirement; the unresolved safety-factor
   question).
3. **Signaling & Distress Signal Reference Table** (Chapter 5). 25
   questions, the chapter with the *most* CFR corroboration already
   (`source-backed-study` on 9 of 25) but zero Learn Mode teaching. The
   material is naturally table-shaped and well suited to the existing
   progressive-disclosure UI — a strong second win after immersion suits,
   and doesn't depend on any other module being written first.

## Is any current Learn Mode content outdated, thin, or inconsistent?

- **Outdated or factually wrong: none found.** Every rich block spot-
  checked against the 262 live questions was consistent with them, and
  the two blocks most likely to have drifted (Chapter 1's COI/lifeboatmen
  fact, given the known Q24 contradiction; Chapter 2's CFR-cited lifeboat
  design specs) were both confirmed correct and appropriately scoped.
- **Thin: yes, structurally.** 79% of all `keyPoints` slots across the
  app (56 of 71) are still bare placeholders, and 4 of 7 chapters have
  no real content at all. This isn't a quality problem with what exists —
  it's an unfinished-coverage problem.
- **Inconsistent: none found**, but this audit did not read every rich
  block against every tied question line-by-line (see Confidence /
  Limitations below) — only representative spot-checks in Chapters 1 and
  2, since those are the only chapters with rich content to check.

## How CFR Document(6) should — and should not — be used in Learn Mode

**Should:**

- Use it as **source support for a plain-English mental model**, the same
  way Chapter 2's existing rich blocks already cite 46 CFR 160.135 —
  state the practical fact and rule first ("an immersion suit has to let
  you jump in from about 15 feet without hurting you or damaging the
  suit"), then attach the citation as a small `sourceReferences` line,
  not as the explanation itself.
- Pull the four already-identified clean facts directly into the
  Immersion Suits module: jump height (4.5 m / ~15 ft), donning time
  (2 minutes), thermal-protection limit (core temp drop ≤2°C over 6
  hours in 0–2°C water), and the release-mechanism two-actions
  requirement for the Davits module.
- Use it to explain *why* a rule exists where that's genuinely
  illuminating (e.g., the two-deliberate-actions release requirement
  exists specifically to prevent an accidental release while the boat is
  still loaded and hanging — that's a "why," not just a "what," and
  belongs in Learn Mode).

**Should not:**

- Copy CFR section language verbatim into `explanation` or `keyFacts`
  text. The source document is written for manufacturers and regulators
  (approval procedures, materials specs, independent-laboratory testing
  protocols) — that register doesn't belong in front of a student
  studying for an exam about what to *do* in an emergency.
- Treat every fact found in the source map as Learn Mode content just
  because it's precisely cited. Most of Part 160's text (materials
  sourcing, welding certification, quality-control recordkeeping,
  marking/labeling procedures) has no exam or survival relevance at all
  and should stay out of Learn Mode entirely, exactly as the source map
  itself flagged those sections as "skipped as irrelevant."
- Use the CFR citation to silently resolve the held safety-factor
  question. The CFR source map found a safety factor of *six* for a
  release mechanism's load-carrying parts specifically — a different
  component than what the held Vinci question ("Minimum Safety Factor...
  for all lifeboat launching gear") describes. Learn Mode content
  written later should not casually cite "3" (the held question's
  unconfirmed reading) as if it were CFR-backed, nor should it silently
  substitute "6" without resolving which component the original question
  actually meant.

## Confidence / limitations

- All question counts and coverage percentages above were computed
  directly from `src/content/course.json` (262 live questions, 7 topics),
  not estimated.
- The "davit cluster = 13+ questions" and similar cluster counts use
  keyword matching against question prompts (e.g., "davit," "painter,"
  "compass," "immersion suit") — this catches direct mentions but may
  undercount questions that test the same concept without using the
  keyword in the prompt itself (e.g., a question about hand-cranking that
  never says "davit"). Treat cluster counts as a reasonable floor, not an
  exact figure.
- The "no contradictions found" conclusion in Chapters 1–2 is based on
  spot-checking specific rich blocks most likely to have drifted (given
  known contradiction history from Quiz 4), not an exhaustive line-by-
  line read of every rich block against every tied question.
- This audit did not open or re-verify the earlier (pre-this-session)
  Sea Trials CFR work already reflected in live questions
  (`q-cfr-suit-jumpheight`, `q-cfr-suit-coverage`,
  `q-cfr-suit-color-vividorange`, `q-cfr-release-two-actions` — all
  `source-backed-study`, sourced from `vinci-2026-07-08-sea-trials-
  source-intake.json`, dated 2026-07-11/12). Their existence is noted
  here because it directly raises the value of writing the Immersion
  Suits and Davits/Release-Mechanism Learn Mode modules (real tested
  content is sitting untaught), but their own source-mapping accuracy
  was not re-audited in this task.
