---
title: "Cloud Storage Technologies"
type: sector
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#sector'
  - '#cloud'
  - '#storage'
  - '#SSDs'
created: 2026-04-24
strong_links:
  - ['Cloud Infrastructure Market']
  - ['Enterprise Storage Semiconductors']
  - ['Solid State Drives']
  - ['Data Center Memory Hierarchy']
  - ['Subsea Cable Networks']
  - ['Hyperscale Data Center Operators']
  - ['Enterprise SSD Technologies']
  - ['NAND Flash Manufacturing Process']
opposition_links: []
---

# Cloud Storage Technologies

> [!info] Summary
> Cloud storage infrastructure is built on NAND flash SSDs, HDD-based storage arrays, and emerging technologies like computational storage and DNA data storage. Hyperscalers (Amazon, Google, Microsoft) operate exabyte-scale storage farms, driving demand for high-capacity NAND SSDs and sophisticated storage software that tiers data across performance levels. Storage represents approximately 25% of data center infrastructure capex.

## Definition

Cloud storage technologies span a hierarchy:
- Hot storage (frequently accessed data): NVMe SSDs with high IOPS, typically 100% reads
- Warm storage (less frequent access): High-capacity SSDs or HDDs, cost-optimized
- Cold storage (archival, infrequent access): High-capacity HDDs, tape, or emerging cold-storage-class SSDs
- Object storage ( unstructured data at massive scale): Amazon S3, Google Cloud Storage, Azure Blob, built on commodity server hardware with custom storage software

Key semiconductor components in storage: NAND flash memory (the dominant storage medium for new capacity), SSD controllers (ARM-based SoCs managing flash, encryption, and host interfaces), DRAM caches (for write buffering and metadata), and specialized accelerators for storage compression and deduplication.

## Context and origin

Cloud storage emerged from the early 2000s with Amazon S3 (2006), Google Cloud Storage, and Azure Blob Storage. These services offered virtually unlimited storage at low cost, metered by the gigabyte, eliminating the need for enterprises to manage their own storage infrastructure.

The shift from on-premise storage to cloud drove a fundamental change in storage media: enterprise HDDs (15K RPM, SAS interface) were replaced by NAND SSDs for performance workloads and high-capacity HDDs (HAMR technology, 20TB+ drives) for archival. AWS, Google, and Azure now operate data centers containing hundreds of exabytes of storage.

## Mechanisms / characteristics / details

NAND flash is the dominant storage medium for new cloud deployments due to declining $/GB and improving endurance. NVMe (Non-Volatile Memory Express) over PCIe is the dominant interface, replacing SATA and SAS. Enterprise NVMe SSDs now reach 64TB capacity (Samsung PM1743), using PCIe 5.0 x4 for 14 GB/s read bandwidth.

Storage Class Memory (SCM) — Intel Optane DC Persistent Memory — occupies the gap between DRAM and NAND, offering byte-addressability and near-DRAM latency. However, Intel discontinued Optane in 2023, leaving the market to emerging NVRAM alternatives.

Computational storage is an emerging concept: placing ARM or RISC-V cores inside SSDs to process data near storage, reducing data movement in analytics workloads. This is covered in [[Data Center Memory Hierarchy]] as it relates to the storage-compute convergence trend.

## Nuances critiques limits

NAND flash has finite endurance (measured in drive-writes-per-day, DWPD) and faces scaling challenges as 3D NAND approaches its layer-count limits. The transition to 2XXX-layer NAND (2024-2025) requires new manufacturing processes.

Data gravity is a strategic challenge: once enterprises store data in one cloud, migration costs make switching impractical. This creates lock-in comparable to software ecosystem effects.

[[Solid State Drives]] and [[Enterprise SSD Technologies]] are the semiconductor-heavy components of cloud storage. [[NAND Flash Manufacturing Process]] covers how these chips are made.

## Links and implications

[[Cloud Storage Technologies]] is driven by [[Cloud Infrastructure Market]] growth. The [[Solid State Drives]] and [[Enterprise SSD Technologies]] pages cover the hardware. [[Subsea Cable Networks]] connects cloud storage to the infrastructure that moves petabytes between continents. [[Data Center Memory Hierarchy]] shows how NAND, DRAM, and SCM are tiered.

## Sources
[^1]: Amazon Web Services S3 documentation and storage architecture.
[^2]: IDC Global StorageSphere, cloud storage market analysis.
[^3]: Samsung, Kioxia, and SK Hynix NAND flash product roadmaps.
[^4]: SNIA (Storage Networking Industry Association) cloud storage standards.
[^5]: Enterprise storage semiconductor demand analysis, semiconductor engineering.
