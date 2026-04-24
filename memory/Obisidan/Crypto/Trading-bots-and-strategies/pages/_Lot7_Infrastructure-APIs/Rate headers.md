---
titre: "Rate headers"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/api, #concept/headers, #concept/rate-limiting]
créé: 2026-04-20
liens_forts: ["[[API rate limiting]]", "[[REST API]]", "[[Retry logic]]"]
liens_opposition: []
---

# Rate headers

> [!info] Résumé
> Les rate headers sont des headers HTTP retournés par les APIs d'échange qui informent le client sur son utilisation actuelle des rate limits. Ils permettent au bot d'auto-réguler ses requêtes pour éviter les sanctions.

## Définition

Les rate headers sont des headers HTTP (commençant par X-RateLimit- ou Retry-After) qui indiquent :
- Quelle est la limite de requêtes autorisée
-Combien de requêtes restent disponibles
-Quand le client pourra réessayer après un dépassement

Ces headers permettent à un bot de savoir dynamiquement où il en est par rapport aux limites, au lieu de deviner ou de se faire sanctionner.

## Contexte et origine

Les rate headers ont été standardisés progressivement. Le premier header standardisé était Retry-After (RFC 2616, puis RFC 7231) pour indiquer quand une ressource serait à nouveau disponible.

AWS a standardisé les rate headers avec X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset. Cette convention a été adoptée par de nombreux providers.

Les exchanges crypto ont adopté des conventions similaires avec leurs propres headers. Binance utilise des weight-based limits, Coinbase utilise des fixed counts.

## Mécanismes et caractéristiques

Headers couramment utilisés :

**X-RateLimit-Limit** : nombre maximum de requêtes autorisées dans la fenêtre
```
X-RateLimit-Limit: 1200
```

**X-RateLimit-Remaining** : requêtes restantes dans la fenêtre actuelle
```
X-RateLimit-Remaining: 1150
```

**X-RateLimit-Reset** : timestamp Unix quand la fenêtre se réinitialise
```
X-RateLimit-Reset: 1614556800
```

**Retry-After** : secondes avant de pouvoir réessayer (apres 429)
```
Retry-After: 30
```

**X-Server-Id** : parfois inclus pour identifier quel serveur a traité la requête (utile pour debugging)

Parsing des headers :
```python
def update_rate_limits(response):
    limits = {
        'limit': int(response.headers.get('X-RateLimit-Limit', 0)),
        'remaining': int(response.headers.get('X-RateLimit-Remaining', 0)),
        'reset': int(response.headers.get('X-RateLimit-Reset', 0)),
        'retry_after': int(response.headers.get('Retry-After', 0))
    }
    return limits
```

## Nuances, critiques, limites

Toutes les APIs n'utilisent pas les mêmes headers. Binance utilise un système de weight pas des counts fixes. Vérifier la documentation de chaque exchange.

Les headers peuvent mentir ou être absents en cas de surcharge. Si l'API retourne une erreur 429 sans Retry-After, le bot doit avoir un fallback (exponential backoff).

Le reset time peut être dans le futur lointain. Si le reset est dans 30 minutes, le bot ne doit pas spinner en attendant. Implémenter un sleep intelligent basé sur le reset timestamp.

Le rate limit peut être par IP ou par clé API. Si plusieurs bots partagent une IP, ils se concurrencent mutuellement. Le monitoring doit être fait au niveau de l'IP.

## Liens et implications

Les [[rate headers]] informent le [[retry logic]] sur quand réessayer. Ils permettent au bot d'implémenter un [[API rate limiting]] plus fin basé sur les limites réelles.

Le [[connection pooling]] peut être ajusté basée sur les rate limits. Le [[request batching]] devient plus intelligent quand le bot connaît ses limites restantes.

La [[gestion du risque]] inclut le respect des rate limits pour éviter le bannissement. Le [[log management]] doit enregistrer les exceeded de rate limits pour diagnostics.

## Sources

[^1]: RFC 7231, "Retry-After Header", https://tools.ietf.org/html/rfc7231 (consulted 2026)
[^2]: AWS, "Rate Limits", https://docs.aws.amazon.com (consulted 2026)
