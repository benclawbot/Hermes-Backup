---
titre: "Swing trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/swing, #concept/medium-term, #concept/trend]
créé: 2026-04-21
liens_forts: ["[[Trend trading]]", "[[Analyse technique pour bots]]", "[[Multi timeframe analysis]]"]
liens_opposition: ["[[Scalping]]", "[[Position trading]]"]
---

# Swing trading

> [!info] Résumé
> Le swing trading vise à capturer des mouvements de prix sur des durées de quelques jours à quelques semaines. Cette stratégie se positionne entre le scalping (quelques minutes) et le position trading (quelques mois), profitant des balançoires (swings) naturelles du marché.

## Définition

Le swing trading est une stratégie qui cherche à capturer des mouvements de prix sur des périodes de quelques jours à plusieurs semaines. Le terme "swing" fait référence aux balançoires du marché, ces mouvements naturels qui alternent entre phases haussières et baissières.

La logique du swing trading est que les marchés suivent des cycles prévisibles où chaque mouvement directionnel contient des pullbacks et des rechanges. Le swing trader cherche à entrer après un pullback dans une tendance établie, et à sortir avant que la tendance ne s'inverse.

Les outils du swing trader incluent l'analyse technique (chandeliers, patterns, indicateurs), l'analyse fondamentale (actualités, annonces macro), et l'analyse inter-markets. Le horizon temporel permet d'intégrer des données fondamentales tout en restant dans des délais exploitables.

## Contexte et origine

Le swing trading trouve ses origines dans les travaux de Ralph Nelson Elliott (théorie des vagues) et dans l'approche de Jesse Livermore, le trader légendaire des années 1920-1930 qui a développé des méthodes pour identifier les principaux mouvements de marché.

Andrew Mitholland et d'autres auteurs des années 1970-1980 ont formalisé les concepts de swing trading en définissant des règles d'entrée et de sortie basées sur l'analyse technique. L'avènement des plateformes de trading en ligne dans les années 1990 a démocratisé cette pratique.

En crypto, le swing trading est particulièrement adapté car les cycles de marché sont plus courts et plus prononcés que sur les marchés traditionnels. Un cycle complet de hausse et de baisse peut durer quelques mois en crypto contre plusieurs années sur les actions.

## Mécanismes et caractéristiques

L'identification d'un swing repose sur l'analyse des structures de prix. Une tendance haussière est composée de "higher highs" et "higher lows". Le swing trader entre sur les higher lows (pullbacks) et sort près des higher highs.

Le [[multi timeframe analysis]] est essential au swing trading. L'analyse commence sur un timeframe supérieur (daily ou weekly) pour identifier la tendance globale, puis descend sur le hourly ou 4h pour trouver les points d'entrée optimaux.

Les indicateurs populaires pour le swing trading incluent les [[moving average crossover|moyennes mobiles]], le [[MACD (Moving Average Convergence Divergence)|MACD]], le [[RSI Divergence strategy|RSI]], et le [[ATR (Average True Range)|ATR]] pour la volatilité. Les [[Fibonacci retracement|niveaux de Fibonacci]] sont souvent utilisés pour identifier les pullbacks.

La gestion du risque en swing trading impose des stops plus larges que pour le scalping mais plus serrés que pour le position trading. Un stop de 5 à 10% est typical, avec un [[Risk-reward ratio]] visé de 1:2 ou 1:3.

## Nuances, critiques, limites

Le swing trading demande de tolerer les mouvements de prix intrajournaliers sans paniquer. Un mouvement de 5% contre la position est normal en swing trading et ne signifie pas que la tendance s'est inversée.

Le overnight gap est un risque spécifique au swing trading. Les nouvelles qui surviennent pendant la nuit (quand les marchés crypto continuent de trader mais que les actualités sont moins fréquentes) peuvent créer des gaps de prix importants à l'ouverture.

Le swing trading est moins adapté aux stratégies automatisées que le scalping en raison de la complexité de l'analyse multi-timeframe et de la variabilité des configurations.

## Liens et implications

Le [[swing trading]] est une forme de [[trend trading]] qui vise à capturer le milieu des mouvements de prix. Le [[breakout trading]] et le [[pullback trading]] sont des stratégies complémentaires qui peuvent être utilisées dans le cadre d'une approche de swing trading.

L'[[analyse technique pour bots]] est particulièrement pertinente pour le swing trading algorithmique. Le [[multi timeframe analysis]] est un outil essentiel pour identifier les configurations de swing.

Le [[Risk-reward ratio]] et la [[gestion du risque]] sont importants pour survive aux swings perdants. Le [[drawdown]] peut être significatif en swing trading si les stops sont trop larges.


## Points clés à retenir

- L'utilisation d'indicateurs techniques comme le RSI ou le MACD permet d'identifier les points d'entrée optimaux
- La gestion du drawdown est essentielle pour survivre aux périodes défavorables
- La diversification entre plusieurs stratégies peut réduire le risque global du portfolio

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Jesse Livermore, "Reminiscences of a Stock Operator", 1923
[^2]: Investopedia, "Swing Trading", https://www.investopedia.com/terms/s/swingtrading.asp (consulted 2026)
