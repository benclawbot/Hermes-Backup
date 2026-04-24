---
titre: "Backtesting"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#méthode/backtesting, #méthode/validation, #concept/strategy]
créé: 2026-04-20
liens_forts: ["[[Forward testing]]", "[[Machine learning pour trading]]", "[[Surapprentissage]]"]
liens_opposition: []
---

# Backtesting

> [!info] Résumé
> Le backtesting est le processus de test d'une stratégie de trading sur des données historiques pour estimer sa performance. étape critique mais vulnérable au surapprentissage et aux biais qui surestiment les résultats réels.

## Définition

Le backtesting simule l'exécution d'une stratégie sur des données passées pour estimer comment elle aurait performé. L'objectif est de valider une hypothèse de trading avant de risquer du capital réel. Le backtest génère des métriques : rendement total, drawdown max, Sharpe ratio, win rate, profit factor.

Un backtester prend une stratégie codée (règles d'entrée, sortie, position sizing) et la fait "trader" sur l'historique. Chaque trade simulé enregistre le prix d'entrée, le prix de sortie, le P&L. Les trades cumulés génèrent la courbe de equity.

La qualité du backtest dépend de la qualité des données et de la fidélité du simulateurch à l'exécution réelle. Un backtest idéal inclut le slippage, les frais de transaction, la latence d'exécution, et le fill rate réel. Sans ces paramètres, les résultats sont optimistes.

## Contexte et origine

Le backtesting systématique a émergé avec l'informatique dans les années 1970-80. Les premiers traders quantitatifs utilisaient desmainframes pour tester des stratégies sur des décennies de données historiques. Les marchés actions et futures étaient les premiers terrains de test.

L'accessibilité moderne : des plateformes comme TradingView offrent du backtesting gratuit via Pine Script. Python avec Backtrader ou VectorBT permet des backtests sophistiqués. Les données crypto sont abundant and often free via des APIs comme Binance.

Le problème reste que le backtest est une mesure théorique de performance passée, pas une garantie de performance future. Les marchés évoluent, les participants changent, et les stratégies qui marchaient peuvent cesser de marcher.

## Mécanismes et caractéristiques

Le workflow de backtesting comprend : collecte de données propres, implémentation de la stratégie, simulation des trades, analyse des résultats, et itération.

La sélection des données est critique. Les données doivent couvrir différentes conditions de marché (trending, range, volatile). Une stratégie testée seulement sur un marché haussier de 2020-2021 sera trop optimiste. Ideally, backtester sur 3-5 ans minimum pour capturer diferentes phases.

Les biais à éviter :
- **Biais de survie** : n'inclure que les assets qui "survivent" jusqu'à aujourd'hui, excluant les fails
- **Look-ahead bias** : utiliser des données pas encore disponibles au moment de la décision
- **Data-snooping** : tester des centaines de configurations jusqu'à en trouver une qui marchait
- **Surapprentissage** : optimiseur trop les paramètres sur l'historique

La validation out-of-sample (tester sur des données non utilisées pour l'optimisation) et le walk-forward analysis (valider sur des periods successives) sont des techniques pour réduire ces biais.

## Nuances, critiques, limites

Le backtest le plus optimiste surestime la performance réelle. Les raisons incluent : les coûts de slippage et transaction souvent sous-estimés, la liquidité réelle qui peut ne pas permettre d'exécuter aux prix simulés, et le fait que quand une stratégie devient connue, le marché s'adapte.

Le [[surapprentissage]] est le danger principal. Un modèle avec 20 paramètres peut parfaitement "expliquer" 10 ans de données en találás des patterns aléatoires qui ne se reproduiront pas. La solution : réduire le nombre de paramètres, valider sur des données hold-out, utiliser le walk-forward analysis.

Le [[forward testing]] (paper trading) complète le backtest en testant sur des données temps réel simulées. Il révèle des problèmes de latence, de fiabilité des feeds de données, et de comportement de la stratégie en conditions réelles.

La volatilité des résultats est importante à considérer. Un backtest avec un Sharpe de 2 semble excellent, mais si le drawdown max était 50%, le risque réel est beaucoup plus élevé que ne l'indique le Sharpe ratio alone.

## Liens et implications

Le backtesting est indissociable du [[machine learning pour trading]], où les modèles sont optimización sur des données historiques avec un risque élevé de surapprentissage. Le [[surapprentissage]] est le problème central de l'application du ML au trading.

Le [[forward testing]] et le paper trading sont les étapes suivantes après un backtest réussi. La [[gestion du risque]] doit être incluse dans le backtest (simulation de stop-loss) pour que les résultats soient réalistes.

Les résultats du backtest informent la [[position sizing|position sizing]] et le [[Kelly Criterion]], qui dépendent de la performance observée (win rate, expectancy) pour dimensionner les positions.

## Sources

[^1]: Bloomberg, "The Dangers of Backtesting", https://www.bloomberg.com/professional/blog/dangers-backtesting/ (consulted 2026)
[^2]: Zipal, "Backtesting Systematic Trading Strategies", QuantStart (consulted 2026)