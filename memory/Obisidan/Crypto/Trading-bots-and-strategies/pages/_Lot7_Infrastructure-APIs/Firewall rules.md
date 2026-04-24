---
titre: "Firewall rules"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/network, #concept/access-control]
créé: 2026-04-20
liens_forts: ["[[IP whitelisting]]", "[[Serveur infrastructure]]", "[[Network topology]]"]
liens_opposition: []
---

# Firewall rules

> [!info] Résumé
> Les règles de firewall contrôlent quel trafic réseau est autorisé à entrer ou sortir du serveur du bot. Une configuration restrictive minimise la surface d'attaque et previent les accès non autorisés.

## Définition

Un firewall est un système qui filtre le trafic réseau selon des règles définies. Les règles spécifient quelles IPs, ports, et protocols sont autorisés ou bloqués.

Pour un serveur de trading bot, les règles typiques :
- Autoriser SSH (port 22) uniquement depuis une IP admin
- Autoriser HTTPS (port 443) pour les APIs
- Bloquer tout le reste en entrée
- Logger les connexions rejetées

## Contexte et origine

Les firewalls ont émergé dans les années 1980 avec les premiers réseaux d'entreprise. Les "border routers" étaient les premiers firewalls.

Netfilter/iptables sous Linux est le standard depuis 2000. Les cloud providers (AWS Security Groups, GCP Firewall Rules) offrent des firewalls virtualisés.

En trading, les servers des hedge funds ont toujours eu des firewalls stricts. Pour le crypto retail, les VPS ont généralement un firewall basique configurable.

## Mécanismes et caractéristiques

Outils firewall courants :

**Linux : iptables/nftables**
```bash
# Autoriser SSH uniquement depuis 203.0.113.0/24
iptables -A INPUT -p tcp --dport 22 -s 203.0.113.0/24 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP

# Autoriser HTTPS pour les APIs
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

**AWS Security Groups**
- Inbound : autoriser 443/80 depuis 0.0.0.0/0
- Outbound : tout autorisé
- Apply au niveau de l'instance

**Cloud VPS (DigitalOcean, Vultr)**
- Firewall géré via le dashboard
- Règles prédéfinies common

Règles de base pour un serveur de trading :
1. SSH restreint (port non-standard + IP whitelist)
2. HTTPS uniquement (APIs utilisent TLS)
3. ICMP (ping) bloqué (évite la discovery)
4. Logs pour toutes les connexions rejetées

## Nuances, critiques, limites

Trop de règles peuvent créer de la confusion et des erreurs. Garder les règles simples et documentées.

Les false positives peuvent bloquer des services légitimes. Tester les règles avant de les appliquer en production.

Les règles outbound sont souvent négligées. Un attaquant qui a accès au serveur peut quand même exfiltrer des données ou se connecter à des C2 servers.

La gestion des règles doit être automatisable. Ne pas dépendre de l'accès manuel au serveur pour modifier les règles en cas d'urgence.

## Liens et implications

Les [[firewall rules]] implémentent l'[[IP whitelisting]] au niveau du serveur. Elles font partie du [[network topology]] et de la [[serveur infrastructure]].

Le [[cloud infrastructure]] comme AWS offre des Security Groups qui sont essencialement des firewall rules. Le [[Docker containers]] peut avoir ses propres règles de firewall.

Le [[monitoring and alerting]] doit alerter sur les connexions rejectées par le firewall. Le [[log management]] stocke les logs de firewall.

## Sources

[^1]: Linux Foundation, "Netfilter/iptables", https://www.netfilter.org (consulted 2026)
[^2]: AWS, "Security Groups", https://docs.aws.amazon.com (consulted 2026)
