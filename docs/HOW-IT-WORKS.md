# How frontier works

The 10-minute deep dive: what each phase does, why it exists, and what it looks like in
practice. The operational spec the model actually follows is
[frontier/SKILL.md](../frontier/SKILL.md); this document explains it to humans.

## The core idea

Model output regresses to the average of its training data. The average is what you already
recognize as generic: the centered hero with two buttons, the "fast, simple, and secure"
triple, the analysis that hedges every conclusion. Getting above the average is not a bigger
adjective in the prompt; it is a manufacturing process with four properties:

1. **A written standard exists before generation starts** (you cannot converge on "great";
   you can converge on "body text 65-75ch, one accent with a locked meaning").
2. **Multiple independent attempts are sampled for creative work** (a model's best-of-five
   sits far above its average draw; the first draft is a sample, not a deliverable).
3. **Verification is done by fresh eyes against real evidence** (the context that produced
   work rationalizes it; a fresh context reads the actual screenshot).
4. **Stopping is earned, not felt** (a judged pass with every finding fixed at minimum; two
   consecutive clean inspections for work that must be right).

## The three layers

- **Layer 1, the gap-closer (one response, no loop)**: the standards plus one fresh-eyes
  judge pass over the whole rubric, findings fixed before delivery. This is `quick` mode and
  the default shape of PROMPT.md; it works in a chat box.
- **Layer 2, the ceiling-raiser (parallel, still no loop)**: best-of-N candidates for
  creative work; selection beats refinement.
- **Layer 3, the assurance mode (`full`)**: the convergence loop and taste gate below, for
  deliverables that are public, expensive to redo, or brand-defining.

Why keep Layer 3 at all when Layer 1 carries the pitch: iteration lifts a weaker model far
more than a stronger one, because external standards plus passes substitute for what the
stronger model does internally in one generation. That asymmetry is the gap being closed;
distilling the standards from Claude Fable 5 itself is what makes the substitution real.

## Phase by phase

### Phase 0: Scope, route, arm

The model names the deliverable, reads the matching craft standards in full (a pricing page
reads design + writing + marketing), and produces three artifacts before any work starts:

- **The rubric**: the craft rules that apply plus 3-8 task-specific checkable lines. This is
  the contract every later judge verifies against.
- **The constraint ledger** (when more than 5 constraints are live): every constraint
  numbered, walked line by line after every draft. Working memory becomes process.
- **The part inventory**: every section, state, screen, and paragraph the deliverable
  contains. Coverage is measured against this list, so the empty state and the footer get
  the same scrutiny as the hero.

### Phase 1: Candidates (creative work only)

For signature moments (a hero, a name, a positioning line, an architecture choice), the
model generates 3-5 independent candidates in fresh contexts, each forced down a distinct
angle: minimal vs maximal, conventional vs contrarian. The taste gate ranks them and names
what is worth grafting from the losers into the winner. Routine convergent work skips this.

Why it works: selection beats refinement. Polishing draft one anchors you to draft one's
structure; sampling five structures and picking lets you start from the best one available.

### Phase 2: Produce

One concern per step, with the relevant rubric lines re-read immediately before each part.
That re-read matters more than it looks: instruction-following decays over long contexts,
and bringing the standard next to the generation is the cheapest fix that exists.

### Phase 3: Evidence

Every claim gets the nearest inspectable artifact: screenshots at 360/768/1440 for UI, gate
outputs plus an observed run for code, loudness numbers for audio, sources with dates for
research, the final text re-read for copy. The rule is absolute: a claim without evidence is
reported as "unverified", never asserted. "It compiled" is not evidence that it works;
"looks right" is not evidence that it renders.

### Phase 4: Verification (one judged pass in `quick`; the convergence loop in `full`)

Fresh-eyes judges sweep the whole deliverable, one judge per quality dimension (layout,
color, copy, states, sync: typically 3-8 judges per sweep). Judges report EVERY finding at
any severity, with location and the rubric line violated; ranking happens after collection,
because self-filtering to "important" findings is how defects ship. A pass ledger tracks
`pass #, lenses, new findings`, and the loop stops only when two consecutive sweeps return
zero, because one quiet pass is luck and two is convergence.

A hard cap of 8 passes bounds the loop; anything still open at the cap is reported honestly.

### Phase 5: The taste gate

Rules catch violations; they do not catch inertness. Work can pass every rule and still be
something an expert scrolls past. After two clean passes, high-stakes work gets one pass of
the taste gate: a 3-lens panel (first-time audience, expert practitioner, brand owner)
checking what rubrics cannot name: momentum, optical balance, restraint, coherence, earned
emphasis, and rubric-gaming (the letter of a rule met while its spirit is missed).

The gate's output includes mandatory **DISTILL lines**: every taste judgment converted into
a candidate rule for the craft files. This is the system's flywheel: each taste call gets
written down once and never needs to be made again.

### The report

Outcome first, then evidence produced, the pass ledger, gate verdict, decisions made with
one-line reasons, and an UNVERIFIED section that is either honest or empty. Never a hedge.

## The judges, precisely

Two judge roles power everything (full prompts in
[frontier/references/judges.md](../frontier/references/judges.md)):

- **The verifier** finds rule violations. Fresh context, one lens, coverage-first, evidence
  actually inspected, output in a fixed parseable format. It never fixes; the producer fixes.
- **The taste gate** judges the last 5%. It runs on the strongest model available (judgment
  costs about 1% of generation, so even a premium model as judge is nearly free), and its
  DISTILL output feeds the standards.

In Claude Code these ship as agents (`agents/verifier.md`, `agents/taste-judge.md`); on
surfaces without subagents the same prompts run as separate bracketed passes.

## What it does not do

- It does not make a model smarter on genuinely novel single-shot problems; it makes the
  model's best work reliable and its average work obsolete.
- It does not verify what it cannot inspect: on surfaces without screenshot or run tooling,
  those checks land in UNVERIFIED instead of being claimed.
- It does not run free: see the token-cost section of the [README](../README.md). Quality
  per token is the point, not tokens saved.
