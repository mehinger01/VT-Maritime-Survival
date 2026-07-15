# Chapter 5 Source Intake & Study Notes — Drive folder `Ch 5` (2026-07-14)

**Status: draft extraction and staging only. No question was created,
edited, or promoted; no Learn Mode content was written; `course.json`
was not touched in this task.**

## Source identity

- *Water Survival Student Manual*, SHLSOS Course No. 549, Chapter 5
  ("SIGNALING TO ATTRACT ATTENTION") — matches the app's existing topic
  title "Chapter 5 — Signaling to Attract Attention" exactly.
- Copyright line on every page: **"© 2020 The Seafarers Harry Lundeberg
  School of Seamanship, Piney Point, MD 20674"** — same 2020 edition
  already seen in the Chapter 4 manual batch, still a different data
  point from the "revised June 2024" edition referenced elsewhere in this
  repo's `contentNote`. Not resolved here, per this task's scope.
- Manual page numbers run **120 to 132**, confirmed directly from each
  page's own footer — 13 consecutive pages, no gaps.
- Drive folder: `Ch 5` (folder ID `1wwjfg17qscBUsK3hUXYxP51jRqNEnBj7`).

## A note on the Drive folder itself

The folder contains **26 file entries, but only 13 unique pages** —
every file (`2026-07-14_055653-1.jpg` through `-13.jpg`) appears twice,
with two different file IDs but identical file sizes for each pair (e.g.
both copies of `-1.jpg` are 976,596 bytes), created four seconds apart.
This reads as a duplicate-upload or double-sync artifact, not 26 distinct
pages. All 13 unique pages were read once each; the duplicate copies were
not re-read. Worth flagging to Vinci in case the double-upload was
unintentional, but it didn't affect this extraction.

## Page / section map

| Manual page | Section |
|---:|---|
| 120 | VHF Survival Craft Transceiver (SCT) |
| 121 | Emergency Position Indicating Radio Beacon (EPIRB) |
| 122 | EPIRB, continued (deployment procedure, diagram) |
| 123 | Search and Rescue Radar Transponder (SART) |
| 124 | International Morse Code (alphabet/numeral chart) |
| 125 | Signals to Communicate From Shore (start) |
| 126 | Signals to Communicate From Shore, continued |
| 127 | Aircraft Directs / Dismisses Ship from Rescue Operation |
| 128 | Table of Lifesaving Signals — Part I (landing signals) |
| 129 | Table of Lifesaving Signals — Part II (shore apparatus signals; replies to distress) |
| 130 | International Distress Signals (16-item numbered list) |
| 131 | Signaling Devices — visual signals, mirrors, flares, smoke |
| 132 | Signaling Devices, continued — whistles, radar reflector |

All 13 pages were readable. Two pages (128 and 129, the Table of
Lifesaving Signals) had noticeably rougher OCR quality than the rest of
the batch — see the dedicated OCR-uncertainty section below.

## Section-by-section extracted content

Paraphrased for brevity; short phrases are quoted only where exact
wording matters (a figure, a defined term). Full manual prose is not
reproduced here.

**VHF Survival Craft Transceiver / SCT (p.120).** Three portable
handheld radios are required on passenger ships and cargo vessels 500
gross tons and over; only two are required on smaller cargo vessels
(300–500 tons). A transceiver permanently installed in a survival craft
may count toward this requirement. The radios operate on two channels:
**VHF channel 16 (156.8 MHz)**, used first in an emergency, and
**channel 6**, used for search-and-rescue communications with the Coast
Guard and aircraft. Radios are designed for unskilled operators within
sight of a rescue craft, and should **not** be turned on unless a vessel
or aircraft is known to be nearby. Watertight to 1 meter for 5 minutes;
battery capacity is 8 hours of operation. Stored where they can be
quickly brought to the survival craft; tested monthly. If the radio uses
rechargeable Ni-Cad batteries, it can double as onboard communications,
but the battery should be run down before recharging. Broadcasting
"Mayday, mayday, mayday" plus emergency details on channel 16 is an
internationally understood distress signal.

