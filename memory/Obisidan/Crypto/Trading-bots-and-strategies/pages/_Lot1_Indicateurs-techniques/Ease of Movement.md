---
titre: "Ease of Movement"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volume, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]", "[[Risk-reward ratio]]"]
liens_opposition: []
---

# Ease of Movement

> [!info] Résumé
> L'Ease of Movement (EOM) est un indicateur qui relie le changement de prix au volume pour déterminer combien de "facilité" le prix a à bouger. Un EOM élevé signifie que le prix bouge facilement avec peu de résistance de volume.

## Définition

L'Ease of Movement (EOM) a été créé par Richard W. Arms Jr. dans les années 1960. Il mesure la relation entre le changement de prix et le volume. Un EOM positif signifie que le prix monte facilement (peu de volume nécessaire pour bouger le prix). Un EOM négatif signifie que le prix descend facilement.

Le calcul : Distance médian = ((High + Low) / 2 - (High de la période précédente + Low de la période précédente) / 2) / ((High + Low) / 2). Box Volume = Volume / 100 000 (normalisation). EOM = Distance médian / Box Volume × 1000.

L'EOM est généralement calculé sur 14 périodes et affiché comme une ligne oscillant autour de zéro. Les valeurs positives persistent en tendance haussière, négatives en tendance baissière.

## Contexte et origine

Richard W. Arms Jr., trader et analyste, a développé l'Ease of Movement dans les années 1960. Il cherchait un indicateur qui capturerait l'efficience du mouvement de prix par rapport au volume.

L'idée centrale : un marché "sain" devrait voir le prix bouger facilement avec un volume modéré. Un marché où le prix bouge difficilement (nécessitant beaucoup de volume) est potentiellement affaibli ou manipulé.

L'EOM est moins couramment utilisé que d'autres indicateurs de volume comme l'[[OBV]] ou le [[Chaikin Money Flow]]. Il reste un outil niche pour les traders qui veulent comprendre la relation volume-prix.

## Mécanismes et caractéristiques

L'EOM positif persistent signale une tendance haussière où le prix monte facilement. L'EOM négatif persistent signale une tendance baissière. Plus les valeurs sont extrêmes, plus le mouvement est "facile".

Le croisement de la ligne zéro signale un changement dans la dynamique. Un croisement vers le haut (EOM passe au-dessus de zéro) peut être un signal haussier. Un croisement vers le bas est baissier.

Les divergences EOM-prix peuvent révéler des faiblesses. Un prix en hausse mais EOM en baisse signale que le mouvement devient plus difficile (moins de volume pousse le prix). C'est une divergence baissière.

L'EOM est particulièrement utile pour confirmer les breakouts. Un breakout au-dessus de la résistance avec EOM positif confirme un mouvement haussier soutenu par le volume.

## Nuances, critiques, limites

L'EOM est très sensible à la normalisation du volume. Le facteur de division (100 000 dans la formule) affecte l'amplitude des valeurs. Chaque actif peut nécessiter un ajustement de ce facteur.

Le volume alone n'indique pas la direction. L'EOM peut être positif même si le prix descend si le prix descend avec très peu de volume (le prix "tombe" facilement). L'EOM mesure la facilité, pas la direction.

L'EOM fonctionne mieux en marché avec volume significatif. En crypto, les périodes de faible volume (week-ends, holidays) peuvent produire des lectures EOM erratiques.

Le [[backtesting]] de l'EOM montre qu'il est plus utile comme indicateur de confirmation que comme signal principal. Il peut confirmer des tendances ou des breakouts identifiés par d'autres indicateurs.

## Liens et implications

Le volume est la composante clé de l'EOM.

La volatilité affecte l'EOM indirectement.

Le [[market making]] utilise des concepts similaires à l'EOM. Les market makers ajustent leurs stratégies en fonction de la "facilité" perçue du mouvement de prix par rapport au volume.

## Sources