# Craft: Data (analytics, metrics, dashboards, experiments, SQL, forecasts, financial models)

What excellent data work IS, checkable.

## 1. Metrics

- Every metric is defined in writing: numerator, denominator, time window, and exclusions.
  "Active users" undefined is a fight waiting to happen.
- One north star per product plus 3-5 input metrics that causally drive it. More than that is
  a dashboard, not a strategy.
- Prefer ratios and cohorts over raw counts: week-4 retention by signup cohort beats total
  users; conversion per visitor beats total signups.
- Watch the denominator over time: a conversion "improvement" caused by fewer low-intent
  visitors is a mix shift, not a win; check whether the base changed before crediting the rate.
- Distributions over averages: report median and p90 for anything skewed (latency, revenue per
  user, session length). An average hides the story.

## 2. Honest statistics (the traps, named)

- State n on everything. A percentage without its base is decoration. Pair every percent
  change with the absolutes ("+300%" that is 2 to 8 users reads very differently).
- Check freshness and completeness first: when did the data last load, and is the final
  period partial? The classic "drop in the last week" is an incomplete week.
- Sanity-bound every headline: reduce it to a per-user, per-day, or per-dollar rate and check
  plausibility against a known reference. A surprising number is a pipeline bug until the
  joins are checked; most "insights" are duplicated rows.
- Define the metric and the segments BEFORE looking at results; slicing after the fact until
  something is significant is p-hacking. A slice found after looking is a hypothesis for the
  next test, reported as exploratory, never as a finding.
- Simpson's paradox check: segment the headline number at least once (by plan, source, device,
  tenant size) to catch mix effects before claiming a trend.
- Survivorship: who is missing from the data (churned users, failed requests, non-responders)?
- Correlation discipline: a correlation earns "associated with"; causation needs an experiment
  or a named identification strategy (natural experiment, diff-in-diff, instrument, or
  mechanism plus dose-response plus temporal order), stated explicitly.
- Novelty and seasonality: compare like-for-like periods; a launch-week spike is not a trend,
  and no trend claim from fewer than 4 points.

## 3. Experiments (A/B and beyond)

- Written hypothesis with an expected effect size before starting.
- One primary metric, guardrail metrics, and a duration derived from a baseline rate and a
  minimum detectable effect; "run it two weeks" with no power basis is a guess, label it one.
- Fixed stop rule. Peeking and stopping at the first significant moment manufactures winners;
  extending a running test after seeing results makes it exploratory, label it so.
- Expect winner's shrinkage: a shipped winner's measured lift overstates its true effect
  (regression to the mean); forecast rollout impact below the experiment's point estimate.
- Record every experiment including losers and neutrals; a program that only remembers wins
  learns nothing.
- No experiment is cheaper than a good one: for small-traffic products, prefer big obvious
  bets and qualitative evidence over underpowered tests.

## 4. SQL and queries

- Verify structurally, not by eyeball: row counts at each join step (joins silently duplicate
  or drop), dedupe keys checked, date boundaries and timezones handled explicitly (UTC vs
  local off-by-one is the classic), NULL behavior stated on every aggregate and filter.
- Name CTEs by meaning (active_paying_tenants, not t1).
- Units consistent end to end: cents vs dollars, seconds vs milliseconds, one currency throughout.
- Test the query on a slice of 10-20 rows you can hand-verify before trusting it at scale.
- A number that matters gets recomputed a second, independent way before it ships: independent
  means a different data path (another table, tool, or route), not the same query rerun.

## 5. Dashboards and data visualization

- A dashboard answers named questions; "showing the data" is not a purpose. Write the
  questions above the charts.
- Chart by question: trend = line; comparison = bar (axis starts at zero, always); distribution
  = histogram; proportion = donut or stacked bar with 5 or fewer slices; relationship = scatter.
- Direct labels over legends where possible; annotate events (launches, outages) on trends;
  no dual axes without a strong stated reason; never 3D.
- Low-ink: gridlines faint, data ink dominant, one accent for the thing that matters.

## 6. Forecasts and financial models

- Every assumption listed on its own sheet or block, each sensitivity-tested (best, base,
  worst). A model with hidden hardcoded numbers inside formulas is broken.
- Drivers separated from outputs; anyone can trace a bottom-line cell to its inputs.
- Back-test where history exists: run the model against the past and show the error.
- Present forecasts as scenarios (best, base, worst); a single path alone reads as a commitment.
- Round outputs to input precision: 1-sig-fig assumptions earn "$1.2M", not "$1,247,332".
- Label the confidence: a model is a reasoning tool, not a prophecy; say which assumption
  dominates the outcome.

## 7. Ban list

- Cumulative charts to fake growth (total signups only goes up).
- Truncated bar axes; dual-axis spaghetti; 3D anything; decorative gradients on data ink.
- Vanity metrics as headlines (registered users, page views) where money or retention metrics
  exist.
- "Statistically significant" without n, test, and effect size.
- Averages for skewed distributions; percentages with tiny bases presented as findings.
- Metrics that changed definition mid-chart without an annotation.
- Hedged findings ("the data suggests there may be a possible trend"); give the estimate, its
  range, and what evidence would confirm or kill it.
- Narrative-first analysis (story written, then numbers picked to fit); every finding ships
  with the strongest number against it.
- Invented precision: more significant figures than the sample supports (n under 1000 earns
  whole percentage points, not decimals).

## 8. Verification checklist (every pass)

1. Every metric on the page has its written definition (numerator, denominator, window)?
2. One key number recomputed via a genuinely different data path and matching?
3. Freshness checked, partial periods flagged, headline sanity-bounded per user or per day?
4. Date boundary and timezone handling checked on at least one edge day?
5. Headline segmented once for mix effects?
6. Charts: axes honest, types matched to questions, n visible?
7. For experiments: hypothesis, powered duration, stop rule, guardrails written before start?
8. Could the reader make the decision from this alone, and is the dominant assumption named?
