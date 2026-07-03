# Craft: Product (product decisions, specs, PRDs, feature scoping, prioritization, pricing)

What excellent product thinking IS, checkable.

## 1. The bar

- Problem before solution, always. Every feature starts by stating: the exact user, the job they
  are trying to do, the trigger moment, and the evidence this problem is real (quotes, support
  tickets, drop-off data, observed behavior). "Users want X" without evidence is a guess; label
  it as one.
- The evidence bar: 3+ independent sources (different users, tickets, or sessions) or one
  quantitative signal (funnel drop-off, search logs, support volume). One enthusiastic quote is
  an anecdote; include it, label it, never build on it alone.
- Every feature has a measurable success signal defined BEFORE building, plus a guardrail metric
  it must not hurt. "Engagement" undefined is not a metric. The success metric must be one the
  feature could fail to move; if no outcome counts as failure, it is a victory lap, not a metric.
- One-sentence test: "for <user>, <outcome>". If the sentence needs "and", it is two features.
- Non-goals are written down. A spec without explicit non-goals will grow until it ships late.

## 2. The spec skeleton (any PRD, feature spec, or change request)

1. Problem: one paragraph, with the evidence attached.
2. Who exactly: the segment and the trigger moment, not "all users". Personas are jobs and
   trigger moments, never demographics theater (name, age, hobbies).
3. Proposed behavior: user-visible, walked through as a story, INCLUDING empty, error, loading,
   permission-denied, and concurrent-edit states (design.md section 5 applies). A spec that only
   describes the happy path is half a spec.
4. Multi-tenant and permission implications named explicitly (who can see or do this, per role,
   per tenant; security.md applies).
5. Rollout: what existing users and data see on day one (migration, backfill, defaults), plus
   the kill switch or rollback path.
6. Success metric + guardrail metric, and where each is measured today.
7. Non-goals: what this deliberately does not do.
8. Smallest shippable slice: the version that tests the riskiest assumption.
9. Risks and open assumptions, each with the cheapest test that could kill it.

Verification of a spec: an engineer with no context could build it with zero clarifying
questions, and every requirement traces back to the stated problem. Requirements are MUST or
WON'T; "could consider" and "ideally" are open questions with an owner, not requirements.

## 3. Prioritization and scope discipline

Scope note: this section ranks work within one product. Choosing between projects, portfolio
focus, and any one-way door belong to decisions.md.

- Score candidates on reach x impact x confidence / effort, or by job severity (how painful,
  how frequent, how many). Write the scores down BEFORE ranking; if the final ranking overrides
  the scores, write the override reason next to it.
- If everything is P1, nothing is. Force-rank; ties are a refusal to decide.
- Name what each yes displaces: the next-ranked item that now waits. If nothing waits, the
  ranking is not real.
- v1 is the smallest thing that tests the riskiest assumption, not a smaller version of the
  full vision. Cut scope by removing whole capabilities, never by shipping the same scope at
  lower quality. The riskiest assumption is one you would give under 80% odds today; if every
  listed assumption feels near-certain, you have not found it yet.
- A state deferred to "fast follow" still gets its interim behavior specified (what the user
  sees meanwhile); deferred-and-undefined is how edge cases ship broken.
- Define kill criteria when starting ("if activation does not move by <date>, we remove it").
  Sunk cost is not a roadmap argument.
- Before building, ask: can this be tested with a cheaper artifact (a fake door, a concierge
  version, a landing page, a manual process)?

## 4. Pricing and packaging

- Choose the value metric first (the thing customers happily pay more of as they get more
  value: seats, usage, outcomes). The wrong value metric caps the business. Check it against
  cost: if cost scales with usage but price scales with seats, margin erodes as customers grow.
- Default structure: 3 tiers; each tier maps to a customer situation, not a feature dump, and
  each is priced so a real segment picks it (a tier that exists only to make another look
  cheap is a decoy). Enterprise gates are capabilities (SSO, SCIM, audit), not padding.
- Price from value evidence (what the alternative costs, what the outcome is worth), not from
  cost-plus or fear. The test is a signed order, a paid pilot, or a card on file; verbal
  enthusiasm and surveys are not payment.
- Plan grandfathering and migration BEFORE changing prices; changing prices on existing
  customers without a plan burns trust permanently.

## 5. Ban list

- Solution-first specs (a feature looking for a problem).
- "Users want", "people are asking" with zero attached evidence, or one quote doing the work
  of a trend.
- Success metrics that cannot be measured in the current analytics setup, or that cannot fail.
- Invented precision in projections ("+23% activation" from nowhere); give direction and rough
  magnitude with the basis, or write "no basis, tripwire only".
- Roadmap theater: dates without scope, or scope without dates presented as commitments.
- "Competitor has it" as the entire rationale (it is an input, never the argument).
- Specs that leave states undefined ("edge cases TBD", "fast follow" with no interim behavior).
- Requirements written as hedges ("we could", "ideally"); every line is MUST, WON'T, or an
  open question with an owner.
- Endless v1 scope growth ("while we are at it").

## 6. Verification checklist (every pass)

1. Evidence present? 3+ sources or one quantitative signal, quoted or linked, not asserted.
2. All states specified (empty, error, loading, denied, concurrent), including deferred ones?
3. Metric + guardrail measurable today? Named where? Could the metric plausibly fail?
4. Non-goals exist, and each names something a stakeholder would have assumed was included?
5. Riskiest assumption identified (under 80% odds), with a cheaper test considered?
6. Stranger test: buildable with zero clarifying questions?
7. Tenancy, permissions, and rollout (existing users, kill switch) covered for every surface?
