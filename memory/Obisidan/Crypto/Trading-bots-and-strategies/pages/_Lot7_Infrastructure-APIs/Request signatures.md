---
titre: "Request signatures"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/cryptography, #concept/integrity]
créé: 2026-04-20
liens_forts: ["[[HMAC signature]]", "[[API authentication]]", "[[Timestamp validation]]"]
liens_opposition: []
---

# Request signatures

> [!info] Résumé
> Les signatures de requête cryptographiquement vérifiables garantissent l'intégrité et l'authenticité de chaque requête API. Elles previennent la falsification et l'usurpation d'identité dans les communications bot-échange.

## Définition

Une signature de requête est un hash cryptographique qui prove que :
1. Le client connaît le secret partagé
2. Le contenu de la requête n'a pas été modifié en transit
3. La requête n'est pas un replay d'une ancienne requête

La signature est calculée sur le contenu de la requête (params + timestamp) avec le secret. Le serveur recalcule la même signature et compare. Si les signatures diffèrent, la requête est rejetée.

## Contexte et origine

Les signatures de requête ont été utilisées dans les protocoles financiers depuis les années 1980-1990. Les protocoles proprietaires comme FIX protocol incluaient déjà des mécanismes de signature.

SSL/TLS a apporté le chiffrement mais pas toujours l'authentification des messages individuels. Les signatures applicatives offrent une sécurité supplémentaire au niveau de la couche applicative.

En crypto, les APIs ont adopté HMAC-SHA256 comme standard de facto après le succès de protocols comme Binance API. Cette approche est maintenant reproduite sur prácticamente toutes les plateformes.

## Mécanismes et caractéristiques

Types de signatures :

**HMAC-SHA256** :
- Rapide et simple à implémenter
- Clé partagée entre client et serveur
- Utilisé par Binance, Coinbase, et plupart des exchanges

**RSA Signatures** :
- Clé publique/privée, pas de secret partagé
- Le serveur ne connaît que la clé publique
- Utilisé par BitMEX, Deribit

**ED25519** :
- Signatures modernes, performantes
- Utilisé par quelques exchanges plus récents

Construction de la string à signer (Binance) :
```
symbol=BTCUSDT&side=BUY&type=LIMIT&quantity=1&price=50000&timestamp=1614556800123&recvWindow=5000
```

Calcul : `HMAC_SHA256(secret, query_string)` → hex signature

## Nuances, critiques, limites

Le choice of hash algorithm affecte la sécurité. SHA-256 est currently considered secure. MD5 et SHA-1 ont des vulnérabilités connues.

Le secret partagé est un point de défaillance unique. Si le secret est compromis, toutes les signatures passées et futures peuvent être forgées. La rotation régulière des clés est importante.

L'horodatage est critique pour prévenir les replay attacks. Sans timestamp, un attaquant peut replayer une requête interceptée indefiniment.

La signature de la requête ne protège pas contre tous les attacks. Une fois la requête signée, elle peut toujours être interceptée et utilisée. TLS (HTTPS) est nécessaire pour chiffrer le transport.

## Liens et implications

La [[request signatures]] utilise le [[HMAC signature]] comme algorithme principal. Elle complète le [[timestamp validation]] pour prevenir les replay attacks.

L'[[API authentication]] utilise les signatures pour vérifier l'identité. L'[[endpoint authentication]] peut ajouter des couches de vérification supplémentaires.

Le [[forward testing]] et [[backtesting]] ne nécessitent pas de signatures car ils n'envoient pas de requêtes réelles.

## Sources

[^1]: Binance, "Signature", https://developers.binance.com (consulted 2026)
[^2]: RFC 6238, "Time-based One-time Password Algorithm", https://tools.ietf.org/html/rfc6238 (consulted 2026)
