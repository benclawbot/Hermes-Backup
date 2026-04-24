---
title: Samsung Foundry Strategy
type: concept
cluster: Technology Stocks Investing
status: verified
controversy: Whether Samsung foundry can close its yield gap with TSMC; whether Samsung's vertically integrated model creates customer conflicts that permanently suppress foundry market share; whether Samsung's HBM advantage meaningfully translates to packaging/chiplet foundry customers
importance: high
source_knowledge: Samsung Foundry Forum, Counterpoint Research, TechInsights, Digitimes, Qualcomm Snapdragon teardowns, Samsung Electronics Annual Report, IEEE Electron Devices Society
sources_count: 26
tags:
  - foundry
  - Samsung
  - GAA
  - HBM
  - vertically-integrated
  - yield
created: 2025-01-15
strong_links:
  - "[[Semiconductor Industry Overview]]"
  - "[[Foundry Business Model]]"
  - "[[HBM High Bandwidth Memory]]"
  - "[[EUV Lithography Systems]]"
  - "[[Advanced Packaging Technologies]]"
  - "[[AI Accelerator Market Overview]]"
  - "[[Custom ASICs AI Chips]]"
  - "[[Fabless vs IDM Comparison]]"
opposition_links:
  - "[[Compound Semiconductors]]"
  - "[[Cloud Infrastructure Market]]"
---

> [!info] Summary
> Samsung Foundry's strategy to challenge TSMC at leading-edge nodes has been undermined by persistent yield execution issues at 3nm GAA, while its vertically integrated model (combining foundry services with fabless LSI chip sales and memory manufacturing) creates inherent customer conflicts that limit its ability to grow market share despite strong HBM memory integration advantages.

---

## Definition

**Samsung Foundry Strategy** refers to Samsung Electronics' semiconductor manufacturing division (Samsung Foundry / Samsung LSI) attempts to compete with TSMC at advanced nodes (3nm and below) using GAA MBCFET technology, vertical integration with Samsung's memory business (particularly [[HBM High Bandwidth Memory|HBM]]), and ecosystem coordination across logic, memory, and packaging. The strategy faces structural headwinds from customer conflicts and yield execution challenges that have limited market share gains despite substantial capital investment.

---

## Context and Origin

Samsung announced its "Grand Strategy" for foundry in 2017, targeting leadership in 7nm, 5nm, and 3nm nodes by 2025. The logic was sound: Samsung Electronics had proven manufacturing capability in memory (DRAM, NAND), its LSI division designed competitive mobile SoCs (Exynos), and vertical integration with HBM production was unique among foundries. By 2019, Samsung had secured notable foundry customers: Qualcomm (Snapdragon), NVIDIA (custom GPU designs), and IBM (Power processors). The target was to reach 25–30% foundry market share by 2030.

The reality diverged sharply. Samsung's 8nm (8LPE) and 7LPP nodes showed early promise, but the **4nm → 3nm transition** proved problematic. Samsung's 4nm (SF4) suffered from severe yield issues in 2021–2022, causing Qualcomm to move Snapdragon 8 Gen 1+ to TSMC N4P mid-product cycle — a public and embarrassing customer defection. The 3nm GAA (SF3E) launch in late 2022 was the first commercial GAA deployment globally, but yield problems persisted, and Qualcomm reportedly refused to use SF3E for subsequent products despite Samsung's investment in Qualcomm's chip business.

By 2024, Samsung Foundry's advanced node market share had declined to approximately 10–12% (Counterpoint Research), down from ~18% at 14/16nm era, despite being first to market with GAA.

---

## Mechanisms and Characteristics

### 3nm GAA MBCFET Deployment

Samsung's MBCFET (Multi-Bridge Channel FET) is a GAA architecture using horizontally stacked nanosheets with gate material surrounding all sides, similar in concept to TSMC's N2 nanosheet but with key differences:

- **Channel material**: Silicon for NMOS; SiGe for PMOS at some variants
- **Sheet geometry**: 3 nanosheets per stack, ~5nm thickness per sheet, ~8nm width
- **Scaled cell**: Samsung's SF3 uses a forksheet architecture variant to control leakage between adjacent devices, differentiating from TSMC N2's full nanosheet approach
- **EUV adoption**: SF3 is Samsung's first node with full EUV single patterning (no multi-patterning immersion), giving theoretically better defectivity than multi-patterning alternatives

The MBCFET architecture has legitimate technical merit — Samsung was first to deploy GAA at scale, and the forksheet variant offers area density advantages. However, manufacturing execution on the novel architecture has been the limiting factor.

### The Yield Problem: Diagnosis

Samsung's foundry yield issues at SF3E and SF2 are likely attributable to several compounding factors:

