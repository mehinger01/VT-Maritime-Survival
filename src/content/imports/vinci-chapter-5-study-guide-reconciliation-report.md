# Chapter 5 Study Guide — Reconciliation Report (2026-07-18)

**Status: reconciliation complete for the draft `Chapter_5_Detailed Study
Guide.md` against the Water Survival Student Manual excerpt already on
file (`vinci-2026-07-14-chapter-5-source-intake.md`, manual pages
120-132) and the already-verified live Chapter 5 Learn Mode content and
question bank in `course.json`. This report documents every audit
finding; the reconciled content itself lives in
`src/content/studyGuides/chapter-5-signaling.json`.**

The draft guide's own sourcing was U.S. Coast Guard and IMO general
training material, explicitly not yet checked against Vinci's manual --
its own header said so. This audit is that check.

---

## Method

Every factual claim, number, range, and procedural distinction in the
draft was compared against:

1. The live, manual-confirmed `chapter-5-signaling` Learn Mode content
   in `course.json` (built and reconciled across three prior sessions).
2. The live `chapter-5-signaling` question bank (59 questions, all
   manual- or CFR/Vinci-quiz-sourced).
3. `vinci-2026-07-14-chapter-5-source-intake.md` (the direct manual
   transcription, pages 120-132).
4. `vinci-chapter-5-loose-ends-report.md` (direct visual confirmation of
   manual pages 121, 123, and 129 from a prior session).
5. A full-question-bank search (all chapters, not just Chapter 5) for
   claims that might be confirmed elsewhere in this course (general
   alarm / whistle signal patterns).

No new OCR or Drive access was performed for this task -- only
comparison against material already on file.

---

## Statements confirmed (manual-confirmed, no change needed)

- VHF Channel 16 used first for the emergency; Channel 6 for SAR
  communications.
- EPIRB stowage, NOAA registration, 406 MHz/121.5 MHz frequencies,
  48-hour minimum transmit, monthly test.
- SART X-Band/9 GHz radar detection, 12-dot/arc radar pattern, 96-hour
  standby battery, 5-mile (1m height) / 30-mile (aircraft at 3,000 ft)
  detection range.
- Table of Lifesaving Signals (landing-place and shore-apparatus
  signals), vertical/green = affirmative, horizontal/red = negative.
- International distress signal list (Mayday, continuous fog signal,
  red star rockets, orange smoke, arm-waving, radiotelephone alarm
  signal, EPIRB signals, N.C. flag, square-flag-and-ball, white light
  50-70 flashes/min).
- Pyrotechnic firing technique direction (downwind, leeward side).
- Whistle range (4 miles favorable conditions vs. a few hundred yards
  for the voice), dye marker (any color), radar reflector (mount high).
- Signaling mirror technique (flash continuously around the horizon,
  daylight-only).
- General emergency alarm signal (seven or more short blasts followed
  by one long blast) -- confirmed via `q-ep-4` (Chapter 1), not
  Chapter 5 material specifically, but already live and course-verified.

## Statements corrected (draft conflicted with verified content; manual used as primary source)

| # | Draft claim | Correction | Why |
|---|---|---|---|
| 1 | Radar SART "typical detection range of roughly 12-15 miles" | Removed as a Must Remember fact; replaced with the manual-confirmed 5 miles (1m height) / 30 miles (aircraft, 3,000 ft) | The draft's figure isn't in Vinci's manual and could read as contradicting the manual's own stated standard, which is what's tested live (`q-ch5man-sart-range-standard`). |
| 2 | Parachute flare burns "45-60 sec" | Corrected to "at least 40 seconds" (open-ended minimum, no stated upper bound) | Manual/live content (`q-ch5man-red-rocket-parachute-flare-specs`) states a minimum, not a bounded range. |
| 3 | Orange smoke burns "about 2-5 min" | Corrected to "at least 3 minutes in calm water" | The draft's 2-minute lower bound is *below* the manual's stated minimum (`q-ch5man-buoyant-smoke-specs`) -- this was the one correction with real potential to mislead a student into under-timing a signal. |
| 4 | Pyrotechnic firing angle "60-80 degrees above the horizon" | Corrected to "about 60 degrees above the horizon, angled slightly over the water" | Manual/live content (`q-ch5man-pyrotechnic-firing-technique`) gives one specific angle, not a range. |
| 5 | General alarm table row implied a continuous alarm bell *or* a continuous whistle blast, either alone, both mean "fire and emergency" | Corrected to match already-live content: a continuous whistle blast *alone* means the ship is in distress; the alarm bell *plus* whistle *together* (10+ sec each) specifically means fire or general emergency -- two distinct signals | This is the most significant finding. The already-live Learn Mode content explicitly calls this exact conflation out as a confusion trap (`q-quiz1a-continuous-blast-distress` vs. `q-quiz6-generalalarm-continuoussignal`), and the draft repeated the mistake it warns against. |

