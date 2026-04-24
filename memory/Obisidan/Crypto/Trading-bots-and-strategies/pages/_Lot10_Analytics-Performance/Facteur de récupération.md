---
titre: "Facteur de récupération"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/récupération, #concept/drawdown, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Drawdown]]", "[[Drawdown maximum]]", "[[Durée du drawdown]]", "[[Drawdown recovery time]]", "[[Calmar ratio]]", "[[Gestion du risque]]", "[[Position sizing]]"]
liens_opposition: []
---

# Facteur de récupération

> [!info] Résumé
> Le facteur de récupération mesure le rapport entre la durée du drawdown et la durée de récupération. Un facteur proche de 1 est bon, supérieur à 2 signifie que la récupération prend plus du double du temps du drawdown.

## Définition

Le facteur de récupération est le ratio entre la durée de récupération (après un drawdown) et la durée du drawdown lui-même.

Facteur de récupération = Durée de récupération / Durée du drawdown

Un facteur de 1.0 signifie que la récupération prend autant de temps que le drawdown. Un facteur de 2.0 signifie que la récupération prend deux fois plus longtemps que le drawdown.

Le facteur de récupération élevé illustre la asymétrie des rendements : il faut plus pour récupérer un drawdown qu'il n'en a fallu pour l'atteindre.

## Contexte et origine

Le facteur de récupération est une métrique moins standard que le max drawdown ou le Calmar ratio, mais tout aussi importante pour l'expérience investisseur.

La non-linéarité de la récupération est souvent mal comprise par les investisseurs non sophistiqués. Un drawdown de 50% nécessite un gain de 100% pour récupérer, pas 50%.

Cette asymétrie a des implications pratiques importantes pour l'allocation de capital et la gestion du risque. Elle suggère qu'il vaut mieux éviter les gros drawdowns que tentar de les récupérer.

## Mécanismes et caractéristiques

### Pourquoi la récupération prend plus longtemps

Un drawdown de X% nécessite un gain de Y% pour récupérer, où Y = X / (1 - X).

Par exemple :
- Drawdown 10% → besoin de 11.1% pour récupérer
- Drawdown 20% → besoin de 25% pour récupérer
- Drawdown 50% → besoin de 100% pour récupérer
- Drawdown 80% → besoin de 400% pour récupérer

Cette progression geometrique fait que les gros drawdowns sont très difficiles à récupérer.

### Interprétation du facteur

Facteur de récupération < 1.0 : Récupération plus rapide que le drawdown (rare, stratégies très strong)
Facteur de récupération 1.0 - 1.5 : Normal
Facteur de récupération 1.5 - 2.0 : Récupération significativement plus longue
Facteur de récupération > 2.0 : Récupération très lente (drawdown profond ou conditions difficiles)

### Drawdowns multiples

En présence de drawdowns successifs avant récupération complète, le facteur de récupération effectif est encore plus élevé.

Une série de petits drawdowns peut aggregate à un facteur de récupération agrégé très supérieur aux facteurs individuels.

## Applications pratiques

Le facteur de récupération aide à calibrer les attentes. Un investisseur qui ne peut pas tolerer 2 ans de drawdown devrait éviter les stratégies dont le facteur de récupération historique est supérieur à 2.0.

Le [[backtesting]] révèle le facteur de récupération historique. Si le backtest montre des facteurs de récupération très élevés, la stratégie peut être difficile à manage en pratique.

La [[gestion du risque]] peut inclure des règles pour réduire l'exposition après un drawdown prolongé, accelerate la récupération.

## Nuances, critiques, limites

Le facteur de récupération varie selon les conditions de marché. Une même stratégie peut avoir des facteurs très différents en marché haussier vs baissier.

Le facteur de récupération ne capture pas la profondeur du drawdown. Une stratégie avec un drawdown profond aura naturellement un facteur plus élevé car la récupération demande plus de rendement.

Le facteur de récupération historiques peut ne pas refléter le comportement futur, especially si les conditions de marché changent significativement.

## Liens et implications

Le facteur de récupération est lié au [[Drawdown recovery time]] qui mesure spécifiquement le temps de récupération sans le rapporter à la durée du drawdown.

Le [[Calmar ratio]] capture la relation entre rendement et drawdown mais pas le facteur de récupération. Une stratégie avec un bon Calmar peut avoir un facteur de récupération défavorable.

La [[durée du drawdown]] et le facteur de récupération informent ensemble le profil de risque temporel d'une stratégie.

Le [[position sizing]] approprié peut reducir le facteur de récupération en évitant les gros drawdowns.

## Sources

[^1]: Siegel, "The Endurance Factor", Journal of Investment Management (2008)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)