---
title: "Satellite Communications Chips"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #semiconductors, #satellite]
created: 2026-04-24
strong_links: [["5G Infrastructure Market", "Cellular Baseband Modems", "RF Front End Modules", "WiFi Chip Market"], ["Subsea Cable Networks", "mmWave Radar Technologies", "Edge Computing Infrastructure", "Compound Semiconductors"]]
opposition_links: []
---

# Satellite Communications Chips

> [!info] Summary
> Satellite communications chips enable direct satellite-to-device connectivity for coverage in underserved, remote, and maritime areas. Apple's Emergency SOS via satellite (Globalstar), Qualcomm's Snapdragon Satellite (Iridium), and Starlink's direct-to-device ambitions represent a nascent ~$2B market growing rapidly. Key chip suppliers include Qualcomm, Apple (custom Globalstar chip), MediaTek, and Samsung. The integration of satellite connectivity into standard smartphones is the major inflection point.

## Definition

Satellite communications chips enable devices (smartphones, IoT trackers, aviation/maritime terminals) to communicate directly with satellites without requiring a dedicated satellite phone or large antenna. The key distinction: traditional satellite phones required specialized hardware and high-power RF chains; the new generation integrates satellite connectivity into standard smartphone form factors. Standards: 3GPP Release 17/18 NTN (Non-Terrestrial Network) for cellular-to-satellite integration, plus proprietary protocols (Globalstar, Iridium, Starlink).

## Context and origin

Satellite phone networks existed since the 1990s (Iridium launched 1998, Globalstar launched 1999) but were limited to niche users (maritime, aviation, remote workers). The game changer came in 2022-2023: Apple partnered with Globalstar to offer Emergency SOS via satellite in iPhone 14, demonstrating that standard smartphones could achieve satellite connectivity with moderate hardware modifications. Qualcomm followed with Snapdragon Satellite (Iridium). The 3GPP NTN standard (5G Release 17, finalized 2022) formalized how cellular networks could integrate satellite coverage, enabling standard 5G chips to eventually support satellite links.

## Mechanisms / characteristics / details

**Direct-to-device satellite links:** Apple's implementation uses a dedicated Qualcomm X65 modem chip modified for Globalstar's band (L/S-band, ~1.6/2.5GHz). The phone connects to Globalstar's existing constellation of 24 satellites in low-earth orbit. Latency: ~50-100ms (LEO constellation), vs 600ms for geostationary. The key hardware addition: a custom Qualcomm chip plus a Qualcomm/Qualcomm ITEC antenna module in the iPhone. Speeds are very low (text messages, location sharing) — not broadband.

**Iridium/Snapdragon Satellite:** Qualcomm's Snapdragon Satellite (announced 2022, launched 2023) uses Iridium's 66-satellite LEO constellation. Iridium's higher elevation angles and L-band frequencies provide better in-hand performance than Globalstar's S-band. Qualcomm integrated this into the Snapdragon 8 Gen 2/3 modems — flagship Android phones can support satellite messaging.

**Starlink Direct-to-Device:** SpaceX's Starlink has applied for direct-to-device spectrum licenses globally. The approach leverages the existing Starlink LEO constellation (5,000+ satellites as of 2024) with modified user terminals. T-Mobile announced a partnership for Starlink D2D in the US. This is the most significant competitive threat to Globalstar/Iridium because of Starlink's existing scale.

**MediaTek 5G NTN:** MediaTek's Dimensity 9300 and later chips include 5G NTN modem support — the first standards-based satellite connectivity in a mass-market smartphone chip. This is significant because MediaTek's chips ship in many mid-range Android devices globally.

## Nuances critiques limits

**Speed is not broadband:** Current satellite D2D services are limited to text messaging, location sharing, and emergency SOS. Achieving smartphone broadband via satellite requires either very high satellite density (Starlink's approach) or very high ground-station density. Rural broadband competition: Starlink's home internet service ($90/month) is the real broadband satellite product — not D2D.

**Spectrum constraints:** The biggest challenge is spectrum allocation. Globalstar, Iridium, and Starlink each use different bands. For 5G NTN to work, regulators must allocate compatible spectrum. The US FCC and EU have approved some NTN bands but global harmonization is incomplete.

**Battery impact:** Satellite communication typically requires higher transmit power than cellular, which impacts smartphone battery life. Apple's implementation only activates satellite mode when no cellular service is available.

**Competitive landscape complexity:** The satellite operator vs chip company relationship is complex. Iridium's partnership with Qualcomm excludes other chipmakers. Globalstar's exclusivity with Apple creates a similar lock-in. The open-standards NTN approach (MediaTek, Samsung future chips) may disrupt these proprietary relationships.

**Geopolitical sensitivity:** Satellite constellations have strategic importance — Starlink has been used in Ukraine conflict. Export controls on satellite technology to China affect the competitive landscape. China is building its own LEO constellation (Guowang) and smartphone makers may develop domestic satellite solutions.

## Links and implications

[[Satellite Communications Chips]] are an extension of [[5G Infrastructure Market]] — both involve RF front ends, baseband modems, and antenna design, just at different frequencies and with different propagation constraints. The [[RF Front End Modules]] and [[Cellular Baseband Modems]] in a smartphone must both be modified to support satellite bands. [[mmWave Radar Technologies]] shares similar high-frequency RF physics (GaN, GaAs components). The [[Subsea Cable Networks]] analogy: both satellite and subsea cables represent critical connectivity infrastructure connecting remote locations. [[Edge Computing Infrastructure]] can be extended via satellite for truly remote edge deployments (oil rigs, ships, remote industrial sites). [[Compound Semiconductors]] (GaAs, GaN) are the material basis for satellite RF components, just as they are for terrestrial wireless.

## Sources
[^1]: Apple iPhone 14 satellite announcement, September 2022.
[^2]: Qualcomm Snapdragon Satellite announcement, January 2023.
[^3]: Iridium Communications 10-K, FY2023.
[^4]: 3GPP Release 17 NTN specifications.
[^5]: FCC filings, Starlink direct-to-device.
