---
titre: "REST API"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/api, #concept/rest, #concept/http]
créé: 2026-04-21
liens_forts: ["[[API d'échange]]", "[[Trading bot]]", "[[WebSocket connections]]"]
liens_opposition: []
---

# REST API

> [!info] Résumé
> L'API REST est le protocole standard pour les opérations de trading : passer des ordres, consulter le solde, gérer les positions. Elle utilise le modèle requête-réponse HTTP et est moins temps réel que les WebSockets mais plus adaptée aux opérations critiques.

## Définition

REST (Representational State Transfer) est un style d'architecture pour les APIs web. Dans le trading crypto, l'API REST permet au bot d'envoyer des requêtes HTTP GET (lecture) ou POST/PUT/DELETE (écriture) pour interagir avec l'échange.

Les opérations REST incluent : consulter les soldes du compte, placer un ordre (market, limit, stop), modifier ou annuler un ordre existant, consulter l'historique des ordres et des trades, et récupérer les données de marché (ticker, klines, order book).

Chaque requête contient un endpoint (URL), des paramètres, et des headers d'authentification. La réponse est généralement au format JSON. Le cycle requête-réponse est synchrone : le bot envoie une requête et attend la réponse avant de continuer.

## Contexte et origine

REST a été décrit par Roy Fielding en 2000 dans sa thèse de doctorat. L'architecture a été adopte massivement par les services web 2.0 pour sa simplicité et son scalabilité. Les APIs REST sont devenues le standard de facto pour les APIs web.

Les échanges de crypto ont adopté REST car il est simple à implémenter, bien documenté, et compatible avec tous les langages de programmation. Binance, Coinbase, Kraken exposent tous des APIs REST complètes.

La simplicité de REST cache une limitation fondamentale : le modèle requête-réponse ne permet pas de recevoir des données en temps réel sans polling. Le polling (interrogation périodique) gaspille des requêtes et introduit une latence entre le moment où les données changent et celui où le bot les reçoit.

## Mécanismes et caractéristiques

Les endpoints REST suivent une structure prévisible : GET /api/v3/account pour le compte, POST /api/v3/order pour passer un ordre, GET /api/v3/order pour consulter un ordre, DELETE /api/v3/order pour annuler.

L'authentification utilise des clés API (apiKey) et une signature HMAC-SHA256 du corps de la requête et d'un timestamp. Certains échanges ajoutent une passphrase ou un nonce. La signature证明 que la requête provient du détenteur de la clé.

Le rate limiting est implémenté différemment selon les échanges. Binance utilise un système de "weight" où chaque endpoint a un poids, avec un total de 1200 poids par minute. Excéder la limite résulte en un bannissement temporaire.

Les réponses d'erreur incluent un code (par exemple -1010 pour insuffisance de fonds) et un message descriptif. Les codes d'erreur sont documentés dans les文档 de chaque exchange.

## Nuances, critiques, limites

REST est synchrone et bloque en attendant la réponse. Pour les stratégies haute fréquence, cette latence accumulate peut être significative. Une alternative est d'utiliser REST pour les opérations critiques et WebSockets pour les données temps réel.

Le polling REST gaspille les ressources. Un bot qui interroge le carnet d'ordres toutes les 100ms utilise 600 requêtes/minute rien que pour cette source de données. Les WebSockets utilisent une seule connexion pour le même flux d'informations.

Les erreurs réseau doivent être gérées explicitement. Une requête peut échouer après l'envoi mais avant la réception de la réponse (timeout). Le bot ne sait pas si l'ordre a été placé ou non. La idempotence des clés permet de relancer safely.

Le rate limiting restrict les stratégies agresives. Un bot qui veut passer 100 ordres/minute doit gérer les erreurs de rate limit, implémenter du backoff, et prioriser les ordres critiques.

## Liens et implications

L'API REST est le canal principal pour l'[[exécution d'ordre]]. Le [[trading bot]] envoie ses ordres via REST, reçoit les confirmations, et met à jour son état. La [[gestion du risque]] intervient après chaque exécution pour évaluer l'impact.

Les [[ordres]] placés via REST sont irréversibles une fois exécutés. Le [[cycle de vie d'un ordre]] inclut la soumission, l'acceptance, l'exécution, et la confirmation. Une erreur peut être coûteuse.

REST et [[WebSocket connections]] sont complémentaires. Le [[market making]] utilise WebSockets pour le streaming de données et REST pour placer les ordres. Le [[backtesting]] utilise des données historiques de l'API REST.

## Sources

[^1]: Binance, "REST API Documentation", https://developers.binance.com/docs/simple-api (consulted 2026)
[^2]: Coinbase, " Coinbase Exchange API", https://docs.cloud.coinbase.com (consulted 2026)
