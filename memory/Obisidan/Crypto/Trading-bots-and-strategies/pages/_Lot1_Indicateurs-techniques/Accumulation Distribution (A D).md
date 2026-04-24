---
titre: "Accumulation/Distribution (A/D)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volume, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]"]
liens_opposition: []
---

# Accumulation/Distribution (A/D)

> [!info] Résumé
> L'Accumulation/Distribution (A/D) est un indicateur de volume cumulatif qui évalue le flux de money entrant et sortant d'un actif. Il détecte si les institutionnels achètent (accumulent) ou vendent (distribuent) en analysant où le prix ferme par rapport à son range.

## Définition

L'Accumulation/Distribution (A/D), aussi appelé Accumulation/Distribution Line (A/D Line), est un indicateur de momentum de volume créé par Marc Chaikin dans les années 1960-1970. Il combine le prix de clôture et le volume pour déterminer si l'argent entre ou sort d'un actif.

Le Money Flow Multiplier est la composante clé : ((Clôture - Bas) - (Haut - Clôture)) / (Haut - Bas). Ce multiplicateur est -1 si le prix ferme au plus bas de la période, et +1 si le prix ferme au plus haut.

Le Money Flow Volume = Multiplier × Volume de la période. L'A/D est la somme cumulée de ces Money Flow Volumes. Une A/D en hausse signifie accumulation, une A/D en baisse signifie distribution.

L'A/D est un indicateur cumulatif, contrairement au [[Chaikin Money Flow]] qui est une moyenne. Il ne se réinitialise jamais (sauf restart manuel), continuant à s'accumuler sur tout l'historique.

## Contexte et origine

Marc Chaikin a développé l'A/D Line en se basant sur les travaux de Woods et Vignolia sur l'accumulation/distribution. L'objectif était de créer un indicateur qui suit l'argent "smart" des institutionnels.

L'A/D suppose que le volume précède le prix. Si les institutionnels accumulent un actif, le volume augmente et le prix finit par monter. L'A/D essaie de capturer cette dynamique.

L'A/D diffère de l'[[OBV]] (On Balance Volume) en ce qu'il ne considère pas chaque période comme positive ou négative. Il utilise la position du prix dans le range (le Money Flow Multiplier) pour ponderer le volume.

## Mécanismes et caractéristiques

Une divergence entre le prix et l'A/D est le signal principal. Prix en hausse mais A/D en baisse = distribution cachée, retournement baissier probable. Prix en baisse mais A/D en hausse = accumulation cachée, retournement haussier probable.

L'A/D qui fait de nouveaux hauts en même temps que le prix confirme la tendance haussière. L'A/D qui fait de nouveaux bas en même temps que le prix confirme la tendance baissière.

Le cassure de l'A/D hors d'un range de consolidation peut prédire un mouvement directionnel. Si l'A/D sort d'un range serré vers le haut, l'accumulation institutionnelle a peut-être eu lieu avant le breakout du prix.

L'A/D comme indicateur de confirmation est souvent utilisé avec les moyennes mobiles ou d'autres indicateurs de tendance. Le signal est plus fort si l'A/D et l'indicateur de tendance sont d'accord.

## Nuances, critiques, limites

L'A/D ne tient pas compte des gaps (trous de prix). Si le prix ouvre en gap et ferme au milieu du range, le multiplicateur peut être proche de zéro même si le mouvement est significatif. Le [[Chaikin Money Flow]] addresse ce problème partiellement.

L'A/D cumulatif peut devenir décalé du prix actuel sur le long terme. Il peut continuer à monter même si le prix est dans un range ou une tendance baissière à court terme. Lire l'A/D en conjonction avec le prix récent est nécessaire.

Le volume alone n'indique pas la direction. L'A/D peut monter (accumulation) même si le prix baisse si le prix ferme près du haut de son range (les vendeurs ne sont pas assez forts pour faire baisser le prix malgré l'accumulation).

Le [[backtesting]] de l'A/D montre qu'il est plus utile pour identifier les divergences que pour générer des signaux d'achat/vente directs. Les divergences A/D-prix peuvent anticipier des retournements plusieurs semaines à l'avance.

## Liens et implications

L'A/D et le [[Chaikin Money Flow]] mesurent le même concept (flux de money) mais avec des méthodes différentes. Le CMF est une moyenne, l'A/D est cumulatif. Les deux peuvent être utilisés ensemble pour confirmation.

Le volume est inséparable de l'A/D.

L'[[order book dynamics]] affecte où le prix ferme par rapport au range. Un book avec beaucoup de résistance au-dessus du prix peut causer des closes près du milieu ou du bas du range, influençant le multiplicateur A/D.

## Sources