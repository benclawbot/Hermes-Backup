---
title: "Data Center Storage Architecture"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#data-center'
  - '#storage'
  - '#architecture'
  - '#infrastructure'
created: 2026-04-24
strong_links:
  - ['Enterprise Storage Semiconductors']
  - ['Solid State Drives']
  - ['Cloud Infrastructure Spending']
  - ['Memory for Data Centers']
  - ['High Bandwidth Memory HBM']
  - ['AI Accelerator Chips']
  - ['Storage Class Memory']
  - ['NAND Flash Memory']
opposition_links: []
---

# Data Center Storage Architecture

> [!info] Summary
> Data center storage architecture has undergone a fundamental transformation from tiered HDD-based systems to flash-centric designs with software-defined storage separating compute and storage into independent scalable resources. The shift from direct-attached storage (DAS) to network-attached storage (NAS) and storage area networks (SAN) to today's cloud-native container storage is reflected in the semiconductor content per unit of storage capacity.

## Definition

Data center storage architecture describes how storage devices (SSDs, HDDs), storage controllers, network fabrics, and software combine to provide persistent data storage for computing workloads. The architecture determines performance characteristics (IOPS, throughput, latency), capacity scalability, cost per TB, and operational complexity.

Key architectural paradigms include: direct-attached storage (DAS) where storage is physically attached to compute servers; network-attached storage (NAS) and storage area networks (SAN) where storage is accessed over a network; software-defined storage (SDS) where storage is logically separated from hardware; and cloud-native distributed storage where data is spread across commodity servers.

## Context and origin

The shift from HDD to SSD in data centers was not just a technology transition but an architectural one. SSDs changed the performance characteristics so dramatically (IOPS increased by 100x, latency reduced by 50x) that architectures designed around HDD limitations became obsolete.

The rise of hyperconverged infrastructure (HCI) from companies like Nutanix and VMware's VSAN combined compute and storage on the same servers, using SSDs as a caching tier. This was enabled by the economics of flash becoming affordable enough to put SSDs directly in compute servers.

The cloud providers (AWS, Azure, GCP) built proprietary storage architectures optimized for their specific workloads, using commodity server hardware with custom storage software and large numbers of SSDs.

## Mechanisms / characteristics / details

Modern data center storage semiconductor content includes: SSD controllers (integrated into SSDs), storage protocol controllers (NVMe-oF, iSCSI, NFS), network interface cards (25/100/200/400GbE), memory (DRAM caching in storage systems), and specialized storage processors.

NVMe over Fabrics (NVMe-oF) extends the NVMe command protocol across network fabrics (typically Ethernet or Fibre Channel), allowing storage to be disaggregated from compute while maintaining the low-latency benefits of NVMe. This drives demand for specialized network controllers and adapters.

The link to [[Enterprise Storage Semiconductors]] and [[Solid State Drives]] is direct. The link to [[Cloud Infrastructure Spending]] frames the end market. The AI training workload creates new storage requirements (large sequential read bandwidth for dataset loading) that differ from traditional enterprise database workloads.

## Nuances critiques limits

The main architectural trend is storage disaggregation. Cloud providers have moved to fully disaggregated architectures where storage is a separate pool of high-density SSDs accessible to any compute node. This optimizes utilization but requires sophisticated software-defined storage management.

CXL (Compute Express Link) is emerging as a key interconnect for memory and storage expansion in data centers, potentially allowing memory and storage resources to be pooled and shared across compute servers. This would require new semiconductor content (CXL switches, CXL memory expansion devices).

## Links and implications

[[Data Center Storage Architecture]] connects to [[Enterprise Storage Semiconductors]] and [[Solid State Drives]] as the building blocks. [[Cloud Infrastructure Spending]] is the demand driver. [[Memory for Data Centers]] and [[High Bandwidth Memory HBM]] connect to the memory side of the architecture.

## Sources
[^1]: SNIA (Storage Networking Industry Association) technical reference models.
[^2]: AWS, Azure, GCP architecture disclosures and re:Invent presentations.
[^3]: IDC and Gartner data center infrastructure spending reports.
[^4]: Nutanix, VMware, and Red Hat software-defined storage architecture papers.
[^5]: Semiconductor Engineering storage semiconductor content analysis.
