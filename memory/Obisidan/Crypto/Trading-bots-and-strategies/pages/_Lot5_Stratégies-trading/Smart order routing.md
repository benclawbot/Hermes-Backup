---
titre: "Smart order routing"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/smart-order-routing, #concept/order-execution, #concept/multi-exchange]
créé: 2026-04-21
liens_forts: ["[[Best execution]]", "[[Ordre à cours limité]]", "[[API d'échange]]"]
liens_opposition: []
---

# Smart order routing

> [!info] Résumé
> Le smart order routing (SOR) est un système automatisé qui route les ordres vers différents venues d'exécution (exchanges, dark pools, market makers) pour optimiser le prix d'exécution, la liquidité, et les coûts de transaction.

## Définition

Le smart order routing est une technologie qui permet d'envoyer automatiquement un ordre vers la meilleure venue d'exécution disponible parmi plusieurs options. L'objectif est de maximiser la qualité d'exécution (meilleur prix, moins de slippage) en exploitant la liquidité fragmentée.

Le SOR évalue plusieurs facteurs pour chaque venue : prix actuel, profondeur du carnet d'ordres, frais de transaction, vitesse d'exécution, et fiabilité. L'algorithme choisit la meilleure option en temps réel.

Sur les marchés crypto fragmentés avec des dizaines d'exchanges, le SOR est particulièrement pertinent. Le prix du Bitcoin peut varier légèrement entre Binance, Coinbase, Kraken et autres. Le SOR permet de capturer ces différences.

Le SOR peut aussi bien diviser un ordre entre plusieurs venues que trouver la meilleure unique venue pour un ordre donné. Les ordres volumineux sont généralement divisés entre plusieurs venues pour réduire l'impact de marché.

## Contexte et origine

Le smart order routing est né avec la fragmentation des marchés actions dans les années 2000, quand les premières plates-formes d'exécution alternative (dark pools, ECNs) ont émergé aux États-Unis.

Les grandes banques d'investissement ont développé des systèmes SOR propriétaires dans les années 2000-2010 pour optimiser l'exécution de leurs ordres institutionnels. Ces systèmes sont devenus de plus en plus sophistiqués avec l'intégration du machine learning.

En crypto, les SOR sont utilisés par les teneurs de marché institutionnels et les grands traders qui exécutent des ordres volumineux à travers plusieurs exchanges.

## Mécanismes et caractéristiques

Le SOR maintient une vue consolidée du carnet d'ordres sur plusieurs venues en temps réel. Cette vue consolidée permet de comparer les prix et de trouver la meilleure option pour un ordre donné.

Les règles de routing peuvent être configurées selon les priorités du trader : minimiser le slippage, minimiser les frais, maximiser la vitesse, ou équilibrer les trois objectifs.

Les ordres sont souvent divisés (order splitting) pour accéder à la liquidité de plusieurs venues. Un ordre de 10 BTC peut être split en 3 BTC sur Binance, 4 BTC sur Coinbase, et 3 BTC sur Kraken.

Le SOR doit gérer les cas où une venue devient unavailable ou que les prix changent pendant le processus de routing. Les mécanismes de fallback et de retry sont essentiels.

## Nuances, critiques, limites

Le "information leakage" est un risque si le SOR est détecté par d'autres algorithmes. Les ordres qui apparaissent sur plusieurs venues peuvent révéler la présence d'un grand ordre et provoquer un mouvement de prix adverse.

La latence des connexions aux différentes venues affecte la qualité du routing. Une différence de quelques millisecondes peut faire que le prix optimum ne soit plus disponible quand l'ordre arrive.

Les modèles de SOR doivent être régulièrement mis à jour car les conditions de marché changent. Un modèle qui était optimal il y a six mois peut ne plus l'être aujourd'hui.

## Liens et implications

Le [[smart order routing]] est une composante de la [[best execution]] qui vise à obtenir le meilleur prix d'exécution possible. Les [[ordre à cours limité|ordres limités]] sont souvent routed via SOR.

L'[[API d'échange]] fournit les données de prix et de liquidité nécessaires au SOR. Le [[slippage]] est un facteur clé que le SOR cherche à minimiser.

Le [[backtesting]] du SOR est complexe car il faut simuler les conditions de marché sur plusieurs venues. Le [[Information ratio]] peut mesurer la performance du SOR.


## Points clés à retenir

- L'application de cette stratégie requiert une discipline de fer et une execution rigoureuse
- Les parameters doivent être ajustés en fonction de la volatilité du marché et de la liquidité disponible
- Le suivi régulier des performances permet d'identifier les éventuelles dérives

- L'analyse technique constitue un outil essentiel pour identifier les configurations propices
- Legestion du risque doit être adapté à la volatilité du marché concerned
- Les conditions de marché évoluent constamment et exigent une adaptation des paramètres

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Angel, "Equity Trading and the U.S. Market", 2014
[^2]: SEC, "Dark Pools and Smart Order Routing", https://www.sec.gov (consulted 2026)
