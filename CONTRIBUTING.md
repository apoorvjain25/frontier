# Contributing to frontier

The standards get sharper one observed failure at a time. Contributions are welcome; the
bar below keeps 21 files from decaying into 21 essays.

## What makes a good contribution

**New rules and ban-list entries** (the most valuable PR):
- Sourced from a real failure you observed, ideally with the before/after in the PR
  description. Theory does not qualify; "the model did X twice and the files missed it" does.
- Checkable: a verifier reading your rule can mark work pass or fail against it. Convert
  adjectives to numbers or named patterns.
- Ban entries always ship with a replacement rule (what to do instead), never a bare "don't".
- Placed correctly: rules in the numbered sections, machine tells in the ban list, checks in
  the verification checklist of the same file.

**Fixes**: contradictions between files, rules a literal-minded model can satisfy in letter
while missing the spirit, garbled sentences, broken links, format drift between the four
judge encodings (judges.md is canonical; agents/ and PROMPT.md must stay byte-compatible in
output shape).

**Sample runs**: real transcripts (sanitized) for examples/ that show the loop on a domain
not yet covered.

## Hard requirements (PRs failing these get bounced kindly)

1. Each craft file stays under ~190 lines. Adding a rule may mean deleting a weaker one;
   deletions are contributions too.
2. One statement, once. If your rule conflicts with an existing one, propose deleting the
   loser, never a third rule to arbitrate.
3. Keep every file's three-part structure intact: numbered sections, ban list with
   replacements, verification checklist.
4. Match the file's voice: dense, imperative, concrete, zero filler. Run your own text
   against writing.md's ban list before submitting.

## Process

1. Open an issue using the "Rule proposal" template (or "Bug") so the failure is on record.
2. PR against `main`, one concern per PR (one rule family, one fix).
3. In the PR description: the observed failure, the exact text added or changed, and which
   file section it lives in.

## What will not be merged

- Vertical domain knowledge (medicine, law, a specific framework's API): the crafts are
  horizontal by design; verticals ride on top per task.
- Rules that only restate the protocol's laws in a domain costume.
- Style-preference edits without an observed failure behind them.
- Anything that makes a judge's output format unparseable.

## License

By contributing you agree your contribution is licensed under the repo's MIT license.
