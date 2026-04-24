---
title: "Ultrasonic Sensing Technologies"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: deep-cut
source_knowledge: web-checked
sources_count: 4
tags: [#concept, #sensors, #ultrasonic, #mems, #iot]
created: 2026-04-24
strong_links: [["MEMS Microphones", "Fingerprint Sensor Technologies", "Time of Flight 3D Sensing", "Advanced Packaging Technologies"], ["Foundry Business Model", "Edge Computing Infrastructure", "Power Management ICs", "Medical Imaging Semiconductors"]]
opposition_links: []
---

# Ultrasonic Sensing Technologies

> [!info] Summary
> Ultrasonic sensing uses high-frequency sound waves (20kHz to 10MHz) for proximity detection, distance measurement, level sensing, flow measurement, and medical imaging. In consumer devices, ultrasonic proximity sensors (detecting when a phone is near the ear to disable the touchscreen) have been largely replaced by optical proximity sensors, but new applications are emerging: ultrasonic fingerprint sensors (Qualcomm/B-QIP), ultrasonic flow meters (industrial IoT), and ultrasonic distance sensors (robotics, drones, automotive). The market is fragmented across industrial, medical, and consumer segments with small specialist companies serving each.

## Definition

Ultrasonic sensors emit and receive high-frequency sound waves (above the human hearing range, typically 20kHz to 10MHz). The sensor contains a piezoelectric transducer — a material (PZT ceramic, PVDF polymer, or AlN in MEMS) that converts electrical signals to mechanical vibrations and vice versa. In transmit mode, a voltage pulse drives the piezoelectric element, generating an ultrasonic wave that propagates through air or a medium. In receive mode, returning echoes (reflected off an object or interface) cause the piezoelectric element to generate a small electrical signal.

The time-of-flight (TOF) principle: the time between transmitting a pulse and receiving the echo is proportional to the distance to the reflecting surface. For known media (air at a given temperature, water, oil), the speed of sound is known, so distance can be calculated.

Key specifications: frequency (higher frequency = better resolution but higher attenuation, especially in air), range (0.02m to 10m+ depending on frequency and medium), beam angle (narrower at higher frequencies), accuracy (typically ±0.1-1% of range), and power consumption (critical for battery-operated IoT devices).

## Context and origin

Ultrasonic sensing originated in sonar (WWI-era naval applications) and medical ultrasound (1950s). The consumer application emerged in the 1990s with ultrasonic parking sensors (cars backing up), which remain a high-volume application — every modern car has 4-8 ultrasonic parking sensors. The automotive ultrasonic park assist market is mature, served by companies like Bosch, Continental, Valeo, and Chinese supplier Sanghoon.

The smartphone proximity sensor application (detecting when the phone is against the ear to disable touchscreen) was originally ultrasonic (using a tiny transducer driven at 40kHz), but was almost entirely replaced by optical proximity sensors (IR LED + IR phototransistor) in the 2010s — optical was cheaper and thinner. However, ultrasonic is re-emerging in premium smartphones: Qualcomm's ultrasonic fingerprint sensor (Snapdragon Sense ID, used in Samsung Galaxy S10/S20) uses an ultrasonic transducer array beneath the display to read fingerprint ridges in 3D.

Industrial IoT is the growth area: ultrasonic flow meters (measuring fluid velocity in pipes without contact), level sensors (measuring tank fill levels in chemical plants, water utilities), and non-destructive testing (NDT) for infrastructure inspection (crack detection in bridges, pipelines).

## Mechanisms / characteristics / details

**Piezoelectric transducer:** The heart of an ultrasonic sensor is the piezoelectric element. Bulk piezoelectric ceramics (PZT, lead zirconate titanate) are the most common — they offer high coupling coefficients and can be machined into custom shapes (discs, rings,碗). For MEMS ultrasonic transducers (MUT), capacitive or piezoelectric principles are used: cMUT (capacitive MEMS ultrasonic transducers) uses electrostatic actuation of a membrane; pMUT (piezoelectric MEMS) uses thin-film PZT or AlN deposited on a silicon membrane. MEMS ultrasonic transducers enable miniaturized, array-formultiple-beam ultrasonic sensors.

**Ultrasonic time-of-flight (TOF) measurement:** The sensor emits a short burst of ultrasound (typically 5-20 cycles at the resonant frequency). The echo returns from the target object. The round-trip time is measured (typically using a precision timer or high-speed ADC). The distance = (speed of sound × round-trip time) / 2. Temperature compensation is critical: the speed of sound in air varies by ~0.17% per °C. Advanced sensors include a temperature sensor and apply compensation algorithms.

**Automotive ultrasonic sensors:** The standard automotive ultrasonic parking sensor operates at 40-48kHz (just above human hearing). The sensor is a simple piezoelectric disc (20-30mm diameter) in a housing with an internal MCU that processes the echoes. The sensor measures distance to the nearest object in the beam path (typically 0.2-2.5m for park assist). More advanced systems use multiple sensors for 360° coverage and provide rearview camera overlay guidelines. The transition to electric vehicles (which are much quieter than ICE vehicles) has renewed interest in improved parking sensor systems.

**MEMS ultrasonic transducers (MUT):** The emerging application is in-air ultrasonic sensing using MEMS technology. Traditional ultrasonic transducers are bulk ceramic or polymer elements — too large for consumer mobile devices. MEMS ultrasonic transducers (cMUT and pMUT) can be fabricated in standard wafer-level processes using CMOS-compatible materials. In 2024, Qualcomm and others demonstrated ultrasound-on-CMOS for fingerprint sensing and proximity detection in smartphones, potentially replacing both optical and capacitive approaches.

## Nuances critiques limits

**Speed of sound limitation:** The speed of sound in air (~343 m/s at room temperature) limits ultrasonic ranging to relatively short distances and low update rates for long ranges. For a 10m range, round-trip time is ~58ms — which limits the maximum measurement rate to ~17 measurements per second. This is fine for stationary or slow-moving targets, but insufficient for high-speed applications (vehicle forward collision warning at highway speeds).

**Atmospheric attenuation:** High-frequency ultrasound attenuates rapidly in air — a 1MHz signal loses ~1 dB per meter in air at 50% RH. This limits the practical frequency for long-range air-coupled ultrasonic sensing to <500kHz, which in turn limits the achievable resolution (spatial resolution ≈ λ/2 ≈ 0.34mm at 500kHz).

**Coupling requirements:** Unlike electromagnetic waves (light, radio), ultrasound requires acoustic coupling between the transducer and the medium. For liquid or solid measurements, this is straightforward. For air-coupled applications (distance measurement in air), the impedance mismatch between the solid transducer and air causes most of the energy to reflect at the interface. Matching layers (acoustic impedance transformers) are used to improve transmission efficiency.

**Competition with mmWave radar:** For many distance sensing applications (robotics, drones, automotive), mmWave radar offers significant advantages: it can operate at much longer ranges (100m+), is not affected by temperature or humidity, and directly measures velocity. For short-range (<5m) proximity sensing, optical (IR) sensors remain cheaper and more compact.

## Links and implications

[[Ultrasonic Sensing Technologies]] is adjacent to [[MEMS Microphones]] — both use piezoelectric transduction and similar MEMS manufacturing processes. The [[Fingerprint Sensor Technologies]] connection is strong: Qualcomm's ultrasonic fingerprint sensor is essentially an ultrasonic proximity sensor optimized for imaging fingerprint ridges. [[Time of Flight 3D Sensing]] is related: both measure time-of-flight, though ultrasonic uses sound while optical ToF uses light (speed difference: 1,000,000×).

[[Advanced Packaging Technologies]] is critical for ultrasonic sensors: the piezoelectric material (PZT ceramic) must be integrated with silicon readout ASIC — this is a heterogeneous integration challenge similar to combining [[HBM High Bandwidth Memory]] with logic. [[Medical Imaging Semiconductors]] is adjacent: medical ultrasound uses piezoelectric transducers (bulk ceramic, not MEMS) to send and receive ultrasonic pulses for fetal imaging, cardiac imaging, and non-destructive testing.

[[Foundry Business Model]] connects because MEMS ultrasonic transducers (cMUT/pMUT) can be manufactured on standard silicon fab lines with additional process steps, benefiting the same foundries that serve the [[CMOS Image Sensor Market]] ecosystem. [[Edge Computing Infrastructure]] is relevant: ultrasonic sensors increasingly include embedded signal processing (distance calculation, filtering) so they output digital values rather than raw echo data. [[Power Management ICs]] is adjacent: battery-powered ultrasonic IoT sensors (level sensors in remote tanks) require micropower operation — duty-cycling the sensor with microamp-level sleep currents is a key design challenge.

## Sources
[^1]: Knowles ultrasonic and MUT technology documentation.
[^2]: IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, MUT review papers 2022-2024.
[^3]: Bosch automotive ultrasonic sensor product family documentation.
[^4]: Qualcomm Snapdragon Sense ID ultrasonic fingerprint technology whitepaper.
[^5]: Yole Développement, "Ultrasonic Sensing 2024" market report.
