---
title: "Persistent Memory SCM"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#memory'
  - '#SCM'
  - '#persistent'
  - '#NVRAM'
created: 2026-04-24
strong_links:
  - ['Data Center Memory Hierarchy']
  - ['DRAM Market Analysis Samsung SKHynix Micron']
  - ['Memory Controller Chips']
  - ['HBM High Bandwidth Memory']
  - ['DDR and LPDDR Memory Standards']
  - ['Enterprise SSD Technologies']
  - ['NAND Flash Market Analysis']
  - ['CXL Interconnect Standard']
opposition_links: []
---

# Persistent Memory SCM

> [!info] Summary
> Persistent Memory (also called Storage Class Memory or SCM) occupies the performance/latency gap between DRAM and NAND flash. Intel Optane DC Persistent Memory was the leading product but was discontinued in 2023 after failing to achieve commercial viability. CXL (Compute Express Link) is emerging as the successor technology, enabling memory expansion and pooling without the cost and complexity of Optane's architectural approach.

## Definition

Storage Class Memory (SCM) is memory technology that is non-volatile (retains data without power) like NAND flash, but with latency and bandwidth approaching DRAM (100-300ns vs NAND's 10-100μs). The goal is a memory tier that is faster than NAND/SSD but cheaper and denser than DRAM.

Intel Optane DC Persistent Memory (DCPMM) was the primary SCM product: launched in 2019, it was a DDR4-compatible DIMM module with 128GB-512GB per module, installed in the same slots as DRAM. The key innovation was byte-addressability — unlike SSDs which are block devices, DCPMM could be accessed at the memory bus level, enabling direct memory access without I/O protocols.

CXL (Compute Express Link) is emerging as the successor: CXL-attached memory is memory that is physically separate from the CPU but connected via CXL high-bandwidth, low-latency interconnect. This enables memory pooling and expansion without the complexity of Optane's proprietary architecture.

## Context and origin

The SCM concept emerged from academic and industry research in the 2000s as researchers sought to bridge the ever-widening gap between DRAM speed and NAND cost/density. Multiple technologies were explored: PCM (Phase Change Memory — Intel/Micron's 3D XPoint), MRAM (Magnetoresistive RAM), ReRAM (Resistive RAM), and others.

Intel and Micron jointly developed 3D XPoint (cross-point) memory, announcing it in 2015 and shipping it as Intel Optane in 2018. 3D XPoint used a novel material that changed resistance when current was applied, creating a non-volatile memory element. The theory was that this would be faster and cheaper than NAND for certain workloads.

However, Optane failed commercially: the cost per GB was too high, the performance advantage over NAND SSDs was not large enough to justify the price premium, and the software ecosystem (requiring special programming models) was complex.

## Mechanisms / characteristics / details

Optane's architecture was unique: the memory was accessed via memory-mapped I/O, where the CPU accessed Optane DIMMs as if they were memory, but the memory controller treated them differently from DRAM (with different latency and endurance characteristics).

Two operating modes:
- Memory Mode: Optane acts as volatile memory behind DRAM cache; OS sees only the large Optane capacity, DRAM as transparent cache. Simplest deployment.
- App Direct Mode: Applications can choose to store specific data in Optane (persistent) vs DRAM (volatile). Requires application modification.

The [[Data Center Memory Hierarchy]] page shows where SCM fits: between DRAM (fast, volatile) and NAND SSD (slow, non-volatile).

CXL-attached memory (Samsung's CXL Memory Expansion, SK Hynix's CXL solutions) takes a different approach: memory is accessed over the CXL bus, which adds latency (~100ns) but enables memory pooling and capacity far beyond what a single server can hold.

## Nuances critiques limits

Intel's Optane failure ($5.7B write-down in 2022) demonstrated that SCM was ahead of its time: the software ecosystem never developed, and the cost premium was too high for most use cases.

The CXL approach is more promising because it builds on standard memory programming models (no special app modification needed) and leverages the existing PCIe/CXL ecosystem. However, CXL memory is still early — 2024-2025 is the ramp period.

Emerging SCM alternatives: Weebit Nano (ReRAM), Avalanche (embedded MRAM), and others are targeting embedded SCM applications (IoT, automotive) rather than data center workloads.

## Related pages

[[Data Center Memory Hierarchy]] frames SCM. [[CXL Interconnect Standard]] covers the emerging memory interconnect. [[HBM High Bandwidth Memory]] is the complementary high-bandwidth memory for AI. [[Memory Controller Chips]] shows the controller complexity.

## References
[^1]: Intel Optane DC Persistent Memory discontinuation announcement, 2023.
[^2]: Samsung and SK Hynix CXL memory product announcements, 2024.
[^3]: CXL Consortium specifications (CXL 2.0, 3.0, 3.1).
[^4]: Weebit Nano ReRAM technology analysis.
[^5]: Semiconductor Engineering SCM market analysis.

[^6]: [[Data Center Memory Hierarchy]] shows where SCM fits in the tier.
[^7]: [[DDR and LPDDR Memory Standards]] is the competing volatile memory technology.
[^8]: [[NAND Flash Market Analysis]] covers the slow storage layer SCM competes with.
[^9]: [[Enterprise SSD Technologies]] covers NAND SSD, the alternative non-volatile storage.
