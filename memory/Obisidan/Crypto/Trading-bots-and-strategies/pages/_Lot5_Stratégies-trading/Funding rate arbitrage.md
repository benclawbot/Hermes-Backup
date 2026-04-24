---
titre: "Funding rate arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/funding-rate, #concept/arbitrage, #concept/perpetual-futures]
créé: 2026-04-21
liens_forts: ["[[Carry trading]]", "[[Perpetual futures]]", "[[Spot-Futures arbitrage]]"]
liens_opposition: []
---

# Funding rate arbitrage

> [!info] Résumé
> Le funding rate arbitrage exploite les différentiels de rendement entre les positions spot et les contrats perpétuels. Le trader perçoit le funding rate en shortant les perpétuels tout en détenant l'actif sous-jacent en spot, capturant la différence.

## Définition

Le funding rate arbitrage est une stratégie qui capture le funding rate des contrats perpétuels en détenant simultanément une position spot et une position inverse sur les perpétuels. Le funding rate est un paiement périodique (généralement toutes les 8 heures) qui maintient le prix du perpétuel proche du prix spot.

La mécanique est simple : si le funding rate est positif, les positions longues paient les positions courtes. Le funding rate arbitrage trader va donc longer l'actif en spot (acheter et détenir) et shorter les contrats perpétuels. Il perçoit ainsi le funding rate sans exposition nette au prix.

Cette stratégie génère un rendement fixe tant que le funding rate reste positif et que le spread entre le prix spot et le prix perpétuel reste stable. C'est une forme de [[carry trading]] spécifique aux marchés de contrats perpétuels crypto.

Le profit par cycle dépend du montant du funding rate et de la taille de la position. Un funding rate de 0,01% par cycle (3 cycles par jour = 0,03% quotidien) génère un rendement annualisé d'environ 10-11% avant compounding.

## Contexte et origine

Les contrats perpétuels ont été introduits par BitMEX en 2016 et sont maintenant disponibles sur toutes les principales plateformes crypto. Le mécanisme de funding rate a été conçu pour imiter le prix d'indice des contrats à terme sans date d'expiration.

Le funding rate arbitrage a émergé comme une stratégie populaire en 2020-2022 quand les funding rates sur certain perpetual contracts ont atteint des niveaux très élevés, parfois supérieurs à 100% annualisé.

Les arbitragistes professionnels ont établi des opérations sophistication qui automatisent la détection des opportunités de funding rate, le rebalancing entre spot et perpétuels, et la gestion des risques de marge.

## Mécanismes et caractéristiques

L'arbitragiste doit maintenir un équilibre entre la position spot et la position perpétuelle. Si le prix spot monte, la position longue spot gagne mais la position courte perpétuelle perd. L'objectif est que le funding rate perçu compense ces mouvements.

Le sizing de la position dépend du funding rate et de la volatilité anticipée. Un funding rate élevé permet des positions plus grandes. La volatilité affecte le coût de financement de la marge et potentiellement le risque de liquidation.

Le rééquilibrage (rebalancing) est nécessaire quand le prix change significativement. La position spot doit être ajustée pour maintenir le delta proche de zéro. Les bots de funding rate arbitrage rebalancing automatiquement quand le prix sort d'une bande prédéfinie.

Les frais de financement de la marge (margin funding fees) doivent être pris en compte. Si le broker facture des intérêts sur la marge utilisée pour Shorter les perpétuels, ces coûts réduisent le profit net du funding rate arbitrage.

## Nuances, critiques, limites

Le risque principal du funding rate arbitrage est que le funding rate devienne négatif. Dans ce cas, les positions courtes paient les positions longues et la stratégie perd de l'argent. Le funding rate estvolatile et peut changer de signe rapidement.

Le risque de liquidation existe si le prix du perpétuel diverge trop du spot et que la marge devient insuffisante. En période de volatilité extrême, le prix du perpétuel peut s'écarter significativement du spot pendant de courtes périodes.

Le risque de counterparty subsiste même si la stratégie est théoriquement sans risque. Sur un exchange centralisé, le exchange peut geler les fonds ou être piraté. Le choix de l'exchange est crucial.

## Liens et implications

Le [[funding rate arbitrage]] est une forme de [[carry trading]] spécifique aux perpétuels. Le [[spot-futures arbitrage]] est une stratégie apparentée qui exploite les écarts entre spot et contrats à terme.

Le [[perpetual futures]] est le marché sur lequel cette stratégie opère. La liquidité des perpétuels affecte directement la viabilité du funding rate arbitrage.

La [[gestion du risque]] inclut le choix de l'exchange, le sizing de position, et le monitoring du funding rate. Le [[backtesting]] permet d'estimer les rendements historiques de cette stratégie.


## Points clés à retenir

- L'utilisation d'indicateurs techniques comme le RSI ou le MACD permet d'identifier les points d'entrée optimaux
- La gestion du drawdown est essentielle pour survivre aux périodes défavorables
- La diversification entre plusieurs stratégies peut réduire le risque global du portfolio

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: BitMEX, "Perpetual Contracts Explained", https://www.bitmex.com (consulted 2026)
[^2]: Binance Academy, "Funding Rate", https://academy.binance.com (consulted 2026)
