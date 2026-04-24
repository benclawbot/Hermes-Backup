---
titre: "Market making"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/market-making, #concept/liquidity, #concept/spread]
créé: 2026-04-20
liens_forts: ["[[Arbitrage]]", "[[Liquidité]]", "[[Profondeur du order book]]"]
liens_opposition: []
---

# Market making

> [!info] Résumé
> Le market making est une stratégie où le trader place simultanément des ordres d'achat et de vente pour capturer le spread, fournissant de la liquidité au marché tout en assumant le risque d'inventaire et de adverse selection.

## Définition

Le market maker est un participant qui always est prêt à acheter et vendre un actif. Il gagne sa vie en capturant le bid-ask spread : il achète à un prix (bid) légèrement inférieur et vend à un prix légèrement supérieur. La différence est son profit brut par unite traded.

Concrètement, le market maker maintient un order book avec des ordres buy limit près du prix marché et des ordres sell limit légèrement au-dessus. Il remplit le book avec ces orders, capturant le spread à chaque exécution. Son risque principal est que le prix bouge dans une direction pendant qu'il hold un inventory déséquilibré.

Le market making algorithmique utilise des bots pour gérer automatiquement les ordres, ajuster les prix en fonction de la volatilité et du inventory, et réagir aux conditions du marché en temps réel. La vitesse d'exécution est crítico car le spread peut être capturé par des concurrents plus rapides.

## Contexte et origine

Les market makers ont exists depuis les débuts de la finance organisée. Sur les bourses traditionnelles, les designated market makers ont l'obligation de maintenir un spread maximal et une profondeur minimale. En échange, ils ont un accès privilégié aux flux d'ordres.

Les firmes comme Citadel Securities, Jane Street, et Virtu Financial sont les giants du market making moderne. Elles investissent massivement en infrastructure (co-localisation, fibres optiques, équipes de quant) pour réduire la latence et capturer le spread plus efficacement que les concurrents.

En crypto, le market making est particulièrement rentable sur les exchanges avec des spreads larges et une volatilité haute. Les protocols DeFi comme Uniswap implémentent le concept via des liquidity providers (LP) qui détiennent des paires d'actifs et capturent les fees de transaction. C'est une forme de market making decentralized.

## Mécanismes et caractéristiques

Le profit du market maker dépend du volume tradé plus que du directional movement. Plus il y a de trades, plus le spread est capturé. L'objectif est de réduire l inventory risk (position nette non couverte) tout en maintenant un volume élevé.

La gestion de l'inventaire est crítico. Si le market maker achète plus qu'il ne vend (inventory long), il accumule un risque directionnel si le prix baisse. Les bots ajustent leurs prix pour attirer des ordres qui rééquilibrent l'inventory : rendre le bid moins attractif (prix plus bas) et le ask plus attractif (prix plus élevé).

Le adverse selection risk apparaît quand les counterparties qui trade avec lui ont plus d'information. Si un gros ordre arrive et move le marché contre la position du market maker, c'est que l'ordre avait raison. Ces trades informés captent le spread du market maker.

Les fees de transaction sont une composante majeure de la profitabilité. Sur certains exchanges, les market makers reçoivent des rebates (fees négatifs) pour adder de la liquidité, tandis que les takers paient des fees. Cette structure encourage le market making.

## Nuances, critiques, limites

Le inventory risk peut être dévastateur en période de forte volatilité. Si le market maker hold un inventory long pendant un flash crash, ses ordres d'achat seront exercés à des prix de plus en plus bas, et ses ordres de vente ne seront pas exécutés. Le résultat est une perte concentration sur l'inventory non protégé.

Le HFT a controversialé le market making. Les critiques accusent les firmes de "quote stuffing" : placer et retirer des milliers d'ordres en quelques milliseconds pour créer de la confusion et capturer de l'information sur le order flow adverse. Les defenders répliquent que cette activité fourni de la liquidité.

En crypto, le market making est particulièrement risqué sur les small caps ou les tokens avec peu de volume. Le spread large reflète le risque, mais le volume insuffisant peut rendre la stratégie non rentable. Les scams comme les "pump and dump" peuvent éliminer les market makers qui se trouvent du mauvais côté du trade.

La adverse selection est plus forte dans les marchés crypto retail où les insiders (early investors, team tokens) ont des information advantages. Le market maker qui trade contre ces counterparties perd systématiquement.

## Liens et implications

Le [[market making]] est intimement lié à la [[liquidité]] et à la [[profondeur du order book]]. Les market makers déterminent en grande partie le bid-ask spread et la profondeur visible du livre d'ordres.

L'[[arbitrage]] dépend du market making pour la liquidité. Les stratégies d'arbitrage exploitent les différences de prix entre exchanges, mais cette arbitrage nécessite que chaque exchange ait des market makers qui maintiennent des prix coherents.

Le [[flash crash]] est souvent causé par le retrait soudain des market makers, qui laissent le marché sans liquidité et permettent à des ordres de grande taille de créer des mouvements extremes. Les [[stop-loss cascade]] amplifient ce phénomène.

## Sources

[^1]: SEC, "Market Maker", https://www.investopedia.com/terms/m/marketmaker.asp (consulted 2026)
[^2]: Angel, "Page 1", http://pages.swcp.com/~rmac/ (consulted 2026) - traditional market making dynamics