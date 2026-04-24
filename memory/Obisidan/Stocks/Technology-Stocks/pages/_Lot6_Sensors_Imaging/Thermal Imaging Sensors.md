---
title: "Thermal Imaging Sensors"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#sensors'
  - '#thermal'
  - '#imaging'
  - '#defense'
created: 2026-04-24
strong_links:
  - ['CMOS Image Sensor Market']
  - ['mmWave Radar Technologies']
  - ['Automotive LIDAR Systems']
  - ['Military Aerospace Semiconductors']
  - ['Machine Vision Industrial AI']
  - ['Edge Computing Infrastructure']
  - ['Foundry Business Model']
  - ['Compound Semiconductors']
opposition_links: []
---

# Thermal Imaging Sensors

> [!info] Summary
> Thermal imaging sensors detect infrared radiation (8-14μm long-wave infrared, LWIR) emitted by all objects above absolute zero, creating images based on temperature rather than visible light. The market splits between cooled infrared detectors (military, scientific, premium commercial — FLIR, L3Harris) and uncooled microbolometer arrays (commercial and automotive — FLIR, BAE Systems, Leonardo DRS). The key investment thesis: declining sensor costs are enabling thermal imaging to expand from defense into automotive (night vision), commercial security, and building inspection.

## Definition

Thermal imaging sensors detect long-wave infrared (LWIR, 8-14μm wavelength) or mid-wave infrared (MWIR, 3-5μm) radiation emitted by objects. All objects above absolute zero emit infrared radiation following the Planck radiation law — hotter objects emit more intense radiation and at shorter peak wavelengths. A thermal camera converts this IR radiation into a visible image (typically false-color, where hotter objects appear brighter/whiter).

Two categories: **cooled detectors** use cryogenic cooling (to 60-120K) to reduce detector noise, enabling much higher sensitivity (NETD <10mK) and longer range. **Uncooled detectors** (microbolometers) operate at ambient temperature, using materials (vanadium oxide, amorphous silicon) that change resistance when heated by IR radiation. Uncooled thermal cameras are dramatically cheaper ($500-$5,000) vs cooled ($25,000-$250,000) but offer lower performance.

The key specifications: spectral band (LWIR or MWIR), resolution (384×288 to 1280×1024 for current uncooled), NETD (noise-equivalent temperature difference, in mK — lower is better), response time, and operating temperature range.

## Context and origin

Thermal imaging was developed for military applications during World War II (classified IR research). The first practical IR linescan systems for aerial reconnaissance appeared in the 1950s-1960s. Commercialization accelerated after the 1970s with the development of staring focal plane arrays (replacing single-detector scanning systems). FLIR Systems (founded 1978) became the dominant commercial thermal imaging company, acquiring most competitors over decades (Indigo Systems in 2004, examinator networks in 2015).

The defense market is the primary revenue driver. Thermal imaging is essential for night vision in military operations, missile seekers (IR-guided missiles detect the heat signature of aircraft or vehicles), and surveillance. The US DoD is the largest buyer — thermal weapon sights, vehicle-mounted cameras, and UAV payloads drive demand. Key defense contractors (BAE Systems, Leonardo DRS, L3Harris) supply the US military.

The commercial expansion story is the investment thesis: as uncooled microbolometer arrays have fallen in cost, thermal cameras have moved into building inspection (HVAC contractors find heat leaks and moisture intrusion), electrical inspections (find hotspots in panels and switchgear), automotive night vision (Mercedes, BMW, Audi offer IR night vision as options), search and rescue (firefighters find people in smoke), and security surveillance (intruder detection in complete darkness).

## Mechanisms / characteristics / details

**Microbolometer operation:** A microbolometer pixel consists of a tiny absorbing material (vanadium oxide or amorphous silicon) suspended on a silicon readout circuit with a leg structure that thermally isolates it. IR radiation heats the absorber, changing its resistance. The readout circuit measures the resistance change, which is proportional to incident IR power. The pixel pitch is typically 17μm (older) or 12μm (current). Arrays range from 160×120 (entry) to 1280×1024 (premium). The NETD (sensitivity) of modern 12μm pixel uncooled cameras is 30-40mK — sufficient for most commercial and automotive applications.

