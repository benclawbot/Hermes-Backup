---
titre: "VWAP execution strategies"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/vwap, #concept/exécution, #concept/order-execution]
créé: 2026-04-21
liens_forts: ["[[Exécution VWAP]]", "[[TWAP (Time-Weighted Average Price)]]", "[[Smart order routing]]"]
liens_opposition: []
---

# VWAP execution strategies

> [!info] Résumé
> Les stratégies d'exécution VWAP dividissent un ordre important en petits ordres distribués au cours de la journée pour atteindre un prix moyen égal au VWAP du marché. Cette approche réduit l'impact de marché d'ordres volumineux.

## Définition

Le VWAP (Volume Weighted Average Price) est le prix moyen pondéré par le volume tout au long de la journée. Les stratégies d'exécution VWAP visent à exécuter un ordre au prix VWAP ou mieux, en divisant l'ordre en petits morceaux distribués proportionnellement au volume de marché prédit.

L'idée centrale est que les grands ordres passent par le marché progressivement, achant quand le volume est élevé et évitant d'exercer une pression acheteuse ou vendeuse excessive. L'objectif est de réduire l'[[impact de marché]] de l'ordre.

Une stratégie VWAP simple divise l'ordre total par le nombre de période de la journée et exécute à chaque période une fraction du volume total prédit. Si 10% du volume journalier est prévu pour la première heure, alors 10% de l'ordre est exécuté dans cette heure.

Les stratégies VWAP avancées utilisent des modèles de prédiction du volume baseés sur des données historiques pour optimiser le timing et la taille des sous-ordres.

## Contexte et origine

Le VWAP est né dans les années 1980 sur les marchés actions américains comme benchmark pour évaluer la qualité d'exécution des ordres institutionnels. Les gérances de fonds ont commencé à l'utiliser comme objectif de prix pour leurs exécutants.

Les stratégies algorithmiques d'exécution VWAP se sont développées avec le trading électronique dans les années 1990-2000. L'augmentation des tailles d'ordres et de la fréquence des transactions a rendu nécessaire l'automatisation.

En crypto, le VWAP est utilisé par les teneurs de marché institutionnels et les desks de trading pour exécuter de grands ordres de tokens avec une impact de marché minimal.

## Mécanismes et caractéristiques

La première étape est d'estimer la courbe de volume de la journée. Les données historiques de volume par periode permettent de construire un profil moyen. Certains actifs crypto ont des patterns de volume prévisibles (plus de volume pendant les heures asiatiques ou américaines).

L'ordre est divisé en sous-ordres whose taille est proportionnelle au volume prévu pour chaque période. Si le volume réelle s'écarte du prévu, la stratégie s'ajuste dynamically to maintain the target VWAP.

Le [[smart order routing]] peut être intégré pour optimiser the venue of execution. L'ordre peut être envoyé vers différents exchanges ou dark pools pour minimizing l'impact.

Les paramètres de risque incluent la limites de prix (arrêt si le prix s'écarte trop du VWAP du marché) et la capacité de réaction aux changements de volume imprévus.

## Nuances, critiques, limites

La VWAP est un benchmark statique qui ne tenir pas compte des conditions de marché changeantes. En période de volatilité inhabituelle, le VWAP calculé sur les données historiques peut ne pas refléter les conditions actuelles.

Le risque d'information s'accroît si le marché détecte que l'exécution VWAP est en cours. Les autres acteurs peuvent anticiper la direction de l'ordre et trader dans la direction opposée, increasing l'impact de marché.

La qualité de la prédiction de volume détermine largement le succès de la stratégie. Sur les actifs crypto avec des patterns de volume irréguliers, la prédiction peut être imprécise.

## Liens et implications

Le [[vwap execution strategies|VWAP execution strategies]] font partie des stratégies d'exécution avancées avec le [[twap (Time-Weighted Average Price)|TWAP]]. Le [[smart order routing]] complète ces stratégies en optimisant la sélection des venues.

L'[[exécution VWAP]] est une mesure de performance qui compare le prix d'exécution au VWAP du marché. L'impact de marché ([[impact de marché]]) est la préoccupation principale de ces stratégies.

Le [[backtesting]] permet de simuler l'exécution VWAP sur des données historiques. Le [[Information ratio]] mesure la qualité de l'exécution par rapport au benchmark VWAP.


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

[^1]: Kissell, "The Mathematics of Trading", 2006
[^2]: SEC, "Algorithmic Trading", https://www.sec.gov (consulted 2026)
