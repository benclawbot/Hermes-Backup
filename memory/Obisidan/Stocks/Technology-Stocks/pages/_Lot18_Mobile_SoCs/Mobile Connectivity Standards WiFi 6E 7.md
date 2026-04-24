---
title: "Mobile Connectivity Standards WiFi 6E 7"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#wifi'
  - '#bluetooth'
  - '#connectivity'
  - '#mobile'
  - '#wireless'
created: 2026-04-24
strong_links:
  - ['Mobile Chipset Market']
  - ['RF Front End Modules']
  - ['Smartphone SoC Architecture']
  - ['Apple Silicon Mobile Strategy']
  - ['5G Mobile Infrastructure']
  - ['Mobile Camera Computing']
  - ['Mobile Memory and Storage']
  - ['Qualcomm Business Analysis']
opposition_links: []
---

# Mobile Connectivity Standards WiFi 6E 7

> [!info] Summary
> WiFi 6E (2019, 6GHz band extension of WiFi 6) and WiFi 7 (2024, IEEE 802.11be) are the latest generations of WiFi, with WiFi 7 offering up to 46 Gbps peak throughput using 320MHz channels and Multi-Link Operation (MLO). Bluetooth 5.x, Thread, and UWB (Ultra-Wideband) are complementary wireless standards integrated into modern smartphones, each serving different use cases from audio streaming to spatial awareness.

## Definition

WiFi 6 (802.11ax, 2019) provides up to 9.6 Gbps peak throughput using 160MHz channels and 1024-QAM modulation, with OFDMA enabling multiple simultaneous device connections. WiFi 6E extends WiFi 6 into the 6GHz band (5925-7125MHz), providing additional spectrum free from legacy device interference.

WiFi 7 (802.11be, expected 2024 commercial, also called Extremely High Throughput) uses 320MHz channels (vs 160MHz in WiFi 6), 4096-QAM modulation (vs 1024-QAM), Multi-Link Operation (simultaneous transmission on multiple bands), and up to 16 spatial streams. Peak throughput: 46 Gbps.

Bluetooth 5.3 is the current mainstream version with LE Audio (2020) introducing LC3 codec for better audio quality at lower bitrates.

## Context and origin

WiFi evolved from 802.11b (1999) through 802.11g (2003), 802.11n (2009, first dual-band), 802.11ac (2013, 5GHz only, wave 2 in 2016), 802.11ax (WiFi 6, 2019), and WiFi 6E (2020, adding 6GHz). The generational cadence is roughly 5 years per major revision.

UWB (IEEE 802.15.4z) emerged in 2019 with Apple's implementation in iPhone 11 for spatial awareness (AirDrop direction finding, and later for automotive digital keys). Samsung followed with UWB in Galaxy Note 20 and subsequent flagships.

## Mechanisms / characteristics / details

WiFi chips are integrated into mobile SoCs or provided as standalone chips (Qualcomm WCN series, MediaTek Filogic, Broadcom WiFi/Bluetooth combos). The RF front end is separate: [[RF Front End Modules]] covers the RF components that filter and amplify WiFi signals.

The link to [[5G Mobile Infrastructure]] is important: WiFi and 5G are complementary rather than competitive — WiFi handles local high-bandwidth connectivity while 5G handles wide-area connectivity.

[[Mobile Chipset Market]] connects to the wireless connectivity integration in SoCs. [[Apple Silicon Mobile Strategy]] connects to Apple's custom wireless chip development.

## Nuances critiques limits

The WiFi 7 business case is still emerging: most current smartphones (2023-2024) support WiFi 6E, not WiFi 7. WiFi 7 routers are expensive ($200-500+) and most consumer broadband connections don't saturate WiFi 6E capabilities, limiting near-term consumer WiFi 7 demand.

UWB remains a niche feature with limited use cases (AirDrop direction, digital car keys, item finders). The chip cost ($3-5 per phone) may not be justified by current use cases, though Apple is reportedly expanding UWB applications.

## Links and implications

[[Mobile Connectivity Standards WiFi 6E 7]] connects to [[Mobile Chipset Market]] as a standard feature. [[RF Front End Modules]] connects to the RF filtering requirements. [[5G Mobile Infrastructure]] connects to the complementary wide-area network.

[[Qualcomm Business Analysis]] covers Qualcomm's WiFi chip business. [[Apple Silicon Mobile Strategy]] connects to Apple's custom wireless chip development.

## Sources
[^1]: IEEE 802.11 WiFi standards documentation.
[^2]: WiFi Alliance WiFi 6E and WiFi 7 certification program documentation.
[^3]: Qualcomm, MediaTek, Broadcom WiFi chip documentation.
[^4]: WiFi 7 router and smartphone compatibility analysis.
[^5]: Bluetooth SIG LE Audio and Bluetooth 5.x specifications.
