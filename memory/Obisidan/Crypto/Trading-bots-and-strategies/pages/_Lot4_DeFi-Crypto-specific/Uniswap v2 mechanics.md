---
titre: "Uniswap v2 mechanics"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/uniswap, #concept/dex, #concept/amm]
créé: 2026-04-21
liens_forts: ["[[Automated Market Makers (AMM)]]", "[[Decentralized exchanges (DEX)]]", "[[Liquidity pools]]", "[[Uniswap v3 mechanics]]", "[[Impermanent loss]]"]
liens_opposition: []
---

# Uniswap v2 mechanics

> [!info] Résumé
> Uniswap v2 est la deuxième version du protocole AMM décentralisé Uniswap, introduisant des ERC-20 aux ERC-20 pools, des prix(chain price) oracle, et des flashes swaps. Cette version a sécurisé des billions de dollars de volume de trading.

## Définition

Uniswap v2 est un Automated Market Maker (AMM) qui permet des échanges de tokens ERC-20 contre d'autres tokens ERC-20. Contrairement à la v1 qui n'utilisait que ETH comme intermediation, v2 permet les pools token-à-token directement.

Le cœur du protocole est la formule de constant product : x × y = k, où x et y sont les quantités de chaque token dans le pool, et k est une constante. Cette formule garantit que le prix s'ajuste automatiquement selon l'offre et la demande.

Chaque pool de liquidité est un smart contract qui détient des réserves de deux tokens. Les liquidity providers déposent des montants égaux des deux tokens et reçoivent des LP tokens représentant leur part. Les frais de 0,3% par échange sont ajoutés aux réserves.

Les "flash swaps" permettent d'utiliser n'importe quel token du pool sans collateral, à condition de le retourner dans la même transaction. Cela permet des stratégies complexes comme l'arbitrage sans capital initial.

## Contexte et origine

Uniswap v2 a été lancé en mai 2020 par Hayden Adams et son équipe. La v1 (2018) avait popularisé le concept AMM mais avait des limitations, notamment l'obligation de passer par ETH pour les échanges token-à-token.

La v2 a résolu ce problème en permettant directement des pools entre deux tokens ERC-20. Cela a réduit le nombre de steps pour les échanges et a permis des économies de gaz.

Les innovations de la v2 incluaient :
- Paires token-à-token
- Oracles de prix on-chain
- Flash swaps
- Support de tout token ERC-20

Le succès de v2 a fait d'Uniswap le plus grand DEX en volume et TVL, un titre qu'il a maintenu jusqu'à l'émergence de forks et de la concurrence.

## Mécanismes et caractéristiques

La formule de pricing x × y = k signifie que le prix d'un token en termes de l'autre est y/x. Quand un échangeur achète des tokens Y contre des tokens X, x augmente et y diminue, faisant grimper le prix de Y.

Les frais de 0,3% sont ajoutés aux réserves avant le prochain échange. Cela fait croître k légèrement à chaque échange, benefit les LPs. En pratique, le pool s'enrichit lentement au fil des échanges.

Les oracles de prix dans v2 fonctionnent en enregistrant le prix cumulé à chaque bloc. En comparant les cumulés à deux moments, on peut calculer le prix moyen sur une période, resistant aux manipulations de prix au sein d'un seul bloc.

Les flash swaps permettent d'emprunter la totalidad d'un token du pool, l'utiliser pour n'importe quoi (arbitrage, liquidation), puis retourner le montant initial ou une partie dans la même transaction.

## Nuances, critiques, limites

L'impermanent loss reste un problème fundamental pour les LPs. Les pools volatiles peuvent voir leurs LPs perdre plus en impermanent loss que ce qu'ils gagnent en frais.

La capital efficiency est basse. Pour avoir un slippage raisonnable, les pools doivent avoir beaucoup de capital dormant. La majorité de ce capital n'est jamais utilisé pour les échanges.

Les attaques de sandwich sont possibles sur v2. Les bots peuvent observer les transactions en mempool et placer des ordres avant et après la transaction victime pour extraire de la value.

## Liens et implications

[[Uniswap v2 mechanics]] est une implémentation spécifique des [[Automated Market Makers (AMM)]]. Les [[liquidity pools]] sont le mécanisme de base. La [[price impact]] est Determinée par la formule du protocole.

L'[[impermanent loss]] affecte tous les LPs d'Uniswap v2. Les [[sandwich attacks]] exploitent les transactions sur v2. La [[gas optimization]] est importante car les échanges v2 coûtent du gaz.

[[Uniswap v3 mechanics]] est la version suivante avec concentrated liquidity. Les [[flash loans]] sont une fonctionnalité similaire aux flash swaps. Le [[backtesting]] des stratégies Uniswap doit considérer les frais et le slippage.

## Sources

[^1]: Uniswap Documentation, "Uniswap v2", https://docs.uniswap.org (consulted 2026)
[^2]: Adams, "Uniswap v2 Core", https://uniswap.org (consulted 2026)
[^3]: Angeris, "Analysis of Uniswap Markets", Stanford (consulted 2026)
