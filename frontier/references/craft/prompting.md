# Craft: Prompting (prompts, AI features, agents, output specs, LLM pipelines)

How to write prompts that get frontier-quality output from any model, and how to build AI
features that ship.

## 1. The anatomy of a strong prompt (in this order)

1. **Role, one line.** Who the model is for this task. Skip the "world's best" theater; role
   without a rubric does nothing.
2. **Context and inputs.** What it is working on and why (models perform better knowing intent:
   "this summary feeds a legal review" changes the output correctly).
3. **The contract.** The hard rules, numbered, each one checkable. Include scope explicitly:
   current models follow instructions literally and do not generalize ("apply to every section").
4. **The rubric.** What excellent output looks like, concrete (paste the relevant craft file
   section for the domain). This is the highest-leverage block in the prompt.
5. **The ban list.** Negative constraints work. Ban the failure modes you have seen, each with
   its replacement rule.
6. **1-3 gold examples.** Imitation beats instruction, and it is indiscriminate: the model
   copies incidental features (length, register, names, formatting) as hard as the structure.
   Vary incidentals across examples or annotate what to copy ("match the structure, not the
   tone"); the last example is imitated hardest, so order them least to most like the target.
7. **Output spec.** Exact format: schema, sections, length. For APIs use structured outputs
   (`output_config.format` with a JSON schema), never "return valid JSON please".
8. **The task, last.** Volatile content goes at the end (also keeps the prefix cacheable).

## 2. Prompt patterns that raise weaker-model output

- **Rubric-then-generate:** have the model restate the rubric in its own words before producing.
- **Generate-judge-revise in one prompt:** "Produce a draft. Then judge it against the rubric,
  listing every violation. Then produce the final version fixing all of them. Output only the
  final version plus the violation list."
- **Coverage-first for any finder or reviewer prompt:** "Report every issue at any severity or
  confidence; do not filter for importance; a downstream step ranks them." (Filtering
  instructions crater recall on literal-following models.)
- **Propose-then-pick for creative variety:** no temperature exists on Opus 4.7+; instead
  "propose 4 distinct directions with concrete values (hex, typeface, structure), then implement
  only the chosen one."
- **Checklists, enumerated:** "check dimensions 1-8, output a verdict per dimension" works;
  "check everything carefully" does not.
- **Tool triggering:** describe WHEN to use each tool ("call search when the answer depends on
  facts newer than training"), not just what it does. Same for subagents and memory: current Opus
  under-reaches for them unless told when.
- **Position is leverage:** the start and end of a prompt get followed; the middle decays. Past
  roughly 1,500 tokens, restate the 2 most-violated rules directly before the task; when
  stuffing documents, instructions and the question go after the documents, never mid-context.
- **Positive framing:** "never mention X" raises the salience of X, and bare negations drop
  under load. State the replacement behavior ("under 150 words", "cite only provided sources")
  and enforce true exclusions in the schema or a post-filter, not in prose alone.
- **Close every open choice:** whatever the prompt leaves open, the model fills with the
  training-data average, which is slop. Fix each choice with a concrete value, or require the
  output to state its assumptions so you can check them.
- **Resolve conflicts, never stack:** when two rules collide, the later one silently wins.
  Audit for contradictions and delete the loser; never add a third rule to arbitrate.

## 3. Never ship a prompt tested once

1. Collect 5-10 representative cases, including 2-3 hard or adversarial ones. The set is too
   easy if the current prompt already passes every case: add harder ones until at least one
   fails, or the eval proves nothing.
2. Run the prompt on all of them; score each output against the rubric (or with a judge
   prompt): a written verdict per case per rubric line, never one overall vibe score.
3. Fix the prompt against the failures; rerun ALL cases (fixes regress other cases). Keep 2
   holdout cases out of the fixing loop; fixed cases passing while holdouts fail means the
   prompt is overfit to its eval.
4. Freeze the winning prompt with a version note: what it is for, known failure modes, eval date.
5. In production, log inputs and outputs so the next iteration has real cases.

## 4. API mechanics (Claude, current as of 2026-07; verify against live docs when building)

- Model: `claude-opus-4-8` default ($5/$25 per MTok); `claude-fable-5` only for the hardest calls
  ($10/$50; handle `stop_reason: "refusal"` and ship the server-side `fallbacks` parameter).
- `thinking: {type: "adaptive"}`; effort via `output_config.effort`: high default, xhigh for the
  hardest coding and agentic work, low for mechanical subagent steps.
- No temperature, top_p, top_k on Opus 4.7+ (they 400). No assistant prefills (400): use
  structured outputs.
- Stream anything long; background long jobs.
- Cache the stable prefix: protocol + rubric + examples first, task last; verify with
  `usage.cache_read_input_tokens` > 0; a timestamp in the system prompt silently kills caching.
- Batch API for non-urgent bulk work (50% off).

## 5. Ban list

- Role theater with no rubric ("You are the world's greatest designer... make it stunning").
- ALL-CAPS pleading and threat prompts ("CRITICAL: YOU MUST"); on literal models they overtrigger.
- 20 rules where 5 load-bearing ones would do (each extra rule dilutes the rest); repeating a
  rule for emphasis dilutes the same way. State it once, where it will be read.
- Vague quality asks ("make it better", "high quality", "professional").
- Asking for JSON in prose instead of using a schema.
- Prompts that mix the standard and the task so neither is cacheable nor reusable.
- "Think step by step" boilerplate on reasoning models (thinking is built in; the phrase adds
  tokens, not reasoning). Set `output_config.effort` instead.
- Self-certification asks ("confirm you followed every rule"); the model confirms regardless.
  Verify compliance externally.
- Example sets that share an incidental feature (all short, all B2B); the model reads the
  shared feature as a requirement. Vary whatever must not be copied.

## 6. Verification checklist

1. Every rule in the contract checkable? (If you cannot verify it, the model cannot follow it.)
2. Rubric present and concrete? Examples present, incidentals varied or annotated?
3. Output spec exact? Schema used where the output is structured?
4. No two rules in conflict? (The later one silently wins.)
5. Eval run with per-case scores, and the holdout cases still passing after the last fix?
6. Prefix stable and cache-verified in production?
