---
titre: "Espérance mathématique"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/espérance, #concept/mathématiques, #concept/stratégie]
créé: 2026-04-21
liens_forts: ["[[Taux de réussite]]", "[[Facteur de profit]]", "[[Kelly Criterion]]", "[[Position sizing]]", "[[Risk of ruin]]", "[[Gestion du risque]]", "[[Backtesting]]"]
liens_opposition: []
---

# Espérance mathématique

> [!info] Résumé
> L'espérance mathématique est le gain ou perte moyen attendu par trade. C'est la métrique fondamentale qui détermine si une stratégie est profitable à long terme, toutes choses égales par ailleurs.

## Définition

L'espérance mathématique (ou expected value) d'une stratégie de trading est le résultat moyen attendu par trade sur un grand nombre de trades.

La formule est :

E = (p × G) - ((1-p) × P)

Où p est le win rate (probabilité de gain), G le gain moyen (quand gain), et P la perte moyenne (quand perte).

Si E > 0, la stratégie est profitable en moyenne à long terme. Si E < 0, la stratégie est déficitaire.

Par exemple, une stratégie avec win rate de 50%, gain moyen de 100€, perte moyenne de 80€ a une espérance de :
E = (0.5 × 100) - (0.5 × 80) = 50 - 40 = 10€ par trade

## Contexte et origine

L'espérance mathématique vient de la théorie des probabilités et est fondamentale en statistiques. En trading, elle été popularisée par les écrits sur le [[Kelly Criterion]] et la gestion de bankroll.

Le concept est essential pour comprendre pourquoi le win rate seul est insuffisant. Une stratégie peut avoir un win rate de 90% mais si les pertes sont 10x plus grandes que les gains, l'espérance sera négative.

Les traders professionnels evaluent les stratégies principalement par leur espérance, pas par leur win rate. L'objectif est de trouver des stratégies avec une espérance positive et de l'exploiter de manière consistente.

## Mécanismes et caractéristiques

### Espérance par unité de risque

L'espérance est souvent exprimée par unité de risque (par euro risqué) plutôt que par trade brut. Cela permet de comparer des stratégies avec différentes tailles de position.

E(r) = (p × RG) - ((1-p) × RP)

Où RG et RP sont les gains et pertes en pourcentage du capital risqué.

### Espérance annualisée

L'espérance par trade peut être annualisée en multipliant par le nombre de trades annuel et en ajustant pour la volatilité.

Une stratégie avec E = 0.5% par trade et 500 trades/an a une espérance annualisée de 250% en moyenne, mais la variance sera élevée.

### Distribution de l'espérance

L'espérance est une moyenne, pas une garantie. Une stratégie avec E positive peutstill perdre de l'argent sur un petit nombre de trades à cause de la variance.

Le théorème central limite indique que la distribution des résultats convergera vers l'espérance avec un grand nombre de trades, mais la convergence peut être très lente.

## Applications pratiques

L'espérance est le fondement de toute stratégie profitable. Aucun hack, indicateur, ou technique ne peut compensate une espérance négative à long terme.

Le [[Kelly Criterion]] utilise l'espérance pour déterminer la taille optimale des positions. Plus l'espérance est élevée, plus la position peut être grande.

Le [[risk of ruin]] dépend de l'espérance et de la variance. Une espérance positive mais une variance très élevée peut toujours mener à un risque de ruin significatif.

Le [[position sizing]] basé sur le Kelly maximise le taux de croissance du capital tout en contrôlant le risque de ruin.

## Nuances, critiques, limites

L'espérance calculée sur l'historique peut ne pas refléter l'espérance future si les conditions du marché changent.

L'espérance est insensible à la sequence des résultats. Une série de pertes consécutives peut induce un drawdown qui force l'arrêt de la stratégie avant que l'espérance ne se materialise.

L'espérance suppose que les gains et pertes moyens restent constants, ce qui peut ne pas être le cas si la volatilité du marché change.

La variance de l'espérance est aussi importante que l'espérance elle-même. Une stratégie avec E = 1% et une variance de 5% est très différente d'une stratégie avec E = 1% et une variance de 1%.

## Liens et implications

L'espérance mathématique est le concept fondamental qui sous-tend le [[Taux de réussite]] et le [[Facteur de profit]]. Ces métriques sont des décompositions de l'espérance.

Le [[Kelly Criterion]] utilise l'espérance comme input principal pour calculer la taille optimale des positions.

L'espérance influence directement le [[risk of ruin]] et le [[drawdown]] ожидаемый. Une espérance élevée reduce le risque de ruin pour une taille de position donnée.

Le [[position sizing]] est déterminé par l'espérance selon le modèle Kelly ou ses variantes.

## Sources

[^1]: Kelly, "A New Interpretation of Information Rate", Bell System Technical Journal (1956)
[^2]: Thorp, "The Mathematics of Gambling", Gambling Times (1984)