# Craft: Teaching (tutorials, courses, onboarding education, workshops, explanations)

What excellent teaching IS, checkable. Writing mechanics live in craft/writing.md; this file
is instructional design.

## 1. Objectives

- Start from the learner's job: what will they DO after this, in what real situation. Write
  objectives as observable actions ("deploy a Next.js app with environment variables", never
  "understand deployment").
- State prerequisites explicitly at the top, with links to close the gap and one check action
  ("run X; if it fails, do Y first"). Unstated prerequisites are where beginners silently die.
- Scope ruthlessly: teach the 20% that covers 80% of real use; link the rest. Curriculum
  bloat is the most common failure.

## 2. Sequencing and cognitive load

- One new concept at a time, ordered by prerequisite; never two unknowns in one step.
- 3-5 chunks per lesson; if it needs more, it is two lessons.
- Example before abstraction: show one concrete working thing first, then generalize. The
  definition lands only after the instance. The first worked example uses only the stated
  prerequisites plus the one new concept, nothing else unexplained.
- Name the 3 likely misconceptions up front and address them explicitly (wrong mental models
  survive silence; they die only when confronted).

## 3. Practice is the product

- Hands on within minutes, not chapters: the learner performs a real action within the first
  300 words of a written tutorial or the first 5 minutes of a course or session. Reading
  about a skill is not the skill.
- Exercises are realistic tasks (build, fix, ship), never trivia quizzes about definitions,
  and they force transfer: at least one element (data, names, structure, goal) differs from
  the worked example so pasting it fails. If the learner completes the task without making a
  decision, it is a demo, not an exercise.
- Graduated release: worked example, then guided practice with scaffolding, then independent
  task. Remove the scaffolding on purpose, and say so.
- Immediate feedback that explains WHY, not just correct or incorrect. When a learner stalls,
  hint up a ladder (point at the error location, then the method, then the solution); giving
  the full answer at the first stall deletes the practice. Never do the exercise for them.
- Teach the errors: show what failure looks like (the actual error message, the broken
  render) and the debugging path out; pre-list the 2-3 most common failure modes per exercise
  with their fixes. Learners get stuck on errors, not on concepts.

## 4. Retention

- Retrieval beats re-reading: open sessions with recall prompts ("before we continue, how do
  you X?") where the learner produces the answer before seeing it. A recap phrased as a
  question is not retrieval.
- Space it: core skills reappear inside later lessons' tasks, deliberately.
- End each unit with the learner producing an artifact they keep; portfolios beat certificates.

## 5. In-product onboarding education

- Teach at the moment of need, one concept per moment; a 12-step upfront tour is retention
  poison.
- Doing beats watching: the checklist is real actions in the product (create, connect, invite),
  each completing visibly.
- Empty states are lessons: every empty view says what goes here, why it matters, and the one
  button that starts it (ties to design.md section 5).
- Measure by activation actions performed, not by tour completion.

## 6. Workshops and live teaching

- 20% talk, 80% do; every attendee leaves having built the thing.
- Prepare the fallback for broken environments (a hosted sandbox, a checkpoint repo per
  stage) so one broken laptop does not stall the room.
- Checkpoints every 15-20 minutes where everyone re-synchronizes; the fast finishers get a
  stretch task, not idle time.

## 7. Explanations (the micro-skill inside everything)

- Anchor to what they already know ("it is like X, except Y"); one analogy per concept, with
  the "except" stating where it breaks.
- Concrete number or example within the first two sentences.
- An explanation longer than 150 words ends in a task or question that uses it; explaining
  more is not teaching more.
- Check understanding by asking them to apply it, not by asking "does that make sense?"
  (everyone says yes).

## 8. Ban list

- "Simply", "just", "easy": they shame the stuck reader and hide missing steps.
- Wall-of-text lessons with practice postponed to the end; explanation as a substitute for
  exercise (if a lesson has no task, it is an article, label it one or add the task).
- Solving the learner's exercise for them at the first stall (hint up the ladder instead).
- Screenshots or demos that skip steps ("after some setup...").
- Quizzes on terminology; assessments that test memory of the lesson, not the skill.
- Foo/bar and toy examples when the learner's real domain is known; draw the example from
  their domain.
- Covering everything (the completeness instinct is the enemy of learning).
- Unstated versions and environments (tutorials rot; date them and pin versions).

## 9. Verification checklist (every pass)

1. Objective observable and job-anchored? Prerequisites stated with a check action?
2. First hands-on action within 300 words or 5 minutes? Count it.
3. One-new-concept rule held through the sequence?
4. Misconceptions and common errors explicitly taught, with fixes per exercise?
5. Practice realistic, graduated, forcing transfer (pasting the example fails), with
   explanatory feedback?
6. Assessment validity: could a learner pass without the objective's skill? If yes, the
   assessment is broken; fix it.
7. Fresh-eyes test: a verifier subagent (or a real beginner) EXECUTES every step from a clean
   environment holding only the stated prerequisites; every stall, missing step, or silently
   assumed knowledge is logged as a defect.
8. Versions pinned and dated; every code block runs as pasted (writing.md docs rule).
