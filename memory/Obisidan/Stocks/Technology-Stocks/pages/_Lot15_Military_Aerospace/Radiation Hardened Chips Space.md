---
title: "Radiation Hardened Chips Space"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #rad-hard, #space, #radiation, #spacecraft]
created: 2026-04-24
strong_links: [["Defense Semiconductor Requirements", "Military Avionics Systems", "Trusted Foundry Program", "Military Communication Systems"], ["Wide Bandgap Material Economics", "DARPA Electronics Resurgence", "Semiconductor Export Controls ITAR", "GaN for Defense Radar"]]
opposition_links: []
---

# Radiation Hardened Chips Space

> [!info] Summary
> Radiation hardened (rad-hard) chips for space must survive cosmic radiation, solar particle events, and trapped radiation belts without functional degradation, requiring specialized semiconductor processes, circuit design techniques, and extensive qualification testing that results in costs 100x or more above commercial equivalents.

## Definition

Rad-hard chips for space must meet specific radiation tolerance levels: Total Ionizing Dose (TID) resistance measured in krad(Si), Single Event Effects (SEE) immunity including Single Event Latchup (SEL), Single Event Upset (SEU), and Single Event Burnout (SEB). They must operate across the -55°C to +125°C temperature range and typically have 15-30 year mission life requirements without component replacement.

The radiation environment in space is hostile: galactic cosmic rays (high-energy protons and heavy ions), solar particle events (flares and coronal mass ejections), and trapped radiation belts (Van Allen belts) all pose radiation threats. Each orbit altitude and inclination has a different radiation environment requiring different shielding and component selection strategies.

## Context and origin

The US space rad-hard electronics program dates to the 1960s with the NASA and DoD space programs. Early rad-hard ICs used silicon-on-sapphire (SOS) and later silicon-on-insulator (SOI) processes to reduce radiation effects. The rad-hard IC industry consolidated significantly from the 1990s to the 2010s as military space budgets contracted and commercial foundries exited the rad-hard market.

Today, the US rad-hard IC supply base includes BAE Systems (line of rad-hard processors and mixed-signal ICs), Honeywell (sensors and processors), Microchip (including its former Space Micro division), and Teledyne (RF and mixed-signal). Some defense primes (Lockheed Martin, Northrop Grumman) maintain internal radiation-hardened ASIC capabilities.

## Mechanisms / characteristics / details

Radiation hardening techniques include: SOI/SOS substrates (reducing the active silicon volume exposed to radiation), enclosed layout transistors (reducing the sensitive volume), radiation-tolerant design techniques (triple-modular redundancy for critical circuits), and special screening and qualification flows.

The [[Trusted Foundry Program]] governs the approved sources for rad-hard components. [[Defense Semiconductor Requirements]] sets the baseline standards. The [[Wide Bandgap Material Economics]] page covers GaN's potential advantages in rad-hard applications, as GaN is inherently more radiation-tolerant than silicon.

The satellite market is the primary driver. Commercial satellite constellations (Starlink, OneWeb, Amazon Kuiper) use a mix of rad-hard and radiation-tolerant (vs rad-hard) commercial components with system-level redundancy. Traditional defense and NASA programs use fully qualified rad-hard components.

## Nuances critiques limits

The distinction between "rad-hard" (fully qualified to MIL-SPEC or similar), "radiation-tolerant" (enhanced screening, not full MIL-SPEC), and commercial grade with redundancy is important. Many new space programs use radiation-tolerant commercial parts with system-level fault tolerance rather than expensive fully-qualified rad-hard components.

The emerging NewSpace market has disrupted traditional rad-hard supply chain economics. Small satellite programs at CubeSat and SmallSat form factors often use commercial components with known susceptibility profiles, accepting higher failure rates in exchange for lower cost.

## Links and implications

[[Radiation Hardened Chips Space]] connects to [[Defense Semiconductor Requirements]] and [[Military Avionics Systems]] as the application environments. [[Trusted Foundry Program]] governs sourcing. [[Military Communication Systems]] use rad-hard electronics extensively.

The geopolitical dimension of [[Semiconductor Export Controls ITAR]] matters because space technology often has defense implications. [[DARPA Electronics Resurgence]] is funding next-generation rad-hard technologies including silicon carbide and gallium nitride for space.

## Sources
[^1]: NASA Radiation Effects Analysis and Specification Documents.
[^2]: IEEE NSREC (Nuclear and Space Radiation Effects Conference) proceedings.
[^3]: European Space Agency (ESA) component specifications (ESCC).
[^4]: BAE Systems, Honeywell, and Microchip rad-hard product catalogs.
[^5]: Aerospace Corporation studies on commercial component use in space.