**Cooled MCT detectors:** MWIR and LWIR cooled detectors use Mercury Cadmium Telluride (MCT, or HgCdTe) or type-II superlattice (T2SL) semiconductor material. These require cryocoolers (Stirling cycle or thermoelectric) to cool to 60-120K, which adds size, cost, power consumption, and reliability concerns. The cooling reduces dark current (thermally-generated carriers), enabling much lower noise and thus higher sensitivity. Cooled systems can detect temperature differences of <10mK, enabling the detection of distant small objects (missile seekers, aircraft at long range).

**Advanced packaging challenge:** IR transparent materials are required for the optics — germanium (Ge), zinc selenide (ZnSe), or chalcogenide glass. These are expensive and must be anti-reflection coated. The sensor itself must be vacuum-packaged (gettered) to prevent moisture degradation over the 10+ year lifetime required for defense and automotive applications.

## Nuances critiques limits

**Defense budget dependence:** The thermal imaging market is heavily exposed to US and allied defense budgets. Political pressure to reduce defense spending (as happened post-Afghanistan/Iraq) could reduce thermal imaging orders. The Ukraine war has, however, accelerated demand for thermal weapon sights, drones with thermal cameras, and counter-drone systems.

**Chinese competition:** Chinese companies (Zhongji Innolux, Guide IR, HIKVISION thermal division) are rapidly gaining share in commercial thermal imaging. Chinese microbolometer technology has matured, and domestic production has driven down costs globally. The US export restrictions on defense thermal technology have not prevented Chinese companies from competing in commercial markets.

**Automotive night vision adoption is slow:** Despite 20+ years of availability, thermal night vision remains a niche option on premium vehicles — only 5-10% of vehicles above $70K offer it. The cost (~$2,500 per camera) vs benefit (marginal safety improvement) has limited adoption. Automotive night vision is unlikely to become a mass-market feature without regulation mandating it (as is being considered in the EU for pedestrian detection).

**AI integration is nascent:** Thermal imaging + AI for edge processing (identifying people, animals, vehicles in the thermal image) is an emerging application. The thermal image has different characteristics than visible light — no texture/colour information, only temperature and shape — requiring AI models trained specifically on thermal data. FLIR has been developing AI-ready thermal cameras with embedded edge processing.

## Links and implications

[[Thermal Imaging Sensors]] is adjacent to [[CMOS Image Sensor Market]] — both are imaging modalities but at different wavelengths. The investment comparison: visible light cameras are high-volume, low-cost, mass-market (smartphone cameras dominate); thermal cameras are lower-volume, higher-margin, defense-and-industrial focused. [[Military Aerospace Semiconductors]] connects directly — defense thermal imaging (weapon sights, missile seekers, UAV payloads) is the largest market for cooled and premium uncooled thermal sensors.

[[mmWave Radar Technologies]] and [[Automotive LIDAR Systems]] are competing/complementary sensing modalities for automotive — thermal night vision is the "fourth" modality. [[Machine Vision Industrial AI]] connects because AI-based thermal anomaly detection (finding hot spots in electrical equipment, structural defects in buildings) is a growing commercial application. [[Edge Computing Infrastructure]] is relevant: thermal cameras for security and industrial monitoring increasingly run AI at the edge rather than sending all data to the cloud.

[[Foundry Business Model]] matters: microbolometer readout circuits are manufactured on standard CMOS processes at foundries like TSMC, GlobalFoundries, or SMIC. The IR-sensitive material (VOx or amorphous silicon) is deposited in a MEMS-like process. Some thermal companies (FLIR) manufacture their own sensors; others (BAE Systems, Leonardo DRS) have internal fabs for defense-grade sensors. [[Compound Semiconductors]] is relevant: cooled MCT detectors use HgCdTe (a compound semiconductor), and T2SL detectors (type-II InAs/GaSb superlattices) are compound semiconductor structures grown by MBE.

## Sources
[^1]: FLIR Systems investor presentations and 10-K filings, 2022-2024.
[^2]: Yole Développement, "Thermal Imaging and Sensing 2024" report.
[^3]: Military and Aerospace Electronics, defense thermal imaging market coverage.
[^4]: Strategy Analytics, automotive night vision market analysis 2024.
[^5]: Leonardo DRS / L3Harris investor materials on infrared defense programs.
