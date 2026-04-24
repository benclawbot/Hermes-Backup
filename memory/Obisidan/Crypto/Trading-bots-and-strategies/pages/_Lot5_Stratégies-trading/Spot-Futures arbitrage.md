---
titre: "Spot-Futures arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/arbitrage, #concept/futures, #concept/spot]
créé: 2026-04-21
liens_forts: ["[[Funding rate arbitrage]]", "[[Cross-exchange arbitrage]]", "[[Arbitrage]]"]
liens_opposition: []
---

# Spot-Futures arbitrage

> [!info] Résumé
> Le spot-futures arbitrage exploite l'écart de prix entre le marché spot (au comptant) et le marché des contrats à terme ou perpétuels. Le trader achète le spot et vend le contrat, capturant le différentiel qui représente le coût de portage.

## Définition

Le spot-futures arbitrage est une stratégie qui tire profit de l'écart entre le prix d'un actif sur le marché au comptant (spot) et son prix sur le marché des contrats à terme (futures). Cet écart, appelé "basis", comprend le coût de financement (financing cost) et la prime de risque.

Sur les marchés traditionnels, le spot-futures arbitrage existe depuis des décennies. La relation entre le prix spot et le prix à terme est régie par le coût de portage (carry cost) qui inclut le coût de financement, les frais de stockage, et les avantages comme les dividendes.

En crypto, le spot-futures arbitrage est particulièrement pertinent en raison des perpétuels qui n'ont pas de date d'expiration. Le prix du perpétuel oscille autour du prix spot avec le funding rate comme ajustement.

La stratégie classique consiste à acheter l'actif sur le marché spot et à vendre un contrat à terme ou perpétuel de même montant. Si le basis est positif (prix futures > spot), l'arbitragiste capte ce spread. Si le basis est négatif, la position perd.

## Contexte et origine

Le spot-futures arbitrage existed depuis la création des premiers contrats à terme sur les matières premières au milieu du XIXe siècle. Les marchandise merchants utilisaient cette stratégie pour gérer les risques de prix.

Les EFT et les produits dérivés ont popularisé l'arbitrage spot-futures sur les marchés actions modernes. Les systèmes de trading à haute fréquence ont rendu les opportunités d'arbitrage plus fugaces mais plus fréquentes.

En crypto, l'arbitrage spot-futures a été particulièrement actif avec l'introduction des contrats perpétuels en 2016. Les écarts entre spot et perpétuels sont plus fréquents et plus amples que sur les marchés traditionnels.

## Mécanismes et caractéristiques

La relation entre le prix spot et le prix à terme est donnée par : Prix Futures = Prix Spot × (1 + r + q) où r est le taux de financement et q les avantages (dividendes, staking rewards).

En pratique, le perpétuel trade avec un écart (basis) par rapport au spot. Quand le basis est positif et supérieur au coût de transaction, une opportunité d'arbitrage existe. L'arbitragiste achète le spot et short le perpétuel.

Le risque de base (basis risk) est le principal risque. Si le prix du perpétuel diverge trop du spot (par exemple en période devolatilité), la perte sur la position peut dépasser le profit de l'arbitrage.

Le rééquilibrage est nécessaire car le basis change constamment. Les bots d'arbitrage rebalancing automatiquement quand le basis sort d'une bande prédéfinie.

## Nuances, critiques, limites

Le basis peut rester négatif pendant des périodes prolongées en marché baissier ou quand les taux de financement sont élevés. Dans ces cas, l'arbitragiste perd de l'argent sur la position et le profit de carry peut être insuffisant.

Le risque de liquidité est significatif pour les grandes positions. Acheter ou vendre de grandes quantités sur le marché spot peut déplacer le prix et réduire le profit d'arbitrage.

Les frais de transaction (trading fees, withdrawal fees) doivent être intégrés dans le calcul du profit. Sur certains exchanges, les frais sont assez bas pour permettre l'arbitrage, mais sur d'autres, ils grignotent les marges.

## Liens et implications

Le [[spot-futures arbitrage]] est lié au [[funding rate arbitrage]] qui exploite spécifiquement les perpétuels. L'[[arbitrage]] au sens large englobe ces stratégies.

Le [[cross-exchange arbitrage]] diffère en ce que les écarts sont entre différents exchanges plutôt qu'entre spot et perpétuels sur le même exchange.

La [[gestion du risque]] et le monitoring du basis sont essentiels. Le [[backtesting]] permet de valider les stratégies d'arbitrage avant de les déployer.


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

[^1]: Hull, "Options, Futures and Other Derivatives", 2012
[^2]: CBOE, "Understanding Futures Arbitrage", https://www.cboe.com (consulted 2026)
