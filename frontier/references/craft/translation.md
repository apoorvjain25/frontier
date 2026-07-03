# Craft: Translation (translation, localization, multilingual content)

What excellent translation and localization work IS, checkable.

## 1. Intent over words

- Translate the sentence's JOB (persuade, warn, instruct, delight) into the target culture,
  not its words. A grammatically perfect translation that lost the persuasion is a failed
  marketing translation; an elegant flourish added to safety text is a failed safety
  translation. Fidelity is to intent, calibrated by text type.
- Register mapping is a decision, made once, held everywhere: formality systems (tu/vous,
  du/Sie, formal/informal Hindi, Japanese keigo levels) chosen for the audience and NEVER
  mixed mid-corpus. Record the choice and its rationale before translating; re-read it before
  each new batch (register drifts across chunked work).
- No translationese: the target must not mirror source syntax, clause order, or punctuation
  habits. Test per paragraph: would a native writer, starting from the meaning alone, produce
  this sentence shape? If it reads as the source language wearing local words, redraft.
- Rhythm matters in the target: read the translation aloud; if it stumbles in the target
  language, it is a draft.

## 2. Idioms, metaphor, humor

- Never literal: find the target-language equivalent idiom, or rewrite the underlying image
  in natural target prose.
- Wordplay and jokes are recreated, not translated; where genuinely impossible, flag it and
  propose the nearest effect rather than shipping a dead literal.
- Examples, names, and cultural references localized where they carry the meaning (a
  baseball metaphor for a cricket market is friction).

## 3. Terminology discipline

- Glossary FIRST, before translating anything at scale: product terms, brand words, the
  do-not-translate list (product names, feature names), and per-domain fixed vocabulary.
- Domain terms are looked up, never invented: medicine, law, finance, and engineering have
  established target-language terminology; check a domain reference.
- Legal and regulated boilerplate is never freely translated: where official target-language
  versions exist (GDPR wording, standard contract clauses, safety phrases), use them verbatim.
- Consistency beats elegance across a corpus: the same source term gets the same target term
  every time (variety that would grace an essay corrupts documentation).

## 4. Locale mechanics (the checklist layer)

- Dates (order and separators), numbers (decimal comma vs point, digit grouping), currency
  (symbol, position, conversion or not), units, phone formats, address and name order,
  honorifics.
- Converted values keep the source's precision: "about 10 miles" -> "about 16 km", never
  "16.09 km". False precision in a conversion is an error, not rigor.
- Pluralization: many languages have 3-6 plural categories; in software use ICU message
  patterns, never `count + " items"` logic.
- Sorting and casing rules differ per locale (collation, Turkish i); do not assume ASCII
  behavior.

## 5. UI and software localization

- Text expansion budgeted: German runs ~35% longer, French ~20%; layouts verified with the
  longest locale, not English.
- RTL (Arabic, Hebrew): the LAYOUT mirrors (navigation, icons with direction, progress),
  not just the text alignment.
- Never concatenate translated fragments into sentences; grammar and word order break.
  Full sentences with named variables, and context notes shipped for every variable
  ("{name} is a person", "{count} is files").
- Pseudo-localization pass before real translation catches truncation, concatenation, and
  hardcoded strings early.
- Untranslated placeholder leaks ("Hello {firstName}") and untranslated strings in shipped
  UI are release blockers, not polish.

## 6. Cultural and regulatory adaptation

- Colors, gestures, imagery, humor, holidays, and examples checked per market; what is
  neutral in one market is loaded in another.
- Search keywords are researched per market, never translated: the term people actually type
  in the target market beats the dictionary equivalent.
- Claims re-checked per market: comparative advertising, health claims, and financial
  language carry different rules by jurisdiction (professional review where regulated).

## 7. Verification (translation has its own evidence rules)

- Back-translation on high-stakes text (legal, medical, safety, pricing, consent, anything
  carrying liability): a FRESH context translates the target back to the source language;
  compare meanings, not words; investigate every drift.
- Native-speaker review where stakes justify it; machine output never ships on legal,
  medical, or safety text without qualified human review.
- Glossary compliance scan across the corpus (automated where possible).
- Read-aloud pass in the target language for register and rhythm; report the stumbles found
  and fixed (a first-draft pass reporting zero stumbles was not performed).

## 8. Ban list

- Literal idioms; mixed formality mid-text; invented domain terminology.
- Concatenated UI strings; hardcoded plurals; flags used as language icons (flags are
  countries, not languages).
- Translating the do-not-translate list; leaving source-language artifacts in the target.
- Machine-translation register default (stiffly formal everywhere, the MT tell); false
  friends shipped unchecked (actual/aktuell, eventually/eventuell: sweep the pair's known list).
- Source-language capitalization habits (Title Case headings in German or French); default
  masculine where a gender-neutral source meets a gendered target (pick the market's
  convention once and hold it).
- Positional placeholders ({0}, {1}) where word order must move; loanwords where the market's
  real usage has a native term (check a corpus, not purity instincts).
- One translation reused across markets that share a language but not a culture (es-ES vs
  es-MX, pt-PT vs pt-BR, en-US vs en-IN differ in vocabulary and register).

## 9. Verification checklist (every pass)

1. Text type named and fidelity calibrated to it (safety literal, marketing recreated)?
2. Glossary built and compliance-scanned? Do-not-translate list intact?
3. Register consistent corpus-wide (spot-check 10 random strings)?
4. Locale mechanics checklist walked (dates, numbers, currency, plurals, RTL)?
5. Layout verified with the longest locale; no placeholder leaks; no concatenation?
6. Back-translation meaning-match performed on the top-stakes strings?
7. Translationese test passed (native sentence shapes)? False-friend sweep done for the pair?
8. Native or professional review done where the stakes require it?
