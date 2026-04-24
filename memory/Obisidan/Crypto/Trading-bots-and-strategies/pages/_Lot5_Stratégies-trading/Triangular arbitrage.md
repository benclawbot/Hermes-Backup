---
titre: "Triangular arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/arbitrage, #concept/triangular, #concept/multi-pairs]
créé: 2026-04-21
liens_forts: ["[[Arbitrage]]", "[[Cross-exchange arbitrage]]", "[[Market making]]"]
liens_opposition: []
---

# Triangular arbitrage

> [!info] Résumé
> Le triangular arbitrage exploite les anomalies de prix entre trois paires de devises sur un même exchange. Le trader convertit un actif en un deuxième, puis en un troisième, puis revient au premier, profitant des inefficiences passagères.

## Définition

Le triangular arbitrage est une stratégie qui exploite les incohérences de prix entre trois paires de devises sur un même exchange. Par exemple, si les relations suivantes existent : BTC/USDT = 50000, ETH/USDT = 2500, BTC/ETH = 20,5 (au lieu de 20), un arbitragiste peut exploiter cette inefficacité.

La logique est de convertir BTC en ETH, puis ETH en USDT, puis USDT en BTC. Si les prix sont cohérents, le point de départ et d'arrivée sont identiques. Si les prix sont incohérents, le trader finit avec plus de BTC qu'au départ.

Ces opportunités se présentent quand les prix des différentes paires ne sont pas alignés. Par exemple, si BTC/ETH est trop haut par rapport à BTC/USDT et ETH/USDT, le trader vend BTC/ETH et achète les deux autres jambes.

Les profits par trade sont typiquement très petits (0,1% ou moins), mais répétés des milliers de fois par jour avec des bots, ils peuvent devenir significatifs. La vitesse d'exécution est critique car les opportunités disparaissent en millisecondes.

## Contexte et origine

Le triangular arbitrage existe depuis les premiers marchés de devises. Les cambistes des banques utilisaient cette stratégie manuellement jusqu'à ce que les systèmes électroniques la rendent automatique.

En crypto, le triangular arbitrage s'est développé avec l'augmentation du nombre de paires de trading sur les exchanges. Plus le nombre de paires est élevé, plus les opportunités d'inefficacité sont fréquentes.

Les bots d'arbitrage moderne scannent toutes les combinaisons de triples possibles sur un exchange en temps réel, identifiant les opportunités avant qu'elles ne soient arbitrées par d'autres.

## Mécanismes et caractéristiques

Le calcul du profit d'un triangular arbitrage requiert de scanner toutes les combinaisons de triples. Par exemple, avec les paires BTC/USDT, ETH/USDT, BTC/ETH, le triple peut être BTC → ETH → USDT → BTC ou BTC → USDT → ETH → BTC.

Le profit dépend de la taille du désalignement. Plus le désalignement est grand, plus le profit. Mais même de petits désalignements peuvent être profitable si les frais de transaction sont bas et le volume élevé.

L'exécution doit être rapide car les prix changent constamment. Idéalement, les trois ordres sont passés simultanément ou dans un intervalle très court. Les APIs des exchanges permettent cette exécution automatisée.

Les frais de transaction réduisent le profit. Un triangular arbitrage n'est profitable que si le désalignement est supérieur à la somme des trois frais de trading.

## Nuances, critiques, limites

Le risque de slippage est élevé pour les grandes positions. Passer un ordre volumineux sur une paire peu liquide peut déplacer le prix défavorablement et éliminer le profit.

Les frais de maker vs taker doivent être intégrés. Si l'arbitragiste doit prendre la liquidité plutôt que de la fournir, les frais sont plus élevés et les marges plus étroites.

La concurrence a augmenté. Des centaines de bots scannent les mêmes opportunités simultanément, ce qui compresse les marges et rend les opportunités encore plus fugaces.

## Liens et implications

Le [[triangular arbitrage]] est une forme de [[arbitrage]] qui opère sur un seul exchange, contrairement au [[cross-exchange arbitrage]] qui exploite les écarts entre exchanges.

Le [[market making]] sur un exchange crée naturellement des opportunités de triangular arbitrage quand les market makers ne sont pas parfaitement alignés sur toutes les paires.

La [[gestion du risque]] inclut le slippage, les frais, et la vitesse d'exécution. Le [[backtesting]] est difficile car les opportunités sont très fugaces.


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

[^1]: Investopedia, "Triangular Arbitrage", https://www.investopedia.com (consulted 2026)
[^2]: BIS Working Paper, "Arbitrage in FX Markets", https://www.bis.org (consulted 2026)
