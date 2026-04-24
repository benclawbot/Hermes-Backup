---
titre: "Staking rewards"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/staking, #concept/defi, #concept/returns]
créé: 2026-04-21
liens_forts: ["[[Proof of stake economics]]", "[[Yield farming]]", "[[Liquidity pools]]", "[[Governance tokens]]", "[[Layer 2 scaling]]"]
liens_opposition: []
---

# Staking rewards

> [!info] Résumé
> Les staking rewards sont les récompenses versées aux détenteurs de tokens qui verrouillent leurs fonds dans un protocole de staking pour soutenir la sécurité du réseau ou d'un protocole. Ces récompenses proviennent généralement des émissions de nouveaux tokens ou des frais de transaction.

## Définition

Le staking est le processus de verrouillage de tokens dans un protocole pour soutenir les opérations du réseau. En contrepartie, les stakers reçoivent des récompenses proportionnelles à leur contribution. Ces récompenses sont le mécanisme d'incitation pour sécuriser le réseau.

Dans un contexte blockchain (Proof of Stake), le staking implique de verrouiller des tokens pour devenir validateur ou pour deleguer à un validateur. Les validateurs exécutent le protocole de consensus et sont récompensés pour leur service.

En DeFi, le staking peut prendre des formes diverses : staking dans des protocoles de liquidité, staking de governance tokens pour Earn des revenus, ou staking dans des pools de validation. Chaque forme a ses propres caractéristiques de risque et de rendement.

Les récompenses de staking proviennent généralement de deux sources : les nouvelles émissions de tokens (inflation) et les revenus du protocole (frais de transaction). La proportion entre ces deux sources détermine la durabilité du système de récompenses.

## Contexte et origine

Le staking rewards tel que nous le connaissons a été popularisé par Ethereum après sa transition vers Proof of Stake en septembre 2022 (The Merge). Avant cela, Ethereum utilisait Proof of Work et les mineurs étaient récompensés par de nouvelles émissions.

Cosmos a été précurseur du staking avec son protocole Tendermint, où les détenteurs de ATOM peuvent staker leurs tokens et recevoir des récompenses. Ce modèle a inspiré muchos projets PoS.

Tezos a également été un early adopter du staking avec son système de baking (validateur) et des récompenses annuelles d'environ 6-8%. Le succès de ces projets a validé le modèle.

Avec l'avènement du DeFi, le staking s'est étendue au-delà de la sécurisation blockchain. Les protocoles DeFi utilisent le staking pour aligner les incitations et récompenser les utilisateurs qui soutiennent le protocole.

## Mécanismes et caractéristiques

Le calcul des récompenses de staking dépend du protocole et de la période. En général :

Rendement annuel = (Récompenses totales distribuées) / (Total tokens stakés)

Les protocoles utilisent différents mécanismes de distribution :
- Linéaire : récompenses accumulées continuellement
- Époques : récompenses distribuées à intervalles réguliers (ex: toutes les 7 heures sur Ethereum)
-onding curve : récompenses calculées selon une courbe

Les risques du staking :
- Pénalité de slashing : perte d'une partie du stake pour comportement malveillant ou erreurs techniques
- Lock-up period : période pendant laquelle les tokens ne peuvent pas être retirés
- Volatilité du prix du token staké
- Risque de smart contract si le staking se fait via un protocole

## Nuances, critiques, limites

Le slashing est un mécanisme qui pénalise les validateurs pour des comportements incorrects. Cela peut inclure des pénalités mineures (inactivité) ou des pénalités majeures (double signing). Ces pénalités sont redistribuées aux autres stakers ou brûlées.

La lock-up period crée un risque de liquidité. L'utilisateur ne peut pas accéder à ses fonds pendant une période définie. Pendant ce temps, le prix du token peut chuter, causant une perte non matérialisée mais réelle.

Les rendements de staking doivent être mis en perspective avec la volatilité du token. Un APY de 10% sur un token qui perd 30% de sa valeur est un rendement réel négatif. C'est pourquoi le stakeonly sur des tokens à risque est dangereux.

La centralisation du staking est un risque pour la sécurité du réseau. Si une seule entité contrôle plus de 33% du stake, elle peut potentiellement compromettre le réseau. La surveillance des positions de staking est importante.

## Liens et implications

Les [[staking rewards]] sont au cœur du [[proof of stake economics]]. Le [[yield farming]] utilise souvent le staking comme composante. Les [[governance tokens]] sont fréquemment stakés pour générer des rendements.

Les [[liquidity pools]] peuvent être utilisés pour obtenir des tokens à staker sans locker permanemment. Les [[Layer 2 scaling]] protocoles ont leurs propres mécanismes de staking. Les [[cross-chain bridges]] permettent le staking cross-chain.

Le [[risk-reward ratio]] doit inclure les risques de slashing et de lock-up. La [[volatility scaling]] peut aider à gérer l'exposition au prix. Le [[backtesting]] doit inclure les périodes de lock-up.

## Sources

[^1]: Ethereum Foundation, "Proof of Stake", https://ethereum.org (consulted 2026)
[^2]: Cosmos Documentation, "Staking", https://docs.cosmos.network (consulted 2026)
[^3]: Messari, "Staking Rewards", https://messari.io (consulted 2026)
