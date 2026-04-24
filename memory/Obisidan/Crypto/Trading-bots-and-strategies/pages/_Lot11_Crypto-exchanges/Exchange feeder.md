---
titre: "Exchange feeder"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/feeder, #concept/api, #concept/trading]
créé: 2026-04-21
liens_forts: ["[[Exchange API]]", "[[Exchange rate]]", "[[Exchange volume]]", "[[WebSocket]]", "[[Trading bot]]", "[[Data feed]]", "[[Market data]]"]
---

# Exchange feeder

> [!info] Résumé
> Un exchange feeder est un composant de trading bot qui récupère et normalise les données de marché depuis les APIs des exchanges. Il constitue la couche d'abstraction entre les données brutes des plateformes et les stratégies de trading, transformant les formats heterogenes en données uniformes pour l'analyse et la décision.

## Définition et rôle

L'exchange feeder est le composant responsible de la récupération des données de marché depuis les exchanges. Il collecte les informations de prix, de volume, de carnet d'ordres, et d'autres données market en temps réel ou en historical. Le feeder normalise ces données dans un format standardisé pour les utiliser dans les stratégies.

Le rôle du feeder est crucial car les données de marché sont la foundation de toutes les décisions de trading. Un feeder mal conçu peut introduire des latences, des erreurs, ou des données incomplètes qui affectent negatively les performances de la stratégie.

Dans l'architecture d'un [[Trading bot]], le feeder est généralement le premier composant à recevoir les données du marché. Il les transmet ensuite à l'engine de stratégie pour l'analyse et la décision, puis à l'order executor pour l'exécution.

## Fonctionnalités principales

### Collecte de données temps réel

Le feeder maintient des connexions aux APIs des exchanges pour récupérer les données en temps réel. Les [[WebSocket]] connections permettent le streaming de données sans polling, reduce the latence et la charge sur les APIs. Le feeder gère la reconnexion automatique en cas de déconnexion.

Les données collectées incluent les trades execution, les mises à jour du carnet d'ordres, les trades candles (chandeliers), et les ticker prices. La gestion dufan-out permet de distribute ces données à plusieurs composants du bot simultanément.

### Collection de données historiques

Le feeder peut également récupérer des données historiques pour le [[Backtesting]] ou l'analyse. Les APIs des exchanges proposent généralement des endpoints pour récupérer les candles passés, les trades historiques, et les snapshots du carnet d'ordres.

La qualité des données historiques varie selon les exchanges et les périodes. Certains exchanges ont des gaps dans leurs données ou des périodes de maintenance où les données ne sont pas disponibles.

### Normalisation et formatage

La normalisation transforme les formats heterogenes de chaque exchange en un format standardisé. Cette étape est critique pour les stratégies qui utilisent plusieurs exchanges simultanément.

Le format standardisé inclut généralement :
- Timestamp en UTC milliseconds
- Prix en décimal standardisé
- Volume en décimal standardisé
- Symbol dans un format normalisé

## Considérations techniques

### Latence et performance

La latence du feeder affecte directly la qualité des décisions de trading. Pour les stratégies de [[Haute fréquence]], une latence de quelques millisecondes peut faire la différence entre profit et perte.

L'optimisation include l'utilisation de WebSockets plutôt que REST polling, la co-localisation des serveurs près des infrastructures des exchanges, et l'implémentation de caching pour reduce les appels API.

### Fiabilité et robustesse

Le feeder doit gérer gracieusement les erreurs de connexion, les déconnexions, et les données manquantes. La reconnexion automatique, le retry logic, et le timeout handling sont essentiels pour maintain la continuité du service.

Les [[Circuit breakers]] dans le feeder peuvent prevenir les cascading failures si un exchange devient unresponsive. Le fallback vers des sources de données alternatives peut être implémenté pour certain types de données.

### Gestion des limites de taux

Les [[API rate limiting]] des exchanges require une gestion careful pour éviter d'être bloqué. Le feeder doit implémenter du rate limiting interne, du request batching, et de la priorisation des endpoints critiques.

La surveillance de l'utilisation des limites de taux permet d'anticiper les blocages et d'ajuster la stratégie de collecte en conséquence. Certains endpoints critiques peuvent être protégés contre les effets de la limitation.

## Intégration avec l'architecture du bot

Le feeder s'intègre avec les autres composants du [[Trading bot architecture]]. Il reçoit les paramètres de configuration de la stratégie, transmet les données à l'engine de décision, et notifie l'ordre executor des opportunités détectées.

L'independence du feeder permet de changer les sources de données sans affecter les autres composants. Cette modularité facilite l'ajout de nouveaux exchanges ou la mise à jour des APIs.

## Défis et limitations

Les défis principaux incluent la diversité des formats API entre exchanges, les changements d'API non annoncés, et les problèmes de qualité de données. La maintenance des feeders pour múltiples exchanges peut être coûts importante en temps.

Les données de marché peuvent être affectées par des anomalies comme des pics de volatility, des Problemes de connectivity, ou des manipulations de marché. Le feeder devrait include des mécanismes de détection d'anomalies.

## Liens et implications

Le exchange feeder dépend de l'[[Exchange API]] pour accéder aux données. Il génère les [[Market data]] qui alimentent les stratégies. La [[Latence]] du feeder affecte directement la [[Best execution|qualité d'exécution]].

Les données collectées par le feeder sont utilisées pour le [[Market timing]] et l'analyse technique. Le feeder doit être synchronized avec une [[Horloge de volume|horloge de volume]] pour corréler correctement les données.

## Sources

[^1]: CCXT, "Crypto Exchange Web API Interface", https://docs.ccxt.org (consulted 2026)
[^2]: Binance, "WebSocket API Documentation", https://developers.binance.com (consulted 2026)