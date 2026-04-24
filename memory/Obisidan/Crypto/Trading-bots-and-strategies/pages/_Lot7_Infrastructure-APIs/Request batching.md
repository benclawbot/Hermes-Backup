---
titre: "Request batching"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/performance, #concept/api, #concept/optimization]
créé: 2026-04-20
liens_forts: ["[[API rate limiting]]", "[[REST API]]", "[[Connection pooling]]"]
liens_opposition: []
---

# Request batching

> [!info] Résumé
> Le request batching groupe plusieurs opérations en une seule requête API pour optimiser l'utilisation des rate limits. Au lieu de 100 requêtes individuelles, une seule requête avec 100 opérations compte comme une seule.

## Définition

Le request batching est une technique qui envoie plusieurs opérations dans une seule requête HTTP plutôt que d'envoyer des requêtes séparées. L'objectif est de réduire le nombre de requêtes et donc l'empreinte sur les rate limits.

Types de batching :
- **Batch endpoints** : l'API accepte plusieurs opérations dans une seule requête (ex: batch place orders)
- **V batch implicite** : le client regroupe des opérations similaires envoyées en burst
- **Parameterized batch** : une seule requête avec paramètres multiples (ex: /orders?symbol=BTC,ETH)

Le batching est particulièrement efficace pour les APIs qui ont des rate limits par requête, pas parops. Certaines exchanges limitent à 10 ordres par seconde quel que soit le nombre de parameters.

## Contexte et origine

Le batching a été popularisé par les APIs GraphQL qui permettent degrab multiple resources en une seule requête. Les APIs REST traditionnelles ont moins de support natif pour le batching.

En trading haute fréquence, le batching était utilisé bien avant GraphQL. Les protocoles proprietaires des années 1990 supportaient des "bundles" de plusieurs ordres.

Les exchanges crypto modernes ont adopté des formes de batching :
- Binance : endpoints batch comme /api/v3/batchOrders
- Coinbase : batch trading endpoints
- Kraken : ordres groupés

## Mécanismes et caractéristiques

Batching sur Binance :
```
POST /api/v3/batchOrders
Body: [
  {"symbol": "BTCUSDT", "side": "BUY", ...},
  {"symbol": "ETHUSDT", "side": "BUY", ...}
]
```
Cela compte comme 1 requête au lieu de 2.

Stratégies de batching client :
- **Temporal batching** : accumulator des opérations pendant X ms, puis envoyer en batch
- **Count batching** : envoyer quand X opérations sontaccumulated
- **Size batching** : envoyer quand la taille totale atteint un seuil

L'ordre des opérations dans un batch peut être important si elles dépendent les unes des autres. Certaines APIs garantissent l'ordre d'exécution, d'autres non.

## Nuances, critiques, limites

Le batch n'est pas toujours plus rapide. Si une opération échoue dans un batch, toutes les opérations peuvent être rolled back ou la error handling est complexe.

Le retry devient plus complexe. Un batch de 100 ordres envoyé une fois. Si la connexion drop à 99%, faut-il retryer les 100 ou juste le dernier ? L'idempotence est plus dure à garantir.

Le monitoring d'un batch est plus dur. Si 3 des 10 ordres dans un batch échouent, lequel a échoué ? Les APIs varient en qualité de reporting d'erreurs partiels.

Le rate limit benefit peut être offset par la latence added. Accumuler des opérations pendant 100ms pour les batcher peut introduce a latency inacceptable pour certaines stratégies.

## Liens et implications

Le [[request batching]] réduit l'utilisation des [[API rate limiting]]. Il fonctionne avec le [[connection pooling]] pour optimiser les requêtes groupées.

Le [[circuit breakers]] peut aider si un batch complet échoue. Le [[retry logic]] doit être adapté pour gérer les batches avec leurs specific idempotence considerations.

Le [[position sizing]] peut être affecté par le batching si les ajustements de position sont groupés. Le [[slippage]] peut être impacted si les ordres groupés arrivent avec un delay.

## Sources

[^1]: Binance, "Batch Orders", https://developers.binance.com (consulted 2026)
[^2]: Coinbase, "Batch Trading", https://docs.cloud.coinbase.com (consulted 2026)
