---
title: "Foundry Business Model Deep Dive"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #foundry, #business-model, #economics, #capital]
created: 2026-04-24
strong_links: [["Foundry Business Model", "TSMC Competitive Position", "Fabless vs IDM Comparison", "Advanced Node Technology Roadmap"], ["Advanced Packaging Technologies", "EUV Lithography Systems", "Semiconductor Equipment Market Overview", "AI Accelerator Market Overview"]]
opposition_links: []
---

# Foundry Business Model Deep Dive

> [!info] Summary
> The pure-play foundry model (dedicated contract chip manufacturing, no internal product business) was pioneered by TSMC in 1987 and now generates $150B+ annual revenue. The model's core economics: high capex (fabs cost $15-30B each), high fixed costs, high utilization dependence (each 1% of utilization lost = $150-200M annual revenue lost at leading edge), and long investment cycles (5-10 years to break even on a new fab). The model creates winner-take-most dynamics — the leading-edge foundry (TSMC) captures majority of logic foundry profits due to process technology leadership and customer ecosystem lock-in.

## Definition

A semiconductor foundry is a contract manufacturer of chips designed by external customers (fabless companies). The alternative is an IDM (Integrated Device Manufacturer) like Intel or Samsung, which designs and manufactures its own chips. The foundry model separates the design risk (borne by fabless companies) from the manufacturing risk (borne by the foundry).

The pure-play foundry sells wafer processing services to customers who provide GDSII files (the geometric layout of the chip) and receive processed wafers. The foundry is responsible for: wafer start (purchasing silicon wafers), the full front-end process flow (diffusion, lithography, etch, CMP, ion implant), the back-end process flow ( wafer test, dicing, assembly, final test), and delivering tested packaged chips to the customer.

Key financial metrics: capacity (wafers per month, WPM), utilization rate (actual wafers processed vs maximum capacity), ASP per wafer, yield (% of functional die per wafer), and cycle time (weeks from wafer start to delivery).

## Context and origin

TSMC (Taiwan Semiconductor Manufacturing Company) was founded in 1987 by Morris Chang, a former Texas Instruments executive, with support from the Taiwanese government. The insight: the upfront cost of building a semiconductor fab ($500M-$1B in 1987) was too high for most semiconductor companies, but the marginal cost of processing an additional wafer was relatively low. By aggregating many small customers, a foundry could achieve high fab utilization and spread fixed costs across a large revenue base.

The early foundry customers were small fabless companies (most did not exist as independent companies before foundries) and companies that couldn't afford to build their own fabs. The PC era (Intel, AMD) was dominated by IDMs — but even Intel used external foundries for some legacy products. The smartphone era (post-2007) accelerated the foundry model: Apple's first iPhone used a Samsung fab for its ARM-based SoC; Apple gradually moved all manufacturing to TSMC by 2014.

The semiconductor crisis of 2020-2023 demonstrated both the power and vulnerability of the foundry model: TSMC's capacity was fully utilized, but allocation went to customers with long-term relationships and large orders. TSMC raised prices 6-20% in 2021-2022, passing costs to fabless customers who had no alternative.

## Mechanisms / characteristics / details

**Capex and depreciation:** A leading-edge fab (N5, 3nm) costs $15-30B to build (including equipment, cleanroom, infrastructure). Equipment alone for an EUV-equipped fab: $1.5-2B for ASML EUV tools (each EUV tool costs $200M+). The fab depreciates over 5-7 years (straight-line or accelerated), creating a fixed cost of $2-4B per year before a single wafer is processed. If utilization is 70%, the depreciation cost per wafer is ~50% higher than at 100% utilization.

**Customer lock-in (ecosystem moat):** The foundry ecosystem includes: EDA tool compatibility (Synopsys, Cadence, Siemens EDA must have qualified tool flows for each process), PDK (Process Design Kit) quality, IP blocks (memory compilers, standard cell libraries, I/O cells, PHYs for interfaces), and DFM (Design for Manufacturing) rule decks. These are all process-specific. Switching a chip design from TSMC N3 to Samsung 3GA requires a new tape-out ($5-20M cost, 6-18 months of engineering) — so customers stay unless there's a compelling reason to switch.

**Customer concentration risk:** TSMC's top 5 customers (Apple, NVIDIA, AMD, Qualcomm, Broadcom) account for ~60% of revenue. Apple alone is ~25% of TSMC revenue. This creates asymmetric leverage: if Apple leaves (unlikely), TSMC loses 25% of revenue. If TSMC fails to meet Apple's needs, Apple can move to Samsung or Intel — so the concentration risk is real but manageable.

