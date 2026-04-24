---
titre: "Range trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/range, #concept/latéral, #concept/support-résistance]
créé: 2026-04-21
liens_forts: ["[[Stratégie de mean reversion]]", "[[Bollinger Bands breakout]]", "[[Support et résistance]]"]
liens_opposition: ["[[Trend trading]]"]
---

# Range trading

> [!info] Résumé
> Le range trading exploite les marchés latéraux où le prix oscille entre un niveau de support et un niveau de résistance établis. La stratégie consiste à acheter près du support et à vendre près de la résistance, capturant le mouvement de va-et-vient.

## Définition

Le range trading est une stratégie qui identifie les périodes où le prix d'un actif oscille entre un niveau de support (bas) et un niveau de résistance (haut) sans établir de tendance claire. Le trader achète à proximité du support et vend à proximité de la résistance, capturant le mouvement latéral.

La logique du range trading repose sur le principe que le prix a une mémoire de ses niveaux passés. Un niveau de support qui a été testé plusieurs fois devient une zone où les acheteurs interviennent régulièrement. De même, un niveau de résistance est une zone où les vendeurs interviennent.

En marché latéral (range-bound), le prix rebondit entre ces niveaux de manière prévisible. Le range trader exploite cette prévisibilité en prenant des positions longues près du support et des positions courtes près de la résistance.

Les conditions requises pour un range trading fonctionnel sont un support et une résistance clairement identifiés, un prix qui rebondit sur ces niveaux sans les franchir, et une volatilité suffisante pour générer des profits sans sortir du range.

## Contexte et origine

Le range trading est une des formes les plus anciennes de spéculation. Avant l'ère du trend following, les marchands profitaient des variations saisonnières de prix entre différents marchés ou régions.

L'analyse technique moderne a formalisé les concepts de support et résistance. Les travaux de Hans Schicksman et d'autres praticiens des années 1960-1970 ont documenté les configurations de range et leurs implications pour le trading.

En crypto, les périodes de range sont fréquentes, surtout sur les altcoins après des périodes de hausse importante. Les phases d'accumulation sont souvent des ranges où les prix varient sans direction claire avant le prochain mouvement directionnel.

## Mécanismes et caractéristiques

L'identification d'un range requiert plusieurs tests du support et de la résistance. Plus le nombre de tests est élevé, plus le niveau est significatif. Un range avec 5 ou 6 rebonds sur chaque niveau est plus fiable qu'un range avec seulement 2 ou 3 tests.

Le [[Risk-reward ratio]] en range trading est favorable car le stop-loss peut être placé juste au-delà du niveau de support (pour une position longue) ou de résistance (pour une position courte), avec un take-profit près du niveau opposé.

Le volume est un élément clé pour confirmer les niveaux de range. Un support avec un volume élevé lors des rebonds est plus susceptible de tenir. À l'inverse, un support avec un volume décroissant chaque fois peut eventually être cassé.

Les [[Bollinger Bands breakout]] peuvent signaler la fin d'un range. Quand le prix sort au-delà des bandes externes avec un volume élevé, le range est probablement terminé et une nouvelle tendance émerge.

## Nuances, critiques, limites

Le principal risque du range trading est la cassure (breakout). Un range qui se termine par un mouvementdirectionnel fort peut générer des pertes importantes si le trader est positionné dans la mauvaise direction. Les faux breakouts sont fréquents et causent des pertes récurrentes.

La volatilité variable peut affecter l'efficacité du range trading. Un range avec une volatilité étroite génère des profits minuscules, tandis qu'un range avec une volatilité élevée peut être facilement cassé par des mouvements extrêmes.

Le range trading fonctionne mal en marché en tendance. Si le prix sort clairement du range, le range trader doit rapidement adapter sa stratégie ou prendre des pertes.

## Liens et implications

Le [[range trading]] est une forme de [[stratégie de mean reversion]] qui exploite les retours du prix vers les niveaux moyens du range. Les niveaux de support et résistance sont les anchor points de cette stratégie.

Le [[Bollinger Bands breakout]] signale la fin d'un range et le début potentiel d'une nouvelle tendance. Le trader de range doit être conscient de ce signal pour exit avant que le range ne soit cassé.

Le [[backtesting]] permet de valider une stratégie de range trading sur des données historiques. Le [[Drawdown]] peut être significatif si le range trading est appliqué pendant une période de tendance.


## Points clés à retenir

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: John Murphy, "Technical Analysis of the Financial Markets", 1999
[^2]: Alexander Elder, "Trading for a Living", 1993
