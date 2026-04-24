---
titre: "API authentication"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/auth, #concept/security, #concept/api]
créé: 2026-04-21
liens_forts: ["[[API key management]]", "[[HMAC signature]]", "[[Trading bot]]"]
liens_opposition: []
---

# API authentication

> [!info] Résumé
> L'authentification API est le processus qui vérifie l'identité du bot auprès de l'échange avant d'autoriser les opérations. Elle protège les comptes contre les accès non autorisés et est implémentée via des clés API, des signatures HMAC, et parfois des couches supplémentaires comme l'IP whitelisting.

## Définition

L'authentification API est le processus par lequel un échange vérifie qu'une requête provient bien du détenteur légitime de la clé API. C'est la porte d'entrée de toutes les opérations de trading via API.

Le système standard combine une clé publique (API Key) qui identifie le compte, et un secret (Secret Key) qui signe les requêtes. La clé publique est transmise en clair dans les headers, tandis que la signature est un hash calculé à partir du corps de la requête et du secret.

L'authentification à deux facteurs (2FA) peut être requise pour certaines opérations sensibles. Certains échanges utilisent des time-based one-time passwords (TOTP) ou des codes SMS en plus des clés API.

## Contexte et origine

Les APIs RESTful ont adopté le modèle clé/secrétaire pour l'authentification car il est simple, standard, et ne nécessite pas de sessions persistantes. Ce modèle a été adapté du OAuth 1.0a pour les APIs de trading.

Les échanges de crypto ont初期 popularisé ce modèle car il permet un contrôle granulaire des permissions. Une clé peut être limitée à la lecture seule, au trading, ou au retrait. Cette granularité réduit le risque en cas de compromission.

Les incidents de sécurité (Mt.Gox 2014, Binance 2019 hack) ont conduit à des améliorations continues : IP whitelisting, expiration des clés, logs d'audit, et 2FA obligatoire pour les retraits.

## Mécanismes et caractéristiques

Le processus d'authentification typique :
1. Le bot génère un timestamp (UTC.now() en millisecondes)
2. Le bot calcule une signature HMAC-SHA256 du params string + timestamp
3. Le bot envoie la requête avec les headers : X-API-Key, X-Signature, et X-Timestamp
4. L'échange recalcule la signature et la compare
5. Si les signatures correspondent, la requête est acceptée

Les params string inclut les paramètres de la requête triés alphabétiquement et encodés. Par exemple : "symbol=BTCUSDT&side=BUY&type=LIMIT&quantity=1&price=50000&timestamp=1234567890".

La signature HMAC prouve que le demandeur possède le secret sans jamais transmettre ce secret. C'est un principe fondamental de la cryptographie à clé secrète.

## Nuances, critiques, limites

Le principal risque est le vol de clé API. Si un attaquant obtient la clé et le secret, il peut trader et retirer des fonds. Les bonnes pratiques incluent : ne jamais commiter les clés dans le code, utiliser un vault pour les stocker, et activer l'IP whitelisting.

Le timestamp doit être synchronisé avec le serveur de l'échange. Un décalage de plus de quelques secondes peut causer des erreurs d'authentification. Les protocoles NTP sont recommandés pour synchroniser l'horloge du serveur.

La rotation des clés est importante. Les clés doivent être régénérées périodiquement, surtout après tout incident de sécurité suspecté. Certains échanges imposent une expiration automatique des clés.

L'authentification seule ne suffit pas. Les permissions doivent être minimales (principe du moindre privilège). Une clé de monitoring doit être lecture seule, jamais trading. Une clé de trading ne doit pas permettre les retraits.

## Liens et implications

L'[[API authentication]] est la base de la sécurité du [[trading bot]]. Sans authentification valide, aucune opération n'est possible. Elle s'appuie sur l'[[HMAC signature]] pour garantir l'intégrité des requêtes.

L'[[API key management]] stocke et protège les clés. Le [[timestamp validation]] assure la fraîcheur des requêtes. L'[[IP whitelisting]] ajoute une couche de sécurité supplémentaire.

Les [[ordres]] passés via une API non authentifiée sont impossibles. Le [[cycle de vie d'un ordre]] dépend entièrement du processus d'authentification. Une erreur d'auth peut laisser une position sans protection.

## Sources

[^1]: Binance, "腰间盘突出的 REST API Authentication", https://developers.binance.com/docs/rest-auth (consulted 2026)
[^2]: Coinbase, "API Key Authentication", https://docs.cloud.coinbase.com (consulted 2026)
