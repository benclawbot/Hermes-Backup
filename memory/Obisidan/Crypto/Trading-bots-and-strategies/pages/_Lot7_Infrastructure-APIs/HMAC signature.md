---
titre: "HMAC signature"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/crypto, #concept/security, #concept/hmac]
créé: 2026-04-21
liens_forts: ["[[API authentication]]", "[[Request signatures]]", "[[Timestamp validation]]"]
liens_opposition: []
---

# HMAC signature

> [!info] Résumé
> L'HMAC est un code d'authentification de message qui garantit l'intégrité et l'authenticité d'une requête API. En trading crypto, l'HMAC-SHA256 preuve que la requête provient du détenteur du secret sans jamais transmettre ce dernier.

## Définition

HMAC (Hash-based Message Authentication Code) est un algorithme qui génère un code d'authentification en combinant une clé secrète avec un message. Le code résultant permet de vérifier que le message n'a pas été altéré et qu'il provient bien du détenteur de la clé.

L'algorithme standard pour les APIs de trading est HMAC-SHA256. Il prend en entrée le message (généralement les paramètres de la requête encodés) et la clé secrète, et produit un hash de 256 bits (32 octets).

Le hash est ensuite encodé en hexadécimal (64 caractères) et transmis comme signature. L'échange recalcule le hash avec la même clé secrète stockée côté serveur et compare les deux. Si ils correspondent, la requête est authentique.

## Contexte et origine

HMAC a été formalisé en 1996 par Bellare, Canetti et Krawczyk dans un papier de recherche qui a établi les fondements de l'authentification par hash à clé secrète.

L'algorithme a été adopté massivement dans les protocoles web (OAuth 1.0a, AWS Signature) car il est simple à implémenter, efficace, et ne nécessite pas de transmettre la clé secrète sur le réseau.

En trading crypto, HMAC-SHA256 est devenu le standard de facto après son adoption par les premiers échanges Bitcoin. Binance, Coinbase, Kraken utilisent tous ce même algorithme avec des variations mineures.

## Mécanismes et caractéristiques

Le processus de signature HMAC-SHA256 pour Binance :
1. Construire la query string : "symbol=BTCUSDT&side=BUY&type=LIMIT&quantity=1&timestamp=1234567890123"
2. Créer la signature avec : HMAC-SHA256(queryString, secretKey) 
3. Encoder le résultat en hexadécimal
4. Envoyer la query string + signature dans le body ou les params

D'autres échanges comme Coinbase utilisent un processus légèrement différent avec un preset de message signed comprenant la timestamp, la méthode HTTP, le chemin de la requête, et le body.

 Certaines implémentations utilisent SHA-384 ou SHA-512 pour les algorithmes plus récents. HMAC-SHA256 reste le plus courant car il offre un bon équilibre entre sécurité et performance.

Les bibliothèques crypto standard implémentent HMAC. En Python : hmac.new(secret.encode(), message.encode(), hashlib.sha256).hexdigest(). En JavaScript : crypto.createHmac('sha256', secret).update(message).digest('hex').

## Nuances, critiques, limites

La sécurité repose sur la confidentialité du secret. Si le secret fuite, l'attaquant peut générér des signatures valides. Le secret doit être stocké de manière sécurisée (variable d'environnement, vault, pas en code source).

Le même message avec le même secret produira toujours le même hash. C'est pourquoi un timestamp unique est inclus dans le message pour éviter les replay attacks (rejouer une ancienne requête valide).

Le timing attack est une vulnérabilité théorique. Un attaquant qui chronomètre le temps de vérification de la signature peut déduire bit par bit le secret. Les implémentations safe utilisent des comparaisons à temps constant.

L'HMAC ne chiffre pas le message. Il prouve seulement l'authenticité. Pour chiffrer, une couche TLS est nécessaire. Les APIs de trading utilisent HTTPS (TLS) pour chiffrer la transmission.

## Liens et implications

L'HMAC signature est le mécanisme cœur de l'[[API authentication]]. Sans signature HMAC valide, l'échange rejette la requête. L'[[API key management]] protège le secret qui génère la signature.

La [[timestamp validation]] est critique car elle empêche les replay attacks. Une requête signée sans timestamp récent pourrait être rejouée plus tard. Le [[request signatures]] system dépend de HMAC.

Le [[trading bot]] calcule la signature pour chaque requête. Si le [[server infrastructure]] est compromis, le secret peut être volé. Les [[firewall rules]] protègent l'infrastructure sous-jacente.

## Sources

[^1]: RFC 2104, "HMAC: Keyed-Hashing for Message Authentication", IETF (1997)
[^2]: Binance, "腰间盘突出 Signature", https://developers.binance.com/docs/signatures (consulted 2026)
