---
title: "Fingerprint Sensor Technologies"
type: concept
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 5
tags:
  - '#concept'
  - '#sensors'
  - '#biometrics'
  - '#security'
  - '#mobile'
created: 2026-04-24
strong_links:
  - ['CMOS Image Sensor Market']
  - ['Analog Chip Market Overview']
  - ['Power Management ICs']
  - ['Cellular Baseband Modems']
  - ['Foundry Business Model']
  - ['Advanced Packaging Technologies']
  - ['Machine Vision Industrial AI']
  - ['Fabless vs IDM Comparison']
opposition_links: []
---

# Fingerprint Sensor Technologies

> [!info] Summary
> Fingerprint sensors are the dominant biometric authentication mechanism for smartphones, payment cards, and access control systems. Three dominant technologies compete: capacitive (legacy, dominant), optical (resurgent in under-display implementations), and ultrasonic (premium, Qualcomm/B-QIP). Market leaders include Goodix (Huawei, Samsung mid-range), Apple (proprietary), and Fingerprint Cards (FPC, Swedish company). The structural trend is toward under-display integration, which is driving the shift from capacitive to optical and ultrasonic technologies.

## Definition

Fingerprint sensors capture the ridge-and-valley pattern of a fingertip for biometric authentication. The three dominant technologies:

**Capacitive sensors** measure the capacitance between conductive plates and the skin surface — ridges ( conductive) produce higher capacitance than valleys (air gap). Modern capacitive sensors use an active pixel array of ~300×300 to 500×500 pixel pitch (3-5μm) with integrated switching matrices to measure capacitance at each pixel location. The sensor is typically manufactured on a modified CMOS process with thick top-metal layers (to increase capacitance sensitivity) or using a dedicated MEMS-like process (TSMC and UMC offer specialized pixel processes).

**Optical sensors** use a visible-light imager (essentially a tiny CMOS camera) to capture an image of the fingerprint illuminated by an LED. In under-display optical implementations (used in many OLED smartphones since 2018), the display's own light illuminates the finger and the optical sensor beneath the display captures the reflected image. This requires a specialized sensor with very high dynamic range (the display light must be suppressed to see the fingerprint contrast).

**Ultrasonic sensors** emit ultrasonic pulses into the finger and measure the reflected pressure wave. The fingerprint ridge pattern creates different acoustic impedance vs valleys, producing a 3D map of the fingerprint including ridge depth (which capacitive cannot detect). Qualcomm (through its subsidiary B-QIP) and Samsung have offered ultrasonic in-display fingerprint sensors (Galaxy S10, S20, S21, etc.). The technology requires specialized piezoelectric MEMS materials (PZT, AlN) and high-frequency analog processing.

## Context and origin

The modern fingerprint sensor industry was transformed by the iPhone 5s (2013), which introduced Touch ID — a capacitive sensor integrated into the home button — as the first mainstream biometric authentication system. Apple's acquisition of AuthenTec (2012) gave it the in-house technology to implement this. The iPhone 5s launched an industry-wide race to add fingerprint sensors to smartphones. By 2016, virtually all mid-range and premium Android smartphones included fingerprint sensors, driving massive volume for sensor suppliers.

The market structure evolved rapidly: Apple's AuthenTec was internally supplied. Swedish Fingerprint Cards (FPC) became the dominant Android supplier — its sensors were in early Android fingerprint phones (Huawei Mate 7, 2014, was the breakout design win). Goodix (汇顶科技, Chinese) rapidly competed away market share with lower-cost sensors and faster development cycles. By 2019, Goodix was the #1 supplier, shipping in Samsung Galaxy S10/S20, Huawei P30, Xiaomi Mi 9, and many others. Fingerprint Cards declined sharply as its Android customer base evaporated.

The under-display shift (2018-present) disrupted the competitive landscape again. Capacitive sensors cannot work under a display cover glass — they require physical contact with the finger. Optical under-display sensors (Goodix, Synaptics) captured the transition. Ultrasonic (B-QIP, Qualcomm) offered higher security (3D ridge map vs 2D image) but at higher cost and only in premium Samsung phones.

## Mechanisms / characteristics / details

**Capacitive pixel operation:** Each pixel of a capacitive fingerprint sensor consists of transmit and receive electrodes separated by a dielectric. The finger surface forms a conductive plate above the pixel. A voltage applied to the transmit electrode creates a fringing field that couples through the finger to the receive electrode — the capacitance depends on the distance (ridge closer = higher capacitance). Modern sensors use active pixel amplification at each pixel site to overcome parasitics and achieve acceptable signal-to-noise ratio. The sensors are manufactured on 180nm to 110nm nodes (mature nodes with thick top-metal options).

