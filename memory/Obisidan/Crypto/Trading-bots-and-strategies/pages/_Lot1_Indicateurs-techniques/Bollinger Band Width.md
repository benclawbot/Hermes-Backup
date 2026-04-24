---
titre: "Bollinger Band Width"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volatilité, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Bollinger Bands breakout]]", "[[Backtesting]]", "[[Volatility scaling]]", "[[Standard Deviation]]", "[[Breakout trading]]", "[[Risk-reward ratio]]", "[[Position sizing]]"]
liens_opposition: []
---

# Bollinger Band Width

> [!info] Résumé
> Le Bollinger Band Width mesure l'écart entre les bandes supérieure et inférieure des Bollinger Bands divisée par la bande médiane. Il quantifie la volatilité du marché et permet d'identifier les périodes de compression (faible volatilité) avant les mouvements explosifs.

## Définition

Le Bollinger Band Width (BB Width) est un indicateur dérivé des Bollinger Bands. Il calcule la distance entre la bande supérieure et la bande inférieure, relative à la bande médiane. La formule : BB Width = (Bande supérieure - Bande inférieure) / Bande médiane.

Le BB Width permet de quantifier la "compression" des Bollinger Bands. Une valeur basse indique des bandes étroites (faible volatilité, consolidation). Une valeur haute indique des bandes larges (haute volatilité, mouvement en cours).

Le BB Width est toujours positif. Il n'indique pas la direction du mouvement, seulement l'amplitude de la volatilité mesurée par les Bollinger Bands.

## Contexte et origine

John Bollinger a développé les Bollinger Bands dans les années 1980. Le Bollinger Band Width est une extension logique des Bands pour quantifier ce que les traders observent visuellement (bandes étroites vs larges).

Le concept de "Squeeze" (compression) est central aux Bollinger Bands. Quand les bandes se contractent, le marché est en consolidation et un breakout est imminent selon la théorie. Le BB Width quantifie cette observation.

En crypto, le BB Width est particulièrement utile pour identifier les périodes de basse volatilité avant les mouvementsdirectionnels forts. Les cryptomarchés sont connus pour leurs périodes de calme suivies de mouvements explosifs.

## Mécanismes et caractéristiques

Le squeeze (compression) est identifié quand le BB Width descend à un niveau historiquement bas. Cela signifie que la volatilité est anormalement basse et qu'un mouvement majeur est probable. Le breakout peut être haussier ou baissier.

L'expansion (bandes qui s'élargissent) suit typiquement le squeeze. Plus les bandes s'élargissent, plus le mouvement directionnel est fort. Le BB Width qui monte confirme une volatilité en expansion.

Le BB Width peut être utilisé pour confirmer les breakouts. Un breakout au-dessus de la bande supérieure avec BB Width en augmentation confirme un mouvement haussier. Un breakdown avec BB Width en hausse confirme un mouvement baissier.

La lecture absolue du BB Width est spécifique à chaque actif. Un BB Width de 0.05 peut être bas pour le Bitcoin mais normal pour une altcoin volatile. Il faut comparer le BB Width actuel à sa moyenne historique pour l'actif concerné.

## Nuances, critiques, limites

Le BB Width ne directionnalise pas le mouvement. Un squeeze peut précéder un mouvement haussier ou baissier. Les traders ont besoin d'un autre indicateur pour déterminer la direction du breakout.

Le BB Width est un indicateur retardataire. Il atteint un minimum après que le squeeze ait commencé, pas avant. Le timing du breakout ne peut pas être prédit précisément avec le BB Width seul.

Le niveau de "compression" qui signale un squeeze dépend de l'historique de l'actif. Un actif peut avoir des périodes de consolidation fréquentes sans breakout majeur. Le BB Width doit être combiné avec un autre indicateur de direction.

Le [[backtesting]] du BB Width en crypto montre que le squeeze ne garantit pas un mouvement majeur. Certains squeeze se résolvent par un mouvement latéral plutôt que directionnel.

## Liens et implications

Le [[Bollinger Bands breakout]] utilise le BB Width pour confirmer la volatilité. Un breakout avec BB Width en hausse est plus fiable qu'un breakout avec BB Width stable ou en baisse.

La volatilité mesurée par le BB Width permet d'anticiper les périodes de calme et les périodes de tempête.

La [[Standard Deviation]] est la base des Bollinger Bands et donc du BB Width. Le BB Width est essentiellement une normalisée de l'écart-type pour permettre la comparaison entre actifs.

## Sources