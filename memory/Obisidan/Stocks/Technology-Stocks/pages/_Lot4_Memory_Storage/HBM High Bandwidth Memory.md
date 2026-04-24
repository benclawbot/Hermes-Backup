---
title: "HBM High Bandwidth Memory"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: pillar
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#semiconductors'
  - '#memory'
  - '#HBM'
  - '#AI'
created: 2026-04-24
strong_links:
  - ['Advanced Packaging Technology Overview']
  - ['3D IC Stacking TSV']
  - ['AI Chip Packaging HBM']
  - ['AI Accelerator Market Overview']
  - ['DRAM Market Analysis Samsung SKHynix Micron']
  - ['SK Hynix Memory Business']
  - ['Samsung Memory Business']
  - ['Foundry Business Model']
opposition_links: []
---

# HBM High Bandwidth Memory

> [!info] Summary
> HBM (High Bandwidth Memory) is stacked DRAM integrated with AI GPUs via advanced packaging, achieving 1-5 TB/s bandwidth — 10x conventional DDR5. SK Hynix pioneered HBM3 and remains the primary NVIDIA H100/H200 supplier. Samsung and Micron are competing for HBM3E qualifications. HBM commands 5-7x the price per bit of commodity DRAM, making it a structural margin uplift for memory producers and a critical capacity constraint for AI accelerator deployment.

## Definition

HBM (High Bandwidth Memory) is a type of high-performance DRAM that stacks multiple DRAM dies vertically and connects them to a processor (AI GPU, CPU, or custom ASIC) via an interposer using through-silicon vias (TSVs). This achieves dramatically higher bandwidth than conventional DDR or GDDR memory by using many more physical connections between the memory and processor.

Current HBM generations: HBM2 (2016), HBM2E (2020), HBM3 (2022), HBM3E (2024). HBM3E, the current cutting-edge, delivers 1.2-1.6 TB/s per stack with 8-12 GB per stack. The NVIDIA H100 uses 80GB of HBM3; the H200 uses 141GB of HBM3E.

The physical structure: 8-12 DRAM dies stacked with TSVs connecting them vertically, mounted on an interposer (silicon or organic) that connects to the AI chip via a high-density interconnects (HDI) substrate. The entire package is then mounted on the circuit board.

## Context and origin

HBM was developed through a partnership between SK Hynix and AMD, first commercially deployed in the AMD Fiji GPU in 2015. The original motivation was reducing GPU memory power consumption and form factor: HBM achieved 512 GB/s bandwidth using only 256 pins vs 4-8GB GDDR5 requiring 256+ pins. The interposer-based integration allowed a much smaller GPU module.

The AI boom transformed HBM from a niche technology to a critical capacity constraint. When NVIDIA launched the H100 in 2022, it quickly became supply-constrained — not by GPU wafer capacity but by HBM3 supply. SK Hynix's HBM3 capacity became the bottleneck determining how many H100s NVIDIA could ship. This dynamic has persisted: HBM3/HBM3E allocation determines AI accelerator shipment rates for all three major AI chip makers.

## Mechanisms / characteristics / details

HBM bandwidth advantage: HBM3 delivers ~1.2 TB/s per stack; 6 stacks on an H100 = ~7.2 TB/s total memory bandwidth. This is compared to ~300-500 GB/s for DDR5 on a conventional server CPU platform. The bandwidth enables AI accelerators to feed compute cores without stalls, critical for matrix multiplication-heavy transformer training.

TSV (Through-Silicon Via) manufacturing: DRAM wafers are processed with thousands of microscopic vertical connections through the silicon die. These require dedicated TSV formation equipment and expertise that SK Hynix has refined over generations. TSV yield is a key differentiator.

The packaging is performed by TSMC (CoWoS — Chip on Wafer on Substrate), Samsung, or Amkor, using the AI chip maker's preferred method. TSMC's CoWoS capacity has been a major bottleneck for AI chip supply: adding CoWoS packaging capacity takes 9-12 months.

[[Advanced Packaging Technology Overview]] covers the manufacturing processes. [[3D IC Stacking TSV]] covers the TSV process in detail.

## Nuances critiques limits

HBM supply is concentrated: SK Hynix has the leading HBM3E process, holding ~70% of NVIDIA's HBM3 allocation. Samsung is the secondary source. Micron has been slower to qualify HBM3E with customers.

HBM is expensive: HBM3 costs approximately $20-30 per GB vs $2-3 per GB for commodity DDR5. An H100 with 80GB HBM3 has ~$1,600-2,400 in HBM content alone (part of $20,000-30,000 total GPU cost). This is a massive value transfer from AI chip makers to memory makers.

The [[DRAM Market Analysis Samsung SKHynix Micron]] covers the broader memory market. HBM is a premium segment of the DRAM market, not a separate market.

## Related pages

[[Advanced Packaging Technology Overview]] and [[3D IC Stacking TSV]] cover the manufacturing. [[AI Chip Packaging HBM]] covers the full packaging story. [[AI Accelerator Market Overview]] shows why bandwidth matters for AI. [[SK Hynix Memory Business]] is the primary beneficiary.

## References
[^1]: SK Hynix HBM product roadmaps and specifications.
[^2]: AMD Fiji/HBM technical documentation, 2015.
[^3]: NVIDIA H100/H200 architecture whitepaper.
[^4]: Semiconductor Engineering HBM market and technology analysis.
[^5]: TSMC CoWoS packaging capacity analysis, 2024.
