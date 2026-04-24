---
titre: "Impermanent loss"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: web-checked
sources_count: 4
tags: [#concept/impermanent-loss, #concept/defi, #concept/risk]
créé: 2026-04-21
liens_forts: ["[[Liquidity pools]]", "[[Automated Market Makers (AMM)]]", "[[Yield farming]]", "[[Staking rewards]]", "[[Risk-reward ratio]]"]
liens_opposition: ["[[HODLing]]"]
---

# Impermanent loss

> [!info] Résumé
> L'impermanent loss est la différence de valeur entre les tokens déposés dans un liquidity pool et les mêmes tokens conservés en wallet. Cette perte survient quand les prix des tokens dans le pool divergent, et elle devient permanente lors du retrait des fonds.

## Définition

L'impermanent loss (perte impermanente) est un phénomène inhérent aux Automated Market Makers qui survient quand le prix des tokens déposés dans un liquidity pool change par rapport au prix au moment du dépôt. Le liquidity provider se retrouve avec une valeur inférieure à celle qu'il aurait eue en simplemente conservant ses tokens (HODLing).

Le mécanisme peut être illustré simplement. Un LP dépose 1 ETH et 2000 USDC dans un pool Uniswap (ratio 50/50 en valeur). Si ETH passe à 4000 USDC, le pool s'ajuste à environ 0,707 ETH et 2828 USDC. La valeur totale est 2828 + 0,707×4000 = 2828 + 2828 = 5656 USDC. Mais en HODLing, la valeur aurait été 1×4000 + 2000 = 6000 USDC. La perte impermanente est donc 6000 - 5656 = 344 USDC.

Le terme "impermanent" vient du fait que si les prix retournent à leur valeur initiale, la perte s'annule. Cependant, en pratique, les prix continuent généralement de évoluer et la perte devient souvent permanente quand le LP décide de retirer ses fonds.

La perte est exprimée en pourcentage de la valeur de référence HODL. Pour une divergence de prix de facteur 4 (prix multiplié par 4), la perte est d'environ 25%. Pour un facteur 2, la perte est d'environ 5,7%. Cette relation est indépendante du temps et ne dépend que du ratio de prix final.

## Contexte et origine

Le concept a été Formalisé par les chercheurs d'Impereal College en 2020 dans leur article "Impermanent Loss in Uniswap Markets". Cependant, le phénomène était connu des premiers utilisateurs d'Uniswap qui constataient que leurs positions valaient moins que prévu après des mouvements de prix importants.

L'origine remonte aux proprietés mathématiques des AMM. La formule x × y = k garantit que le pool maintient un équilibre perpétuel, mais cet équilibre est atteint en faisant varier les quantités de tokens plutôt qu'en maintenant un prix fixe. Les arbitragistes profitent de cette différence, ce qui bénéficie aux traders mais coûte aux LPs.

En 2020-2021, pendant la fièvre du yield farming, muchos thérapeutor ont subi des pertes impermanentes massives sans comprendre le mécanisme. Des projects comme Yearn Finance ont tenté de développer des stratégies pourMinimiser cette perte, mais le problème fondamental demeure.

## Mécanismes et caractéristiques

La formule de l'impermanent loss pour un ratio de prix final de r (où r = prix_final / prix_initial) est :

IL = 2 × sqrt(r) / (1 + r) - 1

Cette formule donne un résultat négatif représentant le pourcentage de perte par rapport au HODL. Pour r = 1 (pas de changement), IL = 0. Pour r = 4, IL = -25%. Pour r = 0,25 (prix divisé par 4), IL = -25%.

Les facteurs qui influencent l'impermanent loss incluent :
- L'amplitude du changement de prix entre les deux tokens
- La volatilité du paire de tokens
- Le temps passé dans le pool
- Les fees générés qui compensent partiellement la perte

Les revenus de fees peuvent compenser l'impermanent loss dans certains cas. Si les frais de transaction sont suffisamment élevés et le pool très actif, le LP peut gagner plus en fees que ce qu'il perd en impermanent loss. C'est pourquoi les pools avec des volumes élevés (comme ETH/USDC sur Uniswap) peuvent être rentables malgré la volatilité.

## Nuances, critiques, limites

L'impermanent loss est souvent mal compris ou sous-estimé par les nouveaux liquidity providers. Les communications marketing des protocoles mettent rarement l'accent sur ce risque, préférant mettre en avant les APY élevés. Les utilisateurs doivent faire leurs propres calculs avant de fournir des liquidités.

Le terme "impermanent" est Fallacieux car dans la réalité, peu de prix retournent exactement à leur valeur initiale. Même si le prix "revient", les frais de gaz pour entrer et sortir du pool, plus le slippage, font que la perte devient généralement permanente. C'est pourquoi certains préfèrent parler de "divergence loss".

Les pools de stablecoins ou d'actifs corrélés ont une impermanent loss quasi nulle car les prix restent proches. Curve Finance a Optimisé ses courbes pour ces actifs, ce qui explique son succès dans le sector des stablecoins. Cependant, ces pools offrent aussi des rendements plus modestes.

Les stratégies de "[[yield farming]]" qui impliquent de déplacer fréquemment des liquidités entre plusieurs pools amplifient l'exposition à l'impermanent loss. Chaque changement de pool "crystalise" potentiellement une perte impermanente accumulée. Les [[liquidity incentives]] des protocoles sont conçues pour compenser ce risque.

## Liens et implications

L'[[impermanent loss]] est intrinsèquement lié aux [[liquidity pools]] des [[Automated Market Makers (AMM)]]. Les stratégies de [[yield farming]] subissent ce risque quand elles changem de pool. Le [[risk-reward ratio]] doit inclure l'impermanent loss pour être complet.

Les [[staking rewards]] peuvent compenser partiellement l'impermanent loss dans certains cas. Les [[liquidity incentives]] des protocoles sont souvent structurées pour cover ce risque. Les stratégies de "[[DEX market making]]" doivent intégrer ce facteur.

L'[[arbitrage]] qui se produit sur les pools AMM est en partie responsable de l'impermanent loss car les arbitragistes ramènent les prix à l'équilibre. Les [[flash loans]] sont souvent utilisés pour ces opérations d'arbitrage. La [[volatility scaling]] peut aider à gérer ce risque.

## Sources

[^1]: Angeris et al., "Analysis of Uniswap Markets", Stanford University (2020)
[^2]: Uniswap Documentation, "Understanding Impermanent Loss", https://docs.uniswap.org (consulted 2026)
[^3]: Curve Finance Research, "Stablecoin AMMs", https://curve.fi (consulted 2026)
[^4]: Binance Academy, "Impermanent Loss Explained", https://academy.binance.com (consulted 2026)
