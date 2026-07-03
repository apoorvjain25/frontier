# Craft: Design (UI, UX, pages, elements, graphics, slides, brand)

What excellent IS, in numbers. Defaults for when the project's brand does not dictate a value;
the project's real tokens ALWAYS win.

## 1. Precedence

1. The project's real brand system (tokens, fonts, logo, icons) overrides everything below.
2. If no brand exists, synthesize ONE coherent system first (palette, type pairing, radius set,
   spacing scale), write it down, then derive every value from it. Never free-style per element.
3. One system per deliverable: one ease family, one radius set, one gray temperature, one icon
   stroke, one voice. Consistency is what reads as "one hand made this".

## 2. Layout and composition

- Spacing on a strict 4/8px rhythm; vertical section tiers from {16, 24, 32, 48, 64, 96, 128}.
- Macro whitespace is the premium signal: art gallery, not cockpit. Hero and section boundaries
  get 96-160px vertical padding at desktop, 48-96px at mobile; double your first instinct.
- The primary claim and its CTA sit fully inside the first viewport at 1440x900 and 390x844;
  nobody should scroll to learn what the product is.
- Anti-center bias: centered-headline-over-gradient is the template default. Prefer 50/50 splits,
  left-text right-asset, asymmetric grids (2fr 1fr 1fr), deliberate empty zones. Center only
  manifesto or statement moments.
- A layout family (3-col cards, split text+asset, full-width quote, bento) appears at most once
  per page; a long page needs 4+ distinct families. Changing column count, icons, or tint does
  not create a new family; the arrangement itself must differ.
- Bento: exactly N cells for N real items, no filler tiles; 2-3 cells carry real visual variation
  (chart, tinted surface, image); never three equal cards in a row.
- Text budget per view: kicker, headline (2 lines max), support (about 20 words), one CTA. More
  than that is a second section.
- Everything aligns mathematically to the grid; one floating misaligned gap reads amateur. At
  glyph scale, optical centering by visual mass (a play triangle nudges toward its point) beats
  box centering.

## 3. Typography

- One modular ramp per project (example: 12/14/16/18/24/32/48/64). No arbitrary per-element sizes.
- Hierarchy by weight and color (headings 600-700, body 400, labels 500), not by screaming size.
- Display: letter-spacing -0.02 to -0.04em, line-height 1.0-1.15. Body: line-height 1.5-1.75,
  measure 65-75ch, never tight-tracked. Numbers in tables and counters: tabular figures.
- Headline discipline: max 2 lines; 6+ words drops one size tier; a 4-line headline is a size
  bug. No single-word last line (widow): balance the wrap or recut the copy.
