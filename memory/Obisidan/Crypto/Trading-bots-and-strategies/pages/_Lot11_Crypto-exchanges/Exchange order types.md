---
titre: "Exchange order types"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/order-types, #concept/exchange, #concept/trading]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Ordre stop-loss]]", "[[Ordre stop-limite]]", "[[Ordre take-profit]]", "[[Exchange API]]", "[[Exchange execution]]"]
---

# Exchange order types

> [!info] Résumé
> Les types d'ordres sur les exchanges crypto définissent comment les orders sont passés, exécutés, et gérés. Ils incluent les ordres market, limit, stop-loss, et des variantes plus élaborées comme les ordres iceberg et les ordres post-only. La maîtrise de ces types d'ordres est essentielle pour implémenter des stratégies de trading algorithmique efficaces.

## Ordres de base

### Ordre au marché

L'[[Ordre au marché]] est exécuté immédiatement au prix actuel du marché. L'ordre est exécuté au meilleur prix disponible, qui est généralement le bid pour une vente ou l'ask pour un achat.

L'exécution est garantie mais le prix ne l'est pas. Le slippage peut faire en sorte que le prix d'exécution diffère significativement du prix au moment de la passation de l'ordre. Sur les marchés volatils ou peu liquides, ce slippage peut être substantial.

Les ordres market sont utilisés quand la vitesse d'exécution est plus importante que le prix exact. Pour les [[Trading bot]], les ordres market sont généralement évités car le slippage peut essere imprévisible.

### Ordre à cours limité

L'[[Ordre à cours limité]] spécifie un prix maximum (pour un achat) ou minimum (pour une vente) auquel l'ordre peut être exécuté. L'ordre n'est exécuté que si le marché atteint ce prix ou un prix plus favorable.

L'avantage de l'ordre limit est le contrôle du prix d'exécution. L'inconvénient est qu'il n'y a aucune garantie d'exécution si le marché n'atteint pas le prix spécifié.

Pour les market makers, les ordres limit sont le principal outil. Ils placent des orders des deux côtés du carnet pour capture le spread.

## Ordres conditionnels

### Ordre stop-loss

L'[[Ordre stop-loss]] est conçu pour limiter les pertes sur une position. Quand le prix atteint le niveau de stop, un ordre market est déclenché pour fermer la position au prix du marché.

Le stop-loss est essentiel pour le risk management. Il définit une seuil de perte maximum au-delà duquel la position sera fermée automatiquement, sans intervention manuelle.

Pour les positions longues, le stop-loss est placé en dessous du prix d'entrée. Pour les positions courtes, il est placé au-dessus.

### Ordre stop-limite

L'[[Ordre stop-limite]] combine les caractéristiques du stop et du limit. Quand le prix de trigger est atteint, un ordre limit est placé au prix limit spécifié.

L'avantage est le contrôle du prix d'exécution après le trigger. L'inconvénient est que l'ordre peut ne pas être exécuté si le marché ne atteint pas le prix limit après le trigger.

### Ordre take-profit

L'[[Ordre take-profit]]锁定 un profit en fermant la position quand un prix cible est atteint. Il fonctionne comme un ordre limit mais dans la direction du profit.

L'utilisation combine souvent le take-profit avec un stop-loss pour définir à la fois le profit cible et la perte maximum acceptable.

## Ordres avancées

### Ordre iceberg

L'[[Ordre iceberg]] permet de placer un ordre de grande taille tout en ne révélant qu'une petite partie au marché. La partie visible est exécutée en premier, puis une nouvelle partie est révélée automatiquement.

Cette fonctionnalité est критичен pour les gros ordres qui pourraient autrement déplacer le marché significativement. En révélant seulement une partie, l'impact sur le prix est réduit.

### Ordre post-only

L'[[Ordre post-only]] garantit que l'ordre ne sera jamais exécuté comme taker. Si l'ordre serait exécuté immédiatement au prix du marché, il est cancellation au lieu d'être exécuté.

Cette fonctionnalité est utilisée par les market makers pour s'assurer qu'ils ne paient que les frais maker (plus bas). Si leur ordre serait exécuté comme taker, ils preferent ne pas l'exécuter plutôt que de payer les frais plus élevés.

### Ordre reduce-only

L'[[Ordre reduce-only]] garantit que l'ordre ne peut que réduire une position, pas l'augmenter. Cette fonctionnalité est utilisée pour fermer des positions ou limiter l'exposition sans accidentally increase la taille.

### Ordres OCO

L'[[OCO (One-Cancels-Other)]] permet de placer deux ordres liés où l'exécution de l'un annule automatiquement l'autre. Typiquement utilisé pour combiner un take-profit et un stop-loss sur une même position.

## Considérations pour le trading algorithmique

Pour les [[Trading bot]], chaque type d'ordre a des cas d'utilisation spécifiques. Les stratégies doivent utiliser les types d'ordres appropriés pour their goals.

La gestion des erreurs est importante. Si un ordre n'est pas exécuté, le bot doit handle cette situation et potentially retry ou adjust la stratégie.

L'[[Exchange API]] de chaque exchange supporte différents types d'ordres. Les bots doivent être conçus pour utiliser les types disponibles sur chaque plateforme.

## Sources

[^1]: Binance, "Order Types", https://www.binance.com (consulted 2026)
[^2]: Coinbase, "Trading Guide", https://www.coinbase.com (consulted 2026)
[^3]: Kraken, "Order Types", https://www.kraken.com (consulted 2026)