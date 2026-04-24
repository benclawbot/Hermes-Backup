---
titre: "Volume-weighted strategies"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/volume, #concept/weighted, #concept/indicators]
créé: 2026-04-21
liens_forts: ["[[VWAP (Volume Weighted Average Price)]]", "[[Volume profile]]", "[[OBV (On Balance Volume)]]"]
liens_opposition: []
---

# Volume-weighted strategies

> [!info] Résumé
> Les stratégies pondérées par le volume utilisent le volume de transactions comme pondération pour les indicateurs ou les prix, fournissant une vue plus accurate de la pression acheteuse et vendeuse que les stratégies basées uniquement sur le prix.

## Définition

Les stratégies pondérées par le volume ajustent les calculs pour refléter l'importance relative des transactions. Plus une transaction est volumineuse, plus elle a d'influence sur l'indicateur ou le prix moyen calculé.

Le VWAP (Volume Weighted Average Price) est l'exemple le plus connu. Au lieu de calculer une moyenne simple des prix, le VWAP pondère chaque prix par le volume de la transaction correspondante. Un gros order à 50000 a plus d'influence qu'un petit order au même prix.

L'OBV (On Balance Volume) est un autre indicateur volume-weighted. Il ajoute le volume quand le prix monte et soustrait le volume quand le prix baisse. Cela indique si le volume "suit" la tendance du prix ou non.

Le [[volume profile]] est une extension qui montre le volume échangé à chaque niveau de prix, révélant les zones de forte et faible liquidité.

## Contexte et origine

Les indicateurs volume-weighted ont été développés dans les années 1960-1970 par des analystes techniques comme Marc Chaikin et d'autres qui reconnaissaient que le volume est un élément fondamental de la dynamique des prix.

Le VWAP est devenu un standard de l'industrie pour l'évaluation de l'exécution des ordres institutionnels dans les années 1990-2000. Les desks de trading utilisent le VWAP comme benchmark pour mesurer leur performance.

En crypto, l'application de ces stratégies est identique mais les données de volume peuvent être moins fiables sur certains exchanges plus petits ou avec du wash trading.

## Mécanismes et caractéristiques

Le VWAP comme indicateur est calculé en continu tout au long de la journée. Les traders comparent le prix actuel au VWAP pour déterminer si le prix est au-dessus ou en dessous de la valeur fair.

Une stratégie VWAP simple est d'acheter quand le prix est sous le VWAP et de vendre quand le prix est au-dessus. L'idée est que le VWAP représente le "juste prix" du marché.

L'OBV comme indicateur de momentum : si le prix fait un nouveau plus haut mais que l'OBV ne fait pas un nouveau plus haut, cela suggère une divergence baissière. La force de la tendance est contestée par le manque de volume confirmant.

Le [[volume profile]] révèle les zones de prix où le volume a été concentré historically. Ces zones de forte liquidité sont souvent des zones de support ou de résistance car les ordres importants ont été exécutés à ces niveaux.

## Nuances, critiques, limites

Le volume sur les marchés crypto peut être manipulé par le wash trading, où des acteurs createsynthetic volume sans vraie transaction. Les indicateurs volume-weighted peuvent être faussés sur les exchanges avec peu de liquidité réelle.

Le VWAP est un indicateur retardé (lagging) qui dépend des données de la journée en cours. En début de journée, le VWAP est proche du prix d'ouverture et n'est pas encore significatif.

Les stratégies basées sur le volume supposent que le volume passé prédit le volume futur, ce qui n'est pas toujours vrai. Les événements économiques ou les nouvelles peuvent changer soudainement les patterns de volume.

## Liens et implications

Les [[volume-weighted strategies]] sont liées aux indicateurs comme le [[vwap (Volume Weighted Average Price)|VWAP]], l'|obv (On Balance Volume)|OBV|, et le [[volume profile]]. Ces outils partagent la même base conceptuelle.

Le [[backtesting]] permet de valider une stratégie VWAP sur des données historiques. Le [[Information ratio]] peut mesurer la performance de stratégies basées sur le volume.

La [[gestion du risque]] doit inclure des considerations sur la fiabilité des données de volume, particulièrement sur les small caps crypto. Le [[drawdown]] peut être plus important si les signaux sont faux.


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

[^1]: Kirkpatrick, "Technical Analysis", 2006
[^2]: CBOE, "Volume-Weighted Average Price", https://www.cboe.com (consulted 2026)
