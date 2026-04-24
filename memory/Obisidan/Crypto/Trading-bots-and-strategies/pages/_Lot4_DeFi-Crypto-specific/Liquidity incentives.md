---
titre: "Liquidity incentives"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/liquidity-incentives, #concept/defi, #concept/yield]
créé: 2026-04-21
liens_forts: ["[[Yield farming]]", "[[Liquidity pools]]", "[[Governance tokens]]", "[[Staking rewards]]", "[[DEX market making]]"]
liens_opposition: []
---

# Liquidity incentives

> [!info] Résumé
> Les liquidity incentives sont des programmes qui récompensent les fournisseurs de liquidité pour attirer des capitaux vers un protocole. Ces incitations sont typiquement financées par l'émission de tokens de gouvernance et sont utilisées pour bootstraper la liquidité de nouveaux protocoles.

## Définition

Les liquidity incentives sont des programmes par lesquels les protocoles DeFi distribuent des récompenses (souvent sous forme de tokens) aux utilisateurs qui fournissent des liquidités à leurs pools ou marchés. L'objectif est d'attirer enough liquidité pour que le protocole puisse fonctionner efficacement.

Les formes principales d'incentives :

1. Emissions de tokens : le protocole émet de nouveaux tokens comme récompense. C'est la forme la plus comune mais aussi la plus inflationniste.

2. Frais de protocole : une partie des frais de transaction est distribuée aux LPs. C'est plus durable mais génère moins de rewards initially.

3. Tiered incentives : les récompenses varient selon la durée du lock-up ou le montant deposit.

4. Matching : le protocole matching les dépôts des utilisateurs avec des fonds du trésor.

Les incentives sont généralement plus élevés au début d'un protocole pour attirer les premiers LPs. Ils diminuent progressivement selon un schedule prédéterminé (émissions décroissantes).

## Contexte et origine

Les liquidity incentives ont été popularisés par Compound Finance avec son programme COMP en juin 2020. Ce programme distribuait des tokens COMP aux prêteurs et emprunteurs, launchant la DeFi Summer.

Yearn Finance a popularisé l'automatisation des incentives avec ses vaults qui déplacent automatiquement les fonds vers les protocoles avec les meilleurs rendements (qui incluent les incentives).

Balancer a introduced les "liquidity mining" avec des récompenses pour les pools spécifiques de son protocole. Cela a été suivi par de nombreux autres protocoles.

## Mécanismes et caractéristiques

Les structures d'incentives varient :

Incentives uniformes : mêmes récompenses pour tous les participants d'un pool. Simple mais ne reflète pas les différences de risque.

Incentives liés à la duration : les LPs qui lock leurs tokens plus longtemps reçoivent des récompenses plus élevées. Cela reduce la volatilité de la liquidité.

Incentives halving : les récompenses diminuent selon un schedule (comme Bitcoin). C'est prévisible mais peut créer des "yield cliffs" quand les rewards baissent significantly.

Les risques des liquidity incentives :

Inflation : les tokens émis como récompense diluent la valeur des détenteurs existants.

Fauxirs : les LPs viennent pour les rewards et partent quand elles diminuent, créant de l'instabilité.

zérophy : les nouveaux protocoles paient des rendements insoutenables pour atraer la liquidité.

## Nuances, critiques, limites

Les APY affichés par les protocoles sont souvent trompeurs. Ils incluent la valorization des tokens de récompense, qui peut chuter dramatically si le prix du token baisse.

La "yield war" entre protocoles a conduit à des incitations insoutenables où les protocoles émissions massivement des tokens pour être compétitifs. Cela a créé une économie DeFi fortement dépendante de ces émissions.

Les protocoles qui ne peuvent pas générer de vrais revenus (hors incentives) ne sont pas durables à long terme. Les utilisateurs doivent faire la distinction entre les rendements réels et les rendements inflationnistes.

## Liens et implications

Les [[liquidity incentives]] sont le moteur du [[yield farming]]. Les [[governance tokens]] sont souvent le véhicule de distribution. Les [[staking rewards]] peuvent être une forme d'incentive.

Les [[liquidity pools]] reçoivent les incentives. Le [[DEX market making]] dépend des incentives pour rester compétitif. L'[[impermanent loss]] doit être déduit des incentives pour évaluer la rentabilité réelle.

Le [[risk-reward ratio]] doit séparer les revenus réels des incentives inflationnistes. Le [[backtesting]] doit inclure les variations du prix des tokens émis. La [[volatility scaling]] affecte la valorization des récompenses.

## Sources

[^1]: Yearn Finance, "Vaults Strategy", https://docs.yearn.finance (consulted 2026)
[^2]: Messari, "DeFi Incentives Report", https://messari.io (consulted 2026)
[^3]: DeFi Pulse, "Liquidity Mining", https://defipulse.com (consulted 2026)
