---
titre: "Durée du drawdown"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/drawdown, #concept/temps, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Drawdown]]", "[[Drawdown maximum]]", "[[Facteur de récupération]]", "[[Drawdown recovery time]]", "[[Gestion du risque]]", "[[Position sizing]]", "[[Backtesting]]"]
liens_opposition: []
---

# Durée du drawdown

> [!info] Résumé
> La durée du drawdown mesure le temps nécessaire pour récupérer un drawdown. Une métrique critique car un drawdown long erodes la confiance et peut nécessiter des changements de stratégie ou de capital.

## Définition

La durée du drawdown est le temps (en jours, semaines, mois) entre le pic initial et la récupération complète du capital après un drawdown.

Si le capital passe de 10 000€ à 6 000€ le 1er janvier et récupère 10 000€ le 1er juillet, la durée du drawdown est de 6 mois.

La durée est mesurée pour chaque drawdown significatif (au-dessus d'un seuil). La durée maximale observée est la max drawdown duration.

## Contexte et origine

La durée du drawdown est aussi importante que sa profondeur pour l'expérience investisseur. Un investisseur peut tolerer un drawdown de 30% s'il est récupéré en 2 mois, mais pas s'il dure 2 ans.

La durée du drawdown est particulièrement pertinente pour les stratégies de trading crypto car les périodes de récupération peuvent être longues, surtout en marché baissier.

Les stratégies avec des drawdowns longs ont plus de chances de faire face à des changements de conditions de marché pendant la période de récupération, ce qui peut prolonger davantage le drawdown.

## Mécanismes et caractéristiques

### Calcul

La durée du drawdown se mesure depuis le pic (peak) jusqu'à la récupération complète. Si le capital n'a pas encore récupéré, la durée est toujours en cours.

Les drawdowns partiels (récupération partielle puis nouveau drawdown) crean de nouvelles périodes de drawdown.

### Facteur de récupération

Le facteur de récupération est le rapport entre la durée du drawdown et la durée de récupération. Un facteur de 1.0 signifie que la récupération prend autant de temps que le drawdown lui-même.

En pratique, à cause de la géométrie des rendements (un drawdown de 50% nécessite un gain de 100%), la récupération prend généralement plus longtemps que le drawdown.

### Distribution des durées

La durée du drawdown varie selon les conditions de marché. En marché haussier, les drawdowns sont plus courts. En marché baissier ou range, les drawdowns peuvent être très longs.

La durée moyenne des drawdowns peut être très différente de la durée maximale. Une stratégie peut avoir des drawdowns typiques de 2-3 semaines mais un outlier de 6 mois.

## Applications pratiques

La durée du drawdown influence les décisions de allocation de capital. Une stratégie avec des drawdowns très longs peut require plus de capital de base pour tolerer les périodes de sous-performance.

Le [[forward testing]] révèle si les durées de drawdown observées en backtest correspondent à la réalité. Une discrepancy importante peut indiquer un problème de model.

La [[gestion du risque]] peut inclure des règles basées sur la durée. Par exemple, réduire l'exposition si le drawdown dure plus de X semaines.

## Nuances, critiques, limites

La durée du drawdown dépend de la volatilité future, qui est inconnue. Les estimations basées sur l'historique peuvent être inexactes si la volatilité change.

Les durées de drawdown passés ne garantissent pas les durées futures. Une stratégie peut avoir des drawdowns courts historically mais être exposée à des événements qui causent des durées inhabituelles.

La durée du drawdown ne capture pas les drawdowns imbriqués (recovery partiel puis nouveau drawdown avant recovery complet). Dans ces cas, la durée totale peut être plus longue que la somme des durées individuelles.

## Liens et implications

La durée du drawdown est liée au [[Drawdown recovery time]], qui mesure spécifiquement le temps pour récupérer après un drawdown.

Le [[facteur de récupération]] combine la durée du drawdown et la durée de récupération pour une view complète de la dynamique de drawdown.

Le [[drawdown maximum]] et la durée forment ensemble le profil de risque complet. Une stratégie peut avoir un drawdown max modéré mais des durées très longues, ou vice versa.

La [[gestion du risque]] doit considerer la durée pour définir des règles de stop ou d'ajustement de position appropriées.

## Sources

[^1]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
[^2]: Siegel, "The Endurance Factor", Journal of Investment Management (2008)