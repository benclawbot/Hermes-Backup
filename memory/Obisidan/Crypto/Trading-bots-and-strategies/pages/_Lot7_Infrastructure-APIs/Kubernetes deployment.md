---
titre: "Kubernetes deployment"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/orchestration, #concept/kubernetes, #concept/deployment]
créé: 2026-04-20
liens_forts: ["[[Docker containers]]", ["[Cloud infrastructure]]", ["[Serveur infrastructure]]"]
liens_opposition: []
---

# Kubernetes deployment

> [!info] Résumé
> Kubernetes orchestre les conteneurs Docker hébergeant les trading bots, offrant scaling automatique, self-healing, et rolling updates. Pour les architectures complexes avec plusieurs composants, Kubernetes simplifie la gestion.

## Définition

Kubernetes (K8s) est un système d'orchestration de conteneurs open-source. Il automatise le déploiement, le scaling, et la gestion des applications conteneurisées.

Les concepts clés :
- **Pod** : plus petite unité, contient un ou plusieurs conteneurs
- **Deployment** : manages les pods et leur desired state
- **Service** : expose les pods comme un service réseau
- **Ingress** : gère l'accès HTTP(S) depuis l'externe
- **ConfigMap/Secret** : configuration et secrets externalisés

## Contexte et origine

Kubernetes a été développé par Google et rendu open-source en 2015. Il est devenu le standard de facto pour l'orchestration de conteneurs.

Les architectures microservices des grandes tech companies (Netflix, Uber) ont popularisé Kubernetes. Pour les trading firms, Kubernetes permet de gérer des stratégies multiples simultanément.

En crypto, les exchanges et trading firms institutionnels utilisent Kubernetes pour déployer et gérer leurs bots. Les plateformes de trading comme 3Commas utilisent également Kubernetes en backend.

## Mécanismes et caractéristiques

Deployment typique pour un trading bot :
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: trading-bot
spec:
  replicas: 2
  selector:
    matchLabels:
      app: trading-bot
  template:
    metadata:
      labels:
        app: trading-bot
    spec:
      containers:
      - name: bot
        image: trading-bot:latest
        env:
        - name: API_KEY
          valueFrom:
            secretKeyRef:
              name: api-keys
              key: binance_key
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
```

Features pertinents pour le trading :
- **Horizontal Pod Autoscaler** : scale automatiquement selon la charge
- **Pod Disruption Budget** : guarantee un minimum de pods disponibles pendant les updates
- **Priority Classes** : prioriser certains bots en cas de ressources limitées
- **Node affinity** : placer les pods sur des nodes spécifiques (ex: bas latence)

## Nuances, critiques, limites

Kubernetes ajoute de la complexité. Pour un bot unique, un simple docker-compose ou systemd service peut suffire. Kubernetes ne devient nécessaire que pour des architectures multi-composants.

Le cost en ressources est significatif. Un cluster Kubernetes minimum nécessite plusieurs nodes et consomme des ressources pour le control plane. Pour le retail, un simple VPS peut être plus économique.

La latence introduite par Kubernetes peut être unacceptable pour le HFT. Les layers d'abstraction (cni, kube-proxy) introduisent de la latence. Pour le HFT, bare metal ou VMs directes peuvent être préférables.

L'absence de familiarité peut causer des erreurs. Un deployment mal configuré peut avoir des pods qui restart en boucle ou des resources limits incorrects.

## Liens et implications

Le [[Kubernetes deployment]] utilise [[Docker containers]] comme unité de packaging. Il fonctionne sur [[cloud infrastructure]] (AWS EKS, GCP GKE) ou [[serveur infrastructure]] bare metal.

Le [[failover systems]] est facilité par Kubernetes avec les replicas et health checks. Le [[monitoring and alerting]] utilise les integrations Kubernetes de Prometheus/Grafana.

Le [[circuit breakers]] et [[retry logic]] continuent de fonctionner dans un environnement Kubernetes. Le [[log management]] peut utiliser EFK stack (Elasticsearch, Fluentd, Kibana).

## Sources

[^1]: Kubernetes, "Documentation", https://kubernetes.io/docs (consulted 2026)
[^2]: AWS, "EKS", https://aws.amazon.com/eks (consulted 2026)
