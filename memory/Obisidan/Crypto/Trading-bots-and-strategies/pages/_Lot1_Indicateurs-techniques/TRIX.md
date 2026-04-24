---
titre: "TRIX"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/tendance, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Analyse technique pour bots]]", "[[RSI Divergence strategy]]", "[[Backtesting]]"]
liens_opposition: []
---

# TRIX

> [!info] Résumé
> Le TRIX (Triple Exponential Average) est un indicateur de momentum qui calcule le taux de variation d'une triple moyenne mobile lissée. Il filtre le bruit du marché en éliminant les cycles courts et se concentre sur les tendances significatives.

## Définition

Le TRIX (Triple Exponential Average) a été créé par Jack Hutson dans les années 1980. Il calcule le taux de variation d'une moyenne mobile exponentielle triple, ce qui élimine les mouvements de prix insignifiants et ne laisse que la tendance de fond.

Le calcul : d'abord, calculer l'EMA du prix (EMA1). Ensuite, calculer l'EMA de l'EMA1 (EMA2). Ensuite, calculer l'EMA de l'EMA2 (EMA3). Le TRIX est le taux de variation (en pourcentage) de l'EMA3 sur une période donnée.

Le TRIX oscille autour de zéro. Quand il est positif et monte, le momentum est haussier. Quand il est négatif et descend, le momentum est baissier. Le croisement de la ligne zéro est un signal de tendance.

Le paramètrage standard utilise une période de 15 pour l'EMA. La période du TRIX (combien de périodes pour calculer le taux de variation) est généralement la même (15).

## Contexte et origine

Jack Hutson a introduit le TRIX dans les années 1980 via le magazine "Technical Analysis of Stocks & Commodities". L'indicateur a été conçu comme un outil de filtrage pour les traders qui vouient éliminer les faux signaux.

Le triple lissage du TRIX le rend particulièrement utile pour les stratégies de tendance long terme. Les mouvements courts sont filtrés, ne laissant que les mouvements significatifs qui correspondent à des tendances reales.

En crypto, le TRIX est moins populaire que le MACD mais offre une approche similaire avec un lissage supplémentaire. Il est utilisé principalement sur les timeframes journaliers et hebdomadaires pour identifier les tendances de fond.

## Mécanismes et caractéristiques

Le signal principal est le croisement de la ligne zéro. TRIX passe au-dessus de zéro = signal haussier. TRIX passe en dessous de zéro = signal baissier. Ce croisement représente un changement dans la tendance de fond.

Une divergence entre le prix et le TRIX peut signaler un retournement. Si le prix fait un nouveau haut mais le TRIX fait un nouveau haut plus bas, c'est une divergence baissière. Même principe pour la divergence haussière.

Le TRIX en tant qu'oscillateur : les lectures extremes (TRIX très positif ou très négatif) peuvent indiquer des conditions de surachat/survente. Mais ces lectures extremes sont relatives et dépendent de l'historique de l'indicateur.

Le TRIX peut être utilisé comme filtre de tendance. Une stratégie qui achète uniquement quand le TRIX est au-dessus de zéro et vend quand il est en dessous peut éviter les trades contre la tendance principale.

## Nuances, critiques, limites

Le triple lissage rend le TRIX très lent. En marché volatile ou en début de tendance, le TRIX peut être en retard considérable par rapport à des indicateurs moins lissés. Ce délai peut faire manquer une partie significative du mouvement.

Le TRIX ne directionnalise pas par lui-même. Il doit être combiné avec un autre indicateur ou analysé en conjonction avec le prix pour déterminer si le momentum est haussier ou baissier.

Le backtesting du TRIX seul montre des résultats corrects mais pas exceptionnels. La combination du TRIX avec un indicateur de momentum plus réactif (comme le RSI) peut améliorer les résultats.

Le TRIX fonctionne mieux en marché trending. En marché latéral, le croisement de la ligne zéro peut être fréquent et peu fiable.

## Liens et implications

Le momentum est le concept central du TRIX. Le triple lissage filtre le bruit pour ne laisser que le momentum réel.

Le [[Moving average crossover]] est une forme plus simple du même concept. Le TRIX peut être vu comme un MACD avec un lissage supplémentaire. Les deux comparent une moyenne courte à une moyenne longue via un oscillateur.

L'[[analyse technique pour bots]] intègre le TRIX comme indicateur de tendance. Il est particulièrement utile pour les bots qui tradent sur plusieurs jours avec une approche trend-following.

## Sources