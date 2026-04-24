---
titre: "ATR (Average True Range)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volatilité, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Gestion du risque]]", "[[Position sizing]]", "[[Backtesting]]", "[[RSI Divergence strategy]]"]
liens_opposition: []
---

# ATR (Average True Range)

> [!info] Résumé
> L'ATR (Average True Range) mesure la volatilité d'un actif en calculant la moyenne des ranges vraie sur une période donnée. Il est principalement utilisé pour dimensionner les positions et définir les stops losses de manière adaptative selon les conditions de marché.

## Définition

L'ATR (Average True Range) est un indicateur de volatilité créé par J. Welles Wilder et présenté dans son livre "New Concepts in Technical Trading Systems" (1978). Contrairement à d'autres indicateurs qui identifient des signaux de trading, l'ATR mesure uniquement l'intensité du mouvement de prix.

Le "True Range" est le plus grand des trois valeurs suivantes : la différence entre le plus haut et le plus bas de la période, la différence entre le plus haut de la période et la clôture de la période précédente, et la différence entre le plus bas de la période et la clôture de la période précédente.

L'ATR est ensuite calculé comme une moyenne mobile exponentielle du True Range sur N périodes (typiquement 14). Un ATR élevé signifie que le prix bouge beaucoup (haute volatilité). Un ATR bas signifie un prix stable (basse volatilité).

## Contexte et origine

J. Welles Wilder a introduit l'ATR en 1978 comme composante de son système de trading sur les matières premières (d'où le nom "Commodity Channel Index" dans d'autres indicateurs du même auteur). L'indicateur a été conçu pour aider les traders à adapter leurs stops losses à la volatilité courante du marché.

Initiallement destiné aux marchés des matières premières, l'ATR a été adopté par tous les marchés financiers, y compris le crypto. La nature 24h/24 du trading crypto et les périodes de volatilité extrême ont fait de l'ATR un outil essentiel pour le [[position sizing]] et la [[gestion du risque]].

Wilder a également créé le RSI, le Parabolic SAR, et le DMI (Directional Movement Index, dont l'ADX fait partie), tous des indicateurs fondamentaux en analyse technique moderne.

## Mécanismes et caractéristiques

Le calcul de l'ATR nécessite d'abord le True Range pour chaque période. Pour une période quotidienne : TR = max(H - L, |H - CL|, |L - CL|) où H = plus haut, L = plus bas, CL = clôture précédente.

L'ATR est ensuite l'EMA (ou SMA dans certaines implémentations) du TR sur N périodes. Avec N = 14 (valeur par défaut), l'ATR représente la volatilité moyenne sur les 14 dernières périodes.

L'utilisation principale de l'ATR est le dimensionnement des stops losses. Un stop placé à "1.5 × ATR" en dessous du prix d'achat offre un buffer proportionnel à la volatilité du marché. En période de haute volatilité, le stop est plus large ; en période de calme, il est plus serré.

Pour le [[position sizing]], la formule standard est : Taille de position = (Risque en USD) / (ATR × Multiplicateur). Si un trader risque 100$ par trade et que l'ATR est 50$, avec un multiplicateur de 2, la taille est 100 / (50 × 2) = 1 unité.

Les bandes de [[Keltner Channels]] utilisent l'ATR pour définir les bandes supérieure et inférieure autour d'une moyenne mobile, servant d'indicateur de breakout potentiel quand le prix sort de ces bandes.

## Nuances, critiques, limites

L'ATR ne directionnalise pas le mouvement. Un ATR élevé peut signifier une forte hausse ou une forte baisse. Les traders doivent combiner l'ATR avec un indicateur de direction (comme le RSI ou les moyennes mobiles) pour prendre des décisions.

L'ATR est un indicateur retardataire. Il reflète la volatilité passée, pas la volatilité future. Pendant les événements de marché soudains (flash crash, news majeures), l'ATR peut sous-estimer ou surestimer la volatilité selon le contexte.

La valeur absolue de l'ATR n'est pas directement comparable entre actifs. Un ATR de 100 est faible pour le Bitcoin mais extremement élevé pour une altcoin à 0.50$. Les traders crypto doivent normaliser l'ATR en pourcentage (%ATR) pour comparer la volatilité entre actifs.

L'ATR seul ne suffit pas pour définir un stop loss. many traders utilisent des multiples de l'ATR combinés avec des niveaux de support horizontaux pour créer des stops plus robustes.

## Liens et implications

L'ATR est intimement lié à la [[gestion du risque]] car il permet de calibrer la taille des positions et les stops losses selon la volatilité du marché. Un système de trading sans gestion de la volatilité via ATR est considéré comme incomplet.

Le [[position sizing]] basé sur l'ATR est une application directe. Les stratégies de [[grid trading]] utilisent également l'ATR pour espacer leurs grilles : un ATR élevé signifie des grilles plus larges, un ATR bas signifie des grilles plus serrées.

L'ADX (Average Directional Index) utilise des concepts similaires pour mesurer la force de la tendance.

## Sources