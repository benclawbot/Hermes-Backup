---
titre: "Timestamp validation"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/timing, #concept/anti-replay]
créé: 2026-04-20
liens_forts: ["[[Request signatures]]", "[[HMAC signature]]", "[[API authentication]]"]
liens_opposition: []
---

# Timestamp validation

> [!info] Résumé
> La validation du timestamp vérifie que chaque requête API a été créée récemment, prevvenant ainsi les attaques par replay où des requêtes légitimes sont interceptées et réexécutées. Sans cette protection, un attaquant peut replayer des ordres passés.

## Définition

La validation du timestamp est une mesure de sécurité qui reject les requêtes dont le timestamp est trop ancien. Typiquement, une fenêtre de 30 à 60 secondes est utilisée. Si une requête arrive avec un timestamp older, elle est rejetée.

Cette protection previent les attaques de replay :
1. Attaquant intercepte une requête signée (ex: ordre d'achat de 1 BTC à 50000 USD)
2. Attaquant ne peut pas modifier la requête (signature ne correspondrait plus)
3. Mais attaquant peut replayer la requête tal qual
4. Avec timestamp validation, la requête est rejetée après 30-60 secondes

## Contexte et origine

Le timestamp validation est une composante standard des protocoles de sécurité depuis les années 1990. SSL/TLS n'inclut pas de protection contre les replay attacks au niveau applicatif.

OAuth 1.0 utilisait déjà des timestamps pour prévenir les replay attacks. Cette pratique a été reprise dans les APIs de trading.

Les exchanges crypto ont adopté le timestamp validation comme standard après des incidents de security où des ordres étaient replays pour causer des mouvements de marché artificielle.

## Mécanismes et caractéristiques

Implementation typical :
```python
def validate_timestamp(timestamp, recv_window=5000):
    now_ms = current_timestamp_ms()
    age_ms = now_ms - timestamp
    
    # Reject if older than recv_window (typically 5000-10000ms)
    if age_ms > recv_window:
        raise RejectError(f"Timestamp too old: {age_ms}ms")
    
    # Reject if in the future (clock skew > 30s)
    if timestamp > now_ms + 30000:
        raise RejectError(f"Timestamp in future")
```

Fenêtre de validation (recv_window) :
- Binance : 5000ms (5 secondes) par défaut, configurable jusqu'à 60000ms
- Coinbase : 30 secondes
- Kraken : 5 minutes

Paramètres parfois inclus :
- **timestamp** : temps actuel en milliseconds
- **recvWindow** : fenêtre de réception acceptée (Binance specific)

## Nuances, critiques, limites

La synchronization du clock est critique. Un serveur avec un clock retardé de 10 secondes verra ses requêtes rejetées. Utiliser NTP pour sincroniser le clock.

recvWindow est un trade-off security vs compatibility. Une fenêtre plus large accepte plus de delay mais permet des replay attacks sur une période plus longue. Une fenêtre plus étroite reject plus de requêtes légitimes en cas de latence élevée.

Le timezone n'est généralement pas un problème car les timestamps sont en UTC Unix milliseconds. Mais attention aux libs qui utilisent des secondes au lieu de milliseconds.

Le timestamp ne protège pas contre les attaques MITM (man-in-the-middle) qui interceptent et modifient en temps réel. HTTPS/TLS est nécessaire pour ce type d'attaque.

## Liens et implications

La [[timestamp validation]] complète la [[request signatures]] pour la sécurité. Elle fait partie de l'[[API authentication]] et l'[[endpoint authentication]].

Le [[HMAC signature]] inclut généralement le timestamp dans le calcul de la signature. Modifier le timestamp invaliderait la signature.

La [[latence et exécution]] peut être affectée par la fenêtre de recvWindow. Un réseau lent peut déclencher des rejets si la fenêtre est trop courte.

## Sources

[^1]: Binance, "Timing", https://developers.binance.com (consulted 2026)
[^2]: OWASP, "Anti-Replay", https://owasp.org (consulted 2026)
