#!/usr/bin/env node
// Validates question objects against the schema the app actually renders
// (see src/components/QuestionCard.jsx). Run against the live course bank
// by default, or point it at a staged import file to sanity-check content
// before it's promoted into src/content/course.json.
//
// Usage:
//   node scripts/validate-questions.mjs                 # validates src/content/course.json
//   node scripts/validate-questions.mjs <path-to-json>   # validates any file with a top-level
//                                                         # "questions" array, or a bare array

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const target = process.argv[2] ?? path.join(__dirname, '..', 'src', 'content', 'course.json')

const raw = JSON.parse(readFileSync(target, 'utf8'))
const questions = Array.isArray(raw) ? raw : raw.questions
const topicIds = Array.isArray(raw?.topics) ? new Set(raw.topics.map((t) => t.id)) : null

if (!Array.isArray(questions)) {
  console.error(`No question array found in ${target} (expected a top-level array, or an object with a "questions" array).`)
  process.exit(1)
}

const REQUIRED_STRING_FIELDS = ['id', 'topicId', 'prompt', 'correctChoiceId', 'explanation']

function validateQuestion(q, index) {
  const errors = []
  const label = q?.id ? `question "${q.id}"` : `question at index ${index}`

  for (const field of REQUIRED_STRING_FIELDS) {
    if (typeof q[field] !== 'string' || q[field].trim() === '') {
      errors.push(`${label}: missing required field "${field}"`)
    }
  }

  if (!Array.isArray(q.choices) || q.choices.length < 2) {
    errors.push(`${label}: "choices" must be an array with at least 2 options`)
  } else {
    q.choices.forEach((choice, ci) => {
      if (typeof choice.id !== 'string' || choice.id.trim() === '') {
        errors.push(`${label}: choice at index ${ci} is missing an "id"`)
      }
      if (typeof choice.text !== 'string' || choice.text.trim() === '') {
        errors.push(`${label}: choice at index ${ci} is missing "text"`)
      }
    })
    if (typeof q.correctChoiceId === 'string' && !q.choices.some((c) => c.id === q.correctChoiceId)) {
      errors.push(`${label}: "correctChoiceId" (${q.correctChoiceId}) does not match any choice id`)
    }
  }

  if (topicIds && typeof q.topicId === 'string' && !topicIds.has(q.topicId)) {
    errors.push(`${label}: "topicId" (${q.topicId}) does not match any topic in this file`)
  }

  // image / imageAlt are optional. If present, image must point into the
  // curated content folder; imageAlt is recommended but not enforced.
  if (q.image !== undefined) {
    if (typeof q.image !== 'string' || !q.image.startsWith('/content/')) {
      errors.push(`${label}: "image" must be a string beginning with "/content/" (got: ${JSON.stringify(q.image)})`)
    }
  }
  if (q.imageAlt !== undefined && typeof q.imageAlt !== 'string') {
    errors.push(`${label}: "imageAlt" must be a string when present`)
  }
  if (q.image && !q.imageAlt) {
    console.warn(`Warning: ${label} has an image but no imageAlt (recommended, not required).`)
  }

  return errors
}

const allErrors = questions.flatMap(validateQuestion)

if (allErrors.length > 0) {
  console.error(`\n${allErrors.length} error(s) found in ${target}:\n`)
  for (const err of allErrors) console.error(`  - ${err}`)
  process.exit(1)
}

console.log(`OK: ${questions.length} question(s) in ${target} passed validation.`)
