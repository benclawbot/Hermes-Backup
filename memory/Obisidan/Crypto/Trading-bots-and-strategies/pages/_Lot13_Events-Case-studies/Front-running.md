---
tags:
  - market-manipulation
  - front-running
  - latency-arbitrage
created: 2024-02-08
---

# Front-running

Le **front-running** représente l'une des formes de manipulation les plus controversées dans le trading moderne. Cette pratique consiste à profiter d'informations sur des ordres de trading imminents pour exécuter ses propres ordres en premier, capturant ainsi une valeur qui aurait autrement appartenu aux autres participants au marché.

## Mécanisme du front-running

Le front-running se produit quand un intermediate (broker, exchange, ou trader) utilise des informations sur les ordres de clients pour son propre compte. Par exemple, un broker peut voir un gros ordre d'achat coming et acheter des titres pour son propre compte avant d'exécuter l'ordre du client, profitant de la hausse qui résultera de l'exécution.

Cette pratique est particulièrement facilite par la vitesse dans les marchés modernes. Les systèmes de [[Haute fréquence]] permettent aux traders qui ont accès à des informations privilégiées de passer des ordres avant que les ordres plus importants soient exécutés. Les differences de latence de quelques millisecondes peuvent représenter des profits significatifs.

## Front-running et latence

Les stratégies de front-running sont souvent liées à l'arbitrage de latence. Les traders qui peuvent détecter des patterns dans le flux d'ordres peuvent anticiper les mouvements de prix. Les [[Market makers]] qui ont accès à des données de flux d'ordres plus rapides peuvent pratiquer le front-running.

Les techniques comme le "quote stuffing" sont parfois utilisées pour ralentir les systèmes concurrents et créer un avantage de latence. Les systèmes de co-location près des serveurs d'échanges offrent des avantages similaires. Les améliorations de latence doivent être évaluées dans le contexte de ces préoccupations.

## Application aux marchés crypto

Sur les marchés crypto, le front-running se manifeste principalement de deux manières. Premièrement, les bots de trading peuvent détecter des transactions mempool etles "[[Sandwich attacks]]" en plaçant leurs propres ordres avant et après la transaction ciblée. Deuxièmement, lesvalidateurs ou miners peuvent réorganiser les transactions pour leur propre profit.

Les [[Exchanges centralisés]] ont leurs propres défis avec le front-running. Les employés ou les systèmes automatisés peuvent avoir accès à des informations sur les ordres de clients qui ne sont pas encore exécutés. Les mesures de prevention sont essentielles pour maintenir la confiance des utilisateurs.

## Conséquences pour les marchés

Le front-running érode la confiance dans l'équité des marchés. Les petits traders sont particulièrement désavantagés face aux acteurs qui peuvent se permettre des systèmes plus rapides. Les coûts de transaction augmentent quand lesMarket makers intègrent le risque de front-running dans leurs prix.

Les spreads plus larges protégent les market makers contre le risque de front-running mais désavantagent les traders. Les [[Order book dynamics]] peuvent montrer des patterns anormaux quand le front-running est prevalent. Les participants légitimes peuvent être freinés dans leurs activités de trading.

## Cadre réglementaire

Les régulateurs ont establecido des règles pour prévenir le front-running. Les lois sur les securities interdisent l'utilisation d'informations sur les ordres de clients pour le propre compte. Les systèmes de surveillance des marchés détectent les patterns de front-running.

Les [[Exchanges centralisés]] doivent avoir des politiques строгes pour prévenir le front-running par leurs employés ou leurs systèmes. Les audits réguliers des systèmes de trading sont essentiels. Les sanctions pour front-running peuvent inclure des amendes et des interdictions de trading.

## Protection pour les traders

Les traders peuvent prendre des mesures pour se protéger contre le front-running. Les [[Ordre iceberg]] orders masquent la taille réelle des ordres et reduisent le risque d'être ciblé. Les [[Ordre post-only]] orders garantissent que les ordres ne sont pas exécutés comme takers et peuvent réduire l'exposition.

Les选择在 des plateformes avec des mesures anti-front-running robustes est importante. Les [[API key management]] doit être sécurisée pour éviter que des informations d'ordres ne soient compromises. Les [[Bot trading]] stratégies doivent utiliser des mesures de protection contre l'exploitation de latence.

## Références et liens associés

- [[Haute fréquence]]
- [[Market makers]]
- [[Sandwich attacks]]
- [[Exchanges centralisés]]
- [[Ordre iceberg]]
- [[Ordre post-only]]
- [[API key management]]