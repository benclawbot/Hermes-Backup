# Lot 2: AI Accelerators — Map of Concepts

> [!info] Overview
> 10 pages covering GPUs, custom ASICs, and the ecosystem around AI computing hardware including packaging, interconnect, and software platforms.

## Pages

| Page | Summary |
|------|---------|
| [[AI Accelerator Market Overview]] | The AI accelerator market encompasses GPUs, custom ASICs, and FPGAs purpose-built for machine learning workloads. Valued at ~$53B in 2023, it's projected to exceed $150B by 2027, driven by explosive growth in AI training and inference demand across hyperscalers and enterprises. |
| [[NVIDIA Business Analysis]] | NVIDIA designs GPUs and AI accelerators. Data center revenue grew from ~$3B to ~$47B in three years (FY2021-FY2024). The company holds ~80% AI training market share and has become the backbone of the AI revolution. |
| [[AMD GPU Data Center]] | AMD's data center GPU business (MI300X, MI250X) targets AI training/inference. MI300X offers 192GB HBM3 vs Nvidia H100's 80GB. AMD holds ~10-15% AI accelerator share; ROCm ecosystem lags CUDA significantly. |
| [[Intel Gaudi AI Accelerators]] | Intel's Gaudi AI accelerators (Gaudi 2, Gaudi 3) target AI training and inference. Despite strong specs, Gaudi holds <5% market share vs Nvidia's dominance. Intel's AI revenue remains small but growing. |
| [[Custom ASICs AI Chips]] | Hyperscalers (Google, Amazon, Microsoft, Meta) have developed custom AI ASICs (TPU, Trainium, Maia, MTIA) to reduce dependence on Nvidia GPUs and improve cost/performance for their specific workloads. |
| [[GPU Interconnect Technologies]] | GPU interconnect technologies (NVLink, Infinity Fabric, CXL) enable high-bandwidth communication between GPUs and CPUs in AI training clusters. Bandwidth and latency of interconnect directly constrain the scalability of multi-GPU AI training. |
| [[AI Chip Packaging HBM]] | HBM (High Bandwidth Memory) integrated into AI chips via advanced packaging (CoWoS, SoIC) is the critical enabling technology for modern AI accelerators. CoWoS packaging capacity is currently the primary supply chain bottleneck constraining AI GPU output. |
| [[CUDA Ecosystem]] | CUDA (Compute Unified Device Architecture) is Nvidia's proprietary parallel computing platform and API, with 4M+ developers and 15+ year library ecosystem. It is considered Nvidia's deepest competitive moat — more important than any individual GPU architecture advantage. |
| [[AI Training vs Inference Chips]] | AI training (learning from data) and inference (deploying trained models) have different computational requirements, creating distinct market segments with different dominant architectures. Training requires massive matrix multiplications on large batches; inference prioritizes efficiency, latency, and increasingly benefits from quantization. |
| [[Semiconductor IP Licensing]] | Semiconductor IP licensing allows companies to use pre-designed circuit blocks (CPU cores, interfaces, memory controllers) without designing them from scratch. ARM is the dominant IP licensor; RISC-V is the open-source challenger. IP licensing determines who controls the architecture roadmap for compute. |

## Links
- Parent: [[Technology Stocks Research — Map of Concepts]]
- Lot 1: [[Lot 1: Semiconductors]]
- Lot 3: [[Lot 3: Cloud & Data Center]]

## Source
Built: 2026-04-24
