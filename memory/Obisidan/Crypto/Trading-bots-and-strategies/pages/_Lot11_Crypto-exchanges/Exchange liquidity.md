---
titre: "Exchange liquidity"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/liquidité, #concept/exchange, #concept/market-depth]
créé: 2026-04-21
liens_forts: ["[[Liquidité des échanges]]", "[[Exchange volume]]", "[[Écart bid-ask]]", "[[Profondeur du carnet d'ordres]]", "[[Slippage]]", "[[Market making]]", "[[Central limit order book (CLOB)]]"]
---

# Exchange liquidity

> [!info] Résumé
> L'exchange liquidity mesure la capacité d'une plateforme d'échange à absorber des ordres de taille significative sans impact disproportionné sur le prix. Elle se manifeste à travers l'écart bid-ask, la profondeur du carnet d'ordres, et la résilience du marché aux transactions volumineuses.

## Définition et composantes

L'exchange liquidity représente la facilité avec laquelle les participants peuvent exécuter des transactions sans provoquer de mouvements de prix importants. C'est une propriété du marché qui dépend de plusieurs facteurs interconnectés.

Les trois composantes principales de la liquidité sont :
- La profondeur du carnet d'ordres (order book depth)
- L'écart bid-ask (bid-ask spread)
- La résilience du marché (market resilience)

Un marché liquide se caractérise par un écart bid-ask serré, une profondeur importante à chaque niveau de prix, et une capacité à retrouver des prix normaux rapidement après une transaction volumineuse.

## Profondeur du carnet d'ordres

La [[Profondeur du carnet d'ordres]] représente le volume d'ordres disponibles aux différents niveaux de prix autour du prix actuel. Un carnet profond avec beaucoup d'ordres à chaque niveau de prix offre une grande résistance aux transactions importantes.

La profondeur se mesure généralement par le volume cumulatif disponible dans les 10 à 50 meilleurs niveaux du carnet. Un order book avec 10 millions de dollars de volume dans les 10 meilleurs niveaux est plus liquide qu'un autre avec seulement 1 million.

Pour les [[Trading bot]], la profondeur du carnet détermine la taille maximale des ordres qui peuvent être placés sans slippage significatif. Les stratégies de [[Market making]] utilisent cette information pour définir leurs fourchettes de prix.

## Écart bid-ask

L'[[Écart bid-ask]] est la différence entre le prix le plus élevé qu'un acheteur est prêt à payer (bid) et le prix le plus bas qu'un vendeur accepte (ask). Ce spread constitue le premier coût de transaction visible.

Un écart serré indique une forte concurrence entre teneurs de marché, ce qui profite aux traders qui placent des ordres car ils capturent le spread. Un écart large signale une liquidité réduite ou un risque accru perçu par les market makers.

Le spread s'élargit typiquement quand la volatilité augmente car les market makers élargissent leurs fourchettes pour se protéger contre le risque d'inventaire. Pendant les périodes de stress, les spreads peuvent s'élargir significativement.

## Résilience du marché

La résilience mesure la vitesse à laquelle le marché retrouve des niveaux de prix normaux après une perturbation. Un marché résilient absorbe rapidement une transaction importante et restore la profondeur du carnet.

La résilience est particulièrement importante pour les [[Trading bot]] qui passent des ordres volumineux. Un marché résilient garantit que le prix revient rapidement au niveau attendu, limitant l'impact de l'ordre sur les positions suivantes.

Les marchés peu résilients peuvent avoir un impact séquentiel où l'exécution d'un gros ordre move le prix de manière permanente, increasing le coût d'exécution pour les ordres suivants.

## Impact de l'Exchange liquidity sur le trading

Le [[Slippage]] est la différence entre le prix anticipé et le prix réel d'exécution. Sur un marché liquide, le slippage est faible. Sur un marché peu liquide, le slippage peut atteindre plusieurs pour cent pour des ordres de taille significative.

L'[[Impact de marché]] décrit le déplacement du prix causé par une transaction. Les modèles comme le [[Modèle d'impact de Roll]] permettent d'estimer le slippage anticipé pour une taille d'ordre donnée.

Pour les stratégies de [[Scalping]], la liquidité est essentielle. Les profits viennent des petits écarts de prix, donc des spreads serrés sont nécessaires pour rentabiliser les stratégies.

## Factors affectant l'Exchange liquidity

Le [[Exchange volume]] quotidien influence directement la liquidité disponible. Les exchanges avec des volumes élevés attirent plus de market makers, ce qui améliore les conditions de liquidité.

La volatilité du marché affecte également la liquidité. Pendant les périodes de haute volatilité, les market makers élargissent leurs spreads et réduisent leur taille maximale par ordre pour manage leur risque.

Les événements de marché comme les [[Flash crash]] peuvent faire évaporer la liquidité temporairement. Les [[Circuit breakers]] sont conçus pour protéger contre ces événements mais ne les éliminent pas complètement.

## Exchange liquidity et competition

La liquidité est un avantage concurrentiel majeur pour les exchanges. Les plateformes avec une meilleure liquidité attirent plus de traders, ce qui améliore davantage leur liquidité dans un cercle vertueux.

Les [[Exchanges centralisés]] dominent généralement la liquidité sur les paires principales grâce à leur volume élevé. Les [[Decentralized exchanges (DEX)]] offrent une alternative mais avec une liquidité généralement inférieure pour les mêmes paires.

Les protocoles DeFi comme Uniswap ont leur propre modèle de liquidité basé sur les [[Liquidity pools]]. Cette liquidité peut être plus volatile mais est accessible à tous sans permission.

## Measurement et analyse

Les métriques pour évaluer la liquidité incluent :
- Le volume quotidien (daily volume)
- L'écart bid-ask moyen (average spread)
- La profondeur du carnet (order book depth)
- Le ratio volume/volatilité
- Le time to liquidate a large order

Ces métriques sont disponibles via les [[Exchange API]] et sont utilisées par les traders pour évaluer les opportunités et les risques sur chaque plateforme.

## Sources

[^1]: Kyle, "Continuous Auctions and Insider Trading", Econometrica (1985)
[^2]: Hasbrouck, Joel. "Empirical Market Microstructure", Oxford University Press (2007)