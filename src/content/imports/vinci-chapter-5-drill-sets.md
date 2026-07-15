# Chapter 5 Targeted Drill Sets (Recommended Groupings of Existing Questions)

**Status: drill-set recommendations only. Every question ID below
already exists live in `src/content/course.json` — no question was
created, edited, or promoted to produce this document. These are
suggested groupings for focused practice, not a new content type or a
change to the app's data model.**

Each drill set below groups existing Chapter 5 question IDs around one
specific point of confusion, so a student (or the app, if this pattern
is ever wired into a "drill mode" UI) can practice just that distinction
in a short, focused round rather than the full 59-question chapter pool.

---

## 1. EPIRB vs. SART

**Purpose:** This is the single most commonly confused pair in Chapter
5 — two different electronic beacons that both help rescuers find you,
but work on completely different principles (satellite vs. shipboard
radar).

**Related concepts:** satellite-based long-range alerting vs.
radar-based short-range homing; COSPAS-SARSAT; X-Band radar; float-free
stowage; battery duration figures that sound similar but mean different
things (transmit time vs. standby time).

**Recommended existing question IDs:**
`q-sig-1`, `q-sig-2`, `q-sig-4`, `q-quiz1a-sart-know-searching`,
`q-cfr-epirb-monthly-test`, `q-ch5man-epirb-two-frequencies`,
`q-ch5man-epirb-transmit-duration`, `q-ch5man-epirb-deployment-procedure`,
`q-ch5man-sart-radar-band`, `q-ch5man-sart-deployment`,
`q-ch5man-sart-standby-battery`

**Misconception this drill corrects:** Treating "EPIRB" and "SART" as
interchangeable terms for "the emergency beacon thing." Students often
recall that both devices exist and both matter, without being able to
say which one a given fact (a frequency, a range figure, a duration)
actually belongs to. This drill forces the EPIRB=satellite/
SART=shipboard-radar split to stick.

---

## 2. VHF Channel 16 vs. Channel 6

**Purpose:** A narrower, single-device drill on getting the two-channel
system right — which channel opens the emergency, and which one carries
the conversation that follows.

