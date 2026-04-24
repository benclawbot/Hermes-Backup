---
titre: "Failover systems"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/reliability, #concept/infrastructure, #concept/availability]
créé: 2026-04-20
liens_forts: ["[[Serveur infrastructure]]", "[[Network topology]]", "[[Circuit breakers]]"]
liens_opposition: []
---

# Failover systems

> [!info] Résumé
> Les systèmes de failover assurent la continuité d-operation d'un bot de trading en basculant automatiquement vers un serveur ou composant de secours quand le composant principal tombe. Pour les stratégies critiques, le downtime peut coûter cher.

## Définition

Un système de failover (ou haute disponibilité) détecte automatiquement les pannes et bascule vers un serveur ou chemin de rechange sans intervention humaine. L'objectif est de réduire le MTTR (Mean Time To Recovery) de heures à secondes.

Les composants d'un système de failover :
- **Health checks** : monitoring continu de l'état des composants
- **Election mechanism** : désigne le serveur primaire et les secundaries
- **State synchronization** : maintient l'état cohérent entre primaire et secundaries
- **Automatic switching** : bascule sans intervention manuelle

Pour le trading, le failover doit être rapide pour éviter les pertes dues à des positions non gérées. Un système de failover bien conçu peut réduire le downtime à quelques secondes.

## Contexte et origine

Les systèmes de haute disponibilité ont émergé dans les data centers des années 1980-1990 avec les premières architectures client-serveur critiques. Les banks et institutions financières étaient les premiers adoptants.

Le concept de "five nines" (99.999% de disponibilité) vient des télécommunications. Pour un exchange ou un hedge fund, chaque minute de downtime peut représenter des millions de dollars de manque à gagner.

En trading crypto, les flash crashes et les pannes d'exchanges sont fréquents. Les bots qui ne ont pas de failover peuvent rester bloqués avec des positions ouvertes pendant une panne,错过了 des opportunités de sortie.

## Mécanismes et caractéristiques

Les patterns de failover courants :

**Active-passive** : un serveur primaire reçoit le trafic, un secundary standby. Quand le primaire fail, le secundary prend le relais. Simple mais gaspille des ressources.

**Active-active** : plusieurs serveurs traite le trafic simultanément. Si l'un fail, les autres absorbent sa charge. Plus complexe mais mieux utilise les ressources.

**Leader election** : les serveurs élisent un leader qui traite les opérations critiques. Si le leader fail, un autre est élu. Utilisé pour les systèmes распределённый.

Les outils de failover :
- **Keepalived** : protocole VRRP pour IP failover sous Linux
- **HAProxy** : load balancer avec health checks et failover
- **Consul/Etcd** : service discovery et leader election
- **Kubernetes** : orchestration avec self-healing capabilities

Le DNS failover : changer le DNS pour pointer vers un serveur de secours. Le TTL bas (30-60 secondes) permet un basculement rapide.

## Nuances, critiques, limites

Le failover n'est pas gratuit. Maintenir des serveurs de secours coûte le double. L'architecture active-active coûte encore plus cher car elle nécessite plus de serveurs.

Le failover peut créer des "split brain" où les deux serveurs croient être le primaire. Un mécanisme de quorum (votemajorité) est nécessaire pour éviter ça.

La latence de failover compte. Si le basculement prend 30 secondes, le bot est sans surveillance pendant 30 secondes. Certaines stratégies需要对 failover très rapide.

La synchronisation d'état est complexe. Si le serveur primaire hold des positions ouvertes, le secundary doit connaître ces positions instantanément. Un delay peut causer des doubles positions ou des positions orphelines.

Le failover network est critique. Si le lien réseau du serveur primaire drop mais le serveur lui-même est up, le failover doit détecter le network failure, pas juste le server failure.

## Liens et implications

Le [[failover systems]] dépend du [[serveur infrastructure]] et du [[network topology]] pour fonctionner. Le [[circuit breakers]] est souvent utilisé comme partie du système de failover applicatif.

Le [[cloud infrastructure]] facilite le failover avec des instances multiples dans différentes zones. Le [[Kubernetes deployment]] offre des primitives de failover intégrées.

Le [[monitoring and alerting]] déclenche les health checks qui initient le failover. Le [[log management]] enregistre les événements de failover pour post-mortem.

## Sources

[^1]: AWS, "Building for High Availability", https://aws.amazon.com/architecture (consulted 2026)
[^2]: Microsoft Azure, "Failover Clustering", https://learn.microsoft.com/azure (consulted 2026)
