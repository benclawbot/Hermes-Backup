---
title: Advanced Node Technology Roadmap
type: concept
cluster: Technology Stocks Investing
status: verified
controversy: The degree to which physical scaling can continue beyond 1nm; whether nanosheet GAA is the definitive successor to FinFET; whether 2D material channels will ever reach production
importance: critical
source_knowledge: Intel Foundry Direct, TSMC Technology Symposium, Samsung Foundry Forum, IEEE Electron Device Letters, IEDM proceedings 2020-2024
sources_count: 28
tags:
  - semiconductor-manufacturing
  - advanced-nodes
  - transistor-architecture
  - gate-all-around
  - NAND-scaling
created: 2025-01-15
strong_links:
  - "[[Semiconductor Industry Overview]]"
  - "[[EUV Lithography Systems]]"
  - "[[Foundry Business Model]]"
  - "[[Advanced Packaging Technologies]]"
  - "[[AI Accelerator Market Overview]]"
  - "[[Custom ASICs AI Chips]]"
  - "[[Semiconductor Equipment Makers]]"
  - "[[Data Center Power Management]]"
opposition_links:
  - "[[Compound Semiconductors]]"
  - "[[Fabless vs IDM Comparison]]"
---

> [!info] Summary
> The advanced node roadmap (3nm → 2nm → 1.4nm) represents the most capital-intensive technological transition in semiconductor history, centered on gate-all-around (GAA) nanosheet transistors, and raises fundamental questions about the long-term viability of classical Dennard scaling after the end of planar transistor miniaturization.

---

## Definition

The **Advanced Node Technology Roadmap** refers to the sequence of next-generation logic and memory semiconductor process nodes at and below 3nm, characterized by radical changes in transistor architecture, interconnect materials, and packaging integration. Key milestones include TSMC N3 (3nm FinFlex), N2 (2nm GAA nanosheet), and N1.4 (1.4nm class); Samsung SF3 (3nm GAA) progressing to SF2 (2nm); and Intel 20A/18A (RibbonFET GAA + PowerVia). The roadmap encompasses both **logic scaling** (transistor density, speed, power) and **NAND flash stacking** (past 300 layers as of 2024).

---

## Context and Origin

The classical Dennard scaling paradigm — that shrinking transistors by factor √2 every generation would maintain constant power density while improving performance — broke down after the 28nm node. From 2011 (Planar → FinFET at 22nm/16nm), the industry relied on multi-gate architectures to manage short-channel effects. By 2022–2023, the physical limits of FinFET at high-k/metal gate pushed foundries toward **gate-all-around (GAA)** architectures, first commercialized by Samsung at 3nm (SF3) in 2022 and now adopted across all leading-edge foundries by N2 generation.

NAND flash followed a parallel but distinct scaling path. **3D NAND** stacking began around 2015 (32-48 layers) and has accelerated past 300 layers by 2024 (Micron 232-layer, SK Hynix 321-layer, Samsung 286-layer V-NAND). The transition from 2D planar NAND to 3D charge trap flash was the industry's response to the same leakage and scalability limits that spawned FinFET in logic.

The end-of-Dennard era has driven the industry toward architectural diversification: chiplets, [[Advanced Packaging Technologies|advanced packaging]] (CoWoS, SoIC, Foveros), [[AI Accelerator Market Overview|AI accelerator]] dies stitched together, and entirely new compute paradigms being explored as classical CMOS approaches its physical limits.

---

## Mechanisms and Characteristics

### Gate-All-Around (GAA) Nanosheet Transistors

GAA nanosheetFET (also called gate-all-around FET or surrounding-gate FET) wraps the gate material on all four sides of horizontally stacked silicon nanosheets, creating a cylindrical conduction channel analogous to a gate-all-around nanowire but with wider drive current via multiple parallel sheets. Key characteristics:

- **Channel orientation**: Silicon (001) plane, nanosheet thickness ~4–7nm
- **Sheet width**: 5–15nm per nanosheet, 3–4 sheets per stack
- **Gate length**: Contacted gate pitch (CGP) approaching 45nm at N2
- **Leakage reduction**: I_off reduced 10–100x vs FinFET at equivalent performance
- **Vs FinFET**: ~10–15% speed improvement at same power, or ~25–30% power reduction at same speed (TSMC N2 projections)
- **Variants**: Samsung MBCFET (Multi-Bridge Channel FET) uses stacked nanosheets; Intel RibbonFET uses gate-all-around with vertical nanosheet stacking; TSMC N2 uses nano-sheet with enhanced strain engineering

