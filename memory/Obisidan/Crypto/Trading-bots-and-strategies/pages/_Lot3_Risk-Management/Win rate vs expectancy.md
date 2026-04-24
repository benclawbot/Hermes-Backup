---
titre: "Win rate vs expectancy"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/win-rate, #concept/expectancy, #concept/risk-reward]
créé: 2026-04-21
liens_forts: ["[[Trade expectancy]]", "[[Kelly criterion practical limits]]", "[[Risk-reward ratio]]", "[[Position sizing]]", "[[Drawdown]]"]
liens_opposition: []
---

# Win rate vs expectancy

> [!info] Résumé
> Le win rate (taux de réussite) et l'expectance (résultat moyen par trade) sont deux métriques liées mais distinctes. Une stratégie peut avoir un win rate élevé mais une expectancy négative, et inversement. Comprendre la relation entre les deux est fondamental.

## Définition

Le win rate est le pourcentage de trades gagnants sur le total des trades. Si sur 100 trades, 55 sont gagnants, le win rate est 55%. C'est une métrique simple et intuitive qui fascine beaucoup de traders debutants.

L'expectance (ou [[Trade expectancy]]) est le résultat moyen par trade en euros ou en pourcentage. Elle combine le win rate avec le[[Risk-reward ratio]] pour donner une image complète de la profitability.

La relation mathématique est : Expectancy = (Win Rate × Avg Gain) - ((1 - Win Rate) × Avg Loss). Cette formule montre que le win rate seul n'est pas suffisant pour déterminer la profitability.

Une stratégie avec 70% de win rate mais un avg loss 3× plus grand que l'avg gain aura une expectancy négative malgré un win rate élevé. À l'inverse, une stratégie avec 30% de win rate mais un avg gain 5× plus grand que l'avg loss aura une expectancy positive.

La confusion entre win rate et expectancy est l'une des erreurs les plus fréquentes chez les traders. Un win rate de 80% peut sembler excellent mais cache une expectancy négative si les pertes sont très supérieures aux gains.

## Contexte et origine

Les recherches en trading et en psychologie du trader ont montré que le win rate est la métrique la plus intuitivement appealing mais pas toujours la plus importante. Van Tharp et d'autres experts ont promu l'expectance comme métrique centrale.

Le paradoxe du win rate est né de l'observation que beaucoup de traders abandonnent des stratégies rentables car ils se focalisent sur un win rate "faible". Une stratégie avec 30% de win rate peut être très rentable si le RRR est assez grand.

Les[[Trading bot]]s de tendances ont généralement un win rate bas (30-40%) mais une expectancy positive grâce à un RRR élevé (3:1 ou plus). Les bots de market making ont souvent un win rate élevé (60-70%) mais un RRR faible (proche de 1:1).

La distinction est particulièrement importante pour la[[Gestion du risque]] émotionnelle. Un trader peut supporter psychologiquement un win rate faible si les gains compensent largement les pertes. Mais un win rate faible sans RRR adequate mène à la frustation et à l'arrêt de la stratégie.

## Mécanismes et caractéristiques

Le win rate seul peut être calculé facilement : Nombre de trades gagnants / Nombre total de trades. Mais ce calcul ne dit rien sur la taille des gains et pertes.

L'expectance demande plus de données : il faut connaître le montant moyen des gains et le montant moyen des pertes en plus du win rate. Ces informations sont disponibles dans le[[Backtesting]].

Le[[Risk-reward ratio]] (RRR) est le lien entre win rate et expectancy. Une façon simple de voir la relation est : une stratégie avec RRR de 2:1 a besoin d'un win rate de 33% pour être à l'équilibre. Avec RRR de 3:1, seulement 25% de win rate suffit.

Un tableau pratique :
- RRR 1:1 → besoin 50% win rate pour BE
- RRR 2:1 → besoin 33% win rate pour BE
- RRR 3:1 → besoin 25% win rate pour BE
- RRR 4:1 → besoin 20% win rate pour BE

Ces chiffres montrent pourquoi les stratégies de tendance avec 30-35% de win rate peuvent être très rentables. Avec un RRR de 3:1 ou 4:1, l'expectancy est strongly positive.

## Nuances, critiques, limites

Le win rate futuro peut être différent du win rate historique. Une stratégie avec 70% de win rate sur 20 trades n'est pas statistiquement significative. Il faut au moins 100 trades pour estimer le win rate avec une bonne précision.

L'expectance peut être négative même avec un win rate élevé si le RRR est inférieur au seuil de rentabilité. Ce cas arrive quand les pertes sont plus grandes que les gains moyens, une situation que les traders doivent éviter.

Le[[Drawdown]] est impacté par le win rate mais aussi par le RRR et la séquence des trades. Une stratégie avec 50% de win rate mais des pertes consécutives peut avoir des drawdowns profonds même si l'expectance est positive.

Le win rate et l'expectance doivent être tracking ensemble. Un decline du win rate avec un RRR stable degrade l'expectance. Une improvement du RRR peut compenser un win rate en decline.

## Liens et implications

La[[Trade expectancy]] est le concept plus large qui inclut le win rate comme composante. L'expectance seule peut déterminer si une stratégie est rentable, pas le win rate seul.

Le[[Kelly criterion practical limits]] utilise l'expectance (pas seulement le win rate) pour calculer la taille de position optimale. Une expectancy plus élevée permet un sizing plus important selon le Kelly.

Le[[Risk-reward ratio]] est le complément du win rate pour calculer l'expectance. Améliorer le RRR peut compenser un win rate en déclin.

Le[[Position sizing]] doit être basé sur l'expectance, pas sur le win rate. Une stratégie avec une expectancy positive peut être upsized pour générer plus de profits.

## Sources

[^1]: Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)
[^2]: Kouwenhoven, "The Win Rate Paradox", Journal of Trading (2018)
