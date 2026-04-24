---
titre: "Monitoring and alerting"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/operations, #concept/monitoring, #concept/reliability]
créé: 2026-04-20
liens_forts: ["[[Log management]]", ["[Failover systems]]", ["[Serveur infrastructure]]"]
liens_opposition: []
---

# Monitoring and alerting

> [!info] Résumé
> Le monitoring et l'alerting assurent la visibilité sur la santé des trading bots et déclenchent des notifications quand quelque chose ne fonctionne pas correctement. Sans monitoring, les problèmes peuvent causer des pertes avant d'être détectés.

## Définition

Le monitoring collecte des métriques sur le comportement du bot et de l'infrastructure. L'alerting déclenche des notifications quand ces métriques dépassent des seuils définis.

Types de monitoring :
- **Infrastructure** : CPU, RAM, disk, network
- **Application** : latence, erreurs, throughput
- **Business** : PnL, nombre de trades, drawdown

Les métriques sont généralement envoyées à un système centralisé (Prometheus, CloudWatch, Datadog) où elles peuvent être query et visualisées.

## Contexte et origine

Le monitoring a evolucionné depuis les premiers mainframe avec des operators humains qui watchaient des lumières et gauges. Les premiers outils automatisés sont arrivés dans les années 1980-1990.

Les pratiques DevOps et SRE ont formalisé le monitoring avec des frameworks comme the Four Golden Signals : latency, traffic, errors, saturation.

En trading, le monitoring est critique. Un bot qui perd de l'argent ou qui ne trades pas pendant des heures doit déclencher une alerte immediate.

## Mécanismes et caractéristiques

Stack de monitoring typique :
- **Prometheus** : collection et stockage de métriques
- **Grafana** : visualisation et dashboards
- **Alertmanager** : routing des alertes
- **PagerDuty/OpsGenie** : gestion des on-call

Métriques importantes pour un trading bot :
- **PnL** : profit and loss en temps réel
- **Orders placed/cancelled** : activité de trading
- **Latency** : temps de réponse de l'API
- **Error rate** : pourcentage d'erreurs
- **Drawdown** : perte cumulée depuis le pic

Alertes critiques :
- Drawdown > 10% en une journée
- Error rate > 5%
- Latence API > 500ms
- Bot qui ne trades pas pendant X heures (anomalie)
- Perte de connexion WebSocket

Configuration Alertmanager :
```yaml
groups:
- name: trading-bot
  rules:
  - alert: HighDrawdown
    expr: drawdown_percent > 10
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "Drawdown critique {{ $value }}%"
```

## Nuances, critiques, limites

Les alertes excessive causent la fatigue. Trop d'alertes rendent difficile l'identification des vrais problèmes. Prioriser les alertes et éviter les false positives.

Le monitoring lui-même a un coût. Prometheus peut avoir des problèmes de performance à très grande échelle. Les solutions cloud-managed peuvent être plus économiques.

Le lag entre la survenue d'un problème et l'alerte compte. Un problème qui dure 10ms ne sera pas détecté si le monitoring poll toutes les 15 secondes. Utiliser push-based metrics quand la latence compte.

L'on-call rotating est important. Les alertes à 3h du matin doivent être répondues. Prévoir plusieurs personnes et une rotation equitable.

## Liens et implications

Le [[monitoring and alerting]] utilise les données du [[log management]] et des métriques d'infrastructure. Il déclenche le [[failover systems]] en cas de panne detectée.

Le [[serveur infrastructure]] et le [[cloud infrastructure]] génèrent des métriques système. Le [[Kubernetes deployment]] a des métriques Kubernetes natives.

La [[gestion du risque]] inclut le monitoring du drawdown et des pertes. Le [[circuit breakers]] peut déclencher des alertes quand il s'ouvre.

## Sources

[^1]: Prometheus, "Monitoring", https://prometheus.io/docs (consulted 2026)
[^2]: Google SRE, "Monitoring", https://sre.google/sre-book (consulted 2026)
