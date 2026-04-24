---
titre: "Balancer"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#concept/balancer, #concept/defi, #concept/amm]
créé: 2026-04-21
liens_forts: ["[[Automated Market Makers (AMM)]]", "[[Liquidity pools]]", "[[Yield farming]]", "[[Decentralized exchanges (DEX)]]", "[[Uniswap v2 mechanics]]"]
liens_opposition: []
---

# Balancer

> [!info] Résumé
> Balancer est un AMM décentralisé permettant des pools de liquidité avec jusqu'à 8 tokens et des ratios personnalisables. Cette flexibilité permet de créer des pools indiciels et des stratégies de Rebalancing automatisées.

## Définition

Balancer est un protocole AMM construit sur Ethereum qui permet de créer des pools de liquidité avec jusqu'à 8 tokens différents dans des proportions personnalisées. Contrairement à Uniswap où les pools sont toujours 50/50, Balancer permet n'importe quel ratio.

Par exemple, un pool Balancer pourrait contenir 60% ETH, 30% USDC, et 10% DAI. Les liquidity providers qui déposent dans ce pool reçoivent des BAL tokens (le token de gouvernance) en plus des frais de transaction.

Le protocole utilise une généralisation de la formule x^n × y^m = k pour le pricing. Pour un pool 50/50, cela simplifie en x × y = k (comme Uniswap). Pour d'autres ratios, les exposants s'ajustent.

Balancer permet également de créer des "smart pools" avec des paramètres adjustables par le propriétaire. Ces pools peuvent avoir des fonctionnalités like le rebalancing automatique ou des frais dynamics.

Le token BAL est le token de gouvernance du protocole. Les détenteurs peuvent voter sur les propositions d'amélioration et reçoivent une parte des fees du protocole.

## Contexte et origine

Balancer a été fondé en 2020 par Fernando Martinelli et Mike McDonald, lanceant le protocole en mai de la même année. L'objectif était de permettre la création de portfolios personnalisés sous forme de pools de liquidité.

L'innovation clé était de permettre à n'importe qui de créer un pool avec n'importe quel nombre de tokens et n'importe quel ratio. Cela contrastait avec les AMM précédents qui ne supportaient que des paires 50/50.

Balancer a également introduit le concept de "liquidity bootstrapping" (LBP) pour launch de nouveaux tokens. Un LBP commence avec un prix élevé et diminue progressivement, permettant une découverte de prix équitable.

## Mécanismes et caractéristiques

Les pools Balancer peuvent avoir des configurations très variées :
- Pool pondéré : ratios fixes définis à la création (ex: 80/20)
- Smart Pool : paramètres ajustables par un owner
- Liquidity Bootstrapping Pool : pour launch de tokens

Le système de frais de Balancer est flexible. Chaque pool définit ses propres frais (typiquement 0,01% à 1%). Les pools avec des actifs plus volatils ont tendance à avoir des frais plus élevés.

Les pools de Balancer attirent des stratégies de rebalancing. Un utilisateur peut deposit un portfolio 60/40 ETH/BTC et earn des frais de swap en plus du rebalancing automatique.

Les risques pour les LPs :
- Impermanent loss dans les pools non-50/50
- Risque de smart contract
- Risque de pool creator (si malicious pool)

## Nuances, critiques, limites

L'impermanent loss dans les pools pondérés (comme 80/20) peut être différent de celui des pools 50/50. Les calculs sont plus complexes et les LPs doivent bien comprendre le risque.

La flexibility de Balancer peut créer de la confusion pour les utilisateurs. Avec des milliers de pools différents, trouver le meilleur prix nécessite des aggregators ou une recherche approfondie.

Les smart pools introduisent un risque supplémentaire : le owner du pool peut modify les paramètres de manière défavorable pour les LPs. Les LPs doivent audit the pool owner avant de deposit.

## Liens et implications

[[Balancer]] est un concurrent des [[Automated Market Makers (AMM)|AMM]] comme [[Uniswap v2 mechanics|Uniswap]]. Les [[liquidity pools]] Balancer ont des configurations flexibles. Le [[yield farming]] sur Balancer reward les LPs avec des tokens BAL.

Les [[Decentralized exchanges (DEX)]] incluent Balancer comme source de liquidité. Les [[flash loans]] sont disponibles sur Balancer. Le [[governance tokens|BAL]] est le token de gouvernance.

Le [[risk-reward ratio]] des pools Balancer doit inclure l'impermanent loss spécifique au pool. Le [[backtesting]] de stratégies Balancer nécessite de comprendre la formule de pricing. La [[gas optimization]] est importante pour les transactions.

## Sources

[^1]: Balancer Documentation, "Balancer", https://docs.balancer.fi (consulted 2026)
[^2]: Martinelli, "Balancer Whitepaper", https://balancer.fi (consulted 2026)
[^3]: DeFi Llama, "Balancer TVL", https://defillama.com (consulted 2026)
