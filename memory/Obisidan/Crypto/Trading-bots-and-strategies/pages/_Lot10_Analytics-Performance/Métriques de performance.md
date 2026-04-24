---
titre: "Métriques de performance"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/performance, #concept/metrics, #concept/evaluation]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Sortino ratio]]", "[[Calmar ratio]]", "[[Drawdown]]", "[[Taux de réussite]]", "[[Facteur de profit]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Métriques de performance

> [!info] Résumé
> Les métriques de performance quantifient les résultats du trading algorithmique. Une évaluation complète combine plusieurs métriques pour capturer rendement, risque, et qualité d'exécution.

## Définition

Les métriques de performance sont des indicateurs quantitatifs qui évaluent les résultats d'une stratégie de trading. Elles transforment une série de trades en statistiques comparables et actionnables.

Les métriques se divisent en trois catégories : métriques de rendement (rendement total, annualisé, excédentaire), métriques de risque (volatilité, drawdown, VaR), et métriques de risque-rendement (Sharpe, Sortino, Calmar).

Une métrique unique ne suffit pas. Une stratégie peut avoir un excellent rendement annualisé mais un drawdown catastrophique. Inversement, un drawdown faible peut masking des rendements médiocres.

## Contexte et origine

Les métriques de performance viennent de la finance traditionnelle et de la gestion de fonds. Le Sharpe ratio, développé par William Sharpe en 1966, est devenu le standard de l'industrie.

Pour le trading algorithmique crypto, les métriques standards ont été adaptées aux caractéristiques des crypto-actifs : volatilité élevée, regimes de marché переменчивый, et liquidité variable selon les actifs.

L'émergence des bots de trading a créé un besoin de métriques automatisées et objectives. Les plateformes de trading reportent automatiquement ces métriques aux traders.

## Mécanismes et caractéristiques

### Métriques de rendement

Le **rendement total** mesure le gain ou perte en pourcentage sur toute la période. Le **rendement annualisé** ajuste pour la durée, permettant comparaison entre stratégies de périodes différentes.

Le **rendement excédentaire** (alpha) mesure le rendement au-delà du benchmark. Pour le crypto, le benchmark souvent utilisé est une position acheteuse et gardée sur le BTC ou un indice crypto.

### Métriques de risque

La **volatilitéannualisée** mesure l'écart-type des rendements quotidiens annualisés. Plus elle est élevée, plus la stratégie est considered risquée.

Le **max drawdown** mesure la pire baisse depuis un pic. Le **drawdown moyen** et la **durée du drawdown** complètent cette picture.

La **VaR (Value at Risk)** et la **CVaR (Conditional VaR)** quantifient le risque de perte extrême à différents niveaux de confiance.

### Métriques de risque-rendement

Le **Sharpe ratio** divise le rendement excédentaire par la volatilité. Un ratio de 1.0 signifie que le rendement additionnel compense exactement le risque pris.

Le **Sortino ratio** similar au Sharpe mais ne pénalise que la volatilité négative (les pertes). Plus pertinent pour les stratégies asymétriques.

Le **Calmar ratio** divise le rendement annualisé par le max drawdown. Plus le ratio est élevé, mieux c'est.

## Applications pratiques

L'évaluation d'une stratégie utilise un tableau de bord de métriques. Le rendu combine rendements absolus et relatifs, mesures de risque, et indicateurs de qualité.

Pour le trading crypto, les seuils typiques sont : Sharpe > 1.5 (bon), > 2.0 (excellent) ; Calmar > 1.0 (acceptable), > 2.0 (bon) ; max drawdown < 20% (modéré), < 10% (conservateur).

Les métriques doivent être considérées ensemble, pas isolément. Un Sharpe de 3.0 avec un max drawdown de 60% est problématique malgré l'excellent ratio.

## Nuances, critiques, limites

Les métriques sont calculées sur des données passées et ne prédisent pas le futur. Une stratégie avec un excellent historique peut échouer si les conditions changent.

Le calcul des métriques dépend des假设 (fréquence de calcul, méthode annualisation, traitement des dividendes). Comparer des stratégies avec différentes assumptions peut être trompeur.

Les métriques de risque-rendement supposent que la volatilité représente bien le risque, ce qui n'est pas toujours vrai. Les événements de queue (black swans) peuvent être sous-estimés.

## Liens et implications

Les métriques de performance sont le output principal du [[backtesting]]. Elles informent la [[gestion du risque]] et le [[position sizing]].

Le [[Sharpe ratio]], [[Sortino ratio]], et [[Calmar ratio]] sont les métriques de risque-rendement les plus utilisées.

Le [[drawdown]] et ses métriques associées ([[durée du drawdown]], [[facteur de récupération]]) complètent l'évaluation du risque.

## Sources

[^1]: Sharpe, "Mutual Fund Performance", Journal of Business (1966)
[^2]: Investopedia, "Key Performance Indicators for Trading", https://www.investopedia.com (consulted 2026)