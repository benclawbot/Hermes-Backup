---
titre: "OBV (On Balance Volume)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volume, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Analyse technique pour bots]]", "[[Backtesting]]"]
liens_opposition: []
---

# OBV (On Balance Volume)

> [!info] Résumé
> L'OBV (On Balance Volume) est un indicateur cumulatif qui additionne le volume quand le prix monte et soustrait le volume quand le prix baisse. Il permet d'identifier si le volume "confirme" un mouvement de prix ou si le volume préfigure un retournement.

## Définition

L'OBV (On Balance Volume) a été créé par Joe Granville et présenté dans son livre "Granville's New Key to Stock Market Profits" (1963). C'est l'un des indicateurs de volume les plus simples mais aussi les plus utilisés.

La logique de l'OBV est simple : si le prix de clôture est supérieur à la clôture précédente, le volume de cette période est additionné à l'OBV. Si le prix de clôture est inférieur, le volume est soustrait. Le résultat est une ligne cumulative qui monte quand le volume suit le prix haussier.

L'OBV est utilisé pour confirmer une tendance. Si le prix et l'OBV font de nouveaux hauts ensemble, la tendance haussière est confirmée par le volume. Si le prix fait un nouveau haut mais l'OBV stagne ou baisse, c'est une divergence baissière (faussaire).

Une divergence entre OBV et prix est souvent un signal précurseur d'un retournement. Si le prix monte mais que l'OBV commence à baisser, le mouvement haussier manque de soutien en volume et un retournement baissier est probable.

## Contexte et origine

Joe Granville a introduit l'OBV en 1963. Il était connu pour ses indicateurs basée sur le volume et pour ses prédictions de marché parfois spectaculaires (et parfois complètement fausses). L'OBV était son indicateur phare.

Granville croyait que le volume était le "fuel" du mouvement de prix. Sans volume, un mouvement de prix est superficiel et temporaire. L'OBV captait cette idée en reliant direction de prix et volume en une seule ligne.

L'OBV a été conçu pour les actions mais s'applique à tous les marchés financiers, y compris les crypto-actifs. En crypto, l'OBV est particulièrement utile sur les timeframes longs (journalier, hebdomadaire) pour identifier les tendances de fond.

## Mécanismes et caractéristiques

Le calcul de l'OBV est cumulatif. On commence avec OBV = 0 (ou une valeur arbitraire). Pour chaque période : si Clôture > Clôture précédente, OBV = OBV + Volume. Si Clôture < Clôture précédente, OBV = OBV - Volume. Si Clôture = Clôture précédente, OBV reste inchangé.

L'OBV est généralement affiché comme une ligne continue, parfois avec une moyenne mobile (OBV SMA) pour lisser les fluctuations. Le croisement OBV/SMA peut générer des signaux.

Une divergence entre OBV et prix est le signal principal.

L'OBV permet aussi d'identifier les cassures de supports/résistances. Si le prix casse un support mais que l'OBV ne casse pas, la cassure du prix n'est pas confirmée par le volume et est potentiellement faible.

## Nuances, critiques, limites

L'OBV est très sensible à la granularité des données de volume. Les données journalières sont appropriées, mais sur des timeframes courts (1min, 5min), le bruit rend l'OBV moins fiable. Le volume reporté par les exchanges crypto peut aussi être sujet à manipulation (wash trading).

L'OBV ne distingue pas la taille des trades. Un gros trade (quelques millions) et un petit trade (quelques centaines) ont le même impact sur l'OBV. Des indicateurs comme le [[Chaikin Money Flow]] ou le [[Money Flow Index]] tiennent compte de la taille des trades.

L'OBV est un indicateur retardataire (lagging) car il nécessite une période de comparaison pour calculer la direction. Il ne prédira pas un retournement; il le confirme après qu'il se soit produit.

Le backtesting de l'OBV seul montre des résultats mitigés. L'OBV fonctionne mieux comme indicateur de confirmation, en combinaison avec d'autres outils comme les moyennes mobiles ou le RSI.

## Liens et implications

L'OBV est lié au volume car c'est le volume qui détermine la direction de l'OBV.

L'[[order book dynamics]] affecte l'OBV car les dynamics d'achat/vente se reflètent dans le volume. Un OBV qui monte malgré un prix qui stagne peut indiquer une accumulation sournoise.

La divergence OBV-prix est un concept clé.

## Sources