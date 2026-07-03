# Sample run: `/frontier the pricing page` (illustrative)

An authored, annotated walkthrough of a full-mode run, so you know what to expect before
spending the tokens. This is an illustration written to spec, not a captured transcript;
for real captured output see [the-distillation-run.md](the-distillation-run.md) and
[self-run.md](self-run.md). Product: Ledgerline, invoicing for freelance studios (all names
and numbers are the walkthrough's internally consistent demo data). Commentary in brackets.

---

## Phase 0: Scope, route, arm

Routed to: design.md + writing.md + marketing.md (pricing page = layout + copy + funnel).

RUBRIC (craft rules in force, plus task lines):
1. Three tiers, each priced so a real segment picks it; no decoy tier (product.md 4).
2. Primary claim + CTA inside first viewport at 1440x900 and 390x844 (design.md 2).
3. Every number on the page survives "how is that measured?" (writing.md, data.md).
4. Annual/monthly toggle visible without scroll; savings stated in currency, not percent.
5. FAQ answers the top 5 real objections from support tickets, phrased as asked.
6. One primary CTA per tier; message match from the ad promise ("stop chasing invoices").
7. Comparison table scannable in 15 seconds: 8 rows max, differences bolded, no checkmark walls.
8. Empty/error states for the currency selector and VAT field designed.

INVENTORY: 14 parts: hero, toggle, 3 tier cards, comparison table, FAQ x5, proof strip,
final CTA, footer links, currency selector states, VAT field states.


## Phase 1: Candidates

Four angles, parallel fresh contexts:
- A. Classic 3-card grid, calculator below the fold
- B. Calculator-first: interactive "what you lose to unpaid invoices" above tiers
- C. Single-price narrative page, tiers as expandable rows
- D. Comparison-table-first (competitor-anchored)

GATE (candidate-ranking mode): winner B. "The calculator converts the ad's promise into the
visitor's own number before asking for money; A is competent and forgettable (kill test
fails); C hides the decision; D anchors on competitors' framing." Grafts: A's tier-card
hierarchy, D's 8-row table.

## Phases 2-3: Produce + evidence

Built against the rubric, part by part. Evidence produced: screenshots at 360/768/1440,
toggle and both field states triggered and captured, copy ban-list scan run, all 9 page
numbers traced to their sources.

## Phase 4: Convergence loop

PASS LEDGER:
```
1. layout+copy+funnel        -> 11 findings
2. layout+copy+funnel+states -> 3 findings
3. all lenses                -> 0
4. all lenses                -> 0     converged
```

Sample findings from pass 1 (verifier format, verbatim):
```
LENS: layout
FINDINGS:
1. tiers section, 768px | comparison table scannable in 15s | table forces horizontal scroll at tablet width | confidence: h
2. hero, 390x844 | claim + CTA in first viewport | CTA sits 64px below the fold on mobile | confidence: h
3. tier cards | one primary action per view | "Start free" and "Book a demo" carry equal visual weight on the Studio tier | confidence: h
CHECKED: rubric lines 1, 2, 6, 7 via screenshots at three widths, cropped
NOT CHECKABLE: line 5 (FAQ content is the copy lens)
```
```
LENS: copy
FINDINGS:
1. FAQ item 3 | answers phrased as asked | "What about data portability?" is vendor phrasing; tickets say "can I get my invoices out?" | confidence: h
2. proof strip | numbers survive measurement question | "trusted by 4,000+ studios" uses a rounded plus; billing records say 4,217 | confidence: m
3. hero subhead | machine-cadence scan | "No spreadsheets. No chasing. Just paid." is symmetric negation | confidence: h
CHECKED: lines 3, 5, 6 against final text, ticket export, billing count
NOT CHECKABLE: none
```

[Every finding fixed; pass 2 caught what the fixes disturbed; passes 3 and 4 clean.]

## Phase 5: Taste gate

```
GATE: fail
FINDINGS:
1. tier names | brand owner | "Starter, Growth, Studio" could be any SaaS; the product voice is trade-specific everywhere else | rename from the studio world | confidence: m
2. annual toggle | first-time audience | eye lands on the calculator, then tiers; the toggle registers on second read only | move it into the tier-card header row | confidence: h
RANKING: n/a
DISTILL:
- marketing.md candidate: pricing toggles live where the eye decides (the tier header),
  not above the section; a toggle seen after the price anchors monthly
```

[Both fixed: tiers renamed Solo, Studio, Agency; toggle moved. Re-gate: pass, DISTILL: none.]

## Report

```
EVIDENCE: 9 screenshots (3 widths x 3 states), ban-list scan output, 9/9 numbers traced
PASSES: 4 sweeps (11 -> 3 -> 0 -> 0), 14/14 inventory parts swept
CANDIDATES: 4 angles; calculator-first won on the kill test; grafted card hierarchy + 8-row table
GATE: fail -> 2 findings fixed -> pass
DISTILL: 1 rule appended to marketing.md
DECISIONS: kept USD-only at launch (currency selector deferred to a listed non-goal)
UNVERIFIED: nothing
```

---

Total: one confirmation, one autonomous run, a page where every number is real, every state
is designed, and the machine tells are gone. That is the product.
