---
title: "AMD GPU Data Center"
type: company
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#company, #semiconductors, #AI, #GPU]
created: 2026-04-24
strong_links: [["AI Accelerator Market Overview", "NVIDIA Business Analysis", "GPU Interconnect Technologies", "AI Chip Packaging HBM"], ["Foundry Business Model", "HBM High Bandwidth Memory", "Cloud Infrastructure Market", "Custom ASICs AI Chips"]]
opposition_links: [["NVIDIA Business Analysis"]]
---

# AMD GPU Data Center

> [!info] Summary
> AMD's data center GPU business (MI300X, MI250X) targets AI training/inference. MI300X offers 192GB HBM3 vs Nvidia H100's 80GB. AMD holds ~10-15% AI accelerator share; ROCm ecosystem lags CUDA significantly.

## Definition

AMD's data center GPUs include the Instinct MI300X (2023), MI250X, and upcoming MI350 series. AMD also sells EPYC CPUs for AI inference servers. The company positions MI300X's 192GB HBM3 as superior for running large language models that don't fit on competing products.

## Context and origin

AMD entered GPU AI market with MI50/MI100 in 2020, gaining some traction but remaining far behind Nvidia. MI300X, launched late 2023, was first AMD GPU competitive with H100 in training performance. Microsoft announced Azure instances using AMD chips. AMD data center revenue (CPUs + GPUs) was ~$6.5B in FY2023 with GPU contribution growing. The challenge: ROCm software ecosystem years behind CUDA in developer adoption. Revenue from AI GPUs estimated at $500M-$1B in 2023 — a fraction of Nvidia's $47B data center business.

## Mechanisms / characteristics / details

AMD's CDNA 3 architecture (MI300X): 304 compute units, 192GB HBM3 at 5.3 TB/s bandwidth, 128GB/s Infinity Fabric interconnect for multi-GPU. Advantage: larger memory capacity allows running models that don't fit on 80GB H100. ROCm (AMD's CUDA equivalent) has fewer framework optimizations — some PyTorch models require modifications. MI300A integrates EPYC CPU and CDNA GPU on same package. AMD uses TSMC CoWoS packaging, same as Nvidia. The MI350 expected to close the performance gap further.

## Nuances critiques limits

AMD's MI300X faces platform disadvantage: most AI labs have existing CUDA codebases and resistance to porting. ROCm compatibility remains a real barrier — some models require non-trivial engineering work. AMD gaining ground slowly and ecosystem gap is closing. Key risk: AMD GPU roadmap may not keep pace with Nvidia's annual cadence. Key opportunity: hyperscalers want Nvidia alternatives for supply negotiation leverage; more design wins if ROCm improves; China export controls on Nvidia create an opening for AMD in non-restricted segments.

## Links and implications

[[AMD GPU Data Center]] competes directly with [[NVIDIA Business Analysis]] in the [[AI Accelerator Market Overview]]. The [[GPU Interconnect Technologies]] page covers Infinity Fabric, AMD's multi-GPU interconnect alternative to NVLink. [[AI Chip Packaging HBM]] is relevant since both AMD and Nvidia rely on TSMC CoWoS packaging with [[HBM High Bandwidth Memory]]. The ROCm ecosystem attempt to replicate [[CUDA Ecosystem]] network effects is covered in the [[Custom ASICs AI Chips]] context — custom silicon from hyperscalers may be a bigger long-term threat to AMD than to Nvidia.

## Sources
[^1]: AMD FY2023 10-K and investor presentations.
[^2]: MLCommons benchmark submissions, MI300X results.
[^3]: Microsoft Azure announcement, November 2023.
[^4]: Mercury Research, GPU market share data 2024.
[^5]: ROCm documentation and PyTorch compatibility reports.
