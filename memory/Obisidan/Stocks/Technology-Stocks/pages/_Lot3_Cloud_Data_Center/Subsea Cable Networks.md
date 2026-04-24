---
title: "Subsea Cable Networks"
type: sector
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#sector'
  - '#subsea'
  - '#cable'
  - '#networking'
  - '#bandwidth'
created: 2026-04-24
strong_links:
  - ['Cloud Infrastructure Market']
  - ['Data Center Networking Chips']
  - ['Hyperscale Data Center Operators']
  - ['Cloud Storage Technologies']
  - ['Wireless Infrastructure Investment Cycle']
  - ['Edge Computing Infrastructure']
  - ['Satellite Communications Chips']
  - ['Data Center Power Management']
opposition_links: []
---

# Subsea Cable Networks

> [!info] Summary
> Subsea (undersea) fiber optic cables carry approximately 95% of global internet traffic, making them critical infrastructure for cloud services, AI data transfer, and financial markets. Hyperscalers (Google, Meta, Amazon, Microsoft) now own and operate their own subsea cables rather than leasing capacity, transforming the competitive landscape and driving demand for new cable systems across the Atlantic, Pacific, and intra-Asia routes.

## Definition

Subsea cables are fiber optic cables laid on the ocean floor, connecting continents. Modern cables use wavelength-division multiplexing (WDM) to transmit multiple light wavelengths (channels) simultaneously. Each wavelength can carry 100-800 Gbps per fiber pair. A modern transatlantic cable (such as Dunant, 2021) has 12 fiber pairs and 250Tbps total capacity.

Key cable systems: Transatlantic (US-Europe), Transpacific (US-Asia), intra-Asia (Singapore-Japan-Hong Kong), and regional (Mediterranean, Caribbean, Baltic). There are approximately 400 active submarine cable systems globally.

The cable landing stations (CLS) are the terrestrial infrastructure connecting subsea cables to terrestrial networks. They require power feed equipment (48V DC power systems for submarine repeaters), dense WDM systems, and physical security.

## Context and origin

Submarine telegraph cables date to 1858. The first transatlantic telephone cable (TAT-1) operated in 1956. Modern fiber optic submarine cables began deployment in the late 1980s. The bandwidth demand from cloud services (Google, Amazon, Microsoft) and streaming video (Netflix, YouTube) has driven explosive capacity growth.

Before 2012, subsea cables were owned primarily by consortia of telecom carriers (AT&T, BT, NTT) who sold leased capacity. The hyperscalers then began investing: Google financed the Dunant cable (2021, US-France), Equinix invests in cable landing stations, Meta financed the 2Africa cable (2023, encircling Africa), and Amazon is investing in multiple new systems.

## Mechanisms / characteristics / details

Subsea cable economics: a new transatlantic cable (6,000km) costs approximately $300-500M to build. The cable is typically amortized over 15-25 years. Operating costs include maintenance (cable ships, repairs at $1-5M per repair) and power (repeaters powered from shore at ~10kV DC).

Cables have a finite lifespan: the cable sheath degrades over 25 years, and fiber attenuation increases. Major cables are typically replaced or upgraded at end-of-life.

The [[Data Center Networking Chips]] page is relevant: coherent DSP chips (Acacia, InnoLight) in cable landing stations perform the optical modulation/demodulation. The semiconductor content per landing station is significant: high-speed optics, coherent DSP, and power management ICs.

New technologies:空分复用 (SDM, Space-Division Multiplexing) uses multiple fiber cores in one cable, potentially 10x capacity increase. This requires new manufacturing processes and is an emerging frontier.

## Nuances critiques limits

Subsea cables are vulnerable to anchor drags, fishing trawlers, and sabotage (the Baltic connector incident 2023, Red Sea cuts in 2024). Geographic concentration at cable landing stations creates security risks.

The Starlink LEO satellite constellation is sometimes cited as an alternative for some routes, but Starlink cannot match subsea cable capacity for bulk data transfer — a single subsea cable carries more bandwidth than all 6,000 Starlink satellites combined.

Investment in new cables remains strong: the 2Africa system ($3.2B, 45,000km, serving Africa and Europe) and Google's Firmina cable (2024, US-Brazil-Argentina) demonstrate continued hyperscaler commitment.

## Links and implications

[[Subsea Cable Networks]] provides the physical layer enabling [[Cloud Infrastructure Market]] and [[Cloud Storage Technologies]] to transfer data across continents. [[Hyperscale Data Center Operators]] fund new cable construction to ensure global network capacity. [[Wireless Infrastructure Investment Cycle]] is the terrestrial wireless counterpart.

## Sources
[^1]: TeleGeography Submarine Cable Map and Global Bandwidth Forecast.
[^2]: Google Cloud subsea cable investments, 2024.
[^3]: Meta 2Africa cable project documentation.
[^4]: Submarine Cable Council industry reports.
[^5]: Academic papers on coherent optical communications and SDM.
