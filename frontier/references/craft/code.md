# Craft: Code (development, features, functions, APIs, connectors, debugging, audits)

What excellent engineering work IS, checkable.

## 1. Before writing

- Read before write: open the files you will touch plus their neighbors; identify the existing
  patterns (naming, error style, test style, comment density) and match them. New code should be
  indistinguishable in idiom from the surrounding code.
- Search before create: grep for an existing helper, type, or constant before writing a new
  one; a second copy of a utility is a future divergence bug.
- Root cause over symptom: reproduce the failure first; fix the cause, not the site where it
  surfaced. A fix you cannot explain mechanistically is a guess.
- Smallest correct change: no unrequested refactors, no drive-by cleanup, no speculative
  abstraction. A helper needs 2+ real call sites to exist.
- Changing a shared signature means reading every call site: the compiler lists them; you must
  confirm each one still means what it meant.

## 2. Correctness rules

- Types strict; no `any` escape hatches; typecheck is the cheap gate before any run.
- Error paths are designed, not swallowed: never an empty catch; either handle it meaningfully,
  add context and rethrow, or let it propagate. Error messages carry the failing input.
  Catch-log-continue that leaves the system in a wrong state is swallowing with extra steps.
- Validate at system boundaries (user input, external APIs, env at startup) with schemas that
  reject unknown fields and use closed enums; an optional-everything or any-typed schema is
  decoration, not validation. Nowhere else: trust internal code and framework guarantees.
- Concurrency is designed: check-then-act across an await (read, decide, write) is a race;
  concurrent mutations need a transaction, a unique constraint, or an atomic update.
- No awaited I/O per element in a loop over unbounded data (the N+1 shape): batch, join, or
  page with a stated cap.
- Determinism where the domain requires it (renders, tests, money): no Date.now or random in
  those paths, no dependence on object key order, locale, or timezone; inject clocks and seeds.
- Delivered code is complete: no TODO stubs, no commented-out blocks, no console.log leftovers,
  no "rest unchanged" placeholders.

## 3. APIs, connectors, integrations

- Explicit contract first: request and response schemas written down (or typed) before code.
- Every external call gets: a timeout, retry with exponential backoff on retryable statuses
  (429, 5xx) honoring retry-after, and a designed failure behavior (degrade, queue, or surface).
  Never retry non-retryable statuses (400, 401, 403, 422); that turns one failure into a flood.
- Idempotency for anything that mutates (keys or dedupe) so retries are safe.
- Pagination handled to the end, never just page one; rate limits respected proactively.
- Secrets only from env or a vault; never in code, logs, or error messages.
- Log enough to debug a 3am failure: the operation, the target, the failing input shape (not
  secrets), and the upstream error.

## 4. The gate ladder (run in order; claims need the output)

1. Typecheck / lint (seconds; run constantly)
2. Unit tests on the changed behavior, including the edge cases you named. A test counts only
   if it asserts concrete values and fails when the change is reverted; a test that cannot
   fail, or that mocks the unit under test, proves nothing.
3. Integration or run-the-app: exercise the real path and OBSERVE the result (response body,
   rendered page, DB row), not just the exit code
4. Re-read the full diff line by line as a reviewer before calling it done

"It works" means gate 3 output is in hand. "Tests pass" means the test run output is in hand.

## 5. Audit procedure (code review, security pass, quality audit)

1. Enumerate the surface: every entry point, data flow, and trust boundary in scope. Write the
   list down first; coverage is measured against it.
2. Per component, hypothesize failure modes (wrong output, crash, injection, race, leak, drift).
3. Verify each hypothesis with evidence: read the actual code path, run the repro, trace the data.
4. Report coverage-first: EVERY finding at any severity and confidence, with location, failure
   scenario (concrete inputs -> wrong outcome), and confidence. Dedupe and rank after.
5. Adversarial verify before confirming: for each finding, try to refute it (does the framework
   already guard this? is the input reachable?). Report survivors as confirmed, others as
   plausible.
6. State what was NOT covered, explicitly.

## 6. Ban list

- `any` and its aliases: `as any`, `as unknown as X`, non-null `!` on possibly-null values,
  `@ts-ignore` / `@ts-expect-error` without a reason comment. Same escape hatch, new spelling.
- Empty catch; swallowed promise rejections (fire-and-forget calls with no await and no .catch).
- Fallbacks that hide failure: `catch { return [] }`, `?? default` or `|| {}` on required data.
  Propagate or fail loudly; a silent default is a wrong answer delivered confidently.
- Speculative abstraction, config for things that never vary, feature flags for one-time changes.
- Defensive checks for states that cannot happen (they hide real bugs).
- Module-level mutable state as a per-request cache (stale or cross-request leakage in any
  multi-instance or serverless runtime).
- Comments that narrate the next line or advertise the change ("// improved version"); comment
  only constraints the code cannot express.
- Copy-pasted blocks with one variable changed -> extract only if 2+ real call sites (Section 1).
- console.log / print debugging left in delivered code.

## 7. Verification checklist (every pass)

1. Gate ladder outputs attached for every claim.
2. Edge cases named (empty, one, many, huge, unicode, concurrent, offline) and the relevant ones
   tested.
3. Error path exercised at least once (kill the network, feed bad input) and observed.
4. Diff re-read line by line; every line justified by the task.
5. Every call site of a changed signature read and reconciled.
6. Idiom check: would the file's original author recognize this as theirs?
