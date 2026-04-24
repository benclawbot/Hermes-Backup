---
titre: "Slippage tolerance"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 2
tags: [#concept/slippage, #concept/trading, #concept/defi]
créé: 2026-04-21
liens_forts: ["[[Slippage]]", "[[Price impact]]", "[[Decentralized exchanges (DEX)]]", "[[Order à cours limité]]", "[[Gestion du slippage]]"]
liens_opposition: []
---

# Slippage tolerance

> [!info] Résumé
> La slippage tolerance est un paramètre défini par l'utilisateur qui spécifie le pourcentage maximum de slippage qu'il est prêt à accepter lors d'un échange sur un exchange décentralisé. Ce paramètre protège contre l'exécution à un prix défavorable mais peut também faciliter des attaques de sandwich.

## Définition

La slippage tolerance est le pourcentage maximum de différence entre le prix attendu d'un échange et le prix réel d'exécution que l'utilisateur est prêt à accepter. Si le slippage réel dépasse ce seuil, la transaction échoue plutôt que de s'exécuter à un prix trop défavorable.

Par exemple, si un utilisateur définit une slippage tolerance de 0,5% et passe un ordre d'achat de ETH à 2000 USDC, la transaction ne s'exécutera pas si le prix effectif dépasse 2010 USDC. Ce mécanisme protège les utilisateurs contre la slippage excessive.

Les exchanges décentralisés demandent généralement aux utilisateurs de définir leur slippage tolerance avant chaque échange. Des paramètres trop bas peuvent causer des transactions échouées fréquemment, surtout sur des marchés volatiles ou avec faible liquidité. Des paramètres trop hauts augmentent l'exposition au slippage et aux attaques.

Les valeurs typiques varient de 0,1% à 1% pour des échanges normaux sur des paires liquides. Pour des paires illiquides ou pendant la volatilité élevée, les utilisateurs peuvent avoir besoin d'ajuster jusqu'à 5% ou plus.

## Contexte et origine

Le concept de slippage tolerance est né avec les premiers AMM sur Ethereum. Uniswap a introduit ce paramètre car les prix sur les AMM sont variables et déterminés par la taille de la transaction relative à la liquidité du pool. Sans ce paramètre, les utilisateurs seraient vulnérables à des exécutions à des prix très défavorables.

La nécessité de ce paramètre reflète une différence fondamentale entre les AMM et les order books traditionnels. Sur un CEX avec un order book profond, l'utilisateur passe un ordre à cours limité et reçoit exactement le prix spécifié (ou rien). Sur un AMM, le prix dépend de la profondeur du pool.

Avec l'évolution des DEX, les interfaces ont amélioré la présentation de la slippage tolerance. Certaines montrent maintenant une estimation du slippage attendu basée sur la taille de la transaction et la liquidité disponible.

## Mécanismes et caractéristiques

Le slippage est calculé comme la différence entre le prix attendu et le prix d'exécution, exprimée en pourcentage. Si le prix de marché est 100 et que l'ordre s'exécute à 101, le slippage est de 1%.

La slippage tolerance fonctionne comme un guard rail. Voici le processus :
1. L'utilisateur soumet une transaction avec un montant et une slippage tolerance
2. Le protocole calcule le prix d'exécution réel
3. Si |prix_réel - prix_attendu| / prix_attendu <= tolerance, la transaction s'exécute
4. Sinon, la transaction échoue

Les facteurs qui influencent le slippage réel incluent :
- La liquidité du pool (plus le pool est petit, plus le slippage est élevé)
- La taille de la transaction (plus la transaction est grande, plus le slippage est élevé)
- La volatilité du marché (les gros ordres pendant la volatilité subissent plus de slippage)
- L'activité d'arbitrage (qui ajuste les prix entre pools)

## Nuances, critiques, limites

Une slippage tolerance trop basse cause des transactions échouées. C'est frustrant pour l'utilisateur et peut signifier rater des opportunités, spécialement en période de volatilité ou quand on essaie d'exécuter des gros ordres.

Une slippage tolerance trop haute expose l'utilisateur aux attaques de sandwich. Un attaquant peut observer la transaction en mempool, placer un ordre qui achète avant et vend après, capturant la différence. C'est pourquoi les utilisateurs doivent faire attention à leur slippage tolerance.

Les paramètres par défaut sur certains DEX sont parfois trop généreux (1% ou plus) ce qui peut profiter aux extracteurs de MEV plutôt qu'aux utilisateurs. Des protocoles comme Uniswap ont commencé à recommander des valeurs plus conservatrices.

Les marchés très volatils ou les périodes de congestion blockchain peuvent causer du slippage même avec des paramètres razonables. Pendant un mint de novo token ou un airdrop, la volatilité peut être extrême.

## Liens et implications

La [[slippage tolerance]] est directement liée à la [[slippage]] en générale et à la [[price impact]] de chaque transaction. Elle affecte les échanges sur les [[Decentralized exchanges (DEX)]]. Une [[gestion du slippage]] adecuada est essentielle pour optimiser l'exécution.

L'utilisation d'ordres à cours limité ([[ordre à cours limité]]) peut réduire le besoin d'une slippage tolerance élevée. Les [[ordre stop-limite]] intègrent également des concepts de slippage tolerance.

Les [[sandwich attacks]] exploitent les slippage tolerances mal configurées. Les [[DEX aggregators]] peuvent aider à réduire le slippage en trouvant les meilleurs routes. La [[gas optimization]] est importante car les transactions avec slippage tolerance doivent être exécutées rapidement.

## Sources

[^1]: Uniswap Documentation, "Trading", https://docs.uniswap.org (consulted 2026)
[^2]: Binance Academy, "Slippage Tolerance", https://academy.binance.com (consulted 2026)
