import chapter5Signaling from './chapter-5-signaling.json'
import chapter6BeingRescued from './chapter-6-being-rescued.json'

// Add a new chapter's detailed study guide here: one JSON file matching the
// shape in chapter-5-signaling.json, plus one import + array entry below.
// A guide with published:false is staged but not shown in the live app --
// see src/screens/StudyGuide.jsx.
export const studyGuides = [chapter5Signaling, chapter6BeingRescued]
