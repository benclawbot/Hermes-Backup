---
titre: "Cross-exchange arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/arbitrage, #concept/cross-exchange, #concept/multi-exchange]
créé: 2026-04-21
liens_forts: ["[[Arbitrage]]", "[[Triangular arbitrage]]", "[[API d'échange]]"]
liens_opposition: []
---

# Cross-exchange arbitrage

> [!info] Résumé
> Le cross-exchange arbitrage exploite les différences de prix d'un même actif entre différents exchanges. Le trader achète sur l'exchange où le prix est bas et vend sur celui où le prix est haut, capturant le différentiel.

## Définition

Le cross-exchange arbitrage est une forme d'arbitrage qui profit des écarts de prix du même actif entre deux ou plusieurs exchanges. Quand le prix du Bitcoin sur Binance est inférieur à celui sur Coinbase, un arbitragiste peut acheter sur Binance et vendre sur Coinbase, capturant la différence.

La logique est simple : si le prix d'un actif est P1 sur l'exchange A et P2 sur l'exchange B, avec P2 > P1, l'arbitragiste achète sur A, transfère vers B, et vend sur B. Le profit est P2 - P1 - coûts de transaction.

En pratique, les opportunités d'arbitrage cross-exchange persistent parce que les marchés crypto sont fragmentés. Les transferences entre exchanges prennent du temps et les prix changent pendant ce temps. La vitesse d'exécution est cruciale.

Les conditions requises pour un cross-exchange arbitrage profitable sont un écart de prix supérieur aux frais de transaction (frais de trading sur les deux exchanges, frais de withdrawal du premier exchange, temps de transfer), et une liquidité suffisante pour exécuter des ordres de taille significative.

## Contexte et origine

Le cross-exchange arbitrage est aussi ancien que les marchés financiers. Les premiers arbitragistes profitaient des différences de prix des devises entre places financières.

En crypto, le cross-exchange arbitrage a été particulièrement rentable dans la période 2014-2017 quand les exchanges étaient peu connectés et les écarts de prix fréquents. Les premiers traders qui ont automatisé l'arbitrage ont généré des profits significatifs.

La concurrence a depuis réduit les marges, mais des opportunités persistent sur certaines paires de crypto ou entre exchanges avec des bases d'utilisateurs différentes.

## Mécanismes et caractéristiques

La détection d'opportunité se fait via un bot qui scanne les prix sur multiples exchanges en temps réel. Quand un écart dépasse un seuil prédéfini, le bot passe les ordres.

L'exécution est le maillon faible. L'arbitragiste doit d'abord déposer des fonds sur chaque exchange. L'ordre d'achat est passé sur l'exchange moins cher, puis le transfert vers l'exchange plus cher prend du temps (de quelques secondes à quelques minutes selon la blockchain).

Pendant ce temps, les prix peuvent bouger. Le slippage et le changement de prix pendant le transfert sont les principaux risques. Les perpetual futures contracts permettent de réduire ce risque en exécutant les deux côtés simultanément.

Le dimensionnement doit tenir compte des limites de withdrawal. Chaque exchange a des limites de retrait quotidien qui peuvent limiter la taille des positions d'arbitrage.

## Nuances, critiques, limites

Les risques de transfert sont le principal obstacle. Le temps de block confirmation variable (surtout sur les altcoins) peut faire manquer l'opportunité si le prix bouge significativement pendant le transfert.

Le risque de counterparty existe sur tout exchange centralisé. Les fonds peuvent être gelés en cas de hack ou de problèmes réglementaires. Les arbitragistes professionels répartissent les fonds sur plusieurs plateformes.

Les frais de transaction et les limites de retrait réduisent les marges. Un écart de 0,5% peut sembler attractif mais après frais et délais, le profit net peut être négatif.

## Liens et implications

Le [[cross-exchange arbitrage]] est une forme de [[arbitrage]] qui diffère du [[triangular arbitrage]] (qui opère sur un seul exchange) et du spot-futures arbitrage (qui exploite les écarts entre spot et perpétuels).

L'[[API d'échange]] est essentielle pour implémenter cette stratégie. Les bots d'arbitrage utilisent les APIs pour détecter les opportunités et exécuter les ordres automatiquement.

Le [[backtesting]] permet d'estimer les profits historiques de cette stratégie. Mais les conditions passées ne guarantee pas les résultats futurs car la concurrence augmente.


## Points clés à retenir

- L'application de cette stratégie requiert une discipline de fer et une execution rigoureuse
- Les parameters doivent être ajustés en fonction de la volatilité du marché et de la liquidité disponible
- Le suivi régulier des performances permet d'identifier les éventuelles dérives

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

[^1]: Investopedia, "Cross-Exchange Arbitrage", https://www.investopedia.com (consulted 2026)
[^2]: Binance Academy, "Crypto Arbitrage Explained", https://academy.binance.com (consulted 2026)