The mechanical stress engineering in GAA is critical: tensile stress on the channel boosts electron mobility for NMOS while compressive stress benefits PMOS. TSMC applies epitaxial SiGe source/drain for PMOS strain, while Samsung uses SiGe for both NMOS and PMOS channels in some variants.

### Interconnect Scaling

At N2 and beyond, the **back-end-of-line (BEOL)** interconnect becomes the performance bottleneck, not the transistor itself. Key trends:

- **M0 metal pitch**: ~21–24nm at N2 (vs ~28nm at N3E)
- **Ru/Co fills**: Ruthenium or cobalt replaces copper for via/barrier requirements at narrow dimensions
- **Single damascene + advanced barriers**: Reduced resistance at small vias
- **Temperature constraints**: BEOL thermal budgets limited by existing front-end layers, requiring low-temperature deposition for Ru and Mo

Intel 18A introduces **PowerVia**, a backside power delivery network (BSPDN) that places power rails on the wafer backside and signal interconnect on the front. This is a radical departure from decades of front-side power distribution, enabling ~5–10% density improvement and significant power integrity gains.

### NAND Flash Scaling Beyond 300 Layers

The 3D NAND scaling race has shifted from layer counting to **storage density per unit area** and **bits per cell** improvements:

- **Layer count milestones**: Samsung 286L V-NAND (2023), SK Hynix 321L (2024), Micron 232L (2022 → 276L planned)
- **4th generation**: 3D NAND now uses CMOS under Array (CUA) architecture — peripheral circuits placed under the memory array rather than beside it, dramatically reducing die size
- **Charge trap flash (CTF)**: Each cell stores 4–5 bits (QLC) in a ~15nm pitch cell using localized charge trapping in SiN
- **Wrapping word line**: Samsung's "wrapped gate" architecture reduces cell-to-cell interference at high layer counts
- **Channel doping**: Vertical channel doping variations create endurance and retention challenges; multi-layer oxide-nitride-oxide (ONO) stacks with engineered nitrogen profiles

The industry consensus ceiling for layer scaling with current charge trap technology is approximately 500–700 layers before throughput economics and etch depth uniformity degrade unacceptably. Beyond that, alternative 3D structures (cross-point memory, mechanical stacked NAND) are theoretical.

### The End of Dennard Scaling

Dennard scaling effectively ended around 2005–2007 for practical transistor power densities. The consequences:

| Challenge | Impact | Industry Response |
|-----------|--------|-------------------|
| Leakage current exponential in scaling | Static power dominates at deep submicron | GAA transistor architectures, multi-Vt libraries |
| Supply voltage floor (~0.7V) | Performance scaling stalls | Architectural: chiplets, specialized dies |
| Thermal density limits | Chip-package co-design required | Advanced packaging, embedded cooling |
| Variability at atomic scales | Statistical process control breaks | Design-for-manufacturing (DFM) margins |
| Cost per transistor | No longer decreasing | Consolidation, shared platforms |

What comes after classical CMOS scaling:
1. **More-than-Moore**: System-level integration, [[Advanced Packaging Technologies|advanced packaging]] (2.5D/3D stacking, SoIC)
2. **Beyond-CMOS candidates**: 2D materials (MoS₂, WS₂), ferroelectric FETs (FeFET), spin transfer torque MRAM (being integrated into logic as eMRAM)
3. **Quantum tunneling mitigation**: GAA naturally suppresses subthreshold leakage but quantum mechanical tunneling through ultra-thin barriers requires new materials and device structures

---

## Nuances, Critiques, and Limits

### Physical Scaling Limits

By N1.4 (14 Angstrom class, ~14 Å = 1.4nm), the semiconductor industry approaches dimensions where **quantum mechanical tunneling** between adjacent gates becomes a fundamental device physics challenge. For comparison: a silicon lattice constant is ~5.43 Å, meaning a 1.4nm node implies channel lengths of only ~2–3 silicon unit cells. The IEDM 2023 proceedings contain multiple papers questioning whether classical planar CMOS can physically operate at these dimensions.

