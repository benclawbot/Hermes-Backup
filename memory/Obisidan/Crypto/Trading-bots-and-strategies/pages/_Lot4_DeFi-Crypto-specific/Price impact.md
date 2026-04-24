---
titre: "Price impact"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 2
tags: [#concept/price-impact, #concept/trading, #concept/defi]
créé: 2026-04-21
liens_forts: ["[[Slippage]]", "[[Decentralized exchanges (DEX)]]", "[[Liquidité]]", "[[Order book dynamics]]", "[[Slippage tolerance]]"]
liens_opposition: []
---

# Price impact

> [!info] Résumé
> La price impact désigne le changement de prix d'un actif causé par une transaction elle-même. Sur les marchés financiers, toute transaction déplace le prix; sur les AMM, la taille de la transaction relative à la liquidité détermine l'ampleur de ce déplacement.

## Définition

La price impact est la différence entre le prix de marché avant une transaction et le prix effectif d'exécution. Elle représente l'effet de la transaction sur le prix de l'actif échangé. Ce concept est fondamental pour comprendre pourquoi les gros ordres sont plus coûteux que les petits ordres.

Sur un order book centralisé, la price impact dépend de la profondeur du livre d'ordres aux niveaux de prix concernés. Plus la taille de l'ordre est grande par rapport à la liquidité disponible, plus l'impact sur le prix sera important.

Sur un Automated Market Maker (AMM), la price impact est Determinée par la formule mathématique du protocole. Pour un constant product market maker (x × y = k), l'impact est inversement proportionnel à la racine carrée de la liquidité du pool et directement proportionnel à la taille de la transaction.

La price impact est étroitement liée au slippage. On peut dire que le slippage est une forme de price impact causée par les conditions de marché au moment de l'exécution. La price impact est leffet net sur le prix; le slippage est l'exécution de la transaction à un prix différent de celui initialement souhaité.

## Contexte et origine

Le concept de price impact existe depuis les marchés financiers traditionnels. Les traders institutionnels connaissent bien ce phénomène sous le nom de "market impact". Les études de Kyle (1985) et d'autres chercheurs ont formalisé des modèles mathématiques de market impact.

En crypto, la price impact a pris une importance particulière avec l'émergence des AMM. Contrairement aux order books où la liquidité est concentrée à des niveaux de prix spécifiques, les AMM offrent une liquidité continue mais avec un impact qui croît de manière non-linéaire.

La fragmentation de la liquidité en crypto entre múltiples exchanges, chaînes, et protocoles crée des dyniques complexes. Une transaction importante sur Uniswap affecte le prix local au pool, mais ce prix est ramené à l'équilibre par les arbitragistes en quelques blocs.

## Mécanismes et caractéristiques

Sur un AMM avec formule x × y = k, la price impact d'un échange de dx tokens A pour dy tokens B est :

prix_impact = (quantité_demandée / liquidité_du_pool)

Concrètement, si un pool contient 10 millions de dollars de liquidité et qu'un trader échange 1 million de dollars, l'impact sera d'environ 10%. Plus le pool est grand, plus l'impact est faible pour une taille de transaction donnée.

Les facteurs quiinfluencent la price impact :
- La taille de la transaction relative à la liquidité
- La volatilité du actif
- Le nombre de transactions concurrentes
- La profondeur du order book aux niveaux de prix concernés
- L curvature de la fonction de pricing

Les traders professionnels et les bots surveillent la price impact pour optimiser leurs stratégies. Une transaction trop grande peut avoir un impact tel que le coût du slippage excède le bénéfice attendu.

## Nuances, critiques, limites

La price impact est souvent sous-estimée par les traders novices. Ils passent des ordres de taille importante sans considérer l'effet sur le prix d'exécution. Sur les small caps ou les paires peu liquides, l'impact peut être catastrophic.

Les AMM modernisent la price impact d'une manière qui peut sembler non intuitive. Le prix d'un actif sur un pool AMM peut s'éloigner significativement du prix sur d'autres exchanges avant que les arbitragistes ne interviennent. Ces délais créent des opportunités mais aussi des risques.

La measuration précise de la price impact est difficile ex ante. Les estimations basées sur la liquidité actuelle peuvent être inexactes si la liquidité change entre le moment de l'estimation et l'exécution. C'est pourquoi les traders utilisent des marges de sécurité.

Les [[sandwich attacks]] exploitent la price impact en plaçant des ordres avant et après la transaction cible. L'attaquant achète d'abord, laissant la cible acheter à un prix plus élevé, puis vend immédiatement. La [[slippage tolerance]] mal configurée facilite ces attaques.

## Liens et implications

La [[price impact]] est une composante clé de la [[slippage]] totale sur les [[Decentralized exchanges (DEX)]]. La [[liquidité]] du pool détermine largement l'ampleur de la price impact. Les [[order book dynamics]] suivent des principes similaires.

Le [[slippage tolerance]] paramètre agit comme un guard contre l'price impact excessive. Une [[gestion du slippage]] apropiada intègre la price impact dans les décisions. Les [[ordres iceberg]] sont une méthode pour réduire l'price impact en divisant les gros ordres.

Les [[flash loans]] peuvent être utilisés pour manipuler la price impact sur un pool avant d'exécuter une transaction principale. Les [[DEX aggregators]] calculent automatiquement la price impact pour diverses routes. La [[gas optimization]] devient critique quand l'price impact change rapidement.

## Sources

[^1]: Kyle, "Continuous Auctions and Insider Trading", Econometrica (1985)
[^2]: Uniswap Documentation, "Pricing", https://docs.uniswap.org (consulted 2026)
