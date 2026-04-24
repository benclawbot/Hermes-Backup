---
title: "Time of Flight 3D Sensing"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #sensors, #3d-sensing, #mobile, #ai]
created: 2026-04-24
strong_links: [["CMOS Image Sensor Market", "Fingerprint Sensor Technologies", "Machine Vision Industrial AI", "Advanced Packaging Technologies"], ["mmWave Radar Technologies", "Automotive LIDAR Systems", "Foundry Business Model", "Edge Computing Infrastructure"]]
opposition_links: []
---

# Time of Flight 3D Sensing

> [!info] Summary
> Time of Flight (ToF) sensors emit light and measure the round-trip travel time to calculate distance, creating 3D depth maps. Two variants dominate: direct ToF (dToF, measuring single photon arrival times using SPAD detectors — used in Apple Face ID dot projector and rear LiDAR) and indirect ToF (iToF, measuring phase shift of continuous wave illumination — used in many Android front-facing depth sensors). The technology is the foundation for Face ID, Animoji, ARKit/ARCore, and automotive depth sensing, with Lumentum, Finisar, ams Osram, and Sony as key component suppliers.

## Definition

Time of Flight sensing measures the distance to objects by emitting a signal (light, typically near-infrared at 850nm, 940nm, or 1380nm) and measuring the time delay between emission and return. The speed of light is 3×10^8 m/s, so measuring distance requires very high precision — for 1mm depth resolution, you need to measure time with ~3 picosecond precision.

**Direct ToF (dToF):** Emits short laser pulses (hundreds of picoseconds wide, repeated at MHz rates) and measures individual photon arrival times with a single-photon avalanche diode (SPAD) array. Each pixel in a dToF sensor is essentially a tiny LIDAR receiver. Apple Face ID uses a dToF approach with a VCSEL array emitting 30,000+ dot patterns, and a SPAD sensor array reading the reflected pattern. Direct ToF provides absolute depth with high accuracy but requires expensive SPAD detectors and high-precision timing electronics.

**Indirect ToF (iToF):** Emits continuous wave (CW) or modulated infrared illumination and measures the phase shift of the reflected signal relative to the emitted signal. The phase shift is proportional to distance. The sensor is a standard CMOS image sensor with specialized demodulation pixels (typically 4-tap phase pixels that sample the modulated signal at 0°, 90°, 180°, 270°). iToF is simpler to implement than dToF (uses standard CMOS pixels rather than SPADs), but has ambiguity range limitations (depth wraps at half the modulation wavelength) and is more susceptible to multi-path interference.

The key specifications: depth resolution (mm at 1m range), field of view (horizontal and vertical), operating range (0.1-5m for mobile, >100m for automotive), illumination power (eye safety limits), and ambient light rejection.

## Context and origin

The consumer ToF revolution began with the Microsoft Kinect for Xbox 360 (2010) — a structured light system (not pure ToF but related) that enabled full-body motion capture for gaming. The Kinect used a proprietary approach: an IR laser projector cast a known dot pattern, and an IR-sensitive camera read the distortion of the pattern to calculate depth. The technology was developed by PrimeSense (Israeli company, later acquired by Apple in 2013).

Apple's TrueDepth camera system (iPhone X, 2017) was the watershed commercial deployment of dToF — 30,000-dot dot projector, flood illuminator, and IR camera, all used for Face ID authentication and Animoji. The Face ID dot projector used a VCSEL (Vertical Cavity Surface Emitting Laser) array fabricated by Lumentum (or Finisar, later acquired by II-VI). The SPAD sensor was custom-designed by Apple/AuthenTec.

Android manufacturers adopted indirect ToF (iToF) in the Samsung Galaxy S10+ (2019) and others — simpler to implement with existing camera module infrastructure, but less secure (a printed photo could fool some iToF anti-spoofing implementations). Sony became the dominant iToF sensor supplier (IMX556, IMX570).

The next frontier: rear-facing dToF for augmented reality and computational photography (Apple iPhone 12 Pro, 2020, introduced the LiDAR scanner). Automotive is adopting dToF/LIDAR (separate from the [[Automotive LIDAR Systems]] discussion) for in-cabin sensing (driver monitoring, occupant classification).

## Mechanisms / characteristics / details

**VCSEL technology:** The illumination source for mobile ToF is almost exclusively VCSELs — Vertical Cavity Surface Emitting Lasers. A VCSEL is a semiconductor laser diode that emits light perpendicular to the chip surface (rather than from the edge, like edge-emitting lasers). VCSELs are manufactured on GaAs substrates using epitaxial layers that form the vertical laser cavity. The key advantages: easy 2D array fabrication (thousands of individual laser emitters on one chip), wafer-scale testing, and circular output beam profile. Lumentum, II-VI (Finisar), and ams Osram are the primary VCSEL suppliers for mobile ToF. The array size varies: the Face ID dot projector uses ~30,000 VCSEL elements; a simple iToF illuminator may use 10-100 elements.

