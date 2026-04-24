---
titre: "Cross-chain arbitrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: web-checked
sources_count: 3
tags: [#concept/cross-chain, #concept/arbitrage, #concept/defi]
créé: 2026-04-21
liens_forts: ["[[Arbitrage]]", "[[Cross-chain bridges]]", "[[Flash loans]]", "[[Layer 2 scaling]]", "[[MEV (Miner Extractable Value)]]"]
liens_opposition: []
---

# Cross-chain arbitrage

> [!info] Résumé
> L'arbitrage cross-chain exploite les différences de prix d'un même actif entre différentes blockchains. Ces stratégies utilisent des bridges pour-transferer des fonds entre chaînes et capturent les inefficiences de prix qui existent à travers l'écosystème crypto fragmenté.

## Définition

L'arbitrage cross-chain est une stratégie qui cherche à Profit des différences de prix d'un même actif sur diferentes chaînes de blocs. Par exemple, si ETH se trade à 2000 USD sur Ethereum mainnet mais à 2010 USD sur Arbitrum, un arbitragiste peut acheter sur mainnet et vendre sur Arbitrum.

Le processus typique implique :
1. Identifier une différence de prix entre deux chaînes
2. Acheter l'actif sur la chaîne où le prix est bas
3. Utiliser un bridge pour-transferer l'actif vers l'autre chaîne
4. Vendre l'actif où le prix est haut
5. Optionally, return to the original chain to repeat

Cette stratégie est plus complexe que l'arbitrage intra-chain car elle implique des délais de bridge, des coûts de transaction additionnels, et des risques de slippage sur plusieurs chaînes.

Les bots d'arbitrage cross-chain doivent gérer plusieurswallets sur diferentes chaînes, surveiller les prix en temps réel, et avoir accès aux bridges avec suffisamment de liquidité.

## Contexte et origine

L'arbitrage cross-chain a emergé avec la multiplication des Layer 2 et des chaînes alternatives après 2020. Quand Arbitrum et Optimism ont lancé, les prix des actifs ont parfois differé significativement entre ces chaînes et Ethereum mainnet.

Les bridges comme Wormhole, Ronin, et Multichain ont rendu possible le transfert d'actifs entre chaînes, créant les conditions pour l'arbitrage cross-chain. Cependant, les délais et les coûts de bridge mangent une partie des profits.

Les opportunités d'arbitrage cross-chain sont généralement plus importantes que intra-chain car la fragmentation est plus grande. Cependant, les risques sont aussi plus élevés car les prix peuvent bouger pendant le délai de bridge.

## Mécanismes et caractéristiques

Les composants d'une stratégie cross-chain :

Prix monitoring : Les bots scannent les prix sur múltiples chaînes simultanément via des RPC nodes ou des indexeurs comme The Graph.

Décision : Si le spread entre chaînes dépasse les coûts de transaction (gaz + bridge + slippage), la stratégie est exécutée.

Bridge selection : Différents bridges ont différents délais et coûts. Hop, Across, et Stargate sont populaire among arbitrage bots.

Execution : L'arbitragiste exécute les transactions sur les deux chaînes aussi simultanément que possible.

Les coûts à considérer :
- Gaz sur chaque chaîne
- Frais du bridge (typiquement 0,01% à 0,1%)
- Slippage sur chaque exchange
- Délai de finalité du bridge

## Nuances, critiques, limites

Le délai de bridge est le principal défi. Si le prix change significativement pendant le transfert, l'arbitragiste peut se retrouver avec une perte. Certaines chaînes ont des délais de finalité de plusieurs jours.

Les risques de bridge sont majeurs. Les bridges ont été cibles de hacks massifs (Wormhole, Ronin). L'arbitragiste peut perdre tous les fonds transférés si le bridge est compromis.

La concurrence s'est intensifiée. Avec la profesSionalisation du space, les bots cross-chain sont de plus en plus sophistiqués, réduisant les marges disponibles.

## Liens et implications

Le [[cross-chain arbitrage]] est une forme d'[[arbitrage]] qui utilise les [[cross-chain bridges]]. Les [[flash loans]] cross-chain sont une évolution récente. Les [[Layer 2 scaling|Layer 2]] créent des opportunités d'arbitrage avec Ethereum mainnet.

Les [[DEX aggregators]] peuvent intégrer des stratégies cross-chain. La [[gas optimization]] est importante sur chaque chaîne. Le [[slippage]] doit être géré sur plusieurs pools.

Le [[risk-reward ratio]] des stratégies cross-chain inclut les risques de bridge. Le [[backtesting]] est complexe en raison des délais. La [[volatility scaling]] affecte les opportunités.

## Sources

[^1]: Wormhole Documentation, "Cross-Chain Transfers", https://wormhole.com (consulted 2026)
[^2]: Messari, "Cross-Chain Arbitrage", https://messari.io (consulted 2026)
[^3]: Vitalik Buterin, "Chain Interoperability", https://vitalik.ca (consulted 2026)
