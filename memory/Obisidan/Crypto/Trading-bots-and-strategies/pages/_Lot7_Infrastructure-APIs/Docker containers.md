---
titre: "Docker containers"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/containers, #concept/docker, #concept/packaging]
créé: 2026-04-20
liens_forts: ["[[Kubernetes deployment]]", ["[Serveur infrastructure]]", ["[API key management]]"]
liens_opposition: []
---

# Docker containers

> [!info] Résumé
> Les conteneurs Docker empaquettent un trading bot avec toutes ses dépendances, garantissant une exécution consistente entre development et production. Cette isolation simplifie le déploiement et la reproduction des environments.

## Définition

Docker est une platforme de conteneurisation qui empaquète une application et ses dépendances dans une image légère et portable. Un conteneur est une instance running de cette image.

Les benefits par rapport aux VMs :
- **Léger** : partage le kernel OS, pas d'OS complet
- **Rapide** : démarrage en secondes vs minutes pour VMs
- **Consistent** : même behavior entre dev et prod
- **Isolé** : les conteneurs ne voient pas les processus des autres

## Contexte et origine

Docker a été lancé en 2013 et a popularisé la conteneurisation. Avant, les technologies comme LXC existaient mais étaient complexes.

Les concepts clés :
- **Image** : template read-only pour créer des conteneurs
- **Container** : instance running d'une image
- **Dockerfile** : recette pour construire une image
- **Registry** : endroit où stocker et distribuer les images

## Mécanismes et caractéristiques

Dockerfile typical pour un trading bot Python :
```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Code
COPY . .

# Secrets (copiés au build ou au runtime)
COPY secrets/ /run/secrets/

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/health || exit 1

CMD ["python", "bot.py"]
```

Commands essentielles :
```bash
docker build -t trading-bot:latest .
docker run -d --name bot trading-bot:latest
docker logs -f bot
docker exec -it bot sh
```

Le secret management dans Docker :
- **Docker Secrets** : pour Swarm mode
- **Kubernetes Secrets** : pour K8s
- **Environment variables** : simple mais moins secure
- **Vault** : HashiCorp Vault pour production

## Nuances, critiques, limites

Les conteneurs ne sont pas des VMs. Ils partagent le kernel avec l'hôte. Un conteneur compromis peut affecter l'hôte. Ne pas faire confiance aux conteneurs pour l'isolation de sécurité.

Les données ne persistent pas dans les conteneurs par défaut. Utiliser des volumes Docker ou des mounts pour les données qui doivent survivre aux restarts.

L'image size affecte le temps de déploiement. Une image slim (alpine/slim) est plus rapide à download et start. Ne pas inclure de dependencies inutiles.

Le storage des images (Docker registry) a un coût. Pour many bots, gérer les images peut devenir complexe. Les registries managés (ECR, GCR) simplifient la gestion.

## Liens et implications

Les [[Docker containers]] sont utilisés par [[Kubernetes deployment]] comme unité de déploiement. Ils fonctionnent sur [[serveur infrastructure]] ou [[cloud infrastructure]].

Le [[log management]] peut utiliser la logging driver Docker (json-file, syslog, fluentd). Le [[monitoring and alerting]] peut utiliser les métriques Docker.

L'[[API key management]] doit être careful dans Docker : les secrets ne doivent pas être copiés dans l'image, utiliser des secrets runtime.

## Sources

[^1]: Docker, "Documentation", https://docs.docker.com (consulted 2026)
[^2]: AWS, "ECR", https://aws.amazon.com/ecr (consulted 2026)
