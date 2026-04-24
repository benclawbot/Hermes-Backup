---
titre: "Exchange arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/arbitrage, #concept/exchange, #concept/pricing]
créé: 2026-04-21
liens_forts: ["[[Arbitrage]]", "[[Cross-exchange arbitrage]]", "[[Exchange rate]]", "[[Exchange volume]]", "[[Exchange fees]]", "[[Exchange withdrawal]]", "[[Exchange deposit]]"]
---

# Exchange arbitrage

> [!info] Résumé
> L'exchange arbitrage est la pratique d'exploiter les différences de prix d'un même actif entre différents exchanges pour générer un profit. Cette stratégie repose sur la fragmentation des marchés crypto et lesinefficiences temporaires entre plateformes, requiring une exécution rapide et des coûts de transfert maîtrisés.

## Définition et mécanisme

L'exchange arbitrage consiste à acheter un actif sur un exchange où le prix est inférieur et à le vendre simultanément sur un exchange où le prix est supérieur. La différence entre ces deux prix, moins les coûts de transaction et de transfert, constitue le profit de l'arbitragiste.

Le mécanisme basic implique plusieurs étapes. D'abord, identifier une différence de prix entre deux plateformes pour le même actif. Ensuite, exécuter l'achat sur l'exchange moins cher. Puis, transférer l'actif vers l'exchange plus cher si nécessaire, ou utiliser d'autres instruments pour capturer le spread. Enfin, vendre sur l'exchange plus cher pour réaliser le profit.

En pratique, les stratégies modernes n'impliquent souvent pas de transfert physique entre exchanges. L'arbitragiste peut maintenir des inventories sur chaque plateforme et exécuter des ordres des deux côtés simultanément, ne régularisant les flux que périodiquement.

## Types d'exchange arbitrage

### Direct arbitrage

L'arbitrage direct involve l'achat et la vente du même actif sur deux exchanges. Par exemple, si BTC/USDT est à 50000 sur Binance et à 50020 sur Coinbase, l'arbitragiste achète sur Binance et vend sur Coinbase. La profit est la différence moins les frais.

Ce type d'arbitrage est le plus simple à implémenter mais nécessite des capitaux sur les deux plateformes. Les coûts de transfer entre exchanges peuvent eat into profits significantly if not managed properly.

### Triangular arbitrage

Le triangular arbitrage exploite les anomalies entre trois paires sur un même exchange. Par exemple, si BTC/USD, ETH/USD, et BTC/ETH ne sont pas dans une relation cohérente, une série de trades peut générer un profit.

Ce type d'arbitrage offre l'avantage de ne pas nécessiter de transfer entre exchanges, toutes les transactions ayant lieu sur une seule plateforme. Il requiert cependant une vitesse de décision et d'exécution élevée.

### Crypto-fiat arbitrage

L'arbitrage crypto-fiat exploite les differences entre les prix crypto sur les marchés fiat et les marchés crypto. Les differences peuvent apparaître en période de volatilité ou quand les flux de capitaux entre marchés fiat et crypto sont déséquilibrés.

Ce type d'arbitrage nécessite souvent des comptes bancaires sur plusieurs juridictions et la capacité de transfer des fonds entre comptes fiat rapidement.

## Coûts et considérations

Les [[Exchange fees]] sont un facteur critique dans la profitabilité de l'arbitrage. Les frais de transaction, de withdrawal, et de deposit doivent tous être déduits du spread apparent pour déterminer la profitabilité réelle.

Les [[Exchange withdrawal]] frais varient selon l'actif et le réseau. Les retraits Bitcoin sont généralement plus coûteux que les retraits en stablecoins comme USDT. Ces coûts fixes peuvent rendre les petites transactions non rentables.

Les [[Exchange deposit]] délais et coûts doivent également être considerés. Certains networks ont des temps de confirmation longs qui augmentent le risque que les prix se réalignent avant que l'arbitrage ne soit complété.

## Risques et limitations

Le risque principal de l'exchange arbitrage est le risque de timing. Les prix peuvent se réaligner avant que l'arbitrage ne soit complété, resulting in une perte plutôt qu'un profit. Ce risque est accru sur les marchés volatils.

Le risque de liquidité est également significatif. Quand une opportunité d'arbitrage est identifiée, d'autres arbitragistes se lancent simultanément, consuming la liquidité disponible et eatant le spread. Les ordres peuvent ne pas être fully executed.

Le risque de contrepartie nécessite également d'être géré. Les fonds sur un exchange sont soumis au [[Platform risk]] de cet exchange. Un collapse comme celui de FTX peut erase les profits potentiels et plus encore.

## Aspects techniques

L'exécution de l'arbitrage nécessite une infrastructure technique sofisticée. Les connexions à múltiples exchanges doivent être estable et rapide. Les données de marché doivent être agrégées en temps réel pour identifier les opportunités.

Les [[Exchange API]] des différentes plateformes doivent être intégrées dans un système unifié. Les [[WebSocket]] connections permettent le streaming temps réel des prix pour identifier immédiatement les anomalies.

La latence est critique : plus l'arbitragiste est rapide, plus il peut capturer des opportunités avant qu'elles ne soient éliminées par les autres participants du marché.

## Liquidité et profondeur de marché

La [[Exchange volume|volume]] de chaque exchange détermine la taille maximale de l'arbitrage possible. Une opportunité de 100$ de spread sur un actif avec une liquidité profonde peut être capturée avec un profit significatif, tandis que la même opportunité sur un actif illiquide peut être eatée par les frais et le slippage.

La [[Exchange liquidity]] sur chaque plateforme affecte directement la taille des ordres qu'un arbitragiste peut placer sans déplacer significativement le prix. Pour les gros ordres, le [[Slippage]] peut réduire considérablement le profit ou même transformer l'arbitrage en perte.

## Liens avec d'autres concepts

L'exchange arbitrage est une forme spécifique de l'[[Arbitrage]] général. Le [[Cross-exchange arbitrage]] est le terme technique pour cette pratique.

L'exchange arbitrage dépend du [[Market making]] pour générer les écarts de prix que les arbitragistes exploitent. Sans les teneurs de marché qui définissent les prix sur chaque plateforme, les opportunités d'arbitrage seraient moins fréquentes.

Les stratégies d'arbitrage sont liées au [[Funding rate arbitrage]] quand elles impliquent des perpétuels, et au [[Spot-Futures arbitrage]] quand elles combinent spot et futures.

## Sources

[^1]: CCXT, "Crypto Arbitrage", https://docs.ccxt.org (consulted 2026)
[^2]: Binance, "Spot Trading", https://www.binance.com (consulted 2026)