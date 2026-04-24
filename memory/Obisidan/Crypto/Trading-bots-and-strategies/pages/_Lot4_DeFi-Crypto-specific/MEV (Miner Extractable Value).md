---
titre: "MEV (Miner Extractable Value)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/mev, #concept/defi, #concept/blockchain]
créé: 2026-04-21
liens_forts: ["[[Sandwich attacks]]", "[[Flash loans]]", "[[Arbitrage]]", "[[Gas optimization]]"]
liens_opposition: []
---

# MEV (Miner Extractable Value)

> [!info] Résumé
> La MEV (Miner Extractable Value, maintenant appelée Maximal Extractable Value) désigne la valeur qu'un validateur ou mineur peut extraire en réordonnant, incluant ou excluant des transactions dans les blocs qu'il produit. Ce phénomène a créé un écosystème de bots sophistiqués qui influencent les transactions sur Ethereum.

## Définition

La MEV est la valeur qu'un mineur (ou validateur dans le contexte PoS) peut extraire de la blockchain en manipulant l'ordre des transactions dans les blocs qu'il mine. Avant la fusion Ethereum, on parlait de "Miner Extractable Value"; après, le terme "Maximal Extractable Value" est devenu standard.

Les formes de MEV incluent :
- Frontrunning : placer une transaction avant celle d'un autre utilisateur
- Backrunning : placer une transaction juste après celle d'un autre
- Insertion : créer des transactions fictives pour manipuler les prix
- Timebandit attacks : réécrire l'histoire de la blockchain pour capturer la valeur

La MEV est devenue un phénomène majeur en DeFi car les bots peuvent observer le mempool (mémoire des transactions en attente), identifier des opportunités, et envoyer des transactions avec des frais plus élevés pour passer en premier.

Flashbots est une organisation qui a démocratisé l'accès à la MEV via son réseau MEV-Geth, permettant aux mineurs de partager la valeur extraite avec les utilisateurs qui soumettent des transactions.

## Contexte et origine

Le concept de MEV a été Formalisé par Phil Daian dans son article "Flash Boys 2.0" en 2019. Daian a montré que les mineurs pouvaient بالفعل extraire de la valeur en réordonnant les transactions, contredisant l'idée que les blockchains étaient équitables.

L'article a révélé l'ampleur du phénomène : sur une période de 30 jours, les chercheurs ont identifié plus de 12 millions de dollars de MEV extraite, principalement via des attaques de sandwich et des arbitrages.

Depuis, l'écosystème MEV s'est professionnalisé avec des sociétés comme Flashbots, Eden Network, et d'autres qui offrent des services de protection ou d'extraction de MEV. Le marché est devenu extremely compétitif.

## Mécanismes et caractéristiques

Les bots MEV scannent le mempool à la recherche de transactions profitables. Par exemple, si une transaction Swap importante est détectée qui achète beaucoup de ETH, le bot peut :
1. Acheter ETH juste avant (frontrunning)
2. Vendre ETH juste après (backrunning)

Le profit du bot est la différence entre ses prix d'achat et de vente, moins les frais de gaz. Cette pratique est highly controversial car elle exploitation la information privée de la victime.

Les miners/validators receives les frais de gaz des transactions MEV. Sur Ethereum post-fusion, les validateurs reçoivent également desMEV rewards via des protocoles comme MEV-Boost.

Les protectors MEV comme Flashbots Protect offrent un service qui soumet les transactions via Flashbots, les protégeant du frontrunning. Cependant, cela introduce une forme de centralisation.

## Nuances, critiques, limites

La MEV est considerée comme un problème car elle :
- Permet l'exploitation des utilisateurs
- Crée une lottery où les bots rivalisent pour être premiers
- Peut destabiliser les protocoles DeFi
- Introduit une tension centralisatrice

Les défenseurs argumentent que la MEV est inevitable et que les marchés preemptiotics de la blockchain. D'autres soutiennent qu'elle devrait être éliminée par des protocoles comme SUAVE qui séparent le sequencing de l'exécution.

La concentration du poder de sequencing est un risque. Si quelques entities controllent le sequencing, elles peuvent censor des transactions ou extract plus de valeur des utilisateurs.

## Liens et implications

La [[MEV (Miner Extractable Value)]] est étroitement liée aux [[sandwich attacks]] qui en sont une forme. Les [[flash loans]] sont souvent utilisés pour amplifier les attaques MEV. L'[[arbitrage]] est une forme de MEV considered moins harmful.

La [[gas optimization]] est critique pour les stratégies MEV. Les [[Decentralized exchanges (DEX)]] Uniswap sont les cibles principales. Les [[sandwich attacks]] sont une conséquence directe de la MEV sur les AMM.

Le [[risk-reward ratio]] des stratégies MEV est très biaisé vers quelques acteurs sophistiqués. Le [[backtesting]] des stratégies MEV est difficile car elles Dependent de l'ordering. La [[latence et exécution]] est cruciale.

## Sources

[^1]: Daian et al., "Flash Boys 2.0", https://arxiv.org (2020)
[^2]: Flashbots, "MEV in Ethereum", https://docs.flashbots.net (consulted 2026)
[^3]: Ethereum Foundation, "MEV", https://ethereum.org (consulted 2026)
