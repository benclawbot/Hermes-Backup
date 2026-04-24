---
titre: "Flash loans"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/flash-loans, #concept/defi, #concept/borrowing]
créé: 2026-04-21
liens_forts: ["[[DeFi lending protocols]]", "[[Arbitrage]]", "[[Automated Market Makers (AMM)]]", "[[Sandwich attacks]]", "[[Aave]]"]
liens_opposition: []
---

# Flash loans

> [!info] Résumé
> Les flash loans sont des prêts de cryptomonnaies sans collateral, réalisés dans une seule transaction blockchain. Ces prêts sont possibles grâce à l'atomicité des transactions smart contract : si le prêt n'est pas remboursé dans la même transaction, toute l'opération est annulée.

## Définition

Un flash loan est un type de prêt en cryptomonnaie qui permet d'emprunter des montants importants sans fournir de collateral. La caractéristique distinctive est que le prêt doit être remboursé dans le même bloc de transaction. Si l'emprunteur ne remboursé pas, la transaction entière est annulée comme si rien ne s'était passé.

Ce mécanisme est rendu possible par les propriétés des smart contracts sur Ethereum et d'autres blockchains compatibles avec EVM. Le prêt et le remboursement sont exécutés atomiquement dans une seule transaction. Si une étape échoue, toute la transaction est révertie.

Les cas d'usage légitimes incluent l'arbitrage entre exchanges décentralisés, la liquidation de positions surendettées sur les protocoles de lending, et l'arbitrage de taux d'intérêt entre protocoles. Ces opérations génèrent de la value pour l'écosystème en maintenant l'efficacité des prix.

Les flash loans ont également été utilisés pour des attaques malveillantes. Les attaquants empruntent des fonds, exécutent des opérations manipulatrices, remboursent le prêt, et conservent le profit. Si l'opération échoue, rien n'est perdu pour l'attaquant. C'est pourquoi on parle de risque "risk-free" pour l'attaquant.

## Contexte et origine

Le concept de flash loan a été popularisé par le protocole Aave en 2020, bien que des concepts similaires aient été proposés plus tôt. Le terme "flash" fait référence à la vitesse d'exécution : le prêt est accordé et remboursé en quelques secondes, le temps d'un bloc.

Marble DAO a été précurseur en lançant un "smart lending" en 2019 où les utilisateurs pouvaient emprunter et trader dans une seule transaction. Cependant, c'est Aave qui a démocratisé le concept avec son implémentation popularisée.

Les flash loans ont joué un rôle dans plusieurs des plus grandes attaques DeFi. En 2021, l'attaque sur Cream Finance a utilisé des flash loans pour amplifier la manipulation de prix. L'attaque sur Poly Network en 2021 a également impliqué des flash loans bien que le hacker ait retourné les fonds.

## Mécanismes et caractéristiques

Le fonctionnement technique repose sur l'atomicité des transactions Ethereum. Voici les étapes d'un flash loan :

1. L'emprunteur appelle la fonction flashLoan du protocole avec le montant voulu et un callback
2. Le protocole transfère les fonds à l'emprunteur
3. Le protocole appelle la fonction callback de l'emprunteur
4. L'emprunteur exécute ses opérations (arbitrage, liquidation, etc.)
5. L'emprunteur rembourse le montant + frais au protocole
6. Si le remboursement échoue, toute la transaction est révertie

Les frais de flash loan sont généralement faibles (0,09% sur Aave par exemple) car il n'y a pas de risque de default. Le protocole asume zéro risque car le collateral n'est pas nécessaire si l'opération échoue, elle est simplement annulée.

Les plateformes principales de flash loans sont Aave, dYdX, and Uniswap (via les callbacks de pool). Chaque plateforme a ses propres caractéristiques mais le concept de base reste le même.

## Nuances, critiques, limites

Les flash loans amplifient le risque systémique en DeFi. Puisqu'ils permettent d'exécuter des stratégies avec un capital théoriquement illimité, ils amplifient l'impact des bugs et des manipulations. Une erreur dans une stratégie flash loan peut affecter des montants bien supérieurs au capital réel.

La réglementation des flash loans est incertaine. Certains arguent que ce sont des produits financiers non réglementés permettant de contourner les règles de investisseur. D'autres soutiennent que l'absence de collateral les rend différents des prêts traditionnels.

Les mesures d'atténuation incluent des restrictions sur les protocoles vulnérables, des circuits breakers pour detecter les manipulations, et une surveillance plus étroite des liquidations. Cependant, les attaquants trouvent constamment de nouvelles méthodes.

Les flash loans ont permis de découvrir des vulnérabilités qui auraient autrement causé des pertes mineures. En ce sens, ils ont joué un rôle de "beta test" pour la sécurité DeFi. Mais le coût a parfois été énorme.

## Liens et implications

Les [[flash loans]] sont une fonctionnalité clé des [[DeFi lending protocols]] comme [[Aave]] et Compound. Ils sont fréquemment utilisés pour l'[[arbitrage]] entre [[Automated Market Makers (AMM)]]. Les [[sandwich attacks]] utilisent les flash loans pour manipuler les prix.

Les [[DEX aggregators]] peuvent intégrer des stratégies flash loan pour améliorer les prix. Les [[liquidity pools]] sont la source des fonds pour de nombreux flash loans. Les [[cross-chain bridges]] commencent à implémenter des flash loans cross-chain.

Le [[slippage]] et la [[price impact]] sont des facteurs critiques dans les stratégies flash loan. Les [[flash crash]] peuvent être accelerés par des opérations flash loan. La [[gas optimization]] est importante pour exécuter des stratégies complexes dans les limites de gas d'un bloc.

## Sources

[^1]: Aave Documentation, "Flash Loans", https://docs.aave.com (consulted 2026)
[^2]: dYdX Documentation, "Perpetual Trading", https://dydx.exchange (consulted 2026)
[^3]: The Block, "Flash Loan Attacks", https://www.theblock.co (consulted 2026)
