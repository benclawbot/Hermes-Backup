---
titre: "Multi timeframe analysis"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/multi-timeframe, #méthode/analysis, #concept/trend]
créé: 2026-04-20
liens_forts: ["[[Analyse technique pour bots]]", "[[Trend following]]", "[[Confluence]]"]
liens_opposition: []
---

# Multi timeframe analysis

> [!info] Résumé
> L'analyse multi-timeframe examine le même actif sur différents horizons temporels (daily, 4h, 1h) pour confirmer les tendances et améliorer les signaux. Les bots peuvent scanner simultanément plusieurs timeframes pour identifier la confluence.

## Définition

L'analyse multi-timeframe consiste à étudier un actif sur plusieurs résolutions temporelles avant de prendre une décision de trading. L'idée est que les signaux sur un timeframe plus long sont plus fiables et définissent la tendance générale, tandis que les signaux sur un timeframe plus court génèrent les points d'entrée.

Par exemple, sur le daily on identifie une tendance haussière. Sur le 4h on cherche un pullback vers un support pour entrer. Sur le 1h on timing l'entrée exacte. Le trade n'est pris que si tous les timeframes sont alignés (confluence).

L'alignement des timeframes increases la probabilité de succès. Si le daily montre une tendance haussière, un signal vendeur sur le 1h est contrarian et moins probable de succeed. Si le daily montre une tendance baissière, un signal d'achat sur le 1h est contrarian aussi.

## Contexte et origine

L'analyse multi-timeframe a été formalisée par des auteurs comme Anna Coulling et plus tard par les traders algorithmiques qui ont compris la valeur de combiner des informations de différentes échelles.

Les traders manual utilisent depuis longtemps l'analyse de plusieurs timeframes "à l'œil". L'informatique a permis d'automatiser ce processus et de le systématiser dans des bots de trading.

En trading algorithmique, le multi-timeframe est particulièrement puissant car le bot peut traiter simultanément des données de tick, de 1-minute, 5-minute, hourly, daily, etc. sans surcharge cognitive.

## Mécanismes et caractéristiques

Le choix des timeframes doit être cohérent. Unesuite typique est : 5min, 15min, 1h, 4h, daily. Les ratios entre timeframes doivent être suffisants pour que chaque timeframe offre une perspective distincte. Un ratio de 4-5x entre timeframes successifs est standard.

La hiérarchie de lecture est : le timeframe le plus long définit la tendance et le contexte (long, short, ou range). Le timeframe intermédiaire sert à identifier les setups. Le timeframe court sert à timing l'entrée.

La règle d'or : ne tradez jamais contre la tendance du timeframe supérieur. Si le daily est baissier, les signaux acheteurs sur le 1h sont des opportunités de mean reversion à court terme, pas des renversements de tendance.

Les indicateurs peuvent être différents selon le timeframe. Le daily peut utiliser une EMA 50 pour le trend, le 4h utilise le RSI pour les niveaux de suracheté/survendu, le 1h utilise le volume pour confirmer les cassures.

## Nuances, critiques, limites

L'alignement parfait est rare. Parfois le daily est haussier, le 4h est baissier (pullback), et le 1h montre une consolidation. Le bot doit avoir des règles pour navigerdans ces situations ambigües.

Le lag augmente avec les timeframes plus longs. Le signal sur le daily arrive des jours après le début du mouvement. Un trader qui attend la confirmation du daily peut manquer une grande partie du move.

Les timeframes très courts (tick, 1min) sont envahis par le noise. Les patterns qui apparaissent sur ces timeframes sont souvent aléatoires. Le [[backtesting]] doit valider que les signaux multi-timeframe ont une edge réelle.

Les conflits entre timeframes peuvent créer de la paralysie décisionnelle. Si le daily dit "acheter" et le 4h dit "vendre", le trader doit avoir des règles claires pour résoudre le conflit.

## Liens et implications

Le [[multi timeframe analysis]] est une extension de l'[[analyse technique pour bots]]. La [[confluence]] est le phénomène où plusieurs timeframes et indicateurs pointent dans la même direction, augmentant la probabilité de succès.

Le [[trend following]] sur le long terme définit le contexte pour les stratégies de [[momentum]] ou de [[mean reversion]] sur des timeframes plus courts.

Le [[sentiment analysis]] peut être intégrée au multi-timeframe pour ajouter une dimension de sentiment de marché à l'analyse technique.

## Sources

[^1]: Coulling, "Technical Analysis for Beginners", Independently published (2014)
[^2]: Babcock, "Multiple Timeframes", Investopedia (consulted 2026)