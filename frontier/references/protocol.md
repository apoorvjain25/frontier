# The Operating Protocol

How to get frontier-quality results from any capable model, on any task: code, content, design,
development, audit, graphics, animation, motion, effects, prompts, APIs, connectors, UI, UX,
features, pages, marketing, writing, research, market analysis, anything.

v1.1, 2026-07-03.

---

## 0. Why this works, and its limits

A stronger model differs from a weaker one less in what it knows than in HOW it works: it defines
the standard before generating, verifies against reality instead of its own confidence, iterates
until convergence, and never ships a first draft. All of that is process, and process can be
written down. This file is that process.

What a protocol cannot give a weaker model: deeper single-shot reasoning on genuinely novel
problems, and taste in calls no rubric covers. Compensate with Section 4 (narrow steps, judge
panels, more passes). Escalate to a stronger model only for the few calls where that still fails.

These rules are constraints, not a script. The path is yours. Project-specific instructions
(a repo's CLAUDE.md) override this file where they conflict.

---

## 1. The ten laws

1. **Rubric before artifact.** Before generating anything, state (or read from a craft file,
   Section 5) what excellent looks like in checkable, concrete terms. "Premium" is not a standard;
   "one accent color with a locked meaning, spacing on an 8px grid, body text 65-75ch" is. If no
   rubric exists for the task, write one first (5-10 checkable lines), then build against it.

2. **Draft one is never the deliverable.** First-pass output from any model regresses toward the
   generic. Quality is produced by the loop in Section 2, not by the first generation. Budget for
   at least two full inspect-fix cycles on anything that matters.

3. **Claims need evidence from this session.** Never judge work by "it compiled" or "the code
   looks right". A visual claim needs a rendered image you opened and cropped into. A code claim
   needs test or run output. A copy claim needs the checklist run against the final text. A
   research claim needs the cited source. A sync or audio claim needs probe numbers. Unverified
   means saying "unverified", not guessing.

4. **Fresh eyes find defects; authors defend them.** Self-critique in the same context is weak:
   the model that produced the work rationalizes it. For sweep passes, use fresh-context reviewers
   (subagents, a new session, or at minimum an explicit judge pass using the template in Section 3)
   that did NOT do the producing, each with one narrow lens. The producer fixes; the finder stays
   unbiased.

5. **The stop is earned, never felt.** In the single-response form, done means one fresh-eyes
   judge pass ran over the whole rubric and every finding was fixed or named. In the
   convergence form, done means two consecutive clean sweeps. A pass is clean only when EVERY dimension of the
   rubric is clean. Do not stop after each fix to ask; do not hand back partial work; do not make
   the requester re-prompt to cover a dimension you skipped. Stop only on two clean passes or a
   genuine blocker you cannot synthesize around (then say exactly what blocks you and what you
   already verified).

6. **One concern per step.** Weaker models fail on wide, multi-constraint tasks and succeed on
   narrow ones. Decompose: plan, then critique the plan (what would a reviewer reject?), then
   execute one concern at a time with an explicit contract between steps. Re-read the relevant
   rubric section immediately before generating each part; attention to instructions decays over
   long context, so bring the standard close to the generation.

7. **Ban the mean.** Model output regresses to the statistical average of its training data, which
   reads as slop: filler words, stock names, template layouts, default fonts, round vanity stats.
   Every craft file has a ban list with replacement rules. The ban list is a blocking gate, not a
   suggestion. The universal test: "could this exact sentence, frame, or layout appear unchanged in
   any other product or document?" If yes, regenerate it against this task's specifics.

8. **Concrete beats abstract, in both directions.** Instructions you receive: interpret literally,
   and where scope is ambiguous, state the scope you chose. Instructions you apply to yourself:
   convert every adjective into a number or a named pattern before using it.

9. **Complete output, always.** No placeholders, no "rest of the file unchanged", no TODO stubs,
   no truncated lists. If output must be split, split at a clean boundary and continue immediately.

10. **Decide minor things and note them; never stop early.** Asking mid-loop blocks the work. Pick
    a reasonable option for small calls and record it. Before ending a turn, check the last
    paragraph: if it is a plan, a promise ("I will now render"), or a question you can answer
    yourself, do that work now. Never wrap up on account of context length; the loop ends when its
    stop condition is met.

---

## 2. The procedure (two forms)

The single-response form, the default anywhere a chat box is all you have:

```
define the rubric (read the craft file; add task-specific lines)
generate, one concern at a time, re-reading the relevant rubric lines before each part
run ONE fresh-eyes judge pass (Section 3 template) over the whole rubric
fix every finding or justify each in one line; deliver, naming anything unverified
```

The convergence form, for agentic tools and work that must be right:

```
define the rubric (read the craft file; add task-specific lines)
for each element (component, page, scene, section, function, paragraph):
  generate or edit it
  cheap gate                 # typecheck / lint / ban-list scan; never the final word
  produce evidence           # render, screenshot, run, probe, or the final text itself
  inspect the evidence       # open it, crop in, read it aloud, trace it
  log EVERY defect found across ALL rubric dimensions, any severity, any confidence
  fix; regenerate evidence; repeat until the element is clean

then sweep the WHOLE deliverable each pass:
  fresh-eyes judge pass per dimension (Section 3 template), coverage first
  dedupe and rank findings AFTER collection, never during
  fix everything; re-sweep

stop only when TWO consecutive whole-deliverable sweeps find zero defects.
```

Two rules that make sweeps actually catch things:
- **Coverage first, filtering later.** A sweep reports every defect at any severity or confidence,
  tagged with location, dimension, and confidence. Never self-filter to "important" findings;
  silently dropped defects are how slop ships.
- **Escalate evidence with stakes.** Cheap gates (types, lint, word-scan) run constantly; expensive
  gates (full render, cross-browser screenshot, judge panel) run each sweep pass.

---

## 3. The judge prompt (copy-paste for fresh-eyes passes)

Run one judge per dimension (or per lens), in a fresh context that has not seen the producing work:

```
You are a fresh-eyes verifier. You did not produce this work and you do not defend it.
Judge ONLY against the rubric below. Report EVERY defect you find, at any severity or
confidence, with: location, which rubric line it violates, and your confidence. Do not
filter to important findings; ranking happens downstream. If a rubric line cannot be
verified from the evidence provided, report that itself as a defect ("unverified: <line>").
An empty defect list is a claim: it means you actively checked every line and found
nothing. End by listing which lines you checked and how.

RUBRIC:
<paste the relevant craft-file section plus task-specific lines>

EVIDENCE:
<the artifact: files, screenshots at stated sizes, final text, probe output>
```

For taste calls with no rubric line (which of two directions is better): run a panel of 3 judges
with distinct lenses (for example: first-time user, expert practitioner, brand owner), majority
vote, and record the dissent. Panels substitute for the taste a stronger model has internalized.

---

## 4. Weaker-model compensations

Apply these on Opus and below; they are harmless on stronger models.

- **Narrow the aperture.** Cut task width until each step has one deliverable and one rubric
  section. Ten reliable small steps beat two unreliable big ones.
- **Enumerate, never gesture.** "Check all dimensions" fails; a numbered checklist of the exact
  dimensions, walked one by one with a written verdict each, works.
- **Re-anchor before each part.** Paste or re-read the relevant rubric lines right before
  generating that part. Do not rely on instructions given 50k tokens ago.
- **Externalize state.** Keep a running defect log and a decisions log in a file, not in memory.
  After any long tool output, restate the current goal and the next step in one line.
- **More passes, smaller sweeps.** Where a strong model needs 2 passes, budget 3-4. Sweep scopes
  small enough that the judge can actually hold the whole scope.
- **Vote on taste.** Single-judge taste calls are where weaker models drift; use the 3-lens panel.
- **Gold examples anchor.** When a known-excellent example exists (a past deliverable, a
  teardown of a best-in-class reference), put it in context and imitate its structure, not
  its content.

---

## 4b. Ceiling raisers: closing the last-mile gap

The loop closes correctness fully and originality mostly. These four mechanisms close what
remains (first-draft originality, many-constraint juggling, and taste no rubric captures):

- **Tail sampling (best-of-N).** For creative or novel deliverables (a signature hero, a brand
  direction, a naming set, a story opening, an architecture approach, a positioning line),
  never refine draft one. Generate 3-5 INDEPENDENT candidates in fresh contexts (parallel
  subagents), each forced down a distinct angle (minimal vs maximal, risk-first vs user-first,
  conventional vs contrarian). Panel-judge against the rubric plus the kill test, pick the
  winner, graft the best elements from the losers, THEN run the loop on the winner. The best
  of five draws sits far above the average draw; this samples the tail of the distribution,
  which is where a cheaper model's frontier-grade output lives.
- **Constraint ledger.** Before generating anything with more than 5 live constraints (brand
  tokens plus data plus motion plus responsive plus copy rules), write every constraint as a
  numbered ledger artifact first. After each draft, walk the ledger line by line and mark each
  constraint held or broken. This converts working-memory load (where weaker models drop
  things) into process (where nothing can be dropped silently).
- **The taste gate.** Judgment costs a few thousand tokens even when generation cost
  millions. On high-stakes deliverables, after the loop reaches two clean passes, run ONE
  final pass of the `taste-judge` agent: a 3-lens internal panel (first-time
  audience, expert practitioner, brand owner) plus the frontier checks (momentum, optical
  balance, restraint, coherence, earned emphasis, rubric-gaming). Run it on the strongest
  model available; when the strongest available IS the generating model, the gate still
  earns its keep through the fresh context, the adversarial stance, and the lens structure.
  Fix its findings, re-gate once.
- **Taste distillation.** Every taste call the strong model or the user makes gets recorded:
  a new rule in the matching craft file, or an exemplar saved to a gold-examples folder you keep. Each
  distilled call closes that gap permanently; the kit converges toward frontier taste over
  time instead of renting it forever.

---

## 4c. Lessons from the frontier window

Concrete deltas between what the frontier model actually corrected and what the rules alone
would have caught. Apply these as standing checks on every deliverable:

1. **Inertness is the gap, not incorrectness.** Rule-passing work is routinely correct and
   dead. After every clean sweep, ask the gate question directly: would this stop an expert
   scrolling past it? "Passes everything" and "would ship proudly" are different bars.
2. **The strongest edit is deletion.** Weaker-model drafts fail by addition (one more
   sentence, one more card, one more effect). Run an explicit removal pass on every draft:
   for each element, what breaks without it? Nothing = cut it. Expect to cut 10-30%.
3. **Specific-sounding is not specific.** A number only counts if it maps to something
   checkable and would change a decision if it were different. Audit every number for both.
4. **Endings deflate.** Drafts trail into summaries, hedges, or restatement. The last
   sentence of anything (page, section, script, email) must add pressure or resolve; if it
   only repeats, cut it and end one sentence earlier.
5. **Parts pass, wholes drift.** Section-by-section review misses register drift, gray-tone
   mixing, and argument repetition across a long deliverable. Always run one continuous
   whole-artifact read (or scroll-through) as its own pass, checking only coherence.
6. **Literal compliance needs a spirit check.** Every rule in these files can be satisfied
   in letter while missing its point. When verifying, state what the rule is FOR in one
   clause, then judge against that, not the wording.

---

## 5. Routing: read the matching craft file before starting

The craft files define "excellent" per domain in numbers, with ban lists and verification
checklists. Read the matching one(s) BEFORE generating; a task can match several.

| Task involves | Read |
|---|---|
| UI, UX, pages, layouts, components, graphics, visual design, slide visuals, brand | `references/craft/design.md` |
| Animation, motion, transitions, effects, micro-interactions, motion in video | `references/craft/motion.md` |
| Copy, content, docs, scripts, emails, posts, deck narratives, naming, summaries | `references/craft/writing.md` |
| Code, features, functions, APIs, connectors, integrations, debugging, code audits | `references/craft/code.md` |
| Research, market analysis, competitor analysis, due diligence, reports | `references/craft/research.md` |
| Writing prompts, AI features, agents, output specs, LLM pipelines | `references/craft/prompting.md` |
| Product decisions, specs, PRDs, feature scoping, prioritization, pricing | `references/craft/product.md` |
| Analytics, metrics, dashboards, experiments, SQL, forecasts, financial models | `references/craft/data.md` |
| Auth, multi-tenancy, privacy, PII, secrets, dependencies, security audits | `references/craft/security.md` |
| Deploys, DB migrations, monitoring, incidents, web performance, infra cost | `references/craft/ops.md` |
| Audio, voice, music, podcasts, video narrative, thumbnails, AI-generated media | `references/craft/media.md` |
| SEO, AEO, ads, email programs, CRO, launches, social, funnels | `references/craft/marketing.md` |
| Strategy, big decisions, trade-offs, estimation, pre-mortems, portfolio focus | `references/craft/decisions.md` |
| Selling, demos, proposals, negotiation, partnerships, support conversations | `references/craft/sales.md` |
| Tutorials, courses, onboarding education, workshops, explanations | `references/craft/teaching.md` |
| Leading people, delegation, feedback, 1:1s, performance, hiring, meetings | `references/craft/management.md` |
| Fiction, narrative, scripts, brand stories, case studies | `references/craft/storytelling.md` |
| Academic writing, literature reviews, citations, grants, peer review | `references/craft/academic.md` |
| Resumes, portfolios, interviews, job search, promotions | `references/craft/career.md` |
| Translation, localization, multilingual content | `references/craft/translation.md` |
| Events, logistics, multi-party coordination, run-of-show, itineraries | `references/craft/coordination.md` |

Combined tasks read combined files: a demo video reads media + motion + writing (+ design for
frames); a new SaaS feature reads product + code + security (+ design for its UI); a landing
page reads design + writing + marketing; a sales deck reads sales + writing + design.

When a curated library of best-in-class design references is available to you, search it before designing anything new and reuse the technique, never the pixels.

---

## 6. Model tuning notes (Claude Opus 4.8, current as of 2026-07)

When YOU are Opus (or when building prompts that run on Opus), these are the known levers:

- Opus follows instructions literally and does not generalize scope. State scope explicitly
  ("apply to every section, not just the first").
- Opus under-reaches for subagents, file memory, and custom tools by default. This protocol
  explicitly instructs their use (Sections 3, 4); follow it rather than defaulting to solo work.
- Review and audit prompts: Opus obeys "only report important issues" literally and recall drops.
  Always use coverage-first reporting (Section 2), filter downstream.
- Opus has a persistent default design taste (cream or off-white around #F4F1EA, serif display
  faces, terracotta or amber accents) plus generic tells (Inter or Roboto everywhere, purple
  gradients). Treat that taste as a slop vector: every visual value must come from the project's
  real tokens or from a deliberately synthesized system, never from default taste. Generic "don't
  use cream" instructions just shift the default; concrete hex values and named fonts work.
- For creative variety (no temperature parameter exists on Opus 4.7+): propose 3-4 distinct
  directions with concrete values, pick or ask, then implement only the winner.
- API calls: `claude-opus-4-8`, `thinking: {type: "adaptive"}`, `output_config.effort` of `high`
  by default and `xhigh` for the hardest coding and agentic work, streaming for long outputs,
  structured outputs via `output_config.format` (never prefills), cache the stable prompt prefix
  (this protocol and the craft file go first; the volatile task goes last).

---

## 7. Reporting

Lead with the outcome, then the evidence (what was verified and how), then decisions made and
their reasons. If something is unverified or skipped, say so plainly. Never end on a promise.
