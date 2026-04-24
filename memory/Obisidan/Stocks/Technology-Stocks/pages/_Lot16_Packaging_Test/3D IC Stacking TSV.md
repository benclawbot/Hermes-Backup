---
title: "3D IC Stacking TSV"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #3d-ic, #tsv, #stacking, #packaging]
created: 2026-04-24
strong_links: [["Advanced Packaging Technology Overview", "2.5D Interposer Technologies", "Fan Out Wafer Level Packaging", "Chiplet Based Design Ecosystem"], ["System in Package SiP", "OSAT Provider Analysis ASE Amkor", "Test Equipment Market Teradyne", "Memory for Data Centers"]]
opposition_links: []
---

# 3D IC Stacking TSV

> [!info] Summary
> 3D IC stacking uses through-silicon vias (TSV) to vertically connect stacked memory and logic chips, enabling the highest bandwidth and lowest power interconnects at the cost of complex manufacturing and thermal management challenges. High-bandwidth memory (HBM) is the most successful 3D stacking application, while 3D NAND represents another major commercial use case.

## Definition

Through-silicon via (TSV) technology creates vertical electrical connections through the silicon die, enabling chips to be stacked with vertical interconnects rather than only lateral connections. A 3D IC using TSV can stack DRAM directly on top of a logic chip (as in HBM), stack DRAM dice on DRAM dice (as in HMC), or stack logic chips on logic chips (as in some HPC processors).

The 3D stacking process involves: TSV formation (deep reactive ion etching of via holes, insulation deposition, barrier/seed deposition, copper plating, and CMP), wafer thinning (to expose TSV bottoms after bonding), chip-to-wafer or wafer-to-wafer bonding, and underfill/encapsulation.

## Context and origin

3D stacking with TSVs was a research topic from the 1990s, but manufacturing challenges delayed commercial adoption. HBM (JEDEC standardized in 2013) became the first major commercial 3D IC product, with SK Hynix being the pioneer and Samsung and Micron subsequently joining.

Intel's Foveros technology (launched 2019 with Lakefield) is a 3D stacking approach for logic-on-logic, allowing them to stack a compute die on top of a base die containing I/O and memory controllers. This represents a more ambitious and challenging application than HBM because the logic-to-logic die connections require different manufacturing approaches.

## Mechanisms / characteristics / details

HBM is covered in detail in [[High Bandwidth Memory HBM]]. The TSV manufacturing process is one of the most complex in semiconductor manufacturing: via depths of 50-100 micrometers with diameters of 1-5 micrometers, requiring high-aspect-ratio etch and deposition processes.

Memory-on-logic stacking (HBM) is more manufacturable than logic-on-logic stacking because the TSV density requirements are lower (HBM TSVs are relatively large and sparse compared to logic-on-logic interconnects). This is why HBM appeared commercially first.

The [[Advanced Packaging Technology Overview]] page frames the competitive landscape of packaging options. [[2.5D Interposer Technologies]] is an alternative approach that avoids TSV complexity but at the cost of larger form factor. [[Fan Out Wafer Level Packaging]] is another alternative for lower-cost applications.

## Nuances critiques limits

Thermal management is the central challenge for 3D stacked ICs. Stacking chips on top of each other traps heat, because the chip at the bottom must conduct heat through multiple intervening layers to the heat spreader. This limits the power dissipation of 3D-stacked logic chips and is why 3D logic stacking has been limited to relatively low-power applications.

Yield is also challenging: a single TSV defect can kill an entire stacked structure, and the cost of the stacked structure may exceed the cost of equivalent 2D chips with more expensive off-package memory interfaces.

## Links and implications

[[3D IC Stacking TSV]] connects to [[Advanced Packaging Technology Overview]] and [[High Bandwidth Memory HBM]] as the primary application. The [[Chiplet Based Design Ecosystem]] competes with 3D stacking as an alternative approach to achieving high-bandwidth, multi-chip architectures.

The [[OSAT Provider Analysis ASE Amkor]] covers companies offering TSV packaging services. [[Test Equipment Market Teradyne]] connects to the testing challenges of 3D-stacked products.

## Sources
[^1]: IEEE ECTC 3D stacking and TSV technology papers.
[^2]: JEDEC HBM standards (HBM2, HBM3) specifications.
[^3]: Intel Foveros technology documentation.
[^4]: TechInsights and Chipworks TSV and 3D stacking teardowns.
[^5]: SEMI reports on 3D IC equipment and materials requirements.
