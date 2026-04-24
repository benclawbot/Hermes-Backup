---
titre: "Donchian Channel"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/tendance, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]", "[[Trading bot]]", "[[Breakout trading]]", "[[Trend following]]", "[[Volatility scaling]]", "[[Risk-reward ratio]]", "[[Position sizing]]"]
liens_opposition: []
---

# Donchian Channel

> [!info] Résumé
> Le Donchian Channel est un indicateur de tendance composé de trois lignes : le plus haut des N périodes (bande supérieure), le plus bas des N périodes (bande inférieure), et le midpoint (bande centrale). Il est principalement utilisé pour les stratégies de breakout.

## Définition

Le Donchian Channel a été popularisé par Richard Donchian, un trader de matières premières, dans les années 1970-1980. Il est l'un des indicateurs les plus simples : le plus haut et le plus bas sur N périodes.

Le calcul : bande supérieure = highest high sur N périodes. Bande inférieure = lowest low sur N périodes. Bande centrale = (bande supérieure + bande inférieure) / 2.

Le Donchian Channel est un indicateur de breakout pur. Si le prix dépasse le plus haut des N périodes, c'est un signal haussier. Si le prix descend en dessous du plus bas des N périodes, c'est un signal baissier.

La période standard est 20 (pour le Daily), ce qui correspond à environ un mois de trading. Pour le crypto 24h/24, 20 périodes peuvent être 20 heures, 20 jours, ou 20 semaines selon le timeframe utilisé.

## Contexte et origine

Richard Donchian était un trader de matières premières et l'un des pionniers du trading systématique. Il a été surnommé le « père du trend following ». Son approche était basée sur le suivi de tendance pur, sans analyse fondamentale.

Donchian croyait que les marchés suivent des tendances et que la meilleure façon de profitier de ces tendances était de rester à l'écart jusqu'à ce qu'une tendance soit confirmée par le prix cassant un range significatif.

Le Donchian Channel est à la base des systèmes de breakout utilisés par les fonds de trading comme les turtles (les fameuses "Turtles" qui ont démontré qu'une stratégie de breakout simple pouvait être très profitable).

En crypto, le Donchian Channel est largement utilisé dans les stratégies de breakout, particulièrement sur les timeframes de 4h et journalier. La nature volatile du marché crypto rend les signaux de breakout fréquents.

## Mécanismes et caractéristiques

Le signal principal est la cassure du range. Un breakout au-dessus de la bande supérieure = signal d'achat. Un breakdown en dessous de la bande inférieure = signal de vente.

La largeur du channel indique la volatilité. Un channel étroit signale une faible volatilité et un breakout potentiel imminent. Un channel large signale une volatilité élevée et potentiellement un mouvement en cours.

Le Donchian Channel peut être utilisé pour du trailing stop. Un trailing stop basé sur le Donchian : si achat, le stop est placé au plus bas des N périodes. Plus le prix monte, plus le stop monte. Cela permet de verrouiller les profits tout en laissant courir la position.

Les stratégies popularisées par les "Turtles" utilisaient un Donchian Channel 20 périodes pour entrée et un 10 périodes pour sortie. Cette combinaison permettait d'attraper les tendances longues tout en coupant rapidement les pertes.

## Nuances, critiques, limites

Le Donchian Channel génère beaucoup de faux signaux en marché latéral. Chaque fois que le prix traverse le range, un signal est généré, mais le prix revient souvent dans le range, causant des pertes.

Un filtre de volatilité est nécessaire. Une approche commune : ne prendre les signaux de breakout que quand l'ATR est au-dessus de sa moyenne mobile (volatilité en expansion) ou quand l'ADX est au-dessus de 25 (tendance confirmée).

Le Donchian Channel est un indicateur retardataire. Le breakout est confirmé seulement après que le prix ait dépassé le plus haut/plus bas, pas au moment où le mouvement commence.

Le [[backtesting]] du Donchian Channel en crypto montre des résultats contrastés. Les périodes de forte tendance (2017, 2020-2021) étaient très profitables. Les périodes de range (2018-2019, 2022) causaient des drawdowns significatifs.

## Liens et implications

Le breakout est le concept central du Donchian Channel.

La volatilité affecte directement le Donchian Channel.

Les support et résistance identifiés par le Donchian Channel sont les niveaux du plus haut/plus bas.

## Sources