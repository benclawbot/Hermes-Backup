# KNOWLEDGE VAULT GENERATOR (Multi-Lot, Subagent-Driven, 500+ Pages)

> Scalable generator. Goal: 500+ dense, interconnected pages in English with wikilinks and navigable Obsidian graph. Mode: subagent-driven with 2-stage review (spec compliance + code quality).

---

## VARIABLES TO FILL BEFORE SENDING

```
SUJECT            : [Example: "Crypto trading bots and strategies"]
CLUSTER_CHOISI    : [Example: "Trading bots and strategies"]
VAULT_PATH        : [Example: "/Users/meydeey/Obsidian/Trading-bots"]
NB_PAGES_TARGET   : 500
LOT_SIZE          : 4-5 pages per subagent (avoids 600s stalls)
```

---

## MISSION

You are the main agent building a **scalable vault** on cluster **{SUJECT}**. Goal: 500+ dense, interconnected pages in English with wikilinks and navigable Obsidian graph.

**Mode**: subagent-driven. Dispatch subagents per lot (4-5 pages each). Each lot goes through 2-stage review before acceptance.

**Lot organization**: pages organized into lots from the start (not at the end). Structure:
```
pages/
├── _Lot1_Topic-name/
│   ├── page1.md
│   └── page2.md
├── _Lot2_Topic-name/
│   └── ...
```

Language: **English throughout** (content, titles, YAML, tags). English technical terms kept as-is when they are the proper name of a concept.

---

## VAULT ARCHITECTURE (LOT-BASED)

```
{VAULT_PATH}/
├── CLAUDE.md                   # Vault schema
├── README.md                   # Overview
├── _MOC.md                     # Map of Content (index)
├── pages/                      # All pages organized by lots
│   ├── _Lot1_Topic-1/
│   │   ├── page1.md
│   │   └── page2.md
│   ├── _Lot2_Topic-2/
│   │   └── ...
│   └── _LotN_Topic-N/
├── 99-Meta/
│   ├── Schema.md              # YAML conventions
│   ├── Plan.md                # All lots and pages plan
│   ├── Fact-Check-Log.md      # WebSearch traces
│   ├── Audit.md               # Final quality report
│   └── Debrief.md             # Experience report
└── .obsidian/
    └── graph.json             # Graph view config by type
```

**Lot-based organization (from the start)**:
- Each lot = 1 folder under `pages/`
- Folder named `_LotN_Topic` (underscore for Obsidian sorting)
- Pages created directly in the corresponding lot folder
- No flat structure, no final sorting pass

---

## PHASES (SUBAGENT-DRIVEN)

### PHASE 0, BOOTSTRAP (5 min)

1. Create folder structure `pages/_LotN_Topic/` for each planned lot.
2. Write `CLAUDE.md` root (brief, 1 page) with conventions.
3. Write `99-Meta/Schema.md` with detailed YAML schema.
4. Write `99-Meta/Plan.md` with ALL lots and pages (not flat).
5. Create `_LotN_Nom/` folders BEFORE launching subagents.

### PHASE 1, GENERATION BY LOTS (subagent-driven)

**Per-lot workflow (4-5 pages)**:
```
1. Dispatch implementer subagent → generates pages in lot folder
2. Dispatch spec reviewer subagent → checks YAML compliance + wikilinks + anti-hallucination
3. If issues → implementer fix → spec reviewer re-review
4. Dispatch code quality reviewer → checks English quality, structure
5. If issues → implementer fix → code quality re-review
6. Lot marked complete
```

**Progress tracking**: each implementing subagent creates `_LotN_Topic/progress.md` at start:
```markdown
# Lot N - [Topic]
Status: in_progress
Expected pages: [exact title list]
Pages completed: 0/N
Started: YYYY-MM-DD HH:MM
```
Updated after each page created.

**Recovery spool**: if subagent doesn't respond within 650s:
- Store lot state (pages already created, pages remaining)
- Relaunch with recovered state
- Don't wait until end of session to detect failure

**Anti-hallucination rule**:
- Subagents may generate non-Latin characters (Chinese, Cyrillic) despite rules
- **2-stage review detects issues** — never skip
- If spec reviewer detects non-Latin characters → identify contaminated pages only, implementer fixes only those → spec reviewer re-review
- Don't reject the whole lot, only the contaminated pages

**Lot size**: 4-5 pages per subagent (avoids 600s stalls)

**Parallelization**: multiple lots can run in parallel if independent (different thematic lots)

### PHASE 2, LINKING AND MOC (15 min)

1. Generate `_MOC.md` of the cluster:
   - 3-paragraph introduction positioning the cluster
   - Pages grouped by lot and type, with 1 descriptive sentence each

2. Densify wikilinks:
   - Scan each page, verify bidirectional wikilinks
   - Target: 8-12 wikilinks average per page

3. **Post-processing broken links** (NEW):
   - Scan all wikilinks in vault
   - Collect wikilinks to `[[Page that doesn't exist yet]]` in a report
   - These future pages will be created in later lots — OK
   - Flag only links to pages never planned

