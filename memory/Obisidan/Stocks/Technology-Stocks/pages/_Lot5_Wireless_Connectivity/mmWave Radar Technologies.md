---
title: "mmWave Radar Technologies"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #semiconductors, #radar]
created: 2026-04-24
strong_links: [["5G Infrastructure Market", "RF Front End Modules", "Compound Semiconductors", "Small Cell Deployment"], ["mmWave Radar Technologies", "Subsea Cable Networks", "Edge Computing Infrastructure", "Cloud Infrastructure Market"]]
opposition_links: []
---

# mmWave Radar Technologies

> [!info] Summary
> mmWave radar (24-100 GHz) serves both 5G telecommunications (24-100 GHz for ultra-wideband channels and dense urban hotspots) and automotive sensing (77 GHz for long-range ADAS radar). The overlap creates opportunities for compound semiconductor players (Qorvo, Skyworks, Wolfspeed) and automotive radar silicon specialists (NXP, Texas Instruments, Infineon). The key technical challenge: achieving high resolution and long range simultaneously at high frequencies requires advanced SiGe BiCMOS, CMOS, and GaAs technologies.

## Definition

mmWave radar operates at frequencies between 24 GHz and 100+ GHz, exploiting the short wavelengths (millimeter-scale) to achieve very high spatial resolution. In automotive applications, 77 GHz radar (77-81 GHz) provides ~4mm wavelength enabling range resolution of ~0.3m and the ability to distinguish closely spaced objects. In 5G, mmWave (24-100 GHz) enables channel widths up to 800 MHz (vs 100 MHz for sub-6GHz), critical for multi-Gbps throughput. The semiconductor technologies enabling mmWave radar include SiGe BiCMOS (dominant in automotive), CMOS (lower cost, emerging), GaAs (legacy), and GaN (higher power infrastructure).

## Context and origin

**Automotive radar origins:** The first automotive radar systems appeared in the 1990s for adaptive cruise control (ACC), using 77 GHz frequency-modulated continuous wave (FMCW) radar. Early systems were discrete implementations costing thousands of dollars. The transition to integrated radar-on-chip (RoC) began around 2015 with NXP's MR2001 and Texas Instruments' AWR1243. By 2024, highly integrated 77 GHz radar SoCs with embedded DSP and MIPI-CSI2 interfaces cost under $20 in high volumes.

**5G mmWave origins:** 5G mmWave (24-100 GHz) was standardized in 3GPP Release 15 (2018) as part of the 5G NR specification. The business case for 5G mmWave was challenged — propagation losses at these frequencies are severe (free space path loss increases with frequency squared), requiring dense small cell deployments. The US led 5G mmWave deployment (Verizon, AT&T) while other markets prioritized sub-6GHz. Qualcomm was the primary modem/RF supplier for 5G mmWave smartphones and infrastructure.

## Mechanisms / characteristics / details

**FMCW radar principle:** Most automotive mmWave radars use frequency-modulated continuous wave (FMCW) signaling. The radar transmits a chirp (frequency-swept signal), receives reflections from objects, and measures the beat frequency to calculate range. Doppler shift from the received signal provides velocity. Multiple chirps and sophisticated signal processing extract angular resolution via MIMO antenna arrays.

**Automotive radar frequencies:** 77-81 GHz (long-range radar, 250m+ range for ACC/AEB), 76-77 GHz (universal), 79 GHz (imaging radar, higher resolution). The regulatory allocation is different in different regions — Europe allocates 76-77 GHz for long-range, 77-81 GHz for short-range imaging radar.

**5G mmWave frequencies:** 24-100 GHz divided into bands: 24-25 GHz (local multipoint distribution service replacement), 28 GHz and 39 GHz (the primary US 5G mmWave bands), 71-76 GHz and 81-86 GHz (E-band for point-to-point links and small cells). The 60 GHz band (WiGig, 802.11ad) overlaps for non-cellular use.

**Silicon technologies:**
- **SiGe BiCMOS:** Dominant for 77 GHz automotive radar. NXP, Infineon, and Texas Instruments use SiGe for the RF frontend. SiGe offers high fT (>200 GHz), good noise figure, and reasonable power. It is more expensive than CMOS but more reliable for automotive temperature ranges.
- **RFCMOS:** Texas Instruments' approach (AWR2944, AWR6843) uses RFCMOS for lower cost and easier integration with digital baseband. CMOS is now competitive on performance for many radar applications.
- **GaAs/GaN:** Used in infrastructure radar (traffic monitoring, industrial sensing) where higher power enables longer range. Wolfspeed (GaN) and Qorvo (GaAs) serve these markets.

## Nuances critiques limits

**Automotive radar overcrowding:** The 77 GHz band is becoming congested as more vehicles equipped with radar (every modern car has 1-5 radar sensors). This creates interference between vehicles — a significant safety and performance concern. Regulatory bodies are studying interference mitigation techniques. The automotive industry is responding with behavioral adaptations (filtering, interference detection, and avoidance).

**4D imaging radar:** Traditional radar provides range, velocity, and azimuth angle. 4D radar adds elevation angle, enabling the radar to distinguish a bridge overpass from an obstacle in the road. 4D radar requires large MIMO arrays (e.g., 192 virtual antennas) and significant DSP processing — this is a major technology upgrade driving silicon content increases per radar sensor.

**5G mmWave deployment challenges:** The 5G mmWave business case has been weaker than expected — Verizon's mmWave network covers specific urban areas but has not expanded broadly. Apple iPhone included mmWave primarily for the US market. The challenge: the coverage area per mmWave node is too small for broad coverage economics. 5G mmWave is best suited for targeted hotspots (stadiums, venues, downtown areas) rather than nationwide coverage.

**CMOS radar integration:** The trend toward highly integrated radar SoCs (RF + IF + ADC + DSP + interface in one chip) is reducing the BOM for radar modules. This creates pricing pressure on discrete RF components but increases the silicon content per module — benefiting TI and NXP at the SoC level.

**Radar vs LiDAR complementarity:** LiDAR (Light Detection and Ranging) provides higher resolution than radar at shorter ranges. The debate in automotive sensing: do LiDAR and radar both survive, or does one displace the other? Current consensus: for L2+ autonomy, radar + camera + LiDAR fusion provides the most robust perception. Radar's advantage in adverse weather (rain, fog) and its ability to directly measure velocity without the motion artifacts of camera-based optical flow are key differentiators.

## Links and implications

[[mmWave Radar Technologies]] is directly connected to [[5G Infrastructure Market]] — both use 24-100 GHz frequencies, share semiconductor technology (GaAs, GaN RF devices), and face similar propagation challenges. The [[RF Front End Modules]] used in 5G mmWave small cells share components with automotive radar RF front ends. [[Compound Semiconductors]] (GaAs, GaN) are the material basis for both high-power 5G infrastructure radios and automotive radar transmit chains. [[Small Cell Deployment]] and mmWave radar deployment share the same small-cell-form-factor challenges for outdoor equipment. The [[Edge Computing Infrastructure]] angle: mmWave radar sensors increasingly run embedded AI (object classification) at the edge, requiring integrated compute + radar SoCs. [[Cloud Infrastructure Market]] is related: the data from automotive radar sensors (when connected) flows to cloud storage and analytics systems.

## Sources
[^1]: Texas Instruments AWR6843 radar SoC documentation.
[^2]: NXP SAF85xx automotive radar documentation.
[^3]: IEEE 802.15.3c (mmWave WPAN) specifications.
[^4]: 3GPP Release 15/16 mmWave specifications.
[^5]: Strategy Analytics, "Automotive Radar Market," 2024.
