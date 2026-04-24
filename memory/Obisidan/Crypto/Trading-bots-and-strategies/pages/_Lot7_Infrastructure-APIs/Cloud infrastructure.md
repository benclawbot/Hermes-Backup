---
titre: "Cloud infrastructure"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/infrastructure, #concept/cloud, #concept/hosting]
créé: 2026-04-20
liens_forts: ["[[Serveur infrastructure]]", ["[Kubernetes deployment]]", ["[AWS for trading bots]]"]
liens_opposition: []
---

# Cloud infrastructure

> [!info] Résumé
> L'infrastructure cloud offre des serveurs virtuels scalables et managed services pour héberger les trading bots. AWS, GCP, et Azure proposent des solutions qui éliminent la gestion du hardware physique tout en offrant une haute disponibilité.

## Définition

L'infrastructure cloud désigne les ressources de calcul, stockage, et réseau disponibles à la demande via internet. Au lieu d'acheter et gérer des serveurs physiques, on loue des ressources virtuales.

Les composantes principales :
- **Compute** : machines virtuelles (EC2, GCP Compute Engine)
- **Storage** : stockage bloc et objet (EBS, S3, GCS)
- **Network** : VPCs, load balancers, CDN
- **Managed services** : databases, message queues, monitoring

Pour les trading bots, le cloud offre scalabilité, disponibilité, et une variété de services complémentaires.

## Contexte et origine

AWS a lancé EC2 en 2006, democratizing l'accès au cloud computing. GCP et Azure ont suivi avec leurs propres offres.

Les hedge funds et trading firms ont été parmi les premiers adoptants du cloud pour le trading. La possibilité de spin up des servers en minutes au lieu de semaines était revolutionnaire.

En crypto, les exchanges majeures proposent leurs propres services cloud (Binance Cloud, Coinbase Commerce). Pour les bots personal, AWS/GCP/DigitalOcean sont les choix courants.

## Mécanismes et caractéristiques

Services cloud pertinents pour trading bots :

**Compute**
- AWS EC2 : machines virtuelles standard
- GCP Compute Engine : similaire à EC2
- Azure VMs : alternative Microsoft

**Network**
- AWS VPC : réseau privé virtuel
- GCP VPC : équivalent Google
- Azure VNet : réseau Microsoft

**Load balancing**
- AWS ALB/NLB : load balancers application et network
- GCP Cloud Load Balancing

**Monitoring**
- AWS CloudWatch : monitoring et logs
- GCP Cloud Monitoring
- Azure Monitor

**Serverless**
- AWS Lambda : fonctions sans serveur (pour des bots légère)
- GCP Cloud Functions

## Nuances, critiques, limites

La latence peut être plus élevée que le dédié. Les resources partagées peuvent causer des "noisy neighbors". Pour la latence critique, des instances dedicated (EC2 Dedicated Hosts) sont disponibles.

Le coût peut être imprévisible si mal calibré. Les ressources left-running coutent de l'argent. Auto-scaling et spot instances peuvent réduire les coûts.

La sécurité doit être explicitement configurée. Par défaut, les ressources cloud sont souvent exposées. VPC, security groups, et IAM policies doivent être configurés correctement.

Les données de marché peuvent traverser des régions. Pour minimiser la latence, déployer dans la même région que l'exchange ou le closest data center.

## Liens et implications

Le [[cloud infrastructure]] est une forme de [[serveur infrastructure]] virtualisée. Il facilite le [[Kubernetes deployment]] et le [[Docker containers]].

L'[[AWS for trading bots]] est un provider cloud specific. Le [[monitoring and alerting]] utilise les services de monitoring cloud. Le [[failover systems]] peut utiliser plusieurs availability zones.

Le [[log management]] peut utiliser le stockage objet cloud (S3, GCS). Le [[circuit breakers]] et [[retry logic]] sont particulièrement importants pour les services cloud qui peuvent avoir deslatences variables.

## Sources

[^1]: AWS, "Cloud Computing", https://aws.amazon.com/what-is-cloud-computing (consulted 2026)
[^2]: GCP, "Cloud Infrastructure", https://cloud.google.com (consulted 2026)
