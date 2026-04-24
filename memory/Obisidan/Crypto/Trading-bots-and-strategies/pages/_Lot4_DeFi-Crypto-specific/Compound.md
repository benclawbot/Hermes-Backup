---
titre: "Compound"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/compound, #concept/defi, #concept/lending]
créé: 2026-04-21
liens_forts: ["[[DeFi lending protocols]]", "[[Aave]]", "[[Yield farming]]", "[[Governance tokens]]", "[[Flash loans]]"]
liens_opposition: []
---

# Compound

> [!info] Résumé
> Compound est un protocole de money market décentralisé qui a popularisé les taux d'intérêt algorithmiques en DeFi. Son lancement du token COMP en 2020 a lancé la DeFi Summer en introduisant le concept de governance token distribution massive.

## Définition

Compound est un protocole de lending décentralisé sur Ethereum permettant aux utilisateurs de prêter et d'emprunter des cryptomonnaies via des smart contracts automatisés. Les taux d'intérêt sont déterminés algorithmiquement en fonction de l'offre et de la demande dans chaque pool.

Le protocole gère des "markets" pour chaque actif supporté. Chaque market a son propre taux d'intérêt qui varie selon le graphique d'utilisation. Plus le pool est utilisé (emprunté), plus le taux pour les prêteurs est élevé.

Le token COMP est le token de gouvernance du protocole. Les détenteurs peuvent voter sur les propositions d'amélioration du protocole, incluant les ajustements de paramètres comme les facteurs de collatéralisation et les choix d'actifs supportés.

Compound a été construit avec un focus sur la simplicité et la robustesse. Contrairement à Aave, Compound n'offre pas de flash loans ni de taux stables. Cette simplicité a fait de Compound un choix populaire pour les développeurs et les intégrations.

## Contexte et origine

Compound a été fondé en 2018 par Robert Leshner et Geoffrey Hayes. Le protocole a été l'un des premiers à lancer sur Ethereum mainnet avec des marchés de prête/emprunte pour des actifs réels.

En juin 2020, Compound a lancé la distribution de son token COMP via un mécanisme innovant appelé "liquidity mining" (minage de liquidité). Les utilisateurs recevaient des COMP pour chaque prêt ou emprunt effectué. Cette distribution massive a inspiré d'innombrables forks et a lancé la DeFi Summer.

Le succès de Compound a inspiré la création de nombreux autres protocoles de lending, incluant Aave V2 et MakerDAO. Le modèle de governance token distribution est devenu un standard de l'industrie.

## Mécanismes et caractéristiques

Le modèle de taux d'intérêt de Compound utilise une fonction d'utilisation qui définit les taux en fonction du % du pool qui est emprunté. Les paramètres exactes sont décidés par la gouvernance.

Quand un utilisateur dépose des fonds, il reçoit des cTokens (compound tokens) qui s'apprécient en valeur selon les intérêts courus. Pour les ETH, l'utilisateur reçoit des cETH. Ces tokens peuvent être transférés ou utilisés ailleurs.

L'administration du Compound se fait via le COMP token. Les propositions doivent obtenir un quorum et une majorité pour être adoptées. Les détenteurs de COMP déléguent leur pouvoir de vote.

Les risques principaux :
- Risque de smart contract
- Risque de liquidation si les collatéraux baissent
- Risque de undercollateralization en cas de crash brutal

## Nuances, critiques, limites

Compound est considéré comme plus conservateur qu'Aave en termes de fonctionnalités. Cela peut être un avantage (simplicity, lower attack surface) ou un thérapeut (manque de fonctionnalités avancées).

La governance Compound a été Criticised pour être dominée par quelques gros détenteurs. Le système one-token-one-vote peut mener à une concentration du pouvoir.

Les incidents de liquidation sont survenus quand les prix des collatéraux ont fluctué rapidement. Les bots de liquidation ont parfois executé des transactions avec un slippage élevé, causant des pertes pour les emprunteurs.

## Liens et implications

[[Compound]] est comparable à [[Aave]] dans le space [[DeFi lending protocols]]. Les deux ont inspiré de nombreux forks. Le COMP est un modèle de [[governance tokens]] pour DeFi.

Le [[yield farming]] a été popularisé par Compound via sa distribution de COMP. Les [[flash loans]] ne sont pas disponibles sur Compound mais sont une fonctionnalité clé d'Aave. Les stratégies de [[yield farming]] peuvent utiliser Compound.

Le [[risk-reward ratio]] du lending Compound doit inclure les risques de liquidation. La [[volatility scaling]] affecte les valorisations. Le [[backtesting]] doit inclure les historiques de taux d'intérêt.

## Sources

[^1]: Compound Documentation, "Compound Protocol", https://docs.compound.finance (consulted 2026)
[^2]: Compound Governance, "COMP Token", https://compound.finance (consulted 2026)
[^3]: Leshner, "The Compound Finance Model", https://medium.com (consulted 2026)
