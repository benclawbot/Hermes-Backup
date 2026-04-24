---
title: "GPU Interconnect Technologies"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#interconnect'
  - '#GPU'
  - '#networking'
  - '#AI'
created: 2026-04-24
strong_links:
  - ['NVIDIA Business Analysis']
  - ['AMD GPU Data Center']
  - ['AI Accelerator Market Overview']
  - ['GPU Interconnect Technologies']
  - ['Custom ASICs AI Chips']
  - ['Data Center Networking Chips']
  - ['Cloud Infrastructure Market']
  - ['AI Training vs Inference Chips']
opposition_links: []
---

# GPU Interconnect Technologies

> [!info] Summary
> GPU interconnect technologies (NVLink, NVSwitch, Infinity Fabric, CXL) enable high-bandwidth communication between multiple GPUs and between GPUs and CPUs. At the scale of AI training clusters (thousands of GPUs), interconnect bandwidth is as critical as compute performance — models cannot scale beyond the interconnect's ability to move data between chips.

## Definition

GPU interconnects operate at multiple levels: chip-to-chip (within a server), server-to-server (within a rack), and rack-to-rack (across a data center). The relevant technologies are:

NVLink (NVIDIA): Point-to-point high-bandwidth interconnect between GPUs. H100 supports 18 NVLink connections at 50 GB/s each = 900 GB/s total bidirectional bandwidth. NVLink 5.0 (Blackwell) doubles this.

NVSwitch (NVIDIA): A switch chip that connects multiple NVLink links simultaneously, enabling all-to-all GPU communication within a server. The DGX H100 system uses 6 NVSwitches to connect 8 H100 GPUs.

Infinity Fabric (AMD): AMD's equivalent to NVLink, used to connect GPUs within a system and to connect CPU and GPU memory. MI300X uses Infinity Fabric to connect compute chiplets to memory.

InfiniBand (NVIDIA/Mellanox): Network interconnect for server-to-server communication in AI training clusters. HDR InfiniBand delivers 400 Gb/s with RDMA (remote direct memory access). HDR InfiniBand is NVIDIA's dominant data center networking product after acquiring Mellanox in 2019.

CXL (Compute Express Link): An open standard for CPU-GPU and CPU-memory interconnect. CXL 3.1 supports 256 GB/s between devices and enables memory pooling, which could reduce AI accelerator memory constraints.

## Context and origin

GPU interconnect became critical with large model training. When a model is too large to fit on a single GPU, it must be partitioned across multiple GPUs. The Partitioned Model Parallel approach splits layers across GPUs, requiring constant high-bandwidth communication between GPUs during the forward and backward pass.

The 2020 GPT-3 training (175B parameters, 10,000 NVIDIA V100 GPUs) required sophisticated interconnect topology to achieve acceptable training efficiency. Microsoft and OpenAI's build-out of the Azure AI supercomputing cluster (thousands of InfiniBand-connected A100/H100 GPUs) demonstrated that networking infrastructure is as important as compute for AI scale-up.

## Mechanisms / characteristics / details

The bottleneck for large AI models is not compute FLOPS but memory bandwidth and interconnect bandwidth. A GPU with 3,000 TFLOPS of compute but only 3.5 TB/s HBM bandwidth cannot feed compute cores at full utilization — the cores stall waiting for data. Similarly, if GPUs cannot exchange gradient updates quickly, distributed training efficiency collapses.

NVLink solves intra-server interconnect: 8 H100 GPUs in a DGX system communicate at 900 GB/s all-to-all, which maintains training efficiency for models up to ~1T parameters. Beyond that, InfiniBand connects multiple servers.

InfiniBand HDR (200 Gb/s per port, many ports per switch) enables RDMA: GPUs in different servers access remote GPU memory directly without CPU involvement, dramatically reducing latency for distributed training. NVIDIA's acquisition of Mellanox (2019, $6.9B) gave it both the leading InfiniBand product and the switch/DPU technology to compete with Ethernet.

## Nuances critiques limits

AMD's Infinity Fabric is competitive within a server but less mature for multi-server clusters. This is a genuine disadvantage vs NVIDIA's full-stack NVLink + InfiniBand solution.

Ethernet-based AI networking (RoCE v2) is gaining as an alternative to InfiniBand for AI clusters. NVIDIA's Spectrum-X Ethernet (2023) is designed specifically for AI workloads on Ethernet networks, targeting customers who prefer Ethernet over InfiniBand.

CXL is an emerging standard that could reshape AI accelerator architecture: CXL memory pooling would allow multiple GPUs to share a large pool of memory, potentially reducing HBM capacity constraints. However, CXL adds latency and is not yet deployed at scale for AI workloads.

## Links and implications

Understanding [[GPU Interconnect Technologies]] is essential for analyzing how [[NVIDIA Business Analysis]] maintains AI training performance at scale. The [[Data Center Networking Chips]] page covers the broader networking infrastructure. [[Cloud Infrastructure Market]] hyperscalers build their AI clusters around specific interconnect choices. [[AI Training vs Inference Chips]] is relevant because inference can often run on single GPUs without complex interconnect requirements.

## Sources
[^1]: NVIDIA NVLink and NVSwitch architecture whitepaper.
[^2]: AMD Infinity Fabric architecture documentation.
[^3]: InfiniBand Trade Association, HDR specification.
[^4]: CXL Consortium, CXL 3.1 specification.
[^5]: MLPerf Distributed Training benchmark results and topology analysis.
