---
titre: "Governance tokens"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/governance, #concept/defi, #concept/tokens]
créé: 2026-04-21
liens_forts: ["[[Yield farming]]", "[[Staking rewards]]", "[[Proof of stake economics]]", "[[Token velocity]]", "[[MakerDAO]]"]
liens_opposition: []
---

# Governance tokens

> [!info] Résumé
> Les governance tokens sont des tokens qui confèrent des droits de vote sur l'avenir d'un protocole décentralisé. Ces tokens ont transformé la gouvernance DeFi en permettant aux détenteurs de voter sur les upgrades, les paramètres, et les treasuries des protocoles.

## Définition

Un governance token est un token ERC-20 qui donne à ses détenteurs des droits de gouvernance sur un protocole décentralisé. Ces droits peuvent inclure le vote sur des propositions d'amélioration, l'allocation des trésorerie, et l'ajustement des paramètres du protocole.

Le mécanisme de gouvernance vary selon les protocoles. Certains utilisent le "one-token-one-vote" où chaque token représente un vote. D'autres utilisent des systèmes de vote quadratique ou de représentation déléguée.

Les governance tokens sont typiquement émis lors du lancement d'un protocole ou distribués via des airdrops aux utilisateurs. La distribution vise à aligner les incitations entre les utilisateurs et le protocole.

Les droits de vote peuvent s'appliquer à :
- Upgrades des smart contracts
- Ajout de nouveaux collatéraux
- Modification des frais
- Allocation de la trésorerie
- Partnerships et integrations

## Contexte et origine

Le premier governance token significatif en DeFi était COMP de Compound, lancé en juin 2020. Cette distribution massive a inspiré countless forks et a établi le modèle de "Decentralized Governance as a Service".

En 2020-2021, presque tous les protocoles DeFi majeurs ont lancé leur token de gouvernance : UNI (Uniswap), AAVE (Aave), MKR (MakerDAO), CRV (Curve), BAL (Balancer), et muchos otros.

L'évolution a été rapide. Certains protocoles ont commencé avec une gouvernance altamente centralisée (fondateurs avec beaucoup de pouvoir) et ont progressivement décentralisé. D'autres ont essayé une décentralisation immédiate avec des distributions larges.

## Mécanismes et caractéristiques

Les systèmes de gouvernance typiquement fonctionnent ainsi :

Propositions : n'importe qui peut soumettre une proposition si elle détient un seuil minimal de tokens. Les propositions incluent typiquement un texte describing le changement et du code on-chain.

Délégation : les détenteurs peuvent déléguer leurs votes à d'autres addresses sans transferer leurs tokens. Cela permet aux small holders de participer collectivement.

Vote : les détenteurs votent pendant une période définie. La mayoría Simple ou un quorum peuvent être requis.

Exécution : si la proposition passe, elle est exécutée automatiquement ou manuellement selon le protocole.

Les mécanismes d'incitation pour participer :
- Dividendes de bénéfices (ex: CRV donne des frais aux stakers)
- Accès à des fonctionnalités
- Droits de governance accrus pour les long-term holders

## Nuances, critiques, limites

La participation aux votes est typiquement très basse (moins de 5% des tokens). Cela signifie que quelques gros détenteurs peuvent Dominer les décisions. C'est une critique majeure du modèle.

Le "buy a vote" est une préoccupation. Des entities peuvent acheter des tokens juste pour influencer une vote, puis vendre. Certains protocoles ont essayé demitiger cela avec des lock-ups.

La complexité des propositions peut être un obstacle. Les small holders n'ont souvent pas le temps ou l'expertise de comprendre les implications techniques des propositions.

## Liens et implications

Les [[governance tokens]] sont centraux au modèle de [[yield farming]] car ils sont souvent distribués comme récompenses. Les [[staking rewards]] sont sometimes linked aux governance tokens. Le [[proof of stake economics]] a des similarités avec la gouvernance.

[[MakerDAO]] a l'un des modèles de gouvernance les plus établis avec le token [[MakerDAO|MKR]]. Le [[token velocity]] est souvent bas pour les governance tokens car les détenteurs les conservent pour voter.

Le [[risk-reward ratio]] des governance tokens inclut le risque de dilution future. Le [[backtesting]] doit considérer les events de gouvernance. La [[volatility scaling]] affecte la valeur des positions.

## Sources

[^1]: Uniswap Governance, "UNI Token", https://uniswap.org (consulted 2026)
[^2]: Aave Governance, "AAVE Token", https://aave.com (consulted 2026)
[^3]: Curve Governance, "CRV Token", https://curve.fi (consulted 2026)
