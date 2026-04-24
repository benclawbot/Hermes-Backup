---
titre: "Error handling"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/robustness, #concept/debugging, #concept/safety]
créé: 2026-04-20
liens_forts: ["[[Retry logic]]", "[[Circuit breakers]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Error handling

> [!info] Résumé
> L'erreur handling robuste est indispensable pour un trading bot. Les erreurs réseau, les rejets d'ordres, et les données invalides doivent être gérées gracefully pour éviter les pertes ou les states incohérents.

## Définition

L'erreur handling désigne l'ensemble des mécanismes pour détecter, gérer, et récupérer des erreurs. En trading, les erreurs peuvent être catégories :

- **Erreurs réseau** : connexion timeout, host unreachable, TLS errors
- **Erreurs API** : rate limit (429), invalid parameters (400), unauthorized (401)
- **Erreurs métier** : insufficient balance, market closed, order rejected
- **Erreurs d'exécution** : ordre non exécuté, slippage excessif, remplissage partiel

Un bot sans erreur handling appropriate peut se retrouve dans des states corrupts : ordres envoyés plusieurs fois, positions incorrectes, capitaux allouésincorrectement.

## Contexte et origine

Les pratiques d'erreur handling ont évolué depuis le debugging print de base vers des patterns sophistiqués. Les languages modernes ont des exceptions comme mécanisme primary.

Martin Fowler a documenté les patterns d'erreur handling dans "Patterns of Enterprise Application Architecture" : Retry, Circuit Breaker, Fallback, etc.

En trading, les erreurs ont des conséquences financières directes. Un bot qui ne gère pas les erreurs de réseau peut envoyer 10 fois le même ordre quand la confirmation n'est pas reçue. Un bot qui ne gère pas les rejets peut avere positions открыты sansstop-loss.

## Mécanismes et caractéristiques

Patterns d'erreur handling pour trading bots :

**Try-catch avec retry limités** :
```python
try:
    order = api.place_order(symbol, quantity, price)
except ConnectionError as e:
    if retries < 3:
        wait(exponential_backoff(retries))
        retry
    else:
        alert_and_stop()
```

**Fallback vers données alternatives** :
Si le prix du ticker échoue, utiliser le dernier prix connu avec un flag de confiance.

**Dead letter queue** :
Les opérations échouées sont mises en queue pour analysis ou retry manuel.

Les codes d'erreur API courants :
- **400 Bad Request** : paramètres invalides, vérifier la documentation
- **401 Unauthorized** : clé API invalide ou expirée
- **403 Forbidden** : IP non whitelisted ou permissions insuffisantes
- **429 Too Many Requests** : rate limit exceeded, utiliser le Retry-After
- **500 Internal Server Error** : erreur serveur, retry avec backoff
- **503 Service Unavailable** : exchange en maintenance, attendre

## Nuances, critiques, limites

Toutes les erreurs ne sont pas égales. Une erreur 400 pour параметр invalide ne se résoudra pas en retryant. Une erreur 429 nécessite un retry après le Retry-After. Une erreur 500 peut être temporaire.

L'erreur handling ne doit pas cacher les bugs. Si une erreur inattendue se produit, elle doit être logged et alertée, pas juste silently retryée.

Les erreurs non-bloquantes (monitoring) ne doivent pas block les erreurs critiques (trading). Utiliser un système de priorisation ou des tasks séparées.

Le state recovery après erreur est complexe. Si un ordre a été envoyé mais la confirmation perdue, le bot doit vérifier l'état réel de l'ordre avant de renvoyer.

## Liens et implications

L'[[error handling]] interagit avec le [[retry logic]] pour les erreurs temporaires et le [[circuit breakers]] pour les erreurs persistantes. La [[gestion du risque]] inclut l'erreur handling comme composant de sécurité.

Le [[log management]] enregistre les erreurs pour post-mortem. Le [[monitoring and alerting]] notifie quand des erreurs critiques se produisent. Le [[failover systems]] utilise l'erreur handling pour détecter les pannes.

L'[[ordres annulés]] peuvent résulter d'erreurs d'ordre. Le [[rejet d'ordre]] est une forme d'erreur métier. La [[quality d'exécution]] peut être affectée par des erreurs.

## Sources

[^1]: Martin Fowler, "Patterns of Enterprise Application Architecture", Addison-Wesley (2002)
[^2]: Binance, "Error Codes", https://developers.binance.com (consulted 2026)
