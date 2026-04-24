---
titre: "Trade expectancy"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/expectancy, #concept/rendement, #concept/win-rate]
créé: 2026-04-21
liens_forts: ["[[Win rate vs expectancy]]", "[[Kelly criterion practical limits]]", "[[Position sizing]]", "[[Risk-reward ratio]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Trade expectancy

> [!info] Résumé
> La Trade Expectancy (ou expectancy tout court) est le résultat moyen par trade, calculé comme Win Rate × Average Gain - Loss Rate × Average Loss. C'est l'indicateur fondamental qui détermine si une stratégie est profitable à long terme.

## Définition

La Trade Expectancy, aussi appelée simplement "expectancy", est le gain ou la perte moyen attendu par trade. C'est la métrique la plus fondamentale pour évaluer la profitability d'une stratégie de trading, toutes choses égales par ailleurs.

La formule standard est : E = (W × AW) - ((1 - W) × AL) où W est le win rate (probabilité de gain), AW est le gain moyen quand le trade est gagnant, et AL est la perte moyenne quand le trade est perdant.

Si une stratégie a un win rate de 50%, un gain moyen de 100€ et une perte moyenne de 80€, l'expectancy est : (0.5 × 100) - (0.5 × 80) = 10€ par trade. Cela signifie qu'en moyenne, chaque trade génère 10€ de profit.

Une expectancy positive est la condition nécessaire pour qu'une stratégie soit rentable à long terme. Sans expectancy positive, aucun système de[[Gestion du risque]] ne peut rendre la stratégie profitable.

La[[Trade expectancy]] s'exprime généralement en euros par trade, en pourcentage du capital par trade, ou en "ratio expectance/risque" (E/R). Le ratio E/R permet de comparer des stratégies avec des sizing différents.

## Contexte et origine

Le concept d'expectancy vient de la théorie des probabilités et de l'espérance mathématique. En trading, Van Tharp l'a popularisé dans son livre "Trade Your Way to Financial Freedom" comme la métrique centrale pour évaluer les stratégies.

L'expectance est la foundation du [[Kelly criterion practical limits]], qui utilise l'expectance et le win rate pour calculer la taille de position optimale. Plus l'expectance est élevée, plus la croissance optimale du capital est rapide.

Les[[Trading bot]]s avec une expectancy positive peuvent être rentables même avec un win rate inférieur à 50%. Une stratégie avec 35% de win rate mais un ratio gain/perte de 3:1 a une expectancy positive. Many trend-following strategies operate on this principle.

L'expectance doit être calculée sur un échantillon suffisant de trades pour être statistiquement significative. Quelques trades ne suffisent pas. Van Tharp recommande au moins 30 trades pour avoir une estimation fiable.

## Mécanismes et caractéristiques

Le calcul de l'expectance nécessite une collecte rigoureuse des données de trading. Chaque trade doit être enregistré avec son résultat (gain ou perte) et son montant. À partir de ces données, on calcule le win rate moyen et les montants moyens.

L'expectance peut être décomposée en deux composants : l' expectancy conditionnelle aux gains (EG = AW × W) et l'expectancy conditionnelle aux pertes (EP = AL × (1-W)). L'expectance totale est la différence.

Le[[Risk-reward ratio]] (RRR) est simplement le rapport entre AW et AL. Une stratégie avec RRR de 2:1 et win rate de 40% a une expectancy de (0.4 × 2) - (0.6 × 1) = 0.2 (en unités de perte). Multipliée par le montant de perte, cela donne l'expectance en euros.

L'expectance peut être exprimée en "R" où R est le risque inicial du trade. Une stratégie avec expectancy de 0.8R génère 0.8× le risque inicial en moyenne par trade. C'est une normalisation utile pour comparer des stratégies.

## Nuances, critiques, limites

L'expectance historique ne garantit pas l'expectance future. Si la stratégie perd son edge, l'expectance se dégradera. Il faut tracking l'expectance en temps réel et adapter la stratégie si elle decline.

L'expectance peut être biaisée par les valeurs extrêmes. Une stratégie avec 100 trades dont un seul trade exceptionnel de 10 000€ et 99 trades de 100€ de perte aura une expectancy positive mais peu fiable. Les métriques robustes (médiane, percentiles) sont útiles.

L'expectance alone ne capture pas le risque. Une stratégie avec une expectancy de 10€ par trade mais un écart-type de 500€ par trade est très risquée malgré son expectancy positive. Le ratio expectance/risque (comme le [[Sharpe ratio]]) est plus informatif.

Le[[Position sizing]] affecte l'expectance en euros mais pas en pourcentage. Une stratégie avec expectancy de 1% peut être dimensionnée pour générer 1% de capital par trade. Mais si l'expectance decline, le sizing doit être réduit.

## Liens et implications

La[[Trade expectancy]] est la composante principale du[[Kelly criterion practical limits]]. Le Kelly utilise directement l'expectance pour calculer la taille de position optimale. Sans expectancy positive, le Kelly n'aide pas.

La[[Win rate vs expectancy]] relationship est fondamentale. Many traders se focalisent sur le win rate alors que l'expectance (qui combine win rate et RRR) est plus importante. Une stratégie avec 70% de win rate mais un RRR de 0.5 a une expectancy négative.

Le[[Risk-reward ratio]] est une composante de l'expectance. Optimiser le RRR peut améliorer l'expectance même si le win rate reste constant. Beaucoup de stratégies sont gagnantes en améliorant simplement leurs points de sortie.

La[[Gestion du risque]] efficace implique de s'assurer que l'expectance reste positive et stable. Une expectancy qui decline est un signal d'alerte que la stratégie nécessite une review.

## Sources

[^1]: Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)
[^2]: Vince, "The Mathematics of Money Management", Wiley (1992)
