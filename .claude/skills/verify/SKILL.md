---
name: verify
description: Build/launch/drive recipe for verifying changes in this app (React/Vite, client-only, localStorage).
---

# Verifying changes in VT-Maritime-Survival

This is a client-only Vite/React app (no backend). Surface = browser pixels.

## Launch

```bash
npm run dev -- --port 5173 --strictPort   # run in background
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5173   # confirm it's up
```

`npm run build` catches syntax/type errors fast but is not verification —
it doesn't prove the UI behaves. Always drive it in a browser too.

## Drive it

Chromium is preinstalled; Playwright is preconfigured. Use `playwright-core`
(not `playwright`, to skip the postinstall browser download) with an explicit
executablePath:

```js
const { chromium } = require('playwright-core')
const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox'],
})
```

Gotchas:
- The app uses `window.confirm` for destructive actions (e.g. excluding a
  question) — register `page.on('dialog', ...)` and explicitly `accept()` or
  `dismiss()` per test; the default is to hang.
- Progress/exclusions/flags live in `localStorage` (`sf_progress_v1`). Clear
  it at the start of a run (`page.evaluate(() => localStorage.clear())` then
  reload) for a clean slate, and read it directly via
  `page.evaluate(() => JSON.parse(localStorage.getItem('sf_progress_v1')))`
  to assert on state rather than scraping the DOM.
- Quiz/Drill sets are randomized and interleaved across topics (see
  `src/engine/selection.js`). Don't assume a specific question appears in a
  given set — scope to one topic via the `<select>` in Quiz Mode, and loop
  through several fresh sets if you need to reliably hit a specific
  low-frequency question (e.g. one of only 2 tagged questions in a 13-question
  topic pool).
- A stray `Failed to load resource: 404` on every page load is the browser's
  automatic `/favicon.ico` request — there's no favicon configured. Pre-existing,
  unrelated to app changes.

## What's worth checking after a QuestionCard/engine change

- Does the new UI element render (screenshot) and match the underlying data
  (course.json fields), not just "something rendered"?
- If it writes to localStorage: does it persist across a full page reload?
- If it changes question pools (exclude/flag/mastery): does Topic Explorer's
  per-topic count and the actual quiz/drill set reflect it, across *multiple*
  fresh sets (randomization can hide a one-off failure)?
- Does clicking the same control twice do something sane, or silently undo
  itself? (Found and fixed exactly this for the "Exclude this question"
  button — the button must disappear/disable after firing, not stay live.)
