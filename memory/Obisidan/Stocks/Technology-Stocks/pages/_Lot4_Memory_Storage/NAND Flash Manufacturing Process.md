---
title: "NAND Flash Manufacturing Process"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#semiconductors'
  - '#NAND'
  - '#manufacturing'
  - '#3D-NAND'
created: 2026-04-24
strong_links:
  - ['NAND Flash Market Analysis']
  - ['Enterprise SSD Technologies']
  - ['Memory Controller Chips']
  - ['Solid State Drives']
  - ['Foundry Business Model']
  - ['Semiconductor Process Technology Comparisons']
  - ['Data Center Memory Hierarchy']
  - ['Cloud Storage Technologies']
opposition_links: []
---

# NAND Flash Manufacturing Process

> [!info] Summary
> NAND flash is manufactured using 3D stacking processes where memory cells are deposited in vertical layers on silicon wafers. The key steps include deposition of alternating conductor/insulator layers (ONO — oxide-nitride-oxide), channel hole etching through all layers, polysilicon channel formation, and string selection device integration. Current 3D NAND has 128-256 active wordline layers, with 500+ layer roadmaps. Leading manufacturers (Samsung, SK Hynix/Solidigm, WDC/Kioxia, Micron) use different 3D architectures.

## Definition

NAND flash memory stores data as trapped electrons in floating gate or charge trap cells. The manufacturing process differs fundamentally from planar CMOS logic: rather than scaling transistors horizontally, 3D NAND builds memory cells vertically by depositing alternating layers of conductor (polycrystalline silicon wordlines) and insulator (ONO — oxide-nitride-oxide), then etching vertical channel holes and filling them with semiconductor material.

The key process steps:
1. Well formation and peripheral transistors on the silicon wafer
2.交替沉积导体和绝缘体层 (alternating deposition of conductor and insulator layers, 64-128 pairs for 128-256 wordline layers)
3. Channel hole etching (vertical holes ~100nm diameter through all layers simultaneously)
4. Channel poly-Si deposition and crystallization
5. Source-side Select Gate (SSL) and Drain-side Select Gate (DSL) formation
6. Contact and metallization for wordline contacts
7. Back-end-of-line (BEOL) processing and wafer-level test

## Context and origin

The NAND flash industry transitioned from 2D (planar) NAND to 3D NAND around 2014-2015 as planar scaling hit physical limits. At 15-10nm half-pitch, adjacent memory cells' charge would leak into each other, making further scaling unreliable. The solution was building upward rather than shrinking horizontally.

Samsung pioneered 3D NAND with its V-NAND (2013, 24 layers), followed by SK Hynix (2015, 36 layers via its acquisition of LG's memory division), WDC/Kioxia (BiCS, 2015, 48 layers), and Micron (2016, 32 layers). The current leading products have 128-256 layers.

## Mechanisms / characteristics / details

The three dominant 3D NAND architectures:

Samsung V-NAND (CTF — Charge Trap Flash): Uses barium titanate as the charge trap layer, deposited by ALD (Atomic Layer Deposition). This allows vertical wordline scaling without the cell-to-cell interference issues of floating-gate designs. Current V-NAND 9th gen is at 290+ layers.

WDC/Kioxia BiCS (Bit Cost Scaling): Uses floating-gate cells with a "pipe-shaped" string that reduces string resistance. Current generation is 162-layer BiCS 8. The companies are merging BiCS development.

SK Hynix/Solidigm (developed after Intel's出售给 SK Hynix): Uses a "copy-gate" architecture derived from Intel's original 3D NAND design. Current generation is 192-layer 4th Gen.

The layer count metric is not directly comparable across architectures — layer height and bit density per layer vary, making effective bit density (Gb/mm²) a better comparison metric.

## Nuances critiques limits

The 3D NAND scaling roadmaps face fundamental challenges: as layers increase, channel hole uniformity becomes harder to maintain, and the time to etch and fill hundreds of channel holes per cell (on a wafer containing millions of memory arrays) becomes a manufacturing bottleneck.

The transition from 2D to 3D NAND required completely new manufacturing equipment (applied materials, Lam Research, TEL all developed new deposition and etch tools), creating barriers to entry for new players.

China's YMTC (Yangtze Memory Technologies) developed its own 3D NAND (Xtacking architecture) but was blocked from importing EUV equipment needed for advanced nodes, limiting its competitive trajectory.

The [[Foundry Business Model]] applies: NAND fabs are extremely expensive ($15-20B for a leading-edge 3D NAND fab) and require deep expertise in deposition, etch, and metrology processes.

## Related pages

[[NAND Flash Market Analysis]] covers the market dynamics. [[Enterprise SSD Technologies]] and [[Solid State Drives]] are the products. [[Foundry Business Model]] applies to NAND fab economics.

## References
[^1]: Samsung V-NAND technology whitepapers.
[^2]: WDC/Kioxia BiCS NAND architecture documentation.
[^3]: Applied Materials, Lam Research 3D NAND equipment specifications.
[^4]: Semiconductor Engineering 3D NAND manufacturing analysis.
[^5]: IEEE International Memory Workshop (IMW) conference papers.

[^6]: [[NAND Flash Market Analysis]] covers the product economics.
[^7]: [[Enterprise SSD Technologies]] are the main customer for advanced NAND.
[^8]: [[Solid State Drives]] shows how NAND is packaged into storage devices.
[^9]: [[Data Center Memory Hierarchy]] frames NAND in the storage tier.
