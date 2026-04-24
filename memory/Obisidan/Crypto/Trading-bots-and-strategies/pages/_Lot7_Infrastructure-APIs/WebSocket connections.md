---
titre: "WebSocket connections"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/websocket, #concept/connectivity, #concept/realtime]
créé: 2026-04-21
liens_forts: ["[[API d'échange]]", "[[Trading bot]]", "[[Latence et exécution]]"]
liens_opposition: []
---

# WebSocket connections

> [!info] Résumé
> Une WebSocket est une connexion bidirectionnelle persistante permettant aux bots de recevoir des données de marché en temps réel sans polling constant, réduisant la latence et la charge serveur tout en maintenant une latence minimale pour les stratégies haute fréquence.

## Définition

Une WebSocket est un protocole de communication bidirectionnel qui établit une connexion persistante entre un client (le bot) et un serveur (l'échange). Contrairement au modèle requête-réponse du REST, la WebSocket permet au serveur d'envoyer des données au client sans que celui-ci les demande explicitement.

Dans le contexte du trading crypto, les WebSockets sont utilisées pour streamer les données de marché en temps réel : prix, trades, carnet d'ordres, et chandeliers. Cette communication instantanée est critique pour les stratégies qui doivent réagir aux mouvements de prix en millisecondes.

Le protocole WebSocket fonctionne sur TCP, généralement sur les ports 443 ou 8080 selon l'implémentation de l'échange. Une fois la connexion établie via un "handshake" HTTP upgrade, elle reste ouverte jusqu'à ce que l'une des parties la ferme explicitement ou jusqu'à une déconnexion réseau.

## Contexte et origine

Le protocole WebSocket a été standardisé par l'IETF en 2011 (RFC 6455) pour répondre aux limitations du HTTP en matière de communication temps réel. Les premiers usages étaient les chats web et les jeux multijoueurs, mais le protocole a rapidement été adopté par les plateformes financières.

Les échanges de crypto ont adopté les WebSockets massivement à partir de 2017-2018, Binance étant un des premiers à proposer des WebSockets complètes pour les données de marché et les exécution d'ordres. Cette adoption a permis l'essor du trading haute fréquence retail.

L'alternative au polling REST (qui demande des données périodiquement) a été un changement de paradigme. Le polling gaspillait des ressources et introduisait une latence entre le moment où les données changeaient et celui où le bot les recevait. Les WebSockets éliminent cette latence.

## Mécanismes et caractéristiques

Les WebSockets des échanges crypto exposent typiquement plusieurs "streams" (flux) de données : le flux des trades individuels (@arrigil), le flux du best bid/ask (@bookTicker), le flux du carnet d'ordres complet (@depth), et les flux de chandeliers (@kline).

La connexion s'établit via une URL WebSocket (wss://stream.binance.com:9443/ws) et un flux JSON est envoyé automatiquement dès qu'un événement survient. Le bot parses les messages JSON et met à jour son état interne en conséquence.

La gestion de la connexion inclut la reconnexion automatique en cas de déconnexion. Les implementations robustes implémentent un exponential backoff pour éviter de saturer le serveur de requêtes de reconnexion. Un heartbeat/ping/pong maintient la connexion vivante.

Les bibliothèques comme WebSocket.js (JavaScript), websockets (Python), ou iostream (C++) gèrent la plomberie. CCXT/abstraite les différences entre échanges pour提供一个 interface unifiée.

## Nuances, critiques, limites

La principale limite est la complexité de gestion des connexions multiples. Un bot qui surveille plusieurs paires sur plusieurs échanges doit gérer plusieurs connexions simultanées, ce qui complexifie le code et augmente la charge mémoire.

Les WebSockets peuvent se déconnecter silencieusement sans notification claire. Un bot qui ne vérifie pas activement la santé de la connexion peut croire recevoir des données alors que la connexion est morte. Le heartbeat est essentiel.

Leorder book via WebSocket peut être incomplet si la connexion est lente. Certains échanges envoient des snapshots périodiques suivis de deltas. Si le bot manque un delta, son order book local sera désynchronisé. La reconstruction complète du carnet nécessite un resync manuel.

La sécurité des WebSockets pose question. Bien que le protocole soit sur TLS (wss://), l'authentification par clé API passe souvent en clair dans le handshake initial. Les exchanges sérieux utilisent des signatures HMAC même pour les connexions WebSocket.

## Liens et implications

Les [[WebSocket connections]] sont le moyen le plus efficace pour recevoir les [[données de niveau 2]] en temps réel. Sans WebSocket, le bot devrait poller l'API REST constamment, ce qui augmente la [[latence et exécution|latence]] et les [[API rate limiting]].

Le [[trading bot]] haute fréquence dépend des WebSockets pour détecter les opportunités avant qu'elles ne disparaissent. La [[stratégie de momentum]] et le [[market making]] nécessitent une connexion WebSocket stable.

L'implémentation des WebSockets dans le [[trading bot architecture]] inclut typiquement un module de reconnexion automatique, un buffer de messages, et un handler pour chaque type de message. La [[connexion permanente]] est clé pour ne pas manquer d'opportunités.

## Sources

[^1]: Binance, "WebSocket Streams", https://developers.binance.com/docs/simple-api_price_streams (consulted 2026)
[^2]: RFC 6455, "The WebSocket Protocol", IETF (2011)
