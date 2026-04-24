---
titre: "Grid trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/grid, #concept/dca, #concept/spread]
créé: 2026-04-20
liens_forts: ["[[Bot DCA]]", "[[Marché borné]]", "[[Martingale strategy]]"]
liens_opposition: []
---

# Grid trading

> [!info] Résumé
> Le grid trading place des ordres d'achat et de vente à intervalles réguliers de prix, créant une grille qui capture les profits quand le marché oscille. Populaire en marché latéral mais expose à un risque directionnel significatif si le prix sort de la grille.

## Définition

Le grid trading est une stratégie qui divise le prix en niveaux espacés régulièrement et place des ordres d'achat à chaque niveau inférieur et des ordres de vente à chaque niveau supérieur. Chaque fois que le prix oscille entre les niveaux, les ordres sont exécutés et génèrent des petits profits capturant le spread.

L'idée est de profiter de la volatilité plutôt que de prédire la direction du marché. En marché latéral (range-bound), le prix oscille autour d'un niveau central et le grid capture ces mouvements. Plus le prix oscille, plus le nombre de trades et le profit potentiel.

Un grid classique fonctionne ainsi : prix central à 100, espacement de 5%. Ordres d'achat à 95, 90, 85. Ordres de vente à 105, 110, 115. Quand le prix monte à 105, l'ordre de vente à 105 est exécuté. Si le prix retombe à 100, l'ordre d'achat à 100 est exécuté. Chaque round-trip génère un profit de 5%.

## Contexte et origine

Le grid trading a été popularisé par les bots Telegram dans les années 2017-2019, quand les premiers adeptes de crypto ont commencé à promouvoir cette stratégie comme "sans risque" sur des groupes Telegram. 3Commas et d'autres plateformes ont intégré le grid trading comme fonctionnalité standard.

La simplicité apparente du concept (placer des orders à intervalles, profits de la volatilité) a attiré de nombreux traders novices. Les promesses de "doublez votre capital en 30 jours" sur des vidéos YouTube ont popularisé la stratégie, souvent sans explication des risques.

Les grilles plus sophistiquées incluent l'inverse grid (on accumule plus d'un actif quand le prix baisse) et le martingale grid (doubler la taille de position après chaque perte). Ces variantes amplifient les gains potentiels mais aussi les risques.

## Mécanismes et caractéristiques

Le paramètre clé est l'espacement du grid (grid spacing). Un espacement serré (1-2%) génère plus de trades et plus de profit en marché volatil, mais augmente les coûts de transaction et le risque de slippage. Un espacement large (5-10%) réduit le nombre de trades mais nécessite des mouvements plus importants pour générer du profit.

Le nombre de niveaux du grid détermine l'exposition. Un grid de 10 niveaux couvrant 50% de range offre une exposition modérée. Un grid de 20 niveaux couvrant 100% expose significativement plus de capital. Le risque est que le prix "sorte" du grid par le haut ou le bas sans atteindre tous les niveaux.

Le dimensionnement de chaque ordre du grid doit être suffisant pour générer un profit significatif mais pas trop grand pour ne pas épuiser le capital avant que le prix ne revienne. Si le prix descend progressivement dans le grid, chaque nouvel ordre achat ajoute à la position moyenne. Si le prix ne remonte pas, le drawdown cumulatif peut être sévère.

La grille peut être "floating" (suit le prix en ajustant automatiquement les niveaux autour du prix actuel) ou "static" (fixée sur les niveaux initiaux). La grille floating ajuste mieux aux conditions changeantes mais génère plus de trades partiels.

## Nuances, critiques, limites

Le risque directionnel est le principal problème du grid trading. Si le prix sort du grid par le bas (marché baissier prolongé), tous les niveaux inférieurs achat seront exécutés et la position moyenne sera de plus en plus basse. Si le prix ne remonte jamais, le drawdown peut être catastrophique.

Le [[bot DCA]] est une forme simplifiée de grid trading unidirectionnel (uniquement achat). Il partage le même problème de risque directionnel mais sans la symétrie du grid complet.

Le [[martingale strategy]] est parfois combiné avec le grid, doublant la taille après chaque perte pour récupérer plus vite. Cette combinaison est particulièrement dangereuse et a causé des pertes massives pour de nombreux traders.

Le [[drawdown]] peut être très important en grid trading si le marché entre dans une tendance marquée. Un grid de 10 niveaux de 5% chacun qui capture le début d'un bear market peut accumuler une position considérable avant que le prix ne stabilise.

## Liens et implications

Le [[grid trading]] est proche du [[bot DCA]] dans sa logique d'accumulation progressive, mais le grid ajoute une composante de vente qui réduit le risque directionnel sans l'éliminer.

Le [[martingale strategy]] est une variante agressive du grid qui intensifie le risque. Le débat sur l'efficacité des bots par rapport au trading manuel inclut des considérations sur les bots grid qui ont performed disastrement en 2022.

Le [[marché borné]] est le contexte idéal pour le grid trading. Si le prix oscille entre support et résistance, le grid capture chaque cycle. Mais identifier un marché borné à l'avance est difficile.

## Sources

[^1]: Binance Academy, "Grid Trading Explained", https://academy.binance.com/en/articles/grid-trading-explained (consulted 2026)
[^2]: 3Commas Blog, "Grid Bot Tutorial", https://3commas.io/blog (consulted 2026)