## Statements removed (not carried into the reconciled guide as Must Remember facts)

- Hand flare burn time upper bound ("1-2 min") -- kept the manual-confirmed minimum ("at least 1 minute"), dropped the unconfirmed 2-minute ceiling.
- The specific 12-dot spacing figure ("about 0.64 nautical mile") -- not in the manual excerpt; kept in the guide only as an explicitly-flagged, needs-review supplementary detail, not a core fact.
- "Person overboard = three long blasts repeated at least four times" -- not found anywhere in this course's live content or the manual excerpt (see Source Gaps below); not presented as a Must Remember fact.

## Statements still uncertain (kept in the guide, explicitly tagged `needs-review` or `official-source-supported`, not presented as manual-confirmed)

- DSC/MMSI configuration and radio control layout (power/volume, squelch, PTT, etc. as discrete controls).
- PAN-PAN / SECURITE hierarchy and the full 7-step MAYDAY call script (the manual excerpt only confirms the phrase "Mayday, mayday, mayday" on Channel 16, not the expanded procedure).
- MAYDAY RELAY procedure.
- Category 1 vs. Category 2 EPIRB distinction; PLB vs. EPIRB comparison.
- EPIRB maintenance intervals (HRU 2-year, battery 5-year, registration 2-year) -- the draft itself already flagged this one appropriately; kept flagged.
- AIS-SART (entire device/section) -- not present anywhere in the manual excerpt, which covers only radar SART.
- Meteor flare (entire entry) -- not present in the manual excerpt, which covers only the parachute flare, hand flare, and smoke.
- Signal mirror's "50 miles" visible-range claim; whistle's "3-5x louder than the voice" claim -- both are USCG-sourced supplementary figures with no manual equivalent to check against.
- Strobe/steady lights, chemical light sticks, retroreflective tape, handheld VHF as a distinct device, Navigation Rules light-signal guidance, "Bigger/Brighter/Different" framing, the four-stage Alert/Locate/Identify/Guide sequence -- none of this appears in the manual excerpt at all.

## Conflicts with existing Learn Mode or question-bank content

Only one true conflict was found (see correction #5 above: the general-alarm/whistle-signal conflation). Everything else in the "corrected" table was a numeric mismatch against the manual's specific figures, not a conflict with a different established fact.

## Source gaps requiring further review

1. **DSC, PAN-PAN/SECURITE, the full MAYDAY script, and MAYDAY RELAY** are real, correct USCG procedure, but do not appear in the 13 pages of Vinci's manual currently on file (pages 120-132). Worth asking the instructor whether these are covered elsewhere in the full manual, or whether they're out of scope for this course's exam.
2. **AIS-SART** is not in the manual excerpt at all -- confirm whether it's part of this course.
3. **Meteor flares** are not in the manual excerpt -- confirm whether this device is carried/tested in this course, since the manual's Chapter 5 only discusses the parachute flare and hand flare.
4. **General alarm requirements and inspection intervals** (activation point, audible/visual alarm devices, weekly inspection while underway) are not in the Chapter 5 excerpt -- may belong to a different manual chapter not yet reviewed.
5. **"Person overboard = three long blasts x4"** could not be confirmed or denied against any material currently on file. Do not treat as verified until found in the manual or an existing Vinci quiz source.
6. **EPIRB maintenance intervals** (HRU/battery/registration replacement schedules) need the actual device label and/or a later manual page to confirm.

None of these gaps block Chapter 5 Learn Mode or the live question bank, which remain unaffected by this task. They only affect which parts of the new Study Guide content can be labeled manual-confirmed.

---

## Outcome

- 6 of 15 guide sections are now `source-backed-study` or contain no unconfirmed claims (Sections 11, 14, 15, and the confirmed portions of 2, 6, 7).
- The remaining sections mix manual-confirmed facts with clearly-tagged `official-source-supported`/`needs-review` material -- nothing in the guide is presented as manual-confirmed unless it actually is.
- No corrections were needed to `course.json`'s live Learn Mode content or question bank -- this reconciliation only affected the new, not-yet-published study-guide content.
- Chapter 5 is being enabled in the Study Guide screen following this reconciliation (see commit history) -- every remaining unconfirmed claim stays visibly tagged in the UI via the same status-badge system already used for questions, so a student can see at a glance what's manual-confirmed versus what's still pending review.
