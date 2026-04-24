---
title: "Photonics Integrated Circuits"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: medium
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #photonics, #integrated-circuit, #silicon-photonics, #optical]
created: 2026-04-24
strong_links: [["Optoelectronics Sensor Market", "Data Center Optical Networks", "LiDAR Technology", "Co-Packaged Optics"], ["MicroLED Technology", "Semiconductor Materials Market", "Foundry Business Model", "Advanced Packaging Market Dynamics"]]
opposition_links: []
---

# Photonics Integrated Circuits

> [!info] Summary
> Photonic integrated circuits (PICs) integrate optical components — waveguides, modulators, detectors, lasers — onto semiconductor chips, enabling optical communication, sensing, and computing functions at chip-scale. Silicon photonics uses standard CMOS fab processes to manufacture optical components, while compound semiconductor photonics (InP, GaAs) offers higher performance for lasers and transmitters at higher cost.

## Definition

Photonic integrated circuits (PICs) are chips that guide, modulate, detect, and generate light using waveguide structures similar to how electronic ICs guide electrons. Unlike electronic ICs where the semiconductor substrate is primarily a carrier, in PICs the optical properties of the material are the active element.

Silicon photonics uses standard CMOS processes (primarily on silicon substrates) to create waveguides, grating couplers, and passive structures. Active components like lasers and high-speed modulators require additional processes or materials. The [[Co-Packaged Optics]] page addresses one specific application.

## Context and origin

The field emerged from telecommunications research in the 1990s as researchers sought to integrate optical components onto chips to reduce the size and cost of optical transceivers. Intel and Luxtera (acquired by Cisco) were early commercial pioneers in silicon photonics for data center communication.

The data center network bandwidth explosion has made photonics increasingly attractive. As SerDes speeds moved from 10Gbps to 25Gbps to 50Gbps to 100Gbps per lane, electrical signaling became increasingly difficult over the distances within and between racks. Optical interconnects solve this bandwidth-distance problem.

## Mechanisms / characteristics / details

Silicon photonics manufacturing uses standard CMOS fab processes with some modifications. Waveguides are typically silicon (high index contrast) on silicon dioxide (low index). The challenge is that silicon is indirect bandgap, meaning it does not efficiently emit light — this limits silicon's usefulness for on-chip lasers.

Indium phosphide (InP) and gallium arsenide (GaAs) can emit light efficiently and are used for lasers and optical amplifiers. Hybrid integration approaches combine InP lasers with silicon photonics chips, or use wafer bonding to integrate InP materials on silicon.

Intel's silicon photonics business is the most advanced commercial implementation, shipping 100G and 400G optical transceivers for data centers. The company uses a hybrid silicon approach with external InP lasers.

The link to [[Data Center Optical Networks]] is direct — this is the primary commercial application driving PIC adoption. The [[Co-Packaged Optics]] development is an extension where optics move from pluggable modules onto the switch package itself.

## Nuances critiques limits

The main limitation of silicon photonics is the laser integration challenge. Separately packaged lasers add cost and assembly complexity. Wafer-scale integration of InP on silicon is technically challenging due to lattice mismatch between materials.

Another issue is manufacturing yield and testing. Unlike electronic ICs where scan chains can test logic, photonic components require optical testing that is more complex, slower, and more expensive.

The market for PICs outside data center communications (in sensors, lidar, medical, quantum computing) is still emerging and represents smaller volumes than telecom/datacom.

## Links and implications

[[Photonics Integrated Circuits]] connect to [[Co-Packaged Optics]] as a specific application, and to [[Data Center Optical Networks]] as the primary market. The manufacturing involves [[Foundry Business Model]] for silicon photonics (foundries like AppliedBio/IMEC for research, GlobalFoundries for production) and [[Advanced Packaging Market Dynamics]] for hybrid integration approaches.

[[Semiconductor Materials Market]] is relevant for the specialized materials (InP, GaAs) and [[Semiconductor Materials Market]] for silicon photonics substrates.

## Sources
[^1]: Intel Silicon Photonics technology overviews and product announcements.
[^2]: Yole Développement integrated photonics market reports.
[^3]: Academic papers on heterogeneous III-V/Si integration for photonics.
[^4]: Cisco/Luxtera acquisition and silicon photonics commercial progress.
[^5]: Industry analysis of co-packaged optics adoption timeline.
