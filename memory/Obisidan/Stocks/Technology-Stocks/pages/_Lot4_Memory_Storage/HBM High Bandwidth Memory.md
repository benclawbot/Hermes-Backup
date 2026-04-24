---
title: "HBM High Bandwidth Memory"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: pillar
source_knowledge: web-checked
sources_count: 3
tags: [#concept, #semiconductors, #memory]
created: 2026-04-24
strong_links: [["Advanced Packaging Technologies"], ["AI Chip Packaging HBM"], ["AI Accelerator Market Overview"], ["DRAM Market Analysis Samsung SKHynix Micron"], ["Memory Technologies DRAM NAND"]]
---

# HBM High Bandwidth Memory

> [!info] Summary
> HBM (High Bandwidth Memory) is stacked DRAM integrated with AI GPUs via advanced packaging, achieving 1-5 TB/s bandwidth — 10x conventional DDR5. SK Hynix pioneered HBM3 and remains the primary Nvidia H100/H200 supplier. Samsung and Micron are competing for HBM3E qualifications. HBM commands 5x the price per bit of commodity DRAM, making it a structural margin uplift for memory producers.

## Definition
HBM (High Bandwidth Memory) is stacked DRAM integrated with AI GPUs via advanced packaging. SK Hynix is the HBM leader (primary Nvidia H100/H200 supplier). Samsung and Micron are catching up with HBM3E qualifications. HBM3E (141GB on H200) is the current standard; next-gen will reach 200GB+ per chip. The [[Memory Technologies DRAM NAND]] page explains how HBM differs from conventional DRAM.

## Context and origin
HBM was developed through a partnership between SK Hynix and AMD, first commercially deployed in the AMD Fiji GPU in 2015. Unlike conventional GDDR or DDR memory, HBM uses through-silicon vias (TSVs) to stack 8-12 DRAM dies vertically, connected to the AI chip via an interposer (2.5D packaging). This achieves 1-5 TB/s bandwidth — 10x more than DDR5. The [[Advanced Packaging Technologies]] page covers the TSV and interposer manufacturing processes. Each H100 GPU requires 80GB HBM3; training clusters of thousands of GPUs drive massive HBM demand tied to [[AI Accelerator Market Overview]] dynamics.

## Mechanisms / characteristics / details
SK Hynix developed HBM with AMD (first used in AMD Fiji GPU, 2015). The partnership continued: SK Hynix is primary HBM3 supplier for Nvidia H100 and H200. Samsung is HBM3 supplier for Nvidia H100 as secondary source. Micron is behind on HBM but targeting HBM3E qualification. The HBM market is growing 50%+ annually as AI training cluster deployments scale. HBM packaging is performed by TSMC (CoWoS), Samsung, or Amkor using the AI chip maker's preferred packaging method. See [[AI Chip Packaging HBM]] for detailed packaging processes.

## Nuances critiques limits
HBM economics: approximately 5x more profitable than commodity DRAM per die area. This premium pricing has allowed SK Hynix and Samsung to improve margins despite commodity DRAM weakness. HBM packaging is done by TSMC (CoWoS), Samsung, or Amkor using the AI chip maker's preferred packaging. The [[Data Center Memory Hierarchy]] explains where HBM sits relative to DDR, L3 cache, and storage tiers in AI server architectures. Key risks: GPU allocation constraints, AI capex cycles, and potential overcapacity if new HBM entrants qualify.

## Links and implications
HBM analysis connects to [[Advanced Packaging Technologies]], [[AI Chip Packaging HBM]], [[AI Accelerator Market Overview]], [[DRAM Market Analysis Samsung SKHynix Micron]], and [[Memory Technologies DRAM NAND]] as core dependencies. The [[Semiconductor Industry Overview]] provides context on how HBM fits into the broader memory market structure.

## Sources
[^1]: SIA/Gartner/IC Insights or similar industry data.
[^2]: Company annual report or industry analysis (SK Hynix, Samsung Electronics, Micron Technology).
[^3]: Research publication or news (AnandTech, WikiChip, Semiconductor Digest).