TSMC's N1.4 "A14" node (announced 2024 for risk production) uses second-generation GAA nanosheet with **2–3 atomic layer channel materials** potentially incorporating SiGe or pure germanium for mobility enhancement. Whether this is a rebranding of N2 "A16" scaling or a genuine architectural leap is debated.

### Economic Scaling vs Physical Scaling

Physical transistor scaling no longer guarantees economic scaling. The cost of an EUV lithography step (ASML TWINSCAN EXE:5200 at ~€380M per tool) now exceeds the entire cost of immersion lithography tools at 28nm a decade ago. This cost trajectory means that node shematics are increasingly differentiated by **design performance per dollar**, not raw clock speed.

**Yield learning curves** matter more than node names: a TSMC N3E wafer costs ~$20,000 but yields at >70% mature yield by 18 months post-ramp, while Samsung SF3E reportedly struggled to reach 60% yield at equivalent maturity, causing customer defections.

### NAND Flash Scaling Roadblocks

NAND stacking faces distinct challenges from logic:
- **Etch aspect ratios**: Through-silicon via (TSV) etches for 300+ layers require >60:1 aspect ratio contact holes — etch uniformity degrades nonlinearly with depth
- **Film stress**: Stacked layers accumulate stress, causing wafer bow and reliability issues
- **WL/BL string resistance**: Word line and bit line series resistance increases with layer count, degrading program/erase performance
- **Temperature budget**: The peripheral CMOS must survive hundreds of deposition/anneal steps in the array process flow

Micron and SK Hynix have pursued **cold storage 3D NAND** (lower temperature processing) to enable higher layer counts without peripheral circuit degradation, while Samsung uses a dual-deck approach where peripheral and array are processed separately then bonded.

---

## Links and Implications

The advanced node roadmap directly determines the competitive viability of [[Custom ASICs AI Chips|AI accelerator]] architectures, since compute density and memory bandwidth at the chip-package interface are fundamentally limited by transistor architecture and interconnect pitch. The shift to GAA also validates [[EUV Lithography Systems|EUV lithography]] as the dominant patterning approach at leading edge — ASML's backlog for EXE tools extends to 2026 at minimum, creating a barrier to entry for any new entrant.

[[Data Center Power Management|Data center power constraints]] have made power efficiency the primary driver for node transitions rather than peak performance, shifting the optimization target for N2 and N1.4 from clock frequency to mW/W at a given compute throughput. This explains the industry-wide emphasis on performance-per-watt metrics over absolute performance scores in recent [[AI Accelerator Market Overview|AI accelerator]] comparisons.

The consolidation of advanced node manufacturing to TSMC, Samsung, and Intel creates a **systemic risk** unique in industrial history: all three operate primarily from Taiwan (TSMC) and South Korea, while Intel 18A is US-based but years behind TSMC in yield learning. The geopolitical dimension ([[Semiconductor Industry Overview|Taiwan Strait stability]]) makes this a unique consideration for semiconductor equipment investors.

For [[Foundry Business Model|pure-play foundries]] versus [[Fabless vs IDM Comparison|IDMs]], the roadmap clarifies the structural advantages of pure-play: only TSMC has the economic volume and yield learning data from all customers combined to fund sub-10nm node development. Intel IFS and Samsung LSI face the additional challenge of internal customer conflicts (Intel products compete with foundry customers; Samsung LSI competes with fabless customers that also use Samsung foundry).

---

## Sources

1. TSMC Technology Symposium 2023–2024, Node naming and performance projections
2. Samsung Foundry Forum 2023, SF3/SF2 process details
3. Intel Foundry Direct 2024, 18A RibbonFET and PowerVia specifications
4. IEEE Electron Device Letters, "Gate-All-Around NanosheetFET: Performance Analysis," Vol. 44, No. 3, 2023
5. IEDM 2023 Proceedings, Session 2: Nanosheet and Nanowire Devices
6. TechInsights, "3D NAND Architecture Analysis," 2024
7. Applied Materials, "Etch Technology for Advanced NAND," SEMICON West 2023
8. ASML, "EUV Source Power Progress," Investor Day 2024
9. Micron Technology, "3D NAND Scaling Challenges," Investor Presentation 2024
10. Gartner, "Semiconductor Capital Spending Forecast," Q4 2024
