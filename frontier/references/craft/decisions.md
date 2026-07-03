# Craft: Decisions (strategy, big choices, trade-off analysis, estimation, pre-mortems)

What excellent decision-making IS, checkable. This is the meta-craft: it applies to choosing
between projects, positioning, build vs buy, vendors, hires, and any one-way door. (Ranking
features inside one product: product.md section 3.)

## 1. Frame before evaluating

- Write the actual question down: what is being decided, by when, who decides, and what a good
  outcome looks like in 6-12 months. Most bad decisions answer the wrong question well.
- Classify reversibility FIRST. Two-way doors (reversible) get decided the same day with
  judgment and a note; one-way doors (contracts, pricing changes on existing customers, public
  commitments, architecture rewrites, shutting something down) get the full treatment below.
  Matching rigor to stakes is the craft; full analysis on a two-way door is procrastination.

## 2. Options and criteria

- Always 3+ real options, including "do nothing" and "delay until <specific new information>".
  A binary choice is usually a framing failure. An option is real only if you can name the
  condition under which you would pick it; no nameable condition means it is a decoy, replace
  it. The delay option states what information arrives, by when, and what waiting costs.
- Set the decision criteria and their weights BEFORE scoring options; criteria written after
  looking at options get fitted to the favorite. If a criterion occurs to you only after
  seeing an option, flag it and score with and without it.
- Each option gets its strongest honest case, written as its advocate would write it. Check:
  every non-favorite's case contains at least one point the favorite cannot match; if none
  does, you wrote strawmen.

## 3. Evidence and estimation

- Outside view first: what is the base rate for things like this (how long similar features
  actually took, how often such partnerships worked)? Then adjust with inside specifics.
- Expected value with ranges, never point estimates. Name the paths to zero explicitly. A
  range must be tight enough that its two ends would lead to different actions; a range
  spanning orders of magnitude is not an estimate, it names the sub-question to answer first.
- Estimation rule: derive from reference class (your own past similar work), then multiply the
  first instinct by 2-3 for anything novel. Track estimate vs actual to calibrate.
- Audit input incentives: who supplied each key number, and what did they want you to decide?
  Vendor benchmarks, advocate forecasts, and your own hopes all count as interested parties.
- Sequence risk-first, not easy-first: do the step most likely to kill the plan earliest,
  while the sunk cost is smallest.

## 4. Stress the choice

- Pre-mortem, mandatory on one-way doors: "It is 12 months later and this failed. Why?" List
  the top 3 causes; each gets a mitigation, a tripwire metric, or kills the option. At least
  one cause must be self-inflicted (your execution or judgment) and at least one must be the
  core thesis being wrong; a pre-mortem of only external causes is a defense, not a stress.
- The flip test: write down the evidence that would change your mind. If nothing would, this
  is not a decision, it is a commitment already made; say so and skip the analysis theater.
- Second-order effects: and then what? Who reacts (competitors, customers, the platform you
  depend on), what breaks, what compounds?
- Tripwires over vibes: define in advance the observable signal and date that would trigger
  reversal or doubling down ("if activation < X by <date>, we revert").

## 5. Strategy specifically

- A strategy names three things: where to play, how to win there, and what you are explicitly
  NOT doing. A strategy without stated sacrifices is a wish list.
- Moat honesty: name the mechanism (network effects, switching costs, scale economics, brand,
  proprietary data) or admit there is none yet and say what earns one.
- Focus math for a multi-project portfolio: attention is the scarce input; rank projects by
  expected value per hour of your attention, fund the top explicitly, and put the rest in
  explicit maintenance mode (defined minimal effort), not silent decay.
- Positioning is a choice of enemy and alternative: "for <who>, unlike <the real alternative
  they use today>, X does <the one thing>". If the alternative is "nothing", the positioning
  must sell the problem, not the product.

## 6. The decision journal (calibration engine)

Record for every significant decision: the date, the question, options considered, the choice,
the reasoning in 3 lines, the expected outcome with a probability, and a review date. The
forecast must be scoreable: a stranger reading it on the review date can mark it right or
wrong without interviewing you; exactly 50% is a refusal to predict, commit to a direction.
Review on that date and score it. This is how judgment actually improves; memory alone
rewrites history.

## 7. Ban list

- Sunk cost as an argument ("we already built so much").
- Deciding by recency (last article read) or by whoever argued last.
- Analysis paralysis on reversible calls; gut calls on irreversible ones.
- Consensus theater: asking many people, hearing none, deciding what you already wanted
  without saying so (deciding against advice is fine; pretending to weigh it is not).
- Hedged endings ("it depends", "both have merit"); end with the pick, a confidence level,
  and the one piece of information that would flip it.
- Symmetric pro/con lists that decide nothing; weight them, then state which single
  consideration dominates and why the choice follows from it.
- Defaulting to the middle option because it feels safe; recommend the middle only by showing
  it beats each extreme on the dominant criterion.
- Invented precision: option scores like 7.3/10 or weights to two decimals; use coarse 1-5
  scales unless a source justifies finer.
- Point estimates presented without ranges; plans with no named kill condition.
- Strategy documents with zero sacrifices and ten priorities.

## 8. Verification checklist (every pass)

1. The question, decider, and deadline written down?
2. Reversibility classified, rigor matched to it?
3. 3+ options including "nothing" and "delay", each with a pick-condition and a strongest
   case the favorite cannot fully match?
4. Criteria weighted before scoring; late-arriving criteria flagged and double-scored?
5. Base rate consulted? Ranges decision-tight, not points? Paths to zero named? Input
   incentives audited?
6. Pre-mortem (one-way doors) includes a self-inflicted cause and a thesis-wrong cause, each
   mitigated or tripwired? Flip test written?
7. Journal entry has a scoreable outcome, a directional probability, and a review date?
