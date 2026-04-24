---
titre: "Trend trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/trend, #concept/directional, #concept/technical-analysis]
créé: 2026-04-21
liens_forts: ["[[Stratégie de momentum]]", "[[Breakout trading]]", "[[Multi timeframe analysis]]"]
liens_opposition: ["[[Counter-trend trading]]", "[[Stratégie de mean reversion]]"]
---

# Trend trading

> [!info] Résumé
> Le trend trading est une stratégie qui identifie la direction dominante du marché et prend des positions dans cette direction. L'adage "the trend is your friend" résume l'idée centrale : plutôt que de prédire les renversements, le trend trader suit le mouvement établi.

## Définition

Le trend trading est une approche qui consiste à identifier la tendance actuelle du marché (haussière, baissière, ou latérale) et à prendre des positions dans la direction de cette tendance. L'objectif est de rester exposé aux mouvements directionnels majeurs tout en évitant les mouvements contraires.

La première étape du trend trading est d'identifier la tendance. Les outils couramment utilisés incluent les moyennes mobiles (voir [[Moving average crossover]]), le [[MACD (Moving Average Convergence Divergence)|MACD]], et l'analyse des higher highs et higher lows sur les graphiques.

Une tendance haussière est caractérisée par des plus hauts successifs et des plus bas successifs. Une tendance baissière est l'inverse. Le trend trader cherche à acheter dans une tendance haussière (sur les pullbacks) et à vendre dans une tendance baissière (sur les rebonds).

La gestion de position en trend trading utilise des stop-loss dynamiques comme le [[trailing stop]] qui suivent le prix tout en protégeant les gains déjà réalisés. Le take-profit est généralement placé près des précédents plus hauts (en tendance haussière) ou plus bas (en tendance baissière).

## Contexte et origine

Le trend trading moderne trouve ses racines dans les travaux de Charles Dow à la fin du XIXe siècle. Les principes de Dow sur les tendances ont été formalisés et sont restés fondamentaux en analyse technique.

Ralph Nelson Elliott a développé la théorie des vagues qui décrit comment les tendances avancent selon des motifs cycliques. La théorie d'Elliott distingue les vagues d'impulsion (dans la direction de la tendance) des vagues correctives (contre la tendance).

Andrew Lo et d'autres researchers ont documenté l'existence de tendances à court, moyen, et long terme sur différents marchés, justifiant mathématiquement l'approche trend following. Les returns positifs des stratégies de trend following sur les grandes bases de données historiques ont confirmé la validité de l'approche.

## Mécanismes et caractéristiques

Le [[multi timeframe analysis]] est essentiel pour identifier les tendances. Un investisseur qui voit une tendance haussière sur le graphique daily peut chercher des opportunités d'achat sur le graphique hourly pendant les pullbacks.

Les indicateurs de tendance comme les [[moving average crossover|moyennes mobiles]] croisantes ou le [[ADX (Average Directional Index)|ADX]] quantifient la force de la tendance. Un ADX au-dessus de 25 indique une tendance forte, tandis qu'un ADX en dessous de 20 suggère un marché latéral.

Le [[Risk-reward ratio]] en trend trading est favorable car les mouvements de tendance sont généralement plus amples que les corrections. Un trend trader peut viser un ratio de 1:3 ou plus, avec un stop proche du dernier pullback et un take-profit près du dernier plus haut.

Les [[Fibonacci retracement|niveaux de Fibonacci]] sont utilisés pour identifier les pullbacks dans une tendance. Un retracement jusqu'au niveau 38,2% ou 61,8% dans une tendance établie offre un point d'entrée à meilleur prix.

## Nuances, critiques, limites

Le trend trading souffre du problème de retard à l'entrée (lag). Les indicateurs de tendance sont par nature réactifs : ils identifient la tendance après qu'elle a commencé. Ce retard peut réduire significativement les profits.

Les marchés latéraux sont le cauchemar du trend trader. En range, les tendances changent constamment et les signaux générés par les indicateurs de tendance échouent fréquemment. Un trend trader doit pouvoir identifier quand le marché n'est plus trending.

Le risque de rester en position pendant un renversement de tendance est significatif. Si le trend trader ne adapte pas ses stops ou ne reconnaît pas les signes de renversement, une seule transaction défavorable peut effacer plusieurs bénéfices.

## Liens et implications

Le [[trend trading]] englobe plusieurs stratégies spécifiques comme le [[breakout trading]], le [[pullback trading]], et le [[momentum trading]]. Chaque stratégie a ses propres règles d'entrée et de sortie dans le contexte d'une tendance.

L'[[analyse technique pour bots]] intègre les principes du trend trading dans des algorithmes automatisés. Le [[backtesting]] permet de valider une stratégie de trend trading avant deployment.

Le [[trailing stop]] est un outil de gestion de position spécifique au trend trading qui protège les gains tout en laissant courir les profits. Le [[Sharpe ratio]] est souvent utilisé pour mesurer la performance risk-adjusted d'une stratégie de trend trading.


## Points clés à retenir

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Charles Dow, "Wall Street Journal", 1900-1902
[^2]: Ralph Elliott, "The Wave Principle", 1938
