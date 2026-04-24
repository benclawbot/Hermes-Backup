---
title: "SOI Technology and FDX Platform"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: deep-cut
source_knowledge: web-checked
sources_count: 4
tags: [#concept, #soi, #fd-soi, #transistors, #process-technology]
created: 2026-04-24
strong_links: [["Advanced Node Technology Roadmap", "Foundry Business Model", "Samsung Foundry Strategy", "Semiconductor Process Technology Comparisons"], ["Advanced Packaging Technologies", "Fabless vs IDM Comparison", "RF Front End Modules", "Cellular Baseband Modems"]]
opposition_links: []
---

# SOI Technology and FDX Platform

> [!info] Summary
> FDSOI (Fully Depleted Silicon on Insulator) is a specialized transistor architecture that offers competitive performance at lower power than bulk FinFET for certain applications, using a thin insulating oxide (BOX) layer beneath the transistor body. GlobalFoundries is the primary foundry offering FDSOI at 22nm (22FDX) and 18FDX, competing with Samsung's 28FDS and 18FDS. FDSOI is particularly well-suited for RF (radio frequency), analog, automotive, and IoT chips — markets where GlobalFoundries competes effectively against TSMC's mainstream processes.

## Definition

FDSOI (Fully Depleted Silicon on Insulator) is a planar transistor architecture where a thin silicon channel (10-20nm) sits on top of a buried oxide (BOX) layer, typically 10-25nm of SiO₂ on the silicon substrate. The transistor channel is undoped (or very lightly doped), making it "fully depleted" when the gate is turned on — the depletion region extends fully across the thin silicon body, eliminating the body effect and reducing variability.

Key advantage: FDSOI transistors can be biased at different back-gate voltages (via the substrate beneath the BOX) to trade off power vs performance dynamically. This "forward body biasing" (FBB) allows an IoT chip to run at very low power (by applying reverse bias) when idle, and boost performance (by applying forward bias) when needed — something not possible with bulk or FinFET transistors.

Key processes: GlobalFoundries 22FDX (22nm FDSOI, 2015) and 18FDX (18nm FDSOI, 2018); Samsung 28FDS (28nm FDSOI) and 18FDS.

## Context and origin

SOI technology was invented at IBM Research in the 1960s. The IBM mainframe business used SOI for radiation-hardened aerospace and military applications where single-event upsets (cosmic ray impacts causing bit flips) were a problem — SOI eliminates the body connection that can collect charge from radiation events. IBM shipped SOI microprocessors for Apple (PowerPC G4 and G5) in the early 2000s.

The FDSOI variant was developed by Leti (the French research institute) in the 1990s-2000s. STMicroelectronics partnered with Leti to develop FDSOI for low-power applications. GlobalFoundries (spun off from AMD/ATIF in 2009) acquired the IBM microelectronics division (including its SOI technology) in 2015, gaining IBM's SOI IP portfolio and expertise.

GlobalFoundries positioned 22FDX as a "digital RF" platform — combining digital logic, RF (RF SOI for switches and amplifiers), embedded non-volatile memory (eNVM), and analog on a single chip. This is particularly valuable for RF front-end modules (RFFE) in smartphones, where the entire RF前端 (PA, switch, LNA, filter tuning) could be integrated on one chip.

## Mechanisms / characteristics / details

**FDSOI transistor operation:** In a bulk MOSFET, the transistor body (channel) is grounded or tied to source. In FDSOI, the body is floating (no body contact) — it is defined by the silicon/BOX interface. The threshold voltage (Vt) is controlled by the gate work function and the thin silicon body thickness. The BOX allows a "back gate" bias to be applied to the substrate, modifying the effective threshold voltage — this is the key differentiating feature.

**Body biasing:** Forward body bias (FBB, applying positive voltage to the substrate) reduces Vt, making the transistor switch faster (higher drive current) at the cost of higher leakage. Reverse body bias (RBB, negative substrate voltage) increases Vt, reducing leakage at the cost of slower switching. For always-on circuits (IoT wake-up receivers, power management ICs), RBB can dramatically reduce standby power. For performance bursts (when the IoT sensor needs to transmit data), FBB can temporarily boost clock speed.

**RF capabilities:** The buried oxide provides excellent isolation between transistors, which is critical for RF circuits — reducing parasitic capacitances and improving RF performance. GF's 22FDX RF front-end platform integrates: RF SOI (for switches and low-noise amplifiers), SiGe BiCMOS (for power amplifiers — though GaAs is still preferred for premium PA), embedded FLASH (for code storage), and mmWave (for 5G mmWave front-ends).

**Automotive qualification:** GF has invested heavily in automotive qualification of its FDSOI processes (22FDX and 18FDX are both automotive-qualified). FDSOI's radiation hardness (from the BOX layer) is also beneficial for automotive (less susceptible to single-event latch-up from cosmic rays). GF's automotive customers include Infineon, NXP, and Qualcomm for various automotive chips.

## Nuances critiques limits

**Limited scaling beyond 12FDS:** FDSOI's advantage diminishes at very advanced nodes because the thin silicon body becomes more difficult to control at very small dimensions. GlobalFoundries' 12FDX (12nm FDSOI) was announced but has seen limited adoption. Below 12nm, FinFET and GAAFET dominate — TSMC, Samsung, and Intel have all moved to these architectures for high-performance logic.

**Competition from mainstream FinFET:** TSMC's N12 (12nm) and N16 (16nm) bulk FinFET processes compete directly with GF 22FDX on cost and performance for many applications. For high-performance digital logic, FinFET's better electrostatic control gives it an advantage at similar or lower cost. The advantage of FDSOI (body biasing, RF isolation) is most compelling for analog, RF, and ultra-low-power IoT.

**GaN competition for RF power:** Gallium Nitride (GaN) RF power amplifiers are increasingly competing with SiGe BiCMOS and FDSOI for 5G mmWave applications. GaN offers higher power density and efficiency at mmWave frequencies — though at higher cost and with different thermal characteristics.

**28FDS vs 22FDX market confusion:** Samsung and GlobalFoundries both offer FDSOI processes, but their specs and pricing differ. GF's 22FDX is positioned as a mid-range platform; Samsung's 28FDS is positioned for cost-sensitive IoT. The different process names (22nm vs 28nm) reflect different marketing — actual transistor density is comparable.

## Links and implications

[[SOI Technology and FDX Platform]] connects to [[Foundry Business Model]] — GF competes with TSMC and Samsung in the foundry market using a differentiated technology. [[Advanced Node Technology Roadmap]] is relevant: FDSOI is an alternative path to scaling that competes with FinFET and GAAFET at certain nodes. [[Samsung Foundry Strategy]] competes in FDSOI via Samsung's 28FDS and 18FDS.

[[Fabless vs IDM Comparison]] is relevant: GF is the primary pure-play FDSOI foundry; companies like NXP (automotive) and Infineon (power) use FDSOI for specialized applications. [[RF Front End Modules]] is directly connected: FDSOI is used for RF switches and LNA in RFFE modules. [[Cellular Baseband Modems]] is adjacent: some modem chips use FDSOI for the RF and analog sections while using FinFET for the digital baseband.

[[Advanced Packaging Technologies]] is less relevant for FDSOI — the process is primarily used for monolithic SoCs rather than chiplet architectures. [[Semiconductor Process Technology Comparisons]] provides the overall context for comparing FDSOI vs FinFET.

## Sources
[^1]: GlobalFoundries 22FDX platform documentation and roadmap.
[^2]: Leti (CEA-Leti) FDSOI research papers 2020-2024.
[^3]: Samsung Foundry FDX platform comparison.
[^4]: IEEE Transactions on Electron Devices, FDSOI modeling papers 2022-2024.
[^5]: Semiconductor Engineering, "FDSOI Market" analysis 2023-2024.