**EPIRB (p.121–122).** A SOLAS-required ship carries at least 1 Class I
EPIRB, capable of float-free operation, normally stowed on the flying
bridge or bridge wing so its automatic float-free release isn't
obstructed. Fitted with a hydrostatic release unit (HRU) that releases
the unit when submerged — **the exact depth range is OCR-uncertain in
this batch, tentatively "3–10 feet," flagged for verification, not
treated as confirmed** (see OCR-uncertainty section). Once released, the
unit turns itself on, acquires position via an integrated GPS receiver,
and broadcasts a unique ID plus position data. Must be registered with
NOAA for US-flagged vessels, feeding the 406 MHz Registration Database
used by SAR organizations worldwide (vessel name, number of passengers).
Uses the COSPAS-SARSAT satellite network (in place since the 1980s;
current average detection time around 45 minutes, faster over most of
the world's ship-transited ocean). Broadcasts the distress signal at 406
MHz / 5 watts to satellites (antenna needs unobstructed sky view), plus
a low-power 121.5 MHz homing signal for nearby SAR assets to zero in on
exact position. Tested monthly at minimum (already live as
`q-cfr-epirb-monthly-test`); must be able to transmit for **at least 48
hours**. Fitted with a strobe light for visual ID. Deployment: recover
the EPIRB from the water before abandoning if safe to do so; otherwise,
once the survival craft is clear of the sinking vessel, place the EPIRB
in the water secured to the craft by its lanyard (water grounds the
battery and strengthens the signal) — don't grab the antenna or remove
it from the water, as this interferes with signal quality. Some models
have a manual on switch. Once activated, never turn it off. If more than
one EPIRB is available, deploy only one and wait 48 hours before
deploying the second.

**SART (p.123).** A portable device similar in concept to an EPIRB, but
detected by a ship's **X-Band, 9 GHz (3 cm) navigational radar**, not a
satellite network. Should have the vessel's name plainly marked, stowed
for quick transport to the survival craft if not permanently installed.
On radar, a SART's signal appears as a series of **12 blips or dots**
extending outward from its position, which turn into **arcs** as the
rescue craft closes in. Deployed rigged about 1 meter above the water, in
standby mode; automatically activates (with an audio and/or visual
indication) when struck by a nearby radar pulse, and can also be manually
activated/deactivated. Battery must operate for **96 hours in standby
mode**, followed by an additional period in transponder mode — **the
specific transponder-mode duration figure is OCR-uncertain in this
batch and not stated with confidence; flagged for verification** (see
OCR-uncertainty section). IMO performance standard requires a detection
range of at least **5 miles** at 1 meter height above sea level (range
increases with height); a Coast Guard aircraft flying a search pattern
at 3,000 feet should detect a SART at **30 miles**. SARTs are not
designed to launch/operate automatically; built to survive a **20-meter**
drop into the water without damage, and watertight to **10 meters for 5
minutes**. One SART is required on vessels between 300–500 tons; two are
required on passenger vessels and vessels over 500 tons, stowed one on
each side of the vessel.

**International Morse Code (p.124).** Can be used to communicate with
rescuers via portable radio, lights, sound signals, or ground markings.
SOS (`. . . – – – . . .`) is described as the most common distress
symbol (already live as `q-cfr-sos-morse-distress`). The page itself is
mostly a Morse alphabet/numeral reference chart, not prose.

**Signals to Communicate From Shore / Table of Lifesaving Signals
(p.125–129).** A shore party (or another craft) can signal survivors
using standardized day/night signals:

- **"You are seen — help will be given as soon as possible"**: 3
  combined light-and-sound signals ("thunder-light") about one minute
  apart, OR 3 white star rockets about one minute apart. (This is the
  standard reply from a lifesaving station or rescue unit to a distress
  signal, per p.129 — also achievable with an orange smoke signal by
  day.)
- **"This is the best place to land"**: by day, vertical motion of arms
  or a white flag; by day or night, vertical motion of a white flag or
  flare, firing a green star signal/flare, or signaling code letter **K**
  (`–.–`) by light or sound. A steady white light/flare placed at a lower
  level gives the landing party a reference line to approach along.
- **"Landing here is highly dangerous"**: by day, holding arms
  horizontally or horizontal motion of a white flag/flare; by day or
  night, horizontal motion of a white flag/flare/light, firing a red star
  signal, or signaling code letter **S** (`. . .`) by sound or light.
- **"Landing here is highly dangerous — a more favorable location is in
  the direction indicated"**: horizontal motion of a white flag/light,
  then placing it on the ground, then carrying a second white flag/light
  in the direction of the better landing spot; or firing a red star
  signal vertically followed by a white star signal in that direction; or
  signaling code letter **S** followed by **R** (better landing to the
  **right**) or **L** (better landing to the **left**) — "right" and
  "left" as seen by the survival craft's occupants facing the shore.
- **Shore lifesaving apparatus signals** (rocket-line/breeches-buoy
  rescue operations): vertical motion of a white flag/light, or a green
  star signal, means "affirmative" — specifically, the rocket line is
  held, the tail block is made fast, the hawser is made fast, a person is
  in the breeches buoy, or "haul away." Horizontal motion of a white
  flag/light, or a red star signal, means "negative" — specifically
  "slack away" or "avast hauling."
- Day signals may be given at night, or night signals by day, if
  necessary.

**Aircraft-to-surface-craft signals (p.127).** An aircraft directing a
surface craft toward a vessel/person in distress: circles the surface
craft, crosses its projected course close ahead at low altitude while
opening/closing the throttle or changing propeller pitch, then heads in
the direction the surface craft should go. An aircraft dismissing a
surface craft from further assistance: crosses the surface craft's wake
close astern at low altitude, opening/closing the throttle or changing
propeller pitch.

**International Distress Signals — 16-item list (p.130).** Presented as
a numbered list of signals recognized internationally (from the
International Regulations for Preventing Collisions at Sea); a vessel in
distress may use more than one:

1. Firing rockets/shells that throw red stars, one per minute.
2. Constant sounding of any fog-signal apparatus.
3. Creating flames on the vessel (e.g., burning a tar or oil barrel).
4. Firing a gun or other explosive signal, once per minute (already live
   as `q-cfr-gunsignal-distress`).
5. Flying a piece of orange-colored canvas with a black square and
   circle (or other identifying symbol), for identification from the
   air.
6. Signaling SOS (`. . . – – – . . .`) in Morse code by radiotelegraphy
   or another method (already live as `q-cfr-sos-morse-distress`).
7. Speaking the word "Mayday" by radiotelephone (already live as
   `q-cfr-mayday-radiotelephony`).
8. Firing a rocket parachute flare with a red light.
9. Setting a dye marker of any color.
10. Hoisting the international code flags **November** (a white-and-blue
    checkered flag) and **Charlie** (horizontal stripes of blue, white,
    red, white, blue) together — the N.C. distress hoist (already live
    as `q-cfr-nc-flag-distress`, though that question doesn't describe
    what the individual flags look like — this page adds that detail).
11. Hoisting a square flag with a ball (or ball-like object) above or
    below it (already live as `q-cfr-squareflag-ball-distress`).
12. Standing on deck with arms outstretched to the sides, slowly and
    repeatedly raising and lowering them (already live as
    `q-cfr-armwave-distress`).
13. Sending the radiotelephone alarm signal.
14. Transmitting SOS via an EPIRB.
15. Igniting an orange smoke signal (already live as
    `q-cfr-orangesmoke-distress`).
16. A ship-to-shore distress alert transmitted via Inmarsat or another
    mobile satellite device.

Note: the already-live `q-cfr-whitelight-flash-distress` question (a
high-intensity white light flashing 50–70 times per minute) does **not**
appear in this page's 16-item list. This isn't a contradiction — it may
simply be catalogued elsewhere in the manual, outside this excerpt — but
it wasn't independently confirmed by this batch either.

**Signaling Devices (p.131–132).**

- *General pyrotechnic use*: read manufacturer instructions once
  settled in the survival craft (brands differ), keep pyrotechnics close
  for immediate use, and fire them downwind on the leeward side of the
  craft at roughly **60° above the horizon**, held at a slight angle over
  the water since burning particles fall and can cause injury or damage
  the raft.
- *Signaling mirrors*: aim sunlight through the peephole onto the double
  mirror surface to direct a reflection toward a distant aircraft cabin
  or ship's bridge; practice the aiming technique in advance, and flash
  the mirror around the entire horizon whenever the sun is shining — an
  aircraft can spot the flash from farther away than you can spot the
  aircraft.
- *Red rocket parachute flares*: for a vessel spotted far off on the
  horizon; reaches roughly **1,000 feet**, burns bright red for **no less
  than 40 seconds**; the parachute is designed not to be damaged while
  the flare burns.
- *Hand flares*: for a spotted aircraft (more likely to be noticed than a
  parachute flare); burns bright red for **at least 1 minute**, continues
  burning **10 seconds after being immersed in water**; marks your exact
  position, unlike a parachute flare, which drifts as it descends.
- *Buoyant smoke signals*: daylight only; emits highly visible smoke for
  **at least 3 minutes** in calm water, continuing **10 seconds after
  immersion**.
- *Whistles*: a voice carries only a few hundred yards in calm weather
  and risks going hoarse; a whistle can be heard up to **4 miles** away
  in favorable conditions, is reusable, and works in fog, day, or night.
- *Radar reflector*: rubber liferafts don't reflect radar well on their
  own; rigging a reflector helps a ship's radar detect the raft even if a
  flare is missed or misread, and helps prevent a ship from running the
  raft over. Mount as high as possible (e.g., atop the raft, or lashed to
  an oar or man-overboard pole) — height improves detection.

## Mapped app topics / clusters

All content maps to the single existing topic `chapter-5-signaling`.
Cross-referencing against the currently-live Chapter 5 keyPoints
placeholders:

| Learn Mode placeholder | Manual support found |
|---|---|
| VHF Survival Craft Transceiver / SCT | **Strong** — full page (120) of specific, quotable facts |
| Emergency Position Indicating Radio Beacon / EPIRB | **Strong** — 2 pages (121–122), including deployment procedure |
| Search and Rescue Radar Transponder / SART | **Strong** — full page (123), rich technical specs |
| International Morse Code | **Thin** — mostly a reference chart, limited prose |
| Signals to Communicate from Shore | **Strong** — 3 pages (125–127) |
| Table of Lifesaving Signals | **Strong but OCR-rough** — 2 pages (128–129); content overlaps significantly with "Signals to Communicate from Shore" (they describe the same signal system) |
| International Distress Signals | **Strong** — full page (130), and already the best-corroborated Learn Mode module in the app (`chapter-5-signaling` keyPoints, "International Distress Signals — The Recognized List") gets 6 more facts confirmed/extended here |
| Signaling Devices | **Strong** — 2 pages (131–132), rich and specific |

The already-live "International Distress Signals" Learn Mode module
(built from CFR sourcing) can be meaningfully cross-verified against this
manual's page 130 list — 6 of its facts (gun signal, SOS Morse, Mayday,
N.C. flag, square-flag-and-ball, arm-wave, orange smoke) are independently
confirmed here, which is a stronger verification than CFR alone.

