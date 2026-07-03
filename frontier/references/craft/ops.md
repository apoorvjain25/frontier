# Craft: Ops (deploys, migrations, monitoring, incidents, performance, infra cost)

What excellent operations work IS, checkable. For anyone running production software.

## 1. Deploys and releases

- Know the rollback BEFORE shipping: which command or click reverts this, and does it also
  revert data? If the answer is unclear, the deploy is not ready.
- Deploy small and often; one logical change per deploy. A big-bang deploy is a big-bang
  debugging session.
- Config through env, never through code edits per environment; validate required env at
  process start and fail fast (a missing variable discovered mid-request is a delayed outage);
  risky paths behind a feature flag you can flip without deploying. Flags get an owner and a
  removal date.
- After every production deploy, smoke-test the golden paths (home, auth, the money path),
  asserting on real content or behavior, not just HTTP 200, and look at the error tracker for
  10 minutes. Deploy-and-leave is how small breaks become outages. No risky deploys right
  before you stop working for the day.

## 2. Database migrations (the highest-stakes routine operation)

- Expand, migrate, contract: add the new shape first, backfill, switch reads, only then remove
  the old shape in a LATER deploy. Never ship a destructive migration in the same deploy as
  the code that requires it; rollback becomes impossible.
- Backup immediately before any schema change, and know the restore procedure. A backup that
  has never been restored is a hope, not a backup; rehearse restore on a copy at least
  quarterly and after any backup-config change.
- Test the migration against a production-like copy first (comparable row counts, duration,
  locks). A migration that locks a hot table for minutes is an outage; use the non-blocking
  variant (concurrent index build, batched backfill) on hot tables.
- Migrations run once, as a deliberate deploy step, never on every instance boot (parallel
  instances racing the same migration corrupt state).
- Migrations are append-only history: never edit an applied migration; write a new one.
- Manual production data fixes: snapshot the affected rows and write the inverse statement
  BEFORE running the fix.

## 3. Monitoring and observability

- Minimum per service: an uptime check on the golden route from OUTSIDE your infrastructure,
  error tracking wired (with source maps), one latency signal (p95, not average; averages hide
  the users who left), and one correctness signal (jobs completed, emails delivered, renders
  succeeded).
- Alerts are actionable: a page means a human must act now; everything else is a digest.
  Alert fatigue is how real incidents get ignored.
- Logs structured, with request or job ids, so one failure can be traced end to end. Scheduled
  jobs and queues are monitored for "did not run" (silence is the worst failure mode), not
  just "ran and errored".
- Job and webhook handlers are idempotent: at-least-once delivery is the norm, so running
  twice must be safe. Jobs that can outlive their interval take a lock or skip the overlap.

## 4. Incidents

- Stabilize first: rollback beats live debugging in production. Restore service, then find the
  root cause with the pressure off.
- Communicate early if users are affected: what is broken, what works, next update time.
- Afterwards, a short blameless postmortem: timeline, root cause, and ONE systemic fix that
  makes this class of failure impossible or loud. A postmortem without a shipped fix is a diary.

## 5. Web performance budgets (measured, not vibed)

- Budgets on real pages: LCP under 2.5s, CLS under 0.1, INP under 200ms, measured with
  Lighthouse or field data, on a throttled connection, not on a dev machine's localhost.
- Images sized to their container, modern formats (webp or avif), lazy-loaded below the fold.
- Fonts: subset, preload the one or two that matter, font-display swap.
- JS budget stated per page; third-party scripts audited (each one is someone else's outage).
- Cache deliberately: static assets immutable with hashes; HTML and API responses with
  explicit, chosen TTLs.

## 6. Cost discipline

- Know the top 3 cost drivers per project (compute, database, AI API spend, bandwidth) and
  check them monthly; set anomaly alerts on the spiky ones (AI keys especially).
- Cache expensive calls (LLM prompt caching, memoized renders); batch what is not urgent
  (batch APIs are typically half price); background what is slow.
- Unbounded anything (queues, retries, logs, generated files) eventually becomes a bill or an
  outage; everything has a cap or a TTL.

## 7. Ban list

- Destructive migration + dependent code in one deploy.
- Schema changes without a backup taken immediately before.
- Migrations run automatically on instance boot in multi-instance deploys.
- Cron jobs and webhooks with no failure alerting (silent death).
- Retry loops without backoff and caps (self-inflicted denial of service).
- .env files committed; production credentials used in development.
- "Works on my machine" or a green build offered as production verification.
- Performance claims from a dev machine; cost estimates never checked against the bill.

## 8. Verification checklist (every pass)

1. Rollback written down (and rehearsed for anything touching data)?
2. Post-deploy smoke output attached (golden routes with asserted content, error tracker
   screenshot or counts)?
3. Migration tested on a prod-like copy; backup timestamp noted?
4. Monitors exist for the new surface (including "did not run" for jobs)?
5. Performance numbers from an actual measured run, on a real page, throttled?
6. New recurring costs identified, capped, and alerting?
7. Job handlers safe to run twice (idempotency stated or demonstrated)?