**Cycle time and yield dynamics:** TSMC's typical cycle time from wafer start to completed wafer test is 8-14 weeks depending on process complexity. The most time-consuming steps: diffusion (furnace cycles, 4-8 weeks cumulative), copper plating (electrochemical deposition, ~2 weeks), and assembly/test (~2 weeks). Yield improvement is continuous: new processes typically start at 40-60% yield and improve to 85-95% over 12-24 months as the process team identifies and fixes defect sources.

**Advanced packaging as differentiator:** The most valuable advanced service is CoWoS (Chip on Wafer on Substrate) and InFO (Integrated Fan-Out) packaging, which TSMC offers as a turnkey service combining wafer processing with sophisticated packaging. This allows customers to integrate multiple chips (logic + HBM memory, for example) in a single package without requiring the customer to have packaging expertise. This is a significant competitive advantage and revenue add-on.

## Nuances critiques limits

**Geopolitical concentration risk:** ~65% of TSMC's revenue comes from chips manufactured in Taiwan. Taiwan's geopolitical status (claimed by mainland China) represents the most significant single-point geopolitical risk in the semiconductor industry. US CHIPS Act and EU Chips Act are explicit attempts to reduce this concentration — TSMC, Samsung, and Intel are all building US and European fabs to diversify geographically.

**The 3nm cost cliff and chiplet alternative:** The cost per transistor is no longer decreasing at 3nm — the cost per wafer is so high that customers are questioning whether the latest node is worth the premium. This is driving adoption of chiplets: instead of designing one massive monolithic chip on N3 (extremely expensive), customers design smaller chiplets on cheaper nodes (N5, N7) and connect them with advanced packaging (2.5D interposers, 3D stacking). AMD's EPYC and Ryzen CPUs use chiplet architecture as does Intel's Sapphire Rapids Xeon.

**Capital intensity vs returns:** The foundry business requires enormous capital investment for uncertain returns. TSMC spent $30B+ in capex in 2022 alone. Intel's foundry investment plan ($100B over 5 years) will consume enormous cash flow — and there's no guarantee customers will materialize. The risk: if IFS fails to win customers at leading edge, Intel will be stuck with massive fabs running at low utilization, crushing its margins.

**Secondary foundries:** GlobalFoundries (AMD's former fab, spun off in 2021, NASDAQ: GLOBALFOUNDRIES), SMIC (China's domestic champion), and Samsung Foundry are "second-tier" foundries that don't compete at the leading edge (7nm and below). They serve markets requiring specialty processes (FD-SOI at GlobalFoundries, automotive-qualified nodes at SMIC and GlobalFoundries). These foundries compete on specialty capabilities, node longevity (10+ year availability), and location (US-based for defense contracts) rather than leading-edge density.

## Links and implications

[[Foundry Business Model Deep Dive]] connects to [[Foundry Business Model]] (self-link for cross-reference) and [[TSMC Competitive Position]] — TSMC's dominance is the defining feature of the foundry landscape. [[Fabless vs IDM Comparison]] explains which companies benefit from the foundry model (fabless: AMD, Qualcomm, NVIDIA) and which compete with it (IDM: Intel, Samsung).

[[Advanced Node Technology Roadmap]] defines what "leading edge" means in 2024-2026. [[EUV Lithography Systems]] is the key enabler of leading-edge processes — without EUV, the foundry cannot compete at N7 and below. [[Semiconductor Equipment Market Overview]] connects: the equipment suppliers (Applied Materials, Lam Research, KLA, ASML) are the real beneficiaries of foundry capex cycles.

[[Advanced Packaging Technologies]] is a key profit center for foundries: CoWoS, InFO, and 3D packaging services add $50-500 per wafer depending on complexity. [[AI Accelerator Market Overview]] connects: AI chips are the leading-edge foundry's largest and fastest-growing customer segment — NVIDIA, AMD, Intel, and custom AI ASICs all need leading-edge capacity.

## Sources
[^1]: TSMC Annual Report 2023 and investor presentations.
[^2]: GlobalFoundries investor materials and SEC filings.
[^3]: Morris Chang (TSMC founder), "Foundry, Fab, and the Future" — papers and speeches.
[^4]: Intel Foundry documentation and IFS Accelerator program.
[^5]: McKinsey Semiconductor Practice, "The Semiconductor Value Chain" 2023.
