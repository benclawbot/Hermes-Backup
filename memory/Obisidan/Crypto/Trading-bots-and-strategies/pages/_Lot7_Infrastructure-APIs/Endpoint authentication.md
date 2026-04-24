---
titre: "Endpoint authentication"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/api, #concept/authentication]
créé: 2026-04-20
liens_forts: ["[[API authentication]]", "[[HMAC signature]]", "[[IP whitelisting]]"]
liens_opposition: []
---

# Endpoint authentication

> [!info] Résumé
> L'authentification des endpoints vérifie l'identité du client pour chaque requête API spécifique. Elle combine clés API, signatures HMAC, et souvent des restrictions par IP pour garantir que seul le propriétaire légitime peut accéder aux endpoints sensibles.

## Définition

L'authentification des endpoints est le processus de vérification de l'identité du client pour chaque requête envoyée à un endpoint API spécifique. Contrairement à l'authentification globale (login/password), l'authentification des endpoints est granulaire.

Les composantes typiques :
- **API Key** : identification du client (public, dans le header)
- **Signature** : vérification de l'intégrité de la requête (HMAC du message)
- **Timestamp** : anti-replay (requête trop vieille est rejetée)
- **Permissions** : granular access control (lecture seule, trading, withdrawal)

Les endpoints peuvent avoir des niveaux de sécurité différents :
- **Public endpoints** : aucune authentification (prix ticker)
- **Authenticated endpoints** : clé API + signature (compte, ordres)
- **Privileged endpoints** : 2FA + restrictions (withdrawal, API key management)

## Contexte et origine

L'authentification granulaire est née du besoin de protéger les endpoints différemment. Un endpoint de lecture (compte) nécessite moins de sécurité qu'un endpoint de withdrawal.

OAuth 2.0 a popularisé le concept de scopes et permissions. Chaque token a des permissions spécifiques. Cette approche a été adaptée aux APIs de trading.

En crypto, Mt.Gox en 2011 avait une authentification minimaliste. Les vols massifs de l'époque ont poussé les exchanges à implémenter des authentifications plus robustes.

## Mécanismes et caractéristiques

Flux d'authentification typical sur Binance :
1. Client construit la requête avec tous les paramètres
2. Client calcule HMAC-SHA256(requête + secret)
3. Client ajoute API key et signature à la requête
4. Serveur vérifie la signature avec son copy du secret
5. Serveur vérifie le timestamp (doit être dans 30 secondes)
6. Serveur vérifie les permissions de la clé pour cet endpoint

Headers d'authentification :
```
X-MBX-APIKEY: w8jVJs2kGJmNLknxNM3cpH2D2bVTd9y3fw4
```

Params de signature (query string ou body) :
```
timestamp: 1614556800123
signature: 1a2b3c4d5e6f...
```

Permissions de clé API (sur Binance) :
- Enable reading (marché data)
- Enable spot & margin trading
- Enable futures
- Enable withdrawals (avec 2FA)

## Nuances, critiques, limites

La sécurité d'un endpoint est seulement aussi forte que le maillon le plus faible. Une clé avec permissions de withdrawal sans 2FA est une faille critique.

Le timestamp doit être synchronisé (NTP). Un serveur avec un clock skew de plus de 30 secondes verra toutes ses requêtes rejetées.

Les permissions des clés doivent suivre le principle of least privilege. Une clé de monitoring uniquement devrait avoir "lecture seule", pas "trading".

L'absence de 2FA pour les endpoints privilégiés est une negligent. Les withdrawal endpoints devraient exiger 2FA obligatoire sur toutes les plateformes.

## Liens et implications

L'[[endpoint authentication]] est une forme specific d'[[API authentication]]. Elle dépend du [[HMAC signature]] et du [[timestamp validation]] pour fonctionner.

L'[[IP whitelisting]] renforce l'authentification en limitant quels IPs peuvent utiliser la clé. Le [[firewall rules]] peut ajouter une couche de protection supplémentaire.

Les [[ordres]] et [[ordres annulés]] passent par des endpoints authentifiés. Le [[paiement pour le flux d'ordres]] implique des considerations d'authentification.

## Sources

[^1]: Binance, "Authentication", https://developers.binance.com (consulted 2026)
[^2]: Coinbase, "Key Permissions", https://docs.cloud.coinbase.com (consulted 2026)
