---
title: "MEMS Microphones"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags: [#concept, #sensors, #mems, #audio, #iot]
created: 2026-04-24
strong_links: [["CMOS Image Sensor Market", "Analog Chip Market Overview", "Power Management ICs", "Edge Computing Infrastructure"], ["Foundry Business Model", "Fabless vs IDM Comparison", "Advanced Packaging Technologies", "Cellular Baseband Modems"]]
opposition_links: []
---

# MEMS Microphones

> [!info] Summary
> MEMS (Micro-Electromechanical System) microphones are the dominant microphone technology in smartphones, wearables, hearing aids, and IoT devices — replacing electret condenser microphones (ECMs) due to their smaller size, better temperature stability, digital output, and manufacturing scalability. The market is ~$2B annually with Knowles, Goertek, AAC, and Knowles dominating, while semiconductor companies (Analog Devices, STMicroelectronics) provide the ASIC readout chips. The AI voice interface trend (smart speakers, TWS earbuds, hearing aids) is driving demand for higher-performance, lower-power MEMS microphones.

## Definition

A MEMS microphone consists of two dies in a single package: a MEMS sensor die (the acoustic transducer) and an ASIC die (the readout amplifier and output driver). The MEMS sensor works on the capacitive principle: a fixed backplate electrode and a moveable diaphragm (both polysilicon or silicon) form a parallel-plate capacitor. Sound pressure waves deflect the diaphragm, changing the capacitance, which is measured by the ASIC as a voltage signal. The ASIC output is typically a differential analog signal (for premium microphones) or a single-ended digital signal (PDM or PDM-to-I2S output for digital microphones).

Key specifications: sensitivity (dBV/Pa, higher is better), signal-to-noise ratio (SNR, in dB, higher is better — 65dB is good, 70dB+ is premium), current consumption (μA, critical for battery-powered devices), acoustic overload point (AOP, in dB SPL, higher is better for loud environments), and frequency response (Hz-kHz range and flatness).

## Context and origin

The first commercial MEMS microphones appeared in the early 2000s — Knowles (the historic leader in hearing aid microphones) commercialized MEMS microphones around 2002. The breakthrough adoption came with the launch of the iPhone 4 (2010), which used MEMS microphones for voice pickup, followed rapidly by the Nintendo Wii (which used MEMS accelerometers, not microphones). By 2015, virtually all smartphones used MEMS microphones rather than ECMs.

The market structure is vertically fragmented. The MEMS sensor die is manufactured by companies with specialized MEMS fabrication capabilities: Knowles, Goertek (Chinese), AAC (Chinese), BSE (Japanese), and Omron. The ASIC die is supplied by pure-play mixed-signal semiconductor companies: Analog Devices, Wolfson (Cirrus Logic), Knowles (vertically integrated), and STMicroelectronics.

Chinese manufacturers (Goertek, AAC) have rapidly gained share in smartphone microphone volume — by 2024, Chinese suppliers hold ~60% of the global smartphone microphone market by unit volume. Knowles has maintained its premium position (Apple iPhone uses Knowles microphones in some positions, Goertek in others).

## Mechanisms / characteristics / details

**MEMS sensor die:** The sensor consists of a backplate (perforated fixed electrode, typically 0.5-1mm²) and a diaphragm (suspended membrane, ~0.3mm²). The backplate has holes (or slots) that allow air to pass through, so the diaphragm moves freely. The gap between diaphragm and backplate is typically 0.5-2μm. The diaphragm is etched from a structural polysilicon or silicon-on-insulator (SOI) layer. The manufacturing process uses dedicated MEMS fabs: Knowles' MEMS fab in Illinois, IMMS (Taiwan), and TSMC's MEMS platform.

**ASIC die:** The ASIC converts the capacitance change to a usable voltage signal. The front-end is a charge pump or transimpedance amplifier (TIA) that converts the tiny capacitance change (in the femtofarad range for quiet sounds) to a voltage swing. The ASIC typically operates from a 1.6-3.6V supply and draws 60-250μA of current. For digital microphones, the ASIC also includes a decimation filter and PDM (pulse density modulation) modulator or I2S output serializer.

**Digital microphones (PDM, I2S, TDM):** The dominant interface is PDM (pulse density modulation) — a 1-bit oversampled representation of the audio signal, typically at 64× oversampling (3.072 MHz for 48kHz audio). The PDM signal is decoded by the application processor (smartphone SoC, codec, or DSP). I2S is a serial audio interface with embedded clock (used for higher-quality audio paths). TDM (time-division multiplexed) is used when multiple microphones share a single bus (e.g., 4-microphone array in a smartphone).

**Microphone arrays and beamforming:** Smartphones use multiple microphones (typically 2-4) for beamforming — directional pickup that enhances the target speaker's voice while suppressing background noise. The microphone array enables acoustic echo cancellation (AEC), noise suppression, and spatial audio recording. The [[Edge Computing Infrastructure]] angle: beamforming algorithms are increasingly run on the device's NPU or audio DSP rather than the main application processor, reducing latency and power.

## Nuances critiques limits

**Directional AI microphones:** The next frontier is directional AI microphones — using machine learning to isolate a specific person's voice in a noisy multi-speaker environment (the "cocktail party problem"). This requires either a larger microphone array (6+ microphones) or sophisticated neural network processing on the audio. Apple AirPods Pro use this approach for "Speech Enhancement" during calls.

**Hearing aid market:** The WHO estimates 700M people have hearing loss. The UN's WHA75 resolution (2022) on hearing care and EU regulation mandating PSAPs/hearing aids to be over-the-counter are driving growth in the hearing aid microphone market. Hearing aids require extremely low power (<20μA current), miniature size, and high SNR (>70dB) — a challenging combination that Knowles and its competitors are targeting.

**Commoditization:** MEMS microphones are highly standardized — a 3.76mm × 2.95mm × 1.1mm omni-directional MEMS microphone is essentially a commodity with performance specified by industry-standard parameters. This commoditization has driven ASP erosion (from ~$0.70 in 2010 to ~$0.25 in 2024 for mid-range smartphone mics), squeezing margins for all but the premium and vertically integrated players.

**AI voice interface impact:** The growth of AI voice assistants (Siri, Google Assistant, Alexa) has driven demand for always-on microphone listening at very low power (<10μA in always-listening mode). This is technically demanding — the microphone must detect a wake word without significant false triggers while consuming microwatts of power.

## Links and implications

[[MEMS Microphones]] is adjacent to [[CMOS Image Sensor Market]] — both are MEMS sensors using similar manufacturing processes (surface micromachining) and foundries (TSMC, specialized MEMS fabs). [[Analog Chip Market Overview]] connects because the microphone ASIC is a specialized analog front-end IC (ultra-low-noise amplifier, signal chain). [[Power Management ICs]] matters: microphones need very low-noise LDO regulators (1.6-3.6V at microamps) to power the ASIC, and [[Data Center Power Management]] connects for the server infrastructure processing voice data.

[[Cellular Baseband Modems]] is related: smartphone audio (voice calls, voice assistants) flows through the baseband processor's audio codec and DSP. The [[Foundry Business Model]] is relevant — MEMS microphones use specialized foundries (Knowles has its own, TSMC has a MEMS platform, UMC has MEMS options). [[Fabless vs IDM Comparison]] applies: Knowles is partially IDM (MEMS fab in-house, ASIC outsourced); Goertek is fully vertically integrated (MEMS + assembly); companies like Analog Devices source ASIC from their own fabs but MEMS from contract manufacturers.

[[Edge Computing Infrastructure]] is the AI voice interface story — always-on voice listening at the edge requires specialized wake-word detection chips (very low power) and increasingly sophisticated on-device AI processing. [[Advanced Packaging Technologies]] is critical for MEMS microphones: the sensor die and ASIC die are co-packaged in a single SMD (surface mount device) package using either wire bonding or flip-chip interconnection.

## Sources
[^1]: Knowles investor materials and annual reports.
[^2]: Yole Développement, "MEMS Microphones 2024" report.
[^3]: Goertek (歌尔股份) annual reports, 2022-2024.
[^4]: Consumer Technology Association, MEMS microphone market statistics.
[^5]: IEEE Journal of Microelectromechanical Systems, MEMS microphone review papers 2022-2024.
