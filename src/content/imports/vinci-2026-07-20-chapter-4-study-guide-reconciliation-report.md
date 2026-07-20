# Chapter 4 Study Guide Reconciliation Report (2026-07-20)

**Status: reconciliation audit for the staged (published: false) Chapter 4
Study Guide, `src/content/studyGuides/chapter-4-survival-methods.json`.**
This report documents exactly what the guide draws on, what it
deliberately excludes, and every conflict or uncertainty encountered while
building it.

## Sources used

- `src/content/imports/vinci-2026-07-13-chapter-4-manual-source-intake.md`
  (Water Survival Student Manual, Chapter 4, manual pages 89-119, missing
  ~page 118)
- `src/content/course.json` — 75 live Chapter 4 questions, the 14
  substantive Chapter 4 Learn Mode topics, and (for cross-chapter
  equipment facts) the Chapter 1 CFR-sourced immersion-suit questions
  (`q-cfr-suit-color-vividorange`, `q-cfr-suit-jumpheight`,
  `q-cfr-suit-coverage`)
- `src/content/imports/vinci-chapter-4-drill-sets.md` (drill-set groupings,
  used to check the guide's section structure against how the content is
  already clustered for practice)
- `src/content/imports/vinci-2026-07-20-chapter-4-completion-plan-and-question-audit.md`
  (the reviewed plan and its Part J implementation log, for the exact
  question-by-question classification this guide follows)
- CFR 46 §160.171-9 (cited via the already-live Chapter 4 Learn Mode
  "Immersion Suits & Thermal Protection" module, file reference
  `Document(6).PDF.pdf`, not independently re-fetched in this task)

## Factual areas checked

Every one of the 20 topics required by the task instructions was checked
against the manual source intake and the live question/Learn Mode content
before being written into the guide:

1. Survival priorities and the decision sequence
2. Abandoning ship (jump height, ties, stepping-off sequence)
3. Water-entry procedures and hazards (burning oil, waves, currents,
   flotation without a PFD)
4. PFDs, immersion suits, and anti-exposure suits
5. Cold Shock Response vs. hypothermia
6. H.E.L.P. and huddle positions
7. Treading water, sculling, and conserving energy
8. Man-overboard survival behavior
9. Group organization, morale, and maintaining position
10. Coast Guard search considerations
11. Drinking water and preserving body fluids
12. Seasickness and urinating after boarding
13. Food, fishing, birds, turtles, and safe foraging
14. Dealing with cold environments
15. Dealing with hot environments
16. Looking for land and interpreting breezes
17. Beaching a lifeboat, powered craft, or liferaft
18. Survival Ashore (source-incomplete, dedicated section)
19. Common exam traps and closely related distinctions (plus two
    additional required comparison tables)
20. Final Must Remember review and knowledge check

Every fact placed in a `mustRemember` or `keyFacts` entry with
`status: "source-backed-study"` was checked line-by-line against the
manual source intake's own paraphrased extraction, not against my memory
of it, before being written.

## Existing-question and Learn Mode alignment

The guide was built primarily from the **66 Chapter 4 questions** now
carrying `verificationStatus: source-backed-study` or
`official-source-supported` (confirmed programmatically against the live
`course.json` before writing): the original 40 `q-ch4man-*` questions, the
14 new questions promoted in this content cycle, the 10 legacy/quiz-derived
questions upgraded in this cycle, `q-surv-1` (corrected in this cycle), and
`q-ch4-waterrequirement-official`.

**Note on the instruction's "54" figure:** the task description referenced
"the 54 Chapter 4 questions now confirmed by the manual or an approved
official source" as the intended source pool. The actual, programmatically
verified count is **66**, not 54 — this is flagged here rather than
silently reconciled, per this project's standing practice of surfacing
discrepancies instead of picking a number quietly. The math behind 66: 40
original manual-confirmed + 14 newly promoted + 10 upgraded + 1 corrected
(`q-surv-1`) + 1 official-source (`q-ch4-waterrequirement-official`) = 66.
This report and the guide were built against the verified 66, not the
instruction's 54.