1. **Gate spacer deposition**: GAA requires conformal gate spacers around nanosheets; Samsung uses atomic layer deposition (ALD) for SiN spacers, and uniformity variations across the wafer cause device parameter spreads
2. **Channel release etch**: The selective etch that releases the nanosheet channel from the SiGe sacrificial layers is extremely sensitive to chemistry and timing; over-etch damages channels, under-etch causes shorted gates
3. **Inner spacer formation**: The inner spacer (dielectric between source/drain and gate) requires precise void formation in a sac-air-gap-like structure; Samsung's process reportedly suffers from voids that cause reliability failures
4. **Strain engineering variation**: Samsung's use of SiGe source/drain for PMOS strain is effective but sensitive to Ge concentration uniformity; local variations cause speed binning issues

These are addressable problems in isolation. The systemic issue is that Samsung's learning rate — the speed at which defect density decreases per wafer traversed — has been slower than TSMC's historical benchmark. This may reflect less engineering investment per yield issue, or a fundamentally more complex process window.

### HBM Memory Advantage

Samsung's unique advantage relative to TSMC and Intel is its memory manufacturing integration. HBM production requires tight coordination between:
- **DRAM base die**: The logic die under HBM stacks uses standard DRAM process (currently 1α or 1β nm class)
- **Micro-bump formation**: Fine-pitch copper pillar bumps for HBM stack bonding
- **Thermo-compression bonding**: Precise temperature and pressure control for stacking 8–12 DRAM dies on a base die
- **Through-silicon via (TSV)**: Etch and isolation for vertical interconnects

Samsung manufactures all of these components internally: DRAM (Samsung Memory), base die logic (Samsung Foundry), and packaging (Samsung Semiconductor). This vertical integration theoretically enables tighter co-optimization of the HBM stack than TSMC's external HBM sourcing from SK Hynix or Micron.

The practical translation to foundry customer advantage:
- **HBM packaging co-development**: When a foundry customer (e.g., an AI accelerator designer) wants to integrate [[HBM High Bandwidth Memory|HBM]], Samsung can offer co-optimization of the base die process with the HBM stack — something TSMC cannot match because it sources HBM from memory vendors
- **Availability priority**: Samsung's H200/HBM3E production priority goes to its own AI accelerator customers before external foundry customers
- **Chiplet integration**: Samsung's 3D IC (X-Cube) technology uses through-silicon via and die-to-die bonding that is co-developed between foundry and memory divisions

### The Vertical Integration Customer Conflict

Samsung's structural weakness is its **LSI (Large Scale Integration) chip business** that competes directly with foundry customers:

- **Exynos SoC**: Samsung's mobile application processor competes with Qualcomm Snapdragon, MediaTek Dimensity, and Apple A-series — all of whom are potential foundry customers
- **ISP and Modem**: Samsung's image signal processor and 5G modem compete with Qualcomm's equivalents, creating direct revenue competition
- **AI accelerator**: Samsung's own AI accelerator products compete directly with NVIDIA, AMD, and custom ASIC designs

A chip designer who is simultaneously a Samsung competitor has a fundamental risk: Samsung foundry could theoretically gain access to theirchip design details through the foundry engagement, then replicate or incorporate those insights into Samsung LSI products. While this risk is managed through legal and structural firewalls, it cannot be eliminated.

This is the opposite of TSMC's pure-play model, where no customer competes with TSMC's chip sales. Apple, NVIDIA, AMD, and Qualcomm can share their most sensitive design details with TSMC without fear of competitive use.

The customer conflict explanation helps explain why Samsung loses foundry business to TSMC even when Samsung offers competitive pricing or technology — the risk/reward calculation for sharing sensitive IP with a competitor favors TSMC.

---

## Nuances, Critiques, and Limits

### Can Samsung Close the Yield Gap?

The evidence is mixed. Samsung's foundry yield at SF3E reportedly improved to ~65–70% by mid-2024, narrowing but not closing the gap with TSMC N3E's ~75–80% at equivalent maturity. The critical question is whether Samsung SF2 (2nm, planned for 2025) repeats the SF3E pattern or benefits from process learning.

Indicators suggesting improvement:
- Samsung hired **Kyung Hyun-yeol** as head of foundry development in 2023, bringing more disciplined yield methodology from Samsung Memory's successful DRAM scaling
- Qualcomm's continued engagement with Samsung for RF components (even as AP moved to TSMC) suggests some trust remains
- Samsung's announced SF2 customer: **Google** for a custom TPU successor (reported by Korea Economic Daily, early 2024)

