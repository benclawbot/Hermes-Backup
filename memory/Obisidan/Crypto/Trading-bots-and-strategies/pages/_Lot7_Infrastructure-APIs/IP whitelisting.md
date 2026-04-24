---
titre: "IP whitelisting"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/network, #concept/access-control]
créé: 2026-04-20
liens_forts: ["[[API key management]]", "[[API authentication]]", "[[Firewall rules]]"]
liens_opposition: []
---

# IP whitelisting

> [!info] Résumé
> L'IP whitelisting restreint l'accès à une clé API à des adresses IP spécifiques. Même si une clé est compromise, l'attaquant ne peut pas l'utiliser depuis une IP non autorisée.

## Définition

L'IP whitelisting est une mesure de sécurité qui limite les adresses IP autorisées à utiliser une clé API. Seules les IPs dans la liste blanche peuvent envoyer des requêtes authentifiées. Les IPs non autorisées sont rejectées.

Cette protection est particulièrement importante pour les bots car :
- Les clés API sont stockées sur des serveurs
- Les serveurs ont des IPs fixes ou connues
- L' whitelisting ajoute une couche de defense même si le secret est leaké

## Contexte et origine

L'IP whitelisting est utilisé dans les réseaux corporate depuis les années 1990. Les firewalls base sur IPs ont été les premiers outils de network security.

En trading, les systèmes des années 1980-1990 utilisaient déjà des restrictions d'accès par adresse IP pour les terminaux de trading.

Les exchanges crypto ont adopté l'IP whitelisting comme mesure de sécurité standard après les incidents de vol de clés API. Binance, Coinbase, et la plupart des exchanges majeurs le supportent.

## Mécanismes et caractéristiques

Configuration sur les exchanges :
1. Aller dans les paramètres de la clé API
2. Ajouter les IPs autorisées (format CIDR supporté)
3. Sauvegarder

Example de configuration :
```
Allowed IPs:
- 203.0.113.0/24 (network entier du data center)
- 198.51.100.100 (IP fixe du serveur)
```

Comportement quand une IP non autorisée envoie une requête :
- Response 403 Forbidden
- Message : "IP not allowed"
- Lrequest estlogged avec l'IP pour detection d'attaque

Pour les bots sur cloud ou VPS :
- AWS : Elastic IP ou VPC avec IP fixe
- GCP : Static external IP
- DigitalOcean : Reserved IP

## Nuances, critiques, limites

L'IP whitelisting peut être contourné si l'attaquant a accès au réseau de la victime (via malware, DNS poisoning). C'est une couche de sécurité, pas une solution absolute.

Les IPs dynamiques sont problématiques. La plupart des connections résidentielles ont des IPs dynamiques qui changent. Les bots sur ces connexions ne peuvent pas utiliser l'IP whitelisting de manière pratique.

Le changement d'IP du serveur nécessite une mise à jour immédiate de la whitelist. Si le serveur change d'IP et que la whitelist n'est pas mise à jour, le bot perd immediately l'accès.

IPv6 peut compliquer l' whitelisting car les IPs peuvent changer plus fréquemment. Certaines platforms supportent le CIDR notation pour les ranges IPv6.

## Liens et implications

L'[[IP whitelisting]] renforce l'[[API key management]] en limitant où les clés peuvent être utilisées. Elle fait partie de la sécurité au niveau de l'[[endpoint authentication]].

Le [[firewall rules]] peut implémenter des restrictions IP similaires au niveau réseau. Le [[serveur infrastructure]] hébergeant le bot doit avoir une IP fixe ou whitelistée.

Le [[cloud infrastructure]] comme AWS offre des IPs élastiques qui facilitent l'IP whitelisting.

## Sources

[^1]: Binance, "IP Whitelist", https://developers.binance.com (consulted 2026)
[^2]: Coinbase, "API Key Restrictions", https://docs.cloud.coinbase.com (consulted 2026)
