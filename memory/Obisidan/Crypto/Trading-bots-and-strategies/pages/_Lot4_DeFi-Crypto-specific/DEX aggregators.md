---
titre: "DEX aggregators"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/dex-aggregator, #concept/defi, #concept/routing]
créé: 2026-04-21
liens_forts: ["[[Decentralized exchanges (DEX)]]", "[[Slippage]]", "[[Price impact]]", "[[Arbitrage]]", "[[Automated Market Makers (AMM)]]"]
liens_opposition: []
---

# DEX aggregators

> [!info] Résumé
> Les DEX aggregators sont des protocoles qui regroupent la liquidité de plusieurs exchanges décentralisés pour trouver les meilleurs prix d'exécution. Ces outils optimisent les routes de trading et réduisent le slippage pour les utilisateurs.

## Définition

Un DEX aggregator est un protocole ou service qui collecte les liquidités de múltiples DEX pour exécuter les échanges au meilleur prix possible. Au lieu de passer par un seul AMM, l'aggregator divise la transaction entre plusieurs protocoles pourMinimiser le slippage et optimiser l'exécution.

Les aggregators fonctionnent en scannant les prix sur tous les DEX intégrés, calculant la route optimale, et exécutant la transaction. Cette operation peut impliquer plusieurs steps : par exemple, swap ETH vers USDC sur Uniswap, puis USDC vers DAI sur Curve, si cette route est plus efficace qu'un swap direct.

Les principaux aggregators incluent 1inch, Paraswap, Matcha, et Li.Fi. Chacun a ses propres algorithmes de routage et ses propres DEX intégrés. Certains offrent également des fonctionnalités additionnelles comme le split entre plusieurs routes.

L'avantage principal pour les traders est la reduction du slippage. Pour une transaction importante, obtenir le meilleur prix à travers plusieurs DEX peut représenter une économie significative par rapport à l'utilisation d'un seul pool.

## Contexte et origine

Le besoin d'aggregators est né de la fragmentation de la liquidité en DeFi. Avec des dizaines de DEX sur Ethereum et encore plus sur les autres chaînes, aucun exchange unique ne peut offrir les meilleurs prix pour toutes les transactions.

1inch a été l'un des premiers aggregators, lançant son protocole en 2020. Il a popularisé le concept de "Pathfinder" qui trouve les routes de trading optimales à travers múltiples DEX et pools.

Paraswap a suivi avec son propre agregateur, mettant l'accent sur l'expérience utilisateur et les prix compétitifs. D'autres projets comme Matcha (consortium de 0x) et 1inch Network ont contribué à l'écosystème.

L'évolution a conduit à des aggregateurs cross-chain comme Li.Fi qui peuvent trouver les meilleurs prix à travers différentes blockchains, utilisant des bridges quand nécessaire.

## Mécanismes et caractéristiques

Le fonctionnement d'un DEX aggregator impliqueplusieurs étapes :

1. Scan des prix : L'aggregator interroge les prix de tous les DEX intégrés pour une paire donnée
2. Calcul de route : Un algorithme détermine la distribution optimale de la transaction
3. Exécution : La transaction est exécutée via les routes multiples
4. Settlement : Les fonds sont agrégés et remis à l'utilisateur

Les algorithmes de routage doivent considérer :
- Les prix sur chaque DEX
- Le slippage estimé sur chaque pool
- Les frais de gaz pour chaque route
- La liquidité disponible sur chaque pool
- Les potentiel conflicts entre steps de la route

Les gas tokens sont souvent intégrés dans les calculs. Une route avec le meilleur prix net mais des frais de gaz élevés peut être moins intéressante qu'une route légèrement moins bonne mais plus économe en gaz.

## Nuances, critiques, limites

La complexité des aggregators peut créer des problèmes de UX. Les utilisateurs ne comprennent pas toujours comment le routing fonctionne et doivent faire confiance à l'algorithme. Les intermediaires comme les bridges cross-chain Introduisent des risques supplémentaires.

Les attaques de sandwich sont toujours possibles même avec un aggregator. L'aggregator lui-même peut être exploité si les bots ont accès à l'information sur les routes avant l'exécution. Certaines protocoles mettent en place des mesures de protection.

La dépendance aux DEX sous-jacents signifie que si un DEX a un bug, l'aggregator peut exécuter des transactions sur ce protocole et subir des pertes. La due diligence sur les intégrations est importante.

## Liens et implications

Les [[DEX aggregators]] s'appuient sur les [[Decentralized exchanges (DEX)]] comme source de liquidité. Ils optimisent les [[Slippage]] et [[price impact]] pour les utilisateurs. L'[[arbitrage]] devient plus efficace grâce aux aggregators.

Le [[market making]] est impacté par les aggregators car ils redistribuent la liquidité. Les [[flash loans]] peuvent être utilisés pour optimiser l'exécution. Les [[cross-chain bridges]] sont intégrés par les aggregators cross-chain.

Les [[API d'échange]] sont utilisées par les aggregators pour accéder aux prix. Le [[backtesting]] de stratégies d'aggregation requiert des données détaillées. La [[gas optimization]] est critique pour rentabiliser les routes complexes.

## Sources

[^1]: 1inch Documentation, "Aggregation Protocol", https://docs.1inch.io (consulted 2026)
[^2]: Paraswap Documentation, "How Paraswap Works", https://docs.paraswap.io (consulted 2026)
[^3]: Binance Academy, "DEX Aggregators", https://academy.binance.com (consulted 2026)
