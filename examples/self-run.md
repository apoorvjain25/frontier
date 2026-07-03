# The self-run (real): this README through its own gate

Before publication, the README you arrived from was run through frontier's own taste gate
(`agents/taste-judge.md`, gate mode, judged by the frontier-tier model), pass after pass,
with every finding either applied or justified in writing. This file is the receipt: real
verdicts, real fixes, and an honest stop.

## Method

Each pass spawned a fresh-context taste-judge with the writing and marketing craft standards
as rubric, plus six task lines (60-second stranger test, headline-only read, claims
verifiable from repo files, kill test per section, momentum, origin-as-evidence). The judge
read the README, the repo tree, and the receipt files, and returned the standard gate
format. The authoring context then applied fixes and banked the gate's DISTILL rules into
the craft files before recounting any published aggregate (a rule this very loop created,
twice the hard way).

## The pass ledger

| Pass | Verdict | Findings | What it caught |
|---|---|---|---|
| 1 | fail | 12 | integrity: the README's numbers contradicted its own receipt (200 vs ~260; "8 swept" vs 7+1), the proof story told twice, five off-identity badge colors, an ending that deflated into the generic star ask |
| 2 | fail | 11 | consequences: banking pass 1's rules made the published rule-count stale; an approval narrated before it happened; the hero printed "best-of-5" where the system guarantees 3-5; a receipt link pointing at the wrong receipt |
| 3 | fail | 9 | cadence: a sign-off triple, six "X, not Y" frames, announced candor ("Honesty about..."), an "In short" label, an apostrophe typo inside the flagship receipt |
| 4 | fail | 10 | polish: an excerpt eliding half of a finding-DISTILL pair, fork-permission stated twice in 12 lines, one bullet missing its bold lead, near-synonym headings, jargon |
| 5 | fail | 8 | echo budgets: a FAQ answer pre-answering the next FAQ, quoted excerpts drifting from their source by clauses, the home column of the comparison table dodging its row's units |
| 6 | fail | 7 | residue: one structural line missing from a quoted block, a mechanic told five times across prose, diagram, and tables, tense that assumed an event that had not yet happened |

Trajectory: 12, 11, 9, 10, 8, 7 findings, with confidence collapsing (pass 1 carried five
high-confidence integrity defects; pass 6 carried one, a single missing `RANKING: n/a` line
in a quoted excerpt).

## The honest stop

The loop was authorized to run to a cap of six passes and it used all six. Pass 6's seven
findings were applied after the loop closed, so the published README has NOT received a
formally clean gate pass, and this receipt says so plainly. What the six passes did produce:
every number on the page byte-matches its receipt, every quoted excerpt byte-matches its
source, every link and image resolves, and the machine-cadence tells the repo warns about
were hunted in its own copy, six times.

## What the loop banked (the flywheel, demonstrated)

32 rules and refinements were distilled from these six passes into the shipped craft files,
among them: receipt-cited numbers must byte-match the receipt; recount every published
aggregate as the LAST step after rule-banking (created after banking invalidated the count,
twice); never narrate an approval before the event; badge rows are brand surface; the
contrast-frame budget; announced candor; excerpts keep finding-rule pairs and structural
lines whole; comparison cells answer their row's units, home column audited first. The
gate also singled out two lines of the README as exemplary: the fold line ("it did not
pass on the first try") and the closer ("that is the skill working").

## Measured cost

The first gate pass was instrumented: 63,763 tokens (about 64k) for 12 findings, roughly 5k
tokens per pre-launch defect. Later passes ran through the same agent without per-pass
instrumentation and are not claimed as measured.

## Why publish the failures

A quality tool that only shows you its wins is a quality tool you cannot trust. The gate
failed this README six times in a row, each time on thinner ice, and the fixes it forced
are visible in the page you already read. That is the product doing to its own launch what
it will do to your work.
