---
titre: "Network topology"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/network, #concept/infrastructure, #concept/topologie]
créé: 2026-04-21
liens_forts: ["[[Server infrastructure]]", "[[Latence et exécution]]", "[[Failover systems]]"]
liens_opposition: []
---

# Network topology

> [!info] Résumé
> La topologie réseau décrit l'agencement des connexions entre le serveur du bot, les serveurs de l'échange, et les composants intermédiaires. Une topologie optimisée réduit le nombre de hops et la latence.

## Définition

La topologie réseau concerne la structure physique et logique du réseau utilisé par le bot. Cela inclut le nombre de routeurs et switches traversés, le type de connexions (fibre, cuivre), et le chemin exact que les paquets empruntent.

Une topologie simple : Bot → Routeur ISP → Exchange. Une topologie complexe : Bot → Switch → Firewall → Router → ISP → Exchange avec de multiples points de défaillance.

Chaque hop réseau ajoute de la latence et du jitter. L'objectif est de minimiser le nombre de hops et d'utiliser des liens directs haute vitesse.

## Contexte et origine

La topologie réseau est un concept de réseau classique qui s'applique au trading depuis que les systèmes sont connectés. Dans le contexte HFT, la топология est une variable d'optimisation critique.

Les firmes HFT ont des ingénieurs réseau dediés qui optimisent les chemins réseau. Ils utilisent des outils comme traceroute, MTR, et des mesures GPS pour identifier les bottlenecks.

En crypto, les échanges centralisés simplifient la topologie (un seul endpoint principal) mais la qualité de laconnectivité varie enormement selon les régions.

## Mécanismes et caractéristiques

Les composants réseau clés :

1. **Direct cross-connect** : Connexion fibre privée entre le serveur du client et les serveurs de l'échange. Latence < 0.5ms. Disponible dans les数据中心 professionnels.

2. **Internet transit** : Route par le réseau Internet public. Latence variable (10-100ms). Le chemin peut varier d'un paquet à l'autre.

3. **CDN/Proxy** : Utilisation d'un réseau de distribution de contenu. Peut ajouter de la latence pour le trading.

La redondance réseau utilise plusieurs connexions ISP. Si une connexion tombe, le trafic bascule sur l'autre. C'est une composante du [[failover systems]].

Les tools de diagnostic incluent :
- traceroute / traceroute (visualiser le chemin)
- ping et ping (mesurer la latence)
- iperf (mesurer la bande passante)
- MTR (combinaison de ping et traceroute)

## Nuances, critiques, limites

La topologie optimale dépend de la localisation. Un bot à Paris aura naturellement une latence plus basse vers l'Frankfurt qu'vers Singapore. Choisir l'échange le plus proche geometrically.

Le "last mile" (dernier kilomètre) est souvent le plus problématique. La connexion fibre du bâtiment peut être慢 mais le reste du chemin rapide. Vérifier la qualité de la connexion locale.

Les outils de mesure montrent une latence moyenne mais pas le jitter. Un réseau avec 20ms de latence moyenne mais 50ms de variance est worse qu'un réseau à 30ms stable.

Le coût de la topologie dédiée est élevé. Une fibre privée Paris-Frankfurt coûte ￥2000-5000/mois. Ce coût n'est justifié que pour des stratégies avec beaucoup de volume.

## Liens et implications

La [[network topology]] affecte directement la [[latence et exécution]]. Une топология bien conçue réduit la latence et le jitter. Elle fait partie du [[server infrastructure]] optimization.

Le [[failover systems]] utilise une топologie redondante. Si le chemin principal échoue, le trafic bascule sur le chemin secondaire. Plusieurs ISPs garantissent la disponibilité.

La [[co-location]] simplifie la топologie en eliminant les derniers miles. Le serveur est déjà dans le数据中心,connected directly to the exchange.

## Sources

[^1]: Cisco, "Network Topology", https://www.cisco.com (consulted 2026)
[^2]: AWS, "Direct Connect", https://aws.amazon.com/directconnect (consulted 2026)
