---
titre: "Statistical arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/statistical-arbitrage, #concept/pairs-trading, #concept/quant]
créé: 2026-04-21
liens_forts: ["[[Pairs trading]]", "[[Machine learning pour trading]]", "[[Backtesting]]"]
liens_opposition: []
---

# Statistical arbitrage

> [!info] Résumé
> Le statistical arbitrage utilise des modèles quantitatifs pour identifier et exploiter les anomalies statistiques de prix. Cette approche repose sur l'hypothèse que les déviations par rapport à une relation historique sont temporaires et que les prix retournent à la moyenne.

## Définition

Le statistical arbitrage est une stratégie qui utilise des méthodes statistiques et mathématiques pour identifier les opportunités de trading. Contrairement à l'arbitrage classique (sans risque), le statistical arbitrage accepte un certain risque mais table sur des probabilités favorables à long terme.

L'archétype est le pairs trading sur actions, où deux actions historiquement corrélées sont identifiées. Quand leur spread (ratio ou différence) diverge, le trader achète celle qui est relativement bon marché et vend celle qui est relativement chère, anticipant un retour à la moyenne historique.

En crypto, le statistical arbitrage s'applique aux paires de crypto corrélées, aux relations entre crypto et indices, ou à des patterns de prix identifiés par des modèles. Les [[machine learning pour trading|méthodes de machine learning]] sont souvent utilisées pour identifier ces relations.

La gestion du risque est essentielle car aucune garantie n'existe que les relations historiques vont se maintenir. Le dimensionnement de position et les stops-loss limitent les pertes si le modèle échoue.

## Contexte et origine

Le statistical arbitrage a été développé par les chercheurs de l'Université de Princeton dans les années 1980. Gerry Bamberger et David Shaw ont fondé la société d'arbitrage LTCM (Long-Term Capital Management) qui utilisait ces techniques.

LTCM a été initialement très réussie, mais a connu une collapse dramatique en 1998 lors de la crise financière russe. L'événement a démontré que les stratégies de statistical arbitrage peuvent échouer spectacularly quand les hypothèses du modèle ne tiennent plus.

Depuis, les firmes de quantitative trading ont affiné les méthodes de statistical arbitrage, en intégrant des modèles plus robustes et une meilleure gestion des risques de queue.

## Mécanismes et caractéristiques

L'identification des paires ou des relations statistiquement stable se fait par analyse historique. Les critères incluent la corrélation, la cointégration, et la stationnarité du spread. Plus la relation est stable, plus le statistical arbitrage est fiable.

Le modèle calcule le z-score du spread en temps réel. Quand le z-score dépasse un seuil (par exemple 2), le trader entre en position dans l'attente d'un retour à la moyenne. Plus le z-score est extrême, plus le trade est considéré comme à probabilité élevée.

Le dimensionnement de position est calibré pour limiter le risque. Le risque de ruine (voir [[Risk of ruin]]) doit être maintenu à un niveau acceptable malgré la nature probabiliste de la stratégie.

Les pertes peuvent être prolongées si la relation reste désynchronisée. Le statistical arbitrage requiert une horizon temporal long pour que les lois de la moyenne opèrent.

## Nuances, critiques, limites

Le principal risque est le "model risk" : le modèle peut être mal spécifié ou les conditions de marché peuvent changer de manière à invalidate les hypothèses sous-jacentes.

La crise de 2008 et d'autres événements de marché ont démontré que les corrélations peuvent soudainement augmenter, transformant une relation diversifyante en une relation synchronisée. Le risque de contagion est réel.

Les coûts de transaction et le slippage peuvent éliminer les petits profits générés par la stratégie. Un modèle précis mais avec des frais élevés peut être non profitable.

## Liens et implications

Le [[statistical arbitrage]] est une forme avancé de [[pairs trading]] qui utilise des méthodes quantitatives pour identifier les relations. Le [[machine learning pour trading]] permet de découvrir des patterns plus complexes.

Le [[backtesting]] exhaustif est essentiel pour valider un modèle de statistical arbitrage avant deployment. Le [[Sharpe ratio]] et le [[Sortino ratio]] mesurent la performance risk-adjusted.

La [[gestion du risque]] doit inclure des stops et des limites de position. Le [[drawdown]] maximum acceptable doit être défini à l'avance.


## Points clés à retenir

- L'analyse technique constitue un outil essentiel pour identifier les configurations propices
- Legestion du risque doit être adapté à la volatilité du marché concerned
- Les conditions de marché évoluent constamment et exigent une adaptation des paramètres

- L'utilisation d'indicateurs techniques comme le RSI ou le MACD permet d'identifier les points d'entrée optimaux
- La gestion du drawdown est essentielle pour survivre aux périodes défavorables
- La diversification entre plusieurs stratégies peut réduire le risque global du portfolio

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Gatev, "Pairs Trading: Performance of a Relative Value Arbitrage Rule", 2006
[^2]: Avellaneda, "Statistical Arbitrage in the 1990s", 2000
