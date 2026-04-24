---
titre: "Arbitrum"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/arbitrum, #concept/layer-2, #concept/ethereum]
créé: 2026-04-21
liens_forts: ["[[Layer 2 scaling]]", "[[Optimism]]", "[[zkSync]]", "[[Gas optimization]]", "[[Decentralized exchanges (DEX)]]"]
liens_opposition: []
---

# Arbitrum

> [!info] Résumé
> Arbitrum est un Optimistic Rollup qui extend Ethereum en exécutant les transactions off-chain et en stockant les résultats sur la chaîne principale. C'est actuellement le Layer 2 avec la plus grande TVL (Total Value Locked).

## Définition

Arbitrum est un Optimistic Rollup developed by Offchain Labs, lancé en 2021. Il permet aux applications Ethereum de fonctionner avec des coûts de transaction considérablement réduits et un débit beaucoup plus élevé.

Le protocole utilise une machine virtuelle appelée AVM (Arbitrum Virtual Machine) qui est compatible avec l'EVM. Les smart contracts Ethereum peuvent être déployés sur Arbitrum avec peu ou pas de modifications.

Comme autres Optimistic Rollups, Arbitrum publie's les résultats des transactions sur Ethereum mais traite les calculs off-chain. Une période de contestation permet aux validateurs de contester les transactions invalides.

Les caractéristicas principales :
- TVL : le plus grand rollup Ethereum
- TPS : jusqu'à 4 000 transactions
- Coût : 10-50× moins cher que Ethereum mainnet
- EVM Compatibility : Compatibilité totale
- Langage de smart contracts : Solidity, Vyper

## Contexte et origine

Offchain Labs a fondé Arbitrum en 2018, lançant le mainnet en mai 2021. L'équipe comprenait Ed Felten, Steven Goldfeder, et Harry Kalodner, des chercheurs de Princeton.

Arbitrum a rapidement become the Layer 2 dominant en termes de TVL, attirant des protocoles majeurs comme Uniswap, SushiSwap, et Aave. Cette adoption massive a démontré la demande pour des solutions de scaling.

En 2023, Arbitrum a lancé son token ARB pour la gouvernance décentralisée. Les détenteurs peuvent voter sur les proposals d'upgrade et lesパラメータs du protocole.

## Mécanismes et caractéristiques

Le fonctionnement d'Arbitrum est similaire aux autres Optimistic Rollups :

1. Les transactions sont exécutées par le sequencer
2. Les résultats sont grouped en batches et publiés sur Ethereum
3. Une période de contestation permet de soumettre des "fraud proofs"
4. Les assertions invalidés sont rejetées et le state correct est appliqué

Les "anytrust" chains d'Arbitrum offrent une alternative où un comité de confiance des opérateurs garantit la disponibilité des données, permettant des coûts encore plus bas.

Le mécanisme de gouvernance ARB permet aux détenteurs de voter sur :
- Upgrades du protocole
- paramètres de sécurité
- Distribution des funds du trésor

## Nuances, critiques, limites

La période de withdrawal de 7 jours est un inconveniente pour certains cas d'utilisation. Cependant, des bridges comme Hop et Across offrent des liquidity previews qui permettent des transferts plus rapides.

La decentralization du sequencer est en cours. Currently, Offchain Labs opère le sequencer, ce qui crée un risque de centralisation. La communauté travaille à rendre le sequencer plus décentralisé.

L'écosystème Arbitrum est très concentré. Si le sequencer ou un élément central échoue, de nombreux protocoles pourraient être affectés.

## Liens et implications

[[Arbitrum]] est un [[Layer 2 scaling]] Optimistic Rollup. Il compete avec [[Optimism]] et [[zkSync]]. Les [[Decentralized exchanges (DEX)]] ont déployé des versions sur Arbitrum.

Les [[gas optimization|couts de gaz]] sur Arbitrum sont bien inférieurs à Ethereum mainnet. Les [[flash loans]] sont disponibles. Le [[yield farming]] sur Arbitrum est populaire grâce aux faibles coûts.

Le [[risk-reward ratio]] des stratégies Arbitrum doit considerer les délais de withdrawal. Le [[backtesting]] nécessite des données spécifiques à Arbitrum. Les [[staking rewards]] ARB peuvent être obtenus via le staking.

## Sources

[^1]: Arbitrum Documentation, "How Arbitrum Works", https://docs.arbitrum.io (consulted 2026)
[^2]: Offchain Labs, "Arbitrum Architecture", https://offchainlabs.com (consulted 2026)
[^3]: DeFi Llama, "Arbitrum TVL", https://defillama.com (consulted 2026)
