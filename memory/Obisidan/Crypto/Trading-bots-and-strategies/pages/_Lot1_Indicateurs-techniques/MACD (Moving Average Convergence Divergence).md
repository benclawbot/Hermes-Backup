---
titre: "MACD (Moving Average Convergence Divergence)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/momentum, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Analyse technique pour bots]]", "[[Moving average crossover]]", "[[RSI Divergence strategy]]", "[[Trading bot]]", "[[Backtesting]]"]
liens_opposition: []
---

# MACD (Moving Average Convergence Divergence)

> [!info] Résumé
> Le MACD est un oscillateur de momentum qui calcule la différence entre deux moyennes mobiles exponentielles (12 et 26 périodes) et une ligne de signal (EMA 9 périodes). Il permet d'identifier les retournements de tendance et la force du mouvement actuel.

## Définition

Le MACD (Moving Average Convergence Divergence) est un indicateur de momentum créé par Gerald Appel dans les années 1970. Il se compose de trois éléments : la ligne MACD (différence entre l'EMA 12 et l'EMA 26), la ligne de signal (EMA 9 de la ligne MACD), et l'histogramme (différence entre la ligne MACD et la ligne de signal).

La ligne MACD oscille au-dessus et en dessous de zéro. Quand elle croise au-dessus de la ligne de signal, c'est un signal haussier. Quand elle croise en dessous, c'est un signal baissier. Le croisement avec la ligne centrale (zéro) indique un changement de tendance général.

L'histogramme visualise la distance entre le MACD et sa ligne de signal. Un histogramme croissant signale un momentum haussier qui s'accélère. Un histogramme décroissant signale un momentum baissier qui s'accélère.

## Contexte et origine

Gerald Appel a développé le MACD dans les années 1970 et l'a popularisé via son livre "The Moving Average Convergence Divergence Trading Method". À l'origine conçu pour les actions et les marchés financiers traditionnels, il a été adopté par les traders crypto dans les années 2010.

L'indicateur a été créé pour résoudre le problème du délai (lag) inhérent aux moyennes mobiles simples. En utilisant des moyennes mobiles exponentielles, le MACD réagit plus rapidement aux changements de prix tout en conservant une capacité de lissage utile.

En crypto, le MACD est particulièrement populaire sur les timeframes courts (1h, 4h) et est souvent combiné avec le RSI pour confirmer les signaux.

## Mécanismes et caractéristiques

Le calcul du MACD utilise trois moyennes mobiles exponentielles : EMA 12 (court terme), EMA 26 (long terme), et EMA 9 (ligne de signal). La formule est :

Ligne MACD = EMA 12 - EMA 26
Ligne de signal = EMA 9 de la ligne MACD
Histogramme = Ligne MACD - Ligne de signal

Le croisement haussier se produit quand la ligne MACD croise au-dessus de la ligne de signal dans la zone négative (ou juste au-dessus du zéro). Ce signal est renforcé si le croisement se produit au-dessus de zéro avec un histogramme qui commence à grandir.

La divergence MACD est un signal plus puissant mais plus rare. Une divergence baissière se forme quand le prix fait un nouveau haut plus élevé que le précédent haut, mais que la ligne MACD fait un nouveau haut plus bas. Cela signale un affaiblissement du momentum haussier malgré la hausse du prix.

Le [[backtesting]] du MACD sur les données crypto montre que le croisement standard (12, 26, 9) produit beaucoup de faux signaux en marché latéral. Les traders ajustent souvent les périodes (par exemple 8, 17, 9 pour des réponses plus rapides) ou ajoutent des filtres comme le prix au-dessus d'une moyenne mobile longue.

## Nuances, critiques, limites

Le MACD est un indicateur retardataire (lagging indicator). Il utilise des moyennes mobiles qui, par définition, suivent le prix. En marché fortement trending, le MACD peut générer des signaux tardifs qui font manquer une partie significative du mouvement.

En marché latéral (range), le MACD produit de nombreux faux signaux. Les croisements ont lieu fréquemment mais le prix ne suit pas, causant des pertes répétées. Un filtre de volatilité ou de tendance est généralement nécessaire.

L'histogramme, bien que utile pour visualiser l'accélération du momentum, peut نفسه être source de confusion. Il change de signe avant la ligne MACD elle-même, créant des signaux prématurés ou contradictoires selon le contexte.

La divergence MACD est souvent sujette à des interprétations multiples. Toutes les divergences ne mènent pas à un retournement significatif, et identifier les divergences "réelles" parmi les "fausses" nécessite de l'expérience ou des règles supplémentaires.

## Liens et implications

Le MACD partage la logique du [[moving average crossover]] mais avec un lissage supplémentaire via la ligne de signal. La combinaison des deux renforce les signaux : quand les moyennes mobiles simples indiquent un croisement et que le MACD confirme au-dessus de zéro, le signal est plus robuste.

Le momentum mesuré par le MACD peut être utilisé comme filtre pour les stratégies de mean reversion.

L'[[analyse technique pour bots]] utilise le MACD comme l'un des indicateurs les plus répandus. Dans un contexte de [[multi timeframe analysis]], le MACD hebdomadaire confirme la tendance long terme tandis que le MACD horaire génère les points d'entrée.

## Sources