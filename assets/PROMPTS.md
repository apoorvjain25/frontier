# Graphics: visual identity, shipped assets, and regeneration


## The identity (decided once; every asset reads as one hand)

- **Motif**: topographic contour lines forming a mountain summit, with a dashed ascent path
  climbing through phase nodes to an amber summit flag (frontier = the edge of mapped
  territory; the ascent = the convergence loop; the two double-ringed nodes below the peak =
  the two clean passes).
- **Palette**: background #0B0E14, contour lines #2A3242 (inner rings #39445A), text ink
  #E9ECF1, muted text #6B7280 and #9CA3AF, ONE accent #F5A623 (amber: summit, flag, command
  text). Nothing else.
- **Type**: lowercase monospace wordmark, tracked wide; all captions mono.
- **Banned**: purple or blue-pink gradients, glow blobs, glassmorphism, 3D renders, robots,
  brains, circuit boards, sparkles, lens flares, stock photos, drop shadows.

## Shipped assets (v1, vector, fully reproducible)

`hero.svg` (1500x500, displayed full-width) and `social-preview.svg` / `social-preview.png`
(1280x640, for GitHub Settings, Social preview) are generated deterministically by
[`gen-assets.mjs`](gen-assets.mjs) in this folder (seeded wobble, seeds 41 and 97; no
randomness at run time). To tweak: edit the script, run `node assets/gen-assets.mjs` from
the repo root, and verify by screenshotting the SVGs at their native sizes and actually
looking at them before committing.

## Optional: regenerating with an image model (Gemini, GPT, etc.)

If you want a richer illustrated hero, art-direct the model with the identity above.
Generate 4+ candidates varying ONE named axis (contour density, summit position, path
curvature); reruns of one prompt count as one candidate. If text garbles, generate without
text and overlay type yourself (mono font, #E9ECF1).

Hero prompt (3000x1000):

```
Minimal dark banner for a developer tool called "frontier", 3000x1000 pixels, 3:1. Flat
matte background hex #0B0E14, uniform, no vignette. Right half: a topographic contour-line
map of a single mountain summit, thin 1px lines in hex #2A3242, rings denser toward the
peak; a dotted ascent path in faint white climbs from the lower left of the mountain
through six small circular waypoint nodes to the peak; the last two nodes before the peak
are drawn as double concentric circles; at the peak, a small filled amber hex #F5A623
circle with a thin amber ring, and a tiny amber pennant flag on a short pole above it.
Left half, vertically centered: the word "frontier" in lowercase monospace, hex #E9ECF1,
letter-spaced wide, rendered EXACTLY as spelled; beneath it in small monospace hex #6B7280
the tagline "quality is a procedure, not a property" EXACTLY as written; beneath that a
rounded rectangle outline in hex #2A3242 containing monospace amber text "/frontier"; at
the bottom a small monospace stat line in hex #9CA3AF reading EXACTLY "21 crafts /
best-of-N candidates / 2-clean-pass convergence / taste gate". Engineering-blueprint
precision, flat design, generous negative space, no gradients, no glow, no 3D, no shadows,
no purple, no sparkles, no other elements.
```

Social preview prompt (1280x640): same identity, centered wordmark over a thin rule and the
line "21 craft standards / convergence loop / taste gate", faint contour rings with an
amber summit dot in the top-right corner only, flat, precise, empty margins.

### The "illustrated night-survey" variant (used for the shipped hero.png)

```
A premium dark banner illustration for a developer tool called "frontier", landscape
orientation, styled as a precision night-survey chart drawn on a matte near-black ground,
flat hex #0B0E14, uniform edge to edge. Right two-thirds: an elegant topographic contour
map of a single mountain summit, seen straight from above, fine engineering linework in
hex #2A3242 with the innermost rings slightly brighter, small abstract tick marks along
the contours but NO readable numerals anywhere in the terrain. A dotted route in faint
white climbs from the lower left through small circular waypoint outlines to the peak;
the last two waypoints before the peak are double concentric rings. At the peak: a small
filled amber hex #F5A623 circle with one thin amber ring and a tiny amber pennant flag on
a short pole. The beacon is the image's ONLY light source: a soft restrained amber glow
lights the nearest contours and fades quickly, as if the summit lamp is lighting the
chart at night. Very fine film grain at 2-4 percent. Left third, vertically centered:
"frontier" in lowercase monospace hex #E9ECF1, letter-spaced wide, spelled EXACTLY;
below it small monospace hex #6B7280 reading EXACTLY: quality is a procedure, not a
property; below that a rounded-rectangle outline hex #2A3242 on lifted surface hex
#11161F containing amber monospace text reading EXACTLY: /frontier; at the bottom a small
monospace stat line hex #9CA3AF reading EXACTLY: 21 crafts / best-of-N candidates /
2-clean-pass convergence / taste gate. Banned: purple, gradients between hues, glow
blobs, bokeh, lens flares, 3D renders, photography, robots, sparkles, any second light
source, any color outside the listed hexes.
```

## Provenance log

- hero.png (SHIPPED in the README): GPT image generation, 2026-07-03, from the
  "illustrated night-survey" variant below, 2172x724, verified against the checklist by inspection: exact strings, one amber light
  source, double-ring clean-pass nodes, no banned elements. Note: the ascent shows more
  waypoints than the six phases; accepted as depicting the loop's many passes.
- hero.svg (identity source and fallback): gen-assets.mjs, seed 41, verified by a headless
  Chromium render at native size
- social-preview.svg/png: gen-assets.mjs, seed 97, verified by a headless Chromium render at 1280x640
