# Vault Map

This file explains how to navigate and work inside this Obsidian vault.

## Canonical vault
- Path: `/home/thomas/Dropbox/memory/Obisidan`
- This vault is the canonical long-term note store for AI memory work.
- Prefer file-based, portable markdown structures over app-specific AI configuration.

## Core navigation files
- [[AI/me]] — user/collaboration briefing
- [[AI/skills/index]] — index of portable AI skill docs
- [[People/Thomas]] — running user profile note
- [[Active Context/current]] — current cross-project working context

## Top-level folders
### `AI/`
- AI operating-system layer for portable maps, manuals, and skills.
- Put portable markdown skill docs in `AI/skills/`.
- Keep AI-facing navigation files here.

### `Active Context/`
- Global current-context note(s).
- `current.md` is the main quick-load note for current priorities and recent state.
- AI may read and update this area when maintaining working context.

### `Conversations/`
- Dated conversation summaries.
- Organize by year/month.
- Preferred pattern: `Conversations/YYYY/YYYY-MM/YYYY-MM-DD.md`.
- Use one continuously updated note per day.

### `People/`
- Running user/profile notes.
- `People/Thomas.md` is the canonical running profile note.
- Durable preferences and stable facts belong here.

### `Projects/`
- Running project notes.
- Each project should have its own folder with:
  - `overview.md`
  - `decisions.md`
  - `status.md`
  - `plan.md`
- `overview.md` should be the main AI/human entry point and should link to the other three notes.
- Put a short current-context block near the top of `overview.md` so retrieval can start there before scanning deeper notes.
- Daily conversation summaries should be linked from relevant project notes.
- Store project material by current usefulness to the project, not just by abstract topic.

### `References/`
- Supporting reference material.
- Usually read-only unless explicitly adding durable supporting docs.

### `Inbox/`
- Temporary capture area.
- Prefer not to leave durable material here long-term.

### `Crypto/`
- Existing domain knowledge area with many notes.
- Treat as content to navigate carefully rather than scanning indiscriminately.
- Use targeted search before broad reading.

### `Personnel/`
- Exists at the vault root, but `People/` is the preferred canonical folder for running profile notes.
- Avoid creating new profile-style notes here unless Thomas explicitly wants that structure.

## AI write rules
### Safe to update in normal AI memory workflows
- `Active Context/`
- `Conversations/`
- `Projects/`
- `People/Thomas.md`
- `AI/`

### Usually read-only unless explicitly requested
- `References/`
- most of `Crypto/`

### Never store here
- Raw secrets
- Raw credentials
- Sensitive tokens copied in full

## Note-type rules
### User profile notes
- Keep one running note in `People/` instead of many dated profile notes.

### Project notes
- Keep separate running notes for overview, decisions, status, and plan.
- Log important project decisions in decision/status notes.
- Link related daily conversation summaries from the project overview or related section.

### Conversation notes
- Keep one daily summary note per day.
- Store concise durable summaries and extracted facts rather than full transcripts.

### AI skills
- Canonical vault location: `AI/skills/`
- External/source materials may also exist at `/home/thomas/Dropbox/skills/`
- If portable markdown skill docs are found outside the vault, import or mirror them into `AI/skills/`.

## AI operating principle
- Do not point an AI blindly at the whole vault when a smaller map or targeted search will do.
- Start with this file, `[[AI/me]]`, `[[Active Context/current]]`, and relevant project notes.
- Use targeted search to expand only into the parts of the vault needed for the task.
- Structured context is more valuable than more context; prefer curated running notes over raw note dumps.
- Organize notes by when and where they should be retrieved or used again, not only by topical fit.

## Quick paths by task
- Understand the user: [[People/Thomas]]
- Load current context: [[Active Context/current]]
- Find reusable workflow instructions: [[AI/skills/index]]
- Work on a project: `Projects/<project-slug>/overview.md`
- Review daily history: `Conversations/YYYY/YYYY-MM/YYYY-MM-DD.md`

## Current known project folders
- `Projects/dropsync-pwa/`
- `Projects/dropsync-pwa-the-next-steps/`
- `Projects/notes/`

## Maintenance guidance
- Prefer updating existing running notes over creating redundant new notes.
- Keep links explicit so both humans and AI can navigate quickly.
- Choose sensible defaults for remaining structure details unless Thomas asks otherwise.
