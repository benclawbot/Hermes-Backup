---
titre: "API key management"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/api, #concept/keys]
créé: 2026-04-21
liens_forts: ["[[API authentication]]", "[[IP whitelisting]]", "[[Trading bot]]"]
liens_opposition: []
---

# API key management

> [!info] Résumé
> L'API key management désigne l'ensemble des pratiques pour créer, stocker, protéger, faire tourner et révoquer les clés API utilisées par les bots. Une gestion défaillante peut conduire au vol de fonds ou à des pertes massives.

## Définition

L'API key management est le processus de gestion du cycle de vie complet des clés API : création sécurisée, stockage chiffré, utilisation avec permissions minimales, rotation périodique, et révocation en cas d'incident.

Une clé API se compose typiquement de deux éléments : la clé publique (API Key) qui identifie le compte, et la clé secrète (Secret Key) qui signe les requêtes. Certaines plateformes ajoutent une passphrase additionnelle.

Le storage doit être chiffré et accessible uniquement aux processus autorisés. Les secrets ne doivent jamais apparaître dans les logs, les variables d'environnement commitées, ou le code source.

## Contexte et origine

La gestion des clés API est devenue critique avec l'explosion du trading automatisé en 2017-2018. Les premiers bots utilisaient souvent des clés stockées en clair dans des fichiers de configuration.

Les incidents de vol de fonds через des clés API compromises ont été nombreux. DesYouTubers encourageaient les utilisateurs à partager leurs clés pour "gagner de l'argent ensemble", resulting in numerous vols.

Les plateformes ont répondu en proposant des fonctionnalités de sécurité avancées : permissions granulaires, IP whitelisting, expiration automatique, et logs d'audit. Ces fonctionnalités sont devenues le standard.

## Mécanismes et caractéristiques

La création de clé suit le principe du moindre privilège. Une clé pour le monitoring-only ne doit avoir que la permission de lecture. Une clé pour un bot de trading doit avoir les permissions trading mais pas withdrawal.

L'IP whitelisting lie la clé à des IPs spécifiques. Une clé avec IP whitelist ne fonctionne que depuis les IPs autorisées. C'est une protection majeure contre le vol de clé.

Le stockage sécurisé utilise un vault (HashiCorp Vault, AWS Secrets Manager) ou des variables d'environnement chiffrées. Le secret doit être en mémoire uniquement pendant l'utilisation, puis effacé.

La rotation consiste à générer une nouvelle clé, tester la nouvelle clé, puis révoquer l'ancienne. La rotation périodique réduit le risque en cas de compromission non détectée.

## Nuances, critiques, limites

Le principal risque est le secret qui traîne dans des места inappropriées. Des clés commitées sur GitHub sont une source majeure de vols. Des scanners comme GitGuardian peuvent détecter les secrets en code, mais la prévention est mejor.

La perte du secret est irreversible. Contrairement à un mot de passe, il n'y a pas de "reset" de clé API. Si le secret est perdu, la clé doit être révoquée et une nouvelle créée. Tout code utilisant l'ancienne clé doit être mis à jour.

L'automatisation de la rotation est difficile. Certaines plateformes suportent la rotation sans downtime (deux clés actives simultanément pendant une période de transition). D'autres exigent un downtime pour mettre à jour le secret.

Les clés sans expiration sont un risque. Une clé créée en 2018 et jamais révoquée peut être compromise sans que le holder le sache. L'expiration automatique ou la rotation forcée réduit ce risque.

## Liens et implications

L'[[API key management]] est indissociable de l'[[API authentication]]. Sans clés, pas d'authentification. L'[[IP whitelisting]] et les [[firewall rules]] forment les couches de protection autour des clés.

Le [[trading bot]] a besoin d'accéder aux clés pour signer ses requêtes. Si le [[server infrastructure]] est compromis, les clés sont à risque. Le [[circuit breakers]] peut aider à détecter des comportements anormaux.

Les [[ordres]] passent par l'API utilisant les clés. Une clé compromise peut être utilisée pour placer des ordres non autorisés. Le [[rejet d'ordre]] peut être un signe d'accès non autorisé.

## Sources

[^1]: OWASP, "API Security - Key Management", https://owasp.org (consulted 2026)
[^2]: Binance, "腰间盘突出 Interface", https://developers.binance.com/en/site-map (consulted 2026)
