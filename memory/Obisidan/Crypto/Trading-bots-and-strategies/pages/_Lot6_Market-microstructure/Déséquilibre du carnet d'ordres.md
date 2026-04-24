---
titre: "Déséquilibre du carnet d'ordres"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/carnet, #microstructure, #ordre]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Écart bid-ask]]", "[[Impact de marché]]", "[[Liquidité]]", "[[Stratégie de momentum]]", "[[Market making]]", "[[Données de niveau 2]]"]
liens_opposition: []
---

# Déséquilibre du carnet d'ordres

> [!info] Résumé
> Le déséquilibre du carnet d'ordres (order book imbalance, OBI) mesure la différence relative entre le volume d'ordres acheteurs et le volume d'ordres vendeurs à un instant donné. Il sert d'indicateur de la pression buying/selling à court terme et peut prédire les mouvements de prix à très court terme.

## Définition

Le déséquilibre du carnet d'ordres est une métrique qui quantifie l'asymétrie entre les volumes disponibles côté achat (bid) et côté vente (ask) dans le carnet d'ordres. Mathématiquement, l'OBI est calculé comme (Volume_bid - Volume_ask) / (Volume_bid + Volume_ask). Une valeur positive indique une dominance acheteuse (plus de volume sur le bid side) ; une valeur négative indique une dominance vendeuse. L'OBI normalisé varie entre -1 et +1, le zéro représentant un équilibre parfait.

L'OBI est un indicateur de pression directionnelle du marché à très court terme. Un déséquilibre fortement positif suggère que le marché pourrait monter si le volume acheteur est exécuté, car il n'y a pas assez de volume vendeur pour absorbing les achats. Inversement, un OBI fortement négatif signale une pression vendeuse.

Il existe plusieurs variantes de cette métrique. L'OBI de base compare les volumes au meilleur prix (top of the book). L'OBI cumulatif compare les volumes sur une profondeur de N niveaux (par exemple, les 10 premiers niveaux). L'OBI temporel intègre le temps de residence des ordres pour pondérer les niveaux.

## Contexte et origine

L'utilisation du déséquilibre du carnet d'ordres comme indicateur de trading émerge de la recherche en microstructure dans les années 1990 et 2000. Les chercheurs ont observé que le flux d'ordres directionnel (order flow imbalance) est un prédicteur des mouvements de prix à court terme. Les travaux de Evans et Lyons (2002) sur le flux d'ordres dans le marché des changes ont popularisé ce concept au-delà des marchés actions.

Dans le contexte crypto, l'OBI est devenu un outil majeur pour les traders algorithmiques en raison de la transparence des carnets d'ordres. Tous les principaux exchanges crypto fournissent des données de niveau 2 en temps réel, permettant le calcul de l'OBI avec une granularité élevée. Les bots de trading haute fréquence utilisent l'OBI pour prédire les mouvements de prix et placer des ordres en conséquence.

Les stratégies de market making basées sur l'OBI ajustent leurs spreads et leurs tailles en fonction du déséquilibre. Quand l'OBI est fortement directionnalisé, le market maker peut réduire sa taille du côté dominant pour éviter d'être adversely selected par des ordres motivés par l'information.

## Mécanismes / caractéristiques / détails

**Calcul et variantes** : l'OBI normalisé est calculé comme (Bid_Volume - Ask_Volume) / (Bid_Volume + Ask_Volume). Ce ratio varie de -1 (tous les ordres sont des ventes) à +1 (tous les ordres sont des achats). Une valeur proche de zéro indique un équilibre. Le choix du nombre de niveaux à inclure affecte la mesure : un OBI au top of the book capture la liquidity immمنتmediate tandis qu'un OBI cumulatif capture la structure plus large.

**Prédiction de mouvements** : plusieurs études empiriques montrent que l'OBI a un pouvoir prédictif sur les mouvements de prix à court terme (de quelques secondes à quelques minutes). Un OBI fortement positif est associée à une probabilité plus élevée de hausse du prix dans les prochaines secondes. Cette relation s'explique par la dynamique du carnet : si le volume acheteur dépasse significativement le volume vendeur, les ordres d'achat seront exécutés en remontant le livre, déplaçant le prix vers le haut.

**OBI et volatilité** : l'OBI est plus prédictif dans les périodes de faible volatilité. En période de forte volatilité, le carnet se rééquilibre rapidement et l'OBI change fréquemment, réduisant son pouvoir prédictif. Les traders utilisent l'OBI conjointement avec des indicateurs de volatilité comme l'[[ATR (Average True Range)]] pour filtrer les signaux.

**OBI et liquidité** : un carnet très déséquilibré peut signaler une liquidité dégradée. Si un côté du carnet est presque vide, l'exécution d'un ordre du autre côté peut déplacer considérablement le prix. L'OBI peut thus serve as a proxy for la liquidité instantanée du marché.

**Déclenchement d'ordres** : les niveaux d'OBI sont souvent utilisés comme triggers pour des stratégies de trading. Par exemple, un bot peut passer un ordre d'achat quand l'OBI dépasse +0.5 et un ordre de vente quand l'OBI descend sous -0.5. Ces stratégies fonctionnent mieux en combinaison avec d'autres indicateurs et des règles de risk management.

## Nuances, critiques, limites

L'OBI est une métrique très volatile qui change fréquemment. Un carnet peut passer d'un OBI très positif à très négatif en quelques secondes si un gros ordre est placé ou retiré. Les stratégies basées sur l'OBI doivent être robustes à ce bruit et inclure des mécanismes de lissage (moving averages, seuils de persistance).

L'OBI ne capture pas la qualité des ordres. Des ordres à cours limité très éloignés du meilleur prix peuvent fausser l'OBI cumulatif sans être réellement disponibles pour le marché. Les ordres avec une probabilité d'annulation élevée (mesurée par le [[Ratio annulation-commerce]]) biaisent également l'OBI car ils ne seront probablement pas exécutés.

La relation entre OBI et mouvement de prix n'est pas déterministe. Un carnet déséquilibré peut persister si les ordres ne sont pas exécutés. Le prix peut ne pas bouger même avec un OBI extreme si les ordres sont passifs et ne révèlent pas d'information. L'OBI est un indicateur de probabilité, pas une prévision certaine.

## Liens et implications

L'OBI est utilisé dans les stratégies de [[Stratégie de momentum|momentum]] pour confirmer la direction du trade. Un signal de momentum corroboré par un OBI directionnel a une probabilité plus élevée de succès qu'un signal isolé. Les traders combinent l'OBI avec l'analyse technique pour timing leurs entrées.

Dans les stratégies de [[Market making]], l'OBI aide à positionnen le spread. Quand l'OBI est positif (pression acheteuse), le market maker peut être plus агрессив sur le bid side pour fournir de la liquidité, tout en maintenant un spread plus large sur le ask side pour se protéger contre un retournement.

L'OBI fait partie du toolkit d'analyse des "[[Données de niveau 2]]". Les traders qui surveillent le carnet d'ordres en temps réel utilisent l'OBI comme l'un des multiples indicateurs, aux côtés de la profondeur totale, du spread, et du taux de variation du livre.

## Sources

[^1]: Evans, Martin, and Richard Lyons. "Order Flow and Exchange Rate Dynamics." *Journal of Political Economy* 110 (2002): 170-200.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.