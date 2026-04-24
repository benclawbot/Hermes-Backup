---
titre: "Protective put"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/protective-put, #concept/options, #concept/hedging]
créé: 2026-04-21
liens_forts: ["[[Covered call]]", "[[Options strategies (basic)]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Protective put

> [!info] Résumé
> Le protective put est une stratégie qui protège une position longue contre une baisse du prix. En achetant un put sur un actif détenu, le trader limite la perte maximale à la différence entre le prix actuel et le strike.

## Définition

Le protective put est une stratégie de protection qui combine une position longue sur un actif avec l'achat d'un put sur cet actif. Le put donne le droit de vendre à un prix prédéterminé (strike), limitant la perte si le prix baisse.

Si le prix de l'actif monte, le put expire sans valeur et le trader profite pleinement de la hausse (moins la prime payée). Si le prix baisse fortement, le put peut être exercé, limitant la perte au strike.

Le protective put est l'équivalent d'une assurance contre la baisse. La prime payée pour le put est le coût de cette protection. C'est une façon de gérer le risque de baisse sans vendre la position.

Cette stratégie est particulièrement pertinente pour les détenteurs de crypto qui veulent protéger leurs gains sans vendre. Elle leur permet de rester exposés à la hausse potentielle tout en limitant le downside.

## Contexte et origine

Le protective put est une stratégie ancienne qui existe depuis les débuts des marchés d'options. Elle a été utilisée par les investisseurs institutionnels pour protéger leurs portfolios contre des baisses majeures.

La stratégie est devenue connue comme "portfolio insurance" dans les années 1980 quand les fonds de pension ont commencé à l'utiliser pour protéger leurs réserves.

En crypto, le protective put est particulièrement pertinent en raison de la volatilité élevée. Les détenteurs de BTC ou ETH peuvent acheter des puts comme assurance contre des baisses de 30-50% ou plus.

## Mécanismes et caractéristiques

La construction est simple : détenir l'actif et acheter un put sur le même actif. Le strike du put détermine le niveau de protection. Plus le strike est élevé, plus la protection est complète mais plus la prime est chère.

Le break-even de la position est le prix d'achat de l'actif plus la prime du put. Si le prix descend en dessous de ce niveau, le put commence à compenser les pertes sur la position longue.

La expiration du put détermine la durée de la protection. Un put à 3 mois protège pendant 3 mois. Pour une protection continue, le trader doit rouler le put avant l'expiration.

Le coût de la protection (prime) doit être évalué par rapport au risque de baisse. Si la volatilité implicite est élevée, la prime est chère et la protection est coûteuse.

## Nuances, critiques, limites

Le coût de la protection peut être significatif en période de haute volatilité. Si la prime est trop élevée, le coût de la protection peut dépasser le benefit potentiel.

Le protective put limite la perte mais ne génère pas de augmentation en soi. Si le marché ne bouge pas ou monte légèrement, le trader a simplement payé la prime pour une assurance non utilisée.

En marché très haussier, le protective put underperforme la position nue car la prime payée réduit le rendement. Le trader fait un arbitrage entre la protection et le rendement.

## Liens et implications

Le [[protective put]] et le [[covered call]] sont des stratégies complémentaires. Le covered call génère un revenu en échange de limiter le potentiel de hausse, tandis que le protective put coûte de la prime pour protéger contre la baisse.

Les [[options strategies (basic)]] montrent comment le put fait partie de l'arsenal de stratégies. La [[gestion du risque]] est la raison d'être du protective put.

Le [[backtesting]] peut évaluer l'efficacité de cette stratégie sur différents horizons temporels. Le [[drawdown]] maximum est limité par le strike.


## Points clés à retenir

- L'application de cette stratégie requiert une discipline de fer et une execution rigoureuse
- Les parameters doivent être ajustés en fonction de la volatilité du marché et de la liquidité disponible
- Le suivi régulier des performances permet d'identifier les éventuelles dérives

- L'analyse technique constitue un outil essentiel pour identifier les configurations propices
- Legestion du risque doit être adapté à la volatilité du marché concerned
- Les conditions de marché évoluent constamment et exigent une adaptation des paramètres

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: McMillan, "Options as a Strategic Investment", 2012
[^2]: Investopedia, "Protective Put", https://www.investopedia.com (consulted 2026)
