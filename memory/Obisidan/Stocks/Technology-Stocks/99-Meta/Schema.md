# Schema — Technology Stocks Research Vault

## YAML Frontmatter Spec

Every page MUST include this exact frontmatter block:

```yaml
---
title: "PAGE TITLE"
type: concept | theory | person | experience | controversy | school | method | term | debate | work | institution | event | company
cluster: "Technology Stocks Investing"
status: verified | to-verify | debated | debunked | hypothetical | stub | needs-sourcing
controversy: low | medium | high
importance: pillar | standard | deep-cut
source_knowledge: internal | web-checked | mixed
sources_count: N
tags: [#tag1, #tag2, #tag3]
created: YYYY-MM-DD
strong_links: [["[[Page1]]", "[[Page2]]", "[[Page3]]"], ["[[Page4]]", "[[Page5]]"]]
opposition_links: [["[[OpposingPage1]]"]]
---
```

## Field Rules

| Field | Required | Values / Notes |
|-------|----------|----------------|
| `title` | yes | Exact title, matches filename and H1 |
| `type` | yes | See type list above |
| `cluster` | yes | Always "Technology Stocks Investing" |
| `status` | yes | `verified` = WebSearch confirmed; `to-verify` = unconfirmed; `stub` = placeholder |
| `controversy` | yes | `low` default unless known debate |
| `importance` | yes | `pillar` = core concept; `standard` = important; `deep-cut` = niche |
| `source_knowledge` | yes | `internal` = derived from vault; `web-checked` = WebSearch confirmed; `mixed` |
| `sources_count` | yes | Integer >= 0 |
| `tags` | yes | Max 5, lowercase, thematic prefix (#sector, #company, #concept) |
| `created` | yes | ISO date YYYY-MM-DD |
| `strong_links` | yes | 2 sub-arrays, 3-5 links each |
| `opposition_links` | yes | 1 sub-array, at least 1 link |

## Body Sections

1. `# PAGE TITLE` (H1, matches title field exactly)
2. `> [!info] Summary` — 1-2 sentence dense summary, no wikilinks
3. `## Definition` — 2-4 paragraphs
4. `## Context and origin` — history, key companies, evolution
5. `## Mechanisms / characteristics / details` — 3-6 paragraphs, concrete
6. `## Nuances, critiques, limits` — MANDATORY, risks/limits/regulatory
7. `## Links and implications` — wikilinks in full sentences, min 7 outbound
8. `## Sources` — [^1], [^2] etc.

## Wikilink Rules

- Format: `[[Exact Page Name]]` or `[[Page|alias]]`
- Min 7 outbound wikilinks per page, target 8-12
- Wikilinks must be in full sentences, not bare lists
- `[[Page not yet created]]` → allowed, don't create on behalf
- Bidirectional: if Page A links to Page B, Page B should also link back

## Anti-Hallucination Rules

- No invented proper names without WebSearch
- No fabricated dates — use "exact date to confirm"
- No unsourced statistics
- No invented quotes — paraphrase neutrally
- Non-Latin characters → fix contaminated pages only, not whole lot
- All sourced facts must have a footnote reference

## Status Codes

| Status | Meaning |
|--------|---------|
| `verified` | WebSearch confirmed |
| `to-verify` | Claims unconfirmed |
| `debated` | Genuine academic/policy disagreement |
| `debunked` | Pseudoscience or fraud |
| `hypothetical` | Speculative future scenario |
| `stub` | Placeholder, needs expansion |
| `needs-sourcing` | Claim without citation |

## Types

`concept` `theory` `person` `experience` `controversy` `school` `method` `term` `debate` `work` `institution` `event` `company`
