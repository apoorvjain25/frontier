# Making frontier yours

The standards ship strong, but the system is designed around one loop: your taste, written
down, compounds. This page covers the three ways to feed it and the rules that keep the
files sharp.

## 1. Harvest DISTILL lines (the built-in flywheel)

Every taste-gate run ends with DISTILL lines: taste judgments converted into candidate
rules, like:

```
DISTILL:
- writing.md ban list candidate: headlines that ask the question the body answers
  ("What if deploys were instant?") -> assert the capability instead
```

Review them after each high-stakes run. Append the ones you agree with to the matching file
in `frontier/references/craft/` (or your live standards folder if you keep one). Discard the
rest; the gate proposes, you decide.

## 2. Add rules from observed failures

Caught the model doing something the files miss, twice? That is a rule. The contribution
bar (same for your fork as for PRs here):

- **Sourced from a real failure**, not theory. The best rules name the exact failure ("the
  drop in the last week is an incomplete week").
- **Checkable**: a verifier reading the rule can mark work pass or fail. "Be more careful
  with joins" is not a rule; "row counts at each join step" is.
- **Placed with its family**: rules go in the file's numbered sections, machine tells go in
  the ban list WITH a replacement (never a bare "don't"), checks go in the verification
  checklist.
- **One statement, once**: if a rule needs restating for emphasis, it needs rewriting for
  clarity. Conflicting rules: delete the loser, never stack a third rule to arbitrate.
- **Style**: keep each file under ~190 lines (deletion of weak lines is always welcome),
  and match the file's voice.

## 3. Swap in your brand and your gold examples

- The craft files are deliberate defaults for when no brand exists. Your real tokens always
  win: design.md's precedence section says so explicitly. Keep a project-level brand file
  and the rubric will draw from it first.
- Gold examples outperform rules for anchoring: when you produce something you consider
  excellent, keep it (a `gold/` folder works), and reference it in Phase 0 ("match the
  structure of gold/spec-example.md"). Imitation of a known-excellent skeleton is the
  single cheapest quality lift available.

## Editing the judges

`frontier/references/judges.md` is the canonical judge source; `agents/verifier.md`,
`agents/taste-judge.md`, and the judge blocks in `PROMPT.md` are encodings of it. If you
edit one, sync all four, and keep the output formats byte-compatible (fixed field counts,
h/m/l confidence tokens, NONE for empty): downstream steps parse them.

## Structural invariants (do not break these)

1. Every craft file keeps: numbered rule sections, a ban list with replacements, a
   verification checklist. The loop depends on all three existing.
2. The routing table in SKILL.md maps every craft file exactly once.
3. `quick|full|gate` mode semantics stay stable; scripts and habits build on them.
4. The 8-pass hard cap stays: it is the operator's brake on token spend.
5. Judge outputs stay parseable (see above).

