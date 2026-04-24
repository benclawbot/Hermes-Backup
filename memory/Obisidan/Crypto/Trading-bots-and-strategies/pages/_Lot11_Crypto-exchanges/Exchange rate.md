---
titre: "Exchange rate"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/exchange-rate, #concept/pricing, #concept/market-data]
créé: 2026-04-21
liens_forts: ["[[Exchange API]]", "[[Exchange arbitrage]]", "[[Exchange volume]]", "[[Prix d'exécution vs prix cot]]", "[[Decouverte du prix]]", "[[Écart bid-ask]]", "[[Market making]]"]
---

# Exchange rate

> [!info] Résumé
> Le exchange rate (taux de change) représente le prix auquel un actif peut être échangé contre un autre sur une plateforme d'échange. En crypto, ces taux sont determinés par l'équilibre entre l'offre et la demande dans les carnets d'ordres, avec des variations continues basées sur les transactions réelles et les anticipations du marché.

## Définition et nature

Le exchange rate d'une paire de trading représente le prix actuel auquel un actif peut être acheté ou vendu. Pour une paire BTC/USDT, le exchange rate est le prix auquel quelqu'un peut acheter des BTC avec des USDT ou vendre des BTC pour obtenir des USDT.

Le exchange rate diffère du prix theoretical en ce qu'il est le prix real du marché, déterminé par les ordres réellement placés dans le carnet d'ordres. Le meilleur bid est le prix le plus élevé que quelqu'un est prêt à payer, et le meilleur ask est le prix le plus bas auquel quelqu'un est prêt à vendre.

En trading crypto, le exchange rate est souvent appelé ticker price ou simplement price. Il change en temps réel basée sur les transactions et les orders qui passent dans le carnet.

## Détermination par le carnet d'ordres

Le exchange rate est déterminé par le [[Central limit order book (CLOB)]] de l'exchange. Le prix du marché (best bid) reflète le prix le plus élevé que les acheteurs sont prêts à payer. Le prix ask (best ask) reflète le prix le plus bas que les vendeurs sont prêts à accepter.

L'écart entre le bid et l'ask ([[Écart bid-ask]]) représente la liquidité du marché. Un écart serré indique un marché liquide avec une concurrence importante entre teneurs de marché. Un écart large signale une liquidité réduite.

Le exchange rate au niveau du marché est le point médian entre le bid et l'ask. Les transactions s'exécutent soit au bid (pour une vente) soit à l'ask (pour un achat), créant le spread.

## Facteurs influençant le exchange rate

Plusieurs facteurs influencent le exchange rate d'un actif crypto :

L'offre et la demande sont le facteur fundamental. Si plus d'achats passent que de ventes, le prix augmente. Les market makers et les traders algorithmiques définissent continuamente les prix en fonction de leurs anticipations.

Les nouvelles et les événements peuvent créer des movements de prix significatifs. Les announcements réglementaires, les hacks, les listings, et les mises à jour de protocoles peuvent tous affecter le sentiment du marché et donc les taux.

La liquidité disponible influence également le exchange rate pour les ordres de taille significative. Un ordre volumineux peut déplacer le prix car il "consomme" la liquidité à différents niveaux de prix.

## Exchange rate et exécution

Le [[Prix d'exécution vs prix cot]] décrit la relation entre le prix auquel un ordre est exécuté et le prix cotné au moment de la décision. Le exchange rate au moment de l'exécution peut différer du taux anticipé en raison du slippage.

Pour les [[Ordre au marché]], l'exécution se fait au prix actuel du marché qui peut être le bid ou l'ask selon la direction du trade. Le slippage est la différence entre le prix anticipé et le prix réel d'exécution.

Pour les [[Ordre à cours limité]], l'exécution n'a lieu que si le prix atteint le niveau spécifié. Le exchange rate reste hors limit jusqu'à ce que le marché atteigne ce niveau.

## Exchange rate et arbitrage

L'[[Exchange arbitrage]] exploite les différences de exchange rate entre exchanges. Si BTC/USDT vaut 50000 sur Binance mais 50010 sur Coinbase, un arbitragiste peut acheter sur Binance et vendre sur Coinbase pour capturer le spread.

La vitesse est crítica dans l'arbitrage car les differences de taux sont généralement temporaires. Les bots d'arbitrage surveillent simultanément les taux sur múltiples exchanges et exécutent les trades quand une opportunité apparaît.

Le [[Triangular arbitrage]] exploite les anomalies entre trois paires sur un même exchange. Si les taux de conversion entre BTC/ETH, ETH/USDT, et BTC/USDT ne sont pas cohérents, un profit peut être capturé.

## Exchange rate et découverte du prix

Le exchange rate contribue à la [[Decouverte du prix]] dans l'écosystème crypto. Les exchanges avec la plus grande liquidité sont généralement considerés comme les références de prix pour chaque actif.

Les prix sur les grands exchanges comme Binance ou Coinbase sont souvent utilisés comme benchmark pour évaluer la valeur fair d'un actif. Les échanges entre exchanges centralisés et decentralized sont également influencés par ces références.

Les [[Market making]] stratégies définissent leur propre exchange rate basé sur les coûts de transaction, le risque d'inventaire, et les anticipations de movement du marché.

## watch

Le exchange rate peut être volatil, especialmente pendant les périodes de haute activité ou d'événements market-moving. Les traders doivent être awares de la [[Volatility]] lors de la définition des stratégies.

Pour les stratégies de [[Scalping]], les petits movements de exchange rate sont la source de profit. Pour les stratégies de [[Position trading]], les movements plus importants sont anticipés.

## Sources

[^1]: Hasbrouck, Joel. "Empirical Market Microstructure", Oxford University Press (2007)
[^2]: Kyle, "Continuous Auctions and Insider Trading", Econometrica (1985)