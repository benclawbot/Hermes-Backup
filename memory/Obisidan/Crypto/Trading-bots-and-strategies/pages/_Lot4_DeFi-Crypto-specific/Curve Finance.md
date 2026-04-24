---
titre: "Curve Finance"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/curve, #concept/defi, #concept/stablecoin]
créé: 2026-04-21
liens_forts: ["[[Automated Market Makers (AMM)]]", "[[Stablecoin dynamics]]", "[[Liquidity pools]]", "[[Yield farming]]", "[[Decentralized exchanges (DEX)]]"]
liens_opposition: []
---

# Curve Finance

> [!info] Résumé
> Curve Finance est un AMM optimisé pour les actifs à valeur stable (stablecoins, assets correlés). Sa courbe de swap StableSwap offre un slippage quasi nul pour les échanges entre stablecoins, en faisant le protocole de référence pour le trading de stablecoins.

## Définition

Curve Finance est un Automated Market Maker spécialisé dans les échanges entre actifs de valeur égale, principalement stablecoins et assets wrapped. Le protocole utilise une courbe de prix différente de Uniswap, appelée StableSwap, qui combine les propriétés d'un AMM constant product avec celles d'un exchange à prix fixe.

La courbe StableSwap est plate au milieu (prix proche de 1:1) et ne s'incurve fortement qu'aux extrémités. Cela permet des échanges de grande ampleur entre stablecoins avec un slippage minimal. Par exemple, échanger 10 millions de USDC contre USDT sur Curve a un slippage de fractions de centime.

Curve prend en charge plusieurs "pools" contenant des tokens. Certains pools sont composés de deux tokens (like ETH/stETH), d'autres de plusieurs (like 3pool : USDC/USDT/DAI). Chaque pool a son propre algorithm et ses propres paramètres.

Le token CRV est le token de gouvernance du protocole. Les détenteurs peuvent stake leurs CRV pour voter sur les paramètres et les incentives de pools, ou pour earn une parte des frais de transaction.

## Contexte et origine

Curve Finance a été lancé en janvier 2020 par Michael Egorov, un ancien ingénieur de Network. Le protocole a été diseñado specifically pour résoudre le problème de slippage des échanges entre stablecoins sur les AMM traditionnels.

La même année, Curve a connu une croissance explosive quand il est devenu le protocole dominant pour les échanges de stablecoins. Sa TVL a atteint des dizaines de milliards de dollars, en faisant l'un des plus grands protocoles DeFi.

Curve est également devenu célèbre pour ses "veCRV" model (vote-escrowed CRV) où les détenteurs de CRV lock leurs tokens pour obtenir des droits de gouvernance et une part des fees. Ce modèle a inspiré d'autres protocoles.

## Mécanismes et caractéristiques

La courbe StableSwap combine x + y = k (constant sum) au milieu avec x × y = k (constant product) aux extrémités. Le résultat est une courbe qui ressemble à une ligne droite pour la plupart des échanges mais qui garantit de la liquidité même pour les gros montants.

Les pools peuvent être de différents types :
- Standard pools : deux tokens, frais variables
- Lending pools : comme Aave, où Curve utilise les dépôts pour generate des yields
- Factory pools : créés par quiconque via le factory contract

Les frais de transaction sur Curve sont généralement bas (0,04% pour les stablecoins pools). Cela est possible car le slippage est faible et que les volumes sont élevés.

Le système veCRV rewards les détenteurs de CRV qui lock leurs tokens. Plus la durée de lock est longue, plus le pouvoir de vote et les rewards sont élevés. Les veCRV reçoivent une parte des fees du protocole.

## Nuances, critiques, limites

Curve est moins adapté pour les actifs volatils. La StableSwap curve donne peu de slippage pour les stablecoins mais est inefficace pour les paires comme ETH/BTC qui ont des prix variables.

La gouvernance de Curve a été critiquée pour être dominée par quelques gros détenteurs de veCRV. Les "whales" peuvent influencer les incentives de pools pour leur propre benefit.

Les risques de smart contract restent présents. Curve a été audité de manière intensive mais aucun audit ne garantit une sécurité absolue.

## Liens et implications

[[Curve Finance]] est un [[Automated Market Makers (AMM)|AMM]] spécialisé pour les [[stablecoin dynamics|stablecoins]]. Les [[liquidity pools]] Curve sont optimisés pour les actifs égaux. Le [[yield farming]] sur Curve peut être très rentable.

Les [[Decentralized exchanges (DEX)]] intègrent souvent Curve pour les échanges de stablecoins. Le CRV est un [[governance tokens|token de gouvernance]] important. Les [[staking rewards]] sur Curve proviennent des frais de pool.

Le [[risk-reward ratio]] du Curve liquidity providing est généralement favorable pour les stablecoins. La [[volatility scaling]] ne s'applique pas aux stablecoins. Le [[backtesting]] montre des rendements stables pour les pools stablecoin.

## Sources

[^1]: Curve Finance Documentation, "Curve", https://curve.fi (consulted 2026)
[^2]: Egorov, "StableSwap Whitepaper", https://curve.fi (consulted 2026)
[^3]: Messari, "Curve Finance", https://messari.io (consulted 2026)
