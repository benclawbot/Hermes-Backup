---
name: deep-research-obsidian
description: Deep research on any topic that auto-indexes into an Obsidian vault as 500+ interconnected wiki pages. Subagent-driven, 2-stage review, wikilinks, MOC, and quality audit. Trigger: "deep research" or "build a vault" or "research [topic]" + Obsidian.
category: productivity
---

# Deep Research → Obsidian Vault

Auto-generates a 500+ page interconnected research vault in Obsidian on any topic. Pages are dense, linked with wikilinks, include YAML frontmatter, and are organized into lots for scalable generation.

## Trigger Conditions

Load this skill when the user says:
- "deep research on [topic]"
- "build a vault on [topic]"
- "research [topic] and index it in Obsidian"
- "deep research stocks"
- "I want to study [domain] — create an Obsidian vault"
- Any request involving "research" + "Obsidian" + large-scale indexing

## Variables (fill before starting)

```
SUBJECT      : [e.g. "semiconductor stocks", "protein folding", "roman history"]
CLUSTER_CHOISI: [e.g. "Semiconductor Industry", "Biochemistry", "Ancient Rome"]
VAULT_PATH   : [e.g. "/home/thomas/Dropbox/memory/Obisidan"]
NB_PAGES_TARGET: 500
LOT_SIZE     : 4-5 pages per subagent batch
```

## Workflow

### Phase 0 — Bootstrap (5 min)
1. Create folder structure under `pages/_LotN_Topic/`
2. Write `CLAUDE.md` root with conventions
3. Write `99-Meta/Schema.md` with YAML frontmatter spec
4. Write `99-Meta/Plan.md` listing all lots and pages
5. Create all lot folders BEFORE launching subagents

### Phase 1 — Generation by Lots (subagent-driven)

Per lot (4-5 pages):
1. Dispatch implementer subagent → generates pages in lot folder
2. Dispatch spec reviewer subagent → YAML compliance + wikilinks + no non-Latin chars
3. If issues → implementer fixes → spec reviewer re-reviews
4. Dispatch code quality reviewer → English quality + structure
5. If issues → implementer fixes → code quality re-reviews
6. Lot marked complete

Progress tracked via `pages/_LotN_Topic/progress.md`.

**Anti-hallucination rules:**
- No invented proper names — WebSearch required or page gets `status: to-verify`
- No fabricated dates — use "exact date to confirm" if uncertain
- No unsourced statistics
- No invented quotes — paraphrase neutrally instead
- Non-Latin characters → fix only contaminated pages, not whole lot

### Phase 2 — Linking and MOC (15 min)
1. Generate `_MOC.md` — 3-paragraph intro + pages grouped by lot with 1 sentence each
2. Densify wikilinks — scan each page, verify bidirectional links, target 8-12 per page
3. Post-process broken links — collect `[[Page not yet created]]` links, flag only truly broken ones

### Phase 3 — Quality Audit (10-15 min)
Produce `99-Meta/Audit.md`:
- YAML compliance
- Duplicates
- Contradictions
- Orphan pages (0 inbound links)
- Anemic pages (<600 words)
- Total wikilinks + ratio

### Phase 4 — Debrief
Produce `99-Meta/Debrief.md` with stats, what worked, what went wrong, recommended adjustments.

## Page Format

```markdown
---
title: "Exact Page Name"
type: concept | theory | person | experience | controversy | school | disorder | method | term | debate | work | institution | event
cluster: "{CLUSTER_CHOISI}"
status: verified | to-verify | debated | debunked | hypothetical | stub | needs-sourcing
controversy: low | medium | high
importance: pillar | standard | deep-cut
source_knowledge: internal | web-checked | mixed
sources_count: N
tags: [#tag1, #tag2]
created: YYYY-MM-DD
strong_links: [["[[Page1]]", "[[Page2]]"]]
opposition_links: [["[[Page3]]"]]
---

# Title

> [!info] Summary
> 1-2 sentences clear pitch.

## Definition
2-4 dense paragraphs.

## Context and origin
Who, when, where, intellectual framework.

## Mechanisms / characteristics / details
3-6 paragraphs, concrete examples.

## Nuances, critiques, limits
MANDATORY on all pages.

## Links and implications
Wikilinks contextualized in full sentences. Min 7 outbound wikilinks. Target 8-12.

## Sources
[^1]: Author, *Title*, Publisher, year, URL
```

## Vault Structure

```
{VAULT_PATH}/
├── CLAUDE.md
├── README.md
├── _MOC.md
├── pages/
│   ├── _Lot1_Topic-1/
│   ├── _Lot2_Topic-2/
│   └── _LotN_Topic-N/
├── 99-Meta/
│   ├── Schema.md
│   ├── Plan.md
│   ├── Fact-Check-Log.md
│   ├── Audit.md
│   └── Debrief.md
└── .obsidian/
```

## Implementation

The actual skill doc lives in the Obsidian vault at:
`/home/thomas/Dropbox/memory/Obisidan/AI/skills/research/research-ingestion-obsidian.md`

This skill entry point provides the trigger conditions and quick-reference workflow. For full detailed instructions (anti-hallucination rules, subagent prompts, YAML schemas), consult the vault-based skill doc directly.

## Notes
- Lot-based organization from the start — not at the end
- Lot size 4-5 pages avoids 600s subagent stalls
- Recovery spool: if subagent stalls >650s, relaunch with recovered state
- `dash-bootstrap-components` is NOT in requirements.txt — install manually if building Dash dashboards
