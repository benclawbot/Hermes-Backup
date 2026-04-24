---
titre: "Connection pooling"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/performance, #concept/networking, #concept/optimization]
créé: 2026-04-20
liens_forts: ["[[REST API]]", "[[Serveur infrastructure]]", "[[Latence optimization]]"]
liens_opposition: []
---

# Connection pooling

> [!info] Résumé
> Le connection pooling maintient un reservoir de connexions réseau réutilisables plutôt que d'en créer une nouvelle pour chaque requête. Cette technique réduit la latence et le coast CPU en éliminant les overheads de création de connexion TCP/TLS.

## Définition

Le connection pooling est une technique qui garde un pool de connexions réseau pré-établies prêtes à être utilisées. Au lieu de négocier une nouvelle connexion TCP + TLS pour chaque requête HTTP, le client réutilise une connexion du pool.

Les composants d'un connection pool :
- **Pool size** : nombre de connexions à maintenir (ex: 10-50)
- **Max connections** : maximum de connexions simultanées (ex: 100)
- **Idle timeout** : durée avant fermeture d'une connexion inactive (ex: 60 secondes)
- **Acquisition timeout** : temps maximum pour obtenir une connexion du pool

Les benefits : réduction de la latence (pas de TCP handshake), réduction du coast CPU (pas de TLS handshake), et meilleure gestion des ressources.

## Contexte et origine

Le connection pooling est un concept aussi ancien que le networking. Les bases de données utilisaient des connection pools dans les années 1990 pour se protéger contre le trop grand nombre de connexions simultanées.

En Java, les DataSources avec connection pooling sont standard depuis J2EE. En Python, la bibliothèque requests supporte le connection pooling via Session. Les clients HTTP modernes ont tous des pools de connexions.

Pour les APIs d'échange, le connection pooling est particulièrement important car les exchanges appliquent des rate limits par connexion IP. Un pool permet de mieux utiliser les limites de connexion disponibles.

## Mécanismes et caractéristiques

Configuration typique pour un client API d'échange :
- **Pool size** : 5-20 connexions permanentes
- **Max retries** : 3 retries par requête
- **Keep-alive** : 30-60 secondes
- **TCP keepalive** : activé pour détecter les connexions mortes

Les libraries avec support natif :
- **urllib3** (Python) : PoolManager avec connection pooling
- **httpx** (Python) : async HTTP client avec connection pooling
- **Go net/http** : Client avec connection pooling
- **Java HttpClient** : connection pooling built-in

Problèmes courants :
- **Connection leaks** : connexions non retournées au pool après usage → pool eventually vide
- **Pool exhaustion** : toutes les connexions sont utilisées → nouvelles requêtes blocées
- **Stale connections** : connexions qui meurent silencieusement → erreurs après timeout

## Nuances, critiques, limites

Le pool size doit être calibré. Un pool trop petit limite la concurrence. Un pool trop grand gaspille des ressources et peut déclencher des rate limits.

Le monitoring du pool est important. Métriques à suivre :
- Connexions actives
- Connexions inactives
- Temps d'attente pour obtenir une connexion
- Taux d'erreur de connexion

L'idle timeout doit être balanced. Timeout trop court ferme les connexions avant qu'elles soient réutilisées. Timeout trop long garde des connexions inutilement.

Pour lesWebSocket, le connection pooling n'est pas applicable car WebSocket maintain une connexion permanente. Mais pour les appels REST en parallèle, le pooling est bénéfique.

## Liens et implications

Le [[connection pooling]] optimise le [[REST API]] calls en réduisant la latence. Il fait partie de la [[latence optimization]] et dépend du [[serveur infrastructure]].

Le [[request batching]] peut être combiné avec le connection pooling pour maximiser l'efficacité. Le [[circuit breakers]] protège le pool des connexions défaillantes.

La [[failover systems]] peut inclure des pools de connexions vers plusieurs endpoints (primaire + secondaire). Le [[monitoring and alerting]] doit suivre l'état du pool.

## Sources

[^1]: urllib3 Documentation, "PoolManager", https://urllib3.readthedocs.io (consulted 2026)
[^2]: AWS, "Connection Pooling Best Practices", https://aws.amazon.com (consulted 2026)
