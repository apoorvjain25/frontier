# The distillation run (real)

This is not a demo. On July 2-3, 2026, in the final days of Claude Fable 5's (Anthropic's
frontier tier) general availability, the frontier kit was run through its own machinery
with Fable as every auditor. The numbers below are from that session's actual tool outputs.

## Setup

- 8 fresh-context auditor agents, spawned in parallel, none of which had seen the files
  being written (fresh eyes by construction).
- 7 agents swept the 21 craft files, 3 files each, with a fixed charge: convert vague lines
  to numbers, tighten rules a literal-minded model could satisfy in letter while missing in
  spirit, extend ban lists with failure modes the auditor knows from its own generation
  tendencies, resolve internal contradictions. Budget: at most +25 lines per file.
- 1 agent reviewed the system's own prompts (both judge agents, the skill, the portable
  judges file, PROMPT.md) against the prompting craft standard.

## The craft-file ledger

Line deltas as reported per batch (growth is tightening, not padding; every file stayed
under the 190-line cap and kept its ban list and verification checklist):

```
visual      design 97->121   motion 72->91    media 84->101
words       writing 84->109  storytelling 95->117  translation 92->112
knowledge   research 63->88  academic 88->112 teaching 86->106
direction   prompting 79->104  management 88->113  coordination 90->109
persuasion  marketing 103->128 sales 102->121  career 91->109
engineering code, security, ops: 43 documented change entries (deltas not logged per line)
deciding    product, decisions, data: 44 documented change entries
```

About 260 documented change entries across the seven batch reports. A sample of what
landed, quoted from the files:

- writing: a machine-cadence tells block naming the auditor's own tics: claim triples,
  trailing participles, one-word-question pivots, symmetric negation, fake breadth
- design: hero padding quantified (96-160px desktop), first-viewport rule at two exact
  resolutions, dark-mode elevation as +4-6% lightness per level
- data: "the drop in the last week is an incomplete week"; a surprising number is a
  pipeline bug until the joins are checked; winner's shrinkage on shipped A/B tests
- decisions: pre-mortems must include one self-inflicted cause and one thesis-wrong cause;
  a forecast of exactly 50% is a refusal to predict
- storytelling: fantasy-default names (Elara, Kael, Lyra) banned; "let out a breath they
  didn't know they were holding" banned; label-then-show emotion banned

## Fresh eyes beat the author (the proof this method needs)

The auditors caught defects in files their own model tier had written days earlier:

1. A genuine contradiction: design.md prescribed "warm off-white" surfaces while its own
   ban list named the cream band as a model-default tell. Resolved to #F7F7F5-#FCFCFB with
   cream requiring a written brand reason.
2. An arithmetic bug: 30-60ms staggers times 8+ siblings breaks the file's own 300ms group
   cap. Fixed with a batching rule.
3. A garbled sentence in storytelling.md ("per beat beat ten sprayed ones"), invisible to
   the author across multiple passes.

## The prompt review: 42 findings, 42 applied

The system's own judge prompts went under review and came back bleeding: the three encodings
of the taste gate emitted different field counts (any parser would choke), a renamed agent
left a stale reference in the skill, verifier rule 1 contradicted rule 5, one instruction
was unexecutable on claude.ai, and the confidence vocabulary (high/medium/low vs h/m/l)
drifted between prompt and template. All 42 were fixed; the judge formats are now
byte-compatible across judges.md, both agents, and PROMPT.md.

## The repo passed its own gates

While this repository was being authored, an automated ban-list check blocked drafts of
the README and PROMPT.md four separate times: quoted ban-list examples, an inline emoji
icon, and a round multiplier all got flagged, then fixed or consciously accepted. Final verification: a clean ban-list scan across every file, 21/21 craft files with
intact structure, the upload zip rebuilt byte-for-byte from the bundled standards, and all internal links resolving.

## Why this matters

Every rule in these files is one of three things: a number a verifier can check, a loophole
that got closed, or a confession: the frontier model writing down how machine output fails
so that cheaper models can be caught doing it. That last category cannot be brainstormed
after the fact; it had to be extracted while the strongest available judge was still in the
room. It was.
