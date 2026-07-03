# Craft: Media (audio, voice, music, podcasts, video narrative, thumbnails, AI-generated media)

What excellent media work IS, checkable. Motion mechanics live in craft/motion.md; this file
covers sound, story, and generated assets.

## 1. Voice and speech (VO, TTS, podcasts)

- Write for the ear: sentences mostly under 15 words with varied lengths, contractions, one
  concrete claim per beat, zero filler. If it stumbles when read aloud, rewrite it.
- One continuous read per piece; never splice takes mid-sentence. To create room, extend
  silence at natural gaps, never stretch or cut inside words.
- Direct the voice explicitly: tone (warm, confident, unhurried), pace (conversational lands
  near 140-160 wpm), where to breathe. For TTS, generate 2-3 takes and pick against the brief.
- Pronunciation pass before generating: product names, acronyms, numbers, and URLs; respell
  phonetically in the TTS input where needed (display text stays correct).
- The produced audio is ground truth: re-transcribe it (word timestamps) before syncing
  anything to it; scripts drift from reads.
- Silence is structure: real gaps between sentences give edits and sync points somewhere to live.

## 2. Music and sound design

- Instrumental beds under speech, ducked 12-18 dB below the voice; the words always win.
- Music has an arc: enter low, lift in the middle, peak at the climax moment, resolve (to
  silence exactly at the end for a clean close). A flat loop is wallpaper.
- SFX sparse and semantic: a click for a click, an impact for the one big moment; never a
  sound per animation.
- Every audio edit point gets a 5-15ms fade or crossfade; a bare cut clicks.
- Conform all stems to one sample rate before mixing (48 kHz for video work); mixed rates
  drift out of sync over a long timeline.
- Mix targets: -14 LUFS integrated for video and social (-16 for stereo podcasts), true peak
  at or under -1 dBTP, voice intelligible on phone speakers.
- Diagnose with tools, never by ear alone: silencedetect for gaps, a loudness meter for LUFS
  and peaks, the waveform for clipping. Every audio claim cites the numbers.

## 3. Video narrative (long form, demos, shorts)

- The first 2-3 seconds carry the argument: open on the problem or the product doing its job,
  never a logo card or "welcome back".
- 8-16 beats, one idea each: hook, body that shows real work, a payoff beat that answers
  "so what", and a calm CTA (one line, one URL, a beat of stillness after the last word).
- Retention editing: cut dead air ruthlessly; a visible change (cut, reveal, movement, text)
  every 3-5 seconds in long form, every 1.5-3 seconds in 9:16 shorts.
- Sync is checkable: a visual keyed to a spoken word lands within 3 frames (100ms) of that
  word's onset in the transcript; verify at the actual frames, not from the code.
- Captions always: most social viewing is muted. The cut must work with sound off.
- Platform formats: 16:9 for long form; 9:16 for shorts with text in the upper-center safe
  zone (platform UI eats the bottom); check every frame against the target platform's overlays.
- Thumbnails: one subject (a face or one object), 4 words or fewer, high contrast; verify
  legibility at 120px wide, because that is how it is actually seen.

## 4. AI-generated media (images, video, voices)

- Art-direct with concrete specs, exactly like briefing a human: subject, composition, camera
  or lens feel, lighting, palette (hex values), mood references. Vague prompts return the
  model's house style, which is everyone's house style.
- Never ship the first generation. Generate 4 or more candidates that differ on a named axis
  (composition, lighting, or palette); four reruns of one prompt are one candidate. Select
  against the rubric, then refine the winner. Log prompts, seeds, and settings so the look
  is reproducible.
- Post-process before shipping: upscale, fix artifacts (hands, text, edges), color-match to
  the brand palette so composites read as one world.
- Brand consistency across a set: same palette, same grain, same light direction; a set that
  drifts reads as stock.
- Voices: cast one voice per brand and keep it; disclose synthetic voices where the context
  expects it.

## 5. Rights and provenance

- Every asset accounted for: generated (by what, under what license), licensed (where, terms),
  or owned. No unlicensed music, fonts, or photos, ever; "found it online" is not a license.
- Keep source files and prompts; a deliverable you cannot regenerate is a liability.

## 6. Ban list

- Logo-first intros; "in this video I will" preambles; outros that trail off without a CTA.
- VO that narrates the cursor ("now I click Settings") -> narrate outcomes and reasons, not
  mechanics the viewer can already see.
- Audio spliced per beat; music that never resolves; wall-to-wall SFX; a whoosh on every cut.
- Trailer-grade epic score under a utility demo -> match the music's register to the product's
  actual energy.
- Generic corporate stock music with no direction; the default AI voice with no casting choice.
- Ken Burns slow-zoom on every still -> cut on beats, or animate one meaningful element per shot.
- Uncanny AI faces in closeup; six-fingered hands; garbled AI text in images; visible
  watermarks or artifacts.
- Cross-posted content ignoring platform format (letterboxed 16:9 dumped into shorts).
- Emoji-decorated hype captions -> captions transcribe what is said, plainly.
- Shocked-face, red-arrow thumbnails -> one subject, one claim, high contrast (Section 3).
- Loudness clipping; music louder than the voice; dead air over 2 seconds without purpose.

## 7. Verification checklist (every pass)

1. Audio: silencedetect and loudness meter output attached (gaps, LUFS, true peak); waveform
   checked for clipping.
2. ffprobe every deliverable: container duration, streams present, audio and video lengths
   match within one frame, no trailing black or silence.
3. Transcript re-generated from the final audio; sync points verified against it.
4. Video: watched muted, logging any beat whose meaning is lost without sound; watched at 2x
   (does pacing hold?); scrubbed frame by frame at every cut and text reveal.
5. Safe zones checked against the target platform's UI; thumbnail read at 120px.
6. AI assets: 4+ distinct candidates compared; artifacts fixed; prompt and seed logged.
7. Rights: every asset's source and license listed.
