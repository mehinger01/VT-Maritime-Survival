# Chapter 5 Signaling — Device & Signal Comparison Table

**Status: student-facing study reference, supplementing the in-app
Chapter 5 Learn Mode content. Not a question-bank file — no question was
created, edited, or promoted to produce this document, and it does not
change `course.json`'s live question count.**

This table is meant to be read alongside the in-app "VHF Survival Craft
Transceiver," "Electronic Distress Beacons — EPIRB vs. SART," "Signals
to Communicate From Shore & the Table of Lifesaving Signals," and
"Signaling Devices" Learn Mode sections. It condenses the same sourced
facts into one side-by-side reference for quick review before a quiz or
the real exam.

| Device / Signal | Main Purpose | Best Use Case | Key Exam Detail | Common Confusion Trap |
|---|---|---|---|---|
| **VHF radio (SCT)** | Direct two-way voice communication with a nearby rescuer | Once a vessel or aircraft is known to be nearby — not for long-range alerting | Channel 16 first for the emergency; channel 6 for ongoing SAR communications; 8-hour battery, watertight 1 m/5 min | Turning it on "just in case" instead of only when a rescuer is known nearby — wastes limited battery |
| **EPIRB** | Alerts the world, via satellite, that you're in distress and roughly where | Any time — works even if no one is nearby yet; the first alert that starts a search | 406 MHz/5 W to satellites + 121.5 MHz local homing signal; must transmit ≥48 hours; COSPAS-SARSAT, ~45 min average detection | Confusing it with a SART — EPIRB is satellite-based and long-range, not shipboard-radar-based |
| **SART** | Helps an already-nearby ship's radar find your exact position | Once a search is already underway and a vessel is closing in | Detected on 9 GHz X-Band radar as 12 blips turning into arcs; 96-hour standby battery; range ≥5 miles at 1 m height (30 miles from an aircraft at 3,000 ft) | Confusing it with an EPIRB — SART needs a nearby ship's own radar, it doesn't broadcast to satellites |
| **SOS / Morse code** | A universally recognized coded distress pattern | Whenever you have a way to send Morse (radio, light, sound, or ground marking) but not necessarily voice | Pattern is three dots, three dashes, three dots (`. . . – – – . . .`); the code/medium are separate — same SOS pattern, many possible carriers | Confusing SOS with other Morse code letters used elsewhere in this chapter for different meanings (K = "best place to land," S alone = "landing dangerous") |
| **Signaling mirror** | Reflects sunlight to catch a distant rescuer's attention | Sunny daylight, especially before you've been spotted — flash continuously around the whole horizon | Daylight-only; reusable indefinitely, unlike a flare | Waiting to see the rescuer first, instead of flashing proactively — an aircraft can often see the flash before you can see the aircraft |
| **Red rocket parachute flare** | High-altitude visual signal for a distant vessel | Vessel is visible far off on the horizon | Reaches ~1,000 ft, burns ≥40 seconds, drifts as it descends | Confusing it with a hand flare — the parachute flare does NOT mark your exact position, since it drifts |
| **Hand flare** | Marks your exact position for a spotted rescuer | Aircraft (or vessel) has already spotted you and needs your precise location | Burns ≥1 minute, continues burning 10 seconds after water immersion, stays at your position | Confusing it with a parachute flare — the hand flare does not go to altitude or drift |
| **Buoyant smoke signal** | High-visibility daylight signal, especially useful for aircraft | Daylight only, when a rescuer (especially airborne) needs a highly visible marker | Must be orange; burns ≥3 minutes in calm water, continues 10 seconds after immersion | Assuming it works at night — smoke is invisible once it's dark |
| **Dye marker** | Colors the water around you for close-range/overhead visibility | Rescuer is already close or directly overhead and needs visual confirmation of your position | Any color is a recognized distress signal (unlike smoke, which must specifically be orange) | Confusing it with the smoke signal's strict orange-only requirement |
| **Whistle** | Long-range audible signal, reusable indefinitely | Any time — day, night, or fog, whenever a rescuer might be in earshot but not sight | Heard up to 4 miles away in favorable conditions, versus only a few hundred yards for a shouting voice | Underestimating its range compared to your own voice, or assuming it only works in specific conditions |
| **Radar reflector** | Helps a ship's radar detect your raft even without an active signal | Continuously, once aboard a liferaft — a passive, always-on aid | Rubber liferafts don't reflect radar well on their own; mount as high as possible to improve detection range | Assuming a liferaft is automatically visible on radar without one rigged |

## How to use this table with a scenario question

1. **Identify what's actually being asked**: is the question about *getting found in the first place* (EPIRB), *guiding a nearby rescuer the rest of the way* (SART, radar reflector), *actively signaling a spotted rescuer* (mirror, flares, smoke, dye, whistle), or *talking directly to someone nearby* (VHF)?
2. **Check the time-of-day constraint**: mirrors and buoyant smoke are daylight-only. Everything else in this table works regardless of time of day.
3. **Check whether you've already been spotted**: if not yet spotted, favor a mirror (day) or continue with what's already broadcasting (EPIRB, SART). If already spotted but still far away, favor a parachute flare. If already spotted and close, favor a hand flare or dye marker.
4. **Watch for swapped numbers**: this chapter has several devices with similar-sounding duration/range figures (EPIRB's 48-hour transmit vs. SART's 96-hour standby; a whistle's 4 miles vs. a SART's 5-mile minimum range). Read carefully for which device a figure actually belongs to.

## Source

Built from `src/content/imports/vinci-2026-07-14-chapter-5-source-intake.md`
(Water Survival Student Manual, Chapter 5, pages 120–132) and the live
Chapter 5 question bank in `src/content/course.json`. No new facts were
introduced beyond what's already documented in the source intake and
reflected in the in-app Learn Mode content and live questions.
