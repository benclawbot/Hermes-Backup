---
uid: 1718000002
created: 2024-06-10
tags:
  - exchange
  - centralized
  - platform
type: page
---

# Exchanges centralisés

Les exchanges centralisés, souvent désignés par l'acronyme CEX pour Centralized Exchange, représentent la majorité du volume de trading crypto actuel. Ces plateformes fonctionnent comme des intermédiaires de confiance, détenant les fonds et gérant le processus de correspondance des ordres. Comprendre leur fonctionnement est essentiel pour tout développeur de [[Trading bot]] ou stratège de [[Trading algorithmique]].

## Architecture technique

L'architecture d'un exchange centralisé repose sur un [[Central limit order book (CLOB)]] centralisé qui permet l'appariement automatique des ordres. Cette centralisation offre des avantages significatifs en termes de [[Liquidité]] et de [[Profondeur du carnet d'ordres]], mais introduit également des considérations de [[Risque d'inventaire]] pour la plateforme.

Les serveurs sont généralement placés dans des centres de données co-localisés pour minimiser la [[Latence et exécution]]. Les stratégies de [[Haute fréquence]] bénéficient particulièrement de cette infrastructure. Les [[WebSocket connections]] permettent aux traders d'obtenir des mises à jour temps réel sur l'état du marché.

La [[Sécurité des clés]] sur les exchanges centralisés implique que les utilisateurs confient leurs clés privées à la plateforme. Cet arrangement, bien que pratique, crée un [[Platform risk]] significatif comme evidencé par les piratages historiques de Mt. Gox et d'autres plateformes.

## Mécanisme de correspondance

Le système de matching des ordres constitue le cœur de l'exchange. Les [[Ordre au marché]] et les [[Ordre à cours limité]] sont appariés selon des règles prédéfinies qui déterminent la priorité d'exécution. Les [[Ordre stop-limite]] et les [[Ordre stop-loss]] permettent de gérer les positions avec des déclencheurs automatisés.

Les ordres sont placés dans une file d'attente avec une [[Priorité de file d'attente]] basée sur le prix et le temps de soumission. Les [[Ordres annulés]] fréquents peuvent affecter la qualité du carnet d'ordres et influencer la [[Liquidité]] disponible.

## Frais et structure tarifaire

La structure des frais sur les exchanges centralisés suit généralement un modèle maker-taker. Les makers qui ajoutent de la liquidité au carnet d'ordres bénéficient de frais réduits, tandis que les takers qui enlèvent de la liquidité paient des frais plus élevés. Voir [[Frais maker vs taker]] pour une analyse approfondie.

Certaines plateformes proposent des programmes de réduction basés sur le volume de trading ou l'utilisation de tokens natifs. Les frais peuvent également varier selon le type de paire de trading, avec des frais plus bas pour les paires principales.

## API et intégration

L'[[API d'échange]] des plateformes centralisées offre des fonctionnalités avancées pour le trading algorithmique. Les endpoints REST et WebSocket permettent d'accéder aux [[Données de niveau 2]], de passer des ordres, et de gérer les positions de manière programmatique.

Les considérations importantes pour l'intégration incluent l'[[API rate limiting]], l'[[Endpoint authentication]], et la gestion des [[Request signatures]]. Le [[Request batching]] peut optimiser l'utilisation des limites de taux.

## Risques et vulnérabilités

Les exchanges centralisés sont vulnérables à plusieurs types de risques. Le risque opérationnel inclut les pannes de serveur, les problèmes de connectivité, et les défaillances du système de matching. Les [[Circuit breakers]] sont souvent implémentés pour limiter les [[Flash crash]].

Le risque réglementaire représente une préoccupation croissante avec l'évolution des cadres légaux dans différentes juridictions. Les utilisateurs doivent considérer la [[Fiabilité des plateformes]] et l'histoire de chaque service.

## Liquidité et profondeur de marché

La [[Liquidité]] des exchanges centralisés est généralement supérieure à celle des DEX pour les paires de trading populaires. Cette liquidité se traduit par des [[Écart bid-ask]] plus étroits et un [[Slippage]] plus faible pour les ordres de taille moyenne.

Les [[Marché dark pool]] offrent des possibilités de trading anonymes pour les ordres volumineux, permettant de réduire l'impact sur le marché. Le [[Paiement pour le flux d'ordres]] peut affecter la qualité d'exécution sur certaines plateformes.

## Services complémentaires

Les exchanges centralisés offrent souvent des services complémentaires comme le [[Staking rewards]], le [[Yield farming]] via des produits structurés, et le [[Copy trading platforms]]. Ces services peuvent générer des revenus additionnels mais comportent des risques supplémentaires.

Les [[Cross-exchange arbitrage]] opportunities sont plus limitées sur les plateformes centralisées en raison de leur liquidité uniformisée, mais elles existent toujours entre différentes zones géographiques ou produits.

## Impact sur le marché

Les exchanges centralisés influencent significativement la [[Découverte du prix]] dans l'écosystème crypto. Leurs carnets d'ordres reflètent les consensus de prix en temps réel, et les décisions de [[Market timing]] basées sur ces informations peuvent être profitables.

L'[[Impact de marché]] pour les gros ordres est déterminé par la [[Profondeur du marché]] et la liquidité disponible. Les grands acteurs utilisent des stratégies comme le [[VWAP (Volume Weighted Average Price)]] ou le [[TWAP (Time-Weighted Average Price)]] pour minimiser cet impact.

## Considérations pour le développement de bots

Lors du développement d'un [[Trading bot]], la sélection de l'exchange centralisé approprié implique d'évaluer la [[Disponibilité des plateformes]], la [[Scalabilité des plateformes]], et la qualité de l'[[API d'échange]].

Les considérations de [[Latency optimization]] sont critiques pour les stratégies haute fréquence. La co-localisation des serveurs peut être nécessaire pour atteindre les performances visées.