---
titre: "Profondeur du carnet d'ordres"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/carnet-ordres, #microstructure, #liquidité]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Liquidité]]", "[[Ordre au marché]]", "[[Impact de marché]]", "[[Données de niveau 2]]"]
liens_opposition: []
---

# Profondeur du carnet d'ordres

> [!info] Résumé
> La profondeur du carnet d'ordres mesure le volume total de liquidité disponible aux différents niveaux de prix. Elle détermin la capacité du marché à absorber les ordres sans impact significatif sur le prix.

## Définition

La profondeur du carnet d'ordres (market depth) est une mesure de la liquidité d'un marché qui représente le volume total d'ordres d'achat (bid) et de vente (ask) disponibles à différents niveaux de prix. Elle est généralement exprimée en nombre de contrats ou d'unités monétaires, et visualisée comme une courbe ou un histogramme montrant le volume cumulatif aux N premiers niveaux du carnet.

La profondeur est uneindicateur crucial pour évaluer la résilience d'un marché : un marché profond peut absorber des ordres de grande taille avec un impact minimal sur le prix, tandis qu'un marché superficiel sera très sensible à chaque ordre. La profondeur est directement liée à l'[[Impact de marché]] potentiel.

La profondeur est souvent mesurée par le "depth of book" (DoB) qui somme le volume des N premiers niveaux de chaque côté du carnet. Les [[Données de niveau 2]] sont précisément les données qui permettent de voir la profondeur complète du carnet.

## Contexte et origine

La notion de profondeur du marché est inhérente aux marchés financiers depuis leur existence. Plus le marché est actif et nombreux les participants, plus la profondeur est grande. Les marchés d'actions des grandes capitalisations (Apple, Microsoft) sont très profonds ; les small caps sont plus superficielles.

Dans l'écosystème crypto, la profondeur varie énormément entre les actifs : Bitcoin et Ethereum sur les grands exchanges (Binance, Coinbase) ont une profondeur considérable avec des carnets de plusieurs millions de dollars aux premiers niveaux. Les altcoins à faible capitalisation peuvent avoir des carnets très superficiels oÙ quelques milliers de dollars suffisent à déplacer le prix significativement.

La profondeur du carnet est un facteur crucial pour le [[Position sizing]] : avant de passer un ordre de taille X, il faut évaluer si le marché peut l'absorber sans slippage excessif.

## Mécanismes / caractéristiques / détails

**Niveaux de prix** : la profondeur est mesurée à plusieurs niveaux. Le premier niveau (best bid / best ask) montre la liquidité au prix le plus proche du mid. Les niveaux suivants montrent la liquidité à des prix de plus en plus éloignés. Un ordre qui "traverse" plusieurs niveaux subit un slippage cumulatif.

**Profondeur cumulée vs fragmentée** : la profondeur cumulée à un niveau de prix donné est la somme de toutes les orders à ce niveau. La profondeur fragmentée est la size de chaque ordre individuel. Un carnet avec 10 ordres de 1 000 BTC chacun a la même profondeur cumulée qu'un carnet avec 1 ordre de 10 000 BTC, mais une dynamique différente.

**Profondeur et volatilité** : la profondeur n'est pas statique. En période de forte volatilité, les teneurs de marché ([[Market making]]) réduisent leur taille d'ordres ou se retirent, réduisant la profondeur. En période calme, la profondeur augmente. Cette dynamique est importante pour calibrer les ordres.

**Visualisation** : la profondeur est généralement visualisée sous forme de "cumulative depth chart" (aussi appelée "order book wall" ou "depth chart"). Cette courbe montre le volume cumulatif des ordres d'achat à chaque niveau de prix inférieur au prix actuel, et le volume cumulatif des ordres de vente à chaque niveau supérieur.

**Ratio profondeur / taille de l'ordre** : le principal indicateur pratique est le ratio entre la profondeur disponible et la taille de l'ordre projeté. Si la profondeur aux 5 premiers niveaux est de 100 BTC et que l'ordre à passer est de 10 BTC, l'ordre devrait absorber 10 % de la profondeur visible, causant un slippage modéré. Si l'ordre est de 80 BTC, l'impact sera considérable.

## Nuances, critiques, limites

**Profondeur apparente vs réelle** : la [[Liquidité]] visible dans le carnet peut ne pas être réelle. Des ordres peuvent être placé pour donner l'illusion de profondeur ( "[[Smart money concept|order spoofing]]") puis être annulés avant exécution. Les acteurs informed peuvent aussi avoir des orders "iceberg" ([[Ordre iceberg]]) qui ne révèlent qu'une fraction de leur taille réelle.

**Impact de l'ordre sur la profondeur** : un gros ordre exécuter modifie la profondeur en consommant les orders existants. Après l'exécution, le carnet est moins profond à ce niveau de prix, ce qui peut affecter les orders suivants.

**Profondeur et temps** : la profondeur à un instant donné est une snapshot. Elle peut varier rapidement si de nouveaux orders arrivent ou si des orders sont annulés. Une profondeur de 10 000 BTC semble importante mais si elle est largement composée de petits ordres très vieux, elle peut ne pas représenter la liquidité réelle.

**Profondeur transitaire vs permanente** : l'exécution d'un ordre absorbe la profondeur "transitaire" (liquidity that appears temporarily) differemment de la profondeur "permanente" (les orders de véritables teneurs de marché). Les teneurs de marché [[Market making]] qui fournissent de la profondeur permanente sont plus fiables que les ordres spéculatifs qui peuvent être retirés.

## Liens et implications

La profondeur du carnet est le  déterminant du [[Slippage]] pour les ordres de taille. Avant de décider de la taille d'un ordre, un [[Trading algorithmique|algorithme de trading]] doit évaluer la profondeur disponible et modeliser le slippage anticipé.

L'[[Impact de marché]] d'un ordre est directement proportionnel à sa taille relative à la profondeur. Un ordre qui représente 1 % de la profondeur génère un impact different d'un ordre qui en représente 50 %.

Les stratégies de [[Arbitrage]] entre exchanges dependent de la profondeur sur chaque plateforme. Un arbitrage n'est possible que si les deux exchanges ont assez de profondeur pour absorber les orders d'arbitrage sans marchés move.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Kyle, Albert. "Market Structure, Information, and Market Depth." *Journal of Financial Economics*, 1985.
