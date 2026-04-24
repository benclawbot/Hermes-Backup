---
titre: "Gamma scalping"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/gamma-scalping, #concept/options, #concept/volatility-trading]
créé: 2026-04-21
liens_forts: ["[[Delta hedging]]", "[[Options Greeks basics]]", "[[Volatility trading]]"]
liens_opposition: []
---

# Gamma scalping

> [!info] Résumé
> Le gamma scalping est une stratégie qui combine une position delta-neutre avec des ajustements de prix pour générer des profits à partir de la volatilité. L'objectif est de profiter du gamma positif tout en gérant le theta négatif.

## Définition

Le gamma scalping est une stratégie qui cherche à capitaliser sur le gamma positif d'une position d'options. Le gamma positif signifie que le delta de l'option change de manière favorable pour le détenteur quand le prix bouge.

L'idée est de maintenir une position delta-neutre en permanence via le [[delta hedging]]. Quand le prix bouge dans un sens, le rebalancing génère un petit profit. Ces petits profits s'accumulent si le prix oscille suffisamment.

Le gamma scalping fonctionne mieux dans un marché avec une volatilité élevée mais pas de direction claire. Chaque oscillation génère des profits de rebalancing, et ces profits compensent le theta négatif (la perte de valeur temporelle).

La idée clé est que le theta est certain et cumulatif, tandis que le gamma génère des profits incertains mais asymétriques. Si la volatilité réalisée est supérieure à la volatilité implicite, le gamma scalping est rentable.

## Contexte et origine

Le gamma scalping a été popularisé par les traders d'options de rue dans les années 1980-1990. C'est une extension naturelle du delta hedging management.

L'objectif original était de gérer le risque d'un book d'options en vendant de la volatilité implicite tout en delta-hedgeant pour rester neutre au prix. Si la volatilité réalisée était inférieure à la volatilité implicite, le trader gagnait.

En crypto, le gamma scalping peut être appliqué sur les options BTC ou ETH avec des conditions de volatilité appropriées. La haute volatilité crypto peut être favorable si les ajustements sont assez rapides.

## Mécanismes et caractéristiques

Le gamma scalping débute avec une position delta-neutre (par exemple, un short straddle ou un short iron condor). Cette position a un theta négatif (le temps travaille contre le détenteur) mais un gamma positif (les mouvements de prix génèrent des opportunités de rebalancing).

Le delta hedging continuellement ajuste la position pour maintenir le delta neutre. Chaque ajustement quand le prix bouge génère un petit profit. Si le prix oscille suffisamment, ces profits peuvent dépasser le theta négatif.

Le vega (exposition à la volatilité) doit être géré. Typiquement, le gamma scalper vend de la volatilité (vega négatif) pour recevoir la prime. Si la volatilité implicite diminue, la position gagne sur le vega.

Le paramètre clé est le ratio entre gamma et theta. Un ratio élevé (beaucoup de gamma pour peu de theta) est favorable. Ce ratio dépend du strike et de l'expiration.

## Nuances, critiques, limites

La volatilité réalisée doit être suffisante pour générer assez de profits de rebalancing afin de compenser le theta. Si le marché est calme, le theta érode la position plus vite que le gamma génère de profits.

Le coût de transaction des ajustements fréquents peut dépasser les augmentations du gamma scalping. Chaque rebalancing génère des frais, et ces frais s'accumulent avec la fréquence des ajustements.

Le gamma scalping requiert une liquidité suffisante dans les options et le sous-jacent pour exécuter les ajustements sans slippage excessif. Sur les marchés crypto moins liquides, ce n'est pas toujours possible.

## Liens et implications

Le [[gamma scalping]] utilise le [[delta hedging]] comme mécanisme d'exécution. Le [[volatility trading]] partage la même logique de trading de volatilité. Les [[options greeks basics]] sont fondamentaux.

La [[gestion du risque]] inclut le monitoring du gamma et du theta. Le [[drawdown]] peut être significatif si la volatilité est plus basse que prévu.

Le [[backtesting]] du gamma scalping est complexe. Le [[Sharpe ratio]] ajusté pour la volatilité peut évaluer la performance de la stratégie.


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
[^2]: Sinclair, "Volatility Trading", 2007
