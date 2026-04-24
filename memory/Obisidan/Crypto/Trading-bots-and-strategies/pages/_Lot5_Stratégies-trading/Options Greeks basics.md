---
titre: "Options Greeks basics"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/greeks, #concept/options, #concept/risk-management]
créé: 2026-04-21
liens_forts: ["[[Options strategies (basic)]]", "[[Delta hedging]]", "[[Gamma scalping]]"]
liens_opposition: []
---

# Options Greeks basics

> [!info] Résumé
> Les Greeks sont des métriques qui mesurent la sensibilité du prix d'une option aux différents facteurs. Delta, gamma, theta, et vega permettent au trader d'options de comprendre et gérer son exposition au risque.

## Définition

Les Greeks sont des métriques qui quantifient l'exposition d'une position d'options aux différents facteurs de risque. Ils permettent de décomposer le P&L en composantes compréhensibles et de gérer chaque risque séparément.

Le delta mesure la sensibilité du prix de l'option au prix du sous-jacent. Un delta de 0,5 signifie que si le sous-jacent bouge de 1 euro, l'option bouge de 0,5 euro. Le delta est entre 0 et 1 pour les calls, et entre -1 et 0 pour les puts.

Le gamma mesure la sensibilité du delta au prix du sous-jacent. Un gamma élevé signifie que le delta change rapidement quand le prix bouge. Le gamma est plus élevé pour les options à courte expiration.

Le theta mesure la décroissance temporelle. Un theta de -0,05 signifie que l'option perd 0,05 euro de valeur chaque jour, indépendamment du mouvement du sous-jacent. Le theta joue en défaveur des les acheteurs d'options.

Le vega mesure la sensibilité à la volatilité. Un vega de 0,1 signifie que si la volatilité implicite augmente de 1%, la valeur de l'option augmente de 0,1 euro.

## Contexte et origine

Les Greeks ont été formalisés dans les années 1970 avec le modèle de Black-Scholes. Les lettres grecques ont été utilisées pour désigner les sensibilités, certaines pour des raisons historiques (delta et gamma viennent de la chaîne de Taylor).

Les traders d'options professionnels parlent en Greeks plutôt qu'en euros de P&L. Cette язык leur permet de comprendre immédiatement l'exposition et de décider des ajustements.

En crypto, les plateformes d'options commencent à fournir des outils de calcul des Greeks, mais les données restent moins standardisées que sur les marchés traditionnels.

## Mécanismes et caractéristiques

Le delta est utilisé pour le [[delta hedging]]. Une position delta-neutre a un delta total de zéro, ce qui signifie qu'elle n'est pas exposée aux petits mouvements du sous-jacent. Atteindre la neutralité delta nécessite des ajustements constants.

Le gamma est crucial pour les stratégies de [[gamma scalping]]. Une position avec un gamma élevé requiert des ajustements fréquents pour maintenir la neutralité delta.

Le theta est le "pirement" du temps pour les détenteurs d'options. Les options à courte expiration ont un theta plus élevé en proportion de la prime. L expiration approche, le theta s'accélère.

Le vega est déterminé par la volatilité implicite. Les options loin du strike (far OTM) ou avec une longue expiration ont un vega plus élevé. Ces options sont plus sensibles aux changements de volatilité.

## Nuances, critiques, limites

Les Greeks sont des approximations basées sur des modèles qui font des hypothèses irréalistes. La volatilité n'est pas constante, les taux d'intérêt changent, et la distribution des rendements n'est pas normale.

Le gamma et le theta sont liés : les options avec un gamma élevé ont aussi un theta élevé en valeur absolue. Faire la paix avec cette relation est fondamental pour comprendre le P&L des options.

En crypto, le calcul précis des Greeks est difficile car la volatilité implicite peut vary значительно entre les exchanges et les modèles peuvent ne pas refléter les particularités du marché crypto crypto.

## Liens et implications

Les [[options greeks basics]] sont fondamentaux pour toutes les stratégies d'options avancées. Le [[delta hedging]] utilise le delta pour gérer l'exposition. Le [[gamma scalping]] utilise le gamma pour générer des augmentations.

La [[gestion du risque]] basée sur les Greeks permet de quantifier et manage l'exposition aux différents facteurs. Le [[drawdown]] peut être prédit plus précisément avec les Greeks.

Le [[backtesting]] d'une stratégie d'options doit inclure la modélisation stochastique de la volatilité. Le [[Sharpe ratio]] ajusté pour les Greeks peut évaluer la performance.


## Points clés à retenir

- L'application de cette stratégie requiert une discipline de fer et une execution rigoureuse
- Les parameters doivent être ajustés en fonction de la volatilité du marché et de la liquidité disponible
- Le suivi régulier des performances permet d'identifier les éventuelles dérives

- L'analyse technique constitue un outil essentiel pour identifier les configurations propices
- Legestion du risque doit être adapté à la volatilité du marché concerned
- Les conditions de marché évoluent constamment et exigent une adaptation des paramètres

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Taleb, "Dynamic Hedging", 1997
[^2]: CBOE, "Understanding Greeks", https://www.cboe.com (consulted 2026)
