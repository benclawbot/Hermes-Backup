---
titre: "Bollinger Bands breakout"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#théorie/bollinger, #théorie/breakout, #concept/volatility]
créé: 2026-04-20
liens_forts: ["[[Volatilité]]", "[[Momentum]]", "[[Breakout trading]]"]
liens_opposition: ["[[False breakout]]"]
---

# Bollinger Bands breakout

> [!info] Résumé
> Le breakout Bollinger Bands exploite les cassures de volatilité quand le prix sort des bandes de déviation. Les breakouts peuvent signaler un momentum fort mais aussi des fakeouts fréquents sur les marchés crypto peu liquides.

## Définition

Les Bollinger Bands sont un indicateur de volatilité composé d'une moyenne mobile (typiquement 20 périodes) et de deux bandes de déviation (2 écarts-types au-dessus et en dessous). Les bandes se dilatent en période de volatilité haute et se contractent en période de calme.

Un breakout se produit quand le prix sort au-dessus de la bande supérieure (signal haussier) ou en dessous de la bande inférieure (signal baissier). Le breakout suggère que le mouvement est suffisamment fort pour, une expansion de volatilité.

Le concept sous-jacent est que les prix qui sortent des bandes ont dépassé une "norme" statistique et sont susceptibles de continuer dans la direction du breakout. C'est un señal de momentum.

## Contexte et origine

John Bollinger a développé les Bollinger Bands dans les années 1980 et les a popularisés dans son livre "Bollinger on Bollinger Bands" (2002). L'indicateur est devenu l'un des plus utilisés en analyse technique.

La popularité des bandes vient de leur polyvalence : elles mesurent à la fois la tendance et la volatilité, permettant d'identifier les cassures de range et les expansions de volatilité.

En crypto, les Bollinger Bands sont particulièrement populaires sur les timeframes courts pour identifier les points de cassure avant des mouvements directionnels importants.

## Mécanismes et caractéristiques

Les paramètres par défaut (20 périodes, 2 écarts-types) fonctionnent bien dans many marchés. Des périodes plus courtes (10) rendent les bandes plus réactives. Des périodes plus longues (50) les rendent plus lentes mais plus fiables.

Le "Bollinger bounce" est le phénomène où le prix tend à retourner vers la bande médiane après avoir touché une bande extrême. Ce comportement justifie les stratégies de mean reversion basées sur les Bollinger.

Le "Bollinger squeeze" se produit quand les bandes se contractent fortement, indiquant une période de faible volatilité qui précède souvent un mouvement important (explosion de volatilité). Le squeeze est un signal d'anticipation.

Le breakout au-dessus de la bande supérieure est_plus haussier si le prix était en dessous des bandes avant (et vice versa). Cette rule filtre les faux breakout hors contexte.

## Nuances, critiques, limites

Le [[false breakout]] est le risque principal. En marché with low liquidity, le prix peut brièvement sortir des bandes et revenir, causant des pertes pour les traders qui ont entré sur le breakout.

La volatilité crypto est extreme. Les bandes de 2 écarts-types sont souvent insuffisantes pour contenit les mouvements forts. Des configurations à 3 écarts-types sont parfois utilisées pour réduire les faux signaux.

Le breakout peut être un signal tardif. Si le prix sort des bandes après un mouvement déjà significatif, le risque de correction après l'entrée est élevé. Combiner avec un indicateur de momentum (RSI, MACD) améliore le timing.

Le [[whipsaw]] est fréquent en marché range quand le prix traverse les bandes dans les deux sens sans direction durable. Filtrer par tendance (ex: uniquement acheter si le prix est au-dessus d'une EMA 50) réduit les faux signaux.

## Liens et implications

Le [[Bollinger Bands breakout]] est une forme de [[breakout trading]] exploitée par les stratégies de [[momentum]]. Les [[volatilité|volumes]] confirment souvent la qualité du breakout.

Le [[false breakout]] est le risque associé. Les stratégies de [[mean reversion]] utilisent parfois le "bounce" sur les bandes plutôt que le breakout pour éviter les faux signaux.

Le [[backtesting]] des Bollinger Bands révèle généralement un win rate modeste mais des gains importants sur les winners. Le RRR typique est de 2:1 ou plus.

## Sources

[^1]: Bollinger, "Bollinger on Bollinger Bands", McGraw-Hill (2002)
[^2]: Investopedia, "Bollinger Bands", https://www.investopedia.com/terms/b/bollingerbands.asp (consulted 2026)