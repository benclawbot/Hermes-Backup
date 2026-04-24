---
titre: "Arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/arbitrage, #concept/pricing, #concept/efficiency]
créé: 2026-04-20
liens_forts: ["[[Market making]]", "[[Cross-exchange arbitrage]]", "[[DeFi arbitrage]]"]
liens_opposition: ["[[Efficient Market Hypothesis]]"]
---

# Arbitrage

> [!info] Résumé
> L'arbitrage exploite les différences de prix entre marchés ou instruments pour générer des profits sans risque directionnel. La nature 24/7 du crypto et la fragmentation des exchanges créent des opportunités mais la concurrence rapidement les marges.

## Définition

L'arbitrage est l'achat simultané d'un actif sur un marché où il est bon marché et la vente sur un marché où il est plus cher. La différence de prix est le profit, à condition que l'exécution soit assez rapide pour capturer l'opportunité avant qu'elle ne disparaisse.

En théorie, l'arbitrage est sans risque : l'actif est acheté et vendu presque simultanément, eliminate le risque de mouvement de prix pendant l'attente. En pratique, des risques existent : slippage, délais d'exécution,Variation des frais, et counterparty risk.

Les types principaux en crypto incluent :
- **Cross-exchange arbitrage** : prix BTC différent entre Binance et Coinbase
- **Triangular arbitrage** : profits via trois paires sur le même exchange (BTC→ETH→USDT→BTC)
- **DeFi arbitrage** : différences de prix entre DEX et exchanges centralisés, ou entre protocoles DeFi
- **Funding rate arbitrage** : exploiter les taux de funding permanents sur les marchés Futures vs spot

## Contexte et origine

L'arbitrage existe depuis les marchés financiers medieval. Les marchands profitaient des différences de prix entre villes pour des biens physiques. La finance moderne a institutionalisé la pratique avec des systèmes informatiques qui repèrent les opportunités en milliseconds.

En crypto, l'arbitrage a été particulièrement profitable dans les premières années (2014-2017) quand les échanges étaient fragmentés et la liquidité low. Les traders qui ont built des systèmes d'arbitrage automation ont généré des profits significatifs avant que la concurrence ne compresse les marges.

L'émergence du DeFi (2020-2022) a créé de nouvelles opportunités d'arbitrage entre les DEX (Decentralized Exchanges) et les CEX (Centralized Exchanges), ou entre différents protocoles DeFi. Les attaques de "sandwich" sur Ethereum sont une forme d'arbitrage contentious.

## Mécanismes et caractéristiques

Le cross-exchange arbitrage surveille les prix sur multiples exchanges simultanément via API. Quand une différence excède les frais de transaction (fees + slippage), le bot achète sur l'exchange moins cher et vend sur le plus cher. La fenêtre d'opportunité peut être quelques secondes à quelques minutes.

Le triangular arbitrage exploite les anomalies entre trois paires sur un même exchange. Par exemple : si BTC/USD est légèrement haut, ETH/USD est légèrement bas, et BTC/ETH est mal precio, une série de trades peut générer un profit. Les bots scannent ces écarts en temps réel.

Le funding rate arbitrage est populaire sur les marchés crypto avec des contracts perpétuels. Le funding rate est positif quand les longs paient les shorts (prix FUTURES > spot). Si le funding est suffisamment haut, shorthunter achète le spot et short les perpétuels pour capturer le funding net. Le risque est que le funding rate change.

Le DeFi arbitrage utilise des strategies like "flash loans" qui permettent d'emprunter des sommes massives sans collateral pour une transaction, exploitant des inefficiencies entre protocoles. Si le prix d'un token sur Uniswap diffère de celui sur SushiSwap, le bot achète sur le moins cher et vend sur le plus cher en une transaction atomique.

## Nuances, critiques, limites

L'arbitrage "sans risque" en pratique a des risques réels. Le slippage peut eliminate le profit si l'ordre n'est pas exécuté au prix attendu. Les frais sont often sous-estimés (withdrawal fees, deposit fees, trading fees). La volatilité crypto peut faire bouger les prix pendant l'exécution.

Le risque de counterparty reste même avec des executes atomiques. Sur un CEX, le exchange peut freezer les fonds ou être hacked. Sur DeFi, les smart contracts peuvent avoir des bugs. L'arbitrage sur des small caps avec low liquidity est particulièrement risques.

La concurrence a comprimido les marges. Quand une opportunité d'arbitrage est repérée, des centaines de bots se lancent simultanément, eatinant l'écart de prix. Les opportunities persistents only sur des marchés moins efficients ou avec des barriers à l'entrée (capital, infrastructure).

L' Efficient Market Hypothesis suggère que les opportunités d'arbitrage sont rapidement éliminées par les acteurs du marché, resulting in prix alignés across exchanges. En pratique, les inefficiences persistent longer in crypto due à la fragmentation, les regulatory differences, et les barriers techniques.

## Liens et implications

L'[[arbitrage]] dépend du [[market making]] pour fournir les prix que les arbitragistes comparent. Sans market makers qui maintiennent des prix sur chaque exchange, les écarts ne pourraient pas être exploités.

Le [[DeFi arbitrage]] est une sous-catégorie liée à l'écosystème decentralized finance. Le [[cross-exchange arbitrage]] est la forme la plus directe entre exchanges centralisés.

L'[[arbitrage crypto est-il sans risque ?]] est une question debatue car les risques sont souvent sous-estimés par les participants. Le [[flash crash]] peut créer des opportunités d'arbitrage mais aussi des risques massifs si les positions sont fermées avec slippage.

## Sources

[^1]: Investopedia, "Arbitrage", https://www.investopedia.com/terms/a/arbitrage.asp (consulted 2026)
[^2]: Vitalik Buterin, "Why on-chain settlement finality depends on your threat model", https://vitalik.ca (consulted 2026)