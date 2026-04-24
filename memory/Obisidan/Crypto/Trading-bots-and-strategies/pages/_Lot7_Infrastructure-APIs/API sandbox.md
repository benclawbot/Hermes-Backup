---
titre: "API sandbox"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/testing, #concept/api, #concept/development]
créé: 2026-04-20
liens_forts: ["[[Backtesting]]", "[[Forward testing]]", "[[API d'échange]]"]
liens_opposition: []
---

# API sandbox

> [!info] Résumé
> L'API sandbox est un environnement de test fourni par les exchanges qui simule les opérations de trading sans risquer de capital réel. Elle permet de valider le comportement du bot avant le passage en live trading.

## Définition

L'API sandbox est un environnement de test qui reproduit le comportement de l'API de production avec des données simulées. Les ordres sont placés mais non exécutés sur le marché réel. Les soldes sont simulés.

L'objectif est de tester l'intégration API sans risque financier. Les ordres simulés doivent être traités de manière similaire aux ordres réels (même format de réponse, même latence simulée, mêmes erreurs).

Les sandbox sont généralement accessibles via les mêmes endpoints API avec une URL différente (ex: api.binance.com vs testnet.binance.com).

## Contexte et origine

Les sandboxes ont été popularisées par les fournisseurs de cloud et les APIs web. Elles permettent aux développeurs de tester sans coûts et sans effets secondaires.

En trading, les sandboxes sont devenues critical après les premiers bots qui ont causé des pertes massives sur des environnements de production par erreur de configuration.

Binance a lancé son testnet en 2019, permettant aux développeurs de tester sans risquer de capital. Coinbase, Kraken, et d'autres exchanges ont suivi.

## Mécanismes et caractéristiques

Les features typiques d'une sandbox :
- **Simulation de trading** : ordres simulés avec exécution fictive basée sur le order book simulé
- **Données de marché** : prix simulés mais réalistes, peuvent inclure des scenarios artificiels
- **Fonds virtuels** : balance initiale virtuelle pour tester sans limite
- **Rate limits** : généralement plus souples pour faciliter le testing

Les limites de la sandbox :
- **Simulation imparfaite** : le slippage, la liquidité, et le order book sont simulés, pas réels
- **Pas de correlation avec le marché réel** : les prix ne suivent pas exactement le marché
- **Données market peut être limited** : certains événements (flash crash) ne sont pas reproduits

Accès aux sandboxes courantes :
- Binance : https://testnet.binance.vision
- Coinbase : https://public.sandbox.pro.coinbase.com
- Kraken : https://sandbox-api.kraken.com

## Nuances, critiques, limites

La sandbox ne garantit pas le succès en production. Les conditions de marché simulées ne reproduisent pas la volatilité réelle, les pannes d'exchange, ou les comportements anormaux des autres traders.

Les stratégies qui fonctionnent en sandbox peuvent échouer en production à cause du slippage réel, de la latence, et de la concurrence avec d'autres traders.

La qualité de la simulation varie enormement. Certaines sandboxes ont des prix qui ne bougent pas du tout. D'autres ont des simulateurs de order book très réalistes.

La sandbox peut créer un faux sentiment de sécurité. Si le bot fonctionne en sandbox pendant 1 mois, il n'a pas encore été testé contre les conditions réelles du marché.

## Liens et implications

L'[[API sandbox]] est utilisée pour le [[backtesting]] et le [[forward testing]] en complément des données historiques. Elle permet de tester l'[[API d'échange]] integration sans risque.

Le [[REST API]] et le [[WebSocket connections]] sont testés dans la sandbox. Le [[request batching]] et la [[connection pooling]] peuvent être testés.

Le [[trading bot]] complet peut être déployé en sandbox avant le passage en production. Le [[monitoring and alerting]] doit également être testé en sandbox.

## Sources

[^1]: Binance, "Testnet", https://www.binance.com/en/testnet (consulted 2026)
[^2]: Coinbase, "Sandbox Environment", https://docs.cloud.coinbase.com (consulted 2026)