The **9 questions classified as correct-but-outside-the-manual-excerpt**
(`q-surv-3`, `q-surv-4`, `q-surv-8`, `q-surv-9`, `q-surv-11`, `q-surv-12`,
`q-quiz6-beach-landing-hightideline`, `q-quiz6-swim-strongcurrent-45deg`,
`q-quiz6-abandonship-jump-procedure`) were **not used as primary factual
support** anywhere in the guide. Two of their specific facts do appear,
but only because they're independently documented by their own approved
source, exactly as the instructions allow:

- The 45-degree rip-current-escape angle (`q-quiz6-swim-strongcurrent-45deg`)
  appears in Section 3, explicitly labeled as drawn from "Vinci's own
  class quiz material," not the manual, with a `needs-review` status on
  that specific keyFact.
- The "carry the raft past the high tide line" fact
  (`q-quiz6-beach-landing-hightideline`) appears in Section 17, same
  treatment — labeled as its own quiz-batch source, `needs-review` status,
  explicitly noting it wasn't independently located in the sampled
  Beaching Survival Craft manual pages.

The other 7 outside-excerpt questions were not cited anywhere in the
guide. Where the *general idea* behind one of them is still present (e.g.,
morale as a survival priority, related to `q-surv-12`), the guide sources
that idea to the already-live, manual-grounded Learn Mode content instead
of the outside-excerpt question — this is called out explicitly in
Section 9's source references.

All 14 substantive Chapter 4 Learn Mode topics were used as structural and
factual reference. The guide's section boundaries mostly mirror the Learn
Mode topic boundaries, with two intentional exceptions: Learn Mode's
"Abandoning Ship" content was split across the guide's Section 2
(procedure) and Section 3 (hazards) for a cleaner sequence-vs-hazard
distinction, and Learn Mode's "Organizing for Survival & Survival on the
Sea" content was split across the guide's Section 1 (priorities/sequence)
and Section 9 (organization/morale/position) for the same reason. No
Learn Mode content was altered to produce this split — the guide only
reorganizes how the same underlying facts are presented.

## Conflicts found and how they were handled

1. **Immersion-suit thermal-protection figure.** The manual states "2°-5°
   [drop] after 6 hours in 0-2°C water"; the already-live CFR-sourced
   figure states a hard cap of "no more than 2°C." This conflict was
   **not resolved** — the guide (Section 4) states only the settled CFR
   figure and explicitly notes the manual's alternate range exists without
   presenting it as confirmed. This matches how the source intake itself
   flagged this exact tension in 2026-07-13 and how it remains unresolved
   as of this report.
2. **Williamson Turn degree arithmetic.** The manual's own worked example
   ("310 degrees") doesn't check out against its own stated rule. The
   guide (Section 8) includes only the turn's directional purpose (rudder
   toward the person's side, to protect the propeller) and explicitly
   states that the degree-by-degree sequence was deliberately excluded.
3. **Cold Shock Response onset-timing tension.** The source gives two
   different hypothermia-onset framings ("10-15 minutes to several hours"
   in one passage, "up to 30 minutes" in the Cold Shock Response chart).
   The guide (Section 5) describes the four-stage progression without
   asserting one precise onset number, explicitly stating the two
   framings haven't been reconciled — the same hedge already used in this
   chapter's Learn Mode content.
4. **q-surv-1's corrected framing vs. the guide's own Section 5.** No
   conflict — the guide was written to match the corrected question
   exactly (Cold Shock Response as the true first-minute danger,
   hypothermia as the later, gradual one), and Section 20's knowledge
   check directly cross-references this correction by name.

No other factual conflicts were found between the manual source intake,
the live question bank, and the Learn Mode content while building this
guide.

## Corrections made

None of the underlying live content (`course.json`, Learn Mode) was
altered by this task. The only "correction" reflected here is that the
guide was written to be *consistent with* q-surv-1's already-corrected
framing from the prior implementation cycle — no new correction to any
question or Learn Mode content was made in this pass.

## Claims deliberately omitted

