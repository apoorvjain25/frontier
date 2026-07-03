# Craft: Writing (copy, content, marketing, docs, scripts, emails, posts)

What excellent writing IS, checkable.

## 1. The bar

- One idea per sentence. One argument per paragraph. Cut anything that repeats.
- Concrete over abstract, always. Climb the specificity ladder: claim -> mechanism -> number ->
  example. "Fast" -> "renders in 1.2s" -> "renders the 40-page report in 1.2s".
- Proof over adjectives. Never assert quality ("powerful", "beautiful"); show the evidence and
  let the reader conclude.
- Headlines carry the whole argument: a reader who reads ONLY the headlines gets the full pitch.
  Write the headline outline first, then fill.
- Rhythm: vary sentence length deliberately; a short sentence after two long ones lands. Check:
  no three consecutive sentences within 3 words of the same length; one under 8 words per 150.
- One voice per deliverable: name the register in one line before drafting (direct expert, warm
  guide, dry wit) and hold it. Drift check: first and last paragraphs read as the same author.
- Momentum: every paragraph adds one new element (a fact, a stake, a turn), and a raised
  question or promised "how" pays off at least as concretely as its setup. If two adjacent
  paragraphs can swap with no loss, the structure is arbitrary: reorder or cut.
- End on the strongest concrete point or the action, never on a summary of what was just said.
  The last sentence is the second-most-read sentence; spend it.
- Every claim a competitor could not copy verbatim. If they could say the exact sentence about
  their product, it says nothing about yours.

## 2. Process

1. State the reader, the one thing they should believe after reading, and the action they take.
2. Outline as headlines (the argument skeleton). Critique the skeleton before drafting.
3. Draft fast. Then compress 30%, cutting fat, never facts: adverbs, hedges ("quite", "really",
   "very"), throat-clearing openers, every sentence that does not move the argument. Every
   claim and number survives compression.
4. Read it aloud (literally re-read for cadence). Fix everything you stumble on.
5. Run the ban list (Section 3) as a blocking gate on the final text.

## 3. Ban list (blocking; fix with the replacement rule)

Each entry bans a CATEGORY; the examples are not exhaustive. Swapping a listed word for an
unlisted synonym ("effortlessly" for "seamlessly") fails the same gate.

Filler and hype words: seamlessly, leverage, unlock, supercharge, empower, elevate, streamline,
robust, world-class, cutting-edge, next-generation, game-changing, revolutionary, at scale,
delve, harness, foster, journey, effortless, crucial, pivotal, transformative, holistic,
boasts, testament, underscores, landscape, ever-evolving.
Replacement rule: say the concrete thing the word was hiding. "Seamlessly integrates" -> "connects
with one OAuth click; no code changes".

Stock structures:
- "In today's fast-paced world" and any trend-throat-clearing opener -> start with the reader's
  problem or a concrete scene.
- "It's not just X, it's Y" and "not only X but also Y" -> make the Y claim directly.
- Rhetorical question openers ("Tired of...?") -> assert the pain concretely; lengthening a
  banned one-word pivot into a full rhetorical question fails the same gate.
- "Let's dive in", "In conclusion", "In short", "At the end of the day" -> delete;
  transitions carry logic, and a strong closer needs no label.
- "X, not Y" contrast frames: at most one per document (the thesis earns it); the second
  needs its own reason and the third is a tic. Count on the continuous read, headings included.
- Announced candor ("Honesty about...", "To be transparent...") -> state the disadvantage
  directly; the admission itself is the signal.
- Bullet walls (5+ bullets in a row, every section a list) -> prose for argument, bullets only
  for genuinely enumerable facts.
- Every-paragraph-exactly-three-sentences AI cadence -> vary paragraph length with the argument.

Machine-cadence tells (each marks text as generated; scan the final draft for all of them):
- Triples in every claim ("fast, simple, and secure") -> one specific claim, or a real list
  whose items are not interchangeable.
- Trailing participle restating the sentence ("..., making it easier than ever") -> end at the
  claim; a clause that adds a new fact becomes its own sentence.
- One-word-question pivots ("The result?", "The catch?", "The best part?") -> state it.
- Symmetric negation ("No setup. No config. Just results.") -> one honest sentence on the absence.
- Fake breadth: "Whether you're a X or a Y", "from startups to enterprises" -> name the one
  reader, or the 2-3 real cases.
- Empty pivots: "Here's the thing", "Simply put", "In a world where", "Enter [product]" -> delete.

Fake evidence: round vanity stats (10x, 99%, 500+), "studies show" without a citation, invented
testimonials, stock names (Acme, John Smith) -> honest odd numbers, named sources, real or
clearly-synthesized-and-flagged examples.

