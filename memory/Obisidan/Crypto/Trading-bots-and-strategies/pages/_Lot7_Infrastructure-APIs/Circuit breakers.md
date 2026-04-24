---
titre: "Circuit breakers"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/safety, #concept/risk, #concept/failover]
créé: 2026-04-20
liens_forts: ["[[Gestion du risque]]", "[[Failover systems]]", "[[Error handling]]"]
liens_opposition: []
---

# Circuit breakers

> [!info] Résumé
> Le circuit breaker est un pattern de fiabilité qui coupe temporairement les requêtes vers un service défaillant pour éviter les cascading failures. Implémenté au niveau applicatif, il protège le bot des pannes en cascade.

## Définition

Le circuit breaker est un pattern de conception (popularisé par Michael Nygard dans "Release It!") qui fonctionne comme un disjoncteur électrique. Quand un service échoue屡次, le circuit breaker "ouvre" et bloque les appels suivants pendant une période fixe, laissant le service se reprendre.

Les états du circuit breaker :
- **Closed** : fonctionnement normal, les requêtes passent
- **Open** : le service est considéré défaillant, les requêtes sont bloquées (fail fast)
- **Half-open** : après un timeout, une requête test est envoyée pour vérifier si le service est rétabli

Ce pattern empêche un bot de saturer un exchange avec des requêtes qui échouent, ou d'envoyer des ordres qui ne seront pas exécutés correctement à cause d'un problème de connexion.

## Contexte et origine

Le pattern circuit breaker a été formalisé vers 2005-2010 dans le contexte des architectures orientées service (SOA). Les systèmes distribués avaient besoin de gérer les pannes en cascade.

Netflix a popularisé le pattern avec sa bibliothèque Hystrix (maintenant en maintenance). Quand un service externe call échoue屡次, Hystrix ouvre le circuit pour protéger le système.

En trading, les circuits breakers ont été adoptés après les flash crashes de 2010. Les bots qui continuaient à envoyer des ordres vers un exchange dont le matching engine était overloaded aggraveraient la situation.

## Mécanismes et caractéristiques

Les paramètres configurables :
- **Failure threshold** : nombre d'échecs avant d'ouvrir le circuit (ex: 5)
- **Success threshold** : nombre de succès en half-open pour fermer le circuit (ex: 3)
- **Timeout** : durée de l'état open avant de passer en half-open (ex: 30 secondes)
- **Half-open max calls** : nombre de requêtes test en half-open (ex: 1)

Implémentations courantes :
- **PyBreaker** (Python)
- **Hystrix** (JVM, en maintenance)
- **Polly** (.NET)
- **Resilience4j** (JVM)
- **gobreaker** (Go)

Exemple de code pour une API d'échange :
```python
breaker = pybreaker.CircuitBreaker(
    fail_max=5,
    reset_timeout=30
)

@breaker
def place_order(symbol, side, quantity, price):
    return api.post_order(symbol, side, quantity, price)
```

## Nuances, critiques, limites

Le circuit breaker ajoute de la latence perçue si mal configuré. Si le circuit est ouvert trop vite, des requêtes légitimes sont bloquées. Si le timeout est trop long, le bot attend inutilement.

La distinction entre "échec temporaire" et "échec permanent" est difficile. Un exchange qui retourne 500 pour toutes les requêtes ne se reprendra pas. Le circuit breaker doit être configuré pour détecté ce cas.

Le circuit breaker au niveau de l'application est distinct du circuit breaker au niveau de l exchange. Les exchanges ont leurs propres механизмы de protection contre les ordres excessifs ou市场价格异常.

Le monitoring des circuits breakers est essentiel. Un circuit qui s'ouvre fréquemment indica un problème sous-jacent. Les logs doivent inclure quand et pourquoi le circuit s'ouvre.

## Liens et implications

Le [[circuit breakers]] protège le [[trading bot]] des pannes en cascade. Il fonctionne avec le [[failover systems]] et le [[error handling]] pour créer un système robuste.

La [[retry logic]] interagit avec le circuit breaker : les retries sont stoppés quand le circuit est ouvert. Le [[request batching]] peut être désactivé quand le circuit est ouvert.

Le circuit breaker fait partie de la [[gestion du risque]] opérationnelle. Il prevents les pertes causées par des ordres mal executed ou des APIs défaillantes.

## Sources

[^1]: Michael Nygard, "Release It!", Pragmatic Programmers (2007)
[^2]: Netflix Hystrix, "Circuit Breaker Pattern", https://github.com/Netflix/Hystrix (consulted 2026)
