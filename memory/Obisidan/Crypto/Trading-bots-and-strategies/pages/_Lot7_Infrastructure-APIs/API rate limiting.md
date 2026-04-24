---
titre: "API rate limiting"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/ratelimit, #concept/api, #concept/limites]
créé: 2026-04-21
liens_forts: ["[[REST API]]", "[[API d'échange]]", "[[Request batching]]"]
liens_opposition: []
---

# API rate limiting

> [!info] Résumé
> Le rate limiting est la restriction du nombre de requêtes qu'un bot peut effectuer sur l'API d'un échange dans un laps de temps donné. Respecter ces limites est essentiel pour éviter les bans temporaires qui peuvent être catastrophyques en période de marché volatile.

## Définition

Le rate limiting (limitation de débit) est un mécanisme qui contrôle le nombre de requêtes qu'un client peut envoyer à l'API d'un échange pendant une période de temps. Ces limites protegent les serveurs de surcharge et prevenant les abuses.

Chaque échange définit ses propres règles. Binance utilise un système de "poids" où chaque endpoint a un poids variable (1 à 40), avec un total de 1200 poids par minute. D'autres échanges utilisent des limites simples (100 requêtes/minute).

Quand une limite est excédee, l'échange retourne une erreur 429 (Too Many Requests) avec un header Retry-After indiquant le temps d'attente avant de réessayer. Certaines plateformes bannissent l'IP ou la clé API pour une période plus longue en cas d'abus.

## Contexte et origine

Les rate limits existent depuis les débuts des APIs web. Les Premiers sites web ont dû implémenter des limites pour se protéger contre les scrapers et les attaques par déni de service.

En trading crypto, les rate limits sont devenus plus strictes avec la popularisation des bots. Avant 2017, peu de bots retail existaient. La vague de 2017-2018 aforced les échanges à implémenter des limites plus strictes.

Les limites actuelles reflètent un équilibre entre accessibility pour les bots retail et protection de l'infrastructure. Certaines plateformes proposent des tiers payant avec des limites plus élevées ou des endpoints dédiés.

## Mécanismes et caractéristiques

Les types de rate limiting incluent : les limites par IP (partagées entre tous les utilisateurs derrière une même IP), les limites par clé API (spécifiques à chaque clé), et les limites par endpoint (certains endpoints sont plus limités).

Les headers de réponse incluent : X-Session-Rate-Limit-Limit (limite totale), X-Session-Rate-Limit-Remaining (requêtes restantes), X-Session-Rate-Limit-Reset (timestamp de reset). Ces headers permettent au bot d'ajuster dynamiquement son taux de requêtes.

Les stratégies de gestion incluent : le backoff exponentiel (attendre de plus en plus longtemps entre les retries), la Priorisation des requêtes (les requêtes critiques d'abord), et le request batching (combiner plusieurs requêtes en une).

Certaines bibliothèques comme CCXT gèrent automatiquement le rate limiting avec un token bucket ou un leaky bucket algorithm. Le bot peut se concentrer sur la logique métier plutôt que la plomberie du rate limiting.

## Nuances, critiques, limites

Le rate limiting peut être catastrophique si mal géré. Un bot qui se fait bannir en plein marché volatile ne peut ni placer ses ordres de stop-loss ni vendre ses positions. C'est un risque opérationnel majeur.

Les limites sont souvent différentes pour les lectures vs les écritures. Les lectures (GET) ont généralement des limites plus élevées que les écritures (POST/DELETE). Un bot de market making qui place beaucoup d'ordres rapidement peut atteindre les limites d'écriture.

La détection du ban n'est pas toujours immédiate. Parfois le premier signs est un ralentissement.progressif, puis une erreur 429, puis un ban complet. Monitorer les headers rate limit permet d'anticiper.

Les clés API multiple ou les IPs multiples peuvent être une solution pour contourner les limites, mais cela violation souvent les conditions d'utilisation des échanges et peut mener à un ban permanent.

## Liens et implications

Le [[rate limiting]] affecte directement la [[stratégie de momentum]] qui peut nécessiter de nombreuses requêtes pour détecter et exploiter les pics de volatilité. Le [[market making]] qui place nombreux ordres est particulièrement vulnérable.

Le [[request batching]] permet de réduire le nombre de requêtes en combinant plusieurs opérations en une seule. Le [[circuit breakers]] prevents the bot de continuer à envoyer des requêtes quand les limites sont已达到.

Le [[retry logic]] doit inclure une gestion intelligente du backoff pour éviter d'aggraver un ban. La [[connexion pooling]] peut aider à mieux gérer les connexions et réduire les requêtes inutiles.

## Sources

[^1]: Binance, "Rate Limits", https://developers.binance.com/docs/rate-limits (consulted 2026)
[^2]: CCXT, "Rate Limitation", https://docs.ccxt.org/#rate-limit (consulted 2026)
