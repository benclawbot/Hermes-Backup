---
titre: "RSI Divergence strategy"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#théorie/rsi, #théorie/divergence, #concept/strategy]
créé: 2026-04-20
liens_forts: ["[[Mean reversion]]", "[[RSI]]", "[[Counter-trend trading]]"]
liens_opposition: []
---

# RSI Divergence strategy

> [!info] Résumé
> La divergence RSI identifie les retournements potentiels en détectant quand le prix fait un nuevo haut mais que le RSI fait un bas plus bas (divergence baissière) ou vice versa. Stratégie contre-trend qui nécessite un timing précis, souvent mal utilisée par les bots retail.

## Définition

La divergence RSI est un pattern où le prix et l'indicateur RSI se déplacent dans des directions opposées, suggérant un affaiblissement de la tendance et un potentiel retournement.

Une divergence baissière classique : le prix fait un nouveau haut plus élevé que le précédent, mais le RSI fait un nouveau haut plus bas que le précédent. Cela indique que le mouvement haussier perd de la force même si le prix monte encore.

Une divergence haussière : le prix fait un nouveau bas plus bas que le précédent, mais le RSI fait un nouveau bas plus haut que le précédent. Cela suggère que le mouvement baissier perd de la force malgré la baisse du prix.

La divergence peut être "régulière" (simple) ou "cachée" (plus subtile, continue la tendance). La divergence régulière signale un renversement, la divergence cachée signale une continuation.

## Contexte et origine

Le RSI (Relative Strength Index) a été créé par J. Welles Wilder en 1978 et présenté dans son livre "New Concepts in Technical Trading Systems". La divergence est l'une des utilisations principales de l'indicateur.

La stratégie de divergence RSI est devenue populaire dans les années 90-2000 comme outil d'analyse technique. Elle est particulièrement utilisée pour identifier les points de retournement en fin de tendance.

En crypto, la divergence RSI est largement utilisée sur des timeframes courts (1h, 4h) pour identifier des opportunités de contre-trend. Les bots retail l'utilisent souvent sans comprendre les subtilités, ce qui conduit à des faux signaux.

## Mécanismes et caractéristiques

Le RSI standard utilise 14 périodes. Une lecture au-dessus de 70 indique une zone surachetée, en dessous de 30 une zone survendue. Les divergences se forment souvent quand le RSI est dans ces zones extrêmes.

La divergence nécessite au moins deux pics (ou creux) du prix et deux pics (ou creux) correspondants du RSI. Plus la divergence est "profonde" (plus le pic/troughs du RSI diffèrent), plus le signal est fort.

Le signal d'achat arrive quand le prix fait un nouveau bas et le RSI fait un bas plus haut (divergence haussière). Le trader attend que le RSI sorte de la zone survendue (>30) pour confirmer le retournement.

Le stop-loss est placé en dessous du dernier creux pour les achats (ou au-dessus du dernier sommet pour les ventes). Le take-profit peut être la précédente résistance ou un niveau de RSI opposée.

## Nuances, critiques, limites

Le faux signal est le risque principal. Une divergence peut se former mais le prix continuer à movers dans la direction originale. La confirmation par d'autres indicateurs ou un breakout de range est nécessaire.

Le timing est difficile. La divergence peut se former sur plusieurs barres. Entrer trop tôt signifie risquer que la divergence ne se matérialise pas. Entrer trop tard signifie manquer une partie du mouvement.

Le [[counter-trend trading]] est inherement risqué. Trader contre la tendance principale requiert une discipline strict et un bon risk management. En marché strongly trending, les contre-trend traders perdent souvent.

La divergence cachée (continuation) est souvent confuse avec la divergence régulière. Utiliser la mauvaise interprétation peut conduire à trader contre la tendance au mauvais moment.

## Liens et implications

La [[RSI Divergence strategy]] est une forme de [[mean reversion]] car elle mise sur le retour du prix vers une "normale" après une déviation. Le [[RSI]] est l'indicateur central de la stratégie.

Le [[counter-trend trading]] et l'[[overbought/oversold]] sont des concepts liés. La divergence est un outil pour identifier les points où le counter-trend est susceptible de fonctionner.

Le [[backtesting]] de la divergence RSI révèle souvent un win rate relativement bas mais un RRR potentiellement élevé si les trades winners capturent des retournements significatifs.

## Sources

[^1]: Wilder, "New Concepts in Technical Trading Systems", MCGraw-Hill (1978)
[^2]: Carney, "Harmonic Trading", profitunity.com (consulted 2026)