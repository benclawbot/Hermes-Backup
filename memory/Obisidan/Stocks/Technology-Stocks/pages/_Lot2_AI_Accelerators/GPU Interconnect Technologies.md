---
title: "GPU Interconnect Technologies"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 4
tags: [#concept, #semiconductors, #interconnect, #AI]
created: 2026-04-24
strong_links: [["AI Accelerator Market Overview", "NVIDIA Business Analysis", "AMD GPU Data Center", "Foundry Business Model"], ["HBM High Bandwidth Memory", "Advanced Packaging Technologies", "Cloud Infrastructure Market", "Data Center Networking Chips"]]
opposition_links: []
---

# GPU Interconnect Technologies

> [!info] Summary
> GPU interconnect technologies (NVLink, Infinity Fabric, CXL) enable high-bandwidth communication between GPUs and CPUs in AI training clusters. Bandwidth and latency of interconnect directly constrain the scalability of multi-GPU AI training.

## Definition

GPU interconnect refers to the high-speed communication links that connect multiple GPUs to each other (intra-node) and to CPUs and memory (inter-node). In AI training clusters, interconnect bandwidth and latency determine how efficiently GPUs can collaborate on distributed training workloads. Key technologies: NVLink (Nvidia), Infinity Fabric (AMD), PCIe (universal), CXL (emerging cache-coherent interconnect).

## Context and origin

Early GPU computing used PCIe for GPU-to-GPU communication — PCIe Gen3 (32 GB/s) became a bottleneck as GPU counts grew. Nvidia introduced NVLink in 2016 (P100: 80 GB/s bidirectional) to bypass PCIe limitations. AMD introduced Infinity Fabric with Vega (2017), enabling multi-GPU communication within a system. As AI models grew to hundreds of billions of parameters, interconnect became critical: an H100 has 900 GB/s NVLink bandwidth but only 64 GB/s PCIe. CXL (Compute Express Link) emerged 2019 as an open standard for cache-coherent CPU-GPU memory sharing.

## Mechanisms / characteristics / details

NVLink (Nvidia): 4th generation in Hopper (H100), 900 GB/s bidirectional. NVSwitch connects up to 256 GPUs in an all-to-all topology within a node. AMD Infinity Fabric: ~128 GB/s per link on MI300X, supports multi-chip module integration. PCIe Gen5: 128 GB/s, used as fallback/secondary link. CXL 3.0: enables memory pooling across CPUs and accelerators, potentially reducing memory wall bottleneck. The memory bandwidth problem: AI accelerators are compute-bound but memory-starved — interconnect topology determines whether more GPUs actually helps a workload.

## Nuances critiques limits

Interconnect is increasingly a moat. Nvidia's NVSwitch + NVLink creates a proprietary network that AMD and custom ASICs cannot match without compatible alternatives. Infinity Fabric is AMD-only. CXL is the open-standards hope but adoption is still early. For very large models, the interconnect within a node matters more than the number of GPUs — bandwidth per GPU often matters more than raw GPU count.

## Links and implications

[[GPU Interconnect Technologies]] directly constrain [[AI Accelerator Market Overview]] scaling. [[NVIDIA Business Analysis]] uses NVLink as a differentiator; [[AMD GPU Data Center]] relies on Infinity Fabric. [[Data Center Networking Chips]] covers the broader network fabric connecting multiple nodes. [[Advanced Packaging Technologies]] increasingly integrate interconnect IP into the same package as compute. [[HBM High Bandwidth Memory]] is the other half of the memory bandwidth equation.

## Sources
[^1]: Nvidia Hopper architecture whitepaper.
[^2]: AMD CDNA 3 architecture documentation.
[^3]: CXL Consortium specifications, CXL 3.0.
[^4]: Academic papers on distributed training communication overhead.