**Related concepts:** VHF survival craft transceiver requirements and
specs; "Mayday" radiotelephone procedure; battery/watertight limits;
when the radio should (and shouldn't) be turned on.

**Recommended existing question IDs:**
`q-sig-3`, `q-ch5man-vhf-radio-count`, `q-ch5man-vhf-channel-purposes`,
`q-ch5man-vhf-specs`, `q-ch5man-vhf-when-to-turn-on`,
`q-ch5man-vhf-nicad-battery`, `q-cfr-mayday-radiotelephony`

**Misconception this drill corrects:** Assuming channel 16 is used for
everything, or reversing which channel is for the initial alert versus
ongoing SAR coordination. Also corrects the instinct to leave the radio
on continuously "to be safe," when the correct guidance is the opposite.

---

## 3. Visual vs. Audio vs. Electronic Signals

**Purpose:** A categorization drill — before a student can choose the
*best* signal in a scenario, they need to correctly sort the available
options into visual (seen), audible (heard), and electronic
(radio/satellite-based) categories, since each category has different
range, weather-dependence, and equipment tradeoffs.

**Related concepts:** signal range and weather limitations; conserving
limited-use devices; why an audible signal sometimes beats a visual one
(fog, darkness) and vice versa.

**Recommended existing question IDs:**
`q-sig-5`, `q-sig-6`, `q-sig-9`, `q-sig-10`, `q-sig-11`,
`q-ch5man-signaling-mirror-technique`, `q-ch5man-whistle-range`,
`q-cfr-armwave-distress`, `q-cfr-orangesmoke-distress`,
`q-cfr-mayday-radiotelephony`, `q-cfr-sos-morse-distress`,
`q-ch5man-distress-radiotelephone-alarm`

**Misconception this drill corrects:** Defaulting to "use the most
dramatic-sounding signal" rather than reasoning about which *category*
of signal actually fits the conditions (e.g., choosing a visual flare
when fog or darkness makes an audible signal the better first choice).

---

## 4. Smoke vs. Dye Marker vs. Flare (Hand vs. Parachute)

**Purpose:** The densest cluster of specific, easily-swapped figures in
this chapter — four devices (smoke, dye marker, hand flare, parachute
flare) that are all "fire it and it becomes visible," but differ sharply
in range, duration, color rules, and day/night limitations.

**Related concepts:** daylight-only vs. day-or-night devices; "already
spotted vs. not yet spotted" scenario reasoning; correct pyrotechnic
firing technique and safety.

**Recommended existing question IDs:**
`q-sig-5`, `q-sig-6`, `q-sig-8`, `q-ch5man-buoyant-smoke-specs`,
`q-ch5man-distress-dye-marker`, `q-ch5man-red-rocket-parachute-flare-specs`,
`q-ch5man-handflare-vs-parachuteflare`, `q-ch5man-pyrotechnic-firing-technique`

**Misconception this drill corrects:** Treating all four devices as
generic "make yourself visible" tools rather than matching each to its
specific best moment — especially confusing the parachute flare (drifts,
best for a distant target) with the hand flare (stays put, best once
already spotted and close), and forgetting that smoke is orange-only and
daylight-only while a dye marker has no color restriction.

---

## 5. Distress Signals and Recognition (the full 16-item list)

**Purpose:** A comprehensive recognition drill covering the full set of
internationally recognized distress signals — intentionally the largest
drill in this set, since it maps directly to the manual's own 16-item
list and benefits from being reviewed as a complete set rather than in
pieces.

**Related concepts:** the "closed list" principle (a signal either is or
isn't on the recognized list — invented-sounding signals are common
exam traps); visual, audible, and radio signals side by side.

**Recommended existing question IDs:**
`q-cfr-gunsignal-distress`, `q-cfr-mayday-radiotelephony`,
`q-cfr-sos-morse-distress`, `q-cfr-nc-flag-distress`,
`q-ch5man-nc-flag-appearance`, `q-cfr-squareflag-ball-distress`,
`q-cfr-orangesmoke-distress`, `q-cfr-armwave-distress`,
`q-cfr-whitelight-flash-distress`, `q-ch5man-distress-fogsignal-continuous`,
`q-ch5man-distress-flames-barrel`, `q-ch5man-distress-aerial-orange-canvas`,
`q-ch5man-distress-radiotelephone-alarm`, `q-ch5man-distress-dye-marker`,
`q-quiz1a-continuous-blast-distress`, `q-quiz6-generalalarm-continuoussignal`

**Misconception this drill corrects:** Assuming any sufficiently
alarming-sounding action counts as a "distress signal." The recognized
list is specific and closed — this drill trains recognition of the
actual 16 items (plus the two ship's-whistle-based signals that sit
alongside them) rather than plausible-sounding invented alternatives.

---

## 6. Rescue Aircraft / Shore Communication Signals

**Purpose:** The two-way signals used once a shore party or aircraft is
actively coordinating with survivors — landing guidance from shore, and
directing/dismissing maneuvers from an aircraft.

**Related concepts:** vertical/green = good news vs. horizontal/red =
danger (the same visual grammar reused across two different signal
families in this chapter); an aircraft's course-crossing maneuvers.

**Recommended existing question IDs:**
`q-quiz1a-redstar-signal`, `q-ch5man-shore-signal-bestplace-land`,
`q-ch5man-shore-signal-dangerous-landing`,
`q-ch5man-shore-signal-better-direction`,
`q-ch5man-aircraft-directs-vs-dismisses`, `q-sig-10`, `q-sig-11`

**Misconception this drill corrects:** Confusing which direction (right
vs. left, ahead vs. astern) a signal is describing, and whose point of
view it's described from — these shore/aircraft signals are precise
about perspective in a way that's easy to get backwards under exam
pressure.

---

## Notes for whoever wires this into the app (future task, not this one)

- These groupings are pure metadata recommendations — they don't require
  any change to the question schema. If a future "drill mode" feature is
  built, each drill set here could become a filter (`ids: [...]`) with
  no new question content needed.
- Several question IDs appear in more than one drill set (e.g., `q-sig-5`
  appears in both the visual/audio/electronic drill and the smoke/dye/
  flare drill) — this is intentional, since the same question can serve
  more than one review purpose.
- `q-ch5man-shore-apparatus-signals` (currently held, not live — see
  `vinci-2026-07-14-chapter-5-promotion-review.md`) is not referenced in
  any drill set above, since it isn't live yet.
