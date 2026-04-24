---
titre: "DEX market making"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/dex-market-making, #concept/defi, #concept/market-making]
créé: 2026-04-21
liens_forts: ["[[Market making]]", "[[Automated Market Makers (AMM)]]", "[[Liquidity pools]]", "[[Impermanent loss]]", "[[Yield farming]]"]
liens_opposition: []
---

# DEX market making

> [!info] Résumé
> Le market making sur DEX diffère fondamentalement du market making traditionnel sur order books. Les liquidity providers déposent des tokens dans des pools et gagnent des frais de transaction, mais sont exposés à l'impermanent loss et aux risques de DeFi.

## Définition

Le market making sur DEX (Automated Market Makers) est le processus par lequel les liquidity providers (LPs) déposent des tokens dans des pools de liquidité pour faciliter les échanges et gagner des frais. Contrairement au market making traditionnel où les market makers placent des orders dans un order book, les AMM LPs acceptent passivement le pricing algorithmique.

Le processus fonctionne ainsi :
1. Le LP dépose des montants égaux de deux tokens dans un pool (ex: ETH et USDC)
2. Le pool utilise une formule mathématique pour pricing les échanges
3. Les traders paient des frais (typiquement 0,3%) qui sont distribués aux LPs
4. Le LP reçoit des tokens de pool (LP tokens) représentant sa share

Les revenus du LP viennent de deux sources :
- Frais de transaction : partagés proportionnellement à la part du pool
- Incentives de tokens : parfois distribués par le protocole pour attirer la liquidité

Les risques incluent l'impermanent loss, le risque de smart contract, et le risque de tokens.

## Contexte et origine

Le market making sur DEX a été popularisé par Uniswap en 2018. L'innovation était de permettre à n'importe qui de devenir market maker sans avoir à maintenir un order book ou gérer des orders passifs.

Avant les AMM, le market making on-chain était extremely difficile en raison des coûts de gaz et de la latence. Les AMM ont résolu ce problème avec un mechanism de pricing automatique qui ne nécessite pas d'orders actifs.

Curve Finance a innové en 2020 avec des AMM optimisés pour les stablecoins, offrant des spreads plus faibles et moins d'impermanent loss. Cela a élargi l'éventail des stratégies de market making sur DEX.

## Mécanismes et caractéristiques

Les stratégies de DEX market making :

Market making neutre : le LP dépose deux actifs corrélés (ex: ETH et stETH) pour Minimiser l'impermanent loss. Les frais générés doivent compenser les pertes résiduelles.

Market making directional : le LP dépose un actif volatile et un stablecoin. Le LP prend un risque directional sur la volatile mais évite les pertes de change.

Concentrated liquidity (Uniswap v3) : le LP concentre sa liquidité sur une plage de prix spécifique, augmentant les frais mais aussi l'impermanent loss.

Les calculs importants :

Rendement du pool = (Frais générés) / (Valeur du pool)

Impermanent loss = f(différence de prix) selon la formule IL = 2√r/(1+r) - 1

Net APY = Rendement des frais - Impermanent loss + Incentives

## Nuances, critiques, limites

L'impermanent loss est le principal risque du DEX market making. Pour des actifs volatils, la perte peut être significative. Les LPs doivent comprendre ce risque et le quantifier avant de deposit.

La sélection des pools est cruciale. Les pools avec beaucoup de volume et peu de LPs ont tendance à être plus rentables. Les pools avec beaucoup de LPs mais peu de volume génèrent peu de frais.

Le risque de smart contract est omniprésent. Même les protocoles les plus audités peuvent avoir des bugs. Les LPs devraient diversify entre plusieurs protocoles.

## Liens et implications

Le [[DEX market making]] est une forme de [[market making]] adaptée aux AMM. Les [[liquidity pools]] sont le mécanisme opérationnel. Les [[Automated Market Makers (AMM)]] définissent le pricing algorithmique.

L'[[impermanent loss]] est le risque principal. Le [[yield farming]] peut être considéré comme une extension du market making avec des incentives supplémentaires. Les [[liquidity incentives]] attirent les LPs.

Le [[risk-reward ratio]] doit inclure l'impermanent loss. Le [[backtesting]] de stratégies de market making DEX est complexe. La [[volatility scaling]] affecte directement l'impermanent loss.

## Sources

[^1]: Uniswap Documentation, "Providing Liquidity", https://docs.uniswap.org (consulted 2026)
[^2]: Curve Finance, "Market Making on Curve", https://curve.fi (consulted 2026)
[^3]: Impermanent Loss Calculator, https://www.impermanentlosscalculator.com (consulted 2026)