**SPAD detectors for dToF:** A SPAD is a avalanche photodiode operated above the breakdown voltage in Geiger mode — a single incident photon can trigger a self-sustaining avalanche current pulse. SPAD arrays can be fabricated in standard CMOS processes (using the photodiode and shallow-trench isolation structures as the avalanche region). The timing resolution of a SPAD is excellent (<100 ps jitter), enabling millimeter-depth resolution. The challenge: SPADs have low fill factor (most of the pixel area is spent on isolation structures), require sophisticated quenching circuits, and have high dark count rates (thermal carriers triggering false events). Sony's SPAD sensors (IMX459, used in some automotive LIDAR) represent the state of the art.

**iToF demodulation pixels:** An indirect ToF sensor uses pixels with specialized architecture to demodulate the reflected modulated light. The dominant approach: 4-tap pixels with gate structures that sample the photocurrent at four phase offsets (0°, 90°, 180°, 270°). The phase of the reflected signal relative to the known transmitted signal gives the depth. The amplitude gives the signal strength. The challenge: the demodulation contrast (how cleanly the pixel can sample different phases) limits accuracy, and ambient light (especially sunlight) creates strong background that degrades signal-to-noise ratio.

**3D sensing for AR:** Apple's ARKit and Google's ARCore use depth maps from ToF sensors (or stereo cameras) to understand the 3D geometry of the scene, enabling virtual objects to be placed correctly in the real world. The quality of the depth map (spatial resolution, depth accuracy, frame rate) directly impacts AR realism. The 2020-2024 AR market has been slower than predicted, but enterprise AR (warehouse logistics, field service, manufacturing) has seen real deployment.

## Nuances critiques limits

**Apple vs Android split:** Apple has moved aggressively to dToF (Face ID dot projector, rear LiDAR) while Android has mostly used iToF due to cost and integration simplicity. This creates a bifurcated supply chain — Apple designs its own SPAD sensors (fabricated at TSMC), while Android iToF sensors primarily come from Sony. The premium tier of Android phones has adopted dToF (Samsung Galaxy S20 Ultra had a ToF sensor), but adoption has been inconsistent.

**AR under-delivery:** The 3D sensing wave driven by Face ID was expected to catalyze a major AR consumer market — but the AR hardware (smart glasses) remains a niche product. Snap Spectacles, Meta Ray-Bans, and Apple Vision Pro are early steps. The ToF sensor suppliers' AR revenue growth has been disappointing vs early projections.

**Power consumption:** ToF illumination (especially dToF with high peak power pulses) can be a significant power draw on smartphones. The illumination is pulsed at high peak power (amperes of current through the VCSEL array, for nanosecond pulses) at MHz repetition rates. This creates challenges for battery life, especially for always-on Face ID (currently only used for authentication, not continuous sensing).

**Automotive ToF:** A newer application is in-cabin sensing — using dToF or iToF for driver monitoring (is the driver's eye on the road?), occupant classification (is there a child seat?), and gesture control. The automotive requirements are different (longer range for driver monitoring, wider FOV for cabin monitoring) and the qualification standards are more stringent (AEC-Q100).

## Links and implications

[[Time of Flight 3D Sensing]] connects to [[CMOS Image Sensor Market]] — ToF sensors are specialized CMOS image sensors with either SPAD pixels (dToF) or demodulation pixels (iToF). [[Fingerprint Sensor Technologies]] is adjacent — both are biometric modalities competing for authentication use cases (Face ID vs Touch ID). [[Machine Vision Industrial AI]] connects because 3D sensing enables AI-based spatial understanding for robots, logistics automation, and quality inspection. [[Advanced Packaging Technologies]] is critical: VCSEL arrays require specialized GaAs packaging, and the optical elements (diffractive optical elements, DOE, for the Face ID dot projector) are precision-manufactured micro-optics.

[[mmWave Radar Technologies]] competes in the depth-sensing space for automotive — radar provides velocity (ToF cannot directly measure velocity without multiple frames). [[Automotive LIDAR Systems]] is the higher-performance, longer-range version of dToF. [[Foundry Business Model]] is relevant: VCSELs are manufactured on GaAs substrates at foundries like II-VI (which acquired Finisar's VCSEL business), Lumentum (has its own GaAs fab), and Pure-Fi. [[Edge Computing Infrastructure]] connects: ToF depth maps are computationally intensive to process, and edge AI processing (on the phone's NPU or ISP) is required for real-time 3D reconstruction.

## Sources
[^1]: Lumentum investor presentations on 3D sensing and VCSEL market.
[^2]: Sony IMX sensor product family documentation.
[^3]: Apple TrueDepth camera system technical analysis (System Plus Consulting reverse-engineering).
[^4]: Yole Développement, "3D Sensing and Imaging 2024" report.
[^5]: IEEE Sensors Journal, "SPAD Cameras for Direct ToF" papers 2022-2024.
