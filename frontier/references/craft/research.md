# Craft: Research (research, market analysis, competitor analysis, due diligence, reports)

What excellent research IS, checkable. This file governs evidence craft everywhere; academic.md
adds scholarly conventions on top.

## 1. Evidence rules

- Triangulate: every load-bearing claim rests on 3 independent sources. Independent means
  independent ORIGINS: trace each source upstream; three outlets rewriting one press release,
  report, or tweet count as ONE source. Cite the origin, note the echoes.
- Cite only sources opened this session: a reference recalled from memory is fetched before
  use or labeled "unverified, from model memory". An unopened citation is a fabrication risk.
- Support, not just existence: for each load-bearing claim, quote the sentence in the source
  that supports it. If no sentence says it, the citation fails even though the source exists.
- Source hierarchy: primary (filings, docs, code, pricing pages, transcripts, data you pulled)
  beats secondary (journalism, analyst notes) beats aggregators (blogspam, listicles, forums).
  Never let an aggregator be the only source; a source citing nothing is a lead, not evidence.
- Date the FACT, not the page: "as of <data collection date>". A 2023 number quoted by a 2026
  article is still a 2023 number. Flag market or pricing figures older than 18 months as stale
  (6 months in fast-moving domains such as AI and live pricing).
- Quantify or mark qualitative. Every number traceable to a named origin. "Studies show"
  without the study is banned. Surveys and studies carry n, who ran them, and who funded them;
  vendor-funded findings about the vendor's own market get a conflict flag.
- Incentive-check every source: state what it gains if believed (selling, fundraising,
  defending). Where sources disagree, say so instead of silently picking one; conflicts stay
  in the main body, never dropped.
- Confidence labels on every conclusion: confirmed (independent-origin triangulation), likely
  (2 independent sources or one strong primary), speculative (inference). Never present
  speculative as confirmed; never grade everything "likely" as a hedge. Labels match evidence.

## 2. The disconfirming pass (mandatory)

After the picture forms, actively search AGAINST it with queries you did not use to build it
("<claim> criticism", "<product> problems", "<thesis> wrong", skeptic and competitor sources);
log at least 3 such queries in the methods section. Write the best counter-argument in its
strongest form into the report; it passes only when a proponent of the counter-position would
sign it as fair (the Ideological Turing Test), so a strawman is a defect. If the search finds
nothing, log the queries that found nothing; "no counter-evidence" without its search log is
an uncited claim. A conclusion that has never met its counter-argument is a draft.

## 3. Market analysis specifics

- Sizing bottom-up (units x buyers x price) with stated assumptions, cross-checked against any
  top-down figure; show both and reconcile.
- Competitors: name real ones and CHECK them directly (their pricing page, changelog, docs, job
  posts, reviews), not descriptions of them. Positioning claims come from their own words.
- Segment by job-to-be-done, not demographics, unless demographics drive the buying decision.
- Watch survivorship bias (winners are visible, the graveyard is not) and denominator neglect
  ("47% growth" of what base?); check striking numbers against a base rate before calling
  them notable.
- Revenue is not funding; users are not active users; signups are not customers. Label which one
  a number is.
- Willingness to pay: evidence is actual pricing and churn behavior, not survey enthusiasm.

## 4. Report structure

1. Answer first: conclusion and confidence in 3 sentences before any background, committing
   to a decision and its strongest reason ("it depends" only with the dependency named).
2. The evidence, organized by claim (not by source), each claim with its sources and dates.
3. The counter-argument section (Section 2 output).
4. What would change the conclusion: the 2-3 observable facts that would flip it.
5. Method and gaps: the queries run (building and disconfirming), what was not covered, what
   is unknowable from here.

## 5. Ban list

- Uncited statistics; "experts say"; "it is widely known".
- Citing a source for a claim it does not make (existence checked, content never read).
- Confident synthesis of thin evidence: with fewer than 2 independent sources, write "evidence
  is thin: <what exists>", never a fluent narrative that reads as established.
- Listicle padding ("10 trends"); both-sides mush that never concludes; hedge-everything prose
  where every sentence carries "may" or "could" (commit where the evidence allows).
- Quoting AI-generated aggregator content as a source.
- Recency laundering: an old statistic presented as current because a recent page repeats it.
- Round marketing numbers passed through without a skeptical note.
- Confusing a vendor's claim about itself with a fact about the market.

## 6. Verification checklist (every pass)

1. Every load-bearing claim: 3 independent-ORIGIN sources? Dated by data collection?
   Supporting sentence quoted?
2. Every cited source opened this session; anything from memory labeled as such?
3. Disconfirming pass: 3+ fresh queries logged; would the counter-position's proponent sign it?
4. Confidence labels present, honest, not uniformly hedged; nothing speculative as confirmed.
5. Numbers: each traced to origin, denominated, dated; surveys carry n and funder.
6. Falsifiability: does the report say what would change its mind?
7. Action test: could the reader make the decision from this report alone? What question would
   they still have to ask? Answer it in the report.
