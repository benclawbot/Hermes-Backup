---
titre: "Gestion du risque"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#méthode/gestion, #méthode/risk, #concept/safety]
créé: 2026-04-20
liens_forts: ["[[Kelly Criterion]]", "[[Position sizing]]", "[[Drawdown]]"]
liens_opposition: []
---

# Gestion du risque

> [!info] Résumé
> La gestion du risque est l'ensemble des méthodes pour identifier, évaluer et contrôler les risques de trading : dimensionnement des positions, règles de stop-loss, limites de drawdown. Elle fait la différence entre survie long terme et blow-up catastrophique.

## Définition

La gestion du risque dans le trading automatisé désigne l'ensemble des règles et méthodes qui limitent les pertes potentielles et protègent le capital. Sans gestion du risque robuste, même une stratégie avec un edge positif finira par être détruite par un événement extrême.

Les composants principaux sont : le stop-loss (niveau de prix où la position est fermée automatiquement), le take-profit (niveau de gain où on sécurise), la taille de position (combien de capital risquer par trade), et la limite de drawdown (perte cumulée maximale avant arrêt du bot).

Un bot sans stop-loss est un bomba à retardement. Si le marché against vous de 80%, le capital est dévasté. Un stop-loss trop serré génère des stoppés-out fréquemts mais limite les pertes. Un stop-loss trop large laisse des pertes importantes.

## Contexte et origine

La gestion du risque est née dans les années 1950-60 avec la theory de Markowitz sur le portfolio optimal. Le concept de "position sizing" via le Kelly Criterion a été introduit pour optimizer la croissance exponentielle du capital tout en limitant le risque de ruine.

Les hedge funds et desks institutionnels ont built des systèmes de risk management sophistiqués : VaR (Value at Risk), stress testing, scenarios de marché extrême. Ces pratiques se sont répandues au retail avec la accès aux outils de trading.

En crypto, l'absence de réglementation et la volatilité extreme rendent la gestion du risque encore plus critique. Les crashes de 80-90% sont possibles (Bitcoin 2018, Terra/Luna 2022). Un bot sans règles de drawdown peut perdre la majorité de son capital en quelques jours.

## Mécanismes et caractéristiques

Le stop-loss peut être fixe (ex: -2% du prix d'entrée) ou dynamique (trailing stop qui suit le prix à une distance fixe). Le trailing stop est preferable en tendance car il verrouille plus de gains tout en laissant courir le mouvement.

La position sizing determines combien risquer sur chaque trade. Le fixed fractional risque X% du capital sur chaque trade. Le [[Kelly Criterion]] utilise une formule mathématique pour calculer la taille optimale basée sur le win rate et l'expectancy. Le volatility-based sizing ajuste selon la volatilité recente de l'asset.

La règle du 2% (ou similar) suggère de ne pas risquer plus de 2% du capital sur un seul trade. Cette règle préserve le capital pour recovery après une série de pertes. Some traders utilisent des règles plus aggressives (5-10%) mais le risque de blow-up increase.

Les limites de drawdown sont souvent codées en dur : si le capital chute de 20% depuis le pic, le bot s'arrête. L'analyse post-événement est nécessaire avant de reprendre le trading. Ces disjoncteurs empêchent les pertes catastrophiques en période de conditions extrêmes.

## Nuances, critiques, limites

Le risk management ne garantit pas le profit. Un bot avec une excellent gestion du risque peut quand même perdre si sa stratégie n'a pas d'edge. La gestion du risque limite les pertes, elle ne génère pas de gains.

Les stops ne garantissent pas l'exécution au prix spécifié. En marchés poco liquides ou volatils, le prix peut jump past le stop, resulting in slippage important. Le stop-loss est une protection, pas une garantie.

La tension entre stop-loss serré et stop-loss large est permanente. Un stop trop serré génère desstoppés-out fréquents, épuisant le capital en noise de marché. Un stop trop large laisse des pertes importantes. Le bon equilibre dépend de la volatilité de l'asset et de la stratégie.

Le sizing optimisé via Kelly Criterion peut être trop agressif. Le "Half Kelly" ou "Quarter Kelly" est souvent recommandé pour réduire la volatilité tout en conservant une partie de l'avantage. Le Kelly complet mène à des fluctuations de capital importantes.

## Liens et implications

La [[gestion du risque]] est indissociable du [[Kelly Criterion]] pour le dimensionnement des positions et du [[drawdown]] pour les limites de perte cumulée. Le [[position sizing]] implémente concrètement les règles de risque.

La [[diversification]] réduit le risque global du portfolio en combinant des stratégies non corrélées. Les[[[trading bot]]] sophistiqués gèrent plusieurs stratégies simultaneously avec des règles de risque unifiées.

Les [[Flash crash|flash crashes]] testent les limites du risk management. Un stop-loss en cascade peut amplifier la baisse quand plusieurs bots sell simultaneously.

## Sources

[^1]: Van Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)
[^2]:options, 'Risk Management in Forex Trading', XTB Academy (consulted 2026)