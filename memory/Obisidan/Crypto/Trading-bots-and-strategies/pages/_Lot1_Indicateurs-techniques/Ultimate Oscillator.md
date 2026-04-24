---
titre: "Ultimate Oscillator"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/oscillateur, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[RSI Divergence strategy]]", "[[Stratégie de momentum]]", "[[Backtesting]]", "[[Trading bot]]"]
liens_opposition: []
---

# Ultimate Oscillator

> [!info] Résumé
> L'Ultimate Oscillator, créé par Larry Williams en 1976, combine trois timeframes (7, 14, 28 périodes) en un seul indicateur pour réduire les faux signaux. Il identifie les divergences et les conditions de surachat/survente sur plusieurs échelles de temps.

## Définition

L'Ultimate Oscillator a été créé par Larry Williams en 1976 et présenté dans son livre "How to Make Money in Commodities". Il combine trois périodes différentes (courte, moyenne, longue) pour créer un oscillateur plus stable que les indicateurs à une seule période.

Le calcul utilise le "Buying Pressure" (BP) qui est le prix de clôture moins le plus bas entre la clôture actuelle et la clôture précédente. Le "True Range" (TR) est le plus grand entre le haut actuel moins le bas actuel, la valeur absolue du haut actuel moins la clôture précédente, et la valeur absolue du bas actuel moins la clôture précédente.

L'oscillateur combine trois moyennes mobiles pondérées des ratios BP/TR sur trois périodes différentes : 7, 14, et 28. La moyenne la plus courte (7) a le poids le plus élevé, la plus longue (28) a le poids le plus faible.

L'Ultimate Oscillator oscille entre 0 et 100. Au-dessus de 70 = surachat. En dessous de 30 = survente. Ces niveaux peuvent être ajustés selon l'actif et le timeframe.

## Contexte et origine

Larry Williams a créé l'Ultimate Oscillator pour résoudre un problème commun aux oscillateurs : les faux signaux en marché trending. Un oscillateur à une seule période peut donner des signaux contradictoires quand le marché est en tendance forte.

L'innovation de Williams était de combiner plusieurs timeframes. Si le signal est confirmée sur les trois périodes, il est plus fiable. Cette approche multi-timeframe est maintenant utilisée dans de nombreux indicateurs.

L'Ultimate Oscillator est l'un des indicateurs les plus réputés de Williams, avec le [[Williams %R]]. Williams est conocido pour ses performances spectaculaires en trading (11 000% de rendement en 1987).

## Mécanismes et caractéristiques

Le signal principal est la divergence. Une divergence haussière (prix en baisse, oscillateur en hausse) dans la zone survendue (<30) est un signal d'achat fort. Une divergence baissière (>70) est un signal de vente fort.

Le croisement de la ligne 50 est aussi utilisé. Au-dessus de 50 = momentum haussier. En dessous de 50 = momentum baissier. Ce signal est moins utilisés que les divergences.

La période longest (28) filtre le bruit. Si les trois périodes sont alignées (même direction), le signal est plus robuste. Si elles divergent, le signal est faible ou faux.

L'Ultimate Oscillator peut être utilisé comme oscillateur indépendant ou en combinaison avec d'autres indicateurs. En crypto, il est souvent combiné avec une moyenne mobile pour confirmer la direction.

## Nuances, critiques, limites

Le triple calcul rend l'Ultimate Oscillator plus lent que les oscillateurs simples. Il peut être en retard sur les retournements de prix. Ce délai est le prix à payer pour une meilleure filtrage du bruit.

Les signaux dans la zone neutre (30-70) sont peu fiables. Les divergences qui se forment près des extremités (0 ou 100) sont plus significatives. Les lectures entre 30 et 70 doivent être ignorées ou utilisées avec prudence.

Le [[backtesting]] de l'Ultimate Oscillator en crypto montre qu'il fonctionne mieux quand la divergence est confirmée par un cassure de ligne de tendance sur le prix. Le signal seul peut être insuffisant.

La période de 28 peut être trop longue pour les timeframes courts. Pour du trading intraday en crypto, des périodes plus courtes (4, 7, 14) peuvent être plus appropriées.

## Liens et implications

Le RSI et l'Ultimate Oscillator sont tous deux des oscillateurs de momentum mais avec des calculs différents.

La divergence est le signal principal des deux indicateurs.

Le momentum analysé par l'Ultimate Oscillator sur trois périodes permet une vue plus complète du momentum court, moyen, et long terme simultanément.

## Sources