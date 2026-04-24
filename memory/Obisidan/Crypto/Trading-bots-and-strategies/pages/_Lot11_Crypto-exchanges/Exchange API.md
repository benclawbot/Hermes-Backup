---
titre: "Exchange API"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#terme/api, #terme/exchange, #concept/connectivity]
créé: 2026-04-21
liens_forts: ["[[Exchanges centralisés]]", "[[Exchange feeder]]", "[[WebSocket]]", "[[API rate limiting]]", "[[Endpoint authentication]]", "[[Request signatures]]", "[[Trading bot]]"]
---

# Exchange API

> [!info] Résumé
> L'Exchange API est l'interface de programmation qui permet aux bots de trading d'interagir avec les plateformes d'échange : récupérer les prix, placer des ordres, gérer les positions. La qualité, la fiabilité, et les limitations des APIs impactent directement la performance des stratégies algorithmiques.

## Définition et types d'APIs

Une API (Application Programming Interface) d'échange est un ensemble de protocoles qui permettent à un logiciel externe de communiquer avec une plateforme de trading. Elle définit comment demander des données de marché, comment passer des ordres, et comment gérer les positions et le compte.

Les deux types principaux d'APIs utilisées dans le trading crypto sont les APIs REST et les APIs WebSocket. Les APIs REST utilisent le protocole HTTP standard pour les requêtes request-response, tandis que les WebSockets permettent le streaming bidirectionnel de données en temps réel.

Les APIs REST sont utilisées pour les opérations discrètes comme placer un ordre, consulter le solde, ou canceller un ordre. Les WebSockets sont preferées pour les données continues comme les prix en temps réel, les mises à jour du carnet d'ordres, ou les trades execution.

## Endpoints principaux

Les endpoints principaux d'une Exchange API incluent généralement :

Les endpoints de marché permettent de récupérer les prix actuels (ticker), l'état du carnet d'ordres (order book), l'historique des prix (klines/candles), et les trades récents. Ces endpoints sont généralement publics et ne nécessitent pas d'authentification.

Les endpoints de trading permettent de placer des ordres (market, limit, stop), de consulter l'état des ordres, de les canceller, et de récupérer l'historique des trades. Ces endpoints requieren une authentication.

Les endpoints de compte permettent de consulter les soldes, les positions, l'historique des transactions, et les paramètres du compte. Ces endpoints requieren également une authentication complète.

## Authentication et sécurité

L'authentication sur les APIs de trading se fait généralement avec une clé API (API Key) et un secret (Secret). Certains exchanges ajoutent des couches supplémentaires comme une passphrase ou un timestamp pour renforcer la sécurité.

Les [[Request signatures]] utilisent des algorithmes cryptographiques comme HMAC SHA-256 ou HMAC SHA-512 pour garantir l'authenticité des requêtes. Chaque requête doit inclure une signature calculée à partir des paramètres et du secret.

La [[Endpoint authentication]] vérifie que la requête provient bien du détenteur de la clé API. Les clés doivent être stockées de manière sécurisée, idéalement dans un key management system ou un vault encrypté.

L'[[IP whitelisting]] ajoute une couche de sécurité en limitant les adresses IP qui peuvent utiliser la clé API. Cette mesure empêche l'utilisation des clés volées depuis une autre adresse IP.

## Rate limiting et limites d'utilisation

Les [[API rate limiting|limites de taux]] sont implémentées sur toutes les APIs d'échange pour prevent the abuse et garantir l'équité entre les utilisateurs. Ces limites definissent le nombre maximum de requêtes par période de temps.

Lesschémas de rate limiting varient selon les exchanges. Binance limite les requêtes à 1200 poids par minute, Coinbase à 10 requêtes par seconde pour certains endpoints, et Kraken a des limites basées sur le volume.

Le dépassement des limites de taux peut résulter en des erreurs 429 (Too Many Requests) ou un bannissement temporaire de l'API. Les stratégies doivent implémenter du [[Retry logic|backoff exponentiel]] pour gérer ces erreurs gracieusement.

## WebSocket et streaming de données

Les connexions [[WebSocket]] permettent de recevoir les données en temps réel sans polling constant. Cette approche est plus efficace en termes de ressources et de latence que les requêtes REST répétées.

Les topics WebSocket courants incluent :
- @arrigil pour les trades individuels
- @bookTicker pour les meilleurs bid/ask
- @kline pour les chandeliers
- @depth pour les mises à jour du carnet d'ordres

La gestion des connexions WebSocket inclut la reconnexion automatique en cas de déconnexion, le heartbeat pour maintenir la connexion active, et le rebalancing entre múltiples connexions si nécessaire.

## Considérations pour le trading algorithmique

Pour les [[Trading bot]], la qualité de l'API impacte directement les performances. Une API avec une latence élevée ou des pannes fréquentes peut faire manquer des opportunités ou laisser des positions sans protection.

Le choix de l'exchange pour le trading algorithmique devrait inclure une évaluation de la qualité de l'API, les limites de taux, et la fiabilité de la plateforme. Les stratégies de [[Haute fréquence]] nécessitent des APIs à très faible latence.

La [[Latence et exécution]] dépend fortement de la qualité de l'API. Les stratégies qui reposent sur la vitesse doivent évaluer la latence de chaque API candidate.

## Variations entre exchanges

Chaque exchange a sa propre implémentation d'API avec des différences en termes de fonctionnalités, de limites, et de format de données. Ces différences require une couche d'abstraction pour développer des bots qui peuvent fonctionner sur múltiples exchanges.

Des bibliothèques comme CCXT fournissent une interface unified pour accéder à múltiples exchanges avec un format de données standardisé. Cette approche simplifie le développement mais peut introduire une latence supplémentaire due à l'abstraction.

## Sources

[^1]: Binance, "API Documentation", https://developers.binance.com (consulted 2026)
[^2]: CCXT, "Crypto Exchange Web API Interface", https://docs.ccxt.org (consulted 2026)
[^3]: Coinbase, "Exchange API Documentation", https://docs.coinbase.com (consulted 2026)