### PHASE 3, QUALITY AUDIT (10-15 min)

Produce `99-Meta/Audit.md` with:
1. YAML compliance
2. Duplicates
3. Contradictions
4. Orphan pages (0 inbound backlinks)
5. Anemic pages (<600 words)
6. Total wikilinks and ratio

### PHASE 4, DEBRIEF

```
# Run Debrief

## Final Stats
- Pages created: X
- Lots completed: X
- Estimated tokens consumed: X
- Total wikilinks: X

## What worked well
- [List]

## What went wrong
- [List + corrections applied]

## Recommended adjustments for future runs
- Optimal lot size: 4-5 pages (avoids stalls)
- 2-stage review: mandatory to avoid non-Latin character contamination
- Lot-based organization: from the start, not at the end
- Progress tracking: progress.md per lot, updated after each page
- Recovery spool: if agent stalls >650s, relaunch with recovered state
- Filename validation: spec reviewer checks exact title vs Plan
- Post-processing broken links: scan wikilinks to non-existent pages
```

---

## ANTI-HALLUCINATION RULES (NON-NEGOTIABLE)

1. **No invented proper names**. If WebSearch doesn't find it: page doesn't exist or status `to-verify`.
2. **No fabricated dates**. If uncertain: note "exact date to confirm" in body.
3. **No unsourced statistical figures**.
4. **No invented direct quotes**. Paraphrase neutrally instead.
5. **Non-Latin characters detected**: fix only the contaminated pages, don't reject the whole lot.
6. Debunked theories: say "debunked", "non-replicable", "considered pseudoscience by current consensus".
7. **Transparency obligation**: any detected hallucination must be logged in `99-Meta/Fact-Check-Log.md`.

---

## STRICT CONVENTIONS

### Mandatory YAML frontmatter

```yaml
---
title: "Exact page name"
type: concept | theory | person | experience | controversy | school | disorder | method | term | debate | work | institution | event
cluster: "{CLUSTER_CHOISI}"
status: verified | to-verify | debated | debunked | hypothetical | stub | needs-sourcing
controversy: low | medium | high
importance: pillar | standard | deep-cut
source_knowledge: internal | web-checked | mixed
sources_count: N
tags: [#tag1, #tag2]
created: YYYY-MM-DD
strong_links: [["[[Page1]]", "[[Page2]]"]
opposition_links: [["[[Page3]]"]
---
```

### Page structure

```markdown
---
[Complete YAML]
---

# Title

> [!info] Summary
> 1-2 sentences of clear, precise pitch.

## Definition
2-4 dense paragraphs.

## Context and origin
Who, when, where, in what intellectual framework. Paragraphs.

## Mechanisms / characteristics / details
The core. 3-6 paragraphs. Concrete examples.

## Nuances, critiques, limits
MANDATORY on all pages.

## Links and implications
Wikilinks contextualized in full sentences. No bare listing.

## Sources
[^1]: Reference 1
```

### File naming

- Spaces allowed (Obsidian handles).
- English titles with proper capitalization.
- No numbered prefixes on pages.
- Folder: `_LotN_Topic` (underscore prefix for Obsidian sorting)

### Tags

- Lowercase, English, thematic prefix (#concept, #person, #method).
- Max 5 tags per page.

### Wikilinks

- `[[Exact page name]]` or `[[Page|alias]]`.
- Minimum 7 outbound wikilinks per page.
- Target: 8-12 wikilinks per page.
- Each wikilink justified by surrounding sentence, never bare listing outside MOC.

### Sources (Markdown footnotes)

```markdown
Sourced fact[^1].

[^1]: Author, *Title*, Publisher, year, URL if available.
```

---

## SUBAGENT WORKFLOW (2-STAGE REVIEW)

### Implementer subagent
- Receives: 4-5 page lot to generate, target folder, complete conventions
- Generates pages in the lot folder
- Self-review before returning

### Spec reviewer subagent
- Checks YAML compliance (all mandatory fields, values in allowed enumerations)
- Checks minimum 7 outbound wikilinks per page
- **Checks no non-Latin characters** — if detected: identify contaminated pages, return only those to implementer for correction
- **Checks filename matches Plan**: each file must match an exact title listed. Deviation = rename or flag for correction
- Checks wikilinks point to existing pages
- Returns list of issues to fix

### Code quality reviewer
- Checks English quality (no verbosity, neutral but decisive tone)
- Checks page structure conforms (Definition, Context, Mechanisms, Nuances, Links)
- Checks no gratuitous bullet listings
- If issues: returns to implementer for fix

---

## STARTUP

When you have read and integrated this prompt:

1. Briefly confirm subject, cluster, and vault path.
2. Launch Phase 0 (create folder structure + meta files).
3. Launch Phase 1 (generation by lots, 4-5 pages per subagent).
4. Continue until completion.

Go.