**Optical under-display implementation:** The optical sensor sits below the OLED display. The OLED panel's regular pixels can be used as the illumination source (the OLED emission passes through the glass, reflects off the finger, and returns to the sensor). Alternatively, a dedicated infrared LED illuminates the finger. The sensor is an active-pixel CMOS imager with on-chip image processing — essentially a very small, specialized version of a [[CMOS Image Sensor Market|visible-light camera sensor]]. The challenge: ambient light rejection, optical cross-talk through the OLED stack, and on-chip computational imaging to extract a usable fingerprint image from the indirect illumination.

**Ultrasonic operation:** A piezoelectric transmitter (typically AlN or PZT MEMS) generates ultrasonic pulses. The pulse travels into the finger, reflects off the skin surface and at various depths (ridge/vally boundary creates a reflection at the interface, the subcutaneous tissue creates a second reflection). A piezoelectric receiver array detects the reflected waves. The time-of-flight gives depth information (creating a 3D fingerprint map, including ridge thickness). The integration challenge: the piezoelectric material must be compatible with semiconductor wafer-level processing, and the high-frequency analog front-end (100s of MHz) requires sophisticated mixed-signal design.

**Security considerations:** Fingerprint sensors must be physically and cryptographically isolated from the main system processor. The sensor typically includes a secure enclave or secure element that stores the biometric template — this prevents software attacks from accessing the biometric data. Apple goes further: the Touch ID image is processed entirely within a Secure Enclave that never exposes the raw image to the application processor.

## Nuances critiques limits

**Under-display optical vs ultrasonic:** Optical under-display is cheaper and easier to manufacture but requires the display to act as an light source, reducing display quality slightly (the area over the sensor may have slightly different optical characteristics). Ultrasonic provides better 3D ridge data but costs more and requires more complex integration. Apple's 2023 decision to remove Touch ID entirely (iPhone 14 Pro had no fingerprint sensor) and rely entirely on Face ID suggests the premium trend favors 3D face recognition for high-end devices.

**Facial recognition competition:** Apple's Face ID (3D structured light, then 3D ToF in iPhone 12+) uses [[Time of Flight 3D Sensing]] technology. Face ID has largely replaced fingerprint sensors in the premium tier. The investment implication: for Apple, fingerprint sensor content is going to zero; for Android, the race is to make under-display optical sensors as fast and reliable as capacitive.

**Payment card deployment:** Beyond smartphones, biometric payment cards are an emerging market. Fingerprint sensors embedded in EMV payment cards (Mastercard, Visa initiatives) would enable contactless payments without PIN. The sensor must be ultra-thin (compliant with ISO/IEC 7810 card thickness standards) and ultra-low power (powered by the card terminal's RF field). This is an emerging opportunity for fingerprint sensor companies — but volumes remain small.

**Fingerprint sensor consolidation:** The rapid commoditization of fingerprint sensors in smartphones drove Fingerprint Cards from peak revenue (2016-2017) to near-zero. The surviving companies (Goodix, AuthenTec/Apple, Qualcomm/B-QIP) have all either integrated vertically or serve only the premium tier. The lesson: biometric hardware commoditizes faster than the software/authentication ecosystem.

## Links and implications

[[Fingerprint Sensor Technologies]] connects to [[CMOS Image Sensor Market]] — optical fingerprint sensors are specialized CMOS imagers. [[Analog Chip Market Overview]] is relevant for the analog front-ends (capacitive measurement circuits, ultrasonic TX/RX). [[Power Management ICs]] matters because fingerprint sensors in smartphones need highly integrated, low-power PMICs. [[Cellular Baseband Modems]] is adjacent — biometric authentication on mobile devices flows through the secure enclave in the SoC, which includes the baseband processor in integrated Snapdragon/Exynos/Kirin platforms.

[[Foundry Business Model]] connects because capacitive fingerprint sensors use specialty foundry processes (thick top-metal), while optical sensors are essentially image sensors on standard logic processes. [[Advanced Packaging Technologies]] is important for under-display sensors — the optical stack must be co-designed with the display and cover glass. [[Machine Vision Industrial AI]] is related: both fingerprint sensors and machine vision use pattern recognition, and the [[Fabless vs IDM Comparison]] is relevant for understanding which companies manufacture their own sensors (Apple/AuthenTec does; Goodix is fabless, manufactured at TSMC).

## Sources
[^1]: Goodix investor presentations, 2023-2024.
[^2]: Fingerprint Cards (FPC) annual reports, 2015-2023.
[^3]: Apple patent filings on ultrasonic biometric sensing.
[^4]: Qualcomm B-QIP/Snapdragon Sense ID technical documentation.
[^5]: Yole Développement, "Consumer Biometrics" market report, 2024.
