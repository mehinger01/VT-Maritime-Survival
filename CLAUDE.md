# CLAUDE.md — VT Maritime Survival (ScholarForge, Course Build #1)

This file governs all development in this repository. Read it before writing
or reviewing any code here. If a future instruction conflicts with this
document, flag the conflict instead of silently picking one side.

## What this project actually is

This is **not** a tutoring app, a quiz app, or a dashboard for one course.
It is the **first implementation of ScholarForge** — an AI Learning
Operating System that turns instructor-created materials into an
interactive, evidence-based learning experience.

- The **instructor** (Vinci, for this course) is the subject matter expert.
  Content authority lives with them, not with the app.
- **ScholarForge is the learning coach.** Its job is to decide *how* the
  material is practiced, sequenced, and reinforced — retrieval timing,
  difficulty, interleaving, error handling — not to originate the subject
  matter.
- Every feature earns its place by improving learning outcomes. If a
  feature doesn't make retention, mastery, or transfer more likely, it
  doesn't belong here, no matter how good it looks.
- Learning science outranks visual polish. A plain screen that enforces
  correct retrieval timing beats a beautiful screen that doesn't.
- **Reusable architecture outranks course-specific code.** This repo holds
  one course's content, but the engine underneath — quiz logic, spaced
  repetition, mastery tracking, confidence tracking, session reporting —
  must be written as if a second and third course will plug into it next
  month. Course content is data; the engine is code. Keep that boundary
  sharp.
- Every course ScholarForge ever supports should eventually run on the
  same learning engine. Don't fork logic per course. If something feels
  course-specific, ask whether it's actually *content* (belongs in JSON)
  before writing it as *code*.

## Current scope — read this before adding anything

This repository supports **one student** preparing for **one maritime /
water-survival exam.** That's it.

Explicitly out of scope, do not build toward these even "just in case":
- No authentication / login / user accounts
- No backend, server, or database
- No payments or billing
- No school/program/multi-tenant management
- No admin console for instructors (yet)

Everything is client-side: a React/Vite app, JSON course content, and
`localStorage` for progress. If a requested feature implies a backend
(e.g., syncing across devices, multi-student data), that's a signal it's
future ScholarForge platform work, not this repo — say so instead of
quietly adding infrastructure.

When uncertain about any decision: choose **simplicity, maintainability,
and learning effectiveness**, in that order of tie-breaking after
correctness.

## Learning methodologies this engine must support

These aren't a wishlist — they're the reason this product exists. New
features should be justified by which of these they serve:

- **Retrieval Practice** — force recall, don't let the student re-read
  passively. Quiz/Drill modes are retrieval events, not content displays.
- **Spaced Repetition** — resurface material at intervals tied to
  performance, not on a fixed syllabus clock.
- **Interleaving** — mix topics rather than blocking all practice of one
  topic together, once the student has basic exposure.
- **Mastery Learning** — advance by demonstrated competence per topic, not
  by time spent or chapters "completed."
- **Error Analysis** — a wrong answer is data. Capture *what* was
  selected and *why it's a plausible wrong answer*, not just "missed."
- **Compare & Contrast** — surface commonly confused concepts next to each
  other (e.g., similar-sounding equipment/procedures) rather than only in
  isolation.
- **Progressive Disclosure** — Learn Mode reveals hints/explanations in
  layers, cheapest first, not everything at once.
- **Socratic Questioning** — prefer prompts that make the student produce
  the answer over prompts that hand it to them.
- **Confidence Tracking** — ask "how sure are you?" alongside answers;
  low-confidence-correct and high-confidence-wrong are both meaningful
  signals, not noise.
- **Deep Drill Mode** — a harder, no-hints, high-stakes-feel mode for
  material the student claims to already know.
- **Misconception Detection** — wrong-answer patterns should be traceable
  to a *specific* misconception where the content supports it, not just
  scored wrong/right.
- **Adaptive Difficulty** — question selection responds to recent
  performance per topic.
- **Anti-Guessing Workflow** — design against blind guessing: e.g.
  require confidence input, penalize rapid-fire answering patterns, don't
  let partial credit reward random clicking.

Not every methodology needs a dedicated UI on day one. But when you build
the quiz/drill/review engine, build the data model so all of these can be
layered in later without a rewrite (e.g., every attempt record should have
room for confidence, timing, and misconception tags even before every
screen uses them).

## Architecture guidance

- **Content is data.** All course material (topics, questions, hints,
  explanations, misconception tags) lives in versioned JSON, not
  hardcoded in components. A new course should be addable by adding a new
  JSON file, not by branching the codebase.
- **The engine doesn't know it's about maritime survival.** Core logic
  (scoring, spaced-repetition scheduling, mastery calculation, session
  reporting, confidence handling) should be course-agnostic. It reads
  generic shapes (topics, items, attempts), not maritime-specific fields.
- **Progress is a portable, serializable blob.** Since there's no backend,
  `localStorage` is the only persistence layer — treat its schema with the
  same care as a database schema, because it's the thing most likely to
  need a migration path later (e.g., when a real backend arrives).
- **No premature abstraction beyond what reuse requires.** "Reusable"
  means the content/engine split above — it does not mean building a
  plugin system, theming engine, or config DSL nobody asked for. Keep the
  actual code simple; keep the *seams* (content vs. engine, storage
  schema) in the right place.
- **Prefer boring, standard React/Vite patterns.** No premature state
  management libraries, no backend-shaped abstractions (repositories,
  services, DTOs) for what is currently a static JSON file and
  `localStorage`.

## Working agreement for this repo

- Default to shipping something the student can use today over a
  more "correct" architecture that isn't finished.
- When a request conflicts with the constraints above (adds a backend,
  adds auth, adds course-specific hacks into engine code), say so and
  propose the ScholarForge-aligned alternative instead of silently
  complying.
- Keep commit messages and code comments focused on *why*, not what —
  especially where a decision trades off simplicity against future
  reusability, note which way it was resolved and why.
