---
titre: "Prix d'exécution vs prix cot"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #microstructure, #slippage]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Slippage]]", "[[Order book dynamics]]", "[[Liquidité]]", "[[Ordre à cours limité]]"]
liens_opposition: []
---

# Prix d'exécution vs prix cot

> [!info] Résumé
> Le prix d'exécution est le prix réel auquel un ordre est traité, tandis que le prix cot (ou prix affiché) est le prix visible sur l'interface au moment de la soumission. La différence entre les deux est le slippage effectif.

## Définition

Le prix d'exécution (execution price ou fill price) est le prix auxquels une transaction est réellement exécutée sur l'exchange. Le prix cot, abréviation de "quoted price" (prix côté ou prix affiché), est le prix qui était visible sur l'interface ou le carnet d'ordres au moment où l'ordre a été soumis.

La différence entre ces deux prix constitue le [[Slippage]] réel de la transaction. Ce slippage peut être positif (l'ordre s'exécute à un meilleur prix que le prix côté) ou négatif (l'ordre s'exécute à un moins bon prix). Sur les marchés volatiles ou à faible liquidité, le slippage peut être substantiellement différent du slippage anticipé.

Cette distinction est cruciale pour le [[Backtesting]] : les backtests utilisent généralement les prix de clôture ou les prix côtés comme approximation, alors que le prix d'exécution réel peut différer significativement en période de volatilité.

## Contexte et origine

La distinction prix d'exécution/prix côté existe depuis les premiers marchés électroniques mais devient particulièrement saillante avec le trading algorithmique et le trading haute fréquence. Plus le délai entre la décision et l'exécution est court, plus le prix côté au moment de la décision et le prix d'exécution réel restent proches.

Sur les marchés crypto, oÙ la volatilité est extrême et la liquidité peut disparaître rapidement, l'écart entre prix côté et prix d'exécution est un paramètre de risque majeur. Les [[Trading bot]]s sophistiqués surveillent ce slippage en temps réel pour détecter des anomalies de marché ou des problèmes d'exécution.

## Mécanismes / caractéristiques / détails

**Causes de la différence** : plusieurs facteurs peuvent causer un écart entre prix côté et prix d'exécution. Le délai de transmission de l'ordre (network latency) permet au marché de bouger entre le moment oÙ le prix est lu et celui oÙ l'ordre arrive. L'insuffisance de liquidité au prix côté force l'ordre à remonter les niveaux du carnet ([[Order book dynamics]]). Le type d'ordre (marché vs limite) affecte aussi la relation entre prix côté et exécution.

**Ordre au marché** : pour un [[Ordre au marché]], le prix côté est typiquement le meilleur ask (pour un achat) ou le meilleur bid (pour une vente). L'exécution se fait au prix du meilleur ask/bid pour la première tranche, puis aux prix successivement plus élevés (pour un achat) pour les tranches suivantes. Le prix d'exécution moyen est ainsi supérieur au prix côté initial pour un achat.

**Ordre à cours limité** : pour un [[Ordre à cours limité]], le prix d'exécution ne peut pas être supérieur (pour un achat) au prix limite. Si le marché ne revient pas au prix limite, l'ordre n'est pas exécuté et il n'y a pas de "prix d'exécution". Si le marché remonte au prix limite, l'exécution se fait à ce prix ou mieux ("ou mieux").

**Slippage anticipé vs réel** : les traders anticipent un slippage basé sur la taille de l'ordre relative à la [[Liquidité]] disponible. Le slippage anticipé = taille de l'ordre / profondeur du carnet. Le slippage réel dépend de la séquence réelle des exécutions. Pour les gros ordres, le slippage réel est souvent supérieur à l'estimation naïve car l'ordre lui-même affecte le carnet.

**Calcul du slippage** : slippage (%) = (prix d'exécution - prix côté) / prix côté × 100. Pour un achat, un slippage positif signifie que le prix d'exécution est supérieur au prix côté (mauvais slippage). Pour une vente, un slippage positif signifie un prix d'exécution supérieur (bon slippage).

## Nuances, critiques, limites

**Impact de marché auto-infligé** : pour les ordres de grande taille, le slippage réel est aggravé par le fait que l'ordre lui-même modifie le carnet en consommant la liquidité. Plus l'ordre est gros par rapport à la profondeur du marché, plus le slippage s'auto-amplifie. Les stratégies d'exécution comme le [[TWAP (Time-Weighted Average Price)|TWAP]] et l'[[Exécution VWAP|VWAP]] cherchent à réduire cet impact.

**Latence variable** : le délai entre la lecture du prix et la réception de l'exécution par le client peut varier de quelques millisecondes (sur une bonne connexion co-localisée) à plusieurs secondes (sur une connexion internet standard). Pendant ce temps, le prix côté peut avoir significativement changé, surtout en période de forte volatilité.

**Prix moyen pondéré vs prix marginal** : pour un ordre qui s'exécute en plusieurs tranches à des prix différents, le prix d'exécution global (prix moyen pondéré par les volumes) est différent du prix de la dernière tranche. Le [[Prix d'exécution vs prix cot|prix marginal]] est le prix de la dernière unité exécutée ; le prix moyen est la moyenne de toutes les unités.

**Backtesting et slippage** : une erreur fréquente dans le [[Backtesting]] est d'utiliser le prix de clôture comme prix d'exécution. En réalité, le prix d'exécution dépend de la liquidité disponible au moment de l'exécution, de la taille de l'ordre, et du type d'ordre. Intégrer un modèle de slippage réaliste dans le backtest est essentiel pour éviter des résultats trop optimistes.

## Liens et implications

Le slippage, résultat de la différence entre prix d'exécution et prix côté, est un coût caché de transaction qui peut transformer une stratégie profitable en stratégie perdante si elle n'est pas correctement intégrée. Les stratégies à haute fréquence ([[Haute fréquence]]) sont particulièrement exposées car elles visent des profits par tick, oÙ même un petit slippage peut éliminer le profit.

L'[[Impact de marché]] et le slippage sont liés mais distincts. Le slippage est la différence entre prix côté et exécution ; l'impact de marché est la déviation du prix du marché causée par l'ordre lui-même. Un gros ordre cause un slippage (pour le donneur d'ordre) et un impact de marché (pour le marché dans son ensemble).

Les stratégies de [[Market making]] qui placnt des ordres à cours limité recoivent souvent des exécutions proches du prix côté mid (le point medio entre bid et ask), ce qui minimise leur slippage. C'est pourquoi le [[Frais maker vs taker|différentiel maker/taker]] est central dans la rentabilité du market making.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Almgren, Robert, and Neil Chriss. "Optimal execution of portfolio transactions." *Journal of Risk* 3 (2000): 5-39.
