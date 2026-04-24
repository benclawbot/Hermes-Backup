---
title: "Storage Devices HDD SSD"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#storage'
  - '#hdd'
  - '#ssd'
  - '#nvm-express'
created: 2026-04-24
strong_links:
  - ['NAND Flash Memory']
  - ['Solid State Drives']
  - ['Data Center Storage Architecture']
  - ['Enterprise Storage Semiconductors']
  - ['Samsung Memory Business']
  - ['Micron Business Analysis']
  - ['Hynix Memory Business']
  - ['NAND Flash Technology']
opposition_links: []
---

# Storage Devices HDD SSD

> [!info] Summary
> The PC storage market is in a secular transition from hard disk drives (HDD) to solid state drives (SSD). Consumer SSDs now outsell consumer HDDs by unit volume, though HDDs retain the cost-per-terabyte advantage for bulk storage. The SSD market is entirely dependent on NAND flash memory (covered in [[NAND Flash Memory]]), while HDDs remain a mechanical storage technology with limited semiconductor content beyond the controller SoC.

## Definition

HDDs store data on spinning magnetic platters read by magnetic read heads on actuator arms. HDD capacity ranges from 500GB to 20+TB, with 7200 RPM rotational speed for desktop drives and 5400 RPM for NAS/energy-efficient drives. Interface: SATA (for mainstream) or SAS (for enterprise).

SSDs store data in NAND flash memory cells and use NVMe (PCIe) or SATA interfaces. Consumer SSDs range from 256GB to 4TB. NVMe SSDs use 2-4 PCIe lanes providing 3.5-7 GB/s bandwidth (PCIe 3.0 x4 to PCIe 4.0 x4).

## Context and origin

The HDD market consolidated from many players (Seagate, Western Digital, Maxtor, IBM, Quantum, Fujitsu, Samsung, Toshiba, HGST) to effectively two (Seagate and Western Digital, after WD acquired HGST and Seagate acquired Samsung's HDD business). The market peaked around 2010 at ~650M units/year and has declined to ~160M units/year as SSDs replaced HDDs in PCs and轻薄本.

The SSD market grew from essentially zero in 2008 to over 300M units/year, driven by the same PC replacement trend. Samsung is the dominant consumer SSD brand, followed by WD (SanDisk), SK Hynix (Solidigm), and Micron (Crucial).

## Mechanisms / characteristics / details

The [[NAND Flash Memory]] and [[Solid State Drives]] pages cover the semiconductor technology and market in detail. The [[NAND Flash Technology]] page covers the cell architecture (SLC, MLC, TLC, QLC, PLC).

The link to [[Data Center Storage Architecture]] is important: enterprise SSD demand is growing faster than consumer SSD demand as data center storage migrates from HDD to all-flash arrays. [[Enterprise Storage Semiconductors]] covers the controller and interface chip content.

## Nuances critiques limits

The HDD vs SSD cost gap has narrowed significantly for consumer applications but remains meaningful for bulk storage. At 4TB capacity, consumer HDDs cost ~$70 while consumer SSDs cost ~$200. The gap widens at higher capacities.

The PLC (penta-level cell) NAND transition is intended to close the cost gap with HDDs by storing 5 bits per cell, but at the cost of endurance and write performance. This is a technology trade-off that may or may not succeed commercially.

## Links and implications

[[Storage Devices HDD SSD]] connects to [[NAND Flash Memory]] and [[Solid State Drives]] as the SSD technology chain. [[Data Center Storage Architecture]] connects to enterprise storage.

[[Samsung Memory Business]], [[Micron Business Analysis]], and [[Hynix Memory Business]] are the major NAND flash suppliers.

## Sources
[^1]: TrendForce and IDC storage device market data.
[^2]: NAND flash and SSD pricing analysis from DRAMeXchange.
[^3]: Seagate and Western Digital HDD technology documentation.
[^4]: Samsung, WD, SK Hynix SSD product documentation.
[^5]: Storage product teardown analysis from Chipworks/TechInsights.
