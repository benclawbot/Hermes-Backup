---
titre: "API d'échange"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#terme/api, #terme/exchange, #concept/connectivity]
créé: 2026-04-20
liens_forts: ["[[Trading bot architecture]]", "[[Exécution d'ordre]]", "[[WebSocket]]"]
liens_opposition: []
---

# API d'échange

> [!info] Résumé
> L'API d'échange est l'interface de programmation permettant aux bots d'interagir avec les plateformes de trading : récupérer les prix, placer des ordres, gérer les positions. Les différences de fiabilité et de rate limits affectent directement la performance des bots.

## Définition

Une API (Application Programming Interface) d'échange est un ensemble de protocoles et de fonctions qui permettent à un logiciel externe de communiquer avec une plateforme de trading. Elle définit comment demander des données de marché, comment passer des ordres, et comment gérer les positions et le compte.

Les APIs de trading sont généralement REST (pour les requêtes standard comme passer un ordre) ou WebSocket (pour les données en temps réel comme les prix). Certaines plateformes offrent les deux types d'interfaces.

Les informations accessibles via l'API incluent : prix en temps réel (ticker), order book (carnet d'ordres), historique des prix (klines/candles), statut du compte (soldes, positions), et permettent de placer des ordres (market, limit, stop-loss).

## Contexte et origine

Les APIs de trading sont devenues standard avec la digitalisation des marchés financiers. LesBrokerages en ligne ont exposé leurs systèmes via des APIs pour permettre le trading automatisé.

En crypto, Binance a popularisé les APIs REST et WebSocket en 2017, rendant le trading algorithmique accessible au retail. Aujourd'hui, presque toutes les plateformes crypto offrent des APIs pour le trading automatisé.

La qualité des APIs varie enormement. Certaines plateformes ont des APIs robustes avec une haute disponibilité (99.9%), d'autres ont des pannes fréquentes ou des latences élevées qui-affectent négativement les bots.

## Mécanismes et caractéristiques

L'authentification sur les APIs de trading se fait généralement via une clé API (API Key) et un secret (Secret). Certains exchanges ajoutent une passphrase ou d'autres couches de sécurité. Les clés doivent être stockées securely.

Le rate limiting (limitation du nombre de requêtes) est présent sur toutes les APIs. Binance limite les requêtes à 1200/minute pour les endpoints weightés, 10/minute pour les orders. Excéder ces limites peut résulter en un bannissement temporaire.

Les endpoints principaux incluent :
- GET /api/v3/account : solde et positions
- POST /api/v3/order : placer un ordre
- GET /api/v3/order : statut d'un ordre
- DELETE /api/v3/order : annuler un ordre
- GET /api/v3/ticker/24hr : prix et volume

Les WebSockets permettent de recevoir les données en temps réel sans polling. Les topics incluent : @arrigil pour les trades individuels, @bookTicker pour les best bid/ask, et @kline pour les chandeliers.

## Nuances, critiques, limites

La fiabilité de l'API impacte directement le bot. Une API qui répond lentement ou qui a des pannes peut faire manquer des opportunités ou laisser des positions ouvertes sans protection.

Le rate limiting peut restrict les stratégies à haute fréquence. Si un bot veut passer beaucoup d'ordres, il doit gérer les erreurs de rate limit et implementer du backoff exponentiel.

La sécurité des clés API est crítica. Si une clé est compromise, l'attaquant peut placer des ordres et vider le compte. Les bonnes pratiques incluent : pas de clés en code source, IPs whitelisting, et permissions minimales (lecture seule pour le monitoring).

Les données de marché peuvent essere incorrectes ou incomplètes. Certains exchanges ont des bugs qui retournent des données incorrectes, ou des délais de synchronisation entre les différents composants du système.

## Liens et implications

L'[[API d'échange]] est le lien entre le [[trading bot architecture]] et les marchés. L'[[exécution d'ordre]] dépend de la qualité de l'API. La [[latence]] de l'API affecte la qualité d'exécution.

Le [[WebSocket]] permet le streaming de données en temps réel, critique pour les bots qui ont besoin de réagir vite aux mouvements de prix. Le [[rate limiting]] est une contrainte à gérer dans les stratégies à haute fréquence.

L'[[authentication]] API doit être sécurisée pour protéger les fonds. Les [[ordres]] passés via l'API sont irréversibles, donc une erreur peut être coûteuse.

## Sources

[^1]: Binance, "API Documentation", https://developers.binance.com (consulted 2026)
[^2]: CCXT, "Crypto Exchange Web API Interface", https://docs.ccxt.org (consulted 2026)