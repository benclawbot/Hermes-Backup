---
titre: "Sandwich attacks"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#concept/sandwich-attack, #concept/defi, #concept/MEV]
créé: 2026-04-21
liens_forts: ["[[MEV (Miner Extractable Value)]]", "[[Flash loans]]", "[[Slippage]]", "[[Slippage tolerance]]", "[[Price impact]]"]
liens_opposition: []
---

# Sandwich attacks

> [!info] Résumé
> Les sandwich attacks sont une forme d'exploitation en DeFi où un attaquant observe une transaction en mempool, la "sandwich" entre deux de ses propres transactions pour capturer de la valeur. L'attaquant achète avant la transaction cible, forçant le prix à monter, puis vend immédiatement après.

## Définition

Une attaque sandwich est une stratégie d'exploitation où un attaquant intercepte une transaction victime en la plaçant entre deux transactions lui appartenant. La première transaction achète l'actif que la victime veut acheter, ce qui pousse le prix à la hausse. La victime achète ensuite à un prix plus élevé (son slippage tolerance lui permet toujours d'exécuter). L'attaquant vend ensuite immédiatement l'actif, capturant la différence.

Le processus se déroule comme suit :
1. L'attaquant observe le mempool à la recherche de transactions DEX importantes
2. Il place un ordre d'achat juste avant la transaction victime (frontrunning)
3. La victime achète à un prix plus élevé en raison de l'impact de l'ordre de l'attaquant
4. L'attaquant vend immédiatement après la transaction victime
5. Le profit de l'attaquant est la différence entre ses prix d'achat et de vente, moins les frais

Cette attaque exploite la nature mécanique des AMM où le prix est Determiné par la quantité de tokens dans le pool. L'attaquant profite de la [[price impact]] qu'il a lui-même créée.

Les sandwich attacks sont considérées comme une forme de [[MEV (Miner Extractable Value)]] ou plus précisément de "Maximal Extractable Value" puisque les mineurs (ou validateurs) ne sont pas toujours directement impliqués. Les validators peuvent aussi participates via le PBS (Proposer Builder Separation).

## Contexte et origine

Les sandwich attacks ont été documentées dès 2020, peu après l'émergence des AMM sur Ethereum. Le mempool ouvert d'Ethereum permet à quiconque d'observer les transactions en attente et de les anticiper. Les premiers bots de MEV exploitaient déjà le frontrunning.

Flashbots, une organisation visant à démocratiser l'accès au MEV et à réduire les externalités négatives, a popularisé le terme et a créé des outils comme MEV-Geth pour rendre ces pratiques transparentes. Cependant, les sandwich attacks restent une pratique controversée.

La communauté DeFi est divisée. Certains arguent que les attaquants contribuent à l'efficacité du marché en alignant les prix. D'autres considerent que c'est un vol pure et simple car l'utilisateur est forcé d'exécuter à un prix moins favorable.

## Mécanismes et caractéristiques

Les composants techniques d'une attaque sandwich :

Le frontrunning : L'attaquant soumet une transaction avec un gas price plus élevé que la victime pour passer en premier. Il achète l'actif que la victime convoite, augmentant le prix dans le pool AMM.

La transaction victime : La victime achète l'actif à un prix désormais plus élevé. Si sa slippage tolerance est suffisamment haute, la transaction s'exécutera même avec ce prix majoré.

Le backrun : L'attaquant soumet une troisième transaction pour vendre immédiatement l'actif au prix plus élevé. Idéalement, cette transaction est exécutée juste après celle de la victime pour capturer le maximum de value.

Les conditions pour une attaque réussie :
- La victime doit avoir une slippage tolerance suffisamment haute
- La taille de la transaction doit être assez grande pour générer un profit > frais de gaz
- L'attaquant doit avoir suffisamment de capital pour le frontrunning
- La liquidité du pool doit être suficiente pour absorber l'attaque

## Nuances, critiques, limites

Les sandwich attacks sont considérées comme éthiquement problématiques car elles profitent directement de l'information privée de la victime. La victime ne savait pas qu'elle allait être attackée et n'a pas consenti à cette extracted value.

Sur le plan économique, les sandwich attacks redistribuent la richesse de la victime vers l'attaquant sans créer de value pour l'écosystème. Contrairement à l'arbitrage qui aligne les prix entre marchés, les sandwich attacks ne font que prélever une rente.

Les défenseurs argumentent que ces pratiques sont "justes" car elles sontpermissionless et que les utilisateurs peuvent se protéger en fixant des slippage tolerances basses. Cependant, cela crée une friction pour les utilisateurs légitimes.

Les protocoles anti-MEV comme Cowswap (Gnosis) tentent de protéger les utilisateurs en utilisant des mécanismes d'enchères différents. Les RPC privados peuvent aussi réduire l'exposition au mempool.

## Liens et implications

Les [[sandwich attacks]] sont une forme de [[MEV (Miner Extractable Value)]] exploitée par des bots sophistiqués. Elles utilisent les [[flash loans]] pour amplifier le capital disponibles. Le [[slippage]] et la [[slippage tolerance]] mal configurés sont lesvecteurs d'attaque.

La [[price impact]] created by the attacker is what generates the profit. Les [[Decentralized exchanges (DEX)]] Uniswap sont les cibles privilégiées. Les [[DEX aggregators]] peuvent intégrer une protection contre les attaques sandwich.

Le [[market making]] on DEX est affected par ces attaques car elles modifient les incitations. Les [[liquidity pools]] deviennent des champs de bataille pour les bots MEV. La [[gas optimization]] est cruciale car les attaques doivent être exécutées rapidement.

## Sources

[^1]: Flashbots, "MEV and Me", https://docs.flashbots.net (consulted 2026)
[^2]: Wang, "High-Frequency Trading in Crypto Markets", MIT Technology Review (consulted 2026)
[^3]: Ethereum Foundation, "Miner Extractable Value", https://ethereum.org (consulted 2026)
