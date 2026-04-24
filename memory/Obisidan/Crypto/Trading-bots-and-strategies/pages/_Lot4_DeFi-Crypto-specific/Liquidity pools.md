---
titre: "Liquidity pools"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/liquidity-pool, #concept/defi, #concept/amm]
créé: 2026-04-21
liens_forts: ["[[Automated Market Makers (AMM)]]", "[[Decentralized exchanges (DEX)]]", "[[Impermanent loss]]", "[[Yield farming]]", "[[Liquidity incentives]]"]
liens_opposition: ["[[Central limit order book (CLOB)]]"]
---

# Liquidity pools

> [!info] Résumé
> Les liquidity pools sont des réserves de tokens déposés par des utilisateurs dans des smart contracts, servant de backbone aux Automated Market Makers. Ces pools permettent des échanges automatiques sans order book traditionnel et rémunèrent les fournisseurs de liquidité avec une part des frais de transaction.

## Définition

Un liquidity pool est un smart contract contenant des fonds déposés par des liquidity providers (LP). Ces fonds sont utilisés pour exécuter des échanges entre tokens sur un Automated Market Maker. Chaque pool contient généralement une paire de tokens (par exemple ETH et USDC), dont les proportions relatives déterminent le prix d'échange selon une formule mathématique.

Le mécanisme fonctionne comme suit : quand un trader échange des tokens, le smart contract calcule le prix selon la formule du protocole (par exemple x × y = k pour Uniswap), ajuste les quantités de tokens dans le pool, et crédite le trader. Les frais de transaction (typiquement 0,3%) sont ajoutés au pool, augmentant la valeur totale et bénéficiant aux LPs.

Les parts de pool (LP tokens) représentent la proportion du pool détenue par chaque liquidity provider. Ces tokens sont mintés lors du dépôt et brûlés lors du retrait. Ils peuvent parfois être utilisés dans d'autres protocoles DeFi pour générer des rendements supplémentaires (yield stacking).

La liquidité d'un pool est mesurée par la valeur totale verrouillée (TVL). Plus le TVL est élevé, plus le pool peut absorber des transactions importantes avec un slippage faible. Les pools avec faible liquidité sont vulnérables au slippage élevé et aux attaques de manipulation de prix.

## Contexte et origine

Le concept de liquidity pool a été popularisé par Uniswap en 2018, mais l'origine remonte aux travaux de MarioRL et aux discussions sur les forum Ethereum sur les "bonding curves" et les "autonomous market makers". Vitalik Buterin avait décrit le concept dans un post de blog de 2017 sur les " decentralized exchange".

Avant les AMM, les tentatives d'échanges décentralisés utilisaient des order books on-chain, ce qui était prohibitif en frais de gaz et lent. Les liquidity pools ont résoudre ce problème en consolidant la liquidité dans des smart contracts simples et économes en gas.

Curve Finance a innové en 2020 avec le StableSwap, un AMM optimisé pour les stablecoins qui maintient des prix proches de la parité en utilisant une courbe différente. Cela a permis des échanges entre stablecoins avec un slippage quasi nul, révolutionnant le sector.

Balancer a étendu le concept en permettant des pools avec jusqu'à 8 tokens et des ratios de liquidité personnalisables (pas nécessairement 50/50). Cette flexibilité a ouvert la porte à des stratégies de arbitrage complexes et des pools indiciels.

## Mécanismes et caractéristiques

Le pricing dans un pool AMM repose sur une fonction mathématique. Le constant product (x × y = k) crée une hyperbole qui assure de la liquidité infinie mais avec un slippage croissant. Les pools stablecoin utilisent des courbes plus plates près de la parité pour réduire le slippage.

Quand un LP dépose des tokens dans un pool, il reçoit des LP tokens proportionnels à sa contribution. Si le pool contient 100 ETH et 200 000 USDC (ratio 1:2000), et qu'unLP dépose 1 ETH et 2000 USDC, il reçoit 1% des LP tokens. Les frais de transaction sont répartis proportionnellement.

L'impermanent loss survient quand le prix des tokens dans le pool change par rapport au prix extérieur. Si ETH passe de 2000 à 4000 USDC, le pool s'ajuste à 0,707 ETH et 1414 USDC par part (au lieu de 1 ETH et 4000 USDC si HODL). La perte est "impermanente" car elle se matérialise seulement au retrait.

Les fees de swap sont le revenu principal des LPs. Avec 0,3% par échange et un volume suffisant, les revenus de fees peuvent compenser l'impermanent loss et générer un rendement net positif. Les pools avec des volumes élevés et une faible volatilité sont généralement plus rentables pour les LPs.

## Nuances, critiques, limites

Le risque de smart contract est omniprésent. Même les protocoles les plus audités peuvent contenir des bugs qui résultent en perte de fonds. Les utilisateurs doivent évaluer la réputation du protocole, les audits de sécurité, et le montant total verrouillé avant de s'engager.

La perte impermanente reste un risque majeur mal compris par muchos propietarios. Les documents marketing des protocoles mettent souvent en avant les rendements élevés sans mentionner explicitement ce risque. Une analyse approfondie de l'impermanent loss attendu est nécessaire.

La guerre des rendements (yield war) a conduit à des incitations inflationnistes insoutenables. Les protocoles offrent des tokens de gouvernance avec des récompenses élevées pour attirer la liquidité, mais ces récompenses diminuent quand les émissions de tokens ralentissent. Les LPs peuvent se retrouver avec des tokens sans valeur.

## Liens et implications

Les [[liquidity pools]] sont le mécanisme central des [[Automated Market Makers (AMM)]]. Les [[Decentralized exchanges (DEX)]] dépendent entièrement de ces pools pour exécuter les échanges. Le [[yield farming]] utilise les pools comme source principale de rendements.

L'[[impermanent loss]] est intrinsèquement lié aux pools et doit être considéré par tout liquidity provider. Les [[liquidity incentives]] des protocoles attirent les LPs avec des récompenses supplémentaires. Le [[staking rewards]] peut être stacké avec les revenus des pools.

Les [[cross-chain bridges]] permettent aux pools d'exister sur différentes chaînes. Le [[market making]] sur pools AMM est une stratégie différente du market making traditionnel. Les [[flash loans]] utilisent les pools comme source de liquidité temporaire.

## Sources

[^1]: Uniswap Documentation, "Understanding Liquidity", https://docs.uniswap.org (consulted 2026)
[^2]: Curve Finance, "StableSwap Whitepaper", https://curve.fi (consulted 2026)
[^3]: Balancer Documentation, "Balancer Pools", https://balancer.fi (consulted 2026)
