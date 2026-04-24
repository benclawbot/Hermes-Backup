---
title: "RF Front End Modules"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#rf'
  - '#front-end'
  - '#pa'
  - '#switch'
  - '#mobile'
  - '#5g'
created: 2026-04-24
strong_links:
  - ['Mobile Chipset Market']
  - ['Qualcomm Business Analysis']
  - ['5G Mobile Infrastructure']
  - ['RF Front End Modules']
  - ['Apple Silicon Mobile Strategy']
  - ['Smartphone SoC Architecture']
  - ['Mobile Connectivity Standards WiFi 6E 7']
  - ['Apple In-House Silicon Strategy']
opposition_links: []
---

# RF Front End Modules

> [!info] Summary
> RF front end modules (FEMs) handle the amplification, filtering, and switching of cellular signals between the smartphone's antenna and the baseband/modem chip. The FEM contains the power amplifier (PA), RF switch, duplexer, filter, and matching networks in a single module. Skyworks, Qorvo, Broadcom, and Murata dominate the FEM market, competing with Qualcomm's RF360 integrated approach.

## Definition

An RF front end module for smartphones contains: Power Amplifier (PA) — amplifies the transmit signal from the modem, RF Switch — switches between transmit and receive paths, and between different frequency bands, Filter — SAW/BAW filters for specific frequency bands to separate transmit and receive, and Antenna Tuner — matches antenna impedance for optimal power transfer.

FEM modules are categorized by frequency: sub-6GHz FEMs (for the main 5G bands below 6GHz) and mmWave FEMs (for the high-frequency 5G bands above 24GHz). Most 5G phones today use sub-6GHz only; mmWave FEMs are in some US-specific premium phones.

## Context and origin

The smartphone RF front end evolved from simple 2G (GSM) modules with one PA and a few switches to complex multi-band 4G LTE (30+ bands) and now 5G (sub-6GHz + mmWave) modules that handle 15-30+ frequency bands in a single module.

Qualcomm's acquisition of TDK's RF360 (2017) created the Qualcomm RF360 FEM, an integrated approach competing with standalone FEM suppliers. This integrated approach allows Qualcomm to offer a complete modem-to-antenna solution for Android manufacturers.

## Mechanisms / characteristics / details

The PA is the most critical and highest-value component of the FEM. PA efficiency (how much DC power is converted to RF output) directly impacts battery life. Current flagship smartphone PAs achieve 40-45% efficiency, a significant improvement from 25-30% in early LTE PAs.

BAW (Bulk Acoustic Wave) filters are critical for 5G because the 5G band spacing requires steep filter skirts that SAW filters cannot achieve. Broadcom and Qorvo dominate BAW filter manufacturing, a bottleneck in the 5G FEM supply chain.

The [[5G Mobile Infrastructure]] page connects to the network side of 5G. [[Mobile Chipset Market]] connects to the modem side. [[Qualcomm Business Analysis]] covers Qualcomm's integrated RF approach.

## Nuances critiques limits

The BAW filter supply is concentrated: Broadcom and Qorvo together control most BAW capacity. This creates supply chain vulnerability that was highlighted during the 2022-2023 5G buildout when BAW filter shortages affected some smartphone launches.

Qualcomm's integrated RF360 approach competes directly with standalone FEM suppliers, creating competitive tension. Apple's use of Qualcomm modems but standalone FEMs (Skyworks, Qorvo) rather than Qualcomm RF360 represents a deliberate sourcing strategy.

## Links and implications

[[RF Front End Modules]] connects to [[Mobile Chipset Market]] as the complement to the modem chip. [[Qualcomm Business Analysis]] covers the integrated RF360 approach. [[5G Mobile Infrastructure]] connects to the network deployment driving FEM demand.

[[Mobile Connectivity Standards WiFi 6E 7]] is adjacent — WiFi FEMs are separate from cellular FEMs but often supplied by the same companies.

## Sources
[^1]: Strategy Analytics RF component market share data.
[^2]: Qorvo, Skyworks, and Broadcom FEM product documentation.
[^3]: Qualcomm RF360 technology documentation.
[^4]: SAW/BAW filter technology analysis from Navian and other research firms.
[^5]: Trade publications on 5G RF front end supply chain and competitive dynamics.
