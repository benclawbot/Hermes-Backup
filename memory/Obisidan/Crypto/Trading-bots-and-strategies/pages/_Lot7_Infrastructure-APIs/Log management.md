---
titre: "Log management"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/operations, #concept/logs, #concept/debugging]
créé: 2026-04-20
liens_forts: ["[[Monitoring and alerting]]", ["[Serveur infrastructure]]", ["[Cloud infrastructure]]"]
liens_opposition: []
---

# Log management

> [!info] Résumé
> Le log management centralise et structure les logs des trading bots pour faciliter le debugging et la compliance. Chaque décision de trade, chaque erreur, chaque metric doit être logged pour permettre l'analyse post-mortem.

## Définition

Le log management est le processus de collecte, stockage, et analyse des logs. Pour un trading bot, les logs incluent :
- Logs d'exécution : quand un ordre est passé, modifié, annulé
- Logs d'erreur : exceptions, timeouts, rejections
- Logs de métriques : latence, drawdown, PnL
- Logs système : CPU, mémoire, réseau

Les logs structurés (JSON) sont preferables aux logs texte libre car ils peuvent être query et analysés facilement.

## Contexte et origine

Le log management a commencé avec syslog dans les années 1980. Les premiers systèmes日志consumaient beaucoup d'espace et étaient difficiles à search.

ELK stack (Elasticsearch, Logstash, Kibana) a popularisé la centralised logging dans les années 2010. Fluentd a ajouté une alternative plus légère.

En trading, les logs sont non seulement utiles pour le debugging mais souvent nécessaires pour la compliance. Les regulators peuvent demander l'historique des trades.

## Mécanismes et caractéristiques

Structuration des logs (JSON) :
```json
{
  "timestamp": "2026-04-20T15:30:00.123Z",
  "level": "INFO",
  "message": "Order placed",
  "order_id": "123456",
  "symbol": "BTCUSDT",
  "side": "BUY",
  "quantity": 0.1,
  "price": 50000,
  "latency_ms": 45
}
```

Stack de logging typical :
- **Fluentd/Fluent Bit** : agent de collection (léger, faible impact)
- **Elasticsearch** : stockage et indexing
- **Kibana** : visualisation et queries
- **CloudWatch Logs** : alternative AWS
- **GCS (Google Cloud Storage)** : archivage pas cher

Bonnes pratiques de logging :
- **Structured logging** : JSON plutôt que texte libre
- **Correlation IDs** : pour tracer une requête à travers plusieurs services
- **Log levels** : DEBUG, INFO, WARN, ERROR
- **Sampling** : pour les logs de debug très volumineux

Ce qu'il faut logger :
- Chaque décision de trading (achat/vente, pourquoi)
- Chaque ordre (place, modify, cancel, fill)
- Chaque erreur avec le stack trace
- Les changements de paramètres
- Les conditions de marché inhabituelles

Ce qu'il ne faut PAS logger :
- Clés API ou secrets (même partiels)
- Mots de passe
- Information personnelle

## Nuances, critiques, limites

Le volume de logs peut être énorme. Un bot qui génère 10,000 logs/seconde peut générer des gigabytes par jour. Sampling ou agrégation peut être nécessaire.

Les coûts de storage peuvent s'accumuler. Stocker 1 an de logs sur Elasticsearch peut coûter des milliers d'euros/mois. Archiver les vieux logs sur S3 ou GCS (glacier) est plus économique.

La latence driting introduced par le logging. Écrire des logs synchrones peut ralentir le bot. Utiliser des buffers asynchrones ou des logging drivers qui n.blockent pas.

La sensitive data dans les logs est un risque. MASCAR les clés API, ne pas logger de PII. Des outils de PII scanning existent mais ne sont pas infaillibles.

## Liens et implications

Le [[log management]] alimente le [[monitoring and alerting]] avec des données. Il est essential pour le debugging quand le [[failover systems]] ou [[circuit breakers]] se déclenchent.

Le [[serveur infrastructure]] génère des logs système. Le [[Kubernetes deployment]] utilise EFK ou Loki pour les logs containerisées. Le [[cloud infrastructure]] offre des services de logging managé (CloudWatch, GCP Logging).

Les [[ordres annulés]] et [[rejet d'ordre]] doivent être logged pour audit. Le [[backtesting]] génère des logs qui peuvent être analysés pour améliorer la stratégie.

## Sources

[^1]: Elasticsearch, "ELK Stack", https://www.elastic.co/elk-stack (consulted 2026)
[^2]: AWS, "CloudWatch Logs", https://docs.aws.amazon.com/cloudwatch (consulted 2026)