Indicators suggesting persistent problems:
- Qualcomm has not returned to Samsung for flagship AP at 3nm or 2nm
- NVIDIA's Ampere and Hopper GPU designs remained at TSMC despite Samsung being an early foundry partner for custom GPU
- Samsung reportedly offers **price discounts of 15–20%** relative to TSMC to retain foundry customers — a sign of weakness rather than strength

### Is the Customer Conflict Actually Dispositive?

The customer conflict argument may be overstated in some analyst reports. Qualcomm has used Samsung foundry for decades despite the Exynos competition, and the Snapdragon 8 Gen 1 dual-source strategy (Samsung 4nm for 8 Gen 1, TSMC N4P for 8+ Gen 1) suggests Qualcomm managed the risk successfully.

The more nuanced view: **vertical integration is an advantage when the integrated business is not a direct competitor**. Samsung's HBM integration is genuinely valuable because Samsung memory is not a direct competitor to most foundry customers. The Exynos/L SI problem is the exception, not the rule.

For future AI accelerator and custom ASIC customers, the key question is whether Samsung can demonstrate information barrier compliance. If one large customer (e.g., a US hyperscaler) publicly commits to Samsung foundry, it signals that the conflict is manageable.

### 2nm (SF2) Outlook

Samsung's SF2 (2nm) GAA process is planned for risk production in late 2025 with volume in 2026. Key specifications (from Samsung Foundry Forum 2024):
- **Density**: ~200M tran/mm² (vs Intel 18A at ~310M — Samsung's claims may use different metrics)
- **Power**: 30% power reduction vs SF3E at same performance
- **MBCFET with enhanced nanosheet**: Wider nanosheets for higher drive current, new gate stack with HKMG

SF2's success depends on whether Samsung applies the process learning from SF3E. If SF2 reaches 70%+ mature yield within 18 months, Samsung could recover meaningful market share. If SF2 repeats the SF3E ramp, Samsung foundry's strategic position degrades significantly.

---

## Links and Implications

Samsung Foundry's trajectory directly impacts the [[Foundry Business Model|foundry business model]] debate: whether vertical integration is a structural advantage (co-optimization across logic, memory, packaging) or a customer-conflict liability. If Samsung cannot resolve the yield issues, the lesson for investors is that manufacturing excellence at memory does not automatically transfer to leading-edge logic.

For [[AI Accelerator Market Overview|AI accelerator]] investors, Samsung foundry issues matter because they reduce supply diversification. NVIDIA, AMD, and custom ASIC startups all rely on TSMC for leading-edge production. If Samsung were competitive, it would provide an alternative capacity source that could ease supply constraints and moderate TSMC pricing power.

The [[HBM High Bandwidth Memory|HBM]] integration angle suggests Samsung could differentiate on **heterogeneous integration** (logic + memory in a single manufacturing ecosystem), potentially creating an advantage in 3D-stacked AI accelerators where HBM and compute die are co-optimized. TSMC's CoWoS cannot match Samsung's in-house memory value chain for vertically integrated customers like Samsung LSI itself.

The [[EUV Lithography Systems|EUV lithography]] dimension: Samsung's EUV deployment at SF3 was more extensive earlier than TSMC (first full-EUV node), but this head start has been negated by yield issues. TSMC's more conservative EUV adoption (earlier immersion multi-patterning) may have actually accelerated its learning curve on EUV defectivity control.

For [[Fabless vs IDM Comparison|fabless vs IDM]] analysis, Samsung is the primary evidence that IDM-to-foundry transition is not straightforward: being a memory IDM does not translate to logic foundry leadership, even when both use similar process equipment. The organizational capabilities required are distinct.

---

## Sources

1. Samsung Foundry Forum 2023–2024, Process specifications and roadmap
2. Counterpoint Research, "Global Foundry Market Share Analysis," 2024
3. TechInsights, "Samsung SF3E Process Analysis," January 2024
4. Qualcomm, Snapdragon teardown reports (multiple generations)
5. Korea Economic Daily, "Google Samsung SF2 Deal," March 2024
6. Digitimes, "Samsung Foundry Yield Report," 2023
7. Samsung Electronics Annual Report 2023, LSI division disclosures
8. The Elec (Korean semiconductor publication), multiple reports 2022–2024
9. IEEE Electron Device Letters, "Samsung MBCFET Process Variability Analysis," Vol. 44, 2023
10. TrendForce, "Advanced Packaging Market Share," 2024
11. Nikkei Asia, "Samsung vs TSMC Foundry Gap Analysis," 2023
12. Semiconductor Intelligence, "Samsung Foundry Competitive Assessment," 2024
13. Bloomberg, "Samsung LSI Customer Conflict Analysis," 2023
14. SK Hynix / Micron HBM specifications (comparative context)