## OCR-uncertainty notes (flagged for human review, not treated as verified)

1. **EPIRB hydrostatic release submersion depth (p.121)** — OCR reads
   "submerged 3-10 feet," but this line sits in a heavily garbled
   sentence with several dropped words around it (the sentence starts
   mid-word, "RB is normally located..."). This figure should be
   confirmed against the source image directly before being used as a
   verified fact.
2. **SART transponder-mode battery duration (p.123)** — the sentence
   reads "...must operate for 96 hours in standby mode followed \[missing
   number\] hours in transponder mode." No candidate number survived OCR
   at all here — this is a genuine gap, not a misread digit. Do not guess
   this figure; it needs to be read directly from the source image.
3. **Table of Lifesaving Signals, pages 128–129** — both pages show
   noticeably rougher OCR than the rest of the batch (repeated/garbled
   text fragments, stray characters like "1.5", jumbled list numbering).
   The underlying facts are still decipherable and are cross-confirmed by
   the cleaner prose on pages 125–126 describing the same signal system,
   but these two pages specifically should get a direct visual check
   before their content is treated as independently verified (as opposed
   to corroborated via the cleaner pages).
4. **Minor OCR noise throughout** (dropped leading letters at some line
   starts, e.g., "SOS Course No. 549" instead of "SHLSOS Course No. 549,"
   "gency Position..." instead of "Emergency Position...") — didn't
   affect comprehension of any passage, but exact character-for-character
   transcription wasn't possible, so nothing in this document should be
   treated as a verbatim manual quote unless it's inside quotation marks.

## Recommendations for the next task

1. This intake and its accompanying draft question pack
   (`vinci-2026-07-14-chapter-5-draft-question-pack.json`) and
   promotion review (`vinci-2026-07-14-chapter-5-promotion-review.md`)
   are staging only — no promotion or Learn Mode writing was done in this
   task.
2. Before any future promotion, resolve or exclude the two flagged OCR
   gaps (EPIRB HRU depth, SART transponder-mode hours) rather than
   guessing them.
3. The already-live "International Distress Signals" Learn Mode module
   could be strengthened with a manual citation (in addition to its
   current CFR citation) given how much of it this page 130 list
   corroborates — worth considering in a future, separately-requested
   Learn Mode task.
4. VHF/EPIRB/SART are all strong candidates for their own future Learn
   Mode modules, given how much specific, well-organized content exists
   for each and how thin the current placeholders are.