- Ink: never pure #000 on light or pure #FFF on dark. Light-mode ink is a brand-tinted near-black
  (#0D1117 to #1C2128 class); dark-mode body text sits at 88-96% white, never #FFF.
- Font choice when unbranded: distinctive pairings (Geist, Satoshi, Cabinet Grotesk, Söhne class,
  or a characterful serif where the domain earns it) plus a mono for labels and data. Inter,
  Roboto, Arial, and system-default stacks read AI-generated; so does the model's serif habit
  (Fraunces, Playfair) applied without a brand reason.
- Contrast verified on the actual rendered result: 4.5:1 body, 3:1 large type.

## 4. Color and depth

- Near-monochrome canvas plus 1-3 semantic accents, each with a locked meaning (positive, data or
  AI, warning). A stray decorative accent mid-page is a defect. One gray temperature per project.
- Surfaces: off-black (#050505 to #121212) or near-white (#F7F7F5 to #FCFCFB). The cream band
  around #F4F1EA is the model's own default: it needs a written brand reason. Grain or texture
  at 2-5% opacity de-clinicalizes large flat fields.
- Shadows tinted toward the background hue, diffuse, low opacity (resting cards under 0.06);
  hover and modal tiers get larger blur, not darker black. On dark, elevation is a lighter
  surface tier (+4-6% lightness per level) plus a hairline, not a heavier shadow.
- Hairline borders: 1px of the ink color at 6-12% alpha so they adapt to any surface; default
  gray-200/300 borders on every card read template.
- Double-bezel nesting for machined components: outer shell (subtle bg, 1px hairline, 6-8px
  padding, large radius) around an inner core (own surface, inset top highlight, concentric
  smaller radius: outer minus padding). Never a flat card on a bare background.
- Banned depth moves: neon outer glows, purple gradient washes, gradient text on large headlines,
  a single giant saturated background block.

## 5. UX mechanics

- One primary action per view; secondary actions visually subordinate.
- Every interactive element has designed rest, hover, focus-visible, active, and disabled states;
  each state visibly differs in a screenshot, and focus-visible is a 2px ring or equivalent
  outline, never a color shift alone.
- Every data view has designed empty, loading (skeletons, not spinners, for known layouts), and
  error states with a recovery action. The happy path alone is half a design.
- Forms: visible labels (placeholders are not labels), inline validation on blur, specific error
  text ("Card declined: check the number" not "Invalid input"), one column, logical tab order.
- Progressive disclosure: defaults visible, power options behind one click.
- Touch targets 44px min; keyboard reachable; focus order matches visual order.

## 6. Ban list (regenerate on sight, with the replacement)

- Inter/Roboto/system-default everywhere -> pick from the distinctive pairings above or the brand font.
- Purple gradient on white/dark; cream + serif + terracotta model default without a brand reason
  -> derive from real tokens or the synthesized system.
- Decorative blurred color blobs or radial glows parked behind hero content -> structure-bearing
  texture (dot grid, hairline grid, the product itself) or a plain surface.
- Icon-in-tinted-rounded-square repeated across a feature grid -> vary cell treatment (mini UI,
  chart, real data) or drop the icons entirely.
- Three equal cards in a row -> vary cell size, one visual cell, or a different family.
- "New" or sparkle pill badges stacked above headlines -> plain-text kickers, no pill, no emoji,
  only where a section needs one.
- Uniform rounded-2xl + shadow-sm on every card -> tokenized radius and elevation tiers (Section 4).
- Emoji as icons or bullets -> one icon family, uniform stroke (1.5 or 2), tokenized sizes.
- Stock photos, fake avatars, stock names (Acme, John Smith, Sarah Parker), acme.com URLs
  -> realistic, internally consistent demo data with plausible names, ids, timestamps.
- Fabricated logo walls and testimonial cards (five stars, circle avatar, invented quote) ->
  real proof or no proof section; invented social proof is a trust defect, not filler.
- Round vanity stats (10x, 99%, 100+) -> honest odd numbers or remove the stat.
- Glassmorphism, parallax, or gradient mesh applied by default -> effects only where they carry
  meaning, masked away from content that must stay legible.
- Cookie-cutter hero (centered headline, two buttons, screenshot below) -> lead with the product
  doing its job, or an asymmetric composition.
- AI-sparkle badges and "Powered by AI" chips -> show the capability, not the badge.
- Default shields.io colors on a README badge row -> badges are brand surface, not chrome:
  identity palette with the one locked accent, or neutral dark for all.
- A fixed number printed on a hero or social asset ("best-of-5") that the system does not
  guarantee -> print the range or the N form; asset numbers must match the body's claims.

## 7. Verification checklist (every pass)

1. Screenshot at 360, 768, and 1440 wide; OPEN each; crop into every dense region; zero
   horizontal overflow at 360.
2. Walk Sections 2-5 line by line against the screenshots; log every violation.
3. Contrast-check body and label text in the actual theme.
4. Count layout families; check spacing rhythm with a ruler overlay if uncertain; scan every
   headline for widows.
5. Hover/focus/empty/error states exist? Trigger and screenshot them.
6. The kill test on every view: could this appear unchanged on any other product's site? If yes,
   it is slop; regenerate against this product's specifics.
7. If you keep a curated library of best-in-class design references, check it for a proven
   pattern before inventing one; steal the technique, not the pixels. Absent a library,
   anchor on the best comparable real product you can inspect.

## 8. Distilled taste rules (banked from real gate runs)

- Gradient or shimmer headline text: the darkest stop must keep the key phrase legible at
  every breakpoint AND every animation frame; on narrow screens the word can sit entirely
  inside the light band, so hold a static two-stop gradient below the sm breakpoint. CSS
  trap: the `background` shorthand resets `background-clip: text` (paints a solid box over
  the word); inside media queries use longhand `background-image` + re-assert the clip.
- Any chart labeled "forecast" must separate past from future visually and axially (solid
  history bars, outlined projected bars, a marked NOW divider). A forecast over a
  history-only axis is a logic defect style rubrics never catch.
- Blow every display-scale wordmark to final size and read it cold for letterform ambiguity
  (y/u, l/I, rn/m). Tight line-height plus overflow-hidden amputates descenders: leading
  must clear them (about 1.0+, never 0.8).
- Demo mini-UIs may never resemble loading skeletons: no empty thumbnails, no flat gray
  placeholder bars; every fake UI carries real demo-world content.
- One proof, one form: a named credential (partner program) never needs a decorative
  "Verified" chip beside it; every credential on a zero-fabricated-proof page needs a
  factual confirmation on file.
- Same number, two meanings, one demo world is a collision: audit every repeated figure
  across a page's mock UIs (a per-post 96 vs a weekly 96 must become different numbers).