Formatting tells: exclamation marks in professional copy, Title Case On Every Heading (pick one
convention), emoji as bullets, bold-every-third-phrase, template headlines ("X: Why It
Matters", "The Ultimate Guide to X"; the headline asserts this text's specific takeaway),
sign-off triples ("Use it, fork it, ship it"): the ban list binds the last line too,
bold-lead bullets all-or-none within a list (one unlabeled bullet reads as an unfinished edit).

## 4. Type-specific notes

- Landing copy: hero answers "what is it, who is it for, why believe" above the fold; CTA is a
  specific verb phrase ("Start a project", not "Get Started" everywhere); social proof is named
  and specific.
- Docs: task-first headings ("Rotate an API key", not "Key management"); every code block runnable
  as pasted; state versions and prerequisites up front.
- Email and outreach: subject under 6 words, first line is the point, one ask per email.
- Scripts and VO: written for the ear: short varied sentences, contractions fine, one concrete
  claim per beat, real silent gaps between sentences.
- Decks: one idea per slide; the slide title is the takeaway as a full assertion ("Churn
  concentrates in month 2", never "Churn analysis"); 30 words max on a slide; one chart, one
  message; reading only the titles must deliver the whole argument (visuals: design.md).
- Naming (products, features): shortlist 15-20, then filter by: say-it-aloud test, spellable
  after hearing it once, meaning or story attached, domain and trademark sanity check, no
  unfortunate meanings in major languages. Descriptive beats clever for features.
- Summaries and briefings: faithful compression. State the reader and their decision up
  front; lead with what matters to THEM; attribute every claim to its source; keep original
  numbers exact; mark your own inference apart from the source's content; note what the
  source did NOT cover; invent nothing. Verify with the substitution test: could the reader
  act correctly from the summary alone?

## 4b. Distilled taste rules (banked from real gate runs)

- A page's core claim gets one full argument and at most one echo; count claim instances on
  the continuous read and cut the rest (on the audited page, counting found five
  restatements of one core claim, burying the second-biggest).
- The closing headline must be written in the vocabulary the page itself built; an ownable
  eyebrow cannot rescue a stock payoff line at peak emphasis (the fix replaced a stock payoff line with one that
  paid off the hero's own opening image).
- A CTA button and a trust chip must not repeat the same term ("7-day free trial" twice in
  one card); each element carries a distinct fact.

## 5. Verification checklist (every pass)

1. Ban-list scan on the final text AND on every receipt document it links for credibility
   (grep the words; check the structures by reading).
2. Headline-only read: does the argument survive?
3. Read-aloud pass: cadence, stumbles, breath length.
4. Competitor test on every sentence making a claim.
5. Count: adverbs, hedges, exclamation marks (target: near zero).
6. One reader, one belief, one action: still true of the final draft?
7. Machine-cadence scan: triples, trailing participles, one-word pivots, symmetric negation.
8. Register drift: first and last paragraphs same author? Ending a concrete, not a summary?
9. Numbers vs sources: every figure citing a linked receipt byte-matches the receipt; every
   published range brackets the measured min and max (count first, publish second).
10. The proof story appears once in full; above the fold gets one sentence plus the link,
    never a second full telling with the same numbers. Count echoes across boilerplate slots
    too (Limitations, FAQ, License): the same permission stated twice in one screen fails.
11. Aggregates recounted as the LAST step, after every edit and every banked rule; a count
    published before the fixes land is stale by construction.
12. Compressing annotations (captions, tree comments, tooltips) carry the source's headline
    number, never a sub-number from one section.
13. No section's first sentence restates its heading, and no intro enumerates what its
    artifact (excerpt, table, diagram) shows within the next screen: introduce the slot, let
    the artifact speak. No approval, pass, launch, or end of an ongoing event narrated in
    past tense before the event ("in the final days of X", never "days before X ended" while
    X persists), with the claim and its receipt phrased identically.
14. One framed telling per measured figure; every other mention is a bare pointer (reusing
    the frame is the tic). Quoted transcript excerpts keep claim-evidence and finding-rule
    pairs whole, INCLUDING structural lines (RANKING: n/a, NOT CHECKABLE); an excerpt within
    reach of its source is a receipt, so compress only by dropping whole findings, or
    diverge visibly so it cannot be diffed against the source.
15. No two section headings are near-synonyms; run the headline-only read specifically for
    duplicate-sounding pairs. In comparison tables, every cell answers its row's dimension
    in the row's units; audit the home column first (the subject's own cell dodges the row's
    units most often).
16. The echo budget binds mechanics as well as claims: count each mechanic by its noun-verb
    pair across ALL slots (diagrams and table cells included), cap at one full telling plus
    one compressed. Adjacent FAQ entries carry distinct facts; an answer that pre-answers
    the next question fails at the smallest scale. Once a table defines modes or commands,
    later mentions refer by name plus one NEW fact, never a re-description.