- **Marine Life / shark and jellyfish safety** (manual page ~99). This
  section has no live questions, no Learn Mode content, and the original
  source intake explicitly flagged it as lacking a citable fact base
  without a fresh, targeted re-read of the raw source. The guide does not
  mention Marine Life at all, rather than writing a thin or speculative
  section.
- **Immersion suit's "2°-5°" thermal-protection figure** — see Conflicts,
  above. Never stated as a number anywhere in the guide.
- **Williamson Turn's second-phase degree sequence** ("60 degrees...20
  degrees short of reciprocal...310 degrees") — never stated anywhere in
  the guide, per instruction.
- **Any Survival Ashore procedure** beyond the one confirmed fact already
  held in the draft pack (fresh-water digging, cited in Section 18 as
  `needs-review` and explicitly labeled as a held, non-live draft
  question, not a guide-authored fact).

## Claims marked uncertain (`needs-review`)

At the section level: Section 1 (survival-priorities framing is a
teaching synthesis, not manual-verbatim), Section 3 (the 45-degree
rip-current figure), Section 4 (the unresolved thermal-protection
figure), Section 17 (the high-tide-line fact), and Section 18 (Survival
Ashore in its entirety). At the individual-fact level within otherwise
`source-backed-study` sections: the lifeboat water-stowage figure is
tagged `official-source-supported` rather than `source-backed-study`
(Section 11), since it's CFR/NMC-sourced rather than manual-confirmed.

## Where the source intake appears incomplete

Two gaps, both already documented in the source intake and carried
forward unchanged in this guide:

1. **Missing ~page 118**, immediately before the one available Survival
   Ashore page (~119). Addressed with a dedicated, explicitly-incomplete
   Section 18 rather than any invented procedure.
2. **The page ~90/91 soft boundary** in the Abandoning Ship / PFD content.
   This didn't block any specific guide content (the facts drawn from that
   region — PFD requirements, AMVER, sea-anchor rationale — are all
   clearly attributable to their respective sections regardless of the
   exact page split), so it's noted here for completeness but didn't
   require a `needs-review` tag on any specific claim.

## How q-surv-1's corrected sequence is represented

Section 5 (Cold Shock Response versus Hypothermia) is written to match
the corrected question exactly: Cold Shock Response is presented as the
true first-minute, involuntary-reflex danger, and hypothermia is
presented as the gradual, later-developing danger — never the reverse.
Section 20's knowledge check includes a dedicated question-and-answer
pair ("In the first minute after falling into cold water, what is the
real immediate danger — and why isn't it hypothermia?") whose explanation
explicitly names this as "the exact distinction q-surv-1 was corrected to
test cleanly in this content cycle." Section 19's exam-trap comparison
table also lists this distinction as its first row.

## The four previously-held Tier 2/3 draft questions

`q-ch4man-steppingoff-blocknose`, `q-ch4man-ripcurrent-escape`,
`q-ch4man-hypothermia-onset-conservative`, and
`q-ch4man-finding-water-ashore-digging` (all still sitting in
`vinci-2026-07-13-chapter-4-manual-draft-question-pack.json` as of this
report, unresolved since 2026-07-13) **do not affect the guide's
factual content** — none of their claims were needed to write any
section, since the corresponding topics are already covered by other,
live, promoted questions (the stepping-off sequence and rip-current
direction are both covered by live `q-ch4man-*` questions with different
specific details; the hypothermia-onset hedge is handled by the guide's
own Section 5 hedge rather than by citing that specific held question).
The one exception is `q-ch4man-finding-water-ashore-digging`, which is
explicitly named in Section 18 as the held item this Survival Ashore gap
tracks — cited there as a held draft question, not as a live source.
Resolving these four questions remains outside this task's scope, as
established in the prior implementation cycle's report.

## Summary

No unresolved safety-critical factual conflict was found. Every genuine
tension in the source material (thermal-protection figure, Williamson
Turn arithmetic, Cold Shock onset timing, Survival Ashore's missing page)
is either resolved by omission (never stating the unconfirmed number) or
explicitly flagged `needs-review` rather than silently picked one way.
On that basis, this guide is a reasonable candidate for publication once
staged verification passes.
