---
title: "GaN for Defense Radar"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#gan'
  - '#radar'
  - '#defense'
  - '#wide-bandgap'
created: 2026-04-24
strong_links:
  - ['Wide Bandgap Material Economics']
  - ['Military Avionics Systems']
  - ['Defense Semiconductor Requirements']
  - ['Radiation Hardened Chips Space']
  - ['Military Communication Systems']
  - ['Trusted Foundry Program']
  - ['DARPA Electronics Resurgence']
  - ['Defense Contractor Semiconductor Content']
opposition_links: []
---

# GaN for Defense Radar

> [!info] Summary
> Gallium Nitride (GaN) semiconductor technology has become the preferred choice for military radar transmit/receive modules, offering 5-10x higher power density than GaAs and enabling smaller, lighter, more efficient Active Electronically Scanned Array (AESA) radars for fighter jets, ships, and ground-based systems.

## Definition

GaN High Electron Mobility Transistors (HEMTs) are used as power amplifiers in the T/R (transmit/receive) modules of AESA radars. Each AESA radar contains hundreds to thousands of T/R modules, each with a GaN power amplifier capable of multi-watt output at X-band, Ku-band, or Ka-band frequencies depending on the radar system.

GaN's high power density (4-8 W/mm versus 0.5-1 W/mm for GaAs) allows each T/R module to be smaller and more efficient. The thermal conductivity of GaN on SiC substrates (superior to GaAs) allows heat to be removed more effectively, enabling higher power operation.

## Context and origin

GaN for military radar emerged from DARPA's Wide Bandgap Semiconductor (WBG) program in the 2000s, which funded GaN material and device development. The technology matured through the 2010s, with the first GaN-based AESA radars entering service in the late 2010s (AN/APG-77 on F-22, AN/APG-81 on F-35 reportedly use GaN-based T/R modules).

Northrop Grumman (AN/APG-77, AN/APG-81), Raytheon (AN/APG-79 for F/A-18E/F, AN/SPY-6 for Aegis), and Lockheed Martin are the primary AESA radar integrators. Qorvo and Wolfspeed (now onsemi) are major GaN RF component suppliers.

## Mechanisms / characteristics / details

GaN's advantage in radar applications is its combination of high power density, high frequency operation, and thermal conductivity. At X-band (8-12 GHz, used in most fighter aircraft radars), GaN T/R modules can produce 5-10W per module while GaAs modules typically produced 1-2W.

The [[Wide Bandgap Material Economics]] page covers the broader GaN market dynamics. For defense radar specifically, the key metrics are: peak power output, power-added efficiency (PAE), noise figure, and reliability (mean time between failures under thermal and radiation stress).

The link to [[Military Avionics Systems]] as the platform context is important. [[Radiation Hardened Chips Space]] is relevant for space-based radar applications.

## Nuances critiques limits

The cost of GaN T/R modules remains high compared to GaAs, though prices are declining as production volumes increase. The AESA radar cost is dominated by the T/R module count (thousands per radar), so GaN cost reduction directly enables more affordable AESA systems.

GaN RF reliability under long-term stress is a concern for lifetime military programs. Military systems require 20-30 year program lifetimes, and GaN's long-term degradation mechanisms under high-power operation are still being characterized.

The [[Trusted Foundry Program]] is relevant for domestically manufactured GaN components, as some defense programs require certified domestic supply.

## Links and implications

[[GaN for Defense Radar]] connects to [[Wide Bandgap Material Economics]] as the technology enabler. [[Military Avionics Systems]] and [[Defense Contractor Semiconductor Content]] provide the platform context.

The defense primes (Northrop Grumman, Raytheon, Lockheed Martin) are the primary customers for GaN radar components. [[Semiconductor Export Controls ITAR]] governs export of GaN radar technology.

## Sources
[^1]: IEEE MTT-S (Microwave Theory and Techniques Society) GaN radar papers.
[^2]: Northrop Grumman, Raytheon AESA radar technical papers.
[^3]: DARPA Wide Bandgap Semiconductor program documentation.
[^4]: Qorvo and Wolfspeed GaN RF component datasheets.
[^5]: Trade publications on GaN military radar adoption timelines.
