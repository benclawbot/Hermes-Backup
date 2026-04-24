---
titre: "OAuth for trading APIs"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/authentication, #concept/oauth]
créé: 2026-04-20
liens_forts: ["[[API authentication]]", "[[Endpoint authentication]]", "[[API key management]]"]
liens_opposition: []
---

# OAuth for trading APIs

> [!info] Résumé
> OAuth 2.0 est un protocole d'autorisation qui permet aux applications tierces d'accéder aux comptes de trading sans exposer les identifiants. Plus complexe que les clés API simples, il offre un contrôle granulaire des permissions.

## Définition

OAuth 2.0 est un standard d'autorisation (RFC 6749) qui permet à une application d'accéder aux ressources d'un utilisateur sans connaître son mot de passe. L'utilisateur donne son consentement explicite à l'application.

Les flows OAuth couramment utilisés :
- **Authorization Code** : pour les applications web avec serveur backend
- **Client Credentials** : pour les applications qui accèdent à leurs propres ressources
- **Device Flow** : pour les CLI tools ou apps sans navigateur

OAuth délègue l'authentification à l'exchange. L'application reçoit un access token avec des scopes limités. Le token peut être révoqué par l'utilisateur à tout moment.

## Contexte et origine

OAuth 1.0 a été créé en 2007 par Blaine Cook et d'autres pour Twitter. OAuth 2.0, publié en 2012, a simplifié le protocole au prix d'une sécurité légèrement réduite dans certaines configurations.

OAuth est devenu le standard pour l'autorisation tierce-partie. Google, Facebook, GitHub utilisent OAuth pour leurs APIs. Les trading APIs ont adopté OAuth progressivement.

Certaines exchanges crypto modernes (FTX avant sa faillite, Gemini) ont adopté OAuth. La mayoría仍将 API keys simples comme méthode principale.

## Mécanismes et caractéristiques

Flow Authorization Code pour trading :
1. Application redirige l'utilisateur vers l'exchange avec client_id et redirect_uri
2. Utilisateur se login et approuve les permissions demandées
3. Exchange redirige vers redirect_uri avec authorization code
4. Application échange le code contre access token + refresh token
5. Application utilise access token pour les requêtes API
6. Refresh token permet de renew l'access token quand il expire

Scopes OAuth typiques pour trading :
- **read_market** : données de marché seulement
- **trade** : placer et annuler des ordres
- **account** : consulter le solde et les positions
- **withdraw** : retirer des fonds (permissions les plus sensibles)

Tokens :
- **Access token** : short-lived (1 heure typically), utilisé pour les requêtes API
- **Refresh token** : long-lived (semaines/mois), utilisé pour renew l'access token

## Nuances, critiques, limites

OAuth est plus complexe à implémenter que les clés API. Pour un bot simple, les clés API sont plus simples et suffisantes. OAuth ajoute de la complexité pour peu de bénéfices si le bot n'accède pas à plusieurs comptes.

Les refresh tokens sont des credentials sensibles. Ils permettent de renew les access tokens indefini. Ils doivent être stockés securement comme les clés API.

OAuth pour le trading n'est pas encore universalisé. La mayoría des exchanges crypto utilisent toujours des clés API. OAuth est principalement utilisé pour les integrations avec des plateformes tierces (copy trading, portfolio trackers).

La révocation du token par l'utilisateur peut être un problème si le bot dépend de OAuth. Si l'utilisateur révoque le token, le bot perd immediately l'accès.

## Liens et implications

L'[[OAuth for trading APIs]] est une forme d'[[API authentication]] plus sophisticated. Il dépend de l'[[API key management]] pour les credentials OAuth (client_id, client_secret).

L'[[endpoint authentication]] peut utiliser des OAuth tokens au lieu de clés API. Le [[timestamp validation]] et le [[HMAC signature]] ne sont plus nécessaires avec OAuth.

Le [[trading bot]] qui utilise OAuth peut demander consentement à l'utilisateur pour acceder à son compte. Le [[backtesting]] et [[forward testing]] ne nécessitent généralement pas OAuth.

## Sources

[^1]: RFC 6749, "OAuth 2.0 Authorization Framework", https://tools.ietf.org/html/rfc6749 (consulted 2026)
[^2]: Coinbase, "OAuth 2.0", https://docs.cloud.coinbase.com (consulted 2026)
