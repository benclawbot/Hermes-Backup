---
title: "Foundry Business Model"
type: sector
cluster: "Technology Stocks Investing"
status: verified
controversy: low
importance: standard
source_knowledge: web-checked
sources_count: 3
tags:
  - '#foundry'
  - '#manufacturing'
  - '#TSMC'
  - '#fabless'
  - '#semiconductor'
created: 2026-04-24
strong_links:
  - ['Semiconductor Industry Overview']
  - ['Fabless vs IDM Comparison']
  - ['EUV Lithography Systems']
  - ['Semiconductor Equipment Makers']
  - ['AI Accelerator Market Overview']
  - ['Cloud Infrastructure Market']
  - ['HBM High Bandwidth Memory']
  - ['Advanced Packaging Technologies']
  - ['TSMC Business Analysis']
opposition_links: [["Commoditization Risk Semiconductors"]]
---

> [!info] Summary
> The foundry business model separates chip design from fabrication, allowing foundries to achieve scale economies that individual fabless designers could never attain alone, with TSMC's model becoming the industry standard that enabled the modern semiconductor ecosystem.

## Definition

The foundry business model refers to the pure-play semiconductor manufacturing approach where a company operates fabrication facilities exclusively to produce chips designed by external customers, without competing in chip design itself. This model fundamentally decouples the capital-intensive manufacturing function from the design and innovation function, allowing each to focus on its core competency. The prototype for this model, [[Semiconductor Industry Overview|TSMC]] (Taiwan Semiconductor Manufacturing Company), was founded in 1987 and demonstrated that dedicated foundries could achieve manufacturing excellence while remaining neutral to their customers' design philosophies. Under this model, customers submit chip designs (in GDSII format) to the foundry, which then handles all aspects of wafer fabrication, packaging, and testing, returning finished chips to the customer for system integration or sale.

The financial structure of foundries involves high fixed costs (fab construction, equipment depreciation, cleanroom maintenance) offset by the ability to spread these costs across many customers and product types. [[Semiconductor Industry Overview|ASML]]'s EUV lithography machines, costing over $200 million per unit, represent just one category of the enormous equipment investments required. The foundry's revenue comes from wafer processing fees, with pricing typically quoted per wafer at each process node, and additional revenue from advanced packaging services like CoWoS or InFO. Key competitive dimensions include process technology leadership (transistor density, power efficiency, performance), manufacturing yield and quality, delivery reliability, and customer service depth. The model has proven so successful that even traditional IDMs like Samsung and Intel have established foundry divisions to compete for external customers, though Samsung's foundry remains integrated with its consumer electronics division.

## Context and origin

The foundry model emerged from a strategic insight by TSMC's founder Morris Chang, who recognized that semiconductor companies in the 1980s were duplicating enormous capital investments in fabrication facilities while competing on design innovation. By creating a dedicated foundry that would never design its own chips, Chang offered chip designers a trusted manufacturing partner free from conflicts of interest. The model took time to gain traction—early customers were primarily small fabless companies without the capital to build their own fabs, and the model only achieved widespread acceptance after the success of companies like Qualcomm and later [[AI Chip Market Competition|NVIDIA]] demonstrated that fabless-foundry collaboration could produce world-class products. The rise of the PC industry in the 1990s accelerated adoption as Intel's dominance in microprocessors showed the value of focused manufacturing excellence.

