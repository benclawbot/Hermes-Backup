# CLAUDE.md — Technology Stocks Research Vault

## Vault Purpose
500-page interconnected research vault on technology stocks investing. Dense, cited, linked pages covering semiconductors, AI chips, cloud platforms, valuation, and investment strategies.

## Vault Path
`/home/thomas/Dropbox/memory/Obisidan/Stocks/Technology-Stocks`

## Cluster
`Technology Stocks Investing`

## Language
English throughout — content, titles, YAML, tags.

## Conventions

### Page Format
Every page must have:
- Complete YAML frontmatter (title, type, cluster, status, controversy, importance, source_knowledge, sources_count, tags, created, strong_links, opposition_links)
- `> [!info] Summary` block (1-2 sentences)
- Sections: Definition, Context and origin, Mechanisms / characteristics / details, Nuances critiques limits, Links and implications, Sources

### Naming
- Spaces allowed in page titles (Obsidian handles)
- No numbered prefixes on pages
- Folder: `_LotN_Topic` (underscore prefix for Obsidian sorting)

### Wikilinks
- Min 7 outbound wikilinks per page, target 8-12
- Each wikilink justified by surrounding sentence, never bare listing
- Format: `[[Exact page name]]` or `[[Page|alias]]`

### Tags
- Lowercase, English, thematic prefix (#concept, #method, #person, #company, #sector)
- Max 5 tags per page

### Sources
Markdown footnotes. All sourced facts must have a reference.

### Anti-Hallucination (non-negotiable)
- No invented proper names — WebSearch required or page gets `status: to-verify`
- No fabricated dates — use "exact date to confirm"
- No unsourced statistical figures
- No invented direct quotes — paraphrase neutrally
- Non-Latin characters detected → fix only contaminated pages

## Status Codes
- `verified` — WebSearch confirmed
- `to-verify` — claims unconfirmed
- `debated` — genuine academic/policy disagreement
- `debunked` — pseudoscience or fraudulent claim
- `hypothetical` — speculative future scenario
- `stub` — placeholder, needs expansion
- `needs-sourcing` — claim without citation

## Types
concept, theory, person, experience, controversy, school, method, term, debate, work, institution, event, company

## Lot Structure
Pages organized into lots from the start. Each lot is a folder under `pages/`. Subagent workflow: implementer → spec reviewer → code quality reviewer.

## Phase Order
1. Phase 0: Bootstrap (folder structure, meta files)
2. Phase 1: Generation by lots (subagent-driven)
3. Phase 2: Linking and MOC
4. Phase 3: Quality Audit
5. Phase 4: Debrief
