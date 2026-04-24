---
titre: "Delta hedging"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/delta-hedging, #concept/options, #concept/hedging]
créé: 2026-04-21
liens_forts: ["[[Options Greeks basics]]", "[[Gamma scalping]]", "[[Options strategies (basic)]]"]
liens_opposition: []
---

# Delta hedging

> [!info] Résumé
> Le delta hedging est une technique de gestion de risque qui ajuste continuously la position dans le sous-jacent pour maintenir un delta neutre. L'objectif est d'isoler l'exposition à la volatilité en eliminant le risque directionnel.

## Définition

Le delta hedging est une stratégie qui maintient le delta d'un portfolio à zéro en ajustant constantly la position dans l'actif sous-jacent. Quand le delta est positif, le trader vend une partie du sous-jacent pour le ramener à zéro. Quand le delta est négatif, le trader achète du sous-jacent.

L'objectif est de créer une position qui n'est pas affectée par les petits mouvements du prix du sous-jacent. Le P&L vient alors uniquement de la volatilité (gamma) et du temps (theta).

Si une option a un delta de 0,5, détenir cette option est équivalent à détenir 0,5 unité du sous-jacent. Pour delta-hedge cette position, le trader vend 0,5 unité du sous-jacent. Le delta total devient 0,5 - 0,5 = 0.

Le delta hedging exige des ajustements constants car le delta change quand le prix du sous-jacent change. Ces ajustements sont appelés "rebalancing".

## Contexte et origine

Le delta hedging a été développé par les teneurs de marché d'options dans les années 1970-1980 pour gérer leur exposition aux mouvements du sous-jacent tout en maintenant leur position en options.

Les traders d'options professionnels utilisent le delta hedging pour gérer leur livre d'options. Ils maintiennent des positions delta-neutres sur chaque trade et gèrent le risque gamma et theta separately.

En crypto, le delta hedging est utilisé par les desks d'options sur Deribit et d'autres plateformes pour gérer leurs positions et fournir de la liquidité.

## Mécanismes et caractéristiques

Le delta de l'option change avec le prix du sous-jacent. Pour les calls, delta va de 0 (très hors de la monnaie) à 1 (très dans la monnaie). Pour les puts, delta va de -1 à 0.

Quand le prix du sous-jacent monte, le delta d'un call approche 1. Le trader doit vendre une partie du sous-jacent pour maintain the delta neutre. Ces ventes génèrent un P&L qui compense la perte sur l'option.

Les ajustements sont nécessaires à chaque mouvement significatif du prix. Plus le gamma est élevé, plus les ajustements doivent être fréquents. Le coût de ces ajustements (bid-ask spread) affecte la rentabilité du delta hedging.

Le delta hedging isolates le gamma et le theta. Une position delta-neutre avec un gamma positif génère un profit si le prix bouge significativement dans n'importe quelle direction. Une position avec un theta négatif perd de la valeur chaque jour.

## Nuances, critiques, limites

Le coût de transaction des ajustements fréquents peut exceeds les profits du delta hedging. Chaque rebalancing génère des frais de transaction et potentiellement du slippage.

Le delta hedging continu est théorique. En pratique, les ajustements sont discrets (à intervalles ou quand le delta dépasse certains seuils). Entre les ajustements, la position n'est pas parfaitement delta-neutre.

En marché très volatil, le prix peut bouger tellement vite que les ajustements ne peuvent pas suivre, laissant la position exposée pendant ces periods.

## Liens et implications

Le [[delta hedging]] est une application directe des [[options greeks basics]]. Le [[gamma scalping]] est une stratégie qui utilise le delta hedging pour profiter du gamma.

La [[gestion du risque]] avec le delta hedging permet d'isoler l'exposition à la volatilité. Le [[drawdown]] maximum est limité pour les positions delta-hedged.

Le [[backtesting]] d'une stratégie de delta hedging est complexe car il faut simuler les ajustements contínus. Le [[Sharpe ratio]] ajusté pour le gamma et theta peut évaluer la performance.


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
[^2]: McMillan, "Options as a Strategic Investment", 2012
