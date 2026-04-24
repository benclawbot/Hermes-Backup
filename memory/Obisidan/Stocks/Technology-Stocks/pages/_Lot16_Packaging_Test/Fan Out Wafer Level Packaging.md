---
title: "Fan Out Wafer Level Packaging"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#fan-out'
  - '#wlp'
  - '#packaging'
  - '#mobile'
created: 2026-04-24
strong_links:
  - ['Advanced Packaging Technology Overview']
  - ['2.5D Interposer Technologies']
  - ['System in Package SiP']
  - ['OSAT Provider Analysis ASE Amkor']
  - ['Chiplet Based Design Ecosystem']
  - ['Automotive Packaging Reliability']
  - ['Test Equipment Market Teradyne']
  - ['Semiconductor Assembly Test Services']
opposition_links: []
---

# Fan Out Wafer Level Packaging

> [!info] Summary
> Fan-out wafer-level packaging (FOWLP) embeds a chip in a molding compound and builds redistribution layers (RDL) that fan out from the chip to a larger pitch, achieving higher I/O density than the chip's original bump layout without the cost of a silicon interposer. It has become the dominant packaging technology for mobile application processors and is expanding into AI inference chips.

## Definition

FOWLP starts with a reconstructed wafer: chips are placed face-down on a carrier wafer, then molding compound is dispensed around them and cured, creating a flat wafer-like structure. Redistribution layers (RDL) — fine copper traces in polymer dielectric — are built on top of the molded wafer, fanning out from the chip's original I/O to a larger grid for standard BGA soldering.

There are two main variants: chip-first (chips placed before molding) and chip-last (chips placed after first RDL build). Chip-first is more common for lower-cost applications; chip-last allows higher RDL density.

## Context and origin

FOWLP was pioneered by Infineon (then Siemens) as eWLB (embedded Wafer Level BGA) in the late 2000s. The technology was adopted by Apple's A10 Fusion processor in iPhone 7 (2016), validating FOWLP for high-volume mobile applications.

TSMC's InFO (Integrated Fan-Out) was developed for Apple's A10 and subsequent processors. InFO PoP (Package-on-Package) packages the DRAM directly on top of the application processor, achieving shorter memory connections than competing approaches. Apple has been the primary driver of InFO volume.

## Mechanisms / characteristics / details

FOWLP's key advantage over standard flip-chip BGA is the RDL flexibility. Since the RDL is built in a wafer-level process, trace widths and spaces can be much finer than in standard substrate manufacturing, enabling high-density interconnects without the cost of silicon interposer.

The [[System in Package SiP]] is related: FOWLP can be used to implement SiP by placing multiple chips within the same molding compound. This is the approach used for some mobile SoCs that integrate application processor, baseband processor, and wireless connectivity in a single package.

The link to [[OSAT Provider Analysis ASE Amkor]] is important because Amkor and ASE have the most advanced Fan-Out capabilities. [[Automotive Packaging Reliability]] connects to automotive applications where FOWLP reliability standards are more demanding.

## Nuances critiques limits

The main limitation of FOWLP is warpage management. As molded wafers are larger than the original chip, differential thermal expansion between the chip, molding compound, and carrier creates warpage that increases with larger chip sizes. This limits FOWLP's use for very large chips.

The RDL line/space resolution in FOWLP (typically 2-5 micrometers) is coarser than silicon interposer (sub-micrometer), limiting FOWLP's use in ultra-high-bandwidth applications like AI accelerators that need HBM.

## Links and implications

[[Fan Out Wafer Level Packaging]] connects to [[Advanced Packaging Technology Overview]] as a major packaging category. The mobile SoC application links to [[System in Package SiP]] as an implementation approach.

[[OSAT Provider Analysis ASE Amkor]] are the primary service providers. [[Test Equipment Market Teradyne]] connects to test requirements.

## Sources
[^1]: IEEE ECTC Fan-Out WLP papers and technology reviews.
[^2]: TSMC InFO technology documentation and customer disclosures.
[^3]: Yole Développement fan-out packaging market reports.
[^4]: Infineon eWLB technology papers.
[^5]: Apple processor packaging analysis from Chipworks/TechInsights.
