---
title: "Persistent Memory SCM"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#concept, #semiconductors, #memory]
created: 2026-04-24
strong_links: [["Memory Technologies DRAM NAND"], ["DRAM Market Analysis Samsung SKHynix Micron"], ["Data Center Memory Hierarchy"], ["NAND Flash Market Analysis"], ["Advanced Packaging Technologies"]]
---

# Persistent Memory SCM

> [!info] Summary
> Persistent memory (SCM — Storage Class Memory) bridges the gap between DRAM and NAND, offering nanosecond latency with non-volatility. Intel Optane DC PM (3D XPoint) was the primary commercial SCM but was discontinued in 2023. Emerging alternatives including MRAM, ReRAM, and PCM target embedded storage and future SCM applications, though none have achieved Optane's scale.

## Definition
Persistent memory (SCM — Storage Class Memory) bridges the gap between DRAM and NAND. It retains data without power (like NAND) but with DRAM-like speed (nanoseconds vs microseconds). Intel Optane DC PM (3D XPoint) was the primary commercial SCM, but Intel discontinued it in 2023. The [[Memory Technologies DRAM NAND]] page explains the fundamental memory hierarchy where SCM would fit.

## Context and origin
The concept: use memory as both working memory (DRAM) and storage (NAND) — eliminating the storage tier or expanding DRAM capacity at lower cost. Persistent memory targets the "memory-storage gap" between DRAM (fast, volatile, expensive per GB) and NAND (slow, non-volatile, cheap per GB). Intel launched 3D XPoint (Optane) in 2017, offering 256GB-4TB modules at DDR4 bus speeds. Major adopters included cloud providers for memory-intensive workloads like databases and in-memory analytics. See [[Data Center Memory Hierarchy]] for context on where SCM fits in server architectures.

## Mechanisms / characteristics / details
Intel 3D XPoint (Optane) was the main commercial persistent memory. Launched 2017, it offered 256GB-4TB modules at DDR4 bus speeds. Major adopters: cloud providers for memory-intensive workloads (databases, in-memory analytics). Intel discontinued Optane in 2023, writing off $559M in inventory — the market wasn't large enough to sustain two memory technologies competing with DRAM and NAND. The [[Advanced Packaging Technologies]] page covers TSV processes used in Optane's stacked die architecture.

## Nuances critiques limits
Emerging persistent memory technologies: MRAM (Magnetoresistive RAM — in production at Everspin, available from Samsung/Micron as eMRAM), ReRAM (Resistive RAM — Panasonic/Weebit), PCM (Phase Change Memory). These are NVM technologies targeting embedded storage in microcontrollers and potential future SCM applications. None have achieved the density or bandwidth of Optane. The [[NAND Flash Manufacturing Process]] page covers similar non-volatile memory fabrication. Key risk: without a major SCM player, the technology may remain niche. The [[DRAM Market Analysis Samsung SKHynix Micron]] page covers how DRAM producers view SCM as potential competition.

## Links and implications
Persistent memory connects to [[Memory Technologies DRAM NAND]], [[DRAM Market Analysis Samsung SKHynix Micron]], [[Data Center Memory Hierarchy]], [[NAND Flash Market Analysis]], and [[Advanced Packaging Technologies]] as core dependencies. The [[Semiconductor Industry Overview]] provides broader context on emerging memory technologies.

## Sources
[^1]: SIA/Gartner/IC Insights or similar industry data.
[^2]: Company annual report or industry analysis (Intel, Samsung Electronics, Micron Technology).
[^3]: Research publication or news (AnandTech, Tom's Hardware, Semiconductor Digest).
