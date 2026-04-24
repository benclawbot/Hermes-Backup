---
titre: "Server infrastructure"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/infrastructure, #concept/server, #concept/deploiement]
créé: 2026-04-21
liens_forts: ["[[Latence et exécution]]", "[[Cloud infrastructure]]", "[[Docker containers]]"]
liens_opposition: []
---

# Server infrastructure

> [!info] Résumé
> L'infrastructure serveur est le matérielle et logicielle sur lequel le bot fonctionne. Pour les stratégies haute fréquence, le choix entre cloud partagé, serveur dédié, ou co-location peut faire une différence de millisecondes qui change tout.

## Définition

L'infrastructure serveur désigne l'ensemble des composants matériels (CPU, RAM, disque, réseau) et logiciels (OS, langages, bibliothèques) qui exécutent le bot de trading.

Le spectre va du laptop personnel au serveur bare-metal co-localisé dans le même数据中心 que les serveurs de l'échange. Entre les deux : le cloud partagé (AWS EC2), le serveur dédié (AWS dedicated instance), et le serveur bare-metal。

Chaque option a des compromis différents entre coût, performance, et maintenance. Le cloud est flexible et économique pour débuter. La co-location est coûteuse mais offre la latence la plus basse.

## Contexte et origine

Le trading haute fréquence (HFT) a commencé dans les années 1990-2000 avec des serveurs partagés entre traders et échanges. La co-location est devenue populaire quand les échanges ont proposé des espaces dans leurs数据中心.

Les premiers bots crypto retail tournaient sur des PCs à la maison. L'amélioration de la connectivité Internet et la popularisation du cloud ont permis des setups plus professionnels.

La démocratisation du cloud (AWS 2006, DigitalOcean 2012) a permis aux développeurs de déployer des bots sans investir dans du matérielle. Le trading algorithmique est devenu accessible à tous.

## Mécanismes et caractéristiques

Les spécifications recommended pour un bot de trading :
- CPU : 2-4 cores minimum pour le calcul parallèle
- RAM : 4-8 GB pour maintenir les données de marché en mémoire
- Disque : SSDNVMe pour les logs et la persistence
- Réseau : connexion fibre 1 Gbps minimum, latence < 5ms vers l'échange

Le système d'exploitation est généralement Linux (Ubuntu, Debian, CentOS). Les bibliothèques de trading sont en Python, Node.js, ou C++. Le choix du langage affecte la performance : C++ et Rust sont plus rapides que Python pour le HFT.

Le déploiement utilise des conteneurs ([[Docker containers]]) pour la répétabilité. [[Kubernetes deployment]] orchestre les conteneurs en production. [[Monitoring and alerting]] garde le système sous contrôle.

## Nuances, critiques, limites

Le cloud partagé suffers du "noisy neighbor" problem. Les autres VMs sur le même hôte physique peuvent créer de la latence variable. Pour le HFT, cette imprévisible est inacceptable.

Le coût de la co-location est significatif : Location dans le数据中心 (￥1000-3000/mois), serveur bare-metal (￥5000-20000), et conectivité. Ce n'est pas rentable pour un bot retail simple.

La maintenance du serveur est un travail. Les mises à jour de sécurité, les redémarrages, et le dépannage nécessitent du temps ou des compétences. Les services gérerats (AWS, DigitalOcean) réduisent cette charge.

La latence est le facteur critique. La différence entre 5ms et 50ms de latence peut être la différence entre profit et perte pour les stratégies haute fréquence. La [[latence optimisation]] est un domaine entier.

## Liens et implications

L'[[server infrastructure]] est le socle du [[trading bot]]. Sa performance affecte directement la [[latence et exécution]]. Le [[failover systems]] garantit la disponibilité en cas de panne.

Le [[cloud infrastructure]] et le [[Docker containers]] forment l'architecture moderne de déploiement. Le [[Kubernetes deployment]] orchestrent ces composants.

La [[co-location]] est l'option de plus basse latence, utilisée par les HFTs professionnels. La [[network topology]] détermine les chemins de latence.

## Sources

[^1]: AWS, "EC2 Instance Types", https://aws.amazon.com/ec2/instance-types (consulted 2026)
[^2]: Azure, "Virtual Machines", https://azure.microsoft.com (consulted 2026)