The mobile computing era cemented the foundry model's dominance, as smartphone chips required both advanced process technology (for power efficiency) and rapid product iteration that favored the fabless-foundry partnership over integrated alternatives. [[Fabless vs IDM Comparison|Fabless companies]] like Qualcomm, MediaTek, and Apple (for its A-series and M-series chips) all relied on TSMC's manufacturing, creating an ecosystem where the foundry's capacity became a strategic asset allocation decision affecting the entire technology supply chain. The current AI computing wave has further elevated the foundry model's importance, as [[AI Accelerator Market Overview|AI accelerators]] from NVIDIA, AMD, and hyperscalers all compete for [[Semiconductor Industry Overview|TSMC's advanced node capacity]], turning foundry allocation into a competitive moat and potential bottleneck for industry growth.

## Mechanisms / characteristics / details

The foundry business model operates through a complex interplay of capacity planning, technology development, and customer relationship management. Capacity planning involves projecting customer demand years in advance given fab construction timelines of 18-24 months for basic facilities and 30-48 months for advanced nodes requiring EUV tools. Foundries must balance the risk of overbuilding (which creates underutilization and margin pressure) against underbuilding (which drives customers to competitors and loses market share). Technology development follows a disclosed roadmap—TSMC publicly commits to new process nodes every two years, requiring massive R&D expenditure ($15-20B annually for TSMC alone) to maintain density and efficiency improvements. The model enables [[EUV Lithography Systems|EUV adoption]] by aggregating demand across hundreds of chip designs, allowing ASML to amortize its development costs across the entire industry.

Manufacturing yield management represents a critical competitive differentiator, as the percentage of functional chips per wafer determines effective capacity and customer cost per good die. Foundries invest heavily in defect detection, process control, and yield learning systems, with the most advanced fabs achieving yields above 90% on mature nodes but typically lower on early-stage advanced nodes. Customer lock-in mechanisms include sophisticated design-for-manufacturing (DFM) tools that optimize designs for the foundry's specific process characteristics, multi-project wafers (MPW) that reduce prototyping costs, and close engineering collaboration that makes migrating designs to competing foundries expensive and time-consuming. The model's economics favor scale—larger foundries achieve better utilization, can spread R&D costs further, and can offer more process options—creating natural oligopolistic market structure.

## Nuances critiques limits

The foundry model's separation of design and manufacturing creates information asymmetry risks where foundries possess detailed knowledge of customer chip architectures, which could theoretically be leaked to competitors or appropriated for other customers. However, TSMC and other leading foundries maintain strict information barriers and cultural controls to mitigate these concerns, and no major incidents have materially damaged customer trust. The model's heavy geographic concentration—particularly in Taiwan—creates geopolitical vulnerabilities that could disrupt supply for customers with no alternative manufacturing venue at advanced nodes. Samsung Foundry and Intel Foundry Services represent alternatives, but neither currently matches TSMC's capacity, yield, or technology maturity at the leading edge.

The foundry model's capital intensity creates balance sheet strain during technology transitions when massive investments in new fabs must be made before revenue from new nodes materializes. TSMC's Arizona fabs face cost premiums of 30-50% compared to Taiwan fabs due to labor, materials, and construction costs, raising questions about whether overseas expansion remains economically viable without substantial government subsidies. The model also faces cyclical exposure—during semiconductor downturns, fab utilization drops sharply while fixed costs continue, creating margin compression that can last quarters. Finally, the foundry business faces potential disruption from [[Commoditization Risk Semiconductors|chiplet-based designs]] and heterogeneous integration that could shift value toward packaging and away from wafer fabrication, though TSMC is positioned to capture packaging value through its CoWoS and other advanced packaging services.

## Links and implications

The [[Semiconductor Industry Overview]] entry describes how the foundry model fundamentally restructured the semiconductor value chain, enabling the fabless ecosystem that produces most of today's chips. The [[Fabless vs IDM Comparison]] details how the model affects competitive dynamics between integrated and disaggregated structures, with the foundry serving as the critical disaggregation point. [[EUV Lithography Systems]] represent essential equipment for advanced foundry operations—without ASML's EUV machines, leading-edge foundry capacity simply cannot exist, making the foundry-ASML relationship a strategic dependency.

[[Semiconductor Equipment Makers]] like Applied Materials, Lam Research, and Tokyo Electron supply the deposition, etch, and cleaning equipment that enables foundry fabrication processes, making the equipment sector a critical upstream dependency for foundry operations. The [[AI Chip Market Competition]] intensifies foundry demand as hyperscalers (Google, Microsoft, Amazon, Meta) develop custom AI accelerators that compete for [[Semiconductor Industry Overview|TSMC's limited advanced packaging capacity]]. The foundry model's strategic importance means that foundry capacity allocation serves as a leading indicator for semiconductor industry demand—customers booking long-term capacity commitments signal confidence in future product demand that flows through to upstream equipment and materials suppliers.

## Sources
[^1]: TSMC Annual Report, "Foundry Business Model and Strategic Positioning," 2024.
[^2]: Counterpoint Research, "Global Foundry Market Analysis and Forecast," 2024.
[^3]: Applied Materials Technology Symposium, "Advanced Node Manufacturing Challenges," 2024.