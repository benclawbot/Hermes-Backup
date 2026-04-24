---
titre: "Decentralized exchanges (DEX)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/dex, #concept/defi, #concept/trading]
créé: 2026-04-21
liens_forts: ["[[Automated Market Makers (AMM)]]", "[[Liquidity pools]]", "[[DEX aggregators]]", "[[DEX market making]]", "[[Cross-chain bridges]]"]
liens_opposition: ["[[Central limit order book (CLOB)]]"]
---

# Decentralized exchanges (DEX)

> [!info] Résumé
> Les decentralized exchanges (DEX) sont des protocoles exchange décentralisés permettant d'échanger des tokens sans intermediary centralisé. Contrairement aux exchanges centralisés, les DEX utilisent des smart contracts et des Automated Market Makers pour déterminer les prix et exécuter les transactions.

## Définition

Un decentralized exchange (DEX) est une plateforme d'échange de cryptomonnaies qui opère de manière décentralisée, c'est-à-dire sans autorité centrale qui détient les fonds des utilisateurs. Les DEX utilisent des smart contracts déployés sur la blockchain pour exécuter les échanges de tokens de manière automatique et transparente. L'utilisateur conserve le contrôle de ses fonds grâce à des wallet non custodiales.

Les principales catégories de DEX incluent les Automated Market Makers (AMM) qui utilisent des formules mathématiques pour pricing les échanges, et les order book décentralisés qui rapprochent les ordres d'achat et de vente sur la chaîne. Les AMM dominent actuellement l'écosystème en raison de leur simplicité et de leur efficacité en matière de capital.

La différence fondamentale avec un exchange centralisé (CEX) réside dans la custodia des fonds. Sur un CEX comme Binance ou Coinbase, l'utilisateur dépose ses fonds auprès de l'exchange qui les détient en son nom. Sur un DEX, les fonds restent dans le wallet de l'utilisateur jusqu'au moment précis de la transaction, puis sont échangés directement via le smart contract.

## Contexte et origine

Le premier DEX notable fut EtherDelta, lancé en 2017 sur Ethereum, qui utilisait un modèle d'order book on-chain. Cependant, l'expérience utilisateur était médiocre en raison des frais de gaz élevés et de la lenteur des confirmations blockchain. En 2018, IDEX a tenté de combiner un order book off-chain avec un settlement on-chain pour améliorer l'expérience.

La véritable révolution a eu lieu avec l'avènement des Automated Market Makers. Uniswap, lancé en novembre 2018 par Hayden Adams, a popularisé le modèle AMM avec sa formule de constant product (x × y = k). Ce modèle permettait à quiconque de devenir market maker en déposant des tokens dans un liquidity pool, recevant une part des frais de transaction en retour.

Depuis, l'écosystème DEX s'est considérablement élargi avec des concurrents comme SushiSwap (fork de Uniswap avec tokenomics différent), Curve Finance (spécialisé dans les stablecoins), et Balancer (pools avec ratios personnalisables). L'origine intellectuelle des AMM remonte aux travaux de Taylor et al. sur les market makers automatisés et aux concepts de Schizo.

## Mécanismes et caractéristiques

Le fonctionnement d'un AMM repose sur des liquidity pools contenant deux tokens (ou plus) dans des proportions qui déterminent le prix. Quand un utilisateur veut échanger du token A contre du token B, il interagit avec le smart contract qui calcule le prix selon la formule mathématique du protocole. Le prix s'ajuste en fonction de l'offre et de la demande dans le pool.

Le prix d'échange dans un AMM dépend de la quantité de chaque token dans le pool. Plus on achète un token, plus son prix augmente dans le pool (et inversement pour le token vendu). C'est ce qu'on appelle le slippage, qui est d'autant plus important que la taille de la transaction est grande par rapport à la liquidité du pool.

Les liquidity providers (LP) sont des utilisateurs qui déposent leurs tokens dans les pools pour gagner des frais. Quand quelqu'un échange des tokens, une commission (généralement 0,3%) est distribuée proportionnellement aux Parts de chaque LP dans le pool. Ces revenus compensent partiellement le risque de impermanent loss.

Les frais de gaz sur Ethereum ont été un obstacle majeur pour les DEX. Chaque échange nécessite une transaction on-chain, ce qui peut rendre les small trades économiquement non viables. Les Layer 2 comme Arbitrum, Optimism et zkSync ont émergé pour résoudre ce problème en offrant des transactions moins coûteuses.

## Nuances, critiques, limites

La fragmentation de la liquidité entre múltiples DEX et chaînes pose un problème majeur. Un même actif peut avoir des prix différents sur Uniswap, SushiSwap, et Curve. Cette fragmentation réduit l'efficacité du prix et crée des opportunités d'arbitrage, mais aussi de la confusion pour les utilisateurs.

Les risques de smart contract sont omniprésents. Même les protocoles les plus audités peuvent contenir des vulnérabilités. En 2021, des attaques ont exploité des bugs dans plusieurs DEX, causant des pertes de millions de dollars. Les utilisateurs doivent faire preuve de diligence raisonnable avant de faire confiance à un protocole.

La dépendance aux bridges pour le cross-chain ajoute une couche de risque supplémentaire. Les bridges ont été cibles d'attaques massives (Wormhole, Ronin) qui ont.resulté en pertes de centaines de millions de dollars. La sécurité des actifs cross-chain reste un défi non résolu.

L'expérience utilisateur des DEX reste inférieure à celle des CEX. Les gas fees variables, la complexité des wallets, et les délais de confirmation blockchain rebutent de nombreux utilisateurs. Les DEX aggregators tentent de résoudre ce problème en findant le meilleur prix across múltiples sources.

## Liens et implications

Les DEX sont intimement liés aux [[Automated Market Makers (AMM)]] qui constituent leur mécanisme de pricing principal. Les [[liquidity pools]] sont le cœur opérationnel des AMM, permettant aux utilisateurs de fournir des liquidités et de gagner des frais.

Le [[market making]] sur DEX diffère fondamentalement du market making sur CEX. Les [[DEX market making]] attirent des stratégies spécifiques comme le liquidity provision et le yield farming. Les [[liquidity incentives]] des protocoles encouragent la participation.

Les [[cross-chain bridges]] permettent aux DEX d'opérer à travers múltiples chaînes, mais introduisent des risques de sécurité. Le [[slippage]] et la [[price impact]] sont des concepts critiques pour les traders sur DEX. Les [[flash loans]] sont souvent utilisés pour l'arbitrage sur DEX.

## Sources

[^1]: Uniswap Protocol, "How Uniswap Works", https://docs.uniswap.org (consulted 2026)
[^2]: Angelist, "The Rise of Decentralized Exchanges", https://angel.co (consulted 2026)
[^3]: Vitalik Buterin, "On Decentralized Exchange and Prediction Markets", https://vitalik.ca (consulted 2026)
