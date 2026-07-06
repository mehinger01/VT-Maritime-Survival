-- Seed a placeholder student + the Session 2 report as test data. No real
-- Supabase Auth account exists for Vinci yet (creating one requires the
-- signup flow or the dashboard, not something this migration can do), so
-- profile_id is left null. Once he signs up, an admin links the account
-- with:
--   update public.students set profile_id = '<his auth.users id>' where id = '00000000-0000-0000-0000-000000000001';

insert into public.students (id, display_name, active)
values ('00000000-0000-0000-0000-000000000001', 'Vinci', true)
on conflict (id) do nothing;

insert into public.session_reports (
  student_id, session_number, session_date, duration_minutes,
  questions_answered, accuracy, topics_covered, action_items, client_facing_report
) values (
  '00000000-0000-0000-0000-000000000001',
  2,
  '2026-07-06',
  null,
  48,
  90,
  array[
    'Chapter 2 — Using Lifeboats',
    'Chapter 6 — Being Rescued',
    'Chapter 1 — Planning Ahead',
    'Chapter 5 — Signaling to Attract Attention',
    'Chapter 3 — Using Liferafts',
    'Chapter 4 — Understanding Survival Methods',
    'Appendix A — Glossary / Vocabulary Review'
  ],
  array[
    'Obtain access to the school''s online course portal.',
    'Continue reviewing Chapters 4-6.',
    'Spend additional study time on compass variation and deviation.',
    'Review emergency procedures, hypothermia, survival signaling, and abandon ship procedures.',
    'Continue using the study tool to reinforce concepts and identify additional areas for review.'
  ],
  $report$Session 2 Report – July 6, 2026

Session Summary

Today's session focused on reviewing your progress after your first week using the Maritime Survival Study Tool, evaluating your current level of readiness, and refining your study plan based on your performance and goals.

Progress Review

During this session, you completed 48 practice questions covering all major content areas of the course, achieving an overall 90% accuracy rate. This is a strong indication that you have established a solid foundation in the material.

Rather than identifying broad knowledge gaps, the questions you missed were primarily related to distinguishing between closely related concepts. These included:

* Differentiating emergency alarms from maneuvering whistle signals.
* Distinguishing preparation activities from actions taken during an active emergency.
* Understanding the purpose of positioning equipment used with lifeboats.
* Recognizing the progression of hypothermia, particularly the transition from severe shivering to the point where shivering stops.

Study Plan Review

We reviewed your current study resources and identified additional materials that will strengthen your preparation.

A key action item from today's session is obtaining access to your school's online learning portal so additional course resources can be incorporated into your study plan. You agreed to contact the school to request access.

Areas of Focus Identified

Based on today's discussion and your feedback, future study sessions will place additional emphasis on:

* Compass concepts, with particular focus on variation and deviation.
* Emergency procedures across a variety of operational scenarios.
* Chapters 4–6 of the course material.
* Additional practice questions and learning resources aligned to these topics.

Topics Studied Together

We spent additional time exploring several concepts in greater depth, including:

* Hypothermia recognition, progression, and survival procedures.
* Abandoning ship procedures and best practices.
* The importance of morale and group leadership during survival situations.
* Proper use of emergency signaling equipment, including EPIRBs and SARTs.
* Strategies for attracting attention during rescue operations, including when, why, and how signaling methods should be used.

Coach's Observation

You demonstrated a solid understanding of the course material, with an overall accuracy of 90%. The remaining opportunities for improvement center primarily on distinguishing between similar concepts and applying procedures correctly in operational scenarios rather than memorizing isolated facts.

As the study system continues to expand with additional verified practice material, future sessions will increasingly focus on scenario-based decision-making, concept differentiation, and deeper understanding to prepare you for the certification exam.

Action Items Before Session 3

* Obtain access to the school's online course portal.
* Continue reviewing Chapters 4–6.
* Spend additional study time on compass variation and deviation.
* Review emergency procedures, hypothermia, survival signaling, and abandon ship procedures.
* Continue using the study tool to reinforce concepts and identify additional areas for review.$report$
);
