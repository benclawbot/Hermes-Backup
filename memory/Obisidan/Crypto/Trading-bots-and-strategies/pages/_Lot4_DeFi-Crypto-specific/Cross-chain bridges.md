---
titre: "Cross-chain bridges"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/bridge, #concept/cross-chain, #concept/defi]
créé: 2026-04-21
liens_forts: ["[[Layer 2 scaling]]", "[[Wrapped tokens]]", "[[Arbitrage]]", "[[Decentralized exchanges (DEX)]]", "[[Flash loans]]"]
liens_opposition: []
---

# Cross-chain bridges

> [!info] Résumé
> Les cross-chain bridges sont des protocoles permettant de transférer des actifs et des données entre différentes blockchains. Ces bridges sont essentiels pour l'interopérabilité de l'écosystème crypto mais ont été cibles de piratages massifs.

## Définition

Un cross-chain bridge est un protocole qui permet la communication et le transfert d'actifs entre deux blockchains distinctes. Le bridge "bridge" (pont) relié deux écosystèmes qui otherwise ne peuvent pas communiquer nativement.

Le transfert d'actifs entre chaînes peut se faire de plusieurs manières :
- Lock and mint : les tokens sur la chaîne source sont verrouillés et des tokens equivalents sont mintés sur la chaîne cible
- Burn and mint : les tokens sont brûlés sur la source et mintés sur la cible
- Atomic swap : échange direct de tokens entre chaînes via HTLC

Les bridges peuvent êtreunidirectionnels (une seule direction) ou bidirectionnels. Ils peuvent être trustless (basés sur des smart contracts), federated (basés sur un consortium de	validateurs), ou centralized (basés sur une entité unique).

Les bridges les plus utilisés incluent Wormhole (entre Ethereum et Solana entre autres), Ronin Bridge (pour Axie Infinity), et les bridges officiels des rollups Ethereum comme Arbitrum et Optimism.

## Contexte et origine

L'origine des bridges remonte aux atomic swaps proposés par Tier Nolan en 2013, qui permettaient des échanges peer-to-peer entre chaînes sans intermediary. Cependant, les atomic swaps sont restés poco utilisés en raison de leur complexité.

Le premier bridge majeur fut Multichain (anciennement Anyswap) en 2020, permettant de relier Ethereum à d'autres chaînes EVM. Ensuite, les bridges de couche 2 comme les rollup bridges sont devenus essentiels pour la scalabilité Ethereum.

L'explosion des bridges cross-chain s'est produite avec le multi-chain DeFi summer de 2021-2022. Les utilisateurs voulaient accéder aux applications sur différentes chaînes sans acheter des tokens sur chaque chaîne.

Les hacks de bridges sont devenus tristement célèbres. Ronin Bridge (2022, 625M$), Wormhole (2022, 320M$), et Nomad (2022, 190M$) ont été parmi les plus grands hacks crypto de l'histoire.

## Mécanismes et caractéristiques

Les trustless bridges utilisent des smart contracts sur les deux chaînes avec un mécanisme de vérification. Le flow typique :

1. L'utilisateur dépose des tokens sur le smart contract de la chaîne source
2. Un événement (event) est émis par le smart contract
3. Des prouveurs (relayers) transmettent la preuve à la chaîne cible
4. Le smart contract de la chaîne cible libère les tokens correspondants

Les bridges basés sur des validateurs fédérés utilisent un consortium de nœuds qui doivent signer les transactions cross-chain. Plus le nombre de validateurs est grand, plus le bridge est sécurisé, mais plus le processus est lent.

Les bridges de rollup (pour Layer 2) utilisent des proofs on-chain de l'état du rollup. Lesbridge de deposit/withdrawal sont natifs au protocole de rollup et considéré comme plus sécurisés.

Les risques principaux :
- Risque de smart contract sur l'une ou l'autre chaîne
- Risque de centralisation si few validateurs
- Risque de piratage du bridge
- Risque de congestion blockchain causing delays

## Nuances, critiques, limites

La sécurité des bridges est leur talon d'Achille. Même si les blockchains sous-jacentes sont sécurisées, les bridges ajoutent une couche d'attaque. Les pirates ciblent les bridges car ils détiennent souvent des billions de dollars d'actifs.

La réglementation des bridges cross-chain est incertaine. Certaines juridictions pourraient considérer que les bridges sont des services de transfert d'argent nécessitant des licenses. Cela pourrait affecter l'adoption.

Les délais de finalité differents entre chaînes peuvent créer des risques. Certains bridges ont des délais de quelques minutes, d'autres de plusieurs jours. Les utilisateurs doivent comprendre ces délais avant d'utiliser un bridge.

## Liens et implications

Les [[cross-chain bridges]] sont essentiels pour les stratégies d'[[arbitrage]] cross-chain. Les [[wrapped tokens]] sont créés via ces bridges. Les [[flash loans]] cross-chain sont une évolution récente.

Les [[Layer 2 scaling]] protocoles utilisent des bridges natifs pour deposit et withdrawal. Les [[Decentralized exchanges (DEX)]] peuvent opérer via des bridges cross-chain. Les [[DeFi lending protocols]] peuvent supporter des actifs cross-chain.

Le [[slippage]] et la [[price impact]] peuvent différer entre chaînes pour le même actif. La [[gas optimization]] est importante pour les transactions bridge. Le [[backtesting]] de stratégies cross-chain doit inclure les délais et coûts de bridge.

## Sources

[^1]: Wormhole Documentation, "How Wormhole Works", https://wormhole.com (consulted 2026)
[^2]: Vitalik Buterin, "Chain Interoperability", https://vitalik.ca (consulted 2026)
[^3]: Rekt News, "Bridge Hacks", https://rekt.news (consulted 2026)
