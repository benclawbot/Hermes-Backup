---
titre: "Vortex Indicator"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/tendance, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[RSI Divergence strategy]]", "[[Backtesting]]", "[[ADX (Average Directional Index)]]", "[[Volatility scaling]]", "[[Trend following]]", "[[Momentum]]", "[[Trading bot]]"]
liens_opposition: []
---

# Vortex Indicator

> [!info] Résumé
> Le Vortex Indicator (VI) est un indicateur de tendance créé par Etienne Botes et Douglas Siepman en 2010. Il identifie les retournements de tendance et la force de la tendance en se basant sur les mouvements de prix relatives au haut et au bas des périodes précédentes.

## Définition

Le Vortex Indicator a été présenté par Etienne Botes et Douglas Siepman dans le magazine "Technical Analysis of Stocks & Commodities" en 2010. Il se compose de deux lignes : VI+ (tendance haussière) et VI- (tendance baissière).

Le calcul commence avec les "Vortex Movements" (VM). Le VM+ est la valeur absolue de la différence entre le haut actuel et le bas précédent. Le VM- est la valeur absolue de la différence entre le bas actuel et le haut précédent.

Le Vortex Indicator normalise ces mouvements en les divisant par le "True Range" (TR). Le TR est le plus grand entre le range high-low, la différence entre le high actuel et la clôture précédente, et la différence entre le low actuel et la clôture précédente.

VI+ = VM+ / TR (sur N périodes). VI- = VM- / TR (sur N périodes). Les deux lignes oscillent librement, sans limites fixes. Plus VI+ est supérieur à VI-, plus la tendance haussière est forte.

## Contexte et origine

Le Vortex Indicator est récent (2010) par rapport à beaucoup d'autres indicateurs techniques. Botes et Siepman l'ont développé pour capturer la dynamique des retournements de tendance.

L'inspiration venait du concept de "vortex" (tourbillon) dans la nature — les prix oscillent entre mouvements ascendants et descendants, tout comme un fluide. Le VI capture cette oscillation entre pression haussière et baissière.

Le VI est particulièrement adapté aux marchés modernes (actions, forex, crypto) où les retournements sont fréquents et les tendances moins durables que dans le passé.

## Mécanismes et caractéristiques

Le signal principal est le croisement VI+/VI-. Quand VI+ croise au-dessus de VI-, c'est un signal haussier ( début de tendance haussière). Quand VI- croise au-dessus de VI+, c'est un signal baissier.

La distance entre VI+ et VI- indique la force de la tendance. Plus l'écart est grand, plus la tendance est forte. Si les deux lignes sont proches, le marché est en range ou indécision.

Les lectures extremes (>1.0 ou <1.0) peuvent indiquer des conditions de momentum fort. Un VI+ très au-dessus de VI- confirme une tendance haussière forte. L'inverse pour une tendance baissière.

La période standard est 14. Une période plus courte (8-10) rend le VI plus réactif mais plus bruité. Une période plus longue (20+) le rend plus lisse mais plus lent.

## Nuances, critiques, limites

Le Vortex Indicator est récent et moins testé que des indicateurs établis comme l'ADX.

Le VI peut être bruité sur les timeframes courts. Les croisements fréquents en marché latéral causent des faux signaux. Un filtre (prix au-dessus d'une moyenne mobile, ADX > un seuil) peut aider.

Le VI n'a pas de niveaux de surachat/survente comme le RSI.

Le VI fonctionne mieux comme indicateur de confirmation, en combinaison avec d'autres outils. Les traders utilisent généralement le VI avec une analyse de tendance separately pour éviter les faux signaux.

## Liens et implications

La tendance est le concept central du Vortex Indicator.

L'ADX et le VI mesurent tous deux la tendance mais avec des méthodes différentes.

La volatilité affecte le VI indirectement via le True Range.

## Sources