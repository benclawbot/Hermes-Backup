---
titre: "Retry logic"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/reliability, #concept/robustness, #concept/networking]
créé: 2026-04-20
liens_forts: ["[[Error handling]]", "[[API rate limiting]]", "[[Circuit breakers]]"]
liens_opposition: []
---

# Retry logic

> [!info] Résumé
> La logique de retry détermine quand et comment réessayer une requête échouée. L'exponential backoff avec jitter est le standard pour éviter la surcharge tout en maximisant les chances de succès.

## Définition

Le retry logic est un pattern qui ré-exécute une opération après une erreur temporaire. Le challenge est de déterminer :
- Quand retryer (quelles erreurs sont temporaires)
- Combien de fois retryer (retry limit)
- Combien de temps attendre entre chaque retry (backoff)
- Si oui ou non les retries aggravent le problème (thundering herd)

L'objectif est de gérer les erreurs temporaires (network blip, temporary overload) sans aggraver la situation (rate limits, cascading failures).

## Contexte et origine

Le retry avec backoff a été formalisé dans les protocoles de réseau comme Ethernet et TCP. L'exponential backoff (temps double après chaque échec) prevents collisions.

Les APIs modernes comme les clouds AWS ont adopté le retry avec backoff comme standard. Les SDKs AWS incluent un retryer configurable par défaut.

En trading, le retry est critique pour les APIs d'échange qui peuvent avoir des pics de latence ou desrate limits temporaires. Un ordre qui échoue à cause d'un timeout réseau mérite un retry. Un ordre rejeté pour paramètres invalides ne mérite pas de retry.

## Mécanismes et caractéristiques

**Exponential backoff** : délai = base * 2^attempt + random_jitter
- Attempt 1 : 1 seconde + jitter
- Attempt 2 : 2 secondes + jitter
- Attempt 3 : 4 secondes + jitter
- etc.

**Jitter** (randomisation) : évite le "thundering herd" où tous les clients retryent simultanément après un outage.

**Retryable errors** :
- 429 Too Many Requests (après Retry-After)
- 500 Internal Server Error
- 503 Service Unavailable
- Timeout réseau
- Connexion reset

**Non-retryable errors** :
- 400 Bad Request (correction nécessaire)
- 401 Unauthorized (clé invalide)
- 403 Forbidden (permissions)
- Insufficient balance

**Implementations** :
- Python : tenacity, backoff libraries
- Go : go-retryablehttp
- Java : Resilience4j retry

```python
@backoff.on_exception(
    backoff.expo,
    (requests.exceptions.RequestException, APIError),
    max_tries=5,
    jitter="full"
)
def call_api():
    return api.request()
```

## Nuances, critiques, limites

Le retry peut aggraver un rate limit problem. Si l'erreur est 429, le retry doit respecter le Retry-After header, pas utiliser le backoff standard.

Le retry des ordres n'est pas idempotent. Passer un ordre deux fois peut créer une position doublée. Utiliser un client order ID unique et vérifier si l'ordre a déjà été placé avant de retryer.

Le retry en cascade peut overwhelming un système qui essaye de se reprendre. Le circuit breaker arrête les retries quand le système est réellement en panne.

Les retries múltiples multiplient la latence perçue pour l'utilisateur. Un retry avec 5 attempts peut prendre plusieurs secondes. L'expérience utilisateur doit être considérée.

## Liens et implications

Le [[retry logic]] dépend de l'[[error handling]] pour détecter les erreurs et décider si elles méritent un retry. Il interagit avec le [[circuit breakers]] pour arrêter les retries quand le système est en panne.

Le [[API rate limiting]] affecte la stratégie de retry : ignorer le rate limit peut aggraver le problème. Le [[timestamp validation]] peut causer des erreurs non-retryable si le timestamp local est incorrect.

Le [[failover systems]] peut déclencher des retries sur le serveur secondaire. Le [[log management]] enregistre les retries pour diagnostics.

## Sources

[^1]: AWS, "Retry, backoff, and jitter", https://aws.amazon.com/architecture (consulted 2026)
[^2]: Polly, "Retry Pattern", https://github.com/App-vNext/Polly (consulted 2026)
