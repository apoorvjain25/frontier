# Installing frontier

Four surfaces, from most to least automated. All of them use the same standards; only the
delivery mechanism changes.

## 1. Claude Code: plugin install (recommended)

Gets you the `/frontier` command and both judge agents (`verifier`, `taste-judge`) in one
step.

```
/plugin marketplace add apoorvjain25/frontier
/plugin install frontier@apoorvjain25
```

Verify: type `/frontier` in any project; the skill should appear. Spawnable agent types
`verifier` and `taste-judge` become available to the Agent tool in new sessions.

**Updating**: `/plugin update frontier@apoorvjain25`.

## 2. Claude Code: manual skill copy

If you prefer not to use plugins:

1. Clone or download this repo.
2. Copy the inner `frontier/` folder to `~/.claude/skills/frontier/` (the folder containing
   SKILL.md, so the final path is `~/.claude/skills/frontier/SKILL.md`).
3. Optional but recommended: copy `agents/verifier.md` and `agents/taste-judge.md` to
   `~/.claude/agents/`. Without them, the skill still works; it runs judge passes through
   general-purpose subagents instead.
4. Start a new session (skills load at session start).

Windows note: `~` is `C:\Users\<you>`. Create the folders if they do not exist.

## 3. claude.ai and Cowork

- **As a custom skill**: download `frontier-skill.zip` from the repo root (or a release),
  then upload it in claude.ai under Settings, Capabilities, custom skills. Requires a plan
  with custom-skill support.
- **As Project instructions**: create a Project, paste the contents of
  [PROMPT.md](../PROMPT.md) into the custom instructions, and upload the craft files you
  work with most (from `frontier/references/craft/`) as Project knowledge.
- **Cowork**: point Cowork at a folder containing this repo (or grant it access), and open
  tasks with: "Read frontier/SKILL.md and the matching craft references, then execute the
  task under them."

Honest caveat for chat surfaces: there are no subagents and no hooks there, so judge passes
run as bracketed self-passes and evidence that needs tooling (screenshots, test runs) gets
reported as unverified rather than claimed.

## 4. Any other agent (Cursor, Windsurf, aider, raw API)

1. Open [PROMPT.md](../PROMPT.md); copy everything below the horizontal rule.
2. Attach or paste the craft file matching your domain from `frontier/references/craft/`.
3. Paste your task and inputs LAST, below everything.

For API pipelines: put the PROMPT.md block plus the craft file in the cached system prefix,
the task in the user turn. Model-specific tuning notes (thinking modes, effort levels,
caching mechanics) live in [frontier/references/protocol.md](../frontier/references/protocol.md)
section 6 and [craft/prompting.md](../frontier/references/craft/prompting.md) section 4.

## Troubleshooting

- **`/frontier` does not appear**: skills load at session start; open a new session. For
  manual installs, confirm the path is `~/.claude/skills/frontier/SKILL.md` exactly.
- **Judge agents not spawnable**: agents also load at session start, from `~/.claude/agents/`
  or the installed plugin; check the files landed there, then restart the session.
- **The model skips phases**: invoke explicitly with a mode, e.g. `/frontier <thing> full`,
  and say "follow the skill's phases in order". Literal instruction-following improves when
  the mode is named.
- **Runs feel expensive**: use `quick` mode (one judge pass, no convergence loop) for
  routine work; `full` is for deliverables that must be right, and its 8-pass cap bounds
  the spend.
- **claude.ai zip rejected**: your plan may not include custom skills; use the Project
  instructions path instead (option 3b above), which works on any plan.
