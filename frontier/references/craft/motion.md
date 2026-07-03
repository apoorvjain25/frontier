# Craft: Motion (animation, transitions, effects, micro-interactions, video motion)

What excellent motion IS, in numbers. Web values in ms; for deterministic video, convert to
frames and make everything a pure function of frame.

## 1. The one ease family rule

- Pick ONE signature ease per project and use it for all intentional motion. Best-in-class
  default: ease-out-expo `cubic-bezier(.23,1,.32,1)` (variant `.16,1,.3,1`). Spring equivalent:
  damping 200, mass 0.7 (no overshoot).
- Overshoot is rationed: springy pop (`cubic-bezier(.34,1.56,.64,1)` or spring damping 12-14) for
  chips, checkmarks, and logo moments only; never large panels.
- Enter ease-out, exit ease-in, never linear; ease-in-out only for ambient loops.

## 2. Duration ladder (pick from the ladder, never arbitrary)

- Micro state flip (toggle, check): 80-150ms
- Pop-in (chip, badge): 150-250ms
- Standard reveal (translateY 12-24px + fade): 250-400ms
- Large panel or page transition: 400-600ms
- Count-ups and meters: 600-1200ms, decelerating INTO the final value (easeOutCubic); run once
  per page load, never re-triggering on every scroll re-entry.
- Ambient loops (drift, shimmer): 3s+ periods; amplitude capped at 2-6px translate or 0.3-1%
  scale; anything larger reads screensaver, not craft.
- Exits run 60-70% of their enter duration, softer (fade + 4-8px rise or slight blur).

## 3. Choreography

- Enter order tells the story: label -> headline -> support -> visual panel -> data last, so
  number animation lands after the eye arrives.
- Overlap, not sequence: the next element starts when the previous is 60-70% done. Only true
  boundaries get a clean rest.
- Stagger discipline: 30-60ms per sibling, total group reveal under 300ms; for 8+ siblings,
  compress per-item delay or reveal in batches so the cap holds.
- Motion budget: at most 2 elements in intentional motion at any instant; anything above the
  ambient amplitude cap counts against the budget, whatever it is labeled. Every motion answers
  "what does this communicate?" in one sentence or gets cut.
- Direction carries meaning (enter from below = deeper, exit up = back) and stays consistent.
- Scaled entrances grow from their trigger: transform-origin at the anchor (a menu from its
  button corner), never default center.
- An element that persists across a transition never teleports or double-renders: it moves,
  morphs, or crossfades in place.
- One centerpiece moment per page or film (a pinned panel, a converge, a hero build); everything
  else stays simple so the centerpiece lands.

## 4. Performance and accessibility (web)

- Animate transform and opacity only; never top/left/width/height (layout thrash). Target 60fps.
- will-change only on elements about to move; remove after.
- Scroll-triggered work: IntersectionObserver or scroll-linked libraries, never scroll handlers
  doing layout reads.
- State-driven motion is interruptible: hover-out mid-animation reverses from the current value;
  rapid toggling never queues a backlog of transitions.
- `prefers-reduced-motion`: every non-essential animation collapses to a fade or nothing.

## 5. Determinism (video and canvas renders)

- No Math.random or Date.now in render code; positions index-seeded; motion a function of frame.
- Interpolation input ranges strictly increasing (a backwards keyframe silently truncates).
- No static second: in any 1s window something moves with intent (perpetual subtle drift counts:
  a slow sinusoidal scale drift of a few thousandths).
- Render and open frame 0 and the final frame: both are composed states (no blank or half-built
  first frame, no cut-off exit); the end card holds at least 1s.
- Never splice audio per beat; pad silence at detected gaps and extend the beat by the same frames.

## 6. Ban list

- Bounce on everything; elastic ease on panels -> one ease family, overshoot rationed.
- Uniform fade-ins, or the same reveal recipe (fade + 20px rise, 500ms) on every block ->
  directional reveals with stagger and overlap, varying distance and delay within the one family.
- Hover scale on every card -> reserve lift for the primary interactive element; elsewhere shift
  elevation or a hairline.
- Typewriter or character-typing headlines outside a terminal context -> masked line reveal or
  clip-path wipe.
- Parallax everywhere -> one intentional depth moment, if any.
- Spinners for determinate progress -> progress bars or skeletons.
- Infinite loops that do not mean "live" (pulsing CTAs, endlessly bobbing hero art) -> loop only
  status pulses, carets, playheads.
- Scroll-jacking (hijacked wheel speed) -> pinned scrub sections that release cleanly.
- Pop-ins at 0ms; entrances that never finish; elements fading but lingering below 0.2 opacity.
- Motion on everything at once -> respect the motion budget.

## 7. Verification checklist (every pass)

1. Record the interaction or render stills; SCRUB frame by frame at boundaries; open frame 0
   and the final frame as stills.
2. Check every duration against the ladder; check the ease family is single.
3. Trigger reduced-motion and verify the collapse.
4. Web: performance panel or FPS meter during the heaviest transition; no long tasks, no jank;
   rapid-toggle the heaviest stateful animation and watch for queued backlog.
5. The kill test: does each motion communicate something? Name it or cut it.
