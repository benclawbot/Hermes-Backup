---
titre: "Incitations du market maker"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/market-maker, #microstructure, #liquidité]
créé: 2026-04-21
liens_forts: ["[[Market making]]", "[[Écart bid-ask]]", "[[Sélection adverse]]", "[[Risque d'inventaire]]", "[[Toxicité du marché]]", "[[Liquidité]]", "[[Frais maker vs taker]]"]
liens_opposition: []
---

# Incitations du market maker

> [!info] Résumé
> Les incitations du market maker désignent les motivations économiques qui poussent les teneurs de marché à fournir de la liquidité. Ces incitations incluent la capture du spread, la rémunération pour le risque de sélection adverse et d'inventaire, et les rebates des exchanges.

## Définition

Les incitations du market maker sont les motivations financières qui déterminent si et comment un acteur choisit de fournir de la liquidité sur un marché. Un market maker s'engage à placer des ordres d'achat et de vente de façon continue, gagnant sa rémunération à travers le spread (la différence entre son prix d'achat et son prix de vente) et les rebates offerts par les exchanges pour attirer la liquidité.

Le modèle économique fondamental du market maker repose sur la capture du spread. En plaçant simultanément un bid à 99 USD et un ask à 101 USD, le market maker gagne 2 USD par action quand les deux côtés sont exécutés. Ce profit est sa compensation pour avoir accepté le risque de garder un inventaire.

Cependant, le market maker fait face à plusieurs risques qui réduisent son profit espéré. La [[Sélection adverse]] survient quand sa contrepartie a une information privée qui lui permet de prévoir le mouvement du prix. Le [[Risque d'inventaire]] survient quand le prix bouge contre sa position nette. La [[Toxicité du marché]] augmente quand le flux d'ordres est dominé par des acteurs informés.

Les exchanges attirent les market makers avec des "rebates" (remises) sur les frais maker. Ces rebates peuvent aller de 0.01% à 0.03% du volume, créant un complément significatif au revenue du spread pour les gros teneurs de marché.

## Contexte et origine

L'étude formelle des incitations du market maker émerge avec les travaux de Stoll (1978) et de Glosten et Milgrom (1985). Le modèle de Glosten-Milgrom montre que le market maker fixe son prix d'achat (bid) et son prix de vente (ask) en fonction de sa croyance sur la probabilité que la contrepartie soit informée. Plus le risque de sélection adverse est grand, plus le spread est large.

Dans l'écosystème crypto, les market makers sont généralement des firmes professionnelles (Jump Trading, Alameda Research, etc.) ou des bots algorithmiques sophistiqués. Ils fournissent la liquidité sur les exchanges centralisés en échange du spread capturé et des rebates. Leur présence est cruciale pour la qualité du marché.

Les incitations des market makers sont équilibrées par les régulateurs pour éviter les comportements abusifs. Certains market makers qui ont des conflits d'intérêts (semblant être informés sur les ordres de leurs clients) peuvent être tentés de pratiquer du front-running ou d'autres comportements problématiques.

## Mécanismes / caractéristiques / détails

**Capture du spread** : l'incitation principale est le profit du spread. Un market maker qui bid 99 et ask 101 sur un actif à 100 dollars génère un profit de 2 USD par round trip (achat + vente). Ce profit est le compensation pour le risque pris.

**Risque de sélection adverse** : le market maker qui trade avec un acteur informé perd systématiquement. Si la contrepartie sait que le prix va monter (information privée), il ne vendra que si le prix du market maker est trop bas. Le market maker doit donc élargir son spread pour se compenser de ce risque. La probabilité de trader avec un acteur informé (PIN) détermine la taille du spread.

**Risque d'inventaire** : détenir un inventaire non souhaité est un risque. Si le market maker a trop acheté (inventaire long), il est exposé à une baisse du prix. Il peut gérer ce risque en ajustant ses prix (réduisant son bid pour encourager les ventes, augmentant son ask pour décourager les achats). La volatilité du actif détermine la taille du risque d'inventaire.

**Rebates des exchanges** : les exchanges reversent une partie des frais taker aux market makers qui fournissent de la liquidité. Ces rebates peuvent représenter 0.01% à 0.03% du volume. Pour un market maker qui traite des milliards de dollars par jour, ces rebates représentent un revenue significatif.

**Incitations à maintenir la liquidité** : les market makers signent des accords avec les exchanges où ils s'engagent à maintenir des tailles minimales d'ordres et des spreads maximaux. En échange, ils reçoivent des rebates majorés et parfois un accès préférentiel au carnet d'ordres.

## Nuances, critiques, limites

Les incitations des market makers ne sont pas toujours alignées avec l'intérêt des autres participants au marché. Un market maker peut être incité à élargir son spread quand il perçoit un risque de sélection adverse, réduisant la liquidité pour tous. Inversement, un market maker peut être trop agressif et prendre trop de risque d'inventaire, créant une instabilité.

Le "confirmateur de liquidité" (dark pool) est une structure où le market maker garantit un spread maximum en échange d'une exécution prioritaire sur les ordres. Cette structure est controversée car elle peut créer un conflit d'intérêts.

L'équilibre entre incitations du market maker et liquidité pour les autres participants est un enjeu de politique publique. Si les incitations sont trop faibles (spread trop serré par rapport au risque), les market makers se retirent, réduisant la liquidité. Si les incitations sont trop grandes (spread trop large), les coûts de transaction pour les takers sont excessifs.

## Liens et implications

Les incitations du market maker déterminent le niveau du [[Écart bid-ask]]. Plus le risque perçu est grand (sélection adverse + inventaire), plus le spread sera large. Le market maker ajuste continuellement ses prix en fonction de sa perception du risque.

La [[Toxicité du marché]] affecte directement les incitations du market maker. Un marché très toxique (forte probabilité de sélection adverse) incite les market makers à élargir massivement leur spread ou à se retirer, détériorant la liquidité.

Les stratégies de [[Trading algorithmique]] qui concurrencent les market makers doivent comprendre leurs incitations. Si un trader peut identifier quand un market maker a un inventaire déséquilibré, il peut en profiter en tradant contre le market maker.

## Sources

[^1]: Stoll, Hans. "The Supply of Brokerage Services." *Bell Journal of Economics* 9 (1978): 250-278.
[^2]: Glosten, Lawrence, and Paul Milgrom. "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics* 14 (1985): 71-100.
[^3]: Biais, Bruno, Denis Martimort, and Jean-Charles Rochet. "Competing Mechanisms in a Common Value Environment." *Econometrica* 68 (2000): 799-837.