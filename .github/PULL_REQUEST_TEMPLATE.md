## What this changes

<!-- One concern per PR: one rule family, or one fix. -->

## The observed failure behind it

<!-- Required for rule additions: what the model actually did that the files missed. -->

## Checklist

- [ ] Rule is checkable (a verifier can mark pass/fail against it)
- [ ] Ban entries include a replacement rule
- [ ] File stays under ~190 lines (weaker line deleted if needed)
- [ ] No conflict with an existing rule (or the losing rule is deleted in this PR)
- [ ] Judge output formats untouched or kept byte-compatible across judges.md, agents/, PROMPT.md
